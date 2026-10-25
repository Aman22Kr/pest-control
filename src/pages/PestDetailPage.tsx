import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PESTS } from '../data/pestsData';
import { SERVICES } from '../data/servicesData';
import { PRODUCTS } from '../data/productsData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';
import {
  AlertTriangle,
  Bookmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  Bug,
  HelpCircle
} from 'lucide-react';

export const PestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pest = PESTS.find((p) => p.id === id);
  const { addRecentPest, toggleBookmark, isBookmarked } = useApp();

  useEffect(() => {
    if (pest) {
      addRecentPest(pest.id);
    }
  }, [pest, addRecentPest]);

  if (!pest) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertTriangle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Pest Record Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The requested pest profile could not be found in our scientific library.
        </p>
        <Link
          to="/pests"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-md"
        >
          View Full Pest Library
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(pest.id);
  const matchingService = SERVICES.find((s) => s.id === pest.recommendedServiceId);
  const matchingProducts = PRODUCTS.filter((pr) =>
    pr.targetPests.some((tp) => tp.toLowerCase().includes(pest.name.toLowerCase().split(' ')[0]))
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumb Header */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/pests" className="hover:text-white">Pest Library</Link>
            <span aria-hidden="true">/</span>
            <span className="text-emerald-400">{pest.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                <span>{pest.category} Classification</span>
                <span aria-hidden="true">·</span>
                <span>Risk Level: {pest.riskLevel}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                {pest.name}
              </h1>
              <p className="text-sm text-slate-300 italic">
                Scientific Designation: {pest.scientificName}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => toggleBookmark(pest.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md border transition-colors ${
                  bookmarked
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-emerald-400' : ''}`} />
                <span>{bookmarked ? 'Saved to Profile' : 'Save Identification'}</span>
              </button>

              <Link
                to={`/quote?pest=${encodeURIComponent(pest.name)}`}
                className="px-5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors"
              >
                Request Extermination Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Left Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Pest Macro Photograph */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[16/9] shadow-sm bg-slate-100">
              <img
                src={pest.image}
                alt={pest.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-sm p-3.5 rounded text-white text-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold block">{pest.name} ({pest.scientificName})</span>
                  <span className="text-slate-300 text-[11px]">Primary Habitat: {pest.habitat}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-900/80 text-rose-200 font-semibold text-[11px]">
                  Risk: {pest.riskLevel}
                </span>
              </div>
            </div>

            {/* Description & Biological Profile */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Species Overview & Biological Behavior
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pest.description}
              </p>

              {/* Physical specs table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div className="p-3 bg-slate-50 rounded">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Average Size</span>
                  <span className="font-semibold text-slate-800">{pest.size}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Appearance</span>
                  <span className="font-semibold text-slate-800">{pest.color}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Active Season</span>
                  <span className="font-semibold text-slate-800">{pest.commonSeasons}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Risk Level</span>
                  <span className="font-semibold text-rose-700">{pest.riskLevel}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-600">
                <strong className="text-slate-800">Primary Habitats:</strong> {pest.habitat}
              </div>
            </div>

            {/* Signs of Infestation */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  Diagnostic Checklist
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Signs You Have a {pest.name} Infestation
                </h3>
              </div>

              <div className="space-y-2.5">
                {pest.signsOfInfestation.map((sign, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Health and Structural Risks */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase text-rose-800 tracking-wider">
                  Hazard Assessment
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Health & Property Damage Risks
                </h3>
              </div>

              <div className="space-y-2.5">
                {pest.healthRisks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-rose-50/50 rounded border border-rose-100 text-xs text-slate-800">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prevention Guidelines */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  Preventive Protocol
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Homeowner Prevention Strategies
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                {pest.preventionTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DIY vs Professional Recommendation Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                <Info className="w-4 h-4" />
                <span>Entomologist Assessment</span>
              </div>
              <h3 className="text-xl font-bold font-display">
                DIY Feasibility: {pest.diyFeasibility}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pest.diyFeasibility.includes('Low')
                  ? 'Due to microscopic reproduction cycles, extensive underground nesting, or high venomous danger, attempting store-bought aerosol sprays often disperses colonies deeper into interior wall studs. Professional treatment is strongly recommended.'
                  : 'Early stage activity can be monitored with specialized exclusion hardware and tamper-resistant traps. However, if sightings persist after 14 days, a certified technician should install perimeter liquid barriers.'}
              </p>

              {matchingService && (
                <div className="pt-2">
                  <Link
                    to={`/services/${matchingService.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 rounded text-white transition-colors"
                  >
                    View Recommended Program: {matchingService.title} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Recommended Service & Shop Products */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recommended Service Widget */}
            {matchingService && (
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
                <div className="text-[11px] font-semibold uppercase text-emerald-800 tracking-wider">
                  Recommended Treatment Program
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {matchingService.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {matchingService.description}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-semibold text-slate-800">{matchingService.warranty.split('(')[0]}</span>
                </div>
                <Link
                  to={`/services/${matchingService.id}`}
                  className="w-full block text-center py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                >
                  View Treatment Details
                </Link>
              </div>
            )}

            {/* Quick Dispatch Box */}
            <div className="bg-emerald-950 text-white p-6 rounded-lg border border-emerald-900 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Immediate On-Site Inspection</span>
              </div>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Need immediate inspection for {pest.name}? Our technicians carry digital scopes and thermal heat trailers for rapid same-day dispatch.
              </p>
              <Link
                to={`/quote?pest=${encodeURIComponent(pest.name)}`}
                className="w-full block text-center py-2.5 text-xs font-semibold bg-white text-emerald-950 hover:bg-emerald-50 rounded transition-colors"
              >
                Schedule Free Diagnostic
              </Link>
            </div>

            {/* Related DIY Products */}
            {matchingProducts.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  DIY Prevention Hardware
                </h4>
                <div className="divide-y divide-slate-100">
                  {matchingProducts.slice(0, 2).map((prod) => (
                    <div key={prod.id} className="py-3 first:pt-0 last:pb-0 space-y-1">
                      <Link
                        to={`/shop/${prod.id}`}
                        className="text-xs font-bold text-slate-900 hover:text-emerald-800 line-clamp-1"
                      >
                        {prod.name}
                      </Link>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-700 font-semibold">${prod.price.toFixed(2)}</span>
                        <Link to={`/shop/${prod.id}`} className="text-emerald-800 font-medium hover:underline text-[11px]">
                          View Item →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
