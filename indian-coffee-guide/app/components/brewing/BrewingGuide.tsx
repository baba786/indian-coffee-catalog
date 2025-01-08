'use client';

import { useState, useEffect } from 'react';
import { BrewingMethod } from '@/types';
import { brewingMethods } from '@/data';

interface BrewingStep {
  order: number;
  instruction: string;
  tip?: string;
  duration?: number; // in seconds
}

interface BrewingGuideProps {
  methodId?: string;
}

export default function BrewingGuide({ methodId = 'south-indian-filter' }: BrewingGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [method, setMethod] = useState<BrewingMethod | null>(null);

  useEffect(() => {
    const selectedMethod = brewingMethods.find(m => m.id === methodId);
    setMethod(selectedMethod || null);
  }, [methodId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  if (!method) return null;

  const startTimer = (duration: number) => {
    setTimer(duration);
    setIsTimerRunning(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentStep + 1) / method.steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Method Header */}
      <div className="bg-brown-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">{method.name}</h2>
        <p className="text-brown-100">{method.description}</p>
        
        {/* Equipment List */}
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">You'll need:</h3>
          <div className="flex flex-wrap gap-2">
            {method.equipment.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-brown-800 text-brown-100 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-brown-100">
        <div
          className="h-2 bg-brown-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current Step */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-brown-600">
            Step {currentStep + 1} of {method.steps.length}
          </span>
          {timer > 0 && (
            <span className="text-lg font-mono font-bold">
              {formatTime(timer)}
            </span>
          )}
        </div>

        <div className="bg-brown-50 rounded-lg p-6 mb-6">
          <p className="text-lg text-gray-900 mb-2">
            {method.steps[currentStep].instruction}
          </p>
          {method.steps[currentStep].tip && (
            <p className="text-sm text-brown-600 italic">
              Tip: {method.steps[currentStep].tip}
            </p>
          )}
        </div>

        {/* Timer Controls */}
        {method.steps[currentStep].duration && timer === 0 && !isTimerRunning && (
          <button
            onClick={() => startTimer(method.steps[currentStep].duration!)}
            className="w-full bg-brown-100 text-brown-800 py-3 rounded-lg mb-4 hover:bg-brown-200 transition-colors"
          >
            Start Timer ({method.steps[currentStep].duration}s)
          </button>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 text-brown-800 disabled:text-brown-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(method.steps.length - 1, prev + 1))}
            disabled={currentStep === method.steps.length - 1 || (timer > 0 && isTimerRunning)}
            className="px-4 py-2 bg-brown-800 text-white rounded-lg disabled:bg-brown-400 disabled:cursor-not-allowed"
          >
            {currentStep === method.steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}