import React from 'react';
import { COMPANY_CONFIG } from '../config/company.config';
import { SeoHead } from '../components/common/SeoHead';
import { useRfq } from '../context/RfqContext';
import { Cpu, ShieldCheck, Headphones, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { openQuickRfqModal } = useRfq();

  return (
    <>
      <SeoHead
        title="About Us | AM Automation Trading"
        description="Learn about AM Automation Trading - reliable B2B supplier of industrial automation products, components, and technical sourcing support."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Engineering Focus & Core Values
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              About {COMPANY_CONFIG.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Dedicated B2B sourcing partner for industrial automation products, control panel components, and application-focused engineering support.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          {/* Main Positioning Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Reliable Automation Sourcing for Industrial Machinery & Plants
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">{COMPANY_CONFIG.name}</strong> operates with a single engineering commitment: providing factories, machine builders, system integrators, and panel builders with prompt access to reliable industrial automation hardware.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you require a single replacement VFD drive, a complete PLC & HMI panel BOM, or high-precision servo positioning kits, our technical team works closely with your engineering specifications to identify compatible, cost-effective components.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xs font-bold text-white uppercase">Technical Product Guidance</h3>
                  <p className="text-[11px] text-slate-400">Assisting engineers with I/O matching, voltage specs, and drive parameter sizing.</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xs font-bold text-white uppercase">Verified Sourcing</h3>
                  <p className="text-[11px] text-slate-400">Supplying genuine components from leading international automation manufacturers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                Core Service Capabilities
              </h3>

              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Industrial Automation Products</strong>
                    PLCs, HMIs, Variable Frequency Drives (VFDs), Servo Drives, and Industrial Sensors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Control Panel Components</strong>
                    Magnetic contactors, overload relays, switchgear, 24V DC power supplies, and terminal blocks.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Machine Automation Requirements</strong>
                    Sourcing specific parts for wrapping, cutting, filling, and conveyor indexing machines.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">B2B Procurement Assistance</strong>
                    Rapid quotation response for purchase officers and project procurement teams.
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => openQuickRfqModal()}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Requirement to Sales Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-xs text-slate-400 leading-relaxed">
            <h4 className="text-sm font-bold text-slate-200 mb-2">Manufacturer Notice</h4>
            <p>{COMPANY_CONFIG.brandDisclaimer}</p>
          </div>
        </div>
      </div>
    </>
  );
};
