// app/api/checkout/route.js
// Creates a Stripe Checkout Session (hosted payment page).
//
// SECURITY: Prices are looked up from the server-side product catalog, NOT
// taken from the client. This prevents a tampered cart from changing prices.
// The client only sends product ids + quantities.

import { getCartWeight, getShippingOptions } from '../../lib/shipping';
import Stripe from 'stripe';
import { products } from '../../lib/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json(
        { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local.' },
        { status: 500 }
      );
    }

    const { items } = await req.json(); // [{ id, quantity }]
    if (!Array.isArray(items) || items.length === 0) {
      return Response.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    // Build Stripe line items from trusted server-side product data
    const line_items = [];
    let subtotal = 0;

    for (const it of items) {
      const product = products.find((p) => p.id === Number(it.id));
      if (!product) continue;
      if (product.pricing === 'quote') continue; // quote items are not purchasable online
      if (!product.inStock) continue;

      const quantity = Math.max(1, Math.min(999, parseInt(it.quantity, 10) || 1));
      subtotal += product.price * quantity;

      line_items.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            metadata: { sku: product.sku },
          },
          unit_amount: Math.round(product.price * 100), // cents
        },
        quantity,
      });
    }

    if (line_items.length === 0) {
      return Response.json({ error: 'No purchasable items in cart.' }, { status: 400 });
    }

   const cartWeight = getCartWeight(items, products);
    const shippingOptions = getShippingOptions(cartWeight);

    const origin =
      req.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: shippingOptions.map((opt) => ({
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: opt.amount, currency: 'usd' },
          display_name: opt.display_name,
          delivery_estimate: opt.delivery_estimate,
        },
      })),
      phone_number_collection: { enabled: true },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return Response.json(
      { error: 'Could not start checkout. Please try again.' },
      { status: 500 }
    );
  }
}
