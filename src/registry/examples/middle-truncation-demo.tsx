"use client";

import { MiddleTruncation } from "@/registry/components/middle-truncation/middle-truncation";

export default function MiddleTruncationDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border bg-card p-6 text-sm">
      <div className="flex w-full flex-col gap-1.5">
        <div className="overflow-hidden font-mono text-xs whitespace-nowrap text-muted-foreground">
          {`<MiddleTruncation>`}
        </div>
        <MiddleTruncation>
          /Users/jb/Code/portfolio/src/components/ui/button.tsx
        </MiddleTruncation>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <div className="overflow-hidden font-mono text-xs whitespace-nowrap text-muted-foreground">
          {`<MiddleTruncation end={4}>`}
        </div>
        <MiddleTruncation end={4}>
          FY26_Q1_Consolidated_Financial_Statements.pdf
        </MiddleTruncation>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <div className="overflow-hidden font-mono text-xs whitespace-nowrap text-muted-foreground">
          {`<MiddleTruncation minEnd={12}>`}
        </div>
        <MiddleTruncation minEnd={12}>
          /Users/jb/Code/portfolio/node_modules/shadcn/package.json
        </MiddleTruncation>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <div className="overflow-hidden font-mono text-xs whitespace-nowrap text-muted-foreground">
          {`<MiddleTruncation ellipsis=" ... ">`}
        </div>
        <MiddleTruncation ellipsis=" ... ">
          https://www.apple.com/newsroom/pdfs/fy2026-q1/FY26_Q1_Consolidated_Financial_Statements.pdf
        </MiddleTruncation>
      </div>
    </div>
  );
}
