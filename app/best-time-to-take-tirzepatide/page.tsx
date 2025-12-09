import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Sun, Moon, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time to Take Tirzepatide for Weight Loss 2025 | GOV Health Report",
  description:
    "Discover the optimal time to take tirzepatide (Mounjaro, Zepbound) for best results. Learn about weekly dosing schedules, timing tips, and how to manage side effects.",
  keywords: [
    "best time to take tirzepatide",
    "when to inject tirzepatide",
    "tirzepatide dosing schedule",
    "Mounjaro timing",
    "Zepbound when to take",
    "tirzepatide weekly injection",
  ],
};

export default function BestTimeToTakeTirzepatidePage() {
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
                  Best Time to Take <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tirzepatide is a once-weekly injection, giving you flexibility in when you take it.
                  However, choosing the right day and time can help you manage side effects and
                  maximize results.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=600&q=80&fit=crop&crop=center"
                  alt="Clock representing tirzepatide timing"
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
                Tirzepatide can be taken at any time of day, with or without food. Most users
                prefer Friday evening or Saturday morning so they can manage any side effects
                over the weekend. The key is consistency—take it on the same day each week.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Start Your Tirzepatide Journey"
          subtitle="Get personalized dosing guidance from these top-rated telehealth providers."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  When Should You Take Tirzepatide?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Unlike some medications with strict timing requirements, tirzepatide can be taken
                  at any time of day, with or without food. The key is consistency—take it on the
                  same day each week.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Pick Your Day</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a day that works with your schedule. Many people prefer weekends
                        to manage any initial side effects at home.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Same Time Weekly</h3>
                      <p className="text-sm text-muted-foreground">
                        While not required, taking it at roughly the same time helps build a routine
                        and ensures you don&apos;t forget.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Morning vs. Evening: Which Is Better?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <Sun className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Morning Injection</h3>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• Easier to remember as part of morning routine</li>
                        <li>• Side effects may occur during daytime when easier to manage</li>
                        <li>• Appetite suppression aligns with eating schedule</li>
                        <li>• Good if you experience increased energy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <Moon className="h-6 w-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Evening Injection</h3>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• Can sleep through initial side effects like nausea</li>
                        <li>• Good if you feel tired after injection</li>
                        <li>• Reduces appetite for late-night snacking</li>
                        <li>• More privacy if preferred</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Pro tip:</strong> Many users find Friday evening
                    or Saturday morning ideal—you have the weekend to adjust to any side effects before
                    returning to work or regular activities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What If You Miss a Dose?
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you miss your scheduled injection day:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">Within 4 days:</span>
                    <span>Take it as soon as you remember, then continue with your regular schedule.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">More than 4 days late:</span>
                    <span>Skip the missed dose and take your next dose on the regularly scheduled day.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Never take two doses within 3 days of each other.
                </p>
              </CardContent>
            </Card>

            {/* Medical Disclaimer */}
            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Medical Disclaimer:</strong> This information
                  is for educational purposes only and is not intended as medical advice. Always
                  consult with a qualified healthcare provider before starting any weight loss
                  treatment. Individual results may vary.
                </p>
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
                    href="/best-weight-loss-injections"
                    className="text-primary hover:underline"
                  >
                    → Compare All Weight Loss Providers
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-tirzepatide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time of Day for Weight Loss
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Tirzepatide
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Get Tirzepatide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time for Semaglutide
                  </Link>
                  <Link
                    href="/reviews/coreage-rx"
                    className="text-primary hover:underline"
                  >
                    → CoreAge Rx Review
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
