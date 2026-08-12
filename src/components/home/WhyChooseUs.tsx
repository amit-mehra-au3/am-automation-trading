import React from 'react';
import { ShieldCheck, Cpu, Headphones, Compass, Layers, Zap, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company.config';

export const WhyChooseUs: React.FC = () => {
  const valueProps = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Wide Range of Automation Products",
      desc: "Comprehensive product spectrum across PLCs, HMIs, VFDs, Servos, Sensors, Switchgear, and Control Panel accessories."
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: "Application-Focused Support",
      desc: "Assisting engineers and OEMs in selecting components tailored to specific machine dynamics and electrical cabinet space."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: "B2B Procurement Assistance",
      desc: "Structured RFQ handling with fast formal quotation turnarounds for purchase managers and system integrators."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Requirement-Based Product Selection",
      desc: "Evaluating input/output counts, voltage ratings, communication protocols, and load profiles to specify the right model."
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: "Technical Understanding",
      desc: "Engineering-oriented team knowledgeable in industrial automation protocols, ladder logic, motor control, and sensing."
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-400" />,
      title: "Responsive Customer Support",
      desc: "Direct communication via WhatsApp, email, and phone for fast answers to pricing, part numbers, and stock status."
    }
  ];

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Our B2B Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose AM Automation Trading?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            We focus on genuine component sourcing, application accuracy, and dependable technical support for industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/40 p-6 rounded-xl space-y-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                {prop.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Need assistance matching obsolete parts to modern equivalents? Talk to our engineers.</span>
          </div>
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi, I need assistance finding compatible replacement automation parts.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            Consult Engineering Support
          </a>
        </div>
      </div>
    </section>
  );
};
