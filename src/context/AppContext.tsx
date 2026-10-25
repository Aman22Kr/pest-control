import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/productsData';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteBooking {
  id: string;
  createdAt: string;
  pestType: string;
  propertyType: 'Residential' | 'Commercial';
  squareFeet: number;
  severity: 'Preventive' | 'Mild' | 'Moderate' | 'Severe Emergency';
  fullName: string;
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  preferredDate: string;
  estimatedPrice: string;
  status: 'Pending Dispatch' | 'Confirmed' | 'Technician En Route';
}

export interface OrderItem {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerName: string;
  shippingAddress: string;
  status: 'Processing' | 'Shipped';
}

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  recentPests: string[];
  addRecentPest: (pestId: string) => void;

  quotes: QuoteBooking[];
  addQuote: (quote: Omit<QuoteBooking, 'id' | 'createdAt' | 'status'>) => QuoteBooking;

  orders: OrderItem[];
  createOrder: (customer: { name: string; email: string; address: string; city: string; zip: string }) => OrderItem;

  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  dismissToast: (id: string) => void;

  checkZipCode: (zip: string) => { serviced: boolean; eta: string; district: string };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('pest_control_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pest_control_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  // 2. Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('pest_control_bookmarks');
      return stored ? JSON.parse(stored) : ['subterranean-termites', 'termite-defense'];
    } catch {
      return ['subterranean-termites', 'termite-defense'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pest_control_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // storage unavailable
    }
  }, [bookmarks]);

  // 3. Recent Pests
  const [recentPests, setRecentPests] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('pest_control_recent_pests');
      return stored ? JSON.parse(stored) : ['subterranean-termites', 'norway-rats'];
    } catch {
      return ['subterranean-termites', 'norway-rats'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pest_control_recent_pests', JSON.stringify(recentPests));
    } catch {
      // storage unavailable
    }
  }, [recentPests]);

  // 4. Quotes / Bookings
  const [quotes, setQuotes] = useState<QuoteBooking[]>(() => {
    try {
      const stored = localStorage.getItem('pest_control_quotes');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pest_control_quotes', JSON.stringify(quotes));
    } catch {
      // storage unavailable
    }
  }, [quotes]);

  // 5. Orders
  const [orders, setOrders] = useState<OrderItem[]>(() => {
    try {
      const stored = localStorage.getItem('pest_control_orders');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pest_control_orders', JSON.stringify(orders));
    } catch {
      // storage unavailable
    }
  }, [orders]);

  // 6. Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart actions
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart.`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Bookmarks
  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from saved items', 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Saved for quick reference', 'success');
        return [...prev, id];
      }
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  // Recent pests
  const addRecentPest = (pestId: string) => {
    setRecentPests((prev) => {
      const filtered = prev.filter((id) => id !== pestId);
      return [pestId, ...filtered].slice(0, 6);
    });
  };

  // Quotes
  const addQuote = (data: Omit<QuoteBooking, 'id' | 'createdAt' | 'status'>): QuoteBooking => {
    const newQuote: QuoteBooking = {
      ...data,
      id: `PC-EST-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };
    setQuotes((prev) => [newQuote, ...prev]);
    showToast(`Inspection booked! Ref: ${newQuote.id}`, 'success');
    return newQuote;
  };

  // Orders
  const createOrder = (customer: { name: string; email: string; address: string; city: string; zip: string }): OrderItem => {
    const shipping = cartTotal > 49 ? 0 : 5.99;
    const newOrder: OrderItem = {
      id: `PC-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      items: [...cart],
      subtotal: cartTotal,
      shipping,
      total: cartTotal + shipping,
      customerName: customer.name,
      shippingAddress: `${customer.address}, ${customer.city} ${customer.zip}`,
      status: 'Processing'
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    showToast(`Order confirmed! Order #${newOrder.id}`, 'success');
    return newOrder;
  };

  // Zip Code checker
  const checkZipCode = (zip: string) => {
    const clean = zip.trim().replace(/\D/g, '');
    if (clean.length < 5) {
      return { serviced: false, eta: 'Invalid zip code format', district: 'Unknown' };
    }
    // High-coverage simulation for any standard 5-digit US postal code
    const firstDigit = parseInt(clean.charAt(0), 10);
    const districts = [
      'Northeast Metro Metro Unit',
      'Mid-Atlantic Fleet',
      'Southeast Coastal Hub',
      'Midwest Central Branch',
      'Great Lakes Division',
      'Southwest Regional Unit',
      'Rocky Mountain Field Team',
      'Pacific Northwest Depot',
      'California West Coast Fleet',
      'Pacific Southwest Hub'
    ];
    return {
      serviced: true,
      eta: 'Immediate 2–4 Hour Dispatch Available',
      district: districts[firstDigit] || 'Regional Metro Hub'
    };
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        recentPests,
        addRecentPest,
        quotes,
        addQuote,
        orders,
        createOrder,
        toasts,
        showToast,
        dismissToast,
        checkZipCode
      }}
    >
      {children}

      {/* Floating Toast Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-md shadow-lg border text-sm flex items-center justify-between gap-3 transition-all ${
              toast.type === 'success'
                ? 'bg-emerald-950 text-emerald-50 border-emerald-800'
                : toast.type === 'warning'
                ? 'bg-amber-950 text-amber-50 border-amber-800'
                : 'bg-slate-900 text-slate-100 border-slate-700'
            }`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
