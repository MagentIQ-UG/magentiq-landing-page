import React from 'react';
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />

      <div className="container-custom relative z-10 pb-16 pt-12 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-brand-blue/20 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm">
            Company behind Law Lens Uganda
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            Magentiq AI Labs Ltd. builds focused AI infrastructure for professional workflows.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-700 md:text-2xl md:leading-10">
            We are the company behind Law Lens Uganda, a legal research
            automation and compliance monitoring platform helping institutions
            search the law, unlock insight from internal records, and stay ahead
            of compliance obligations and regulatory change.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://lawlens.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center px-8 py-4 text-base"
            >
              Explore Law Lens Uganda
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="mailto:jothamw@magentiqlabs.com"
              className="btn-secondary inline-flex items-center px-8 py-4 text-base"
            >
              Contact Us
              <EnvelopeIcon className="ml-2 h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-gray-600">
            Founded in Kampala. Building applied AI for legal, regulatory, and
            institutional work.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          <div className="h-1 w-full bg-brand-blue" />
          <div className="border-b border-gray-200 px-5 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-950">Law Lens Uganda</p>
                <p className="text-xs text-gray-500">
                  Legal intelligence platform for institutions
                </p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">
                A product of Magentiq AI Labs Ltd.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr]">
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                <MagnifyingGlassIcon className="mr-3 h-5 w-5 text-brand-blue" />
                <span className="text-sm text-gray-700">
                  Search Ugandan law, judgments, contracts, and institutional records
                </span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm font-semibold text-gray-950">
                    Citation-backed legal answers
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Responses are designed to connect professional users back to
                    exact section references, verified sources, internal records,
                    and compliance source material.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm font-semibold text-gray-950">
                    Monitoring for obligations and regulatory change
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Workflows support contract renewals, regulatory directives,
                    SOP adherence, alerts, and compliance tracking for institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Built For
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-gray-800">
                {['Law firms', 'Courts', 'Regulators', 'Corporate legal teams'].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-4 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
