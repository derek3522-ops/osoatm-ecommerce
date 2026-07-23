// middleware.js - Protects admin page and orders API
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/admin/:path*', '/admin', '/api/orders/:path*', '/api/orders'],
};

export function middleware(req) {
  const auth = req.headers.get('authorization');
  const expected = 'Basic ' + btoa(`admin:${process.env.ADMIN_PASSWORD}`);

  if (process.env.ADMIN_PASSWORD && auth === expected) {
    return NextResponse.next();
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="OSO ATM Admin"' },
  });
}
