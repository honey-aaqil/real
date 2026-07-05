import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Shield, FileText, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "DR Horton Financing & USDA Zero-Down Homes | NC",
  description:
    "Explore DHI Mortgage financing options, current rate incentives, and USDA zero-down communities in the Lake Norman & Charlotte region. Get pre-qualified today.",
};

export default function FinancingPage() {
  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "DR Horton Financing & DHI Mortgage Guide",
          description: "Information about financing a new construction home with D.R. Horton, including DHI Mortgage options and USDA zero-down programs.",
          url: "https://drhorton-nc-homes.com/financing",
        }}
      />

      <HeroSection
        badge="In-House Lending"
        title="Financing Made Simple"
        subtitle="Explore competitive rates, builder closing cost incentives, and USDA zero-down options with DHI Mortgage."
      >
        <a href="#usda" className="btn btn-accent btn-lg">
          Explore USDA Zero-Down <ArrowRight size={18} />
        </a>
      </HeroSection>

      {/* ═══ LOAN TYPES ═══ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Flexible Loan Programs for Every Buyer</h2>
            <p>From first-time buyers to seasoned investors, DHI Mortgage offers tailored programs to suit your financial goals.</p>
          </div>

          <div className="grid-3" style={{ marginBottom: "3rem" }}>
            <div className="card" style={{ padding: "2rem", border: "1px solid var(--clr-gray-200)", borderRadius: "var(--radius-xl)", background: "var(--bg-card)" }}>
              <div className="tile-icon" style={{ marginBottom: "1.25rem" }}><DollarSign size={24} /></div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>Conventional Loans</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--clr-gray-600)", margin: 0 }}>
                Ideal for buyers with good-to-excellent credit. Down payments as low as 3% for qualified first-time buyers. Flexible terms of 15, 20, or 30 years.
              </p>
            </div>
            <div className="card" style={{ padding: "2rem", border: "1px solid var(--clr-gray-200)", borderRadius: "var(--radius-xl)", background: "var(--bg-card)" }}>
              <div className="tile-icon" style={{ marginBottom: "1.25rem" }}><Shield size={24} /></div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>FHA Loans</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--clr-gray-600)", margin: 0 }}>
                Perfect for first-time buyers. Low minimum down payment of 3.5% and more flexible credit requirements. Backed by the Federal Housing Administration.
              </p>
            </div>
            <div className="card" style={{ padding: "2rem", border: "1px solid var(--clr-gray-200)", borderRadius: "var(--radius-xl)", background: "var(--bg-card)" }}>
              <div className="tile-icon" style={{ marginBottom: "1.25rem" }}><FileText size={24} /></div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>VA Loans</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--clr-gray-600)", margin: 0 }}>
                Exclusive benefit for active-duty military, veterans, and surviving spouses. Features 0% down payment options, competitive interest rates, and no monthly PMI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ USDA SPOTLIGHT ═══ */}
      <section id="usda" className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <div className="badge badge-primary" style={{ marginBottom: "1rem" }}>Zero Down Payment</div>
              <h2>USDA Rural Development Eligibility</h2>
              <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
                The United States Department of Agriculture (USDA) offers home loans with <strong>zero down payment requirements</strong> to promote homeownership in designated rural areas. Many of D.R. Horton&apos;s Lake Norman-area communities qualify for this program.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {[
                  "No down payment required (100% financing)",
                  "Competitive interest rates typically lower than conventional loans",
                  "Low monthly mortgage insurance premiums",
                  "Closing costs can be paid by the seller or gifted by a family member",
                  "Eligibility is determined by property location and household income limits",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.9375rem" }}>
                    <span style={{ color: "var(--clr-accent)", fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h4 style={{ marginBottom: "0.5rem" }}>USDA Eligible Communities:</h4>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">Blackstone Bay (Sherrills Ford, NC)</span>
                <span className="badge badge-accent">Enclave at Falls Cove (Troutman, NC)</span>
                <span className="badge badge-accent">Calvin Creek (Troutman, NC)</span>
                <span className="badge badge-accent">Brookside (Troutman, NC)</span>
              </div>
            </div>
            <div
              style={{
                background:
                  "radial-gradient(ellipse 70% 90% at 85% 10%, rgba(201,169,97,0.12) 0%, transparent 60%), linear-gradient(135deg, #16171A 0%, #0E0E10 100%)",
                border: "1px solid rgba(201,169,97,0.25)",
                borderRadius: "var(--radius-xl)",
                padding: "3rem",
                color: "#fff",
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "1.5rem" }}>Builder Special Incentives</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                D.R. Horton regularly runs financing promotions in partnership with DHI Mortgage. These incentives can significantly lower your initial homeownership costs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle size={22} style={{ color: "var(--clr-accent-light)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ margin: 0, color: "#fff" }}>Closing Cost Assistance</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>Up to $10,000 towards closing costs when using DHI Mortgage and our preferred title agent.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle size={22} style={{ color: "var(--clr-accent-light)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ margin: 0, color: "#fff" }}>Special Fixed Rate Locks</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>Lock in below-market promotional interest rates on select quick-move-in homes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEAD CAPTURE FORM ═══ */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header section-header-center">
            <h2>Speak With a Financing Specialist</h2>
            <p>Get a custom rate quote, check USDA eligibility parameters, and pre-qualify in under 10 minutes.</p>
          </div>
          <LeadCaptureForm
            source="financing-page"
            title="Request Pre-Qualification Info"
            subtitle="Fill out the form below and an in-house DHI Mortgage consultant will contact you with current rate incentives."
          />
        </div>
      </section>
    </>
  );
}
