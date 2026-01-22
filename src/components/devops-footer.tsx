import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-8 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span>/</span>
            <span>devops roadmap</span>
          </div>

          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="text-sm">
              Curated with ❤️ by{" "}
              <span className="font-medium text-foreground">
                JB WEB DEVELOPER
              </span>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.youtube.com/@JBWEBDEVELOPER"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                YouTube
              </Link>
              <Link
                href="https://www.linkedin.com/in/muke-johnbaptist-95bb82198/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
