import { Mail, MessageCircle, Phone } from "lucide-react";

import { JB_CONTACT } from "@/config/site";

/**
 * Server-rendered contact card. Phone number, email and WhatsApp link
 * are emitted directly into HTML so they're visible to search engines
 * and one tap away on mobile (tel:, mailto:, wa.me).
 */
export function ContactCard() {
  return (
    <aside
      aria-labelledby="contact-jb-heading"
      className="rounded-xl border border-edge bg-zinc-50/40 p-6 dark:bg-zinc-900/40"
    >
      <h2
        id="contact-jb-heading"
        className="font-mono text-xs tracking-wider text-muted-foreground uppercase"
      >
        Or contact JB directly
      </h2>

      <div className="mt-4 flex flex-col gap-3">
        <a
          href={`tel:${JB_CONTACT.phoneE164}`}
          aria-label={`Call JB at ${JB_CONTACT.phoneFormatted}`}
          className="group/contact flex items-center gap-3 rounded-lg border border-edge bg-background px-4 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <Phone
            aria-hidden
            className="size-5 shrink-0 text-muted-foreground"
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs text-muted-foreground">
              Call
            </span>
            <span className="font-medium underline-offset-4 group-hover/contact:underline">
              {JB_CONTACT.phoneFormatted}
            </span>
          </div>
        </a>

        <a
          href={`${JB_CONTACT.whatsapp}?text=${encodeURIComponent(
            "Hi JB, I'd like to book a session with you."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message JB on WhatsApp"
          className="group/contact flex items-center gap-3 rounded-lg border border-edge bg-background px-4 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <MessageCircle
            aria-hidden
            className="size-5 shrink-0 text-muted-foreground"
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs text-muted-foreground">
              WhatsApp
            </span>
            <span className="font-medium underline-offset-4 group-hover/contact:underline">
              Chat on WhatsApp
            </span>
          </div>
        </a>

        <a
          href={`mailto:${JB_CONTACT.email}?subject=${encodeURIComponent("Booking enquiry")}`}
          aria-label={`Email JB at ${JB_CONTACT.email}`}
          className="group/contact flex items-center gap-3 rounded-lg border border-edge bg-background px-4 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <Mail aria-hidden className="size-5 shrink-0 text-muted-foreground" />
          <div className="flex flex-col">
            <span className="font-mono text-xs text-muted-foreground">
              Email
            </span>
            <span className="font-medium underline-offset-4 group-hover/contact:underline">
              {JB_CONTACT.email}
            </span>
          </div>
        </a>
      </div>

      <p className="mt-4 font-mono text-xs text-muted-foreground">
        Based in Kampala, Uganda · UTC+3 · Replies within 24 hours
      </p>
    </aside>
  );
}
