import type { Metadata } from "next";
import Link from "next/link";

import { OpenSourceProjectItem } from "@/components/opensource-project-item";
import { getOpenSourceProjectsByCategory } from "@/data/opensource-projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Hand-curated open-source projects developers can learn from — grouped by Golang, Next.js, AI, AI Agents, React, React Native, Learning, and Optimisation.",
};

function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function Page() {
  const groups = getOpenSourceProjectsByCategory();
  const total = groups.reduce((sum, g) => sum + g.projects.length, 0);

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">
          Open Source
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({total})
          </sup>
        </h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      {/* Sticky category nav — anchor links to each section below */}
      <nav
        aria-label="Open source categories"
        className={cn(
          "screen-line-after sticky top-14 z-10",
          "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}
      >
        <ul className="flex flex-wrap items-center gap-1 px-4 py-3">
          {groups.map(({ category, projects }) => (
            <li key={category}>
              <Link
                href={`#${slugifyCategory(category)}`}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs tracking-wider uppercase",
                  "border-edge text-muted-foreground transition-colors",
                  "hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
                <span className="text-muted-foreground/60">
                  ({projects.length})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col">
        {groups.map(({ category, projects }) => (
          <section
            key={category}
            id={slugifyCategory(category)}
            aria-labelledby={`${slugifyCategory(category)}-heading`}
            className="screen-line-after scroll-mt-32"
          >
            <div className="screen-line-after flex items-baseline justify-between px-4 py-4">
              <h2
                id={`${slugifyCategory(category)}-heading`}
                className="text-2xl font-semibold"
              >
                {category}
                <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
                  ({projects.length})
                </sup>
              </h2>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-0 max-sm:hidden sm:grid-cols-2">
                <div className="border-r border-edge"></div>
                <div className="border-l border-edge"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {projects.map((project) => (
                  <OpenSourceProjectItem key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="h-4" />
    </>
  );
}
