// ─────────────────────────────────────────────────────────────
// SEO Keyword Strategy — 30 Target Phrases
// ─────────────────────────────────────────────────────────────

export interface SeoKeyword {
  phrase: string;
  tier: 1 | 2 | 3;
  targetPage: string;      // route path
  placement: string;       // where in the page this keyword should appear
}

export const seoKeywords: SeoKeyword[] = [
  // ── Tier 1: City + Builder (Core Landing Page Keywords) ──
  { phrase: "new homes Charlotte NC DR Horton", tier: 1, targetPage: "/new-homes/charlotte-nc", placement: "H1, title tag, meta description" },
  { phrase: "DR Horton Charlotte NC communities", tier: 1, targetPage: "/new-homes/charlotte-nc", placement: "H2, body content" },
  { phrase: "new construction homes Denver NC", tier: 1, targetPage: "/new-homes/denver-nc", placement: "H1, title tag, meta description" },
  { phrase: "DR Horton Huntersville NC", tier: 1, targetPage: "/new-homes/huntersville-nc", placement: "H1, title tag, meta description" },
  { phrase: "new homes Lake Norman NC", tier: 1, targetPage: "/new-homes", placement: "H1, overview page hero" },
  { phrase: "DR Horton Sherrills Ford NC", tier: 1, targetPage: "/new-homes/sherrills-ford-nc", placement: "H1, title tag, meta description" },
  { phrase: "new construction Troutman NC", tier: 1, targetPage: "/new-homes/troutman-nc", placement: "H1, title tag, meta description" },
  { phrase: "DR Horton Mooresville NC", tier: 1, targetPage: "/new-homes/mooresville-nc", placement: "H1, title tag, meta description" },
  { phrase: "new homes near Lake Norman", tier: 1, targetPage: "/new-homes", placement: "H2, overview page body" },
  { phrase: "DR Horton NC communities", tier: 1, targetPage: "/", placement: "Homepage H1 and meta title" },

  // ── Tier 2: Buyer Intent / Financing Keywords ──
  { phrase: "USDA eligible new homes NC", tier: 2, targetPage: "/financing", placement: "H2, USDA section" },
  { phrase: "zero down payment new construction NC", tier: 2, targetPage: "/financing", placement: "H2, financing options section" },
  { phrase: "DR Horton move-in ready homes NC", tier: 2, targetPage: "/new-homes", placement: "Featured communities carousel" },
  { phrase: "DHI Mortgage financing NC", tier: 2, targetPage: "/financing", placement: "H1, title tag" },
  { phrase: "new homes under $300k Charlotte NC", tier: 2, targetPage: "/new-homes/charlotte-nc", placement: "Community grid filter text" },
  { phrase: "new construction townhomes Charlotte NC", tier: 2, targetPage: "/new-homes/charlotte-nc", placement: "Townhome community cards" },
  { phrase: "new homes with basement Lake Norman", tier: 2, targetPage: "/new-homes/sherrills-ford-nc", placement: "Community highlights" },
  { phrase: "first-time home buyer new construction NC", tier: 2, targetPage: "/financing", placement: "First-time buyer section" },
  { phrase: "new homes with community pool Charlotte area", tier: 2, targetPage: "/new-homes/charlotte-nc", placement: "Amenity highlights in community cards" },
  { phrase: "self-guided home tours NC new construction", tier: 2, targetPage: "/contact", placement: "Tour scheduling section" },

  // ── Tier 3: Relocation / Comparison Keywords ──
  { phrase: "relocating to Charlotte NC from out of state", tier: 3, targetPage: "/relocating-to-north-carolina", placement: "H1, hero section" },
  { phrase: "moving to Lake Norman NC", tier: 3, targetPage: "/relocating-to-north-carolina", placement: "Lake Norman relocation section" },
  { phrase: "best DR Horton communities near Charlotte", tier: 3, targetPage: "/why-dr-horton", placement: "Community comparison section" },
  { phrase: "new homes near Charlotte Douglas Airport", tier: 3, targetPage: "/new-homes/charlotte-nc", placement: "Sonoma Hills community card" },
  { phrase: "DR Horton vs other builders NC", tier: 3, targetPage: "/why-dr-horton", placement: "Comparison table" },
  { phrase: "Charlotte NC suburbs new construction", tier: 3, targetPage: "/new-homes", placement: "Overview page body content" },
  { phrase: "best towns near Lake Norman to buy a home", tier: 3, targetPage: "/relocating-to-north-carolina", placement: "City comparison section" },
  { phrase: "new homes with smart home technology NC", tier: 3, targetPage: "/why-dr-horton", placement: "Smart home features section" },
  { phrase: "NC new construction communities with amenities", tier: 3, targetPage: "/new-homes", placement: "Overview page amenity highlights" },
  { phrase: "DR Horton Charlotte metro new homes", tier: 3, targetPage: "/", placement: "Homepage H2, body content" },
];

export function getKeywordsForPage(pagePath: string): SeoKeyword[] {
  return seoKeywords.filter(k => k.targetPage === pagePath);
}

export function getKeywordsByTier(tier: 1 | 2 | 3): SeoKeyword[] {
  return seoKeywords.filter(k => k.tier === tier);
}
