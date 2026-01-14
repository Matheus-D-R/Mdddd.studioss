export type Language = 'pt' | 'en';

export interface NavLinks {
  home: string;
  services: string;
  process: string;
  investment: string;
  projects: string;
  testimonials: string;
  contact: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SmartInvestmentData {
  title: string;
  subtitle: string;
  offer: {
    label: string;
    oldPrice: string;
    newPrice: string;
    discountBadge: string;
    features: string[];
  };
  chart: {
    title: string;
    mdLabel: string;
    competitorLabel: string;
    tooltip: string;
  };
}

export interface PricingData {
  totalLabel: string;
  totalValue: string;
  promoSubtitle: string;
  promoTitle: string;
  promoPrice: string;
  savings: string;
  discount: string;
  cta: string;
}

export interface ComparisonData {
  title: string;
  description: string;
  mdLabel: string;
  competitorLabel: string;
}

export interface Translation {
  nav: NavLinks;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
  };
  techStack: string;
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  investment: SmartInvestmentData;
  pricing: PricingData;
  comparison: ComparisonData;
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  contact: {
    title: string;
    whatsappPrompt: string;
    placeholder: string;
    send: string;
    location: string;
  };
}