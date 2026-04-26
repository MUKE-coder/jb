export interface PublicApi {
  title: string;
  description: string;
  href: string;
  image: string;
  badge?: string;
  tags?: string[];
}

export const PUBLIC_APIS: PublicApi[] = [
  {
    title: "EduGate API",
    description:
      "A public REST API for Ugandan education data — universities, courses, scholarships, and admission requirements. Built for EdTech apps, AI student advisors, and counselling tools that need accurate local education data. The first public API in the JB API portfolio.",
    href: "https://edugate-api.vercel.app",
    image: "/public-apis/edugate-api.png",
    badge: "New",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Education"],
  },
];
