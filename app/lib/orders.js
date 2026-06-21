// app/lib/orders.js
// Order storage.
//
// This is a simple FILE-BASED store: orders are written to data/orders.json.
// It works perfectly for local development (npm run dev) and for traditional
// always-on Node hosting (a VPS, Render, Railway, a Docker container, etc.).
//
// ⚠️ IMPORTANT — SERVERLESS (Vercel/Netlify):
// Serverless platforms have a read-only, ephemeral filesystem, so this file
// store will NOT persist there. When you deploy to Vercel, replace the two
// functions below (getOrders / saveOrder) with calls to a real database —
// e.g. Postgres (Supabase/Neon), MongoDB Atlas, or Vercel KV. The rest of the
// app only uses getOrders() and saveOrder(), so swapping the storage here is
// the only change required.

import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

async function ensureStore() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    /* directory already exists */
  }
}

export async function getOrders() {
  await ensureStore();
  try {
    const raw = await fs.readFile(ORDERS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return []; // no orders yet
  }
}

export async function saveOrder(order) {
  await ensureStore();
  const orders = await getOrders();
  // Stripe can deliver a webhook more than once — don't store duplicates
  if (orders.find((o) => o.id === order.id)) {
    return order;
  }
  orders.unshift(order); // newest first
  await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
  return order;
}
