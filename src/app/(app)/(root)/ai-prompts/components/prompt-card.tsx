"use client";

import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

import type { AIPrompt } from "../data/prompts";

export function PromptCard({ title, body, howToUse }: AIPrompt) {
  return (
    <div
      className={cn(
        "screen-line-before screen-line-after space-y-4 border-x border-edge p-4"
      )}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="relative">
        <div className="rounded-lg border border-edge bg-muted/50 p-4 pr-10">
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {body}
          </p>
        </div>
        <CopyButton value={body} className="absolute top-2 right-2" />
      </div>

      <div className="rounded-lg border border-dashed border-edge p-4">
        <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          How to use
        </p>
        <p className="text-sm text-foreground/80">{howToUse}</p>
      </div>
    </div>
  );
}
