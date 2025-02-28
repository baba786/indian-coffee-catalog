'use client';

import { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layout/BaseLayout';
import { coffees } from '../../data';

interface QuizStep {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    icon: React.ReactNode;
  }[];
}

// Simplified quiz with just 2 steps instead of 3
const coffeeQuiz: QuizStep[] = [
  {
    id: 'taste',
    question: 'What flavors do you enjoy most?',
    options: [
      { 
        id: 'chocolate',
        text: 'Sweet & Chocolatey', 
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        )
      },
      { 
        id: 'fruity',
        text: 'Fruity & Bright', 
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      },
      { 
        id: 'bold',
        text: 'Bold & Intense', 
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l20 10H13z" />
          </svg>
        )
      }
    ]
  },
  {
    id: 'brewing',
    question: 'How do you brew your coffee?',
    options: [
      { 
        id: 'filter',
        text: 'Filter/Pour Over',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c2.485 0 4.5-4.03 4.5-9S14.485 5 12 5s-4.5 4.03-4.5 9 2.015 0 4.5 0z" />
          </svg>
        )
      },
      { 
        id: 'french',
        text: 'French Press',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      { 
        id: 'milk',
        text: 'With Milk/Instant',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ]
  }
];

// Simple recommendation algorithm
const getRecommendations = (taste: string, brewing: string) => {
  let recommended: typeof coffees = [];
  
  // Filter coffees based on taste preference
  if (taste === 'chocolate') {
    recommended = coffees.filter(coffee => 
      coffee.details.flavorNotes.some(note => 
        ['Chocolate', 'Caramel', 'Nuts', 'Sweet'].includes(note)
      )
    );
  } else if (taste === 'fruity') {
    recommended = coffees.filter(coffee => 
      coffee.details.flavorNotes.some(note => 
        ['Berry', 'Citrus', 'Floral', 'Fruity'].includes(note)
      ) && coffee.details.roastLevel === 'Light'
    );
  } else if (taste === 'bold') {
    recommended = coffees.filter(coffee => 
      coffee.details.roastLevel === 'Dark' || 
      coffee.details.strength >= 4
    );
  }
  
  // Further filter based on brewing method
  if (brewing === 'filter') {
    recommended = recommended.filter(coffee => 
      coffee.details.roastLevel !== 'Dark'
    );
  } else if (brewing === 'french') {
    recommended = recommended.filter(coffee => 
      coffee.details.body >= 3
    );
  } else if (brewing === 'milk') {
    recommended = recommended.filter(coffee => 
      coffee.details.strength >= 3 || coffee.details.roastLevel !== 'Light'
    );
  }
  
  // If we have too few results, add some fallbacks
  if (recommended.length < 2) {
    if (taste === 'chocolate') {
      recommended.push(...coffees.filter(c => c.details.roastLevel === 'Medium'));
    } else if (taste === 'fruity') {
      recommended.push(...coffees.filter(c => c.details.acidity >= 3));
    } else {
      recommended.push(...coffees.filter(c => c.details.strength >= 3));
    }
  }
  
  // Return top 3 recommendations or all if less than 3
  return recommended.slice(0, 3);
};

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<typeof coffees>([]);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    const newSelections = [...selections, optionId];
    
    if (currentStep < coffeeQuiz.length - 1) {
      setSelections(newSelections);
      setCurrentStep(currentStep + 1);
    } else {
      // Get recommendations based on selections
      const recommendedCoffees = getRecommendations(newSelections[0], optionId);
      setSelections(newSelections);
      setRecommendations(recommendedCoffees);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelections([]);
    setRecommendations([]);
    setShowResults(false);
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brown-800 to-brown-700 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
            <h1 className="text-3xl font-bold text-white mb-3">Find Your Perfect Coffee</h1>
            <p className="text-brown-100 dark:text-gray-300 text-lg max-w-xl mx-auto">
              Answer 2 simple questions to discover your ideal Indian coffee match
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          {!showResults ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              {/* Progress Indicator */}
              <div className="bg-brown-50 dark:bg-gray-700 px-6 py-4 flex justify-between items-center">
                <div className="text-brown-600 dark:text-brown-300">
                  <p className="text-sm">
                    <span className="font-medium">Step {currentStep + 1}</span> of {coffeeQuiz.length}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {coffeeQuiz.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-8 h-1 rounded-full ${
                        index === currentStep 
                          ? 'bg-brown-600 dark:bg-brown-400' 
                          : index < currentStep 
                            ? 'bg-brown-400 dark:bg-brown-600' 
                            : 'bg-brown-200 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Question */}
              <div className="px-6 py-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  {coffeeQuiz[currentStep].question}
                </h3>
                
                {/* Options */}
                <div className="grid gap-4">
                  {coffeeQuiz[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className="flex items-center p-4 rounded-lg border-2 border-gray-100 dark:border-gray-700 hover:border-brown-400 dark:hover:border-brown-500 hover:bg-brown-50 dark:hover:bg-gray-700/50 transition-all"
                    >
                      <div className="p-2 rounded-full bg-brown-100 dark:bg-gray-700 text-brown-700 dark:text-brown-300 mr-4">
                        {option.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  Your Coffee Matches
                </h2>
                
                {/* Recommendations */}
                <div className="space-y-6 mb-8">
                  {recommendations.length > 0 ? (
                    recommendations.map((coffee, index) => (
                      <div 
                        key={coffee.id} 
                        className="p-4 rounded-lg bg-brown-50 dark:bg-gray-700 flex items-start"
                      >
                        <div className="bg-brown-100 dark:bg-gray-600 rounded-md p-2 mr-4">
                          <span className="text-lg font-bold text-brown-800 dark:text-brown-200">
                            #{index + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{coffee.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{coffee.description}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {coffee.details.flavorNotes.map((note, i) => (
                              <span 
                                key={i} 
                                className="inline-block px-2 py-0.5 text-xs bg-brown-100 dark:bg-brown-900 text-brown-700 dark:text-brown-300 rounded-full"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                          <a 
                            href={coffee.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brown-600 dark:text-brown-300 hover:text-brown-800 dark:hover:text-brown-100 inline-flex items-center"
                          >
                            Shop now ({coffee.currency} {coffee.price})
                            <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600 dark:text-gray-300">
                      No perfect matches found. Try different preferences.
                    </p>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/discover"
                    className="w-full py-3 px-4 bg-brown-600 hover:bg-brown-700 text-white rounded-lg text-center font-medium flex-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    Browse All Coffees
                  </Link>
                  <button
                    onClick={resetQuiz}
                    className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-center font-medium flex-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}