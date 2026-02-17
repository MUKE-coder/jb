import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";

const content = `# About Muke Johnbaptist (JB)

> Fullstack developer, tech entrepreneur, and educator based in Kampala, Uganda. Founder of Desishub Technologies and Desishub Coding School. Creator of the Grit Framework and Gorm Studio. Current tech stack: Next.js (frontend), Golang (backend), Docker & GitHub Actions (deployment), Cloudflare (domains).

${USER.about.trim()}

## Personal Information

- Full Name: ${USER.firstName} ${USER.lastName}
- Known As: JB, JB WEB DEVELOPER
- Location: ${USER.address}
- Website: ${USER.website}
- Job Title: ${USER.jobTitle}

## Companies & Roles

${USER.jobs.map((job) => `- ${job.title} at [${job.company}](${job.website})`).join("\n")}

## Key Projects (2026)

- [Grit Framework](https://github.com/MUKE-coder/grit): Golang web framework for building production APIs with simplicity and speed. [Docs](https://grit-vert.vercel.app)
- [Gorm Studio](https://github.com/MUKE-coder/gorm-studio): Visual database management tool for GORM (Go ORM).
- [DesisPay](https://desispay.com): Payment platform for African businesses (in development).

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
