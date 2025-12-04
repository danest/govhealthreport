import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Target, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025 | Rx Saver Hub",
  description:
    "Learn the best injection sites for tirzepatide (Mounjaro, Zepbound). Step-by-step guide for abdomen, thigh, and upper arm injections with tips for reducing pain and bruising.",
  keywords: [
    "best place to inject tirzepatide",
    "tirzepatide injection sites",
    "Mounjaro injection",
    "Zepbound injection",
    "how to inject tirzepatide",
    "subcutaneous injection",
  ],
};

export default function BestPlaceToInjectTirzepatidePage() {
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
                  Best Place to Inject <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Proper injection technique is crucial for tirzepatide effectiveness and comfort.
                  This guide covers the FDA-approved injection sites and tips for the best experience.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center"
                  alt="Medical injection preparation"
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
                The abdomen (stomach area) is the most popular and recommended injection site for
                tirzepatide. Stay at least 2 inches from your belly button. The thighs and back
                of upper arms are also FDA-approved alternatives. Rotate sites weekly to prevent
                skin issues.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Tirzepatide with Injection Guidance"
          subtitle="These providers include detailed injection instructions and ongoing support with your prescription."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  FDA-Approved Injection Sites for Tirzepatide
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tirzepatide is a subcutaneous injection, meaning it goes into the fatty tissue
                  just under the skin. There are three approved injection sites:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">1. Abdomen (Most Popular)</h3>
                      <p className="text-muted-foreground mt-1">
                        The area around your belly button is the most common injection site. Stay at
                        least 2 inches away from your navel. This area typically has more fatty tissue
                        and allows for easier self-injection.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Best for: Self-injection, larger fat deposits
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">2. Front of Thighs</h3>
                      <p className="text-muted-foreground mt-1">
                        The upper, outer area of your thighs provides a good alternative. Use the
                        middle third of your thigh, avoiding the inner thigh and areas close to
                        the knee or hip.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Best for: Those with less abdominal fat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">3. Back of Upper Arms</h3>
                      <p className="text-muted-foreground mt-1">
                        The fatty area on the back of your upper arm can be used, though you may
                        need help from someone else to inject in this location.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Best for: When administered by a caregiver
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tips for a Better Injection Experience
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Do&apos;s
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rotate injection sites each week</li>
                      <li>• Let the medication reach room temperature</li>
                      <li>• Clean the area with alcohol swab</li>
                      <li>• Pinch skin to create a fold</li>
                      <li>• Insert needle at 90-degree angle</li>
                      <li>• Hold for 5-10 seconds after injection</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Don&apos;ts
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Inject into scarred or bruised skin</li>
                      <li>• Use the same spot repeatedly</li>
                      <li>• Inject into muscle tissue</li>
                      <li>• Rub the injection site vigorously</li>
                      <li>• Inject cold medication</li>
                      <li>• Share needles or pens</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Site Rotation Schedule
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rotating your injection sites helps prevent lipodystrophy (changes in fat tissue)
                  and ensures consistent medication absorption. Here&apos;s a sample rotation:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Week 1:</strong> Right side of abdomen</li>
                    <li><strong>Week 2:</strong> Left side of abdomen</li>
                    <li><strong>Week 3:</strong> Right thigh</li>
                    <li><strong>Week 4:</strong> Left thigh</li>
                    <li className="text-sm italic">Repeat cycle, using slightly different spots within each area</li>
                  </ul>
                </div>
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
                    href="/best-place-to-get-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Get Tirzepatide
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Tirzepatide
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Tirzepatide Program
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
