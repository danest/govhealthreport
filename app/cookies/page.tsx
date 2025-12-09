import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cookie,
  Settings,
  BarChart3,
  Link2,
  Shield,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | GOV Health Report",
  description:
    "Learn about how GOV Health Report uses cookies and similar tracking technologies. Understand what data we collect and how to manage your preferences.",
};

export default function CookiesPage() {
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
              Cookie <span className="text-primary">Policy</span>
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
                      Important Notice About Tracking
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      GOV Health Report uses cookies and tracking technologies primarily for <strong>affiliate link tracking</strong>.
                      When you click on links to our partner websites, we track these clicks to receive credit for referrals.
                      This is how we generate revenue. Please read this policy and our{" "}
                      <Link href="/disclosure" className="text-primary hover:underline font-medium">
                        Disclosure
                      </Link>{" "}
                      carefully.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Are Cookies */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      What Are Cookies?
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
                        when you visit a website. They are widely used to make websites work more efficiently, provide
                        information to website owners, and enable certain features.
                      </p>
                      <p>
                        Similar technologies include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Local storage:</strong> Data stored in your browser</li>
                        <li><strong>Session storage:</strong> Temporary data that's deleted when you close your browser</li>
                        <li><strong>Pixels/beacons:</strong> Small images that track when content is viewed</li>
                        <li><strong>Scripts:</strong> Code that collects information about your visit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      How We Use Cookies
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>We use cookies and similar technologies for the following purposes:</p>

                      <h3 className="font-semibold text-lg mt-4">Essential Cookies</h3>
                      <p>
                        These cookies are necessary for the website to function properly. They enable basic
                        functions like page navigation and access to secure areas. The website cannot function
                        properly without these cookies.
                      </p>

                      <h3 className="font-semibold text-lg mt-4">Functional Cookies</h3>
                      <p>
                        These cookies enable enhanced functionality and personalization, such as remembering
                        your preferences or choices you make on the website (like maintaining a unique user
                        identifier for reviews).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Tracking */}
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Link2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Affiliate & Click Tracking (Important)
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p className="font-medium text-amber-700 bg-amber-50 p-3 rounded-lg">
                        This is our primary use of tracking technology and how we earn revenue.
                      </p>
                      <p>
                        When you click on links to our partner websites, we use tracking to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Track referrals:</strong> Identify that you came from GOV Health Report so we
                          receive credit for the referral
                        </li>
                        <li>
                          <strong>Measure conversions:</strong> Understand if visitors complete purchases
                          or sign up for services
                        </li>
                        <li>
                          <strong>Calculate commissions:</strong> Enable accurate commission tracking with
                          our affiliate partners
                        </li>
                        <li>
                          <strong>Analyze performance:</strong> Understand which content and links are most
                          helpful to visitors
                        </li>
                      </ul>
                      <p>
                        <strong>UTM Parameters:</strong> Our outbound links contain UTM parameters (like
                        utm_source=govhealthreport) that identify us as the referral source. These parameters
                        are visible in the URL and shared with partner websites.
                      </p>
                      <p>
                        <strong>Partner Cookies:</strong> When you click through to partner websites, those
                        websites may set their own cookies to track your visit and any subsequent purchases.
                        These cookies are governed by the partner's privacy and cookie policies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Analytics Cookies
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        We may use analytics cookies to understand how visitors interact with our website.
                        These cookies collect information such as:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Pages you visit and how long you spend on each page</li>
                        <li>How you arrived at our website (search engine, direct, referral)</li>
                        <li>Your general geographic location (country, region, city)</li>
                        <li>Your device type, browser, and operating system</li>
                        <li>Which links and buttons you click</li>
                      </ul>
                      <p>
                        This information helps us improve our website and provide more relevant content.
                        Analytics data is typically aggregated and anonymized.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Our website may include content or features from third parties that set their own cookies.
                    These may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Analytics providers:</strong> Such as Google Analytics</li>
                    <li><strong>Affiliate networks:</strong> That track referrals and conversions</li>
                    <li><strong>Database services:</strong> Like Supabase for user reviews</li>
                    <li><strong>Embedded content:</strong> Videos or other media from third-party sites</li>
                  </ul>
                  <p>
                    We do not control these third-party cookies. Please refer to the respective third party's
                    privacy and cookie policies for more information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Managing Your Cookie Preferences
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        You have several options for managing cookies:
                      </p>

                      <h3 className="font-semibold text-lg">Browser Settings</h3>
                      <p>
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>View what cookies are stored on your device</li>
                        <li>Delete some or all cookies</li>
                        <li>Block all cookies or only third-party cookies</li>
                        <li>Set your browser to notify you when cookies are being set</li>
                      </ul>
                      <p>
                        Please note that blocking cookies may affect the functionality of this website and
                        many other websites.
                      </p>

                      <h3 className="font-semibold text-lg mt-4">Opt-Out Tools</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Google Analytics:</strong> You can opt out using the{" "}
                          <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Google Analytics Opt-out Browser Add-on
                          </a>
                        </li>
                        <li>
                          <strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature that
                          signals to websites that you don't want to be tracked
                        </li>
                      </ul>

                      <h3 className="font-semibold text-lg mt-4">Impact of Disabling Cookies</h3>
                      <p>
                        If you disable cookies:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Some website features may not work properly</li>
                        <li>We may not receive credit for referrals you make</li>
                        <li>Your preferences may not be saved</li>
                        <li>User-submitted reviews may not work correctly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Data Retention
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Different types of cookies are retained for different periods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Session cookies:</strong> Deleted when you close your browser
                    </li>
                    <li>
                      <strong>Persistent cookies:</strong> Remain until they expire or you delete them
                      (typically days to months)
                    </li>
                    <li>
                      <strong>Affiliate tracking:</strong> May persist for 30-90 days or longer depending
                      on partner agreements
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or
                  for other operational, legal, or regulatory reasons. We will post any changes on this page
                  and update the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Questions About Cookies
                </h2>
                <p className="text-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us through our{" "}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    Contact Page
                  </Link>{" "}
                  or review our{" "}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  for more information about how we handle your data.
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
