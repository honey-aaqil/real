import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Statesville NC | Wallace Springs | DR Horton",
  description: "Explore spacious ranch and two-story homes with 2-3 car garages at Wallace Springs in Statesville, NC by D.R. Horton. Resort-style pool, cabana, and trails.",
};

export default function StatesvillePage() {
  return <CityPageContent citySlug="statesville-nc" />;
}
