import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PESTS, Pest } from '../data/pestsData';
import { AdBanner } from '../components/AdBanner';
import { Search, ChevronRight, ShieldAlert, AlertTriangle } from 'lucide-react';

export const PestLibraryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Wood-Destroying', 'Rodents', 'Insects', 'Parasites', 'Stinging'];

  const filteredPests = PESTS.filter((pest) => {
    const matchesCat = selectedCategory === 'All' || pest.category === selectedCategory;
    const matchesSearch =
      pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.signsOfInfestation.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Entomology & Diagnostic Library
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Pest Identification & Field Guide
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore habits, structural hazards, health vectors, and visual identification markers for common residential and commercial invasive pests.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-md w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by pest name or signs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-700/40 text-slate-900"
            />
          </div>
        </div>

        {/* Pest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPests.map((pest) => (
            <div
              key={pest.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-medium text-slate-700">{pest.category}</span>
                  <span
                    className={`font-semibold text-[11px] px-2 py-0.5 rounded ${
                      pest.riskLevel === 'Severe'
                        ? 'bg-rose-50 text-rose-800'
                        : pest.riskLevel === 'High'
                        ? 'bg-amber-50 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Risk: {pest.riskLevel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  <Link to={`/pests/${pest.id}`}>
                    {pest.name}
                  </Link>
                </h3>
                <div className="text-xs text-slate-500 italic mb-3">
                  {pest.scientificName}
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {pest.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700 block text-[11px] uppercase">Typical Signs:</span>
                    <span className="text-slate-600 line-clamp-2">{pest.signsOfInfestation[0]}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block text-[11px] uppercase">Habitats:</span>
                    <span className="text-slate-600 truncate block">{pest.habitat}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  DIY: <strong className="text-slate-700 font-medium">{pest.diyFeasibility.split('-')[0]}</strong>
                </span>
                <Link
                  to={`/pests/${pest.id}`}
                  className="font-semibold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1"
                >
                  Full Field Guide <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPests.length === 0 && (
          <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
            <AlertTriangle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600">No pests found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-3 text-xs font-semibold text-emerald-800 underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
