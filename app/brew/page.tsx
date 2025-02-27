'use client';

import { useState } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';

interface BrewingMethod {
  id: string;
  name: string;
  time: string;
  difficulty: string;
  description: string;
  equipment: string[];
  steps: {
    text: string;
    tip?: string;
  }[];
  bestFor: string[];
  imageUrl: string;
  link: string;
}

interface BrewingCardProps {
  method: BrewingMethod;
  isSelected: boolean;
  onClick: () => void;
}

const brewingMethods: BrewingMethod[] = [
  {
    id: 'filter',
    name: 'South Indian Filter',
    time: '15 mins',
    difficulty: 'Easy',
    description: 'The traditional South Indian coffee filter produces a rich, concentrated decoction that forms the base of the iconic filter coffee or "kaapi."',
    equipment: [
      'South Indian coffee filter',
      'Fresh medium-fine ground coffee',
      'Hot water',
      'Milk and sugar (optional)'
    ],
    steps: [
      {
        text: 'Add 2-3 tablespoons of coffee powder to the upper chamber',
        tip: 'Use a medium-fine grind for best results'
      },
      {
        text: 'Press gently with the perforated disc to level the coffee',
        tip: 'Don\'t press too firmly, just enough to level the grounds'
      },
      {
        text: 'Pour hot water (not boiling, around 90°C) to fill the top chamber',
        tip: 'Fill to just below the rim and cover with the lid'
      },
      {
        text: 'Wait 10-15 minutes for the coffee to slowly drip into the lower chamber',
        tip: 'Patience is key - rushing the process affects the flavor'
      },
      {
        text: 'Mix the decoction with hot milk and sugar, then froth by pouring between cups',
        tip: 'Traditional ratio is 1 part decoction to 2 parts hot milk'
      }
    ],
    bestFor: ['Traditional flavor', 'Strong coffee', 'Making with milk'],
    imageUrl: '/images/brewing/filter.jpg',
    link: 'https://example.com/filter'
  },
  {
    id: 'french-press',
    name: 'French Press',
    time: '10 mins',
    difficulty: 'Easy',
    description: 'The French press produces a full-bodied cup that highlights the natural oils and flavors in coffee. Perfect for medium to dark roasts.',
    equipment: [
      'French press',
      'Coarse ground coffee',
      'Hot water',
      'Timer',
      'Spoon for stirring'
    ],
    steps: [
      {
        text: 'Warm the French press by rinsing with hot water, then discard water',
        tip: 'Preheating ensures your coffee stays hot longer'
      },
      {
        text: 'Add coarse ground coffee to the press (1:15 ratio of coffee to water)',
        tip: 'For a standard 4-cup press, use 27g coffee (about 4 tablespoons)'
      },
      {
        text: 'Pour hot water (95°C) halfway, ensuring all grounds are wet',
        tip: 'Pour in a circular motion to saturate grounds evenly'
      },
      {
        text: 'Stir gently, then add remaining water and cover with plunger just above coffee',
        tip: 'Stirring helps with even extraction'
      },
      {
        text: 'Wait 4 minutes, then slowly press plunger down and serve immediately',
        tip: 'The slower you press, the cleaner your coffee will be'
      }
    ],
    bestFor: ['Full-bodied coffee', 'Medium to dark roasts', 'Bold flavors'],
    imageUrl: '/images/brewing/french-press.jpg',
    link: 'https://example.com/french-press'
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    time: '5 mins',
    difficulty: 'Medium',
    description: 'Pour over brewing highlights the delicate flavors and aromas in coffee, producing a clean, bright cup. Ideal for single-origin coffees.',
    equipment: [
      'Pour over dripper (V60, Chemex, etc.)',
      'Paper filter',
      'Medium-fine ground coffee',
      'Gooseneck kettle',
      'Scale (recommended)'
    ],
    steps: [
      {
        text: 'Place filter in dripper and rinse with hot water, then discard rinse water',
        tip: 'Rinsing removes paper taste and preheats equipment'
      },
      {
        text: 'Add medium-fine ground coffee (1:16 ratio coffee to water)',
        tip: 'For one cup (250ml), use about 15g coffee'
      },
      {
        text: 'Start timer and pour twice the coffee weight in water to bloom (30 seconds)',
        tip: 'Pour in a circular motion from center outward'
      },
      {
        text: 'Continue pouring water slowly in circular motions, pausing as needed',
        tip: 'Keep the water level consistent, never filling to the rim'
      },
      {
        text: 'Allow all water to drip through completely (total brew time: 2.5-3.5 minutes)',
        tip: 'If brewing takes longer, use a coarser grind next time'
      }
    ],
    bestFor: ['Light roasts', 'Single-origin coffees', 'Clean, bright flavors'],
    imageUrl: '/images/brewing/pour-over.jpg',
    link: 'https://example.com/pour-over'
  }
];

