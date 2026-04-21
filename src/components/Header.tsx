import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Law Lens Uganda', href: '#law-lens' },
  { name: 'Why It Matters', href: '#why-it-matters' },
  { name: 'Company/Product', href: '#company-product' },
  { name: 'Contact', href: '#contact' },
];

const Logo: React.FC<{ className?: string }> = ({ className = 'h-14' }) => (
  <svg
    viewBox="0 0 400 120"
    className={`${className} w-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="Inter, Arial, sans-serif"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logo-grad-upper-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0056b3" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <linearGradient id="logo-grad-upper-left" x1="100%" y1="50%" x2="0%" y2="50%">
        <stop offset="0%" stopColor="#0056b3" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <linearGradient id="logo-grad-lower" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0056b3" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
    </defs>

    <g transform="translate(95, 65)">
      <circle cx="0" cy="0" r="6" fill="#0056b3" />
      <line x1="0" y1="0" x2="25" y2="-20" stroke="url(#logo-grad-upper-right)" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="0" x2="-25" y2="-10" stroke="url(#logo-grad-upper-left)" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="0" x2="10" y2="30" stroke="url(#logo-grad-lower)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="-20" r="3" fill="#0056b3" />
      <circle cx="-25" cy="-10" r="3" fill="#0056b3" />
      <circle cx="10" cy="30" r="3" fill="#0056b3" />
    </g>

    <g transform="translate(80, 70)">
      <text x="0" y="0" fontSize="36" fontWeight="700" fill="#1e1e1e" letterSpacing="-0.6px">
        Magent<tspan fill="#0056b3">IQ</tspan>
      </text>
    </g>
  </svg>
);

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="h-1 w-full bg-brand-blue" />
      <nav className="container-custom flex h-20 items-center justify-between" aria-label="Global">
        <a
          href="#"
          className="-m-1.5 flex items-center p-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="sr-only">Magentiq AI Labs Ltd.</span>
          <Logo />
        </a>

        <div className="hidden items-center gap-x-8 lg:flex">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="rounded-md px-2 py-1 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex">
          <a
            href="https://lawlens.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Explore Law Lens
          </a>
        </div>

        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-gray hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5"
                onClick={(event) => {
                  event.preventDefault();
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="sr-only">Magentiq AI Labs Ltd.</span>
                <Logo className="h-12" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-brand-gray hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="-mx-3 block w-full rounded-lg px-3 py-3 text-left text-base font-semibold text-brand-gray transition-colors duration-200 hover:bg-primary-50 hover:text-brand-blue"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://lawlens.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-lg bg-brand-blue px-4 py-3 text-center font-semibold text-white"
              >
                Explore Law Lens Uganda
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
