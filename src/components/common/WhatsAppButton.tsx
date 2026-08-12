import React, { useState } from 'react';
import { MessageSquare, Send, X, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company.config';

interface ContextualWhatsAppButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'inline';
  customMessage?: string;
  className?: string;
  icon?: boolean;
}

export const ContextualWhatsAppButton: React.FC<ContextualWhatsAppButtonProps> = ({
  text = 'WhatsApp Us',
  variant = 'primary',
  customMessage,
  className = '',
  icon = true
}) => {
  const message = encodeURIComponent(customMessage || COMPANY_CONFIG.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${message}`;

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 shadow-lg shadow-emerald-900/30';
      break;
    case 'secondary':
      variantClasses = 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 px-4 py-2.5';
      break;
    case 'outline':
      variantClasses = 'border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-4 py-2.5';
      break;
    case 'inline':
      variantClasses = 'text-emerald-400 hover:text-emerald-300 font-semibold p-0';
      break;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon && <MessageSquare className="w-4 h-4 mr-2" />}
      {text}
    </a>
  );
};

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = customText.trim() || COMPANY_CONFIG.whatsappDefaultMessage;
    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomText('');
  };

  const quickMessages = [
    'I need a quote for PLC & HMI components',
    'I need technical help with AC Drive / VFD selection',
    'Checking stock availability for industrial sensors',
    'Requirement for control panel components BOM'
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Quick Message Drawer / Popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                AM
              </div>
              <div>
                <h4 className="text-sm font-semibold">{COMPANY_CONFIG.name}</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
                  Engineering Support Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-950 text-slate-200">
            <p className="text-xs text-slate-400 mb-3">
              Direct B2B engineering consultation on WhatsApp:
            </p>

            <div className="space-y-2 mb-4">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
                    window.open(url, '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 p-2.5 rounded-lg text-slate-300 transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-1" />
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your requirement..."
                className="flex-1 bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-emerald-400/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
