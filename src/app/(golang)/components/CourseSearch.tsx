"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { goCourse } from "@/lib/courseData";

// import { goCourse } from "@/lib/courseData";

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();
    const foundSections = goCourse.sections.filter(
      (section) =>
        section.title.toLowerCase().includes(term) ||
        section.description.toLowerCase().includes(term)
    );

    const foundTutorials: Array<{
      sectionId: string;
      sectionTitle: string;
      title: string;
      type: "tutorial";
    }> = [];

    goCourse.sections.forEach((section) => {
      section.tutorials.forEach((tutorial) => {
        if (tutorial.title.toLowerCase().includes(term)) {
          foundTutorials.push({
            sectionId: section.id,
            sectionTitle: section.title,
            title: tutorial.title,
            type: "tutorial",
          });
        }
      });
    });

    return [
      ...foundSections.map((s) => ({
        type: "section" as const,
        id: s.id,
        title: s.title,
        description: s.description,
      })),
      ...foundTutorials,
    ];
  }, [searchTerm]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search sections, tutorials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="bg-sidebar border-sidebar-border text-sidebar-foreground focus:ring-sidebar-primary w-full rounded-lg border py-2 pr-10 pl-10 text-sm focus:ring-1 focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              setIsOpen(false);
            }}
            className="hover:text-sidebar-foreground absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && searchTerm && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-border bg-card shadow-lg">
          {results.length > 0 ? (
            <div>
              {results.map((result, idx) => (
                <Link
                  key={idx}
                  href={
                    result.type === "section"
                      ? `/golang/section/${result.id}`
                      : `/golang/section/${result.sectionId}#tutorial-0`
                  }
                  onClick={() => {
                    setSearchTerm("");
                    setIsOpen(false);
                  }}
                  className="hover:bg-sidebar/50 block border-b border-border px-4 py-3 transition-colors last:border-b-0"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-xs font-semibold text-accent">
                      {result.type === "section" ? "SECTION" : "TUTORIAL"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-foreground">
                        {result.title}
                      </p>
                      {result.type === "section" && result.description && (
                        <p className="truncate text-xs text-muted-foreground">
                          {result.description}
                        </p>
                      )}
                      {result.type === "tutorial" && (
                        <p className="text-xs text-muted-foreground">
                          in {result.sectionTitle}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground">
                No results found for &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
