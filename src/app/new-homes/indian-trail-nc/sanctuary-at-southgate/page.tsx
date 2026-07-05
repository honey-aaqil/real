import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("indian-trail-nc")!;
const community = getCommunityBySlug("indian-trail-nc", "sanctuary-at-southgate")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function SanctuaryAtSouthgatePage() {
  return <CommunityPageContent city={city} community={community} />;
}
