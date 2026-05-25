import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { OpenSourceProject } from "@/types/opensource-project";

export function OpenSourceProjectItem({
  project,
  className,
}: {
  project: OpenSourceProject;
  className?: string;
}) {
  return (
    <Link
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/oss flex h-full flex-col gap-3 p-4 transition-colors",
        "hover:bg-muted/40",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            {project.category}
          </span>
          <h3 className="text-lg leading-snug font-semibold text-balance underline-offset-4 group-hover/oss:underline">
            {project.title}
          </h3>
        </div>

        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover/oss:translate-x-0.5 group-hover/oss:-translate-y-0.5 group-hover/oss:text-foreground"
        />
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.useCases.slice(0, 5).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="font-mono text-[11px] font-normal tracking-tight"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1 text-xs text-muted-foreground">
        <span className="truncate font-mono">
          {project.github
            .replace("https://github.com/", "")
            .replace(/^https?:\/\//, "")}
        </span>
        {project.stars && (
          <span className="ml-auto inline-flex shrink-0 items-center gap-1 font-mono">
            <StarIcon className="size-3" aria-hidden="true" />
            {project.stars}
          </span>
        )}
      </div>
    </Link>
  );
}
