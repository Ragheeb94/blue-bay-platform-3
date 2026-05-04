import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "permobilwebcdn.azureedge.net" },
      { protocol: "https", hostname: "www.sunrisemedical.ca" },
      { protocol: "https", hostname: "www.pridemobility.com" },
      { protocol: "https", hostname: "www.futuremobility.com" },
      { protocol: "https", hostname: "www.futuremobility.ca" },
    ],
  },
};

export default nextConfig;
