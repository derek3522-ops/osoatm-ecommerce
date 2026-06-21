// app/api/orders/route.js
// Returns saved orders for the Admin dashboard.
//
// NOTE: This is currently open. Before going live, protect this route (and the
// /admin page) behind authentication so only your team can read order data.

import { getOrders } from '../../lib/orders';

export async function GET() {
  try {
    const orders = await getOrders();
    return Response.json({ orders });
  } catch (err) {
    console.error('Failed to load orders:', err.message);
    return Response.json({ orders: [], error: 'Could not load orders.' }, { status: 500 });
  }
}
