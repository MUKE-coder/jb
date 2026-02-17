import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";

const allPosts = getAllPosts();

const content = `# JB (Muke Johnbaptist) — jb.desishub.com

> Fullstack developer, tech entrepreneur, and educator based in Kampala, Uganda. Founder of Desishub Technologies and Desishub Coding School. Creator of the Grit Framework (Golang web framework) and Gorm Studio. Building DesisPay. Teaching 14,700+ developers on YouTube. Tech stack: Next.js, Golang, Docker, GitHub Actions, Cloudflare.

## About

- [About](${SITE_INFO.url}/about.md): Who I am, my tech stack, background, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Career highlights and key roles at Desishub Technologies, DesisPay, and Nextjs Academy.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects including Grit Framework, Gorm Studio, and open-source shadcn/ui components.
- [Awards](${SITE_INFO.url}/awards.md): Awards and recognitions.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials earned.

## Open Source Projects

- [Grit Framework](https://github.com/MUKE-coder/grit): A Golang web framework designed for simplicity and speed with built-in routing, middleware, and database support.
- [Gorm Studio](https://github.com/MUKE-coder/gorm-studio): A visual database management tool for GORM, Go's most popular ORM.
- [File Storage UI](${SITE_INFO.url}/components/file-storage-ui): Drag-and-drop file storage component for S3 and Cloudflare R2.
- [Better Auth UI](${SITE_INFO.url}/components/jb-better-auth-ui-components): 8 production-ready authentication components for Next.js.
- [Zustand Cart](${SITE_INFO.url}/components/zustand-cart-component): E-commerce cart with Zustand state management.
- [Multi Step Form](${SITE_INFO.url}/components/multi-step-form-component): Multi-step form component with validation.
- [Work Experience](${SITE_INFO.url}/components/work-experience-component): Professional timeline component.

## Companies & Platforms

- [Desishub Technologies](https://desishub.com): Tech company building web apps, mobile apps, and AI solutions for African businesses.
- [DesisPay](https://desispay.com): Payment platform for African businesses and developers.
- [Nextjs Academy](https://nextjsacademy.com): Online courses for learning Next.js and fullstack development.
- [Desishub Coding School](https://desishub.com): In-person coding bootcamps in Kampala, Uganda.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}

## Optional

- [Sandbox](${SITE_INFO.url}/sandbox): Interactive Next.js code sandbox for trying components.
- [DevOps Roadmap](${SITE_INFO.url}/devops): Step-by-step DevOps learning roadmap.
- [Golang Course](${SITE_INFO.url}/golang): Free Golang programming course.
- [Mentorship](${SITE_INFO.url}/mentorship): One-on-one and group mentorship programs.
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
