"use client";

import {
  ArrowUpRight,
  BookOpen,
  Clock,
  ExternalLink,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Course } from "./course-data";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-neutral-500/10 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content Container */}
      <div className="relative flex flex-col gap-6 p-6 lg:flex-row lg:p-8">
        {/* Thumbnail Section */}
        <div className="relative h-56 w-full flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 lg:h-64 lg:w-80">
          {/* Course Thumbnail Image */}
          <Image
            src={course.thumbnail}
            alt={`${course.title} course thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {/* Complexity Badge */}
          <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm dark:bg-black/70">
            {course.complexity}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 lg:text-3xl dark:text-white">
              {course.title}
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 lg:text-base dark:text-neutral-400">
              {course.description}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">{course.episodes} Episodes</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
              <Layers className="h-4 w-4" />
              <span className="font-medium">
                {course.techStack.length} Technologies
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              What You&apos;ll Learn
            </h3>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 text-sm text-neutral-600 sm:grid-cols-2 dark:text-neutral-400">
              {course.topics.slice(0, 6).map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">
                    •
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              What You&apos;ll Build
            </h3>
            <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              {course.projects.map((project) => (
                <li key={project} className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400">
                    ✓
                  </span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deployment */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.deployment.map((deploy) => (
                <span
                  key={deploy}
                  className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300"
                >
                  {deploy}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-auto flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-4 sm:flex-row sm:items-center dark:border-neutral-800">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="space-y-1">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Without Source Code
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  ${course.pricing.withoutSourceCode}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  With Source Code
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${course.pricing.withSourceCode}
                </p>
              </div>
            </div>

            <Link
              href={course.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:shadow-lg hover:shadow-neutral-900/20 dark:bg-white dark:text-neutral-900 dark:hover:shadow-white/20"
            >
              <span>Enroll Now</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20" />
    </article>
  );
}
