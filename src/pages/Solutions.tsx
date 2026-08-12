import React from 'react';
import { SOLUTIONS_DATA } from '../data/solutions.data';
import { SeoHead } from '../components/common/SeoHead';
import { useRfq } from '../context/RfqContext';
import { Cpu, CheckCircle2, MessageSquare, Layers } from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  const { openQuickRfqModal } = useRfq();

  return (
    <>
      <SeoHead
        title="Industrial Automation Solutions"
        description="Explore engineering automation solutions for machine control, factory systems, motor speed regulation, PLCs, and VFDs."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Application Architectures
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Industrial Automation Solutions
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Tailored application engineering approaches for machinery OEMs, manufacturing plants, motor control panels, and process facilities.
            </p>
          </div>
        </div>

        {/* 10 Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS_DATA.map((sol) => (
              <div
                key={sol.id}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Solution Architecture
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white tracking-tight">{sol.title}</h2>

                  {/* 1. Typical Industrial Requirement */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      1. Typical Industrial Requirement
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{sol.requirement}</p>
                  </div>

                  {/* 2. Recommended Automation Approach */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      2. Recommended Automation Approach
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{sol.recommendedApproach}</p>
                  </div>

                  {/* 3. Relevant Products */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>3. Recommended Component Spectrum</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {sol.relevantProducts.map((prod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 pt-2">
                    {sol.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Discuss Your Requirement CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Engineering consultation</span>
                  <button
                    onClick={() => openQuickRfqModal({ name: sol.title })}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-blue-900/40 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Discuss Your Requirement</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
