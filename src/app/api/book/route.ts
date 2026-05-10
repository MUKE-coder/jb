import { NextResponse } from "next/server";
import { Resend } from "resend";

import { bookingSchema, SESSION_TYPES } from "@/app/(app)/(root)/book/schema";
import { JB_CONTACT, SITE_INFO } from "@/config/site";

// Always run dynamically — this route sends mail on POST and must not
// be cached or pre-rendered.
export const dynamic = "force-dynamic";

const RECIPIENT = "jb@desishub.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sessionLabel(id: string) {
  return SESSION_TYPES.find((s) => s.id === id)?.label ?? id;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_EMAIL_FROM;

  if (!apiKey || !fromAddress) {
    // Mis-configuration — log loudly and return a generic message so we
    // don't leak which env var is missing to the public.
    console.error(
      "[/api/book] missing RESEND_API_KEY or RESEND_EMAIL_FROM env"
    );
    return NextResponse.json(
      {
        error: "Booking is temporarily unavailable. Please email JB directly.",
      },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const sessionName = sessionLabel(data.sessionType);

  // ── Email to JB ────────────────────────────────────────────────────
  const subject = `New booking: ${sessionName} — ${data.name}`;

  const adminHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a;">
      <h2 style="margin:0 0 16px;">New booking request</h2>
      <p style="margin:0 0 24px;color:#525252;">Sent from <a href="${SITE_INFO.url}/book" style="color:#0070f3;">${SITE_INFO.url}/book</a></p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#525252;width:160px;">Session type</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(sessionName)}</td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Name</td><td style="padding:8px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#0070f3;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Phone / WhatsApp</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(data.phone)}" style="color:#0070f3;">${escapeHtml(data.phone)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Country / city</td><td style="padding:8px 0;">${escapeHtml(data.country || "—")}</td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Preferred date</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(data.preferredDate)}</td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Alternate date</td><td style="padding:8px 0;">${escapeHtml(data.alternateDate || "—")}</td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Reply via</td><td style="padding:8px 0;text-transform:capitalize;">${escapeHtml(data.preferredContact)}</td></tr>
      </table>

      <h3 style="margin:24px 0 8px;font-size:14px;color:#525252;">Topic</h3>
      <p style="margin:0 0 16px;white-space:pre-wrap;">${escapeHtml(data.topic)}</p>

      ${
        data.notes
          ? `<h3 style="margin:24px 0 8px;font-size:14px;color:#525252;">Additional notes</h3>
             <p style="margin:0 0 16px;white-space:pre-wrap;">${escapeHtml(data.notes)}</p>`
          : ""
      }

      <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />
      <p style="margin:0;font-size:12px;color:#888;">Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
    </div>
  `;

  const adminText = [
    `New booking request — ${sessionName}`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    `Preferred date: ${data.preferredDate}`,
    `Alternate date: ${data.alternateDate || "—"}`,
    `Reply via: ${data.preferredContact}`,
    ``,
    `Topic:`,
    data.topic,
    ``,
    data.notes ? `Notes:\n${data.notes}` : "",
    ``,
    `From: ${SITE_INFO.url}/book`,
  ]
    .filter(Boolean)
    .join("\n");

  // ── Confirmation email to the user ─────────────────────────────────
  const userSubject = `Booking received — JB will get back to you within 24 hours`;
  const userHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a;">
      <h2 style="margin:0 0 16px;">Thanks ${escapeHtml(data.name.split(" ")[0])} — request received ✓</h2>
      <p style="margin:0 0 16px;">
        I got your booking request for <strong>${escapeHtml(sessionName)}</strong>
        on <strong>${escapeHtml(data.preferredDate)}</strong>. I'll reply
        within 24 hours (usually faster) with confirmed dates and pricing.
      </p>

      <p style="margin:0 0 16px;">If it's urgent, reach me directly:</p>
      <ul style="margin:0 0 16px;padding-left:20px;line-height:1.7;">
        <li>📞 <a href="tel:${JB_CONTACT.phoneE164}" style="color:#0070f3;">${JB_CONTACT.phoneFormatted}</a></li>
        <li>💬 <a href="${JB_CONTACT.whatsapp}" style="color:#0070f3;">WhatsApp</a></li>
        <li>✉️ <a href="mailto:${JB_CONTACT.email}" style="color:#0070f3;">${JB_CONTACT.email}</a></li>
      </ul>

      <p style="margin:0 0 24px;color:#525252;">
        — JB (Muke Johnbaptist)<br/>
        Founder, Desishub Technologies<br/>
        <a href="${SITE_INFO.url}" style="color:#0070f3;">${SITE_INFO.url}</a>
      </p>

      <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />
      <p style="margin:0;font-size:12px;color:#888;">
        You received this because you submitted a booking request at
        ${SITE_INFO.url}/book.
      </p>
    </div>
  `;

  const resend = new Resend(apiKey);

  // Send admin notification first; failure here is the one we surface.
  // The user confirmation is fire-and-forget so a quirk on that path
  // never blocks a successful booking.
  const adminSend = await resend.emails.send({
    from: fromAddress,
    to: RECIPIENT,
    replyTo: data.email,
    subject,
    html: adminHtml,
    text: adminText,
  });

  if (adminSend.error) {
    console.error("[/api/book] resend admin send failed", adminSend.error);
    return NextResponse.json(
      {
        error:
          "Couldn't deliver your booking right now. Please email JB directly.",
      },
      { status: 502 }
    );
  }

  resend.emails
    .send({
      from: fromAddress,
      to: data.email,
      replyTo: JB_CONTACT.email,
      subject: userSubject,
      html: userHtml,
    })
    .catch((err) =>
      console.error("[/api/book] user-confirmation send failed", err)
    );

  return NextResponse.json({ ok: true });
}
