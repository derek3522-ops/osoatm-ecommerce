// app/support/page.jsx - Resource Center with ATM error code lookup

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { errorCodeManufacturers } from '../lib/errorCodes';
import { Search, AlertTriangle, FileText, Phone } from 'lucide-react';

const PAGE_SIZE = 15;

export default function SupportPage() {
  const [activeMfr, setActiveMfr] = useState('genmega');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const active = errorCodeManufacturers.find(m => m.id === activeMfr);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return active.data;
    return active.data.filter(
      row =>
        row.code.toLowerCase().includes(q) ||
        row.description.toLowerCase().includes(q) ||
        row.solution.toLowerCase().includes(q)
    );
  }, [active, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageRows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const switchMfr = (id) => {
    setActiveMfr(id);
    setPage(1);
    setQuery('');
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-3">Resource Center</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Look Up ATM Error Codes, Find Solutions, And Get The Support You Need To Keep Your Machines Running
          </p>
        </div>
      </section>

      {/* Error code lookup */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-orange-500" size={28} />
            <h2 className="text-3xl font-bold">ATM Error Codes</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Select Your ATM Manufacturer And Search By Code Or Description
          </p>

          {/* Manufacturer toggle */}
          <div className="flex gap-3 mb-6">
            {errorCodeManufacturers.map(m => (
              <button
                key={m.id}
                onClick={() => switchMfr(m.id)}
                className={`px-6 py-3 rounded-lg font-bold transition border-2 ${
                  activeMfr === m.id
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-gray-200 hover:border-navy'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-4 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder={`Search ${active.label} Error Codes...`}
              className="pl-10"
            />
          </div>

          {/* Coverage note */}
          <div className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded p-3 mb-6">
            Showing {filtered.length} {active.label} {filtered.length === 1 ? 'code' : 'Codes'}
            {active.id === 'hyosung'}
          </div>

          {/* Table */}
          <div className="card overflow-x-auto p-0">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold w-32">Error Code</th>
                  <th className="text-left px-4 py-3 font-bold">Description</th>
                  <th className="text-left px-4 py-3 font-bold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {pageRows.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                      No Codes Match &ldquo;{query}&rdquo;. Try A Different Search, Or Call Us For Help
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, i) => (
                    <tr key={row.code + i} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-navy align-top">{row.code}</td>
                      <td className="px-4 py-3 align-top">{row.description}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row.solution}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">
                Page {currentPage} Of {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="btn-outline text-navy border-navy text-sm py-1 px-3 disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="btn-outline text-navy border-navy text-sm py-1 px-3 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other resources */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">More Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/repair" className="card hover:border-navy">
              <FileText className="text-orange-500 mb-3" size={28} />
              <h3 className="font-bold mb-2">Parts Repair</h3>
              <p className="text-sm text-gray-600">Send Us A Component For Professional Bench Repair With A 90-Day Warranty</p>
            </Link>
            <Link href="/parts" className="card hover:border-navy">
              <FileText className="text-orange-500 mb-3" size={28} />
              <h3 className="font-bold mb-2">Browse Parts</h3>
              <p className="text-sm text-gray-600">Find The Replacement Part You Need For Genmega And Hyosung Machines</p>
            </Link>
            <div className="card">
              <Phone className="text-orange-500 mb-3" size={28} />
              <h3 className="font-bold mb-2">Talk to a Tech</h3>
              <p className="text-sm text-gray-600">Call 1-800-OSO-ATMS, Mon-Fri 8am-5pm MST, For Hands-On Troubleshooting Help</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
