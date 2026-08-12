import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { RfqProvider } from './context/RfqContext';
import { ClientAuthProvider } from './context/ClientAuthContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsAppButton } from './components/common/WhatsAppButton';
import { QuickRfqModal } from './components/common/QuickRfqModal';

import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { ProductDetailPage } from './pages/ProductDetail';
import { SolutionsPage } from './pages/Solutions';
import { IndustriesPage } from './pages/Industries';
import { AboutUsPage } from './pages/AboutUs';
import { RfqPage } from './pages/RfqPage';
import { ContactUsPage } from './pages/ContactUs';
import { AdminDashboardPage } from './pages/AdminDashboard';
import { ClientPortalPage } from './pages/ClientPortal';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { TermsConditionsPage } from './pages/TermsConditions';
import { NotFoundPage } from './pages/NotFound';
import type { Product } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | undefined>(undefined);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categorySlug: string) => {
    setSelectedCategorySlug(categorySlug);
    setSelectedProduct(null);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    if (tab !== 'products') {
      setSelectedProduct(null);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (selectedProduct && activeTab === 'products') {
      return (
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={handleTabChange}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleSelectProduct}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            selectedCategorySlug={selectedCategorySlug}
          />
        );
      case 'solutions':
        return <SolutionsPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'about':
        return <AboutUsPage />;
      case 'rfq':
        return <RfqPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'admin':
        return <AdminDashboardPage />;
      case 'client':
        return <ClientPortalPage setActiveTab={handleTabChange} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsConditionsPage />;
      default:
        return <NotFoundPage setActiveTab={handleTabChange} />;
    }
  };

  return (
    <ToastProvider>
      <ClientAuthProvider>
        <RfqProvider>
          <div className="min-h-screen bg-slate-950 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
            <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

            <main className="flex-1">{renderContent()}</main>

            <Footer setActiveTab={handleTabChange} />

            {/* Global Floating Actions & Modals */}
            <FloatingWhatsAppButton />
            <QuickRfqModal />
          </div>
        </RfqProvider>
      </ClientAuthProvider>
    </ToastProvider>
  );
}

export default App;
