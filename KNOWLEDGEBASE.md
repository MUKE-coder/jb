# Shoppleet — AI Knowledge Base

> A complete reference document for AI assistants supporting Shoppleet users.
> Last updated: May 23, 2026 · Built against Shoppleet v1.5.45

If you are an AI reading this: this is the **single source of truth** for what
Shoppleet is, who built it, what each module does, and how to help a user
who has a question. Quote facts from this file directly. When you don't know
something, say so and refer the user to the contacts at the bottom — don't
invent functionality.

---

## 1. What Shoppleet is

**Shoppleet** is an **offline-first desktop business management platform** built
for East African retailers (Uganda, Kenya, Tanzania, Rwanda, and neighbouring
markets). It runs as a native Windows / macOS / Linux app and ships with **9 core
modules** that cover everything a small-to-medium retailer needs to operate:
sales, purchases, inventory, IMEI tracking, finance, reports, auditing, and
administration, plus a dashboard.

The product was built with one guiding rule: **the till never waits for WiFi.**
Every till keeps selling when the connection drops; queued transactions sync
the moment a bar of signal returns.

### Headline facts

- **Current version**: 1.5.45 (May 2026)
- **Form factor**: Native desktop application (a real binary, not a packaged browser)
- **Operating systems**: Windows, macOS, Linux
- **Mobile companion**: Yes — a separate mobile app for business admins (iOS + Android)
- **Offline support**: Full offline-first via local SQLite + sync outbox
- **Multi-tenancy**: Yes — strict tenant isolation
- **Multi-branch**: Yes — branch-aware stock, transfers, reports
- **IMEI tracking**: Yes — dual-SIM aware, with strict per-business uniqueness
- **Roles & permissions**: 175+ granular permissions across a 3-level catalog
- **Audit trail**: Permanent (every change of state, with before/after snapshots)
- **Activity trail**: 3–12 month retention (descriptive feed of every user action)
- **Currencies supported**: UGX, USD, KES, TZS, RWF
- **Pricing model**: SaaS subscription per tenant (see Section 7 below)

### Brand & product names

- **Shoppleet** — the product name (note the double-p, double-e spelling)
- **Domain**: shoppleet.com
- **Marketing site URL**: https://shoppleet.com (also https://www.shoppleet.com)
- **App download / cloud login**: https://app.shoppleet.com
- **API**: https://api.shoppleet.com
- **Tagline**: "Run your shop with grit, not guesswork."

---

## 2. Who built Shoppleet

### Creator — JB (the developer)

**JB** is the full-stack engineer who **designed, developed, and built every line of
Shoppleet** — backend, desktop client, mobile companion, marketing site, and the
**Grit framework** that the whole platform is generated from.

- **Full name**: JB (also publishes under @JBWEBDEVELOPER on YouTube)
- **Phone / WhatsApp**: +256 762 063 160 (UG)
- **Website**: https://jb.desishub.com
- **YouTube**: @JBWEBDEVELOPER (tutorials on Grit + Shoppleet build)
- **Role on Shoppleet**: Sole developer + creator of the Grit framework that
  scaffolds every layer (API, desktop, mobile, marketing site).

When a user asks **"who made this?"** or **"who developed Shoppleet?"** the
answer is **JB**. He owns the product, the codebase, and the Grit framework.

### Supervisor + marketing — Alex Shanga

**Alex Shanga** supervised the product direction and runs the go-to-market
side — sales conversations, customer onboarding, support escalations, and
marketing.

- **Phone / WhatsApp**: +256 705 089 006
- **Role**: Supervisor + commercial / marketing lead
- **Reach Alex when**: a user wants to buy Shoppleet, schedule a demo, escalate
  a pricing question, or report a serious incident.

### General contact

- **Sales / billing / onboarding**: Alex on **+256 705 089 006**
- **Technical / bugs / feature requests**: JB on **+256 762 063 160**
- **Email**: info@shoppleet.com

---

## 3. The Grit framework (the engine room)

