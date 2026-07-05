"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Gold dot + lagging ring cursor accent (fine pointers only).
 * The native cursor stays visible — this is a layer of craft,
 * not a usability tax. Ring expands over interactive elements.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduced) {
      setTimeout(() => setEnabled(true), 0);
    }
  }, []);

  useEffect(() => {
    if (!enabled || !dotRef.current || !ringRef.current) return;

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      const interactive = (e.target as HTMLElement).closest?.(
        "a, button, [role='button'], input, select, textarea, .card, .town-card-editorial"
      );
      gsap.to(ringRef.current, {
        scale: interactive ? 1.9 : 1,
        opacity: interactive ? 0.9 : 0.45,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onDown = () => gsap.to(ringRef.current, { scale: 0.75, duration: 0.15, overwrite: "auto" });
    const onUp = () => gsap.to(ringRef.current, { scale: 1, duration: 0.3, overwrite: "auto" });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
