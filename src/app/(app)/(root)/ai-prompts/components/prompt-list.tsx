import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";

import { AI_PROMPTS, getPromptsByCategory } from "../data/prompts";
import { PromptCard } from "./prompt-card";

export function PromptList() {
  const categories = getPromptsByCategory(AI_PROMPTS);

  return (
    <>
      {categories.map(({ category, prompts }) => (
        <Panel key={category}>
          <PanelHeader className="py-3">
            <PanelTitle className="text-xl">{category}</PanelTitle>
          </PanelHeader>

          <PanelContent className="space-y-4 p-0">
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </PanelContent>
        </Panel>
      ))}
    </>
  );
}
