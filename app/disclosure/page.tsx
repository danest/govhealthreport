import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  DollarSign,
  Link2,
  Brain,
  FileText,
  Users,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Disclosure & Affiliate Information | Rx Saver Hub",
  description:
    "Important disclosure about our affiliate relationships, review sources, and how we generate revenue. Full transparency about our partnerships and information gathering methods.",
};

export default function DisclosurePage() {
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
              Disclosure & <span className="text-primary">Affiliate Information</span>
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
                      Important: We Are NOT a Medical Website
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      Rx Saver Hub is a <strong>review and comparison website only</strong>. We do not provide medical advice,
                      diagnoses, or treatment recommendations. We are not healthcare professionals, doctors, nurses, or
                      licensed medical practitioners. Any information on this website should not be considered medical advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Relationships */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Affiliate Relationships & Compensation
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>Rx Saver Hub may receive compensation from the companies and brands featured on this website.</strong>
                        This compensation may come in various forms, including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Affiliate commissions:</strong> We may earn a commission when you click on links to partner
                          websites and make a purchase or sign up for services.
                        </li>
                        <li>
                          <strong>Referral fees:</strong> We may receive a percentage of sales or a flat fee for referring
                          customers to partner companies.
                        </li>
                        <li>
                          <strong>Sponsored content:</strong> Some content may be sponsored or paid for by the brands mentioned.
                        </li>
                        <li>
                          <strong>Partnership agreements:</strong> We may have formal partnership or affiliate agreements with
                          some or all of the brands reviewed on this site.
                        </li>
                      </ul>
                      <p>
                        <strong>This compensation may influence:</strong> which products or services we review, the order in
                        which they appear, the ratings we assign, and the prominence given to certain brands. However, we
                        strive to provide honest assessments based on available information.
                      </p>
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
                    <Link2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Click Tracking & Analytics
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        We track clicks on outbound links to partner websites. This tracking helps us:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Understand which products and services interest our visitors</li>
                        <li>Measure the effectiveness of our content</li>
                        <li>Receive proper credit for referrals from our affiliate partners</li>
                        <li>Improve our website and recommendations</li>
                      </ul>
                      <p>
                        Links to partner sites may contain tracking parameters (such as UTM tags) that identify Rx Saver Hub
                        as the referral source. For more information about how we handle your data, please see our{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                          Privacy Policy
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review Sources */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      How We Source Our Reviews & Information
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Our reviews and information are compiled from various publicly available sources, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>YouTube videos and video reviews</li>
                        <li>Television advertisements and commercials</li>
                        <li>Online articles and blog posts</li>
                        <li>Company websites and marketing materials</li>
                        <li>Social media content and user discussions</li>
                        <li>News articles and press releases</li>
                        <li>Online forums and community discussions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Usage */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Use of Artificial Intelligence (AI)
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>We use AI tools to help gather, summarize, and present information on this website.</strong>
                        These tools include, but are not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Claude (by Anthropic)</li>
                        <li>ChatGPT (by OpenAI)</li>
                        <li>Perplexity AI</li>
                        <li>Other AI-powered research and writing tools</li>
                      </ul>
                      <p className="font-medium text-amber-700 bg-amber-50 p-3 rounded-lg">
                        Important: AI tools can make mistakes, hallucinate information, or provide outdated data.
                        Our content is only as accurate as the information these tools have access to, which may not
                        reflect the most current prices, features, policies, or medical information.
                      </p>
                      <p>
                        <strong>Always verify information independently</strong> before making any decisions, especially
                        regarding your health or finances.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Responsibility */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Your Responsibility
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        <strong>You are solely responsible for:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Conducting your own research</strong> using authoritative sources such as official
                          company websites, medical journals, and government health agencies.
                        </li>
                        <li>
                          <strong>Consulting with qualified healthcare professionals</strong> (doctors, pharmacists,
                          nurses, or other licensed medical practitioners) before starting any weight loss treatment
                          or medication.
                        </li>
                        <li>
                          <strong>Verifying all information</strong> presented on this website with official sources
                          before making any decisions.
                        </li>
                        <li>
                          <strong>Understanding that individual results may vary</strong> and that what works for
                          others may not work for you.
                        </li>
                        <li>
                          <strong>Making your own informed decisions</strong> about your health and finances.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accuracy Disclaimer */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Accuracy & Currency of Information
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    While we strive to provide accurate and up-to-date information, <strong>we cannot guarantee
                    the accuracy, completeness, or timeliness of any information on this website</strong>. Information
                    about products, services, pricing, availability, and medical treatments can change frequently.
                  </p>
                  <p>
                    <strong>Prices, promotions, and offers</strong> displayed on this website may not reflect current
                    pricing and are subject to change without notice. Always verify current pricing directly with the
                    service provider.
                  </p>
                  <p>
                    <strong>Medical and health information</strong> may become outdated as new research emerges.
                    Always consult current medical literature and healthcare professionals for the most up-to-date
                    medical information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Questions About This Disclosure
                </h2>
                <p className="text-foreground leading-relaxed">
                  If you have questions about this disclosure or our affiliate relationships, please contact us
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
