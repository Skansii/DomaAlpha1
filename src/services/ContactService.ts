export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  error?: string;
  id?: string;
}

/**
 * Service that handles contact form submissions
 */
class ContactService {
  /**
   * Submits a contact form to the backend
   */
  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      // In a real application, this would make an API call to submit the form data
      console.log('Submitting contact form:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // This is a demo implementation
      return {
        success: true,
        id: `inquiry-${Date.now()}`, // In a real app, this would be returned from the server
      };
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        error: 'An error occurred while submitting your message. Please try again later.',
      };
    }
  }
  
  /**
   * Validates contact form data
   * @returns An error message if validation fails, or null if validation passes
   */
  validateContactForm(data: ContactFormData): string | null {
    if (!data.name || data.name.trim().length < 2) {
      return 'Please enter a valid name.';
    }
    
    if (!data.email || !this.isValidEmail(data.email)) {
      return 'Please enter a valid email address.';
    }
    
    if (data.phone && !this.isValidPhone(data.phone)) {
      return 'Please enter a valid phone number or leave it blank.';
    }
    
    if (!data.service) {
      return 'Please select a service you are interested in.';
    }
    
    if (!data.message || data.message.trim().length < 10) {
      return 'Your message should be at least 10 characters long.';
    }
    
    return null;
  }
  
  /**
   * Validates an email address format
   */
  private isValidEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  /**
   * Validates a phone number format
   */
  private isValidPhone(phone: string): boolean {
    // This is a simple validation - in a real app, you'd want more sophisticated validation
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  }
}

// Export as a singleton instance
export default new ContactService(); 