"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { goCourse } from "@/lib/courseData";

// import { goCourse } from "@/lib/courseData";
import CourseSearch from "./CourseSearch";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "basics",
  ]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const isActive = (sectionId: string) =>
    pathname === `/golang/section/${sectionId}`;

  return (
    <aside className="bg-sidebar text-sidebar-foreground border-sidebar-border fixed top-0 left-0 h-screen w-64 overflow-y-auto border-r pt-6">
      <div className="border-sidebar-border border-b px-6 pb-6">
        <Link href="/golang" className="block">
          <h1 className="text-sidebar-foreground font-mono text-lg font-bold">
            GO /
          </h1>
          <p className="text-sidebar-foreground/60 mt-2 font-mono text-xs">
            DEVOPS MASTERY
          </p>
        </Link>
      </div>

      {/* Search */}
      <div className="border-sidebar-border border-b px-3 py-4">
        <CourseSearch />
      </div>

      {/* Quick Links */}
      <div className="border-sidebar-border space-y-1 border-b px-3 py-3">
        <Link
          href="/"
          className="text-sidebar-foreground hover:bg-sidebar-border hover:border-sidebar-border block border border-transparent px-3 py-2 font-mono text-xs transition-colors"
        >
          {"<"} BACK HOME
        </Link>
        <Link
          href="/golang/playground"
          className="text-sidebar-foreground hover:bg-sidebar-border hover:border-sidebar-border block border border-transparent px-3 py-2 font-mono text-xs transition-colors"
        >
          {">"} PLAYGROUND
        </Link>

        <Link
          href="/golang/features"
          className="text-sidebar-foreground hover:bg-sidebar-border hover:border-sidebar-border block border border-transparent px-3 py-2 font-mono text-xs transition-colors"
        >
          {">"} FEATURES
        </Link>
      </div>

      <nav className="px-3 pt-4">
        <p className="px-3 pb-3 font-mono text-xs text-muted-foreground uppercase">
          Sections
        </p>
        <div className="space-y-1">
          {goCourse.sections.map((section) => (
            <div key={section.id}>
              <Link
                href={`/golang/section/${section.id}`}
                className={`block border px-3 py-2 font-mono text-xs transition-all ${
                  isActive(section.id)
                    ? "bg-sidebar-foreground text-sidebar-primary-foreground border-sidebar-foreground"
                    : "text-sidebar-foreground hover:border-sidebar-border border-transparent"
                }`}
              >
                {section.order}. {section.title}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
