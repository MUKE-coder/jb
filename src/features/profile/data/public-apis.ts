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
    title: "DGateway Payment API",
    description:
      "Unified payments API for East Africa. Collect and disburse payments via MTN Mobile Money, Airtel Money, and Stripe through a single integration. Powers production merchants in Uganda and beyond — including Connect ISP. One API key, one SDK, one dashboard.",
    href: "https://dgateway.desispay.com/",
    image:
      "https://14j7oh8kso.ufs.sh/f/HLxTbDBCDLwfFBH4tzcaEDQ5AGptjCf6vkgZK0dTLnWhUxMl",
    badge: "Production",
    tags: ["Go", "MTN MoMo", "Airtel Money", "Stripe", "Payments"],
  },
  {
    title: "EduGate API",
    description:
      "A public REST API for Ugandan education data — universities, courses, scholarships, and admission requirements. Built for EdTech apps, AI student advisors, and counselling tools that need accurate local education data. The first public API in the JB API portfolio.",
    href: "https://edugate-api.vercel.app",
    image:
      "https://14j7oh8kso.ufs.sh/f/HLxTbDBCDLwfmMJjl7nibwuer8Kl7Ds0T2Vc15fdFEoQq6OL",
    badge: "New",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Education"],
  },
];
