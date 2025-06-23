# 🌐 Domain Setup Guide: magentiqlabs.com

## Configure Your Microsoft 365 Domain with Azure App Service

Since you purchased `magentiqlabs.com` through Microsoft 365 Admin Center, here's how to connect it to your Azure App Service.

---

## 📋 **Prerequisites**

- ✅ **Domain**: `magentiqlabs.com` (purchased via Microsoft 365)
- ✅ **Azure App Service**: MagentIQ landing page deployed
- ✅ **Access**: Microsoft 365 Admin Center and Azure Portal

---

## 🔧 **Step 1: Get Azure App Service IP Address**

### **In Azure Portal:**
1. Go to your **App Service** → **Custom domains**
2. Copy the **IP address** shown at the top
3. Note your **Default domain**: `magentiq-landing.azurewebsites.net`

### **Example values you'll need:**
```
Azure App Service IP: 20.X.X.X (get this from Azure)
Default domain: magentiq-landing.azurewebsites.net
```

---

## 🌐 **Step 2: Configure DNS in Microsoft 365**

### **In Microsoft 365 Admin Center:**
1. **Navigate**: Admin Centers → **All admin centers** → **DNS**
2. **Or go to**: [Microsoft 365 DNS Management](https://admin.microsoft.com/AdminPortal/Home#/Domains)

### **Add these DNS records:**

#### **A Record (Root Domain)**
```
Type: A
Name: @ (or leave blank)
Value: [Your Azure App Service IP]
TTL: 3600
```

#### **CNAME Record (www subdomain)**
```
Type: CNAME
Name: www
Value: magentiq-landing.azurewebsites.net
TTL: 3600
```

#### **CNAME Record (Domain Verification)**
```
Type: CNAME
Name: asuid.magentiqlabs
Value: [Custom domain verification ID from Azure]
TTL: 3600
```

---

## ⚙️ **Step 3: Add Custom Domain in Azure**

### **In Azure Portal:**
1. **Go to**: App Service → **Custom domains**
2. **Click**: **Add custom domain**
3. **Enter**: `magentiqlabs.com`
4. **Validate**: Azure will check DNS records
5. **Add**: `www.magentiqlabs.com` (repeat process)

### **Domain Verification:**
```bash
# Azure will provide a verification ID like:
asuid.magentiqlabs.com → [verification-string].azurewebsites.net
```

---

## 🔒 **Step 4: Enable SSL Certificate**

### **Free Azure Managed Certificate:**
1. **Custom domains** → Select your domain
2. **Click**: **Add binding**
3. **Choose**: **Azure managed certificate**
4. **SSL type**: SNI SSL
5. **Apply** → Azure automatically provisions SSL

### **Result:**
- ✅ `https://magentiqlabs.com` (secured)
- ✅ `https://www.magentiqlabs.com` (secured)

---

## 🔄 **Step 5: Configure HTTPS Redirect**

### **Force HTTPS:**
1. **App Service** → **TLS/SSL settings**
2. **Enable**: **HTTPS Only**
3. **Result**: All HTTP traffic redirects to HTTPS

---

## 📧 **Step 6: Update Email Configuration**

### **Update CORS Origins in Azure App Settings:**
```bash
# Add these to your environment variables:
WEBSITE_CORS_ALLOWED_ORIGINS=https://magentiqlabs.com,https://www.magentiqlabs.com

# Update existing CORS in your server code:
origin: [
  'https://magentiqlabs.com',
  'https://www.magentiqlabs.com',
  'https://magentiq-landing.azurewebsites.net'
]
```

---

## 🧪 **Step 7: Test Your Setup**

### **DNS Propagation Check:**
```bash
# Check if DNS has propagated:
nslookup magentiqlabs.com
nslookup www.magentiqlabs.com

# Should return your Azure IP address
```

### **Test URLs:**
- ✅ `https://magentiqlabs.com` → Your landing page
- ✅ `https://www.magentiqlabs.com` → Your landing page  
- ✅ `https://magentiqlabs.com/api/health` → Health check
- ✅ Contact form → Should work with new domain

---

## 📊 **Step 8: Update Schema Markup**

### **Update your HTML meta tags:**
```html
<!-- Update in index.html -->
<meta property="og:url" content="https://magentiqlabs.com/" />
<meta property="twitter:url" content="https://magentiqlabs.com/" />

<!-- Update Schema.org structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MagentIQ AI Labs Ltd.",
  "url": "https://magentiqlabs.com",
  "logo": "https://magentiqlabs.com/src/assets/logos/magentiq_logo.svg"
}
</script>
```

---

## 🔍 **Troubleshooting**

### **Domain Not Working:**
1. **Check DNS propagation**: Use [WhatsMyDNS.net](https://whatsmydns.net/)
2. **Wait 24-48 hours**: DNS changes can take time
3. **Verify DNS records**: Double-check all values in Microsoft 365

### **SSL Certificate Issues:**
1. **Domain validation**: Ensure DNS records are correct
2. **Certificate provision**: Can take 15-30 minutes
3. **Revalidate**: Try removing and re-adding the domain

### **Contact Form Not Working:**
1. **Check CORS**: Ensure new domain is in allowed origins
2. **Test API directly**: `https://magentiqlabs.com/api/health`
3. **Check logs**: Azure App Service → Log stream

---

## 🎯 **Expected Results**

### **After successful setup:**
- ✅ **Primary domain**: `https://magentiqlabs.com`
- ✅ **WWW redirect**: `https://www.magentiqlabs.com`
- ✅ **SSL secured**: Green padlock in browser
- ✅ **Professional email**: Delivered to hello@magentiqlabs.com
- ✅ **SEO optimized**: Proper canonical URLs
- ✅ **Fast loading**: Azure CDN integration

---

## 📞 **Support Resources**

### **Microsoft 365 DNS Help:**
- [Microsoft 365 DNS Management](https://docs.microsoft.com/en-us/microsoft-365/admin/dns/)
- [Domain Setup Guide](https://docs.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/)

### **Azure Custom Domains:**
- [Azure App Service Custom Domains](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)
- [SSL Certificate Setup](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate)

---

## 🎉 **Success Checklist**

- ✅ DNS records configured in Microsoft 365
- ✅ Custom domain added to Azure App Service  
- ✅ SSL certificate provisioned and working
- ✅ HTTPS redirect enabled
- ✅ Contact form tested with new domain
- ✅ Email delivery confirmed
- ✅ SEO meta tags updated
- ✅ Professional domain live: **https://magentiqlabs.com**

**Your MagentIQ AI Labs website is now live on your professional domain! 🚀** 