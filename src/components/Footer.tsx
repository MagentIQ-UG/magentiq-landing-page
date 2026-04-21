import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-950">
              © 2026 Magentiq AI Labs Ltd. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Law Lens Uganda is a product of Magentiq AI Labs Ltd.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href="https://lawlens.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-primary-700"
            >
              Law Lens Uganda
            </a>
            <a
              href="mailto:jothamw@magentiqlabs.com"
              className="text-brand-blue hover:text-primary-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
