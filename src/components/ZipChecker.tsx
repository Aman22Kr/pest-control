import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ZipChecker: React.FC<{ variant?: 'card' | 'inline' }> = ({ variant = 'card' }) => {
  const [zipInput, setZipInput] = useState('');
  const [result, setResult] = useState<{ serviced: boolean; eta: string; district: string } | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const { checkZipCode } = useApp();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const res = checkZipCode(zipInput);
    setResult(res);
    setHasChecked(true);
  };

  if (variant === 'inline') {
    return (
      <div className="w-full">
        <form onSubmit={handleCheck} className="flex items-center gap-2 max-w-md">
          <input
            type="text"
            placeholder="Enter your 5-digit ZIP"
            value={zipInput}
            maxLength={5}
            onChange={(e) => {
              setZipInput(e.target.value);
              setHasChecked(false);
            }}
            className="flex-1 px-3 py-2 text-sm bg-white border border-slate-300 rounded text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors whitespace-nowrap"
          >
            Check Service
          </button>
        </form>
        {hasChecked && result && (
          <div className="mt-2 text-xs flex items-center gap-1.5 text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Service Available in {result.district} ({result.eta})</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
      <div className="text-xs uppercase font-medium tracking-wider text-emerald-800 mb-1">
        Service Area Dispatch
      </div>
      <h4 className="text-base font-semibold text-slate-900 mb-2">
        Check Local Technician Availability
      </h4>
      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
        We maintain localized rapid-response extermination fleets. Enter your 5-digit postal code to check today's dispatch slots.
      </p>

      <form onSubmit={handleCheck} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. 90210 or 10001"
            value={zipInput}
            maxLength={5}
            onChange={(e) => {
              setZipInput(e.target.value);
              setHasChecked(false);
            }}
            className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/40"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors whitespace-nowrap"
          >
            Verify ZIP
          </button>
        </div>

        {hasChecked && result && (
          <div className="pt-2 border-t border-slate-100">
            {result.serviced ? (
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-900">Direct Coverage Confirmed</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Assigned Station: {result.district} · {result.eta}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/quote?zip=${zipInput}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-800 hover:text-emerald-900"
                >
                  Schedule an emergency visit in this ZIP <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Please enter a valid 5-digit postal code to verify service.</span>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};
