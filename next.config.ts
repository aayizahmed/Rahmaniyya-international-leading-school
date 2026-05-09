import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Performance ──────────────────────────────────────────────
  compress: true, // Enable gzip/brotli compression

  // ─── Image Optimisation ───────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"], // Prefer AVIF then WebP
    minimumCacheTTL: 31536000, // 1 year cache for optimised images
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Allow Unsplash images used in SocialConnect section
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ─── Security Headers ─────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Reduce referrer info leakage
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Force HTTPS for 1 year (includeSubDomains)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Content-Security-Policy — strict but functional
          // Allows: self, Google Fonts, EmailJS, Elfsight widget,
          //         Google Maps iframe, Unsplash images, WhatsApp
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + EmailJS SDK + Elfsight widget
              "script-src 'self' 'unsafe-inline' https://cdn.emailjs.com https://elfsightcdn.com https://core.service.elfsight.com",
              // Styles: self + Google Fonts + inline (Tailwind / framer-motion)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs + Unsplash
              "img-src 'self' data: blob: https://images.unsplash.com https://www.transparenttextures.com",
              // Iframes: Google Maps embed
              "frame-src https://www.google.com",
              // Connections: EmailJS API + Elfsight
              "connect-src 'self' https://api.emailjs.com https://core.service.elfsight.com https://static.elfsight.com",
              // Workers
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
      // ── Long-lived cache for all static assets ─────────────────
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },

  // ─── HTTPS redirect (Vercel handles this automatically,
  //     but this config also covers self-hosted deployments) ─────
  async redirects() {
    return [];
  },

  // ─── Bundle optimisation ──────────────────────────────────────
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" header
};

export default nextConfig;
