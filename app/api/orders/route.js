// app/api/orders/route.js - Fetch orders from Supabase
import { createClient } from '@supabase/supabase-js';

export async function GET(req) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return Response.json({ orders: [] }, { status: 500 });
    }

    return Response.json({ orders: data || [] });
  } catch (err) {
    console.error('Orders API error:', err);
    return Response.json({ orders: [] }, { status: 500 });
  }
}
