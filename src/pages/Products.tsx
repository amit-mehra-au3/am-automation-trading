import React, { useState, useMemo } from 'react';
import { Search, Filter, MessageSquare, ArrowRight, CheckCircle2, RotateCcw, Cpu } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products.data';
import { CATEGORIES_DATA } from '../data/categories.data';
import { BRANDS_DATA } from '../data/brands.data';
import type { Product, ProductFilterState } from '../types';
import { useRfq } from '../context/RfqContext';
import { SeoHead } from '../components/common/SeoHead';

import { getImageUrl } from '../utils/imageUrl';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  selectedCategorySlug?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  selectedCategorySlug
}) => {
  const { openQuickRfqModal } = useRfq();

  const [filters, setFilters] = useState<ProductFilterState>({
    searchQuery: '',
    selectedCategory: selectedCategorySlug || 'all',
    selectedBrand: 'all',
    selectedApplication: 'all',
    selectedAvailability: 'all',
    sortBy: 'relevance'
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Extract all unique applications
  const allApplications = useMemo(() => {
    const apps = new Set<string>();
    PRODUCTS_DATA.forEach((p) => p.application.forEach((a) => apps.add(a)));
    return Array.from(apps);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesModel = p.modelNumber.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesApp = p.application.some((a) => a.toLowerCase().includes(q));
        if (!matchesName && !matchesModel && !matchesBrand && !matchesCategory && !matchesApp) {
          return false;
        }
      }

      // Category filter
      if (filters.selectedCategory !== 'all') {
        const catObj = CATEGORIES_DATA.find((c) => c.slug === filters.selectedCategory);
        if (catObj && p.categoryId !== catObj.id) return false;
      }

      // Brand filter
      if (filters.selectedBrand !== 'all') {
        if (p.brand.toLowerCase() !== filters.selectedBrand.toLowerCase()) return false;
      }

      // Application filter
      if (filters.selectedApplication !== 'all') {
        if (!p.application.includes(filters.selectedApplication)) return false;
      }

      // Availability filter
      if (filters.selectedAvailability !== 'all') {
        if (p.availability !== filters.selectedAvailability) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0; // relevance
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedCategory: 'all',
      selectedBrand: 'all',
      selectedApplication: 'all',
      selectedAvailability: 'all',
      sortBy: 'relevance'
    });
  };

  return (
    <>
      <SeoHead
        title="Industrial Automation Product Catalog"
        description="Search PLCs, VFDs, HMIs, Servo motors, sensors, and control panel components from AM Automation Trading."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header Title Section */}
        <div className="bg-slate-900 border-b border-slate-800 py-10 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Product Search & Filter Engine
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Industrial Automation Product Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Explore our range of programmable controllers, touch screens, variable frequency drives, servo motors, sensors, and electrical control panel components.
            </p>

            {/* Global Search Bar */}
            <div className="pt-2 max-w-3xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-slate-400" />
                <input
                  type="text"
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                  placeholder="Search by part number, model, product name (e.g. S7-1200, VFD-MS300, E2B)..."
                  className="w-full bg-slate-950 border border-slate-700 hover:border-blue-500 focus:border-blue-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
                />
                {filters.searchQuery && (
                  <button
                    onClick={() => setFilters({ ...filters, searchQuery: '' })}
                    className="absolute right-4 text-xs text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden mb-6 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">
              Showing {filteredProducts.length} Products
            </span>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:col-span-3 space-y-6 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-6 shadow-xl sticky top-24">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Filter className="w-4 h-4 text-blue-400" />
                    <span>Filter Catalog</span>
                  </h3>
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] text-slate-400 hover:text-blue-400 flex items-center gap-1"
                    title="Reset all filters"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    value={filters.selectedCategory}
                    onChange={(e) => setFilters({ ...filters, selectedCategory: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Categories ({CATEGORIES_DATA.length})</option>
                    {CATEGORIES_DATA.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brand Filter */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Brand
                  </label>
                  <select
                    value={filters.selectedBrand}
                    onChange={(e) => setFilters({ ...filters, selectedBrand: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Manufacturers</option>
                    {BRANDS_DATA.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Application Filter */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Application
                  </label>
                  <select
                    value={filters.selectedApplication}
                    onChange={(e) => setFilters({ ...filters, selectedApplication: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Applications</option>
                    {allApplications.map((app, idx) => (
                      <option key={idx} value={app}>
                        {app}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Availability Filter */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Availability
                  </label>
                  <select
                    value={filters.selectedAvailability}
                    onChange={(e) => setFilters({ ...filters, selectedAvailability: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Stock Statuses</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Available on Request">Available on Request</option>
                    <option value="2-3 Days Lead Time">2-3 Days Lead Time</option>
                  </select>
                </div>

                {/* Sorting */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Sort Order
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="name-asc">Product Name (A-Z)</option>
                    <option value="name-desc">Product Name (Z-A)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid Area */}
            <div className="lg:col-span-9 space-y-6">
              {/* Counter Bar */}
              <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl flex items-center justify-between text-xs text-slate-300">
                <div>
                  Found <strong className="text-white font-mono">{filteredProducts.length}</strong> matching products
                </div>

                {filters.selectedCategory !== 'all' && (
                  <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded font-medium border border-blue-500/20">
                    Category: {CATEGORIES_DATA.find((c) => c.slug === filters.selectedCategory)?.name}
                  </span>
                )}
              </div>

              {/* Grid or Empty State */}
              {filteredProducts.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
                  <Cpu className="w-12 h-12 mx-auto text-slate-600" />
                  <h3 className="text-lg font-bold text-white">No products found for selected criteria</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Try clearing search filters or send your custom model number requirement to our engineering sales team directly.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleResetFilters}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg"
                    >
                      Reset Filters
                    </button>
                    <button
                      onClick={() => openQuickRfqModal()}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2 rounded-lg"
                    >
                      Send Requirement Form
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
                    >
                      {/* Product Image & Badges */}
                      <div className="relative h-48 bg-slate-950 overflow-hidden flex items-center justify-center">
                        <img
                          src={getImageUrl(product.imageUrl)}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700 text-blue-400 text-[10px] font-mono px-2 py-0.5 rounded">
                            {product.brand}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {product.availability}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block mb-1">
                            Model: {product.modelNumber}
                          </span>
                          <h3
                            onClick={() => onSelectProduct(product)}
                            className="text-sm font-bold text-white hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
                          >
                            {product.name}
                          </h3>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                            {product.shortDescription}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="pt-3 border-t border-slate-800 space-y-2">
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1"
                          >
                            <span>View Specs & Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => openQuickRfqModal(product)}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-md shadow-blue-900/30"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Request Quote</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
