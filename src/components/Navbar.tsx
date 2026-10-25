import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Bookmark, Menu, X, ShieldAlert } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, bookmarks } = useApp();
  const location = useLocation();

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Pest Library', path: '/pests' },
    { label: 'DIY Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-emerald-800 transition-colors"
          >
            <ShieldAlert className="w-5 h-5 text-emerald-800" />
            <span className="font-display">Pest Control</span>
          </Link>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-emerald-900 font-semibold border-b-2 border-emerald-800'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + cart & saved counters */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/saved"
              title="Saved Pests & Services"
              className="text-slate-600 hover:text-slate-900 p-1.5 transition-colors relative"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-slate-800 text-white text-[10px] rounded-full flex items-center justify-center font-mono">
                  {bookmarks.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              title="Shopping Cart"
              className="text-slate-600 hover:text-slate-900 p-1.5 transition-colors relative"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-800 text-white text-[10px] rounded-full flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/quote"
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-md hover:bg-emerald-700 active:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Get Free Quote
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden text-slate-700 hover:text-slate-900 p-1.5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              FAQ & Guidelines
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Pest Advisory Blog
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-emerald-800 rounded-md hover:bg-emerald-700"
            >
              Get Free Quote & Book Inspection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
