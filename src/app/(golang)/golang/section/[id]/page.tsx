import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import CodeBlock from "@/app/(golang)/components/CodeBlock";
import ExerciseCard from "@/app/(golang)/components/ExerciseCard";
import ProgressTracker from "@/app/(golang)/components/ProgressTracker";
import ProjectShowcase from "@/app/(golang)/components/ProjectShowcase";
import Sidebar from "@/app/(golang)/components/Sidebar";
import VideoSection from "@/app/(golang)/components/VideoSection";
import { goCourse } from "@/lib/courseData";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return goCourse.sections.map((section) => ({
    id: section.id,
  }));
}

export default async function SectionPage({ params }: Props) {
  const { id } = await params;
  const section = goCourse.sections.find((s) => s.id === id);

  if (!section) {
    notFound();
  }

  const currentIndex = goCourse.sections.findIndex((s) => s.id === id);
  const previousSection =
    currentIndex > 0 ? goCourse.sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < goCourse.sections.length - 1
      ? goCourse.sections[currentIndex + 1]
      : null;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="ml-64 flex-1">
        {/* Section Header */}
        <div className="border-b border-border p-8">
          <div className="max-w-4xl">
            <p className="mb-3 font-mono text-xs text-muted-foreground uppercase">
              Section {section.order} of {goCourse.sections.length}
            </p>
            <h1 className="mb-3 font-mono text-3xl font-bold text-foreground">
              {section.title}
            </h1>
            <p className="leading-relaxed text-foreground/70">
              {section.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="max-w-4xl">
            {/* Progress Tracker */}
            <ProgressTracker
              sections={goCourse.sections}
              currentSectionId={section.id}
            />

            {/* Video Section */}
            {section.videoId && (
              <VideoSection
                videoId={section.videoId}
                title={`${section.title} - Tutorial Video`}
              />
            )}

            {/* Tutorials */}
            <div className="mb-12">
              <h2 className="mb-8 font-mono text-lg font-bold text-foreground uppercase">
                Tutorials
              </h2>

              {section.tutorials.map((tutorial, tutIdx) => (
                <div
                  key={tutIdx}
                  id={`tutorial-${tutIdx}`}
                  className="mb-12 scroll-mt-20"
                >
                  <h3 className="mb-4 font-mono text-lg font-semibold text-foreground uppercase">
                    {tutorial.title}
                  </h3>

                  <div className="mb-6">
                    <div className="leading-relaxed whitespace-pre-line text-foreground/80">
                      {tutorial.content}
                    </div>
                  </div>

                  {/* Code Examples */}
                  {tutorial.codeExamples.length > 0 && (
                    <div className="mb-8">
                      <h4 className="mb-4 font-mono text-sm font-semibold text-foreground uppercase">
                        Code Examples
                      </h4>
                      {tutorial.codeExamples.map((example, exIdx) => (
                        <CodeBlock
                          key={exIdx}
                          title={example.title}
                          code={example.code}
                          language={example.language}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Exercises */}
            {section.exercises.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-8 font-mono text-lg font-bold text-foreground uppercase">
                  Exercises
                </h2>
                {section.exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
              </div>
            )}

            {/* Project */}
            {section.project && (
              <div className="mb-12">
                <h2 className="mb-8 font-mono text-lg font-bold text-foreground uppercase">
                  Hands-on Project
                </h2>
                <ProjectShowcase project={section.project} />
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-8">
              {previousSection ? (
                <Link
                  href={`/section/${previousSection.id}`}
                  className="flex items-center gap-2 border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
                >
                  <ChevronLeft size={16} />
                  <span className="font-mono">{previousSection.title}</span>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/"
                className="border border-foreground bg-foreground px-4 py-2 font-mono text-sm text-background transition-opacity hover:bg-foreground/90"
              >
                HOME
              </Link>

              {nextSection ? (
                <Link
                  href={`/section/${nextSection.id}`}
                  className="ml-auto flex items-center gap-2 border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
                >
                  <span className="font-mono">{nextSection.title}</span>
                  <ChevronRight size={16} />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
