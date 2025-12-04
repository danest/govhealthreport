import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FlaskConical, ShieldCheck, AlertTriangle, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Compounding Pharmacy for Tirzepatide 2025 | Rx Saver Hub",
  description:
    "Find the best compounding pharmacies for tirzepatide. Learn about quality standards, pricing, and what to look for when choosing a compounded tirzepatide provider.",
  keywords: [
    "best compounding pharmacy for tirzepatide",
    "compounded tirzepatide",
    "tirzepatide compounding pharmacy",
    "cheap tirzepatide",
    "compounded Mounjaro",
    "503B compounding pharmacy",
  ],
};

export default function BestCompoundingPharmacyForTirzepatidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                  Best Compounding Pharmacy for <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Compounded tirzepatide can provide significant cost savings compared to brand-name
                  Mounjaro or Zepbound. Learn how to find a reputable compounding pharmacy that
                  meets quality and safety standards.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80&fit=crop&crop=center"
                  alt="Pharmacy compounding tirzepatide"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-8 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-lg">
              <strong className="text-foreground">The Quick Answer:</strong>{" "}
              <span className="text-muted-foreground">
                The best compounding pharmacies for tirzepatide are 503B FDA-registered facilities
                with sterility testing and potency verification. Use telehealth providers like
                CoreAge Rx or Mochi Health who partner with vetted pharmacies for safety.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Providers Using Quality Tirzepatide Pharmacies"
          subtitle="These telehealth providers partner with accredited compounding pharmacies for tirzepatide."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Compounded vs. Brand-Name Tirzepatide
                </h2>
                <p className="text-muted-foreground mb-4">
                  Brand-name tirzepatide (Mounjaro, Zepbound) can cost $1,000+ per month without
                  insurance. Compounded versions typically cost $200-500/month, making treatment
                  accessible to more people.
                </p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                        <th className="text-left py-2 font-semibold text-foreground">Brand-Name</th>
                        <th className="text-left py-2 font-semibold text-foreground">Compounded</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Monthly Cost</td>
                        <td className="py-2 text-muted-foreground">$1,000-1,500</td>
                        <td className="py-2 text-primary font-medium">$200-500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">FDA Approved</td>
                        <td className="py-2 text-muted-foreground">Yes (as product)</td>
                        <td className="py-2 text-muted-foreground">No (pharmacy regulated)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Insurance</td>
                        <td className="py-2 text-muted-foreground">Sometimes covered</td>
                        <td className="py-2 text-muted-foreground">Not covered</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Active Ingredient</td>
                        <td className="py-2 text-muted-foreground">Tirzepatide</td>
                        <td className="py-2 text-muted-foreground">Tirzepatide</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Quality Standards to Look For
                </h2>
                <p className="text-muted-foreground mb-6">
                  The quality of compounded medications depends heavily on the pharmacy producing them.
                  Here&apos;s what distinguishes high-quality compounding operations:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <FlaskConical className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">503B FDA-Registered Facility</h3>
                      <p className="text-sm text-muted-foreground">
                        503B outsourcing facilities operate under FDA oversight and must follow
                        current Good Manufacturing Practices (cGMP). This is the gold standard
                        for compounded medications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Sterility Testing</h3>
                      <p className="text-sm text-muted-foreground">
                        Injectable medications like tirzepatide must be sterile. Quality pharmacies
                        perform sterility testing on every batch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Potency Verification</h3>
                      <p className="text-sm text-muted-foreground">
                        Third-party testing should verify that the medication contains the correct
                        amount of active ingredient (typically 98-102% of labeled dose).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Important Safety Warning
                    </h2>
                    <p className="text-muted-foreground mb-3">
                      Be cautious of extremely low-priced compounded tirzepatide. Signs of a
                      questionable source include:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Prices significantly below market rate</li>
                      <li>• No prescription required</li>
                      <li>• Unable to provide pharmacy credentials</li>
                      <li>• No certificates of analysis available</li>
                      <li>• International or unknown shipping origins</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Pages */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Related Guides
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/best-compounding-pharmacy-for-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Semaglutide
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Tirzepatide Program
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Get Tirzepatide
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Tirzepatide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Tirzepatide
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Tirzepatide
                  </Link>
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
