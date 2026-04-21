import React from 'react';
import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: BookOpenIcon,
    title: 'Legal research automation',
    description: 'Search Ugandan laws and judgments in plain language.',
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Citation-backed answers',
    description: 'Get conversational search and deep research grounded in sources.',
  },
  {
    icon: FolderOpenIcon,
    title: 'Internal knowledge retrieval',
    description: 'Retrieve institutional records, templates, notes, and prior work.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Contract risk monitoring',
    description: 'Track legal exposure, obligations, renewals, and review priorities.',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Compliance and SOP review',
    description: 'Monitor compliance posture, SOP adherence, and regulatory change.',
  },
];

const LawLensProduct: React.FC = () => {
  return (
    <section id="law-lens" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Inaugural Product
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Our inaugural product: Law Lens Uganda.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Law Lens Uganda is a legal research automation and compliance
              monitoring platform built for Uganda. It helps law firms, courts,
              regulators, corporate legal teams, and institutions search
              Ugandan laws and judgments in plain language, get citation-backed
              answers grounded in verifiable legal text, retrieve internal
              knowledge from contracts, policies, and archived records, monitor
              contract risk, and stay ahead of compliance obligations and
              regulatory change.
            </p>
            <a
              href="https://lawlens.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg bg-brand-blue px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            >
              Visit Law Lens Uganda
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-xl">
            <div className="-mx-6 -mt-6 mb-6 h-1 bg-brand-blue" />
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-gray-950">Law Lens Uganda</p>
                <p className="text-xs text-gray-500">Legal intelligence for institutions</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-brand-blue">
                Built by Magentiq AI Labs Ltd.
              </span>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-950">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawLensProduct;