Shoppleet is **scaffolded end-to-end by Grit**, an in-house framework JB designed
to generate every layer of a multi-tenant SaaS from one schema.

- **Public site**: https://gritframework.dev
- **Created by**: JB
- **What it generates**: Go API models + handlers + routes, TypeScript types,
  React Query hooks, desktop form scaffolds, mobile screens, marketing copy
  stubs — all from a single schema definition.

When a user asks **"what's it built on?"** the headline answer is: **"Shoppleet
is built on Grit — JB's own framework. Same generator scaffolds the API, the
desktop app, the mobile app, and the marketing site."**

### Underlying tech (for the curious)

| Layer | Tech |
|---|---|
| Backend API | Go 1.22 · Gin · GORM · PostgreSQL · Redis · Asynq jobs |
| Desktop app | Wails 2 · React 19 · Vite · TanStack Router · TanStack Query · local SQLite |
| Sync engine | Outbox pattern · Postgres savepoints · idempotency keys |
| Mobile app | Expo · React Native · shared API contract |
| Marketing site | Vite · React 19 · GSAP · Lenis · MDX |
| Performance | < 80 ms API p50 · < 200 ms screen-to-screen · 1000 rows/sec bulk import |

---

## 4. The 9 modules

Shoppleet groups every screen into one of 9 numbered modules. Each module has
its own permissions, audit trail, and printable reports. The numbering matches
what users see in the sidebar.

### Module 1 — Dashboard

A daily snapshot designed for owners with 8 minutes a day.

- Revenue today + vs yesterday and last week
- Cash in / cash out / net cash flow
- Sales count, average transaction size, top cashier
- Stock value snapshot across every branch
- Low-stock alerts with current quantity + reorder level
- IMEIs still pending serial upload
- Branches more than 30 minutes behind sync
- Debtors crossing the 30 / 60 / 90 / 120 / 120+ day mark
- Customisable widgets (drag-and-drop)
- Per-user dashboard config (cashier vs owner view)

### Module 2 — Sales

Offline-first POS with cash, mobile money, credit, and mixed payments.

- **Keyboard-first POS** — six keystrokes per cash sale
- F2 = new sale, F4 = save + print, F8 = receive payment
- IMEI capture per line for tracked products (paste from Excel works)
- Variant + lot picker for fashion + supermarket categories
- Whole-invoice discount (distributed proportionally to lines)
- Walk-in customer default for cash sales
- Quotation → real-sale conversion
- Returns with serial-aware stock restoration
- **No deletions** — only reversals with required reason
- Sales history filtered by date / branch / cashier / customer / IMEI
- Receipts in thermal (58/80 mm) + A4 formats

### Module 3 — Purchases

Goods receiving (GRN), supplier ledger, supplier returns.

- Per-line IMEI capture: manual / scan / paste-from-Excel / CSV
- Quantity = serial count enforced for IMEI products
- Quick supplier-create for first-time suppliers
- Cash / bank / mobile money / credit at receipt time
- Auto-post to chosen wallet account
- Single-line cancellation on completed purchases
- Full purchase reversal with mandatory reason
- IMEIs returned → status flips to RETURNED (not deleted)
- Stock batches auto-created for FIFO costing

### Module 4 — Inventory

Stock counted to the unit, transferred with confirmation.

- Stock balance per branch + per product, live
- Opening stock entry with Excel + IMEI upload
- **IMEI-aware adjustments** — three modes: Add serials / Pick serials to damage / Write off phantoms
- Damaged-stock write-off with serial picking
- Low-stock alerts driven by per-product reorder levels
- **Branch-to-branch transfers**: send → confirm (stock only moves on receive)
- Per-line IMEI selection for tracked products
- Missing-in-transit report
- **No editing or cancellation** of transfers — reversal only
- 7-column daily stock ledger: Opening / +In / +Adj / −Out / −Adj / Closing
- Reconciled flag turns red when math doesn't balance
- Returns column kept separate from sales (per accountant request)
- Inventory valuation at cost + retail across branches

