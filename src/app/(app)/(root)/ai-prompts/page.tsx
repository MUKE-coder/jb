import dayjs from "dayjs";
import type { Metadata } from "next";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { USER } from "@/data/user";
import { ProfileHeader } from "@/features/profile/components/profile-header";

import { PromptList } from "./components/prompt-list";

export const metadata: Metadata = {
  title: "AI Prompts — Curated Prompts for Design, Content & More",
  description:
    "A collection of curated AI prompts organized by category. Copy and use them in NotebookLM, ChatGPT, Claude, and other AI tools.",
};

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
        <ProfileHeader />
        <Separator />
        <PromptList />
        <Separator />
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
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
