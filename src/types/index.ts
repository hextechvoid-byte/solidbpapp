// Service types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  category: 'reparatie' | 'coating' | 'waterdicht' | 'industrieel' | 'woonbeton' | 'gietvloer';
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faq: FAQ[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Sector types
export interface Sector {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  applications: string[];
  benefits: string[];
  caseStudies: CaseStudy[];
  metaTitle: string;
  metaDescription: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  location: string;
  image: string;
}

// Project types
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  images: string[];
  completionDate: string;
  clientName?: string;
  testimonial?: Testimonial;
}

export interface Testimonial {
  name: string;
  company?: string;
  rating: number;
  text: string;
  image?: string;
}

// Location types
export interface Location {
  id: string;
  slug: string;
  name: string;
  description: string;
  services: string[];
  nearbyLocations: string[];
  projects: Project[];
  metaTitle: string;
  metaDescription: string;
}

// Form types
export interface QuoteFormData {
  service: string;
  projectType: 'woning' | 'commercieel' | 'industrieel' | '';
  surfaceArea: number;
  floorCondition: string;
  timeline: string;
  address: string;
  postalCode: string;
  city: string;
  accessibility: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  preferredContact: 'telefoon' | 'email';
  additionalInfo: string;
  foundVia: string;
  photos?: FileList;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

// Company info
export interface CompanyInfo {
  name: string;
  legalName: string;
  description: string;
  url: string;
  logo: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    country: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  openingHours: string;
  priceRange: string;
}