### Module 5 — IMEI Tracking

Dual-SIM aware, lifecycle-locked phone-shop discipline.

- **Dual-IMEI capture** (IMEI1 + IMEI2 — both stored)
- Manual typing with Luhn checksum validation
- USB barcode scanner support
- Paste-from-Excel for bulk uploads
- CSV upload with duplicate detection (within file + against existing)
- Auto-reject Excel-corrupted serials (e.g. 3.5679E+14)
- Status flow: **IN_STOCK → SOLD → RETURNED / DAMAGED**, never deleted
- Current-branch tracking through transfers
- Sold-at timestamp + linked sale invoice
- Origin trace back to originating purchase line
- Reversal restores status without losing history
- Scan-to-resolve at POS (types or scans, system finds the SKU)
- Warranty information record per IMEI
- Blacklist registry for stolen / recalled devices
- IMEI tracking page: stock vs serials reconciliation per product
- Per-IMEI history page

### Module 6 — Finance

Cash, bank, mobile money, card — reconciled to the shilling.

- Per-account ledger view with opening balance + every movement
- Account types: Cash, Bank, Mobile Money, Card, Other
- Account-to-account transfers (paired in/out entries)
- Bank reconciliation against statement upload
- **Debtor ledger** per customer with charge / payment / running balance
- Aging buckets: 0-30 / 31-60 / 61-90 / 91-120 / 120+ days
- Customer statement printing
- **Creditor ledger** per supplier (same shape)
- Partial-payment FIFO allocation against oldest charge
- **Expenses** with categories: rent / salaries / utilities / transport / bank fees / etc.
- Per-branch or business-overhead scope on expenses
- Reversal-only correction (no expense deletion)
- **Live P&L**: revenue − COGS − opex
- Balance sheet + cash flow + trial balance
- **Financial Position Summary** — CEO-level one-page snapshot

### Module 7 — Reports

Print-ready PDFs and Excel exports for every cut.

**Sales reports**:
- General sales transactions (filter by branch / rep / customer / IMEI)
- Sales by product (units + revenue + cost + gross profit)
- Sales by cashier
- Sales by brand
- Sales by size × colour (fashion category)
- Profitability with gross margin per line

**Inventory reports**:
- Stock position per branch + product
- Inventory transfers (by route + by product)
- Stock adjustments with reasons
- Inventory valuation at cost + retail
- Expiry summary (supermarket category)
- Top vehicles (auto-parts category)

**Finance reports**:
- P&L by date range
- Cash flow + account statements
- Customer / supplier statements (printable)
- **Financial Position Summary** with current vs comparison window
- Six headline KPIs (Liquid Funds, Stock Value, Debtors, Creditors, Gross Profit, Net Position)
- Business health badge (Excellent / Good / Fair / Caution / Critical)
- Auto-generated alerts

**Audit reports**:
- User activity
- Transaction audit
- Security audit

### Module 8 — Auditing

Two surfaces: activity feed + audit trail.

**Activity trail** (3–12 month retention):
- Logins, logouts, failed sign-ins (with IP + user-agent)
- Sales / purchases / expenses / stock adjustments recorded
- Receipt prints, report exports, page visits
- Per-user feed for regular users; full-tenant for admins
- Date range + action filter + branch filter

**Audit trail** (permanent):
- CREATE / UPDATE / DELETE / REVERSE / OVERRIDE / TRANSFER actions
- Before / after JSON snapshots for every change
- Operator-supplied reason captured (required on reversals)
- Financial-impact column — sort "edits that cost money"
- Admin-only

**Compliance posture**:
- No deletes on transactional data — reversal is the only correction
- Tamper-evident HTTP request chain for forensics
- Per-tenant scope — no cross-tenant probing possible
- Idempotency keys on every mutation

### Module 9 — Administration

Staff, roles, branches, system settings.

