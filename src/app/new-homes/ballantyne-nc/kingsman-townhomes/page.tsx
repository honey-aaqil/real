import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("ballantyne-nc")!;
const community = getCommunityBySlug("ballantyne-nc", "kingsman-townhomes")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function KingsmanTownhomesPage() {
  return <CommunityPageContent city={city} community={community} />;
}
