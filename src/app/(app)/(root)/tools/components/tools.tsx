import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { SocialLinkItem } from "@/features/profile/components/social-links/social-link-item";
import { TOOLS_LINKS } from "@/features/profile/data/social-links";

export default function Tools() {
  return (
    <Panel id="tools">
      <PanelHeader>
        <PanelTitle>
          Tools
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({TOOLS_LINKS.length})
          </sup>
        </PanelTitle>
        <p className="mt-1 pb-3 font-mono text-sm text-muted-foreground">
          Free utilities, sandboxes, and roadmaps to speed up your workflow.
        </p>
      </PanelHeader>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TOOLS_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}
