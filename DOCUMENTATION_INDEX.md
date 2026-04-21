# 📚 Documentation Index

Complete documentation guide for the Magentiq AI Labs Ltd. landing page project. All documentation files organized by category for easy navigation.

---

## 🚀 **Getting Started**

### **📖 Main Documentation**
- **[README.md](./README.md)** - **START HERE** - Complete project overview, features, and quick start guide
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-deployment checklist for production launch

### **⚡ Quick Setup**
```bash
# Clone and setup
git clone https://github.com/MagentIQ-UG/magentiq-landing-page.git
cd magentiq-landing-page/magentiq-landing
npm install

# Development
npm run dev  # Frontend: http://localhost:5174

# Production build  
npm run build:all
npm start    # Server: http://localhost:8080
```

---

## 🔧 **Configuration & Setup**

### **🌐 Environment Configuration**
- **[ENVIRONMENT.md](./ENVIRONMENT.md)** - Complete environment variables guide
  - Development `.env` setup
  - Production Azure configuration
  - Gmail SMTP setup with app passwords
  - Security best practices
  - Troubleshooting common issues

### **🎨 Brand Guidelines**
- **[../magentiq_branding_guidelines.md](../magentiq_branding_guidelines.md)** - Brand assets and usage guidelines
  - Logo usage and restrictions  
  - Color palette (#0056b3 brand blue)
  - Typography (Inter font family)
  - Asset files and formats

---

## 🚀 **Deployment**

### **☁️ Azure Deployment**
- **[AZURE_DEPLOYMENT.md](./AZURE_DEPLOYMENT.md)** - Complete Azure App Service deployment guide
  - Azure account setup
  - App Service configuration
  - Continuous deployment from GitHub
  - Environment variables setup
  - Build and deployment process

### **🌐 Domain Configuration**
- **[DOMAIN_SETUP.md](./DOMAIN_SETUP.md)** - Microsoft 365 domain setup with Azure
  - DNS record configuration
  - SSL certificate setup
  - Custom domain binding
  - HTTPS redirect configuration
  - Testing and verification

---

## 👥 **Development**

### **🤝 Contributing**
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Developer contribution guide
  - Development setup and guidelines
  - Code style and best practices
  - Pull request process
  - Component development patterns
  - Testing requirements

### **🏗️ Backend Documentation**
- **[server/README.md](./server/README.md)** - Backend server documentation
  - Architecture explanation (JavaScript vs TypeScript)
  - Production server setup (app.cjs)
  - API endpoints and email system

---

## 📊 **Project Management**

### **📝 Version History**
- **[CHANGELOG.md](./CHANGELOG.md)** - Complete project changelog
  - Version history and release notes
  - Development timeline
  - Feature additions and bug fixes
  - Deployment milestones

### **📋 Project Status**
- **[../project-status.md](../project-status.md)** - Current project status
- **[../project-completion-summary.md](../project-completion-summary.md)** - Project completion overview
- **[../implementation-checklist.md](../implementation-checklist.md)** - Implementation progress

---

## 📁 **File Structure Overview**

### **📂 Frontend (`src/`)**
```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── Hero.tsx        # Landing section with animation
│   ├── LawLensProduct.tsx   # Product showcase
│   ├── Solutions.tsx   # AI capabilities
│   ├── WhyChooseMagentiq.tsx  # Competitive advantages
│   ├── Contact.tsx     # Contact form with validation
│   └── Footer.tsx      # Footer links and info
├── constants/brand.ts   # Brand colors and constants
├── assets/logos/       # Brand assets and partner logos
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

### **📂 Backend (`server/`)**
```
server/
├── app.cjs            # 🟢 Production server (CommonJS)
├── app.ts.backup      # TypeScript reference (archived)
└── README.md         # Server documentation
```

### **📂 Configuration**
```
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite build configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.*.json    # TypeScript configurations
├── web.config         # Azure IIS configuration
└── deploy.cmd         # Azure deployment script
```

---

## 🛠️ **Available Commands**

### **Development**
```bash
npm run dev          # Start frontend development server
npm run start:dev    # Start frontend + backend together
npm run lint         # Run ESLint code quality checks
npm run preview      # Preview production build locally
```

### **Building**
```bash
npm run build        # Build frontend only
npm run build:server # Prepare server (no compilation needed)
npm run build:all    # Build frontend + prepare server
```

### **Production**
```bash
npm start           # Start production server
```

### **Testing**
```bash
# Health check
curl http://localhost:8080/api/health

# Contact form test
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","company":"Test Co","inquiryType":"General Information","message":"Test message"}'
```

---

## 🔗 **Key URLs**

### **Development**
- **Frontend**: http://localhost:5174
- **Backend**: http://localhost:8080
- **Health Check**: http://localhost:8080/api/health

### **Production** *(after deployment)*
- **Website**: https://magentiqlabs.com
- **WWW**: https://www.magentiqlabs.com
- **Health Check**: https://magentiqlabs.com/api/health
- **Azure App**: https://magentiq-landing.azurewebsites.net

---

## 📞 **Support & Contact**

### **Technical Support**
- **Email**: jothamw@magentiqlabs.com
- **GitHub Issues**: [Repository Issues](https://github.com/MagentIQ-UG/magentiq-landing-page/issues)
- **Documentation**: This documentation index

### **Business Information**
- **Company**: Magentiq AI Labs Ltd.
- **Location**: Kampala, Uganda 🇺🇬
- **Phone**: +256 750 990 718
- **LinkedIn**: https://www.linkedin.com/company/magentiq-labs
- **Product**: https://lawlens.io/

---

## 🎯 **Documentation Roadmap**

### **Completed ✅**
- [x] Project overview and setup guide
- [x] Environment configuration guide
- [x] Azure deployment instructions
- [x] Domain setup with Microsoft 365
- [x] Contributing guidelines for developers
- [x] Complete changelog and version history
- [x] Pre-deployment checklist
- [x] Server architecture documentation

### **Future Enhancements 📋**
- [ ] API documentation with OpenAPI/Swagger
- [ ] Automated testing documentation
- [ ] Performance optimization guide
- [ ] Analytics and monitoring setup
- [ ] Backup and disaster recovery procedures
- [ ] Multi-language support documentation

---

## 📊 **Project Statistics**

### **Documentation**
- **Total Documentation Files**: 7 comprehensive guides
- **Total Lines**: ~65,000+ lines of documentation
- **Coverage**: Complete project lifecycle
- **Last Updated**: June 23, 2025

### **Codebase**
- **Frontend Components**: 7 React components
- **TypeScript Files**: 14+ files
- **Total Code Lines**: ~14,000+ lines
- **Dependencies**: 28 production, 24 development
- **Build Size**: 287KB JS (79KB gzipped), 33KB CSS (6KB gzipped)

---

## 🏆 **Quick Reference**

### **Emergency Checklist**
1. **Server issues**: Check `npm start` and health endpoint
2. **Email problems**: Verify environment variables
3. **Domain issues**: Check DNS propagation
4. **Build failures**: Run `npm run build:all`
5. **Azure problems**: Check Application Insights logs

### **Common Tasks**
- **New feature**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Deployment**: See [AZURE_DEPLOYMENT.md](./AZURE_DEPLOYMENT.md)
- **Configuration**: See [ENVIRONMENT.md](./ENVIRONMENT.md)
- **Domain setup**: See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

---

**📚 Complete documentation ecosystem for production-ready deployment!**

*Built in Kampala, Uganda by Magentiq AI Labs Ltd.* 
