import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { AdBanner } from '../components/AdBanner';
import { ZipChecker } from '../components/ZipChecker';
import { ShieldCheck, CheckCircle2, ChevronRight, Search, PhoneCall } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Specialized'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SERVICES.filter((s) => {
    const matchesCategory = filter === 'All' || s.category === filter;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.targetedPests.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Extermination & Prevention Directory
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Professional Pest Control Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Targeted biological solutions, thermal heat treatments, and long-lasting barrier formulations engineered to protect residential and commercial structures from pest intrusion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Content Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-md w-full sm:w-auto overflow-x-auto">
            {(['All', 'Residential', 'Specialized', 'Commercial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or pests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-700/40 text-slate-900"
            />
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 relative bg-slate-100 aspect-[16/10] md:aspect-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                      <span>Rating {service.rating}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.reviewsCount} reviews</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-800 font-medium">{service.turnaroundTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      <Link to={`/services/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.subtitle}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {service.targetedPests.slice(0, 3).map((pest, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {pest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-slate-400">Guarantee</div>
                      <div className="text-xs font-semibold text-slate-800">
                        {service.warranty.split('(')[0]}
                      </div>
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                    >
                      View Treatment Plans <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">No services found matching "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setFilter('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-semibold text-emerald-800 underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <ZipChecker variant="card" />

            {/* Emergency Hotline Card */}
            <div className="bg-emerald-950 text-white rounded-lg p-6 border border-emerald-900 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-bold text-emerald-400 tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Extermination</span>
              </div>
              <h4 className="text-lg font-bold font-display">
                Suspect Active Termite or Rodent Infestation?
              </h4>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Our emergency on-call technicians are equipped with thermal cameras and lethal thermal remediation units ready for immediate deployment.
              </p>
              <div className="pt-2">
                <a
                  href="tel:18007378669"
                  className="block text-center w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-white text-emerald-950 hover:bg-emerald-50 rounded transition-colors"
                >
                  Call 1-800-PEST-NOW
                </a>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>The Pest Control Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If covered pests return between scheduled quarterly treatments, your certified technician will return and re-treat the interior and exterior perimeter at absolutely zero cost to you.
              </p>
              <div className="pt-1 text-[11px] text-slate-500">
                Backed by our 30-day money-back satisfaction pledge.
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
