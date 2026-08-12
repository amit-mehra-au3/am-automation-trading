import React from 'react';
import { ArrowRight, MessageSquare, Layers } from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/categories.data';
import { useRfq } from '../../context/RfqContext';

import { getImageUrl } from '../../utils/imageUrl';

interface Props {
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const ProductCategoryGrid: React.FC<Props> = ({ setActiveTab, onSelectCategory }) => {
  const { openQuickRfqModal } = useRfq();

  const handleCategoryClick = (categorySlug: string) => {
    if (onSelectCategory) {
      onSelectCategory(categorySlug);
    }
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
              <Layers className="w-4 h-4" />
              <span>Catalog Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Industrial Automation Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Browse our engineering product spectrum for machine manufacturing, control panel fabrication, and plant retrofits.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
          >
            <span>View All Categories ({CATEGORIES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Count Badge */}
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={getImageUrl(category.imageUrl)}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-blue-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
                  {category.productCount}+ Products
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {category.shortDesc}
                  </p>
                </div>

                {/* CTAs: View Products + Request Quote */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Products</span>
                  </button>

                  <button
                    onClick={() => openQuickRfqModal({ category: category.name })}
                    className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
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
