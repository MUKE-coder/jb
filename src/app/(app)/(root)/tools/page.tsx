import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { USER } from "@/data/user";
import { ProfileHeader } from "@/features/profile/components/profile-header";

import PublicApis from "./components/public-apis";
import Tools from "./components/tools";

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

        <Tools />
        <Separator />

        <PublicApis />
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
