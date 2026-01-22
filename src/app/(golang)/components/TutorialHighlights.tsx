"use client";

interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

interface TutorialHighlightsProps {
  highlights: Highlight[];
}

export default function TutorialHighlights({
  highlights,
}: TutorialHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  const icons: Record<string, string> = {
    tip: "💡",
    warning: "⚠️",
    important: "🎯",
    note: "📝",
  };

  return (
    <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
      {highlights.map((highlight, idx) => (
        <div
          key={idx}
          className="rounded-lg border border-secondary/30 bg-secondary/10 p-4"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{icons[highlight.icon || "note"]}</span>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-secondary">
                {highlight.title}
              </h4>
              <p className="text-sm text-foreground/70">
                {highlight.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
