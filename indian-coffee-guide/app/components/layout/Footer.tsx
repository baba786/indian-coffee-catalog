import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="https://twitter.com/indiancoffeeguide" className="hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="https://instagram.com/indiancoffeeguide" className="hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Indian Coffee Guide
          </p>
        </div>
      </div>
    </footer>
  );
}