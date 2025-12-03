"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Check, Star, ExternalLink, Award, Crown, Shield, TrendingUp } from "lucide-react";

const UTM_PARAMS = "?utm_source=rxsaverhub&utm_medium=affiliate&utm_campaign=weight_loss";

const providers = [
  {
    rank: 1,
    name: "CoreAge Rx",
    slug: "coreage-rx",
    rating: 9.9,
    ratingLabel: "Outstanding",
    votes: "32,847",
    visitsToday: "2,156",
    badge: "Most Popular",
    badgeColor: "bg-primary text-primary-foreground",
    highlights: [
      "Premium GLP-1 Weight Loss Program",
      "FDA-Approved Semaglutide & Tirzepatide",
      "Personalized Treatment Plans with Board-Certified Physicians",
      "Lose 10%–26% Body Weight Within 12 Months",
    ],
    url: "https://get.coreagerx.com/home/",
  },
  {
    rank: 2,
    name: "Mochi Health",
    slug: "mochi-health",
    rating: 8.8,
    ratingLabel: "Very Good",
    votes: "22,148",
    visitsToday: "1,004",
    badge: "Best Value",
    badgeColor: "bg-teal-500 text-white",
    highlights: [
      "Meds start at $99/mo, No Long-Term Commitment",
      "Book a Live Video Visit With a Doctor in 5 Minutes",
      "Reliable GLP-1 Prescription Access, All 50 states",
      "24/7 Support + Ongoing Appointments Anytime, Anywhere",
    ],
    url: "https://www.joinmochi.com/",
  },
  {
    rank: 3,
    name: "Ro",
    slug: "ro",
    rating: 8.6,
    ratingLabel: "Very Good",
    votes: "28,114",
    visitsToday: "1,468",
    badge: "Top Rated",
    badgeColor: "bg-emerald-500 text-white",
    highlights: [
      "December Sale: Get Started Online for Just $45",
      "FDA-Approved GLP-1s at Half the Usual Price",
      "Access to Ozempic®, Tirzepatide & Semaglutide",
      "Lose 10%–26% Body Weight Within 12 Months",
    ],
    url: "https://www.ro.co/weight-loss/",
  },
  {
    rank: 4,
    name: "Noom",
    slug: "noom",
    rating: 8.4,
    ratingLabel: "Good",
    votes: "26,388",
    visitsToday: "892",
    badge: null,
    badgeColor: "",
    highlights: [
      "December Sale: Starting at $99 — No Insurance Required",
      "100% Online Prescriptions with Fast & Free Shipping",
      "Microdose Available - 0 Side Effects for Most",
      "24/7 Support + Ongoing Appointments Anytime, Anywhere",
    ],
    url: "https://www.noom.com/",
  },
  {
    rank: 5,
    name: "Remedy Meds",
    slug: "remedy-meds",
    rating: 8.3,
    ratingLabel: "Good",
    votes: "30,025",
    visitsToday: "1,238",
    badge: null,
    badgeColor: "",
    highlights: [
      "Lock in $199 for Life - Limited Time Offer",
      "Save $100 Every Month, Forever",
      "The Only GLP-1 Program With Lifetime Monthly Savings",
      "America's #1 Trusted GLP-1 Program Now $199 for Life",
    ],
    url: "https://www.remedymeds.com/",
  },
  {
    rank: 6,
    name: "Hers",
    slug: "hers",
    rating: 8.1,
    ratingLabel: "Good",
    votes: "23,389",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Monthly Plans Starting at $69/Mo",
      "Treatment Plans with Ozempic®, Wegovy®, Mounjaro®, Zepbound®",
      "$0 Membership Fees. Secure 1-12 Months of Weight Loss Treatment",
      "24/7 Access to Licensed Providers for Questions in the App",
    ],
    url: "https://www.forhers.com/",
  },
  {
    rank: 7,
    name: "MEDVI",
    slug: "medvi",
    rating: 7.9,
    ratingLabel: "Good",
    votes: "27,995",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Special Offer: Save $120 + Free Shipping",
      "Simple Online Process, No Clinic Visits Needed",
      "Same Active Ingredient as Wegovy® & Ozempic®",
      "24/7 Support From Certified Medical Professionals",
    ],
    url: "https://www.medvii.com/",
  },
  {
    rank: 8,
    name: "Eden",
    slug: "eden",
    rating: 7.7,
    ratingLabel: "Good",
    votes: "24,271",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Save $100 on Your First Order with SAVE100",
      "Free Expedited Shipping - From $196",
      "Same Price, Every Dose. No Hidden Fees",
      "Safe Treatment Supervised by Licensed Medical Professionals",
    ],
    url: "https://www.edenhealth.com/",
  },
  {
    rank: 9,
    name: "MyStart",
    slug: "mystart",
    rating: 7.5,
    ratingLabel: "Good",
    votes: "24,790",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Exclusive Offer: Save $120 + Free Shipping",
      "Access to 600+ US-Based Doctors",
      "No Membership Fees. Everything you need is included",
      "Compounded Semaglutide & Tirzepatide",
    ],
    url: "https://www.mystart.com/",
  },
  {
    rank: 10,
    name: "Clinic Secret",
    slug: "clinic-secret",
    rating: 7.3,
    ratingLabel: "Fair",
    votes: "16,388",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Limited Offer: $100 Off With Code BEST2025",
      "Personalized & Affordable Medication Options",
      "No Evaluation or Membership Fees",
      "Get Access to Ozempic, Semaglutide & Tirzepatide",
    ],
    url: "https://www.clinicsecret.com/",
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 9.5) return "text-emerald-600";
  if (rating >= 9.0) return "text-teal-600";
  if (rating >= 8.0) return "text-primary";
  return "text-amber-600";
}

