"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Check, Star, Truck, Clock, Shield, Award, ExternalLink } from "lucide-react";

const UTM_PARAMS = "?utm_source=rxsaverhub&utm_medium=affiliate&utm_campaign=weight_loss";

const providers = [
  {
    rank: 2,
    slug: "mochi-health",
    name: "Mochi Health",
    tagline: "Meds start at $99/mo, No Long-Term Commitment",
    rating: 4.4,
    features: [
      "Book a Live Video Visit in 5 Minutes",
      "Reliable GLP-1 Prescription Access, All 50 states",
      "24/7 Support + Ongoing Appointments",
      "No Long-Term Commitment Required",
    ],
    badge: "Best Value",
    badgeColor: "bg-teal-500 text-white",
    url: "https://www.joinmochi.com/",
    featured: false,
  },
  {
    rank: 1,
    slug: "coreage-rx",
    name: "CoreAge Rx",
    tagline: "Premium GLP-1 Weight Loss Program",
    rating: 5.0,
    features: [
      "FDA-approved GLP-1 medications",
      "Personalized treatment plans",
      "Board-certified physicians",
      "Lose 10%–26% Body Weight Within 12 Months",
    ],
    offer: "Starting at $99/mo",
    badge: "Most Popular",
    badgeColor: "bg-primary text-primary-foreground",
    url: "https://get.coreagerx.com/home22/",
    featured: true,
  },
  {
    rank: 3,
    slug: "ro",
    name: "Ro",
    tagline: "December Sale: Get Started Online for Just $45",
    rating: 4.3,
    features: [
      "FDA-Approved GLP-1s at Half the Usual Price",
      "Access to Ozempic®, Tirzepatide & Semaglutide",
      "Lose 10%–26% Body Weight Within 12 Months",
      "Board-certified physicians",
    ],
    badge: "Top Rated",
    badgeColor: "bg-emerald-500 text-white",
    url: "https://www.ro.co/weight-loss/",
    featured: false,
  },
];

// Sort for mobile: featured (CoreAge) first
const mobileProviders = [...providers].sort((a, b) => {
  if (a.featured) return -1;
  if (b.featured) return 1;
  return a.rank - b.rank;
});

export function ProviderCards() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-warm-50/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Top <span className="text-primary">Providers</span> Reviewed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our experts have analyzed the leading weight loss treatment providers
            to help you find the perfect fit.
          </p>
        </div>

        {/* Desktop Layout - CoreAge in middle */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-end pt-8">
          {providers.map((provider) => (
            <Card
              key={provider.name}
              className={`relative transition-all duration-300 hover:shadow-xl ${
                provider.featured
                  ? "border-primary shadow-2xl ring-2 ring-primary/30 scale-105 z-10"
                  : "border-border/50 hover:-translate-y-1 overflow-hidden"
              }`}
            >
              {/* Featured Crown/Award for #1 */}
              {provider.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              )}

              {/* Rank Badge */}
              <div className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                provider.featured
                  ? "bg-primary text-primary-foreground h-12 w-12 text-lg"
                  : "bg-muted text-muted-foreground"
              }`}>
                #{provider.rank}
              </div>

              {/* Provider Badge */}
              <Badge
                className={`absolute top-4 right-4 ${provider.badgeColor} ${
                  provider.featured ? "text-sm px-3 py-1" : ""
                }`}
              >
                {provider.badge}
              </Badge>

              <CardHeader className={`pb-4 ${provider.featured ? "pt-20" : "pt-16"}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-foreground ${
                    provider.featured ? "text-3xl" : "text-2xl"
                  }`}>
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className={`fill-yellow-400 text-yellow-400 ${
                      provider.featured ? "h-6 w-6" : "h-5 w-5"
                    }`} />
                    <span className={`font-semibold ${provider.featured ? "text-lg" : ""}`}>
                      {provider.rating}
                    </span>
                  </div>
                </div>
                <p className={`text-primary font-medium mt-1 ${
                  provider.featured ? "text-base" : ""
                }`}>
                  {provider.tagline}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {provider.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`text-primary shrink-0 mt-0.5 ${
                        provider.featured ? "h-6 w-6" : "h-5 w-5"
                      }`} />
                      <span className={`text-muted-foreground ${
                        provider.featured ? "text-base" : "text-sm"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Fast Start</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className={`flex flex-col gap-3 pt-4 ${
                provider.featured ? "bg-primary/10" : "bg-muted/30"
              }`}>
                {provider.offer && (
                  <div className="text-center w-full">
                    <span className={`font-bold text-foreground ${
                      provider.featured ? "text-3xl" : "text-2xl"
                    }`}>
                      {provider.offer}
                    </span>
                  </div>
                )}
                <Button
                  className={`w-full cursor-pointer ${provider.featured ? "h-14 text-lg" : ""}`}
                  size="lg"
                  asChild
                >
                  <TrackedLink
                    href={`${provider.url}${UTM_PARAMS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    providerSlug={provider.slug}
                    providerName={provider.name}
                    position={provider.rank}
                    elementType="card_click"
                  >
                    Get Started with {provider.name}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </TrackedLink>
                </Button>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>FDA-approved treatments</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - CoreAge first */}
        <div className="lg:hidden grid gap-6">
          {mobileProviders.map((provider) => (
            <Card
              key={provider.name}
              className={`relative overflow-hidden transition-all duration-300 ${
                provider.featured
                  ? "border-primary shadow-xl ring-2 ring-primary/30"
                  : "border-border/50"
              }`}
            >
              {/* Featured Banner for #1 on mobile */}
              {provider.featured && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                  <Award className="h-4 w-4" />
                  #1 Recommended Provider
                </div>
              )}

              {/* Rank Badge */}
              <div className={`absolute left-4 flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                provider.featured
                  ? "bg-primary text-primary-foreground top-14"
                  : "bg-muted text-muted-foreground top-4"
              }`}>
                #{provider.rank}
              </div>

              {/* Provider Badge */}
              <Badge
                className={`absolute right-4 ${provider.badgeColor} ${
                  provider.featured ? "top-14" : "top-4"
                }`}
              >
                {provider.badge}
              </Badge>

              <CardHeader className={`pb-4 ${provider.featured ? "pt-20" : "pt-16"}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-foreground ${
                    provider.featured ? "text-2xl" : "text-xl"
                  }`}>
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{provider.rating}</span>
                  </div>
                </div>
                <p className="text-primary font-medium mt-1 text-sm">
                  {provider.tagline}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <ul className="space-y-2">
                  {provider.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Fast Start</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className={`flex flex-col gap-3 pt-4 ${
                provider.featured ? "bg-primary/10" : "bg-muted/30"
              }`}>
                {provider.offer && (
                  <div className="text-center w-full">
                    <span className="text-2xl font-bold text-foreground">
                      {provider.offer}
                    </span>
                  </div>
                )}
                <Button
                  className={`w-full cursor-pointer ${provider.featured ? "h-12" : ""}`}
                  size="lg"
                  asChild
                >
                  <TrackedLink
                    href={`${provider.url}${UTM_PARAMS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    providerSlug={provider.slug}
                    providerName={provider.name}
                    position={provider.rank}
                    elementType="card_click"
                  >
                    Get Started with {provider.name}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </TrackedLink>
                </Button>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>FDA-approved treatments</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
