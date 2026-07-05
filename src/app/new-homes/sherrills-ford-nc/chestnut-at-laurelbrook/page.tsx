import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("sherrills-ford-nc")!;
const community = getCommunityBySlug("sherrills-ford-nc", "chestnut-at-laurelbrook")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function ChestnutAtLaurelbrookPage() {
  return <CommunityPageContent city={city} community={community} />;
}
