import React from 'react';

export const AdBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto my-8 px-4 ${className}`} aria-label="Sponsored Information">
      <div className="border border-slate-200 bg-slate-100/70 rounded-md p-3 text-center transition-colors">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-600 mb-1 px-1">
          <span>Advertisement Partner</span>
          <span className="text-[10px]">Sponsored Notice</span>
        </div>
        <div className="py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-left bg-white rounded border border-slate-200/80">
          <div>
            <div className="text-sm font-semibold text-slate-800">
              National Homeowners Insurance Protection Partner
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Verify if your homeowner policy includes certified structural termite & rodent damage riders.
            </div>
          </div>
          <div className="shrink-0 text-xs font-medium text-emerald-800 hover:text-emerald-900 border border-emerald-700/40 px-3 py-1.5 rounded hover:bg-emerald-50 transition-colors cursor-pointer">
            Check Coverage Guidelines →
          </div>
        </div>
      </div>
    </div>
  );
};
