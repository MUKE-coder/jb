import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import type { PublicApi } from "@/features/profile/data/public-apis";

export function PublicApiCard({
  title,
  description,
  href,
  image,
  badge,
  tags,
}: PublicApi) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/api-card block overflow-hidden rounded-xl border border-edge transition-colors hover:bg-zinc-50/40 dark:hover:bg-zinc-900/40"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-edge bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover transition-transform duration-300 group-hover/api-card:scale-[1.02]"
          unoptimized
        />
        {badge && (
          <span className="absolute top-3 right-3 rounded-md bg-info px-2 py-0.5 font-mono text-xs font-medium text-white text-shadow-xs">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold underline-offset-4 group-hover/api-card:underline">
            {title}
          </h3>
          <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover/api-card:translate-x-0.5 group-hover/api-card:-translate-y-0.5" />
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>

        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-edge px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-1 font-mono text-xs text-muted-foreground">
          {href.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </a>
  );
}
