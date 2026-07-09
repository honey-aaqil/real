import type { Metadata } from "next";
import BrandLockup from "@/components/BrandLockup";
import PinGate from "./PinGate";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "A private portal for buying D.R. Horton new construction homes across Charlotte & Lake Norman — launching soon.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <div className="coming-soon">
      <div className="coming-soon-inner">
        {/* Compliance: firm-first identification on the landing page */}
        <BrandLockup variant="hero" />

        <p className="cs-eyebrow">Charlotte &amp; Lake Norman · New Construction</p>

        <h1 className="cs-title">
          Something <em>exceptional</em>
          <br />
          is on the way.
        </h1>

        <p className="cs-sub">
          A private portal for buying D.R. Horton new construction homes with
          independent representation — at no cost to you.
        </p>

        <div className="cs-rule" aria-hidden="true" />

        <PinGate />
      </div>
    </div>
  );
}
