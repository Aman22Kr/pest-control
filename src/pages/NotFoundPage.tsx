import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg border border-slate-200 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8 text-emerald-800" />
        </div>

        <div>
          <span className="font-mono text-sm font-bold text-emerald-800 block">Error 404</span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1 font-display">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page or pest resource you are looking for does not exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
          >
            <span>View Services Directory</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          Need immediate extermination assistance? Call 1-800-PEST-NOW.
        </div>
      </div>
    </div>
  );
};
