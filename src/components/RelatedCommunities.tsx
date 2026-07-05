import CommunityCard from "@/components/CommunityCard";
import type { Community } from "@/data/communities";

interface RelatedCommunitiesProps {
  communities: Community[];
  citySlug: string;
  cityName: string;
  currentCommunitySlug: string;
}

export default function RelatedCommunities({
  communities,
  citySlug,
  cityName,
  currentCommunitySlug,
}: RelatedCommunitiesProps) {
  const related = communities.filter((c) => c.slug !== currentCommunitySlug);

  if (related.length === 0) return null;

  return (
    <section className="related-section">
      <div className="container">
        <div className="section-header">
          <h2>Other Communities in {cityName}</h2>
          <p>Explore more D.R. Horton homes in the {cityName} area</p>
        </div>
        <div className="grid-cities">
          {related.map((community) => (
            <CommunityCard
              key={community.slug}
              community={community}
              citySlug={citySlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
