import React from 'react';
import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gray-950 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Contact
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Work with us.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              For partnerships, product demos, startup programs, or
              infrastructure support, contact Magentiq AI Labs Ltd.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue">
                  <EnvelopeIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:jothamw@magentiqlabs.com"
                    className="mt-1 inline-block text-lg font-semibold text-white hover:text-blue-200"
                  >
                    jothamw@magentiqlabs.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPinIcon className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Kampala, Uganda
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <BuildingOffice2Icon className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Product
                  </p>
                  <a
                    href="https://lawlens.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-lg font-semibold text-white hover:text-blue-200"
                  >
                    Law Lens Uganda
                    <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:jothamw@magentiqlabs.com"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-brand-blue transition-colors duration-200 hover:bg-blue-50"
              >
                Email Magentiq AI Labs Ltd.
              </a>
              <a
                href="https://lawlens.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-brand-blue"
              >
                Visit Law Lens Uganda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
