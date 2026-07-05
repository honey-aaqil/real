import * as LucideIcons from "lucide-react";
import type { Amenity } from "@/data/communities";

interface AmenityGridProps {
  amenities: Amenity[];
}

export default function AmenityGrid({ amenities }: AmenityGridProps) {
  return (
    <div className="grid-amenities">
      {amenities.map((amenity, i) => {
        // Dynamically resolve icon by name
        const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[amenity.icon] || LucideIcons.Star;
        return (
          <div key={i} className="amenity-item">
            <div className="amenity-icon">
              <IconComponent size={18} />
            </div>
            <span className="amenity-label">{amenity.label}</span>
          </div>
        );
      })}
    </div>
  );
}
