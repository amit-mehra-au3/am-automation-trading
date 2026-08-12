export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  specSummary: string;
  partNumber: string;
}

export interface Product {
  id: string;
  name: string;
  modelNumber: string;
  category: string;
  categoryId: string;
  brand: string;
  application: string[];
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  specifications: ProductSpecification[];
  variants: ProductVariant[];
  imageUrl: string;
  isFeatured?: boolean;
  priceEstimate?: string; // Clearly labeled sample price guidance
  availability: 'In Stock' | 'Available on Request' | '2-3 Days Lead Time';
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  imageUrl: string;
  productCount: number;
  featuredProducts?: string[];
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
  categoryFocus: string;
  tagline: string;
}

export interface IndustrialSolution {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  requirement: string;
  recommendedApproach: string;
  relevantProducts: string[];
  keyBenefits: string[];
  imageUrl: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  automationBenefits: {
    machineControl: string;
    productivity: string;
    monitoring: string;
    reliability: string;
    downtimeReduction: string;
    energyEfficiency: string;
  };
  recommendedComponents: string[];
  imageUrl: string;
}

export type LeadStatus = 'New' | 'Contacted' | 'Quoted' | 'Negotiation' | 'Won' | 'Lost';
export type LeadType = 'Quick RFQ' | 'Detailed RFQ' | 'Product Price Request' | 'General Contact';

export interface RfqAttachment {
  name: string;
  size: number;
  type: string;
  dataUrl?: string;
}

export interface RfqSubmission {
  id: string;
  submissionDate: string;
  type: LeadType;
  fullName: string;
  companyName: string;
  designation?: string;
  phone: string;
  whatsapp?: string;
  email: string;
  city?: string;
  state?: string;
  industry?: string;
  productCategory?: string;
  productOrModel?: string;
  brandPreference?: string;
  quantity: string;
  application?: string;
  deliveryLocation?: string;
  requiredDate?: string;
  additionalRequirements: string;
  attachments?: RfqAttachment[];
  status: LeadStatus;
  notes?: string;
  quotedAmount?: string;
}

export interface ClientUser {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry?: string;
  gstin?: string;
  createdAt: string;
}

export interface ProductFilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedBrand: string;
  selectedApplication: string;
  selectedAvailability: string;
  sortBy: 'relevance' | 'newest' | 'name-asc' | 'name-desc';
}
