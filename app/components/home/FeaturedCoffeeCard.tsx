import Link from 'next/link';
import CoffeeBagImage from '../shared/CoffeeBagImage';

interface FeaturedCoffeeCardProps {
  coffee: {
    id: number;
    name: string;
    roaster: string;
    description: string;
    price: string;
    imageUrl: string;
    link: string;
  };
}

export default function FeaturedCoffeeCard({ coffee }: FeaturedCoffeeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative h-48">
        <CoffeeBagImage name={coffee.name} roaster={coffee.roaster} />
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
  );
}