import React, { useEffect } from 'react';
import { COMPANY_CONFIG } from '../../config/company.config';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl
}) => {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${COMPANY_CONFIG.name}`
      : COMPANY_CONFIG.defaultSeo.title;
      
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || COMPANY_CONFIG.defaultSeo.description
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        keywords
          ? keywords.join(', ')
          : COMPANY_CONFIG.defaultSeo.keywords.join(', ')
      );
    }

    // Structured Data (JSON-LD LocalBusiness Schema)
    const schemaScriptId = 'organization-jsonld';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": COMPANY_CONFIG.name,
      "description": COMPANY_CONFIG.defaultSeo.description,
      "telephone": COMPANY_CONFIG.phonePrimary,
      "email": COMPANY_CONFIG.emailSales,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_CONFIG.address.street,
        "addressLocality": COMPANY_CONFIG.address.city,
        "addressRegion": COMPANY_CONFIG.address.state,
        "postalCode": COMPANY_CONFIG.address.postalCode,
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-18:30"
    };

    schemaScript.textContent = JSON.stringify(localBusinessSchema);
  }, [title, description, keywords, canonicalUrl]);

  return null;
};
