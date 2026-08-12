import React from 'react';
import { ArrowRight, Cpu, Zap, Settings, Gauge, Activity, Compass } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutions.data';
import { useRfq } from '../../context/RfqContext';

interface Props {
  setActiveTab: (tab: string) => void;
}

export const SolutionsPreview: React.FC<Props> = ({ setActiveTab }) => {
  const { openQuickRfqModal } = useRfq();

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-2 inline-block">
              Application Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Industrial Automation Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Targeted application architectures for machinery, motor control, plant diagnostics, and control panel retrofits.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
          >
            <span>View All 10 Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid showing top 6 solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.slice(0, 6).map((sol) => (
            <div
              key={sol.id}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 p-6 rounded-xl space-y-4 flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  <strong className="text-slate-300 font-semibold">Requirement: </strong>
                  {sol.requirement}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('solutions');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-slate-300 hover:text-blue-400 flex items-center gap-1"
                >
                  <span>Read Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openQuickRfqModal({ name: sol.title })}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  Discuss Requirement →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
