-- Migration: Add site_slug column to existing tables
-- Run this in your Supabase SQL editor if you have existing tables

-- Add site_slug to reviews table
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS site_slug VARCHAR(100) NOT NULL DEFAULT 'rxsaverhub';

-- Add site_slug to ratings table
ALTER TABLE ratings ADD COLUMN IF NOT EXISTS site_slug VARCHAR(100) NOT NULL DEFAULT 'rxsaverhub';

-- Add site_slug to discussions table
ALTER TABLE discussions ADD COLUMN IF NOT EXISTS site_slug VARCHAR(100) NOT NULL DEFAULT 'rxsaverhub';

-- Add site_slug to contact_submissions table
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS site_slug VARCHAR(100) NOT NULL DEFAULT 'rxsaverhub';

-- Drop old indexes and create new ones with site_slug
DROP INDEX IF EXISTS idx_reviews_provider;
DROP INDEX IF EXISTS idx_ratings_provider;
DROP INDEX IF EXISTS idx_discussions_provider;

CREATE INDEX IF NOT EXISTS idx_reviews_site_provider ON reviews(site_slug, provider_slug);
CREATE INDEX IF NOT EXISTS idx_ratings_site_provider ON ratings(site_slug, provider_slug);
CREATE INDEX IF NOT EXISTS idx_discussions_site_provider ON discussions(site_slug, provider_slug);
CREATE INDEX IF NOT EXISTS idx_contact_site ON contact_submissions(site_slug);

-- Drop the old view first, then recreate with site_slug
DROP VIEW IF EXISTS provider_rating_stats;

CREATE VIEW provider_rating_stats AS
SELECT
  site_slug,
  provider_slug,
  COUNT(*) as total_ratings,
  ROUND(AVG(rating)::numeric, 1) as average_rating,
  COUNT(*) FILTER (WHERE rating = 5) as five_star,
  COUNT(*) FILTER (WHERE rating = 4) as four_star,
  COUNT(*) FILTER (WHERE rating = 3) as three_star,
  COUNT(*) FILTER (WHERE rating = 2) as two_star,
  COUNT(*) FILTER (WHERE rating = 1) as one_star
FROM (
  SELECT site_slug, provider_slug, rating FROM reviews WHERE rating IS NOT NULL
  UNION ALL
  SELECT site_slug, provider_slug, rating FROM ratings
) combined_ratings
GROUP BY site_slug, provider_slug;
