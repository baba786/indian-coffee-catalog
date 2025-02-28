'use client';

import { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layout/BaseLayout';
import { brewingMethods } from '../../data';

export default function BrewPage() {
  const [selectedMethod, setSelectedMethod] = useState(brewingMethods[0]);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="bg-brown-800 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
            <h1 className="text-3xl font-bold text-white mb-3">Simple Brewing Guides</h1>
            <p className="text-brown-100 dark:text-gray-300 text-lg max-w-xl mx-auto">
              Learn how to make great Indian coffee at home with these easy methods
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Brewing method selection - Simplified to tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
            {brewingMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => {
                  setSelectedMethod(method);
                  setCurrentStep(0);
                }}
                className={`px-4 py-3 whitespace-nowrap font-medium text-sm border-b-2 ${
                  selectedMethod.id === method.id
                    ? 'border-brown-600 text-brown-600 dark:border-brown-400 dark:text-brown-300'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Method overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedMethod.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Difficulty</h3>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(
                        selectedMethod.difficulty === 'Beginner' ? 1 : 
                        selectedMethod.difficulty === 'Intermediate' ? 2 : 3
                      )].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brown-500 dark:text-brown-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      {selectedMethod.difficulty}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Time Required</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-1 text-brown-500 dark:text-brown-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedMethod.timeRequired} minutes</span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Best For</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedMethod.suitableFor.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>
              
              <div className="bg-brown-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">What You'll Need</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {selectedMethod.equipment.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-brown-500 dark:text-brown-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedMethod.description}
              </p>
            </div>
          </div>

          {/* Step-by-step Instructions - Simplified */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Step-by-Step Instructions
              </h3>
              
              {/* Step Indicators */}
              <div className="flex mb-6 overflow-x-auto pb-2">
                {selectedMethod.steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      currentStep === index 
                        ? 'bg-brown-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              {/* Current Step */}
              <div className="bg-brown-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Step {currentStep + 1}: {selectedMethod.steps[currentStep].instruction}
                </h4>
                {selectedMethod.steps[currentStep].tip && (
                  <div className="flex items-start mt-3 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 text-brown-500 dark:text-brown-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Tip:</strong> {selectedMethod.steps[currentStep].tip}</span>
                  </div>
                )}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded ${
                    currentStep === 0
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Previous
                </button>
                {currentStep < selectedMethod.steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const nextIndex = (brewingMethods.findIndex(m => m.id === selectedMethod.id) + 1) % brewingMethods.length;
                      setSelectedMethod(brewingMethods[nextIndex]);
                      setCurrentStep(0);
                    }}
                    className="px-4 py-2 bg-brown-600 hover:bg-brown-700 text-white rounded"
                  >
                    Try Another Method
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Quick Tips */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Tips for Better Coffee
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brown-500 dark:text-brown-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Use freshly roasted coffee, ideally within 2-4 weeks of the roast date</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brown-500 dark:text-brown-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Grind your coffee just before brewing for maximum freshness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brown-500 dark:text-brown-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">For most methods, the ideal water temperature is 90-96°C (195-205°F)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brown-500 dark:text-brown-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Use filtered water for a cleaner taste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}