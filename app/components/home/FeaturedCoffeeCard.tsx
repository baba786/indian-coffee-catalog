'use client';

import Link from 'next/link';
import { Coffee } from '../../../types';

interface FeaturedCoffeeCardProps {
  coffee: Coffee;
}

export default function FeaturedCoffeeCard({ coffee }: FeaturedCoffeeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {/* Placeholder if image fails to load */}
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Image will be added here with proper Next.js Image component in production */}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{coffee.name}</h3>
            <p className="text-sm text-brown-600 dark:text-brown-300">{coffee.roaster}</p>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">{coffee.rating}</span>
          </div>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{coffee.description}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {coffee.details.flavorNotes.map((note, i) => (
            <span 
              key={i} 
              className="inline-block px-2 py-1 text-xs bg-brown-100 dark:bg-brown-900 text-brown-700 dark:text-brown-300 rounded-full"
            >
              {note}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900 dark:text-white">{coffee.currency} {coffee.price}</span>
          <Link
            href={coffee.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm bg-brown-600 hover:bg-brown-700 text-white rounded-md transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}