import { Coffee, Roaster, FlavorProfile, BrewingMethod } from '../types';

export const coffees: Coffee[] = [
  {
    id: 'monsoon-malabar-aa',
    name: 'Monsoon Malabar AA',
    roaster: 'blue-tokai',
    description: 'A full-bodied coffee with notes of dark chocolate, spices, and a subtle earthiness. Perfect for espresso and cold brew.',
    price: 449,
    currency: 'INR',
    images: {
      main: '/images/products/monsoon-malabar.jpg',
      gallery: [
        '/images/products/monsoon-malabar-1.jpg',
        '/images/products/monsoon-malabar-2.jpg'
      ]
    },
    details: {
      origin: 'Karnataka & Kerala',
      altitude: '1,100-1,200m',
      process: 'Monsooned',
      roastLevel: 'Medium-Dark',
      flavorNotes: ['Dark Chocolate', 'Spices', 'Nuts', 'Earth'],
      weight: 250
    },
    affiliateLink: 'https://bluetokaicoffee.com/products/monsoon-malabar',
    inStock: true,
    featured: true,
    rating: {
      score: 4.5,
      count: 128
    }
  },
  {
    id: 'attikan-estate',
    name: 'Attikan Estate',
    roaster: 'third-wave',
    description: 'A bright and complex coffee with notes of orange, caramel, and brown sugar. Great for pour-over brewing.',
    price: 399,
    currency: 'INR',
    images: {
      main: '/images/products/attikan.jpg'
    },
    details: {
      origin: 'Attikan Estate, Karnataka',
      altitude: '1,500m',
      process: 'Washed',
      roastLevel: 'Light',
      flavorNotes: ['Orange', 'Caramel', 'Brown Sugar', 'Floral'],
      weight: 250
    },
    affiliateLink: 'https://thirdwavecoffee.in/products/attikan-estate',
    inStock: true,
    featured: true,
    rating: {
      score: 4.7,
      count: 86
    }
  }
];

export const roasters: Roaster[] = [
  {
    id: 'blue-tokai',
    name: 'Blue Tokai Coffee Roasters',
    description: 'One of India\'s pioneering specialty coffee roasters, focusing on single-origin coffees and maintaining direct relationships with coffee farmers.',
    locations: ['Delhi', 'Mumbai', 'Bangalore'],
    founded: 2013,
    logo: '/images/roasters/blue-tokai.jpg',
    website: 'https://bluetokaicoffee.com',
    socialMedia: {
      instagram: 'bluetokaicoffee',
      twitter: 'bluetokaicoffee',
      facebook: 'bluetokaicoffee'
    },
    specialties: ['Single Origin', 'Light Roasts', 'Cold Brew'],
    shipping: {
      domestic: true,
      international: true,
      freeAbove: 799
    },
    featured: true
  },
  {
    id: 'third-wave',
    name: 'Third Wave Coffee Roasters',
    description: 'A specialty coffee roaster committed to sourcing the finest Indian beans and roasting them to perfection.',
    locations: ['Bangalore', 'Mumbai', 'Pune'],
    founded: 2016,
    logo: '/images/roasters/third-wave.jpg',
    website: 'https://thirdwavecoffee.in',
    socialMedia: {
      instagram: 'thirdwavecoffeeroasters',
      facebook: 'thirdwavecoffeein'
    },
    specialties: ['Estate Coffee', 'Medium Roasts', 'Pour Over'],
    shipping: {
      domestic: true,
      international: false,
      freeAbove: 999
    },
    featured: true
  }
];

export const flavorProfiles: FlavorProfile[] = [
  {
    id: 'chocolate',
    name: 'Chocolate',
    category: 'Chocolatey',
    description: 'Rich, deep flavors reminiscent of cocoa and dark chocolate.',
    commonIn: ['Monsoon Malabar', 'Medium-Dark Roasts', 'Robusta Blends']
  },
  {
    id: 'citrus',
    name: 'Citrus',
    category: 'Fruity',
    description: 'Bright, zesty notes of orange, lemon, or bergamot.',
    commonIn: ['Light Roasts', 'High Altitude Arabica', 'Washed Process']
  }
];

export const brewingMethods: BrewingMethod[] = [
  {
    id: 'south-indian-filter',
    name: 'South Indian Filter Coffee',
    description: 'Traditional method using a stainless steel filter device.',
    difficulty: 'Beginner',
    timeRequired: 15,
    equipment: [
      'South Indian Coffee Filter',
      'Measuring Spoon',
      'Kettle'
    ],
    steps: [
      {
        order: 1,
        instruction: 'Add 2-3 tablespoons of coffee powder to the upper chamber',
        tip: 'Use a medium-fine grind size'
      },
      {
        order: 2,
        instruction: 'Gently press the powder with the pressing disc',
        tip: 'Don\'t press too hard'
      },
      {
        order: 3,
        instruction: 'Add hot water (not boiling) and close the lid',
        tip: 'Water temperature should be around 90°C'
      }
    ],
    recommendedRoasts: ['Medium-Dark', 'Dark']
  }
];