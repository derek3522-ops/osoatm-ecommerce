// app/products/[id]/page.jsx - Product detail page

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, hasRealImage } from '../../lib/products';
import { useStore } from '../../lib/store';
import { ShoppingCart, AlertCircle } from 'lucide-react';

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === parseInt(params.id));
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants ? product.variants[0] : null
  );
  const addToCart = useStore(state => state.addToCart);

  if (!product) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/parts" className="btn-primary">Back to Parts</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Find related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container">
          <div className="flex space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/parts" className="hover:text-navy">Parts</Link>
            <span>/</span>
            <span>{product.name.substring(0, 40)}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            {hasRealImage(product) ? (
              <div className="h-96 mb-4 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-4" />
              </div>
            ) : (
              <div className="img-placeholder h-96 mb-4">
                <span>Photo coming soon</span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="img-placeholder h-20"></div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mb-2">
                {product.manufacturer}
              </span>
              {product.condition && (
                <span className="inline-block ml-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">
                  {product.condition}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

            {/* Description with NOTICE support */}
            {product.description && product.description.split('NOTICE:').length > 1 ? (
              <>
                <p className="text-gray-600 mb-1 text-lg">{product.description.split('NOTICE:')[0]}</p>
                <p className="text-gray-600 mb-2 text-base"><span className="font-bold">NOTICE:</span> {product.description.split('NOTICE:')[1]}</p>
              </>
            ) : (
              <p className="text-gray-600 mb-2 text-lg">{product.description}</p>
            )}

            {/* Variants / Service Plan selector */}
            {product.variants && (
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Select Service Plan</label>
                <select
                  value={selectedVariant?.label}
                  onChange={(e) => setSelectedVariant(product.variants.find(v => v.label === e.target.value))}
                  className="w-full px-3 py-2 border rounded"
                >
                  {product.variants.map(v => (
                    <option key={v.label} value={v.label}>
                      {v.label} — ${v.monthlyFee}/month
                    </option>
                  ))}
                </select>
                {selectedVariant && (
                  <p className="text-sm text-gray-500 mt-2">
                    + ${selectedVariant.monthlyFee}/month cellular service fee
                  </p>
                )}
              </div>
            )}

            {/* Part Number */}
            {product.partNumber && (
              <p className="text-sm text-gray-500 mb-6">Part# : {product.partNumber}</p>
            )}

            {/* SKU and Category */}
            <div className="bg-gray-50 p-4 rounded mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SKU:</span>
                <span className="font-bold">{product.sku}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Category:</span>
                <span className="font-bold">{product.category}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Stock Status:</span>
                <span className={`font-bold ${product.inStock ? 'text-accent-green' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg">
              {product.pricing === 'quote' ? (
                <>
                  <div className="text-sm text-gray-600 mb-2">Pricing</div>
                  <div className="text-3xl font-bold text-navy mb-2">Request a Quote</div>
                  <div className="text-sm text-gray-600">Contact us for current pricing and availability on this part.</div>
                </>
              ) : (
                <>
                  <div className="text-sm text-gray-600 mb-2">{product.rental ? 'Monthly Rental' : 'Price'}</div>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-5xl font-bold text-orange-600">${product.price.toFixed(2)}</span>
                    {product.rental && <span className="text-lg text-gray-500">/ month</span>}
                  </div>
                  {product.inStock && (
                    <div className="text-sm text-accent-green font-bold">In stock and ready to ship</div>
                  )}
                </>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8 space-y-4">
              {product.pricing === 'quote' ? (
                <>
                  <Link
                    href={`/support`}
                    className="w-full btn-primary py-4 flex items-center justify-center space-x-2 text-lg"
                  >
                    <span>Request a Quote</span>
                  </Link>
                  <p className="text-sm text-gray-600 text-center">
                    Call 1-800-OSO-ATMS or contact us for pricing on item {product.sku}.
                  </p>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold mb-2">Quantity</label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 text-center border rounded px-2 py-2"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full btn-primary py-4 flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart size={24} />
                    <span>Add to Cart</span>
                  </button>

                  {addedToCart && (
                    <div className="bg-accent-green text-white p-4 rounded flex items-center space-x-2">
                      <AlertCircle size={20} />
                      <span>Added to cart successfully!</span>
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="bg-red-50 text-red-700 p-4 rounded flex items-center space-x-2 border border-red-200">
                      <AlertCircle size={20} />
                      <span>This item is currently out of stock</span>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t">
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Specifications</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-bold">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Manufacturer:</span>
                <span className="font-bold">{product.manufacturer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="font-bold">{product.sku}</span>
              </div>
              {product.partNumber && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Part Number:</span>
                  <span className="font-bold">{product.partNumber}</span>
                </div>
              )}
              {product.condition && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-bold">{product.condition}</span>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="font-bold text-lg mb-4">Warranty & Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                <span>30-day returns on all parts</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                <span>Technical support included</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                <span>Warranty varies by part</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                <span>Contact us for details</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-3xl font-bold mb-8">Related Parts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="card cursor-pointer">
                    {hasRealImage(p) ? (
                      <div className="h-40 mb-4 rounded bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                        <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain p-2" />
                      </div>
                    ) : (
                      <div className="img-placeholder h-40 mb-4"></div>
                    )}
                    <h4 className="font-bold text-sm mb-2 line-clamp-2">{p.name}</h4>
                    {p.pricing === 'quote' ? (
                      <span className="text-sm font-bold text-navy">Request Quote</span>
                    ) : (
                      <span className="price">${p.price.toFixed(2)}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
