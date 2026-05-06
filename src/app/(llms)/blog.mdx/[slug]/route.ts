import { notFound } from "next/navigation";

import { getAllPostsMetadata, getPostBySlug } from "@/data/blog";
import { getLLMText } from "@/lib/get-llm-text";

export async function generateStaticParams() {
  // Slugs only — no need to load post.content here
  const posts = getAllPostsMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // O(n) but cached — getPostBySlug uses the memoised post list
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return new Response(await getLLMText(post), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
