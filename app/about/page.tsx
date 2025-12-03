import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Target,
  Users,
  Search,
  Scale,
  Heart,
  AlertTriangle,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rx Saver Hub",
  description:
    "Learn about Rx Saver Hub - your trusted resource for comparing weight loss treatments. We help you research and compare options so you can make informed decisions.",
};

export default function AboutPage() {
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
              About <span className="text-primary">Rx Saver Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted resource for comparing weight loss treatments and making informed decisions.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Mission */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Our Mission
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        At Rx Saver Hub, we believe everyone deserves access to clear, honest information
                        about weight loss treatments. With so many options available today—from GLP-1 medications
                        to telehealth programs—it can be overwhelming to understand what&apos;s out there and how
                        different providers compare.
                      </p>
                      <p>
                        <strong>Our mission is simple:</strong> to help you research and compare weight loss
                        treatment providers so you can have better conversations with your healthcare provider
                        and make more informed decisions about your health journey.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      What We Do
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        We research and compile information about weight loss treatment providers, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Provider comparisons:</strong> Side-by-side breakdowns of pricing,
                          medications offered, and program features
                        </li>
                        <li>
                          <strong>Detailed reviews:</strong> In-depth looks at individual providers,
                          covering how they work, what they cost, and what to expect
                        </li>
                        <li>
                          <strong>Educational content:</strong> Information about different treatment
                          types, medications, and what questions to ask your doctor
                        </li>
                        <li>
                          <strong>User experiences:</strong> A platform for real people to share their
                          experiences and ask questions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border-amber-500/50 bg-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Important: We Are NOT a Medical Provider
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>Rx Saver Hub is a review and comparison website only.</strong> We are not
                        doctors, nurses, pharmacists, or licensed healthcare providers. We do not:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Provide medical advice or diagnoses</li>
                        <li>Prescribe or recommend specific medications</li>
                        <li>Replace consultations with healthcare professionals</li>
                        <li>Guarantee the accuracy of any medical information</li>
                      </ul>
                      <p>
                        <strong>Always consult with a qualified healthcare provider</strong> before starting
                        any weight loss treatment or medication. The information on this site is for research
                        purposes only.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who We Serve */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Who We&apos;re Here For
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Rx Saver Hub is designed for people who are:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Researching weight loss treatment options and want to understand what&apos;s available
                        </li>
                        <li>
                          Comparing different telehealth providers and their pricing
                        </li>
                        <li>
                          Looking for information to discuss with their doctor or healthcare provider
                        </li>
                        <li>
                          Seeking real user experiences and community feedback about different programs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Our Approach to Reviews
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        We strive to be transparent about how we gather and present information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Research-based:</strong> We compile information from public sources
                          including company websites, user reviews, articles, and videos
                        </li>
                        <li>
                          <strong>AI-assisted:</strong> We use AI tools like Claude, ChatGPT, and Perplexity
                          to help research and organize information
                        </li>
                        <li>
                          <strong>User contributions:</strong> We include ratings, reviews, and discussions
                          from our community
                        </li>
                        <li>
                          <strong>Regular updates:</strong> We work to keep our information current, though
                          pricing and offerings change frequently
                        </li>
                      </ul>
                      <p>
                        For full details on our methodology and potential biases, please read our{" "}
                        <Link href="/disclosure" className="text-primary hover:underline font-medium">
                          Disclosure Page
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Make Money */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      How We Make Money
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>We believe in full transparency.</strong> Rx Saver Hub may earn money when
                        you click on links to providers featured on our site. This includes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Affiliate commissions from partner companies</li>
                        <li>Referral fees when you sign up for services</li>
                        <li>Partnership and sponsorship arrangements</li>
                      </ul>
                      <p>
                        This compensation may influence which providers we feature and how prominently they
                        appear. However, we strive to provide accurate information regardless of partnerships.
                        For complete details, see our{" "}
                        <Link href="/disclosure" className="text-primary hover:underline font-medium">
                          Disclosure Page
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learn More */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Learn More
                    </h2>
                    <div className="space-y-3 text-foreground">
                      <p>
                        For more information about how we operate, please review:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/disclosure" className="text-primary hover:underline font-medium">
                            Disclosure & Affiliate Information
                          </Link>
                          {" "}- Full details on our partnerships and how we source information
                        </li>
                        <li>
                          <Link href="/disclaimer" className="text-primary hover:underline font-medium">
                            Medical Disclaimer
                          </Link>
                          {" "}- Important information about the limitations of our content
                        </li>
                        <li>
                          <Link href="/privacy" className="text-primary hover:underline font-medium">
                            Privacy Policy
                          </Link>
                          {" "}- How we handle your data
                        </li>
                        <li>
                          <Link href="/terms" className="text-primary hover:underline font-medium">
                            Terms of Service
                          </Link>
                          {" "}- Rules for using our website
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      Have questions, feedback, or suggestions? We&apos;d love to hear from you. Visit our{" "}
                      <Link href="/contact" className="text-primary hover:underline font-medium">
                        Contact Page
                      </Link>{" "}
                      to send us a message.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
