import React, { useState } from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  const currentYear = new Date().getFullYear();

  const navigationLinks = {
    company: [
      { name: 'About Us', href: '#why-choose' },
      { name: 'Our Story', href: '#why-choose' },
      { name: 'Careers', href: '#contact' },
      { name: 'News & Press', href: '#contact' },
      { name: 'Contact', href: '#contact' }
    ],
    solutions: [
      { name: 'Carsa Lens', href: '#carsa-lens' },
      { name: 'Machine Learning', href: '#solutions' },
      { name: 'Data Analytics', href: '#solutions' },
      { name: 'AI Consulting', href: '#solutions' },
      { name: 'Custom Development', href: '#solutions' }
    ],
    industries: [
      { name: 'Healthcare', href: '#solutions' },
      { name: 'Finance', href: '#solutions' },
      { name: 'Manufacturing', href: '#solutions' },
      { name: 'Retail', href: '#solutions' },
      { name: 'Technology', href: '#solutions' },
      { name: 'Energy', href: '#solutions' }
    ],
    resources: [
      { name: 'Documentation', href: '#contact' },
      { name: 'API Reference', href: '#contact' },
      { name: 'Support Center', href: '#contact' },
      { name: 'Community', href: '#contact' },
      { name: 'Status Page', href: '#contact' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/magentiq-labs', icon: '🔗' },
    { name: 'Twitter', href: 'https://twitter.com/magentiq', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/MagentIQ-UG', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@magentiq', icon: '📺' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' }
  ];



  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionError('');
    
    if (!email.trim()) {
      setSubscriptionError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', email);
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setSubscriptionError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                {/* Logo */}
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="4" fill="#0056b3"/>
                    <circle cx="8" cy="8" r="2" fill="#0056b3" opacity="0.7"/>
                    <circle cx="24" cy="8" r="2" fill="#0056b3" opacity="0.7"/>
                    <circle cx="8" cy="24" r="2" fill="#0056b3" opacity="0.7"/>
                    <circle cx="24" cy="24" r="2" fill="#0056b3" opacity="0.7"/>
                    <line x1="8" y1="8" x2="16" y2="16" stroke="#0056b3" strokeWidth="1" opacity="0.5"/>
                    <line x1="24" y1="8" x2="16" y2="16" stroke="#0056b3" strokeWidth="1" opacity="0.5"/>
                    <line x1="8" y1="24" x2="16" y2="16" stroke="#0056b3" strokeWidth="1" opacity="0.5"/>
                    <line x1="24" y1="24" x2="16" y2="16" stroke="#0056b3" strokeWidth="1" opacity="0.5"/>
                  </svg>
                  <span className="text-2xl font-bold">
                    Magent<span className="text-brand-blue">IQ</span>
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Building the future of AI for Africa with intelligent document processing solutions 
                that transform businesses and drive measurable results. Based in Kampala, 
                we're democratizing access to cutting-edge AI technologies for local markets.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <EnvelopeIcon className="w-4 h-4 mr-3 text-brand-blue" />
                  hello@magentiqlabs.com
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <PhoneIcon className="w-4 h-4 mr-3 text-brand-blue" />
                  +256 750 990 718
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPinIcon className="w-4 h-4 mr-3 text-brand-blue" />
                  National ICT Innovation Hub, Kampala
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <button
                      key={social.name}
                      onClick={() => window.open(social.href, '_blank')}
                      className="w-10 h-10 bg-gray-800 hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors duration-200"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Company */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {navigationLinks.company.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm text-gray-300 hover:text-brand-blue transition-colors duration-200"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                    Solutions
                  </h4>
                  <ul className="space-y-3">
                    {navigationLinks.solutions.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm text-gray-300 hover:text-brand-blue transition-colors duration-200"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                    Industries
                  </h4>
                  <ul className="space-y-3">
                    {navigationLinks.industries.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm text-gray-300 hover:text-brand-blue transition-colors duration-200"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                Stay Updated
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Get the latest AI insights, product updates, and industry news.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200"
                    />
                    {subscriptionError && (
                      <p className="mt-1 text-xs text-red-400 flex items-center">
                        <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
                        {subscriptionError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isSubscribing
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-brand-blue hover:bg-brand-blue/90 text-white hover:scale-105'
                    }`}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-sm text-green-400 font-medium">
                    Successfully subscribed!
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Thank you for joining our newsletter.
                  </p>
                </div>
              )}

              {/* Quick Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => window.open('https://carsalens.com', '_blank')}
                    className="w-full flex items-center justify-between p-2 bg-gray-800 hover:bg-brand-blue rounded transition-colors duration-200 text-sm"
                  >
                    <span className="flex items-center">
                      <GlobeAltIcon className="w-4 h-4 mr-2" />
                      Carsa Lens
                    </span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full flex items-center justify-between p-2 bg-gray-800 hover:bg-brand-blue rounded transition-colors duration-200 text-sm"
                  >
                    <span className="flex items-center">
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      Contact Us
                    </span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-gray-400">
                © {currentYear} MagentIQ AI Labs Ltd. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center space-x-6">
                {legalLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => window.open(link.href, '_blank')}
                    className="text-xs text-gray-400 hover:text-brand-blue transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Additional Info */}
              <div className="text-xs text-gray-500">
                Made with ❤️ in Kampala for African businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 