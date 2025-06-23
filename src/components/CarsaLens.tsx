import React, { useState } from 'react';
import { 
  EyeIcon,
  PlayCircleIcon,
  ChevronRightIcon,
  BoltIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const CarsaLens: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'document-processing',
      title: 'Intelligent Document Processing',
      description: 'Advanced AI algorithms automatically extract, analyze, and categorize information from resumes, cover letters, and application documents with 95% accuracy.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'candidate-screening',
      title: 'Automated Candidate Screening',
      description: 'Screen hundreds of candidates in minutes by automatically matching skills, experience, and qualifications against job requirements using natural language processing.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline your entire recruitment pipeline from application processing to candidate ranking, reducing manual effort by 80% while improving accuracy.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 'real-time-insights',
      title: 'Real-time Analytics',
      description: 'Get instant insights into candidate pools, skill gaps, and recruitment performance with comprehensive dashboards and detailed reporting.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    { metric: '10x', label: 'Faster Screening', description: 'Complete candidate screening in minutes, not hours' },
    { metric: '95%', label: 'Accuracy Rate', description: 'Industry-leading document processing precision' },
    { metric: '80%', label: 'Cost Reduction', description: 'Significant savings on manual recruitment processes' },
    { metric: '24/7', label: 'Availability', description: 'Continuous processing without human intervention' },
  ];

  const useCases = [
    {
      title: 'High-Volume Recruitment',
      description: 'Process thousands of applications efficiently during peak hiring seasons',
      metrics: '500+ resumes processed per hour',
    },
    {
      title: 'Skills-Based Matching',
      description: 'Automatically identify candidates with specific technical skills and certifications',
      metrics: '200+ skill categories recognized',
    },
    {
      title: 'Compliance & Bias Reduction',
      description: 'Ensure fair and consistent evaluation while maintaining compliance standards',
      metrics: '100% audit trail maintained',
    },
  ];

  return (
    <section id="carsa-lens" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/20 mb-6">
            <EyeIcon className="w-4 h-4 mr-2" />
            Flagship Product
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Introducing{' '}
            <span className="gradient-text">Carsa Recruitment Lens</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Our flagship intelligent document processing platform revolutionizes recruitment by automating candidate screening and document analysis with cutting-edge AI technology.
          </p>

          {/* Demo CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open('https://carsalens.com', '_blank')}
              className="btn-primary flex items-center group"
            >
              <PlayCircleIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              View Live Demo
              <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Request Free Trial
            </button>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-600">Carsa Recruitment Lens</div>
                <div className="w-6 h-6"></div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Candidates Processed Today</span>
                      <div className="text-2xl font-bold text-green-600">247</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Qualified Matches</span>
                      <div className="text-2xl font-bold text-green-600">89</div>
                    </div>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">Document Processing</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-brand-blue/10 to-green-500/10 rounded flex items-end justify-between px-2 pb-2">
                    {[92, 87].map((height, i) => (
                      <div 
                        key={i}
                        className="bg-brand-blue rounded-t-sm animate-pulse"
                        style={{ 
                          height: `${height}%`, 
                          width: '12px',
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Processing</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <BoltIcon className="w-4 h-4 text-brand-blue" />
                <span className="text-sm font-medium text-gray-700">AI Powered</span>
              </div>
            </div>
          </div>

          {/* Interactive Features */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Powerful Features That Drive Results
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg' 
                      : 'bg-white border-gray-200 hover:border-brand-blue/50 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                      activeFeature === index ? 'bg-white/20' : 'bg-brand-blue/10'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        activeFeature === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        activeFeature === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Carsa Recruitment Lens?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements in your recruitment capabilities 
              from day one with our proven AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-white">{benefit.metric}</div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {benefit.label}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Use Cases
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how Carsa Recruitment Lens transforms different aspects of your recruitment process 
              with real-world applications and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                  <PresentationChartLineIcon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors duration-300">
                  {useCase.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm font-medium text-brand-blue bg-brand-blue/10 rounded-lg px-3 py-2 inline-block">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue/90 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Carsa Recruitment Lens?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading companies already using Carsa Recruitment Lens to streamline their hiring and discover top talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://carsalens.com', '_blank')}
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
              >
                <PlayCircleIcon className="w-5 h-5 mr-2" />
                Explore Carsa Recruitment Lens
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
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

export default CarsaLens; 