const BrewingCard = ({ method, isSelected, onClick }: BrewingCardProps) => (
  <div 
    className={`group cursor-pointer rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
      isSelected 
        ? 'ring-2 ring-brown-600 dark:ring-brown-400 transform scale-[1.02]' 
        : 'hover:shadow-lg hover:-translate-y-1'
    }`}
    onClick={onClick}
    role="button"
    aria-pressed={isSelected}
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
        e.preventDefault();
      }
    }}
  >
    <div className="relative h-40 w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
        aria-hidden="true"
      />
      <div 
        className={`w-full h-full bg-brown-300 dark:bg-gray-700 flex items-center justify-center text-center p-4 ${
          isSelected ? 'bg-opacity-70 dark:bg-opacity-70' : ''
        }`}
      >
        <div className="relative w-8 h-8 mr-2">
          {method.id === 'filter' && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M4 5L8 9M12 19V13M19 5L15 9M12 13C10.8954 13 10 12.1046 10 11V9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V11C14 12.1046 13.1046 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {method.id === 'french-press' && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M6 2V4M10 2V4M14 2V4M18 2V4M6 20V22M10 20V22M14 20V22M18 20V22M4 8H20M4 16H20M6 4H18V20H6V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {method.id === 'pour-over' && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M12 8V12M12 16H12.01M8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </div>
    <div className={`p-4 ${
      isSelected 
        ? 'bg-brown-800 dark:bg-brown-700 text-white' 
        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
    }`}>
      <h3 className="text-xl font-semibold mb-1">{method.name}</h3>
      <div className="flex items-center gap-4 text-sm">
        <span className={`flex items-center ${isSelected ? 'text-brown-100' : 'text-brown-600 dark:text-brown-300'}`}>
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {method.time}
        </span>
        <span className={`flex items-center ${isSelected ? 'text-brown-100' : 'text-brown-600 dark:text-brown-300'}`}>
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {method.difficulty}
        </span>
      </div>
    </div>
  </div>
);

export default function BrewPage() {
  const [selectedMethod, setSelectedMethod] = useState<BrewingMethod>(brewingMethods[0]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-brown-800 to-brown-900 dark:from-gray-800 dark:to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Master the Art of Brewing</h1>
              <p className="text-brown-100 dark:text-gray-300 max-w-2xl">
                Simple, step-by-step guides to brewing delicious Indian coffee at home using various methods.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 section-heading">Choose Your Brewing Method</h2>
            
            {/* Method Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {brewingMethods.map((method) => (
                <BrewingCard
                  key={method.id}
                  method={method}
                  isSelected={selectedMethod.id === method.id}
                  onClick={() => {
                    setSelectedMethod(method);
                    setCurrentStep(0);
                  }}
                />
              ))}
            </div>

            {/* Method Details and Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Method Description */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedMethod.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedMethod.description}
                    </p>
                  </div>
                  <Link
                    href={selectedMethod.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex-shrink-0 px-4 py-2 bg-brown-600 dark:bg-brown-700 hover:bg-brown-700 dark:hover:bg-brown-600 text-white rounded-lg transition-colors inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Shop Equipment
                  </Link>
                </div>

                {/* Method Details */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
                      You'll Need
                    </h3>
                    <ul className="space-y-2">
                      {selectedMethod.equipment.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-brown-600 dark:text-brown-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
                      Best For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMethod.bestFor.map((item, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-brown-100 dark:bg-gray-700 text-brown-800 dark:text-brown-300 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Brewing Steps */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Step-by-Step Instructions
                </h3>

                {/* Progress Steps */}
                <div className="relative mb-8">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-brown-100 dark:bg-gray-700">
                    <div 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brown-600 dark:bg-brown-500 transition-all duration-500"
                      style={{ width: `${((currentStep + 1) / selectedMethod.steps.length) * 100}%` }}
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    {selectedMethod.steps.map((_, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          index < currentStep
                            ? 'bg-brown-600 dark:bg-brown-500 text-white' 
                            : index === currentStep 
                              ? 'bg-brown-600 dark:bg-brown-500 text-white ring-4 ring-brown-200 dark:ring-gray-700' 
                              : 'bg-brown-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => setCurrentStep(index)}
                        aria-label={`Go to step ${index + 1}`}
                        aria-current={index === currentStep ? 'step' : undefined}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Step Content */}
                <div className="bg-brown-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl text-gray-900 dark:text-white font-medium mb-4">
                    {selectedMethod.steps[currentStep].text}
                  </h4>
                  {selectedMethod.steps[currentStep].tip && (
                    <div className="flex items-start mt-4 bg-yellow-50 dark:bg-gray-700 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <span className="font-medium">Pro Tip:</span> {selectedMethod.steps[currentStep].tip}
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-4 py-2 flex items-center text-brown-800 dark:text-brown-300 hover:text-brown-900 dark:hover:text-brown-200 disabled:text-brown-400 dark:disabled:text-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brown-400 dark:focus:ring-brown-500 rounded"
                    aria-label="Previous step"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <div aria-live="polite" className="sr-only">
                    Step {currentStep + 1} of {selectedMethod.steps.length}: {selectedMethod.steps[currentStep].text}
                  </div>
                  {currentStep < selectedMethod.steps.length - 1 ? (
                    <button
                      onClick={() => setCurrentStep(Math.min(selectedMethod.steps.length - 1, currentStep + 1))}
                      className="px-4 py-2 flex items-center bg-brown-600 dark:bg-brown-700 hover:bg-brown-700 dark:hover:bg-brown-600 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-brown-400 dark:focus:ring-brown-500"
                      aria-label="Next step"
                    >
                      Next
                      <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentStep(0);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 flex items-center bg-green-600 hover:bg-green-700 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                      aria-label="Finish and start over"
                    >
                      Start Over
                      <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Simple Note */}
            <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
              Equipment links above may be affiliate links. This helps support the guide at no extra cost to you.
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}