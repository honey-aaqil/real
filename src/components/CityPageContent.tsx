import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { City } from "@/data/communities";
import { getCityBySlug } from "@/data/communities";
import CommunityCard from "@/components/CommunityCard";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SchemaMarkup from "@/components/SchemaMarkup";

interface CityPageContentProps {
  citySlug: string;
}

export default function CityPageContent({ citySlug }: CityPageContentProps) {
  const city = getCityBySlug(citySlug) as City;

  const heroClasses: Record<string, string> = {
    "charlotte-nc": "city-hero-charlotte",
    "denver-nc": "city-hero-denver",
    "huntersville-nc": "city-hero-huntersville",
    "sherrills-ford-nc": "city-hero-sherrills-ford",
    "troutman-nc": "city-hero-troutman",
    "mooresville-nc": "city-hero-mooresville",
    "ballantyne-nc": "city-hero-ballantyne",
    "concord-nc": "city-hero-concord",
    "indian-trail-nc": "city-hero-indian-trail",
    "statesville-nc": "city-hero-statesville",
    "lincolnton-nc": "city-hero-lincolnton",
  };

  return (
    <>
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: `D.R. Horton Homes — ${city.name}, NC`,
          description: city.heroDescription,
          url: `https://drhorton-nc-homes.com/new-homes/${city.slug}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: "NC",
            addressCountry: "US",
          },
        }}
      />

      {/* HERO */}
      <HeroSection
        heroClass={heroClasses[city.slug]}
        badge={`${city.communityCount} ${city.communityCount === 1 ? "Community" : "Communities"} • Starting from ${city.startingPrice}`}
        title={`New Homes in ${city.name}, NC by D.R. Horton`}
        subtitle={city.heroDescription}
      >
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#communities" className="btn btn-accent btn-lg">
            View Communities <ArrowRight size={18} />
          </a>
          <Link href="/contact" className="btn btn-white btn-lg">
            Get Pricing
          </Link>
        </div>
      </HeroSection>

      {/* RELOCATION HIGHLIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-primary" style={{ marginBottom: "1rem" }}>🏡 Relocation Guide</div>
            <h2>Why Move to {city.name}, NC?</h2>
            <p>Key facts for out-of-state buyers considering {city.name}.</p>
          </div>
          <div className="highlight-list">
            {city.relocationHighlights.map((hl, i) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[hl.icon] || LucideIcons.Star;
              return (
                <div key={i} className="highlight-item">
                  <div className="highlight-icon">
                    <IconComponent size={22} />
                  </div>
                  <div className="highlight-content">
                    <h4>{hl.title}</h4>
                    <p>{hl.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DR HORTON EXTERNAL LINK */}
      <section style={{ padding: "0 0 var(--space-xl)" }}>
        <div className="container">
          <a
            href={city.drHortonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            <ExternalLink size={16} />
            View all DR Horton homes in {city.name} on DRHorton.com →
          </a>
        </div>
      </section>

      {/* COMMUNITY GRID */}
      <section id="communities" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>All D.R. Horton Communities in {city.name}</h2>
            <p>
              {city.communityCount} {city.communityCount === 1 ? "community" : "communities"} with
              homes starting from {city.startingPrice}.
            </p>
          </div>
          <div className="grid-cities">
            {city.communities.map((community) => (
              <CommunityCard
                key={community.slug}
                community={community}
                citySlug={city.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <h3 style={{ marginBottom: "1rem" }}>Explore More</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/relocating-to-north-carolina" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-primary)", fontWeight: 500 }}>
                  <ArrowRight size={14} /> Relocating to North Carolina Guide
                </Link>
                <Link href="/financing" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-primary)", fontWeight: 500 }}>
                  <ArrowRight size={14} /> Financing & USDA Eligibility
                </Link>
                <Link href="/why-dr-horton" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-primary)", fontWeight: 500 }}>
                  <ArrowRight size={14} /> Why Choose DR Horton
                </Link>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "1rem" }}>Nearby Cities</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {city.neighboringCities.map((slug) => {
                  const name = slug.replace("-nc", "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                  return (
                    <Link key={slug} href={`/new-homes/${slug}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-primary)", fontWeight: 500 }}>
                      <ArrowRight size={14} /> New Homes in {name}, NC
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="section section-alt">
        <div className="container-narrow">
          <LeadCaptureForm
            source={`city-page-${city.slug}`}
            title={`Interested in ${city.name} Homes?`}
            subtitle="Request floorplans, pricing, and incentive details for any community."
          />
        </div>
      </section>
    </>
  );
}
