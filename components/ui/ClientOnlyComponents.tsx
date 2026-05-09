"use client";
// This wrapper exists solely to host `ssr: false` dynamic imports,
// which are only permitted inside Client Components (Next.js 13+).
import dynamic from "next/dynamic";

export const SplashScreen = dynamic(
  () => import("@/components/ui/SplashScreen"),
  { ssr: false }
);

export const ParticlesBackground = dynamic(
  () => import("@/components/ui/ParticlesBackground"),
  { ssr: false }
);
