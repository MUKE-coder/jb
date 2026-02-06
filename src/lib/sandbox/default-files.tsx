export const defaultFiles: Record<string, string> = {
  "app/layout.tsx": `import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'DESISHUB Open Source Components',
  description: 'Free, open-source React components built with shadcn/ui, Tailwind CSS, and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}>
      <body>{children}</body>
    </html>
  )
}`,

  "app/page.tsx": `'use client'

import { useState } from 'react'

const components = [
  {
    name: 'File Storage UI',
    description: 'A complete file storage solution with drag-and-drop uploads, supporting AWS S3 and Cloudflare R2. Includes progress tracking, presigned URLs, and Prisma database integration.',
    install: 'pnpm dlx shadcn@latest add https://file-storage-registry.vercel.app/r/file-storage.json',
    docs: 'https://jb.desishub.com/components/file-storage-ui',
    features: ['AWS S3 & Cloudflare R2', 'Drag & Drop Uploads', '5 Dropzone Variants', 'Real-time Progress', 'Presigned URLs', 'Prisma Integration'],
    category: 'Storage',
    color: 'blue',
  },
  {
    name: 'Better Auth UI',
    description: 'Production-ready authentication system with 8 pre-built components: SignIn, SignUp, VerifyEmail, ForgetPassword, ResetPassword, ChangePassword, Profile, and LogoutButton.',
    install: 'pnpm dlx shadcn@latest add https://better-auth-ui.desishub.com/r/auth-components.json',
    docs: 'https://jb.desishub.com/components/jb-better-auth-ui-components',
    features: ['8 Auth Components', 'Email OTP Verification', 'OAuth (Google & GitHub)', 'Password Recovery', 'Dark Mode', 'Zod Validation'],
    category: 'Auth',
    color: 'purple',
  },
  {
    name: 'Zustand Cart',
    description: 'A complete e-commerce shopping cart with product listings, quantity controls, and checkout. Uses Zustand for state management with localStorage persistence.',
    install: 'pnpm dlx shadcn@latest add https://jb.desishub.com/r/zustand-cart.json',
    docs: 'https://jb.desishub.com/components/zustand-cart-component',
    features: ['Zustand State Management', 'localStorage Persistence', 'Product Cards', 'Cart Management', 'Quantity Controls', 'Total Calculations'],
    category: 'E-commerce',
    color: 'green',
  },
  {
    name: 'Multi Step Form',
    description: 'A multi-step form component that breaks complex forms into sequential stages with Zustand state management and shadcn/ui form validation.',
    install: 'pnpm dlx shadcn@latest add https://jb.desishub.com/r/multi-step-form.json',
    docs: 'https://jb.desishub.com/components/multi-step-form-component',
    features: ['Zustand State Management', 'Step-by-Step Validation', 'Progress Tracking', 'TypeScript Support', 'shadcn/ui Forms', 'Flexible Stages'],
    category: 'Forms',
    color: 'orange',
  },
  {
    name: 'Work Experience',
    description: 'A professional work experience timeline displaying company history with multiple positions, expandable role details, skill tags, and employment metadata.',
    install: 'pnpm dlx shadcn@latest add https://jb.desishub.com/r/work-experience.json',
    docs: 'https://jb.desishub.com/components/work-experience-component',
    features: ['Multi-position Support', 'Expandable Details', 'Skill Tags', 'Employment Types', 'Company Logos', 'Current Job Indicator'],
    category: 'Portfolio',
    color: 'cyan',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
  green: { bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800' },
}

function ComponentCard({ component, index, copiedIndex, onCopy }) {
  const colors = colorMap[component.color] || colorMap.blue

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className={\`\${colors.bg} px-6 py-4\`}>
        <div className="flex items-center justify-between">
          <Badge className={\`\${colors.badge} border-0\`}>
            {component.category}
          </Badge>
        </div>
        <h3 className={\`mt-2 text-lg font-bold \${colors.text}\`}>
          {component.name}
        </h3>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          {component.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {component.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
            >
              {feature}
            </span>
          ))}
          {component.features.length > 4 && (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-400">
              +{component.features.length - 4} more
            </span>
          )}
        </div>

        {/* Install command */}
        <div className="mt-auto">
          <div className="rounded-lg bg-gray-950 p-3">
            <div className="flex items-center justify-between gap-2">
              <code className="overflow-x-auto text-[11px] text-green-400 whitespace-nowrap">
                $ {component.install}
              </code>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 shrink-0 px-2 text-[10px] text-gray-400 hover:text-white"
                onClick={() => onCopy(component.install, index)}
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
            <a href={component.docs} target="_blank" rel="noopener noreferrer">
              View Docs
            </a>
          </Button>
          <Button size="sm" className="flex-1 text-xs" asChild>
            <a href={component.docs} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [copiedIndex, setCopiedIndex] = useState(null)

  const filtered = components.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Open Source
          </Badge>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            DESISHUB Components
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Free, production-ready React components. Install with a single command
            via the shadcn CLI. Built with TypeScript, Tailwind CSS, and shadcn/ui.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Badge>shadcn/ui</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Next.js</Badge>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <Input
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 rounded-xl border bg-white p-6 shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-500">Components</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">1 Command</div>
            <div className="text-sm text-gray-500">Installation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-500">Free & Open Source</div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((component, index) => (
            <ComponentCard
              key={component.name}
              component={component}
              index={index}
              copiedIndex={copiedIndex}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No components found matching "{search}"
          </div>
        )}

        {/* Quick Install Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Quick Install
          </h2>
          <div className="space-y-3">
            {components.map((component, index) => (
              <div
                key={component.name}
                className="flex items-center gap-3 rounded-lg border bg-gray-950 p-3"
              >
                <span className="min-w-[140px] text-sm font-medium text-gray-400">
                  {component.name}
                </span>
                <code className="flex-1 overflow-x-auto text-xs text-green-400">
                  {component.install}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  className="shrink-0 text-xs text-gray-400 hover:text-white"
                  onClick={() => handleCopy(component.install, index + 100)}
                >
                  {copiedIndex === index + 100 ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t pt-8 text-center text-sm text-gray-500">
          <p>
            Built by{' '}
            <a
              href="https://jb.desishub.com"
              className="font-medium text-gray-900 underline underline-offset-4"
            >
              JB
            </a>
            {' '}at DESISHUB. All components are open source and free to use.
          </p>
        </div>
      </div>
    </main>
  )
}`,

  "app/globals.css": `@import 'tailwindcss';

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}`,

  "lib/utils.ts": `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,

  "package.json": `{
  "name": "desishub-components-showcase",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "15.0.0"
  }
}`,
};
