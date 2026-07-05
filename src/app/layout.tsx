import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionProvider from "@/components/motion/MotionProvider";
import Preloader from "@/components/motion/Preloader";
import CustomCursor from "@/components/motion/CustomCursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-technical",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "New Homes NC | DR Horton Communities & New Construction",
    template: "%s | DR Horton NC Homes",
  },
  description:
    "Browse D.R. Horton new construction homes across North Carolina. 6 cities, 13 communities from $260K. Smart home tech, USDA financing, and modern finishes. Schedule a tour today.",
  metadataBase: new URL("https://drhorton-nc-homes.com"),
  openGraph: {
    title: "DR Horton New Homes in North Carolina",
    description:
      "Discover new construction communities by D.R. Horton across Charlotte, Mooresville, Huntersville, and Lake Norman. Prices from $260K.",
    locale: "en_US",
    type: "website",
    siteName: "DR Horton NC Homes",
  },
  twitter: {
    card: "summary_large_image",
    title: "DR Horton NC New Homes",
    description:
      "New construction homes across North Carolina from America's largest homebuilder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0D",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <SiteHeader />

        {/* Smooth-scroll wrapper: everything that scrolls lives inside */}
        <MotionProvider>
          <main>{children}</main>
          <SiteFooter />
        </MotionProvider>

        {/* Global Mobile-First Floating WhatsApp Widget (fixed — outside the wrapper) */}
        <a
          href="https://wa.me/18005550199?text=Hi!%20I'm%20interested%20in%20D.R.%20Horton%20NC%20New%20Construction%20Homes."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-widget"
          aria-label="Chat with Specialist"
        >
          <MessageCircle size={26} fill="currentColor" />
        </a>
      </body>
    </html>
  );
}
