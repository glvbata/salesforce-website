# Development Workflow - Ulapp

## Local Development

### 1. Edit Files Locally
Use your favorite code editor (VS Code, Sublime, etc.)

### 2. Test Locally
Open `index.html` in your browser:
- Right-click file → Open with → Browser
- Or drag file into browser window

### 3. Commit & Push
```bash
cd salesforce-website
git add .
git commit -m "Updated branding to Ulapp"
git push
```

### 4. Auto-Deploy
Netlify automatically deploys in ~30 seconds!

## Quick Commands

```bash
# Check what changed
git status

# See differences
git diff

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub (triggers deploy)
git push

# View commit history
git log --oneline -10
```

## File Structure

```
salesforce-website/
├── index.html          # Homepage
├── contact.html        # Contact page
├── css/
│   └── main.css        # All styles
├── js/
│   ├── main.js         # Core JavaScript
│   └── form.js         # Form handling
├── assets/             # Images, icons (to be added)
├── netlify.toml        # Deployment config
└── README.md           # Documentation
```

## Making Changes

### Update Colors
Edit `css/main.css` → `:root` section

### Update Content
Edit HTML files directly

### Add New Pages
1. Create new `.html` file
2. Copy structure from `index.html`
3. Update navigation links in all pages

### Add Images
1. Create `assets/images/` folder
2. Add images
3. Reference: `<img src="/assets/images/your-image.jpg">`

## Testing Checklist

Before pushing:
- [ ] Test in browser locally
- [ ] Check mobile view (F12 → Toggle device toolbar)
- [ ] Verify all links work
- [ ] Check console for errors (F12)
- [ ] Test forms (if modified)

## Deployment Status

Check deployment: https://app.netlify.com

- Green checkmark = Deployed successfully
- Yellow = Deploying...
- Red = Failed (check logs)

## Rollback

If something breaks:
1. Go to Netlify dashboard
2. Deploys tab
3. Find working version
4. Click "Publish deploy"

## Branch Strategy (Optional - Future)

For larger changes:
```bash
# Create feature branch
git checkout -b feature/new-design

# Make changes, commit
git add .
git commit -m "New design"

# Push branch (creates preview deploy)
git push origin feature/new-design

# Merge to main when ready
git checkout main
git merge feature/new-design
git push
```

## Performance Tips

- Optimize images before adding (use TinyPNG, Squoosh)
- Keep CSS organized and commented
- Minimize JavaScript when possible
- Test on real devices

## Common Tasks

### Change Logo
Update `.logo-icon` in HTML files

### Update Colors
Edit CSS variables in `main.css`

### Add New Section
Copy existing section structure from `index.html`

### Update Contact Info
Search for email/phone in all HTML files

## Getting Help

- **CSS Issues**: Check browser console (F12)
- **Git Issues**: See `GITHUB-DEPLOYMENT-GUIDE.md`
- **Deployment Issues**: Check Netlify build logs

---

**Current Status**: Deployed and live!
**Company**: Ulapp
**Theme**: Modern Salesforce-inspired
**Next**: Add more content, images, and pages
