import Image from "next/image";

/**
 * Southern Homes of the Carolinas Inc — brokerage brand lockup.
 *
 * NC "no blind ads" compliance: wherever Eric Fisher appears as a brand, the
 * firm must ride alongside with comparable prominence, firm first. Every
 * placement (header, hero, listing cards, footer) renders through this one
 * component so the presentation can't drift out of compliance per-page.
 *
 * The raw firm logo is dark navy text on transparency — invisible on this
 * site's charcoal theme — so dark contexts use the white-chip variant
 * (`southern-homes-logo-darkbg.png`); the transparent original
 * (`southern-homes-logo.png`) is reserved for light backgrounds.
 */

export const FIRM_NAME = "Southern Homes of the Carolinas Inc";
export const AGENT_NAME = "Eric Fisher";
export const AGENT_TITLE = "REALTOR®";
export const AGENT_LICENSE = "NC License #362747";
export const FIRM_LICENSE = "Firm License #C19952";

const LOGO_DARKBG = "/images/brand/southern-homes-logo-darkbg.png";

interface BrandLockupProps {
  /**
   * header — logo chip + firm name | Eric Fisher, comparable weight (site header)
   * hero   — single readable line with small logo chip (above-the-fold badge)
   * card   — compact text-only attribution for listing/community cards
   */
  variant: "header" | "hero" | "card";
}

export default function BrandLockup({ variant }: BrandLockupProps) {
  if (variant === "card") {
    return (
      <span className="brand-lockup brand-lockup-card">
        {AGENT_NAME} · {FIRM_NAME}
      </span>
    );
  }

  if (variant === "hero") {
    return (
      <span className="brand-lockup brand-lockup-hero">
        <Image src={LOGO_DARKBG} alt={FIRM_NAME} width={92} height={41} className="brand-lockup-logo" />
        <span className="brand-lockup-hero-text">
          {AGENT_NAME}, {AGENT_TITLE} — {FIRM_NAME}
        </span>
      </span>
    );
  }

  // header
  return (
    <span className="brand-lockup brand-lockup-header">
      <Image src={LOGO_DARKBG} alt={FIRM_NAME} width={82} height={36} className="brand-lockup-logo" priority />
      <span className="brand-lockup-names">
        <span className="brand-lockup-firm">{FIRM_NAME}</span>
        <span className="brand-lockup-agent">
          {AGENT_NAME} <span className="brand-lockup-agent-title">{AGENT_TITLE}</span>
        </span>
      </span>
    </span>
  );
}

/** Standard Equal Housing Opportunity mark (house + equals sign) as inline SVG. */
export function EqualHousingLogo({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Equal Housing Opportunity"
      fill="currentColor"
    >
      {/* Roof */}
      <path d="M32 4 L2 26 h8 L32 10 L54 26 h8 Z" />
      {/* House body */}
      <path d="M12 28 v32 h40 V28 L32 13 Z M20 36 h24 v6 H20 Z m0 12 h24 v6 H20 Z" fillRule="evenodd" />
    </svg>
  );
}
