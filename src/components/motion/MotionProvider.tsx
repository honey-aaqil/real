"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin);

/**
 * Global motion engine. Wraps all scrollable content and provides:
 *  - ScrollSmoother lerp-scroll + data-speed parallax (desktop, fine pointers only)
 *  - Cinematic SplitText reveals on every hero headline
 *  - Scroll-triggered reveals for [data-reveal] and common design-system blocks
 *  - Animated counters for [data-count] and scramble-ins for [data-scramble]
 *  - Magnetic pull on .btn elements
 * Everything is rebuilt per route (pathname dependency) and fully reverted on cleanup.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // Set counters immediately to their end values
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const end = parseFloat(el.dataset.count || "0");
          const decimals = parseInt(el.dataset.countDecimals || "0", 10);
          const prefix = el.dataset.countPrefix || "";
          const suffix = el.dataset.countSuffix || "";
          el.textContent = prefix + end.toFixed(decimals) + suffix;
        });
        // Set scramble text immediately
        document.querySelectorAll<HTMLElement>("[data-scramble]").forEach((el) => {
          el.textContent = el.dataset.scrambleText || el.textContent || "";
        });
        return;
      }
      document.documentElement.classList.add("motion-ready");

      const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 1025px)").matches;

      /* ── 1. Buttery smooth scrolling + parallax (desktop only) ──
         ScrollSmoother is a heavy premium plugin — dynamically imported
         so mobile clients never download or parse its JS. */
      let smoother: import("gsap/ScrollSmoother").ScrollSmoother | null = null;
      let cancelled = false;
      const smootherReady =
        isDesktop && wrapperRef.current && contentRef.current
          ? import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
              if (cancelled || !wrapperRef.current || !contentRef.current) return;
              gsap.registerPlugin(ScrollSmoother);
              smoother = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1.1,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
              });
            })
          : Promise.resolve();

      /* ── 2. Hero headline: per-character mask reveal ── */
      document.querySelectorAll<HTMLElement>(".hero-content h1, .cinema-title").forEach((el) => {
        const split = SplitText.create(el, { type: "words,chars", mask: "words" });
        gsap.from(split.chars, {
          yPercent: 120,
          rotate: 4,
          duration: 1.2,
          stagger: 0.022,
          ease: "power4.out",
          delay: 0.15,
        });
      });
      gsap.from(".hero-content p, .hero-content .btn, .hero-content .hero-badge, .cinema-sub", {
        y: 32,
        autoAlpha: 0,
        duration: 1.1,
        stagger: 0.09,
        delay: 0.55,
        ease: "power3.out",
        clearProps: "all",
      });
      /* No entrance delay for the CTA row — it should be interactive immediately */
      gsap.from(".cinema-actions", {
        y: 32,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        clearProps: "all",
      });

      /* ── 3. Scramble-in technical labels ── */
      document.querySelectorAll<HTMLElement>("[data-scramble]").forEach((el) => {
        const text = el.dataset.scrambleText || el.textContent || "";
        gsap.to(el, {
          scrambleText: { text, chars: "▮▯–—·01", speed: 0.4 },
          duration: 1.4,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      /* ── 4. Scroll reveals — explicit [data-reveal] plus design-system blocks ── */
      const autoTargets = gsap.utils.toArray<HTMLElement>(
        "[data-reveal], .section-header, .tile, .highlight-item, .info-card, .quick-facts, .agent-comp-card, .cta-banner, .lead-form-card, .comparison-table, .grid-cities > *, .grid-amenities > *"
      );
      autoTargets.forEach((el) => {
        if (el.closest(".hgallery-track")) return; // horizontal gallery animates on its own axis
        gsap.from(el, {
          y: 56,
          autoAlpha: 0,
          duration: 1.15,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      /* ── 5. Animated counters ── */
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.countDecimals || "0", 10);
        const prefix = el.dataset.countPrefix || "";
        const suffix = el.dataset.countSuffix || "";
        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = prefix + proxy.v.toFixed(decimals) + suffix;
          },
        });
      });

      ScrollTrigger.refresh();
      smootherReady.then(() => ScrollTrigger.refresh());

      return () => {
        cancelled = true;
        smoother?.kill();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
