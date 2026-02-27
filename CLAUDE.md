# CLAUDE.md - Project Guidelines for AI Assistants

## Project Overview

**jb.desishub.com** — A personal portfolio, component registry, and blog for Muke Johnbaptist (JB), a Fullstack Developer & Founder based in Kampala, Uganda.

- **Live URL:** https://jb.desishub.com
- **Repository:** https://github.com/MUKE-coder/jb

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Runtime:** React 19
- **Styling:** Tailwind CSS v4 with CSS custom properties (oklch color space)
- **UI Components:** shadcn/ui + Radix UI primitives
- **Content:** MDX blog posts processed with next-mdx-remote v6
- **State:** Jotai (atomic), Zustand (shopping cart)
- **Animations:** Framer Motion v12
- **Package Manager:** pnpm 10.10.0

## Quick Commands

```bash
pnpm dev              # Start dev server on port 1408 (Turbopack)
pnpm build            # Production build (Turbopack)
pnpm start            # Start production server
pnpm preview          # Build + start on port 1408
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix ESLint issues
pnpm check-types      # TypeScript type checking (tsc --noEmit)
pnpm format:check     # Check Prettier formatting
pnpm format:write     # Auto-format with Prettier
pnpm registry:build   # Build shadcn component registry
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (app)/              # Main app routes (header/footer layout)
│   │   ├── (root)/         # Home, courses, ebooks, mentorship, tools
│   │   └── (docs)/         # Blog and components section
│   ├── (devops)/           # DevOps learning portal
│   ├── (golang)/           # Golang section
│   ├── (llms)/             # LLMs content
│   ├── (sandbox)/          # Interactive sandbox
│   ├── api/                # API routes (github proxy)
│   ├── og/                 # OG image generation
│   ├── rss/                # RSS feed endpoint
│   └── vcard/              # vCard endpoint
├── components/             # Shared React components
│   └── ui/                 # shadcn/ui base components
├── features/               # Feature-specific modules
│   └── profile/components/ # Profile page sections
├── registry/               # Distributable component registry
├── content/blog/           # MDX blog posts (~70 articles)
├── data/                   # Static data (user.ts, blog.ts)
├── config/                 # Site configuration
├── lib/                    # Utilities, fonts, rehype/remark plugins
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── styles/                 # Global CSS (Tailwind)
├── assets/                 # Fonts & static files
├── scripts/                # Build scripts (registry, capture)
├── utils/                  # General utilities
└── __registry__/           # Auto-generated (do NOT edit manually)
```

## Architecture & Conventions

### Routing

- Uses **Next.js App Router** with route groups `(name)` for layout organization
- Route groups: `(app)` for main site, `(devops)` for DevOps portal, `(golang)`, `(llms)`, `(sandbox)`
- Dynamic routes: `[slug]` for blog posts and components
- MDX rewrite: `/blog/:slug.mdx` → `/blog.mdx/:slug`

### Imports

- **Path alias:** `@/*` maps to `./src/*` — always use `@/` imports
- **Import sorting:** Enforced by `eslint-plugin-simple-import-sort` (auto-sorted)
- **Type imports:** Must use `import type { ... }` syntax (`@typescript-eslint/consistent-type-imports: error`)
- Example:
  ```typescript
  import type { Post } from "@/types/blog";
  import { cn } from "@/lib/utils";
  ```

### TypeScript

- **Strict mode** enabled — no implicit `any`, strict null checks
- Type definitions live in `src/types/`
- Use Zod for runtime validation at boundaries
- Target: ES2017, Module: esnext

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Theme uses CSS custom properties with **oklch color space**
- Dark mode via `next-themes` with `.dark` class strategy
- Use `cn()` utility (from `@/lib/utils`) to merge class names:
  ```typescript
  import { cn } from "@/lib/utils";
  cn("base-class", conditional && "conditional-class")
  ```
- Component variants use **CVA** (class-variance-authority)
- Global styles in `src/styles/globals.css`

### Components

- **UI primitives** in `src/components/ui/` (shadcn/ui pattern)
- **Feature components** in `src/features/<feature>/components/`
- **Icons** centralized in `src/components/icons.tsx`
- Use **dynamic imports** for heavy/non-critical components (e.g., ScrollTop, CommandMenu)
- Providers wrapped in `src/components/providers.tsx` (Jotai, next-themes, motion, analytics)

### Content (MDX Blog)

- Blog posts live in `src/content/blog/*.mdx`
- Frontmatter format:
  ```yaml
  ---
  title: "Post Title"
  description: "Short description"
  image: "/images/post-image.webp"
  category: "tutorial"
  createdAt: "YYYY-MM-DD"
  updatedAt: "YYYY-MM-DD"
  ---
  ```
- MDX rendering in `src/components/mdx.tsx` with 30+ custom component mappings
- Syntax highlighting via Shiki (themes: github-dark, github-light)
- Custom rehype/remark plugins in `src/lib/`

### Data

- User profile data: `src/data/user.ts` (exported as `USER` constant)
- Blog data functions: `src/data/blog.ts` (`getAllPosts`, `getPostBySlug`, `getPostsByCategory`)
- Site config: `src/config/site.ts`

## Code Quality Rules

### Formatting (Prettier)

- Semicolons: **yes**
- Quotes: **double quotes**
- Tab width: **2 spaces**
- Print width: **80 characters**
- Trailing commas: **es5**
- Tailwind class sorting enabled via `prettier-plugin-tailwindcss`

### Linting (ESLint)

- Extends: `next/core-web-vitals`, `next/typescript`, `prettier`
- `@typescript-eslint/consistent-type-imports`: **error** — always use `import type`
- `@typescript-eslint/no-import-type-side-effects`: **error**
- `simple-import-sort/imports`: **error** — imports must be sorted
- `simple-import-sort/exports`: **error** — exports must be sorted

### Git Hooks (Husky + lint-staged)

- Pre-commit hooks run linting and formatting on staged files
- Always run `pnpm lint` and `pnpm format:check` before committing

## Environment Variables

```env
APP_URL=https://jb.desishub.com
REGISTRY_URL=https://jb.desishub.com/r
GITHUB_API_TOKEN=          # Optional: GitHub personal access token
NEXT_PUBLIC_DMCA_URL=      # Optional: DMCA protection URL
```

## Key Files

| File | Purpose |
|------|---------|
| `src/data/user.ts` | User profile data (name, bio, jobs, etc.) |
| `src/data/blog.ts` | Blog data fetching functions |
| `src/config/site.ts` | Site-wide configuration |
| `src/components/mdx.tsx` | MDX renderer with custom components |
| `src/components/providers.tsx` | App-wide providers setup |
| `src/app/layout.tsx` | Root layout (metadata, JSON-LD, fonts) |
| `src/lib/utils.ts` | `cn()` and shared utilities |
| `src/lib/fonts.ts` | Font configuration (IBM Plex Sans/Mono) |
| `src/styles/globals.css` | Tailwind theme & global styles |
| `components.json` | shadcn/ui configuration |

## Important Notes

- **`src/__registry__/`** is auto-generated — never edit these files manually; run `pnpm registry:build`
- Sensitive data (phone, email) in `user.ts` is **base64 encoded**
- The dev server runs on **port 1408** by default
- Images allow all HTTPS remote hosts (configured in `next.config.ts`)
- SEO includes JSON-LD schemas (Person, Organization, WebSite, ProfilePage)
- RSS feed at `/rss`, sitemap at `/sitemap.xml`, robots at `/robots.txt`
