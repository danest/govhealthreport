"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Star,
  ThumbsUp,
  MessageSquarePlus,
  User,
  CheckCircle,
  Loader2,
  FileText,
  Users,
  BarChart3,
} from "lucide-react";
import {
  getReviews,
  createReview,
  markReviewHelpful,
  getProviderRatingStats,
  type Review,
  type ProviderRatingStats,
} from "@/lib/supabase";

interface UserReviewsProps {
  providerSlug: string;
  providerName: string;
}

function StarRating({
  rating,
  onRatingChange,
  readonly = false,
  size = "md",
}: {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={`${readonly ? "cursor-default" : "cursor-pointer"} transition-colors`}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => onRatingChange?.(star)}
        >
          <Star
            className={`${sizeClasses[size]} ${
              star <= (hoverRating || rating)
                ? "fill-[#ffc72c] text-[#ffc72c]"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function RatingDistribution({ stats }: { stats: ProviderRatingStats }) {
  const total = stats.total_ratings || 1;
  const bars = [
    { stars: 5, count: stats.five_star },
    { stars: 4, count: stats.four_star },
    { stars: 3, count: stats.three_star },
    { stars: 2, count: stats.two_star },
    { stars: 1, count: stats.one_star },
  ];

  return (
    <div className="space-y-2">
      {bars.map(({ stars, count }) => (
        <div key={stars} className="flex items-center gap-3 text-sm">
          <span className="w-12 text-gray-600 font-medium">{stars} star</span>
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffc72c] rounded-full transition-all"
              style={{ width: `${(count / total) * 100}%` }}
            />
          </div>
          <span className="w-8 text-right text-gray-600 font-medium">{count}</span>
        </div>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  onHelpful,
  index,
}: {
  review: Review;
  onHelpful: () => void;
  index: number;
}) {
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = async () => {
    if (hasVoted) return;
    setHasVoted(true);
    onHelpful();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-[#003366] px-4 py-2 flex items-center justify-between">
        <span className="text-white text-sm font-medium">
          Consumer Report #{index + 1}
        </span>
        {review.rating && (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#ffc72c] text-[#ffc72c]" />
            <span className="text-white text-sm font-bold">{review.rating}/5</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8eef4] text-[#003366] font-bold">
            {review.author_name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-[#003366]">{review.author_name}</span>
              {review.verified && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">
                  <CheckCircle className="h-3 w-3" />
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">
              Submitted: {new Date(review.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {review.title && (
              <h4 className="font-semibold text-[#003366] mt-3">{review.title}</h4>
            )}
            <p className="text-gray-700 mt-2 whitespace-pre-wrap leading-relaxed">
              {review.content}
            </p>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleHelpful}
                disabled={hasVoted}
                className={`text-gray-600 hover:text-[#003366] hover:bg-[#e8eef4] ${hasVoted ? "text-[#003366] bg-[#e8eef4]" : ""}`}
              >
                <ThumbsUp
                  className={`h-4 w-4 mr-2 ${hasVoted ? "fill-[#003366]" : ""}`}
                />
                Helpful ({review.helpful_count})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickRatingForm({
  onRatingSelect,
  hasSubmittedReview,
}: {
  onRatingSelect: (rating: number) => void;
  hasSubmittedReview: boolean;
}) {
  const [hoverRating, setHoverRating] = useState(0);

  if (hasSubmittedReview) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
        <p className="font-medium text-[#003366]">Thank you for your submission!</p>
      </div>
    );
  }

  return (
    <div className="text-center py-4">
      <p className="text-sm text-gray-600 mb-3">
        Rate your experience
      </p>
      <div className="flex gap-1 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRatingSelect(star)}
          >
            <Star
              className={`h-8 w-8 ${
                star <= hoverRating
                  ? "fill-[#ffc72c] text-[#ffc72c]"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Click a star to submit your rating
      </p>
    </div>
  );
}

function WriteReviewForm({
  providerSlug,
  providerName,
  initialRating = 0,
  onSuccess,
  onClose,
}: {
  providerSlug: string;
  providerName: string;
  initialRating?: number;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [rating, setRating] = useState(initialRating);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!content.trim()) {
      setError("Please write your review");
      return;
    }

    setSubmitting(true);
    try {
      await createReview({
        provider_slug: providerSlug,
        author_name: name.trim(),
        author_email: email.trim() || undefined,
        rating: rating || undefined,
        title: title.trim() || undefined,
        content: content.trim(),
      });
      onSuccess();
      onClose();
    } catch {
      setError("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block text-[#003366]">
          Your Rating (optional)
        </Label>
        <StarRating rating={rating} onRatingChange={setRating} size="lg" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-[#003366]">Name *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[#003366]">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="title" className="text-[#003366]">Review Title (optional)</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`My experience with ${providerName}`}
          className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
        />
      </div>

      <div>
        <Label htmlFor="content" className="text-[#003366]">Your Review *</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your experience..."
          rows={5}
          required
          className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
        />
      </div>

      {error && <p className="text-sm text-[#a31621]">{error}</p>}

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-[#003366] text-[#003366] hover:bg-[#e8eef4]"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={submitting}
          className="bg-[#003366] hover:bg-[#004080]"
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : null}
          Submit Review
        </Button>
      </div>
    </form>
  );
}

export function UserReviews({ providerSlug, providerName }: UserReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ProviderRatingStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hasSubmittedReview, setHasSubmittedReview] = useState(false);

  const fetchData = async () => {
    try {
      const [reviewsData, statsData] = await Promise.all([
        getReviews(providerSlug),
        getProviderRatingStats(providerSlug),
      ]);
      setReviews(reviewsData);
      setStats(statsData);
    } catch {
      // Handle error silently
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [providerSlug]);

  const handleReviewSuccess = () => {
    setHasSubmittedReview(true);
    fetchData();
  };

  const handleHelpful = async (reviewId: string) => {
    try {
      await markReviewHelpful(reviewId);
      fetchData();
    } catch {
      // Handle error silently
    }
  };

  const handleQuickRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    // Reset selected rating when dialog closes without submission
    setTimeout(() => setSelectedRating(0), 200);
  };

  return (
    <section>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#003366]">Consumer Reviews</h2>
            <p className="text-sm text-gray-600">Public submissions and ratings</p>
          </div>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          if (!open) handleDialogClose();
          else setDialogOpen(true);
        }}>
          <DialogTrigger asChild>
            <Button className="bg-[#003366] hover:bg-[#004080] gap-2">
              <MessageSquarePlus className="h-4 w-4" />
              Submit Review
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-[#003366]">
                {selectedRating > 0
                  ? `You rated ${selectedRating} star${selectedRating !== 1 ? 's' : ''} - Add your review`
                  : `Submit a Review for ${providerName}`
                }
              </DialogTitle>
              <DialogDescription>
                {selectedRating > 0
                  ? "Add details to help others understand your experience, or just submit your rating."
                  : "Share your experience to help others make informed decisions."
                }
              </DialogDescription>
            </DialogHeader>
            <WriteReviewForm
              key={selectedRating} // Reset form when rating changes
              providerSlug={providerSlug}
              providerName={providerName}
              initialRating={selectedRating}
              onSuccess={handleReviewSuccess}
              onClose={handleDialogClose}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Rating Summary */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-4 py-3 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-white" />
            <span className="font-medium text-white">Rating Summary</span>
          </div>
          <div className="p-5">
            {stats ? (
              <>
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <div className="text-5xl font-bold text-[#003366]">
                    {stats.average_rating}
                  </div>
                  <div className="flex justify-center mt-2">
                    <StarRating
                      rating={Math.round(stats.average_rating)}
                      readonly
                      size="md"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Based on {stats.total_ratings} submission
                    {stats.total_ratings !== 1 ? "s" : ""}
                  </p>
                </div>
                <RatingDistribution stats={stats} />
              </>
            ) : (
              <div className="text-center py-6">
                <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No ratings yet</p>
              </div>
            )}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <QuickRatingForm
                onRatingSelect={handleQuickRatingSelect}
                hasSubmittedReview={hasSubmittedReview}
              />
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#003366]" />
            </div>
          ) : reviews.length > 0 ? (
            reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={index}
                onHelpful={() => handleHelpful(review.id)}
              />
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] px-4 py-3">
                <span className="text-white font-medium">No Submissions Yet</span>
              </div>
              <div className="p-8 text-center">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-semibold text-[#003366] mb-1">Be the first to share your experience</h3>
                <p className="text-gray-600 mb-4">
                  Help others by submitting a review of {providerName}
                </p>
                <Button
                  onClick={() => setDialogOpen(true)}
                  className="bg-[#003366] hover:bg-[#004080]"
                >
                  Submit the First Review
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
