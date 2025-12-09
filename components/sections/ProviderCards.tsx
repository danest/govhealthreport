"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Check, Star, Truck, Clock, Shield, Award, ExternalLink, FileCheck, ClipboardCheck } from "lucide-react";

const UTM_PARAMS = "?utm_source=govhealthreport&utm_medium=affiliate&utm_campaign=weight_loss";

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
    badge: "Verified Provider",
    badgeColor: "bg-[#003366] text-white",
    url: "https://www.joinmochi.com/",
    featured: false,
    status: "Active",
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
    badge: "Top Assessed",
    badgeColor: "bg-[#ffc72c] text-[#003366]",
    url: "https://get.coreagerx.com/home22/",
    featured: true,
    status: "Active",
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
    badge: "Verified Provider",
    badgeColor: "bg-[#003366] text-white",
    url: "https://www.ro.co/weight-loss/",
    featured: false,
    status: "Active",
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
    <section className="py-12 bg-gradient-to-b from-[#e8eef4] to-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Government-style Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
              <ClipboardCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                Verified Provider Directory
              </h2>
              <p className="text-sm text-gray-600">
                Independent Assessments • Updated December 2024
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-[#ffc72c] mb-4" />
          <p className="text-gray-600 max-w-2xl">
            The following providers have been independently assessed for regulatory compliance,
            treatment protocols, and consumer satisfaction. Assessment rankings are based on
            documented criteria.
          </p>
        </div>

        {/* Assessment Status Bar */}
        <div className="bg-[#003366] text-white p-4 rounded-t-lg flex flex-wrap items-center justify-between gap-4 mb-0">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-[#ffc72c]" />
              <span>3 Providers Assessed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#ffc72c]" />
              <span>All FDA-Compliant</span>
            </div>
          </div>
          <div className="text-xs text-white/70">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
        </div>

        {/* Desktop Layout - CoreAge in middle */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-0 border-2 border-[#003366] border-t-0">
          {providers.map((provider, index) => (
            <Card
              key={provider.name}
              className={`relative rounded-none border-0 transition-all duration-300 ${
                provider.featured
                  ? "bg-[#e8f4fd] ring-inset ring-2 ring-[#ffc72c]"
                  : "bg-white"
              } ${index < providers.length - 1 ? "border-r-2 border-[#003366]" : ""}`}
            >
              {/* Featured Banner for #1 */}
              {provider.featured && (
                <div className="bg-[#ffc72c] text-[#003366] text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                  <Award className="h-4 w-4" />
                  HIGHEST RATED PROVIDER
                </div>
              )}

              {/* Status Bar */}
              <div className={`flex items-center justify-between px-4 py-2 text-xs font-medium ${
                provider.featured ? "bg-[#003366] text-white" : "bg-[#e8eef4] text-[#003366]"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="font-bold">RANK #{provider.rank}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{provider.status}</span>
                </div>
              </div>

              <CardHeader className="pb-4 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={provider.badgeColor}>
                    {provider.badge}
                  </Badge>
                  <div className="flex items-center gap-1 bg-[#003366] text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-[#ffc72c] text-[#ffc72c]" />
                    <span className="font-semibold">{provider.rating}</span>
                  </div>
                </div>
                <h3 className={`font-bold text-[#003366] ${
                  provider.featured ? "text-2xl" : "text-xl"
                }`}>
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {provider.tagline}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="text-xs font-semibold text-[#003366] uppercase tracking-wide mb-3">
                  Verified Features
                </div>
                <ul className="space-y-2">
                  {provider.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-gray-600">
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

              <CardFooter className={`flex flex-col gap-3 pt-4 border-t-2 ${
                provider.featured ? "bg-[#003366] border-[#ffc72c]" : "bg-[#e8eef4] border-[#003366]"
              }`}>
                {provider.offer && (
                  <div className="text-center w-full">
                    <span className={`text-2xl font-bold ${
                      provider.featured ? "text-[#ffc72c]" : "text-[#003366]"
                    }`}>
                      {provider.offer}
                    </span>
                  </div>
                )}
                <Button
                  className={`w-full cursor-pointer ${
                    provider.featured
                      ? "bg-[#ffc72c] text-[#003366] hover:bg-[#ffda6a] h-12"
                      : "bg-[#003366] hover:bg-[#004080]"
                  }`}
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
                    Access Provider
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </TrackedLink>
                </Button>
                <div className={`flex items-center justify-center gap-1 text-xs ${
                  provider.featured ? "text-white/70" : "text-muted-foreground"
                }`}>
                  <Shield className="h-3 w-3" />
                  <span>FDA-Compliant Provider</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - CoreAge first */}
        <div className="lg:hidden space-y-4 border-2 border-[#003366] border-t-0 p-4 bg-white">
          {mobileProviders.map((provider) => (
            <Card
              key={provider.name}
              className={`relative overflow-hidden transition-all duration-300 border-2 ${
                provider.featured
                  ? "border-[#ffc72c] bg-[#e8f4fd]"
                  : "border-[#003366]"
              }`}
            >
              {/* Featured Banner for #1 on mobile */}
              {provider.featured && (
                <div className="bg-[#ffc72c] text-[#003366] text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                  <Award className="h-4 w-4" />
                  HIGHEST RATED PROVIDER
                </div>
              )}

              {/* Status Bar */}
              <div className={`flex items-center justify-between px-4 py-2 text-xs font-medium ${
                provider.featured ? "bg-[#003366] text-white" : "bg-[#e8eef4] text-[#003366]"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="font-bold">RANK #{provider.rank}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{provider.status}</span>
                </div>
              </div>

              <CardHeader className="pb-4 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={provider.badgeColor}>
                    {provider.badge}
                  </Badge>
                  <div className="flex items-center gap-1 bg-[#003366] text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-[#ffc72c] text-[#ffc72c]" />
                    <span className="font-semibold">{provider.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#003366]">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {provider.tagline}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="text-xs font-semibold text-[#003366] uppercase tracking-wide mb-3">
                  Verified Features
                </div>
                <ul className="space-y-2">
                  {provider.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-gray-600">
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

              <CardFooter className={`flex flex-col gap-3 pt-4 border-t-2 ${
                provider.featured ? "bg-[#003366] border-[#ffc72c]" : "bg-[#e8eef4] border-[#003366]"
              }`}>
                {provider.offer && (
                  <div className="text-center w-full">
                    <span className={`text-2xl font-bold ${
                      provider.featured ? "text-[#ffc72c]" : "text-[#003366]"
                    }`}>
                      {provider.offer}
                    </span>
                  </div>
                )}
                <Button
                  className={`w-full cursor-pointer ${
                    provider.featured
                      ? "bg-[#ffc72c] text-[#003366] hover:bg-[#ffda6a] h-12"
                      : "bg-[#003366] hover:bg-[#004080]"
                  }`}
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
                    Access Provider
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </TrackedLink>
                </Button>
                <div className={`flex items-center justify-center gap-1 text-xs ${
                  provider.featured ? "text-white/70" : "text-muted-foreground"
                }`}>
                  <Shield className="h-3 w-3" />
                  <span>FDA-Compliant Provider</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Assessment Methodology Notice */}
        <div className="mt-6 p-4 bg-[#e8eef4] border border-[#003366] rounded-lg">
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-[#003366] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <strong className="text-[#003366]">Assessment Methodology:</strong> Providers are assessed based on
              FDA compliance status, physician credentials, treatment protocols, pricing transparency, and
              verified consumer reviews. See our{" "}
              <a href="/disclosure" className="text-[#003366] underline hover:text-[#004080]">
                Disclosure
              </a>{" "}
              for complete methodology details.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
