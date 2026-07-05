"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Key, Play, ShieldAlert, Sliders } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HighPerformanceCanvasScrubberProps {
  townName: string;
  frameCount?: number;
  cityLabel?: string;
  priceTag?: string;
}

export default function HighPerformanceCanvasScrubber({
  townName,
  frameCount = 120,
  cityLabel = "Lake Norman & Charlotte Region",
  priceTag = "Starting from $275,000",
}: HighPerformanceCanvasScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const playhead = useRef({ frame: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadPercentage, setImagesLoadPercentage] = useState(0);

  // Fallback state variables (used for scroll-linked vector animation)
  const scrollProgression = useRef(0);

  useEffect(() => {
    // 1. Mobile & Address Bar Recalculation Stability Settings
    // (normalizeScroll is owned by MotionProvider's ScrollSmoother — configuring
    // it here too would fight over scroll interception)
    ScrollTrigger.config({
      ignoreMobileResize: true, // Prevents sudden jitter on mobile address bar show/hide
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true, // Lower latency rendering
    });
    if (!ctx) return;

    // Build paths for optimized WebP frames (adjust directory structure as required)
    const framePaths = Array.from(
      { length: frameCount },
      (_, i) => `/images/sequences/${townName}/seq_${String(i).padStart(4, "0")}.webp`
    );

    // 2. High-Fidelity Architectural Fallback Drawing Engine (When no frames found)
    const renderVectorFallback = (progress: number) => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;

      // Base quiet-luxury dark gradient background (Midnight Navy to Deep Forest Green)
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "#0A1410"); // Ultra-dark forest green shade
      grad.addColorStop(0.5, "#0A0F18"); // Celestial Midnight Navy
      grad.addColorStop(1, "#030A08"); // Deep shadow emerald
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // A. Draw Subtle Grid Pattern (Structural architectural blueprint)
      ctx.strokeStyle = "rgba(197, 160, 89, 0.05)"; // Gold-tinted grid
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // B. Draw Interactive Concentric Shimmering Radar Lines
      ctx.strokeStyle = "rgba(197, 160, 89, 0.08)";
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, h * 0.35 + Math.sin(progress * Math.PI) * 20, 0, Math.PI * 2);
      ctx.stroke();

      // C. Render Lake Norman Serene Landscapes (Left Side - Organic flowing vectors)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(197, 160, 89, 0.18)";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(10, 36, 28, 0.25)";
      
      // Left contour representing lake hills & shore
      ctx.moveTo(0, h);
      ctx.quadraticCurveTo(w * 0.15, h * 0.7 - progress * 100, w * 0.35, h * 0.8 + progress * 50);
      ctx.quadraticCurveTo(w * 0.45, h * 0.9, w * 0.5, h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // D. Render Charlotte City Grid Outline (Right Side - Tall structural geometric vectors)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(223, 186, 125, 0.25)"; // Accent light gold
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(10, 15, 24, 0.4)";
      
      const cityX = w * 0.5;
      ctx.moveTo(cityX, h);
      // Charlotte geometric skyscraper structures scaling based on scroll progression
      ctx.lineTo(cityX + w * 0.05, h - (200 + progress * 180));
      ctx.lineTo(cityX + w * 0.09, h - (200 + progress * 180));
      ctx.lineTo(cityX + w * 0.09, h - (320 + progress * 240)); // Key building height
      ctx.lineTo(cityX + w * 0.14, h - (320 + progress * 240));
      ctx.lineTo(cityX + w * 0.14, h - (150 + progress * 100));
      ctx.lineTo(cityX + w * 0.18, h - (400 + progress * 300)); // Charlotte skyline focal
      ctx.lineTo(cityX + w * 0.23, h - (400 + progress * 300));
      ctx.lineTo(cityX + w * 0.23, h - (250 + progress * 150));
      ctx.lineTo(cityX + w * 0.28, h - (250 + progress * 150));
      ctx.lineTo(cityX + w * 0.32, h - (120 + progress * 60));
      ctx.lineTo(cityX + w * 0.32, h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // E. Draw Digital Compass Grid & Floating Crosshairs
      ctx.strokeStyle = "rgba(197, 160, 89, 0.3)";
      ctx.beginPath();
      ctx.moveTo(w / 2 - 30, h / 2);
      ctx.lineTo(w / 2 + 30, h / 2);
      ctx.moveTo(w / 2, h / 2 - 30);
      ctx.lineTo(w / 2, h / 2 + 30);
      ctx.stroke();

      // F. Render Shimmering particles (dust over lake)
      ctx.fillStyle = "rgba(197, 160, 89, 0.4)";
      for (let i = 0; i < 15; i++) {
        const px = (Math.sin(i * 1234 + progress) * 0.5 + 0.5) * w;
        const py = (Math.cos(i * 5678 + progress * 1.5) * 0.5 + 0.5) * h;
        ctx.beginPath();
        ctx.arc(px, py, 2 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
      }

      // G. Premium Typography Overlays & Technical HUD Telemetry
      ctx.fillStyle = "#DFBA7D";
      ctx.font = "italic 11px Inter, sans-serif";
      ctx.letterSpacing = "2px";
      ctx.fillText("CAD RECONSTRUCTION STAGE", 50, h * 0.1);
      ctx.fillText("SPATIAL SYSTEM ACTIVE", w - 240, h * 0.1);

      ctx.fillStyle = "#ffffff";
      ctx.font = "500 32px Cormorant Garamond, Georgia, serif";
      ctx.fillText(cityLabel, 50, h * 0.17);

      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "14px Inter, sans-serif";
      ctx.fillText(priceTag, 50, h * 0.215);

      // HUD Coordinate Readout updating with scroll
      ctx.fillStyle = "#C5A059";
      ctx.font = "500 11px monospace";
      ctx.fillText(`TIMELINE POSITION: ${Math.floor(progress * 100)}%`, 50, h * 0.88);
      ctx.fillText(`GRID ATTR: Charlotte (35.2271° N) ↔ Lake Norman (35.4851° N)`, 50, h * 0.91);
      ctx.fillText(`ENGINE STATE: ACTIVE // GSAP.SCROLLTRIGGER_CANVAS_RENDER`, 50, h * 0.94);
    };

    // 3. Render Real Frames (When images are successfully preloaded)
    const drawFrameImage = (img: HTMLImageElement) => {
      if (!ctx || !canvas || !img) return;
      
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Overlay the city labels & price tags softly even on real images for continuity
      ctx.fillStyle = "rgba(10,15,24,0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Soft shadow tint overlay

      ctx.fillStyle = "#ffffff";
      ctx.font = "500 36px Cormorant Garamond, Georgia, serif";
      ctx.fillText(cityLabel, 50, canvas.height * 0.85);
      
      ctx.fillStyle = "#DFBA7D";
      ctx.font = "500 16px Inter, sans-serif";
      ctx.fillText(priceTag, 50, canvas.height * 0.90);
    };

    // 4. Preload Sequences as Blobs for Smooth FPS
    const preloadFrames = async () => {
      let loadedCount = 0;
      const promises = framePaths.map((path, idx) => {
        return fetch(path)
          .then((res) => {
            if (!res.ok) throw new Error("Image missing");
            return res.blob();
          })
          .then((blob) => {
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            return new Promise<void>((resolve) => {
              img.onload = () => {
                imagesRef.current[idx] = img;
                loadedCount++;
                setImagesLoadPercentage(Math.floor((loadedCount / frameCount) * 100));
                resolve();
              };
            });
          })
          .catch(() => {
            // Silently swallow errors; we will fallback gracefully to vector rendering
          });
      });

      await Promise.all(promises);

      // Check if we loaded at least 50% of the frames to consider it a success
      const activeFramesCount = imagesRef.current.filter(Boolean).length;
      if (activeFramesCount > frameCount * 0.5) {
        setImagesLoaded(true);
        if (imagesRef.current[0]) drawFrameImage(imagesRef.current[0]);
      } else {
        // Fallback: draw initial vector frame
        renderVectorFallback(0);
      }
    };

    // Defer the heavy frame download until the section approaches the viewport,
    // so the sequence never competes with initial page load.
    let preloadStarted = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !preloadStarted) {
          preloadStarted = true;
          preloadFrames();
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" }
    );
    if (triggerRef.current) io.observe(triggerRef.current);

    // 5. Setup GSAP ScrollTrigger Sequence Animation
    const scrollTriggerAnimation = gsap.to(playhead.current, {
      frame: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=220%",
        pin: true, // Pins the viewport in place while we scroll through frames
        scrub: 0.25, // Easing value to smooth out dynamic scroll swipes
        invalidateOnRefresh: true,
        anticipatePin: 1, // Pre-pins slightly early to eliminate iOS dynamic jumps
        onUpdate: (self) => {
          scrollProgression.current = self.progress;
          const currentIdx = Math.floor(playhead.current.frame);
          const activeImage = imagesRef.current[currentIdx];

          requestAnimationFrame(() => {
            if (activeImage) {
              drawFrameImage(activeImage);
            } else {
              renderVectorFallback(self.progress);
            }
          });
        },
      },
    });

    // Handle Window Resizing cleanly
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || 1920;
      canvas.height = canvas.parentElement?.clientHeight || 1080;
      
      const currentIdx = Math.floor(playhead.current.frame);
      const activeImage = imagesRef.current[currentIdx];
      
      if (activeImage) {
        drawFrameImage(activeImage);
      } else {
        renderVectorFallback(scrollProgression.current);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
      io.disconnect();
      // Kill only our own trigger — a global getAll().kill() would destroy
      // the page-wide smoother and every reveal animation on route change.
      scrollTriggerAnimation.scrollTrigger?.kill();
      scrollTriggerAnimation.kill();
      imagesRef.current.forEach((img) => img && URL.revokeObjectURL(img.src));
      imagesRef.current = [];
    };
  }, [townName, frameCount, cityLabel, priceTag]);

  return (
    <div ref={triggerRef} className="scrub-wrapper h-[280vh]">
      <div className="scrub-viewport">
        <canvas
          ref={canvasRef}
          className="scrub-canvas-element"
          width={1920}
          height={1080}
        />

        {/* Loading Overlay Indicators (Fades out when preloading ends or fallback runs) */}
        {!imagesLoaded && loadPercentage > 0 && loadPercentage < 100 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 transition-opacity duration-500 pointer-events-none">
            <div className="flex flex-col items-center max-w-xs text-center px-4">
              <Compass className="animate-spin text-amber-500 mb-4" size={32} />
              <h4 className="text-white font-serif text-lg mb-1">Preloading Drone Video</h4>
              <p className="text-gray-400 text-xs mb-3">Syncing 4K frame sequences for smooth scroll-scrubbing...</p>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${loadPercentage}%` }}
                />
              </div>
              <span className="text-[10px] text-amber-500/80 mt-2 tracking-widest font-mono">
                {loadPercentage}% LOADED
              </span>
            </div>
          </div>
        )}

        {/* Quiet Luxury Subtle Scroll Indicator Card (Floating HUD elements) */}
        <div
          className="scrub-overlay-card luxury-glass"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            borderRadius: "var(--radius-lg)",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "var(--radius-md)",
                background: "rgba(201,169,97,0.1)",
                border: "1px solid rgba(201,169,97,0.3)",
                color: "var(--clr-primary-light)",
                flexShrink: 0,
              }}
            >
              <Sliders size={20} />
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--clr-primary-light)",
                }}
              >
                INTERACTIVE SCROLL
              </span>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--clr-navy)", margin: 0 }}>
                Scrub Landscape Timeline
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(235,228,213,0.16)",
              color: "var(--clr-navy)",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--clr-primary)",
                animation: "pulse-gentle 1.6s ease-in-out infinite",
              }}
            />
            LIVE VIEW
          </div>
        </div>
      </div>
    </div>
  );
}
