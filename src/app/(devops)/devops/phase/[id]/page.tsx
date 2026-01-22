import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/devops-footer";
import { roadmapPhases } from "@/lib/roadmap-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PhasePage({ params }: PageProps) {
  const { id } = await params;
  const phase = roadmapPhases.find((p) => p.id === id);

  if (!phase) {
    notFound();
  }

  const currentIndex = roadmapPhases.findIndex((p) => p.id === id);
  const previousPhase =
    currentIndex > 0 ? roadmapPhases[currentIndex - 1] : null;
  const nextPhase =
    currentIndex < roadmapPhases.length - 1
      ? roadmapPhases[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      {/* Header */}
      <header className="border-b border-border px-8 py-12 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/devops"
            className="mb-8 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← back to phases
          </Link>

          <div className="mb-8">
            <div className="mb-4 flex items-baseline gap-3">
              <span className="text-6xl">{phase.icon}</span>
              <div>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  Phase {phase.number} of {roadmapPhases.length}
                </span>
                <h1 className="text-5xl font-bold tracking-tight">
                  {phase.title}
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Key Skills Section */}
          <section className="mb-20">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Key Skills
            </h2>
            <div className="space-y-2">
              {phase.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 border-l border-muted px-3 py-2"
                >
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Topics Section */}
          <section className="mb-20 border-t border-border py-12">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Topics to Cover
            </h2>
            <div className="space-y-2">
              {phase.subtopics.map((topic) => (
                <div
                  key={topic}
                  className="border border-border px-3 py-2 transition-colors hover:border-foreground"
                >
                  <span className="text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Resources */}
          <section className="mb-20 border-t border-border py-12">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Learning Resources
            </h2>
            <div className="space-y-3">
              {phase.resources.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-3 border border-border px-4 py-3 transition-colors hover:border-foreground">
                    <span className="mr-4 w-12 flex-shrink-0 text-xs text-muted-foreground uppercase">
                      {resource.type}
                    </span>
                    <span className="flex-1 text-sm text-foreground group-hover:underline">
                      {resource.title}
                    </span>
                    <span className="text-xs text-muted-foreground">→</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20 border-t border-border py-12">
            <h2 className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Hands-On Projects
            </h2>
            <div className="space-y-4">
              {phase.projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-border px-4 py-4 transition-colors hover:border-foreground"
                >
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      {project.title}
                    </span>
                    <span className="text-xs tracking-wider text-muted-foreground uppercase">
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <section className="border-t border-border py-12">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {previousPhase ? (
                <Link href={`/phase/${previousPhase.id}`}>
                  <div className="group cursor-pointer border border-border p-4 transition-colors hover:border-foreground">
                    <p className="mb-1 text-xs text-muted-foreground">
                      ← Previous
                    </p>
                    <h3 className="text-sm font-semibold text-foreground group-hover:underline">
                      {previousPhase.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              <Link href="/">
                <div className="group cursor-pointer border border-border p-4 text-center transition-colors hover:border-foreground">
                  <p className="mb-1 text-xs text-muted-foreground">View All</p>
                  <h3 className="text-sm font-semibold text-foreground group-hover:underline">
                    Back to Phases
                  </h3>
                </div>
              </Link>

              {nextPhase ? (
                <Link href={`/phase/${nextPhase.id}`}>
                  <div className="group cursor-pointer border border-border p-4 text-right transition-colors hover:border-foreground">
                    <p className="mb-1 text-xs text-muted-foreground">Next →</p>
                    <h3 className="text-sm font-semibold text-foreground group-hover:underline">
                      {nextPhase.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
