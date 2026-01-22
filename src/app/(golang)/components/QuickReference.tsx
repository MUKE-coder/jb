"use client";

interface ReferenceItem {
  title: string;
  snippet: string;
  description: string;
}

interface QuickReferenceProps {
  items: ReferenceItem[];
  title?: string;
}

export default function QuickReference({
  items,
  title = "Quick Reference",
}: QuickReferenceProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-sidebar/30 border-sidebar-border my-6 rounded-lg border p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-accent/20 text-xs font-bold text-accent">
                {idx + 1}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="mb-1 font-mono text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mb-2 text-xs text-muted-foreground">
                  {item.description}
                </p>
                <code className="bg-sidebar block overflow-x-auto rounded p-2 text-xs text-accent">
                  {item.snippet}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
