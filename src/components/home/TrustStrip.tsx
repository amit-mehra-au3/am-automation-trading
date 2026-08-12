import React from 'react';
import { Package, ShieldCheck, Cpu, Headphones, ArrowRight } from 'lucide-react';
import { useRfq } from '../../context/RfqContext';

export const TrustStrip: React.FC = () => {
  const { openQuickRfqModal } = useRfq();

  const trustItems = [
    {
      icon: <Package className="w-5 h-5 text-blue-400" />,
      title: "Industrial Automation Products",
      subtitle: "PLCs, VFDs, HMIs, Servo & Sensors"
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Application-Focused Support",
      subtitle: "Machine & panel specific selection"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "B2B Procurement Assistance",
      subtitle: "Structured quotes for purchasing & OEMs"
    },
    {
      icon: <Headphones className="w-5 h-5 text-purple-400" />,
      title: "Requirement-Based Solutions",
      subtitle: "Engineering guidance for components"
    }
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 p-4 rounded-xl flex items-center space-x-3.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
