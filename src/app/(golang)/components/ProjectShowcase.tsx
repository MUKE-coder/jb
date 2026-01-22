"use client";

import { Zap } from "lucide-react";
import { useState } from "react";

import type { Project } from "@/lib/courseData";

import CodeBlock from "./CodeBlock";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const [showStarter, setShowStarter] = useState(false);

  const difficultyLabel = {
    beginner: "BEGINNER",
    intermediate: "INTERMEDIATE",
    advanced: "ADVANCED",
  };

  return (
    <div className="my-8 border border-border bg-card p-8">
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-3">
          <Zap className="h-5 w-5 text-foreground" />
          <h2 className="font-mono text-lg font-bold text-foreground uppercase">
            {project.title}
          </h2>
        </div>
        <p className="mb-4 text-sm text-foreground/80">{project.description}</p>

        <div className="flex items-center gap-3">
          <span
            className={`border px-3 py-1 font-mono text-xs ${
              project.difficulty === "advanced"
                ? "border-destructive"
                : "border-foreground/30"
            }`}
          >
            {difficultyLabel[project.difficulty]}
          </span>
        </div>
      </div>

      <div className="mb-6 border border-border bg-background p-6">
        <h3 className="mb-4 font-mono text-sm font-semibold text-foreground uppercase">
          Learning Objectives
        </h3>
        <ul className="space-y-2">
          {project.learningObjectives.map((objective, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-foreground/80"
            >
              <span className="mt-0 font-mono font-bold">&gt;</span>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowStarter(!showStarter)}
          className="border border-border px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-card"
        >
          {showStarter ? "HIDE" : "SHOW"} STARTER CODE
        </button>

        {showStarter && (
          <div className="mt-4">
            <CodeBlock
              code={project.starterCode}
              language="go"
              title="Project Starter Template"
            />
          </div>
        )}
      </div>

      <div className="border border-border bg-background p-6">
        <h3 className="mb-3 font-mono text-sm font-semibold text-foreground uppercase">
          Project Tips
        </h3>
        <ul className="space-y-2 font-mono text-xs text-foreground/80">
          <li>&gt; Start by understanding the requirements</li>
          <li>&gt; Break the project into smaller tasks</li>
          <li>&gt; Test your code frequently as you build</li>
          <li>&gt; Add error handling throughout your code</li>
          <li>&gt; Consider edge cases and validate inputs</li>
          <li>&gt; Document your code with comments</li>
        </ul>
      </div>
    </div>
  );
}
