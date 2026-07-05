import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Construction Troutman NC | USDA Eligible Homes | DR Horton",
  description: "D.R. Horton new construction in Troutman, NC. 3 USDA eligible communities from $285K near Lake Norman. Basements, gated options, and smart home tech.",
};

export default function TroutmanPage() {
  return <CityPageContent citySlug="troutman-nc" />;
}
