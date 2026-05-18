import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75],
    deviceSizes: [640, 1080, 1920, 2560, 3840],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
