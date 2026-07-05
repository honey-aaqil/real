"use client";

/**
 * 3D coverflow testimonial carousel.
 *
 * Follows the same "smooth over glitchy" rule established elsewhere in this
 * codebase (see CommunityTriptych): every card's position is a plain inline
 * `transform`/`opacity` computed in JS from the active index, and the CSS
 * `transition` on `.tc3d-card` animates between old/new values. Nothing is
 * driven by pointer velocity or per-frame JS, so it never jitters.
 *
 *  • Desktop: center card is flat and full-size; neighbors recede into the
 *    distance at an angle (rotateY + translateZ), coverflow-style.
 *  • Mobile (≤768px): the 3D depth is flattened to a gentler slide — enough
 *    perspective to feel alive without inducing horizontal overflow or
 *    disorientation on small screens. Swipe left/right to navigate.
 *  • Arrow buttons, dot indicators, and keyboard (←/→ when focused) all work
 *    on every breakpoint; only 3 cards render fully — the rest are pushed
 *    off-stage with opacity:0 + pointer-events:none.
 */

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We were relocating from Chicago and knew nothing about Lake Norman. We almost walked into a D.R. Horton model home without an agent, but thankfully found this portal first. Our specialist helped us negotiate $8,000 in closing costs, attended our pre-drywall walk, and found framing issues the superintendent had missed. Absolute lifesaver!",
    name: "The Henderson Family",
    location: "Purchased in Mooresville",
  },
  {
    quote:
      "First-time buyer here. I was worried about hidden fees, but the buyer agent services were 100% free! My agent helped me choose the right floor plan at Cardinal Creek in Charlotte and was there to protect me at every single walk. The builder sales rep was nice, but it was clear they worked for the builder. Having my own agent was critical.",
    name: "Marcus T.",
    location: "Purchased in Charlotte",
  },
  {
    quote:
      "USDA zero-down felt too good to be true until our specialist walked us through eligibility for Troutman step by step. She coordinated directly with DHI Mortgage on our rate lock and caught a missing hose bib on our final walk that the builder fixed before closing.",
    name: "The Alvarez Family",
    location: "Purchased in Troutman",
  },
  {
    quote:
      "I compared three D.R. Horton communities in one afternoon with our agent instead of driving between sales offices myself. He knew which incentives were negotiable and got us $10K in closing cost assistance we didn't even know to ask for.",
    name: "Priya N.",
    location: "Purchased in Huntersville",
  },
  {
    quote:
      "Buying near Lake Norman sight-unseen from out of state was intimidating. Our specialist FaceTimed us through the model home, flagged two communities with better resale positioning, and handled every builder call so we didn't have to.",
    name: "The Coopers",
    location: "Purchased in Sherrills Ford",
  },
];

const N = testimonials.length;

function circularOffset(i: number, active: number) {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

export default function TestimonialCarousel3D() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setIsMobile(mqMobile.matches);
      setReduced(mqReduced.matches);
    };
    sync();
    mqMobile.addEventListener("change", sync);
    mqReduced.addEventListener("change", sync);
    return () => {
      mqMobile.removeEventListener("change", sync);
      mqReduced.removeEventListener("change", sync);
    };
  }, []);

  const go = (dir: 1 | -1) => setActive((prev) => (prev + dir + N) % N);
  const goTo = (i: number) => setActive(((i % N) + N) % N);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    swipeStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipeStart.current.x;
    const dy = t.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
  };

  const cardTransform = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    const dir = offset > 0 ? 1 : -1;

    // Every card is centered via `left:50%` in CSS; since this inline style
    // fully replaces `transform`, the -50% re-centering has to be baked back
    // in here before the offset-specific translate/rotate/scale.
    const center = "translateX(-50%)";

    if (reduced) {
      return {
        transform: `${center} translateX(${offset * 102}%)`,
        opacity: abs === 0 ? 1 : 0,
        zIndex: abs === 0 ? 5 : 1,
        pointerEvents: abs === 0 ? "auto" : "none",
      };
    }

    if (abs === 0) {
      return { transform: `${center} translate3d(0,0,0) rotateY(0deg) scale(1)`, opacity: 1, zIndex: 5, pointerEvents: "auto" };
    }

    if (abs === 1) {
      const x = isMobile ? 72 : 58;
      const rotate = isMobile ? 18 : 32;
      const z = isMobile ? -60 : -160;
      return {
        transform: `${center} translate3d(${dir * x}%,0,${z}px) rotateY(${-dir * rotate}deg) scale(0.82)`,
        opacity: isMobile ? 0.35 : 0.55,
        zIndex: 3,
        pointerEvents: "auto",
      };
    }

    // Anything farther out is staged off to the side, invisible and inert.
    return {
      transform: `${center} translate3d(${dir * 100}%,0,-260px) rotateY(${-dir * 40}deg) scale(0.65)`,
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  };

  return (
    <div className="tc3d">
      <div
        className="tc3d-stage"
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Buyer success stories"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {testimonials.map((t, i) => {
          const offset = circularOffset(i, active);
          const isActive = offset === 0;
          return (
            <article
              key={t.name}
              className="tc3d-card"
              style={cardTransform(offset)}
              aria-hidden={!isActive}
              onClick={() => !isActive && goTo(i)}
            >
              <Quote className="tc3d-quote-icon" size={28} aria-hidden="true" />
              <div className="star-rating-container" style={{ marginBottom: "1rem" }}>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="tc3d-quote">&quot;{t.quote}&quot;</p>
              <div className="tc3d-attrib">
                <h5>{t.name}</h5>
                <p>{t.location}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="tc3d-controls">
        <button type="button" className="tc3d-nav" onClick={() => go(-1)} aria-label="Previous story">
          <ChevronLeft size={18} />
        </button>
        <div className="tc3d-dots" role="tablist" aria-label="Select a story">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={`tc3d-dot${i === active ? " is-active" : ""}`}
              role="tab"
              aria-selected={i === active}
              aria-label={`Story ${i + 1} of ${N}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="tc3d-nav" onClick={() => go(1)} aria-label="Next story">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
