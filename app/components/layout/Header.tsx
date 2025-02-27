'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../shared/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm dark:shadow-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-brown-900 dark:text-brown-100">
              Indian Coffee Guide
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link
              href="/discover"
              className="text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md transition-colors"
            >
              Shop Coffee
            </Link>
            <Link
              href="/roasters"
              className="text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md transition-colors"
            >
              Meet Roasters
            </Link>
            <Link
              href="/guide"
              className="text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md transition-colors"
            >
              Find Your Coffee
            </Link>
            <Link
              href="/brew"
              className="text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md transition-colors"
            >
              How to Brew
            </Link>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button & dark mode toggle */}
          <div className="sm:hidden flex items-center space-x-2">
            <ThemeToggle />
            
            <button
              type="button"
              className="text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/discover"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Coffee
            </Link>
            <Link
              href="/roasters"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Meet Roasters
            </Link>
            <Link
              href="/guide"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Your Coffee
            </Link>
            <Link
              href="/brew"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brown-800 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Brew
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}