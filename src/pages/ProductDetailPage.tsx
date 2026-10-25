import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Truck,
  RotateCcw
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useApp();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertTriangle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Hardware Item Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The requested pest prevention product could not be located.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-md"
        >
          Return to DIY Store
        </Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumb Header */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/shop" className="hover:text-white">DIY Shop</Link>
            <span aria-hidden="true">/</span>
            <span className="text-emerald-400">{product.name}</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {product.rating} ({product.reviewsCount} verified reviews)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Product Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product Details & Specs */}
          <div className="lg:col-span-8 space-y-8">
            {/* Product Photo */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[16/10] shadow-sm bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                {product.category}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Product Description & Mechanics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-3">
                  Technical Specifications
                </h4>
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                Recommended Application & Placement Guidelines
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.usageInstructions}
              </p>
            </div>

            {/* Safety Warning Box */}
            <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Environmental & Handling Notice</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {product.safetyNote}
              </p>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm sticky top-24 space-y-6">
              <div>
                <span className="text-[10px] uppercase text-slate-400 font-semibold block">Retail Price</span>
                <div className="text-3xl font-extrabold font-mono text-slate-900">
                  ${product.price.toFixed(2)}
                </div>
                <div className="text-xs text-emerald-700 font-medium mt-1">
                  In Stock · Ready for Immediate Ground Dispatch
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart / Buy now buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="w-full py-3 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {quantity} to Cart</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-md transition-colors"
                >
                  Instant Checkout Now
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Free Shipping on orders $49+</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>30-Day Hassle-Free Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>EPA Registered & Commercial Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
