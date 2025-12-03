import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are not configured");
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

export const supabase = {
  from: (table: string) => getSupabase().from(table),
};

// Types for our database tables
export interface Review {
  id: string;
  provider_slug: string;
  author_name: string;
  author_email?: string;
  rating?: number;
  title?: string;
  content: string;
  helpful_count: number;
  verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Rating {
  id: string;
  provider_slug: string;
  rating: number;
  user_identifier?: string;
  created_at: string;
}

export interface Discussion {
  id: string;
  provider_slug: string;
  author_name: string;
  author_email?: string;
  title: string;
  content: string;
  type: "question" | "discussion";
  is_answered: boolean;
  upvote_count: number;
  created_at: string;
  updated_at: string;
}

export interface DiscussionReply {
  id: string;
  discussion_id: string;
  author_name: string;
  author_email?: string;
  content: string;
  is_accepted_answer: boolean;
  upvote_count: number;
  created_at: string;
  updated_at: string;
}

export interface ProviderRatingStats {
  provider_slug: string;
  total_ratings: number;
  average_rating: number;
  five_star: number;
  four_star: number;
  three_star: number;
  two_star: number;
  one_star: number;
}

// Helper function to get a unique user identifier (for anonymous voting)
export function getUserIdentifier(): string {
  if (typeof window === "undefined") return "";

  let identifier = localStorage.getItem("rxsaverhub_user_id");
  if (!identifier) {
    identifier = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("rxsaverhub_user_id", identifier);
  }
  return identifier;
}

// Reviews API
export async function getReviews(providerSlug: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("provider_slug", providerSlug)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function createReview(review: {
  provider_slug: string;
  author_name: string;
  author_email?: string;
  rating?: number;
  title?: string;
  content: string;
}): Promise<Review> {
  const { data, error } = await supabase
    .from("reviews")
    .insert(review)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function markReviewHelpful(reviewId: string): Promise<void> {
  const userIdentifier = getUserIdentifier();

  const { error } = await supabase
    .from("review_votes")
    .insert({ review_id: reviewId, user_identifier: userIdentifier });

  if (error && error.code !== "23505") throw error; // 23505 is unique violation
}

// Ratings API
export async function createRating(providerSlug: string, rating: number): Promise<void> {
  const userIdentifier = getUserIdentifier();

  const { error } = await supabase
    .from("ratings")
    .insert({
      provider_slug: providerSlug,
      rating,
      user_identifier: userIdentifier
    });

  if (error) throw error;
}

export async function getProviderRatingStats(providerSlug: string): Promise<ProviderRatingStats | null> {
  const { data, error } = await supabase
    .from("provider_rating_stats")
    .select("*")
    .eq("provider_slug", providerSlug)
    .single();

  if (error && error.code !== "PGRST116") throw error; // PGRST116 is no rows returned
  return data;
}

// Discussions API
export async function getDiscussions(providerSlug: string): Promise<Discussion[]> {
  const { data, error } = await supabase
    .from("discussions")
    .select("*")
    .eq("provider_slug", providerSlug)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function createDiscussion(discussion: {
  provider_slug: string;
  author_name: string;
  author_email?: string;
  title: string;
  content: string;
  type: "question" | "discussion";
}): Promise<Discussion> {
  const { data, error } = await supabase
    .from("discussions")
    .insert(discussion)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getDiscussionReplies(discussionId: string): Promise<DiscussionReply[]> {
  const { data, error } = await supabase
    .from("discussion_replies")
    .select("*")
    .eq("discussion_id", discussionId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function createReply(reply: {
  discussion_id: string;
  author_name: string;
  author_email?: string;
  content: string;
}): Promise<DiscussionReply> {
  const { data, error } = await supabase
    .from("discussion_replies")
    .insert(reply)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function upvoteDiscussion(discussionId: string): Promise<void> {
  const userIdentifier = getUserIdentifier();

  const { error } = await supabase
    .from("discussion_votes")
    .insert({ discussion_id: discussionId, user_identifier: userIdentifier });

  if (error && error.code !== "23505") throw error;
}

export async function upvoteReply(replyId: string): Promise<void> {
  const userIdentifier = getUserIdentifier();

  const { error } = await supabase
    .from("reply_votes")
    .insert({ reply_id: replyId, user_identifier: userIdentifier });

  if (error && error.code !== "23505") throw error;
}

// Contact Submissions API
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
}

export async function createContactSubmission(submission: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ContactSubmission> {
  const { data, error } = await supabase
    .from("contact_submissions")
    .insert(submission)
    .select()
    .single();

  if (error) throw error;
  return data;
}
