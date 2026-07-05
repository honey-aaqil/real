import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Charlotte NC | DR Horton Communities & Prices",
  description: "Browse all D.R. Horton new construction homes in Charlotte, NC. 6 communities from $260K with modern finishes, smart home tech, and financing options. Schedule a tour today.",
};

export default function CharlottePage() {
  return <CityPageContent citySlug="charlotte-nc" />;
}
