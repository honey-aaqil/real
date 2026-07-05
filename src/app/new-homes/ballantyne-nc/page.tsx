import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "New Homes Ballantyne NC | Luxury South Charlotte | DR Horton",
  description: "Browse prestigious new construction single-family homes and townhomes near Ballantyne Corporate Park in South Charlotte, NC by D.R. Horton. Top-rated schools.",
};

export default function BallantynePage() {
  return <CityPageContent citySlug="ballantyne-nc" />;
}
