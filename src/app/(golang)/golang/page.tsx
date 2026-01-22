import Link from "next/link";

import { goCourse } from "@/lib/courseData";

import CourseRoadmap from "../components/CourseRoadmap";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="ml-64 flex-1 p-8">
        {/* Hero Section */}
        <div className="mb-16 max-w-4xl">
          <div className="border border-border p-12">
            <h1 className="mb-2 font-mono text-4xl font-bold text-foreground">
              GO / DEVOPS
            </h1>
            <p className="mb-8 font-mono text-sm text-muted-foreground">
              THE COMPREHENSIVE LEARNING PLATFORM
            </p>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {goCourse.description}
            </p>
            <Link
              href={`/section/${goCourse.sections[0].id}`}
              className="inline-block border border-foreground bg-foreground px-6 py-3 font-mono text-sm font-semibold text-background transition-opacity hover:bg-foreground/90"
            >
              START LEARNING →
            </Link>
          </div>
        </div>

        {/* Course Stats */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-border p-6">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              TOTAL SECTIONS
            </p>
            <p className="font-mono text-4xl font-bold text-foreground">
              {goCourse.sections.length}
            </p>
          </div>

          <div className="border border-border p-6">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              CODE EXAMPLES
            </p>
            <p className="font-mono text-4xl font-bold text-foreground">
              {goCourse.sections.reduce(
                (acc, s) =>
                  acc +
                  s.tutorials.reduce(
                    (t, tut) => t + tut.codeExamples.length,
                    0
                  ),
                0
              )}
            </p>
          </div>

          <div className="border border-border p-6">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              HANDS-ON PROJECTS
            </p>
            <p className="font-mono text-4xl font-bold text-foreground">
              {goCourse.sections.filter((s) => s.project).length}
            </p>
          </div>
        </div>

        {/* Learning Path */}
        <div className="max-w-4xl">
          <CourseRoadmap sections={goCourse.sections} />
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center font-mono text-xs text-muted-foreground">
            MADE FOR ASPIRING DEVOPS ENGINEERS
          </p>
        </div>
      </main>
    </div>
  );
}
