# 🚀 MagentIQ AI Labs - Landing Page

Professional landing page for MagentIQ AI Labs Ltd., showcasing AI solutions and the flagship product Carsa Recruitment Lens.

**Live Site**: [https://magentiqlabs.com](https://magentiqlabs.com) *(after deployment)*

---

## 📋 **Project Overview**

### **Company**: MagentIQ AI Labs Ltd.
- **Location**: Kampala, Uganda 🇺🇬
- **Industry**: Artificial Intelligence & Machine Learning
- **Flagship Product**: [Carsa Recruitment Lens](https://carsalens.com) - Intelligent document processing

### **Technology Stack**
- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js + Nodemailer
- **Deployment**: Azure App Service
- **Domain**: magentiqlabs.com (Microsoft 365)
- **Email**: Professional contact form → hello@magentiqlabs.com

---

## 🏗️ **Architecture**

```
magentiq-landing/
├── 📁 src/                    # React TypeScript Frontend
│   ├── 📁 components/         # UI Components
│   ├── 📁 assets/            # Images, logos, icons
│   └── 📁 constants/         # Brand colors, constants
├── 📁 server/                # Express.js Backend
│   ├── app.cjs              # 🟢 Production server (CommonJS)
│   ├── app.ts.backup        # TypeScript reference (archived)
│   └── README.md            # Server documentation
├── 📁 dist/                 # Built frontend (auto-generated)
├── 📁 public/               # Static assets
└── 📁 Company Docs/         # Business documents (PDFs)
```

---

## ⚡ **Quick Start**

### **Prerequisites**
- Node.js 18+ and npm
- Git

### **Installation**
```bash
git clone https://github.com/MagentIQ-UG/magentiq-landing-page.git
cd magentiq-landing-page/magentiq-landing
npm install
```

### **Development**
```bash
# Start frontend development server
npm run dev
# Opens: http://localhost:5174

# Start both frontend + backend
npm run start:dev
```

### **Production Build**
```bash
# Build frontend + prepare server
npm run build:all

# Start production server
npm start
# Server runs: http://localhost:8080
```

---

## 🌐 **Features**

### **Landing Page Sections**
1. **Hero** - Brand introduction with animated background
2. **Carsa Lens Showcase** - Interactive product demonstration
3. **Solutions** - AI capabilities with tabbed interface
4. **Why Choose MagentIQ** - Competitive advantages
5. **Contact** - Professional contact form with email delivery

### **Technical Features**
- ✅ **Responsive Design** - Mobile-first Tailwind CSS
- ✅ **TypeScript** - Type-safe frontend development
- ✅ **SEO Optimized** - Meta tags, Open Graph, Schema.org
- ✅ **Professional Email** - Contact form → hello@magentiqlabs.com
- ✅ **Azure Ready** - Production deployment configuration
- ✅ **Domain Ready** - magentiqlabs.com integration
- ✅ **Performance** - 79KB gzipped bundle, fast loading

---

## 📧 **Email System**

### **Contact Form Features**
- Professional HTML email templates
- Auto-reply to form submissions
- Kampala timezone timestamps
- Comprehensive lead tracking
- Error handling with fallbacks

### **Email Configuration**
```bash
# Required environment variables
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_app_password_here
CONTACT_EMAIL=hello@magentiqlabs.com
SEND_AUTO_REPLY=true
```

---

## 🚀 **Deployment**

### **Azure App Service**

#### **1. Build for Production**
```bash
npm run build:all
```

#### **2. Environment Variables (Azure Portal)**
```bash
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_gmail_app_password
CONTACT_EMAIL=hello@magentiqlabs.com
SEND_AUTO_REPLY=true
NODE_ENV=production
PORT=8080
```

#### **3. Deploy**
- See: [`AZURE_DEPLOYMENT.md`](./AZURE_DEPLOYMENT.md) for complete guide
- See: [`DOMAIN_SETUP.md`](./DOMAIN_SETUP.md) for domain configuration

### **Domain Setup**
1. **Microsoft 365**: Configure DNS records for magentiqlabs.com
2. **Azure**: Add custom domain + SSL certificate
3. **Testing**: Verify https://magentiqlabs.com

---

## 🎨 **Brand Guidelines**

### **Colors**
- **Brand Blue**: `#0056b3` - Primary buttons, links, highlights
- **Primary Text**: `#1e1e1e` - Body text, headlines
- **Black**: `#000000` - Gradients, accents

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Logo Weight**: 700 (Bold)
- **Body Weight**: 400 (Regular)
- **Headings**: 600 (Semi-Bold)

### **Assets**
- **Logo**: `/src/assets/logos/magentiq_logo.svg`
- **Favicon**: `/src/assets/logos/favicon.svg`
- **NIIH Logo**: `/src/assets/logos/niih-logo.png`
- **Microsoft Logo**: `/src/assets/logos/microsoft-logo.svg`

*See: [`magentiq_branding_guidelines.md`](../magentiq_branding_guidelines.md)*

---

## 🛠️ **Development**

### **Available Scripts**
```bash
npm run dev          # Vite development server
npm run build        # Build frontend only
npm run build:server # Prepare server (no compilation needed)
npm run build:all    # Build frontend + server
npm start           # Production server (app.cjs)
npm run start:dev   # Development: frontend + server
npm run lint        # ESLint code quality
npm run preview     # Preview production build
```

### **Project Structure**
```bash
src/
├── components/
│   ├── Header.tsx          # Navigation + mobile menu
│   ├── Hero.tsx           # Landing section + animated background
│   ├── CarsaLens.tsx      # Product showcase + interactive tabs
│   ├── Solutions.tsx      # AI capabilities + services
│   ├── WhyChooseMagentiq.tsx  # Competitive advantages
│   ├── Contact.tsx        # Contact form + validation
│   └── Footer.tsx         # Links + company info
├── constants/
│   └── brand.ts          # Brand colors + constants
└── assets/
    └── logos/            # Brand assets + partner logos
```

---

## 🧪 **Testing**

### **Health Check**
```bash
# Test server health
curl http://localhost:8080/api/health

# Expected response:
{"status":"healthy","timestamp":"2025-06-23T...","environment":"development"}
```

### **Contact Form Testing**
1. Fill out contact form on website
2. Check email delivery to hello@magentiqlabs.com
3. Verify auto-reply sent to user
4. Check server logs for any errors

### **Build Verification**
```bash
npm run build:all  # Should complete with 0 errors
npm start         # Should show: "🚀 MagentIQ Server running on port 8080"
```

---

## 📊 **Performance**

### **Bundle Size**
- **JavaScript**: 287KB (79KB gzipped)
- **CSS**: 33KB (6KB gzipped)
- **Total Load Time**: ~920ms build time
- **Lighthouse Score**: Optimized for performance

### **SEO Features**
- Meta tags (title, description, keywords)
- Open Graph (Facebook, LinkedIn sharing)
- Twitter Cards (social media preview)
- Schema.org structured data (Google rich snippets)
- Sitemap ready
- Canonical URLs

---

## 🤝 **Partnerships**

### **Microsoft for Startups**
- Azure credits and technical support
- Startup acceleration program
- Logo usage: Authentic Microsoft 4-color squares

### **National ICT Innovation Hub (NIIH)**
- Physical address: Plot 19-21 Port Bell Road, Kampala
- Innovation ecosystem support
- Logo usage: Official NIIH branding

---

## 📞 **Contact Information**

### **Business Details**
- **Company**: MagentIQ AI Labs Ltd.
- **Email**: hello@magentiqlabs.com
- **Phone**: +256 750 990 718
- **Address**: National ICT Innovation Hub, Plot 19-21 Port Bell Road, Kampala, Uganda
- **Hours**: Monday-Friday, 9:00 AM - 6:00 PM EAT

### **Online Presence**
- **Website**: https://magentiqlabs.com
- **Product**: https://carsalens.com
- **LinkedIn**: https://www.linkedin.com/company/magentiq-labs
- **GitHub**: https://github.com/MagentIQ-UG

---

## 📝 **License & Legal**

### **Copyright**
© 2025 MagentIQ AI Labs Ltd. All rights reserved.

### **Trademarks**
- MagentIQ® - Registered trademark of MagentIQ AI Labs Ltd.
- Carsa Lens™ - Trademark of MagentIQ AI Labs Ltd.

### **Partner Logos**
- Microsoft logo used under Microsoft for Startups program
- NIIH logo used with permission from National ICT Innovation Hub

---

## 📚 **Documentation**

### **Additional Guides**
- [`AZURE_DEPLOYMENT.md`](./AZURE_DEPLOYMENT.md) - Complete Azure deployment guide
- [`DOMAIN_SETUP.md`](./DOMAIN_SETUP.md) - Microsoft 365 domain configuration
- [`server/README.md`](./server/README.md) - Backend server documentation
- [`magentiq_branding_guidelines.md`](../magentiq_branding_guidelines.md) - Brand assets guide

### **Support**
For technical questions or deployment assistance:
- **Email**: hello@magentiqlabs.com
- **GitHub Issues**: [Repository Issues](https://github.com/MagentIQ-UG/magentiq-landing-page/issues)

---

## 🎯 **Roadmap**

### **Phase 1: Launch** ✅
- [x] Professional landing page
- [x] Contact form with email delivery
- [x] Domain configuration (magentiqlabs.com)
- [x] Azure App Service deployment

### **Phase 2: Enhancement** 🚧
- [ ] Blog section for AI insights
- [ ] Case studies and testimonials
- [ ] Multi-language support (English/Luganda)
- [ ] Analytics integration (Google Analytics)

### **Phase 3: Advanced Features** 📋
- [ ] Client portal integration
- [ ] Live chat support
- [ ] Newsletter subscription
- [ ] SEO optimization improvements

---

**🚀 Ready for deployment to Azure App Service with magentiqlabs.com domain!**

*Built with ❤️ in Kampala, Uganda by MagentIQ AI Labs*
