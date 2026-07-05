"use client";

/**
 * Infinite kinetic ticker — pure CSS animation (GPU-cheap),
 * content duplicated for a seamless loop. Serif italic items
 * with gold diamond separators.
 */
export default function Marquee({
  items,
  speed = 36,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const row = (ariaHidden: boolean) => (
    <div className="marquee-row" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span className="marquee-item" key={i}>
          <em>{item}</em>
          <span className="marquee-sep">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} style={{ ["--marquee-duration" as string]: `${speed}s` }}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
