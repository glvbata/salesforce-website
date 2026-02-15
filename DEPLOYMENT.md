# Deployment Guide - Salesforce Website

## Quick Deploy to Netlify

### Option 1: Netlify CLI (Recommended for Automation)

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

#### 3. Initialize Site
```bash
cd salesforce-website
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `salesforce-consulting-[your-name]` (or custom)
- Build command: (leave empty - static site)
- Publish directory: `.` (current directory)

#### 4. Deploy
```bash
# Preview deploy (test first)
netlify deploy

# Production deploy (when ready)
netlify deploy --prod
```

### Option 2: Netlify Web UI (Easiest for First Time)

#### 1. Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Salesforce consulting website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/salesforce-website.git
git push -u origin main
```

#### 2. Deploy on Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Configure:
   - Build command: (leave empty)
   - Publish directory: `salesforce-website`
5. Click "Deploy site"

### Option 3: Drag & Drop (Fastest for Testing)

1. Go to https://app.netlify.com/drop
2. Drag the `salesforce-website` folder onto the page
3. Site deploys instantly!

## Post-Deployment Checklist

### 1. Custom Domain (Optional)
- Go to Site settings → Domain management
- Add custom domain
- Configure DNS (Netlify provides instructions)

### 2. HTTPS
- Automatically enabled by Netlify
- Certificate provisioned within minutes

### 3. Forms (Contact Form)
Add `data-netlify="true"` to your contact form:
```html
<form data-netlify="true" name="contact" action="/thank-you.html" method="POST">
```

### 4. Analytics (Optional)
- Enable Netlify Analytics in site settings
- Or add Google Analytics script to HTML

### 5. Performance Testing
- Run Lighthouse audit: https://pagespeed.web.dev/
- Target: 90+ scores across all categories

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch auto-deploys
- Pull requests create preview deploys
- Rollback to any previous deploy in one click

## Environment Variables

If you add backend functionality later:
1. Site settings → Environment variables
2. Add variables (never commit secrets to git)
3. Access in build process or serverless functions

## Troubleshooting

### Build Fails
- Check Netlify build logs
- Verify `netlify.toml` configuration
- Ensure all files are committed

### 404 Errors
- Check publish directory is correct
- Verify file paths are relative (not absolute)
- Check case sensitivity (URLs are case-sensitive)

### Form Not Working
- Ensure `data-netlify="true"` attribute exists
- Form must have a `name` attribute
- Deploy the site (forms don't work in local preview)

## Cost

- **Free tier**: Perfect for this site
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - HTTPS included

## Next Steps

1. Deploy the site using one of the options above
2. Test all pages and forms
3. Run Lighthouse audit
4. Share the URL!

---

**Current Status**: Site is ready to deploy
**Estimated Deploy Time**: 2-5 minutes
**Live URL**: Will be provided after deployment (e.g., `https://your-site-name.netlify.app`)
