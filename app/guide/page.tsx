'use client';

import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import { useState } from 'react';

interface CoffeeStep {
  id: string;
  title: string;
  description: string;
  options: {
    text: string;
    result: string;
  }[];
}

const coffeeJourney: CoffeeStep[] = [
  {
    id: 'taste',
    title: 'What flavors do you enjoy?',
    description: 'Let\'s start with your taste preferences',
    options: [
      { 
        text: 'Sweet & Chocolatey', 
        result: 'You might enjoy medium-dark roasts from Karnataka, known for their chocolate and caramel notes.' 
      },
      { 
        text: 'Fruity & Bright', 
        result: 'Try light roasts from high-altitude estates in Chikmagalur, featuring citrus and berry notes.' 
      },
      { 
        text: 'Bold & Intense', 
        result: 'Look for Malabar or Robusta beans, offering strong, spicy flavors perfect for milk-based drinks.' 
      }
    ]
  },
  {
    id: 'brewing',
    title: 'How do you brew your coffee?',
    description: 'Your brewing method affects which coffee works best',
    options: [
      { 
        text: 'French Press',
        result: 'Perfect! Medium-coarse ground coffee works best. Try our recommended medium-dark roasts.' 
      },
      { 
        text: 'Filter Coffee',
        result: 'Great choice! Medium ground coffee is ideal. Light to medium roasts will shine here.' 
      },
      { 
        text: 'Instant/Not Sure',
        result: 'No problem! Start with our beginner-friendly medium roasts and explore brewing methods later.' 
      }
    ]
  },
  {
    id: 'experience',
    title: 'Your coffee experience level?',
    description: 'This helps us personalize recommendations',
    options: [
      { 
        text: 'Just Starting',
        result: 'Welcome to coffee! We\'ll start you with smooth, approachable options.' 
      },
      { 
        text: 'Some Experience',
        result: 'Perfect timing to explore single-origin coffees and different roast levels.' 
      },
      { 
        text: 'Coffee Enthusiast',
        result: 'Check out our rare micro-lots and experimental processing methods.' 
      }
    ]
  }
];

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (result: string) => {
    const newResults = [...results, result];
    if (currentStep < coffeeJourney.length - 1) {
      setResults(newResults);
      setCurrentStep(currentStep + 1);
    } else {
      setResults(newResults);
      setShowResults(true);
    }
  };

  const resetGuide = () => {
    setCurrentStep(0);
    setResults([]);
    setShowResults(false);
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-brown-900 dark:bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Find Your Perfect Coffee</h1>
              <p className="text-brown-100 dark:text-gray-300 max-w-2xl">
                Take this quick quiz to discover Indian coffees you'll love. No coffee jargon,
                just simple questions to match you with your ideal cup.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {!showResults ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="h-2 bg-brown-100 dark:bg-gray-700 rounded-full">
                    <div 
                      className="h-2 bg-brown-600 dark:bg-brown-500 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / coffeeJourney.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {coffeeJourney[currentStep].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {coffeeJourney[currentStep].description}
                </p>

                {/* Options */}
                <div className="space-y-4">
                  {coffeeJourney[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option.result)}
                      className="w-full p-4 text-left rounded-lg border border-brown-200 dark:border-gray-600 hover:border-brown-400 dark:hover:border-brown-500 hover:bg-brown-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Your Coffee Profile</h2>
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <div key={index} className="p-4 bg-brown-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-gray-800 dark:text-gray-200">{result}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <Link
                    href="/discover"
                    className="block w-full btn-primary text-center"
                  >
                    View Recommended Coffees
                  </Link>
                  <button
                    onClick={resetGuide}
                    className="block w-full btn-secondary"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}