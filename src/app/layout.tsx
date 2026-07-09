import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionProvider from "@/components/motion/MotionProvider";
import Preloader from "@/components/motion/Preloader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const geist = Geist({
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
    <html lang="en" className={`${cormorant.variable} ${geist.variable}`}>
      <body>
        <Preloader />
        <SiteHeader />

        {/* Smooth-scroll wrapper: everything that scrolls lives inside */}
        <MotionProvider>
          <main>{children}</main>
          <SiteFooter />
        </MotionProvider>

        {/* Global Mobile-First Floating WhatsApp Widget (fixed — outside the wrapper) */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
