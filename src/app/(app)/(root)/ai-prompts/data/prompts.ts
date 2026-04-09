export interface AIPrompt {
  id: string;
  title: string;
  body: string;
  howToUse: string;
  category: string;
}

export const AI_PROMPTS: AIPrompt[] = [
  // ── Design & Visuals ──────────────────────────────────────────────
  {
    id: "education-slide-journal-style",
    title: "Education Slide Design — Journal Style",
    category: "Design & Visuals",
    howToUse:
      "Use this prompt in NotebookLM or any image-generating AI to create clean, aesthetic education slides. Replace the topic title (e.g., 'Prompt Engineering') and section content with your own subject matter.",
    body: `A graphic design of a clean, aesthetic education slide template, set against a subtle off-white square grid paper background with faint parchment texture, referencing image_0.png. The overall composition is a modern journal-style layout. In the top-left, the bold title "Prompt Engineering" is present, with the word 'Prompt' in deep black and 'Engineering' in a warm golden-mustard color, partially layered over a large white watercolor brush stroke. Below this title, two informational sections are organized with subheaders over muted tan-peach watercolor brush strokes: first, "What it is", with a hand-drawn grey arrow pointing to text: "It's the difference between generic AI output and answers you can actually execute.", marked by a golden four-point sparkle bullet; and second, "Why it matters", with a similar arrow to text: "It matters when you need strategy and operational thinking – not just chatbot replies.", also marked by a sparkle bullet. Centered in the lower half is a row of four distinct, rounded-square (squircle) app icons: the green OpenAI/ChatGPT logo, the blue Google Gemini gradient sparkle, the terracotta Anthropic Claude asterisk, and the black-and-white geometric Perplexity logo, each with its name in small, bold text below (ChatGPT, Gemini, Claude, Perplexity). A clean footer section spans the bottom, containing the Instagram logo and handle "Instagram @Roman.Knox" on the far left, a central "Page 1/9" text element, and a "swipe ←" pill button on the right. In the top-right corner, a dark, pill-shaped badge displays the text "2/10". The design has generous negative space, maintaining a clear, readable hierarchy.`,
  },
  {
    id: "isometric-infographic-diagram",
    title: "Isometric Infographic — Process Flow Diagram",
    category: "Design & Visuals",
    howToUse:
      "Use in any image-generating AI (Midjourney, DALL-E, Ideogram, NotebookLM). Replace '[INSERT YOUR TOPIC HERE]' with your subject and '[INSERT SECONDARY CONTEXT]' with supporting context like a tool name, category, or subtitle.",
    body: `A clean, modern isometric 2D infographic diagram on a minimalist cream background. The top features a bold sans-serif title: '[INSERT YOUR TOPIC HERE]'. Below the title, four rounded-square cards are arranged in a horizontal row, each containing a 3D-shaded, stylized icon in a warm orange and red color scheme. Between the cards are thin directional arrows showing a process flow. Include a secondary floating card at the top right representing '[INSERT SECONDARY CONTEXT]'. Scatter subtle tech-related decorative elements like code brackets, signal waves, and soft sparkles around the diagram. Professional, sleek, and high-resolution, similar to a high-end tech blog illustration.`,
  },
  {
    id: "youtube-thumbnail-bold",
    title: "YouTube Thumbnail — Bold & Clickable",
    category: "Design & Visuals",
    howToUse:
      "Paste into an image AI (Midjourney, DALL-E, Ideogram). Replace the topic, text, and color scheme to match your video. Works best at 1280x720.",
    body: `A bold, high-contrast YouTube thumbnail design at 1280x720 resolution. The left side features a half-body cutout photo of a person with an exaggerated surprised expression, pointing toward the right. The right side has large, 3D-extruded bold text saying "STOP DOING THIS" in white with a red drop shadow, placed over a vibrant gradient background transitioning from deep navy blue to electric purple. A bright yellow arrow points from the person to the text. The bottom-right corner has a small red pill badge with "2025" in white. The overall style is high-energy, clean, and optimized for click-through rate — no clutter, maximum readability at small sizes.`,
  },
  {
    id: "product-mockup-minimal",
    title: "Product Mockup — Minimal Floating Style",
    category: "Design & Visuals",
    howToUse:
      "Use in any image AI to generate product mockups for your store, landing page, or social ads. Replace the product description with your own item.",
    body: `A minimal, premium product mockup scene on a clean matte white background. A sleek matte-black wireless earbud case is floating at a slight angle with a soft shadow beneath it, as if suspended in mid-air. Two earbuds are floating nearby, slightly separated from the case. Soft, diffused studio lighting from the top-left creates gentle highlights and shadows. The composition is centered with generous negative space. The style is Apple-inspired product photography — clean, luxurious, and modern. No text, no logos, no distractions. Photorealistic rendering, 4K quality.`,
  },

  // ── Content Creation ──────────────────────────────────────────────
  {
    id: "blog-outline-seo",
    title: "SEO Blog Post Outline Generator",
    category: "Content Creation",
    howToUse:
      "Paste into ChatGPT or Claude. Replace [TOPIC] with your subject, [AUDIENCE] with your target reader, and [KEYWORD] with your main SEO keyword.",
    body: `You are an expert SEO content strategist. Create a detailed blog post outline for the topic "[TOPIC]" targeting [AUDIENCE]. The primary keyword is "[KEYWORD]".

Include:
1. A compelling title with the keyword naturally placed (under 60 characters)
2. A meta description (under 155 characters)
3. An introduction hook that addresses the reader's pain point
4. 5-7 H2 sections, each with 2-3 H3 sub-points and a one-sentence summary of what to cover
5. A "Key Takeaways" section with 3-5 bullet points
6. A call-to-action conclusion
7. 5 internal linking opportunities (suggest anchor text)
8. 3 FAQ questions for a schema-ready FAQ section

Format the outline in markdown. Make every section actionable — no fluff.`,
  },
  {
    id: "twitter-thread-hook",
    title: "Viral Twitter/X Thread Writer",
    category: "Content Creation",
    howToUse:
      "Use in ChatGPT or Claude. Replace [TOPIC] with what you want to teach or share. Great for building authority on X/Twitter.",
    body: `Write a 10-tweet thread about [TOPIC] that is designed to go viral. Follow these rules:

Tweet 1 (Hook): Start with a bold, contrarian, or curiosity-driven statement. Use "Most people..." or "I spent X hours..." format. End with "A thread 🧵"

Tweets 2-9 (Body): Each tweet should:
- Start with a number or transition word
- Contain exactly ONE idea
- Be under 280 characters
- Use simple, punchy sentences
- Include a specific example, stat, or actionable tip
- Avoid generic advice — be specific and opinionated

Tweet 10 (CTA): Summarize the key insight, ask for a retweet, and invite followers to follow for more.

Format: Number each tweet. Separate with "---". Make every tweet standalone-valuable so it works even if shared individually.`,
  },
  {
    id: "newsletter-welcome-sequence",
    title: "Newsletter Welcome Email Sequence",
    category: "Content Creation",
    howToUse:
      "Use in any AI chatbot. Replace [BRAND], [NICHE], and [LEAD_MAGNET] with your details. Copy each email into your email marketing tool.",
    body: `You are an expert email copywriter. Write a 5-email welcome sequence for [BRAND], a [NICHE] business. The subscriber signed up to receive [LEAD_MAGNET].

Email 1 (Day 0 — Immediate): Deliver the lead magnet, introduce yourself in 2-3 sentences, set expectations for what emails they'll receive.

Email 2 (Day 1 — Story): Share your origin story or a customer transformation story. End with a soft CTA to reply with their biggest challenge.

Email 3 (Day 3 — Value): Teach one actionable tip they can implement in under 10 minutes. Include a step-by-step breakdown.

Email 4 (Day 5 — Social Proof): Share 2-3 testimonials or case study results. Address common objections naturally within the narrative.

Email 5 (Day 7 — Offer): Present your main product/service as the natural next step. Use a clear value proposition, 3 bullet-point benefits, urgency element, and a single CTA button text.

For each email provide: Subject line (under 50 chars), preview text (under 90 chars), body copy, and CTA. Tone: conversational, confident, not salesy.`,
  },
  {
    id: "video-script-hook",
    title: "YouTube Video Script — Hook Framework",
    category: "Content Creation",
    howToUse:
      "Paste into ChatGPT or Claude. Replace [TOPIC] and [AUDIENCE]. Use the output as a script foundation, then add your personality.",
    body: `Write a YouTube video script for a 10-minute video about [TOPIC] for [AUDIENCE].

Structure:
HOOK (0:00-0:30): Open with a bold claim, shocking stat, or "what if" question. Create an open loop — tease what they'll learn but don't reveal it yet. Example: "By the end of this video, you'll know the exact method that [result]."

INTRO (0:30-1:00): Briefly establish credibility. Tell them exactly what they'll learn (3 points). Ask them to like/subscribe ONLY after delivering a quick win.

BODY — Section 1 (1:00-3:30): First teaching point. Use the "What → Why → How" framework. Include a real example or demonstration.

BODY — Section 2 (3:30-6:00): Second teaching point with a common mistake to avoid. Use pattern interrupts ("Now here's where it gets interesting...").

BODY — Section 3 (6:00-8:30): Third and most valuable point. Save the best for last. Include an actionable step-by-step.

OUTRO (8:30-10:00): Recap the 3 points in one sentence each. Deliver on the open loop from the hook. CTA: suggest a related video. End with a memorable one-liner.

Mark each section with timestamps. Write in conversational tone — short sentences, rhetorical questions, direct address ("you").`,
  },

  // ── Business & Strategy ───────────────────────────────────────────
  {
    id: "business-model-canvas",
    title: "One-Page Business Model Canvas",
    category: "Business & Strategy",
    howToUse:
      "Use in ChatGPT or Claude. Replace [BUSINESS_IDEA] with your concept. Perfect for validating a new idea or refining an existing one.",
    body: `You are a startup advisor and business strategist. Create a complete Business Model Canvas for this business idea: [BUSINESS_IDEA].

Fill out each section with specific, actionable details (not generic advice):

1. **Value Proposition**: What unique problem do you solve? Why would someone choose you over alternatives?
2. **Customer Segments**: Define 2-3 specific personas with demographics, pain points, and buying behavior.
3. **Channels**: How will you reach customers? List 3 acquisition channels ranked by cost-effectiveness.
4. **Customer Relationships**: How do you retain customers? (self-serve, community, personal, automated?)
5. **Revenue Streams**: Pricing model, price points, projected monthly revenue at 100/500/1000 customers.
6. **Key Resources**: What do you need to build this? (tech, people, IP, capital)
7. **Key Activities**: Top 3 activities that drive growth in the first 6 months.
8. **Key Partnerships**: Who do you need to partner with? What's in it for them?
9. **Cost Structure**: Fixed vs variable costs. Monthly burn rate estimate.

End with a "Riskiest Assumption" section — identify the #1 thing that could kill this idea and how to test it in under 2 weeks with under $100.`,
  },
  {
    id: "pricing-strategy",
    title: "Product Pricing Strategy Advisor",
    category: "Business & Strategy",
    howToUse:
      "Use in any AI chatbot. Replace [PRODUCT], [TARGET_MARKET], and [CURRENT_PRICE] with your details. Great for course creators, SaaS founders, and freelancers.",
    body: `You are a pricing psychologist and revenue strategist. Analyze and recommend a pricing strategy for:

Product: [PRODUCT]
Target market: [TARGET_MARKET]
Current price (if any): [CURRENT_PRICE]

Provide:
1. **Value Metric Analysis**: What should the price be anchored to? (per user, per result, per month, one-time?)
2. **Three-Tier Pricing Structure**: Design Basic / Pro / Premium tiers with specific feature splits that maximize upgrade motivation.
3. **Price Anchoring Strategy**: How to present pricing so the middle tier feels like the obvious choice.
4. **Psychological Triggers**: Recommend 3 pricing psychology tactics (charm pricing, decoy effect, loss framing, etc.) with specific implementation.
5. **Competitor Positioning**: How to position your price relative to competitors — premium, value, or undercut strategy? Why?
6. **Launch Pricing Playbook**: Suggest an introductory pricing strategy (early bird, founding member, beta discount) with timeline.
7. **Revenue Projection**: Simple math — at your recommended price, how many sales/month to hit $5K, $10K, $25K MRR?

Be specific with numbers. No vague advice like "price based on value" — give actual recommended price points with reasoning.`,
  },
  {
    id: "client-proposal-writer",
    title: "Freelance Client Proposal Generator",
    category: "Business & Strategy",
    howToUse:
      "Use in ChatGPT or Claude. Replace the bracketed fields with your project details. Copy the output into Google Docs or Notion and customize with your branding.",
    body: `Write a professional freelance project proposal for:

Client: [CLIENT_NAME]
Project: [PROJECT_DESCRIPTION]
My role: [YOUR_ROLE — e.g., fullstack developer, designer, content strategist]
Budget range: [BUDGET]
Timeline: [TIMELINE]

Include these sections:
1. **Executive Summary** (3 sentences max — what you'll deliver and the business impact)
2. **Understanding of the Problem** (show you understand their pain point, reference something specific about their business)
3. **Proposed Solution** (high-level approach in 3-4 bullet points)
4. **Scope of Work** (detailed deliverables table with: deliverable, description, timeline)
5. **Timeline & Milestones** (visual timeline with 3-4 milestones and what gets delivered at each)
6. **Investment** (present pricing with clear value justification — avoid the word "cost")
7. **Why Me** (3 bullet points — relevant experience, unique advantage, proof of results)
8. **Next Steps** (clear CTA — what happens if they say yes, including a specific date to start)

Tone: Professional but warm. Confident, not desperate. Focus on outcomes, not hours.`,
  },

  // ── Developer Productivity ────────────────────────────────────────
  {
    id: "code-review-prompt",
    title: "Senior Developer Code Review",
    category: "Developer Productivity",
    howToUse:
      "Paste into Claude or ChatGPT along with your code. Works for any language. Great for solo developers who want a second pair of eyes.",
    body: `You are a senior software engineer conducting a thorough code review. Review the code I provide and analyze it across these dimensions:

1. **Bugs & Logic Errors**: Identify any bugs, race conditions, off-by-one errors, null pointer risks, or unhandled edge cases.
2. **Security Vulnerabilities**: Check for injection risks, XSS, CSRF, insecure data handling, exposed secrets, or OWASP Top 10 issues.
3. **Performance**: Flag N+1 queries, unnecessary re-renders, memory leaks, blocking operations, or missed caching opportunities.
4. **Readability**: Suggest naming improvements, function extractions, or structural changes that make the code self-documenting.
5. **Architecture**: Does this follow SOLID principles? Is the abstraction level appropriate? Any design pattern that would simplify this?

For each issue found:
- Severity: 🔴 Critical / 🟡 Warning / 🔵 Suggestion
- Line reference
- What's wrong (1 sentence)
- How to fix it (show the corrected code)

End with a summary: "X critical, Y warnings, Z suggestions" and an overall quality score out of 10.`,
  },
  {
    id: "api-design-prompt",
    title: "REST API Design from Requirements",
    category: "Developer Productivity",
    howToUse:
      "Use in Claude or ChatGPT. Replace [FEATURE] and [TECH_STACK] with your project details. Outputs a ready-to-implement API spec.",
    body: `You are a backend architect. Design a complete REST API for [FEATURE] using [TECH_STACK].

For each endpoint provide:
- HTTP method and route (RESTful naming conventions)
- Request body / query params (with TypeScript types)
- Response body (with TypeScript types)
- Status codes (success and error cases)
- Authentication requirement (public, authenticated, admin)
- Rate limiting recommendation

Also include:
1. Database schema (SQL or Prisma schema) for all related models
2. Validation rules for each input field (min/max length, format, required/optional)
3. Error response format (consistent error object structure)
4. Pagination strategy (cursor vs offset — recommend one with reasoning)
5. A list of edge cases to handle (duplicate entries, concurrent updates, soft deletes)

Format everything in markdown with code blocks. Make it specific enough that a junior developer could implement it without asking questions.`,
  },
  {
    id: "debug-rubber-duck",
    title: "Rubber Duck Debugging Assistant",
    category: "Developer Productivity",
    howToUse:
      "Paste into Claude or ChatGPT when you're stuck on a bug. Include the error message, relevant code, and what you've already tried.",
    body: `You are a patient, methodical debugging partner. I'm stuck on a bug and need help thinking through it systematically.

When I share my problem, guide me through this process:

1. **Reproduce**: Ask me clarifying questions to understand exactly when the bug occurs and when it doesn't. What's the expected vs actual behavior?
2. **Isolate**: Help me narrow down where the bug lives. Ask about recent changes, what still works, and suggest specific tests to isolate the component.
3. **Hypothesize**: Based on the evidence, list 3-5 possible causes ranked by likelihood. For each, explain why it could cause this specific behavior.
4. **Verify**: For the most likely cause, suggest a specific test I can run in under 2 minutes to confirm or rule it out.
5. **Fix**: Once we identify the cause, provide the fix with an explanation of why it works.

Rules:
- Don't jump to solutions — ask questions first
- If I share code, read it carefully before responding
- Suggest adding strategic console.log/print statements to trace the flow
- Consider environment differences (dev vs prod, OS, versions)
- If my description is vague, ask me to share the exact error message and stack trace`,
  },
  {
    id: "git-commit-messages",
    title: "Conventional Commit Message Writer",
    category: "Developer Productivity",
    howToUse:
      "Paste into any AI with your git diff or description of changes. Use the output directly in your commit. Follows Conventional Commits spec.",
    body: `You are a git commit message expert following the Conventional Commits specification. I'll describe my code changes, and you write the perfect commit message.

Rules:
- Format: type(scope): description
- Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore
- Scope: the module or component affected (optional but preferred)
- Description: imperative mood, lowercase, no period at end, under 72 chars
- Body (if needed): explain WHY, not WHAT (the diff shows what changed)
- Footer: reference issue numbers (Closes #123, Fixes #456)

Provide:
1. The commit message (formatted correctly)
2. If the change is large, suggest how to split it into multiple atomic commits
3. Flag if the change should be marked as BREAKING CHANGE

Examples of good messages:
- feat(auth): add JWT refresh token rotation
- fix(cart): prevent negative quantity on item update
- refactor(api): extract validation middleware from route handlers

Now analyze my changes and write the commit message:`,
  },

  // ── Social Media & Marketing ──────────────────────────────────────
  {
    id: "instagram-carousel-planner",
    title: "Instagram Carousel Content Planner",
    category: "Social Media & Marketing",
    howToUse:
      "Use in ChatGPT or Claude. Replace [TOPIC] and [NICHE] with your details. Use the output to design each slide in Canva or Figma.",
    body: `You are a social media strategist specializing in educational Instagram carousels. Create a 10-slide carousel post about [TOPIC] for a [NICHE] audience.

For each slide provide:
- **Slide number and purpose** (hook, teaching, CTA)
- **Headline text** (large, bold — max 8 words)
- **Body text** (supporting detail — max 25 words)
- **Visual suggestion** (icon, illustration, or layout note)

Structure:
Slide 1 — HOOK: Bold statement or question that stops the scroll. Use curiosity gap.
Slides 2-3 — PROBLEM: Define the pain point. Make them feel understood.
Slides 4-8 — SOLUTION: Teach 3-5 actionable steps. One idea per slide. Use numbered lists.
Slide 9 — SUMMARY: Recap all points in a quick visual list.
Slide 10 — CTA: "Save this for later 🔖", follow prompt, and a question to drive comments.

Also provide:
- Caption (under 150 words, with 3-5 relevant hashtags)
- Best time to post for maximum reach
- A suggestion for a follow-up carousel topic`,
  },
  {
    id: "linkedin-authority-post",
    title: "LinkedIn Authority Post Generator",
    category: "Social Media & Marketing",
    howToUse:
      "Use in any AI chatbot. Replace [LESSON] and [EXPERIENCE] with your own. Post during peak hours (Tue-Thu, 8-10 AM local time) for best reach.",
    body: `Write a LinkedIn post that establishes authority and drives engagement. The post is about this lesson I learned: [LESSON] from this experience: [EXPERIENCE].

Follow this proven LinkedIn format:

Line 1: Strong hook — a bold statement, hot take, or unexpected insight. This must stop the scroll. (Keep it under 15 words.)

(blank line)

Lines 2-4: Set the context. What happened? Be specific — include numbers, timelines, or names when possible.

(blank line)

Lines 5-12: The insight or lesson. Break it into a numbered list or short paragraphs. Each point should be 1-2 sentences max. Use "↳" bullets for visual structure.

(blank line)

Line 13: A memorable one-line takeaway that people will want to screenshot.

(blank line)

Line 14: Engagement question — ask something specific that invites comments (not "thoughts?" but "What's the biggest [X] mistake you've made?")

Rules:
- No hashtags (they reduce reach on LinkedIn in 2025+)
- No emojis in the first line
- Keep paragraphs to 1-2 lines for mobile readability
- Write like you talk — conversational, not corporate
- Total length: 150-200 words (LinkedIn sweet spot)`,
  },
  {
    id: "content-repurposing-engine",
    title: "Content Repurposing Engine — One to Ten",
    category: "Social Media & Marketing",
    howToUse:
      "Paste your existing content (blog post, video transcript, or podcast notes) into any AI along with this prompt. Instantly get 10 pieces of content from one source.",
    body: `You are a content repurposing strategist. I'll provide one piece of long-form content. Transform it into 10 different pieces optimized for different platforms:

1. **Twitter/X Thread** (8-10 tweets) — Pull the key insights into a punchy thread
2. **LinkedIn Post** (150-200 words) — Professional angle, one key takeaway
3. **Instagram Carousel Outline** (8 slides) — Visual teaching format with headlines per slide
4. **YouTube Short / TikTok Script** (60 seconds) — Hook + one insight + CTA
5. **Newsletter Snippet** (100 words) — Teaser with link to full content
6. **Quote Graphic Text** (3 quotes) — Pull 3 quotable one-liners for share graphics
7. **Podcast Talking Points** (5 bullet points) — If discussing this on a podcast, key points to hit
8. **Reddit / Forum Post** — Rewrite as a helpful answer with context
9. **Email Subject Lines** (5 options) — For promoting this content via email
10. **SEO Meta Description** — Under 155 characters for the original content

For each piece, note the platform best practices (character limits, tone, format). Make each one self-contained — someone should get value without seeing the original.

Here's my content:`,
  },

  // ── Automation & Workflows ────────────────────────────────────────
  {
    id: "sop-generator",
    title: "Standard Operating Procedure (SOP) Builder",
    category: "Automation & Workflows",
    howToUse:
      "Use in any AI chatbot. Replace [PROCESS] with the task you want to document. Share the output with your team or VA to delegate the work.",
    body: `You are an operations consultant. Create a detailed Standard Operating Procedure (SOP) for this process: [PROCESS].

Format the SOP with:

**Header:**
- SOP Title
- Purpose (one sentence — why this process exists)
- Owner (role responsible)
- Frequency (daily, weekly, per-event, etc.)
- Tools required (software, accounts, access needed)
- Estimated time to complete

**Prerequisites:**
- What must be true before starting this process
- Required access or permissions

**Step-by-Step Instructions:**
For each step:
- Step number and action (imperative verb: "Open", "Click", "Create")
- Expected result after completing the step
- Screenshot placeholder note: [SCREENSHOT: description]
- Common mistake to avoid (if applicable)
- Decision point: "If X, go to step Y. If Z, go to step W."

**Quality Checklist:**
- 3-5 items to verify before marking the process as complete

**Troubleshooting:**
- 3 common issues and their fixes

**Version History:**
- v1.0 — [Today's date] — Initial creation

Make it detailed enough that someone with zero context could follow it and get the same result every time.`,
  },
  {
    id: "weekly-planning-system",
    title: "Weekly Planning & Prioritization System",
    category: "Automation & Workflows",
    howToUse:
      "Use every Sunday or Monday morning in any AI chatbot. Replace the bracketed sections with your actual tasks and goals. Great for solopreneurs, freelancers, and content creators.",
    body: `You are a productivity coach. Help me plan my week using the following framework.

My roles: [LIST YOUR ROLES — e.g., developer, content creator, business owner, parent]
My top 3 goals this quarter: [LIST THEM]
Unfinished from last week: [LIST ITEMS]
New tasks/ideas this week: [LIST EVERYTHING ON YOUR MIND]
Available hours this week: [NUMBER]

Now help me:

1. **Brain Dump Sort**: Categorize every item into: Must Do (deadline-driven), Should Do (important, not urgent), Could Do (nice to have), Delegate, and Delete.

2. **Big 3**: Pick the 3 most impactful tasks for the week. For each, explain why it's a priority and how it connects to my quarterly goals.

3. **Daily Blocks**: Assign tasks to specific days (Mon-Fri) based on energy patterns:
   - Monday: Planning + high-focus deep work
   - Tuesday-Wednesday: Core execution
   - Thursday: Meetings, collaboration, content
   - Friday: Review, admin, learning

4. **Time Estimates**: Add realistic time estimates to each task. Flag if total exceeds available hours.

5. **Accountability Check**: Write 3 "I will..." statements I can screenshot and revisit Friday.

6. **Weekly Review Prompts** (for Friday): 3 questions to ask myself at week's end to evaluate what worked.`,
  },
  {
    id: "ai-tool-stack-advisor",
    title: "AI Tool Stack Advisor for Your Workflow",
    category: "Automation & Workflows",
    howToUse:
      "Use in ChatGPT or Claude. Replace [ROLE] and [TASKS] with your specific situation. Use the output to audit your current tools and find gaps.",
    body: `You are an AI productivity consultant. Recommend the optimal AI tool stack for someone who works as a [ROLE] and regularly does these tasks: [TASKS].

For each recommendation, provide:

1. **Task Category** (e.g., writing, design, coding, research, scheduling)
2. **Recommended AI Tool** (specific tool name)
3. **Why this tool** (one sentence — what makes it better than alternatives for this use case)
4. **Free vs Paid** (what you get free, what the paid tier adds, and if the upgrade is worth it)
5. **Quick Start** (one specific action they can take in the first 5 minutes to see value)
6. **Pro Tip** (a non-obvious way to use the tool that most people miss)

Cover at least:
- Writing & content creation
- Image & video generation
- Code assistance
- Research & analysis
- Task & project management
- Email & communication
- Social media management

End with a "Stack Cost Summary" — total monthly cost if using all paid tiers, and a "Budget Stack" alternative using only free tools.`,
  },

  // ── Presentation Design ───────────────────────────────────────────
  {
    id: "vercel-inspired-slide-design",
    title: "Vercel-Inspired Slide Redesign System",
    category: "Design & Visuals",
    howToUse:
      "Use this prompt in any AI slide generator or image AI (NotebookLM, Gamma, ChatGPT, Claude). Paste it before or after your slide content to enforce a consistent Vercel/Next.js Conf aesthetic across all slides.",
    body: `Redesign all slides using a Vercel-inspired design system. Follow these rules:

FONTS
Use Geist Sans for all text, Geist Mono for code, commands, and labels.
Titles: 40–52pt Bold. Body: 14–16pt, color #888888. Labels: 10pt Mono, ALL CAPS, letter-spacing 0.1em.

COLORS
Light slides: White #FFFFFF background, black #000000 titles
Dark slides: Black #000000 background, white #FFFFFF titles
Cards: #F2F2F2 background, 1px border #E5E5E5, 8px radius
Accent: #0070F3 (Vercel blue) — use on top border of cover slide only
Muted text: #888888. Code background: #0A0A0A. Borders: #333333

LAYOUT
- Cover + section break slides: BLACK background
- Content slides: WHITE background
- Left-align everything. No centered body text.
- Generous whitespace — never fill every inch
- Section label (Geist Mono, ALL CAPS, #888888) above every title
- Stats displayed as large numbers (64pt Bold) in a horizontal row with thin 1px vertical dividers between them
- Tech tags as fully-rounded pills with 1px border, no fill
- Code blocks styled as terminal windows with ●●● dots in the top bar

AVOID
No colorful gradients, no neon colors, no drop shadows, no emoji in body content, no fonts other than Geist Sans and Geist Mono.

GOAL: Clean, minimal, premium — like Vercel.com or Next.js Conf slides. Typography does the heavy lifting. Apply to every slide.`,
  },

  // ── Thumbnail Design ──────────────────────────────────────────────
  {
    id: "dark-tech-thumbnail-template",
    title: "Dark Tech Thumbnail — Customizable Template",
    category: "Design & Visuals",
    howToUse:
      "Use this prompt in any image AI (Midjourney, DALL-E, Ideogram, ChatGPT). Replace the bracketed placeholders [YOUR MAIN TITLE], [YOUR SUBTITLE], [DESCRIBE YOUR LOGO], and [LIST YOUR TECHNOLOGIES] with your specific content.",
    body: `Create a professional dark-themed tech thumbnail with the following layout:

**Background:** Pure black (#0a0a0f) with a faint blue grid overlay and subtle circular radar/sonar rings emanating from the center-left.

**Left side (25% width):** A glowing geometric logo — [DESCRIBE YOUR LOGO OR ICON HERE] — in purple-blue (#6366f1 to #3b82f6) with soft neon glow.

**Center text block:**
- Title: "[YOUR MAIN TITLE]" in large, heavy bold white sans-serif font (Inter/Geist style), ~90px
- Subtitle: "[YOUR SUBTITLE]" in medium gray (#9ca3af), ~36px, lighter weight
- Tagline: "[SHORT TAGLINE]" in light gray, ~24px

**Top-right corner:** Floating 3D isometric [cubes / hexagons / nodes] cluster in dark navy-blue with blue glowing edges and scattered particle dots.

**Bottom-right corner:** A horizontal row of [NUMBER] rounded square icons for tech stack: [LIST YOUR TECHNOLOGIES e.g. Go, React, Docker, PostgreSQL] with dark backgrounds and colored logos.

**Lighting:** Soft purple-blue radial glow behind the logo. Overall mood: futuristic, premium, dark SaaS aesthetic.

**Aspect ratio:** 16:9 (1280x720 or 1920x1080)
**Style:** Modern tech product banner, dark UI, no gradients on text, flat depth with subtle 3D accents.`,
  },
  {
    id: "nextjs-payment-thumbnail",
    title: "Next.js Payment Integration Thumbnail",
    category: "Design & Visuals",
    howToUse:
      "Use this prompt in any image AI (Midjourney, DALL-E, Ideogram, ChatGPT) to generate a thumbnail for payment integration tutorials or courses. Adjust the title, subtitle, tagline, and tech stack icons to match your specific content.",
    body: `Create a professional dark-themed tech thumbnail with the following layout:

**Background:** Pure black (#0a0a0f) with a faint blue grid overlay and subtle circular radar/sonar rings emanating from the center-left. Add a very faint green glow in the background to hint at money/payments.

**Left side (25% width):** A glowing geometric icon combining the Next.js logo (triangle/N mark) interlinked with a mobile phone showing a payment prompt — rendered in purple-blue (#6366f1 to #3b82f6) with soft neon glow.

**Center text block:**
- Title: "Next.js Payment Integration" in large, heavy bold white sans-serif font (Inter/Geist style), ~85px
- Subtitle: "One-Time · Subscriptions · Withdrawals · Store" in medium gray (#9ca3af), ~32px, lighter weight
- Tagline: "Complete Guide with TypeScript" in light green (#4ade80), ~22px

**Top-right corner:** Floating 3D isometric hexagon/cube cluster in dark navy-blue with blue-green glowing edges and scattered particle dots — representing API nodes and payment flow.

**Bottom-right corner:** A horizontal row of 5 rounded square icons with dark backgrounds and colored logos for:
  1. Next.js (white N logo)
  2. TypeScript (blue TS logo)
  3. MTN Mobile Money (yellow)
  4. Vercel (white triangle)
  5. Webhooks icon (green lightning bolt)

**Lighting:** Soft purple-blue radial glow behind the left icon. Subtle green accent glow near the tagline area. Overall mood: futuristic, premium, African fintech developer aesthetic.

**Aspect ratio:** 16:9 (1280x720)
**Style:** Modern tech tutorial banner, dark UI, no gradients on text, flat depth with subtle 3D accents. Professional course/blog thumbnail.`,
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
