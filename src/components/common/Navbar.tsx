import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, Search, Menu, X, ShieldAlert, Cpu, ChevronDown, ArrowRight, User } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company.config';
import { useRfq } from '../../context/RfqContext';
import { useClientAuth } from '../../context/ClientAuthContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const { openQuickRfqModal, leads } = useRfq();
  const { currentUser } = useClientAuth();

  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About Us' },
    { id: 'rfq', label: 'Request a Quote', highlight: true },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 text-slate-100 shadow-2xl">
      {/* Top Bar - Contact & B2B Trust */}
      <div className="bg-slate-900 border-b border-slate-800/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_CONFIG.phonePrimary}</span>
            </a>
            <a href={`mailto:${COMPANY_CONFIG.emailOfficial}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors hidden sm:flex">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_CONFIG.emailOfficial}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_CONFIG.businessHours.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {/* Client Portal Link */}
            <button
              onClick={() => handleNavClick('client')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border transition-all flex items-center gap-1.5 ${
                activeTab === 'client'
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : currentUser
                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              <User className="w-3 h-3 text-emerald-400" />
              <span>{currentUser ? currentUser.companyName : 'Client Portal'}</span>
            </button>

            {/* Direct Admin Portal link badge */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border transition-all flex items-center gap-1.5 ${
                activeTab === 'admin'
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              <Cpu className="w-3 h-3 text-blue-400" />
              <span>Admin Portal</span>
              {newLeadsCount > 0 && (
                <span className="px-1.5 py-0.2 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded-full animate-pulse">
                  {newLeadsCount} New
                </span>
              )}
            </button>

            {/* Quick WhatsApp Link */}
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 text-[11px]"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-0.5 shadow-lg shadow-blue-900/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-white uppercase font-sans">
                AM <span className="text-blue-500">Automation</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 bg-blue-500/10 text-blue-400 font-bold border border-blue-500/30 rounded uppercase tracking-wider">
                Trading
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block tracking-wide">
              {COMPANY_CONFIG.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => item.hasDropdown && setProductsDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  activeTab === item.id
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                    : item.highlight
                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
              </button>
            </div>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('products')}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Search Products Catalog"
          >
            <Search className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => openQuickRfqModal()}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-blue-400/30"
          >
            <span>Quick RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuickRfqModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              Request a Quote (RFQ)
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 rounded-lg text-xs text-center border border-slate-700 flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Admin Lead Dashboard ({newLeadsCount} New)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
