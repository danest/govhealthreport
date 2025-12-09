import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Scale, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8eef4] via-white to-white py-12 md:py-16">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffc72c]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded bg-[#003366] px-3 py-1.5 text-sm font-medium text-white w-fit">
              <Shield className="h-4 w-4" />
              Official Health Resource Portal
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#003366] sm:text-4xl md:text-5xl">
              Weight Loss Treatment{" "}
              <span className="text-[#a31621]">Provider Directory</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground">
              Access verified provider information and independent assessments.
              Compare FDA-approved treatments, regulatory compliance, and consumer
              reviews in one comprehensive resource.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-[#003366] hover:bg-[#004080] cursor-pointer"
                asChild
              >
                <Link href="/best-weight-loss-injections">
                  Access Provider Directory
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#003366] text-[#003366] hover:bg-[#e8eef4] cursor-pointer"
                asChild
              >
                <Link href="/articles">
                  View Health Resources
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003366]">50+</div>
                <div className="text-xs text-muted-foreground">Providers Assessed</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-2xl font-bold text-[#003366]">FDA</div>
                <div className="text-xs text-muted-foreground">Approved Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003366]">24/7</div>
                <div className="text-xs text-muted-foreground">Resource Access</div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/reviews"
              className="group p-6 bg-white rounded-lg border-2 border-[#003366] hover:bg-[#e8eef4] transition-colors shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#003366] mb-4">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-1">Provider Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Independent assessments of licensed providers
              </p>
            </Link>

            <Link
              href="/disclosure"
              className="group p-6 bg-white rounded-lg border-2 border-[#003366] hover:bg-[#e8eef4] transition-colors shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#a31621] mb-4">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-1">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Full disclosure of our assessment methods
              </p>
            </Link>

            <Link
              href="/articles"
              className="group p-6 bg-white rounded-lg border-2 border-[#003366] hover:bg-[#e8eef4] transition-colors shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc72c] mb-4">
                <BookOpen className="h-6 w-6 text-[#003366]" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-1">Health Resources</h3>
              <p className="text-sm text-muted-foreground">
                Educational guides and consumer information
              </p>
            </Link>

            <Link
              href="/faq"
              className="group p-6 bg-white rounded-lg border-2 border-[#003366] hover:bg-[#e8eef4] transition-colors shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#003366] mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-1">Consumer FAQ</h3>
              <p className="text-sm text-muted-foreground">
                Answers to common questions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
