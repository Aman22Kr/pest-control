import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ZipChecker } from '../components/ZipChecker';
import { AdBanner } from '../components/AdBanner';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Emergency Inspection',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    showToast('Your message has been sent to our dispatch coordinator.', 'success');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              24/7 Dispatch & Support
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Contact Pest Control
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Reach our certified entomology team directly. Our rapid-response extermination fleet operates around the clock for residential emergencies and commercial facility compliance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our regional dispatch coordinator will contact you by phone or email within 15–30 minutes to review your inquiry.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Emergency Inspection',
                      message: ''
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 border border-emerald-300 rounded hover:bg-emerald-50 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Send Direct Inquiry or RFP
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below for fast estimates or schedule adjustments.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Inquiry Purpose</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                    >
                      <option value="Emergency Inspection">Emergency Extermination Dispatch</option>
                      <option value="Termite WDO Inspection">Termite / Real Estate WDO Inspection</option>
                      <option value="Commercial Facility RFP">Commercial Facility RFP & Audits</option>
                      <option value="General Question">General Pest Question / Billing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Detailed Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe pests observed, location on property, and any previous treatments..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Dispatch</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Information & Zip Checker */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-950 text-white p-6 rounded-lg border border-emerald-900 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-bold text-emerald-400 tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Rapid Response Desk</span>
              </div>
              <div>
                <a
                  href="tel:18007378669"
                  className="text-2xl font-extrabold font-mono text-white hover:text-emerald-300 transition-colors block"
                >
                  1-800-PEST-NOW
                </a>
                <span className="text-xs text-emerald-300 block mt-0.5">(800) 737-8669</span>
              </div>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Direct line to state-licensed on-call dispatchers. Priority scheduling for stinging insect nests, active rodent noises, or emergency bed bug infestations.
              </p>
            </div>

            <ZipChecker variant="card" />

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-4 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Operations & Headquarters
              </h4>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Corporate Headquarters & Central Labs: 1200 Technology Parkway, Suite 400</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Emergency Field Crew: 24/7/365</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>General Support: dispatch@pest-control.service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
