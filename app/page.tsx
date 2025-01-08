import Image from "next/image";
import Link from "next/link";
import BaseLayout from "./components/layout/BaseLayout";

const featuredCoffees = [
  {
    id: 1,
    name: "Monsoon Malabar",
    roaster: "Blue Tokai",
    description: "A smooth, full-bodied coffee with notes of dark chocolate and spices.",
    price: "₹449",
    imageUrl: "/monsoon-malabar.jpg",
    link: "https://bluetokaicoffee.com"
  },
  {
    id: 2,
    name: "Attikan Estate",
    roaster: "Third Wave Coffee",
    description: "Bright and fruity with hints of orange and caramel.",
    price: "₹399",
    imageUrl: "/attikan.jpg",
    link: "https://thirdwavecoffee.in"
  },
  {
    id: 3,
    name: "Ratnagiri Estate",
    roaster: "Dope Coffee",
    description: "Light roast with floral notes and a honey sweetness.",
    price: "₹499",
    imageUrl: "/ratnagiri.jpg",
    link: "https://dopecoffee.in"
  }
];

export default function Home() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-brown-50">
        {/* Hero Section */}
        <div className="relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Find Your Perfect Indian Coffee
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Not sure where to start? Take our quick quiz to discover coffees you'll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/guide"
                  className="btn-primary"
                >
                  Take the Quiz
                </Link>
                <Link
                  href="/discover"
                  className="btn-secondary"
                >
                  Browse All Coffees
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                href="/discover?filter=beginner"
                className="group bg-brown-50 p-8 rounded-lg hover:bg-brown-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brown-800">New to Coffee?</h3>
                <p className="text-gray-600">
                  Start with our hand-picked beginner-friendly options →
                </p>
              </Link>
              <Link 
                href="/roasters"
                className="group bg-brown-50 p-8 rounded-lg hover:bg-brown-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brown-800">Meet the Roasters</h3>
                <p className="text-gray-600">
                  Discover India's best coffee roasters →
                </p>
              </Link>
              <Link 
                href="/discover?filter=bestsellers"
                className="group bg-brown-50 p-8 rounded-lg hover:bg-brown-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brown-800">Community Favorites</h3>
                <p className="text-gray-600">
                  See what other coffee lovers are buying →
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Staff Picks This Week
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These are the coffees we're currently enjoying. Each one has been personally
                tested and selected by our team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCoffees.map((coffee) => (
                <div key={coffee.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-brown-100">
                    <div className="absolute inset-0 flex items-center justify-center text-brown-300">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 21v-2h18v2H2zM20 8V5h-2v3h2zm0-5h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2v2c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-brown-600 mb-1">{coffee.roaster}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{coffee.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{coffee.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-800 font-semibold">{coffee.price}</span>
                      <Link
                        href={coffee.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
