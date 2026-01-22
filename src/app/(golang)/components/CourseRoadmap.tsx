"use client";

import { BookOpen, Code2, Zap } from "lucide-react";
import Link from "next/link";

import type { Section } from "@/lib/courseData";

// import type { Section } from "@/lib/courseData";

interface CourseRoadmapProps {
  sections: Section[];
}

export default function CourseRoadmap({ sections }: CourseRoadmapProps) {
  return (
    <div className="border border-border p-8">
      <h2 className="mb-8 font-mono text-sm font-bold text-foreground uppercase">
        Learning Path
      </h2>

      <div className="space-y-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/golang/section/${section.id}`}
            className="group block border border-border p-4 transition-colors hover:bg-card"
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 font-mono text-lg font-bold text-foreground">
                  {section.order}
                </span>
                <h3 className="font-semibold text-foreground group-hover:underline">
                  {section.title}
                </h3>
              </div>
            </div>
            <p className="mb-3 ml-9 text-xs text-muted-foreground">
              {section.description}
            </p>

            <div className="ml-9 flex items-center gap-4 font-mono text-xs text-muted-foreground">
              <span>{section.tutorials.length} tutorials</span>
              <span>·</span>
              <span>
                {section.tutorials.reduce(
                  (acc, t) => acc + t.codeExamples.length,
                  0
                )}{" "}
                examples
              </span>
              {section.exercises.length > 0 && (
                <>
                  <span>·</span>
                  <span>{section.exercises.length} exercises</span>
                </>
              )}
              {section.project && (
                <>
                  <span>·</span>
                  <span>project</span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
