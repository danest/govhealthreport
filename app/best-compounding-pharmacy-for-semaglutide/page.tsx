import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FlaskConical, ShieldCheck, BadgeCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Compounding Pharmacy for Semaglutide 2025 | GOV Health Report",
  description:
    "Find the best compounding pharmacies for semaglutide. Learn about quality standards, pricing, and what to look for when choosing a compounded GLP-1 medication provider.",
  keywords: [
    "best compounding pharmacy for semaglutide",
    "compounded semaglutide",
    "semaglutide compounding pharmacy",
    "cheap semaglutide",
    "compounded GLP-1",
    "503B compounding pharmacy",
  ],
};

export default function BestCompoundingPharmacyForSemaglutidePage() {
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
                  Best Compounding Pharmacy for <span className="text-primary">Semaglutide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Compounded semaglutide offers a more affordable alternative to brand-name medications.
                  Understanding how to identify quality compounding pharmacies is crucial for safety
                  and effectiveness.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80&fit=crop&crop=center"
                  alt="Pharmacy compounding medications"
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
                Look for 503B FDA-registered compounding pharmacies with PCAB accreditation and
                third-party testing. Telehealth providers like CoreAge Rx and Mochi Health partner
                with vetted pharmacies, so you don&apos;t have to evaluate them yourself.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Providers Using Quality Compounding Pharmacies"
          subtitle="These telehealth providers partner with accredited compounding pharmacies for semaglutide."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Is Compounded Semaglutide?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Compounded semaglutide is made by licensed compounding pharmacies using the same
                  active ingredient as brand-name medications like Wegovy and Ozempic. It&apos;s legally
                  available when brand-name versions are in shortage or unaffordable for patients.
                </p>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <BadgeCheck className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Advantages</h3>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Significantly lower cost</li>
                        <li>• Available during shortages</li>
                        <li>• Custom dosing options</li>
                        <li>• Same active ingredient</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Considerations</h3>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Not FDA-approved as a product</li>
                        <li>• Quality varies by pharmacy</li>
                        <li>• Requires prescription</li>
                        <li>• Not covered by insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How to Identify a Quality Compounding Pharmacy
                </h2>
                <p className="text-muted-foreground mb-4">
                  Not all compounding pharmacies meet the same quality standards. Look for these
                  key indicators:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <FlaskConical className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">503B Registration</h3>
                      <p className="text-sm text-muted-foreground">
                        503B outsourcing facilities are registered with the FDA and subject to more
                        rigorous oversight than traditional 503A pharmacies. They can produce larger
                        quantities and must follow current Good Manufacturing Practices (cGMP).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">PCAB Accreditation</h3>
                      <p className="text-sm text-muted-foreground">
                        The Pharmacy Compounding Accreditation Board (PCAB) provides voluntary
                        accreditation for compounding pharmacies that meet high quality standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Third-Party Testing</h3>
                      <p className="text-sm text-muted-foreground">
                        Quality pharmacies perform potency and sterility testing on their products
                        and can provide certificates of analysis upon request.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Questions to Ask About Compounded Semaglutide
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">1.</span>
                    <span>Is the compounding pharmacy 503A or 503B registered?</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">2.</span>
                    <span>Does the pharmacy have PCAB or other accreditation?</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">3.</span>
                    <span>Is third-party potency and sterility testing performed?</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">4.</span>
                    <span>What is the source of the active pharmaceutical ingredient?</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">5.</span>
                    <span>What is the beyond-use date (expiration) of the medication?</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">6.</span>
                    <span>How is the medication shipped to maintain stability?</span>
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
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Compounding Pharmacy for Tirzepatide
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
                    href="/best-alcohol-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Alcohol Choices on Semaglutide
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
