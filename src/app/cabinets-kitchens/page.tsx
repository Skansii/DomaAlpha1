import Link from 'next/link';

export default function CabinetsKitchens() {
  // Mock data for demonstration purposes
  const categories = [
    { id: 1, name: 'Modern Cabinets', description: 'Sleek and contemporary designs for modern homes' },
    { id: 2, name: 'Classic Kitchens', description: 'Timeless designs with traditional craftsmanship' },
    { id: 3, name: 'Budget-Friendly Options', description: 'Affordable solutions without compromising quality' },
    { id: 4, name: 'Luxury Collections', description: 'Premium materials and exclusive designs' },
    { id: 5, name: 'Space-Saving Solutions', description: 'Efficient designs for smaller spaces' },
    { id: 6, name: 'Custom Kitchens', description: 'Fully customizable options for unique spaces' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Cabinets & Kitchens</h1>
          <p className="mt-4 text-xl text-gray-500">
            Browse our extensive collection of high-quality cabinets and kitchen designs
          </p>
        </div>

        {/* Filters Section */}
        <div className="mt-12 border-t border-b border-gray-200 py-6">
          <div className="flex justify-center space-x-6">
            <div>
              <label htmlFor="style" className="block text-sm font-medium text-gray-700">Style</label>
              <select
                id="style"
                name="style"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option>All Styles</option>
                <option>Modern</option>
                <option>Classic</option>
                <option>Contemporary</option>
                <option>Traditional</option>
                <option>Rustic</option>
              </select>
            </div>

            <div>
              <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
              <select
                id="material"
                name="material"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option>All Materials</option>
                <option>Wood</option>
                <option>Laminate</option>
                <option>Metal</option>
                <option>Glass</option>
                <option>Mixed</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range</label>
              <select
                id="price"
                name="price"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option>All Prices</option>
                <option>Budget</option>
                <option>Mid-range</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Category Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href={`/cabinets-kitchens/category/${category.id}`} className="hover:text-red-600">
                    {category.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                <div className="mt-4">
                  <Link 
                    href={`/cabinets-kitchens/category/${category.id}`}
                    className="text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Browse collection →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Can't find what you're looking for?</h2>
            <p className="mt-2 text-gray-600">
              We offer custom solutions tailored to your specific needs and preferences.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Contact Us For Custom Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 