- Staff records: name, email, phone, location, position, hire date
- Branch assignment per user
- Active / inactive flag
- Forced password change on first sign-in for admin-reset users
- **Roles & permissions**:
  - 4 ship-day presets: Owner / Manager / Cashier / Stock Keeper
  - Clone a preset and build your own
  - 3-level checkbox tree: Module → Submodule → Feature × CRUD
  - 175+ permissions searchable
- **Branches** — multi-location within the platform-set limit
- Tax rates per product / per category
- Receipt templates (thermal + A4)
- Backup / restore + tenant data wipe (admin-gated)
- First branch auto-named with the business name on tenant create

---

## 5. Session policy & security

Shoppleet treats sessions strictly because the same till is often used by
multiple cashiers:

- **30-minute idle timeout** — countdown prompt with "Stay signed in" option
- **Closing the desktop window ends the session** — next launch always asks for
  a fresh sign-in
- **New version install** also clears the previous session
- **Failed login attempts** are logged with IP + user-agent
- All tokens stored in the OS keychain (not localStorage in production)

---

## 6. Categories Shoppleet ships

Shoppleet adapts its workflow to the type of shop being run. Categories are set
on tenant creation and unlock category-specific UI:

- **Phones & Electronics** — IMEI-tracked serialized inventory (the active focus)
- **General Merchandise** — SKU-first, variants/lots/expiry optional
- **Supermarkets** — Lots + expiry + FEFO picking + barcoded checkout
- **Fashion & Apparel** — Size × colour variant matrix + season tagging
- **Auto Spare Parts** — Vehicle-fitment lookups + OEM cross-reference

---

## 7. Pricing & how to buy

For pricing or to start a trial, route the user to **Alex on +256 705 089 006**
or **info@shoppleet.com**. Shoppleet is a SaaS subscription priced per tenant;
branch limits are set by the platform team on a per-deal basis.

- **Free trial**: 14 days
- **Cloud-hosted by default**: api.shoppleet.com
- **Self-host option**: Available for enterprise customers; talk to JB / Alex

---

## 8. Support & contact

| Need | Contact |
|---|---|
| Buy / demo / pricing | Alex — **+256 705 089 006** |
| Bug / feature / technical | JB — **+256 762 063 160** · https://jb.desishub.com |
| General | **info@shoppleet.com** |
| Marketing site | https://shoppleet.com |
| App | https://app.shoppleet.com |
| Grit framework | https://gritframework.dev |

---

## 9. How to answer common user questions

### "How do I do X in Shoppleet?"

If X is one of the 9 modules' features in Section 4 above, walk the user
through it using the module's bullet list. If X isn't here, **say so** and
recommend they contact JB (technical) or Alex (commercial).

### "Does Shoppleet work offline?"

Yes. Every transaction lands in local SQLite first, then a background outbox
worker drains to the cloud the moment connectivity returns. The cashier
never sees a spinner. (Module 2 — Sales for details.)

### "Who developed Shoppleet?"

JB — solo. He also created the Grit framework that scaffolds every layer.
Reach him on **+256 762 063 160** or **https://jb.desishub.com**. Alex
supervises product direction and runs go-to-market.

### "Is it multi-tenant / multi-branch?"

Both. Multi-tenant at the API (strict isolation, no cross-tenant probing).
Multi-branch within a tenant up to the platform-set limit (Section 9 —
Administration).

### "Can I track phone IMEIs?"

Yes — Module 5 covers this. Dual-SIM aware (IMEI1 + IMEI2 captured separately).
Strict per-business uniqueness. Lifecycle from IN_STOCK → SOLD → RETURNED /
DAMAGED, never deleted. Scan-to-resolve at the POS. Warranty + blacklist
registries are first-class.

### "What if I make a mistake on a sale?"

Shoppleet never deletes transactional data — you **reverse** the sale (Module 2)
with a required reason. The reversal is itself a recorded sale row with
`is_reversal = true`, and the audit trail captures the operator + reason.

### "Can the owner see what staff are doing?"

