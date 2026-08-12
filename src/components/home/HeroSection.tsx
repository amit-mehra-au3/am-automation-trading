import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Zap, Settings, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company.config';
import { useRfq } from '../../context/RfqContext';

import { getImageUrl } from '../../utils/imageUrl';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroProps> = ({ setActiveTab }) => {
  const { openQuickRfqModal } = useRfq();

  const equipmentBadges = [
    'PLC & Controllers',
    'Touch Screen HMIs',
    'AC Drives / VFDs',
    'Servo Motors & Drives',
    'Industrial Sensors',
    'Contactors & Relays',
    'Control Panel Components'
  ];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
      {/* Dynamic Background Technical Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tag pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>{COMPANY_CONFIG.primaryPositioning}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industrial Automation Products & Solutions for Modern Industry
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Source reliable industrial automation products and application-focused solutions for machines, manufacturing plants and industrial systems.
            </p>

            {/* Equipment Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {equipmentBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3 py-1 rounded-md font-medium flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle className="w-3 h-3 text-blue-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuickRfqModal()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-blue-400/30"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <span>Explore Products</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold px-4 py-3 flex items-center gap-2 underline decoration-emerald-500/50 underline-offset-4"
              >
                <span>WhatsApp Us Direct</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Fast RFQ Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-amber-400 shrink-0" />
                <span>B2B Engineering Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="AM Automation Trading Industrial Automation Control Panel"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-white uppercase tracking-wider text-[11px]">Industrial Products Range</span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-mono">B2B Sourcing</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  PLCs, HMIs, VFDs, Servo Drives, Sensors & Switchgear for Machine Builders & Factories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
