// app/parts/page.jsx - Products listing with filtering

'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { products, categories, manufacturers, hasRealImage } from '../lib/products';
import { ChevronDown } from 'lucide-react';

export default function PartsPage() {
  const [selectedManufacturer, setSelectedManufacturer] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All Parts');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  // Pre-select category/manufacturer when arriving from the nav bar or home links
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && categories.includes(cat)) setSelectedCategory(cat);
    const mfr = params.get('manufacturer');
    if (mfr && manufacturers.includes(mfr)) setSelectedManufacturer(mfr);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const manufacturerMatch = selectedManufacturer === 'All' || product.manufacturer === selectedManufacturer;
      const categoryMatch = selectedCategory === 'All Parts' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return manufacturerMatch && categoryMatch && priceMatch && searchMatch;
    });

    // Sort
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // popularity (default order)
        break;
    }

    return result;
  }, [selectedManufacturer, selectedCategory, priceRange, searchTerm, sortBy]);

  return (
    <>
      <div className="bg-navy text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold">ATM Parts</h1>
          <p className="text-gray-300 mt-2">{filteredProducts.length} products found</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-bold mb-3">Search</h3>
                <input
                  type="text"
                  placeholder="Part name, SKU..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              {/* Manufacturer */}
              <div>
                <h3 className="font-bold mb-3">Manufacturer</h3>
                <div className="space-y-2">
                  {manufacturers.map(mfr => (
                    <label key={mfr} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="manufacturer"
                        checked={selectedManufacturer === mfr}
                        onChange={() => setSelectedManufacturer(mfr)}
                        className="mr-2"
                      />
                      <span className="text-sm">{mfr}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-bold mb-3">Category</h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Min: ${priceRange[0].toFixed(0)}</label>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max: ${priceRange[1].toFixed(0)}</label>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* In Stock Only */}
              <div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">In Stock Only</span>
                </label>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedManufacturer('All');
                  setSelectedCategory('All Parts');
                  setPriceRange([0, 3000]);
                  setSearchTerm('');
                  setSortBy('popularity');
                }}
                className="w-full btn-outline text-navy border-navy"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Control */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">Showing {filteredProducts.length} results</p>
              <div>
                <label className="text-sm mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border rounded text-sm"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="card text-center py-12">
                <h3 className="text-xl font-bold mb-2">No parts found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedManufacturer('All');
                    setSelectedCategory('All Parts');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card cursor-pointer h-full flex flex-col">
        {hasRealImage(product) ? (
          <div className="h-48 mb-4 rounded bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-2" />
          </div>
        ) : (
          <div className="img-placeholder h-48 mb-4">
            <span>Photo coming soon</span>
          </div>
        )}
        <div className="mb-2">
          <span className="text-xs font-bold text-orange-400 uppercase">{product.manufacturer}</span>
          {product.condition && <span className="text-xs ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded">{product.condition}</span>}
        </div>
        <div className="text-xs text-gray-500 mb-2">SKU: {product.sku}</div>
        <h3 className="font-bold text-sm mb-2 line-clamp-2 flex-grow">{product.name}</h3>
        <p className="text-gray-600 text-xs mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t">
          {product.pricing === 'quote' ? (
            <span className="text-sm font-bold text-navy">Request Quote</span>
          ) : (
            <span className="price">${product.price.toFixed(2)}</span>
          )}
          {product.inStock ? (
            <span className="text-xs font-bold text-accent-green">In Stock</span>
          ) : (
            <span className="text-xs font-bold text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
