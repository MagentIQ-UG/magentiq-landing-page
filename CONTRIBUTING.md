# 🤝 Contributing to MagentIQ AI Labs Landing Page

Thank you for your interest in contributing to the MagentIQ AI Labs landing page! This guide will help you get started with development and contribution.

---

## 📋 **Prerequisites**

### **Required Software**
- **Node.js**: Version 18+ ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: Version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended with TypeScript support

### **Recommended Extensions (VS Code)**
- **TypeScript**: Official TypeScript support
- **Tailwind CSS IntelliSense**: CSS class autocomplete
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **GitLens**: Enhanced Git integration

---

## 🚀 **Getting Started**

### **1. Fork & Clone**
```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/magentiq-landing-page.git
cd magentiq-landing-page/magentiq-landing

# Add upstream remote
git remote add upstream https://github.com/MagentIQ-UG/magentiq-landing-page.git
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Setup**
```bash
# Copy environment template
cp .env.example .env

# Configure your environment variables
# EMAIL_USER=your_test_email@gmail.com
# EMAIL_PASSWORD=your_app_password
# etc.
```

### **4. Start Development**
```bash
# Start frontend development server
npm run dev
# Opens: http://localhost:5174

# In another terminal, start backend (optional for frontend work)
npm run start:dev
```

---

## 🏗️ **Project Structure**

### **Frontend (`src/`)**
```bash
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx        # Landing section
│   ├── CarsaLens.tsx   # Product showcase
│   ├── Solutions.tsx   # AI capabilities
│   ├── WhyChooseMagentiq.tsx  # Advantages
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer links
├── constants/
│   └── brand.ts        # Brand colors and constants
├── assets/
│   └── logos/          # Brand assets
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

### **Backend (`server/`)**
```bash
server/
├── app.cjs            # 🟢 Production server (CommonJS)
├── app.ts.backup      # TypeScript reference (archived)
└── README.md         # Server documentation
```

### **Configuration**
```bash
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS config
├── tsconfig.*.json    # TypeScript configurations
└── eslint.config.js   # ESLint rules
```

---

## 🎯 **Development Guidelines**

### **Code Style**
- **TypeScript**: Use TypeScript for all new frontend code
- **ESLint**: Follow ESLint rules (run `npm run lint`)
- **Tailwind CSS**: Use utility classes for styling
- **Component Structure**: Follow existing patterns
- **File Naming**: Use PascalCase for components, camelCase for utilities

### **Component Guidelines**
```tsx
// ✅ Good component structure
import React from 'react';

interface ComponentProps {
  title: string;
  isActive?: boolean;
}

export default function Component({ title, isActive = false }: ComponentProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {isActive && <span className="text-green-500">Active</span>}
    </div>
  );
}
```

### **Tailwind CSS Best Practices**
- **Mobile-first**: Start with mobile styles, add responsive variants
- **Semantic naming**: Use meaningful class combinations
- **Consistent spacing**: Use the spacing scale (p-4, m-8, etc.)
- **Brand colors**: Use custom colors from brand.ts

```tsx
// ✅ Good Tailwind usage
<button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Contact Us
</button>

// ❌ Avoid inline styles
<button style={{ backgroundColor: '#0056b3', padding: '8px 16px' }}>
  Contact Us
</button>
```

---

## 🧪 **Testing**

### **Before Submitting**
```bash
# Run all checks
npm run lint           # Check code quality
npm run build         # Test production build
npm run build:all     # Test complete build process

# Test server
npm start             # Should start without errors
curl http://localhost:8080/api/health  # Health check
```

### **Manual Testing**
1. **Responsive Design**: Test on mobile, tablet, desktop
2. **Contact Form**: Submit test form and verify email delivery
3. **Navigation**: Test all navigation links and smooth scrolling
4. **Performance**: Check page load speed and bundle size
5. **Accessibility**: Test keyboard navigation and screen readers

