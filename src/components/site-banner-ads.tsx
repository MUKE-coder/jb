"use client";

import { AdSlot } from "beautiful-banner-ads";
import { useMemo } from "react";

/**
 * Site-wide self-promotion banner rotator.
 *
 * Renders a single dismissible corner toast (bottom-right) that rotates
 * through JB's own products every 8 seconds, paused on hover. Dismissed
 * banners are remembered per-product for 7 days via localStorage.
 */

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const ROTATION_INTERVAL_MS = 8000;

/**
 * A Storage-shaped wrapper around localStorage that auto-expires entries
 * after 7 days. We use this for the banner package's dismiss-storage so a
 * user who closes "DGateway" doesn't see it again for a week, but the same
 * banner does eventually return (we don't lose lapsed audiences forever).
 *
 * Falls back to undefined on the server so AdSlot's SSR path stays clean.
 */
function createSevenDayStorage(): Storage | undefined {
  if (typeof window === "undefined") return undefined;

  return {
    get length() {
      return window.localStorage.length;
    },
    clear() {
      window.localStorage.clear();
    },
    getItem(key) {
      const raw = window.localStorage.getItem(key);
      if (!raw) return null;
      try {
        const parsed = JSON.parse(raw) as { value: string; expiresAt: number };
        if (Date.now() > parsed.expiresAt) {
          window.localStorage.removeItem(key);
          return null;
        }
        return parsed.value;
      } catch {
        return raw;
      }
    },
    key(index) {
      return window.localStorage.key(index);
    },
    removeItem(key) {
      window.localStorage.removeItem(key);
    },
    setItem(key, value) {
      window.localStorage.setItem(
        key,
        JSON.stringify({ value, expiresAt: Date.now() + SEVEN_DAYS_MS })
      );
    },
  };
}

const BASE_ADS = [
  {
    id: "promo-dgateway",
    eyebrow: "PAYMENTS",
    title: "Accept Mobile Money in your app",
    subtitle: "MTN MoMo, Airtel & Stripe — one API, one dashboard.",
    cta: {
      label: "Try DGateway",
      href: "https://dgateway.desispay.com",
    },
  },
  {
    id: "promo-wesendall",
    eyebrow: "BULK MESSAGING",
    title: "Bulk SMS & Email from one dashboard",
    subtitle: "Built for African senders. Free credits to start.",
    cta: {
      label: "Start sending",
      href: "https://www.wesendall.com",
    },
  },
  {
    id: "promo-grit",
    eyebrow: "GO FRAMEWORK",
    title: "Ship a multi-client SaaS from one schema",
    subtitle: "Grit scaffolds API + desktop + mobile + web in Go.",
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
];

export function SiteBannerAds() {
  const ads = useMemo(() => {
    const storage = createSevenDayStorage();
    return BASE_ADS.map((ad) => ({
      ...ad,
      dismissible: true,
      storage,
    }));
  }, []);

  return (
    <AdSlot
      ads={ads}
      rotate={{ interval: ROTATION_INTERVAL_MS, pauseOnHover: true }}
      position="corner"
      corner="bottom-right"
      offset={24}
      width="360px"
    />
  );
}
