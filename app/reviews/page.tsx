import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Weight Loss Provider Reviews | Rx Saver Hub",
  description:
    "Read in-depth reviews of the top weight loss treatment providers. Compare features, pricing, and find the best GLP-1 program for your needs.",
};

const providers = [
  {
    rank: 1,
    name: "CoreAge Rx",
    slug: "coreage-rx",
    rating: 9.9,
    ratingLabel: "Outstanding",
    description: "Premium GLP-1 weight loss program with personalized treatment plans from board-certified physicians.",
    badge: "Editor's Choice",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    rank: 2,
    name: "Mochi Health",
    slug: "mochi-health",
    rating: 8.8,
    ratingLabel: "Very Good",
    description: "Affordable GLP-1 access starting at $99/mo with live video visits and 24/7 support.",
    badge: "Best Value",
    badgeColor: "bg-teal-500 text-white",
  },
  {
    rank: 3,
    name: "Ro",
    slug: "ro",
    rating: 8.6,
    ratingLabel: "Very Good",
    description: "FDA-approved GLP-1s at competitive prices with access to Ozempic®, Tirzepatide & Semaglutide.",
    badge: "Top Rated",
    badgeColor: "bg-emerald-500 text-white",
  },
  {
    rank: 4,
    name: "Noom",
    slug: "noom",
    rating: 8.4,
    ratingLabel: "Good",
    description: "Online prescriptions with psychology-based approach and microdose options available.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 5,
    name: "Remedy Meds",
    slug: "remedy-meds",
    rating: 8.3,
    ratingLabel: "Good",
    description: "Lock in $199 for life pricing with America's trusted GLP-1 program.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 6,
    name: "Hers",
    slug: "hers",
    rating: 8.1,
    ratingLabel: "Good",
    description: "Monthly plans starting at $69/mo with treatment options including Ozempic®, Wegovy®, and more.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 7,
    name: "MEDVI",
    slug: "medvi",
    rating: 7.9,
    ratingLabel: "Good",
    description: "Simple online process with no clinic visits and 24/7 certified medical support.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 8,
    name: "Eden",
    slug: "eden",
    rating: 7.7,
    ratingLabel: "Good",
    description: "Same price every dose with no hidden fees and licensed medical professional supervision.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 9,
    name: "MyStart",
    slug: "mystart",
    rating: 7.5,
    ratingLabel: "Good",
    description: "Access to 600+ US-based doctors with no membership fees and compounded medications.",
    badge: null,
    badgeColor: "",
  },
  {
    rank: 10,
    name: "Clinic Secret",
    slug: "clinic-secret",
    rating: 7.3,
    ratingLabel: "Fair",
    description: "Personalized and affordable medication options with no evaluation or membership fees.",
    badge: null,
    badgeColor: "",
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 9.5) return "text-emerald-600";
  if (rating >= 9.0) return "text-teal-600";
  if (rating >= 8.0) return "text-primary";
  return "text-amber-600";
}

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100/30 py-16 md:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-warm-200/30 blur-3xl" />
          </div>

          <div className="container relative mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Provider <span className="text-primary">Reviews</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              In-depth reviews of the top weight loss treatment providers. Read our expert analysis
              to find the best GLP-1 program for your needs.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <Link
                  key={provider.slug}
                  href={`/reviews/${provider.slug}`}
                  className="block group"
                >
                  <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    provider.rank === 1
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border/50 hover:-translate-y-1"
                  }`}>
                    {provider.rank === 1 && (
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                        <Crown className="h-4 w-4" />
                        #1 Recommended
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-muted-foreground">#{provider.rank}</span>
                            {provider.badge && (
                              <Badge className={provider.badgeColor} variant="secondary">
                                {provider.badge}
                              </Badge>
                            )}
                          </div>
                          <h2 className="text-xl font-bold text-foreground">{provider.name}</h2>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className={`text-lg font-bold ${getRatingColor(provider.rating)}`}>
                              {provider.rating}
                            </span>
                          </div>
                          <span className={`text-xs ${getRatingColor(provider.rating)}`}>
                            {provider.ratingLabel}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {provider.description}
                      </p>

                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Read Full Review
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
