import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdf-parse", "pdfjs-dist", "@napi-rs/canvas"],
};

module.exports = {
  nextConfig,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}
