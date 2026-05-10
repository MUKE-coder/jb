import { z } from "zod";

export const SESSION_TYPES = [
  {
    id: "one-on-one",
    label: "1-on-1 Mentorship",
    durationLabel: "1 hour",
    description:
      "Focused mentoring on your career, project, or specific tech (Next.js, Go, AI, DevOps).",
  },
  {
    id: "code-review",
    label: "Code Review / Architecture",
    durationLabel: "2 hours",
    description:
      "Walk JB through your codebase or architecture; get a senior-level review with actionable fixes.",
  },
  {
    id: "weekend-intensive",
    label: "Weekend Intensive",
    durationLabel: "Sat + Sun",
    description:
      "Two-day deep dive — perfect for building or shipping a feature, learning a stack, or unblocking a hard problem.",
  },
  {
    id: "multi-week-mentorship",
    label: "Multi-week Mentorship",
    durationLabel: "4 weeks +",
    description:
      "Recurring weekly sessions for sustained progress. Best for career transitions and long-term projects.",
  },
  {
    id: "custom",
    label: "Custom / Other",
    durationLabel: "Discuss",
    description:
      "Workshops, team training, public speaking, paid consulting — tell JB what you need.",
  },
] as const;

export type SessionTypeId = (typeof SESSION_TYPES)[number]["id"];

export const CONTACT_METHODS = ["email", "phone", "whatsapp"] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Tell JB your name").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number looks too short")
    .max(30, "Phone number looks too long"),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  sessionType: z.enum(
    SESSION_TYPES.map((s) => s.id) as [SessionTypeId, ...SessionTypeId[]]
  ),
  preferredDate: z.string().trim().min(1, "Pick a date"),
  alternateDate: z.string().trim().optional().or(z.literal("")),
  topic: z
    .string()
    .trim()
    .min(8, "What do you want to cover? Be specific.")
    .max(500),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  preferredContact: z.enum(CONTACT_METHODS),
});

export type BookingInput = z.infer<typeof bookingSchema>;
