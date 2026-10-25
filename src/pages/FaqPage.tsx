import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdBanner } from '../components/AdBanner';
import { Search, ChevronDown, ChevronUp, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqItem {
  category: 'Safety & Pets' | 'Treatments' | 'Warranties & Pricing' | 'Preparation';
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'Safety & Pets',
    question: 'Are your pest control treatments safe for dogs, cats, and toddlers?',
    answer: 'Yes. We strictly utilize EPA Reduced-Risk registered botanicals, micro-encapsulated formulations, and tamper-resistant locked bait stations. Once our exterior liquid barriers dry (typically 30–45 minutes in sunlight), they bond to foundation surfaces and will not transfer onto pet paws or children’s skin.'
  },
  {
    category: 'Safety & Pets',
    question: 'Will there be any chemical odors inside my living areas?',
    answer: 'No. Because 98% of pests originate from garden beds, mulch, and soil, our primary treatments are applied to the outdoor perimeter. Any interior applications use odorless gel baits or amorphous silica dust sealed safely behind electrical switch plates and plumbing voids.'
  },
  {
    category: 'Treatments',
    question: 'How does thermal bed bug heat remediation work?',
    answer: 'Our industrial electric thermal trailers elevate ambient room temperatures to 122°F–135°F for sustained hours. High-velocity axial fans circulate lethal convective heat into deep mattress cores, headboards, and wall studs, destroying 100% of eggs and adult insects in a single visit without toxic pesticide sprays.'
  },
  {
    category: 'Treatments',
    question: 'How do subterranean termite bait stations eliminate whole underground colonies?',
    answer: 'We deploy Sentricon® in-ground bait monitors containing Noviflumuron, a specialized chitin synthesis inhibitor. Foraging worker termites ingest the bait and unwittingly share it with the subterranean colony via trophallaxis. When the insects molt, they cannot synthesize exoskeletons, causing the entire colony—including the queen—to collapse.'
  },
  {
    category: 'Warranties & Pricing',
    question: 'What is covered under your 100% Pest-Free Guarantee?',
    answer: 'Under our Quarterly Home Shield and specialized termite warranties, if you observe any covered pest activity between regular visits, simply call or submit an online request. Your certified technician will return and re-treat the affected zones at zero charge to you.'
  },
  {
    category: 'Warranties & Pricing',
    question: 'Do you require long-term contracts for residential service?',
    answer: 'No long-term locks required. While quarterly service provides optimal seasonal prevention against cyclical breeding periods, you may pause or cancel your protection plan at any time without cancellation penalties.'
  },
  {
    category: 'Preparation',
    question: 'What do I need to do before the exterminator arrives?',
    answer: 'For standard perimeter treatments, simply ensure technicians have clear walking access along exterior foundation walls (move garden hoses, children’s toys, and unlocked side yard gates). For interior rodent or bed bug treatments, our coordinator will provide a clear 1-page pre-visit preparation checklist.'
  },
  {
    category: 'Preparation',
    question: 'Can I be home while the technician performs the treatment?',
    answer: 'Yes! You are welcome to be home. In fact, for routine exterior perimeter quarterly shield visits, you do not even need to be home at all as long as exterior perimeter gates are unlocked. Our technician leaves a digital service record with photos on your door.'
  }
];

export const FaqPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Safety & Pets', 'Treatments', 'Warranties & Pricing', 'Preparation'];

  const filtered = FAQS.filter((faq) => {
    const matchesCat = selectedCat === 'All' || faq.category === selectedCat;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Answers & Protocols
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Clear answers regarding our EPA-registered botanical formulations, pet safety, structural guarantees, and what to expect during your service visit.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Search & Categories */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. pets, warranty, termites, odors)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  selectedCat === cat
                    ? 'bg-emerald-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
          {filtered.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="p-5 sm:p-6 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between text-left gap-4 group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6 border-t border-slate-100 pt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching questions found for "{search}".
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="bg-emerald-950 text-white p-6 rounded-lg border border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold font-display">Have a question not listed here?</h4>
            <p className="text-xs text-emerald-200 mt-0.5">
              Speak directly with an on-duty entomologist coordinator today.
            </p>
          </div>
          <a
            href="tel:18007378669"
            className="px-5 py-2.5 text-xs font-semibold bg-white text-emerald-950 hover:bg-emerald-50 rounded transition-colors whitespace-nowrap shadow"
          >
            Call 1-800-PEST-NOW
          </a>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
