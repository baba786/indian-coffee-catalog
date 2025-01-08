'use client';

import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';

interface Roaster {
  id: string;
  name: string;
  location: string;
  bestSeller: string;
  priceRange: string;
  website: string;
  image: string;
}

const roasters: Roaster[] = [
  {
    id: '1',
    name: 'Blue Tokai',
    location: 'Delhi • Mumbai • Bangalore',
    bestSeller: 'Vienna Roast',
    priceRange: '₹400-600',
    website: 'https://bluetokaicoffee.com',
    image: '/images/roasters/blue-tokai.jpg'
  },
  {
    id: '2',
    name: 'Third Wave Coffee',
    location: 'Bangalore',
    bestSeller: 'Attikan Estate',
    priceRange: '₹350-550',
    website: 'https://thirdwavecoffee.in',
    image: '/images/roasters/third-wave.jpg'
  },
  {
    id: '3',
    name: 'Dope Coffee',
    location: 'Mumbai',
    bestSeller: 'Ratnagiri Estate',
    priceRange: '₹450-650',
    website: 'https://dopecoffee.in',
    image: '/images/roasters/dope.jpg'
  }
];

interface RoasterCardProps {
  roaster: Roaster;
}

const RoasterCard = ({ roaster }: RoasterCardProps) => (
  <Link
    href={roaster.website}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all hover:-translate-y-1"
  >
    <div className="relative h-48 bg-brown-100">
      <div className="absolute inset-0 flex items-center justify-center text-brown-300">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21v-2h18v2H2zM20 8V5h-2v3h2zm0-5h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2v2c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v2z"/>
        </svg>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{roaster.name}</h3>
          <p className="text-brown-600 text-sm">{roaster.location}</p>
        </div>
        <span className="text-sm text-brown-600">{roaster.priceRange}</span>
      </div>
      <p className="text-gray-600 text-sm">
        Popular: {roaster.bestSeller}
      </p>
    </div>
  </Link>
);

export default function RoastersPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-brown-50">
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-brown-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet India's Best Coffee Roasters</h1>
              <p className="text-brown-100 max-w-2xl">
                Discover where to buy freshly roasted coffee beans from India's top roasters.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Roasters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roasters.map((roaster) => (
                <RoasterCard key={roaster.id} roaster={roaster} />
              ))}
            </div>

            {/* Simple Note */}
            <div className="mt-12 text-center text-sm text-gray-600">
              Links above may be affiliate links. This helps support the guide at no extra cost to you.
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
