export interface Coffee {
  id: string;
  name: string;
  roaster: string;
  description: string;
  price: number;
  currency: string;
  images: {
    main: string;
    gallery?: string[];
  };
  details: {
    origin: string;
    altitude?: string;
    process: string;
    roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
    flavorNotes: string[];
    weight: number; // in grams
  };
  affiliateLink: string;
  inStock: boolean;
  featured?: boolean;
  rating?: {
    score: number;
    count: number;
  };
}

export interface Roaster {
  id: string;
  name: string;
  description: string;
  locations: string[];
  founded: number;
  logo: string;
  website: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  specialties: string[];
  shipping: {
    domestic: boolean;
    international: boolean;
    freeAbove?: number;
  };
  featured?: boolean;
}

export interface FlavorProfile {
  id: string;
  name: string;
  category: 'Fruity' | 'Nutty' | 'Chocolatey' | 'Spicy' | 'Floral' | 'Sweet' | 'Roasted';
  description: string;
  commonIn: string[];
}

export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeRequired: number; // in minutes
  equipment: string[];
  steps: {
    order: number;
    instruction: string;
    tip?: string;
  }[];
  recommendedRoasts: ('Light' | 'Medium' | 'Medium-Dark' | 'Dark')[];
}

export interface CoffeeQuizResult {
  preferences: {
    taste: string[];
    roastLevel: string[];
    brewingMethod: string;
  };
  recommendations: Coffee[];
}