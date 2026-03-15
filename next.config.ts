import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    qualities: [60, 75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
      },
    ],
  },
};

export default nextConfig;
