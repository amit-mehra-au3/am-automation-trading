import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, ShieldCheck, CheckCircle2, Cpu, Phone, Layers, Info } from 'lucide-react';
import type { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products.data';
import { useRfq } from '../context/RfqContext';
import { COMPANY_CONFIG } from '../config/company.config';
import { SeoHead } from '../components/common/SeoHead';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (p: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onSelectProduct
}) => {
  const { openQuickRfqModal } = useRfq();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0].id : ''
  );

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.categoryId === product.categoryId || p.brand === product.brand)
  ).slice(0, 3);

  const currentVariantObj = product.variants?.find((v) => v.id === selectedVariant);

  const whatsappMessage = encodeURIComponent(
    `Hello AM Automation Trading, I would like to request product pricing and technical details for ${product.name} (Model: ${product.modelNumber}).`
  );

  return (
    <>
      <SeoHead
        title={`${product.name} (${product.modelNumber})`}
        description={`Technical details and quote request for ${product.name} (${product.modelNumber}). Source from AM Automation Trading.`}
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Top Breadcrumb Navigation */}
        <div className="bg-slate-900 border-b border-slate-800 py-4 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={onBack}
              className="text-xs font-semibold text-slate-300 hover:text-blue-400 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Product Catalog</span>
            </button>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Category: {product.category}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
          {/* Main Product Specs Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />

                <div className="absolute top-6 left-6 flex flex-col gap-1.5">
                  <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700 text-blue-400 text-xs font-mono font-bold px-3 py-1 rounded-md">
                    {product.brand}
                  </span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Sample Spec Notice */}
              <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-[11px] text-slate-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">Technical Note:</strong> Specifications shown below are verified demo specifications. Final manufacturer datasheets and exact part revision codes are confirmed upon RFQ submission.
                </span>
              </div>
            </div>

            {/* Right Product Overview & 3 CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded font-bold border border-blue-500/20">
                    Model: {product.modelNumber}
                  </span>
                  <span className="text-xs text-slate-400">Category: {product.category}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Applications Tags */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Target Industrial Applications
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.application.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-900 text-slate-300 border border-slate-800 px-3 py-1 rounded-lg"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Variants Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Available Variants / Configuration
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.variants.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVariant(v.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedVariant === v.id
                            ? 'bg-blue-600/15 border-blue-500 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span>{v.name}</span>
                          <span className="text-[10px] font-mono text-blue-400">{v.partNumber}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{v.specSummary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3 Main B2B Conversion CTA Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* CTA 1: Request a Quote */}
                  <button
                    onClick={() => openQuickRfqModal(product)}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 border border-blue-400/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Request a Quote</span>
                  </button>

                  {/* CTA 2: Get Product Price */}
                  <button
                    onClick={() => openQuickRfqModal(product)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Product Price</span>
                  </button>

                  {/* CTA 3: Talk to an Automation Expert */}
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-3.5 px-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Talk to Expert</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Direct B2B engineering consultation & stock verification
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Specifications Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-800">
            {/* Key Features */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span>Key Product Features</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                {product.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table (Clearly marked demo specs) */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-400" />
                  <span>Technical Specifications</span>
                </h3>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                  Sample Data Sheet
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <tbody>
                    {product.specifications.map((spec, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-slate-950/60' : 'bg-slate-900'}
                      >
                        <td className="py-2.5 px-4 font-semibold text-slate-300 w-2/5 border-b border-slate-800/60">
                          {spec.name}
                        </td>
                        <td className="py-2.5 px-4 text-slate-200 font-mono border-b border-slate-800/60">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-slate-800">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Related Industrial Products
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="bg-slate-900 border border-slate-800 hover:border-blue-500/40 p-4 rounded-xl cursor-pointer transition-all duration-200 space-y-3 group"
                  >
                    <div className="h-40 bg-slate-950 rounded-lg overflow-hidden relative">
                      <img
                        src={rel.imageUrl}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 block">{rel.brand}</span>
                      <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">{rel.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
