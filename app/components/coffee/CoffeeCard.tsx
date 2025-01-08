'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Coffee } from '@/types';
import { getImageProps, getPlaceholderImage } from '@/utils/images';

interface CoffeeCardProps {
  coffee: Coffee;
  variant?: 'default' | 'compact';
}

export default function CoffeeCard({ coffee, variant = 'default' }: CoffeeCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: coffee.currency,
    maximumFractionDigits: 0,
  }).format(coffee.price);

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-4">
          <div className="text-sm text-brown-600 mb-1">{coffee.roaster}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{coffee.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-brown-800 font-semibold">{formattedPrice}</span>
            <Link
              href={coffee.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary text-sm px-4 py-2"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          {...getImageProps(coffee.images.main, 'product')}
          alt={coffee.name}
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getPlaceholderImage().src;
          }}
        />
        {!coffee.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-brown-600 mb-1">{coffee.roaster}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{coffee.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{coffee.description}</p>
        
        {/* Flavor Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {coffee.details.flavorNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="inline-block bg-brown-50 text-brown-800 px-2 py-1 rounded-full text-xs"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-brown-800 font-semibold">{formattedPrice}</span>
            {coffee.rating && (
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {coffee.rating.score} ({coffee.rating.count})
                </span>
              </div>
            )}
          </div>
          <Link
            href={coffee.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary text-sm px-4 py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}