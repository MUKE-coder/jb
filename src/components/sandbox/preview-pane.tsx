"use client";

import {
  AlertCircle,
  ExternalLink,
  Globe,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { compileProject } from "@/lib/sandbox/compiler";
import type { FileSystem } from "@/lib/sandbox/file-system";

interface PreviewPaneProps {
  fileSystem: FileSystem;
}

export function PreviewPane({ fileSystem }: PreviewPaneProps) {
  const [compiledCode, setCompiledCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastCompiled, setLastCompiled] = useState<Date | null>(null);
  const [iframeKey, setIframeKey] = useState(0);

  const compile = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await compileProject(fileSystem);
      setCompiledCode(result);
      setLastCompiled(new Date());
      setIframeKey((prev) => prev + 1);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Compilation failed";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    compile();
  }, [fileSystem]);

  const handleRefresh = () => {
    compile();
  };

  const openInNewTab = () => {
    const blob = new Blob([compiledCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#1e1e1e]">
        <div className="space-y-3 text-center">
          <Loader2 className="mx-auto size-6 animate-spin text-[#007acc]" />
          <p className="text-xs text-[#858585]">Compiling...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full flex-col bg-[#1e1e1e]">
        <div className="flex items-center gap-2 border-b border-[#2d2d2d] bg-[#332222] px-3 py-1.5">
          <AlertCircle className="size-3.5 text-[#f48771]" />
          <span className="text-xs font-medium text-[#f48771]">
            Compilation Error
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            className="ml-auto h-6 gap-1 px-2 text-[10px] text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
          >
            <RefreshCw className="size-3" />
            Retry
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <pre className="rounded border border-[#5a1d1d] bg-[#2b1515] p-3 font-mono text-xs whitespace-pre-wrap text-[#f48771]">
            {error}
          </pre>
          <div className="mt-4 text-[11px] text-[#858585]">
            <p className="font-medium text-[#cccccc]">Common issues:</p>
            <ul className="mt-1.5 list-inside list-disc space-y-1">
              <li>Check for syntax errors in your React components</li>
              <li>Ensure all imports are valid</li>
              <li>Verify JSX is properly formatted</li>
              <li>Make sure component exports are correct</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-[#1e1e1e]">
      <div className="flex items-center justify-between border-b border-[#2d2d2d] px-3 py-1.5">
        <div className="flex items-center gap-2">
          <Globe className="size-3.5 text-[#007acc]" />
          <span className="text-xs font-medium text-[#cccccc]">Preview</span>
          {lastCompiled && (
            <span className="text-[10px] text-[#858585]">
              {lastCompiled.toLocaleTimeString()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={openInNewTab}
            className="h-6 gap-1 px-1.5 text-[10px] text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
          >
            <ExternalLink className="size-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            className="h-6 gap-1 px-1.5 text-[10px] text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
          >
            <RefreshCw className="size-3" />
          </Button>
        </div>
      </div>

      <div className="min-h-0 flex-1 bg-white">
        <iframe
          key={iframeKey}
          srcDoc={compiledCode}
          className="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          title="Live Preview"
        />
      </div>
    </div>
  );
}
