'use client';

import Link from 'next/link';

interface QuickActionCardProps {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function QuickActionCard({ href, title, description, icon }: QuickActionCardProps) {
  return (
    <Link 
      href={href}
      className="group flex-shrink-0 w-[280px] bg-brown-50 dark:bg-gray-700 p-6 rounded-lg hover:bg-brown-100 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {icon && <div className="text-brown-600 dark:text-brown-300 mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-brown-800 dark:group-hover:text-brown-200 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </Link>
  );
}