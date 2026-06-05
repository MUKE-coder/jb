"use client";

import {
  AdSlot,
  BrandedBanner,
  createExpiringStorage,
} from "beautiful-banner-ads";
import { useEffect, useMemo, useState } from "react";

/**
 * Site-wide self-promotion banner rotator.
 *
 * - 5 ads (DGateway · WesendAll · Grit · Nexora · Vibekit) rotate every
 *   30 seconds, paused on hover.
 * - Each ad uses BrandedBanner with its own transparent 3D product
 *   image (public/trans-ads/*.png).
 * - The slot alternates corner every full cycle through all 5 ads:
 *   round 1 → bottom-right, round 2 → bottom-left, repeat.
 * - Dismissed banners are remembered per-product for 7 days via the
 *   package's built-in createExpiringStorage adapter.
 *
 * Note on the image map: the package's BannerConfig type intentionally
 * does NOT include `image` (it's BrandedBanner-specific, not a shared
 * core field). So we keep the rotating ad content in `ADS` (BannerConfig
 * shape) and pair each ad with its image via `AD_IMAGES`, looking it up
 * by id in the children-as-function renderer.
 */

const ROTATION_INTERVAL_MS = 30_000;
const DISMISS_WINDOW_DAYS = 7;
const BANNER_WIDTH = "460px";

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
  },
] as const;

const AD_IMAGES: Record<string, { src: string; alt: string }> = {
  "promo-dgateway": {
    src: "/trans-ads/smartphone_payment_render.png",
    alt: "DGateway — mobile payment success on smartphone",
  },
  "promo-wesendall": {
    src: "/trans-ads/envelope_render.png",
    alt: "WesendAll — envelope with SMS and email satellites",
  },
  "promo-grit": {
    src: "/trans-ads/panels_render.png",
    alt: "Grit Framework — fanned glass panels for each client target",
  },
  "promo-nexora": {
    src: "/trans-ads/sphere_render_variant.png",
    alt: "Nexora AI — glass sphere of vector embeddings",
  },
  "promo-vibekit": {
    src: "/trans-ads/ui_cards_render.png",
    alt: "Vibekit — stacked translucent UI cards",
  },
};

const FULL_CYCLE_MS = ROTATION_INTERVAL_MS * ADS.length;

type Corner = "bottom-right" | "bottom-left";

export function SiteBannerAds() {
  const storage = useMemo(
    () => createExpiringStorage({ days: DISMISS_WINDOW_DAYS }),
    []
  );

  const [corner, setCorner] = useState<Corner>("bottom-right");

  useEffect(() => {
    const id = window.setInterval(() => {
      setCorner((prev) =>
        prev === "bottom-right" ? "bottom-left" : "bottom-right"
      );
    }, FULL_CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <AdSlot
      ads={ADS}
      rotate={{ interval: ROTATION_INTERVAL_MS, pauseOnHover: true }}
      position="corner"
      corner={corner}
      offset={24}
      storage={storage}
    >
      {(config) => (
        <BrandedBanner
          config={config}
          image={AD_IMAGES[config.id ?? ""]}
          dismissible
          storage={storage}
          layout="image-right"
          width={BANNER_WIDTH}
        />
      )}
    </AdSlot>
  );
}
