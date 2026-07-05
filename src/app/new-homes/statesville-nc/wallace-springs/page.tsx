import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("statesville-nc")!;
const community = getCommunityBySlug("statesville-nc", "wallace-springs")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function WallaceSpringsPage() {
  return <CommunityPageContent city={city} community={community} />;
}
