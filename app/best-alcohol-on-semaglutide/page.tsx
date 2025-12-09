import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Wine, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Alcohol to Drink on Semaglutide 2025 | GOV Health Report",
  description:
    "Learn which alcoholic drinks are safest while taking semaglutide. Understand the risks, best choices, and tips for drinking responsibly on GLP-1 medications.",
  keywords: [
    "alcohol on semaglutide",
    "drinking on Ozempic",
    "Wegovy and alcohol",
    "semaglutide alcohol",
    "best alcohol GLP-1",
    "can I drink on semaglutide",
  ],
};

export default function BestAlcoholOnSemaglutidePage() {
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
                  Best Alcohol on <span className="text-primary">Semaglutide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Many people wonder if they can drink alcohol while on semaglutide. While
                  moderation is key, some choices are safer than others. Here&apos;s what you need to know.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&fit=crop&crop=center"
                  alt="Wine and moderate alcohol consumption"
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
                If you choose to drink on semaglutide, opt for dry wine, light beer, or spirits
                with soda water. Avoid sugary cocktails and high-ABV drinks. Start with less than
                usual—many users report increased sensitivity to alcohol on GLP-1 medications.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Expert Guidance on Semaglutide"
          subtitle="These providers offer comprehensive support including lifestyle advice."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Important Disclaimer
                    </h2>
                    <p className="text-muted-foreground">
                      There is no &quot;safe&quot; level of alcohol that is universally recommended while
                      on semaglutide. This guide discusses lower-risk options for those who choose
                      to drink occasionally. Always consult your healthcare provider about alcohol
                      use with your specific medical situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Alcohol Affects You Differently on Semaglutide
                </h2>
                <p className="text-muted-foreground mb-4">
                  Many people on semaglutide report that alcohol affects them more strongly. This may be due to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Slower gastric emptying</strong> — Semaglutide slows digestion, potentially increasing alcohol absorption time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Reduced food intake</strong> — Eating less means less food to absorb alcohol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Blood sugar changes</strong> — Both semaglutide and alcohol affect blood sugar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Increased nausea</strong> — Alcohol can worsen GI side effects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Lower-Risk Alcohol Choices
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you choose to drink, these options are generally considered lower-risk:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Dry Wine (Red or White)</h3>
                      <p className="text-sm text-muted-foreground">
                        Lower in sugar than sweet wines. A 5oz glass is a standard serving.
                        Look for wines with lower alcohol content (11-13%).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Light Beer</h3>
                      <p className="text-sm text-muted-foreground">
                        Lower alcohol and calorie content. Choose options with 4% ABV or less.
                        Be mindful that carbonation can increase nausea for some.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Spirits with Soda Water</h3>
                      <p className="text-sm text-muted-foreground">
                        Vodka, gin, or tequila mixed with plain soda water and lime. Avoid
                        sugary mixers like tonic, juice, or soda.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Drinks to Avoid
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Sugary Cocktails</h3>
                      <p className="text-sm text-muted-foreground">
                        Margaritas, piña coladas, daiquiris — high in sugar and calories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Sweet Wines & Dessert Wines</h3>
                      <p className="text-sm text-muted-foreground">
                        Moscato, port, sherry — significantly higher sugar content
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">High-ABV Craft Beers</h3>
                      <p className="text-sm text-muted-foreground">
                        IPAs and stouts often have 7-12% alcohol — much stronger than light beers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Shots & High-Proof Spirits</h3>
                      <p className="text-sm text-muted-foreground">
                        Concentrated alcohol is harder on your stomach and can spike blood sugar
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wine className="h-6 w-6 text-primary" />
                  Tips for Safer Drinking on Semaglutide
                </h2>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">1.</span>
                    <span><strong>Eat before drinking</strong> — Even a small protein-rich snack helps</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">2.</span>
                    <span><strong>Start with half your usual amount</strong> — You may feel effects more strongly</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">3.</span>
                    <span><strong>Hydrate between drinks</strong> — Alternate with water or seltzer</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">4.</span>
                    <span><strong>Monitor blood sugar</strong> — Especially important if you have diabetes</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">5.</span>
                    <span><strong>Skip alcohol on injection day</strong> — Give your body time to adjust</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">6.</span>
                    <span><strong>Know when to stop</strong> — Listen to your body; nausea is a warning sign</span>
                  </li>
                </ul>
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
                    href="/best-alcohol-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol on Tirzepatide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Semaglutide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Semaglutide
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Semaglutide Program
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
