import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "DR Horton Huntersville NC | New Construction Homes & Communities",
  description: "D.R. Horton new construction homes in Huntersville, NC. Basement options, wooded lots, top-rated schools from $365K. Explore Oak Grove Hill community today.",
};

export default function HuntersvillePage() {
  return <CityPageContent citySlug="huntersville-nc" />;
}
