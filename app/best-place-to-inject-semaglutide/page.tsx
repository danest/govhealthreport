import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Target, AlertTriangle, CheckCircle, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Place to Inject Semaglutide - Injection Sites Guide 2025 | Rx Saver Hub",
  description:
    "Learn the best injection sites for semaglutide (Ozempic, Wegovy). Complete guide for abdomen, thigh, and upper arm injections with tips for reducing pain and side effects.",
  keywords: [
    "best place to inject semaglutide",
    "semaglutide injection sites",
    "Ozempic injection",
    "Wegovy injection",
    "how to inject semaglutide",
    "subcutaneous injection sites",
  ],
};

export default function BestPlaceToInjectSemaglutidePage() {
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
                  Best Place to Inject <span className="text-primary">Semaglutide</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Proper injection technique is essential for semaglutide effectiveness and your
                  comfort. Learn the approved injection sites and expert tips for the best experience.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&fit=crop&crop=center"
                  alt="Semaglutide injection preparation"
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
                The abdomen is the most popular and easiest injection site for semaglutide.
                Inject at least 2 inches from your belly button. The thighs and back of upper
                arms are also approved. Always rotate sites weekly to prevent skin issues.
              </span>
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Semaglutide with Injection Support"
          subtitle="These providers include comprehensive injection training and ongoing support."
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Approved Semaglutide Injection Sites
                </h2>
                <p className="text-muted-foreground mb-6">
                  Semaglutide is injected subcutaneously (under the skin) into fatty tissue.
                  The FDA approves three areas for injection:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">1. Abdomen (Stomach Area)</h3>
                      <p className="text-muted-foreground mt-1">
                        The most popular injection site. Use the area at least 2 inches away from
                        your belly button. The abdomen typically has more subcutaneous fat, making
                        injections easier and often less painful.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Recommended for: Most users, especially beginners
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">2. Thigh (Upper Front)</h3>
                      <p className="text-muted-foreground mt-1">
                        The front and outer side of your upper thighs are good alternatives.
                        Focus on the middle third of your thigh, avoiding areas close to
                        the knee or groin.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Recommended for: Those who prefer thigh injections or have limited abdominal fat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">3. Upper Arm (Back)</h3>
                      <p className="text-muted-foreground mt-1">
                        The fatty area on the back of your upper arm works well but typically
                        requires assistance from another person to inject properly.
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">
                        Recommended for: When someone else administers the injection
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Step-by-Step Injection Guide
                </h2>

                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Prepare Your Materials</h3>
                      <p className="text-sm text-muted-foreground">
                        Gather your semaglutide pen, a new needle, and alcohol swab. Let the pen
                        warm to room temperature if refrigerated.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Clean the Injection Site</h3>
                      <p className="text-sm text-muted-foreground">
                        Wipe the area with an alcohol swab and let it dry completely before injecting.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Pinch the Skin</h3>
                      <p className="text-sm text-muted-foreground">
                        Gently pinch a fold of skin between your thumb and fingers to lift the
                        fatty tissue away from the muscle.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Insert the Needle</h3>
                      <p className="text-sm text-muted-foreground">
                        Insert the needle at a 90-degree angle (straight in) into the pinched skin.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">5</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Inject and Wait</h3>
                      <p className="text-sm text-muted-foreground">
                        Press the button and hold for 5-10 seconds after the dose counter shows 0
                        to ensure full delivery.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  Why Rotation Matters
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rotating your injection sites is crucial to prevent lipodystrophy—a condition where
                  fatty tissue under the skin changes, becoming either lumpy (lipohypertrophy) or
                  indented (lipoatrophy). This can affect how the medication is absorbed.
                </p>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Sample 4-Week Rotation:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Week 1:</strong> Right side of abdomen</li>
                    <li>• <strong>Week 2:</strong> Left side of abdomen</li>
                    <li>• <strong>Week 3:</strong> Right thigh</li>
                    <li>• <strong>Week 4:</strong> Left thigh</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Within each area, use a slightly different spot each time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tips for a Comfortable Injection
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Do
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Let medication reach room temperature</li>
                      <li>• Use a new needle each time</li>
                      <li>• Insert needle quickly and smoothly</li>
                      <li>• Inject slowly for less discomfort</li>
                      <li>• Apply gentle pressure after (no rubbing)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Avoid
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Injecting into bruised or scarred skin</li>
                      <li>• Reusing needles</li>
                      <li>• Injecting cold medication</li>
                      <li>• Using the exact same spot repeatedly</li>
                      <li>• Injecting into muscle or veins</li>
                    </ul>
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
                    href="/best-place-to-inject-tirzepatide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Tirzepatide
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
