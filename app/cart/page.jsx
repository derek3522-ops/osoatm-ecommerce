// app/cart/page.jsx - Shopping cart

'use client';

import { useState } from 'react';
import { useStore } from '../lib/store';
import { hasRealImage, products } from '../lib/products';
import { getCartWeight, getShippingRate } from '../lib/shipping';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const cart = useStore(state => state.cart);
  const removeFromCart = useStore(state => state.removeFromCart);
  const updateQuantity = useStore(state => state.updateQuantity);
  const getCartTotal = useStore(state => state.getCartTotal);

  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const total = getCartTotal();
  const cartWeight = getCartWeight(cart, products);
  const shipping = cart.length > 0 ? getShippingRate(cartWeight).amount / 100 : 0;

  const handleCheckout = async () => {
    setCheckingOut(true);
    setCheckoutError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout Failed.');
      }
      window.location.href = data.url; // redirect to Stripe-hosted checkout
    } catch (err) {
      setCheckoutError(err.message || 'Something Went Wrong Starting Checkout.');
      setCheckingOut(false);
    }
  };

  return (
    <>
      <div className="bg-navy text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </div>
      </div>

      <div className="container py-12">
        {cart.length === 0 ? (
          <div className="card text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Your Cart Is Empty</h2>
            <p className="text-gray-600 mb-6">Add Some Parts To Get Started</p>
            <Link href="/parts" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Order Summary ({cart.length} items)</h2>
                
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b last:border-b-0 last:pb-0">
                      {/* Product Image */}
                      {hasRealImage(item) ? (
                        <div className="w-24 h-24 flex-shrink-0 rounded bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain p-1" />
                        </div>
                      ) : (
                        <div className="img-placeholder w-24 h-24 flex-shrink-0"></div>
                      )}

                      {/* Product Details */}
                      <div className="flex-grow">
                        <Link href={`/products/${item.id}`} className="hover:text-navy">
                          <h3 className="font-bold mb-2">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-gray-600 mb-2">SKU: {item.sku}</p>
                        <p className="text-sm font-bold text-orange-400">${item.price.toFixed(2)}</p>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <Trash2 size={20} />
                        </button>

                        <div className="flex items-center space-x-2 border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-600">Subtotal</p>
                          <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Link href="/parts" className="btn-outline text-navy border-navy">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <div className="card sticky top-20">
                <h3 className="text-xl font-bold mb-6">Order Total</h3>

                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping (Ground):</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    2-Day And Overnight Available At Checkout
                  </div>
                  
                </div>

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total:</span>
                  <span className="text-orange-600">${(total + shipping).toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut || cart.length === 0}
                  className="w-full btn-primary py-3 mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {checkingOut ? 'Redirecting to secure checkout…' : 'Proceed to Checkout'}
                </button>

                {checkoutError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded p-3 mb-4">
                    {checkoutError}
                  </div>
                )}

                <details className="text-sm">
                  <summary className="cursor-pointer font-bold text-navy mb-2">Promo Code</summary>
                  <input 
                    type="text" 
                    placeholder="Enter code"
                    className="w-full px-3 py-2 border rounded text-sm mb-2"
                  />
                  <button className="w-full btn-outline text-navy border-navy text-sm py-1">
                    Apply
                  </button>
                </details>

                <div className="mt-6 pt-6 border-t text-sm text-gray-600 space-y-2">
                  <div className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>30-Day Returns On All Parts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Secure Checkout With Stripe</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Free Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