export function ProviderList() {
  return (
    <section className="py-8">
      <div className="space-y-6">
        {providers.map((provider) => (
          <TrackedLink
            key={provider.name}
            href={`${provider.url}${UTM_PARAMS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            providerSlug={provider.slug}
            providerName={provider.name}
            position={provider.rank}
            elementType="card_click"
          >
            <Card
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
                provider.rank === 1
                  ? "border-primary shadow-xl ring-2 ring-primary/30 scale-[1.02] relative"
                  : provider.rank === 2
                  ? "border-teal-500/50 ring-1 ring-teal-500/20"
                  : provider.rank === 3
                  ? "border-emerald-500/50 ring-1 ring-emerald-500/20"
                  : "border-border/50"
              }`}
            >
              {/* #1 Provider Banner */}
              {provider.rank === 1 && (
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-3 text-sm font-semibold flex items-center justify-center gap-2">
                  <Crown className="h-5 w-5" />
                  #1 RECOMMENDED PROVIDER - EDITOR'S CHOICE
                  <Crown className="h-5 w-5" />
                </div>
              )}
              <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Rank & Rating Section */}
                <div className="flex items-center gap-4 p-6 lg:w-64 lg:flex-col lg:justify-center lg:border-r lg:border-border/50 bg-muted/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    #{provider.rank}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">
                      {provider.name}
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className={`text-xl font-bold ${getRatingColor(provider.rating)}`}>
                        {provider.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">/10</span>
                    </div>
                    <div className={`text-sm font-medium ${getRatingColor(provider.rating)}`}>
                      {provider.ratingLabel}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {provider.badge && (
                      <Badge className={provider.badgeColor}>
                        {provider.badge}
                      </Badge>
                    )}
                    {provider.visitsToday && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <TrendingUp className="h-4 w-4" />
                        <span>{provider.visitsToday} visitors today</span>
                      </div>
                    )}
                  </div>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    {provider.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="flex items-center justify-center p-6 lg:w-48 lg:border-l lg:border-border/50 bg-muted/20">
                  <Button size="lg" className="w-full gap-2 cursor-pointer">
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              </CardContent>
            </Card>
          </TrackedLink>
        ))}
      </div>

      {/* Our Top Choice Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              OUR TOP CHOICE
            </h2>
            <Award className="h-8 w-8 text-primary" />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            After extensive research and analysis, we recommend CoreAge Rx as the best weight loss program available.
          </p>
        </div>

        <TrackedLink
          href={`https://get.coreagerx.com/home/${UTM_PARAMS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          providerSlug="coreage-rx"
          providerName="CoreAge Rx"
          position={1}
          elementType="top_choice"
        >
          <Card className="border-primary shadow-2xl ring-2 ring-primary/30 overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-4 text-lg font-bold flex items-center justify-center gap-3">
              <Crown className="h-6 w-6" />
              COREAGE RX - #1 RECOMMENDED
              <Crown className="h-6 w-6" />
            </div>
            <CardContent className="p-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      #1
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">CoreAge Rx</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold text-emerald-600">9.9</span>
                        <span className="text-muted-foreground">/10 Outstanding</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    CoreAge Rx stands out as our top recommendation for weight loss treatment. With their premium GLP-1 program,
                    FDA-approved medications, and personalized treatment plans from board-certified physicians, they offer the
                    complete package for achieving your weight loss goals.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Premium GLP-1 Weight Loss Program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">FDA-Approved Semaglutide & Tirzepatide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Personalized Treatment Plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Lose 10%–26% Body Weight Within 12 Months</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center bg-muted/30 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Why Choose CoreAge Rx?</div>
                    <div className="text-4xl font-bold text-primary mb-2">Best Overall</div>
                    <div className="text-muted-foreground">Program for Weight Loss</div>
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>FDA-Approved</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg cursor-pointer gap-2">
                    Get Started with CoreAge Rx
                    <ExternalLink className="h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Join thousands of satisfied customers who have transformed their lives
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TrackedLink>
      </div>
    </section>
  );
}
