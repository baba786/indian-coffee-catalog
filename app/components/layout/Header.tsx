'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client side
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Don't render the toggle until client-side hydration is complete
  if (!mounted) {
    return (
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl text-brown-900">
                Indian Coffee Guide
              </Link>
            </div>
            <div className="sm:hidden">
              <div className="w-6 h-6"></div> {/* Placeholder for the hamburger icon */}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900/90 shadow-gray-800' : 'bg-white/80 shadow-sm'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className={isDarkMode ? 'font-bold text-xl text-white' : 'font-bold text-xl text-brown-900'}>
              Indian Coffee Guide
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link
              href="/discover"
              className={isDarkMode 
                ? 'text-gray-200 hover:text-brown-300 px-3 py-2 rounded-md transition-colors' 
                : 'text-gray-700 hover:text-brown-800 px-3 py-2 rounded-md transition-colors'
              }
            >
              Shop Coffee
            </Link>
            <Link
              href="/roasters"
              className={isDarkMode 
                ? 'text-gray-200 hover:text-brown-300 px-3 py-2 rounded-md transition-colors' 
                : 'text-gray-700 hover:text-brown-800 px-3 py-2 rounded-md transition-colors'
              }
            >
              Meet Roasters
            </Link>
            <Link
              href="/guide"
              className={isDarkMode 
                ? 'text-gray-200 hover:text-brown-300 px-3 py-2 rounded-md transition-colors' 
                : 'text-gray-700 hover:text-brown-800 px-3 py-2 rounded-md transition-colors'
              }
            >
              Find Your Coffee
            </Link>
            <Link
              href="/brew"
              className={isDarkMode 
                ? 'text-gray-200 hover:text-brown-300 px-3 py-2 rounded-md transition-colors' 
                : 'text-gray-700 hover:text-brown-800 px-3 py-2 rounded-md transition-colors'
              }
            >
              How to Brew
            </Link>
            
            {/* Dark mode toggle */}
            <button 
              onClick={toggleDarkMode} 
              className={isDarkMode
                ? 'p-2 rounded-full bg-gray-700 text-yellow-200 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400'
                : 'p-2 rounded-full bg-gray-100 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brown-400'
              }
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button & dark mode toggle */}
          <div className="sm:hidden flex items-center space-x-3">
            <button 
              onClick={toggleDarkMode} 
              className={isDarkMode
                ? 'p-2 rounded-full bg-gray-700 text-yellow-200 transition-colors'
                : 'p-2 rounded-full bg-gray-100 text-gray-700 transition-colors'
              }
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>
            <button
              type="button"
              className={isDarkMode 
                ? 'text-gray-200 hover:text-brown-300 transition-colors' 
                : 'text-gray-700 hover:text-brown-800 transition-colors'
              }
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
        <div className={isDarkMode 
          ? 'sm:hidden bg-gray-900 border-t border-gray-700 transition-colors' 
          : 'sm:hidden bg-white border-t border-gray-200 transition-colors'
        }>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/discover"
              className={isDarkMode 
                ? 'block px-3 py-2 rounded-md text-gray-200 hover:text-brown-300 hover:bg-gray-800 transition-colors' 
                : 'block px-3 py-2 rounded-md text-gray-700 hover:text-brown-800 hover:bg-brown-50 transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Coffee
            </Link>
            <Link
              href="/roasters"
              className={isDarkMode 
                ? 'block px-3 py-2 rounded-md text-gray-200 hover:text-brown-300 hover:bg-gray-800 transition-colors' 
                : 'block px-3 py-2 rounded-md text-gray-700 hover:text-brown-800 hover:bg-brown-50 transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Meet Roasters
            </Link>
            <Link
              href="/guide"
              className={isDarkMode 
                ? 'block px-3 py-2 rounded-md text-gray-200 hover:text-brown-300 hover:bg-gray-800 transition-colors' 
                : 'block px-3 py-2 rounded-md text-gray-700 hover:text-brown-800 hover:bg-brown-50 transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Find Your Coffee
            </Link>
            <Link
              href="/brew"
              className={isDarkMode 
                ? 'block px-3 py-2 rounded-md text-gray-200 hover:text-brown-300 hover:bg-gray-800 transition-colors' 
                : 'block px-3 py-2 rounded-md text-gray-700 hover:text-brown-800 hover:bg-brown-50 transition-colors'
              }
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