// app/atms/page.jsx - ATM machines for sale

'use client';

import { useState } from 'react';
import Link from 'next/link';

const atms = [
  {
    id: 1,
    name: "Genmega G2500 ATM",
    manufacturer: "Genmega",
    priceRange: "$2,565 – $7,830",
    image: "/products/atm-g2500.png",
  },
  {
    id: 2,
    name: "Genmega Onyx ATM",
    manufacturer: "Genmega",
    priceRange: "$2,750 – $8,170",
    image: "/products/atm-onyx.png",
  },
  {
    id: 3,
    name: "Genmega Onyx W ATM",
    manufacturer: "Genmega",
    priceRange: "$2,975 – $4,340",
    image: "/products/atm-onyx-w.png",
  },
  {
    id: 4,
    name: "Genmega C6000 ATM",
    manufacturer: "Genmega",
    priceRange: "$3,430 – $8,375",
    image: "/products/atm-c6000.png",
  },
  {
    id: 5,
    name: "Genmega GT3000 ATM",
    manufacturer: "Genmega",
    priceRange: "$4,625 – $5,940",
    image: "/products/atm-gt3000.png",
  },
  {
    id: 6,
    name: "Genmega GT5000 ATM",
    manufacturer: "Genmega",
    priceRange: "$7,735 – $11,885",
    image: "/products/atm-gt5000.png",
  },
  {
    id: 7,
    name: "Genmega Nova ATM",
    manufacturer: "Genmega",
    priceRange: "$3,590 – $8,430",
    image: "/products/atm-nova.png",
  },
  {
    id: 8,
    name: "Hyosung Halo II ATM",
    manufacturer: "Hyosung",
    priceRange: "$2,620 – $4,785",
    image: "/products/atm-halo2.png",
  },
  {
    id: 9,
    name: "Hyosung Force ATM",
    manufacturer: "Hyosung",
    priceRange: "$2,885 – $8,125",
    image: "/products/atm-force.png",
  },
  {
    id: 10,
    name: "Hyosung 2800T ATM",
    manufacturer: "Hyosung",
    priceRange: "$4,590 – $7,450",
    image: "/products/atm-2800t.png",
  },
  {
    id: 11,
    name: "Hyosung 5400SE ATM",
    manufacturer: "Hyosung",
    priceRange: "$5,575 – $10,570",
    image: "/products/atm-5400se.png",
  },
];

export default function ATMsPage() {
  const [selectedATM, setSelectedATM] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleQuote = (atm) => {
    setSelectedATM(atm);
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, atm: selectedATM?.name }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedATM(null);
        setFormData({ name: '', email: '', phone: '', comments: '' });
      }, 4000);
    } catch {
      setSubmitError('Something went wrong. Please call us at 1-866-676-2861.');
    }
  };

  return (
    <>
      <div className="bg-navy text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold">ATM Machines</h1>
          <p className="text-gray-300 mt-2">New Genmega And Hyosung ATMs — Contact Us For A Custom Quote</p>
        </div>
      </div>

      {/* ATM Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atms.map(atm => (
              <div key={atm.id} className="card flex flex-col">
                <div className="text-xs font-bold text-orange-500 uppercase mb-3">{atm.manufacturer}</div>
                <div className="h-64 mb-4 rounded bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={atm.image} alt={atm.name} className="max-h-full max-w-full object-contain p-4" />
                </div>
                <h3 className="font-bold text-lg mb-2">{atm.name}</h3>
                <p className="text-orange-600 font-bold text-lg mb-4">{atm.priceRange}</p>
                <button
                  onClick={() => handleQuote(atm)}
                  className="w-full btn-primary mt-auto"
                >
                  Request A Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="bg-gray-50 py-16">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Request A Quote</h2>
          <p className="text-gray-600 text-center mb-8">
            {selectedATM
              ? <>Requesting Quote For: <span className="font-bold text-navy">{selectedATM.name}</span></>
              : 'Select An ATM Above Or Fill Out The Form And We\'ll Get Back To You'}
          </p>

          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">&#10003;</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Quote Request Submitted</h3>
                <p className="text-gray-600">We'll Contact You Within One Business Day With Pricing And Availability</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="comments">Comments / Questions</label>
                  <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows="4" placeholder="Any Questions About The ATM Or Your Specific Needs"></textarea>
                </div>
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded p-3">
                    {submitError}
                  </div>
                )}
                <button type="submit" className="w-full btn-primary py-3">Submit Quote Request</button>
                <p className="text-xs text-gray-600 text-center">We'll Confirm Pricing And Availability Within One Business Day</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
