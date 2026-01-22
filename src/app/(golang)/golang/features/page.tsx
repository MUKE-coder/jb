import { BookOpen, Code2, Trophy, Users, Video, Zap } from "lucide-react";
import Link from "next/link";

import { goCourse } from "@/lib/courseData";

import CourseRoadmap from "../../components/CourseRoadmap";
import Sidebar from "../../components/Sidebar";

export default function FeaturesPage() {
  const totalExercises = goCourse.sections.reduce(
    (acc, s) => acc + s.exercises.length,
    0
  );

  const totalProjects = goCourse.sections.filter((s) => s.project).length;

  const totalCodeExamples = goCourse.sections.reduce(
    (acc, s) =>
      acc + s.tutorials.reduce((t, tut) => t + tut.codeExamples.length, 0),
    0
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="ml-64 flex-1">
        {/* Header */}
        <div className="border-b border-border p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 font-mono text-3xl font-bold text-foreground uppercase">
              Platform Features
            </h1>
            <p className="text-sm text-foreground/70">
              Comprehensive learning resources for mastering Go
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="max-w-4xl">
            {/* Feature Highlights */}
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  icon: BookOpen,
                  title: "Comprehensive Tutorials",
                  description: `${goCourse.sections.length} sections from basics to advanced`,
                },
                {
                  icon: Code2,
                  title: "Code Examples",
                  description: `${totalCodeExamples} practical examples to learn from`,
                },
                {
                  icon: Zap,
                  title: "Hands-on Projects",
                  description: `${totalProjects} real-world projects to build`,
                },
                {
                  icon: Video,
                  title: "Video Support",
                  description: "YouTube embeds for visual learning",
                },
                {
                  icon: Users,
                  title: "Exercises",
                  description: `${totalExercises} exercises with varying difficulty levels`,
                  color: "accent",
                },
                {
                  icon: Trophy,
                  title: "Progress Tracking",
                  description:
                    "Track your learning journey through all sections",
                  color: "secondary",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={idx}
                    className="border border-border bg-background p-6 transition-colors hover:bg-card"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-border">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-2 font-mono text-sm font-semibold text-foreground uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Course Statistics */}
            <div className="mb-12 border border-border bg-card p-12">
              <h2 className="mb-8 font-mono text-2xl font-bold text-foreground uppercase">
                By The Numbers
              </h2>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-foreground">
                    {goCourse.sections.length}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    SECTIONS
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-foreground">
                    {totalCodeExamples}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    EXAMPLES
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-foreground">
                    {totalExercises}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    EXERCISES
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-foreground">
                    {totalProjects}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    PROJECTS
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Roadmap */}
            <div className="mb-12">
              <h2 className="mb-8 font-mono text-lg font-bold text-foreground uppercase">
                Your Complete Learning Path
              </h2>
              <CourseRoadmap sections={goCourse.sections} />
            </div>

            {/* Learning Approach */}
            <div className="mb-12 border border-border bg-card p-8">
              <h2 className="mb-6 font-mono text-lg font-bold text-foreground uppercase">
                How This Course Works
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Learn from Tutorials
                    </h3>
                    <p className="text-foreground/70">
                      Read detailed explanations with concepts broken down into
                      digestible pieces
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 font-bold text-secondary">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Study Code Examples
                    </h3>
                    <p className="text-foreground/70">
                      Review practical examples with one-click copy
                      functionality to practice locally
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Watch Video Lessons
                    </h3>
                    <p className="text-foreground/70">
                      Reinforce your learning with embedded video tutorials for
                      visual learners
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 font-bold text-secondary">
                    4
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Complete Exercises
                    </h3>
                    <p className="text-foreground/70">
                      Test your knowledge with beginner to advanced exercises
                      with solutions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent">
                    5
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Build Real Projects
                    </h3>
                    <p className="text-foreground/70">
                      Apply everything you learn by building hands-on projects
                      from scratch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/20 to-secondary/20 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Ready to Master Go?
              </h2>
              <p className="mb-8 text-lg text-foreground/70">
                Start from the beginning or jump to any section that interests
                you
              </p>
              <Link
                href={`/golang/section/${goCourse.sections[0].id}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Start Learning Now →
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
              <p>
                This course is designed for DevOps engineers and developers
                looking to master Go
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
