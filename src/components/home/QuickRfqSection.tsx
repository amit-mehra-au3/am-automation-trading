import React, { useState } from 'react';
import { Send, FileCheck, CheckCircle2, UploadCloud } from 'lucide-react';
import { useRfq } from '../../context/RfqContext';
import { FileUploadWidget } from '../rfq/FileUploadWidget';
import { RfqAttachment } from '../../types';

export const QuickRfqSection: React.FC = () => {
  const { addRfqSubmission } = useRfq();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    whatsapp: '',
    email: '',
    productOrModel: '',
    quantity: '',
    application: '',
    message: ''
  });

  const [attachments, setAttachments] = useState<RfqAttachment[]>([]);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.phone || !formData.email) {
      alert('Please fill in Name, Company, Phone, and Email');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const refId = addRfqSubmission({
        type: 'Quick RFQ',
        fullName: formData.fullName,
        companyName: formData.companyName,
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,
        email: formData.email,
        productOrModel: formData.productOrModel,
        quantity: formData.quantity || '1',
        application: formData.application,
        additionalRequirements: formData.message,
        attachments
      });

      setSubmittedRef(refId);
      setLoading(false);
    }, 400);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      whatsapp: '',
      email: '',
      productOrModel: '',
      quantity: '',
      application: '',
      message: ''
    });
    setAttachments([]);
  };

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Col: Headline & Technical Value Props */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Instant B2B Sourcing Portal</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Have an Automation Requirement?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tell us what you need. Our engineering team will help you identify the right product or technical solution for your machinery & panels.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Formal commercial quote with model-wise lead times</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Technical datasheet & wiring documentation guidance</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
                  <UploadCloud className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Supports PDF, Excel, Image & Specification upload</span>
                </div>
              </div>
            </div>

            {/* Right Col: Comprehensive 9-Field Form */}
            <div className="lg:col-span-8">
              {submittedRef ? (
                <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-8 text-center space-y-4 shadow-xl">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Requirement Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your reference RFQ ID is <span className="text-blue-400 font-mono font-bold">{submittedRef}</span>. Our technical sales representative will contact you via email / phone shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/70 p-6 rounded-xl border border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company / OEM / Contractor"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Mobile / Direct line"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 WhatsApp Number"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email <span className="text-red-400">*</span>
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Product / Requirement</label>
                      <input
                        type="text"
                        name="productOrModel"
                        value={formData.productOrModel}
                        onChange={handleChange}
                        placeholder="e.g. PLC, 7.5kW VFD, Sensor"
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
                        placeholder="e.g. 10 Units / Batch"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Application</label>
                      <input
                        type="text"
                        name="application"
                        value={formData.application}
                        onChange={handleChange}
                        placeholder="e.g. Packaging, Conveyor, Panel"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="sm:col-span-2 lg:col-span-3">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Detail</label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe exact specifications, input/output requirements, voltage ratings, or special requests..."
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* File Attachment Widget */}
                  <FileUploadWidget onFilesSelected={(files) => setAttachments(files)} />

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-8 py-3 rounded-lg shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{loading ? 'Submitting...' : 'Send Requirement'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
