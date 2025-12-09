"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  MessagesSquare,
  Send,
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
  index,
}: {
  discussion: Discussion;
  onUpvote: () => void;
  index: number;
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Thread Header */}
      <div className={`px-4 py-2 flex items-center justify-between ${
        discussion.type === "question" ? "bg-[#003366]" : "bg-[#004080]"
      }`}>
        <div className="flex items-center gap-2">
          {discussion.type === "question" ? (
            <HelpCircle className="h-4 w-4 text-[#ffc72c]" />
          ) : (
            <MessageCircle className="h-4 w-4 text-[#ffc72c]" />
          )}
          <span className="text-white text-sm font-medium">
            {discussion.type === "question" ? "Question" : "Discussion"} #{index + 1}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {discussion.is_answered && (
            <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded font-medium">
              <CheckCircle2 className="h-3 w-3" />
              Answered
            </span>
          )}
        </div>
      </div>

      {/* Thread Content */}
      <div className="p-5">
        <div className="flex gap-4">
          {/* Upvote Section */}
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="sm"
              className={`px-2 h-8 hover:bg-[#e8eef4] ${hasVoted ? "text-[#003366] bg-[#e8eef4]" : "text-gray-500"}`}
              onClick={handleUpvote}
              disabled={hasVoted}
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
            <span className={`text-sm font-bold ${hasVoted ? "text-[#003366]" : "text-gray-600"}`}>
              {discussion.upvote_count}
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h3 className="font-bold text-[#003366] text-lg mb-2">{discussion.title}</h3>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {discussion.content}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8eef4] text-[#003366] text-xs font-bold">
                  {discussion.author_name.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium text-gray-700">{discussion.author_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(discussion.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-[#003366] hover:bg-[#e8eef4] h-8"
                onClick={loadReplies}
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                {replies.length > 0
                  ? `${replies.length} ${replies.length === 1 ? 'response' : 'responses'}`
                  : loadingReplies
                    ? "Loading..."
                    : "Respond"}
              </Button>
            </div>

            {/* Replies Section */}
            {showReplies && (
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                {replies.map((reply, replyIndex) => (
                  <div key={reply.id} className="flex gap-3 pl-4 border-l-4 border-[#e8eef4]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8eef4] text-[#003366] text-xs font-bold">
                      {reply.author_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-[#003366] text-sm">
                          {reply.author_name}
                        </span>
                        {reply.is_accepted_answer && (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">
                            <CheckCircle2 className="h-3 w-3" />
                            Accepted
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          {new Date(reply.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                        {reply.content}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 h-6 px-2 text-xs text-gray-500 hover:text-[#003366] hover:bg-[#e8eef4]"
                        onClick={() => handleReplyUpvote(reply.id)}
                      >
                        <ChevronUp className="h-3 w-3 mr-1" />
                        {reply.upvote_count}
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Reply Form */}
                <div className="pt-4 border-t border-gray-200 space-y-3 bg-[#f5f7fa] p-4 rounded-lg">
                  <p className="text-sm font-medium text-[#003366]">Submit a Response</p>
                  <Input
                    placeholder="Your name"
                    value={replyName}
                    onChange={(e) => setReplyName(e.target.value)}
                    className="max-w-xs border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                  />
                  <Textarea
                    placeholder="Write your response..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    rows={3}
                    className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                  />
                  <Button
                    size="sm"
                    onClick={handleReply}
                    disabled={!replyContent.trim() || !replyName.trim() || submitting}
                    className="bg-[#003366] hover:bg-[#004080] gap-2"
                  >
                    {submitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    Post Response
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
        <TabsList className="grid w-full grid-cols-2 bg-[#e8eef4]">
          <TabsTrigger
            value="question"
            className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Ask a Question
          </TabsTrigger>
          <TabsTrigger
            value="discussion"
            className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Discussion
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="disc-name" className="text-[#003366]">Name *</Label>
          <Input
            id="disc-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
          />
        </div>
        <div>
          <Label htmlFor="disc-email" className="text-[#003366]">Email (optional)</Label>
          <Input
            id="disc-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="disc-title" className="text-[#003366]">
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
          className="border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
        />
      </div>

      <div>
        <Label htmlFor="disc-content" className="text-[#003366]">Details *</Label>
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
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
            <MessagesSquare className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#003366]">Questions & Discussions</h2>
            <p className="text-sm text-gray-600">Community forum and inquiries</p>
          </div>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#003366] hover:bg-[#004080] gap-2">
              <Plus className="h-4 w-4" />
              New Thread
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-[#003366]">Start a Conversation about {providerName}</DialogTitle>
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

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList className="mb-6 bg-white border border-gray-200">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="questions"
            className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            Questions
          </TabsTrigger>
          <TabsTrigger
            value="discussions"
            className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            Discussions
          </TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#003366]" />
            </div>
          ) : filteredDiscussions.length > 0 ? (
            <div className="space-y-4">
              {filteredDiscussions.map((discussion, index) => (
                <DiscussionThread
                  key={discussion.id}
                  discussion={discussion}
                  index={index}
                  onUpvote={() => handleUpvote(discussion.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] px-4 py-3">
                <span className="text-white font-medium">No Threads Yet</span>
              </div>
              <div className="p-8 text-center">
                <MessagesSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-semibold text-[#003366] mb-1">Start the conversation</h3>
                <p className="text-gray-600 mb-4">
                  Be the first to ask a question or start a discussion about{" "}
                  {providerName}
                </p>
                <Button
                  onClick={() => setDialogOpen(true)}
                  className="bg-[#003366] hover:bg-[#004080]"
                >
                  Create First Thread
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
