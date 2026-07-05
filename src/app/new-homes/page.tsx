import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/communities";
import CityCard from "@/components/CityCard";
import HeroSection from "@/components/HeroSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "New Homes Near Lake Norman & Charlotte NC",
  description:
    "Browse all D.R. Horton new construction communities across North Carolina. 6 cities, 13 communities near Lake Norman and Charlotte from $260K.",
};

export default function NewHomesOverview() {
  const totalCommunities = cities.reduce((sum, c) => sum + c.communityCount, 0);

  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "All DR Horton Communities in North Carolina",
          description: "Browse all D.R. Horton new construction communities across NC.",
          url: "https://drhorton-nc-homes.com/new-homes",
        }}
      />

      <HeroSection
        badge={`${cities.length} Cities • ${totalCommunities} Communities`}
        title="New Homes Across North Carolina"
        subtitle="Explore D.R. Horton new construction communities from Charlotte to Lake Norman. Every community features smart home technology, energy-efficient construction, and modern designer finishes."
      >
        <Link href="/contact" className="btn btn-accent btn-lg">
          <MapPin size={18} /> Get Pricing
        </Link>
      </HeroSection>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>All Cities</h2>
            <p>Select a city to explore its D.R. Horton communities, pricing, and relocation highlights.</p>
          </div>
          <div className="grid-cities">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* USDA Highlight */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>USDA Zero-Down Communities Available</h2>
            <p>
              Several of our Lake Norman-area communities qualify for USDA Rural
              Development financing — zero down payment for qualified buyers.
              Ask about eligibility in Denver, Sherrills Ford, and Troutman.
            </p>
            <Link href="/financing" className="btn btn-accent btn-lg" style={{ position: "relative" }}>
              Learn About USDA Financing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
