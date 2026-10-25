import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { PESTS } from '../data/pestsData';
import { IMAGES } from '../assets/images';
import { AdBanner } from '../components/AdBanner';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { ZipChecker } from '../components/ZipChecker';
import {
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  Search,
  CheckCircle2,
  Bug
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Residential' | 'Specialized' | 'Commercial'>('All');
  const [selectedPestQuery, setSelectedPestQuery] = useState('');

  const filteredServices = SERVICES.filter(
    (s) => activeTab === 'All' || s.category === activeTab
  );

  const matchedPests = PESTS.filter((p) =>
    p.name.toLowerCase().includes(selectedPestQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(selectedPestQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* 24/7 Emergency Dispatch Alert Ribbon */}
      <div className="bg-emerald-950 text-emerald-100 py-2 px-4 text-xs font-medium border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span>24/7 Rapid Extermination Response Team Active</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-emerald-300">Average on-site dispatch time: 45 minutes</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:18007378669" className="hover:text-white flex items-center gap-1.5 font-semibold text-amber-300">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call (800) 737-8669</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Certified Integrated Pest Management</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance font-display">
                Professional Pest Elimination & Long-Term Barrier Defense
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Licensed entomologists eliminating termites, rodents, bed bugs, and seasonal insects. We deploy eco-friendly non-repellent barrier technologies with an unconditional 100% money-back guarantee.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/quote"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-md shadow-sm transition-colors text-center"
                >
                  Schedule Free Inspection
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-center border border-slate-200"
                >
                  Explore All Treatments
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <div className="font-bold text-slate-900 text-sm font-mono tabular-nums">100%</div>
                  <div>Pest-Free Guarantee</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm font-mono tabular-nums">45 Min</div>
                  <div>Avg Emergency ETA</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm font-mono tabular-nums">25,000+</div>
                  <div>Homes Protected</div>
                </div>
              </div>
            </motion.div>

            {/* Right Media Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.heroPestControl}
                  alt="Certified Pest Control technician inspecting residential foundation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-semibold text-sm">State-Licensed & Insured Field Team</div>
                  <div className="text-slate-200 text-[11px] mt-0.5">Equipped with thermal scanners and non-toxic bait grids</div>
                </div>
              </div>

              {/* Quick Zip code overlay card */}
              <div className="mt-4">
                <ZipChecker variant="inline" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Features Strip */}
      <section className="bg-slate-900 text-slate-100 py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                <Award className="w-4 h-4" />
                <span>EPA Registered</span>
              </div>
              <p className="text-xs text-slate-400">Pet & child-friendly botanicals</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                <Clock className="w-4 h-4" />
                <span>Same-Day Service</span>
              </div>
              <p className="text-xs text-slate-400">Call before noon for same-day visit</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Pest Warranty</span>
              </div>
              <p className="text-xs text-slate-400">Free retreatments if bugs return</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Thermal Tech</span>
              </div>
              <p className="text-xs text-slate-400">100% kill bed bug heat chambers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section with Tabbed Filter */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-emerald-800 mb-1">
                Targeted Solutions
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Engineered Extermination Services
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Every structure has unique vulnerabilities. We match advanced biological and physical barriers to the specific behavior of each pest.
              </p>
            </div>

            {/* Category Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg shrink-0 overflow-x-auto">
              {(['All', 'Residential', 'Specialized', 'Commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-white text-emerald-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>Rating {service.rating}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.reviewsCount} reviews</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 font-medium">{service.turnaroundTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      <Link to={`/services/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider mb-2">
                        Key Treatments
                      </div>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {service.keyHighlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 block">Warranty</span>
                      <span className="text-xs font-semibold text-slate-800 truncate block max-w-[140px]">
                        {service.warranty.split('(')[0]}
                      </span>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-900"
                    >
                      Details & Pricing <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-900"
            >
              View Full Service Catalog with Protocol Breakdowns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Pest Identification Guide Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-800 mb-1">
              Field Diagnostics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Spotted a Pest? Identify It Immediately
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our entomological library to match signs of infestation, understand health hazards, and determine whether immediate emergency treatment is necessary.
            </p>

            {/* Quick search input */}
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by pest name (e.g. termite, rat, spider)..."
                value={selectedPestQuery}
                onChange={(e) => setSelectedPestQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
              />
            </div>
          </div>

          {/* Quick pest cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {matchedPests.slice(0, 4).map((pest) => (
              <div
                key={pest.id}
                className="overflow-hidden rounded-lg border border-slate-200 hover:border-emerald-700/60 transition-all bg-white flex flex-col justify-between shadow-sm"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={pest.image}
                    alt={pest.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-rose-950/80 backdrop-blur-sm text-rose-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                    Risk: {pest.riskLevel}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-medium text-emerald-800 uppercase tracking-wider mb-1">
                      {pest.category}
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      <Link to={`/pests/${pest.id}`} className="hover:text-emerald-800">
                        {pest.name}
                      </Link>
                    </h4>

                  <div className="text-xs text-slate-500 italic mt-0.5">
                    {pest.scientificName}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3">
                    {pest.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs text-slate-700">
                    <span className="font-semibold block text-[11px] uppercase text-slate-500 mb-1">
                      Primary Infestation Sign:
                    </span>
                    <span className="line-clamp-2">{pest.signsOfInfestation[0]}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    DIY: {pest.diyFeasibility.split('-')[0]}
                  </span>
                  <Link
                    to={`/pests/${pest.id}`}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-900"
                  >
                    View Guide →
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/pests"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-300 transition-colors"
            >
              <Bug className="w-4 h-4 text-emerald-800" />
              <span>Browse Full 8-Species Pest Field Guide</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our 4-Step Scientific IPM Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-800 mb-1">
              Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              The 4-Step Integrated Pest Management Protocol
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We never spray indiscriminately. Our scientific method targets the biological colony origin while reinforcing physical barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Comprehensive Inspection',
                desc: 'Digital moisture mapping, acoustic crawlspace detection, and entry gap tracing to locate breeding centers.'
              },
              {
                step: '02',
                title: 'Targeted Knockdown',
                desc: 'Deploying thermal eradication, non-repellent transfer formulas, or tamper-proof exclusion trapping.'
              },
              {
                step: '03',
                title: 'Perimeter Barrier Shield',
                desc: 'Armoring foundation walls 3ft up and 3ft out with micro-encapsulated EPA botanical shields.'
              },
              {
                step: '04',
                title: 'Continuous Monitoring',
                desc: 'Scheduled seasonal station inspections and free immediate re-treatments whenever pests are spotted.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="font-mono text-xl font-bold text-emerald-800 mb-2">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demonstration Section with YouTube Blank Placeholder */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-800 mb-1">
              Field Footage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              See Our Non-Toxic Thermal & Barrier Treatments in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Our technicians demonstrate how lethal heat penetrates wall voids and foundation trenches to eradicate colonies without chemical odors.
            </p>
          </div>

          {/* Blank YouTube Placeholder adhering to requirements */}
          <VideoPlaceholder
            title="Inside Our Whole-Home Thermal Eradication & Foundation Barrier System"
            duration="05:24"
            subtitle="Field Documentary: Certified Entomologist Protocol Walkthrough"
          />
        </div>
      </section>

      {/* Verified Case Studies / Proof Metrics */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                Verified Field Results
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Proven Eradication In Every Environment
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether rescuing historic wooden residences from active subterranean termite collapse or maintaining zero-pest audit compliance for Michelin-star restaurants, our protocols deliver measurable results.
              </p>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 rounded text-white transition-colors"
                >
                  Book Your Inspection Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-emerald-400 font-mono text-2xl font-bold mb-1">
                  0% Recurrence
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-3">
                  Historical Landmark Residence (Wood Frame)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  "We suffered from chronic termite swarmers for 3 years before Pest Control installed the Sentricon in-ground bait system. Within 4 weeks, activity dropped to zero and our annual re-inspections have been spotless."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-300">
                — Arthur Pendelton, Historic Preservation Officer
              </div>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-emerald-400 font-mono text-2xl font-bold mb-1">
                  100% Score
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-3">
                  Food Processing & Distribution Logistics
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  "Their electronic barcode station monitoring and monthly digital trend reports gave our QA team an unconditional clean bill of health during our annual SQF third-party health audit."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-300">
                — Claire Dupont, Facility Operations Director
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdBanner />

      {/* Ready to Protect CTA section */}
      <section className="bg-emerald-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            Stop Pests Before They Damage Your Property
          </h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Schedule an on-site evaluation today. Our certified technicians will pinpoint entry points, deliver an exact transparent quote, and guarantee total elimination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/quote"
              className="px-6 py-3 text-sm font-semibold text-emerald-950 bg-white hover:bg-slate-100 rounded-md shadow transition-colors"
            >
              Get Free Instant Quote
            </Link>
            <a
              href="tel:18007378669"
              className="px-6 py-3 text-sm font-semibold text-white border border-emerald-700 hover:bg-emerald-800 rounded-md transition-colors"
            >
              Call 1-800-PEST-NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
