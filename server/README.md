# Server Implementation Notes

## Files

- **`app.cjs`** - Production-ready Express server (✅ **USE THIS**)
- **`app.ts.backup`** - TypeScript version (❌ Archived - had Express type conflicts)

## Why JavaScript?

The TypeScript server version (`app.ts`) has complex import/type conflicts between:
- CommonJS modules (express, cors, helmet, nodemailer)
- ES modules configuration  
- Express type definitions

Since we have a fully functional JavaScript version that's production-ready, we use `app.js` for deployment.

## Production Setup

```bash
# This works perfectly:
npm start  # Runs: node server/app.cjs

# Azure App Service runs:
node server/app.cjs
```

## TypeScript Development

For TypeScript development, the frontend (`src/`) uses proper ES modules and works perfectly.

The server uses CommonJS JavaScript which is standard for Node.js backend services. 