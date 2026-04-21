import React from 'react';
import {
  CloudIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';

const infrastructureUses = [
  {
    icon: ServerStackIcon,
    label: 'Production hosting',
  },
  {
    icon: DocumentTextIcon,
    label: 'Legal corpus ingestion and document processing',
  },
  {
    icon: CpuChipIcon,
    label: 'Search, AI model serving, and retrieval workflows',
  },
  {
    icon: CloudIcon,
    label: 'Secure institutional workflows on cloud infrastructure',
  },
];

const CompanyProductRelationship: React.FC = () => {
  return (
    <section id="company-product" className="section-padding bg-white">
      <div className="container-custom">
        <div className="rounded-lg border border-brand-blue/20 bg-blue-50 p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Company And Product
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Built by Magentiq AI Labs Ltd.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-800">
                Law Lens Uganda is developed and operated by Magentiq AI Labs
                Ltd. The product is deployed on AWS and uses cloud
                infrastructure for production hosting, legal corpus ingestion,
                document processing, search, AI model serving, and secure
                institutional workflows.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {infrastructureUses.map((item) => (
                  <div key={item.label} className="flex gap-3 rounded-lg bg-white p-4">
                    <item.icon className="h-6 w-6 flex-shrink-0 text-brand-blue" />
                    <p className="text-sm font-medium leading-6 text-gray-800">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 rounded-lg border border-brand-blue/20 bg-white p-4 text-sm font-semibold leading-6 text-gray-900">
                This is the company-product relationship: magentiqlabs.com is
                the company domain for Magentiq AI Labs Ltd.; lawlens.io is the
                product domain for Law Lens Uganda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProductRelationship;
