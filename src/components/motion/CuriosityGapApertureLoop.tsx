"use client";

/**
 * ══════════════════════════════════════════════════════════════════════════════
 *   🧠 THE CURIOSITY-GAP APERTURE LOOP (SECTION 1) — CAROUSEL OPERATION SPEC
 * ══════════════════════════════════════════════════════════════════════════════
 * 
 * 🖥️ DESKTOP VIEWPORT MECHANICS: Clicking-Only & Keyboard Focus
 *   - Clicking card: Directly centers and activates the clicked card.
 *   - Keyboard arrows: [ArrowRight] moves forward, [ArrowLeft] moves backward.
 *   - Chevron buttons: Left/Right gold buttons flanking the timeline axis.
 *   - Foveal Vision: Active card is at 1.0 opacity (full brightness).
 *     Adjacent unselected cards drop to 0.5 opacity. All others drop to 0.2.
 *   - No Drag-to-Slide: Traditional dragging is disabled for strict click clarity.
 * 
 * 📱 MOBILE VIEWPORT MECHANICS: Tactile Swivel Stack Lookbook
 *   - Lookbook Stack: Cards are piled like a physical deck of lookbooks.
 *   - Under-deck peek: Next card is rotated 0° (flat) and offset, peeking out.
 *   - Swipe Right (Forward): Launches card off the top deck in a smooth, physical
 *     upward-curved arc, advancing the active index forward (next card).
 *   - Swipe Left (Backward): Launches card to the left, pulling back the previous
 *     card and returning the active index backward (previous card).
 *   - Multi-Layer Overlay: Exiting card is rendered on a separate, topmost layer
 *     (zIndex 200) and animated via GSAP, while the underlying stack instantly
 *     cycles and smoothly animates its layout simultaneously, completely
 *     eliminating glitches, jumps, or flashing.
 * ══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Structure of our 11 NC Markets
interface Market {
  name: string;
  slug: string;
  code: string;
  image: string;
}

const markets: Market[] = [
  { name: "Charlotte", slug: "charlotte-nc", code: "CLT", image: "/images/exterior.png" },
  { name: "Ballantyne", slug: "ballantyne-nc", code: "BLT", image: "/images/interior.png" },
  { name: "Concord", slug: "concord-nc", code: "CCD", image: "/images/pool.png" },
  { name: "Indian Trail", slug: "indian-trail-nc", code: "ITL", image: "/images/detail.png" },
  { name: "Huntersville", slug: "huntersville-nc", code: "HNT", image: "/images/exterior.png" },
  { name: "Mooresville", slug: "mooresville-nc", code: "LKN", image: "/images/interior.png" },
  { name: "Denver", slug: "denver-nc", code: "DNV", image: "/images/pool.png" },
  { name: "Troutman", slug: "troutman-nc", code: "TRC", image: "/images/detail.png" },
  { name: "Sherrills Ford", slug: "sherrills-ford-nc", code: "SFD", image: "/images/exterior.png" },
  { name: "Statesville", slug: "statesville-nc", code: "SVL", image: "/images/interior.png" },
  { name: "Lincolnton", slug: "lincolnton-nc", code: "LCT", image: "/images/pool.png" },
];

export default function CuriosityGapApertureLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Desktop Layout track ref
  const trackRef = useRef<HTMLDivElement>(null);

  // Mobile Swivel Stack variables
  const [mobileStack, setMobileStack] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [swipeOffset, setSwipeOffset] = useState({ x: 0, y: 0 });
  const [isSwiping, setIsSwiping] = useState(false);
  const swipeStart = useRef({ x: 0, y: 0 });

  // Exiting Card state (creates fluid, glitch-free overlays)
  interface ExitingCardState {
    market: Market;
    dir: "left" | "right";
    startX: number;
    startY: number;
  }
  const [exitingCard, setExitingCard] = useState<ExitingCardState | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Keyboard Arrow Keys Control (Desktop Only)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDesktop) return;
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % markets.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + markets.length) % markets.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDesktop]);

  // Position the track based on activeIndex on desktop
  useGSAP(() => {
    if (!isDesktop || !trackRef.current) return;
    
    const cardWidth = 380; // card width + gaps
    const containerWidth = containerRef.current?.getBoundingClientRect().width || 1200;
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    const targetX = centerOffset - activeIndex * cardWidth;
    
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 1.1,
      ease: "power3.out",
      overwrite: "auto"
    });
  }, { dependencies: [activeIndex, isDesktop] });

  // Exiting Card animation effect
  useEffect(() => {
    if (!exitingCard) return;

    const cardEl = document.querySelector(".exiting-card-element");
    if (!cardEl) return;

    const flyX = exitingCard.dir === "right" ? 1000 : -1000;
    const flyY = -120; // organic upward curved launch arc

    gsap.fromTo(cardEl,
      { x: exitingCard.startX, y: exitingCard.startY, opacity: 1.0 },
      {
        x: flyX,
        y: flyY,
        rotation: flyX > 0 ? 30 : -30,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        onComplete: () => {
          setExitingCard(null);
        }
      }
    );
  }, [exitingCard]);

  // Mobile Swipe Lookbook Stack Actions
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDesktop) return;
    setIsSwiping(true);
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    swipeStart.current = { x: clientX, y: clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDesktop || !isSwiping) return;
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    
    const diffX = clientX - swipeStart.current.x;
    const diffY = clientY - swipeStart.current.y;
    
    setSwipeOffset({ x: diffX, y: diffY });
  };

  const handleTouchEnd = () => {
    if (isDesktop || !isSwiping) return;
    setIsSwiping(false);

    const threshold = 80; // responsive single-hand swipe threshold
    if (Math.abs(swipeOffset.x) > threshold) {
      const isSwipeRight = swipeOffset.x > 0;
      const topCardIdx = mobileStack[0];

      // 1. Instantly register the swiped card to the separate absolute flying layer
      setExitingCard({
        market: markets[topCardIdx],
        dir: isSwipeRight ? "right" : "left",
        startX: swipeOffset.x,
        startY: swipeOffset.y
      });

      // 2. Cycle stack array IMMEDIATELY so the next cards start rotating simultaneously
      if (isSwipeRight) {
        setMobileStack((prev) => {
          const [top, ...rest] = prev;
          return [...rest, top];
        });
        setActiveIndex((prev) => (prev + 1) % markets.length);
      } else {
        setMobileStack((prev) => {
          const last = prev[prev.length - 1];
          const rest = prev.slice(0, prev.length - 1);
          return [last, ...rest];
        });
        setActiveIndex((prev) => (prev - 1 + markets.length) % markets.length);
      }

      // Reset swipe offset instantly for the new top card
      setSwipeOffset({ x: 0, y: 0 });
    } else {
      // Snapback to default stack alignment
      setSwipeOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div className="aperture-container" ref={containerRef} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      
      {isDesktop ? (
        /* ─── DESKTOP PARADIGM: Clicking-Only Geometric Mask Track ─── */
        <>
          <div
            ref={trackRef}
            className="aperture-track"
            style={{
              display: "flex",
              gap: "40px",
              padding: "4rem 0",
              touchAction: "none",
              userSelect: "none"
            }}
          >
            {markets.map((market, idx) => {
              const isActive = idx === activeIndex;
              
              return (
                <div
                  key={market.slug}
                  onClick={() => setActiveIndex(idx)} // Clicking card makes it active
                  style={{
                    flex: "0 0 340px",
                    height: "460px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid rgba(201, 169, 97, 0.15)",
                    background: "#000",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s",
                    cursor: "pointer", // Pointer cursor indicates clicking action
                    filter: isActive ? "none" : "brightness(0.35) contrast(1.1) saturate(0.95)",
                    opacity: 1.0,
                    transform: isActive ? "scale(1.04)" : "scale(0.96)",
                    boxShadow: isActive ? "var(--shadow-card-hover)" : "none",
                  }}
                >
                  {/* Top Portion: Vivid, Full-Brightness, Un-shaded Image Background */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "380px",
                      overflow: "hidden",
                      zIndex: 0
                    }}
                  >
                    <NextImage
                      src={market.image}
                      alt={`${market.name} — new construction homes`}
                      fill
                      sizes="340px"
                      priority={idx === 0}
                      style={{ objectFit: "cover", transform: "scale(1.12)", transition: "transform 0.4s ease-out" }}
                    />
                  </div>

                  {/* Bottom Portion: Town Name inside a solid black background box */}
                  <div
                    style={{
                      height: "80px",
                      background: "#000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderTop: "1px solid rgba(201, 169, 97, 0.12)",
                      zIndex: 1
                    }}
                  >
                    <NextLink
                      href={`/new-homes/${market.slug}/`}
                      style={{
                        pointerEvents: isActive ? "auto" : "none",
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "var(--clr-white)",
                        textAlign: "center",
                        letterSpacing: "0.02em",
                        textDecoration: "none",
                        transition: "color 0.3s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--clr-white)")}
                    >
                      {market.name}
                    </NextLink>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Spatial indicators: timeline axis flanked by dynamic circular arrow buttons */}
          <div className="aperture-timeline-axis" style={{ width: "100%", maxWidth: "800px", margin: "2rem auto 1rem", padding: "0 2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              {markets.map((market, idx) => (
                <button
                  key={market.slug}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.6875rem",
                    fontWeight: idx === activeIndex ? 600 : 400,
                    letterSpacing: "0.08em",
                    color: idx === activeIndex ? "var(--clr-primary)" : "var(--clr-gray-400)",
                    cursor: "pointer",
                    transition: "color 0.3s"
                  }}
                >
                  {market.code}
                </button>
              ))}
            </div>

            {/* Timeline track, flanked by Left / Right buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + markets.length) % markets.length)}
                style={{
                  background: "rgba(201, 169, 97, 0.05)",
                  border: "1px solid rgba(201, 169, 97, 0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--clr-primary)",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 169, 97, 0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201, 169, 97, 0.05)")}
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
              </button>

              <div style={{ height: "1px", background: "rgba(235, 228, 213, 0.12)", position: "relative", flexGrow: 1 }}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${(activeIndex / (markets.length - 1)) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: "12px",
                    height: "12px",
                    border: "1px solid var(--clr-primary)",
                    borderRadius: "50%",
                    background: "#0C0C0D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "left 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <div style={{ width: "4px", height: "4px", background: "var(--clr-primary)", borderRadius: "50%" }} />
                </div>
              </div>

              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % markets.length)}
                style={{
                  background: "rgba(201, 169, 97, 0.05)",
                  border: "1px solid rgba(201, 169, 97, 0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--clr-primary)",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 169, 97, 0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201, 169, 97, 0.05)")}
                aria-label="Next card"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            
            <p style={{ textAlign: "center", fontSize: "0.625rem", color: "var(--clr-gray-400)", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "1.25rem" }}>
              Use arrow buttons, arrow keys, or click cards &amp; indicators to browse D.R. Horton markets
            </p>
          </div>
        </>
      ) : (
        /* ─── MOBILE PARADIGM: Tactile Swivel Stack Lookbook ─── */
        <div style={{ padding: "3rem var(--space-md) 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              position: "relative",
              width: "300px",
              height: "410px",
              cursor: isSwiping ? "grabbing" : "grab",
              touchAction: "none"
            }}
          >
            {/* Render the absolute flying exiting card element if active */}
            {exitingCard && (
              <div
                className="exiting-card-element"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid rgba(201, 169, 97, 0.2)",
                  background: "#000",
                  overflow: "hidden",
                  transformOrigin: "bottom center",
                  zIndex: 200, // strictly layered on top
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Top portion image */}
                <div style={{ position: "relative", width: "100%", height: "330px", overflow: "hidden", zIndex: 0 }}>
                  <NextImage
                    src={exitingCard.market.image}
                    alt={`${exitingCard.market.name} — new construction homes`}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Bottom solid black name container with required space */}
                <div
                  style={{
                    height: "80px",
                    background: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTop: "1px solid rgba(201, 169, 97, 0.12)",
                    zIndex: 1
                  }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 400, color: "var(--clr-white)" }}>
                    {exitingCard.market.name}
                  </span>
                </div>
              </div>
            )}

            {/* Render the deck stack */}
            {mobileStack.slice(0, 3).reverse().map((marketIdx, stackPos) => {
              const market = markets[marketIdx];
              const isTop = stackPos === 2; // top card in stack
              const isNext = stackPos === 1;
              
              const cardX = isTop ? swipeOffset.x : 0;
              const cardY = isTop ? swipeOffset.y : 0;
              const cardRotation = isTop 
                ? (swipeOffset.x * 0.08) 
                : 0;
              const scale = isTop ? 1 : isNext ? 0.96 : 0.92;
              const translateY = isTop ? 0 : isNext ? 12 : 24;

              return (
                <div
                  key={market.slug}
                  className={`mobile-card-${marketIdx}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid rgba(201, 169, 97, 0.2)",
                    background: "#000",
                    overflow: "hidden",
                    transformOrigin: "bottom center",
                    transform: `translate3d(${cardX}px, ${cardY + translateY}px, 0) rotate(${cardRotation}deg) scale(${scale})`,
                    // Butter smooth transition to prevent glitches
                    transition: isSwiping && isTop ? "none" : "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s",
                    filter: isTop ? "none" : "brightness(0.35) contrast(1.1) saturate(0.95)",
                    opacity: 1.0,
                    boxShadow: isTop ? "var(--shadow-xl)" : "none",
                    zIndex: stackPos,
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  {/* Top Portion: Vivid, Full-Brightness, Un-shaded Image Background */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "330px", // total height is 410px, leaving 80px for bottom bar
                      overflow: "hidden",
                      zIndex: 0
                    }}
                  >
                    <NextImage
                      src={market.image}
                      alt={`${market.name} — new construction homes`}
                      fill
                      sizes="300px"
                      priority={isTop && marketIdx === 0}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Bottom Portion: Town Name inside solid black container with required space */}
                  <div
                    style={{
                      height: "80px",
                      background: "#000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderTop: "1px solid rgba(201, 169, 97, 0.12)",
                      zIndex: 1
                    }}
                  >
                    <NextLink
                      href={`/new-homes/${market.slug}/`}
                      style={{
                        pointerEvents: isTop ? "auto" : "none",
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.375rem",
                        fontWeight: 400,
                        color: "var(--clr-white)",
                        textDecoration: "none"
                      }}
                    >
                      {market.name}
                    </NextLink>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-gray-400)", textTransform: "uppercase", letterSpacing: "0.14em", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
              <Sparkles size={12} className="text-[#C9A961]" /> Swipe left or right to cycle deck
            </p>
            <p style={{ fontSize: "0.6875rem", color: "var(--clr-gray-500)", marginTop: "0.25rem" }}>
              Viewing {activeIndex + 1} of {markets.length} Markets
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
