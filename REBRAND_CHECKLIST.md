# Rebrand Checklist

Use this checklist when cloning this project for a new brand. Replace `NEW_BRAND_NAME` with your brand name (e.g., "Weight Loss Reviews") and `new_brand_slug` with the lowercase slug (e.g., "weightlossreviews").

## Quick Start

```bash
# 1. Clone to new folder
git clone https://github.com/danest/rxsaverhub.git new-brand-name
cd new-brand-name

# 2. Create new GitHub repo, then change remote
git remote set-url origin https://github.com/YOUR_USERNAME/new-repo-name.git

# 3. Update files below, then push
git push -u origin main
```

---

## 1. Core Branding (Required)

### package.json
- [ ] Line 2: Change `"name": "rxsaverhub"` → `"new_brand_slug"`

### app/layout.tsx
- [ ] Line 19: Change title `"Rx Saver Hub - Compare Weight Loss Treatments"` → `"NEW_BRAND_NAME - Compare Weight Loss Treatments"`
- [ ] Line 34: Change OpenGraph title to match

### app/sitemap.ts
- [ ] Line 3: Change `https://www.rxsaverhub.com` → `https://www.yournewdomain.com`

### app/robots.ts
- [ ] Line 9: Change `https://www.rxsaverhub.com/sitemap.xml` → `https://www.yournewdomain.com/sitemap.xml`

### components/sections/Header.tsx
- [ ] Line 28: Change `Rx Saver Hub` → `NEW_BRAND_NAME`

### components/sections/Footer.tsx
- [ ] Line 44: Change `Rx Saver Hub` → `NEW_BRAND_NAME`
- [ ] Line 110: Change copyright `Rx Saver Hub` → `NEW_BRAND_NAME`

---

## 2. API Keys (Required - Create New Accounts)

### app/layout.tsx
- [ ] Line 50: Change Google Ads ID `AW-17776219101` → your new Google Ads ID
- [ ] Line 58: Change Google Ads ID `AW-17776219101` → your new Google Ads ID

### components/providers/PostHogProvider.tsx
- [ ] Line 9: Change PostHog key `phc_hvBWe4aeP58vxVPuFnhfDk7UWwsj2dP6m1sgUTr8sp1` → your new PostHog project key

---

## 3. UTM Tracking (Required for Attribution)

### lib/providers.ts
- [ ] Line 1: Change `utm_source=rxsaverhub` → `utm_source=new_brand_slug`

### components/sections/ProviderCards.tsx
- [ ] Line 9: Change `utm_source=rxsaverhub` → `utm_source=new_brand_slug`

### components/sections/ProviderList.tsx
- [ ] Line 9: Change `utm_source=rxsaverhub` → `utm_source=new_brand_slug`

---

## 4. LocalStorage Key (Recommended)

### lib/supabase.ts
- [ ] Line 72: Change `rxsaverhub_user_id` → `new_brand_slug_user_id`
- [ ] Line 75: Change `rxsaverhub_user_id` → `new_brand_slug_user_id`

---

## 5. Page Content (Required)

Find and replace `Rx Saver Hub` with `NEW_BRAND_NAME` in all these files:

### app/about/page.tsx (7 occurrences)
- [ ] Line 19: Title
- [ ] Line 21: Description
- [ ] Line 40: Heading
- [ ] Line 63: Mission text
- [ ] Line 131: Important notice
- [ ] Line 164: Who we serve
- [ ] Line 244: How we make money

### app/faq/page.tsx (11 occurrences)
- [ ] Line 15: Title
- [ ] Line 17: Description
- [ ] Line 22: Category name
- [ ] Lines 25, 27, 30, 32, 35, 110, 115, 143: Question/answer text

### app/terms/page.tsx (8 occurrences)
- [ ] Line 18: Title
- [ ] Line 20: Description
- [ ] Lines 62, 92, 128, 134, 260, 363: Terms content

### app/privacy/page.tsx (4 occurrences)
- [ ] Line 18: Title
- [ ] Line 20: Description
- [ ] Lines 61, 90, 183: Privacy content

### app/cookies/page.tsx (4 occurrences)
- [ ] Line 17: Title
- [ ] Line 19: Description
- [ ] Lines 60, 158, 176: Cookie policy content

### app/disclaimer/page.tsx (4 occurrences)
- [ ] Line 19: Title
- [ ] Line 21: Description
- [ ] Lines 63, 93, 97: Disclaimer content

### app/disclosure/page.tsx (3 occurrences)
- [ ] Line 17: Title
- [ ] Lines 60, 82, 135: Disclosure content

### Review Pages (title suffix)
- [ ] app/reviews/page.tsx - Line 11
- [ ] app/reviews/ro/page.tsx - Line 9
- [ ] app/reviews/hers/page.tsx - Line 9
- [ ] app/reviews/mystart/page.tsx - Line 9
- [ ] app/reviews/clinic-secret/page.tsx - Line 9
- [ ] app/reviews/coreage-rx/page.tsx - Line 9
- [ ] app/reviews/medvi/page.tsx - Line 9
- [ ] app/reviews/eden/page.tsx - Line 9
- [ ] app/reviews/noom/page.tsx - Line 9
- [ ] app/reviews/mochi-health/page.tsx - Line 9
- [ ] app/reviews/remedy-meds/page.tsx - Line 9

### app/best-weight-loss-injections/page.tsx
- [ ] Line 11: Title

---

## 6. Keep As-Is (Shared Supabase)

These files use the shared Supabase instance - DO NOT change:
- `lib/supabase.ts` - Supabase URL and anon key (lines 4-5)
- `supabase-schema.sql` - Just a comment, no functional impact

---

## Quick Find & Replace Commands

Run these in your editor or terminal:

```bash
# Replace brand name in all files (be careful, review changes)
find . -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/Rx Saver Hub/NEW_BRAND_NAME/g'
find . -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/rxsaverhub/new_brand_slug/g'

# Replace domain
find . -type f -name "*.ts" | xargs sed -i '' 's/www.rxsaverhub.com/www.yournewdomain.com/g'
```

---

## Post-Rebrand Checklist

- [ ] Run `npm install` to update package-lock.json
- [ ] Run `npm run build` to verify no errors
- [ ] Test locally with `npm run dev`
- [ ] Create new PostHog project and update key
- [ ] Create new Google Ads account and update ID
- [ ] Set up new domain in Vercel
- [ ] Update Vercel environment variables if any
- [ ] Push to new GitHub repo
- [ ] Deploy to Vercel
- [ ] Submit new sitemap to Google Search Console
