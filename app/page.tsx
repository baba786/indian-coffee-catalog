import Image from "next/image";
import Link from "next/link";
import BaseLayout from "./components/layout/BaseLayout";
import { Suspense } from "react";

// Components
import QuickActionCard from "./components/home/QuickActionCard";
import FeaturedCoffeeCard from "./components/home/FeaturedCoffeeCard";
import { LoadingCard } from "./components/shared/LoadingCard";

const featuredCoffees = [
  {
    id: 1,
    name: "MS Estate Blend",
    roaster: "Blue Tokai Coffee Roasters",
    description: "A signature blend from Mysore-Chikmagalur with notes of dark chocolate, caramel, and nuts. Medium-dark roast.",
    price: "₹449",
    imageUrl: "/ms-estate.jpg",
    link: "https://bluetokaicoffee.com/products/ms-estate-blend"
  },
  {
    id: 2,
    name: "Ratnagiri Estate Natural",
    roaster: "KC Roasters",
    description: "Award-winning natural process coffee with intense fruity notes of strawberry and blueberry. Light-medium roast.",
    price: "₹599",
    imageUrl: "/ratnagiri-natural.jpg",
    link: "https://kcroasters.com/products/ratnagiri-estate"
  },
  {
    id: 3,
    name: "Baarbara Estate",
    roaster: "Curious Life Coffee",
    description: "Single estate coffee from Chikmagalur with notes of chocolate, orange, and brown sugar. Medium roast.",
    price: "₹449",
    imageUrl: "/baarbara.jpg",
    link: "https://curiouslife.in/products/baarbara-estate"
  },
  {
    id: 4,
    name: "Attikan Estate Gold",
    roaster: "Third Wave Coffee Roasters",
    description: "Premium selection from Attikan Estate with notes of caramel, citrus, and honey. Medium roast.",
    price: "₹499",
    imageUrl: "/attikan-gold.jpg",
    link: "https://thirdwavecoffee.in/products/attikan-estate-gold"
  },
  {
    id: 5,
    name: "Monsoon Malabar Reserve",
    roaster: "Dope Coffee Roasters",
    description: "Traditional monsooned coffee with low acidity, full body, and spicy notes. Dark roast.",
    price: "₹549",
    imageUrl: "/monsoon-reserve.jpg",
    link: "https://dopecoffee.in/products/monsoon-malabar-reserve"
  },
  {
    id: 6,
    name: "Riverdale N72",
    roaster: "Black Baza Coffee",
    description: "Shade-grown coffee with notes of dark chocolate, fig, and walnut. Medium-dark roast.",
    price: "₹475",
    imageUrl: "/riverdale.jpg",
    link: "https://blackbazacoffee.com/products/riverdale-n72"
  }
];

export default function Home() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-brown-50">
        {/* Hero Section - Mobile Optimized */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:py-32">
            <div className="text-center">
              <h1 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Find Your Perfect<br className="sm:hidden" /> Indian Coffee
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Not sure where to start? Take our quick quiz to discover coffees you'll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
                <Link
                  href="/guide"
                  className="btn-primary w-full sm:w-auto"
                >
                  Take the Quiz
                </Link>
                <Link
                  href="/discover"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Browse All Coffees
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section - Horizontal Scroll on Mobile */}
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 px-4">Quick Access</h2>
            <div className="flex overflow-x-auto gap-4 pb-6 px-4 -mx-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 scrollbar-hide">
              <QuickActionCard 
                href="/discover?filter=beginner"
                title="New to Coffee?"
                description="Start with our hand-picked beginner-friendly options →"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
              />
              <QuickActionCard 
                href="/roasters"
                title="Meet the Roasters"
                description="Discover India's best coffee roasters →"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
              <QuickActionCard 
                href="/discover?filter=bestsellers"
                title="Community Favorites"
                description="See what other coffee lovers are buying →"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* Featured Products Section - Mobile Optimized */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Staff Picks This Week
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                These are the coffees we're currently enjoying. Each one has been personally
                tested and selected by our team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Suspense fallback={[1, 2, 3].map(i => <LoadingCard key={i} />)}>
                {featuredCoffees.map((coffee) => (
                  <FeaturedCoffeeCard key={coffee.id} coffee={coffee} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
