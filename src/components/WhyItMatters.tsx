import React from 'react';
import {
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const points = [
  {
    icon: ArchiveBoxIcon,
    title: 'Fragmented source material',
    description:
      'Legal teams still work across scattered PDFs, statutes, judgments, contracts, and internal files.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Manual research overhead',
    description:
      'Professional time is lost searching, checking, summarizing, and reconciling information by hand.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reactive compliance',
    description:
      'Institutions need earlier visibility into obligations, contract risk, and regulatory change.',
  },
];

const WhyItMatters: React.FC = () => {
  return (
    <section id="why-it-matters" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Why It Matters
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            From fragmented information to trusted institutional intelligence.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Legal and regulatory work is still slowed down by fragmented PDFs,
            scattered records, manual research, and reactive compliance
            processes. Magentiq AI Labs Ltd. is building products that turn
            trusted source material and institutional knowledge into searchable,
            verifiable, and actionable intelligence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-lg border border-gray-200 bg-white p-6">
              <point.icon className="mb-5 h-8 w-8 text-brand-blue" />
              <h3 className="text-lg font-semibold text-gray-950">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
