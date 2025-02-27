"use client";

import Link from 'next/link';
import CoffeeBagImage from '../shared/CoffeeBagImage';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';

interface FeaturedCoffeeCardProps {
  coffee: {
    id: number;
    name: string;
    roaster: string;
    description: string;
    price: string;
    imageUrl: string;
    link: string;
    badges?: {
      type: 'new' | 'bestseller' | 'limited' | 'organic' | 'award';
      label: string;
    }[];
    rating?: number;
  };
}

export default function FeaturedCoffeeCard({ coffee }: FeaturedCoffeeCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to determine badge color
  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'bestseller': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      case 'limited': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'organic': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'award': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  // Added sample badges for demonstration
  const sampleBadges = coffee.id === 1 
    ? [{ type: 'bestseller', label: 'Bestseller' }] 
    : coffee.id === 2 
      ? [{ type: 'award', label: 'Award Winner' }] 
      : coffee.id === 3 
        ? [{ type: 'new', label: 'New Arrival' }]
        : coffee.id === 5
          ? [{ type: 'limited', label: 'Limited Edition' }]
          : undefined;

  // Use provided badges or sample badges
  const badges = coffee.badges || sampleBadges;

  // Don't render until client-side hydration is complete
  if (!mounted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 h-96 animate-pulse">
        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="flex justify-between">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="relative h-48">
        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index} 
                className={`${getBadgeColor(badge.type)} px-2 py-1 rounded text-xs font-medium`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
        
        <CoffeeBagImage name={coffee.name} roaster={coffee.roaster} />
      </div>
      
      <div className="p-6">
        <div className="text-sm text-brown-600 dark:text-brown-300 mb-1">
          {coffee.roaster}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {coffee.name}
        </h3>
        
        {/* Star Rating - sample for display */}
        {coffee.rating && (
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.round(coffee.rating || 0) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {coffee.rating || 4.5} rating
            </span>
          </div>
        )}
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {coffee.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-brown-800 dark:text-brown-200 font-semibold">
            {coffee.price}
          </span>
          <Link
            href={coffee.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary text-sm px-4 py-2 flex items-center"
            aria-label={`View details for ${coffee.name}`}
          >
            View Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}