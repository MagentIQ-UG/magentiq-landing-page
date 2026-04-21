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
    description: 'Track contract risk, obligations, renewals, and review priorities.',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Compliance monitoring',
    description: 'Stay ahead of regulatory change and compliance obligations.',
  },
];

const LawLensProduct: React.FC = () => {
  return (
    <section id="law-lens" className="section-padding bg-gray-950 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Inaugural Product
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Our inaugural product: Law Lens Uganda.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Law Lens Uganda is a legal research automation and compliance
              monitoring platform built for Uganda. It helps law firms, courts,
              regulators, corporate legal teams, and institutions search
              Ugandan laws and judgments in plain language, get citation-backed
              answers, retrieve internal knowledge, monitor contract risk, and
              stay ahead of compliance obligations and regulatory change.
            </p>
            <a
              href="https://lawlens.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-brand-blue transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Visit Law Lens Uganda
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Law Lens Uganda</p>
                <p className="text-xs text-gray-400">Legal intelligence workspace</p>
              </div>
              <span className="rounded-full border border-blue-300/40 px-3 py-1 text-xs font-medium text-blue-200">
                Built by Magentiq AI Labs Ltd.
              </span>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-lg border border-white/10 bg-gray-900/70 p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-300">
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
