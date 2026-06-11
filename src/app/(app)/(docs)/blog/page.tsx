import dayjs from "dayjs";
import type { Metadata } from "next";

import { BlogList } from "@/components/blog-list";
import { getAllPostsMetadata } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
};

export default function Page() {
  // Metadata-only — listings never render post.content
  const allPosts = getAllPostsMetadata()
    .slice()
    .sort((a, b) =>
      dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
    );

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <BlogList posts={allPosts} />
    </>
  );
}
