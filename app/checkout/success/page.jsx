// app/checkout/success/page.jsx - Order confirmation after Stripe payment

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useStore } from '../../lib/store';

export default function CheckoutSuccessPage() {
  const clearCart = useStore(state => state.clearCart);

  // Payment succeeded — empty the cart so it isn't re-purchased
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container py-20">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={44} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank You For Your Order!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your Payment Was Successful And Your Order Is Confirmed. A Receipt Has Been
          Emailed To You, And We&rsquo;ll Be In Touch With Shipping Details
        </p>

        <div className="card text-left mb-8">
          <h3 className="font-bold mb-3">What Happens Next</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
              <span>You&rsquo;ll Receive An Order Confirmation Email From Stripe</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
              <span>Most In-Stock Parts Ship Within 1&ndash;2 Business Days</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
              <span>Questions? Call 1-800-OSO-ATMS, Mon&ndash;Fri 8am&ndash;5pm MST.</span>
            </li>
          </ul>
        </div>

        <div className="space-x-4">
          <Link href="/parts" className="btn-primary inline-block">Continue Shopping</Link>
          <Link href="/" className="btn-outline text-navy border-navy inline-block">Back To Home</Link>
        </div>
      </div>
    </div>
  );
}
