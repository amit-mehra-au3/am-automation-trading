import React from 'react';
import { BRANDS_DATA } from '../../data/brands.data';
import { COMPANY_CONFIG } from '../../config/company.config';

export const BrandsSection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Industrial Sourcing & Component Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Automation Brands & Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Products from leading industrial automation manufacturers
          </p>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/40 p-4 rounded-xl text-center flex flex-col items-center justify-center space-y-2 transition-all duration-200 group shadow-md"
            >
              <span className="text-base font-black text-slate-200 group-hover:text-blue-400 tracking-wider font-mono uppercase">
                {brand.logoText}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold line-clamp-1">
                {brand.categoryFocus}
              </span>
            </div>
          ))}
        </div>

        {/* Clear Legal Non-Distributor Disclosure Box */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl text-center max-w-4xl mx-auto text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Brand Notice: </strong>
            {COMPANY_CONFIG.brandDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
