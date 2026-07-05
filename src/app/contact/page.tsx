import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact D.R. Horton NC | Sales Offices & Agent Inquiries",
  description:
    "Get in touch with our North Carolina new home specialists. Request floorplans, schedule community tours, and speak with a DHI Mortgage adviser.",
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        type="ContactPage"
        data={{
          name: "Contact DR Horton NC",
          description: "Get in touch with the DR Horton sales and financing teams in North Carolina.",
          url: "https://drhorton-nc-homes.com/contact",
        }}
      />

      <HeroSection
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Speak with a local D.R. Horton specialist about floorplans, pricing, and available home buying incentives in North Carolina."
      />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
            
            {/* Form Column */}
            <div>
              <h3 style={{ marginBottom: "1.5rem" }}>Send Us a Message</h3>
              <LeadCaptureForm
                source="contact-page"
                compact={true}
                showCommunityField={true}
              />
            </div>

            {/* Info Column */}
            <div>
              <h3 style={{ marginBottom: "1.5rem" }}>Office Information</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="tile-icon" style={{ flexShrink: 0 }}><Phone size={20} /></div>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Call Sales Support</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: "var(--clr-primary)" }}>(704) 555-0199</p>
                    <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--clr-gray-500)" }}>Mon–Sat: 9am–6pm • Sun: 1pm–6pm</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="tile-icon" style={{ flexShrink: 0 }}><Mail size={20} /></div>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Email Sales Team</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: "var(--clr-primary)" }}>ncsales@drhorton.com</p>
                    <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--clr-gray-500)" }}>We respond to all emails within 24 hours.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="tile-icon" style={{ flexShrink: 0 }}><MapPin size={20} /></div>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Regional Office</h4>
                    <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--clr-gray-700)", lineHeight: 1.5 }}>
                      D.R. Horton Charlotte Division<br />
                      12125 Community House Road, Suite 100<br />
                      Charlotte, NC 28277
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="tile-icon" style={{ flexShrink: 0 }}><Clock size={20} /></div>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Tour Hours</h4>
                    <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--clr-gray-700)", lineHeight: 1.5 }}>
                      Model homes are open daily for walk-ins and scheduled appointments. Self-guided tours are available in select communities via the smartphone app.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
