import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { PUBLIC_APIS } from "@/features/profile/data/public-apis";

import { PublicApiCard } from "./public-api-card";

export default function PublicApis() {
  return (
    <Panel id="public-apis">
      <PanelHeader>
        <PanelTitle>
          Public APIs
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({PUBLIC_APIS.length})
          </sup>
        </PanelTitle>
        <p className="mt-1 pb-3 font-mono text-sm text-muted-foreground">
          Production REST APIs I&apos;ve built and shipped — free for the
          community to use.
        </p>
      </PanelHeader>

      <div className="flex flex-col">
        {PUBLIC_APIS.map((api) => (
          <PublicApiCard key={api.href} {...api} />
        ))}
      </div>
    </Panel>
  );
}
