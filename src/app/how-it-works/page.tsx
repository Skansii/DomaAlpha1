import Link from 'next/link';

export default function HowItWorks() {
  // The steps for how the service works
  const steps = [
    {
      id: 1,
      title: 'Browse & Select',
      description: 'Explore our catalog of kitchen designs and cabinet styles. Filter by style, material, or price range to find the perfect match for your space.',
      details: [
        'View high-quality images of different designs',
        'Compare features and specifications',
        'Read customer reviews and testimonials',
        'Save favorite designs to your account'
      ]
    },
    {
      id: 2,
      title: 'Visualize in 3D',
      description: 'Use our advanced 3D visualization tool to see how your selected designs will look in your space. Upload room dimensions or photos for a more accurate preview.',
      details: [
        'Upload room dimensions or photos',
        'View cabinets and kitchens from multiple angles',
        'Experiment with different colors and finishes',
        'Share renderings with family and friends for feedback'
      ]
    },
    {
      id: 3,
      title: 'Customize Your Design',
      description: 'Work with our design experts to customize your selected designs to perfectly fit your space, needs, and preferences.',
      details: [
        'Adjust dimensions to fit your space',
        'Choose from various materials and finishes',
        'Add accessories and special features',
        'Get professional recommendations from our experts'
      ]
    },
    {
      id: 4,
      title: 'Review & Approve',
      description: 'Review your final design, including detailed specifications, pricing, and timeline. Make any necessary adjustments before approving the project.',
      details: [
        'Review detailed 3D renderings',
        'Check complete cost breakdown',
        'Review project timeline',
        'Sign off on final design'
      ]
    },
    {
      id: 5,
      title: 'Production & Delivery',
      description: 'Once approved, your custom kitchen or cabinets go into production. We'll keep you updated on progress and coordinate delivery when ready.',
      details: [
        'Receive regular progress updates',
        'Track your order through production',
        'Schedule convenient delivery',
        'Inspect delivered items for quality'
      ]
    },
    {
      id: 6,
      title: 'Installation & Support',
      description: 'Our professional installation team ensures your new kitchen or cabinets are perfectly installed. We provide ongoing support after installation.',
      details: [
        'Professional installation by certified experts',
        'Thorough quality check after installation',
        'Warranty coverage for peace of mind',
        'Ongoing customer support'
      ]
    }
  ];

  // FAQs about the process
  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'The timeline varies depending on the complexity of your project. On average, from initial consultation to completed installation, most projects take 6-10 weeks. Custom projects may take longer. We'll provide you with a detailed timeline during the review phase.'
    },
    {
      question: 'Can I make changes after approving the design?',
      answer: 'Minor changes can usually be accommodated during the early stages of production. Significant changes after approval may affect the timeline and cost. We recommend making sure you're completely satisfied with the design before giving final approval.'
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes, we provide professional installation services with all our kitchen and cabinet projects. Our certified installers ensure that everything is properly fitted and functioning. If you prefer to use your own installer, we can provide detailed installation instructions.'
    },
    {
      question: 'What warranty do you offer?',
      answer: 'All our products come with a 5-year warranty covering manufacturing defects. Our installation work is guaranteed for 1 year. Extended warranty options are available for purchase. See our warranty page for complete details.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            How It Works
          </h1>
          <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto">
            From design selection to installation, we've made the process of creating your dream kitchen simple and enjoyable.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Simple 6-Step Process</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We've streamlined the journey to your new kitchen to make it as smooth and enjoyable as possible.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} relative md:col-start-${index % 2 === 0 ? '1' : '2'} md:col-end-${index % 2 === 0 ? '2' : '3'}`}>
                    <div className={`mx-auto text-center md:text-${index % 2 === 0 ? 'right' : 'left'} md:max-w-md lg:max-w-lg md:mx-0 md:w-full`}>
                      <div className="relative z-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white text-xl font-bold mx-auto md:mx-0 md:mr-4">
                            {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mt-4">{step.title}</h3>
                          <p className="mt-3 text-base text-gray-500">{step.description}</p>
                          <ul className="mt-4 space-y-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
                  <dt className="px-6 py-4 text-lg font-medium text-gray-900 bg-gray-50">
                    {faq.question}
                  </dt>
                  <dd className="px-6 py-4 text-base text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Still Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mt-4 text-lg text-red-100 max-w-3xl">
                  Create your free account today and begin your journey to a beautiful new kitchen.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <Link
                    href="/login"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-600 bg-white hover:bg-red-50"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/cabinets-kitchens"
                    className="flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-red-700"
                  >
                    Browse Designs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 