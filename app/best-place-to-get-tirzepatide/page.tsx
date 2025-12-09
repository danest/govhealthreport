import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Shield, Clock, DollarSign, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Place to Get Tirzepatide in 2025 | GOV Health Report",
  description:
    "Find the best places to get tirzepatide for weight loss. Compare telehealth providers, compounding pharmacies, and online programs offering affordable tirzepatide prescriptions.",
  keywords: [
    "best place to get tirzepatide",
    "where to buy tirzepatide",
    "tirzepatide online",
    "tirzepatide prescription",
    "Mounjaro",
    "Zepbound",
    "GLP-1 medications",
  ],
};

export default function BestPlaceToGetTirzepatidePage() {
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
                  Best Place to Get <span className="text-primary">Tirzepatide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tirzepatide (brand names Mounjaro and Zepbound) is one of the most effective
                  weight loss medications available. Finding the right provider can save you
                  money while ensuring safe, legitimate access to this powerful GLP-1/GIP medication.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center"
                  alt="Medical consultation for tirzepatide"
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
                The best places to get tirzepatide are through telehealth providers like CoreAge Rx,
                Mochi Health, and Ro, which offer affordable compounded or brand-name options with
                medical supervision. Prices typically range from $199-500/month for compounded versions.
                Keep reading for a detailed comparison of your options.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Top Places to Get Tirzepatide"
          subtitle="These trusted providers offer tirzepatide prescriptions with medical supervision and competitive pricing."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Where Can You Get Tirzepatide?
                </h2>
                <p className="text-muted-foreground mb-4">
                  There are several ways to obtain tirzepatide for weight loss. Each option has
                  different costs, convenience levels, and requirements. Here&apos;s what you need to know:
                </p>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Stethoscope className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Telehealth Providers</h3>
                      <p className="text-sm text-muted-foreground">
                        Online consultations with licensed physicians who can prescribe tirzepatide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Compounding Pharmacies</h3>
                      <p className="text-sm text-muted-foreground">
                        Custom-made tirzepatide at potentially lower costs than brand-name versions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Insurance Coverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Some insurance plans cover Zepbound for weight loss with prior authorization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Traditional Clinics</h3>
                      <p className="text-sm text-muted-foreground">
                        In-person visits with endocrinologists or weight loss specialists.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Look For in a Tirzepatide Provider
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Licensed medical professionals</strong> – Ensure all prescriptions
                      come from board-certified physicians or nurse practitioners.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Transparent pricing</strong> – Look for providers that clearly
                      list all costs including medication, consultations, and shipping.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Ongoing support</strong> – The best programs include regular
                      check-ins and dose adjustments as needed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Quality assurance</strong> – For compounded tirzepatide, verify
                      the pharmacy is accredited and follows safety standards.
                    </span>
                  </li>
                </ul>
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
                    href="/best-place-to-inject-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Tirzepatide
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
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
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Tirzepatide
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
