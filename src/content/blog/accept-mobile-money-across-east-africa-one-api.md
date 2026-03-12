---
title: "Accept Mobile Money Payments Across East Africa with One API"
description: "A practical guide to collecting MTN MoMo, M-Pesa, Airtel Money, and Tigo Pesa payments in Uganda, Kenya, Rwanda, and Tanzania — without integrating four different providers."
image: https://14j7oh8kso.ufs.sh/f/HLxTbDBCDLwfFk8LMYcaEDQ5AGptjCf6vkgZK0dTLnWhUxMl
category: payments
createdAt: 2026-03-12
updatedAt: 2026-03-12
---

# Accept Mobile Money Payments Across East Africa with One API

_A practical guide to collecting MTN MoMo, M-Pesa, Airtel Money, and Tigo Pesa payments in Uganda, Kenya, Rwanda, and Tanzania — without integrating four different providers._

---

Mobile Money is how East Africa pays. Over 300 million mobile money accounts are active across the region, and for most customers, it's their primary way to pay online. If you're building a product for this market, you need to accept Mobile Money.

The challenge? Each country has different networks, different providers, and different APIs. Accepting MTN MoMo in Uganda is a completely different integration from accepting M-Pesa in Kenya.

Until now.

## How DGateway Simplifies Mobile Money

With DGateway, you write one payment integration and accept Mobile Money across four East African countries. Here's how it works:

### Step 1: Get Your API Key

Sign up at [dgatewayadmin.desispay.com](https://dgatewayadmin.desispay.com/sign-up), create an app, and generate an API key. You'll get two keys:

- **Test key** (`dgw_test_...`) — For development. Uses sandbox/test wallets. Must use test phone number `0111777777`.
- **Live key** (`dgw_live_...`) — For production. Processes real payments to real phone numbers.

### Step 2: Set Up Your Server

Add your credentials to your environment:

```bash
# .env.local (Next.js) or .env (Node.js)
DGATEWAY_API_URL='https://dgatewayapi.desispay.com'
DGATEWAY_API_KEY='dgw_live_your_api_key_here'
```

Create a simple API client:

```typescript
// lib/dgateway.ts — server-side only
const API_URL = process.env.DGATEWAY_API_URL!;
const API_KEY = process.env.DGATEWAY_API_KEY!;

export async function collectPayment(
  amount: number,
  currency: string,
  phoneNumber: string,
  description?: string
) {
  const res = await fetch(`${API_URL}/v1/payments/collect`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      amount,
      currency,
      phone_number: phoneNumber,
      description,
    }),
  });
  return res.json();
}

export async function checkStatus(reference: string) {
  const res = await fetch(`${API_URL}/v1/webhooks/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": API_KEY,
    },
    body: JSON.stringify({ reference }),
  });
  return res.json();
}
```

That's your entire payment integration. The same two functions work for every country and every Mobile Money network.

### Step 3: Collect Payments by Country

#### Uganda (UGX) — MTN MoMo & Airtel Money

```typescript
await collectPayment(50000, "UGX", "256771234567", "Order #100");
// Routes to Iotec → sends USSD prompt to customer's phone
```

#### Kenya (KES) — M-Pesa & Airtel Money

```typescript
await collectPayment(1500, "KES", "254712345678", "Order #200");
// Routes to Relworx → sends STK push to customer's phone
```

#### Rwanda (RWF) — MTN MoMo & Airtel Money

```typescript
await collectPayment(5000, "RWF", "250781234567", "Order #300");
// Routes to Relworx → sends USSD prompt to customer's phone
```

#### Tanzania (TZS) — M-Pesa, Tigo Pesa & Airtel Money

```typescript
await collectPayment(10000, "TZS", "255712345678", "Order #400");
// Routes to Relworx → sends USSD prompt to customer's phone
```

Notice the pattern: **the only things that change are the amount, currency, and phone number format.** The code is identical.

### Step 4: Poll for Payment Confirmation

After initiating a payment, the customer receives a prompt on their phone. Poll for the result:

```typescript
const pollPayment = async (reference: string): Promise<string> => {
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 5000)); // Wait 5 seconds

    const result = await checkStatus(reference);
    const status = result.data?.status;

    if (status === "completed") return "success";
    if (status === "failed") return "failed";
  }
  return "timeout";
};
```

### Step 5: Send Payouts (Disbursements)

Need to send money back to customers? Same simplicity:

```typescript
export async function sendPayout(
  amount: number,
  currency: string,
  phoneNumber: string,
  description?: string
) {
  const res = await fetch(`${API_URL}/v1/payments/disburse`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      amount,
      currency,
      phone_number: phoneNumber,
      description,
    }),
  });
  return res.json();
}

// Send 100,000 UGX to a Ugandan number
await sendPayout(100000, "UGX", "256771234567", "Refund for Order #100");

// Send 2,000 KES to a Kenyan number
await sendPayout(2000, "KES", "254712345678", "Affiliate payout");

// Send 10,000 RWF to a Rwandan number
await sendPayout(10000, "RWF", "250781234567", "Prize withdrawal");
```

## Phone Number Formats

The most common integration mistake is phone number formatting. Here's a quick reference:

| Country  | Code | Format       | Example      |
| -------- | ---- | ------------ | ------------ |
| Uganda   | 256  | 256XXXXXXXXX | 256771234567 |
| Kenya    | 254  | 254XXXXXXXXX | 254712345678 |
| Rwanda   | 250  | 250XXXXXXXXX | 250781234567 |
| Tanzania | 255  | 255XXXXXXXXX | 255712345678 |

**Rules:**

- Always use the country code (no `+` prefix)
- Remove any leading zero from the local number
- `0771234567` (local) → `256771234567` (international)

## Provider Routing: What Happens Behind the Scenes

When you send a payment request, DGateway automatically selects the best provider:

```
Currency: UGX → Priority: Iotec → Relworx → PesaPal → Stripe
Currency: KES → Priority: Relworx → PesaPal → Stripe
Currency: RWF → Priority: Relworx
Currency: TZS → Priority: Relworx → PesaPal
```

You can also force a specific provider by adding `provider: "relworx"` to your request, but in most cases auto-routing gives you the best result.

## Testing Before Going Live

DGateway provides test API keys for safe development:

1. Use your **test key** (`dgw_test_...`)
2. Use the test phone number: **0111777777**
3. Transactions show up with a `TEST` badge in your dashboard
4. Test transactions don't affect your wallet balance

When you're ready, swap to your **live key** (`dgw_live_...`) and use real phone numbers. No code changes needed.

## WordPress? Even Easier

If you're running a WordPress site, the DGateway plugin handles everything with zero code:

- **WooCommerce** — Enable DGateway as a payment method in WooCommerce settings
- **Shortcodes** — Drop `[dgateway_payment]` anywhere for a payment form
- **Subscriptions** — Recurring Mobile Money payments out of the box

[View WordPress Plugin Guide →](https://dgateway.desispay.com/docs/wordpress)

## Start Accepting Mobile Money Today

1. [Sign up for DGateway](https://dgatewayadmin.desispay.com/sign-up) (free)
2. Create your app and get API keys
3. Copy the code examples above into your project
4. Test with the test key and phone number `0111777777`
5. Go live and start collecting payments

The entire integration takes less than an hour. No provider accounts to set up, no complex OAuth flows, no webhook signature verification headaches. Just one API key and one API call.

---

_DGateway handles Mobile Money payments across Uganda, Kenya, Rwanda, and Tanzania through a single unified API. [Read the full docs](https://dgateway.desispay.com/docs) or [get started now](https://dgatewayadmin.desispay.com/sign-up)._
