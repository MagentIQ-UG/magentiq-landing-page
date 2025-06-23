# 🚀 Azure App Service Deployment Guide

**Complete deployment guide for MagentIQ AI Labs landing page to Azure App Service with custom domain.**

**Prerequisites**: See [`README.md`](./README.md) for project overview and [`ENVIRONMENT.md`](./ENVIRONMENT.md) for environment setup.

## MagentIQ AI Labs Landing Page - Azure Deployment

This guide will help you deploy the MagentIQ landing page to Azure App Service with a full-stack setup (React frontend + Express.js backend).

---

## 📋 **Prerequisites**

### **Required Accounts & Tools:**
- ✅ **Azure Account** with App Service access
- ✅ **Git repository** (GitHub, Azure DevOps, etc.)
- ✅ **Email account** with app password (Gmail/Outlook)
- ✅ **Azure CLI** (optional, for command-line deployment)

### **Local Development:**
- ✅ **Node.js 18+** and npm
- ✅ **Git** for version control

---

## 🔧 **Step 1: Create Azure App Service**

### **Option A: Azure Portal (GUI)**
1. **Log in** to [Azure Portal](https://portal.azure.com)
2. **Create Resource** → **Web App**
3. **Configure Basic Settings:**
   ```
   Resource Group: magentiq-rg (create new)
   Name: magentiq-landing (or your choice)
   Runtime: Node 18 LTS
   Operating System: Windows
   Region: East US (or closest to Uganda)
   Pricing Plan: Basic B1 (or Free F1 for testing)
   ```
4. **Review + Create** → **Create**

### **Option B: Azure CLI**
```bash
# Login to Azure
az login

# Create resource group
az group create --name magentiq-rg --location eastus

# Create App Service plan
az appservice plan create --name magentiq-plan --resource-group magentiq-rg --sku B1 --is-linux false

# Create Web App
az webapp create --resource-group magentiq-rg --plan magentiq-plan --name magentiq-landing --runtime "NODE|18-lts"
```

---

## ⚙️ **Step 2: Configure Environment Variables**

### **In Azure Portal:**
1. **Go to your App Service** → **Configuration** → **Application Settings**
2. **Add New Application Settings:**

```bash
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_app_password_here
CONTACT_EMAIL=hello@magentiqlabs.com
SEND_AUTO_REPLY=true

# Node.js Configuration
NODE_ENV=production
WEBSITE_NODE_DEFAULT_VERSION=18.20.0
PORT=8080

# Azure-specific
SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

### **Email App Password Setup:**

#### **For Gmail:**
1. **Enable 2FA** in Google Account settings
2. **Generate App Password**: Google Account → Security → 2-Step Verification → App passwords
3. **Use the 16-character password** (NOT your regular Gmail password)

#### **For Outlook:**
1. **Go to** [Microsoft Account Security](https://account.microsoft.com/security)
2. **Advanced security options** → **App passwords**
3. **Create new app password** for "Mail"

---

## 📁 **Step 3: Prepare Your Code**

### **File Structure Check:**
```
magentiq-landing/
├── src/                    # React frontend
├── server/                 # Express backend
│   └── app.ts             # Main server file
├── dist/                  # Built frontend (after build)
├── dist-server/           # Built backend (after build)
├── package.json           # Dependencies & scripts
├── web.config            # IIS configuration
├── .deployment           # Azure deployment config
├── deploy.cmd            # Azure build script
└── AZURE_DEPLOYMENT.md   # This guide
```

### **Required Scripts in package.json:**
```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "build:server": "tsc server/app.ts --outDir dist-server --esModuleInterop --target es2020 --module commonjs --moduleResolution node",
    "build:all": "npm run build && npm run build:server",
    "start": "node dist-server/app.js"
  }
}
```

---

## 🚀 **Step 4: Deploy to Azure**

### **Option A: Git Deployment (Recommended)**

#### **1. Set up Git Deployment:**
```bash
# In Azure Portal: App Service → Deployment Center
# Choose: GitHub, Azure Repos, or Local Git
# Configure branch: main/master
```

#### **2. Push Your Code:**
```bash
git add .
git commit -m "Deploy MagentIQ landing page to Azure"
git push origin main
```

#### **3. Azure will automatically:**
- ✅ Install npm dependencies
- ✅ Build React frontend (`npm run build`)
- ✅ Build Express server (`npm run build:server`)
- ✅ Start the application (`npm start`)

### **Option B: ZIP Deploy**
```bash
# Create deployment package
npm run build:all
zip -r magentiq-deploy.zip . -x "node_modules/*" "src/*" "server/*" ".git/*"

