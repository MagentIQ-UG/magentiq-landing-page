import React from 'react';

const challenges = [
  {
    audience: 'Judiciary & Courts',
    metric: '167,353 pending cases',
    context: 'National Court Case Census 2025 · 30.1% backlog',
    description:
      'Research bottlenecks and manual processes slow rulings. Judges and registrars spend significant time on tasks that could be automated.',
  },
  {
    audience: 'Law Firms',
    metric: '5+ sources per query',
    context: 'ULII · PDFs · Google · WhatsApp · physical files',
    description:
      'No single trusted research layer. Manual citation verification is time-consuming and risks missing or citing overruled authorities.',
  },
  {
    audience: 'Tribunals & Commissions',
    metric: 'Limited research capacity',
    context: 'Specialised mandates, minimal dedicated staff',
    description:
      'Domain-specific questions in tax, land, human rights, and labour demand deep research. Consistency of decisions over time is difficult to audit.',
  },
  {
    audience: 'Corporate Legal',
    metric: '7+ regulatory bodies',
    context: 'URA · BOU · NEMA · UCC · CMA · PPDA · URSB',
    description:
      'Compliance obligations span multiple authorities. Most risks are identified reactively after obligations have already been breached.',
  },
];

const responsePoints = [
  'Unify public legal sources, judgments, and institutional records into one searchable layer.',
  'Ground answers in verifiable source material so professionals can review citations quickly.',
  'Turn contracts, policies, archived files, and internal knowledge into usable intelligence.',
  'Move compliance from reactive checking to earlier monitoring of obligations, risk, and change.',
];

const WhyItMatters: React.FC = () => {
  return (
    <section id="why-it-matters" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Why It Matters
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            From fragmented information to trusted institutional intelligence.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Uganda's legal and regulatory work is still slowed by fragmented
            PDFs, scattered records, manual research, and compliance teams that
            react after issues surface. Law Lens Uganda addresses that gap by
            turning judgments, laws, contracts, policies, and internal records
            into searchable, verifiable, and actionable legal intelligence.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-brand-blue/20 bg-blue-50 p-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Challenge Map
          </p>
          <p className="mt-3 text-base leading-7 text-gray-700">
            The need is clearest in high-trust institutions where the cost of
            slow research, missed citations, scattered records, and late
            compliance action directly affects decisions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {challenges.map((challenge) => (
            <div
              key={challenge.audience}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="h-1.5 bg-brand-blue" />
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-brand-blue">
                  {challenge.audience}
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-wide text-gray-950 md:text-3xl">
                  {challenge.metric}
                </h3>
                <p className="mt-4 text-sm font-semibold text-brand-blue">
                  {challenge.context}
                </p>
                <p className="mt-5 text-base font-medium leading-7 text-gray-600">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 rounded-lg border border-brand-blue/20 bg-blue-50 p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              What This Calls For
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-950">
              A trusted layer for research, retrieval, and monitoring.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {responsePoints.map((point) => (
              <div key={point} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-medium leading-6 text-gray-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
