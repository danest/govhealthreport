"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Check, Star, Truck, Clock, Shield, Award, ExternalLink } from "lucide-react";

const UTM_PARAMS = "?utm_source=govhealthreport&utm_medium=affiliate&utm_campaign=weight_loss";

const providers = [
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
    url: "https://app.coreagerx.com/go/sale/",
    featured: true,
  },
  {
    rank: 2,
    slug: "henry-meds",
    name: "Henry Meds",
    tagline: "Affordable GLP-1s Starting at $199/month",
    rating: 4.7,
    features: [
      "Compounded GLP-1s Starting at $199/month",
      "No Hidden Fees, Free Shipping Included",
      "Licensed Physicians in All 50 States",
      "Fast Online Consultation Process",
    ],
    badge: "Best Value",
    badgeColor: "bg-emerald-500 text-white",
    url: "https://www.henrymeds.com/",
    featured: false,
  },
  {
    rank: 3,
    slug: "hims",
    name: "Hims",
    tagline: "Trusted by Millions for Weight Loss",
    rating: 4.6,
    features: [
      "GLP-1 Medications From $199/month",
      "Discreet Packaging & Fast Delivery",
      "24/7 Access to Healthcare Providers",
      "Comprehensive Weight Loss Support",
    ],
    badge: "Most Trusted",
    badgeColor: "bg-blue-500 text-white",
    url: "https://www.forhims.com/",
    featured: false,
  },
];

interface Top3ProvidersProps {
  title?: string;
  subtitle?: string;
}

export function Top3Providers({
  title = "Top Recommended Providers",
  subtitle = "Our experts have analyzed the leading weight loss treatment providers to help you find the perfect fit."
}: Top3ProvidersProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-warm-50/50 to-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {providers.map((provider) => (
            <Card
              key={provider.name}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                provider.featured
                  ? "border-primary shadow-xl ring-2 ring-primary/30"
                  : "border-border/50 hover:-translate-y-1"
              }`}
            >
              {/* Featured Banner for #1 */}
              {provider.featured && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2 rounded-t-lg">
                  <Award className="h-4 w-4" />
                  #1 Recommended
                </div>
              )}

              {/* Rank Badge */}
              <div className={`absolute left-4 flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                provider.featured
                  ? "bg-primary text-primary-foreground top-12"
                  : "bg-muted text-muted-foreground top-4"
              }`}>
                #{provider.rank}
              </div>

              {/* Provider Badge */}
              <Badge
                className={`absolute right-4 ${provider.badgeColor} text-xs ${
                  provider.featured ? "top-12" : "top-4"
                }`}
              >
                {provider.badge}
              </Badge>

              <CardHeader className={`pb-3 ${provider.featured ? "pt-14" : "pt-14"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{provider.rating}</span>
                  </div>
                </div>
                <p className="text-primary font-medium text-sm mt-1">
                  {provider.tagline}
                </p>
              </CardHeader>

              <CardContent className="pb-3">
                <ul className="space-y-2">
                  {provider.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Fast Start</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className={`flex flex-col gap-2 pt-3 ${
                provider.featured ? "bg-primary/10" : "bg-muted/30"
              }`}>
                {provider.offer && (
                  <div className="text-center w-full">
                    <span className="text-xl font-bold text-foreground">
                      {provider.offer}
                    </span>
                  </div>
                )}
                <Button
                  className="w-full cursor-pointer"
                  size="default"
                  asChild
                >
                  <TrackedLink
                    href={`${provider.url}${UTM_PARAMS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    providerSlug={provider.slug}
                    providerName={provider.name}
                    position={provider.rank}
                    elementType="top_choice"
                  >
                    Get Started
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