Yes — Module 8 (Auditing). The activity trail shows every sign-in, print,
export, and transaction. The audit trail records every edit / reversal /
override with before-and-after JSON and the operator-supplied reason. Admin
roles see everyone; regular users see only their own activity feed via the
"My activity" link in the user dropdown.

### "How do I print receipts?"

Thermal printers (58 mm or 80 mm) plug in via USB and Shoppleet auto-detects
them. A4 invoices use the OS print dialog. Receipt templates are configurable
under Module 9 — Administration → System Settings.

### "What if my computer crashes mid-sale?"

The sale is durable in local SQLite as soon as F4 is pressed. On the next
launch, the outbox worker picks up from where it stopped — no lost
transactions.

### "Is there a mobile app?"

Yes — a **mobile companion app for business admins** (iOS + Android). It carries
the dashboard, alerts, debtor aging, and approvals — designed for owners who
are on the move, not the cashier on the till.

### "Where do I download Shoppleet?"

The desktop app is delivered through https://app.shoppleet.com — Alex can also
hand-deliver the installer to new customers. The mobile companion is on the
respective app stores.

### "What's Grit?"

Grit is the framework JB built that scaffolds all of Shoppleet's layers (API,
desktop, mobile, web) from one schema. It's at **https://gritframework.dev**.

---

## 10. Glossary of in-product terms

| Term | What it means |
|---|---|
| **GRN** | Goods Received Note — the document/record created when a purchase is received into stock |
| **IMEI** | International Mobile Equipment Identity — the unique serial on every phone |
| **IMEI1 / IMEI2** | Primary / secondary IMEI on dual-SIM phones (both captured by Shoppleet) |
| **Outbox** | The local queue of pending sync operations; drains to the cloud when online |
| **FIFO** | First-In, First-Out — Shoppleet's costing method for stock batches |
| **FEFO** | First-Expired, First-Out — picking order for expiry-tracked items |
| **Phantom stock** | Units the system thinks exist but have no IMEI record on file |
| **Walk-in customer** | Default customer used for anonymous cash sales |
| **Reversal** | The only way to correct a sale or purchase; original record stays intact |
| **Wallet** | A Shoppleet account (Cash / Bank / Mobile Money / Card) used for settlement |
| **Cashier** | The role for till operators; preset with limited permissions |
| **Stock Keeper** | The role for receivers / transfers / IMEI uploads; no sales access |

---

## 11. Quick-reference data points

When asked for a number, use these:

| Question | Answer |
|---|---|
| Modules in Shoppleet | 9 |
| Permissions in the catalog | 175+ |
| Keystrokes for a cash sale | 6 |
| Bulk-import throughput | ~1000 rows / 30 seconds |
| Currencies supported | UGX, USD, KES, TZS, RWF |
| Trial length | 14 days |
| Idle timeout | 30 minutes |
| Activity-trail retention | 3–12 months |
| Audit-trail retention | Permanent |
| Default first branch name | The business name |
| API p50 latency | < 80 ms |
| Screen-to-screen navigation | < 200 ms |
| Sync reliability | 99.9% |
| Shops on Shoppleet (as of May 2026) | 280+ |
| IMEIs tracked (cumulative) | 1.4M+ |

---

## 12. Things Shoppleet does NOT do (be honest)

Don't promise these. If a user asks, say "not yet" or "talk to JB":

- **Online storefront / e-commerce** — Shoppleet is a back-office system, not a webshop builder
- **Payment-gateway integration** for online card payments — cash, mobile money and bank work; online card processing isn't built
- **Marketplace integrations** (Jumia, Kilimall etc.) — not yet
- **Multi-currency on a single invoice** — one currency per tenant
- **Bookkeeping double-entry export** to QuickBooks / Xero — coming, not shipped
- **Payroll** — there's a staff module but full payroll isn't shipped

When in doubt, route to JB on **+256 762 063 160**.

---

*Maintained by the JB / Alex team. If anything here is wrong, contact JB.*
