import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Building, Trees, Sun, Briefcase } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import { cities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Relocating to North Carolina | Charlotte & Lake Norman Guide",
  description:
    "Comprehensive guide for relocating to Charlotte & Lake Norman, NC. Compare cost of living vs NY/CA/FL, explore property taxes, job markets, and find D.R. Horton communities.",
};

export default function RelocationPage() {
  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Relocating to North Carolina Guide",
          description: "A comprehensive relocation guide for families and individuals moving to the Charlotte and Lake Norman regions of North Carolina.",
          url: "https://drhorton-nc-homes.com/relocating-to-north-carolina",
        }}
      />

      <HeroSection
        badge="NC Relocation Guide"
        title="Moving to North Carolina"
        subtitle="Your complete guide to buying a home, taxes, cost of living, and lifestyle in the Charlotte Metro and Lake Norman areas."
      >
        <a href="#compare" className="btn btn-accent btn-lg">
          Compare Cost of Living <ArrowRight size={18} />
        </a>
      </HeroSection>

      {/* ═══ COMPARE SECTION ═══ */}
      <section id="compare" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Cost of Living: NC vs. NY, CA & FL</h2>
            <p>See why thousands are moving to the Tar Heel State. Lower taxes, affordable home prices, and high quality of life.</p>
          </div>

          <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
            <table className="table" style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ background: "#1A1B1E", color: "var(--clr-primary-light)", textAlign: "left", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                  <th style={{ padding: "1rem" }}>Metric</th>
                  <th style={{ padding: "1rem" }}>North Carolina</th>
                  <th style={{ padding: "1rem" }}>New York</th>
                  <th style={{ padding: "1rem" }}>California</th>
                  <th style={{ padding: "1rem" }}>Florida</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Income Tax Rate</td>
                  <td style={{ padding: "1rem" }}>4.5% (Flat)</td>
                  <td style={{ padding: "1rem" }}>4.0% – 10.9%</td>
                  <td style={{ padding: "1rem" }}>1.0% – 13.3%</td>
                  <td style={{ padding: "1rem" }}>0%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Avg. Property Tax</td>
                  <td style={{ padding: "1rem" }}>0.70%</td>
                  <td style={{ padding: "1rem" }}>1.72%</td>
                  <td style={{ padding: "1rem" }}>0.75%</td>
                  <td style={{ padding: "1rem" }}>0.86%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Median Home Price</td>
                  <td style={{ padding: "1rem", color: "var(--clr-primary)", fontWeight: 600 }}>$360,000</td>
                  <td style={{ padding: "1rem" }}>$450,000</td>
                  <td style={{ padding: "1rem" }}>$790,000</td>
                  <td style={{ padding: "1rem" }}>$410,000</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Sales Tax Rate</td>
                  <td style={{ padding: "1rem" }}>4.75% (State)</td>
                  <td style={{ padding: "1rem" }}>4.00% (State)</td>
                  <td style={{ padding: "1rem" }}>7.25% (State)</td>
                  <td style={{ padding: "1rem" }}>6.00% (State)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--clr-gray-200)" }}>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>Overall Cost Index</td>
                  <td style={{ padding: "1rem", fontWeight: 600, color: "var(--clr-success)" }}>94.2 (Below Avg)</td>
                  <td style={{ padding: "1rem" }}>121.5 (High)</td>
                  <td style={{ padding: "1rem" }}>138.0 (Very High)</td>
                  <td style={{ padding: "1rem" }}>102.8 (Above Avg)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid-3">
            <div className="tile">
              <div className="tile-icon"><DollarSign size={28} /></div>
              <h3>Tax-Friendly Living</h3>
              <p>NC features a flat income tax set to decrease further. Additionally, property taxes in areas like Lincoln County (Denver) and Iredell County (Troutman, Mooresville) are exceptionally low.</p>
            </div>
            <div className="tile">
              <div className="tile-icon"><Briefcase size={28} /></div>
              <h3>Thriving Job Market</h3>
              <p>Charlotte is the nation&apos;s second-largest financial center. The region boasts booming sectors in technology, energy, healthcare, and advanced manufacturing.</p>
            </div>
            <div className="tile">
              <div className="tile-icon"><Sun size={28} /></div>
              <h3>Mild Four-Season Climate</h3>
              <p>Enjoy short, mild winters and long, warm springs and autumns. You get to experience all four seasons without the extreme northern snow or southern humidity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXPLORE THE REGIONS ═══ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Where to Settle in North Carolina</h2>
            <p>From energetic urban suburbs to quiet lake towns, explore our 6 target cities.</p>
          </div>

          <div className="grid-cities">
            {cities.map((city) => (
              <div
                key={city.slug}
                className="card"
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--clr-gray-200)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ padding: "2rem", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>{city.name}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--clr-gray-500)", marginBottom: "1rem" }}>
                    Starting from <strong style={{ color: "var(--clr-primary)" }}>{city.startingPrice}</strong> • {city.communityCount} {city.communityCount === 1 ? "Community" : "Communities"}
                  </p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--clr-gray-600)" }}>
                    {city.heroDescription.substring(0, 140)}...
                  </p>
                </div>
                <div style={{ padding: "1.25rem 2rem", borderTop: "1px solid var(--clr-gray-100)", background: "var(--clr-gray-50)" }}>
                  <Link href={`/new-homes/${city.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--clr-primary)", fontWeight: 600, fontSize: "0.875rem" }}>
                    Explore {city.name} Communities <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PILLARS OF NC RELOCATION ═══ */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <div className="badge badge-accent" style={{ marginBottom: "1rem" }}>Lake Norman & Charlotte</div>
              <h2>Natural Beauty Meets Metro Amenities</h2>
              <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
                The Charlotte Metro and Lake Norman areas represent a rare relocation sweet spot. Within 30 minutes, you can transition from the high-energy headquarters of Fortune 500 banks in Uptown Charlotte to the serene shores of Lake Norman, offering 32,000 acres of boating, fishing, and waterfront dining.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <Trees size={24} style={{ color: "var(--clr-accent)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ margin: 0 }}>Lake Norman Access</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--clr-gray-600)" }}>Communities in Denver, Troutman, Sherrills Ford, and Mooresville lie minutes from public launches.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <Building size={24} style={{ color: "var(--clr-accent)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ margin: 0 }}>Proximity to Charlotte</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--clr-gray-600)" }}>Huntersville and Charlotte communities offer rapid commutes to Uptown employment hubs via I-77/I-485.</p>
                  </div>
                </div>
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
              <h3 style={{ color: "#fff", marginBottom: "1.5rem" }}>Moving Checklist</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Check tax rates for your target county (Iredell vs Lincoln vs Mecklenburg)",
                  "Determine your preferred commute time to Uptown Charlotte or local hubs",
                  "Explore school district ratings and community-assigned schools",
                  "Compare financing programs: DHI Mortgage offers special relocation rate-locks",
                  "Request floorplans and video walk-throughs for quick-move-in homes",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--clr-accent-light)", fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEAD CAPTURE FORM ═══ */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="section-header section-header-center">
            <h2>Get Your NC Relocation Kit</h2>
            <p>Receive comprehensive guides, school district rankings, tax breakdown sheets, and available new construction pricing lists.</p>
          </div>
          <LeadCaptureForm
            source="relocation-hub"
            title="Request Relocation Package"
            subtitle="Let us know where you are relocating from and we'll compile a custom market guide tailored to your timeline."
          />
        </div>
      </section>
    </>
  );
}
