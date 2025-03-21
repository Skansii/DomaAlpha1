import Link from 'next/link';

export default function Resources() {
  // Mock data for blog posts and resources
  const blogPosts = [
    {
      id: 1,
      title: 'Top Kitchen Design Trends for 2023',
      excerpt: 'Explore the latest kitchen design trends that are defining modern homes this year.',
      category: 'Design Trends',
      date: 'June 15, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Cabinet Hardware',
      excerpt: 'A comprehensive guide to selecting cabinet hardware that complements your kitchen style.',
      category: 'Buyer\'s Guide',
      date: 'May 22, 2023',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Space-Saving Solutions for Small Kitchens',
      excerpt: 'Creative storage solutions and design tips to maximize functionality in compact kitchens.',
      category: 'Space Planning',
      date: 'April 18, 2023',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Sustainability Factor: Eco-Friendly Cabinet Materials',
      excerpt: 'Discover environmentally conscious options for your next kitchen renovation project.',
      category: 'Sustainability',
      date: 'March 30, 2023',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Kitchen Lighting: Creating the Perfect Ambiance',
      excerpt: 'Learn how to layer lighting to create both functional and atmospheric kitchen spaces.',
      category: 'Lighting',
      date: 'March 12, 2023',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'The Complete Guide to Kitchen Islands',
      excerpt: 'Everything you need to know about incorporating an island into your kitchen design.',
      category: 'Design Elements',
      date: 'February 28, 2023',
      readTime: '9 min read'
    }
  ];

  const resourceCategories = [
    {
      title: 'Design Guides',
      description: 'Comprehensive guides to help you plan your perfect kitchen',
      resources: [
        { id: 1, title: 'Kitchen Layout Planning Guide', type: 'PDF' },
        { id: 2, title: 'Cabinet Style Selection Chart', type: 'Interactive Tool' },
        { id: 3, title: 'Color Schemes for Modern Kitchens', type: 'PDF' }
      ]
    },
    {
      title: 'Installation & Maintenance',
      description: 'Resources to help you maintain your cabinets and kitchen',
      resources: [
        { id: 4, title: 'Cabinet Installation Best Practices', type: 'Video' },
        { id: 5, title: 'Cleaning & Maintenance Guide', type: 'PDF' },
        { id: 6, title: 'Troubleshooting Common Issues', type: 'FAQ' }
      ]
    },
    {
      title: 'Material Education',
      description: 'Learn about different materials and their characteristics',
      resources: [
        { id: 7, title: 'Wood Types Comparison Chart', type: 'PDF' },
        { id: 8, title: 'Countertop Materials Guide', type: 'Interactive Tool' },
        { id: 9, title: 'Finish & Coating Options', type: 'PDF' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Kitchen Design Resources
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Explore our collection of articles, guides, and tools to help you plan, design, and maintain your kitchen.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles & Insights</h2>
          <p className="mt-2 text-gray-600">
            Stay up to date with the latest trends, tips, and expert advice
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Article Image</p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/resources/blog/${post.id}`} className="hover:text-red-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/resources/blog/${post.id}`}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/resources/blog"
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View All Articles
          </Link>
        </div>
      </div>

      {/* Resources & Downloads */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Resources & Downloads</h2>
            <p className="mt-2 text-gray-600">
              Helpful tools, guides, and references for your kitchen project
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {resourceCategories.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.resources.map((resource) => (
                    <li key={resource.id} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-800">{resource.title}</span>
                      <div className="flex items-center">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded mr-2">
                          {resource.type}
                        </span>
                        <Link
                          href={`/resources/download/${resource.id}`}
                          className="text-red-600 hover:text-red-700"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/resources/category/${idx + 1}`}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    View all in this category →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-600">
            Find answers to common questions about kitchen design and installation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { 
                question: 'What is the standard height for kitchen cabinets?', 
                answer: 'Standard base cabinets are typically 34.5 inches tall without countertops, and wall cabinets are usually placed 18 inches above the countertop.' 
              },
              { 
                question: 'How long should a kitchen renovation take?', 
                answer: 'A typical kitchen renovation can take anywhere from 4-8 weeks, depending on the scope of work, material availability, and complexity of the project.' 
              },
              { 
                question: 'What is the most durable countertop material?', 
                answer: 'Quartz and granite are considered among the most durable countertop materials, offering excellent resistance to scratches, heat, and stains.' 
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/resources/faq"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
            <p className="mt-2 text-red-100">
              Get the latest design tips, trends, and special offers sent directly to your inbox.
            </p>
            <div className="mt-8 flex flex-col md:flex-row md:justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-96 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white rounded-md"
              />
              <div className="mt-3 rounded-md shadow md:mt-0 md:ml-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white md:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-red-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 