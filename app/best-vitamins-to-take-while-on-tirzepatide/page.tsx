import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Pill, Star, AlertCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Vitamins to Take While on Tirzepatide 2025 | GOV Health Report",
  description:
    "Discover the essential vitamins and supplements to take while on tirzepatide (Mounjaro, Zepbound). Support your health and prevent deficiencies during weight loss.",
  keywords: [
    "vitamins on tirzepatide",
    "tirzepatide supplements",
    "Mounjaro vitamins",
    "Zepbound supplements",
    "nutrient deficiency GLP-1",
    "best supplements weight loss",
  ],
};

export default function BestVitaminsOnTirzepatidePage() {
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
                  Best Vitamins to Take While on <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tirzepatide can cause significant appetite reduction. Proper supplementation
                  helps prevent nutrient deficiencies and supports your body during rapid weight loss.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center"
                  alt="Vitamins and supplements for tirzepatide"
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
                Essential supplements for tirzepatide users: protein powder (critical for muscle
                preservation), quality multivitamin, vitamin D3+K2, B-complex, collagen peptides,
                and biotin. Protein is the top priority—aim for 60-100g daily.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Tirzepatide with Nutritional Support"
          subtitle="These providers include comprehensive health guidance with their programs."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Supplementation Matters on Tirzepatide
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tirzepatide is highly effective for weight loss—clinical trials show average
                  weight loss of 20-25%. But eating significantly less means consuming fewer
                  nutrients. Common concerns include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Hair thinning or loss (telogen effluvium) from rapid weight loss
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Fatigue from inadequate B-vitamin and iron intake
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Muscle loss from insufficient protein consumption
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Bone density concerns with long-term calorie restriction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Top Recommended Supplements
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">1. Protein Supplement</h3>
                      <p className="text-muted-foreground mt-1">
                        The most important supplement for tirzepatide users. Aim for 60-100g
                        of protein daily to preserve muscle mass. Options include whey, collagen,
                        casein, or plant-based protein powders.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Critical — prevents muscle loss during weight loss
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">2. High-Quality Multivitamin</h3>
                      <p className="text-muted-foreground mt-1">
                        A comprehensive multivitamin covers baseline nutritional needs. Look for
                        one with methylated B vitamins (methylfolate, methylcobalamin) for
                        better absorption.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Essential
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">3. Vitamin D3 + K2</h3>
                      <p className="text-muted-foreground mt-1">
                        Vitamin D supports bone health, immune function, and mood. K2 helps
                        direct calcium to bones rather than arteries. The combination is more
                        effective than D alone.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: High — especially important for bone health during weight loss
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">4. B-Complex or B12</h3>
                      <p className="text-muted-foreground mt-1">
                        GLP-1 medications may reduce B12 absorption. B vitamins support energy
                        production, nerve function, and mood. Consider sublingual B12 for
                        better absorption.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: High
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">5. Collagen Peptides</h3>
                      <p className="text-muted-foreground mt-1">
                        Supports skin elasticity (important during significant weight loss),
                        hair health, and joint function. Also contributes to daily protein intake.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Medium-High — especially for significant weight loss
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">6. Biotin + Zinc</h3>
                      <p className="text-muted-foreground mt-1">
                        Both support hair, skin, and nail health. Many users experience some
                        hair thinning 3-6 months into treatment—these nutrients can help minimize it.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Medium — especially if noticing hair changes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Pill className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">7. Magnesium</h3>
                      <p className="text-muted-foreground mt-1">
                        Many people are deficient in magnesium. It supports muscle function,
                        sleep quality, and can help with constipation—a common tirzepatide side effect.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Priority: Medium
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Sample Daily Supplement Stack
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Morning (with breakfast)</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Multivitamin</li>
                      <li>• Vitamin D3 + K2</li>
                      <li>• B-Complex or B12</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Midday or Post-Workout</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Protein shake (25-40g protein)</li>
                      <li>• Collagen peptides (can add to shake)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground">Evening</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Magnesium (glycinate for sleep, citrate for constipation)</li>
                      <li>• Biotin + Zinc (if using)</li>
                    </ul>
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
                      Talk to Your Doctor
                    </h2>
                    <p className="text-muted-foreground">
                      Before starting any supplement regimen, consult with your healthcare provider.
                      They may recommend specific blood tests to identify deficiencies and can help
                      you choose appropriate dosages for your individual needs.
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
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Semaglutide
                  </Link>
                  <Link
                    href="/best-alcohol-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol on Tirzepatide
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
