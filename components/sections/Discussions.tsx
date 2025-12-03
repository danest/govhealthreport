"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MessageCircle,
  HelpCircle,
  ChevronUp,
  CheckCircle2,
  Loader2,
  Plus,
  MessageSquare,
  Clock,
} from "lucide-react";
import {
  getDiscussions,
  createDiscussion,
  getDiscussionReplies,
  createReply,
  upvoteDiscussion,
  upvoteReply,
  type Discussion,
  type DiscussionReply,
} from "@/lib/supabase";

interface DiscussionsProps {
  providerSlug: string;
  providerName: string;
}

function DiscussionThread({
  discussion,
  onUpvote,
}: {
  discussion: Discussion;
  onUpvote: () => void;
}) {
  const [replies, setReplies] = useState<DiscussionReply[]>([]);
  const [showReplies, setShowReplies] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [replyName, setReplyName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const loadReplies = async () => {
    if (replies.length > 0) {
      setShowReplies(!showReplies);
      return;
    }
    setLoadingReplies(true);
    try {
      const data = await getDiscussionReplies(discussion.id);
      setReplies(data);
      setShowReplies(true);
    } catch {
      // Handle error
    } finally {
      setLoadingReplies(false);
    }
  };

  const handleUpvote = async () => {
    if (hasVoted) return;
    setHasVoted(true);
    onUpvote();
  };

  const handleReply = async () => {
    if (!replyContent.trim() || !replyName.trim()) return;
    setSubmitting(true);
    try {
      const newReply = await createReply({
        discussion_id: discussion.id,
        author_name: replyName.trim(),
        content: replyContent.trim(),
      });
      setReplies([...replies, newReply]);
      setReplyContent("");
      setShowReplies(true);
    } catch {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  const handleReplyUpvote = async (replyId: string) => {
    try {
      await upvoteReply(replyId);
      setReplies(
        replies.map((r) =>
          r.id === replyId ? { ...r, upvote_count: r.upvote_count + 1 } : r
        )
      );
    } catch {
      // Handle error
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-4">
          {/* Upvote */}
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="sm"
              className={`px-2 ${hasVoted ? "text-primary" : ""}`}
              onClick={handleUpvote}
              disabled={hasVoted}
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium">{discussion.upvote_count}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <Badge
                variant={discussion.type === "question" ? "default" : "secondary"}
              >
                {discussion.type === "question" ? (
                  <HelpCircle className="h-3 w-3 mr-1" />
                ) : (
                  <MessageCircle className="h-3 w-3 mr-1" />
                )}
                {discussion.type === "question" ? "Question" : "Discussion"}
              </Badge>
              {discussion.is_answered && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Answered
                </Badge>
              )}
            </div>

            <h3 className="font-semibold text-lg mb-2">{discussion.title}</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {discussion.content}
            </p>

            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-xs bg-primary/10">
                    {discussion.author_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{discussion.author_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(discussion.created_at).toLocaleDateString()}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
                onClick={loadReplies}
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                {replies.length > 0
                  ? `${replies.length} replies`
                  : loadingReplies
                    ? "Loading..."
                    : "Reply"}
              </Button>
            </div>

            {/* Replies Section */}
            {showReplies && (
              <div className="mt-6 border-t pt-6 space-y-4">
                {replies.map((reply) => (
                  <div key={reply.id} className="flex gap-3 pl-4 border-l-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary/10">
                        {reply.author_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          {reply.author_name}
                        </span>
                        {reply.is_accepted_answer && (
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-600 text-xs"
                          >
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Accepted
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {new Date(reply.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {reply.content}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 h-6 px-2 text-xs"
                        onClick={() => handleReplyUpvote(reply.id)}
                      >
                        <ChevronUp className="h-3 w-3 mr-1" />
                        {reply.upvote_count}
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Reply Form */}
                <div className="pt-4 border-t space-y-3">
                  <Input
                    placeholder="Your name"
                    value={replyName}
                    onChange={(e) => setReplyName(e.target.value)}
                    className="max-w-xs"
                  />
                  <Textarea
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    rows={3}
                  />
                  <Button
                    size="sm"
                    onClick={handleReply}
                    disabled={!replyContent.trim() || !replyName.trim() || submitting}
                  >
                    {submitting ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    Post Reply
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NewDiscussionForm({
  providerSlug,
  providerName,
  onSuccess,
  onClose,
}: {
  providerSlug: string;
  providerName: string;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [type, setType] = useState<"question" | "discussion">("question");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !title.trim() || !content.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      await createDiscussion({
        provider_slug: providerSlug,
        author_name: name.trim(),
        author_email: email.trim() || undefined,
        title: title.trim(),
        content: content.trim(),
        type,
      });
      onSuccess();
      onClose();
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Tabs value={type} onValueChange={(v) => setType(v as "question" | "discussion")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="question">
            <HelpCircle className="h-4 w-4 mr-2" />
            Ask a Question
          </TabsTrigger>
          <TabsTrigger value="discussion">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Discussion
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="disc-name">Name *</Label>
          <Input
            id="disc-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="disc-email">Email (optional)</Label>
          <Input
            id="disc-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="disc-title">
          {type === "question" ? "Your Question *" : "Discussion Title *"}
        </Label>
        <Input
          id="disc-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={
            type === "question"
              ? `How long does shipping take with ${providerName}?`
              : `Let's talk about ${providerName}`
          }
          required
        />
      </div>

      <div>
        <Label htmlFor="disc-content">Details *</Label>
        <Textarea
          id="disc-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            type === "question"
              ? "Provide more context about your question..."
              : "Start the conversation..."
          }
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
          {type === "question" ? "Post Question" : "Start Discussion"}
        </Button>
      </div>
    </form>
  );
}

export function Discussions({ providerSlug, providerName }: DiscussionsProps) {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "questions" | "discussions">("all");

  const fetchDiscussions = async () => {
    try {
      const data = await getDiscussions(providerSlug);
      setDiscussions(data);
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, [providerSlug]);

  const handleUpvote = async (discussionId: string) => {
    try {
      await upvoteDiscussion(discussionId);
      setDiscussions(
        discussions.map((d) =>
          d.id === discussionId ? { ...d, upvote_count: d.upvote_count + 1 } : d
        )
      );
    } catch {
      // Handle error
    }
  };

  const filteredDiscussions = discussions.filter((d) => {
    if (filter === "all") return true;
    if (filter === "questions") return d.type === "question";
    return d.type === "discussion";
  });

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Questions & Discussions</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ask or Discuss
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Start a Conversation about {providerName}</DialogTitle>
              <DialogDescription>
                Ask a question or start a discussion to help the community.
              </DialogDescription>
            </DialogHeader>
            <NewDiscussionForm
              providerSlug={providerSlug}
              providerName={providerName}
              onSuccess={fetchDiscussions}
              onClose={() => setDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredDiscussions.length > 0 ? (
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <DiscussionThread
                  key={discussion.id}
                  discussion={discussion}
                  onUpvote={() => handleUpvote(discussion.id)}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">No discussions yet</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to ask a question or start a discussion about{" "}
                  {providerName}
                </p>
                <Button onClick={() => setDialogOpen(true)}>
                  Start the Conversation
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
