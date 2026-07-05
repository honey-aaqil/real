import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "DR Horton Sherrills Ford NC | USDA Eligible New Homes Lake Norman",
  description: "D.R. Horton new homes in Sherrills Ford, NC. USDA eligible, zero down payment, basement options near Lake Norman from $290K. Tour our communities today.",
};

export default function SherrillsFordPage() {
  return <CityPageContent citySlug="sherrills-ford-nc" />;
}
