// app/repair/page.jsx - Parts repair services catalog and inquiry form

'use client';

import { useState, useMemo } from 'react';
import { repairServices, repairCategories } from '../lib/products';
import { Wrench, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function RepairPage() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', atmModel: '', issue: '', urgency: 'standard'
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All Services') return repairServices;
    return repairServices.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequestService = (service) => {
    setSelectedService(service);
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Repair request:', { ...formData, service: selectedService });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedService(null);
      setFormData({ name: '', email: '', phone: '', atmModel: '', issue: '', urgency: 'standard' });
    }, 4000);
  };

  return (
    <>
      <div className="bg-navy text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold">Parts Repair Services</h1>
          <p className="text-gray-300 mt-2">
            Professional bench repair for Genmega, Hantle, and Hyosung components &mdash; {repairServices.length} services available
          </p>
        </div>
      </div>

      {/* How it works */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <HowItWorks icon={<Wrench className="text-orange-500" size={28} />} step="1" title="Send Your Part" text="Ship us the component that needs service." />
            <HowItWorks icon={<ShieldCheck className="text-orange-500" size={28} />} step="2" title="We Diagnose & Repair" text="Full bench diagnostics and component-level repair." />
            <HowItWorks icon={<Clock className="text-orange-500" size={28} />} step="3" title="Fast Turnaround" text="Most repairs done in 2-3 business days." />
            <HowItWorks icon={<ShieldCheck className="text-orange-500" size={28} />} step="4" title="90-Day Warranty" text="Every repair is backed by our warranty." />
          </div>
        </div>
      </section>

      {/* Services catalog */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Repair Service Pricing</h2>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {repairCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  activeCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} className="card flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-orange-500 uppercase">{service.manufacturer}</span>
                  {service.isCombo && (
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">COMBO DEAL</span>
                  )}
                </div>
                <h3 className="font-bold text-base mb-2 flex-grow">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t">
                  <div>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-400 line-through mr-2">${service.originalPrice.toFixed(2)}</span>
                    )}
                    <span className="text-2xl font-bold text-orange-600">${service.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => handleRequestService(service)}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry-form" className="bg-gray-50 py-16">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Request a Repair</h2>
          <p className="text-gray-600 text-center mb-8">
            {selectedService
              ? <>Selected service: <span className="font-bold text-navy">{selectedService.name}</span> &mdash; <span className="text-orange-600 font-bold">${selectedService.price.toFixed(2)}</span></>
              : 'Pick a service above, or describe your issue and we\u2019ll recommend one.'}
          </p>

          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">&#10003;</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Submitted</h3>
                <p className="text-gray-600">We&rsquo;ll contact you within one business day to arrange your repair and shipping.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset>
                  <legend className="font-bold text-lg mb-4">Contact Information</legend>
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
                </fieldset>

                <fieldset>
                  <legend className="font-bold text-lg mb-4">Equipment & Issue</legend>
                  <div className="form-group">
                    <label htmlFor="atmModel">ATM Model</label>
                    <select id="atmModel" name="atmModel" value={formData.atmModel} onChange={handleChange}>
                      <option value="">Select ATM Model</option>
                      <optgroup label="Genmega">
                        <option>Genmega G2500</option>
                        <option>Genmega GT3000</option>
                        <option>Genmega GT5000</option>
                        <option>Genmega Onyx</option>
                      </optgroup>
                      <optgroup label="Hyosung">
                        <option>Hyosung NH 1800</option>
                        <option>Hyosung NH 2700</option>
                        <option>Hyosung MX 5000</option>
                        <option>Hyosung Halo / Halo II</option>
                        <option>Hyosung Force</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="issue">Describe the Issue *</label>
                    <textarea id="issue" name="issue" value={formData.issue} onChange={handleChange} rows="4"
                      placeholder="What is the part doing (or not doing)? Include any error codes." required></textarea>
                  </div>
                </fieldset>

                <div>
                  <p className="font-bold text-lg mb-4">Turnaround</p>
                  <div className="space-y-3">
                    <div className="flex flex-row gap-3 items-center">
                      <input type="radio" name="urgency" value="standard" checked={formData.urgency === 'standard'} onChange={handleChange} id="standard" />
                      <label htmlFor="standard" className="cursor-pointer">Standard (2-3 business days)</label>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                      <input type="radio" name="urgency" value="rush" checked={formData.urgency === 'rush'} onChange={handleChange} id="rush" />
                      <label htmlFor="rush" className="cursor-pointer">Rush (next business day) &mdash; additional fee applies</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full btn-primary py-3">Submit Repair Request</button>
                <p className="text-xs text-gray-600 text-center">
                  We&rsquo;ll confirm pricing and shipping details before any work begins.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy text-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions About a Repair?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="w-16 h-16 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">1-800-OSO-ATMS</p>
              <p className="text-sm text-gray-400 mt-2">Mon-Fri, 8am-5pm MST</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">repair@osoatm.com</p>
              <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HowItWorks({ icon, step, title, text }) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-xs font-bold text-gray-400 mb-1">STEP {step}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
