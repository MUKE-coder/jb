import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { Organization, Person, WebSite, WithContext } from "schema-dts";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username, "JB WEB DEVELOPER", "Muke Johnbaptist"],
  };
}

function getPersonJsonLd(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_INFO.url}/#person`,
    name: `${USER.firstName} ${USER.lastName}`,
    alternateName: ["JB", "JB WEB DEVELOPER", "jbwebdeveloper"],
    url: SITE_INFO.url,
    image: USER.avatar,
    jobTitle: USER.jobTitle,
    description: USER.bio,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressRegion: "Central Region",
      addressCountry: "UG",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Desishub Technologies",
        url: "https://desishub.com",
      },
      {
        "@type": "Organization",
        name: "DesisPay",
        url: "https://desispay.com",
      },
    ],
    sameAs: [
      "https://github.com/MUKE-coder",
      "https://linkedin.com/in/muke-johnbaptist",
      "https://x.com/MJohnbaptist",
      "https://www.youtube.com/@JBWEBDEVELOPER",
      "https://www.tiktok.com/@jbdesishub",
      "https://app.daily.dev/jbwebdeveloper94",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Golang",
      "Docker",
      "GitHub Actions",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Cloudflare",
      "DevOps",
    ],
  };
}

function getOrganizationJsonLd(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_INFO.url}/#organization`,
    name: "Desishub Technologies",
    url: "https://desishub.com",
    founder: { "@type": "Person", name: "Muke Johnbaptist" },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
    },
    sameAs: [
      "https://github.com/MUKE-coder",
      "https://www.youtube.com/@JBWEBDEVELOPER",
    ],
  };
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "jbwebdeveloper",
      url: SITE_INFO.url,
    },
  ],
  creator: "jbwebdeveloper",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Mjohnbaptist", // Twitter username
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "/images/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
