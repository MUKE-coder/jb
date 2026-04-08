"use client";
import { NexoraChat } from "@nexora-ai/react";

export default function ChatBot() {
  return (
    <NexoraChat
      apiUrl="https://nexoraapi.gritcms.com"
      agentId="5dab3edb-4ec1-428f-bb95-4a22da03ebe5"
    />
  );
}
