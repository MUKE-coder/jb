// import "@/styles/go.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

import { SiteHeader } from "@/components/site-header";
import { ToggleTheme } from "@/components/toggle-theme";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go: Zero to Hero - DevOps Mastery",
  description:
    "Comprehensive Go tutorial platform for DevOps engineers. Learn from basics to advanced patterns with hands-on projects.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function GoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <SiteHeader /> */}
      <div className="fixed top-5 right-5">
        <ToggleTheme />
      </div>
      {children}
    </div>
  );
}
