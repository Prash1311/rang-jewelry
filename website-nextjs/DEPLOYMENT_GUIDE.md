# 🚀 DEPLOYMENT GUIDE
## Rang Website - From Local to Live

---

## OPTION 1: VERCEL (Recommended - FREE)

Vercel is the easiest way to deploy Next.js sites. It's free and takes 5 minutes!

### Step 1: Create GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up (free)
3. Create new repository called `rang-website`
4. Initialize git locally:

```bash
cd website-nextjs
git init
git add .
git commit -m "Initial commit - Rang website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rang-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → Select "GitHub"
3. Authorize Vercel to access GitHub
4. Click "New Project"
5. Select your `rang-website` repository
6. Click "Import"
7. Leave settings as default
8. Click "Deploy"

**That's it! Your site is live!** 🎉

Your site will be at: `https://rang-website.vercel.app`

### Step 3: Add Custom Domain

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Enter your domain (e.g., `rang-jewelry.com`)
3. Follow DNS setup instructions from your domain registrar
4. SSL certificate auto-generates (takes ~1 hour)

### Step 4: Automatic Updates

Now whenever you:
```bash
git add .
git commit -m "Update products"
git push origin main
```

Your site **automatically deploys!** No manual uploads needed.

---

## OPTION 2: NETLIFY (Alternative - FREE)

### Step 1: Build Static Export

```bash
cd website-nextjs
npm run build
```

This creates an `out` folder with all static files.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Click "Drag to Deploy"
4. Drag the `out` folder into Netlify
5. Done! Your site is live

Your site will be at: `https://random-name.netlify.app`

### Step 3: Connect Custom Domain

1. Go to "Domain settings"
2. Add your custom domain
3. Update DNS records at your registrar
4. SSL auto-generates

---

## OPTION 3: TRADITIONAL HOSTING (Bluehost, GoDaddy, etc.)

### Requirements:
- Node.js 18+ installed on server
- SSH/FTP access
- npm installed

### Deployment Steps:

```bash
# 1. Build the project
npm run build

# 2. Upload files via FTP:
# - Copy entire project to server
# - Install dependencies: npm install --production
# - Start with PM2: pm2 start "npm start"

# 3. Set up reverse proxy (Nginx)
# Example nginx config:
```

```nginx
upstream rang {
  server localhost:3000;
}

server {
  listen 80;
  server_name rang-jewelry.com;

  location / {
    proxy_pass http://rang;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## STEP-BY-STEP: VERCEL DEPLOYMENT

### 1. Prerequisites

- [ ] GitHub account created
- [ ] Git installed on computer
- [ ] Website code ready

### 2. Prepare Code

```bash
# Navigate to project
cd website-nextjs

# Make sure all changes are saved
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Initial website commit"
```

### 3. Create GitHub Repository

On GitHub.com:

1. Click "+" icon → "New repository"
2. Name: `rang-website`
3. Description: "Rang - The Colours of Tradition website"
4. Click "Create repository"
5. Copy the HTTPS link (looks like `https://github.com/username/rang-website.git`)

### 4. Push to GitHub

```bash
git remote add origin https://github.com/USERNAME/rang-website.git
git branch -M main
git push -u origin main
```

### 5. Deploy on Vercel

1. Visit [vercel.com/import](https://vercel.com/import)
2. Click "From Git Repository"
3. Paste your GitHub repo URL
4. Click "Continue"
5. Vercel auto-detects Next.js
6. Click "Deploy"
7. **Wait 2-3 minutes**
8. Click "Visit" when done!

### 6. Configure Domain

In Vercel dashboard:

1. Go to Settings → Domains
2. Enter your domain: `rang-jewelry.com`
3. Click "Add"
4. Update DNS at your registrar:
   - Find "Vercel nameservers"
   - Update domain's nameservers
   - Wait 24-48 hours for propagation

---

## ENVIRONMENT VARIABLES

If you add any secrets (API keys, passwords):

### Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://rang-jewelry.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
EMAIL_API_KEY=sk_secret_xxxxx
```

### Add to Vercel:

1. Project Settings → Environment Variables
2. Add each variable
3. Vercel auto-includes in deployments

---

## MONITORING AFTER DEPLOYMENT

### Check Deployment Status

- Vercel Dashboard: See build logs, deployment history
- Error tracking: [Sentry.io](https://sentry.io) (optional)
- Analytics: [Google Analytics](https://analytics.google.com)

### Common Issues

**Issue: Images not loading**
- Check paths: `/images/bangles/product_01.jpg`
- Ensure images in `public` folder
- Build and redeploy

**Issue: Styles look wrong**
- Check Tailwind CSS build
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)

**Issue: Form not working**
- Check if Formspree integrated
- Test in browser console
- Check network requests (F12)

---

## MAINTENANCE

### Monthly Tasks

- [ ] Update products in `app/data/products.json`
- [ ] Add new product images
- [ ] Check Google Analytics
- [ ] Update customer testimonials
- [ ] Monitor contact form submissions

### Updating After Deployment

```bash
# Make changes locally
# Edit products.json, add images, etc.

# Push changes
git add .
git commit -m "Update products - May 2026"
git push origin main

# Vercel auto-deploys!
# Check vercel.com dashboard for status
```

---

## COST SUMMARY

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | FREE | For Next.js static sites |
| Domain | ₹50-400/month | Namecheap, GoDaddy, etc. |
| Email | FREE | Built-in (Formspree free tier) |
| Analytics | FREE | Google Analytics |
| **Total** | **₹50-400/month** | Just domain cost! |

---

## FAQ

**Q: Can I deploy without GitHub?**
- A: Yes, Netlify accepts folder drag-drop (but git is better)

**Q: Can I go back to a previous version?**
- A: Yes, Vercel shows all deployments. Click any to revert

**Q: How often does it update?**
- A: Instantly with each `git push`

**Q: Is it secure?**
- A: Yes! Vercel provides SSL by default, no setup needed

**Q: Can I use a different domain later?**
- A: Yes! Just update domain settings in Vercel

**Q: What if Vercel goes down?**
- A: Never happened, but you can export as static HTML

---

## QUICK DEPLOYMENT CHECKLIST

- [ ] Website works locally: `npm run dev`
- [ ] All images in `public/images/`
- [ ] Products updated in `products.json`
- [ ] Colors/styles finalized
- [ ] GitHub account created
- [ ] Repository pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Deployment successful
- [ ] Domain name purchased
- [ ] Domain added to Vercel
- [ ] DNS updated
- [ ] SSL certificate issued (1-48 hours)
- [ ] Site accessible via custom domain
- [ ] Analytics set up
- [ ] Contact form tested
- [ ] **LIVE!** 🎉

---

## SUPPORT

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)

---

**You're ready to launch! 🚀**

Any questions? Check the main README.md or the troubleshooting guide.

---

*Last Updated: May 6, 2026*
