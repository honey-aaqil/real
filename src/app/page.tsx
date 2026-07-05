"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Compass,
  Star,
  BookOpen,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SchemaMarkup from "@/components/SchemaMarkup";
import Marquee from "@/components/motion/Marquee";
import CuriosityGapApertureLoop from "@/components/motion/CuriosityGapApertureLoop";
import { getFeaturedCommunities } from "@/data/communities";
import CommunityCard from "@/components/CommunityCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// The 11 North Carolina Markets in a unified flat array
const towns = [
  { name: "Charlotte", slug: "charlotte-nc", price: "$310K+", count: 6, active: true },
  { name: "Ballantyne", slug: "ballantyne-nc", price: "$450K+", count: 2, active: true },
  { name: "Concord", slug: "concord-nc", price: "$310K+", count: 1, active: true },
  { name: "Indian Trail", slug: "indian-trail-nc", price: "$325K+", count: 1, active: true },
  { name: "Huntersville", slug: "huntersville-nc", price: "$418K+", count: 1, active: true },
  { name: "Mooresville", slug: "mooresville-nc", price: "$319K+", count: 2, active: true },
  { name: "Denver", slug: "denver-nc", price: "$350K+", count: 1, active: true },
  { name: "Troutman", slug: "troutman-nc", price: "$299K+", count: 3, active: true },
  { name: "Sherrills Ford", slug: "sherrills-ford-nc", price: "$295K+", count: 2, active: true },
  { name: "Statesville", slug: "statesville-nc", price: "$408K+", count: 1, active: true },
  { name: "Lincolnton", slug: "lincolnton-nc", price: "$306K+", count: 2, active: true },
];

const marqueeTowns = towns.map((t) => t.name);

// Real photography for the featured gallery, cycled across cards
const featuredImages = [
  "/images/exterior.png",
  "/images/interior.png",
  "/images/pool.png",
  "/images/detail.png",
];

