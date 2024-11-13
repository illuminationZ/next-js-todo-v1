import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
      unoptimized: true
  },
  distDir: 'build',
};

export default nextConfig;
