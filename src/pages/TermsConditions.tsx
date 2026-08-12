import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { COMPANY_CONFIG } from '../config/company.config';

export const TermsConditionsPage: React.FC = () => {
  return (
    <>
      <SeoHead title="Terms & Conditions" description="B2B Terms and Commercial Disclaimers for AM Automation Trading." />
      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        <div className="bg-slate-900 border-b border-slate-800 py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-white">Terms & Conditions</h1>
            <p className="text-xs text-slate-400 mt-1">Last Updated: August 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-xs text-slate-300 leading-relaxed">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h2 className="text-sm font-bold text-white uppercase">1. Commercial Quotes & Validity</h2>
            <p>
              All price estimates and quotations provided on this platform or via formal RFQ responses are subject to stock availability, market currency fluctuations, and formal written confirmation.
            </p>

            <h2 className="text-sm font-bold text-white uppercase">2. Brand & Trademark Notice</h2>
            <p>
              {COMPANY_CONFIG.brandDisclaimer}
            </p>

            <h2 className="text-sm font-bold text-white uppercase">3. Technical Specifications</h2>
            <p>
              Product specifications and diagrams provided on the site serve as general technical guidance. Final technical approval rests with the customer's engineering team prior to purchase order placement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
