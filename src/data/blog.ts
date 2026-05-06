import "server-only";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

import type { Post, PostMetadata } from "@/types/blog";

/**
 * Lightweight view of a post — slug + frontmatter, NO content body.
 * Use this anywhere you don't need the MDX body (listings, CommandMenu,
 * RSS, sitemap, llms.txt, neighbour navigation, etc.) so we don't
 * serialise multi-MB strings into the RSC payload.
 */
export type PostMeta = {
  slug: string;
  metadata: PostMetadata;
};

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/* ────────────────────────────────────────────────────────────────────────── */
/*  Disk read — memoised at module level                                     */
/* ────────────────────────────────────────────────────────────────────────── */

// Module-level cache. Survives across requests in the same Node process,
// which is what we want for static MDX content. Next.js HMR will reset
// this when source files change in dev — exactly the desired behaviour.
let _diskCache: Post[] | null = null;

function loadPostsFromDisk(): Post[] {
  if (_diskCache) return _diskCache;

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => path.extname(file) === ".mdx");

  const posts = files.map<Post>((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(raw);
    return {
      metadata: parsed.data as PostMetadata,
      content: parsed.content,
      slug: path.basename(file, path.extname(file)),
    };
  });

  posts.sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  );

  _diskCache = posts;
  return posts;
}

// React.cache adds per-render dedupe on top of the module cache. Calls to
// the same function during the same render share their result.
const getAllPostsUnfiltered = cache((): Post[] => loadPostsFromDisk());

const getAllPostsMetadataCached = cache((): PostMeta[] =>
  getAllPostsUnfiltered().map((p) => ({ slug: p.slug, metadata: p.metadata }))
);

/* ────────────────────────────────────────────────────────────────────────── */
/*  Full-content APIs — only call from the post DETAIL page or RSC that      */
/*  actually renders the body.                                                */
/* ────────────────────────────────────────────────────────────────────────── */

export function getAllPosts(): Post[] {
  return getAllPostsUnfiltered().filter(
    (post) => post.metadata.category !== "components"
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPostsUnfiltered().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPostsUnfiltered().filter(
    (post) => post.metadata?.category === category
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Metadata-only APIs — prefer these for listings, navbar, sitemap, RSS,    */
/*  llms.txt, generateStaticParams, etc. They never expose post.content.     */
/* ────────────────────────────────────────────────────────────────────────── */

/** All posts (excluding the components category) — slug + metadata only. */
export function getAllPostsMetadata(): PostMeta[] {
  return getAllPostsMetadataCached().filter(
    (post) => post.metadata.category !== "components"
  );
}

/** All posts including components — slug + metadata only. */
export function getAllPostsMetadataIncludingComponents(): PostMeta[] {
  return getAllPostsMetadataCached();
}

/** Posts in a single category — slug + metadata only. */
export function getPostsByCategoryMetadata(category: string): PostMeta[] {
  return getAllPostsMetadataCached().filter(
    (post) => post.metadata?.category === category
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Navigation                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

export function findNeighbour<T extends { slug: string }>(
  posts: T[],
  slug: string
): { previous: T | null; next: T | null } {
  const len = posts.length;

  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}
