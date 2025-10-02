export interface Product {
  id: string;
  name: string;
  description: string;
  materials: string[];
  sizes: string[];
  features: string[];
  category: string;
  categoryId: string;
  slug: string;
  images?: string[];
  specifications?: {
    weight?: string;
    thickness?: string;
    stretch?: string;
    care?: string[];
  };
  pricing?: {
    moq?: number;
    leadTime?: string;
    sampleAvailable?: boolean;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface Fabric {
  name: string;
  description: string;
  properties: string[];
}

export interface ProductData {
  categories: ProductCategory[];
  fabrics: Fabric[];
  quality_standards: string[];
}

export interface QuoteRequest {
  productId: string;
  productName: string;
  quantity: number;
  sizes: string[];
  colors: string[];
  materials: string[];
  customerInfo: {
    name: string;
    email: string;
    company: string;
    phone: string;
    country: string;
  };
  message?: string;
  urgency: 'standard' | 'urgent' | 'very-urgent';
  customization?: {
    logo?: boolean;
    packaging?: boolean;
    labeling?: boolean;
  };
}