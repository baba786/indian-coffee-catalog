import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you'll use
    unoptimized: false,
  },
  typescript: {
    ignoreBuildErrors: false, // Keep type checking during build
  },
  eslint: {
    ignoreDuringBuilds: false, // Keep linting during build
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
