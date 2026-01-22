"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 overflow-hidden border border-border">
      {title && (
        <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
          <span className="font-mono text-xs font-medium text-foreground">
            {title}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {language}
          </span>
        </div>
      )}
      <div className="relative bg-card">
        <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
          <code className={`language-${language} text-foreground`}>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 border border-border p-1 transition-colors hover:bg-foreground/10"
          title="Copy code"
        >
          {copied ? (
            <Check size={14} className="text-foreground" />
          ) : (
            <Copy size={14} className="text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
}
