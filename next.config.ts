import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["mishanep.store", "localhost:3000"],
    },
  },
};

export default nextConfig;
