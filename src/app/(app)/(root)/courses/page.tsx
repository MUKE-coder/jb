import dayjs from "dayjs";
import { GraduationCap, Sparkles } from "lucide-react";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { USER } from "@/data/user";
import { ProfileHeader } from "@/features/profile/components/profile-header";

import { CourseCard } from "./components/course-card";
import { courses } from "./components/course-data";

export const metadata = {
  title: "Courses 2026 - Premium Fullstack Development Courses",
  description:
    "Explore our comprehensive 2026 course catalog featuring Next.js, Golang, DevOps, TanStack, Laravel, React Native, Electron, and modern fullstack development.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <ProfileHeader />
        <Separator />

        {/* Hero Section */}
        <section className="relative px-4 py-16 lg:py-24">
          <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 dark:border-blue-800 dark:from-blue-950/50 dark:to-purple-950/50">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                2026 Course Catalog
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              Master Modern{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fullstack Development
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 lg:text-xl dark:text-neutral-400">
              Elevate your development skills with our comprehensive course
              collection. From Next.js to Golang, DevOps to Mobile Development —
              build production-ready applications and launch your career to new
              heights.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 lg:text-4xl dark:text-white">
                  {courses.length}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Premium Courses
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 lg:text-4xl dark:text-white">
                  {courses.reduce((acc, course) => acc + course.episodes, 0)}+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Video Episodes
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 lg:text-4xl dark:text-white">
                  {courses.reduce(
                    (acc, course) => acc + parseInt(course.duration),
                    0
                  )}
                  h+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Total Content
                </div>
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-950/20 dark:via-purple-950/10 dark:to-transparent" />
        </section>

        <Separator />

        {/* Courses Grid */}
        <section className="px-4 py-12 lg:py-16">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Footer CTA */}
        <section className="px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl space-y-4">
            <GraduationCap className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-neutral-900 lg:text-3xl dark:text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Choose a course that matches your skill level and career goals.
              All courses include hands-on projects and real-world applications.
            </p>
          </div>
        </section>

        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
