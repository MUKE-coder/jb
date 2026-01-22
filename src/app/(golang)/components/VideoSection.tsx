"use client";

import { Play } from "lucide-react";

interface VideoSectionProps {
  videoId?: string;
  title?: string;
}

export default function VideoSection({
  videoId,
  title = "Section Video",
}: VideoSectionProps) {
  if (!videoId) {
    return (
      <div className="my-6 flex flex-col items-center justify-center border border-border bg-card p-8 text-center">
        <Play className="mb-4 h-12 w-12 text-foreground/40" />
        <h3 className="mb-2 font-mono text-sm font-semibold text-foreground uppercase">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          Video placeholder. Add your YouTube video ID to embed.
        </p>
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden border border-border">
      <div className="relative flex aspect-video items-center justify-center bg-background">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}
