'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Doma Design</h3>
            <p className="text-sm text-gray-300">Modern kitchen and cabinet solutions</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-sm">info@domadesign.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Doma Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 