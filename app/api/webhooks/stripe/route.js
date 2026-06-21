// app/api/webhooks/stripe/route.js
// Receives events from Stripe and saves completed orders.
//
// Stripe calls this URL when a payment finishes. We verify the request really
// came from Stripe (signature check), then record the order so it shows in Admin.

import Stripe from 'stripe';
import { saveOrder } from '../../../lib/orders';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const signature = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set.');
    return new Response('Webhook not configured.', { status: 500 });
  }

  // Raw body is required for signature verification
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return new Response(`Signature verification failed: ${err.message}`, { status: 400 });
  }

  // We only care about completed checkouts
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Pull the purchased line items for this session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
      });

      const items = lineItems.data.map((li) => ({
        name: li.description,
        quantity: li.quantity,
        amount: (li.amount_total || 0) / 100, // line total in dollars
      }));

      const order = {
        id: session.id,
        date: new Date((session.created || Date.now() / 1000) * 1000).toISOString(),
        status: 'Paid',
        customer: {
          name: session.customer_details?.name || '',
          email: session.customer_details?.email || '',
          phone: session.customer_details?.phone || '',
        },
        shippingAddress: session.shipping_details?.address || session.customer_details?.address || null,
        items,
        subtotal: (session.amount_subtotal || 0) / 100,
        shipping: (session.shipping_cost?.amount_total || 0) / 100,
        total: (session.amount_total || 0) / 100,
        paymentIntent: session.payment_intent || null,
      };

      await saveOrder(order);
      console.log('Order saved:', order.id);
    } catch (err) {
      console.error('Failed to save order:', err.message);
      // Return 500 so Stripe retries delivery
      return new Response('Failed to record order.', { status: 500 });
    }
  }

  // Acknowledge receipt so Stripe stops retrying
  return Response.json({ received: true });
}
