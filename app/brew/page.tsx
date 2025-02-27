'use client';

import { useState } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';

interface BrewMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  time: string;
  steps: string[];
  link: string;
}

const brewMethods: BrewMethod[] = [
  {
    id: 'filter',
    name: 'South Indian Filter',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3V7M17 3V7M17 21V17M7 21V17M12 12C10.8954 12 10 11.1046 10 10V7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7V10C14 11.1046 13.1046 12 12 12ZM7 17C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7M17 17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    time: '15 min',
    steps: [
      'Add coffee powder to upper chamber',
      'Press gently with disc',
      'Pour hot water (90°C)',
      'Wait 15 minutes to drip',
      'Mix with hot milk (optional)',
    ],
    link: 'https://example.com/filter'
  },
  {
    id: 'french',
    name: 'French Press',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18M6 20H18M6 9V16.5M18 9V16.5M9 2V4M15 2V4M9 20V22M15 20V22M6 4C6 4 7 6 12 6C17 6 18 4 18 4M6 20C6 20 7 18 12 18C17 18 18 20 18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    time: '5 min',
    steps: [
      'Add coarse ground coffee',
      'Pour hot water (95°C)',
      'Stir gently and wait 4 min',
      'Slowly press plunger down',
      'Serve immediately',
    ],
    link: 'https://example.com/french-press'
  },
  {
    id: 'pour',
    name: 'Pour Over',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7V14M9 10H15M8 2H16M8 22H16M6 5C4.89543 5 4 5.89543 4 7V13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13V7C20 5.89543 19.1046 5 18 5H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    time: '3 min',
    steps: [
      'Rinse filter with hot water',
      'Add medium-fine coffee',
      'Pour to bloom (30 sec)',
      'Pour in circular motion',
      'Let drip completely',
    ],
    link: 'https://example.com/pour-over'
  }
];

export default function BrewPage() {
  const [selectedMethod, setSelectedMethod] = useState<BrewMethod>(brewMethods[0]);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="bg-brown-800 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">How to Brew</h1>
            <p className="text-brown-100 dark:text-gray-300 text-lg max-w-xl mx-auto">
              Three simple methods to brew amazing Indian coffee at home
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Brew method selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {brewMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => {
                  setSelectedMethod(method);
                  setCurrentStep(0);
                }}
                className={`flex flex-col items-center p-6 rounded-xl transition-all ${
                  selectedMethod.id === method.id
                    ? 'bg-brown-100 dark:bg-brown-900 text-brown-800 dark:text-brown-100 scale-105 shadow-md'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                <div className={`${
                  selectedMethod.id === method.id
                    ? 'text-brown-700 dark:text-brown-300'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {method.icon}
                </div>
                <span className="mt-3 font-medium text-lg">{method.name}</span>
                <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">{method.time}</span>
              </button>
            ))}
          </div>

          {/* Brew steps visualization */}
          <div className="bg-brown-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm relative">
            <h2 className="text-xl font-bold text-center mb-8 text-brown-800 dark:text-brown-100">
              {selectedMethod.name}
            </h2>
            
            {/* Progress bars */}
            <div className="max-w-xl mx-auto mb-10 px-4">
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-200 dark:bg-gray-700">
                  <div 
                    className="shadow-none flex flex-col whitespace-nowrap justify-center bg-brown-500 dark:bg-brown-600 transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / selectedMethod.steps.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  {selectedMethod.steps.map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <button
                        onClick={() => setCurrentStep(index)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm mb-2 ${
                          index <= currentStep
                            ? 'bg-brown-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        } ${index === currentStep ? 'ring-4 ring-brown-200 dark:ring-brown-900' : ''}`}
                        aria-label={`Step ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current step content */}
            <div className="px-4">
              <div className="max-w-xl mx-auto bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm text-center">
                <p className="text-xl text-gray-800 dark:text-white font-medium">
                  {selectedMethod.steps[currentStep]}
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between max-w-xl mx-auto mt-8 px-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded ${
                  currentStep === 0
                    ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-brown-100 dark:bg-brown-900 text-brown-800 dark:text-brown-100 hover:bg-brown-200 dark:hover:bg-brown-800'
                }`}
              >
                Previous
              </button>
              {currentStep < selectedMethod.steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded"
                >
                  Next
                </button>
              ) : (
                <Link
                  href={selectedMethod.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded inline-flex items-center"
                >
                  Shop Equipment
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
            
            {/* Simple switcher */}
            <div className="mt-10 text-center">
              <button
                onClick={() => {
                  const currentIndex = brewMethods.findIndex(m => m.id === selectedMethod.id);
                  const nextIndex = (currentIndex + 1) % brewMethods.length;
                  setSelectedMethod(brewMethods[nextIndex]);
                  setCurrentStep(0);
                }}
                className="text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-300 text-sm font-medium inline-flex items-center"
              >
                Try another method
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Info note */}
          <div className="mt-12 text-center text-sm text-gray-500">
            Equipment links are affiliate links. Your purchase supports this site.
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}