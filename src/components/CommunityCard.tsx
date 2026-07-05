import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Ruler, ArrowRight } from "lucide-react";
import type { Community } from "@/data/communities";

interface CommunityCardProps {
  community: Community;
  citySlug: string;
  /** Optional photograph — rendered with the cinematic zoom/grade treatment */
  image?: string;
  /** First cards above the fold get eager/high-priority loading */
  priority?: boolean;
}

export default function CommunityCard({ community, citySlug, image, priority }: CommunityCardProps) {
  return (
    <Link
      href={`/new-homes/${citySlug}/${community.slug}`}
      className="card"
      style={{ textDecoration: "none", display: "block" }}
    >
      {image ? (
        <div className="card-image-frame image-skeleton">
          <Image
            src={image}
            alt={`${community.name} — new construction home`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            onLoad={(e) => e.currentTarget.parentElement?.classList.add("is-loaded")}
          />
          {community.usdaEligible && (
            <span className="badge badge-usda card-image-badge">USDA Eligible</span>
          )}
        </div>
      ) : (
        <div
          className="card-image"
          style={{
            background: `radial-gradient(circle at top right, rgba(201,169,97,0.16), transparent 60%), linear-gradient(135deg, #1B2520 0%, #121318 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
            position: "relative",
          }}
        >
          <span>{community.name}</span>
          {community.usdaEligible && (
            <span
              className="badge badge-usda"
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontSize: "0.625rem",
              }}
            >
              USDA Eligible
            </span>
          )}
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{community.name}</h3>
        <p className="card-price">{community.priceRange}</p>

        <div className="card-specs">
          <span><Bed size={14} /> {community.beds} Beds</span>
          <span><Bath size={14} /> {community.baths} Baths</span>
          <span><Ruler size={14} /> {community.sqftRange}</span>
        </div>

        <p className="card-hook">{community.hookLine}</p>

        <span className="btn btn-primary btn-sm btn-full">
          View Community <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
