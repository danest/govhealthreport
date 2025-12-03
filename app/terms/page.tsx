import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  AlertTriangle,
  Ban,
  Scale,
  Shield,
  Users,
  ArrowLeft,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Rx Saver Hub",
  description:
    "Terms of Service for Rx Saver Hub. Please read these terms carefully before using our website.",
};

export default function TermsPage() {
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Critical Notice */}
            <Card className="border-red-500/50 bg-red-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      CRITICAL: NOT MEDICAL ADVICE
                    </h2>
                    <div className="space-y-2 text-foreground leading-relaxed">
                      <p>
                        <strong>Rx Saver Hub is NOT a medical website.</strong> We do NOT provide medical advice,
                        diagnoses, or treatment recommendations. We are a review and comparison website ONLY.
                      </p>
                      <p>
                        <strong>You MUST consult with qualified healthcare professionals</strong> (doctors,
                        pharmacists, or other licensed medical practitioners) before making any decisions about
                        weight loss treatments or medications.
                      </p>
                      <p>
                        <strong>Do NOT rely on information from this website for medical decisions.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agreement */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Agreement to Terms
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        By accessing or using Rx Saver Hub ("the Website"), you agree to be bound by these Terms of
                        Service. If you do not agree with any part of these terms, you must not use this website.
                      </p>
                      <p>
                        These terms should be read in conjunction with our{" "}
                        <Link href="/disclosure" className="text-primary hover:underline font-medium">
                          Disclosure
                        </Link>,{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                          Privacy Policy
                        </Link>,{" "}
                        <Link href="/cookies" className="text-primary hover:underline font-medium">
                          Cookie Policy
                        </Link>, and{" "}
                        <Link href="/disclaimer" className="text-primary hover:underline font-medium">
                          Medical Disclaimer
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nature of the Website */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Nature of This Website
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>Rx Saver Hub is:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>A <strong>review and comparison website</strong> for weight loss treatments</li>
                        <li>An <strong>affiliate marketing website</strong> that earns commissions from partner companies</li>
                        <li>A <strong>content website</strong> that uses AI tools to gather and present information</li>
                      </ul>
                      <p>Rx Saver Hub is NOT:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>A medical website or healthcare provider</li>
                        <li>A source of medical advice, diagnosis, or treatment recommendations</li>
                        <li>A substitute for professional medical consultation</li>
                        <li>A pharmacy or medication provider</li>
                        <li>Staffed by licensed healthcare professionals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sources */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Information Sources & Accuracy
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    <strong>Our information is sourced from:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>YouTube videos and online video content</li>
                    <li>Television advertisements and commercials</li>
                    <li>Online articles, blogs, and websites</li>
                    <li>Company marketing materials</li>
                    <li>AI tools including Claude, ChatGPT, and Perplexity</li>
                    <li>Social media and online forums</li>
                  </ul>
                  <p className="font-medium text-amber-700 bg-amber-50 p-3 rounded-lg">
                    <strong>WARNING:</strong> Information from these sources may be inaccurate, outdated,
                    incomplete, biased, or entirely wrong. AI tools can "hallucinate" (make up) information.
                    We cannot verify the accuracy of all information presented.
                  </p>
                  <p>
                    <strong>You are responsible for:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Independently verifying ALL information before making decisions</li>
                    <li>Consulting official sources and qualified professionals</li>
                    <li>Conducting your own due diligence</li>
                    <li>Not relying solely on this website for important decisions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Disclosure */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Affiliate Relationships & Compensation
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    <strong>We have financial relationships with companies featured on this website.</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may earn commissions from purchases made through our links</li>
                    <li>We may receive referral fees or percentage of sales</li>
                    <li>We may have paid partnerships or sponsorship agreements</li>
                    <li>These relationships may influence our content, rankings, and recommendations</li>
                  </ul>
                  <p>
                    For full details, see our{" "}
                    <Link href="/disclosure" className="text-primary hover:underline font-medium">
                      Disclosure Page
                    </Link>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* No Warranties */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <XCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Disclaimer of Warranties
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>THE WEBSITE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND.</strong>
                      </p>
                      <p>We do not warrant that:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The information on this website is accurate, complete, or current</li>
                        <li>The website will be uninterrupted or error-free</li>
                        <li>Any results or outcomes described will be achieved</li>
                        <li>The website will meet your requirements or expectations</li>
                        <li>Any products or services recommended will be suitable for you</li>
                      </ul>
                      <p>
                        <strong>WE EXPRESSLY DISCLAIM ALL WARRANTIES</strong>, whether express, implied, or statutory,
                        including but not limited to warranties of merchantability, fitness for a particular purpose,
                        and non-infringement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Limitation of Liability
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                      </p>
                      <p>
                        Rx Saver Hub, its owners, operators, employees, and affiliates shall NOT be liable for
                        any direct, indirect, incidental, special, consequential, or punitive damages arising
                        from:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Your use of or inability to use this website</li>
                        <li>Any information obtained from this website</li>
                        <li>Any decisions you make based on information from this website</li>
                        <li>Any products or services purchased through links on this website</li>
                        <li>Any medical treatments or health decisions</li>
                        <li>Any errors, inaccuracies, or omissions in our content</li>
                      </ul>
                      <p>
                        This limitation applies even if we have been advised of the possibility of such damages.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Ban className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Prohibited Uses
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>You agree NOT to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Use this website as a substitute for professional medical advice</li>
                        <li>Make medical decisions based solely on information from this website</li>
                        <li>Copy, reproduce, or distribute our content without permission</li>
                        <li>Use automated systems to access or scrape the website</li>
                        <li>Attempt to interfere with the website's operation</li>
                        <li>Use the website for any illegal or unauthorized purpose</li>
                        <li>Submit false or misleading reviews or content</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Content */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  User-Submitted Content
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>If you submit reviews, comments, or other content:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You grant us a non-exclusive, royalty-free license to use, display, and modify your content</li>
                    <li>You are responsible for the accuracy and legality of your content</li>
                    <li>You agree not to submit false, misleading, or defamatory content</li>
                    <li>We may remove any content at our discretion</li>
                    <li>We are not responsible for user-submitted content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Third-Party Links & Services
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    This website contains links to third-party websites. We are NOT responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The content, accuracy, or opinions expressed on linked websites</li>
                    <li>The privacy practices of linked websites</li>
                    <li>Any products or services offered by linked websites</li>
                    <li>Any transactions you conduct with third parties</li>
                  </ul>
                  <p>
                    Your interactions with third-party websites are solely between you and that third party.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Indemnification
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      You agree to indemnify, defend, and hold harmless Rx Saver Hub and its owners, operators,
                      employees, and affiliates from any claims, damages, losses, or expenses (including legal fees)
                      arising from your use of the website, violation of these terms, or infringement of any
                      third-party rights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Changes to These Terms
                </h2>
                <p className="text-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately
                  upon posting to the website. Your continued use of the website after changes constitutes
                  acceptance of the modified terms. Please review these terms periodically.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Governing Law
                </h2>
                <p className="text-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws, without
                  regard to conflict of law principles. Any disputes arising from these terms or your use of
                  the website shall be resolved through appropriate legal channels.
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
                  If you have questions about these Terms of Service, please contact us through our{" "}
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
