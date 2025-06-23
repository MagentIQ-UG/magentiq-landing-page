# 🔧 Environment Configuration

This document provides comprehensive guidance for setting up environment variables for the MagentIQ AI Labs landing page.

---

## 📋 **Environment Variables Template**

### **Development (.env)**
Create a `.env` file in the project root with these variables:

```bash
# 📧 EMAIL CONFIGURATION
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_gmail_app_password_here
CONTACT_EMAIL=hello@magentiqlabs.com
SEND_AUTO_REPLY=true

# 🚀 SERVER CONFIGURATION  
NODE_ENV=development
PORT=8080

# 🌐 CORS CONFIGURATION
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174

# 🛠️ DEVELOPMENT SETTINGS
LOG_LEVEL=info
DEBUG=true
```

### **Production (Azure App Service)**
Configure these in Azure Portal → App Service → Configuration:

```bash
# 📧 EMAIL CONFIGURATION
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_production_app_password
CONTACT_EMAIL=hello@magentiqlabs.com
SEND_AUTO_REPLY=true

# 🚀 SERVER CONFIGURATION
NODE_ENV=production
PORT=8080

# 🌐 CORS CONFIGURATION  
ALLOWED_ORIGINS=https://magentiqlabs.com,https://www.magentiqlabs.com,https://magentiq-landing.azurewebsites.net

# 🔐 SECURITY
SESSION_SECRET=your_random_production_secret
RATE_LIMIT=60

# 📊 ANALYTICS (Optional)
GA_TRACKING_ID=G-XXXXXXXXXX
```

---

## 📧 **Email Configuration**

### **Gmail Setup (Recommended)**

#### **1. Enable 2-Factor Authentication**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → Turn On
3. Follow the setup process

#### **2. Generate App Password**
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Enter "MagentIQ Landing Page"
4. Copy the generated 16-character password
5. Use this as `EMAIL_PASSWORD` (NOT your regular Gmail password)

#### **3. Configuration**
```bash
EMAIL_SERVICE=gmail
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password
```

### **Other Email Providers**

#### **Outlook/Hotmail**
```bash
EMAIL_SERVICE=outlook
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_outlook_password
```

#### **Custom SMTP**
```bash
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_smtp_password
```

---

## 🛠️ **Development Setup**

### **1. Create Environment File**
```bash
# Copy template
cp ENVIRONMENT.md .env

# Edit with your settings
nano .env  # or code .env
```

### **2. Configure Email Testing**
For development, you can use:
- **Your personal Gmail** (with app password)
- **Ethereal Email** (fake SMTP for testing)
- **Mailtrap** (email testing service)

### **3. Test Configuration**
```bash
# Start server
npm run start:dev

# Test health endpoint
curl http://localhost:8080/api/health

# Submit contact form and check email delivery
```

---

## 🚀 **Azure Production Setup**

### **1. Azure Portal Configuration**
1. Go to **Azure Portal** → **App Services**
2. Select your **MagentIQ landing page** app
3. **Configuration** → **Application settings**
4. **New application setting** for each variable

### **2. Required Production Variables**
```bash
# Critical for production
EMAIL_USER=hello@magentiqlabs.com
EMAIL_PASSWORD=your_production_app_password
NODE_ENV=production
ALLOWED_ORIGINS=https://magentiqlabs.com,https://www.magentiqlabs.com
```

### **3. Azure App Service Settings**
```bash
# Azure automatically sets:
PORT=8080
WEBSITE_NODE_DEFAULT_VERSION=18.x

# Additional Azure-specific settings:
WEBSITE_RUN_FROM_PACKAGE=1
SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

---

## 🔐 **Security Considerations**

### **Environment Variable Security**
- **Never commit** `.env` files to Git
- **Use strong passwords** for production
- **Rotate credentials** regularly
- **Limit email account** permissions to sending only

### **Production Security**
```bash
# Generate secure session secret
SESSION_SECRET=$(openssl rand -hex 32)

# Implement rate limiting
RATE_LIMIT=60  # requests per minute

# Enable security headers (handled by helmet.js)
SECURITY_HEADERS=true
```

### **Email Security**
- **App passwords** instead of main passwords
- **Dedicated email** account for the application
- **Monitor email** usage for unusual activity
- **Backup email** configuration for redundancy

---

## 🧪 **Testing Environment Variables**

### **Development Testing**
```bash
# Test email configuration
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "company": "Test Company",
    "inquiryType": "General Information",
    "message": "This is a test message",
    "submissionDate": "'$(date -u +%Y-%m-%dT%H:%M:%S.%3NZ)'",
    "userAgent": "Test Agent",
    "referrer": "http://localhost:5174"
  }'
```

### **Production Testing**
```bash
# Test production health
curl https://magentiqlabs.com/api/health

# Test contact form through website
# Submit form and verify:
# 1. Email delivered to hello@magentiqlabs.com
# 2. Auto-reply sent to user
# 3. No server errors in Azure logs
```

---

## 🔍 **Troubleshooting**

### **Common Email Issues**

#### **"Invalid login" Error**
- ✅ **Check**: Using app password, not regular password
- ✅ **Verify**: 2FA enabled on Gmail account
- ✅ **Generate**: New app password if needed

#### **"Connection refused" Error**
- ✅ **Check**: EMAIL_SERVICE setting
- ✅ **Verify**: Internet connection
- ✅ **Test**: Different email provider

#### **Emails not delivered**
- ✅ **Check**: Spam/junk folders
- ✅ **Verify**: CONTACT_EMAIL is correct
- ✅ **Test**: Send to different email address

### **Server Issues**

#### **Port already in use**
```bash
# Kill process on port 8080
npx kill-port 8080

# Use different port
PORT=3000 npm start
```

#### **Environment variables not loaded**
- ✅ **Check**: `.env` file exists in project root
- ✅ **Verify**: Variable names match exactly
- ✅ **Restart**: Server after changing .env

### **Azure Deployment Issues**

#### **Environment variables not working**
- ✅ **Check**: Azure Application Settings
- ✅ **Verify**: No quotes around values in Azure Portal
- ✅ **Restart**: App Service after changes

#### **CORS errors**
- ✅ **Check**: ALLOWED_ORIGINS includes your domain
- ✅ **Verify**: No trailing slashes in URLs
- ✅ **Update**: Both www and non-www versions

---

## 📊 **Environment Monitoring**

### **Health Check Endpoint**
Monitor your environment with the health check:

```bash
GET /api/health

# Response:
{
  "status": "healthy",
  "timestamp": "2025-06-23T...",
  "environment": "production"
}
```

### **Email System Monitoring**
Track email delivery success:
- **Azure Application Insights**: Monitor API calls
- **Email provider logs**: Check Gmail/Outlook activity
- **Server logs**: Review contact form submissions

---

## 🔗 **Useful Resources**

### **Email Setup**
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Outlook SMTP Settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353)
- [Nodemailer Documentation](https://nodemailer.com/about/)

### **Azure Configuration**
- [Azure App Service Configuration](https://docs.microsoft.com/en-us/azure/app-service/configure-common)
- [Azure Environment Variables](https://docs.microsoft.com/en-us/azure/app-service/reference-app-settings)

### **Security**
- [Environment Variable Security](https://blog.gitguardian.com/how-to-handle-secrets-in-environment-variables/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

---

**🔧 Ready to configure your environment variables for deployment!**

*For additional help, contact: hello@magentiqlabs.com* 