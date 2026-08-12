import React, { useState } from 'react';
import { Send, FileText, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { FileUploadWidget } from '../components/rfq/FileUploadWidget';
import { CATEGORIES_DATA } from '../data/categories.data';
import { BRANDS_DATA } from '../data/brands.data';
import { INDUSTRIES_DATA } from '../data/industries.data';
import type { RfqAttachment } from '../types';
import { COMPANY_CONFIG } from '../config/company.config';
import { SeoHead } from '../components/common/SeoHead';

export const RfqPage: React.FC = () => {
  const { addRfqSubmission } = useRfq();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    industry: 'Manufacturing',
    productCategory: 'PLC & Controllers',
    productOrModel: '',
    brandPreference: 'Siemens',
    quantity: '1',
    application: '',
    deliveryLocation: '',
    requiredDate: '',
    additionalRequirements: ''
  });

  const [attachments, setAttachments] = useState<RfqAttachment[]>([]);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.phone || !formData.email) {
      alert('Please fill in required fields: Full Name, Company Name, Phone, Email');
      return;
    }

    const refId = addRfqSubmission({
      type: 'Detailed RFQ',
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

  const handleReset = () => {
    setSubmittedId(null);
    setFormData({
      fullName: '',
      companyName: '',
      designation: '',
      phone: '',
      whatsapp: '',
      email: '',
      city: '',
      state: '',
      industry: 'Manufacturing',
      productCategory: 'PLC & Controllers',
      productOrModel: '',
      brandPreference: 'Siemens',
      quantity: '1',
      application: '',
      deliveryLocation: '',
      requiredDate: '',
      additionalRequirements: ''
    });
    setAttachments([]);
  };

  return (
    <>
      <SeoHead
        title="Request a B2B Automation Quote (RFQ)"
        description="Submit your industrial automation product requirement, BOM specification, or part list to AM Automation Trading for fast quotation."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              High-Conversion Procurement Form
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Request a B2B Quote (RFQ)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Fill out your procurement specifications, product model numbers, or attach your technical BOM document. Our engineering team will review and provide a formal price quote.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {submittedId ? (
            <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-10 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-white">
                  Thank You! Your Requirement Has Been Received.
                </h2>
                <p className="text-sm text-slate-300">
                  Our engineering & sales team will contact you shortly regarding reference <span className="text-blue-400 font-mono font-bold">{submittedId}</span>.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl max-w-md mx-auto text-xs text-slate-400 space-y-1">
                <p><strong className="text-slate-200">Reference ID:</strong> {submittedId}</p>
                <p><strong className="text-slate-200">Company:</strong> {formData.companyName}</p>
                <p><strong className="text-slate-200">Contact:</strong> {formData.phone} | {formData.email}</p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Submit Another RFQ
                </button>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi AM Automation Trading, I have submitted RFQ ${submittedId} for ${formData.companyName}. Please confirm receipt.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  Confirm on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
              {/* Form Section 1: Business Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>1. Contact & Business Details</span>
                </h3>

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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Purchase Manager / Engineer"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      {INDUSTRIES_DATA.map((ind) => (
                        <option key={ind.id} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="If different from Phone"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section 2: Technical & Product Specifications */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>2. Product & Technical Requirements</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Product Category</label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      {CATEGORIES_DATA.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Brand Preference</label>
                    <select
                      name="brandPreference"
                      value={formData.brandPreference}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="No Specific Brand">No Specific Brand Preference</option>
                      {BRANDS_DATA.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Product Name / Model Number
                    </label>
                    <input
                      type="text"
                      name="productOrModel"
                      value={formData.productOrModel}
                      onChange={handleChange}
                      placeholder="e.g. S7-1200 CPU 1214C or VFD 11kW"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 10 Units or 2 Panel Sets"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Delivery Location</label>
                    <input
                      type="text"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      placeholder="e.g. Chakan, Pune / GIDC Vapi"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Required By Date</label>
                    <input
                      type="date"
                      name="requiredDate"
                      value={formData.requiredDate}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Application / Additional Specifications
                  </label>
                  <textarea
                    name="additionalRequirements"
                    rows={4}
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="Provide details about machine type, motor power ratings (kW/HP), input phase, I/O count, or special operating conditions..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Form Section 3: File Attachment */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>3. Upload Specification / Purchase Requirement</span>
                </h3>

                <FileUploadWidget onFilesSelected={(files) => setAttachments(files)} />
              </div>

              {/* Submit Action */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Submissions are stored locally for immediate testing in Admin Portal.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-10 py-3.5 rounded-xl shadow-xl shadow-blue-900/50 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit RFQ</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
