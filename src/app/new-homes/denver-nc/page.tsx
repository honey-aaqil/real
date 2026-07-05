import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Construction Homes Denver NC | Lake Norman | DR Horton",
  description: "New construction homes in Denver, NC near Lake Norman by D.R. Horton. USDA eligible, zero down payment options, wooded lots from $330K. Tour Sylvan Creek today.",
};

export default function DenverPage() {
  return <CityPageContent citySlug="denver-nc" />;
}