export default function HomePage() {
  const featured = getFeaturedCommunities();
  const [guideEmail, setGuideEmail] = useState("");
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    /* Only genuinely poor connections skip the hero video — Chrome's Data
       Saver toggle is extremely common on Android even on fast Wi-Fi/LTE,
       so we don't treat `saveData` alone as a reason to withhold it. */
    const nav = navigator as Navigator & {
      connection?: { effectiveType?: string };
    };
    const conn = nav.connection;
    const isSlowConnection = ["slow-2g", "2g"].includes(conn?.effectiveType ?? "");

    if (heroVideoRef.current && !isSlowConnection) {
      const video = heroVideoRef.current;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            video.src = "/images/hero/lakenorman.mp4";
            video.load();
            video.play().catch(() => {});
            io.disconnect();
          }
        },
        { rootMargin: "0px" }
      );
      io.observe(video);
    }

    const mm = gsap.matchMedia();

    /* Hero film: slow push-in while scrolling away + content drift */
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (heroVideoRef.current && heroRef.current) {
        gsap.fromTo(
          heroVideoRef.current,
          { scale: 1 },
          {
            scale: 1.16,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.to(".cinema-hero-content", {
          yPercent: -14,
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "70% top",
            scrub: true,
          },
        });
      }
    });
  });

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guideEmail.trim()) {
      setGuideSubmitted(true);
    }
  };

  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "DR Horton New Homes in North Carolina | Independent Buyer Advocate",
          description: "Browse D.R. Horton new construction homes across North Carolina's 11 key markets. Free independent buyer representation. Lake Norman & Charlotte.",
          url: "https://drhorton-nc-homes.com",
        }}
      />

      {/* ═══ CINEMATIC VIDEO HERO ═══ */}
      <section className="cinema-hero" ref={heroRef}>
        <div className="cinema-hero-media">
          <video
            ref={heroVideoRef}
            className="cinema-hero-video"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
          <div className="cinema-hero-veil" />
        </div>

        <div className="cinema-hero-content">
          <p className="cinema-eyebrow" data-scramble>
            Independent Buyer Advocacy — Charlotte &amp; Lake Norman
          </p>
          <h1 className="cinema-title">
            D.R. Horton Homes,
            <br />
            <em>On Your Terms.</em>
          </h1>
          <p className="cinema-sub">
            We represent buyers inside D.R. Horton communities at no cost to you — the
            builder pays our fee — and we protect your interests the on-site sales agent
            never will.
          </p>
          <div className="cinema-actions">
            <a href="#selector-grid" className="btn btn-primary btn-lg">
              <Compass size={18} /> Explore 11 Markets
            </a>
            <Link href="/why-dr-horton" className="btn btn-outline btn-lg">
              Why Use a Buyer Agent? <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="cinema-hero-foot">
          <Marquee items={marqueeTowns} speed={42} />
        </div>
      </section>

      {/* ═══ ANIMATED STAT STRIP ═══ */}
      <section className="stat-strip">
        <div className="stat-strip-inner">
          <div className="stat-cell">
            <div className="stat-value">
              <span data-count="4.9" data-count-decimals="1">0.0</span>
              <span className="stat-accent">★</span>
            </div>
            <div className="stat-label">Client Rating · 120+ Reviews</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">
              <span data-count="13">0</span>
            </div>
            <div className="stat-label">Active Communities</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">
              <span className="stat-accent">$</span>
              <span data-count="260" data-count-suffix="K">0</span>
            </div>
            <div className="stat-label">New Construction From</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">
              <span data-count="0" data-count-prefix="$">$0</span>
            </div>
            <div className="stat-label">Cost To You — Builder Pays</div>
          </div>
        </div>
      </section>

      {/* ═══ TOWN SELECTOR GRID ═══ */}
      <section id="selector-grid" className="section-luxury-padding">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-index">01 — The Markets</div>
            <h2 className="luxury-title-glow" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
              Select Your Target Market
            </h2>
            <p style={{ fontSize: "1.125rem", marginTop: "0.5rem" }}>
              Explore active D.R. Horton communities, floor plans, and current incentives across our eleven North Carolina markets.
            </p>
          </div>

          <CuriosityGapApertureLoop />
        </div>
      </section>

      {/* ═══ FEATURED COMMUNITIES — STANDARD LUXURY GRID ═══ */}
      <section className="section section-alt" style={{ borderTop: "1px solid var(--clr-gray-200)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-2xl)", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-index">02 — Communities</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginTop: "0.25rem" }}>Featured Communities</h2>
              <p style={{ marginTop: "0.5rem" }}>Handpicked neighborhoods offering exceptional value, incentives, and schools.</p>
            </div>
            <Link href="/new-homes" className="btn btn-outline">
              See All Communities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3" style={{ marginBottom: "var(--space-3xl)" }}>
            {featured.map((community, i) => (
              <CommunityCard
                key={community.slug}
                community={community}
                citySlug={community.citySlug}
                image={featuredImages[i % featuredImages.length]}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Dynamic Incentives Block */}
          <div className="luxury-border-glow" data-reveal style={{ borderRadius: "var(--radius-xl)", padding: "2.5rem", background: "radial-gradient(ellipse 70% 90% at 85% 10%, rgba(201,169,97,0.12) 0%, transparent 60%), linear-gradient(135deg, #16171A 0%, #0E0E10 100%)" }}>
            <div className="responsive-split-auto">
              <div>
                <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
                  Current Builder Promotions
                </span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--clr-white)" }}>
                  D.R. Horton Live Financial Incentives
                </h3>
                <p style={{ fontSize: "0.9375rem" }}>
                  This month features competitive 30-year fixed rate lock programs via DHI Mortgage, plus up to $10,000 in closing cost assistance on select move-in ready homes. USDA zero-down programs available in eligible exurban neighborhoods.
                </p>
              </div>
              <div>
                <Link href="/financing" className="btn btn-accent btn-lg">
                  Request Rate Concessions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUYER'S GUIDE LEAD MAGNET ═══ */}
      <section className="section-luxury-padding section-alt" style={{ borderTop: "1px solid var(--clr-gray-200)", borderBottom: "1px solid var(--clr-gray-200)" }}>
        <div className="container-narrow">
          <div className="lead-form-card">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span className="star-rating-container" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>
                <BookOpen size={20} style={{ color: "var(--clr-primary-light)" }} />
              </span>
              <h3 style={{ fontSize: "1.75rem" }}>
                Get the Construction Insider Guide
              </h3>
              <p style={{ fontSize: "0.875rem" }}>
                Download &quot;7 Things the Builder&apos;s On-Site Agent Won&apos;t Tell You&quot; instantly.
              </p>
            </div>

            {guideSubmitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <span style={{ fontSize: "2rem" }}>📚</span>
                <h4 style={{ marginTop: "0.75rem" }}>Your Guide is On the Way!</h4>
                <p className="text-sm" style={{ marginTop: "0.25rem" }}>Check your inbox. We sent the PDF guide to your email address.</p>
              </div>
            ) : (
              <form onSubmit={handleGuideSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "480px", margin: "0 auto" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="guide-email">
                    Your Email Address
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="guide-email"
                    placeholder="name@domain.com"
                    required
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Instant Access PDF
                </button>
                <p style={{ fontSize: "11px", color: "var(--clr-gray-400)", textAlign: "center" }}>
                  We respect your privacy. No spam. You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF & TESTIMONIALS ═══ */}
      <section className="section-luxury-padding">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-index">03 — Client Stories</div>
            <h2>Buyer Success Stories</h2>
            <p>Read experiences from families who successfully bought D.R. Horton homes with our free representation.</p>
          </div>

          <div className="grid-2">
            <div className="tile" style={{ textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="star-rating-container" style={{ marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontStyle: "italic", color: "var(--clr-navy)", marginBottom: "1.5rem" }}>
                  &quot;We were relocating from Chicago and knew nothing about Lake Norman. We almost walked into a D.R. Horton model home without an agent, but thankfully found this portal first. Our specialist helped us negotiate $8,000 in closing costs, attended our pre-drywall walk, and found framing issues the superintendent had missed. Absolute lifesaver!&quot;
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--clr-gray-200)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h5 style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700 }}>The Henderson Family</h5>
                  <p style={{ fontSize: "0.75rem", color: "var(--clr-gray-400)" }}>Purchased in Mooresville, NC</p>
                </div>
              </div>
            </div>

            <div className="tile" style={{ textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="star-rating-container" style={{ marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontStyle: "italic", color: "var(--clr-navy)", marginBottom: "1.5rem" }}>
                  &quot;First-time buyer here. I was worried about hidden fees, but the buyer agent services were 100% free! My agent helped me choose the right floor plan at Cardinal Creek in Charlotte and was there to protect me at every single walk. The builder sales rep was nice, but it was clear they worked for the builder. Having my own agent was critical.&quot;
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--clr-gray-200)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h5 style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700 }}>Marcus T.</h5>
                  <p style={{ fontSize: "0.75rem", color: "var(--clr-gray-400)" }}>Purchased in Charlotte, NC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOFT-OFFER CALENDLY CTA ═══ */}
      <section className="section-luxury-padding section-alt" style={{ borderTop: "1px solid var(--clr-gray-200)" }}>
        <div className="container-narrow">
          <div className="cta-banner" data-reveal>
            <Calendar size={32} style={{ color: "var(--clr-primary-light)", margin: "0 auto 1rem" }} />
            <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--clr-white)" }}>
              Not Ready to Get a Home List Yet?
            </h3>
            <p style={{ fontSize: "0.9375rem", maxWidth: "560px", margin: "0 auto 2rem" }}>
              Book a low-pressure, free 15-minute relocation strategy call. We can answer questions about school zones, commute times on I-77, or financing options. No sales pitches, just expert local advice.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book My 15-Min Call
              </a>
              <Link href="/contact" className="btn btn-outline">
                Or Message Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STICKY FLOATING TOUCH-OPTIMIZED MOBILE CTA BAR ═══ */}
      <div className="sticky-bottom-cta">
        <div className="mobile-cta-text">
          <h5>DR Horton Specialist</h5>
          <p>Independent Buyer representation</p>
        </div>
        <div className="mobile-cta-buttons">
          <a href="tel:8005550199" className="btn btn-accent btn-sm" style={{ padding: "0.5rem 0.875rem" }}>
            <Phone size={14} /> Call Agent
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm" style={{ padding: "0.5rem 0.875rem" }}>
            <MessageCircle size={14} /> Inquire Free
          </Link>
        </div>
      </div>
    </>
  );
}
