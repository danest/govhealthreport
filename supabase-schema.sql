-- Supabase Schema for Rx Saver Hub Reviews & Discussions
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Reviews table (for user reviews with optional rating)
CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  provider_slug VARCHAR(100) NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  author_email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(200),
  content TEXT NOT NULL,
  helpful_count INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ratings table (for quick ratings without review)
CREATE TABLE ratings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  provider_slug VARCHAR(100) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  user_identifier VARCHAR(255), -- optional: can be email or anonymous identifier
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Discussions table (for questions and discussions)
CREATE TABLE discussions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  provider_slug VARCHAR(100) NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  author_email VARCHAR(255),
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  type VARCHAR(20) DEFAULT 'question' CHECK (type IN ('question', 'discussion')),
  is_answered BOOLEAN DEFAULT FALSE,
  upvote_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Discussion replies table
CREATE TABLE discussion_replies (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  discussion_id UUID REFERENCES discussions(id) ON DELETE CASCADE,
  author_name VARCHAR(100) NOT NULL,
  author_email VARCHAR(255),
  content TEXT NOT NULL,
  is_accepted_answer BOOLEAN DEFAULT FALSE,
  upvote_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Review helpful votes (to track who marked reviews as helpful)
CREATE TABLE review_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  review_id UUID REFERENCES reviews(id) ON DELETE CASCADE,
  user_identifier VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(review_id, user_identifier)
);

-- Discussion upvotes
CREATE TABLE discussion_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  discussion_id UUID REFERENCES discussions(id) ON DELETE CASCADE,
  user_identifier VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(discussion_id, user_identifier)
);

-- Reply upvotes
CREATE TABLE reply_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  reply_id UUID REFERENCES discussion_replies(id) ON DELETE CASCADE,
  user_identifier VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(reply_id, user_identifier)
);

-- Indexes for performance
CREATE INDEX idx_reviews_provider ON reviews(provider_slug);
CREATE INDEX idx_reviews_created ON reviews(created_at DESC);
CREATE INDEX idx_ratings_provider ON ratings(provider_slug);
CREATE INDEX idx_discussions_provider ON discussions(provider_slug);
CREATE INDEX idx_discussions_created ON discussions(created_at DESC);
CREATE INDEX idx_replies_discussion ON discussion_replies(discussion_id);

-- Row Level Security (RLS) policies
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reply_votes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read
CREATE POLICY "Allow public read on reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Allow public read on ratings" ON ratings FOR SELECT USING (true);
CREATE POLICY "Allow public read on discussions" ON discussions FOR SELECT USING (true);
CREATE POLICY "Allow public read on discussion_replies" ON discussion_replies FOR SELECT USING (true);

-- Allow anyone to insert (anonymous reviews/ratings)
CREATE POLICY "Allow public insert on reviews" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on ratings" ON ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on discussions" ON discussions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on discussion_replies" ON discussion_replies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on review_votes" ON review_votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on discussion_votes" ON discussion_votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on reply_votes" ON reply_votes FOR INSERT WITH CHECK (true);

-- Function to update helpful count on reviews
CREATE OR REPLACE FUNCTION update_review_helpful_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE reviews SET helpful_count = helpful_count + 1 WHERE id = NEW.review_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE reviews SET helpful_count = helpful_count - 1 WHERE id = OLD.review_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER review_votes_count
AFTER INSERT OR DELETE ON review_votes
FOR EACH ROW EXECUTE FUNCTION update_review_helpful_count();

-- Function to update upvote count on discussions
CREATE OR REPLACE FUNCTION update_discussion_upvote_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE discussions SET upvote_count = upvote_count + 1 WHERE id = NEW.discussion_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE discussions SET upvote_count = upvote_count - 1 WHERE id = OLD.discussion_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER discussion_votes_count
AFTER INSERT OR DELETE ON discussion_votes
FOR EACH ROW EXECUTE FUNCTION update_discussion_upvote_count();

-- Function to update upvote count on replies
CREATE OR REPLACE FUNCTION update_reply_upvote_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE discussion_replies SET upvote_count = upvote_count + 1 WHERE id = NEW.reply_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE discussion_replies SET upvote_count = upvote_count - 1 WHERE id = OLD.reply_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER reply_votes_count
AFTER INSERT OR DELETE ON reply_votes
FOR EACH ROW EXECUTE FUNCTION update_reply_upvote_count();

-- View for aggregated provider ratings
CREATE OR REPLACE VIEW provider_rating_stats AS
SELECT
  provider_slug,
  COUNT(*) as total_ratings,
  ROUND(AVG(rating)::numeric, 1) as average_rating,
  COUNT(*) FILTER (WHERE rating = 5) as five_star,
  COUNT(*) FILTER (WHERE rating = 4) as four_star,
  COUNT(*) FILTER (WHERE rating = 3) as three_star,
  COUNT(*) FILTER (WHERE rating = 2) as two_star,
  COUNT(*) FILTER (WHERE rating = 1) as one_star
FROM (
  SELECT provider_slug, rating FROM reviews WHERE rating IS NOT NULL
  UNION ALL
  SELECT provider_slug, rating FROM ratings
) combined_ratings
GROUP BY provider_slug;

-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for contact submissions
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_status ON contact_submissions(status);

-- RLS for contact submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
