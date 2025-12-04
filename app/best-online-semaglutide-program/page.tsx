import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Laptop, CheckCircle, Users, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Online Semaglutide Program 2025 - Compare Top Telehealth Providers | Rx Saver Hub",
  description:
    "Compare the best online semaglutide programs for weight loss. Find telehealth providers offering Wegovy, Ozempic, and compounded semaglutide with medical supervision.",
  keywords: [
    "best online semaglutide program",
    "semaglutide telehealth",
    "online Wegovy prescription",
    "semaglutide weight loss program",
    "compounded semaglutide online",
    "GLP-1 telehealth",
  ],
};

export default function BestOnlineSemaglutideProgramPage() {
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
                  Best Online <span className="text-primary">Semaglutide</span> Program
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Online semaglutide programs offer convenient access to this powerful weight loss
                  medication from home. Compare top telehealth providers to find the best program
                  for your needs and budget.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop&crop=center"
                  alt="Online telehealth consultation"
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
                The best online semaglutide programs combine licensed physicians, affordable pricing
                ($99-299/month for compounded), and comprehensive support. CoreAge Rx, Mochi Health,
                and Ro offer the best combination of value, medical oversight, and convenience.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Top Online Semaglutide Programs"
          subtitle="These leading telehealth providers offer comprehensive semaglutide programs with medical supervision."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Look for in an Online Semaglutide Program
                </h2>
                <p className="text-muted-foreground mb-6">
                  Not all online semaglutide programs are equal. Here are the key factors to consider
                  when choosing a provider:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <HeartPulse className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Medical Oversight</h3>
                      <p className="text-sm text-muted-foreground">
                        Board-certified physicians should review your health history and monitor
                        your progress throughout treatment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Laptop className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Easy Platform</h3>
                      <p className="text-sm text-muted-foreground">
                        User-friendly apps and websites for consultations, prescription management,
                        and progress tracking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Medication Options</h3>
                      <p className="text-sm text-muted-foreground">
                        Access to brand-name (Wegovy, Ozempic) or compounded semaglutide based on
                        availability and your budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Regular check-ins, nutritional guidance, and access to care teams for
                        questions and dose adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Brand-Name vs. Compounded Semaglutide
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-foreground">Brand-Name (Wegovy, Ozempic)</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• FDA-approved with extensive clinical trials</li>
                      <li>• Consistent quality and dosing</li>
                      <li>• May be covered by insurance</li>
                      <li>• Higher cost: $1,000-1,600/month without insurance</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-foreground">Compounded Semaglutide</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Made by licensed compounding pharmacies</li>
                      <li>• Significantly lower cost: $150-400/month</li>
                      <li>• Not FDA-approved (but uses same active ingredient)</li>
                      <li>• Quality varies by pharmacy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Online Semaglutide Programs Work
                </h2>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Complete Health Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out a detailed questionnaire about your health history, medications, and weight loss goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Virtual Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Meet with a licensed healthcare provider via video or messaging to discuss your treatment plan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Receive Medication</h3>
                      <p className="text-sm text-muted-foreground">
                        If approved, your semaglutide prescription ships directly to your door, usually within 3-5 days.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Ongoing Care</h3>
                      <p className="text-sm text-muted-foreground">
                        Regular check-ins with your care team, dose adjustments as needed, and continuous support.
                      </p>
                    </div>
                  </li>
                </ol>
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
                    href="/best-online-tirzepatide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Tirzepatide Program
                  </Link>
                  <Link
                    href="/best-compounding-pharmacy-for-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Semaglutide
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Semaglutide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Semaglutide
                  </Link>
                  <Link
                    href="/reviews"
                    className="text-primary hover:underline"
                  >
                    → All Provider Reviews
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
