# Magentiq AI Labs Ltd. Landing Page

Company website for Magentiq AI Labs Ltd., the Kampala-based AI product
company behind Law Lens Uganda.

Live site: https://magentiqlabs.com/
Product: https://lawlens.io/

## Purpose

This site establishes the relationship between:

- Magentiq AI Labs Ltd. as the legal startup/company.
- magentiqlabs.com as the company domain.
- Law Lens Uganda as the inaugural product.
- lawlens.io as the product domain.

The current product focus is legal research automation, internal knowledge
retrieval, contract risk monitoring, and compliance intelligence for Ugandan
legal, regulatory, and institutional workflows.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Express.js backend for API/contact support
- Azure App Service deployment via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

For a production-like local run:

```bash
npm run build
NODE_ENV=production npm start
```

Health check:

```bash
curl http://localhost:8080/api/health
```

## Key Files

- `src/App.tsx` - page composition
- `src/components/Header.tsx` - navigation
- `src/components/Hero.tsx` - primary company/product positioning
- `src/components/About.tsx` - company focus
- `src/components/LawLensProduct.tsx` - Law Lens Uganda product section
- `src/components/WhyItMatters.tsx` - market/problem framing
- `src/components/CompanyProductRelationship.tsx` - explicit company/product/AWS relationship
- `src/components/Contact.tsx` - business contact section
- `src/components/Footer.tsx` - footer and product ownership line
- `index.html` - SEO metadata, OpenGraph tags, and schema.org JSON-LD
- `server/app.cjs` - Express server

## Contact

For partnerships, product demos, startup programs, or infrastructure support:

jothamw@magentiqlabs.com

© 2026 Magentiq AI Labs Ltd. All rights reserved.
