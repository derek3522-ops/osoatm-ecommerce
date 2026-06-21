# Order Capture (Stripe Webhook) — Setup & Testing

When a customer pays, Stripe sends an event to your site, and the order is saved
so it appears in **Admin → Orders**. This guide gets that working locally.

---

## How the pieces fit together

```
Customer pays on Stripe
        │
        ▼
Stripe sends "checkout.session.completed"  ──►  /api/webhooks/stripe
        │                                            │ verifies it's really Stripe
        │                                            │ saves the order
        ▼                                            ▼
                                            data/orders.json  ──►  Admin → Orders
```

---

## Testing locally with the Stripe CLI

Stripe can't reach `localhost` directly, so the Stripe CLI forwards events to
your machine during development.

### 1. Install the Stripe CLI
- macOS: `brew install stripe/stripe-cli/stripe`
- Windows/Linux: https://stripe.com/docs/stripe-cli#install

### 2. Log in
```bash
stripe login
```

### 3. Forward webhooks to your local app
In a separate terminal (keep `npm run dev` running in another):
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

It prints a line like:
```
Ready! Your webhook signing secret is whsec_1a2b3c...
```

### 4. Add that signing secret to `.env.local`
```
STRIPE_WEBHOOK_SECRET=whsec_1a2b3c...
```
Then restart `npm run dev` so it picks up the new value.

### 5. Make a test purchase
- Add a part → Cart → Proceed to Checkout
- Pay with test card `4242 4242 4242 4242` (any future expiry, any CVC, any ZIP)
- The `stripe listen` terminal shows the event being forwarded
- Go to **Admin → Orders** — your order is there, with items, total, and shipping address

---

## Going live (production)

On a live site you register a permanent webhook endpoint instead of using the CLI:

1. Deploy the site so it has a public URL (e.g. https://osoatm.com).
2. Stripe Dashboard → **Developers → Webhooks → Add endpoint**.
3. Endpoint URL: `https://osoatm.com/api/webhooks/stripe`
4. Events to send: **`checkout.session.completed`**
5. Copy that endpoint's **Signing secret** (`whsec_...`) into your production
   environment variables as `STRIPE_WEBHOOK_SECRET`.

---

## ⚠️ Storage note for serverless (Vercel/Netlify)

Orders are currently written to `data/orders.json` — great for local dev and
always-on Node hosting, but **serverless platforms have an ephemeral filesystem**,
so the file won't persist there.

When you deploy to Vercel, swap the storage in **`app/lib/orders.js`** for a real
database. Only two functions need to change — `getOrders()` and `saveOrder()` —
the rest of the app uses them unchanged. Good options:
- **Vercel Postgres / Neon / Supabase** (SQL)
- **MongoDB Atlas** (document)
- **Vercel KV** (simple key/value)

I can wire up any of these when you pick one.

---

## Security note

`/api/orders` and the `/admin` page are currently open. Before launch, put them
behind authentication so only your team can view order data and customer details.
