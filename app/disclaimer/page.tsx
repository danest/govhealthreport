import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Stethoscope,
  Brain,
  FileText,
  Users,
  ArrowLeft,
  XCircle,
  AlertCircle,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Rx Saver Hub",
  description:
    "Important medical disclaimer for Rx Saver Hub. We are NOT a medical website and do not provide medical advice. Please consult healthcare professionals.",
};

export default function DisclaimerPage() {
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
              Medical <span className="text-primary">Disclaimer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Critical Warning */}
            <Card className="border-red-500 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-red-800 mb-4">
                      CRITICAL WARNING: THIS IS NOT A MEDICAL WEBSITE
                    </h2>
                    <div className="space-y-4 text-red-900 leading-relaxed">
                      <p className="text-lg font-semibold">
                        Rx Saver Hub does NOT provide medical advice, diagnosis, or treatment recommendations.
                      </p>
                      <p>
                        <strong>We are NOT:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Doctors, nurses, or healthcare professionals</li>
                        <li>Licensed medical practitioners</li>
                        <li>Pharmacists or pharmacy technicians</li>
                        <li>A healthcare provider or medical facility</li>
                        <li>Qualified to give medical advice of any kind</li>
                      </ul>
                      <p className="text-lg font-semibold mt-4">
                        DO NOT make medical decisions based on information from this website.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Are */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      What Rx Saver Hub Actually Is
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Rx Saver Hub is:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>A <strong>review and comparison website</strong> that discusses weight loss treatments</li>
                        <li>An <strong>affiliate marketing website</strong> that earns money when you click links and make purchases</li>
                        <li>A <strong>content aggregator</strong> that compiles information from various sources</li>
                        <li>A website that uses <strong>AI tools</strong> to research and create content</li>
                      </ul>
                      <p>
                        Our purpose is to help you discover and compare options—<strong>not</strong> to tell you what
                        medical treatments to pursue.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consult Professionals */}
            <Card className="border-emerald-500/50 bg-emerald-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <Stethoscope className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      You MUST Consult Healthcare Professionals
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p className="font-semibold text-emerald-800">
                        Before starting ANY weight loss treatment or medication, you MUST consult with qualified
                        healthcare professionals, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Your primary care physician (PCP):</strong> They know your medical history
                          and can evaluate if treatments are appropriate for you
                        </li>
                        <li>
                          <strong>Specialists:</strong> Endocrinologists, bariatric specialists, or other
                          relevant specialists as needed
                        </li>
                        <li>
                          <strong>Pharmacists:</strong> They can explain medication interactions and side effects
                        </li>
                        <li>
                          <strong>Registered dietitians:</strong> For nutrition advice and meal planning
                        </li>
                        <li>
                          <strong>Mental health professionals:</strong> Weight loss journeys can have psychological
                          impacts
                        </li>
                      </ul>
                      <p>
                        <strong>Only a licensed healthcare provider</strong> who has examined you, reviewed your
                        medical history, and understands your individual circumstances can provide appropriate
                        medical advice.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sources Warning */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                    <Brain className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Our Information May Be Wrong
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p className="font-medium text-amber-700 bg-amber-50 p-3 rounded-lg">
                        We use AI tools (Claude, ChatGPT, Perplexity) and compile information from videos,
                        articles, and ads. This information may be inaccurate, outdated, incomplete, or
                        entirely fabricated by AI "hallucinations."
                      </p>
                      <p>
                        Our information sources include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>YouTube videos and online video content</li>
                        <li>Television and online advertisements</li>
                        <li>Articles, blogs, and marketing materials</li>
                        <li>AI-generated summaries and research</li>
                        <li>Social media posts and discussions</li>
                      </ul>
                      <p>
                        <strong>None of these sources are verified medical information.</strong> We do not
                        fact-check medical claims against peer-reviewed research or official medical sources.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You Should Do */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      What You Should Do Instead
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>If you're considering weight loss treatments:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-3">
                        <li>
                          <strong>Schedule an appointment with your doctor.</strong> Discuss your weight loss
                          goals and ask if prescription treatments are appropriate for your situation.
                        </li>
                        <li>
                          <strong>Get a comprehensive health evaluation.</strong> Weight loss medications may
                          not be suitable for everyone and can have serious side effects.
                        </li>
                        <li>
                          <strong>Ask about all your options.</strong> Medications are just one tool—diet,
                          exercise, behavioral changes, and other approaches may be more appropriate.
                        </li>
                        <li>
                          <strong>Research from authoritative sources.</strong> Use official sources like:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>FDA (fda.gov) for medication information</li>
                            <li>NIH (nih.gov) for research-backed health information</li>
                            <li>CDC (cdc.gov) for health guidelines</li>
                            <li>Your healthcare provider's recommendations</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Understand the risks.</strong> All medications have potential side effects
                          and risks. Only a doctor can help you weigh these against potential benefits.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Risks */}
            <Card className="border-amber-500/50 bg-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                    <Heart className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Important Health Considerations
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Weight loss medications and treatments can have serious health implications:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>They may interact with other medications you're taking</li>
                        <li>They may be contraindicated for certain medical conditions</li>
                        <li>They can have significant side effects</li>
                        <li>Results vary significantly between individuals</li>
                        <li>Long-term effects may not be fully understood</li>
                        <li>They are not a substitute for lifestyle changes</li>
                      </ul>
                      <p className="font-semibold">
                        If you experience any adverse symptoms after starting any treatment, contact
                        your healthcare provider or seek emergency care immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Results */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Individual Results Vary
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Any results, testimonials, or outcomes mentioned on this website:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Are not typical and cannot be guaranteed</li>
                        <li>May not apply to your individual situation</li>
                        <li>May be influenced by many factors we cannot account for</li>
                        <li>Should not be used as a basis for medical decisions</li>
                      </ul>
                      <p>
                        Everyone's body, health history, and circumstances are different. What works for one
                        person may not work—or may even be harmful—for another.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Reminder */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Remember: We Have Financial Interests
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    As disclosed on our{" "}
                    <Link href="/disclosure" className="text-primary hover:underline font-medium">
                      Disclosure page
                    </Link>, we earn money when you click on links and make purchases through our website.
                    This financial interest may influence our content and recommendations.
                  </p>
                  <p>
                    <strong>Our financial interests should never influence your medical decisions.</strong>
                    Always prioritize advice from healthcare professionals over anything you read on
                    affiliate websites like ours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-red-500/50 bg-red-50/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  In Summary
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>We are NOT medical professionals</strong> and cannot provide medical advice
                    </li>
                    <li>
                      <strong>Our information may be inaccurate</strong> as it comes from AI and unverified sources
                    </li>
                    <li>
                      <strong>You MUST consult healthcare professionals</strong> before any medical decisions
                    </li>
                    <li>
                      <strong>We have financial incentives</strong> that may influence our content
                    </li>
                    <li>
                      <strong>Individual results vary</strong> and outcomes cannot be guaranteed
                    </li>
                    <li>
                      <strong>Use authoritative sources</strong> (FDA, NIH, your doctor) for medical information
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Questions About This Disclaimer
                </h2>
                <p className="text-foreground leading-relaxed">
                  If you have questions about this medical disclaimer, please contact us through our{" "}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    Contact Page
                  </Link>. However, please note that we cannot answer medical questions or provide
                  medical advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
