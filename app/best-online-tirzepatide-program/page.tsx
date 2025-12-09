import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Laptop, Shield, Zap, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Online Tirzepatide Program 2025 - Compare Top Telehealth Providers | GOV Health Report",
  description:
    "Find the best online tirzepatide program for weight loss. Compare telehealth providers offering Mounjaro, Zepbound, and compounded tirzepatide with medical supervision.",
  keywords: [
    "best online tirzepatide program",
    "tirzepatide telehealth",
    "online Mounjaro prescription",
    "tirzepatide weight loss program",
    "compounded tirzepatide online",
    "Zepbound online",
  ],
};

export default function BestOnlineTirzepatideProgramPage() {
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
                  Best Online <span className="text-primary">Tirzepatide</span> Program
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tirzepatide has shown even greater weight loss results than semaglutide in clinical
                  trials. Find the best online programs offering this powerful dual GIP/GLP-1 medication
                  with proper medical oversight.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop&crop=center"
                  alt="Tirzepatide medication online program"
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
                The best online tirzepatide programs offer compounded tirzepatide for $199-399/month
                with medical supervision. Top providers include CoreAge Rx, Mochi Health, and Ro,
                which all provide convenient telehealth consultations and home delivery.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Top Online Tirzepatide Programs"
          subtitle="Leading telehealth providers offering tirzepatide with comprehensive medical support."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Choose an Online Tirzepatide Program?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Online tirzepatide programs offer several advantages over traditional clinics:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Laptop className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Convenience</h3>
                      <p className="text-sm text-muted-foreground">
                        Consult with doctors from home. No waiting rooms, no travel time,
                        and medication delivered to your door.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Cost Savings</h3>
                      <p className="text-sm text-muted-foreground">
                        Many online programs offer compounded tirzepatide at a fraction
                        of brand-name prices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Zap className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Fast Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Get started within days instead of waiting weeks for a specialist
                        appointment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Medical Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Regular check-ins, dose adjustments, and access to healthcare providers
                        when you need them.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tirzepatide vs. Semaglutide: Which Is Better?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Both medications are highly effective for weight loss, but tirzepatide has shown
                  stronger results in head-to-head trials:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                        <th className="text-left py-2 font-semibold text-primary">Tirzepatide</th>
                        <th className="text-left py-2 font-semibold text-muted-foreground">Semaglutide</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Mechanism</td>
                        <td className="py-2 text-foreground">Dual GIP + GLP-1</td>
                        <td className="py-2 text-muted-foreground">GLP-1 only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Avg Weight Loss</td>
                        <td className="py-2 text-foreground font-medium">20-25%</td>
                        <td className="py-2 text-muted-foreground">15-17%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Brand Names</td>
                        <td className="py-2 text-foreground">Mounjaro, Zepbound</td>
                        <td className="py-2 text-muted-foreground">Wegovy, Ozempic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Frequency</td>
                        <td className="py-2 text-foreground">Once weekly</td>
                        <td className="py-2 text-muted-foreground">Once weekly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Your healthcare provider can help determine which medication is right for your
                  specific situation, taking into account your health history and goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Questions to Ask Before Enrolling
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    What type of tirzepatide do you offer (brand-name or compounded)?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    What is included in the monthly cost (medication, consultations, shipping)?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    How quickly can I get started after signing up?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    How do dose adjustments work as I progress?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    What happens if I experience side effects?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Is there a cancellation policy or minimum commitment?
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
                    href="/best-online-semaglutide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Semaglutide Program
                  </Link>
                  <Link
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Tirzepatide
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
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins While on Tirzepatide
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
