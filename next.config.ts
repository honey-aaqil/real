import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  allowedDevOrigins: ['brush-definite-football.ngrok-free.dev'],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
