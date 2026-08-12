import React from 'react';
import { INDUSTRIES_DATA } from '../data/industries.data';
import { SeoHead } from '../components/common/SeoHead';
import { useRfq } from '../context/RfqContext';
import { Factory, ShieldCheck, Zap, Activity, Cpu, Gauge, Clock, MessageSquare } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { openQuickRfqModal } = useRfq();

  return (
    <>
      <SeoHead
        title="Industries We Serve | AM Automation Trading"
        description="Discover how AM Automation Trading provides industrial automation components and solutions across manufacturing, packaging, automotive, textile, and water sectors."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Sector Specialization
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Industries We Serve
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Industrial automation product selection and component supply tailored to unique operational demands across manufacturing, machinery OEMs, and utility facilities.
            </p>
          </div>
        </div>

        {/* 9 Industries Detailed Breakdown */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={ind.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{ind.name}</h2>
                    <p className="text-xs text-slate-400">{ind.description}</p>
                  </div>
                </div>

                <button
                  onClick={() => openQuickRfqModal({ name: `Industry Requirement: ${ind.name}` })}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Industry Quote</span>
                </button>
              </div>

              {/* 6 Automation Impact Pillar Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Machine Control */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Machine Control</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.machineControl}</p>
                </div>

                {/* 2. Productivity */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Productivity</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.productivity}</p>
                </div>

                {/* 3. Monitoring */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Monitoring</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.monitoring}</p>
                </div>

                {/* 4. Reliability */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Reliability</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.reliability}</p>
                </div>

                {/* 5. Downtime Reduction */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Downtime Reduction</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.downtimeReduction}</p>
                </div>

                {/* 6. Energy Efficiency */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Energy Efficiency</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.automationBenefits.energyEfficiency}</p>
                </div>
              </div>

              {/* Recommended Components */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
                  Recommended Component Spectrum:
                </span>
                {ind.recommendedComponents.map((comp, i) => (
                  <span key={i} className="bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-0.5 rounded text-[11px]">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
