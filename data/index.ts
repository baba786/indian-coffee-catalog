import { Coffee, Roaster, BrewingMethod } from '../types';

export const coffees: Coffee[] = [
  {
    id: 'monsoon-malabar',
    name: 'Monsoon Malabar',
    roaster: 'blue-tokai',
    description: 'Bold coffee with low acidity, earthy notes, and spice hints. Perfect for milk-based drinks.',
    price: 449,
    currency: 'INR',
    imageUrl: '/images/products/monsoon-malabar.jpg',
    details: {
      origin: 'Karnataka & Kerala',
      roastLevel: 'Medium',
      flavorNotes: ['Spice', 'Nuts', 'Chocolate'],
      strength: 4,
      acidity: 2,
      body: 5
    },
    buyLink: 'https://bluetokaicoffee.com/products/monsoon-malabar',
    inStock: true,
    featured: true,
    rating: 4.5,
    forBeginners: true
  },
  {
    id: 'attikan-estate',
    name: 'Attikan Estate',
    roaster: 'third-wave',
    description: 'Bright and sweet coffee with citrus notes. Excellent for pour-over or filter brewing.',
    price: 399,
    currency: 'INR',
    imageUrl: '/images/products/attikan.jpg',
    details: {
      origin: 'Karnataka',
      roastLevel: 'Light',
      flavorNotes: ['Orange', 'Caramel', 'Honey'],
      strength: 3,
      acidity: 4,
      body: 2
    },
    buyLink: 'https://thirdwavecoffee.in/products/attikan-estate',
    inStock: true,
    featured: true,
    rating: 4.7
  },
  {
    id: 'parama-peaberry',
    name: 'Parama Peaberry',
    roaster: 'curious-life',
    description: 'Complex flavor with bright acidity and fruity notes. Great for coffee enthusiasts.',
    price: 499,
    currency: 'INR',
    imageUrl: '/images/products/parama.jpg',
    details: {
      origin: 'Chikmagalur',
      roastLevel: 'Light',
      flavorNotes: ['Berry', 'Floral', 'Citrus'],
      strength: 3,
      acidity: 5,
      body: 2
    },
    buyLink: 'https://curiouslife.in/products/parama-peaberry',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'vienna-roast',
    name: 'Vienna Roast',
    roaster: 'dope-coffee',
    description: 'Rich and balanced coffee with chocolate notes. Perfect for espresso and cold brew.',
    price: 425,
    currency: 'INR',
    imageUrl: '/images/products/vienna.jpg',
    details: {
      origin: 'Coorg',
      roastLevel: 'Dark',
      flavorNotes: ['Dark Chocolate', 'Caramel', 'Almond'],
      strength: 5,
      acidity: 1,
      body: 4
    },
    buyLink: 'https://dopecoffee.in/products/vienna-roast',
    inStock: true,
    rating: 4.6,
    forBeginners: true
  }
];

export const roasters: Roaster[] = [
  {
    id: 'blue-tokai',
    name: 'Blue Tokai Coffee Roasters',
    description: 'India\'s pioneering specialty coffee brand with direct relationships with coffee farmers.',
    location: 'Delhi, Mumbai, Bangalore',
    logo: '/images/roasters/blue-tokai.jpg',
    website: 'https://bluetokaicoffee.com',
    specialties: ['Single Origin', 'Cold Brew', 'Light Roasts'],
    priceRange: '₹400 - ₹800',
    featured: true
  },
  {
    id: 'third-wave',
    name: 'Third Wave Coffee Roasters',
    description: 'Café chain committed to making specialty Indian coffee accessible to everyone.',
    location: 'Bangalore, Mumbai',
    logo: '/images/roasters/third-wave.jpg',
    website: 'https://thirdwavecoffee.in',
    specialties: ['Blends', 'Medium Roasts', 'Café Experience'],
    priceRange: '₹350 - ₹600',
    featured: true
  },
  {
    id: 'curious-life',
    name: 'Curious Life Coffee',
    description: 'Boutique roastery focused on unique flavor profiles through careful roasting.',
    location: 'Bangalore',
    logo: '/images/roasters/curious-life.jpg',
    website: 'https://curiouslife.in',
    specialties: ['Light Roasts', 'Single Estate', 'Pour Over'],
    priceRange: '₹450 - ₹750'
  },
  {
    id: 'dope-coffee',
    name: 'Dope Coffee Roasters',
    description: 'Urban coffee brand with modern approach to traditional Indian coffees.',
    location: 'Mumbai',
    logo: '/images/roasters/dope-coffee.jpg',
    website: 'https://dopecoffee.in',
    specialties: ['Dark Roasts', 'Espresso Blends', 'Cold Brew'],
    priceRange: '₹400 - ₹700'
  }
];

