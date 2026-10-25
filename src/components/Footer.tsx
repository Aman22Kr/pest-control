import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, Clock, MapPin, Mail, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span className="font-display">Pest Control</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Professional, certified extermination and preventative Integrated Pest Management (IPM). Protecting residential homes and commercial food-grade facilities with guaranteed eco-conscious barrier technologies.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Rapid Hotline: <strong className="text-white font-mono">1-800-PEST-NOW</strong> ((800) 737-8669)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Emergency Exterminator Dispatch: 24 Hours / 7 Days</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>dispatch@pest-control.service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Extermination Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/services/termite-defense" className="hover:text-emerald-400 transition-colors">
                  Termite Inspection & Shield
                </Link>
              </li>
              <li>
                <Link to="/services/rodent-exclusion" className="hover:text-emerald-400 transition-colors">
                  Rodent Trapping & Exclusion
                </Link>
              </li>
              <li>
                <Link to="/services/bed-bug-thermal" className="hover:text-emerald-400 transition-colors">
                  Bed Bug Thermal Heat
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-defense" className="hover:text-emerald-400 transition-colors">
                  Commercial Facility Audits
                </Link>
              </li>
              <li>
                <Link to="/services/residential-defense" className="hover:text-emerald-400 transition-colors">
                  Quarterly Home Shield
                </Link>
              </li>
              <li>
                <Link to="/services/stinging-insect-removal" className="hover:text-emerald-400 transition-colors">
                  Wasp & Hornet Extraction
                </Link>
              </li>
            </ul>
          </div>

          {/* Pest Library */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Pest Library Guides
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/pests/subterranean-termites" className="hover:text-emerald-400 transition-colors">
                  Subterranean Termites
                </Link>
              </li>
              <li>
                <Link to="/pests/bed-bugs" className="hover:text-emerald-400 transition-colors">
                  Bed Bug Detection
                </Link>
              </li>
              <li>
                <Link to="/pests/norway-rats" className="hover:text-emerald-400 transition-colors">
                  Norway Rats & Mice
                </Link>
              </li>
              <li>
                <Link to="/pests/german-cockroaches" className="hover:text-emerald-400 transition-colors">
                  German Cockroaches
                </Link>
              </li>
              <li>
                <Link to="/pests/carpenter-ants" className="hover:text-emerald-400 transition-colors">
                  Carpenter Ants
                </Link>
              </li>
              <li>
                <Link to="/pests" className="hover:text-emerald-400 transition-colors font-medium text-emerald-400">
                  View All 8 Species →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Company & Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  About Pest Control
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-emerald-400 transition-colors">
                  DIY Prevention Shop
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-emerald-400 transition-colors">
                  Instant Estimate Calculator
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-emerald-400 transition-colors">
                  Pest Advisory & News
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Service Area Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom certification row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              NPMA Certified Master Entomologists
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>EPA FIFRA Compliant</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>100% Satisfaction or Money Back Guarantee</span>
          </div>

          <div className="text-slate-400">
            © {new Date().getFullYear()} Pest Control. Recreated for Aman22kr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
