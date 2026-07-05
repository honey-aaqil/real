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
 *  • Touch:   tapping a panel expands it (others collapse); tapping the open
 *             panel again (or its button) follows through to the community page.
 *  • Detail text is absolutely positioned and cross-fades, so the width change
 *    never reflows type.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Ruler, ArrowRight } from "lucide-react";
import type { Community } from "@/data/communities";

interface CommunityTriptychProps {
  items: (Community & { citySlug: string })[];
  images: string[];
}

export default function CommunityTriptych({ items, images }: CommunityTriptychProps) {
  // No default selection — every panel sits in its equal, unselected state
  // until the pointer is actually over one of them.
  const [active, setActive] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  return (
    <div
      className="ctri"
      data-touch={isTouch ? "true" : "false"}
      onMouseLeave={() => !isTouch && setActive(null)}
    >
      {items.map((community, i) => {
        const href = `/new-homes/${community.citySlug}/${community.slug}/`;
        const isActive = active === i;

        return (
          <Link
            key={community.slug}
            href={href}
            className={`ctri-panel${isActive ? " is-active" : ""}`}
            aria-label={`${community.name} — view community`}
            onMouseEnter={() => !isTouch && setActive(i)}
            onFocus={() => setActive(i)}
            onClick={(e) => {
              // On touch, the first tap expands the panel instead of navigating.
              if (isTouch && !isActive) {
                e.preventDefault();
                setActive(i);
              }
            }}
          >
            <span className="ctri-media" aria-hidden="true">
              <Image
                src={images[i % images.length]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="ctri-img"
                priority={i === 0}
              />
              <span className="ctri-scrim" />
            </span>

            {/* Collapsed label — vertical on desktop, inline on touch */}
            <span className="ctri-label">
              {community.usdaEligible && <span className="ctri-usda">USDA</span>}
              <span className="ctri-label-name">{community.name}</span>
            </span>

            {/* Expanded detail — cross-fades in, absolutely positioned (no reflow) */}
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
              <span className="ctri-cta">
                View Community <ArrowRight size={16} />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
