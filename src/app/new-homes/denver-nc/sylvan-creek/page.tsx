import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("denver-nc")!;
const community = getCommunityBySlug("denver-nc", "sylvan-creek")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function SylvanCreekPage() {
  return <CommunityPageContent city={city} community={community} />;
}
