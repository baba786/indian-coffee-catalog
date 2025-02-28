'use client';

import Link from 'next/link';

interface QuickActionCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function QuickActionCard({ href, title, description, icon }: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="flex-shrink-0 w-60 sm:w-full h-full bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
    >
      <div className="flex items-start">
        <div className="p-2 rounded-md bg-brown-100 dark:bg-gray-700 text-brown-700 dark:text-brown-300">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}