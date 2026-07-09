"use client";

/**
 * Community Triptych — a smooth, user-friendly expanding-panel carousel.
 *
 * The earlier version drove panel widths from pointer *velocity* every frame in
 * JS, which made columns jump around (the "glitchy" feel). This version does the
 * opposite: widths are plain CSS `flex-grow` values that the browser transitions
 * on hover (desktop) or tap (touch). No per-frame JS, no layout thrash — the
 * expansion is a single GPU-friendly CSS transition, so it stays buttery.
 *
 *  • Desktop: hovering a panel smoothly expands it and gently collapses the rest.
 *  • Mobile:  a native horizontal scroll-snap carousel — each card shows its
 *             full detail immediately (no tap-to-expand step), swipe to browse,
 *             tap anywhere on a card to open it. Dots below track position and
 *             double as jump-to-card controls.
 *  • Detail text is absolutely positioned and cross-fades, so the width change
 *    never reflows type.
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Ruler, ArrowRight } from "lucide-react";
import BrandLockup from "@/components/BrandLockup";
import type { Community } from "@/data/communities";

interface CommunityTriptychProps {
  items: (Community & { citySlug: string })[];
  images: string[];
}

export default function CommunityTriptych({ items, images }: CommunityTriptychProps) {
  // Desktop hover state — no default selection, every panel sits equal until
  // the pointer is actually over one of them.
  const [active, setActive] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  // Mobile carousel position, used only to drive the dot indicators.
  const [mobileIndex, setMobileIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  // Track which card is centered in the mobile scroller so the dots stay in sync.
  useEffect(() => {
    if (!isTouch) return;
    const track = trackRef.current;
    if (!track) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = panelRefs.current.indexOf(visible.target as HTMLAnchorElement);
          if (idx !== -1) setMobileIndex(idx);
        }
      },
      { root: track, threshold: [0.5, 0.75, 0.95] }
    );
    panelRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isTouch, items.length]);

  const scrollToCard = (i: number) => {
    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="ctri-wrap">
      <div
        className="ctri"
        data-touch={isTouch ? "true" : "false"}
        ref={trackRef}
        onMouseLeave={() => !isTouch && setActive(null)}
      >
        {items.map((community, i) => {
          const href = `/new-homes/${community.citySlug}/${community.slug}/`;
          const isActive = active === i;

          return (
            <Link
              key={community.slug}
              href={href}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className={`ctri-panel${isActive ? " is-active" : ""}`}
              aria-label={`${community.name} — view community`}
              onMouseEnter={() => !isTouch && setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="ctri-media" aria-hidden="true">
                <Image
                  src={images[i % images.length]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 88vw, 60vw"
                  className="ctri-img"
                  priority={i === 0}
                />
                <span className="ctri-scrim" />
              </span>

              {/* Collapsed label — desktop only; mobile always shows the full detail */}
              <span className="ctri-label">
                {community.usdaEligible && <span className="ctri-usda">USDA</span>}
                <span className="ctri-label-name">{community.name}</span>
              </span>

              {/* Full detail — always visible on mobile, cross-fades in on desktop hover */}
              <span className="ctri-detail">
                <span className="ctri-detail-head">
                  <h3 className="ctri-name">{community.name}</h3>
                  <p className="ctri-price">{community.priceRange}</p>
                </span>
                <span className="ctri-specs">
                  <span>
                    <Bed size={14} /> {community.beds} Beds
                  </span>
                  <span>
                    <Bath size={14} /> {community.baths} Baths
                  </span>
                  <span>
                    <Ruler size={14} /> {community.sqftRange}
                  </span>
                </span>
                <span className="ctri-hook">{community.hookLine}</span>
                {/* Compliance: firm attribution rendered on the card itself */}
                <BrandLockup variant="card" />
                <span className="ctri-cta">
                  View Community <ArrowRight size={16} />
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile-only position dots — also act as jump-to-card controls */}
      <div className="ctri-dots" aria-hidden={!isTouch}>
        {items.map((community, i) => (
          <button
            key={community.slug}
            type="button"
            className={`ctri-dot${i === mobileIndex ? " is-active" : ""}`}
            aria-label={`Go to ${community.name}`}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>
    </div>
  );
}
