import React, { useState } from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'demo', label: 'Request Demo' },
    { value: 'consultation', label: 'AI Consultation' },
    { value: 'carsa-lens', label: 'Carsa Lens Inquiry' },
    { value: 'custom-solution', label: 'Custom AI Solution' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      primary: "hello@magentiqlabs.com",
      secondary: "LinkedIn: @magentiq-labs",
      description: "Get in touch for any inquiries or support needs"
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      primary: "+256 750 990 718",
      secondary: "Uganda (EAT Timezone)",
      description: "Speak directly with our AI experts"
    },
    {
      icon: MapPinIcon,
      title: "Visit Us",
      primary: "National ICT Innovation Hub",
      secondary: "Plot 19-21 Port Bell Road, Kampala",
      description: "Located in Uganda's premier tech innovation center"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      primary: "Mon - Fri: 9:00 AM - 6:00 PM EAT",
      secondary: "East Africa Time (GMT+3)",
      description: "Serving African businesses and beyond"
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submissionDate: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show user-friendly error message
      let errorMessage = 'Sorry, there was an error sending your message. ';
      if (error instanceof Error) {
        if (error.message.includes('fetch')) {
          errorMessage += 'Please check your internet connection and try again.';
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += 'Please try again or contact us directly at hello@magentiqlabs.com';
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 hours. 
              One of our AI experts will contact you soon to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Send Another Message
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#carsa-lens');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Explore Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/20 mb-6">
            <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your{' '}
            <span className="gradient-text">AI Journey</span>
            {' '}Together
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your African business with AI? Get in touch with our Kampala-based experts 
            for a personalized consultation and discover how MagentIQ can drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-brand-blue font-medium text-sm">{method.primary}</p>
                      <p className="text-gray-600 text-sm">{method.secondary}</p>
                      <p className="text-gray-500 text-xs mt-1">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('https://carsalens.com', '_blank')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-blue hover:text-white transition-colors duration-200 rounded-lg text-sm"
                  >
                    <span className="flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-2" />
                      Schedule Demo
                    </span>
                    <span>→</span>
                  </button>
                  <button 
                    onClick={() => window.open('https://www.linkedin.com/company/magentiq-labs', '_blank')}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-blue hover:text-white transition-colors duration-200 rounded-lg text-sm"
                  >
                    <span className="flex items-center">
                      <GlobeAltIcon className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 ${
                        errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {errors.inquiryType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your AI requirements, goals, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-brand-blue text-white hover:bg-brand-blue/90 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">We Review Your Request</h4>
                <p className="text-sm text-gray-600">Our team reviews your inquiry and matches you with the right AI expert for your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
                <p className="text-sm text-gray-600">Schedule a personalized consultation to discuss your AI goals and explore potential solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tailored Proposal</h4>
                <p className="text-sm text-gray-600">Receive a customized proposal outlining how our AI solutions can transform your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 