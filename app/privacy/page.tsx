import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Database,
  Cookie,
  Share2,
  Eye,
  Lock,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | GOV Health Report",
  description:
    "Learn how GOV Health Report collects, uses, and protects your information. Our privacy policy explains our data practices and your rights.",
};

export default function PrivacyPage() {
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Important Notice */}
            <Card className="border-amber-500/50 bg-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Important Notice
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      GOV Health Report is a review and comparison website, NOT an official government website. We are <strong>not a medical website</strong> and
                      do not provide medical advice. Please read our{" "}
                      <Link href="/disclosure" className="text-primary hover:underline font-medium">
                        Disclosure
                      </Link>{" "}
                      and{" "}
                      <Link href="/disclaimer" className="text-primary hover:underline font-medium">
                        Medical Disclaimer
                      </Link>{" "}
                      for important information about our affiliate relationships and limitations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Overview
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        This Privacy Policy explains how GOV Health Report ("we," "us," or "our") collects, uses, shares,
                        and protects information when you visit our website. By using our website, you agree to the
                        collection and use of information in accordance with this policy.
                      </p>
                      <p>
                        We are committed to being transparent about our data practices, especially regarding click
                        tracking and affiliate relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Information We Collect
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <h3 className="font-semibold text-lg">Automatically Collected Information</h3>
                      <p>When you visit our website, we may automatically collect:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Device information:</strong> Browser type, operating system, device type,
                          screen resolution
                        </li>
                        <li>
                          <strong>Usage information:</strong> Pages visited, time spent on pages, links clicked,
                          referring website
                        </li>
                        <li>
                          <strong>Location information:</strong> General geographic location based on IP address
                          (country, region, city)
                        </li>
                        <li>
                          <strong>Click data:</strong> Which outbound links you click, including links to our
                          affiliate partners
                        </li>
                      </ul>

                      <h3 className="font-semibold text-lg mt-6">Information You Provide</h3>
                      <p>If you choose to interact with our website, you may provide:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Reviews and comments:</strong> Name, email (optional), and content you submit
                        </li>
                        <li>
                          <strong>Contact information:</strong> If you contact us, we collect the information
                          you provide
                        </li>
                        <li>
                          <strong>Questions and discussions:</strong> Content you post in our discussion areas
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Click Tracking */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Click Tracking & Affiliate Links
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p className="font-medium text-amber-700 bg-amber-50 p-3 rounded-lg">
                        Important: We track clicks on outbound links to our affiliate partners. This is essential
                        for our business model and allows us to receive credit for referrals.
                      </p>
                      <p>When you click on links to partner websites, we may collect and share:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The fact that you clicked the link</li>
                        <li>The time and date of the click</li>
                        <li>The page you were on when you clicked</li>
                        <li>A unique identifier linking your visit to our website</li>
                        <li>General device and browser information</li>
                      </ul>
                      <p>
                        Our affiliate links contain tracking parameters (such as UTM tags) that identify
                        GOV Health Report as the referral source. This information is shared with our affiliate
                        partners to properly attribute referrals and calculate commissions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Cookies & Similar Technologies
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>We use cookies and similar tracking technologies to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Track affiliate referrals and clicks</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Remember your preferences</li>
                        <li>Improve our website and services</li>
                      </ul>
                      <p>
                        For more detailed information about our use of cookies, please see our{" "}
                        <Link href="/cookies" className="text-primary hover:underline font-medium">
                          Cookie Policy
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Share Information */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      How We Share Information
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>We may share your information with:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Affiliate partners:</strong> Click data and referral information to track
                          commissions and referrals
                        </li>
                        <li>
                          <strong>Analytics providers:</strong> Aggregated, anonymized data to understand website
                          usage
                        </li>
                        <li>
                          <strong>Service providers:</strong> Companies that help us operate our website (hosting,
                          database services)
                        </li>
                        <li>
                          <strong>Legal requirements:</strong> When required by law or to protect our rights
                        </li>
                      </ul>
                      <p>
                        <strong>We do not sell your personal information to third parties.</strong> However, our
                        affiliate tracking does share click and referral data with partner companies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Data Security
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        We implement reasonable security measures to protect your information. However, no
                        method of transmission over the Internet or electronic storage is 100% secure. We
                        cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Your Rights & Choices
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Disable cookies:</strong> You can configure your browser to reject cookies,
                      though this may affect website functionality
                    </li>
                    <li>
                      <strong>Opt out of tracking:</strong> You can use browser extensions or settings to
                      limit tracking
                    </li>
                    <li>
                      <strong>Request information:</strong> Contact us to ask what information we have
                      collected about you
                    </li>
                    <li>
                      <strong>Request deletion:</strong> Ask us to delete any personal information you've
                      provided (such as reviews)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Third-Party Websites
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Our website contains links to third-party websites, including our affiliate partners.
                    We are not responsible for the privacy practices of these websites. We encourage you
                    to read the privacy policies of any third-party sites you visit.
                  </p>
                  <p>
                    When you click on an affiliate link, you will be redirected to the partner's website,
                    which has its own privacy policy and data collection practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Children */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-foreground leading-relaxed">
                  Our website is not intended for children under 18 years of age. We do not knowingly
                  collect personal information from children. If you believe we have collected information
                  from a child, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the "Last updated" date. Your
                  continued use of the website after any changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us
                  through our{" "}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    Contact Page
                  </Link>.
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
