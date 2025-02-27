'use client';

import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';

interface Roaster {
  id: string;
  name: string;
  location: string;
  established: string;
  type: string;
  description: string;
  specialty: string;
  priceRange: string;
  bestFor: string;
  website: string;
  popularProducts: string[];
}

const roasters: Roaster[] = [
  {
    id: '1',
    name: 'Blue Tokai Coffee Roasters',
    location: 'Delhi/Bangalore',
    established: '2013',
    type: 'Premium',
    description: 'Pioneers in India\'s specialty coffee scene, known for their farm-to-cup transparency and consistent quality. They work directly with estates in Chikmagalur, Nilgiris, and Coorg.',
    specialty: 'Light to medium roasts, Single origins',
    priceRange: '₹400 - ₹800',
    bestFor: 'Pour over, French press, Cold brew',
    website: 'https://bluetokaicoffee.com',
    popularProducts: [
      'MS Estate Blend',
      'Attikan Estate',
      'Vienna Roast'
    ]
  },
  {
    id: '2',
    name: 'KC Roasters',
    location: 'Mumbai',
    established: '2017',
    type: 'Artisanal',
    description: 'Mumbai\'s premier micro-roastery, focusing on small-batch roasting and experimental processing methods. Known for their unique natural processed coffees.',
    specialty: 'Natural process, Experimental lots',
    priceRange: '₹500 - ₹1000',
    bestFor: 'Espresso, Pour over, Aeropress',
    website: 'https://kcroasters.com',
    popularProducts: [
      'Ratnagiri Natural',
      'Bibi Plantation',
      'Kelagur Estate'
    ]
  },
  {
    id: '3',
    name: 'Third Wave Coffee Roasters',
    location: 'Bangalore',
    established: '2016',
    type: 'Cafe Chain',
    description: 'Started as a micro-roastery and now one of India\'s fastest-growing specialty coffee chains. Known for making specialty coffee accessible to the masses.',
    specialty: 'Medium roasts, Blends',
    priceRange: '₹350 - ₹600',
    bestFor: 'Espresso, Cold brew',
    website: 'https://thirdwavecoffee.in',
    popularProducts: [
      'Attikan Estate Gold',
      'Ivory Coast Blend',
      'Classic Dark Roast'
    ]
  },
  {
    id: '4',
    name: 'Curious Life Coffee',
    location: 'Bangalore',
    established: '2018',
    type: 'Boutique',
    description: 'A boutique roastery focused on creating unique flavor profiles through careful roasting and blending. Known for their seasonal single-origin offerings.',
    specialty: 'Light roasts, Seasonal offerings',
    priceRange: '₹450 - ₹750',
    bestFor: 'Pour over, Filter coffee',
    website: 'https://curiouslife.in',
    popularProducts: [
      'Baarbara Estate',
      'Monsoon Malabar',
      'Seasonal Blend'
    ]
  },
  {
    id: '5',
    name: 'Black Baza Coffee',
    location: 'Bangalore',
    established: '2016',
    type: 'Sustainable',
    description: 'A conservation-focused coffee company working directly with small-scale farmers. Pioneers in sustainable and biodiversity-friendly coffee cultivation.',
    specialty: 'Shade-grown, Organic',
    priceRange: '₹400 - ₹700',
    bestFor: 'Filter coffee, French press',
    website: 'https://blackbazacoffee.com',
    popularProducts: [
      'Riverdale N72',
      'Wanderoo Blend',
      'Forest Friendly'
    ]
  },
  {
    id: '6',
    name: 'Dope Coffee Roasters',
    location: 'Mumbai',
    established: '2017',
    type: 'Modern',
    description: 'Urban coffee roasters known for their modern approach to traditional Indian coffees. Specializes in unique blends and contemporary roasting styles.',
    specialty: 'Modern blends, Dark roasts',
    priceRange: '₹450 - ₹800',
    bestFor: 'Espresso, Cold brew',
    website: 'https://dopecoffee.in',
    popularProducts: [
      'Monsoon Malabar Reserve',
      'Mumbai Dark',
      'Urban Blend'
    ]
  }
];

interface RoasterCardProps {
  roaster: Roaster;
}

const RoasterCard = ({ roaster }: RoasterCardProps) => (
  <div className="group bg-white dark:bg-gray-800 hover:bg-brown-50/50 dark:hover:bg-gray-700/80 border border-gray-100 dark:border-gray-700 rounded-lg transition-all duration-300">
    <Link
      href={roaster.website}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-brown-800 dark:group-hover:text-brown-300 transition-colors">
            {roaster.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {roaster.location}
          </p>
        </div>
        <span className="text-brown-600 dark:text-brown-300 text-sm">
          {roaster.priceRange}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {roaster.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {roaster.popularProducts.slice(0, 2).map((product, index) => (
          <span 
            key={index} 
            className="inline-flex text-xs px-2 py-1 bg-brown-50 dark:bg-gray-700 text-brown-800 dark:text-brown-200 rounded"
          >
            {product}
          </span>
        ))}
        <span className="inline-flex text-xs px-2 py-1 bg-brown-50 dark:bg-gray-700 text-brown-800 dark:text-brown-200 rounded">
          {roaster.specialty.split(',')[0]}
        </span>
      </div>
    </Link>
  </div>
);

export default function RoastersPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-24 pb-12">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-4 section-heading">
              Coffee Roasters
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              A curated selection of India's finest specialty coffee roasters.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 pb-8 overflow-x-auto scrollbar-hide">
            <button className="px-3 py-1.5 text-sm bg-brown-800 dark:bg-brown-600 text-white rounded-full">
              All Roasters
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-brown-50 dark:hover:bg-gray-700 rounded-full transition-colors">
              Bangalore
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-brown-50 dark:hover:bg-gray-700 rounded-full transition-colors">
              Mumbai
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-brown-50 dark:hover:bg-gray-700 rounded-full transition-colors">
              Delhi
            </button>
          </div>

          {/* Roasters List */}
          <div className="space-y-4">
            {roasters.map((roaster) => (
              <RoasterCard key={roaster.id} roaster={roaster} />
            ))}
          </div>

          {/* Footer Note */}
          <div className="py-12">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All roasters are selected based on their commitment to quality and contribution to 
              India's specialty coffee movement. Prices may vary by season.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}