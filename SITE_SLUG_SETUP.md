# Site Slug Setup Guide

## What is site_slug?

The `site_slug` is a unique identifier for each brand/website that shares the same Supabase database. It allows multiple branded sites (e.g., rxsaverhub, weightlossreviews, glp1compare) to:

- Share the same Supabase instance (cost-effective)
- Keep their reviews, discussions, and contact submissions completely separate
- Use identical code with just one config change

## How it works

Every record in the database is tagged with a `site_slug`:

```
reviews table:
| id | site_slug      | provider_slug | author_name | content        |
|----|----------------|---------------|-------------|----------------|
| 1  | rxsaverhub     | coreage-rx    | John        | Great service! |
| 2  | rxsaverhub     | ro            | Jane        | Fast shipping  |
| 3  | weightlossxyz  | coreage-rx    | Bob         | Love it!       |
```

When rxsaverhub queries for CoreAge Rx reviews, it only sees John's review.
When weightlossxyz queries for CoreAge Rx reviews, it only sees Bob's review.

## Files involved

### `lib/site-config.ts`
The single source of truth for the site identity:
```typescript
export const SITE_SLUG = "rxsaverhub";  // Unique identifier in database
export const SITE_NAME = "Rx Saver Hub"; // Display name (optional, for convenience)
```

### `lib/supabase.ts`
All database queries filter by `SITE_SLUG`:
```typescript
// Reading data - only get records for this site
.eq("site_slug", SITE_SLUG)

// Writing data - tag records with this site
.insert({ ...data, site_slug: SITE_SLUG })
```

## Setting up a new brand

### Step 1: Update site-config.ts
```typescript
// For a new brand called "Weight Loss XYZ"
export const SITE_SLUG = "weightlossxyz";  // lowercase, no spaces
export const SITE_NAME = "Weight Loss XYZ";
```

### Step 2: That's it!
All queries automatically use the new `SITE_SLUG`. Reviews submitted on this site will be tagged with "weightlossxyz" and only visible on this site.

## Database migration (one-time setup)

If your Supabase was created before site_slug support, run the migration:

```sql
-- See: supabase-migration-add-site-slug.sql
```

This adds the `site_slug` column to all tables and sets existing records to "rxsaverhub" as the default.

## Important notes

1. **SITE_SLUG must be unique** - Each brand needs a different slug
2. **Don't change SITE_SLUG after launch** - Existing data is tagged with the old slug
3. **Supabase credentials stay the same** - All sites share the same database
4. **LocalStorage key should also be unique** - Update `rxsaverhub_user_id` in supabase.ts to `yourbrand_user_id`

## Affected data

The following are scoped by site_slug:
- ✅ Reviews (user reviews with ratings)
- ✅ Ratings (quick star ratings)
- ✅ Discussions (questions and answers)
- ✅ Contact form submissions

The following are NOT scoped (shared across all sites):
- Provider data (defined in `lib/providers.ts`, not in database)
- Vote tracking (review_votes, discussion_votes, reply_votes)

## Troubleshooting

**Reviews from another site showing up?**
- Check that `SITE_SLUG` is set correctly in `lib/site-config.ts`
- Make sure you're importing from the right file

**New reviews not appearing?**
- Check browser console for Supabase errors
- Verify the migration was run on your Supabase instance

**Build errors after update?**
- Make sure `lib/site-config.ts` exists
- Run `npm run build` to see specific errors
