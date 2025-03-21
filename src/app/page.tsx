import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6 md:p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transform Your Kitchen with Doma Design
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
          High-quality cabinets and kitchen solutions tailored to your unique space and style.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
          >
            Explore Our Catalog
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-red-600 font-medium rounded-md border border-red-600 hover:bg-gray-50 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Designs</h2>
          <Link href="/services" className="text-red-600 hover:text-red-700 font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Design Image {item}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {item === 1 ? 'Modern Kitchen' : item === 2 ? 'Classic Cabinets' : 'Contemporary Style'}
                </h3>
                <p className="text-gray-600 mb-3">
                  {item === 1 
                    ? 'Sleek design with cutting-edge features.' 
                    : item === 2 
                      ? 'Timeless elegance with quality craftsmanship.' 
                      : 'Innovative solutions for the modern home.'}
                </p>
                <Link href="/services" className="text-red-600 hover:text-red-700 font-medium">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-red-600 text-white p-6 md:p-8 rounded-lg text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Transform Your Kitchen?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their homes with Doma Design.
        </p>
        <Link
          href="/login"
          className="inline-block px-6 py-3 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition duration-300"
        >
          Create Your Account
        </Link>
      </section>
    </div>
  );
} 