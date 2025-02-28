'use client';

import Link from "next/link";
import { Suspense } from "react";
import BaseLayout from "./components/layout/BaseLayout";
import QuickActionCard from "./components/home/QuickActionCard";
import FeaturedCoffeeCard from "./components/home/FeaturedCoffeeCard";
import { LoadingCard } from "./components/shared/LoadingCard";
import { coffees, roasters } from "../data";

export default function Home() {
  // Get only the featured coffees for the homepage
  const featuredCoffees = coffees.filter(coffee => coffee.featured);
  
  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section - Simplified */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Discover Indian Coffee
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                From the misty Western Ghats to your cup. Find the perfect coffee for every palate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/guide"
                  className="px-6 py-3 bg-brown-600 hover:bg-brown-700 text-white rounded-lg text-center font-medium"
                >
                  Find Your Coffee
                </Link>
                <Link
                  href="/discover"
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg text-center font-medium"
                >
                  Browse All Coffees
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section - Simplified */}
        <div className="bg-white dark:bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              I'm looking for...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <QuickActionCard 
                href="/guide"
                title="Coffee Recommendations"
                description="Answer 2 simple questions to find your perfect match"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <QuickActionCard 
                href="/brew"
                title="Brewing Instructions"
                description="Simple guides to make great coffee at home"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                }
              />
              <QuickActionCard 
                href="/discover?filter=beginner"
                title="Beginner-Friendly Coffee"
                description="Start your coffee journey with these approachable options"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* Featured Products Section - Simplified */}
        <div className="py-12 bg-brown-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Staff Recommendations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
                Coffees we're currently enjoying, personally tested by our team
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={[1, 2, 3].map(i => <LoadingCard key={i} />)}>
                {featuredCoffees.map((coffee) => (
                  <FeaturedCoffeeCard 
                    key={coffee.id} 
                    coffee={{
                      ...coffee,
                      roaster: roasters.find(r => r.id === coffee.roaster)?.name || coffee.roaster
                    }} 
                  />
                ))}
              </Suspense>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/discover"
                className="inline-flex items-center text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-300"
              >
                See all coffees
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Learn Section - New & Simplified */}
        <div className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Learn About Indian Coffee
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
                Explore India's rich coffee heritage and learn what makes it special
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brown-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Coffee Growing Regions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Indian coffee primarily grows in three southern states: Karnataka (71%), Kerala (21%), and Tamil Nadu (5%). The Western Ghats provide ideal growing conditions with elevation, rainfall, and shade.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brown-600 dark:text-brown-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Chikmagalur - Known as the birthplace of Indian coffee</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brown-600 dark:text-brown-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coorg (Kodagu) - Famous for its shade-grown coffee</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brown-600 dark:text-brown-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wayanad - Unique coffee with spice notes from Kerala</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brown-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Indian Coffee Varieties
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Monsoon Malabar</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Unique process where beans are exposed to monsoon winds, creating a smooth, low-acid coffee with spicy notes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Mysore Nuggets</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Premium large-bean variety grown in Karnataka with notes of chocolate and spice.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Robusta Kaapi Royale</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      High-quality Indian robusta with bold flavor, perfect for traditional filter coffee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}