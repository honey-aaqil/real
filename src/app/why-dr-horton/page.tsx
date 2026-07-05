import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Leaf, HeartHandshake, Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Why Buy a DR Horton Home | America's #1 Homebuilder",
  description:
    "Learn about D.R. Horton's construction standards, Home Is Connected smart home features, energy efficiency, and industry-leading 10-year warranty.",
};

export default function WhyDrHortonPage() {
  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Why Buy a DR Horton Home",
          description: "Discover the quality, smart home, and energy efficiency differences that make D.R. Horton America's largest homebuilder.",
          url: "https://drhorton-nc-homes.com/why-dr-horton",
        }}
      />

      <HeroSection
        badge="America's #1 Homebuilder"
        title="The D.R. Horton Difference"
        subtitle="Since 2002, we have delivered more homes than any other builder in America. Learn why more families trust us to build their future."
      >
        <a href="#pillars" className="btn btn-accent btn-lg">
          Explore Our Standards <ArrowRight size={18} />
        </a>
      </HeroSection>

      {/* ═══ PILLARS ═══ */}
      <section id="pillars" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Four Pillars of Quality</h2>
            <p>Every D.R. Horton home is constructed with focus on efficiency, connectivity, durability, and peace of mind.</p>
          </div>

          <div className="grid-2" style={{ gap: "3rem", marginBottom: "4rem" }}>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div className="tile-icon" style={{ flexShrink: 0 }}><ShieldCheck size={28} /></div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>10-Year Warranty Program</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--clr-gray-600)" }}>
                  Rest easy knowing your investment is backed by an industry-leading warranty program. This includes 1 year of cosmetic coverage, 2 years of electrical and plumbing systems coverage, and 10 years of major structural coverage.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div className="tile-icon" style={{ flexShrink: 0 }}><Cpu size={28} /></div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>Home Is Connected® Smart Tech</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--clr-gray-600)" }}>
                  We include a robust suite of smart home devices standard in every home. Control your front door lock, video doorbell, lights, and thermostat from a single application, all pre-wired and integrated at no extra cost.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div className="tile-icon" style={{ flexShrink: 0 }}><Leaf size={28} /></div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>Energy-Efficient Features</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--clr-gray-600)" }}>
                  High-efficiency HVAC systems, low-E glass windows, advanced insulation, and programmable thermostats combine to reduce your monthly utility bills by up to 30% compared to typical older resale homes.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div className="tile-icon" style={{ flexShrink: 0 }}><HeartHandshake size={28} /></div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>Post-Closing Service Teams</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--clr-gray-600)" }}>
                  Our relationship doesn&apos;t end at the closing table. Each neighborhood has dedicated customer care representatives to guide you through your first year of homeownership and address any maintenance requests promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>D.R. Horton vs. Resale & Custom Builders</h2>
            <p>See how buying new construction from America&apos;s largest builder compares to other options.</p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="table" style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ background: "#1A1B1E", color: "var(--clr-primary-light)", textAlign: "left", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                  <th style={{ padding: "1rem" }}>Feature</th>
                  <th style={{ padding: "1rem" }}>D.R. Horton New Homes</th>
                  <th style={{ padding: "1rem" }}>Typical Older Resale</th>
                  <th style={{ padding: "1rem" }}>Custom Local Builder</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Warranty</td>
                  <td style={{ padding: "1rem", color: "var(--clr-success)", fontWeight: 600 }}>10-Year Structured</td>
                  <td style={{ padding: "1rem" }}>None / As-Is</td>
                  <td style={{ padding: "1rem" }}>Varies (Often 1-Year)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Smart Home Tech</td>
                  <td style={{ padding: "1rem", color: "var(--clr-success)", fontWeight: 600 }}>Included Standard</td>
                  <td style={{ padding: "1rem" }}>Retrofit Required ($$$)</td>
                  <td style={{ padding: "1rem" }}>Upgrade Fee ($1.5K+)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Closing Assistance</td>
                  <td style={{ padding: "1rem", color: "var(--clr-success)", fontWeight: 600 }}>Up to $10,000 via DHI</td>
                  <td style={{ padding: "1rem" }}>Paid by Buyer</td>
                  <td style={{ padding: "1rem" }}>Rarely Available</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Energy Bills</td>
                  <td style={{ padding: "1rem", color: "var(--clr-success)", fontWeight: 600 }}>Up to 30% Savings</td>
                  <td style={{ padding: "1rem" }}>High (Poor Insulation)</td>
                  <td style={{ padding: "1rem" }}>Varies by Builder</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Buying Timeline</td>
                  <td style={{ padding: "1rem", color: "var(--clr-success)", fontWeight: 600 }}>Move-In Ready Available</td>
                  <td style={{ padding: "1rem" }}>30–60 Days</td>
                  <td style={{ padding: "1rem" }}>6–12 Months Construction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ LEAD CAPTURE FORM ═══ */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header section-header-center">
            <h2>Ready to Choose Value?</h2>
            <p>Request current listings, floorplans, and incentive details for any community in NC.</p>
          </div>
          <LeadCaptureForm
            source="why-dr-horton-page"
            title="Request Buyer Consultation"
            subtitle="Let us know what home style you're looking for, and we will send matching listings."
          />
        </div>
      </section>
    </>
  );
}
