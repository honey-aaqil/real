import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("huntersville-nc")!;
const community = getCommunityBySlug("huntersville-nc", "oak-grove-hill")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function OakGroveHillPage() {
  return <CommunityPageContent city={city} community={community} />;
}
