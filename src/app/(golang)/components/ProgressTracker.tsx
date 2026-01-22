"use client";

import type { Section } from "@/lib/courseData";

interface ProgressTrackerProps {
  sections: Section[];
  currentSectionId: string;
}

export default function ProgressTracker({
  sections,
  currentSectionId,
}: ProgressTrackerProps) {
  const currentIndex = sections.findIndex((s) => s.id === currentSectionId);
  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="mb-8 rounded-lg border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Course Progress
        </h3>
        <span className="text-sm text-muted-foreground">
          Section {currentIndex + 1} of {sections.length}
        </span>
      </div>

      <div className="bg-sidebar h-3 w-full overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        {Math.round(progress)}% complete
      </p>

      {/* Section indicators */}
      <div className="mt-6 grid grid-cols-6 gap-2">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className={`h-2 rounded-full transition-colors ${
              idx <= currentIndex ? "bg-accent" : "bg-sidebar"
            }`}
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
}
