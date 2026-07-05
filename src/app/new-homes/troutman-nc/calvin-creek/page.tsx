import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("troutman-nc")!;
const community = getCommunityBySlug("troutman-nc", "calvin-creek")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function CalvinCreekPage() {
  return <CommunityPageContent city={city} community={community} />;
}
