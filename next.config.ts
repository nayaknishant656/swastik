import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Acknowledge Turbopack (Next.js 16+ default)
  turbopack: {},
  
  // Webpack configuration for better hot reloading
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;