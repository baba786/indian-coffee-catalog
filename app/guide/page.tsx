'use client';

import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import { useState } from 'react';

interface CoffeeStep {
  id: string;
  title: string;
  question: string;
  icon: React.ReactNode;
  options: {
    id: string;
    text: string;
    icon: React.ReactNode;
    result: string;
  }[];
}

const coffeeJourney: CoffeeStep[] = [
  {
    id: 'taste',
    title: 'Flavor Preference',
    question: 'What flavors do you enjoy most?',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 14H13C16.3137 14 19 16.6863 19 20V21H5V20C5 16.6863 7.68629 14 11 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    options: [
      { 
        id: 'chocolate',
        text: 'Sweet & Chocolatey', 
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 8V21M7 8L17 4V17M7 8L17 4M7 21L17 17M7 21C5.34315 21 4 19.6569 4 18V11C4 9.34315 5.34315 8 7 8M17 17C18.6569 17 20 15.6569 20 14V7C20 5.34315 18.6569 4 17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Medium-dark roasts from Karnataka with chocolate and caramel notes would be perfect for you.' 
      },
      { 
        id: 'fruity',
        text: 'Fruity & Bright', 
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 14.5C9 14.5 9.5 16.5 12 16.5C14.5 16.5 15 14.5 15 14.5M12 4C13.1819 4 14.3522 4.23279 15.4442 4.68508C16.5361 5.13738 17.5282 5.80031 18.364 6.63604C19.1997 7.47177 19.8626 8.46392 20.3149 9.55585C20.7672 10.6478 21 11.8181 21 13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22C9.61305 22 7.32387 21.0518 5.63604 19.364C3.94821 17.6761 3 15.3869 3 13C3 10.6131 3.94821 8.32387 5.63604 6.63604C7.32387 4.94821 9.61305 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Light roasts from high-altitude Chikmagalur estates with citrus and berry notes would suit your taste.' 
      },
      { 
        id: 'bold',
        text: 'Bold & Intense', 
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Malabar or Robusta beans with strong, spicy flavors would be ideal, especially for milk-based drinks.' 
      }
    ]
  },
  {
    id: 'brewing',
    title: 'Brewing Method',
    question: 'How do you brew your coffee?',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H17M17 8V14M17 8H7M17 14H7M7 8H5C3.34315 8 2 9.34315 2 11C2 12.6569 3.34315 14 5 14H7M7 8V14M3 14V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14M8 3L8 8M16 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    options: [
      { 
        id: 'french',
        text: 'French Press',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H18M6 20H18M6 9V16.5M18 9V16.5M9 2V4M15 2V4M9 20V22M15 20V22M6 4C6 4 7 6 12 6C17 6 18 4 18 4M6 20C6 20 7 18 12 18C17 18 18 20 18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Medium-coarse ground coffee works best for French Press. Our medium-dark roasts would be excellent here.' 
      },
      { 
        id: 'filter',
        text: 'Filter Coffee',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3V7M17 3V7M17 21V17M7 21V17M12 12C10.8954 12 10 11.1046 10 10V7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7V10C14 11.1046 13.1046 12 12 12ZM7 17C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7M17 17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Medium ground coffee is ideal for filter brewing. Light to medium roasts will shine through beautifully.' 
      },
      { 
        id: 'instant',
        text: 'Instant/Not Sure',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Start with our beginner-friendly medium roasts. We also have great instant coffee recommendations.' 
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience Level',
    question: 'What\'s your coffee experience level?',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    options: [
      { 
        id: 'beginner',
        text: 'Just Starting',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.5L10.5 18.5L19.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Welcome to coffee! We recommend starting with smooth, balanced options like Arabica blends from Chikmagalur.' 
      },
      { 
        id: 'intermediate',
        text: 'Some Experience',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 12.5C19.5 16.6421 16.1421 20 12 20C7.85786 20 4.5 16.6421 4.5 12.5C4.5 8.35786 7.85786 5 12 5C16.1421 5 19.5 8.35786 19.5 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V13L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Great timing to explore single-origin coffees! Try our curated selection of specialty beans from various Indian estates.' 
      },
      { 
        id: 'expert',
        text: 'Coffee Enthusiast',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.13259 17.8085C3.98557 16.4914 3.28809 14.8744 3.08721 13.1607C2.88634 11.447 3.18604 9.72041 3.94992 8.18625C4.7138 6.65209 5.91082 5.37484 7.39993 4.53137C8.88904 3.6879 10.6046 3.31438 12.3321 3.45788C14.0597 3.60139 15.6999 4.25523 17.0216 5.33191C18.3433 6.40859 19.2808 7.85973 19.7123 9.48359C20.1438 11.1075 20.0486 12.8254 19.44 14.392C18.8313 15.9586 17.7386 17.3022 16.3133 18.2435" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V4M21 12H20M3 12H4M12 20V21M18.5 5.5L17.5 6.5M4.5 5.5L5.5 6.5M4.5 18.5L5.5 17.5M18.5 18.5L17.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        result: 'Check out our premium selection of micro-lots and experimental processing methods from artisanal Indian roasters.' 
      }
    ]
  }
];

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (result: string, optionId: string) => {
    const newSelections = [...selections, optionId];
    const newResults = [...results, result];
    
    if (currentStep < coffeeJourney.length - 1) {
      setSelections(newSelections);
      setResults(newResults);
      setCurrentStep(currentStep + 1);
    } else {
      setSelections(newSelections);
      setResults(newResults);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelections([]);
    setResults([]);
    setShowResults(false);
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brown-800 to-brown-700 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Find Your Perfect Coffee</h1>
            <p className="text-brown-100 dark:text-gray-300 text-lg max-w-xl mx-auto">
              Answer 3 simple questions to discover your ideal Indian coffee match
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {!showResults ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              {/* Progress Indicator */}
              <div className="bg-brown-50 dark:bg-gray-700 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="text-brown-700 dark:text-brown-300">
                    {coffeeJourney[currentStep].icon}
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg font-medium text-brown-800 dark:text-brown-200">
                      {coffeeJourney[currentStep].title}
                    </h2>
                    <p className="text-sm text-brown-600 dark:text-brown-300">
                      Step {currentStep + 1} of {coffeeJourney.length}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {coffeeJourney.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  {coffeeJourney[currentStep].question}
                </h3>
                
                {/* Options */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {coffeeJourney[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.result, option.id)}
                      className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-brown-400 dark:hover:border-brown-500 hover:bg-brown-50 dark:hover:bg-gray-700/50 transition-all"
                    >
                      <div className="p-3 rounded-full bg-brown-100 dark:bg-gray-700 text-brown-700 dark:text-brown-300 mb-4">
                        {option.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900 dark:text-white text-center">
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
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9726 14.8354 21.5839C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86011" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  Your Coffee Match!
                </h2>
                
                <div className="mb-8">
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-lg bg-brown-50 dark:bg-gray-700 border-l-4 border-brown-400 dark:border-brown-500"
                      >
                        <p className="text-gray-700 dark:text-gray-200">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/discover"
                    className="w-full py-3 px-4 bg-brown-600 hover:bg-brown-700 text-white rounded-lg text-center font-medium flex-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Shop Recommended Coffees
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