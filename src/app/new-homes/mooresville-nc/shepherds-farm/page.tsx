import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("mooresville-nc")!;
const community = getCommunityBySlug("mooresville-nc", "shepherds-farm")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function ShepherdsFarmPage() {
  return <CommunityPageContent city={city} community={community} />;
}
