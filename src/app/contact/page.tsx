'use client';

import { useState } from 'react';
import ContactService, { ContactFormData } from '@/services/ContactService';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Kitchen Design'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Validate form data
    const validationError = ContactService.validateContactForm(formData);
    if (validationError) {
      setSubmitError(validationError);
      setIsSubmitting(false);
      return;
    }
    
    // Submit form data
    const response = await ContactService.submitContactForm(formData);
    setIsSubmitting(false);
    
    if (response.success) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Kitchen Design'
      });
    } else {
      setSubmitError(response.error || 'Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as we can.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Office Location</h2>
            <p className="text-gray-600 mb-2">123 Design Street</p>
            <p className="text-gray-600 mb-2">San Francisco, CA 94103</p>
            <p className="text-gray-600">United States</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@domadesign.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-gray-600">
              <strong>Hours:</strong> Monday - Friday: 9am - 5pm
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h2>
          
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                  {submitError}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Kitchen Design">Kitchen Design</option>
                  <option value="Cabinet Manufacturing">Cabinet Manufacturing</option>
                  <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                  <option value="3D Visualization">3D Visualization</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300 disabled:bg-red-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="bg-gray-200 rounded-lg p-6 h-64 flex items-center justify-center">
        <p className="text-gray-500">Map will be displayed here</p>
      </div>
    </div>
  );
} 