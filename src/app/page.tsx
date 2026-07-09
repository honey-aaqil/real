"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Compass,
  BookOpen,
  Calendar,
  Phone,
  MessageCircle,
  Percent,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SchemaMarkup from "@/components/SchemaMarkup";
import Marquee from "@/components/motion/Marquee";
import CuriosityGapApertureLoop from "@/components/motion/CuriosityGapApertureLoop";
import TestimonialCarousel3D from "@/components/TestimonialCarousel3D";
import BrandLockup from "@/components/BrandLockup";
import CommunityTriptych from "@/components/CommunityTriptych";
import { getFeaturedCommunities } from "@/data/communities";

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

          {/* Compliance: firm identification within the first viewport */}
          <div className="cinema-brand-badge">
            <BrandLockup variant="hero" />
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

      {/* ═══ SECTION 1: WHY WORK WITH US ═══ */}
      <section className="section-luxury-padding section-alt" style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "var(--space-2xl)" }}>
            {/* Left Column: Bold Editorial Visual Pull-Quote */}
            <div style={{ borderLeft: "2px solid var(--clr-accent)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--clr-white)", fontStyle: "italic", lineHeight: "1.3" }}>
                &quot;The on-site agent works for the builder. We work for you. Same house, same price ceiling — a very different outcome.&quot;
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--clr-accent)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                — Independent Advocacy Principle
              </p>
            </div>

            {/* Right Column: Detailed Editorial Copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="section-index">01 — Why DR Horton</div>
              <h2 className="luxury-title-glow" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: "1.2", marginTop: "0.25rem" }}>
                Why Buyers Work With Us Instead of the Builder&apos;s On-Site Agent
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", color: "var(--clr-gray-300)", fontSize: "0.9375rem", lineHeight: "1.75" }}>
                <p>
                  When you walk into a D.R. Horton community, the smiling agent at the model home works for D.R. Horton. Their job is to get the builder the best deal — not you. They&apos;re not going to tell you which upgrades are overpriced, which incentives you could be negotiating harder for, or what similar buyers in that same community paid last month.
                </p>
                <p style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--clr-accent)", fontFamily: "var(--font-heading)", margin: "0.25rem 0" }}>
                  We do.
                </p>
                <p>
                  We represent you inside D.R. Horton communities — reviewing your contract, pushing on closing-cost credits and upgrade pricing, and flagging anything that favors the builder over you. And because D.R. Horton pays buyer-agent commissions as part of their standard process, this costs you nothing. You get an advocate in a room that was built without one, at no cost to add one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOWN SELECTOR GRID ═══ */}
      <section id="selector-grid" className="section-luxury-padding">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-index">02 — The Markets</div>
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

      {/* ═══ FEATURED COMMUNITIES — SMOOTH CAROUSEL ═══ */}
      <section className="section section-alt" style={{ borderTop: "1px solid var(--clr-gray-200)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-2xl)", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-index">03 — Communities</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginTop: "0.25rem" }}>Featured Communities</h2>
              <p style={{ marginTop: "0.5rem" }}>Handpicked neighborhoods offering exceptional value, incentives, and schools.</p>
            </div>
            <Link href="/new-homes" className="btn btn-outline">
              See All Communities <ArrowRight size={16} />
            </Link>
          </div>

          <CommunityTriptych items={featured} images={featuredImages} />

          {/* Dynamic Incentives Block */}
          <div 
            className="luxury-border-glow" 
            data-reveal 
            style={{ 
              borderRadius: "var(--radius-xl)", 
              background: "radial-gradient(ellipse 80% 80% at 100% 0%, rgba(201,169,97,0.08) 0%, transparent 60%), linear-gradient(145deg, #121315 0%, #08090A 100%)",
              overflow: "hidden",
              position: "relative"
            }}
          >
            {/* Elegant Top-Right Gold Accent Keyline */}
            <div className="luxury-glow-keyline luxury-glow-keyline-h" />
            <div className="luxury-glow-keyline luxury-glow-keyline-v" />

            <div className="luxury-incentives-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
                <div>
                  <span className="badge badge-accent" style={{ marginBottom: "0.5rem", letterSpacing: "clamp(0.06em, 1.2vw, 0.12em)", textTransform: "uppercase", fontSize: "clamp(0.625rem, 2.6vw, 0.75rem)", padding: "clamp(0.3rem, 1.4vw, 0.35rem) clamp(0.6rem, 3vw, 0.85rem)" }}>
                    Current Builder Promotions
                  </span>
                  <h3 style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.25rem)", color: "var(--clr-white)", fontFamily: "var(--font-heading)", lineHeight: "1.25", marginTop: "0.25rem" }}>
                    D.R. Horton Live <span style={{ color: "var(--clr-accent)" }}>Financial Incentives</span>
                  </h3>
                  <p style={{ fontSize: "clamp(0.8125rem, 3.2vw, 0.9375rem)", color: "var(--clr-gray-300)", lineHeight: "1.7", marginTop: "0.5rem" }}>
                    This month features competitive 30-year fixed rate lock programs via DHI Mortgage, plus up to $10,000 in closing cost assistance on select move-in ready homes. USDA zero-down programs available in eligible exurban neighborhoods.
                  </p>
                </div>

                {/* Mobile-Only Horizontal Stats Capsule */}
                <div className="mobile-stats-bar">
                  <div className="mobile-stat-item">
                    <div className="mobile-stat-val">5.49%</div>
                    <div className="mobile-stat-lbl">30-Yr Fixed</div>
                  </div>
                  <div className="mobile-stat-item">
                    <div className="mobile-stat-val">$10K</div>
                    <div className="mobile-stat-lbl">Closing Aid</div>
                  </div>
                  <div className="mobile-stat-item">
                    <div className="mobile-stat-val">$0 Down</div>
                    <div className="mobile-stat-lbl">USDA areas</div>
                  </div>
                </div>

                {/* Mobile-Only CTA Button */}
                <div className="mobile-only" style={{ marginTop: "0.25rem" }}>
                  <Link href="/financing" className="btn btn-accent btn-lg" style={{ textAlign: "center", display: "block", width: "100%" }}>
                    Request Rate Concessions <ArrowRight size={14} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} />
                  </Link>
                </div>

                {/* Micro-Infographic Stats Grid (Desktop Only) */}
                <div className="micro-stats-grid">
                  <div style={{ border: "1px solid rgba(201, 169, 97, 0.12)", borderRadius: "var(--radius-lg)", padding: "0.75rem", background: "rgba(18, 19, 22, 0.4)", backdropFilter: "blur(8px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--clr-accent)", marginBottom: "0.25rem" }}>
                      <TrendingDown size={14} />
                      <span style={{ fontSize: "0.6875rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--clr-gray-400)" }}>Promo Rate</span>
                    </div>
                    <div style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--clr-white)", fontFamily: "var(--font-heading)" }}>5.49%</div>
                    <div style={{ fontSize: "0.6875rem", color: "var(--clr-gray-400)", marginTop: "0px" }}>30-Yr Fixed Lock</div>
                  </div>

                  <div style={{ border: "1px solid rgba(201, 169, 97, 0.12)", borderRadius: "var(--radius-lg)", padding: "0.75rem", background: "rgba(18, 19, 22, 0.4)", backdropFilter: "blur(8px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--clr-accent)", marginBottom: "0.25rem" }}>
                      <Percent size={14} />
                      <span style={{ fontSize: "0.6875rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--clr-gray-400)" }}>Closing Aid</span>
                    </div>
                    <div style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--clr-white)", fontFamily: "var(--font-heading)" }}>$10K</div>
                    <div style={{ fontSize: "0.6875rem", color: "var(--clr-gray-400)", marginTop: "0px" }}>Select Quick Move-Ins</div>
                  </div>

                  <div style={{ border: "1px solid rgba(201, 169, 97, 0.12)", borderRadius: "var(--radius-lg)", padding: "0.75rem", background: "rgba(18, 19, 22, 0.4)", backdropFilter: "blur(8px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--clr-accent)", marginBottom: "0.25rem" }}>
                      <ShieldCheck size={14} />
                      <span style={{ fontSize: "0.6875rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--clr-gray-400)" }}>Exurban</span>
                    </div>
                    <div style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--clr-white)", fontFamily: "var(--font-heading)" }}>$0 Down</div>
                    <div style={{ fontSize: "0.6875rem", color: "var(--clr-gray-400)", marginTop: "0px" }}>USDA Qualifying Areas</div>
                  </div>
                </div>
              </div>

              {/* Sophisticated CTA Panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", padding: "1.25rem", borderRadius: "var(--radius-lg)", border: "1px solid rgba(201, 169, 97, 0.15)", background: "rgba(18, 18, 22, 0.55)", backdropFilter: "blur(12px)", position: "relative" }}>
                {/* Micro-glow beneath the button */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120px", height: "120px", background: "rgba(201, 169, 97, 0.04)", borderRadius: "100%", filter: "blur(40px)", pointerEvents: "none" }} />
                
                <h4 style={{ fontSize: "1.125rem", color: "var(--clr-white)", fontWeight: "500" }}>Incentive Advocacy Program</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--clr-gray-300)", lineHeight: "1.5" }}>
                  Don&apos;t walk into builder negotiations unrepresented. Our team provides 100% free buyer advocacy to secure maximum concessions and lock programs.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.75rem", marginBottom: "0.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", color: "var(--clr-gray-300)" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--clr-accent)" }} />
                    DHI Mortgage Rate-Lock Coordination
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", color: "var(--clr-gray-300)" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--clr-accent)" }} />
                    Independent Structural Quality Audits
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", color: "var(--clr-gray-300)" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--clr-accent)" }} />
                    Professional Fee Covered by Builder
                  </div>
                </div>

                <Link href="/financing" className="btn btn-accent btn-lg" style={{ textAlign: "center", display: "block" }}>
                  Request Rate Concessions <ArrowRight size={14} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} />
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
            <div className="section-index">04 — Client Stories</div>
            <h2>Buyer Success Stories</h2>
            <p>Read experiences from families who successfully bought D.R. Horton homes with our free representation.</p>
          </div>

          <TestimonialCarousel3D />
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
