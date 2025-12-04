import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Sun, Moon, Calendar, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time of Day to Take Tirzepatide for Weight Loss 2025 | Rx Saver Hub",
  description:
    "Find the optimal time of day to take tirzepatide for maximum weight loss. Compare morning vs evening injections and learn tips for minimizing side effects.",
  keywords: [
    "best time to take tirzepatide",
    "tirzepatide morning or night",
    "when to inject Mounjaro",
    "Zepbound best time",
    "tirzepatide timing",
    "GLP-1 injection schedule",
  ],
};

export default function BestTimeOfDayToTakeTirzepatidePage() {
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
                  Best Time of Day to Take <span className="text-primary">Tirzepatide</span> for Weight Loss
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tirzepatide is a once-weekly injection with flexibility in timing. Learn how
                  strategic timing can optimize your weight loss results and minimize side effects.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80&fit=crop&crop=center"
                  alt="Tirzepatide timing for weight loss"
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
                Tirzepatide can be taken at any time, with or without food. Most users prefer
                Friday evening or Saturday morning to manage side effects over the weekend.
                The key is consistency—take it on the same day each week at roughly the same time.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Started with Tirzepatide"
          subtitle="These providers offer personalized dosing schedules and ongoing support."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Official Timing Guidelines
                </h2>
                <p className="text-muted-foreground mb-4">
                  According to the prescribing information for Mounjaro and Zepbound, tirzepatide:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Can be taken at any time of day
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Can be taken with or without food
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Should be taken on the same day each week
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    The day can be changed if the last dose was 3+ days ago
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Morning vs. Evening Injections
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <Sun className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Morning Dosing</h3>
                      <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                        <p><strong>Advantages:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Appetite suppression peaks during daytime meals</li>
                          <li>Easy to incorporate into morning routine</li>
                          <li>Helps reduce breakfast and lunch portions</li>
                          <li>Any energy boost aligns with active hours</li>
                        </ul>
                        <p className="mt-2"><strong>Consider if you:</strong> Struggle with daytime eating,
                        have a consistent morning schedule, or experience energy from the medication.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <Moon className="h-6 w-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Evening Dosing</h3>
                      <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                        <p><strong>Advantages:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Sleep through initial nausea or discomfort</li>
                          <li>Reduces evening snacking and late-night eating</li>
                          <li>Good for those who feel tired after injection</li>
                          <li>Appetite suppression helps avoid nighttime overeating</li>
                        </ul>
                        <p className="mt-2"><strong>Consider if you:</strong> Experience nausea, struggle
                        with night eating, or feel drowsy after your dose.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Pro Tips for Timing
                </h2>

                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Start on a Low-Activity Day</h3>
                    <p className="text-sm text-muted-foreground">
                      When first starting tirzepatide or increasing your dose, choose a day (like
                      Friday or Saturday) when you can rest if needed.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Track Your Side Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Note when side effects occur and adjust timing accordingly. If you get nausea
                      4-6 hours after injecting, time it so those hours fall when you&apos;re sleeping
                      or resting.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Consider Your Social Calendar</h3>
                    <p className="text-sm text-muted-foreground">
                      If you have weekly social events involving food or alcohol, schedule your
                      injection to minimize conflicts with those activities.
                    </p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Set a Weekly Reminder</h3>
                    <p className="text-sm text-muted-foreground">
                      Once you find your optimal time, set a recurring phone alarm or calendar
                      reminder to maintain consistency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Users Report
                </h2>
                <p className="text-muted-foreground mb-4">
                  Based on user feedback and community discussions, here are common preferences:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-foreground">Most Popular</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Friday evening or Saturday morning</strong> — Allows weekend adjustment
                      to any side effects before the work week.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-foreground">Runner Up</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Sunday evening</strong> — Appetite suppression is strongest during
                      the Monday-Wednesday period when willpower may be tested.
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
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time for Semaglutide
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Tirzepatide
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Tirzepatide
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Tirzepatide Program
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Tirzepatide
                  </Link>
                  <Link
                    href="/best-alcohol-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol Choices on Tirzepatide
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
