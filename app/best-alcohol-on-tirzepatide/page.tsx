import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Wine, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Alcohol to Drink on Tirzepatide 2025 | GOV Health Report",
  description:
    "Learn which alcoholic drinks are safest while taking tirzepatide (Mounjaro, Zepbound). Understand the risks and best practices for drinking on GLP-1 medications.",
  keywords: [
    "alcohol on tirzepatide",
    "drinking on Mounjaro",
    "Zepbound and alcohol",
    "tirzepatide alcohol",
    "best alcohol GLP-1",
    "can I drink on tirzepatide",
  ],
};

export default function BestAlcoholOnTirzepatidePage() {
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
                  Best Alcohol on <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Wondering if you can drink alcohol while taking tirzepatide? Many users report
                  changed tolerance and preferences. Here&apos;s your guide to making safer choices.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80&fit=crop&crop=center"
                  alt="Alcohol choices on tirzepatide"
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
                Lower-risk options on tirzepatide include dry wine, light beer, and spirits with soda
                water. Avoid sugary cocktails and sweet wines. Many users find their alcohol tolerance
                is significantly reduced—test with half your usual amount in a safe environment first.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Expert Support with Tirzepatide"
          subtitle="These providers offer comprehensive lifestyle guidance alongside your prescription."
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
                      Medical Advisory
                    </h2>
                    <p className="text-muted-foreground">
                      The prescribing information for Mounjaro and Zepbound doesn&apos;t specifically
                      prohibit alcohol. However, there is no guaranteed &quot;safe&quot; amount. Many
                      healthcare providers recommend limiting or avoiding alcohol while on GLP-1
                      medications. Always consult your doctor about your specific situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Tirzepatide Changes Alcohol&apos;s Effects
                </h2>
                <p className="text-muted-foreground mb-4">
                  Many tirzepatide users notice significant changes in how alcohol affects them:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Increased Sensitivity</h3>
                      <p className="text-sm text-muted-foreground">
                        One drink may feel like two or three. This is due to slowed gastric
                        emptying and reduced food intake.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Reduced Interest</h3>
                      <p className="text-sm text-muted-foreground">
                        Many users report naturally wanting to drink less—part of the general
                        reduction in cravings that GLP-1 medications can cause.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Worse Side Effects</h3>
                      <p className="text-sm text-muted-foreground">
                        Alcohol can increase nausea, stomach discomfort, and acid reflux—all
                        common tirzepatide side effects.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Better Alcohol Choices on Tirzepatide
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Lower-Risk Options
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Dry red or white wine (5oz serving)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Light beer (under 5% ABV)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Vodka or gin with soda water</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Champagne or dry prosecco (small glass)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Whiskey or bourbon (neat or on ice)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      Drinks to Avoid
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>Frozen cocktails (margaritas, daiquiris)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>Mixed drinks with juice or soda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>Sweet wines (moscato, riesling)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>Craft beers with high ABV (7%+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>Energy drink mixers (vodka Red Bull)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wine className="h-6 w-6 text-primary" />
                  Harm Reduction Tips
                </h2>

                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">1. Test Your New Tolerance</h3>
                    <p className="text-sm text-muted-foreground">
                      Start with half your usual amount in a safe environment. Many people on
                      tirzepatide find their tolerance is significantly lower than before.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">2. Never Drink on an Empty Stomach</h3>
                    <p className="text-sm text-muted-foreground">
                      Even if you&apos;re not hungry, eat something before drinking. Protein and fat
                      help slow alcohol absorption.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">3. Alternate with Water</h3>
                    <p className="text-sm text-muted-foreground">
                      Have a glass of water between each alcoholic drink. This helps with hydration
                      and slows your consumption.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">4. Avoid Injection Day</h3>
                    <p className="text-sm text-muted-foreground">
                      Skip alcohol on the day you take your tirzepatide injection and ideally
                      the day after, when side effects may be strongest.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">5. Watch for Warning Signs</h3>
                    <p className="text-sm text-muted-foreground">
                      Stop drinking immediately if you feel nauseous, dizzy, or unwell. Your
                      body is telling you it&apos;s had enough.
                    </p>
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
                    href="/best-alcohol-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol on Semaglutide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Tirzepatide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-tirzepatide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Tirzepatide
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Tirzepatide Program
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
