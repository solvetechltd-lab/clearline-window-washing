# Clearline Window Co. - Setup & Deployment Guide

## Quick Start

### 1. Edit Business Information

All business info is in one file: **`src/config/site.ts`**

Update these fields:
- `name`: Business name
- `phone`: Contact phone number
- `email`: Contact email
- `city`: Service area city/location
- `serviceAreas`: List of cities you serve
- `hours`: Operating hours
- `pricing`: Service prices
- `social`: Social media links
- `testimonials`: Customer reviews (REPLACE WITH REAL ONES)

### 2. Set Up Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Required variables:
- `RESEND_API_KEY` – Get from https://resend.com (free, 100 emails/day in dev)
- `OWNER_EMAIL` – Your email to receive quote/contact form submissions
- `FROM_EMAIL` – Email address for sending (e.g., noreply@yoursite.com)

### 3. Add Real Photos

Place photos in `public/images/`:
- `hero.jpg` – Hero section image
- `service-*.jpg` – Service card images
- `testimonial-*.jpg` – Customer photos (optional)

The site currently uses placeholders. Update components to reference images as needed.

### 4. Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### 5. Test Forms

Without `RESEND_API_KEY`:
- Forms will log submissions to server console
- Still return success to user

With `RESEND_API_KEY`:
- Two emails sent: one to you, one auto-reply to customer
- Check spam folder for test emails

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Clearline Window Co. website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/clearline-windows.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/import
2. Select your GitHub repository
3. Click "Import"
4. Add environment variables in Project Settings:
   - `RESEND_API_KEY`
   - `OWNER_EMAIL`
   - `FROM_EMAIL`
5. Click "Deploy"

### Step 3: Connect Custom Domain

In Vercel Project Settings → Domains:
1. Add your domain (e.g., `clearlinewindows.com`)
2. Follow DNS setup instructions
3. Wait for DNS propagation (5-48 hours)

### Step 4: Verify Deployment

- Visit your domain
- Test forms (especially with RESEND_API_KEY set)
- Check lighthouse scores (Performance > 90, SEO 100)

## Customization

### Colors

Tailwind color tokens in `tailwind.config.ts`:
- Navy: `#0B2545`
- Sky Blue: `#1E90FF`
- Aqua: `#E8F4FD`
- Sun Yellow: `#FFC93C`

To change: edit hex values in `tailwind.config.ts` and `app/globals.css`

### Fonts

Using Google Fonts:
- **Headings**: Poppins (bold: 600/700)
- **Body**: Inter

To change: edit `app/layout.tsx`

### Form Fields

Quote form has 3 steps:
1. Services
2. Property details
3. Contact info

To add/remove questions: edit `src/components/QuoteForm.tsx` and `src/lib/validation.ts`

## SEO

All pages have:
- ✓ Unique titles and meta descriptions
- ✓ LocalBusiness JSON-LD schema
- ✓ FAQPage schema (on home)
- ✓ Open Graph tags
- ✓ Sitemap (auto-generated)
- ✓ Robots.txt

Monitor with Google Search Console.

## Production Checklist

Before launching:

- [ ] Update all placeholders in `src/config/site.ts`
- [ ] Replace testimonials with real customer reviews
- [ ] Add real photos to `public/images/`
- [ ] Set `RESEND_API_KEY` in Vercel
- [ ] Verify OWNER_EMAIL receives test submissions
- [ ] Test all forms end-to-end
- [ ] Check mobile responsiveness (375px, 768px, 1440px)
- [ ] Verify lighthouse scores (Performance 90+, SEO 100)
- [ ] Set up Google Business Profile
- [ ] Add domain to Google Search Console
- [ ] Test click-to-call links (`tel:` on mobile)
- [ ] Verify form emails go to inbox (not spam)

## Maintenance

### Regular Tasks

- Monitor form submissions (check email)
- Update testimonials quarterly
- Refresh photos seasonally
- Monitor lighthouse scores monthly

### Common Updates

**Change phone number:**
- Edit `siteConfig.phone` in `src/config/site.ts`
- Automatically updates everywhere

**Change service area:**
- Edit `serviceAreas` in `src/config/site.ts`

**Update pricing:**
- Edit `pricing` in `src/config/site.ts`

**Change hours:**
- Edit `hours` in `src/config/site.ts`

## Support

For issues:
1. Check server logs in Vercel dashboard
2. Review form submissions in email
3. Test locally first (`npm run dev`)
4. Check `.env.local` variables are set
5. Verify Resend API key is valid

## File Structure

```
clearline/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom styles
│   ├── quote/
│   │   └── page.tsx        # Quote form page
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── api/
│       ├── quote/
│       │   └── route.ts    # Quote form handler
│       └── contact/
│           └── route.ts    # Contact form handler
├── src/
│   ├── config/
│   │   └── site.ts         # ALL BUSINESS INFO HERE
│   ├── components/         # Reusable UI components
│   └── lib/
│       ├── validation.ts   # Form schemas
│       ├── email.ts        # Email templates
│       ├── rateLimit.ts    # Rate limiting
│       └── analytics.ts    # Analytics helper
├── public/
│   ├── images/             # Your photos go here
│   └── favicon.ico
├── tailwind.config.ts      # Tailwind customization
├── package.json
└── .env.example            # Copy to .env.local
```

## Next Steps

1. **Immediate**: Update `src/config/site.ts` with your info
2. **Today**: Add real photos
3. **This week**: Deploy to Vercel
4. **Before launch**: Replace placeholder reviews with real ones
