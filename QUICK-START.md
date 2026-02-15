# Quick Start: Deploy to Netlify via GitHub

## ⚡ Fast Track (15 minutes)

### 1. Install Git (if not installed)
Download: https://git-scm.com/download/win

Verify:
```bash
git --version
```

### 2. Initialize Git & Commit
```bash
cd salesforce-website
git init
git add .
git commit -m "Initial commit: Salesforce consulting website"
```

### 3. Create GitHub Repository
1. Go to: https://github.com/new
2. Name: `salesforce-website`
3. **Don't** initialize with README
4. Click "Create repository"

### 4. Push to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/salesforce-website.git
git branch -M main
git push -u origin main
```

### 5. Deploy to Netlify
1. Go to: https://app.netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select `salesforce-website`
5. Leave all settings default
6. Click "Deploy site"

### 6. Done! 🎉
Your site is live at: `https://random-name.netlify.app`

Customize the URL: Site settings → Change site name

## 📝 What You Get

✓ Live website with HTTPS
✓ Global CDN (fast worldwide)
✓ Automatic deployments on git push
✓ Free hosting forever
✓ One-click rollbacks
✓ Preview deploys for branches

## 🔄 Making Updates

```bash
# Edit files, then:
git add .
git commit -m "Updated contact form"
git push
```

Netlify auto-deploys in ~30 seconds!

## 📚 Full Documentation

See `GITHUB-DEPLOYMENT-GUIDE.md` for:
- Troubleshooting
- Custom domains
- Form setup
- Analytics
- Performance optimization

## ⚠️ Common Issues

**"Git not recognized"**
→ Install Git and restart PowerShell

**"Permission denied"**
→ Use HTTPS URL (not SSH)

**"Form not working"**
→ Add `data-netlify="true"` to form tag

## 🎯 Next Steps

1. Test your live site
2. Run Lighthouse audit (F12 → Lighthouse)
3. Share the URL!
4. Add custom domain (optional)
5. Enable Netlify Forms (optional)

---

**Need help?** See `GITHUB-DEPLOYMENT-GUIDE.md` for detailed instructions.
