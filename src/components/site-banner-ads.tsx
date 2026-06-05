"use client";

import {
  AdSlot,
  type BannerConfig,
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
 * - Each image is constrained to a fixed render box (180×180) with
 *   `fit: "contain"` so the transparent 1024×1024 source doesn't blow
 *   up to fill the whole banner.
 * - Dismissed banners are remembered per-product for 7 days via the
 *   package's built-in createExpiringStorage. AdSlot cascades both the
 *   storage adapter and the dismissible default to every banner.
 */

const ROTATION_INTERVAL_MS = 30_000;
const DISMISS_WINDOW_DAYS = 7;
const BANNER_WIDTH = "460px";
const IMAGE_RENDER_SIZE = 180; // px — keeps the 1024² source in check

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
      width: IMAGE_RENDER_SIZE,
      height: IMAGE_RENDER_SIZE,
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
      width: IMAGE_RENDER_SIZE,
      height: IMAGE_RENDER_SIZE,
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
      width: IMAGE_RENDER_SIZE,
      height: IMAGE_RENDER_SIZE,
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
      width: IMAGE_RENDER_SIZE,
      height: IMAGE_RENDER_SIZE,
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
      width: IMAGE_RENDER_SIZE,
      height: IMAGE_RENDER_SIZE,
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

  return (
    <AdSlot
      ads={ADS}
      rotate={{ interval: ROTATION_INTERVAL_MS, pauseOnHover: true }}
      position="corner"
      corner={["bottom-right", "bottom-left"]}
      offset={24}
      width={BANNER_WIDTH}
      layout="image-right"
      dismissible
      storage={storage}
    />
  );
}
