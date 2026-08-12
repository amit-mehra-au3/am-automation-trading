import React from 'react';
import { FileText, SearchCheck, Cpu, Headphones, Send, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import { useRfq } from '../../context/RfqContext';

export const ProcessWorkflowSection: React.FC = () => {
  const { openQuickRfqModal } = useRfq();

  const steps = [
    {
      step: "01",
      title: "Customer Requirement",
      desc: "You submit your project requirement, part numbers, or system specification via our Quick RFQ or WhatsApp.",
      icon: <FileText className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Application Understanding",
      desc: "Our engineering team reviews operational parameters, control IO counts, motor power ratings, & panel dimensions.",
      icon: <SearchCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      step: "03",
      title: "Product Selection",
      desc: "We assist in selecting technically compatible and cost-effective PLCs, VFDs, HMIs, or sensors for your application.",
      icon: <Cpu className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "Technical Guidance",
      desc: "Clarifications on model variants, expansion modules, wiring, communication gateways, and mounting accessories.",
      icon: <Headphones className="w-5 h-5 text-amber-400" />
    },
    {
      step: "05",
      title: "Formal Quotation",
      desc: "You receive a structured B2B commercial quote with transparent unit pricing, availability, and delivery schedules.",
      icon: <Send className="w-5 h-5 text-teal-400" />
    },
    {
      step: "06",
      title: "Order Support",
      desc: "Post-purchase coordination, documentation, component fulfillment support, and responsive client assistance.",
      icon: <Truck className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 border-b border-slate-800 relative overflow-hidden">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Engineered B2B Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            From Requirement to Solution
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            AM Automation Trading is more than a product listing site. We support industrial clients at every stage of component selection and procurement.
          </p>
        </div>

        {/* 6 Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl space-y-4 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-800 group-hover:text-blue-500/30 font-mono transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Step {item.step} Complete
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a specialized machine design or control panel specification? Share your details with our engineering sales team today.
          </p>
          <button
            onClick={() => openQuickRfqModal()}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-7 py-3 rounded-xl shadow-lg shadow-blue-900/40 transition-all inline-flex items-center gap-2"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
