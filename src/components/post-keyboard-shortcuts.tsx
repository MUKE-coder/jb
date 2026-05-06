"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Only `slug` is read from previous/next — keep the prop type minimal so
// callers can pass either a full Post or a lightweight PostMeta.
type SlugLike = { slug: string };

export function PostKeyboardShortcuts({
  basePath,
  previous,
  next,
}: {
  basePath: string;
  previous: SlugLike | null;
  next: SlugLike | null;
}) {
  const router = useRouter();

  const navigate = (post: SlugLike | null) => {
    if (post) {
      router.push(`${basePath}/${post.slug}`);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();

          if (e.key === "ArrowRight") {
            navigate(next);
          } else {
            navigate(previous);
          }
        }
      },
      { signal }
    );

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
