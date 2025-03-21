'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold text-red-600 text-xl">
              DOMA DESIGN
            </Link>
          </div>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 