import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';
import {
  ShoppingBag,
  Trash2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Truck,
  CreditCard,
  PackageCheck
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, createOrder } = useApp();
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  // Checkout Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const discountAmount = discountApplied ? cartTotal * 0.1 : 0;
  const shippingFee = cartTotal > 49 || cartTotal === 0 ? 0 : 5.99;
  const finalTotal = Math.max(0, cartTotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'PESTFREE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid promo code. Try "PESTFREE10" for 10% off.');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.zip) {
      alert('Please fill in all shipping details.');
      return;
    }
    const order = createOrder(formData);
    setCompletedOrder(order);
    setShowCheckoutModal(false);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Shopping Cart & Checkout
            </div>
            <h1 className="text-3xl font-extrabold font-display tracking-tight text-white">
              Hardware Order Summary
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {completedOrder ? (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-emerald-300 shadow-md text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <PackageCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                Order Confirmed
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Thank you, {completedOrder.customerName}!
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Reference ID: {completedOrder.id}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              Your order has been logged and queued for warehouse packing. A confirmation receipt has been sent to your email with tracking details.
            </p>

            <div className="bg-slate-50 p-4 rounded text-left text-xs space-y-2 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Destination:</span>
                <span className="font-semibold text-slate-800">{completedOrder.shippingAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Billed:</span>
                <span className="font-bold font-mono text-emerald-900">${completedOrder.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Delivery:</span>
                <span className="text-slate-800 font-medium">2–3 Business Days via Ground Priority</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/shop"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded hover:bg-emerald-700 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-lg border border-slate-200 max-w-xl mx-auto space-y-4">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">Your Cart is Currently Empty</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Explore our catalog of professional tamper-resistant bait stations, exclusion copper rolls, and botanical repellent concentrates.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
              >
                Browse DIY Shop Hardware <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Cart Items */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-emerald-800 tracking-wider">
                        {item.product.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        <Link to={`/shop/${item.product.id}`} className="hover:text-emerald-800">
                          {item.product.name}
                        </Link>
                      </h4>
                      <div className="text-xs font-mono text-slate-500">
                        ${item.product.price.toFixed(2)} each
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end sm:self-auto">
                      {/* Quantity adjuster */}
                      <div className="flex items-center border border-slate-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-mono font-bold text-slate-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-20 text-right font-mono font-bold text-sm text-slate-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <button
                  onClick={clearCart}
                  className="hover:text-rose-600 underline"
                >
                  Clear all items
                </button>
                <Link to="/shop" className="hover:text-emerald-800 underline">
                  ← Continue shopping
                </Link>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-slate-900">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs border-b border-slate-100 pb-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span className="font-mono text-slate-900 font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-800">
                      <span>Promo Discount (10% off):</span>
                      <span className="font-mono font-semibold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping:</span>
                    <span className="font-mono text-slate-900 font-semibold">
                      {shippingFee === 0 ? 'FREE (Over $49)' : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (try PESTFREE10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded uppercase text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded"
                  >
                    Apply
                  </button>
                </form>

                {/* Total */}
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-sm font-bold text-slate-900">Estimated Total:</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-950">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 rounded-md transition-colors shadow-sm"
                >
                  Proceed to Secure Checkout
                </button>

                <div className="pt-2 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>30-Day Money-Back Guarantee on all Hardware</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">Fast Checkout</span>
                <h3 className="text-lg font-bold text-slate-900">Shipping & Order Details</h3>
              </div>
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Email Address (for tracking)</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="123 Oak Grove Rd"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Springfield"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    placeholder="90210"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Total Billed:</span>
                <span className="font-mono font-bold text-sm text-emerald-900">${finalTotal.toFixed(2)}</span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowCheckoutModal(false)}
                  className="flex-1 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 rounded shadow"
                >
                  Complete Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
