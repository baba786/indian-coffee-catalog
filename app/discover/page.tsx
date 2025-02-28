'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BaseLayout from '../components/layout/BaseLayout';
import { coffees, roasters } from '../../data';
import { Coffee } from '../../types';

export default function DiscoverPage() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter');
  
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);
  const [activeFilters, setActiveFilters] = useState({
    roastLevel: '',
    flavor: '',
    price: '',
    forBeginners: initialFilter === 'beginner'
  });

  useEffect(() => {
    let results = [...coffees];
    
    // Apply roast level filter
    if (activeFilters.roastLevel) {
      results = results.filter(coffee => 
        coffee.details.roastLevel === activeFilters.roastLevel
      );
    }
    
    // Apply flavor filter
    if (activeFilters.flavor) {
      results = results.filter(coffee => 
        coffee.details.flavorNotes.some(note => 
          note.toLowerCase().includes(activeFilters.flavor.toLowerCase())
        )
      );
    }
    
    // Apply price filter
    if (activeFilters.price) {
      if (activeFilters.price === 'under400') {
        results = results.filter(coffee => coffee.price < 400);
      } else if (activeFilters.price === '400to500') {
        results = results.filter(coffee => coffee.price >= 400 && coffee.price <= 500);
      } else if (activeFilters.price === 'over500') {
        results = results.filter(coffee => coffee.price > 500);
      }
    }
    
    // Apply beginner filter
    if (activeFilters.forBeginners) {
      results = results.filter(coffee => coffee.forBeginners);
    }
    
    setFilteredCoffees(results);
  }, [activeFilters]);

  const clearFilters = () => {
    setActiveFilters({
      roastLevel: '',
      flavor: '',
      price: '',
      forBeginners: false
    });
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="bg-brown-800 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
            <h1 className="text-3xl font-bold text-white mb-3">Explore Indian Coffee</h1>
            <p className="text-brown-100 dark:text-gray-300 text-lg max-w-2xl">
              Browse our curated selection of specialty coffees from India's finest roasters
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters - Simplified */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h2>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-300"
                  >
                    Clear all
                  </button>
                </div>
                
                {/* Roast Level Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Roast Level</h3>
                  <div className="space-y-2">
                    {['Light', 'Medium', 'Dark'].map((level) => (
                      <label key={level} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="roastLevel"
                          value={level}
                          checked={activeFilters.roastLevel === level}
                          onChange={() => setActiveFilters({...activeFilters, roastLevel: level})}
                          className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Flavor Filter - Simplified */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Flavor Profile</h3>
                  <div className="space-y-2">
                    {['Chocolate', 'Fruity', 'Nutty', 'Spicy'].map((flavor) => (
                      <label key={flavor} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="flavor"
                          value={flavor}
                          checked={activeFilters.flavor === flavor}
                          onChange={() => setActiveFilters({...activeFilters, flavor: flavor})}
                          className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{flavor}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="under400"
                        checked={activeFilters.price === 'under400'}
                        onChange={() => setActiveFilters({...activeFilters, price: 'under400'})}
                        className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Under ₹400</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="400to500"
                        checked={activeFilters.price === '400to500'}
                        onChange={() => setActiveFilters({...activeFilters, price: '400to500'})}
                        className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">₹400 - ₹500</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="over500"
                        checked={activeFilters.price === 'over500'}
                        onChange={() => setActiveFilters({...activeFilters, price: 'over500'})}
                        className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Over ₹500</span>
                    </label>
                  </div>
                </div>
                
                {/* Beginner Friendly Filter */}
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilters.forBeginners}
                      onChange={() => setActiveFilters({...activeFilters, forBeginners: !activeFilters.forBeginners})}
                      className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-600 dark:text-gray-300">Beginner Friendly</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Coffee List - Simplified */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {filteredCoffees.length} {filteredCoffees.length === 1 ? 'Result' : 'Results'}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activeFilters.forBeginners ? 'Showing beginner-friendly options' : 'All coffees'}
                </span>
              </div>
              
              {filteredCoffees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredCoffees.map((coffee) => {
                    const roaster = roasters.find(r => r.id === coffee.roaster);
                    
                    return (
                      <div key={coffee.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                          {/* Placeholder for image */}
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{coffee.name}</h3>
                            {coffee.rating && (
                              <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{coffee.rating}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-sm text-brown-600 dark:text-brown-300 mb-2">
                            {roaster?.name || coffee.roaster}
                          </p>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                            {coffee.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {coffee.details.flavorNotes.map((note, i) => (
                              <span 
                                key={i} 
                                className="inline-block px-2 py-0.5 text-xs bg-brown-100 dark:bg-brown-900 text-brown-700 dark:text-brown-300 rounded-full"
                              >
                                {note}
                              </span>
                            ))}
                            <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                              {coffee.details.roastLevel}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-900 dark:text-white">
                              {coffee.currency} {coffee.price}
                            </span>
                            <a
                              href={coffee.buyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-brown-600 hover:bg-brown-700 text-white text-sm rounded transition-colors"
                            >
                              Buy Now
                            </a>
                          </div>
                          
                          {/* Strength, Acidity, Body Visual Indicators */}
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 grid grid-cols-3 gap-2">
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Strength</p>
                              <div className="flex space-x-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div 
                                    key={i} 
                                    className={`h-1.5 w-full rounded-sm ${
                                      i <= coffee.details.strength 
                                        ? 'bg-brown-600 dark:bg-brown-500' 
                                        : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Acidity</p>
                              <div className="flex space-x-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div 
                                    key={i} 
                                    className={`h-1.5 w-full rounded-sm ${
                                      i <= coffee.details.acidity 
                                        ? 'bg-brown-600 dark:bg-brown-500' 
                                        : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Body</p>
                              <div className="flex space-x-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div 
                                    key={i} 
                                    className={`h-1.5 w-full rounded-sm ${
                                      i <= coffee.details.body 
                                        ? 'bg-brown-600 dark:bg-brown-500' 
                                        : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No coffees found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Try adjusting your filters or browse our full selection
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded-md transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}