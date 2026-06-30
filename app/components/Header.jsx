'use client';

import Link from 'next/link';
import { useStore } from '../lib/store';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const cartItems = useStore(state => state.cart);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/oso-logo.png" alt="OSO ATM" className="h-16" />
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-bold">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/parts" className="hover:text-orange-500">Parts</Link>
          <Link href="/repair" className="hover:text-orange-500">Repair</Link>
          <Link href="/atms" className="hover:text-orange-500">ATMs</Link>
          <Link href="/support" className="hover:text-orange-500">Support</Link>
          <Link href="/cart" className="relative hover:text-orange-500">
            <ShoppingCart size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
