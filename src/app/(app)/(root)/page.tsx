import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import Github from "@/components/Github";
import { USER } from "@/data/user";
import { About } from "@/features/profile/components/about";
import { Blog } from "@/features/profile/components/blog";
import { Experiences } from "@/features/profile/components/experiences";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <TeckStack />
        <Separator />
        <Github />
        <Separator />
        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        {/* <Awards />
        <Separator /> */}

        {/* <Certifications />
        <Separator /> */}

        {/* <Brand />
        <Separator /> */}
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
      "@id": "https://jb.desishub.com/#person",
      name: `${USER.firstName} ${USER.lastName}`,
      alternateName: [
        "JB",
        "JB WEB DEVELOPER",
        "Muke JB",
        "Top Go Developer Uganda",
      ],
      identifier: USER.username,
      image: USER.avatar,
      url: USER.website,
      jobTitle: USER.jobTitle,
      description: USER.bio,
      knowsAbout: [
        "Go (Golang)",
        "Grit Framework",
        "Gin",
        "GORM",
        "Goroutines and Concurrency",
        "Microservices",
        "Native Desktop App Development",
        "Wails v2",
        "Multi-Client Application Architecture",
        "Offline-First Applications",
        "iOS App Development",
        "Android App Development",
        "Expo",
        "React Native",
        "Next.js",
        "React",
        "TypeScript",
        "AI Engineering",
        "Claude Code",
        "Model Context Protocol (MCP)",
        "AI Agent Development",
        "Vercel AI SDK",
        "Automation Engineering",
        "ERP Development",
        "Internal Tools Development",
        "Property Management Software",
        "Multi-tenant SaaS",
        "High-Performance Backend Systems",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Cloudflare",
        "Mobile Money Payments",
      ],
      knowsLanguage: ["English", "Luganda"],
      award: [
        "Creator of the Grit Framework — first Golang meta-framework from Uganda",
        "Author of 6 production-grade Go open source projects",
        "Top Go (Golang) developer in Uganda 2026",
        "AI & Automation engineer behind ATLAS, Sentinel, Pulse, Nexora AI",
        "Native desktop app developer — shipped Rental Manager (Wails v2) for HMK Estates",
        "Multi-client SaaS architect — one Go backend powering web, desktop, iOS and Android",
      ],
      sameAs: [
        "https://github.com/MUKE-coder",
        "https://linkedin.com/in/muke-johnbaptist",
        "https://x.com/MJohnbaptist",
        "https://www.youtube.com/@JBWEBDEVELOPER",
        "https://www.tiktok.com/@jbdesishub",
        "https://app.daily.dev/jbwebdeveloper94",
        "https://github.com/MUKE-coder/grit",
        "https://github.com/MUKE-coder/atlas",
        "https://github.com/MUKE-coder/sentinel",
        "https://github.com/MUKE-coder/pulse",
        "https://github.com/MUKE-coder/orbita",
        "https://github.com/MUKE-coder/gritcms",
        "https://github.com/MUKE-coder/gorm-studio",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Desishub Technologies",
        url: "https://desishub.com",
      },
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
