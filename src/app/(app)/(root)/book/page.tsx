import { CalendarCheck, Clock, MapPin, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import type {
  ContactPoint,
  LocalBusiness,
  Service,
  WithContext,
} from "schema-dts";

import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { JB_CONTACT, SITE_INFO } from "@/config/site";

import { BookingForm } from "./booking-form";
import { ContactCard } from "./contact-card";
import { SESSION_TYPES } from "./schema";

const PAGE_TITLE =
  "Book a Session with JB — Mentorship, Code Reviews & Consulting";
const PAGE_DESCRIPTION = `Book a 1-on-1 mentorship, weekend intensive, code review, or consulting session with JB (Muke Johnbaptist) — top Go (Golang) developer in Uganda, AI & automation engineer, founder of Desishub Technologies. Call ${JB_CONTACT.phoneFormatted}, WhatsApp, or email ${JB_CONTACT.email}.`;
const PAGE_URL = `${SITE_INFO.url}/book`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/book" },
  openGraph: {
    type: "website",
    url: "/book",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: SITE_INFO.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SITE_INFO.ogImage],
  },
  keywords: [
    "book a session with JB",
    "hire JB Muke Johnbaptist",
    "Golang mentorship Uganda",
    "Next.js mentorship Africa",
    "code review service",
    "AI engineering consulting",
    "Desishub Technologies booking",
    "Kampala software consultant",
    "weekend coding intensive",
    "1-on-1 developer mentorship",
  ],
};

function getServiceJsonLd(): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mentorship, Code Reviews & Consulting with JB",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    provider: {
      "@type": "Person",
      "@id": `${SITE_INFO.url}/#person`,
      name: "Muke Johnbaptist",
      url: SITE_INFO.url,
    },
    areaServed: ["Uganda", "East Africa", "Worldwide"],
    serviceType: "Software Engineering Consulting & Mentorship",
    offers: SESSION_TYPES.map((s) => ({
      "@type": "Offer",
      name: s.label,
      description: s.description,
      url: PAGE_URL,
    })),
  };
}

function getLocalBusinessJsonLd(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_INFO.url}/#business`,
    name: "Desishub Technologies — JB",
    image: SITE_INFO.ogImage,
    url: SITE_INFO.url,
    telephone: JB_CONTACT.phoneE164,
    email: JB_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressRegion: "Central Region",
      addressCountry: "UG",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };
}

function getContactPointJsonLd(): WithContext<ContactPoint> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: JB_CONTACT.phoneE164,
    email: JB_CONTACT.email,
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  };
}

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessJsonLd()).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactPointJsonLd()).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <Separator />

        {/* Hero */}
        <section className="px-4 py-10 md:py-14">
          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Book a session
          </p>
          <h1 className="mt-2 text-3xl leading-tight font-semibold text-balance md:text-4xl">
            Book a session with JB — mentorship, code reviews and consulting
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            One-on-one mentorship, weekend intensives, code reviews and
            consulting with <strong>Muke Johnbaptist (JB)</strong> — top Go
            (Golang) developer in Uganda, AI &amp; automation engineer, and
            founder of <strong>Desishub Technologies</strong>. Pick a session
            type below or contact JB directly.
          </p>

          {/* Quick contact strip — visible above the fold */}
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            <a
              href={`tel:${JB_CONTACT.phoneE164}`}
              className="rounded-full border border-edge px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              📞 {JB_CONTACT.phoneFormatted}
            </a>
            <a
              href={`${JB_CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hi JB, I'd like to book a session with you."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-edge px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              💬 WhatsApp
            </a>
            <a
              href={`mailto:${JB_CONTACT.email}`}
              className="rounded-full border border-edge px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              ✉️ {JB_CONTACT.email}
            </a>
          </div>

          {/* Trust signals */}
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            <li className="flex items-center gap-2">
              <ShieldCheck
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground"
              />
              <span>14.7K+ devs taught</span>
            </li>
            <li className="flex items-center gap-2">
              <CalendarCheck
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground"
              />
              <span>150+ projects shipped</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground"
              />
              <span>24-hour reply</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground"
              />
              <span>Kampala · UTC+3</span>
            </li>
          </ul>
        </section>

        <Separator />

        {/* Form + Contact card */}
        <section className="grid grid-cols-1 gap-8 px-4 py-10 md:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold">
              Tell JB about your session
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill the form below and you&apos;ll get a reply within 24 hours
              with confirmed dates and pricing.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>

          <div className="md:sticky md:top-20 md:self-start">
            <ContactCard />
          </div>
        </section>

        <Separator />

        {/* FAQ — short, search-engine-friendly */}
        <section className="px-4 py-10">
          <h2 className="text-xl font-semibold">Common questions</h2>
          <dl className="mt-6 grid grid-cols-1 gap-6 text-sm">
            <div>
              <dt className="font-medium">How much does a session cost?</dt>
              <dd className="mt-1 text-muted-foreground">
                Pricing depends on session type and scope. JB sends a quote with
                the booking confirmation — no surprise fees, no up-front
                commitment to find out.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Where do sessions happen?</dt>
              <dd className="mt-1 text-muted-foreground">
                Online by default (Google Meet, Zoom, or Discord). In-person in
                Kampala on request — JB&apos;s based at Desishub Technologies.
              </dd>
            </div>
            <div>
              <dt className="font-medium">What can I book JB for?</dt>
              <dd className="mt-1 text-muted-foreground">
                Anything across his stack: <strong>Go (Golang)</strong> APIs and
                frameworks (incl. Grit), <strong>Next.js</strong> fullstack, AI
                engineering &amp; Claude Code workflows, MCP servers, payment
                integration (DGateway / Stripe / Mobile Money), DevOps and
                self-hosting on VPS, ERP &amp; internal tools, native desktop
                apps (Wails) and Expo iOS/Android.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Can I book multiple sessions?</dt>
              <dd className="mt-1 text-muted-foreground">
                Yes — pick the <strong>Weekend Intensive</strong> for a Sat+Sun
                deep dive, or <strong>Multi-week Mentorship</strong> for
                recurring weekly sessions. Custom packages available too.
              </dd>
            </div>
          </dl>
        </section>

        <Separator />
      </div>
    </>
  );
}
