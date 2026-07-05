import { Home, Ruler, Bed, DollarSign, Car, Shield } from "lucide-react";

interface QuickFactsBarProps {
  homeTypes: string;
  sqftRange: string;
  beds: string;
  priceRange: string;
  garage: string;
  usdaEligible: boolean;
}

export default function QuickFactsBar({
  homeTypes,
  sqftRange,
  beds,
  priceRange,
  garage,
  usdaEligible,
}: QuickFactsBarProps) {
  const facts = [
    { icon: <Home size={16} />, label: "Home Types", value: homeTypes },
    { icon: <Ruler size={16} />, label: "Size Range", value: sqftRange },
    { icon: <Bed size={16} />, label: "Bedrooms", value: `${beds} Beds` },
    { icon: <DollarSign size={16} />, label: "Starting Price", value: priceRange.split("–")[0].trim() },
    { icon: <Car size={16} />, label: "Garage", value: garage },
    {
      icon: <Shield size={16} />,
      label: "USDA Eligible",
      value: usdaEligible ? "Yes ✓" : "No",
    },
  ];

  return (
    <div className="quick-facts">
      {facts.map((fact, i) => (
        <div key={i} className="quick-fact">
          <div
            className="quick-fact-label"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
          >
            <span style={{ color: "var(--clr-primary)" }}>{fact.icon}</span>
            {fact.label}
          </div>
          <div
            className="quick-fact-value"
            style={{
              color: fact.label === "USDA Eligible" && usdaEligible
                ? "var(--clr-success)"
                : undefined,
            }}
          >
            {fact.value}
          </div>
        </div>
      ))}
    </div>
  );
}
