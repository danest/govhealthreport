import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Sun, Moon, Coffee, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time of Day to Take Semaglutide for Weight Loss 2025 | GOV Health Report",
  description:
    "Discover the optimal time of day to take semaglutide for maximum weight loss results. Learn about morning vs evening injections and tips for managing side effects.",
  keywords: [
    "best time to take semaglutide",
    "semaglutide morning or night",
    "when to inject Ozempic",
    "Wegovy best time",
    "semaglutide timing",
    "GLP-1 injection timing",
  ],
};

export default function BestTimeOfDayToTakeSemaglutidePage() {
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
                  Best Time of Day to Take <span className="text-primary">Semaglutide</span> for Weight Loss
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  While semaglutide can be taken at any time of day, strategic timing can help
                  maximize benefits and minimize side effects. Here&apos;s what you need to know.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=80&fit=crop&crop=center"
                  alt="Clock timing for semaglutide"
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
                Semaglutide can be taken at any time of day. Many users prefer evening injections
                to sleep through potential nausea, while others prefer morning for daytime appetite
                control. Pick a consistent day each week—Friday or Saturday is popular for weekend
                adjustment.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Start Your Semaglutide Journey"
          subtitle="Get personalized timing advice from these top-rated weight loss providers."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Does Time of Day Really Matter?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Semaglutide is a once-weekly injection, and the official guidance is that it can
                  be taken at any time of day, with or without food. However, many users find that
                  timing their injection strategically can help with:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Managing nausea and digestive side effects
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Aligning appetite suppression with meal times
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Building a consistent weekly routine
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Morning vs. Evening: Comparing Your Options
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <Sun className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Morning Injection</h3>
                      <p className="text-sm text-muted-foreground mt-1 mb-2">
                        Many healthcare providers suggest morning injections for these reasons:
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Easier to remember as part of morning routine</li>
                        <li>• Peak appetite suppression during daytime eating hours</li>
                        <li>• Can manage any side effects while awake</li>
                        <li>• Some users report increased energy during the day</li>
                      </ul>
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mt-3">
                        Best for: People who eat more during the day and want to reduce daytime snacking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <Moon className="h-6 w-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Evening Injection</h3>
                      <p className="text-sm text-muted-foreground mt-1 mb-2">
                        Evening injections can work better for some people:
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Sleep through initial nausea (most common side effect)</li>
                        <li>• Helps curb late-night snacking and cravings</li>
                        <li>• Good for those who feel drowsy after injection</li>
                        <li>• More privacy if you prefer</li>
                      </ul>
                      <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400 mt-3">
                        Best for: Night snackers or those who experience significant nausea
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Timing Around Meals
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Coffee className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Before Breakfast</h3>
                      <p className="text-sm text-muted-foreground">
                        Some find this reduces nausea since the stomach is empty. The medication
                        has time to work before eating.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Utensils className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">After a Light Meal</h3>
                      <p className="text-sm text-muted-foreground">
                        Others prefer injecting after eating something light to reduce stomach
                        sensitivity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> While food timing doesn&apos;t
                    affect absorption, it can influence how you feel. Experiment to find what works
                    best for your body.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Choosing Your Injection Day
                </h2>
                <p className="text-muted-foreground mb-4">
                  Beyond time of day, consider which day of the week works best:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Friday Evening/Saturday Morning</h3>
                    <p className="text-sm text-muted-foreground">
                      Popular choice—you have the weekend to manage any side effects before returning
                      to work or regular activities.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Sunday Evening</h3>
                    <p className="text-sm text-muted-foreground">
                      Helps kickstart the week with reduced appetite and builds a consistent
                      weekly routine.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Avoid Event Days</h3>
                    <p className="text-sm text-muted-foreground">
                      Don&apos;t schedule injections before important events where nausea or
                      reduced appetite might be problematic.
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
                    href="/best-time-of-day-to-take-tirzepatide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time for Tirzepatide
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Semaglutide Program
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Semaglutide
                  </Link>
                  <Link
                    href="/best-alcohol-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol Choices on Semaglutide
                  </Link>
                  <Link
                    href="/best-compounding-pharmacy-for-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Semaglutide
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
