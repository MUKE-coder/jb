import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

// Public contact details. Phone is shown openly here (and in the global
// meta description) so it's discoverable by search engines and users
// landing on the site can call/WhatsApp directly. The base64-encoded
// USER.phoneNumber stays in user.ts for the legacy anti-scrape paths;
// this constant is the canonical "publish my number" source of truth.
export const JB_CONTACT = {
  phoneE164: "+256762063160",
  phoneFormatted: "+256 762 063 160",
  whatsapp: "https://wa.me/256762063160",
  email: "jb@desishub.com",
} as const;

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://jb.desishub.com",
  ogImage: USER.ogImage,
  // Append phone number + booking CTA to the global meta description so
  // every page Google indexes carries the phone in its snippet — useful
  // for local search and click-to-call from SERP.
  description: `${USER.bio} · Book a session: ${JB_CONTACT.phoneFormatted} · ${JB_CONTACT.email}`,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Tools and APIs",
    href: "/tools",
  },
  {
    title: "Devops",
    href: "/devops",
  },
  {
    title: "Ebooks",
    href: "/ebooks",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  {
    title: "Book JB",
    href: "/book",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "https://github.com/MUKE-coder";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/MUKE-coder";

export const UTM_PARAMS = {
  utm_source: "jb.desishub.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
