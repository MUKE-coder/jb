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
 * v0.4.0 cascades slot defaults (width, layout, dismissible, storage) into
 * the config passed to the render function, so `<BrandedBanner config={c} />`
 * inherits everything without re-statement. Image display size is capped
 * globally in globals.css since the package exposes no per-image size knob.
 */

const ROTATION_INTERVAL_MS = 30_000;
const DISMISS_WINDOW_DAYS = 7;
const BANNER_WIDTH = "520px";

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

  return (
    <AdSlot
      ads={ADS}
      rotate={{ interval: ROTATION_INTERVAL_MS, pauseOnHover: true }}
      position="corner"
      corner={["bottom-right", "bottom-left"]}
      offset={24}
      width={BANNER_WIDTH}
      storage={storage}
      dismissible
      layout="image-right"
    >
      {(config) => <BrandedBanner config={config} />}
    </AdSlot>
  );
}
