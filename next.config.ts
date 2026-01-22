import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Use trailing slashes for folder-based routing on GitHub Pages
  trailingSlash: true,

  // Disable Image Optimization API (requires server)
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (uncomment if using project page)
  // basePath: '/fatihmaulana-v1',

  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
