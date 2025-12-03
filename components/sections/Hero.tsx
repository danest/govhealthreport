import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, DollarSign } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100/30 py-12 md:py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-warm-200/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
              <Shield className="h-4 w-4" />
              Trusted by thousands of patients
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              10 Best{" "}
              <span className="text-primary">Weight Loss</span>{" "}
              Treatments
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              Review the leading brands in weight loss solutions. Compare effectiveness,
              safety profiles, approved uses, pricing, and more.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 cursor-pointer" asChild>
                <Link href="/best-weight-loss-injections">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <Link href="/best-weight-loss-injections">
                  View All Providers
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Results in 12 months</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>FDA-approved treatments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4 text-primary" />
                <span>Affordable pricing</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-warm-200/40 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-warm-100 to-white shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">10%</div>
                  <div className="text-lg text-muted-foreground">to</div>
                  <div className="text-6xl font-bold text-primary">26%</div>
                  <div className="mt-2 text-sm text-muted-foreground">Body Weight Loss</div>
                  <div className="text-sm text-muted-foreground">Within 12 Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