# Deploy via Azure CLI
az webapp deployment source config-zip --resource-group magentiq-rg --name magentiq-landing --src magentiq-deploy.zip
```

---

## 🌐 **Step 5: Configure Custom Domain (Optional)**

### **Add Custom Domain:**
1. **Azure Portal** → **App Service** → **Custom domains**
2. **Add custom domain**: `magentiqlabs.com`
3. **Verify domain ownership** with DNS records
4. **Add SSL certificate** (free Azure managed certificate)

### **DNS Configuration:**
```
Type: CNAME
Name: www
Value: magentiq-landing.azurewebsites.net

Type: A
Name: @
Value: [App Service IP]
```

---

## 📊 **Step 6: Monitor & Test**

### **Health Check:**
- **URL**: `https://magentiq-landing.azurewebsites.net/api/health`
- **Expected Response**: `{"status":"healthy","timestamp":"...","environment":"production"}`

### **Test Contact Form:**
1. **Fill out contact form** on your website
2. **Check email inbox** for submissions
3. **Verify auto-reply** is sent to users

### **Azure Monitoring:**
- **Application Insights**: Track performance, errors, and usage
- **Log Stream**: View real-time application logs
- **Metrics**: Monitor CPU, memory, and request metrics

---

## 🔍 **Troubleshooting**

### **Common Issues:**

#### **Build Fails:**
```bash
# Check build logs in Azure Portal: App Service → Deployment Center → Logs
# Ensure all dependencies are in package.json
# Verify TypeScript compilation settings
```

#### **Email Not Sending:**
```bash
# Check environment variables are set correctly
# Verify email app password (not regular password)
# Check Azure logs for email service errors
```

#### **404 Errors:**
```bash
# Verify web.config is properly configured
# Check that dist/ and dist-server/ folders exist after build
# Ensure React routing is handled by catch-all rule
```

#### **Server Won't Start:**
```bash
# Check package.json "start" script points to correct file
# Verify PORT environment variable is set
# Check server logs for startup errors
```

---

## 📧 **Email Configuration Examples**

### **Gmail Configuration:**
```bash
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password
```

### **Outlook Configuration:**
```bash
EMAIL_SERVICE=outlook
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_outlook_app_password
```

### **Custom SMTP Configuration:**
```bash
EMAIL_SERVICE=
SMTP_HOST=mail.your-domain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_email_password
```

---

## 🎯 **Production Checklist**

### **Before Going Live:**
- ✅ **Email configuration** tested and working
- ✅ **Environment variables** properly set
- ✅ **Custom domain** configured (if applicable)
- ✅ **SSL certificate** installed
- ✅ **Contact form** tested end-to-end
- ✅ **Performance** monitored and optimized
- ✅ **Error tracking** set up with Application Insights
- ✅ **Backup strategy** implemented

### **Security Best Practices:**
- ✅ **Environment variables** never committed to Git
- ✅ **Email passwords** are app-specific passwords
- ✅ **HTTPS** enforced for all traffic
- ✅ **Security headers** configured in web.config
- ✅ **CORS** properly configured for your domain

---

## 📞 **Support**

### **Need Help?**
- **Azure Documentation**: [App Service Docs](https://docs.microsoft.com/en-us/azure/app-service/)
- **Node.js on Azure**: [Node.js Guide](https://docs.microsoft.com/en-us/azure/app-service/configure-language-nodejs)
- **Custom Domains**: [Domain Configuration](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)

### **Your Application URLs:**
- **Production**: `https://magentiq-landing.azurewebsites.net`
- **API Health**: `https://magentiq-landing.azurewebsites.net/api/health`
- **Contact API**: `https://magentiq-landing.azurewebsites.net/api/contact`

---

## 🎉 **Success!**

Once deployed, your MagentIQ landing page will:
- ✅ **Serve React frontend** at your domain
- ✅ **Handle contact form submissions** via Express API
- ✅ **Send professional emails** with your branding
- ✅ **Auto-reply to users** with confirmation
- ✅ **Scale automatically** with Azure App Service
- ✅ **Monitor performance** with built-in analytics

**Your professional AI company website is now live and ready to generate leads!** 🚀 