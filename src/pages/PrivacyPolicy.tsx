import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { COMPANY_CONFIG } from '../config/company.config';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead title="Privacy Policy" description="B2B Privacy Policy for AM Automation Trading." />
      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        <div className="bg-slate-900 border-b border-slate-800 py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-xs text-slate-400 mt-1">Last Updated: August 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-xs text-slate-300 leading-relaxed">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h2 className="text-sm font-bold text-white uppercase">1. B2B Information Collection</h2>
            <p>
              {COMPANY_CONFIG.name} respects the confidentiality of commercial inquiries, RFQs, technical specifications, and company contact details submitted through our website forms.
            </p>

            <h2 className="text-sm font-bold text-white uppercase">2. Use of Information</h2>
            <p>
              Submitted contact details (Name, Company, Phone, Email) and technical files are strictly used for quotation generation, technical feasibility assessment, customer support, and commercial communication.
            </p>

            <h2 className="text-sm font-bold text-white uppercase">3. Data Security & Storage</h2>
            <p>
              We maintain reasonable technical and organizational safeguards to prevent unauthorized access to commercial RFQ data and client contact information.
            </p>

            <h2 className="text-sm font-bold text-white uppercase">4. Contacting Us</h2>
            <p>
              If you have questions regarding our privacy practices, contact our office at <strong className="text-white">{COMPANY_CONFIG.emailSales}</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
