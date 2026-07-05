import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Concord NC | Skybrook Corners | DR Horton",
  description: "Discover new construction townhomes at Skybrook Corners in Concord, NC. Cabarrus County schools, near Charlotte Motor Speedway and premium retail.",
};

export default function ConcordPage() {
  return <CityPageContent citySlug="concord-nc" />;
}
