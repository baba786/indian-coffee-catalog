// Simplified type definitions for Indian Coffee Catalog

export interface Coffee {
  id: string;
  name: string;
  roaster: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  details: {
    origin: string;
    roastLevel: 'Light' | 'Medium' | 'Dark';
    flavorNotes: string[]; // Limited to 3 max
    strength: number; // 1-5 scale
    acidity: number; // 1-5 scale
    body: number; // 1-5 scale
  };
  buyLink: string;
  inStock: boolean;
  featured?: boolean;
  rating?: number; // Simple 1-5 scale
  forBeginners?: boolean;
}

export interface Roaster {
  id: string;
  name: string;
  description: string;
  location: string; // Simplified to primary location
  logo: string;
  website: string;
  specialties: string[]; // Limited to 3 key specialties
  priceRange: string; // e.g. "₹400 - ₹800"
  featured?: boolean;
}

export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeRequired: number; // in minutes
  equipment: string[]; // Essential equipment only
  steps: {
    order: number;
    instruction: string;
    tip?: string;
    duration?: number; // in seconds, added back for compatibility
  }[];
  suitableFor: string[]; // Types of coffee that work well with this method
  imageUrl: string;
}

export interface CoffeeQuizResult {
  preferences: {
    taste: string;
    brewingMethod: string;
  };
  recommendations: Coffee[];
}