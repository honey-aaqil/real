import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { City } from "@/data/communities";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
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
    <Link
      href={`/new-homes/${city.slug}`}
      className="card"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className={`card-image ${heroClasses[city.slug] || ""}`}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "1rem",
          height: 180,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
          <MapPin size={14} style={{ color: "rgba(255,255,255,0.7)" }} />
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            {city.name}
          </span>
        </div>
        <span
          className="badge badge-accent"
          style={{
            background: "rgba(184,134,11,0.3)",
            border: "1px solid rgba(184,134,11,0.5)",
            color: "#fff",
            fontSize: "0.625rem",
          }}
        >
          {city.communityCount} {city.communityCount === 1 ? "Community" : "Communities"}
        </span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{city.name}</h3>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--clr-gray-600)",
            marginBottom: "0.75rem",
          }}
        >
          Starting from{" "}
          <span style={{ fontWeight: 700, color: "var(--clr-primary)" }}>
            {city.startingPrice}
          </span>
        </p>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--clr-primary)",
          }}
        >
          Explore Communities <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
