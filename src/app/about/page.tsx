import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Doma Design</h1>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Doma Design began with a simple mission: to create beautiful, functional kitchens that transform homes and enhance lives.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced designers and craftsmen combine innovative design with traditional craftsmanship to create kitchen and cabinet solutions that are both stunning and practical.
              </p>
              <p className="text-gray-600">
                With a focus on quality materials, attention to detail, and customer satisfaction, we've grown to become a trusted name in kitchen design and renovation.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center min-h-[300px]">
              <p className="text-gray-500">Company Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Quality', description: 'We use only the finest materials and proven construction methods to ensure your kitchen stands the test of time.' },
            { title: 'Innovation', description: 'We constantly explore new design concepts and technologies to offer cutting-edge solutions to our clients.' },
            { title: 'Sustainability', description: 'We're committed to environmentally responsible practices in our materials, manufacturing, and operations.' }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Jane Smith', role: 'Founder & Lead Designer', bio: 'With over 15 years of experience in interior design, Jane leads our creative vision.' },
            { name: 'Michael Chen', role: 'Head of Production', bio: 'Michael ensures that every project meets our exacting standards of quality and craftsmanship.' },
            { name: 'Sarah Johnson', role: 'Client Experience Manager', bio: 'Sarah works closely with clients to ensure their vision becomes reality.' }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Team Member Photo</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-red-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 