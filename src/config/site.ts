import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://jb.desishub.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "Devops",
    href: "/devops",
  },
  {
    title: "Golang",
    href: "/golang",
  },
  {
    title: "AI Prompts",
    href: "/ai-prompts",
  },
  {
    title: "Ebooks",
    href: "/ebooks",
  },

  {
    title: "Blogs",
    href: "/blog",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const SOURCE_CODE_GITHUB_REPO = "https://github.com/MUKE-coder";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/MUKE-coder";

export const UTM_PARAMS = {
  utm_source: "jb.desishub.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
