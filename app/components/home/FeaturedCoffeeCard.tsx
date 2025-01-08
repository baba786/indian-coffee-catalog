import Link from 'next/link';
import Image from 'next/image';

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
      <div className="relative h-48 bg-brown-100">
        {coffee.imageUrl ? (
          <Image
            src={coffee.imageUrl}
            alt={coffee.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-brown-300">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21v-2h18v2H2zM20 8V5h-2v3h2zm0-5h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2v2c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v2z"/>
            </svg>
          </div>
        )}
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