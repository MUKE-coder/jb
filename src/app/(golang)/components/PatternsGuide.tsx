"use client";

interface Pattern {
  name: string;
  description: string;
  useCases: string[];
  icon?: string;
}

interface PatternsGuideProps {
  patterns: Pattern[];
  title?: string;
}

export default function PatternsGuide({
  patterns,
  title = "Go Patterns & Best Practices",
}: PatternsGuideProps) {
  if (!patterns || patterns.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h3 className="mb-6 text-2xl font-bold text-foreground">{title}</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {patterns.map((pattern, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 flex items-start gap-3">
              <span className="text-2xl">{pattern.icon || "✓"}</span>
              <h4 className="text-lg font-semibold text-foreground">
                {pattern.name}
              </h4>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              {pattern.description}
            </p>

            <div className="bg-sidebar/30 rounded p-3">
              <p className="mb-2 text-xs font-semibold text-foreground">
                Use When:
              </p>
              <ul className="space-y-1">
                {pattern.useCases.map((useCase, useIdx) => (
                  <li
                    key={useIdx}
                    className="flex gap-2 text-xs text-foreground/70"
                  >
                    <span className="text-accent">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
