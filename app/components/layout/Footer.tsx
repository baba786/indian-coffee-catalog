import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const html = document.documentElement;
          setIsDarkMode(html.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Don't render with theme-specific styles until client-side hydration is complete
  if (!mounted) {
    return (
      <footer className="bg-brown-900 py-12">
        {/* Simplified skeleton footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="h-6 bg-brown-800 rounded w-48 mb-4"></div>
              <div className="h-4 bg-brown-800 rounded w-full max-w-md mb-2"></div>
              <div className="h-4 bg-brown-800 rounded w-full max-w-md mb-4"></div>
              <div className="h-4 bg-brown-800 rounded w-3/4 max-w-md"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={isDarkMode ? "bg-gray-900 text-gray-100" : "bg-brown-900 text-brown-100"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">Indian Coffee Guide</h3>
            <p className={isDarkMode ? "text-gray-300 text-sm mb-4 max-w-md" : "text-brown-200 text-sm mb-4 max-w-md"}>
              Your comprehensive resource for discovering and enjoying the finest Indian coffees. From bean to cup, we guide you through India's vibrant coffee culture.
            </p>
            <p className={isDarkMode ? "text-gray-300 text-sm" : "text-brown-200 text-sm"}>
              © {new Date().getFullYear()} Indian Coffee Guide. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/discover" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm" 
                    : "text-brown-200 hover:text-white transition-colors text-sm"
                  }
                >
                  Shop Coffee
                </Link>
              </li>
              <li>
                <Link 
                  href="/roasters" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm" 
                    : "text-brown-200 hover:text-white transition-colors text-sm"
                  }
                >
                  Meet Roasters
                </Link>
              </li>
              <li>
                <Link 
                  href="/guide" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm" 
                    : "text-brown-200 hover:text-white transition-colors text-sm"
                  }
                >
                  Find Your Coffee
                </Link>
              </li>
              <li>
                <Link 
                  href="/brew" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm" 
                    : "text-brown-200 hover:text-white transition-colors text-sm"
                  }
                >
                  How to Brew
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm flex items-center" 
                    : "text-brown-200 hover:text-white transition-colors text-sm flex items-center"
                  }
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="https://twitter.com/indiancoffeeguide" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm flex items-center" 
                    : "text-brown-200 hover:text-white transition-colors text-sm flex items-center"
                  }
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://instagram.com/indiancoffeeguide" 
                  className={isDarkMode 
                    ? "text-gray-300 hover:text-white transition-colors text-sm flex items-center" 
                    : "text-brown-200 hover:text-white transition-colors text-sm flex items-center"
                  }
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={isDarkMode 
          ? "border-t border-gray-800 mt-8 pt-8 text-xs text-gray-400" 
          : "border-t border-brown-800 mt-8 pt-8 text-xs text-brown-300"
        }>
          <p>
            All product names, logos, and brands are property of their respective owners. All coffee information is provided for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}