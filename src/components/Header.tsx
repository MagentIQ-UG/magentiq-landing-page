import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Carsa Lens', href: '#carsa-lens' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-custom flex items-center justify-between h-24" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a 
            href="#" 
            className="-m-1.5 p-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="sr-only">MagentIQ AI Labs</span>
            <div className="h-16 w-auto flex items-center">
              {/* SVG Logo inline for better control */}
              <svg 
                viewBox="0 0 400 120" 
                className="h-16 w-auto"
                xmlns="http://www.w3.org/2000/svg" 
                fontFamily="Inter, Arial, sans-serif"
              >
                <defs>
                  <linearGradient id="grad-upper-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0056b3"/>
                    <stop offset="100%" stopColor="#000000"/>
                  </linearGradient>
                  
                  <linearGradient id="grad-upper-left" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#0056b3"/>
                    <stop offset="100%" stopColor="#000000"/>
                  </linearGradient>
                  
                  <linearGradient id="grad-lower" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0056b3"/>
                    <stop offset="100%" stopColor="#000000"/>
                  </linearGradient>
                </defs>

                {/* Icon: Network node */}
                <g transform="translate(95, 65)">
                  <circle cx="0" cy="0" r="6" fill="#0056b3"/>
                  <line x1="0" y1="0" x2="25" y2="-20" stroke="url(#grad-upper-right)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="0" x2="-25" y2="-10" stroke="url(#grad-upper-left)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="0" x2="10" y2="30" stroke="url(#grad-lower)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="25" cy="-20" r="3" fill="#0056b3"/>
                  <circle cx="-25" cy="-10" r="3" fill="#0056b3"/>
                  <circle cx="10" cy="30" r="3" fill="#0056b3"/>
                </g>

                {/* Text */}
                <g transform="translate(80, 70)">
                  <text x="0" y="0" fontSize="36" fontWeight="700" fill="#1e1e1e" letterSpacing="-0.6px">
                    Magent<tspan fill="#0056b3">IQ</tspan>
                  </text>
                </g>
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md px-2 py-1"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button 
            onClick={() => scrollToSection('#contact')}
            className="btn-primary"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a 
                href="#" 
                className="-m-1.5 p-1.5"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="sr-only">MagentIQ AI Labs</span>
                <div className="h-12 w-auto flex items-center">
                  {/* Mobile logo (slightly larger) */}
                  <svg 
                    viewBox="0 0 400 120" 
                    className="h-12 w-auto"
                    xmlns="http://www.w3.org/2000/svg" 
                    fontFamily="Inter, Arial, sans-serif"
                  >
                    <defs>
                      <linearGradient id="grad-upper-right-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0056b3"/>
                        <stop offset="100%" stopColor="#000000"/>
                      </linearGradient>
                      
                      <linearGradient id="grad-upper-left-mobile" x1="100%" y1="50%" x2="0%" y2="50%">
                        <stop offset="0%" stopColor="#0056b3"/>
                        <stop offset="100%" stopColor="#000000"/>
                      </linearGradient>
                      
                      <linearGradient id="grad-lower-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0056b3"/>
                        <stop offset="100%" stopColor="#000000"/>
                      </linearGradient>
                    </defs>

                    <g transform="translate(95, 65)">
                      <circle cx="0" cy="0" r="6" fill="#0056b3"/>
                      <line x1="0" y1="0" x2="25" y2="-20" stroke="url(#grad-upper-right-mobile)" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="0" y1="0" x2="-25" y2="-10" stroke="url(#grad-upper-left-mobile)" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="0" y1="0" x2="10" y2="30" stroke="url(#grad-lower-mobile)" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="25" cy="-20" r="3" fill="#0056b3"/>
                      <circle cx="-25" cy="-10" r="3" fill="#0056b3"/>
                      <circle cx="10" cy="30" r="3" fill="#0056b3"/>
                    </g>

                    <g transform="translate(80, 70)">
                      <text x="0" y="0" fontSize="36" fontWeight="700" fill="#1e1e1e" letterSpacing="-0.6px">
                        Magent<tspan fill="#0056b3">IQ</tspan>
                      </text>
                    </g>
                  </svg>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-brand-blue w-full text-left transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 