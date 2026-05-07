import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { USER } from "@/data/user";
import { Panel } from "@/features/profile/components/panel";
import { ProfileHeader } from "@/features/profile/components/profile-header";

import DevOpsRoadmap from "./roadmap";

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
        <Panel>
          <DevOpsRoadmap />
        </Panel>
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
