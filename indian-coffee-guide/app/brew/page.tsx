'use client';

import { useState } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';

const brewingMethods = [
  {
    id: 'filter',
    name: 'South Indian Filter',
    time: '15 mins',
    difficulty: 'Easy',
    steps: [
      'Add 2-3 spoons coffee powder',
      'Press gently with the disc',
      'Add hot water and wait',
      'Collect the decoction',
      'Mix with hot milk and sugar'
    ],
    link: 'https://example.com/filter'
  },
  {
    id: 'french-press',
    name: 'French Press',
    time: '10 mins',
    difficulty: 'Easy',
    steps: [
      'Add coarse ground coffee',
      'Pour hot water (95°C)',
      'Stir gently',
      'Wait 4 minutes',
      'Press and serve'
    ],
    link: 'https://example.com/french-press'
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    time: '5 mins',
    difficulty: 'Medium',
    steps: [
      'Place filter & rinse',
      'Add medium-fine coffee',
      'Pour to bloom (30s)',
      'Pour in circles',
      'Let it drip & serve'
    ],
    link: 'https://example.com/pour-over'
  }
];

const BrewingCard = ({ method, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-6 rounded-lg transition-all ${
      isSelected
        ? 'bg-brown-800 text-white shadow-lg scale-[1.02]'
        : 'bg-white hover:bg-brown-50'
    }`}
  >
    <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
    <div className="flex items-center gap-4 text-sm">
      <span className={isSelected ? 'text-brown-100' : 'text-brown-600'}>
        {method.time}
      </span>
      <span className={isSelected ? 'text-brown-100' : 'text-brown-600'}>
        {method.difficulty}
      </span>
    </div>
  </button>
);

export default function BrewPage() {
  const [selectedMethod, setSelectedMethod] = useState(brewingMethods[0]);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <BaseLayout>
      <div className="min-h-screen bg-brown-50">
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-brown-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">How to Brew Indian Coffee</h1>
              <p className="text-brown-100 max-w-2xl">
                Simple brewing guides for making great coffee at home.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

            {/* Steps Display */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {selectedMethod.name}
                </h2>
                <Link
                  href={selectedMethod.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm text-brown-800 hover:text-brown-900"
                >
                  Buy Equipment →
                </Link>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-brown-100 rounded-full mb-8">
                <div
                  className="h-2 bg-brown-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / selectedMethod.steps.length) * 100}%`,
                  }}
                />
              </div>

              {/* Current Step */}
              <div className="text-center max-w-xl mx-auto">
                <p className="text-xl text-gray-900 mb-8">
                  {selectedMethod.steps[currentStep]}
                </p>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-4 py-2 text-brown-800 disabled:text-brown-400 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button
                    onClick={() =>
                      setCurrentStep(Math.min(selectedMethod.steps.length - 1, currentStep + 1))
                    }
                    disabled={currentStep === selectedMethod.steps.length - 1}
                    className="px-4 py-2 text-brown-800 disabled:text-brown-400 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Simple Note */}
            <div className="mt-12 text-center text-sm text-gray-600">
              Equipment links above may be affiliate links. This helps support the guide at no extra cost to you.
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}