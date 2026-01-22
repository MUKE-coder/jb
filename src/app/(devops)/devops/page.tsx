"use client";

import Link from "next/link";

import { Footer } from "@/components/devops-footer";
// import { Footer } from "@/components/footer";
import { roadmapPhases } from "@/lib/roadmap-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      {/* Header */}
      <header className="border-b border-border px-8 py-12 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tighter md:text-6xl">
              devops
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              roadmap 2026 / the open agent skills ecosystem
            </p>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Learn DevOps step by step with curated resources, hands-on projects,
            and clear progression from fundamentals to advanced concepts.
            Install skills with a single command to enhance your deployment
            capabilities.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Install Command Section */}
          <section className="mb-20">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Learning Phases
            </h2>

            {/* Phases List */}
            <div className="space-y-3">
              {roadmapPhases.map((phase) => (
                <Link key={phase.id} href={`/devops/phase/${phase.id}`}>
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-4 border border-border px-4 py-4 transition-all duration-200 hover:border-foreground hover:bg-secondary/5">
                      <span className="w-12 text-sm font-bold text-foreground">
                        {String(phase.number).padStart(2, "0")}.
                      </span>
                      <span className="flex-1">
                        <span className="font-medium text-foreground group-hover:underline">
                          {phase.title}
                        </span>
                        <span className="ml-3 text-sm text-muted-foreground">
                          / {phase.skills.length} skills
                        </span>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {phase.resources.length}R {phase.projects.length}P
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Available Resources */}
          <section className="mb-20 border-t border-border py-12">
            <h2 className="mb-8 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Available Resources
            </h2>

            <div className="space-y-6 text-sm">
              <div>
                <p className="mb-3 text-muted-foreground">
                  Documentation, tutorials, and learning materials for each
                  phase
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-border px-3 py-1 text-foreground">
                    documentation
                  </span>
                  <span className="border border-border px-3 py-1 text-foreground">
                    articles
                  </span>
                  <span className="border border-border px-3 py-1 text-foreground">
                    videos
                  </span>
                  <span className="border border-border px-3 py-1 text-foreground">
                    courses
                  </span>
                  <span className="border border-border px-3 py-1 text-foreground">
                    tools
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Leaderboard Section */}
          <section className="border-t border-border py-12">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Learning Progress
            </h2>
            <p className="text-sm text-muted-foreground">
              Start with Phase 1: Git Fundamentals and progress through all 12
              phases to master DevOps concepts from version control through
              software engineering practices.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
