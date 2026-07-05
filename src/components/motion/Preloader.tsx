"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * Cinematic entrance veil. Server-renders opaque (so there is never a flash
 * of unstyled page), plays the full sequence on first visit per session,
 * and dissolves quickly on repeat visits.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = sessionStorage.getItem("sp-intro-seen");
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      };
      const conn = nav.connection;
      const isSlowConnection =
        conn?.saveData || ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
      document.documentElement.style.overflow = "hidden";

      const finish = () => {
        document.documentElement.style.overflow = "";
        setDone(true);
      };

      if (seen || reduced || isSlowConnection) {
        gsap.to(root, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut", onComplete: finish });
        return;
      }
      sessionStorage.setItem("sp-intro-seen", "1");

      const letters = root.querySelectorAll(".preloader-brand span");
      const counter = { v: 0 };
      const counterEl = root.querySelector(".preloader-counter");

      const tl = gsap.timeline({ onComplete: finish });
      tl.from(letters, {
        yPercent: 130,
        duration: 0.9,
        stagger: 0.045,
        ease: "power4.out",
      })
        .from(".preloader-rule", { scaleX: 0, duration: 0.9, ease: "power3.inOut" }, 0.2)
        .from(".preloader-tag", { autoAlpha: 0, y: 12, duration: 0.6, ease: "power2.out" }, 0.6)
        .to(
          counter,
          {
            v: 100,
            duration: 1.3,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterEl) counterEl.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0.2
        )
        .to(root.querySelector(".preloader-inner"), { autoAlpha: 0, y: -24, duration: 0.45, ease: "power2.in" }, "+=0.15")
        .to(root, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.85,
          ease: "power4.inOut",
        });
    },
    { scope: rootRef }
  );

  if (done) return null;

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-brand" aria-label="DR Horton NC">
          {"DR HORTON".split("").map((ch, i) => (
            <span key={i}>{ch === " " ? " " : ch}</span>
          ))}
          <span className="preloader-brand-accent"> NC</span>
        </div>
        <div className="preloader-rule" />
        <p className="preloader-tag">Independent New-Construction Advocacy · Charlotte &amp; Lake Norman</p>
        <div className="preloader-counter">000</div>
      </div>
    </div>
  );
}
