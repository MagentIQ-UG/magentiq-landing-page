import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const principles = [
  'Accuracy for high-trust professional decisions',
  'Traceable answers grounded in source material',
  'Operational tools that fit institutional workflows',
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Company Focus
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Focused AI products for high-trust work.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-8 text-gray-700">
              Magentiq AI Labs Ltd. is an AI product company based in Kampala,
              Uganda. We build applied AI systems for professional and
              institutional workflows where accuracy, traceability, and
              operational usefulness matter.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Our current focus is legal research automation, internal
              knowledge retrieval, and compliance intelligence through our
              inaugural product, Law Lens Uganda.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-5"
                >
                  <CheckCircleIcon className="mb-4 h-6 w-6 text-brand-blue" />
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
