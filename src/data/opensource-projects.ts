import "server-only";

import { cache } from "react";

import type {
  OpenSourceCategory,
  OpenSourceProject,
} from "@/types/opensource-project";

/**
 * Hand-curated list of best open-source projects developers can study.
 *
 * Newest entries at the TOP — the home page shows the latest N from
 * here, the dedicated /opensource page groups everything by category.
 *
 * When adding a new project: pick the right category, write a concrete
 * description (what it actually does, not marketing fluff), and list
 * 3-5 use cases the reader can immediately picture.
 */
export const OPENSOURCE_PROJECTS: OpenSourceProject[] = [
  // ── Latest additions (May 27, 2026) ──────────────────────────────────
  {
    slug: "awesome-scalability",
    title: "Awesome Scalability",
    github: "https://github.com/binhnguyennus/awesome-scalability",
    description:
      "Curated reading list documenting patterns of scalable, reliable, and performant large-scale systems — articles by prominent engineers plus battle-tested case studies. The single best resource if you're prepping for system-design interviews or actually designing one.",
    useCases: [
      "System design interviews",
      "Distributed systems",
      "Database scaling",
      "Reliability patterns",
    ],
    category: "Learning",
    addedAt: "2026-05-27",
    stars: "71k+",
  },
  {
    slug: "free-programming-books",
    title: "Free Programming Books",
    github: "https://github.com/EbookFoundation/free-programming-books",
    description:
      "Community-maintained index of freely available programming books, courses, podcasts, and interactive tutorials — organised by language and subject. The largest learn-to-code resource directory on GitHub.",
    useCases: [
      "Free programming books",
      "Language tutorials",
      "Subject-specific guides",
      "Interactive courses",
    ],
    category: "Learning",
    addedAt: "2026-05-27",
    stars: "390k+",
  },
  {
    slug: "danluu-popular",
    title: "Dan Luu — Popular Posts",
    github: "https://danluu.com/popular/",
    description:
      "Curated index of Dan Luu's most-read essays on systems engineering, debugging at scale, hiring, and how big tech companies actually work. Pure signal — every link is worth your hour.",
    useCases: [
      "Systems engineering essays",
      "Career writing",
      "Debugging at scale",
      "Big-tech retrospectives",
    ],
    category: "Learning",
    addedAt: "2026-05-27",
  },
  {
    slug: "mathematics-for-ml",
    title: "Mathematics for ML",
    github: "https://github.com/dair-ai/Mathematics-for-ML",
    description:
      "Hand-picked collection of resources to learn and review the mathematics behind machine learning — linear algebra, calculus, probability, optimisation, and the intuition you actually need for backprop.",
    useCases: [
      "ML math foundations",
      "Linear algebra",
      "Backprop intuition",
      "Probability for ML",
    ],
    category: "Learning",
    addedAt: "2026-05-27",
    stars: "6k+",
  },
  {
    slug: "wacrm",
    title: "wacrm — WhatsApp CRM",
    github: "https://github.com/ArnasDon/wacrm",
    description:
      "Self-hostable WhatsApp CRM template — shared inbox, contacts, sales pipelines, broadcasts, no-code automations. Next.js 16 + React 19 + Supabase + Meta Cloud API. Fork it as the starting point for any WhatsApp-first product.",
    useCases: [
      "WhatsApp Business API",
      "Self-hosted CRM",
      "Supabase RLS",
      "No-code automations",
    ],
    category: "Next.js",
    addedAt: "2026-05-27",
    stars: "400+",
  },

  // ── Golang ────────────────────────────────────────────────────────────
  {
    slug: "go-language",
    title: "Go",
    github: "https://github.com/golang/go",
    description:
      "The Go programming language itself. The clearest end-to-end example of a production compiler, runtime, and standard library you can read line by line.",
    useCases: [
      "Compiler internals",
      "Language design",
      "Garbage collection",
      "Standard library patterns",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "120k+",
  },
  {
    slug: "caddy",
    title: "Caddy",
    github: "https://github.com/caddyserver/caddy",
    description:
      "A modern HTTP/3 web server with automatic HTTPS via Let's Encrypt. Beautifully modular Go code showing how to build a plugin-driven server.",
    useCases: [
      "Web servers in Go",
      "TLS automation",
      "Reverse proxies",
      "Plugin architectures",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "60k+",
  },
  {
    slug: "fzf",
    title: "fzf",
    github: "https://github.com/junegunn/fzf",
    description:
      "A blazing-fast command-line fuzzy finder. Study it for terminal UI patterns, efficient string scoring algorithms, and how to ship a single-binary CLI users actually love.",
    useCases: [
      "CLI tooling",
      "Fuzzy search algorithms",
      "Terminal UIs",
      "Performance-critical Go",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "70k+",
  },
  {
    slug: "lazygit",
    title: "LazyGit",
    github: "https://github.com/jesseduffield/lazygit",
    description:
      "A simple terminal UI for Git. The reference implementation if you want to learn how to build interactive TUIs in Go (uses tcell + custom event loop).",
    useCases: [
      "Interactive TUIs",
      "Git internals",
      "Keyboard-driven UX",
      "Layered terminal apps",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "55k+",
  },
  {
    slug: "frp",
    title: "FRP",
    github: "https://github.com/fatedier/frp",
    description:
      "Fast reverse proxy for exposing local servers behind NAT or firewalls. Masterclass on building bidirectional tunnels and connection multiplexing in Go.",
    useCases: [
      "Reverse proxies",
      "NAT traversal",
      "Connection multiplexing",
      "Network programming",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "85k+",
  },
  {
    slug: "hugo",
    title: "Hugo",
    github: "https://github.com/gohugoio/hugo",
    description:
      "The world's fastest static site generator. Read it to understand high-throughput templating, content pipelines, and how to keep a Go binary responsive at scale.",
    useCases: [
      "Static site generators",
      "Templating engines",
      "Content pipelines",
      "Build-time performance",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "75k+",
  },
  {
    slug: "syncthing",
    title: "Syncthing",
    github: "https://github.com/syncthing/syncthing",
    description:
      "Decentralised continuous file synchronisation. The best open-source case study for peer-to-peer protocols, conflict resolution, and Merkle-tree diffs in Go.",
    useCases: [
      "P2P protocols",
      "File sync algorithms",
      "Conflict resolution",
      "Distributed systems",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "65k+",
  },
  {
    slug: "prometheus",
    title: "Prometheus",
    github: "https://github.com/prometheus/prometheus",
    description:
      "Industry-standard metrics + time-series database. Read it to learn how to design a TSDB, build a pull-based scraper, and write a PromQL-style query engine.",
    useCases: [
      "Observability",
      "Time-series databases",
      "Query engines",
      "Pull-based scraping",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "55k+",
  },
  {
    slug: "etcd",
    title: "etcd",
    github: "https://github.com/etcd-io/etcd",
    description:
      "Distributed key-value store powering Kubernetes. The canonical Raft consensus implementation in Go — essential reading for distributed systems.",
    useCases: [
      "Raft consensus",
      "Distributed key-value",
      "Cluster coordination",
      "gRPC at scale",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "47k+",
  },
  {
    slug: "gomponents",
    title: "Gomponents",
    github: "https://github.com/maragudk/gomponents",
    description:
      "HTML components written in pure Go — no template engine. Tiny codebase that demonstrates type-safe, composable UI generation using only the standard library.",
    useCases: [
      "Server-rendered HTML",
      "Type-safe components",
      "HTMX backends",
      "Templating alternatives",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "3k+",
  },
  {
    slug: "samber-lo",
    title: "samber/lo",
    github: "https://github.com/samber/lo",
    description:
      "Lodash-style utility library leveraging Go 1.18+ generics. Read it to learn how to use generics idiomatically for slices, maps, and channels.",
    useCases: [
      "Go generics patterns",
      "Functional programming",
      "Slice utilities",
      "Channel helpers",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "20k+",
  },
  {
    slug: "bolt-db",
    title: "BoltDB / bbolt",
    github: "https://github.com/etcd-io/bbolt",
    description:
      "Embedded pure-Go key-value store used inside etcd, Consul, and InfluxDB. The cleanest readable implementation of a B+ tree + mmap database engine.",
    useCases: [
      "Embedded databases",
      "B+ tree internals",
      "mmap I/O",
      "Storage engines",
    ],
    category: "Golang",
    addedAt: "2026-05-24",
    stars: "8k+",
  },

  // ── Next.js ───────────────────────────────────────────────────────────
  {
    slug: "next-saas-starter",
    title: "Next.js SaaS Starter",
    github: "https://github.com/leerob/next-saas-starter",
    description:
      "Lee Robinson's production-ready SaaS starter — Next.js 15 App Router, Stripe subscriptions, Postgres + Drizzle, role-based access, dashboard out of the box.",
    useCases: [
      "SaaS boilerplate",
      "Stripe subscriptions",
      "Drizzle ORM",
      "App Router patterns",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "15k+",
  },
  {
    slug: "cal-com",
    title: "Cal.com",
    github: "https://github.com/calcom/cal.com",
    description:
      "Open-source Calendly alternative built on Next.js. Massive codebase that shows how to architect a multi-tenant scheduling product end to end.",
    useCases: [
      "Scheduling apps",
      "Multi-tenant Next.js",
      "Calendar integrations",
      "Webhook design",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "33k+",
  },
  {
    slug: "documenso",
    title: "Documenso",
    github: "https://github.com/documenso/documenso",
    description:
      "Open-source DocuSign alternative. Real production Next.js app with cryptographic signatures, PDF manipulation, and clean tRPC + Prisma architecture.",
    useCases: [
      "Document signing",
      "PDF generation",
      "tRPC patterns",
      "Cryptographic signatures",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "10k+",
  },
  {
    slug: "dub",
    title: "Dub.co",
    github: "https://github.com/dubinc/dub",
    description:
      "Modern open-source link shortener with analytics. Next.js + Vercel edge functions + Upstash Redis — perfect study material for edge-first product architecture.",
    useCases: [
      "Link management",
      "Edge functions",
      "Real-time analytics",
      "Upstash + Redis",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "20k+",
  },
  {
    slug: "plane",
    title: "Plane",
    github: "https://github.com/makeplane/plane",
    description:
      "Open-source Jira / Linear alternative. Full-stack Next.js + Django case study for ticketing, real-time collab, and complex permission models.",
    useCases: [
      "Project management",
      "Real-time collaboration",
      "Complex permissions",
      "Django + Next.js",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "32k+",
  },
  {
    slug: "shadcn-ui-taxonomy",
    title: "Taxonomy",
    github: "https://github.com/shadcn-ui/taxonomy",
    description:
      "shadcn's reference Next.js app — exhibits the App Router, server actions, Radix UI patterns, and the original blueprint that shadcn/ui was built from.",
    useCases: [
      "App Router blueprint",
      "Server Actions",
      "shadcn/ui patterns",
      "Auth.js setup",
    ],
    category: "Next.js",
    addedAt: "2026-05-24",
    stars: "18k+",
  },

  // ── AI ────────────────────────────────────────────────────────────────
  {
    slug: "vercel-ai-sdk",
    title: "Vercel AI SDK",
    github: "https://github.com/vercel/ai",
    description:
      "Provider-agnostic TypeScript SDK for streaming text, structured outputs, and tool calling. The foundation of nearly every modern Next.js AI feature.",
    useCases: [
      "Streaming chat",
      "Structured generation",
      "Tool calling",
      "Multi-provider routing",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "13k+",
  },
  {
    slug: "ollama",
    title: "Ollama",
    github: "https://github.com/ollama/ollama",
    description:
      "Run Llama, Mistral, Gemma and other LLMs locally with one command. The cleanest reference for packaging, quantising, and serving open-weight models.",
    useCases: [
      "Local LLM inference",
      "Model packaging",
      "GGUF quantisation",
      "On-device AI",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "100k+",
  },
  {
    slug: "open-webui",
    title: "Open WebUI",
    github: "https://github.com/open-webui/open-webui",
    description:
      "Self-hosted ChatGPT-style UI for any OpenAI-compatible backend (works with Ollama). Best open-source example of a polished chat interface with RAG built in.",
    useCases: [
      "Self-hosted ChatGPT",
      "Local RAG",
      "Multi-model frontends",
      "Plugin systems",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "75k+",
  },
  {
    slug: "llama-cpp",
    title: "llama.cpp",
    github: "https://github.com/ggerganov/llama.cpp",
    description:
      "Pure C/C++ inference of Llama models on CPU. The most influential project in the local-LLM movement — study it to actually understand how transformers run.",
    useCases: [
      "Transformer inference",
      "CPU-only LLMs",
      "Quantisation maths",
      "Cross-platform AI",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "70k+",
  },
  {
    slug: "qdrant",
    title: "Qdrant",
    github: "https://github.com/qdrant/qdrant",
    description:
      "Production vector database written in Rust. Read it to learn how HNSW indexing, payload filtering, and high-throughput vector search actually work.",
    useCases: [
      "Vector databases",
      "Semantic search",
      "RAG backends",
      "HNSW indexing",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "22k+",
  },
  {
    slug: "chatgpt-next-web",
    title: "ChatGPT-Next-Web",
    github: "https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",
    description:
      "One-click deployable Next.js ChatGPT UI supporting OpenAI, Claude, Gemini, and local models. Battle-tested chat UX patterns you can copy directly.",
    useCases: [
      "Chat UI patterns",
      "Multi-provider switching",
      "Prompt templates",
      "Mobile-friendly AI",
    ],
    category: "AI",
    addedAt: "2026-05-24",
    stars: "80k+",
  },

  // ── AI Agents ─────────────────────────────────────────────────────────
  {
    slug: "langchain",
    title: "LangChain",
    github: "https://github.com/langchain-ai/langchain",
    description:
      "The original framework for building LLM-powered agents and chains. Even if you don't use it, the codebase is a great map of the agent-design space.",
    useCases: [
      "Agent orchestration",
      "Retrieval pipelines",
      "Tool composition",
      "Prompt templates",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "95k+",
  },
  {
    slug: "crewai",
    title: "CrewAI",
    github: "https://github.com/crewAIInc/crewAI",
    description:
      "Multi-agent framework where each agent has a role, tools, and goals. Cleaner abstractions than LangChain for orchestrating a team of LLMs to complete tasks.",
    useCases: [
      "Multi-agent systems",
      "Role-based agents",
      "Task delegation",
      "Autonomous workflows",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "25k+",
  },
  {
    slug: "autogen",
    title: "AutoGen",
    github: "https://github.com/microsoft/autogen",
    description:
      "Microsoft's framework for conversable, customisable, and autonomous multi-agent applications. Read it to learn group-chat coordination patterns between LLMs.",
    useCases: [
      "Conversational agents",
      "Group-chat coordination",
      "Code execution loops",
      "Human-in-the-loop AI",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "35k+",
  },
  {
    slug: "n8n",
    title: "n8n",
    github: "https://github.com/n8n-io/n8n",
    description:
      "Open-source workflow automation with first-class AI nodes. Self-hosted Zapier alternative — perfect for visually wiring LLMs to your real business systems.",
    useCases: [
      "Workflow automation",
      "AI + Zapier patterns",
      "Webhook orchestration",
      "Self-hosted ops",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "65k+",
  },
  {
    slug: "agno",
    title: "Agno (formerly Phidata)",
    github: "https://github.com/agno-agi/agno",
    description:
      "Lightweight Python framework for building memory-aware, tool-using AI agents. Cleaner DX than LangChain when you just need an agent that does the thing.",
    useCases: [
      "Lightweight agents",
      "Memory-aware AI",
      "Tool-using LLMs",
      "Python-first agent dev",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "15k+",
  },
  {
    slug: "mcp-typescript-sdk",
    title: "MCP TypeScript SDK",
    github: "https://github.com/modelcontextprotocol/typescript-sdk",
    description:
      "Anthropic's reference SDK for the Model Context Protocol. The cleanest path to expose your app's tools to Claude Desktop, Cursor, and Windsurf.",
    useCases: [
      "MCP servers",
      "Claude Desktop tools",
      "Cursor integrations",
      "Cross-client AI APIs",
    ],
    category: "AI Agents",
    addedAt: "2026-05-24",
    stars: "5k+",
  },

  // ── React ─────────────────────────────────────────────────────────────
  {
    slug: "shadcn-ui",
    title: "shadcn/ui",
    github: "https://github.com/shadcn-ui/ui",
    description:
      "Not a library — a registry of copy-paste components built on Radix + Tailwind. The single biggest shift in React component distribution in the last 3 years.",
    useCases: [
      "Component registries",
      "Radix UI patterns",
      "Tailwind component design",
      "Copy-paste architecture",
    ],
    category: "React",
    addedAt: "2026-05-24",
    stars: "75k+",
  },
  {
    slug: "tanstack-query",
    title: "TanStack Query",
    github: "https://github.com/TanStack/query",
    description:
      "The data-fetching library most modern React apps actually use. Read its source to understand cache invalidation, suspense integration, and request dedupe.",
    useCases: [
      "Server-state management",
      "Caching strategies",
      "Optimistic updates",
      "Suspense integration",
    ],
    category: "React",
    addedAt: "2026-05-24",
    stars: "45k+",
  },
  {
    slug: "radix-ui",
    title: "Radix UI",
    github: "https://github.com/radix-ui/primitives",
    description:
      "Unstyled, accessible React primitives. Reference implementation for every popover, dialog, menu, and combobox you've ever wanted to build correctly.",
    useCases: [
      "Accessible primitives",
      "Headless components",
      "ARIA patterns",
      "Focus management",
    ],
    category: "React",
    addedAt: "2026-05-24",
    stars: "16k+",
  },
  {
    slug: "react-hook-form",
    title: "React Hook Form",
    github: "https://github.com/react-hook-form/react-hook-form",
    description:
      "Performant form library that minimises re-renders. Study it for ref-based state management and how to build a tiny, fast library with zero deps.",
    useCases: [
      "Form state management",
      "Validation patterns",
      "Uncontrolled inputs",
      "Tiny library design",
    ],
    category: "React",
    addedAt: "2026-05-24",
    stars: "42k+",
  },
  {
    slug: "zustand",
    title: "Zustand",
    github: "https://github.com/pmndrs/zustand",
    description:
      "Small, fast, and scalable state management. The entire core is < 300 lines — required reading if you want to actually understand React state, not just use it.",
    useCases: [
      "Lightweight global state",
      "Selector patterns",
      "Persistence middleware",
      "Tiny lib internals",
    ],
    category: "React",
    addedAt: "2026-05-24",
    stars: "50k+",
  },

  // ── React Native ──────────────────────────────────────────────────────
  {
    slug: "expo",
    title: "Expo",
    github: "https://github.com/expo/expo",
    description:
      "The framework for universal React applications. The whole modern RN ecosystem rides on this — study modules, routers, and config plugins to ship faster.",
    useCases: [
      "Cross-platform RN",
      "Expo Router",
      "Native modules",
      "Config plugins",
    ],
    category: "React Native",
    addedAt: "2026-05-24",
    stars: "33k+",
  },
  {
    slug: "react-native-reanimated",
    title: "React Native Reanimated",
    github: "https://github.com/software-mansion/react-native-reanimated",
    description:
      "60fps animations on the UI thread. The single most copied animation library in React Native — read it to learn how to bridge JS and native efficiently.",
    useCases: [
      "60fps animations",
      "Worklets",
      "Gesture-driven UI",
      "JSI internals",
    ],
    category: "React Native",
    addedAt: "2026-05-24",
    stars: "9k+",
  },
  {
    slug: "tamagui",
    title: "Tamagui",
    github: "https://github.com/tamagui/tamagui",
    description:
      "Universal styling system for React Native + web. Production-grade compiler that shows how to optimise styled components at build time across platforms.",
    useCases: [
      "Universal styling",
      "Compile-time CSS",
      "Cross-platform design systems",
      "Performance theming",
    ],
    category: "React Native",
    addedAt: "2026-05-24",
    stars: "12k+",
  },
  {
    slug: "react-navigation",
    title: "React Navigation",
    github: "https://github.com/react-navigation/react-navigation",
    description:
      "The de-facto navigation library for React Native. Read it to learn navigator composition, screen lifecycle, and deep linking the way Meta intended.",
    useCases: [
      "Mobile navigation",
      "Deep linking",
      "Navigator composition",
      "Screen lifecycle",
    ],
    category: "React Native",
    addedAt: "2026-05-24",
    stars: "23k+",
  },
  {
    slug: "nativewind",
    title: "NativeWind",
    github: "https://github.com/nativewind/nativewind",
    description:
      "Tailwind CSS for React Native via Babel + JSI. Cleanest implementation of utility-first styling on mobile — and the bridge that lets web devs ship native fast.",
    useCases: [
      "Tailwind on mobile",
      "Cross-platform styling",
      "Web-to-native migration",
      "Babel plugin design",
    ],
    category: "React Native",
    addedAt: "2026-05-24",
    stars: "7k+",
  },

  // ── Learning ──────────────────────────────────────────────────────────
  {
    slug: "build-your-own-x",
    title: "Build Your Own X",
    github: "https://github.com/codecrafters-io/build-your-own-x",
    description:
      "Massive collection of guides to build your own Git, OS, web server, programming language, blockchain, neural network, and more — from scratch.",
    useCases: [
      "Learn by rebuilding",
      "Systems programming",
      "Compiler / VM construction",
      "Self-directed CS",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "330k+",
  },
  {
    slug: "system-design-primer",
    title: "System Design Primer",
    github: "https://github.com/donnemartin/system-design-primer",
    description:
      "How to design large-scale systems — prep for system-design interviews and real architecture decisions. The single most-starred learning repo in software.",
    useCases: [
      "System design interviews",
      "Distributed architecture",
      "Scaling patterns",
      "Tradeoff analysis",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "300k+",
  },
  {
    slug: "developer-roadmap",
    title: "Developer Roadmap",
    github: "https://github.com/kamranahmedse/developer-roadmap",
    description:
      "Interactive roadmaps for frontend, backend, DevOps, AI/ML, Go, React, and 30+ other paths. The clearest map for anyone choosing what to learn next.",
    useCases: [
      "Career roadmaps",
      "Curriculum design",
      "Skill gap analysis",
      "Interactive learning",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "300k+",
  },
  {
    slug: "freecodecamp",
    title: "freeCodeCamp",
    github: "https://github.com/freeCodeCamp/freeCodeCamp",
    description:
      "Open-source curriculum and platform for learning to code. Study both the lessons AND the codebase — it's one of the largest TypeScript monorepos in production.",
    useCases: [
      "Learn to code",
      "Open curriculum",
      "TypeScript monorepos",
      "Self-hosted learning platforms",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "410k+",
  },
  {
    slug: "30-seconds-of-code",
    title: "30 Seconds of Code",
    github: "https://github.com/Chalarangelo/30-seconds-of-code",
    description:
      "Hand-curated short JavaScript, React, Python and Node snippets you can read and absorb in under 30 seconds each. Great for ambient learning.",
    useCases: [
      "Code snippets",
      "Daily learning",
      "Interview revision",
      "Quick patterns",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "120k+",
  },
  {
    slug: "the-algorithms",
    title: "The Algorithms",
    github: "https://github.com/TheAlgorithms",
    description:
      "All major algorithms implemented in dozens of languages (Go, TS, Python, Rust). Best place to compare how the same algorithm reads across paradigms.",
    useCases: [
      "Algorithm study",
      "Cross-language comparison",
      "Interview prep",
      "Reference implementations",
    ],
    category: "Learning",
    addedAt: "2026-05-24",
    stars: "190k+",
  },

  // ── Optimisation ──────────────────────────────────────────────────────
  {
    slug: "next-bundle-analyzer",
    title: "Next Bundle Analyzer",
    github:
      "https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer",
    description:
      "Official Next.js bundle analysis plugin. The first tool to reach for when your Next.js app is shipping too much JavaScript to the browser.",
    useCases: [
      "Bundle size analysis",
      "JS payload optimisation",
      "Chunk splitting",
      "Tree-shaking checks",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "(part of Next)",
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    github: "https://github.com/GoogleChrome/lighthouse",
    description:
      "Google's automated tool for improving web page quality (perf, SEO, a11y, PWA). The standard every Core Web Vitals discussion is measured against.",
    useCases: [
      "Web performance audits",
      "Core Web Vitals",
      "Accessibility scoring",
      "CI performance gates",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "29k+",
  },
  {
    slug: "k6",
    title: "k6",
    github: "https://github.com/grafana/k6",
    description:
      "Modern load-testing tool that writes test scripts in JavaScript and runs them in Go for performance. Required for API perf testing — pairs with Grafana for results.",
    useCases: [
      "Load testing",
      "API performance",
      "CI perf regressions",
      "Stress testing",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "27k+",
  },
  {
    slug: "vite",
    title: "Vite",
    github: "https://github.com/vitejs/vite",
    description:
      "Next-generation frontend tooling — instant dev server + Rollup-based prod builds. Study it to understand modern bundling, HMR, and ESM-first dev workflows.",
    useCases: [
      "Frontend build tooling",
      "Dev server design",
      "HMR internals",
      "Rollup configuration",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "70k+",
  },
  {
    slug: "wrk",
    title: "wrk",
    github: "https://github.com/wg/wrk",
    description:
      "Modern HTTP benchmarking tool capable of generating significant load from a single machine. The tiny C codebase teaches event loops + epoll perfectly.",
    useCases: [
      "HTTP benchmarking",
      "Throughput testing",
      "Event-loop internals",
      "Low-level perf tools",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "37k+",
  },
  {
    slug: "pprof",
    title: "pprof",
    github: "https://github.com/google/pprof",
    description:
      "Google's pprof tool for visualising and analysing CPU/memory profiles. The Go community's default profiler — built right into the std library net/http/pprof.",
    useCases: [
      "CPU profiling",
      "Memory leak analysis",
      "Flame graphs",
      "Production diagnostics",
    ],
    category: "Optimisation",
    addedAt: "2026-05-24",
    stars: "8k+",
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Read APIs — cached at the React render level                             */
/* ────────────────────────────────────────────────────────────────────────── */

export const CATEGORY_ORDER: OpenSourceCategory[] = [
  "Golang",
  "Next.js",
  "AI",
  "AI Agents",
  "React",
  "React Native",
  "Learning",
  "Optimisation",
];

/** All projects, newest first by addedAt. */
export const getAllOpenSourceProjects = cache((): OpenSourceProject[] => {
  return [...OPENSOURCE_PROJECTS].sort(
    (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  );
});

/** Latest N projects (used by the home-page section). */
export const getLatestOpenSourceProjects = cache(
  (limit: number): OpenSourceProject[] => {
    return getAllOpenSourceProjects().slice(0, limit);
  }
);

/** Group projects by category for the dedicated /opensource page. */
export const getOpenSourceProjectsByCategory = cache(
  (): { category: OpenSourceCategory; projects: OpenSourceProject[] }[] => {
    return CATEGORY_ORDER.map((category) => ({
      category,
      projects: OPENSOURCE_PROJECTS.filter((p) => p.category === category),
    })).filter((group) => group.projects.length > 0);
  }
);
