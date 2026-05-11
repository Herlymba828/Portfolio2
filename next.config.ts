import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone pour Docker
  output: "standalone",

  // Compression pour réduire la taille des assets
  compress: true,

  // Optimisation des images
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  // Optimisations expérimentales
  experimental: {
    // Optimisation du CSS
    optimizeCss: true,
    // Désactiver les source maps en production
    serverSourceMaps: false,
  },

  // Configuration des headers pour le cache
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // Minification avancée
  swcMinify: true,
};

export default nextConfig;
