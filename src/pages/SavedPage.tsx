import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/servicesData';
import { PESTS } from '../data/pestsData';
import { AdBanner } from '../components/AdBanner';
import {
  Bookmark,
  Calendar,
  Package,
  Trash2,
  ChevronRight,
  ShieldCheck,
  ClipboardList,
  AlertCircle
} from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { bookmarks, toggleBookmark, quotes, orders } = useApp();
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'quotes' | 'orders'>('bookmarks');

  // Bookmarked services and pests
  const bookmarkedServices = SERVICES.filter((s) => bookmarks.includes(s.id));
  const bookmarkedPests = PESTS.filter((p) => bookmarks.includes(p.id));

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Client Portal & Activity
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              My Saved Items & Appointments
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Review your saved pest identification guides, scheduled inspection appointments, and hardware order records.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'bookmarks'
                ? 'bg-emerald-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Pests & Services ({bookmarks.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'quotes'
                ? 'bg-emerald-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Inspection Quotes ({quotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'orders'
                ? 'bg-emerald-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Hardware Orders ({orders.length})</span>
          </button>
        </div>

        {/* Tab 1: Bookmarks */}
        {activeTab === 'bookmarks' && (
          <div className="space-y-8">
            {bookmarkedServices.length === 0 && bookmarkedPests.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-slate-200 max-w-md mx-auto space-y-3">
                <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No Saved Items Yet</h3>
                <p className="text-xs text-slate-500">
                  Bookmark treatments or pest profiles while browsing to reference them quickly here.
                </p>
                <div className="pt-2 flex justify-center gap-2">
                  <Link
                    to="/services"
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded hover:bg-emerald-700"
                  >
                    Browse Services
                  </Link>
                  <Link
                    to="/pests"
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded hover:bg-slate-200"
                  >
                    Pest Library
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {bookmarkedServices.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Saved Service Programs ({bookmarkedServices.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bookmarkedServices.map((service) => (
                        <div
                          key={service.id}
                          className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col justify-between shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                              <span>{service.category}</span>
                              <button
                                onClick={() => toggleBookmark(service.id)}
                                className="text-slate-400 hover:text-rose-600 text-[11px]"
                              >
                                Remove
                              </button>
                            </div>
                            <h4 className="text-base font-bold text-slate-900">
                              <Link to={`/services/${service.id}`} className="hover:text-emerald-800">
                                {service.title}
                              </Link>
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                              {service.subtitle}
                            </p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-emerald-800">
                              {service.turnaroundTime}
                            </span>
                            <Link
                              to={`/services/${service.id}`}
                              className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                            >
                              View Program <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {bookmarkedPests.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Saved Pest Field Guides ({bookmarkedPests.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bookmarkedPests.map((pest) => (
                        <div
                          key={pest.id}
                          className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col justify-between shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                              <span className="text-rose-800 font-semibold">Risk: {pest.riskLevel}</span>
                              <button
                                onClick={() => toggleBookmark(pest.id)}
                                className="text-slate-400 hover:text-rose-600 text-[11px]"
                              >
                                Remove
                              </button>
                            </div>
                            <h4 className="text-base font-bold text-slate-900">
                              <Link to={`/pests/${pest.id}`} className="hover:text-emerald-800">
                                {pest.name}
                              </Link>
                            </h4>
                            <p className="text-xs text-slate-500 italic mt-0.5">
                              {pest.scientificName}
                            </p>
                            <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                              {pest.description}
                            </p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-500">
                              DIY: {pest.diyFeasibility.split('-')[0]}
                            </span>
                            <Link
                              to={`/pests/${pest.id}`}
                              className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                            >
                              Field Guide <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Scheduled Quotes */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            {quotes.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-slate-200 max-w-md mx-auto space-y-3">
                <ClipboardList className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No Scheduled Appointments</h3>
                <p className="text-xs text-slate-500">
                  You have not scheduled any inspection appointments yet.
                </p>
                <div className="pt-2">
                  <Link
                    to="/quote"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded hover:bg-emerald-700"
                  >
                    Calculate Quote & Book Dispatch
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {quote.id}
                        </span>
                        <span className="text-xs text-slate-400">Created {quote.createdAt}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {quote.pestType} Inspection ({quote.propertyType})
                      </h4>
                      <p className="text-xs text-slate-600">
                        Scheduled Slot: <strong className="text-slate-800">{quote.preferredDate}</strong> at {quote.address}, {quote.zipCode}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-auto">
                      <div className="text-right">
                        <div className="text-[10px] uppercase text-slate-400">Estimated Cost</div>
                        <div className="text-sm font-bold font-mono text-slate-900">{quote.estimatedPrice}</div>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-900 font-semibold rounded">
                        {quote.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Hardware Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-slate-200 max-w-md mx-auto space-y-3">
                <Package className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No Past Orders</h3>
                <p className="text-xs text-slate-500">
                  Hardware purchases made in the DIY Store will appear here with fulfillment status.
                </p>
                <div className="pt-2">
                  <Link
                    to="/shop"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded hover:bg-emerald-700"
                  >
                    Browse DIY Store
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="font-mono text-xs font-bold text-slate-900">{order.id}</span>
                        <span className="text-xs text-slate-400 ml-3">Placed on {order.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">
                          {order.status}
                        </span>
                        <span className="font-mono text-sm font-bold text-slate-900">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      {order.items.map((item: any, i: number) => (
                        <div key={i} className="flex justify-between text-slate-700">
                          <span>{item.quantity}x {item.product.name}</span>
                          <span className="font-mono">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500">
                      Destination: {order.shippingAddress} (Recipient: {order.customerName})
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
