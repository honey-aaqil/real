import type { Metadata } from "next";
import { getCityBySlug, getCommunityBySlug } from "@/data/communities";
import CommunityPageContent from "@/components/CommunityPageContent";

const city = getCityBySlug("concord-nc")!;
const community = getCommunityBySlug("concord-nc", "skybrook-corners-townhomes")!;

export const metadata: Metadata = {
  title: community.metaTitle,
  description: community.metaDescription,
};

export default function SkybrookCornersPage() {
  return <CommunityPageContent city={city} community={community} />;
}
