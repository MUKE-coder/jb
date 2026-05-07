import { ProfileSeparator as Separator } from "@/components/profile-separator";
import { Overview } from "@/features/profile/components/overview";
import { ProfileHeader } from "@/features/profile/components/profile-header";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div className="screen-line-after grow border-x border-edge after:-bottom-px">
          <div className="flex h-4" />
        </div>

        <ProfileHeader />
        <Separator />

        <Overview />

        <div className="grow border-x border-edge" />
      </div>
    </>
  );
}
