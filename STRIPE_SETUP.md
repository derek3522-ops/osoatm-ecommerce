# Stripe Checkout — Setup & Testing

Checkout is wired up using **Stripe-hosted Checkout** (the secure redirect flow).
Your publishable test key is already in `.env.local`. You only need to add the
secret key and install the Stripe package.

---

## 1. Add your secret key (one step)

1. In Stripe, go to **Developers → API keys** (make sure **Test mode** is on).
2. Next to **Secret key**, click **Reveal test key**. It starts with `sk_test_`.
3. Open `.env.local` and replace the placeholder on the `STRIPE_SECRET_KEY` line:

   ```
   STRIPE_SECRET_KEY=sk_test_...your key here...
   ```

⚠️ The secret key is like a password — never paste it into chat, email, or git.
`.env.local` is already git-ignored so it won't be committed.

---

## 2. Install and run

```bash
npm install        # installs the new "stripe" package
npm run dev
```

Open http://localhost:3000

---

## 3. Test a purchase

1. Go to **Parts**, open a priced item, **Add to Cart**.
2. Go to **Cart**, click **Proceed to Checkout**.
3. You'll be redirected to Stripe's secure payment page.
4. Pay with a Stripe **test card**:

   | Field | Value |
   |-------|-------|
   | Card number | `4242 4242 4242 4242` |
   | Expiry | any future date (e.g. `12/34`) |
   | CVC | any 3 digits (e.g. `123`) |
   | ZIP | any 5 digits (e.g. `85001`) |

5. After paying you'll land on the **order confirmation** page and the cart clears.
6. Check **Stripe Dashboard → Payments** — your test payment appears there.

More test cards (declines, etc.): https://stripe.com/docs/testing

---

## How it works (and why it's safe)

- The cart sends only **product IDs and quantities** to the server.
- The server (`app/api/checkout/route.js`) looks up the **real price** for each
  item from the product catalog and builds the Stripe charge from that. A tampered
  cart can't change prices.
- **Quote-based** items and **out-of-stock** items are automatically excluded from
  checkout.
- Shipping matches the cart: **free over $100**, otherwise **$15.99** flat.
- Stripe handles the card entry, PCI compliance, and the receipt email.

---

## Going live (later)

When you're ready for real payments:

1. Activate your Stripe account (business details + bank account for payouts).
2. Toggle Stripe to **Live mode** and copy the **live** keys (`pk_live_` / `sk_live_`).
3. In your production environment (e.g. Vercel), set:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...`
   - `STRIPE_SECRET_KEY=sk_live_...`
   - `NEXT_PUBLIC_SITE_URL=https://osoatm.com`
4. Do one real low-value transaction to confirm payouts land in your bank.

---

## Optional next steps (not required to launch)

- **Order records & emails to you:** add a Stripe **webhook** so each paid order
  is saved and emails your team. (Right now Stripe emails the customer a receipt;
  a webhook is how you'd capture orders into the Admin dashboard.)
- **Sales tax:** enable **Stripe Tax** for automatic tax calculation.
- **Apple Pay / Google Pay:** these turn on automatically on the hosted page once
  your account is activated.
