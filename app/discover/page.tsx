'use client';

import { useState, useEffect } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import { coffees } from '@/data';

// Define filter types
type FilterType = 'all' | 'light' | 'medium' | 'dark' | 'bestseller' | 'new';

export default function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced coffee data with badges and images
  const enhancedCoffees = coffees.map(coffee => {
    // Add badges based on coffee properties
    const badges = [];
    if (coffee.featured) badges.push('bestseller');
    if (coffee.details.roastLevel === 'Light') badges.push('light');
    else if (coffee.details.roastLevel === 'Medium') badges.push('medium');
    else if (coffee.details.roastLevel.includes('Dark')) badges.push('dark');
    
    // Determine if this is a new coffee (simplified example - in reality would check against a date)
    const isNew = coffee.id.includes('attikan') || coffee.id.includes('monsoon');
    if (isNew) badges.push('new');
    
    // Choose a placeholder image based on the coffee ID
    let imageUrl = '/images/coffee-1.jpg';
    
    // Return enhanced coffee data
    return {
      ...coffee,
      badges,
      imageUrl
    };
  });

  // Filter coffee based on active filter and search query
  const filteredCoffees = enhancedCoffees.filter(coffee => {
    // Filter by category
    if (activeFilter !== 'all' && activeFilter !== 'bestseller' && activeFilter !== 'new') {
      if (!coffee.badges.includes(activeFilter)) return false;
    }
    
    if (activeFilter === 'bestseller' && !coffee.badges.includes('bestseller')) return false;
    if (activeFilter === 'new' && !coffee.badges.includes('new')) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = coffee.name.toLowerCase().includes(query);
      const roasterMatch = coffee.roaster.toLowerCase().includes(query);
      const flavorMatch = coffee.details.flavorNotes.some(note => 
        note.toLowerCase().includes(query)
      );
      
      if (!(nameMatch || roasterMatch || flavorMatch)) return false;
    }
    
    return true;
  });

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-brown-800 to-brown-900 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Discover Indian Coffee</h1>
              <p className="text-brown-100 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Explore our curated selection of the finest coffee from India's renowned estates and roasters.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search coffees by name, roaster or flavor..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brown-500 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Mobile filter toggle */}
              <button
                className="md:hidden bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Filters {showFilters ? '×' : '+'}
              </button>
            </div>
            
            {/* Filter chips - desktop: always visible, mobile: toggle visible */}
            <div className={`flex flex-wrap gap-2 ${!showFilters ? 'hidden md:flex' : ''}`}>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                All Coffees
              </button>
              <button
                onClick={() => setActiveFilter('bestseller')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'bestseller'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                Bestsellers
              </button>
              <button
                onClick={() => setActiveFilter('light')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'light'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                Light Roast
              </button>
              <button
                onClick={() => setActiveFilter('medium')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'medium'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                Medium Roast
              </button>
              <button
                onClick={() => setActiveFilter('dark')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'dark'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                Dark Roast
              </button>
              <button
                onClick={() => setActiveFilter('new')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'new'
                    ? 'bg-brown-800 dark:bg-brown-700 text-white'
                    : 'bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-gray-600'
                }`}
              >
                New Arrivals
              </button>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {filteredCoffees.length} {filteredCoffees.length === 1 ? 'Coffee' : 'Coffees'}
            </h2>
            
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="text-sm text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-300 flex items-center"
              >
                Clear Filters
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Coffee grid */}
          {filteredCoffees.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCoffees.map((coffee) => (
                <div key={coffee.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                    
                    {/* Badges - positioned in top right */}
                    {coffee.badges.length > 0 && (
                      <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                        {coffee.badges.includes('bestseller') && (
                          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200 rounded-full text-xs font-semibold shadow-sm">
                            Bestseller
                          </span>
                        )}
                        {coffee.badges.includes('new') && (
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold shadow-sm">
                            New Arrival
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Add coffee name and roaster as overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <p className="text-white text-sm font-medium opacity-90">{coffee.roaster}</p>
                      <h3 className="text-white text-xl font-bold">{coffee.name}</h3>
                    </div>
                  </div>
                  
                  {/* Coffee details */}
                  <div className="p-4">
                    {/* Origin & Roast */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {coffee.details.origin}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        coffee.details.roastLevel === 'Light' 
                          ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200' 
                          : coffee.details.roastLevel === 'Medium' 
                            ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200'
                            : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'
                      }`}>
                        {coffee.details.roastLevel} Roast
                      </span>
                    </div>
                    
                    {/* Flavor tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {coffee.details.flavorNotes.slice(0, 3).map((flavor, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-brown-50 dark:bg-gray-700 text-brown-800 dark:text-brown-200 rounded-full text-xs"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                    
                    {/* Price and Buy button */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ₹{coffee.price}
                      </span>
                      <Link
                        href={coffee.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded-lg inline-flex items-center"
                      >
                        Buy Now
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No coffees found</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Try adjusting your filters or search query to find more options.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded-lg inline-flex items-center"
              >
                View All Coffees
              </button>
            </div>
          )}
          
          {/* Coffee guide callout */}
          <div className="mt-16 bg-brown-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="sm:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Not sure which coffee to choose?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Take our quick quiz to find the perfect coffee based on your taste preferences and brewing method.
                </p>
                <Link
                  href="/guide"
                  className="inline-flex items-center px-4 py-2 bg-brown-800 dark:bg-brown-700 hover:bg-brown-900 dark:hover:bg-brown-800 text-white rounded-lg transition-colors"
                >
                  Coffee Finder Quiz
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="sm:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-brown-200 dark:bg-brown-900 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11H20M8 15V17M12 15V17M16 11V13M12 7V9M8 11V7M16 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}