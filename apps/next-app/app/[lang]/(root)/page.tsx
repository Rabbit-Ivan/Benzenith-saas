import type { Metadata } from "next";

import { HERO_BANNER_MOBILE_URL, HERO_BANNER_URL } from "@/lib/hero-banner";

import HomePageClient from "./HomePageClient";

// Preload LCP hero image only for homepage
export const metadata: Metadata = {
  other: {
    // This adds a preload link tag in the document head
  },
};

export default function HomePage() {
  return (
    <>
      {/* Preload LCP hero image for faster first paint - homepage only */}
      <link
        rel="preload"
        as="image"
        href={HERO_BANNER_MOBILE_URL}
        type="image/jpeg"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={HERO_BANNER_URL}
        type="image/jpeg"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <HomePageClient />
    </>
  );
}
