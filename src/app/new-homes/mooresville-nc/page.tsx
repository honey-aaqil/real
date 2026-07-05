import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "DR Horton Mooresville NC | New Homes Near Lake Norman",
  description: "D.R. Horton new homes in Mooresville, NC near Lake Norman. Community pools, fitness centers, and family amenities from $310K. Tour Brantley and Shepherds Farm.",
};

export default function MooresvillePage() {
  return <CityPageContent citySlug="mooresville-nc" />;
}
