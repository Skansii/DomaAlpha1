'use client';
import Image from 'next/image';
import Link from 'next/link';
import MaterialButton from '@/components/MaterialButton';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Kitchen Design',
      description: 'Our expert designers work with you to create a kitchen that perfectly suits your space, style, and needs.',
      features: ['Personalized consultations', 'Detailed 3D renderings', 'Material and color selection', 'Comprehensive design plans'],
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
      alt: 'Custom kitchen design plans and materials'
    },
    {
      id: 2,
      title: 'Cabinet Manufacturing',
      description: 'High-quality custom cabinets built with precision and care for both aesthetics and durability.',
      features: ['Premium materials', 'Custom sizes and configurations', 'Variety of finishes', 'Hardware options'],
      image: 'https://images.pexels.com/photos/5827904/pexels-photo-5827904.jpeg',
      alt: 'Cabinet manufacturing workshop'
    },
    {
      id: 3,
      title: 'Kitchen Remodeling',
      description: 'Complete renovation services to transform your existing kitchen into the space of your dreams.',
      features: ['Demolition and removal', 'Plumbing and electrical work', 'Cabinet and countertop installation', 'Finishing touches'],
      image: 'https://images.pexels.com/photos/6253386/pexels-photo-6253386.jpeg',
      alt: 'Kitchen remodeling in progress'
    },
    {
      id: 4,
      title: '3D Visualization',
      description: 'See your new kitchen before it\'s built with our advanced 3D visualization tools.',
      features: ['Realistic rendering', 'Virtual walkthroughs', 'Material and color testing', 'Lighting simulation'],
      image: 'https://images.pexels.com/photos/7511774/pexels-photo-7511774.jpeg',
      alt: '3D visualization of kitchen design'
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-96 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 h-96 overflow-hidden">
          <Image 
            src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg" 
            alt="Modern kitchen interior" 
            fill 
            className="object-cover brightness-[0.7] mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 h-96 bg-gradient-to-b from-transparent to-white"></div>
        
        <div className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Comprehensive kitchen and cabinet solutions tailored to your unique needs
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive kitchen and cabinet solutions, from initial design to final installation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                  <Image 
                    src={service.image} 
                    alt={service.alt} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs uppercase tracking-wider rounded-full mb-2">
                      Service {service.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-4">What we offer:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <MaterialButton 
                    href="/contact" 
                    variant="outlined" 
                    color="primary"
                  >
                    Get a Quote
                  </MaterialButton>
                </div>
              </div>
            ))}
          </div>
          
          {/* Custom Project Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image 
                  src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg" 
                  alt="Kitchen designer consulting with client" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply"></div>
              </div>
              
              <div className="p-6 md:p-8 md:w-1/2 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Project Inquiry</h3>
                  <p className="text-gray-600 mb-6">
                    Have a unique project in mind? Our team is ready to tackle custom and specialized kitchen projects. 
                    Tell us your ideas, and we'll work with you to make them happen.
                  </p>
                  <MaterialButton 
                    href="/contact" 
                    variant="contained" 
                    color="primary"
                  >
                    Contact Us
                  </MaterialButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our work and the satisfaction of our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Doma Design transformed our outdated kitchen into a stunning, functional space that's now the heart of our home.",
                name: "Emily Parker",
                location: "San Francisco, CA"
              },
              {
                quote: "The attention to detail and quality of craftsmanship exceeded our expectations. We couldn't be happier with our new cabinets.",
                name: "David Thompson",
                location: "Seattle, WA"
              },
              {
                quote: "Working with Doma was a pleasure from the initial design to the final installation. True professionals who care about their work.",
                name: "Sophia Chen",
                location: "Portland, OR"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <svg className="h-10 w-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 