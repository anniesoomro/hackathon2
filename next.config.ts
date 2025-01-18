import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  

  // Configuring external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Sanity image domain
        port: "",
        pathname: "/images/**", // Sanity image path
      },
    ],
  },
};

export default nextConfig;