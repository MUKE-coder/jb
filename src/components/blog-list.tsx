"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PostMeta } from "@/data/blog";
import { cn } from "@/lib/utils";

const ALL_CATEGORIES = "__all__" as const;

function normalize(s: string) {
  return s.toLowerCase().trim();
}

function titleCase(s: string) {
  return s
    .split("-")
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ");
}

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);

  // Build the category list ONCE per posts prop. Each pill carries its
  // own count so users can see how many posts back the filter before
  // they click. Sorted by frequency descending so the heaviest category
  // sits next to the "All" pill.
  const categoryEntries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      const cat = post.metadata.category;
      if (!cat) continue;
      counts.set(cat, (counts.get(cat) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    });
  }, [posts]);

  const filtered = useMemo(() => {
    const q = normalize(search);
    return posts.filter((post) => {
      if (category !== ALL_CATEGORIES && post.metadata.category !== category) {
        return false;
      }
      if (!q) return true;
      const haystack = [post.metadata.title, post.metadata.description]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, search, category]);

  const isFiltering = search.length > 0 || category !== ALL_CATEGORIES;

  return (
    <>
      <div className="screen-line-after p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-mono text-sm text-muted-foreground">
            {isFiltering ? (
              <>
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                of {posts.length} posts
              </>
            ) : (
              <>
                <span className="font-semibold text-foreground">
                  {posts.length}
                </span>{" "}
                {posts.length === 1 ? "post" : "posts"} total
              </>
            )}
          </p>

          {isFiltering && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory(ALL_CATEGORIES);
              }}
              className="font-mono text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="screen-line-after p-4">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search blog posts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 pl-9"
            aria-label="Search blog posts"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <XIcon className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className="screen-line-after p-4">
        <div className="flex flex-wrap gap-2">
          <CategoryPill
            label="All"
            count={posts.length}
            active={category === ALL_CATEGORIES}
            onClick={() => setCategory(ALL_CATEGORIES)}
          />
          {categoryEntries.map(([cat, count]) => (
            <CategoryPill
              key={cat}
              label={titleCase(cat)}
              count={count}
              active={category === cat}
              onClick={() =>
                setCategory(category === cat ? ALL_CATEGORIES : cat)
              }
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="px-4 py-16 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No posts match your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory(ALL_CATEGORIES);
            }}
            className="mt-3 font-mono text-sm text-foreground underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="relative pt-4">
          <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filtered.map((post, index) => (
              <PostItem
                key={post.slug}
                post={post}
                shouldPreloadImage={index <= 4}
              />
            ))}
          </div>
        </div>
      )}

      <div className="h-4" />
    </>
  );
}

function CategoryPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className="gap-1.5"
      aria-pressed={active}
    >
      <span>{label}</span>
      <span
        className={cn(
          "rounded-full px-1.5 font-mono text-xs",
          active ? "bg-white/15 text-white" : "bg-muted text-muted-foreground"
        )}
      >
        {count}
      </span>
    </Button>
  );
}
