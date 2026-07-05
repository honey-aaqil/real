import Link from "next/link";
import { Home, Phone, Mail, MapPin, ShieldAlert, Award, FileText } from "lucide-react";

// The 11 North Carolina Markets for local-SEO footprint in the footer
const allTowns = [
  { name: "Charlotte", slug: "charlotte-nc", active: true },
  { name: "Huntersville", slug: "huntersville-nc", active: true },
  { name: "Mooresville", slug: "mooresville-nc", active: true },
  { name: "Denver", slug: "denver-nc", active: true },
  { name: "Troutman", slug: "troutman-nc", active: true },
  { name: "Sherrills Ford", slug: "sherrills-ford-nc", active: true },
  { name: "Ballantyne", slug: "ballantyne-nc", active: false },
  { name: "Concord", slug: "concord-nc", active: false },
  { name: "Indian Trail", slug: "indian-trail-nc", active: false },
  { name: "Statesville", slug: "statesville-nc", active: false },
  { name: "Lincolnton", slug: "lincolnton-nc", active: false },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" style={{ borderTop: "1px solid rgba(197, 160, 89, 0.15)" }}>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-white)", fontFamily: "var(--font-heading)" }}>
            <Home size={22} className="text-[#C5A059]" />
            <span>DR Horton <span style={{ color: "var(--clr-accent)" }}>NC</span></span>
          </h3>
          <p style={{ marginTop: "1rem", color: "var(--clr-gray-400)", fontSize: "0.875rem", lineHeight: "1.7" }}>
            America&apos;s Largest Builder. Discover new construction homes across North Carolina&apos;s premier locations, blending metropolitan convenience with peaceful Lake Norman living.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.75rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.8125rem", color: "var(--clr-gray-300)" }}>
              <Phone size={14} className="text-[#C5A059]" /> (800) 555-0199
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.8125rem", color: "var(--clr-gray-300)" }}>
              <Mail size={14} className="text-[#C5A059]" /> info@drhorton-nc-homes.com
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.8125rem", color: "var(--clr-gray-300)" }}>
              <MapPin size={14} className="text-[#C5A059]" /> Greater Charlotte & Lake Norman Region, NC
            </span>
          </div>
        </div>

        {/* Local SEO Footprint — 11 Towns */}
        <div className="footer-col">
          <h4>Explore 11 Towns</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem 1rem" }}>
            {allTowns.map((town) => (
              <Link
                key={town.slug}
                href={town.active ? `/new-homes/${town.slug}/` : `/contact/?inquiry=dr-horton-${town.slug}`}
                style={{ fontSize: "0.8125rem" }}
              >
                {town.name}, NC
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/relocating-to-north-carolina">Relocating Guide</Link>
          <Link href="/financing">Incentives & Finaces</Link>
          <Link href="/why-dr-horton">Why DR Horton</Link>
          <Link href="/contact">Schedule Tour</Link>
          <Link href="/new-homes">All Communities</Link>
        </div>

        <div className="footer-col">
          <h4>Buyer Specialist</h4>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8125rem", color: "var(--clr-gray-400)", marginBottom: "0.75rem" }}>
            <Award size={14} className="text-[#C5A059]" /> Licensed NC Realtor®
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8125rem", color: "var(--clr-gray-400)", marginBottom: "0.75rem" }}>
            <FileText size={14} className="text-[#C5A059]" /> DHI Mortgage Partner
          </span>
          <p style={{ fontSize: "0.75rem", color: "var(--clr-gray-400)", lineHeight: "1.5", marginTop: "0.5rem" }}>
            Providing independent representation to new home buyers. 100% free structural audits, upgrade negotiations, and contract advocacy.
          </p>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "3.5rem" }}>
        <p style={{ color: "var(--clr-gray-400)", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} North Carolina New Construction Buyer Portal. All rights reserved. Prices, plans, elevations, incentives and community features subject to change.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "1rem" }}>
          <p style={{ display: "flex", alignItems: "start", gap: "0.5rem", color: "var(--clr-gray-400)", fontSize: "0.7188rem", lineHeight: "1.5" }}>
            <ShieldAlert size={14} className="text-[#C5A059] flex-shrink-0" style={{ marginTop: "2px" }} />
            <span>
              <strong>Brokerage Compliance Disclaimer:</strong> This portal is operated by a licensed, independent North Carolina real estate agent specializing in new construction buyer advocacy. It is not affiliated with, sponsored by, or endorsed by D.R. Horton, Inc. or DHI Mortgage. All D.R. Horton logos, names, and trademark materials belong strictly to their respective corporate owners. We represent buyers exclusively to protect their interests during the build process; the builder pays our professional fee.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
