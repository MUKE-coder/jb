"use client";

import {
  Code2,
  Download,
  Monitor,
  Moon,
  Play,
  Sun,
  Upload,
} from "lucide-react";
import { useTheme } from "next-themes";
import type React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { FileSystem } from "@/lib/sandbox/file-system";
import { exportProject, importProject } from "@/lib/sandbox/project-utils";

interface ToolbarProps {
  onRefresh: () => void;
  fileSystem: FileSystem;
  onImportProject: (files: Record<string, string>) => void;
}

export function Toolbar({
  onRefresh,
  fileSystem,
  onImportProject,
}: ToolbarProps) {
  const { setTheme } = useTheme();

  const handleExport = () => {
    exportProject(fileSystem);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        const importedFiles = await importProject(files);
        onImportProject(importedFiles);
      } catch (error) {
        console.error("Failed to import project:", error);
      }
    }
  };

  return (
    <div className="flex h-11 items-center justify-between border-b border-[#2d2d2d] bg-[#252526] px-3">
      <div className="flex items-center gap-2.5">
        <Code2 className="size-4 text-[#007acc]" />
        <span className="text-sm font-semibold text-[#cccccc]">Sandbox</span>
        <div className="ml-1 flex items-center gap-1">
          <span className="rounded-sm bg-[#007acc]/20 px-1.5 py-0.5 text-[10px] font-medium text-[#3794ff]">
            Next.js 15
          </span>
          <span className="rounded-sm bg-[#3178c6]/20 px-1.5 py-0.5 text-[10px] font-medium text-[#4fc1ff]">
            TS
          </span>
          <span className="rounded-sm bg-[#38bdf8]/20 px-1.5 py-0.5 text-[10px] font-medium text-[#38bdf8]">
            TW
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onRefresh}
          className="h-7 gap-1.5 px-2 text-xs text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white"
        >
          <Play className="size-3" />
          Run
        </Button>

        <div className="mx-1 h-4 w-px bg-[#3e3e3e]" />

        <Button
          variant="ghost"
          size="sm"
          onClick={handleExport}
          className="h-7 gap-1.5 px-2 text-xs text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
        >
          <Download className="size-3" />
          Export
        </Button>

        <label>
          <Button variant="ghost" size="sm" asChild>
            <span className="h-7 gap-1.5 px-2 text-xs text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]">
              <Upload className="size-3" />
              Import
            </span>
          </Button>
          <input
            type="file"
            multiple
            accept=".tsx,.ts,.jsx,.js,.css,.json,.md"
            onChange={handleImport}
            className="hidden"
          />
        </label>

        <div className="mx-1 h-4 w-px bg-[#3e3e3e]" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
            >
              <Sun className="size-3.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute size-3.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 size-3.5" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 size-3.5" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Monitor className="mr-2 size-3.5" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
