"use client";

import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { EditorView } from "@codemirror/view";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { FileCode2 } from "lucide-react";
import { useCallback, useMemo } from "react";

import type { FileData } from "@/lib/sandbox/file-system";

interface CodeEditorProps {
  file: FileData | null;
  onChange: (content: string) => void;
}

function getLanguageExtension(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "tsx":
    case "jsx":
      return javascript({ jsx: true, typescript: ext === "tsx" });
    case "ts":
      return javascript({ typescript: true });
    case "js":
    case "mjs":
      return javascript();
    case "css":
      return css();
    case "json":
      return json();
    case "md":
    case "mdx":
      return markdown();
    case "html":
      return html();
    default:
      return javascript({ jsx: true, typescript: true });
  }
}

function getFileIcon(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase();
  const colors: Record<string, string> = {
    tsx: "text-blue-400",
    ts: "text-blue-500",
    jsx: "text-yellow-400",
    js: "text-yellow-500",
    css: "text-purple-400",
    json: "text-green-400",
    md: "text-gray-400",
    html: "text-orange-400",
  };
  return colors[ext || ""] || "text-muted-foreground";
}

export function CodeEditor({ file, onChange }: CodeEditorProps) {
  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  const extensions = useMemo(() => {
    if (!file) return [];
    return [
      getLanguageExtension(file.path),
      EditorView.lineWrapping,
      EditorView.theme({
        "&": {
          height: "100%",
          fontSize: "13px",
        },
        ".cm-scroller": {
          fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
        },
        ".cm-gutters": {
          backgroundColor: "transparent",
          borderRight: "1px solid hsl(var(--border) / 0.3)",
          color: "hsl(var(--muted-foreground) / 0.5)",
        },
        ".cm-activeLineGutter": {
          backgroundColor: "transparent",
          color: "hsl(var(--foreground))",
        },
        ".cm-activeLine": {
          backgroundColor: "hsl(var(--accent) / 0.3)",
        },
      }),
    ];
  }, [file]);

  if (!file) {
    return (
      <div className="flex h-full items-center justify-center bg-[#1e1e1e]">
        <div className="space-y-3 text-center">
          <FileCode2 className="mx-auto size-10 text-muted-foreground/40" />
          <div>
            <p className="text-sm text-muted-foreground/70">
              Select a file to edit
            </p>
            <p className="mt-1 text-xs text-muted-foreground/40">
              Browse files in the explorer
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#1e1e1e]">
      <div className="flex items-center gap-2 border-b border-[#2d2d2d] px-3 py-1.5">
        <FileCode2 className={`size-3.5 ${getFileIcon(file.path)}`} />
        <span className="text-xs font-medium text-[#cccccc]">{file.name}</span>
        <span className="ml-auto rounded bg-[#2d2d2d] px-1.5 py-0.5 text-[10px] tracking-wider text-[#858585] uppercase">
          {file.path.split(".").pop()}
        </span>
      </div>

      <div className="min-h-0 flex-1">
        <CodeMirror
          value={file.content}
          height="100%"
          theme={vscodeDark}
          extensions={extensions}
          onChange={handleChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightActiveLine: true,
            foldGutter: true,
            autocompletion: true,
            bracketMatching: true,
            closeBrackets: true,
            indentOnInput: true,
            tabSize: 2,
          }}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}
