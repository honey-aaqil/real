"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import BrandLockup from "@/components/BrandLockup";

// The 11 North Carolina Markets in a unified flat array
const towns = [
  { name: "Charlotte", slug: "charlotte-nc", active: true },
  { name: "Ballantyne", slug: "ballantyne-nc", active: false },
  { name: "Concord", slug: "concord-nc", active: false },
  { name: "Indian Trail", slug: "indian-trail-nc", active: false },
  { name: "Huntersville", slug: "huntersville-nc", active: true },
  { name: "Mooresville", slug: "mooresville-nc", active: true },
  { name: "Denver", slug: "denver-nc", active: true },
  { name: "Troutman", slug: "troutman-nc", active: true },
  { name: "Sherrills Ford", slug: "sherrills-ford-nc", active: true },
  { name: "Statesville", slug: "statesville-nc", active: false },
  { name: "Lincolnton", slug: "lincolnton-nc", active: false },
];

const navLinks = [
  { href: "/new-homes", label: "Search Homes" },
  { href: "/relocating-to-north-carolina", label: "Buyer's Guide" },
  { href: "/financing", label: "Incentives" },
  { href: "/why-dr-horton", label: "Why DR Horton" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setMobileDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // The pre-launch gate is a bare landing page — no site chrome.
  if (pathname.startsWith("/coming-soon")) return null;

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          {/* Compliance: firm-first lockup — Southern Homes of the Carolinas Inc
              rides ahead of the agent brand on every page (no blind ads). */}
          <Link href="/" className="header-brand">
            <BrandLockup variant="header" />
          </Link>

          <nav className="header-nav">
            {/* Towns Tier-Free Dropdown */}
            <div className="header-nav-item">
              <span className="dropdown-trigger">
                Towns <ChevronDown size={14} style={{ color: "var(--clr-accent)" }} />
              </span>
              
              <div className="nav-dropdown">
                {[0, 1, 2].map((colIdx) => {
                  const chunk = towns.slice(colIdx * 4, (colIdx + 1) * 4);
                  return (
                    <div key={colIdx} className="dropdown-col">
                      <div className="dropdown-col-list">
                        {chunk.map((town) => (
                          <Link
                            key={town.slug}
                            href={town.active ? `/new-homes/${town.slug}/` : `/contact/?inquiry=dr-horton-${town.slug}`}
                          >
                            <span>•</span> {town.name}
                            {!town.active && (
                              <span className="badge-inquire">
                                INQUIRE
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a href="tel:8005550199" className="header-phone-link">
              <Phone size={14} style={{ color: "var(--clr-accent)" }} /> (800) 555-0199
            </a>
            
            <Link href="/contact" className="btn btn-primary btn-sm">
              Schedule Consultation
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side-Drawer Navigation */}
      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="mobile-nav-links">
          {/* Mobile Towns Dropdown Trigger */}
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="mobile-nav-dropdown-trigger"
          >
            <span>Explore Towns</span>
            <ChevronDown size={18} style={{ transform: mobileDropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
          </button>

          {/* Mobile Flat Grid of Towns */}
          {mobileDropdownOpen && (
            <div className="mobile-nav-dropdown-container">
              <div className="mobile-nav-dropdown-grid">
                {towns.map((town) => (
                  <Link
                    key={town.slug}
                    href={town.active ? `/new-homes/${town.slug}/` : `/contact/?inquiry=dr-horton-${town.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-nav-town-link"
                  >
                    • {town.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact Specialist
          </Link>
        </div>

        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          <a
            href="tel:8005550199"
            className="btn btn-primary btn-full"
            style={{ marginBottom: "0.5rem" }}
          >
            <Phone size={16} /> Call (800) 555-0199
          </a>
          <p style={{ fontSize: "0.75rem", color: "var(--clr-gray-400)", textAlign: "center" }}>
            Expert independent guidance — free to buyers.
          </p>
        </div>
      </nav>
    </>
  );
}
