# GitHub + Netlify Deployment Guide

## Prerequisites

### 1. Install Git
**Download:** https://git-scm.com/download/win

**Verify installation:**
```bash
git --version
```

### 2. Create GitHub Account
If you don't have one: https://github.com/signup

## Step-by-Step Deployment

### Step 1: Initialize Git Repository

Open PowerShell in the `salesforce-website` folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Salesforce consulting website with accessibility improvements"
```

### Step 2: Create GitHub Repository

**Option A: Via GitHub Website (Easier)**
1. Go to https://github.com/new
2. Repository name: `salesforce-website` (or your choice)
3. Description: "Professional Salesforce consulting website"
4. Choose: Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

**Option B: Via GitHub CLI (if installed)**
```bash
gh repo create salesforce-website --public --source=. --remote=origin --push
```

### Step 3: Connect Local Repository to GitHub

After creating the repo on GitHub, you'll see commands like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/salesforce-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 4: Deploy to Netlify

#### 4.1: Go to Netlify
https://app.netlify.com

#### 4.2: Sign Up/Login
- Use GitHub account for easiest integration
- Click "Sign up with GitHub"

#### 4.3: Import Project
1. Click "Add new site" → "Import an existing project"
2. Choose "Deploy with GitHub"
3. Authorize Netlify to access your GitHub
4. Select your `salesforce-website` repository

#### 4.4: Configure Build Settings
- **Branch to deploy:** `main`
- **Base directory:** Leave empty
- **Build command:** Leave empty (static site)
- **Publish directory:** `.` (or leave empty)

#### 4.5: Deploy!
Click "Deploy site"

**Deployment takes 30-60 seconds**

### Step 5: Get Your Live URL

After deployment completes:
- You'll see: `https://random-name-123456.netlify.app`
- Click "Site settings" → "Change site name" to customize
- Example: `salesforce-consulting-demo.netlify.app`

## Continuous Deployment Setup ✓

Now configured! Every time you push to GitHub:
```bash
git add .
git commit -m "Update contact form"
git push
```
→ Netlify automatically deploys in ~30 seconds

## Custom Domain (Optional)

### Add Your Domain
1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `www.yourcompany.com`
4. Follow DNS configuration instructions

### DNS Configuration
Add these records to your domain registrar:

**For apex domain (yourcompany.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

**HTTPS:** Automatically enabled within 24 hours

## Netlify Forms Setup

Enable the contact form to receive submissions:

### 1. Update contact.html
Add `data-netlify="true"` to the form tag:

```html
<form id="contact-form" class="contact-form" 
      data-netlify="true" 
      name="contact"
      method="POST">
```

### 2. Create Thank You Page (Optional)
Create `salesforce-website/thank-you.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You | [Company Name]</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <main style="text-align: center; padding: 4rem 2rem;">
    <h1>Thank You!</h1>
    <p>We've received your message and will respond within 24 hours.</p>
    <a href="/" class="cta-button">Return to Home</a>
  </main>
</body>
</html>
```

### 3. Update Form Action
```html
<form ... action="/thank-you.html">
```

### 4. View Submissions
Netlify dashboard → Forms → See all submissions

### 5. Email Notifications
Site settings → Forms → Form notifications → Add email

## Environment Variables (For Future)

If you add backend functionality:

1. Site settings → Environment variables
2. Add variables (API keys, secrets)
3. Never commit secrets to git!

## Troubleshooting

### "Git not recognized"
- Install Git: https://git-scm.com/download/win
- Restart PowerShell after installation

### "Permission denied (publickey)"
**Solution:** Use HTTPS instead of SSH
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/salesforce-website.git
```

### "Failed to push"
**Solution:** Pull first, then push
```bash
git pull origin main --rebase
git push origin main
```

### "Build failed on Netlify"
- Check build logs in Netlify dashboard
- Verify `netlify.toml` is correct
- Ensure all files are committed

### "404 Not Found"
- Check publish directory is correct (`.` or empty)
- Verify file paths are relative
- Check case sensitivity

### "Form not working"
- Ensure `data-netlify="true"` is present
- Form must have `name` attribute
- Forms only work on deployed site (not local)

## Performance Optimization

### After Deployment:

1. **Run Lighthouse Audit**
   - Open site in Chrome
   - F12 → Lighthouse tab
   - Generate report
   - Target: 90+ all categories

2. **Test on Real Devices**
   - Mobile phone
   - Tablet
   - Different browsers

3. **Check Accessibility**
   - Keyboard navigation (Tab key)
   - Screen reader (NVDA/JAWS)
   - Color contrast
   - Print preview

## Monitoring & Analytics

### Netlify Analytics (Paid)
- Site settings → Analytics
- $9/month per site
- Server-side tracking (no cookies)

### Google Analytics (Free)
Add to `<head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Rollback to Previous Version

If something breaks:
1. Netlify dashboard → Deploys
2. Find working version
3. Click "Publish deploy"
4. Instant rollback!

## Cost Breakdown

**Netlify Free Tier:**
- ✓ 100 GB bandwidth/month
- ✓ 300 build minutes/month
- ✓ Unlimited sites
- ✓ HTTPS included
- ✓ Continuous deployment
- ✓ Instant rollbacks
- **Cost: $0/month**

**Optional Upgrades:**
- Custom domain: $0 (use your own)
- Netlify Analytics: $9/month
- Pro plan: $19/month (more bandwidth, build minutes)

## Next Steps

1. ✓ Install Git
2. ✓ Create GitHub account
3. ✓ Initialize repository
4. ✓ Push to GitHub
5. ✓ Deploy to Netlify
6. ✓ Test live site
7. ✓ Run Lighthouse audit
8. ✓ Share URL!

## Quick Reference Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (triggers deploy)
git push

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

## Support Resources

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com
- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com

---

**Estimated Time:** 15-20 minutes (first time)
**Result:** Live website with continuous deployment
**URL Format:** `https://your-site-name.netlify.app`
