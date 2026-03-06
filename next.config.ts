import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/broc-dashboard',
  assetPrefix: '/broc-dashboard',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