---

## 📝 **Contribution Types**

### **🐛 Bug Fixes**
- **Small fixes**: Typos, broken links, minor styling issues
- **Component bugs**: React component errors or unexpected behavior
- **Build issues**: TypeScript errors, dependency conflicts
- **Performance**: Bundle size optimization, loading improvements

### **✨ Features**
- **New components**: Additional landing page sections
- **Enhancements**: Improved animations, interactions
- **Integrations**: Analytics, CRM, third-party services
- **Accessibility**: Better keyboard navigation, screen reader support

### **📚 Documentation**
- **Code comments**: Inline documentation for complex logic
- **README updates**: Installation, usage, deployment guides
- **API documentation**: Backend endpoint documentation
- **Brand guidelines**: Design system documentation

### **🎨 Design**
- **UI improvements**: Better visual hierarchy, spacing
- **Brand consistency**: Color usage, typography, logo placement
- **Mobile experience**: Touch-friendly interactions
- **Loading states**: Skeleton screens, progress indicators

---

## 🔄 **Pull Request Process**

### **1. Create Feature Branch**
```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### **2. Make Changes**
- Follow coding guidelines
- Add comments for complex logic
- Update documentation if needed
- Test thoroughly

### **3. Commit Guidelines**
```bash
# Use conventional commits
git commit -m "feat: add new hero animation"
git commit -m "fix: resolve contact form validation bug"
git commit -m "docs: update deployment guide"
git commit -m "style: improve mobile navigation"
```

**Commit Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code formatting, no logic changes
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Build process, dependencies

### **4. Submit Pull Request**
```bash
# Push to your fork
git push origin feature/your-feature-name

# Create PR on GitHub with:
# - Clear title and description
# - Screenshots for UI changes
# - Testing instructions
# - Related issue numbers
```

### **5. PR Review Checklist**
- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm run build:all`)
- [ ] Documentation updated if needed
- [ ] Screenshots provided for UI changes
- [ ] Mobile responsiveness tested
- [ ] Accessibility considerations addressed

---

## 🚫 **What NOT to Contribute**

### **❌ Avoid These Changes**
- **Breaking changes** without discussion
- **Major architecture** changes without approval
- **Dependencies** additions without justification
- **Brand assets** modifications (logo, colors) without approval
- **Business content** changes without MagentIQ team approval
- **Security-related** code without review

### **⚠️ Requires Discussion First**
- New major features or pages
- Third-party integrations
- Database or backend architecture changes
- SEO or analytics implementations
- Domain or hosting changes

---

## 📞 **Getting Help**

### **Communication**
- **Email**: hello@magentiqlabs.com
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas

### **Resources**
- **React Documentation**: [react.dev](https://react.dev)
- **TypeScript Handbook**: [typescriptlang.org](https://www.typescriptlang.org/docs/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/docs)
- **Vite Guide**: [vitejs.dev](https://vitejs.dev/guide/)

---

## 🏷️ **Issue Labels**

### **Priority**
- `priority:high` - Critical issues affecting production
- `priority:medium` - Important improvements
- `priority:low` - Nice-to-have enhancements

### **Type**
- `bug` - Something is broken
- `enhancement` - New features or improvements
- `documentation` - Documentation improvements
- `question` - Questions about the project

### **Area**
- `frontend` - React/TypeScript frontend
- `backend` - Express.js server
- `design` - UI/UX improvements
- `deployment` - Azure/infrastructure
- `performance` - Speed/bundle size

---

## 🎉 **Recognition**

### **Contributors**
All contributors will be recognized in:
- **README.md**: Contributors section
- **CHANGELOG.md**: Release notes
- **GitHub**: Contributor graph

### **Significant Contributions**
Major contributors may be invited to join the MagentIQ development team.

---

## 📄 **License**

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to MagentIQ AI Labs! 🚀**

*Building AI solutions for African businesses, together.* 