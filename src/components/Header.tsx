'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold text-red-600 text-xl">
              DOMA DESIGN
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors focus:outline-none flex items-center"
              >
                Doma Digital
                <span className="ml-1">{megaMenuOpen ? '▲' : '▼'}</span>
              </button>
              
              {megaMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* First Layer */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Solutions</h3>
                    <div className="space-y-2">
                      <Link href="/solutions/enterprise" className="block text-gray-700 hover:text-red-600">
                        Enterprise Solutions
                      </Link>
                      <Link href="/solutions/small-business" className="block text-gray-700 hover:text-red-600">
                        Small Business
                      </Link>
                      <Link href="/solutions/startups" className="block text-gray-700 hover:text-red-600">
                        Startups
                      </Link>
                    </div>
                  </div>
                  
                  {/* Second Layer */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Services</h3>
                    <div className="space-y-2">
                      <Link href="/services/web-development" className="block text-gray-700 hover:text-red-600">
                        Web Development
                      </Link>
                      <Link href="/services/app-development" className="block text-gray-700 hover:text-red-600">
                        App Development
                      </Link>
                      <Link href="/services/consulting" className="block text-gray-700 hover:text-red-600">
                        Digital Consulting
                      </Link>
                    </div>
                  </div>
                  
                  {/* Third Layer with Wistia Video */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Featured</h3>
                    <div className="rounded-lg overflow-hidden">
                      <script src="https://fast.wistia.com/player.js" async></script>
                      <script src="https://fast.wistia.com/embed/wsvp1u6hff.js" async type="module"></script>
                      <style dangerouslySetInnerHTML={{ __html: `
                        wistia-player[media-id='wsvp1u6hff']:not(:defined) { 
                          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wsvp1u6hff/swatch'); 
                          display: block; 
                          filter: blur(5px); 
                          padding-top:56.25%; 
                        }
                      `}} />
                      <div className="aspect-video">
                        <wistia-player media-id="wsvp1u6hff" aspect="1.7777777777777777"></wistia-player>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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