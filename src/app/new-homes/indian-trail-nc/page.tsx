import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Indian Trail NC | Sanctuary at Southgate | DR Horton",
  description: "Browse new single-family homes and low-maintenance townhomes at Sanctuary at Southgate in Indian Trail, NC. Exceptional Union County schools and I-485 access.",
};

export default function IndianTrailPage() {
  return <CityPageContent citySlug="indian-trail-nc" />;
}
