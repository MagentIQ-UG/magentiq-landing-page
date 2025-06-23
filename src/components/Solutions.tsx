import React, { useState } from 'react';
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  HeartIcon,
  BeakerIcon,
  TruckIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'document-processing',
      title: 'Intelligent Document Processing',
      icon: DocumentTextIcon,
      description: 'Transform document-intensive workflows with AI-powered automation that extracts, analyzes, and processes information from any document format.',
      features: [
        {
          title: 'Multi-Format Document Support',
          description: 'Process PDFs, Word documents, images, scanned files, and more with 95%+ accuracy across all formats.',
          benefits: ['Universal format compatibility', 'OCR and handwriting recognition', 'Batch processing capabilities']
        },
        {
          title: 'Intelligent Data Extraction',
          description: 'Advanced AI algorithms automatically identify and extract key information, entities, and metadata from complex documents.',
          benefits: ['Named entity recognition', 'Key-value pair extraction', 'Table and form processing']
        },
        {
          title: 'Document Classification & Routing',
          description: 'Automatically categorize documents and route them to appropriate workflows based on content and context.',
          benefits: ['Auto-classification by type', 'Smart workflow routing', 'Priority-based processing']
        },
        {
          title: 'Workflow Automation Integration',
          description: 'Seamlessly integrate with existing business processes and systems for end-to-end automation.',
          benefits: ['API-first architecture', 'Enterprise system integration', 'Custom workflow design']
        }
      ],
      useCases: [
        { title: 'Recruitment & HR', description: 'Automated candidate screening and resume processing (Carsa Recruitment Lens)', metrics: '10x faster screening' },
        { title: 'Financial Services', description: 'Loan applications, KYC documents, and compliance processing', metrics: '80% processing time reduction' },
        { title: 'Healthcare', description: 'Patient records, insurance claims, and medical document processing', metrics: '95% accuracy rate' },
        { title: 'Legal', description: 'Contract analysis, legal document review, and compliance monitoring', metrics: '70% faster review cycles' },
        { title: 'Insurance', description: 'Claims processing, policy documents, and risk assessment', metrics: '60% cost reduction' },
        { title: 'Supply Chain', description: 'Invoice processing, shipping documents, and vendor management', metrics: '85% automation rate' }
      ]
    },
    {
      id: 'recruitment-lens',
      title: 'Carsa Recruitment Lens',
      icon: UserGroupIcon,
      description: 'Our flagship intelligent document processing solution specifically designed for recruitment and talent acquisition workflows.',
      features: [
        {
          title: 'Resume & CV Processing',
          description: 'Advanced AI extracts skills, experience, education, and other key attributes from resumes in any format.',
          benefits: ['Skills taxonomy matching', 'Experience timeline extraction', 'Education verification']
        },
        {
          title: 'Candidate Screening Automation',
          description: 'Intelligent screening algorithms match candidates to job requirements with unprecedented accuracy.',
          benefits: ['Requirements-based scoring', 'Bias-free evaluation', 'Ranking and prioritization']
        },
        {
          title: 'Application Document Analysis',
          description: 'Process cover letters, portfolios, certificates, and supporting documents automatically.',
          benefits: ['Multi-document analysis', 'Credential verification', 'Portfolio assessment']
        },
        {
          title: 'ATS Integration & Analytics',
          description: 'Seamless integration with popular ATS platforms and comprehensive recruitment analytics.',
          benefits: ['ATS workflow integration', 'Candidate journey tracking', 'Performance analytics']
        }
      ],
      useCases: [
        { title: 'High-Volume Recruitment', description: 'Process thousands of applications efficiently', metrics: '95% screening accuracy' },
        { title: 'Executive Search', description: 'Deep analysis for senior-level positions', metrics: '80% time savings' },
        { title: 'Campus Recruitment', description: 'Streamlined graduate hiring processes', metrics: '10x application processing' },
        { title: 'Freelancer Matching', description: 'Project-based talent acquisition', metrics: '90% match quality' },
        { title: 'Internal Mobility', description: 'Employee skill mapping and role matching', metrics: '70% faster placement' },
        { title: 'Diversity Hiring', description: 'Bias-free candidate evaluation', metrics: '50% more diverse hires' }
      ]
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      icon: ChartBarIcon,
      description: 'Transform your document data into actionable insights with advanced analytics and machine learning capabilities.',
      features: [
        {
          title: 'Document Intelligence Dashboard',
          description: 'Real-time insights into document processing workflows, bottlenecks, and performance metrics.',
          benefits: ['Real-time monitoring', 'Performance tracking', 'Bottleneck identification']
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast document volumes, processing times, and resource requirements using machine learning.',
          benefits: ['Volume forecasting', 'Resource planning', 'Trend analysis']
        },
        {
          title: 'Content Analytics & Insights',
          description: 'Extract meaningful patterns and insights from your document content and metadata.',
          benefits: ['Content pattern analysis', 'Sentiment analysis', 'Topic modeling']
        },
        {
          title: 'Compliance & Audit Reporting',
          description: 'Automated compliance monitoring and audit trail generation for regulatory requirements.',
          benefits: ['Compliance tracking', 'Audit trail generation', 'Risk assessment']
        }
      ],
      useCases: [
        { title: 'Process Optimization', description: 'Identify workflow improvement opportunities', metrics: '40% efficiency gain' },
        { title: 'Quality Assurance', description: 'Monitor and improve processing accuracy', metrics: '99% quality score' },
        { title: 'Cost Management', description: 'Track and optimize processing costs', metrics: '30% cost reduction' },
        { title: 'Regulatory Compliance', description: 'Ensure adherence to industry regulations', metrics: '100% compliance rate' },
        { title: 'Business Intelligence', description: 'Extract insights for strategic decisions', metrics: '5x faster insights' },
        { title: 'Risk Management', description: 'Identify and mitigate document-related risks', metrics: '85% risk reduction' }
      ]
    },
    {
      id: 'custom-solutions',
      title: 'Custom Development',
      icon: CogIcon,
      description: 'Tailored intelligent document processing solutions designed for your specific industry requirements and workflows.',
      features: [
        {
          title: 'Industry-Specific Models',
          description: 'Custom AI models trained on your industry\'s document types and terminology for maximum accuracy.',
          benefits: ['Domain-specific training', 'Custom entity types', 'Industry terminology']
        },
        {
          title: 'Bespoke Workflow Design',
          description: 'Design and implement custom document processing workflows that match your unique business processes.',
          benefits: ['Custom workflow logic', 'Business rule engine', 'Process automation']
        },
        {
          title: 'Enterprise Integration',
          description: 'Seamless integration with your existing enterprise systems, databases, and business applications.',
          benefits: ['Legacy system integration', 'API development', 'Data synchronization']
        },
        {
          title: 'Dedicated Support & Training',
          description: 'Comprehensive support, training, and ongoing optimization to ensure maximum ROI.',
          benefits: ['24/7 technical support', 'User training programs', 'Performance optimization']
        }
      ],
      useCases: [
        { title: 'Banking & Finance', description: 'Credit applications, regulatory filings, and transaction documents', metrics: '99.5% accuracy' },
        { title: 'Government', description: 'Citizen services, permit processing, and regulatory compliance', metrics: '75% faster processing' },
        { title: 'Manufacturing', description: 'Quality control documents, supplier contracts, and compliance reports', metrics: '90% automation' },
        { title: 'Education', description: 'Student records, admissions, and academic document processing', metrics: '80% time savings' },
        { title: 'Real Estate', description: 'Property documents, lease agreements, and transaction processing', metrics: '60% faster closings' },
        { title: 'Energy & Utilities', description: 'Regulatory documents, maintenance records, and compliance reporting', metrics: '85% efficiency gain' }
      ]
    }
  ];

  const industries = [
    { icon: BriefcaseIcon, name: 'Recruitment & HR', description: 'Talent acquisition and human resources' },
    { icon: BuildingOfficeIcon, name: 'Financial Services', description: 'Banking, insurance, and fintech' },
    { icon: HeartIcon, name: 'Healthcare', description: 'Medical records and patient data' },
    { icon: BeakerIcon, name: 'Technology', description: 'Software and IT services' },
    { icon: TruckIcon, name: 'Manufacturing', description: 'Industrial and production' },
    { icon: ShoppingBagIcon, name: 'Retail & E-commerce', description: 'Commerce and consumer goods' }
  ];

  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/20 mb-6">
            <ClipboardDocumentListIcon className="w-4 h-4 mr-2" />
            Our Solutions
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Intelligent{' '}
            <span className="gradient-text">Document Processing</span>
            {' '}Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your document-intensive workflows with AI-powered automation that delivers 
            unprecedented accuracy, speed, and insights across industries.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="mb-20">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-4 mx-1 mb-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === index
                    ? 'text-brand-blue border-b-2 border-brand-blue bg-brand-blue/5'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mr-4">
                  {React.createElement(tabs[activeTab].icon, {
                    className: "w-6 h-6 text-white"
                  })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{tabs[activeTab].title}</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                {tabs[activeTab].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {tabs[activeTab].features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Use Cases & Applications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tabs[activeTab].useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-brand-blue/5 transition-colors duration-300">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h5>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{useCase.description}</p>
                    <div className="text-brand-blue font-medium text-sm">{useCase.metrics}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our intelligent document processing solutions are trusted across industries 
              to transform workflows and drive efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <MagnifyingGlassIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Document Workflows?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how Carsa Recruitment Lens and our intelligent document processing 
              solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://carsalens.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Try Carsa Recruitment Lens
              </a>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 