# RANG - The Colours of Tradition
## Static Showcase Website

A beautiful, modern website for Rang - Artificial Rajputana Jewelry. Built with Next.js and deployed on Vercel.

---

## 🚀 QUICK START

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the project
cd website-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 PROJECT STRUCTURE

```
website-nextjs/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── data/
│   │   └── products.json    # Product catalog (EDIT THIS!)
│   ├── products/
│   │   └── page.tsx         # Products gallery & filtering
│   ├── contact/
│   │   └── page.tsx         # Contact form
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/
│   └── images/              # Product images
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 📝 UPDATING PRODUCTS

### How to Add/Edit Products

1. **Open** `app/data/products.json`

2. **Add a new product** to the array:

```json
{
  "id": 21,
  "name": "New Bangles Collection",
  "category": "Bangles",
  "price": 2999,
  "image": "/images/bangles/product_21.jpg",
  "description": "Beautiful new design",
  "colors": ["Gold", "Silver"],
  "rating": 4.8,
  "reviews": 12
}
```

3. **Save the file** - the website updates automatically!

### Product Fields Explained:
- `id`: Unique number for each product
- `name`: Product name
- `category`: Bangles, Necklaces, Rings, Sheeshpatti, Baju, Rakhdi, Bangadi, Boreband
- `price`: Price in rupees (₹)
- `image`: Path to product image (must be in public/images/)
- `description`: Brief product description
- `colors`: Available colors
- `rating`: 0-5 stars
- `reviews`: Number of customer reviews

---

## 🖼️ ADDING PRODUCT IMAGES

### Step 1: Prepare Images

1. Copy your product images to the correct folder:
   - `public/images/bangles/` - for bangles
   - `public/images/necklaces/` - for necklaces
   - `public/images/rings/` - for rings
   - etc.

2. **Name images properly**:
   - Good: `product_01.jpg`, `bangle_gold_01.jpg`
   - Bad: `IMG_1234.jpg`, `image 1.jpeg`

### Step 2: Update JSON

Update the product JSON with the correct image path:

```json
"image": "/images/bangles/product_01.jpg"
```

### Step 3: Done!

The website will automatically display the images.

---

## 🎨 CUSTOMIZING COLORS & STYLE

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  gold: '#d4a574',           // Main accent color
  'rang-gold': '#c9a961',    // Darker gold
  'rang-dark': '#2d1b0c',    // Dark brown text
  'rang-light': '#f5e6d3',   // Light background
  'rang-accent': '#d4a574',  // Accent
}
```

### Fonts

Change fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  playfair: ['"Playfair Display"', 'serif'],  // Headings
  lora: ['"Lora"', 'serif'],                  // Body text
  poppins: ['"Poppins"', 'sans-serif'],       // UI
}
```

### Styles

Edit `app/globals.css` for custom CSS changes.

---

## 📧 CONTACT FORM SETUP

### Current Status
The contact form is a **client-side demo**. Messages are logged to the browser console.

### To Enable Real Email

**Option 1: Using Formspree (Easy)**

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form and get your form ID
4. Update `app/contact/page.tsx`:

```tsx
const handleSubmit = async (e: any) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitted(true)
    // ... rest of code
  }
}
```

**Option 2: Using SendGrid (Professional)**

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Create backend API route in Next.js
4. Send emails via API

---

## 🔍 SEO OPTIMIZATION

### Update Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  keywords: 'keyword1, keyword2, keyword3',
}
```

### Add Structured Data

Add to your pages for better search results:

```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rang",
  "image": "/logo.png",
  "description": "Artificial Rajputana Jewelry"
}
</script>
```

---

## 🚀 DEPLOYMENT

### Deploy to Vercel (Recommended - FREE)

**Step 1: Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

**Step 2: Connect to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**That's it!** Your site is live! 🎉

### Automatic Deployments

- Every push to `main` branch auto-deploys
- Preview URLs for pull requests
- Free SSL certificate included
- Free CDN included

### Deploy to Netlify (Alternative)

```bash
npm run export
```

Then drag the `out` folder to [netlify.com](https://netlify.com)

---

## 📱 MOBILE OPTIMIZATION

The site is fully responsive! Works on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

Test with:
```bash
npm run dev
```

Then open DevTools (F12) and toggle device toolbar.

---

## 🔐 DOMAIN & SSL

### Add Custom Domain

**On Vercel:**
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Follow DNS setup instructions
5. SSL certificate auto-generates (free!)

**Domain Registrars:**
- Namecheap.com
- GoDaddy.com
- Hostinger.com

---

## 📊 ANALYTICS

### Google Analytics

1. Create account at [google.com/analytics](https://analytics.google.com)
2. Get Measurement ID
3. Create `app/components/Analytics.tsx`:

```tsx
'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  )
}
```

4. Add to `app/layout.tsx`:

```tsx
import Analytics from './components/Analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
```

---

## 🐛 TROUBLESHOOTING

### Images not showing?
- Check file path is correct
- Ensure image file exists in `public/images/`
- Try `.jpg` instead of `.jpeg`

### Styles look wrong?
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run build` to rebuild
- Check Tailwind config for color names

### Site won't load locally?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Deployment failed?
- Check for TypeScript errors: `npm run build`
- Ensure all images have correct paths
- Check console for errors (F12)

---

## 💡 TIPS & TRICKS

### Bulk Product Upload

Use this script to convert a CSV to JSON:

```bash
# Create products.csv with columns:
# name,category,price,description,colors,rating,reviews

# Then use a CSV to JSON converter
# Or create a script to transform the data
```

### Performance

The site is super fast! To keep it that way:
- Optimize images (use 0.8x quality JPEGs)
- Lazy load images below fold
- Minimize CSS/JS

```bash
npm run build
# Check output size in console
```

### Custom Pages

Add new pages easily:

```bash
# Create new page directory
mkdir -p app/new-page

# Create page.tsx
touch app/new-page/page.tsx
```

Then add content like `app/about/page.tsx`.

---

## 🆘 SUPPORT

### Need Help?

1. **Check browser console** (F12) for errors
2. **Check Next.js docs**: [nextjs.org/docs](https://nextjs.org/docs)
3. **Check Tailwind docs**: [tailwindcss.com](https://tailwindcss.com)
4. **Stack Overflow**: Tag with `nextjs`

---

## 📄 LICENSE

This website is the property of Rang - The Colours of Tradition.

---

## 🎯 NEXT STEPS

1. ✅ Install and run locally
2. ✅ Update product images in `public/images/`
3. ✅ Edit products in `app/data/products.json`
4. ✅ Customize colors in `tailwind.config.js`
5. ✅ Set up contact form with Formspree
6. ✅ Add Google Analytics
7. ✅ Deploy to Vercel
8. ✅ Set up custom domain
9. ✅ Monitor analytics
10. ✅ Keep adding new products!

---

## 📞 QUICK COMMANDS

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Building
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Check for code errors

# Export static
npm run export       # Export as static HTML (for Netlify)
```

---

**Happy selling! 🎉**

For questions, contact the development team.

---

*Last updated: May 6, 2026*
