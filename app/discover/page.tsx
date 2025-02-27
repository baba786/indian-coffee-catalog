'use client';

import { useState } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import CoffeeCard from '../components/coffee/CoffeeCard';
import { Coffee } from '@/types';
import { coffees } from '@/data';

type FilterState = {
  roastLevel: string[];
  flavorProfile: string[];
  priceRange: number;
  searchQuery: string;
};

export default function DiscoverPage() {
  const [filters, setFilters] = useState<FilterState>({
    roastLevel: [],
    flavorProfile: [],
    priceRange: 1000,
    searchQuery: '',
  });

  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');

  const filteredCoffees = coffees.filter((coffee) => {
    // Filter by roast level
    if (filters.roastLevel.length > 0 && !filters.roastLevel.includes(coffee.details.roastLevel)) {
      return false;
    }

    // Filter by flavor profile
    if (filters.flavorProfile.length > 0 && !coffee.details.flavorNotes.some(note => 
      filters.flavorProfile.includes(note)
    )) {
      return false;
    }

    // Filter by price
    if (coffee.price > filters.priceRange) {
      return false;
    }

    // Filter by search query
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      return (
        coffee.name.toLowerCase().includes(searchLower) ||
        coffee.description.toLowerCase().includes(searchLower) ||
        coffee.details.flavorNotes.some(note => 
          note.toLowerCase().includes(searchLower)
        )
      );
    }

    return true;
  });

  // Sort coffees
  const sortedCoffees = [...filteredCoffees].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    // Sort by rating
    const aRating = a.rating?.score || 0;
    const bRating = b.rating?.score || 0;
    return bRating - aRating;
  });

  const handleRoastLevelChange = (roast: string) => {
    setFilters(prev => ({
      ...prev,
      roastLevel: prev.roastLevel.includes(roast)
        ? prev.roastLevel.filter(r => r !== roast)
        : [...prev.roastLevel, roast]
    }));
  };

  const handleFlavorProfileChange = (flavor: string) => {
    setFilters(prev => ({
      ...prev,
      flavorProfile: prev.flavorProfile.includes(flavor)
        ? prev.flavorProfile.filter(f => f !== flavor)
        : [...prev.flavorProfile, flavor]
    }));
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-brown-900 dark:bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Discover Your Perfect Coffee</h1>
              <p className="text-brown-100 dark:text-gray-300 max-w-2xl">
                We've curated the finest Indian coffees just for you. Each coffee is hand-picked
                and reviewed to help you make the perfect choice.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Search and Sort */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search coffees..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent"
                    value={filters.searchQuery}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                  />
                </div>
                <select
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>
            </div>

            {/* Filter Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 sticky top-20">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter Coffee</h2>
                  
                  {/* Roast Level */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">Roast Level</h3>
                    <div className="space-y-2">
                      {['Light', 'Medium', 'Medium-Dark', 'Dark'].map((roast) => (
                        <label key={roast} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 dark:border-gray-600 text-brown-600 focus:ring-brown-500 dark:focus:ring-brown-400 bg-white dark:bg-gray-700"
                            checked={filters.roastLevel.includes(roast)}
                            onChange={() => handleRoastLevelChange(roast)}
                          />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{roast}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Flavor Profile */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">Flavor Profile</h3>
                    <div className="space-y-2">
                      {['Chocolatey', 'Fruity', 'Nutty', 'Floral', 'Spicy', 'Sweet'].map((flavor) => (
                        <label key={flavor} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 dark:border-gray-600 text-brown-600 focus:ring-brown-500 dark:focus:ring-brown-400 bg-white dark:bg-gray-700"
                            checked={filters.flavorProfile.includes(flavor)}
                            onChange={() => handleFlavorProfileChange(flavor)}
                          />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{flavor}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                      Price Range (₹{filters.priceRange})
                    </h3>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="100"
                      value={filters.priceRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brown-600 dark:accent-brown-500"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span>₹0</span>
                      <span>₹1000</span>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <button
                    onClick={() => setFilters({
                      roastLevel: [],
                      flavorProfile: [],
                      priceRange: 1000,
                      searchQuery: '',
                    })}
                    className="mt-6 w-full px-4 py-2 bg-brown-50 dark:bg-gray-700 text-brown-800 dark:text-brown-200 rounded-lg hover:bg-brown-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Coffee List */}
              <div className="lg:col-span-3">
                {sortedCoffees.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sortedCoffees.map((coffee) => (
                      <CoffeeCard key={coffee.id} coffee={coffee} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No coffees found</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Try adjusting your filters or search query to find more options.
                    </p>
                  </div>
                )}

                {/* Personal Note Section */}
                <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-brown-100 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-brown-900 dark:text-brown-200 mb-4">A Personal Note</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    As a coffee enthusiast, I've personally tried many of these coffees and included
                    only those that I believe offer great value. Some links above are affiliate links,
                    which means I may earn a small commission if you make a purchase (at no extra cost
                    to you). This helps support this hobby project and keeps the coffee guides coming!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}