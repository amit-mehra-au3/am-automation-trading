import React from 'react';
import { Cpu, Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company.config';
import { CATEGORIES_DATA } from '../../data/categories.data';
import { useClientAuth } from '../../context/ClientAuthContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { currentUser } = useClientAuth();

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner - B2B Commitment */}
      <div className="bg-slate-900/80 border-b border-slate-800/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-white">Application-Focused Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">Engineering guidance for component selection based on machine & panel specs.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Cpu className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-white">Requirement-Based Sourcing</h4>
              <p className="text-xs text-slate-400 mt-0.5">Sourcing genuine PLCs, VFDs, HMIs, Servos & Switchgear from leading manufacturers.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-white">Fast RFQ Turnaround</h4>
              <p className="text-xs text-slate-400 mt-0.5">Dedicated engineering sales team responding to purchase inquiries & BOM requests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                AM <span className="text-blue-500">Automation</span>
              </span>
              <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-blue-500/10 text-blue-400 font-bold border border-blue-500/30 rounded uppercase">
                Trading
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {COMPANY_CONFIG.name} supplies reliable industrial automation products, components, and application-focused solutions for manufacturing plants, OEMs, system integrators, and panel builders.
          </p>

          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-xs space-y-2">
            <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{COMPANY_CONFIG.phonePrimary}</span>
            </a>
            <a href={`mailto:${COMPANY_CONFIG.emailOfficial}`} className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{COMPANY_CONFIG.emailOfficial}</span>
            </a>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{COMPANY_CONFIG.address.fullAddress}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
            Company Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-blue-400 transition-colors">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('products')} className="hover:text-blue-400 transition-colors">
                Products Catalog
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('solutions')} className="hover:text-blue-400 transition-colors">
                Industrial Solutions
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('industries')} className="hover:text-blue-400 transition-colors">
                Industries We Serve
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="hover:text-blue-400 transition-colors">
                About AM Automation
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('rfq')} className="hover:text-blue-400 transition-colors font-medium text-blue-300">
                Request a Quote (RFQ)
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-blue-400 transition-colors">
                Contact Us
              </button>
            </li>
            {!currentUser && (
              <li>
                <button onClick={() => handleLinkClick('admin')} className="hover:text-amber-400 transition-colors text-amber-400/80 font-medium">
                  Admin Lead Management
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Col 3: Product Categories */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
            Product Categories
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {CATEGORIES_DATA.slice(0, 7).map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="hover:text-blue-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span className="truncate">{cat.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 shrink-0" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Additional Categories & Legal */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
            Legal & Support
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleLinkClick('privacy')} className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('terms')} className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </button>
            </li>
            <li>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Engineering Chat</span>
              </a>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <h5 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">Operational Hours</h5>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{COMPANY_CONFIG.businessHours.weekdays}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Brand Disclaimer & Copyright */}
      <div className="bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-500 py-6 px-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="leading-relaxed text-slate-400">
            <strong className="text-slate-300 font-semibold">Disclaimer: </strong>
            {COMPANY_CONFIG.brandDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-slate-500">
            <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.</p>
            <p className="text-slate-400">High-Converting B2B Industrial Automation Portal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
