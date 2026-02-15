# Salesforce Consulting Website

A modern, fast, and accessible website for Salesforce consulting services. Built with pure HTML, CSS, and vanilla JavaScript for maximum performance and control.

## 🚀 Features

- **Performance Optimized**: No framework overhead, fast load times
- **SEO Ready**: Semantic HTML, meta tags, structured data
- **Accessible**: WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly
- **Responsive**: Mobile-first design, works on all devices
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables
- **Progressive Enhancement**: Works without JavaScript, enhanced with JS

## 📁 Project Structure

```
salesforce-website/
├── index.html              # Homepage
├── contact.html            # Contact page with form
├── services.html           # Services page (to be created)
├── case-studies.html       # Case studies page (to be created)
├── blog/                   # Blog directory (to be created)
├── css/
│   └── main.css            # All styles
├── js/
│   ├── main.js             # Core JavaScript
│   └── form.js             # Form handling
├── assets/
│   ├── images/             # Images (to be added)
│   └── favicon.svg         # Favicon (to be added)
└── README.md               # This file
```

## 🛠️ Setup & Deployment

### Local Development

1. **Simple HTTP Server** (Python):
   ```bash
   cd salesforce-website
   python -m http.server 8000
   ```
   Visit: http://localhost:8000

2. **VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

### Deployment Options

#### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push
4. **Form handling**: Add `data-netlify="true"` to form tag

#### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts

#### Option 3: GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from branch
3. Select `main` branch

## 📝 Customization Guide

### 1. Branding

Replace placeholders in all HTML files:
- `[Company Name]` → Your company name
- `[your-company]` → Your LinkedIn handle
- `hello@example.com` → Your email
- `+1 (234) 567-890` → Your phone

### 2. Colors

Edit CSS variables in `css/main.css`:
```css
:root {
  --color-primary: #0176D3;      /* Main brand color */
  --color-primary-dark: #014486;  /* Darker shade */
  --color-secondary: #FF6B35;     /* Accent color */
}
```

### 3. Content

- **Homepage**: Edit `index.html` sections
- **Services**: Create `services.html` (use homepage structure as template)
- **Case Studies**: Create `case-studies.html`
- **Blog**: Add posts in `blog/` directory

### 4. Images

Add images to `assets/images/`:
- `hero-illustration.svg` - Homepage hero image
- `case-study-1.jpg` - Case study thumbnails
- `og-image.jpg` - Social media preview (1200x630px)
- `favicon.svg` - Browser favicon

### 5. Forms

Choose a form backend:

**Option A: Netlify Forms** (Easiest)
```html
<form data-netlify="true" name="contact">
```

**Option B: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C: Custom Backend**
- Update `/api/contact` endpoint in `js/form.js`
- Implement your own API

## 🎨 Best Practices Implemented

### Performance
- ✅ Minimal JavaScript
- ✅ CSS loaded in `<head>`
- ✅ JS loaded with `defer`
- ✅ Lazy loading images
- ✅ Optimized assets

### SEO
- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Structured headings
- ✅ Alt text on images

### Accessibility
- ✅ Skip to main content link
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast (WCAG AA)

### Security
- ✅ No inline scripts
- ✅ `rel="noopener"` on external links
- ✅ Form validation
- ✅ HTTPS ready

## 📊 Performance Targets

- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Next Steps

1. **Add Content**:
   - Replace placeholder text
   - Add real case studies
   - Write blog posts

2. **Add Images**:
   - Create/source hero images
   - Add client logos
   - Case study screenshots

3. **Set Up Analytics**:
   - Google Analytics
   - Plausible Analytics
   - Or your preferred tool

4. **Set Up Form Backend**:
   - Choose Netlify Forms, Formspree, or custom
   - Test form submissions

5. **SEO Optimization**:
   - Submit sitemap to Google
   - Set up Google Search Console
   - Create robots.txt

6. **Additional Pages**:
   - Services detail page
   - Case studies page
   - Blog listing and posts
   - About page

## 📚 Resources

- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [CSS Guidelines](https://cssguidelin.es/)
- [Web.dev Performance](https://web.dev/performance/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Support

Need help? Contact the development team or refer to the documentation above.

---

Built with ❤️ using pure HTML, CSS, and JavaScript
