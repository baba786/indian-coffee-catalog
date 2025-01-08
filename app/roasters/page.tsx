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
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
    <div className="bg-brown-800 text-white p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{roaster.name}</h3>
          <p className="text-brown-200">Est. {roaster.established} • {roaster.location}</p>
        </div>
        <span className="bg-brown-700 text-brown-100 px-3 py-1 rounded-full text-sm">
          {roaster.type}
        </span>
      </div>
      <p className="text-brown-100 text-sm line-clamp-3">
        {roaster.description}
      </p>
    </div>

    <div className="p-6">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Popular Products</h4>
          <ul className="space-y-1">
            {roaster.popularProducts.map((product, index) => (
              <li key={index} className="text-gray-800 text-sm">{product}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-24">Specialty</span>
            <span className="text-gray-800">{roaster.specialty}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-24">Price Range</span>
            <span className="text-gray-800">{roaster.priceRange}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-24">Best For</span>
            <span className="text-gray-800">{roaster.bestFor}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={roaster.website}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-primary w-full text-center inline-block"
        >
          Visit Website
        </Link>
      </div>
    </div>
  </div>
);

export default function RoastersPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-brown-50">
        {/* Hero Section */}
        <div className="bg-brown-900 text-white pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet India's Best Coffee Roasters</h1>
            <p className="text-brown-100 max-w-2xl">
              Discover where to buy freshly roasted coffee beans from India's top roasters.
              Each roaster brings their unique expertise and passion to the world of specialty coffee.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="rounded-lg border-gray-300 text-gray-700 py-2 px-4 bg-white">
                <option value="">All Locations</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
              <select className="rounded-lg border-gray-300 text-gray-700 py-2 px-4 bg-white">
                <option value="">All Types</option>
                <option value="premium">Premium</option>
                <option value="artisanal">Artisanal</option>
                <option value="cafe-chain">Cafe Chain</option>
                <option value="boutique">Boutique</option>
                <option value="sustainable">Sustainable</option>
              </select>
              <select className="rounded-lg border-gray-300 text-gray-700 py-2 px-4 bg-white">
                <option value="">Price Range</option>
                <option value="budget">Under ₹500</option>
                <option value="mid">₹500 - ₹750</option>
                <option value="premium">Above ₹750</option>
              </select>
            </div>
          </div>

          {/* Roasters Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {roasters.map((roaster) => (
              <RoasterCard key={roaster.id} roaster={roaster} />
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 space-y-6 text-sm text-gray-600">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About Indian Coffee Roasters</h2>
              <p className="mb-4">
                India's specialty coffee scene has grown significantly in recent years, with roasters
                focusing on quality, sustainability, and direct trade relationships with farmers.
                Many roasters work directly with estates in key coffee-growing regions like
                Chikmagalur, Coorg, and the Nilgiris.
              </p>
              <p>
                The roasters listed here have been selected based on their commitment to quality,
                consistency, and contribution to India's specialty coffee movement. Prices and
                availability may vary by season and location.
              </p>
            </div>
            
            <div className="text-center text-xs">
              Note: Links above may be affiliate links. This helps support the guide at no extra cost to you.
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
