import Link from "next/link";
import { CheckCircle, GraduationCap, Clock, ArrowRight } from "lucide-react";
import type { City, Community } from "@/data/communities";
import Breadcrumb from "@/components/Breadcrumb";
import QuickFactsBar from "@/components/QuickFactsBar";
import AmenityGrid from "@/components/AmenityGrid";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import RelatedCommunities from "@/components/RelatedCommunities";
import SchemaMarkup from "@/components/SchemaMarkup";

interface CommunityPageContentProps {
  city: City;
  community: Community;
}

export default function CommunityPageContent({ city, community }: CommunityPageContentProps) {
  return (
    <>
      <SchemaMarkup
        type="RealEstateListing"
        data={{
          name: `${community.name} — ${city.name}`,
          description: community.hookLine,
          url: `https://drhorton-nc-homes.com/new-homes/${city.slug}/${community.slug}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: "NC",
            addressCountry: "US",
          },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: community.priceMin,
            highPrice: community.priceMax,
            priceCurrency: "USD",
          },
        }}
      />

      {/* BREADCRUMB */}
      <div className="container" style={{ paddingTop: "1rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "New Homes", href: "/new-homes" },
            { label: city.name, href: `/new-homes/${city.slug}` },
            { label: community.name },
          ]}
        />
      </div>

      {/* HERO */}
      <section
        className="hero"
        style={{ minHeight: 420 }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
            {city.name}
          </div>
          <h1>{community.name}</h1>
          <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--clr-accent-light)", marginBottom: "0.25rem" }}>
            {community.priceRange}
          </p>
          <p>{community.hookLine}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="#request-info" className="btn btn-accent btn-lg">
              Request Floorplans
            </a>
            <Link href="/contact" className="btn btn-white">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <div className="container">
        <QuickFactsBar
          homeTypes={community.homeTypes}
          sqftRange={community.sqftRange}
          beds={community.beds}
          priceRange={community.priceRange}
          garage={community.garage}
          usdaEligible={community.usdaEligible}
        />
      </div>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-primary" style={{ marginBottom: "1rem" }}>✅ Community Highlights</div>
            <h2>Why Buyers Choose {community.name}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 720 }}>
            {community.highlights.map((hl, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "var(--clr-gray-50)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--clr-gray-200)",
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle size={20} style={{ color: "var(--clr-primary)", flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: "0.9375rem", margin: 0, lineHeight: 1.6 }}>{hl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-accent" style={{ marginBottom: "1rem" }}>🏊 Amenities</div>
            <h2>Community Amenities & Features</h2>
          </div>
          <AmenityGrid amenities={community.amenities} />
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="request-info" className="section">
        <div className="container-narrow">
          <LeadCaptureForm
            source={`community-${city.slug}-${community.slug}`}
            title="Request Floorplans & Pricing"
            subtitle={`Get detailed floorplans, current pricing, and available incentives for ${community.name} in ${city.name}.`}
            showCommunityField={false}
          />
        </div>
      </section>

      {/* SCHOOLS / COMMUTE */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="info-card">
              <h4><GraduationCap size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />Nearby Schools</h4>
              <ul>
                {community.schools.map((school, i) => (
                  <li key={i}>{school}</li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h4><Clock size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />Commute Info</h4>
              <ul>
                {community.commuteInfo.split("•").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to See {community.name}?</h2>
            <p>Schedule a private tour or explore our self-guided tour options.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <Link href="/contact" className="btn btn-accent btn-lg">
                Schedule a Tour <ArrowRight size={18} />
              </Link>
              <Link href={`/new-homes/${city.slug}`} className="btn btn-white">
                Back to {city.name} Communities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <RelatedCommunities
        communities={city.communities}
        citySlug={city.slug}
        cityName={city.name}
        currentCommunitySlug={community.slug}
      />
    </>
  );
}
