import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { useRfq } from '../../context/RfqContext';
import { FileUploadWidget } from '../rfq/FileUploadWidget';
import type { RfqAttachment } from '../../types';
import { COMPANY_CONFIG } from '../../config/company.config';

export const QuickRfqModal: React.FC = () => {
  const { isQuickRfqOpen, closeQuickRfqModal, prefilledProduct, addRfqSubmission } = useRfq();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    industry: 'Machine Building',
    productCategory: 'PLC & Controllers',
    productOrModel: '',
    brandPreference: '',
    quantity: '1',
    application: '',
    deliveryLocation: '',
    requiredDate: '',
    additionalRequirements: ''
  });

  const [attachments, setAttachments] = useState<RfqAttachment[]>([]);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productCategory: prefilledProduct.category || prev.productCategory,
        productOrModel: prefilledProduct.name
          ? `${prefilledProduct.name} (${prefilledProduct.modelNumber || ''})`
          : prev.productOrModel,
        brandPreference: prefilledProduct.brand || prev.brandPreference
      }));
    }
  }, [prefilledProduct]);

  if (!isQuickRfqOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.phone || !formData.email) {
      alert('Please fill in required fields (Name, Company, Phone, Email)');
      return;
    }

    const refId = addRfqSubmission({
      type: 'Quick RFQ',
      fullName: formData.fullName,
      companyName: formData.companyName,
      designation: formData.designation,
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      industry: formData.industry,
      productCategory: formData.productCategory,
      productOrModel: formData.productOrModel,
      brandPreference: formData.brandPreference,
      quantity: formData.quantity,
      application: formData.application,
      deliveryLocation: formData.deliveryLocation,
      requiredDate: formData.requiredDate,
      additionalRequirements: formData.additionalRequirements,
      attachments
    });

    setSubmittedId(refId);
  };

  const handleResetAndClose = () => {
    setSubmittedId(null);
    closeQuickRfqModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100">
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Request a B2B Quote</h3>
              <p className="text-xs text-slate-400">Fast pricing & application-focused engineering support</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedId ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Thank You! Requirement Received.</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your reference ID is <span className="text-blue-400 font-mono font-bold">{submittedId}</span>. Our engineering sales team will review your specifications and send a formal quote.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi, I just submitted RFQ ${submittedId}. Please check.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Follow up on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {prefilledProduct?.name && (
                <div className="bg-blue-950/40 border border-blue-800/60 p-3 rounded-xl text-xs text-blue-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">Product Selected:</span> {prefilledProduct.name} ({prefilledProduct.modelNumber})
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">
                    {prefilledProduct.brand}
                  </span>
                </div>
              )}

              {/* 2 Grid Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Engineering Pvt Ltd"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / Mobile <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Product / Model / Requirement
                  </label>
                  <input
                    type="text"
                    name="productOrModel"
                    value={formData.productOrModel}
                    onChange={handleChange}
                    placeholder="e.g. Siemens S7-1200 CPU or VFD 5.5kW"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5 Units or 1 Panel Lot"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Additional Requirement / Application Details
                </label>
                <textarea
                  name="additionalRequirements"
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Mention target delivery date, voltage ratings, or specific application requirements..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* File Attachment Widget */}
              <FileUploadWidget onFilesSelected={(files) => setAttachments(files)} />

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified B2B Procurement Handling</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-blue-900/50 transition-colors flex items-center gap-2"
                  >
                    <span>Submit Requirement</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
