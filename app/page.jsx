// app/page.jsx - Home page

import Link from 'next/link';
import { ArrowRight, Zap, Truck, Lock, Phone, Mail } from 'lucide-react';
import { products, hasRealImage } from './lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-10 whitespace-nowrap">
              Quality ATM Parts For<br /> <span className="text-orange-400">Genmega</span> & <span className="text-orange-400">Hyosung</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-snug">
              Professional-Grade Replacement Parts And Accessories<br />
              Fast Shipping, Competitive Pricing, And Expert Support
            </p>
            <div className="flex space-x-4">
              <Link href="/parts" className="btn-primary inline-flex items-center space-x-2">
                <span>Browse Parts</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/repair" className="btn-primary inline-flex items-center space-x-2">
                <span>Repair Services</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-orange-400" size={32} />}
              title="Fast Shipping"
              description="Most Orders Ship Within 24 Hours. Express Shipping Available"
            />
            <FeatureCard 
              icon={<Lock className="text-orange-400" size={32} />}
              title="Quality Guaranteed"
              description="All Parts Tested And Verified For Compatibility And Function"
            />
            <FeatureCard 
              icon={<Truck className="text-orange-400" size={32} />}
              title="Expert Support"
              description="Technical Support And Consultation Available For All Purchases"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Parts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/parts" className="btn-primary inline-flex items-center space-x-2">
              <span>View All {products.length} Parts</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Dispensers', 'Cassettes', 'Printers', 'Keypads', 'Card Readers', 'Power Supplies', 'LCD Displays', 'Accessories'].map(category => (
              <Link 
                key={category}
                href={`/parts?category=${category}`}
                className="card text-center hover:bg-navy hover:text-white transition p-6"
              >
                <h4 className="font-bold">{category}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Finding Parts?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our Team Is Ready To Help You Find The Exact Parts You Need<br /> Contact Us For Technical Support Or Bulk Orders
          </p>
         
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card cursor-pointer">
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
        <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-xs mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          {product.pricing === 'quote' ? (
            <span className="text-sm font-bold text-navy">Request Quote</span>
          ) : (
            <span className="price">${product.price.toFixed(2)}</span>
          )}
          {product.inStock ? (
            <span className="text-xs font-bold text-green-600">In Stock</span>
          ) : (
            <span className="text-xs font-bold text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
