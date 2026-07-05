import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("charlotte-nc")!;
const community = getCommunityBySlug("charlotte-nc", "hamilton-woods")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function HamiltonWoodsPage() {
  return <CommunityPageContent city={city} community={community} />;
}
