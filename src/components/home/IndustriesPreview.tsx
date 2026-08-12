import React from 'react';
import { ArrowRight, Factory } from 'lucide-react';
import { INDUSTRIES_DATA } from '../../data/industries.data';

interface Props {
  setActiveTab: (tab: string) => void;
}

export const IndustriesPreview: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-2 inline-block">
              Sector Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Delivering reliable automation products to diverse manufacturing, OEM, process, and utility operations.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('industries');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 shrink-0"
          >
            <span>Explore All 9 Industry Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
            <div
              key={ind.id}
              onClick={() => {
                setActiveTab('industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-xl space-y-3 cursor-pointer transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                {ind.name}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {ind.description}
              </p>

              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>View Automation Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
