import React from 'react';
import { Link } from 'react-router-dom';
import { AdBanner } from '../components/AdBanner';
import {
  ShieldCheck,
  Award,
  Users,
  Leaf,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              About Pest Control
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Scientific Extermination. Environmental Discipline.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded on the belief that effective pest management does not require hazardous indoor chemicals, Pest Control combines entomological research with structural exclusion carpentry.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Our Mission & Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
              Our Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Protecting Homes Without Compromising Family Safety
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Traditional pest control historically relied on broadcast indoor spraying of synthetic pesticides. At Pest Control, we adhere strictly to the National Pest Management Association’s Integrated Pest Management (IPM) guidelines.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We locate the colony source outdoors, seal entry points with chew-resistant copper and galvanized steel, and apply micro-encapsulated perimeter barriers around the foundation exterior. This stops 98% of pests before they ever step foot inside your living spaces.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <Leaf className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">GreenPro Certified</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Exclusively using EPA-compliant reduced-risk materials safe around infants and pets.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <Award className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Master Entomologists</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Field staff undergoes 200+ hours of continuous university entomology training.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Our Standards at a Glance
              </h3>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">30-Day Money-Back Guarantee</strong>
                    <span className="text-slate-600">If you are unsatisfied with results after two treatments, we refund 100% of your service fee.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Permanent Exclusion Carpentry</strong>
                    <span className="text-slate-600">We don’t just set traps; we seal foundation weep holes, pipes, and attic gaps with copper mesh.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Zero Odor & Non-Staining</strong>
                    <span className="text-slate-600">Our botanical and thermal remediation treatments leave no lingering chemical smells or furniture stains.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/quote"
                  className="w-full block text-center py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                >
                  Schedule an Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Entomology Team */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
              Technical Staff
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 font-display">
              Meet Our Board-Certified Entomology Leadership
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Experienced structural biologists steering treatment protocols across commercial and residential sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Jason Lee, Ph.D.',
                title: 'Director of Entomology & Research',
                bio: 'Doctorate in Urban Entomology with 18 years specializing in subterranean termite foraging behavior and non-repellent barrier transfers.',
                creds: 'BCE Certified · NPMA Advisory Board'
              },
              {
                name: 'Marcus Vance, M.S.',
                title: 'Head of Rodent Exclusion & Structural Biology',
                bio: 'Specialist in commensal rodent exclusion engineering, thermal telemetry audits, and agricultural warehouse food-safety compliance.',
                creds: 'Licensed Master Structural Pest Inspector'
              },
              {
                name: 'Elena Gomez',
                title: 'Lead Operations & Commercial Compliance Officer',
                bio: 'Oversees third-party food audit protocols for Michelin-starred dining, regional bakeries, and automated cold-storage facilities.',
                creds: 'HACCP & SQF Certified Auditor'
              }
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-display text-base">
                  {member.name.split(' ')[1]?.[0] || 'P'}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{member.name}</h4>
                  <div className="text-xs font-medium text-emerald-800">{member.title}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  {member.creds}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
