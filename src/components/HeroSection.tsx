import { ReactNode } from "react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  heroClass?: string;
  children?: ReactNode;
}

export default function HeroSection({ badge, title, subtitle, heroClass, children }: HeroSectionProps) {
  return (
    <section className={`hero ${heroClass || ""}`}>
      <div className="hero-overlay" />
      <div className="hero-content">
        {badge && (
          <div className="hero-badge">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
            {badge}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
