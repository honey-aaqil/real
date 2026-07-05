import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("lincolnton-nc")!;
const community = getCommunityBySlug("lincolnton-nc", "clark-creek-townhomes")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function ClarkCreekTownhomesPage() {
  return <CommunityPageContent city={city} community={community} />;
}
