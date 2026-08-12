import React from 'react';
import { ArrowRight, Eye, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products.data';
import { Product } from '../../types';
import { useRfq } from '../../context/RfqContext';

import { getImageUrl } from '../../utils/imageUrl';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  setActiveTab: (tab: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  setActiveTab
}) => {
  const { openQuickRfqModal } = useRfq();

  // Pick top 6 featured products
  const featuredProducts = PRODUCTS_DATA.slice(0, 6);

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Catalog Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Industrial Automation Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              High-demand PLCs, VFDs, HMIs, Servo drives & sensor components for industrial control systems.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
          >
            <span>Explore Full Catalog ({PRODUCTS_DATA.length}+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Product Image & Badges */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={getImageUrl(product.imageUrl)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                  {product.categoryName}
                </span>

                <span className="absolute top-3 right-3 bg-slate-900/80 border border-slate-700 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full">
                  Available to Quote
                </span>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400 font-mono">
                    <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300">
                      App: {product.application}
                    </span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => {
                      onSelectProduct(product);
                      setActiveTab('products');
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => openQuickRfqModal({ productOrModel: product.name })}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/30"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Request Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
