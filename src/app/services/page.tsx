import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Custom Kitchen Design',
      description: 'Our expert designers work with you to create a kitchen that perfectly suits your space, style, and needs.',
      features: ['Personalized consultations', 'Detailed 3D renderings', 'Material and color selection', 'Comprehensive design plans'],
      image: 'kitchen-design.jpg'
    },
    {
      title: 'Cabinet Manufacturing',
      description: 'High-quality custom cabinets built with precision and care for both aesthetics and durability.',
      features: ['Premium materials', 'Custom sizes and configurations', 'Variety of finishes', 'Hardware options'],
      image: 'cabinet-manufacturing.jpg'
    },
    {
      title: 'Kitchen Remodeling',
      description: 'Complete renovation services to transform your existing kitchen into the space of your dreams.',
      features: ['Demolition and removal', 'Plumbing and electrical work', 'Cabinet and countertop installation', 'Finishing touches'],
      image: 'kitchen-remodeling.jpg'
    },
    {
      title: '3D Visualization',
      description: 'See your new kitchen before it's built with our advanced 3D visualization tools.',
      features: ['Realistic rendering', 'Virtual walkthroughs', 'Material and color testing', 'Lighting simulation'],
      image: '3d-visualization.jpg'
    }
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          At Doma Design, we offer comprehensive kitchen and cabinet solutions tailored to your unique needs. 
          From initial design to final installation, we handle every aspect of your project with care and precision.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-200 min-h-[250px] flex items-center justify-center">
                  <p className="text-gray-500">Service Image</p>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h3 className="font-semibold text-gray-800 mb-2">What we offer:</h3>
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-block px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-6 md:p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Project Inquiry</h2>
        <p className="text-gray-600 mb-6">
          Don't see exactly what you're looking for? We specialize in custom solutions tailored to your specific needs.
          Contact us to discuss your unique project requirements.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300">
          Contact Us
        </Link>
      </section>
    </div>
  );
} 