import React, { useState } from 'react';
import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  TrophyIcon,
  BoltIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import microsoftLogo from '../assets/logos/microsoft-logo.svg';
import niihLogo from '../assets/logos/niih-logo.png';

const WhyChooseMagentiq: React.FC = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const coreAdvantages = [
    {
      icon: AcademicCapIcon,
      title: "Document Processing Excellence",
      description: "Industry-leading accuracy in extracting, analyzing, and processing information from any document format.",
      details: "Our AI models achieve 95%+ accuracy across all document types, from resumes and CVs to complex enterprise documents, with continuous learning and improvement.",
      stats: "95%+ processing accuracy • 50+ document formats • 99% data extraction precision"
    },
    {
      icon: RocketLaunchIcon,
      title: "10x Faster Processing",
      description: "Revolutionary speed improvements that transform hours of manual work into minutes of automated processing.",
      details: "Carsa Recruitment Lens processes thousands of candidate applications in minutes, while our enterprise solutions handle complex document workflows at unprecedented speeds.",
      stats: "10x faster screening • 500+ docs per hour • Real-time processing • Instant insights"
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise-Grade Security",
      description: "Bank-level security and compliance standards protect your sensitive document data and ensure regulatory adherence.",
      details: "ISO 27001 certified, SOC 2 Type II compliant, GDPR ready, with end-to-end encryption and comprehensive audit trails for all document processing.",
      stats: "ISO 27001 certified • Zero data breaches • GDPR compliant • 256-bit encryption"
    },
    {
      icon: BoltIcon,
      title: "Seamless Integration",
      description: "API-first architecture ensures smooth integration with your existing systems and workflows.",
      details: "Our platform integrates with popular ATS systems, HR platforms, and enterprise applications through robust APIs and pre-built connectors.",
      stats: "50+ integrations • REST APIs • Custom connectors • 24/7 support"
    }
  ];

  const differentiators = [
    {
      icon: LightBulbIcon,
      title: "Research-Backed Innovation",
      description: "Every solution is grounded in the latest AI research and validated through rigorous testing and peer review."
    },
    {
      icon: UserGroupIcon,
      title: "Partnership Approach",
      description: "We work as an extension of your team, providing ongoing support and continuous optimization for long-term success."
    },
    {
      icon: CogIcon,
      title: "End-to-End Solutions",
      description: "From strategy to implementation to support, we provide comprehensive AI transformation services under one roof."
    },
    {
      icon: ChartBarIcon,
      title: "Measurable Results",
      description: "We focus on delivering quantifiable business outcomes with clear KPIs and ROI tracking for every project."
    },
    {
      icon: GlobeAltIcon,
      title: "Industry Agnostic",
      description: "Our versatile AI platform and expertise span across industries, bringing cross-sector insights to your challenges."
    },
    {
      icon: HeartIcon,
      title: "Client-Centric Culture",
      description: "Your success is our success. We build long-term relationships based on trust, transparency, and mutual growth."
    }
  ];

  const successMetrics = [
    { value: "10x", label: "Faster Screening", description: "Complete candidate screening in minutes, not hours" },
    { value: "95%", label: "Accuracy Rate", description: "Industry-leading document processing precision" },
    { value: "80%", label: "Cost Reduction", description: "Significant savings on manual recruitment processes" },
    { value: "24/7", label: "Availability", description: "Continuous processing without human intervention" },
    { value: "500+", label: "Daily Documents", description: "Processing capacity per hour across all formats" },
    { value: "99%", label: "Uptime", description: "Enterprise-grade reliability and performance" }
  ];



  return (
    <section id="why-choose" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent"></div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/20 mb-6">
            <TrophyIcon className="w-4 h-4 mr-2" />
            Why Choose MagentIQ
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="gradient-text">MagentIQ</span>
            {' '}for Document Processing?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your document-intensive workflows with our intelligent processing platform. 
            From recruitment to enterprise automation, see why industry leaders trust MagentIQ.
          </p>
        </div>

        {/* Core Advantages - Interactive */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Competitive Advantages
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four key differentiators that make MagentIQ the preferred choice 
              for enterprise AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Advantage Cards */}
            <div className="space-y-4">
              {coreAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeAdvantage === index
                      ? 'bg-brand-blue text-white border-brand-blue shadow-xl scale-105'
                      : 'bg-white border-gray-200 hover:border-brand-blue/50 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveAdvantage(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      activeAdvantage === index ? 'bg-white/20' : 'bg-brand-blue/10'
                    }`}>
                      <advantage.icon className={`w-6 h-6 ${
                        activeAdvantage === index ? 'text-white' : 'text-brand-blue'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 ${
                        activeAdvantage === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {advantage.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        activeAdvantage === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Advantage Details */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mr-4">
                  {React.createElement(coreAdvantages[activeAdvantage].icon, {
                    className: "w-6 h-6 text-white"
                  })}
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {coreAdvantages[activeAdvantage].title}
                </h4>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {coreAdvantages[activeAdvantage].details}
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Key Statistics
                </h5>
                <p className="text-sm text-brand-blue font-medium">
                  {coreAdvantages[activeAdvantage].stats}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for African Businesses
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed specifically for the African market with localized solutions 
              that address regional challenges and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {successMetrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300 relative">
                  <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond technology, it's our approach, culture, and commitment 
              that sets us apart in the AI landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                  <diff.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {diff.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Backed by Industry Leaders
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships that provide us with cutting-edge technology, 
              local support, and access to global innovation ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Microsoft Partnership */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={microsoftLogo} 
                  alt="Microsoft" 
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                Microsoft for Startups
              </h4>
              <p className="text-sm text-brand-blue font-medium mb-3">Global Technology Partner</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to Azure credits, technical support, and Microsoft's global startup ecosystem 
                accelerating our AI development and deployment capabilities.
              </p>
            </div>

            {/* NIIH Partnership */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={niihLogo} 
                  alt="National ICT Innovation Hub" 
                  className="w-16 h-auto object-contain max-h-12"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                National ICT Innovation Hub
              </h4>
              <p className="text-sm text-brand-blue font-medium mb-3">Innovation Hub Partner</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based at Uganda's premier technology innovation center, providing access to local 
                expertise, networking, and growth opportunities within the African tech ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Document Processing?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join forward-thinking organizations who have revolutionized their workflows 
              with Carsa Recruitment Lens and intelligent document processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#carsa-lens');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMagentiq; 