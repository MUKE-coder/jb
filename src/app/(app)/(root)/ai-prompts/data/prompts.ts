export interface AIPrompt {
  id: string;
  title: string;
  body: string;
  howToUse: string;
  category: string;
}

export const AI_PROMPTS: AIPrompt[] = [
  {
    id: "education-slide-journal-style",
    title: "Education Slide Design — Journal Style",
    category: "Design & Visuals",
    howToUse:
      "Use this prompt in NotebookLM or any image-generating AI to create clean, aesthetic education slides. Replace the topic title (e.g., 'Prompt Engineering') and section content with your own subject matter.",
    body: `A graphic design of a clean, aesthetic education slide template, set against a subtle off-white square grid paper background with faint parchment texture, referencing image_0.png. The overall composition is a modern journal-style layout. In the top-left, the bold title "Prompt Engineering" is present, with the word 'Prompt' in deep black and 'Engineering' in a warm golden-mustard color, partially layered over a large white watercolor brush stroke. Below this title, two informational sections are organized with subheaders over muted tan-peach watercolor brush strokes: first, "What it is", with a hand-drawn grey arrow pointing to text: "It's the difference between generic AI output and answers you can actually execute.", marked by a golden four-point sparkle bullet; and second, "Why it matters", with a similar arrow to text: "It matters when you need strategy and operational thinking – not just chatbot replies.", also marked by a sparkle bullet. Centered in the lower half is a row of four distinct, rounded-square (squircle) app icons: the green OpenAI/ChatGPT logo, the blue Google Gemini gradient sparkle, the terracotta Anthropic Claude asterisk, and the black-and-white geometric Perplexity logo, each with its name in small, bold text below (ChatGPT, Gemini, Claude, Perplexity). A clean footer section spans the bottom, containing the Instagram logo and handle "Instagram @Roman.Knox" on the far left, a central "Page 1/9" text element, and a "swipe ←" pill button on the right. In the top-right corner, a dark, pill-shaped badge displays the text "2/10". The design has generous negative space, maintaining a clear, readable hierarchy.`,
  },
];

export function getPromptsByCategory(prompts: AIPrompt[]) {
  const categories = new Map<string, AIPrompt[]>();

  for (const prompt of prompts) {
    const existing = categories.get(prompt.category) ?? [];
    existing.push(prompt);
    categories.set(prompt.category, existing);
  }

  return Array.from(categories.entries()).map(([category, items]) => ({
    category,
    prompts: items,
  }));
}
