"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

import type { Exercise } from "@/lib/courseData";

import CodeBlock from "./CodeBlock";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(false);

  const difficultyColors = {
    beginner: "border-foreground/30",
    intermediate: "border-foreground/60",
    advanced: "border-destructive",
  };

  const difficultyLabel = {
    beginner: "BEGINNER",
    intermediate: "INTERMEDIATE",
    advanced: "ADVANCED",
  };

  return (
    <div className="my-4 border border-border p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 font-mono text-sm font-semibold text-foreground uppercase">
            {exercise.title}
          </h3>
          <p className="mb-3 text-sm text-muted-foreground">
            {exercise.description}
          </p>
          <span
            className={`border px-2 py-1 font-mono text-xs ${
              difficultyColors[exercise.difficulty]
            }`}
          >
            {difficultyLabel[exercise.difficulty]}
          </span>
        </div>
        <button
          onClick={() => setCompleted(!completed)}
          className={`ml-4 border p-2 transition-colors ${
            completed
              ? "border-foreground bg-foreground/10"
              : "border-border hover:border-foreground/50"
          }`}
        >
          <Check size={18} />
        </button>
      </div>

      <div className="mb-4 border border-border bg-card p-4">
        <h4 className="mb-3 font-mono text-xs font-semibold text-foreground uppercase">
          Starter Code:
        </h4>
        <CodeBlock code={exercise.starterCode} language="go" />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-card"
      >
        {showSolution ? "HIDE" : "SHOW"} SOLUTION
        <ChevronDown
          size={14}
          className={`transition-transform ${showSolution ? "rotate-180" : ""}`}
        />
      </button>

      {showSolution && (
        <div className="mt-4 border border-border bg-card p-4">
          <h4 className="mb-3 font-mono text-xs font-semibold text-foreground uppercase">
            Solution:
          </h4>
          <CodeBlock code={exercise.solution} language="go" />
        </div>
      )}
    </div>
  );
}