export const brewingMethods: BrewingMethod[] = [
  {
    id: 'south-indian-filter',
    name: 'South Indian Filter',
    description: 'Traditional method using a stainless steel filter device, producing rich and strong coffee.',
    difficulty: 'Beginner',
    timeRequired: 15,
    equipment: [
      'South Indian Coffee Filter',
      'Measuring Spoon',
      'Hot Water'
    ],
    steps: [
      {
        order: 1,
        instruction: 'Add 2-3 tablespoons of medium-fine coffee to the upper chamber',
        tip: 'Don\'t tamp the coffee too hard'
      },
      {
        order: 2,
        instruction: 'Pour hot water (not boiling) and close the lid',
        tip: 'Fill just below the top rim'
      },
      {
        order: 3,
        instruction: 'Wait 10-15 minutes for coffee to drip completely',
        tip: 'Be patient, slower extraction means better flavor'
      },
      {
        order: 4,
        instruction: 'Mix with hot milk and sugar if desired',
        tip: 'Traditional ratio is 1:1 coffee to milk'
      }
    ],
    suitableFor: ['Medium-Dark Roasts', 'Dark Roasts', 'Robusta Blends'],
    imageUrl: '/images/brewing/filter.jpg'
  },
  {
    id: 'french-press',
    name: 'French Press',
    description: 'Simple immersion method that produces a full-bodied cup with rich mouthfeel.',
    difficulty: 'Beginner',
    timeRequired: 5,
    equipment: [
      'French Press',
      'Coffee Grinder',
      'Kettle',
      'Timer'
    ],
    steps: [
      {
        order: 1,
        instruction: 'Add coarse ground coffee (1:15 ratio of coffee to water)',
        tip: 'About 2 tablespoons per 8oz cup'
      },
      {
        order: 2,
        instruction: 'Pour hot water (95°C) and stir gently',
        tip: 'Make sure all grounds are wet'
      },
      {
        order: 3,
        instruction: 'Place plunger on top and wait 4 minutes',
        tip: 'Don\'t push down yet'
      },
      {
        order: 4,
        instruction: 'Slowly press the plunger down and serve immediately',
        tip: 'Don\'t leave coffee in the press after plunging'
      }
    ],
    suitableFor: ['Medium Roasts', 'Dark Roasts', 'Full-bodied coffees'],
    imageUrl: '/images/brewing/french-press.jpg'
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    description: 'Manual drip method that highlights flavor clarity and brightness in coffee.',
    difficulty: 'Intermediate',
    timeRequired: 3,
    equipment: [
      'Pour Over Dripper',
      'Filter Paper',
      'Gooseneck Kettle',
      'Coffee Grinder',
      'Scale'
    ],
    steps: [
      {
        order: 1,
        instruction: 'Place filter in dripper and rinse with hot water',
        tip: 'This removes paper taste and preheats equipment'
      },
      {
        order: 2,
        instruction: 'Add medium-fine ground coffee (1:16 ratio)',
        tip: 'About 15g coffee for 240ml water'
      },
      {
        order: 3,
        instruction: 'Pour just enough water to wet grounds and wait 30 seconds',
        tip: 'This is called the bloom, it allows gas to escape'
      },
      {
        order: 4,
        instruction: 'Slowly pour remaining water in circular motion',
        tip: 'Maintain a steady pour, aim to finish in 2-3 minutes total'
      }
    ],
    suitableFor: ['Light Roasts', 'Medium Roasts', 'Bright, fruity coffees'],
    imageUrl: '/images/brewing/pour-over.jpg'
  }
];