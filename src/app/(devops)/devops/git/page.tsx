"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";

import { sections } from "@/lib/sections";

export default function GitVisualizer() {
  const [activeSection, setActiveSection] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Define CSS variables for light and dark modes
  const themeVariables = {
    light: {
      background: "#ffffff",
      foreground: "#020817",
      card: "#f8fafc",
      cardForeground: "#020817",
      primary: "#0f172a",
      primaryForeground: "#f8fafc",
      secondary: "#f1f5f9",
      secondaryForeground: "#0f172a",
      muted: "#e2e8f0",
      mutedForeground: "#64748b",
      accent: "#3b82f6",
      accentForeground: "#ffffff",
      border: "#e2e8f0",
      ring: "#0f172a",
    },
    dark: {
      background: "#0f172a",
      foreground: "#f8fafc",
      card: "#1e293b",
      cardForeground: "#f8fafc",
      primary: "#f8fafc",
      primaryForeground: "#0f172a",
      secondary: "#334155",
      secondaryForeground: "#f8fafc",
      muted: "#334155",
      mutedForeground: "#94a3b8",
      accent: "#60a5fa",
      accentForeground: "#0f172a",
      border: "#334155",
      ring: "#cbd5e1",
    },
  };

  const currentSection = sections[activeSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 transition-colors duration-300 md:p-6 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
      <style jsx global>{`
        :root {
          --background: ${themeVariables.light.background};
          --foreground: ${themeVariables.light.foreground};
          --card: ${themeVariables.light.card};
          --card-foreground: ${themeVariables.light.cardForeground};
          --primary: ${themeVariables.light.primary};
          --primary-foreground: ${themeVariables.light.primaryForeground};
          --secondary: ${themeVariables.light.secondary};
          --secondary-foreground: ${themeVariables.light.secondaryForeground};
          --muted: ${themeVariables.light.muted};
          --muted-foreground: ${themeVariables.light.mutedForeground};
          --accent: ${themeVariables.light.accent};
          --accent-foreground: ${themeVariables.light.accentForeground};
          --border: ${themeVariables.light.border};
          --ring: ${themeVariables.light.ring};
        }

        .dark {
          --background: ${themeVariables.dark.background};
          --foreground: ${themeVariables.dark.foreground};
          --card: ${themeVariables.dark.card};
          --card-foreground: ${themeVariables.dark.cardForeground};
          --primary: ${themeVariables.dark.primary};
          --primary-foreground: ${themeVariables.dark.primaryForeground};
          --secondary: ${themeVariables.dark.secondary};
          --secondary-foreground: ${themeVariables.dark.secondaryForeground};
          --muted: ${themeVariables.dark.muted};
          --muted-foreground: ${themeVariables.dark.mutedForeground};
          --accent: ${themeVariables.dark.accent};
          --accent-foreground: ${themeVariables.dark.accentForeground};
          --border: ${themeVariables.dark.border};
          --ring: ${themeVariables.dark.ring};
        }
      `}</style>

      {/* Header with Theme Toggle */}
      <div className="mx-auto max-w-7xl pt-10">
        <div className="mb-8 flex flex-col items-center justify-between md:mb-12 md:flex-row">
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <h1 className="mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Git & GitHub Visual Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Interactive learning platform for version control
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors dark:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <Moon className="h-5 w-5 text-gray-400" />
            </div> */}
            <div className="hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white md:block">
              Section {activeSection + 1}/{sections.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{
                width: `${((activeSection + 1) / sections.length) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Basics</span>
            <span>Advanced</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="scrollbar-hide flex space-x-2 overflow-x-auto pb-4">
            {sections.map((section, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className={`flex flex-shrink-0 items-center gap-2 rounded-xl px-4 py-3 font-medium whitespace-nowrap transition-all duration-300 ${
                  i === activeSection
                    ? "scale-105 transform bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-400"
                }`}
                aria-label={`Go to: ${section.title}`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-500 ${animate ? "opacity-100" : "opacity-100"}`}
        >
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white">
                {currentSection.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
                  {currentSection.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Section {activeSection + 1} • {sections.length} total concepts
                </p>
              </div>
            </div>

            <div className="animate-fadeIn">{currentSection.content}</div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <button
              onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-all hover:border-blue-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-400"
              aria-label="Previous section"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="font-medium">Previous</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="hidden text-sm text-gray-600 sm:block dark:text-gray-400">
                Navigate with keyboard: ← →
              </div>
              <div className="flex gap-2">
                {sections.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSection(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === activeSection
                        ? "w-8 bg-blue-500 dark:bg-purple-400"
                        : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to section ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setActiveSection(
                  Math.min(sections.length - 1, activeSection + 1)
                )
              }
              disabled={activeSection === sections.length - 1}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white transition-all hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              aria-label="Next section"
            >
              <span className="font-medium">Next Concept</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Master Git and GitHub to collaborate effectively with your team
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-500">
            <span>Version Control</span>
            <span>•</span>
            <span>Collaboration</span>
            <span>•</span>
            <span>Best Practices</span>
            <span>•</span>
            <span>Workflow</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Smooth transitions for all interactive elements */
        button,
        a {
          transition: all 0.2s ease-in-out;
        }

        /* Better focus styles */
        button:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        /* Enhanced code block styling */
        code {
          font-family: "JetBrains Mono", "Fira Code", monospace;
          font-size: 0.9em;
          padding: 0.2em 0.4em;
          border-radius: 0.3em;
          background: var(--secondary);
          color: var(--accent);
        }

        /* Improved list styling */
        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li::before {
          content: "→";
          color: var(--accent);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      `}</style>
    </div>
  );
}
