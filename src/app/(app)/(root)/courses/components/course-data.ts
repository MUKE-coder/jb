export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  duration: string;
  episodes: number;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  websiteLink: string;
  topics: string[];
  projects: string[];
  deployment: string[];
  pricing: {
    withoutSourceCode: number;
    withSourceCode: number;
  };
  techStack: string[];
  releaseDate: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Next.js Mastery Course",
    slug: "nextjs-mastery",
    description:
      "Master the art of building production-ready applications with Next.js. Learn to integrate cutting-edge technologies including Prisma, Better Auth, and AI capabilities with the Vercel AI SDK. Build a complete e-commerce platform from scratch.",
    thumbnail: "/courses/nextjs-mastery.jpg",
    duration: "40 hours",
    episodes: 120,
    complexity: "Intermediate",
    websiteLink: "https://desishub.com/courses/nextjs-mastery",
    topics: [
      "Next.js API Routes",
      "Prisma & PostgreSQL",
      "Better Auth Authentication",
      "AI Integration with Vercel AI SDK",
      "AWS S3 File Storage",
      "Stripe Payment Integration",
      "Deployment on Vercel",
    ],
    projects: [
      "Next.js Starter Kit with complete tech stack",
      "BetaPcs E-commerce Platform - Sell computers and accessories",
    ],
    deployment: ["Vercel"],
    pricing: {
      withoutSourceCode: 50,
      withSourceCode: 80,
    },
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "AWS S3",
      "Stripe",
    ],
    releaseDate: "Jan 1st 2026",
  },
  {
    id: "8",
    title: "Modern MERN Stack: Next.js + Hono + Prisma (NHPC Stack)",
    slug: "nhpc-stack",
    description:
      "Learn the cutting-edge NHPC stack combining Next.js, Hono, Prisma, and PostgreSQL. Build a feature-rich job portal with modern authentication, API documentation, and rate limiting for production-ready applications.",
    thumbnail: "/courses/nhpc-stack.png",
    duration: "35 hours",
    episodes: 100,
    complexity: "Intermediate",
    websiteLink: "https://desishub.com/courses/nhpc-stack",
    topics: [
      "Hono API Framework",
      "Better Auth Integration",
      "API Rate Limiting",
      "Prisma ORM & PostgreSQL",
      "Scalar API Documentation",
      "Next.js Frontend",
    ],
    projects: ["Job Portal Application", "NHPC Stack Starter Kit"],
    deployment: ["Vercel for Frontend", "Cloudflare Workers for Hono API"],
    pricing: {
      withoutSourceCode: 100,
      withSourceCode: 150,
    },
    techStack: [
      "Next.js",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Cloudflare",
    ],
    releaseDate: "Feb 1st 2026",
  },
  {
    id: "5",
    title: "Laravel with React Fullstack Course",
    slug: "laravel-react-fullstack",
    description:
      "Master the classic yet modern combination of Laravel and React. Build a complete e-commerce application with robust authentication, file storage, and all essential Laravel concepts for enterprise-grade applications.",
    thumbnail: "/courses/laravel-react.png",
    duration: "45 hours",
    episodes: 130,
    complexity: "Intermediate",
    websiteLink: "https://desishub.com/courses/laravel-react-fullstack",
    topics: [
      "Laravel API Development",
      "Authentication & Authorization",
      "PostgreSQL Database",
      "AWS S3 File Storage",
      "Laravel Core Concepts",
      "React Frontend Integration",
    ],
    projects: [
      "Full-featured E-commerce Application",
      "Laravel + React Starter Kit",
    ],
    deployment: ["Laravel Cloud"],
    pricing: {
      withoutSourceCode: 100,
      withSourceCode: 200,
    },
    techStack: ["Laravel", "React", "PostgreSQL", "AWS S3"],
    releaseDate: "Mar 1st 2026",
  },
  {
    id: "2",
    title: "Golang with Next.js Fullstack Course",
    slug: "golang-nextjs-fullstack",
    description:
      "Dive deep into fullstack development by combining the power of Golang's performance with Next.js's superior developer experience. Build a complete clinic management system with modern authentication and real-time features.",
    thumbnail: "/courses/golang-nextjs.jpg",
    duration: "50 hours",
    episodes: 150,
    complexity: "Advanced",
    websiteLink: "https://desishub.com/courses/golang-nextjs-fullstack",
    topics: [
      "Go Gin Framework",
      "GORM ORM",
      "PostgreSQL Database",
      "JWT & Social Authentication",
      "Go Routines & Concurrency",
      "Next.js API Consumption",
    ],
    projects: [
      "Golang API for Clinic Management System",
      "Next.js Frontend consuming the API",
      "Production-ready Fullstack Starter Kit",
    ],
    deployment: ["Next.js on Vercel", "API on Railway"],
    pricing: {
      withoutSourceCode: 100,
      withSourceCode: 200,
    },
    techStack: ["Golang", "Gin", "GORM", "PostgreSQL", "Next.js", "JWT"],
    releaseDate: "April 1st 2026",
  },
  {
    id: "6",
    title: "React Native with Expo Fullstack Course",
    slug: "react-native-expo",
    description:
      "Build production-ready mobile applications with React Native and Expo. Learn modern navigation, authentication, and payment integration. Create a marketplace for selling Expo app templates.",
    thumbnail: "/courses/react-native-expo.jpg",
    duration: "40 hours",
    episodes: 110,
    complexity: "Intermediate",
    websiteLink: "https://desishub.com/courses/react-native-expo",
    topics: [
      "Expo SDK & API",
      "React Native Routing",
      "NativeWind Styling",
      "Navigation Patterns",
      "Better Auth Integration",
      "Stripe Payments",
    ],
    projects: [
      "Template Selling Platform for Expo Apps",
      "React Native Starter Kit",
    ],
    deployment: ["EAS (Expo Application Services)", "APK Generation"],
    pricing: {
      withoutSourceCode: 100,
      withSourceCode: 200,
    },
    techStack: ["React Native", "Expo", "NativeWind", "Better Auth", "Stripe"],
    releaseDate: "May 1st 2026",
  },
  {
    id: "4",
    title: "TanStack Start Course",
    slug: "tanstack-start",
    description:
      "Explore the next generation of React frameworks with TanStack Start. Build lightning-fast, type-safe applications with server functions and modern authentication. Create a stunning Apple-inspired e-commerce clone.",
    thumbnail: "/courses/tanstack-start.jpg",
    duration: "30 hours",
    episodes: 90,
    complexity: "Intermediate",
    websiteLink: "https://desishub.com/courses/tanstack-start",
    topics: [
      "TanStack Start API",
      "Server Functions",
      "Better Auth & Middleware",
      "Advanced Routing",
      "AWS S3 File Storage",
      "Prisma & PostgreSQL",
    ],
    projects: ["Apple-inspired E-commerce Clone", "TanStack Start Starter Kit"],
    deployment: ["Vercel", "VPS"],
    pricing: {
      withoutSourceCode: 80,
      withSourceCode: 120,
    },
    techStack: [
      "TanStack Start",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "AWS S3",
    ],
    releaseDate: "Jun 1st 2026",
  },
  {
    id: "7",
    title: "Desktop App Development with Electron & Golang",
    slug: "electron-golang-desktop",
    description:
      "Create powerful desktop applications that work both offline and online. Combine Electron's cross-platform capabilities with Golang's performance to build an advanced POS system with barcode scanning and receipt printing.",
    thumbnail: "/courses/electron-golang.png",
    duration: "60 hours",
    episodes: 180,
    complexity: "Advanced",
    websiteLink: "https://desishub.com/courses/electron-golang-desktop",
    topics: [
      "Golang API with Gin Framework",
      "GORM with SQLite (Offline) & PostgreSQL (Online)",
      "JWT Authentication",
      "Electron Forge with React",
      "Tailwind CSS & shadcn/ui",
      "TanStack Router",
      "Barcode Scanning",
      "Receipt Printing",
    ],
    projects: [
      "Advanced POS Desktop Application",
      "Offline/Online Sync System",
      "Electron + Golang Starter Kit",
    ],
    deployment: ["Desktop Executable", "Database on Railway"],
    pricing: {
      withoutSourceCode: 200,
      withSourceCode: 300,
    },
    techStack: [
      "Electron",
      "Golang",
      "React",
      "SQLite",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    releaseDate: "Jul 1st 2026",
  },
  {
    id: "3",
    title: "DevOps Course with AWS",
    slug: "devops-aws",
    description:
      "Transform your deployment workflow with comprehensive DevOps practices. Master AWS, Docker, Kubernetes, and CI/CD pipelines. Learn infrastructure as code with Terraform and monitoring with Grafana.",
    thumbnail: "/courses/devops-aws.png",
    duration: "35 hours",
    episodes: 100,
    complexity: "Advanced",
    websiteLink: "https://desishub.com/courses/devops-aws",
    topics: [
      "Git & GitHub Advanced Workflows",
      "API Performance Testing with K6",
      "AWS EC2 & VPS Management",
      "Networking & SSH",
      "Docker & Containerization",
      "Kubernetes for Scaling",
      "GitHub Actions CI/CD",
      "Terraform Infrastructure as Code",
      "Grafana Monitoring",
    ],
    projects: ["Golang API with complete DevOps pipeline"],
    deployment: [
      "EC2 Deployment with Docker",
      "Dokploy",
      "GitHub Actions",
      "Terraform",
      "Grafana",
    ],
    pricing: {
      withoutSourceCode: 120,
      withSourceCode: 200,
    },
    techStack: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Grafana",
      "GitHub Actions",
    ],
    releaseDate: "Aug 1st 2026",
  },
];
