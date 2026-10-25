import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bookmark,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);
  const { toggleBookmark, isBookmarked } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Service Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The requested pest control treatment program could not be located in our directory.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-md"
        >
          View All Services
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(service.id);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Top Header / Breadcrumb */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-emerald-400">{service.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                <span>{service.category} Category</span>
                <span aria-hidden="true">·</span>
                <span>Rating {service.rating} ({service.reviewsCount} verified reviews)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300">
                {service.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => toggleBookmark(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold transition-colors border ${
                  bookmarked
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-emerald-400' : ''}`} />
                <span>{bookmarked ? 'Plan Saved' : 'Save Plan'}</span>
              </button>

              <Link
                to={`/quote?service=${service.id}`}
                className="px-5 py-2.5 rounded-md text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              >
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Details, Steps, Pricing */}
          <div className="lg:col-span-8 space-y-10">
            {/* Featured Photo */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[16/9] shadow-sm bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-sm p-4 rounded text-white text-xs">
                <span className="font-semibold block mb-0.5">Clinical Protocol Guarantee</span>
                <span className="text-slate-300">{service.tagline}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Service Overview & Environmental Safety
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-3">
                  Key Technical Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Treatment Methodology */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  The Extermination Protocol
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Step-by-Step Treatment Procedure
                </h3>
              </div>

              <div className="space-y-4">
                {service.treatmentSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-md border border-slate-100 bg-slate-50/60"
                  >
                    <div className="w-10 h-10 rounded-md bg-emerald-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  Transparent Pricing
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Service Tiers & Warranty Options
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Select a single treatment or enroll in an automated quarterly defense shield for permanent pest exclusion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.pricingTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-lg p-5 border flex flex-col justify-between relative shadow-sm ${
                      tier.badge
                        ? 'border-emerald-700 ring-1 ring-emerald-700'
                        : 'border-slate-200'
                    }`}
                  >
                    {tier.badge && (
                      <span className="absolute -top-2.5 right-4 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {tier.badge}
                      </span>
                    )}

                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {tier.name}
                      </h4>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-slate-900 font-mono">
                          {tier.price}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mb-4">
                        {tier.cadence}
                      </span>

                      <div className="text-[11px] text-slate-600 italic mb-4 pb-3 border-b border-slate-100">
                        Best for: {tier.recommendedFor}
                      </div>

                      <ul className="space-y-2 text-xs text-slate-700 mb-6">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/quote?service=${service.id}&tier=${encodeURIComponent(tier.name)}`}
                      className={`w-full py-2 text-center text-xs font-semibold rounded transition-colors ${
                        tier.badge
                          ? 'bg-emerald-800 hover:bg-emerald-700 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                      }`}
                    >
                      Book This Tier
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Targeted Pests List */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Targeted Species in This Protocol
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.targetedPests.map((pestName, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded border border-slate-200"
                  >
                    {pestName}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Frequently Asked Questions
              </h3>
              <div className="divide-y divide-slate-100">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="py-3">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-emerald-800"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed pr-6">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Booking Box & Assurance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm sticky top-24 space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase text-emerald-800 tracking-wider">
                  Direct Dispatch
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  Request Technician Visit
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Lock in today's emergency inspection slot or choose your preferred date.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Inspection Fee:</span>
                  <span className="font-semibold text-slate-900">{service.inspectionFee}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Dispatch Window:</span>
                  <span className="font-semibold text-emerald-800">{service.turnaroundTime}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Warranty Coverage:</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[170px]">
                    {service.warranty}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  to={`/quote?service=${service.id}`}
                  className="w-full block text-center py-3 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-md transition-colors shadow-sm"
                >
                  Configure & Book Inspection
                </Link>
                <a
                  href="tel:18007378669"
                  className="w-full block text-center py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  Call (800) 737-8669
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero obligation. Free cancellation up to 2 hours prior.</span>
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
