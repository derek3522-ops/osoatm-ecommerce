// app/layout.jsx - Main layout with navigation

import './globals.css';
import Link from 'next/link';
import { ShoppingCart, Menu, Package, Wrench, Banknote, Archive, Printer, CreditCard, Wifi, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'OSO ATM Parts | ATM Equipment & Replacement Parts',
  description: 'Professional ATM parts distributor for Genmega and Hyosung machines. Quality parts, competitive pricing, fast shipping.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <CategoryNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/oso-logo-ondark.png" alt="OSO ATM" className="h-20 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="/parts" className="hover:text-orange-400 transition">Parts</Link>
            <Link href="/repair" className="hover:text-orange-400 transition">Parts Repair</Link>
            <Link href="/support" className="hover:text-orange-400 transition">Support</Link>
            <Link href="/admin" className="hover:text-orange-400 transition">Admin</Link>
          </nav>

          {/* Cart Icon */}
          <Link href="/cart" className="flex items-center space-x-2 hover:text-orange-400 transition bg-navy-light px-4 py-2 rounded">
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

const categoryNavItems = [
  { label: 'Parts', href: '/parts', Icon: Package },
  { label: 'Parts Repair', href: '/repair', Icon: Wrench },
  { label: 'Dispensers', href: '/parts?category=Dispensers', Icon: Banknote },
  { label: 'Cassettes', href: '/parts?category=Cassettes', Icon: Archive },
  { label: 'Printers', href: '/parts?category=Printers', Icon: Printer },
  { label: 'Card Readers', href: '/parts?category=Card%20Readers', Icon: CreditCard },
  { label: 'Wireless / IP', href: '/parts?category=Wireless%2FConnectivity', Icon: Wifi },
  { label: 'Resource Center', href: '/support', Icon: BookOpen },
];

function CategoryNav() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container">
        <nav className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-1 md:gap-4 py-3 overflow-x-auto">
          {categoryNavItems.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center justify-start px-3 py-2 rounded hover:bg-white transition flex-shrink-0 w-[88px]"
            >
              <Icon size={28} className="text-navy group-hover:text-accent-orange transition" strokeWidth={1.75} />
              <span className="text-xs font-bold mt-2 text-center leading-tight text-gray-700 group-hover:text-accent-orange">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/oso-logo-ondark.png" alt="OSO ATM" className="h-20 w-auto mb-4" />
            <p className="text-gray-300 text-sm">
              Professional ATM parts supplier for Genmega and Hyosung machines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white mb-4">Resource Center</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/parts" className="hover:text-orange-400">Parts</Link></li>
              <li><Link href="/repair" className="hover:text-orange-400">Repair Services</Link></li>
              <li><Link href="/support" className="hover:text-orange-400">Error Codes</Link></li>
              <li><Link href="/support" className="hover:text-orange-400">Support</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h5 className="text-white mb-4">Brands</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Genmega</li>
              <li>Hyosung</li>
              <li>Sargent & Greenleaf</li>
              <li>Hantle</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white mb-4">Contact</h5>
            <p className="text-sm text-gray-300">
              <strong>Phone:</strong> 1-800-OSO-ATMS<br />
              <strong>Email:</strong> parts@osoatm.com<br />
              <strong>Hours:</strong> Mon-Fri 8am-5pm MST
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 OSO ATM. All rights reserved. | 
            <Link href="/privacy" className="hover:text-orange-400"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-orange-400"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
