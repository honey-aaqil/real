"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

/** Global floating WhatsApp widget — hidden on the pre-launch gate page. */
export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/coming-soon")) return null;

  return (
    <a
      href="https://wa.me/18005550199?text=Hi!%20I'm%20interested%20in%20D.R.%20Horton%20NC%20New%20Construction%20Homes."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-widget"
      aria-label="Chat with Specialist"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}
