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
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Contact Us
                </h1>
                <p className="text-sm text-gray-600">
                  Public Information Request & Feedback
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Government Disclaimer */}
        <section className="py-6">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-[#a31621] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Important: NOT a Government Website
                  </h2>
                  <p className="leading-relaxed text-white/95">
                    GOV Health Report is <strong>NOT</strong> an official government website. We cannot answer
                    questions about government programs, benefits, or policies. We are a privately operated
                    review and comparison website for weight loss treatment providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 pb-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">Get in Touch</span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Fill out the form and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-3">
                    <span className="font-medium">What We Can Help With</span>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffc72c]"></span>
                        General inquiries
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffc72c]"></span>
                        Website feedback
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffc72c]"></span>
                        Partnership opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffc72c]"></span>
                        Content corrections
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffc72c]"></span>
                        Provider suggestions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#f59e0b] text-white p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Medical Questions</h3>
                      <p className="text-sm text-white/95 leading-relaxed">
                        We cannot provide medical advice. Please consult a healthcare professional
                        for medical questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-3">
                    <span className="font-medium">Contact Form</span>
                  </div>
                  <div className="p-6">
                    {submitStatus === "success" ? (
                      <div className="text-center py-8">
                        <div className="flex justify-center mb-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#003366] mb-2">
                          Message Sent!
                        </h2>
                        <p className="text-gray-700 mb-6">
                          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                        </p>
                        <Button
                          onClick={() => setSubmitStatus("idle")}
                          className="bg-[#003366] hover:bg-[#004080] text-white"
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
                          className="w-full bg-[#003366] hover:bg-[#004080] text-white gap-2"
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
                              Send Message
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <p className="text-sm text-gray-600 text-center">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-[#003366] hover:underline font-medium">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
