import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/productsData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';
import { Search, ShoppingBag, Check, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const { addToCart } = useApp();

  const categories = [
    'All',
    'Traps & Baits',
    'Repellents',
    'Exclusion Hardware',
    'Eco & Botanical'
  ];

  const filtered = PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.targetPests.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Professional Hardware Store
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Commercial-Grade DIY Pest Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Equip your home with the exact tamper-resistant locked bait stations, pure copper exclusion mesh, and EPA-compliant botanical perimeter concentrates trusted by certified field exterminators.
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Controls Row */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-md w-full lg:w-auto overflow-x-auto">
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

          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-700/40 text-slate-900"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded text-slate-700 focus:outline-none"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-md px-4 py-2.5 mb-6 flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span><strong>Complimentary Ground Shipping</strong> on all hardware orders over $49.00</span>
          </div>
          <Link to="/cart" className="font-semibold text-emerald-800 hover:underline">
            View Cart →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{product.category}</span>
                  <span className="flex items-center gap-1 text-amber-700 font-semibold text-[11px]">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{product.rating} ({product.reviewsCount})</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  <Link to={`/shop/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {product.targetPests.map((pest, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {pest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-medium">Price</span>
                  <span className="text-lg font-bold font-mono text-slate-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/shop/${product.id}`}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded"
                  >
                    Specs
                  </Link>
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600">No products found for this selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-emerald-800 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
