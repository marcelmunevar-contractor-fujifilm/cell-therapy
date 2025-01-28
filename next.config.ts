import type { NextConfig } from "next";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/cell-therapy" : "", // Apply basePath only in production
  assetPrefix: isProduction ? "/cell-therapy" : "", // Apply assetPrefix only in production
};

export default nextConfig;
