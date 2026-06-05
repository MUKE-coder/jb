"use client";

import {
  AdSlot,
  BrandedBanner,
  createExpiringStorage,
} from "beautiful-banner-ads";
import { useMemo } from "react";

/**
 * Site-wide self-promotion banner rotator.
 *
 * Renders a single dismissible corner toast (bottom-right) that rotates
 * through JB's own products every 8 seconds, paused on hover. Each ad
 * uses BrandedBanner with its own transparent product image rendered in
 * the JB 3D clay-render style (lives under public/trans-ads/).
 *
 * Dismissed banners are remembered per-product for 7 days via the
 * package's built-in createExpiringStorage adapter; after the window
 * lapses the same product rotates back in.
 */

const ROTATION_INTERVAL_MS = 8000;
const DISMISS_WINDOW_DAYS = 7;

const ADS = [
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
    },
  },
] as const;

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
      corner="bottom-right"
      offset={24}
      width="440px"
      storage={storage}
    >
      {(config) => (
        <BrandedBanner
          config={config}
          dismissible
          storage={storage}
          layout="image-right"
        />
      )}
    </AdSlot>
  );
}
