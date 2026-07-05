"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface LeadCaptureFormProps {
  source: string;
  compact?: boolean;
  darkMode?: boolean;
  title?: string;
  subtitle?: string;
  showCommunityField?: boolean;
}

export default function LeadCaptureForm({
  source,
  compact = false,
  darkMode = false,
  title,
  subtitle,
  showCommunityField = false,
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    community: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to a backend / CRM
    console.log("Lead submitted:", { ...formData, source });
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div
        className="lead-form-card"
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          background: darkMode ? "rgba(255,255,255,0.06)" : undefined,
          border: darkMode ? "1px solid rgba(255,255,255,0.15)" : undefined,
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--clr-success)", margin: "0 auto 1rem" }}
        />
        <h3 style={{ color: darkMode ? "#fff" : undefined }}>Thank You!</h3>
        <p style={{ color: darkMode ? "rgba(255,255,255,0.7)" : undefined }}>
          We&apos;ve received your inquiry. A DR Horton specialist will reach out
          within 24 hours with pricing, floorplans, and available incentives.
        </p>
      </div>
    );
  }

  return (
    <div
      className={compact ? "" : "lead-form-card"}
      style={
        darkMode
          ? {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--radius-xl)",
              padding: compact ? 0 : "2rem",
            }
          : undefined
      }
    >
      {title && (
        <h3 style={{ color: darkMode ? "#fff" : undefined, marginBottom: "0.25rem" }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p
          style={{
            color: darkMode ? "rgba(255,255,255,0.7)" : undefined,
            fontSize: "0.875rem",
            marginBottom: "1.5rem",
          }}
        >
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className={compact ? "" : "grid-2"} style={compact ? {} : { marginBottom: 0 }}>
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            />
          </div>
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            />
          </div>
        </div>

        <div className={compact ? "" : "grid-2"} style={compact ? {} : { marginBottom: 0 }}>
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            />
          </div>
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Preferred City
            </label>
            <select
              name="city"
              className="form-select"
              value={formData.city}
              onChange={handleChange}
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            >
              <option value="">Select a city...</option>
              <option value="Charlotte">Charlotte</option>
              <option value="Denver">Denver</option>
              <option value="Huntersville">Huntersville</option>
              <option value="Sherrills Ford">Sherrills Ford</option>
              <option value="Troutman">Troutman</option>
              <option value="Mooresville">Mooresville</option>
            </select>
          </div>
        </div>

        {showCommunityField && (
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Community of Interest
            </label>
            <input
              type="text"
              name="community"
              className="form-input"
              placeholder="e.g. Reedy Creek Preserve"
              value={formData.community}
              onChange={handleChange}
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            />
          </div>
        )}

        {!compact && (
          <div className="form-group">
            <label className="form-label" style={darkMode ? { color: "rgba(255,255,255,0.6)" } : {}}>
              Message (Optional)
            </label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Tell us what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              style={darkMode ? { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" } : {}}
            />
          </div>
        )}

        <button
          type="submit"
          className={`btn ${darkMode ? "btn-accent" : "btn-primary"} btn-full`}
          style={{ marginTop: "0.5rem" }}
        >
          <Send size={16} /> Request Floorplans & Pricing
        </button>

        <p
          style={{
            fontSize: "0.6875rem",
            color: darkMode ? "rgba(255,255,255,0.4)" : "var(--clr-gray-400)",
            textAlign: "center",
            marginTop: "0.75rem",
          }}
        >
          By submitting, you agree to receive communications about DR Horton homes.
        </p>
      </form>
    </div>
  );
}
