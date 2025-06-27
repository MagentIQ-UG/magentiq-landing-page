import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-blue-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating AI network visualization */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-blue rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-brand-blue rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-gray-500 rounded-full animate-bounce opacity-20"></div>
        
        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-brand-blue rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute inset-8 border border-blue-400 rounded-full opacity-15 animate-ping"></div>
          <div className="absolute inset-16 border border-blue-300 rounded-full opacity-20 animate-bounce"></div>
        </div>

        {/* Data points */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-brand-blue to-transparent rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-l from-blue-500 to-transparent rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-brand-blue rounded-full opacity-30 animate-ping"></div>
      </div>

      <div className="container-custom text-center relative z-10 top-10 md:top-14">
        <div className="max-w-4xl mx-auto">
          {/* Announcing badge */}
          <div className="inline-flex items-center bg-white/80 border border-brand-blue/30 rounded-full px-6 py-2 mb-4 lg:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-brand-blue rounded-full mr-3 animate-pulse"></span>
            <span className="text-brand-blue text-sm font-medium">🚀 Introducing Next-Gen AI Solutions</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-6 leading-tight">
            <span className="text-gray-900">Intelligent </span>
            <span className="gradient-text">Document Processing</span>
            <br />
            <span className="text-gray-900">for </span>
            <span className="text-brand-blue">Tomorrow's Challenges</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-2 lg:mb-4 max-w-3xl mx-auto leading-relaxed">
            MagentIQ AI Labs empowers businesses with cutting-edge artificial intelligence technologies that automate document-intensive workflows, drive innovation, and deliver transformative growth.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-6 lg:mb-12 max-w-2xl mx-auto">
            From our flagship product <strong className="text-brand-blue">Carsa Recruitment Lens</strong> to comprehensive AI solutions, we're building the future of intelligent document processing.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 lg:mb-16">
            <a 
              href="https://www.carsalens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xs md:text-lg px-8 py-4 inline-flex items-center group"
            >
              Experience Carsa Recruitment Lens
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#carsa-lens" 
              className="btn-secondary text-xs md:text-lg px-8 py-4 inline-flex items-center group"
            >
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Key stats */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-brand-blue mb-2">500+</div>
              <div className="text-gray-600">Documents Processed Daily</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-brand-blue mb-2">95%</div>
              <div className="text-gray-600">Processing Accuracy</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-brand-blue mb-2">10x</div>
              <div className="text-gray-600">Faster Than Manual Review</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-blue/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 