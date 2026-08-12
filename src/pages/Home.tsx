import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { ProductCategoryGrid } from '../components/home/ProductCategoryGrid';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { SolutionsPreview } from '../components/home/SolutionsPreview';
import { IndustriesPreview } from '../components/home/IndustriesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessWorkflowSection } from '../components/home/ProcessWorkflowSection';
import { QuickRfqSection } from '../components/home/QuickRfqSection';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import type { Product } from '../types';
import { COMPANY_CONFIG } from '../config/company.config';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (slug: string) => void;
  onSelectProduct?: (product: Product) => void;
}

export const HomePage: React.FC<HomeProps> = ({
  setActiveTab,
  onSelectCategory,
  onSelectProduct
}) => {
  const { openQuickRfqModal } = useRfq();

  return (
    <>
      <SeoHead
        title="Industrial Automation Products & Solutions"
        description="Source reliable industrial automation components, PLCs, VFDs, HMIs, Servo drives, and sensors from AM Automation Trading. Fast B2B quotes and application-focused support."
      />

      <div className="space-y-0">
        {/* 1. Hero Section */}
        <HeroSection setActiveTab={setActiveTab} />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Industrial Automation Products (Categories Grid) */}
        <ProductCategoryGrid setActiveTab={setActiveTab} onSelectCategory={onSelectCategory} />

        {/* 4. Featured Products Showcase */}
        {onSelectProduct && (
          <FeaturedProductsSection
            onSelectProduct={onSelectProduct}
            setActiveTab={setActiveTab}
          />
        )}

        {/* 5. Automation Solutions Preview */}
        <SolutionsPreview setActiveTab={setActiveTab} />

        {/* 6. Industries We Serve Preview */}
        <IndustriesPreview setActiveTab={setActiveTab} />

        {/* 7. Why AM Automation Trading */}
        <WhyChooseUs />

        {/* 8. From Requirement to Solution (Process Flow) */}
        <ProcessWorkflowSection />

        {/* 9. Quick RFQ Section */}
        <QuickRfqSection />

        {/* 10. WhatsApp / Contact CTA Banner */}
        <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span>Direct WhatsApp & Engineering Assistance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need Help Selecting an Automation Product?
            </h2>

            <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Send your bill of materials (BOM), model numbers, or application requirements to our technical team for fast pricing and model guidance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openQuickRfqModal()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-xl shadow-blue-900/50 transition-all flex items-center gap-2"
              >
                <span>Request a Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-900/40 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
              >
                <span>Contact Sales Office</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
