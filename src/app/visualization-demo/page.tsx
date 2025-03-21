'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VisualizationDemo() {
  const [activeTab, setActiveTab] = useState('demo');
  const [viewAngle, setViewAngle] = useState('front');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedColor, setSelectedColor] = useState('white');

  // These would be replaced with actual color/style data in a real app
  const cabinetStyles = [
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'shaker', name: 'Shaker' },
    { id: 'rustic', name: 'Rustic' },
  ];

  const cabinetColors = [
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'oak', name: 'Oak', hex: '#D4A76A' },
    { id: 'espresso', name: 'Espresso', hex: '#3D2314' },
    { id: 'navy', name: 'Navy', hex: '#1D365D' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            3D Visualization Demo
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how our interactive 3D visualization tools help you design your perfect kitchen
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto border-b border-gray-200">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('demo')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'demo'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Interactive Demo
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'features'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Features & Benefits
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'faqs'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            How It Works
          </button>
        </nav>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        {/* Interactive Demo Tab */}
        {activeTab === 'demo' && (
          <div>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Try Our Interactive Kitchen Visualizer</h2>
              <p className="mt-3 text-gray-600">
                Customize cabinets, choose colors, and see your kitchen from different angles
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls and Customization Sidebar */}
              <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Design Options</h3>
                
                {/* Cabinet Style */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cabinet Style</label>
                  <div className="grid grid-cols-2 gap-2">
                    {cabinetStyles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`py-2 px-3 text-sm rounded-md ${
                          selectedStyle === style.id
                            ? 'bg-red-100 text-red-700 border border-red-300'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {style.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Cabinet Color */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cabinet Color</label>
                  <div className="grid grid-cols-2 gap-2">
                    {cabinetColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`flex items-center py-2 px-3 text-sm rounded-md ${
                          selectedColor === color.id
                            ? 'bg-red-100 text-red-700 border border-red-300'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span 
                          className="inline-block w-4 h-4 rounded-full mr-2 border border-gray-300" 
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* View Angle */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">View Angle</label>
                  <div className="flex space-x-2">
                    {['front', 'side', 'top'].map((angle) => (
                      <button
                        key={angle}
                        onClick={() => setViewAngle(angle)}
                        className={`flex-1 py-2 px-3 text-sm rounded-md ${
                          viewAngle === angle
                            ? 'bg-red-100 text-red-700 border border-red-300'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {angle.charAt(0).toUpperCase() + angle.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                    Save This Design
                  </button>
                  <button className="w-full mt-3 border border-red-600 text-red-600 hover:bg-red-50 py-2 px-4 rounded-md">
                    Share Design
                  </button>
                </div>
              </div>
              
              {/* Visualization Display */}
              <div className="lg:col-span-2">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-w-16 aspect-h-9 flex items-center justify-center h-[400px]">
                  <div className="text-center p-8">
                    <p className="text-gray-500 mb-4">
                      This is where the 3D kitchen visualization would appear.
                      <br />
                      Currently showing: {selectedStyle} style in {selectedColor} color, {viewAngle} view.
                    </p>
                    <p className="text-sm text-gray-400">
                      (In a real implementation, this would be an interactive 3D model powered by Three.js or a similar technology)
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Selected Configuration</h4>
                  <p className="text-gray-600 mt-1">
                    {cabinetStyles.find(s => s.id === selectedStyle)?.name} cabinets in {cabinetColors.find(c => c.id === selectedColor)?.name}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Get Price Estimate
                    </button>
                    <Link 
                      href="/login" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      Save & Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features & Benefits Tab */}
        {activeTab === 'features' && (
          <div>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Features & Benefits</h2>
              <p className="mt-3 text-gray-600">
                Our 3D visualization tools help you make confident decisions and avoid costly mistakes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Realistic Visualization',
                  description: 'See photorealistic renderings of your kitchen design with accurate lighting and textures.',
                  icon: '🖼️'
                },
                {
                  title: 'Interactive Design',
                  description: 'Change cabinet styles, colors, and hardware in real-time to find your perfect combination.',
                  icon: '🔄'
                },
                {
                  title: 'Multiple Viewpoints',
                  description: 'View your kitchen from any angle to ensure the design works from all perspectives.',
                  icon: '📐'
                },
                {
                  title: 'Space Planning',
                  description: 'Input your room dimensions for an accurate representation of how cabinets will fit in your space.',
                  icon: '📏'
                },
                {
                  title: 'Share & Collaborate',
                  description: 'Share design visualizations with family or contractors to get feedback and ensure alignment.',
                  icon: '🔗'
                },
                {
                  title: 'Eliminate Guesswork',
                  description: 'No more imagining how selections will look together. See exactly what you'll get before you buy.',
                  icon: '✓'
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white shadow-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Create an Account to Start Designing
              </Link>
            </div>
          </div>
        )}

        {/* How It Works Tab */}
        {activeTab === 'faqs' && (
          <div>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-3 text-gray-600">
                Our easy-to-use visualization tool puts the power of professional design in your hands
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-gray-200 ml-6">
                {[
                  {
                    title: 'Create Your Account',
                    description: 'Sign up for free to access our 3D visualization tools and save your designs.'
                  },
                  {
                    title: 'Input Your Space Dimensions',
                    description: 'Add the measurements of your kitchen to create an accurate model of your space.'
                  },
                  {
                    title: 'Choose Cabinet Styles',
                    description: 'Browse our catalog of cabinet styles and select options to visualize in your space.'
                  },
                  {
                    title: 'Customize Colors and Finishes',
                    description: 'Experiment with different colors, materials, and hardware to find your perfect match.'
                  },
                  {
                    title: 'View in 3D',
                    description: 'Explore your design from multiple angles to ensure it works for your space.'
                  },
                  {
                    title: 'Save and Share',
                    description: 'Save multiple design options, share them with others, and request a quote when you're ready.'
                  }
                ].map((step, idx) => (
                  <li key={idx} className="mb-10 ml-6">
                    <span className="flex absolute -left-10 justify-center items-center w-8 h-8 rounded-full bg-red-100 text-red-600 ring-8 ring-white">
                      {idx + 1}
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mb-4 text-base text-gray-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 max-w-3xl mx-auto bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'Do I need any special software to use the 3D visualization tool?',
                    answer: 'No, our visualization tool works in your web browser. You don\'t need to download or install any additional software.'
                  },
                  {
                    question: 'Can I use the visualization tool on my mobile device?',
                    answer: 'Yes, our tool is responsive and works on smartphones and tablets, though the experience is optimized for larger screens.'
                  },
                  {
                    question: 'How accurate are the visualizations?',
                    answer: 'Our visualizations are highly accurate and use actual product specifications. However, colors may appear slightly different on screens than in real life due to monitor variations.'
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-medium text-gray-900">{faq.question}</h4>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ready to design your dream kitchen?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Create a free account today to access the full version of our 3D visualization tools and start designing your perfect kitchen.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 mx-2"
              >
                Create Free Account
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mx-2"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 