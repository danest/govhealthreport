"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
                ? "fill-amber-400 text-amber-400"
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
        <div key={stars} className="flex items-center gap-2 text-sm">
          <span className="w-8 text-muted-foreground">{stars} star</span>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all"
              style={{ width: `${(count / total) * 100}%` }}
            />
          </div>
          <span className="w-8 text-right text-muted-foreground">{count}</span>
        </div>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  onHelpful,
}: {
  review: Review;
  onHelpful: () => void;
}) {
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = async () => {
    if (hasVoted) return;
    setHasVoted(true);
    onHelpful();
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">
              {review.author_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold">{review.author_name}</span>
              {review.verified && (
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
              {review.rating && (
                <StarRating rating={review.rating} readonly size="sm" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {new Date(review.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {review.title && (
              <h4 className="font-medium mt-3">{review.title}</h4>
            )}
            <p className="text-muted-foreground mt-2 whitespace-pre-wrap">
              {review.content}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleHelpful}
                disabled={hasVoted}
                className="text-muted-foreground hover:text-primary"
              >
                <ThumbsUp
                  className={`h-4 w-4 mr-1 ${hasVoted ? "fill-primary text-primary" : ""}`}
                />
                Helpful ({review.helpful_count})
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <p className="font-medium">Thanks for your review!</p>
      </div>
    );
  }

  return (
    <div className="text-center py-4">
      <p className="text-sm text-muted-foreground mb-3">
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
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Click a star to rate and add a review
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
        <Label className="text-sm font-medium mb-2 block">
          Your Rating (optional)
        </Label>
        <StarRating rating={rating} onRatingChange={setRating} size="lg" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="title">Review Title (optional)</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`My experience with ${providerName}`}
        />
      </div>

      <div>
        <Label htmlFor="content">Your Review *</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your experience..."
          rows={5}
          required
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">User Reviews</h2>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          if (!open) handleDialogClose();
          else setDialogOpen(true);
        }}>
          <DialogTrigger asChild>
            <Button>
              <MessageSquarePlus className="h-4 w-4 mr-2" />
              Write a Review
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {selectedRating > 0
                  ? `You rated ${selectedRating} star${selectedRating !== 1 ? 's' : ''} - Add your review`
                  : `Write a Review for ${providerName}`
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

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Rating Summary */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Rating Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {stats ? (
              <>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary">
                    {stats.average_rating}
                  </div>
                  <StarRating
                    rating={Math.round(stats.average_rating)}
                    readonly
                    size="md"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Based on {stats.total_ratings} rating
                    {stats.total_ratings !== 1 ? "s" : ""}
                  </p>
                </div>
                <RatingDistribution stats={stats} />
              </>
            ) : (
              <div className="text-center py-6">
                <User className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">No ratings yet</p>
              </div>
            )}
            <div className="border-t mt-6 pt-6">
              <QuickRatingForm
                onRatingSelect={handleQuickRatingSelect}
                hasSubmittedReview={hasSubmittedReview}
              />
            </div>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onHelpful={() => handleHelpful(review.id)}
              />
            ))
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <MessageSquarePlus className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">No reviews yet</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to share your experience with {providerName}
                </p>
                <Button onClick={() => setDialogOpen(true)}>
                  Write the First Review
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
