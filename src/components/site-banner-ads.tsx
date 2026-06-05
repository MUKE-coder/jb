"use client";

import {
  AdSlot,
  type BannerConfig,
  BrandedBanner,
  createExpiringStorage,
} from "beautiful-banner-ads";
import { useMemo } from "react";

/**
 * Site-wide self-promotion banner rotator.
 *
 * - 5 ads (DGateway · WesendAll · Grit · Nexora · Vibekit) rotate every
 *   30 seconds, paused on hover. AdSlot's default renderer (BannerAd
 *   with branded layout) uses each config's `image` directly.
 * - The slot alternates corner every full pass through the ads:
 *   round 1 → bottom-right, round 2 → bottom-left, repeat. Handled
 *   natively by the package's `corner={[...]}` array support (no
 *   external useEffect / setInterval needed).
 * - Each image uses `fit: "contain"` so the transparent 1024×1024
 *   source scales cleanly inside whatever column the BrandedBanner
 *   gives it without overflowing.
 * - Dismissed banners are remembered per-product for 7 days via the
 *   package's built-in createExpiringStorage. AdSlot cascades both the
 *   storage adapter and the dismissible default to every banner.
 */

const ROTATION_INTERVAL_MS = 30_000;
const DISMISS_WINDOW_DAYS = 7;
const BANNER_WIDTH = "520px"; // wider so the image-right column has room

const ADS: readonly BannerConfig[] = [
  {
    id: "promo-dgateway",
    eyebrow: "PAYMENTS",
    title: "Accept Mobile Money in your app",
    subtitle: "MTN MoMo, Airtel & Stripe — one API.",
    cta: {
      label: "Try DGateway",
      href: "https://dgateway.desispay.com",
    },
    image: {
      src: "/trans-ads/smartphone_payment_render.png",
      alt: "DGateway — mobile payment success on smartphone",
      fit: "contain",
      position: "center",
    },
  },
  {
    id: "promo-wesendall",
    eyebrow: "BULK MESSAGING",
    title: "Bulk SMS & Email from one dashboard",
    subtitle: "Built for African senders.",
    cta: {
      label: "Start sending",
      href: "https://www.wesendall.com",
    },
    image: {
      src: "/trans-ads/envelope_render.png",
      alt: "WesendAll — envelope with SMS and email satellites",
      fit: "contain",
      position: "center",
    },
  },
  {
    id: "promo-grit",
    eyebrow: "GO FRAMEWORK",
    title: "Ship a multi-client SaaS from one schema",
    subtitle: "API + desktop + mobile + web, in Go.",
    cta: {
      label: "Explore Grit",
      href: "https://gritframework.dev",
    },
    image: {
      src: "/trans-ads/panels_render.png",
      alt: "Grit Framework — fanned glass panels for each client target",
      fit: "contain",
      position: "center",
    },
  },
  {
    id: "promo-nexora",
    eyebrow: "AI AGENTS",
    title: "Build AI agents trained on your data",
    subtitle: "Multi-tenant RAG platform. Free to start.",
    cta: {
      label: "Try Nexora",
      href: "https://nexora.gritcms.com",
    },
    image: {
      src: "/trans-ads/sphere_render_variant.png",
      alt: "Nexora AI — glass sphere of vector embeddings",
      fit: "contain",
      position: "center",
    },
  },
  {
    id: "promo-vibekit",
    eyebrow: "NEXT.JS TOOLKIT",
    title: "Ship Next.js apps faster",
    subtitle: "Curated UI components + production starters.",
    cta: {
      label: "Browse Vibekit",
      href: "https://vibekit.desishub.com",
    },
    image: {
      src: "/trans-ads/ui_cards_render.png",
      alt: "Vibekit — stacked translucent UI cards",
      fit: "contain",
      position: "center",
    },
  },
];

export function SiteBannerAds() {
  const storage = useMemo(
    () => createExpiringStorage({ days: DISMISS_WINDOW_DAYS }),
    []
  );

  // AdSlot's default renderer is BannerAd (text-only). To render the
  // product image we explicitly render BrandedBanner via children-as-
  // function. With v0.3.1's #3 fix, `<BrandedBanner config={config} />`
  // properly pulls `image` from BannerConfig — no spread needed.
  // We re-state width / layout / dismissible / storage on the inner
  // banner because AdSlot's cascade auto-applies only to the default
  // renderer, not to children-as-function consumers.
  return (
    <AdSlot
      ads={ADS}
      rotate={{ interval: ROTATION_INTERVAL_MS, pauseOnHover: true }}
      position="corner"
      corner={["bottom-right", "bottom-left"]}
      offset={24}
      width={BANNER_WIDTH}
      storage={storage}
    >
      {(config) => (
        <BrandedBanner
          config={config}
          layout="image-right"
          width={BANNER_WIDTH}
          dismissible
          storage={storage}
        />
      )}
    </AdSlot>
  );
}
