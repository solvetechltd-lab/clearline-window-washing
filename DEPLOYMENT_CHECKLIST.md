# Deployment Checklist - Clearline Window Co.

## Pre-Launch Checklist

### Phase 1: Configuration (30 minutes)

- [ ] **Edit `config/site.ts`**
  - [ ] Phone number
  - [ ] Email address
  - [ ] City/Location
  - [ ] Service areas (list of cities)
  - [ ] Hours (Mon-Sat, Sun)
  - [ ] Pricing (small, medium, large home)
  - [ ] Testimonials (REPLACE placeholder reviews)
  - [ ] Social media links (Facebook, Instagram, Google)
  - [ ] Promo code and discount percentage

- [ ] **Add photos to `public/images/`**
  - [ ] At least 1 hero/business photo
  - [ ] Ideally service-specific photos
  - [ ] Update component imports if using images

### Phase 2: Local Testing (20 minutes)

- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] **Test Home Page** at http://localhost:3000
  - [ ] Hero section loads
  - [ ] Services visible
  - [ ] Testimonials display
  - [ ] All CTAs clickable
  - [ ] Mobile responsive (test at 375px)

- [ ] **Test Quote Form** at http://localhost:3000/quote
  - [ ] Step 1: Select property type
  - [ ] Step 1: Select services
  - [ ] Step 2: Select windows, stories, frequency
  - [ ] Step 2: Estimate calculator shows
  - [ ] Step 3: Fill contact info
  - [ ] Submit button works
  - [ ] See success message
  - [ ] Check server logs for submission

- [ ] **Test Contact Form** at http://localhost:3000/contact
  - [ ] Fill all fields
  - [ ] Submit works
  - [ ] Success message appears
  - [ ] Check server logs for submission

- [ ] **Mobile Testing**
  - [ ] Click header logo (back to home)
  - [ ] Test hamburger menu
  - [ ] Click mobile buttons (Call, Free Quote)
  - [ ] Test all CTA buttons
  - [ ] Forms are readable and touchable
  - [ ] No layout shifts or overflow

### Phase 3: Prepare Environment (10 minutes)

- [ ] Create `.env.local` (copy `.env.example`)
- [ ] Add Resend API key (get free at https://resend.com)
- [ ] Set `OWNER_EMAIL` to your email
- [ ] Set `FROM_EMAIL` to your domain email

### Phase 4: Email Testing (5 minutes)

- [ ] **Test Quote Form Email**
  - [ ] Fill quote form completely
  - [ ] Submit
  - [ ] Check your email for submission (check spam)
  - [ ] Verify customer receives auto-reply
  - [ ] Verify email content is clean

- [ ] **Test Contact Form Email**
  - [ ] Fill contact form
  - [ ] Submit
  - [ ] Check for owner email
  - [ ] Check for customer auto-reply

### Phase 5: Performance & SEO (15 minutes)

- [ ] **Run Lighthouse**
  - [ ] Performance: Should be 90+
  - [ ] Accessibility: Should be 95+
  - [ ] SEO: Should be 100
  - [ ] Best Practices: Should be 95+

- [ ] **Test SEO Elements**
  - [ ] Check page titles in browser
  - [ ] Meta descriptions visible in Google Search preview
  - [ ] JSON-LD schema present (check page source)
  - [ ] Open Graph tags work (test share on social)

- [ ] **Test All Pages Load**
  - [ ] / (home)
  - [ ] /quote
  - [ ] /contact
  - [ ] /privacy
  - [ ] 404 page works

### Phase 6: Build for Production (5 minutes)

- [ ] Run: `npm run build`
- [ ] Confirm: "Creating optimized production build..."
- [ ] No errors in build output
- [ ] `.next/` directory created

## Deployment Phase

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Clearline Window Co. website"

# Create main branch
git branch -M main

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/clearline-windows.git

# Push
git push -u origin main
```

- [ ] Repository created on GitHub
- [ ] All files pushed
- [ ] No sensitive data in commits

### Step 2: Deploy to Vercel

1. [ ] Go to https://vercel.com/import
2. [ ] Click "Import Git Repository"
3. [ ] Select GitHub repo
4. [ ] Click "Import"
5. [ ] Wait for initial preview build

### Step 3: Configure Environment Variables

In Vercel Project Settings → Environment Variables:

- [ ] Add `RESEND_API_KEY` (your Resend API key)
- [ ] Add `OWNER_EMAIL` (your email)
- [ ] Add `FROM_EMAIL` (noreply@yoursite.com or your domain)
- [ ] Redeploy after adding vars

### Step 4: Test Production Deployment

- [ ] Visit Vercel preview URL
- [ ] All pages load
- [ ] Forms work and send emails
- [ ] Emails arrive in inbox
- [ ] Check Lighthouse scores again

### Step 5: Connect Custom Domain

In Vercel Project Settings → Domains:

- [ ] Add your domain (e.g., clearlinewindows.com)
- [ ] Note the nameservers
- [ ] Update domain registrar DNS settings
- [ ] Wait for DNS propagation (5-48 hours)
- [ ] Domain is now live

- [ ] Test on live domain
- [ ] HTTPS works (auto with Vercel)
- [ ] All pages accessible
- [ ] Forms work

## Post-Launch Checklist

### 24 Hours After Launch

- [ ] Check Vercel analytics
- [ ] Monitor form submissions
- [ ] Verify emails are arriving
- [ ] Check for any errors in Vercel logs

### 1 Week After Launch

- [ ] Add website to Google Business Profile
- [ ] Submit sitemap to Google Search Console
  - [ ] Go to https://search.google.com/search-console
  - [ ] Add property
  - [ ] Submit `/sitemap.xml`
- [ ] Add email to Search Console
- [ ] Monitor search rankings

### Ongoing

- [ ] Monitor form submissions daily
- [ ] Respond to quotes/contact forms within 2 hours
- [ ] Update testimonials monthly with real customer reviews
- [ ] Check Lighthouse scores monthly
- [ ] Update photos seasonally

## What to Share with Clients/Team

### For Your Reference
- Your Vercel project URL
- Your domain
- Resend account credentials (securely)

### To Monitor Submissions
- Check your email regularly for form submissions
- No additional dashboard needed - all submissions come via email

## Troubleshooting During Deployment

### Forms not sending emails
- Verify `RESEND_API_KEY` is set in Vercel
- Check `OWNER_EMAIL` is valid
- Check spam folder
- View Vercel function logs

### Domain not working
- Check DNS settings propagated (use dns.google)
- Wait up to 48 hours for full propagation
- Verify nameservers match Vercel's

### Page looks wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Disable browser extensions
- Try incognito window

### Build failed in Vercel
- Check build logs in Vercel dashboard
- Verify all env vars are set
- Try redeploying manually

## Success Indicators

You'll know you're ready to go live when:

✅ All forms tested and working
✅ Emails arriving in your inbox
✅ Lighthouse scores are 90+
✅ Mobile looks good at all breakpoints
✅ Domain is pointing to Vercel
✅ HTTPS is working
✅ SEO elements are in place
✅ You can respond to form submissions

## Contact & Support

- **Quick questions?** → Check README.md
- **Setup help?** → See SETUP.md
- **Configuration?** → Edit config/site.ts
- **Deployment issues?** → Check Vercel logs

---

**Estimated time to full launch: 2-3 hours**

1. Configuration: 30 min
2. Local testing: 20 min
3. GitHub & Vercel setup: 30 min
4. Domain & DNS: 30 min
5. Final testing: 20 min

**You're ready to launch!** 🚀
