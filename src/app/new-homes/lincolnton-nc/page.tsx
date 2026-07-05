import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Lincolnton NC | Clark Creek Landing | DR Horton",
  description: "Browse new single-family homes and affordable townhomes at Clark Creek in Lincolnton, NC by D.R. Horton. Highly rated Lincoln County schools and low tax rates.",
};

export default function LincolntonPage() {
  return <CityPageContent citySlug="lincolnton-nc" />;
}
