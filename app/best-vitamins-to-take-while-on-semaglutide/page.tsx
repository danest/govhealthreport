import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Pill, Star, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Vitamins to Take While on Semaglutide 2025 | GOV Health Report",
  description:
    "Discover the essential vitamins and supplements to take while on semaglutide. Prevent nutrient deficiencies and support your weight loss journey with proper supplementation.",
  keywords: [
    "vitamins on semaglutide",
    "semaglutide supplements",
    "Ozempic vitamins",
    "Wegovy supplements",
    "nutrient deficiency GLP-1",
    "best supplements weight loss",
  ],
};

export default function BestVitaminsOnSemaglutidePage() {
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
                  Best Vitamins to Take While on <span className="text-primary">Semaglutide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Reduced food intake on semaglutide can lead to nutrient gaps. Learn which vitamins
                  and supplements help prevent deficiencies and support overall health during weight loss.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center"
                  alt="Vitamins and supplements"
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
                Key supplements for semaglutide users include a quality multivitamin, B12, vitamin D3,
                protein powder, and biotin. Protein is especially important—aim for 60-100g daily to
                preserve muscle mass during weight loss.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Comprehensive Weight Loss Support"
          subtitle="These providers include nutritional guidance as part of their programs."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Vitamins Are Important on Semaglutide
                </h2>
                <p className="text-muted-foreground mb-4">
                  When you eat significantly less food, you naturally consume fewer vitamins and
                  minerals. Semaglutide also slows digestion, which can affect nutrient absorption.
                  Key concerns include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Reduced protein intake leading to muscle loss
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Lower intake of essential vitamins and minerals
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Potential B12 deficiency with long-term use
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Increased risk of hair loss from nutrient deficiencies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Essential Vitamins for Semaglutide Users
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">1. Quality Multivitamin</h3>
                      <p className="text-muted-foreground mt-1">
                        A good daily multivitamin provides baseline coverage for most essential
                        nutrients. Look for one with methylated B vitamins for better absorption.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Essential
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">2. Vitamin B12</h3>
                      <p className="text-muted-foreground mt-1">
                        GLP-1 medications can reduce B12 absorption. Symptoms of deficiency include
                        fatigue, weakness, and cognitive issues. Consider sublingual B12 for better
                        absorption.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: High — especially important for vegetarians
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">3. Vitamin D3</h3>
                      <p className="text-muted-foreground mt-1">
                        Many people are already deficient in vitamin D. It&apos;s essential for bone
                        health, immune function, and mood. Take with a meal containing fat for
                        better absorption.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: High — most people benefit from supplementation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">4. Protein Supplement</h3>
                      <p className="text-muted-foreground mt-1">
                        Adequate protein is crucial to preserve muscle mass during weight loss.
                        If you struggle to eat enough protein, consider a quality protein powder
                        (whey, collagen, or plant-based).
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: High — aim for 0.7-1g protein per pound of body weight
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">5. Biotin</h3>
                      <p className="text-muted-foreground mt-1">
                        Many semaglutide users experience hair thinning due to rapid weight loss
                        and reduced nutrient intake. Biotin supports hair, skin, and nail health.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Medium — especially if noticing hair changes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">6. Omega-3 Fatty Acids</h3>
                      <p className="text-muted-foreground mt-1">
                        Fish oil or algae-based omega-3s support heart health, reduce inflammation,
                        and may help with joint stiffness some users experience during rapid weight loss.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Medium — beneficial for overall health
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tips for Taking Supplements on Semaglutide
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Take vitamins with whatever food you do eat to improve absorption
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Choose gummy or liquid vitamins if nausea makes pills difficult
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Spread supplements throughout the day rather than all at once
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Ask your doctor about periodic blood work to check nutrient levels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Consult Your Healthcare Provider
                    </h2>
                    <p className="text-muted-foreground">
                      Before starting any supplement regimen, discuss your plans with your doctor.
                      They can recommend specific dosages based on your individual needs and may
                      suggest blood tests to identify any existing deficiencies.
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
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Tirzepatide
                  </Link>
                  <Link
                    href="/best-alcohol-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol on Semaglutide
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
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
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
