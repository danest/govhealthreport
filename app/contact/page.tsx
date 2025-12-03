"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createContactSubmission } from "@/lib/supabase";
import {
  ArrowLeft,
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await createContactSubmission(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setErrorMessage("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or need assistance? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-lg font-semibold text-foreground">Get in Touch</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form and we&apos;ll get back to you as soon as possible.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">What We Can Help With</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        General inquiries
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Website feedback
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Partnership opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Content corrections
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-amber-500/50 bg-amber-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Medical Questions</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We cannot provide medical advice. Please consult a healthcare professional
                          for medical questions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    {submitStatus === "success" ? (
                      <div className="text-center py-8">
                        <div className="flex justify-center mb-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          Message Sent!
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                        </p>
                        <Button
                          onClick={() => setSubmitStatus("idle")}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              Your Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="h-12"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What is this about?"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us more about your inquiry..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="resize-none"
                          />
                        </div>

                        {submitStatus === "error" && (
                          <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 border border-red-200">
                            <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                            <p className="text-sm text-red-700">{errorMessage}</p>
                          </div>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                              </span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
