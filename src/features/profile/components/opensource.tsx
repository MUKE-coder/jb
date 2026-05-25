import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { OpenSourceProjectItem } from "@/components/opensource-project-item";
import { Button } from "@/components/ui/button";
import { getLatestOpenSourceProjects } from "@/data/opensource-projects";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const HOME_LIMIT = 6;

export function OpenSource() {
  const projects = getLatestOpenSourceProjects(HOME_LIMIT);

  return (
    <Panel id="opensource">
      <PanelHeader>
        <PanelTitle>
          Open Source
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({HOME_LIMIT})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-after px-4 py-3">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          The best open-source projects to learn from — handpicked, grouped by
          category. New additions surface here first.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-0 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <OpenSourceProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center py-2">
        <Button variant="default" asChild>
          <Link href="/opensource">
            Browse all open source
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
