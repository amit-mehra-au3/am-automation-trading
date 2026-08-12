import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.config';
import { useRfq } from '../context/RfqContext';
import { SeoHead } from '../components/common/SeoHead';

export const ContactUsPage: React.FC = () => {
  const { addRfqSubmission } = useRfq();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in required fields');
      return;
    }

    addRfqSubmission({
      type: 'General Contact',
      fullName: formData.fullName,
      companyName: formData.companyName || 'N/A',
      phone: formData.phone,
      email: formData.email,
      productOrModel: formData.subject,
      quantity: '1',
      additionalRequirements: formData.message
    });

    setSubmitted(true);
  };

  const handleGetDirections = () => {
    window.open(COMPANY_CONFIG.address.googleMapsUrl, '_blank');
  };

  return (
    <>
      <SeoHead
        title="Contact Us | AM Automation Trading"
        description="Contact AM Automation Trading for industrial automation product sales, technical enquiries, and direct WhatsApp sales support."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Direct Business Communication
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Contact AM Automation Trading
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Industrial Automation Products & Solutions. Get in touch with our technical sales engineers for pricing, part numbers, and stock availability.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
                <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  Business Office & Contact Info
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200">Phone Support</h3>
                      <a
                        href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                        className="text-slate-400 hover:text-blue-400 mt-0.5 block transition-colors"
                      >
                        {COMPANY_CONFIG.phonePrimary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200">WhatsApp Engineering Sales</h3>
                      <p className="text-slate-400 mt-0.5">{COMPANY_CONFIG.whatsappFormatted}</p>
                      <a
                        href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold inline-block mt-1"
                      >
                        Start WhatsApp Chat →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-600/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200">Official Email</h3>
                      <a
                        href={`mailto:${COMPANY_CONFIG.emailOfficial}`}
                        className="text-slate-400 hover:text-blue-400 mt-0.5 block transition-colors"
                      >
                        {COMPANY_CONFIG.emailOfficial}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-600/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200">Business Address</h3>
                      <p className="text-slate-400 mt-0.5 leading-relaxed">{COMPANY_CONFIG.address.fullAddress}</p>
                      <button
                        onClick={handleGetDirections}
                        className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded border border-slate-800"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-teal-600/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200">Business Hours</h3>
                      <p className="text-slate-400 mt-0.5">{COMPANY_CONFIG.businessHours.weekdays}</p>
                      <p className="text-slate-400">{COMPANY_CONFIG.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
                <div className="h-40 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-1">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto animate-bounce" />
                    <span className="text-xs font-bold text-white block">Hisar, Haryana</span>
                    <span className="text-[10px] text-slate-400 block">{COMPANY_CONFIG.address.street}</span>
                  </div>
                </div>
                <button
                  onClick={handleGetDirections}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 rounded-lg border border-slate-700 transition-colors"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>

            {/* Right Col: Send Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  Send Enquiry
                </h2>

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-white">Enquiry Received</h3>
                    <p className="text-xs text-slate-300">
                      Thank you for contacting AM Automation Trading. Our sales team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-blue-600 text-white text-xs font-bold px-6 py-2 rounded-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name</label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Company Name"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 Phone"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.com"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Product Pricing, Part Sourcing, Panel BOM"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Details</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your query or requirement details..."
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-8 py-3 rounded-xl shadow-lg shadow-blue-900/50 transition-colors flex items-center gap-2"
                      >
                        <span>Send Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
