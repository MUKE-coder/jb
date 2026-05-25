export type OpenSourceCategory =
  | "Golang"
  | "Next.js"
  | "AI"
  | "AI Agents"
  | "React"
  | "React Native"
  | "Learning"
  | "Optimisation";

export type OpenSourceProject = {
  /** Unique slug — used as React key and anchor link */
  slug: string;
  /** Display title (project name) */
  title: string;
  /** Public GitHub URL */
  github: string;
  /** Short one-paragraph description (≤ 220 chars) */
  description: string;
  /** 3-5 short use-case tags shown as chips on the card */
  useCases: string[];
  /** Category bucket used on the home section + dedicated page */
  category: OpenSourceCategory;
  /** ISO date the project was added to this list (drives recency sort) */
  addedAt: string;
  /** Optional: GitHub stars at curation time (display only — not live) */
  stars?: string;
};
