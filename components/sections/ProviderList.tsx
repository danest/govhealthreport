"use client";

import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Check, Star, ExternalLink, Award, Crown, Shield, TrendingUp, AlertTriangle } from "lucide-react";

const UTM_PARAMS = "?utm_source=govhealthreport&utm_medium=affiliate&utm_campaign=weight_loss";

const providers = [
  {
    rank: 1,
    name: "CoreAge Rx",
    slug: "coreage-rx",
    rating: 9.8,
    ratingLabel: "Outstanding",
    votes: "32,847",
    visitsToday: "2,156",
    badge: "Editor's Choice",
    badgeColor: "bg-[#ffc72c] text-[#003366]",
    highlights: [
      "Premium GLP-1 Weight Loss Program",
      "FDA-Approved Semaglutide & Tirzepatide",
      "Personalized Treatment Plans with Board-Certified Physicians",
      "Lose 10%–26% Body Weight Within 12 Months",
    ],
    url: "https://app.coreagerx.com/go/sale/",
  },
  {
    rank: 2,
    name: "Henry Meds",
    slug: "henry-meds",
    rating: 9.4,
    ratingLabel: "Excellent",
    votes: "28,492",
    visitsToday: "1,847",
    badge: "Best Value",
    badgeColor: "bg-[#003366] text-white",
    highlights: [
      "Compounded GLP-1s Starting at $199/month",
      "No Hidden Fees, Free Shipping Included",
      "Licensed Physicians in All 50 States",
      "Fast Online Consultation Process",
    ],
    url: "https://www.henrymeds.com/",
  },
  {
    rank: 3,
    name: "Hims",
    slug: "hims",
    rating: 9.2,
    ratingLabel: "Excellent",
    votes: "31,205",
    visitsToday: "1,654",
    badge: "Most Popular",
    badgeColor: "bg-[#003366] text-white",
    highlights: [
      "GLP-1 Medications From $199/month",
      "Trusted by Millions of Customers",
      "Discreet Packaging & Fast Delivery",
      "24/7 Access to Healthcare Providers",
    ],
    url: "https://www.forhims.com/",
  },
  {
    rank: 4,
    name: "Found",
    slug: "found",
    rating: 8.9,
    ratingLabel: "Very Good",
    votes: "24,118",
    visitsToday: "1,203",
    badge: null,
    badgeColor: "",
    highlights: [
      "Personalized Weight Loss Programs",
      "Board-Certified Obesity Medicine Doctors",
      "Behavior Change Coaching Included",
      "Multiple Medication Options Available",
    ],
    url: "https://www.joinfound.com/",
  },
  {
    rank: 5,
    name: "Juniper",
    slug: "juniper",
    rating: 8.7,
    ratingLabel: "Very Good",
    votes: "19,847",
    visitsToday: "987",
    badge: null,
    badgeColor: "",
    highlights: [
      "Holistic Weight Management Approach",
      "Dietitian Support Included",
      "Semaglutide & Tirzepatide Available",
      "Ongoing Health Coaching Sessions",
    ],
    url: "https://www.myjuniper.com/",
  },
  {
    rank: 6,
    name: "LifeMD",
    slug: "lifemd",
    rating: 8.5,
    ratingLabel: "Very Good",
    votes: "22,651",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Complete Telehealth Platform",
      "GLP-1 Weight Loss Programs",
      "Virtual Doctor Visits Available",
      "Prescription Delivered to Your Door",
    ],
    url: "https://www.lifemd.com/",
  },
  {
    rank: 7,
    name: "Sesame",
    slug: "sesame",
    rating: 8.3,
    ratingLabel: "Good",
    votes: "18,994",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Affordable Doctor Consultations",
      "Compare Prices Across Providers",
      "GLP-1 Prescriptions Available",
      "No Membership Fees Required",
    ],
    url: "https://www.sesamecare.com/",
  },
  {
    rank: 8,
    name: "Teladoc",
    slug: "teladoc",
    rating: 8.1,
    ratingLabel: "Good",
    votes: "26,773",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Established Telehealth Leader",
      "Weight Management Programs",
      "Insurance Often Accepted",
      "Licensed Physicians Nationwide",
    ],
    url: "https://www.teladoc.com/",
  },
  {
    rank: 9,
    name: "Fella Health",
    slug: "fella-health",
    rating: 7.8,
    ratingLabel: "Good",
    votes: "15,882",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Men's Weight Loss Specialists",
      "GLP-1 Medications Available",
      "Metabolic Health Focus",
      "Personalized Treatment Plans",
    ],
    url: "https://www.fellahealth.com/",
  },
  {
    rank: 10,
    name: "Form Health",
    slug: "form-health",
    rating: 7.6,
    ratingLabel: "Good",
    votes: "14,205",
    visitsToday: null,
    badge: null,
    badgeColor: "",
    highlights: [
      "Medical Weight Loss Program",
      "Board-Certified Doctors",
      "Insurance May Be Accepted",
      "Comprehensive Health Approach",
    ],
    url: "https://www.formhealth.co/",
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 9.5) return "text-[#003366]";
  if (rating >= 9.0) return "text-[#003366]";
  if (rating >= 8.0) return "text-[#003366]";
  return "text-[#003366]";
}

export function ProviderList() {
  return (
    <section className="py-8">
      {/* Section Header */}
      <div className="bg-[#003366] text-white px-4 py-3 rounded-t-lg flex items-center gap-2 mb-0">
        <Award className="h-5 w-5 text-[#ffc72c]" />
        <span className="font-medium">Top 10 Weight Loss Providers - December 2025 Rankings</span>
      </div>

      <div className="space-y-0 border-2 border-[#003366] border-t-0 rounded-b-lg overflow-hidden">
        {providers.map((provider, index) => (
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
            <div
              className={`transition-all duration-300 hover:bg-[#e8eef4] cursor-pointer ${
                provider.rank === 1
                  ? "bg-[#ffc72c]/10 border-b-2 border-[#ffc72c]"
                  : index < providers.length - 1
                  ? "bg-white border-b border-[#003366]/20"
                  : "bg-white"
              }`}
            >
              {/* #1 Provider Banner */}
              {provider.rank === 1 && (
                <div className="bg-[#003366] text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                  <Crown className="h-4 w-4 text-[#ffc72c]" />
                  <span>#1 RECOMMENDED PROVIDER - EDITOR'S CHOICE</span>
                  <Crown className="h-4 w-4 text-[#ffc72c]" />
                </div>
              )}

              <div className="flex flex-col lg:flex-row">
                {/* Rank & Rating Section */}
                <div className="flex items-center gap-4 p-4 lg:w-56 lg:flex-col lg:justify-center lg:border-r lg:border-[#003366]/20">
                  <div className={`flex h-12 w-12 items-center justify-center rounded text-xl font-bold ${
                    provider.rank === 1
                      ? "bg-[#ffc72c] text-[#003366]"
                      : provider.rank <= 3
                      ? "bg-[#003366] text-white"
                      : "bg-[#e8eef4] text-[#003366]"
                  }`}>
                    #{provider.rank}
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#003366]">
                      {provider.name}
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-[#ffc72c] text-[#ffc72c]" />
                      <span className={`text-lg font-bold ${getRatingColor(provider.rating)}`}>
                        {provider.rating}
                      </span>
                      <span className="text-xs text-gray-500">/10</span>
                    </div>
                    <div className="text-xs font-medium text-gray-600">
                      {provider.ratingLabel}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {provider.badge && (
                      <span className={`text-xs font-bold px-2 py-1 rounded ${provider.badgeColor}`}>
                        {provider.badge}
                      </span>
                    )}
                    {provider.visitsToday && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <TrendingUp className="h-3 w-3" />
                        <span>{provider.visitsToday} visitors today</span>
                      </div>
                    )}
                    <span className="text-xs text-gray-500">
                      {provider.votes} reviews
                    </span>
                  </div>

                  <ul className="grid gap-1 sm:grid-cols-2">
                    {provider.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#003366] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="flex items-center justify-center p-4 lg:w-40 lg:border-l lg:border-[#003366]/20">
                  <Button
                    size="default"
                    className={`w-full gap-2 cursor-pointer ${
                      provider.rank === 1
                        ? "bg-[#ffc72c] text-[#003366] hover:bg-[#e6b327]"
                        : "bg-[#003366] text-white hover:bg-[#004080]"
                    }`}
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TrackedLink>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-4 bg-[#e8eef4] border border-[#003366] p-3 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-[#003366] shrink-0 mt-0.5" />
          <p className="text-xs text-[#003366]">
            <strong>Disclosure:</strong> Rankings may be influenced by compensation. We may earn a commission when you click links on this page.
            This is an independent review site and is NOT affiliated with any government agency.
          </p>
        </div>
      </div>

      {/* Our Top Choice Section */}
      <div className="mt-12">
        <div className="bg-[#003366] text-white px-4 py-3 rounded-t-lg flex items-center justify-center gap-2">
          <Award className="h-5 w-5 text-[#ffc72c]" />
          <span className="font-bold">OUR TOP CHOICE</span>
          <Award className="h-5 w-5 text-[#ffc72c]" />
        </div>

        <TrackedLink
          href={`https://app.coreagerx.com/go/sale/${UTM_PARAMS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          providerSlug="coreage-rx"
          providerName="CoreAge Rx"
          position={1}
          elementType="top_choice"
        >
          <div className="border-2 border-[#003366] border-t-0 rounded-b-lg overflow-hidden bg-white cursor-pointer hover:bg-[#f5f7fa] transition-all duration-300">
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded bg-[#ffc72c] text-xl font-bold text-[#003366]">
                      #1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#003366]">CoreAge Rx</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="h-4 w-4 fill-[#ffc72c] text-[#ffc72c]" />
                        <span className="text-lg font-bold text-[#003366]">9.8</span>
                        <span className="text-gray-500">/10 Outstanding</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm">
                    CoreAge Rx stands out as our top recommendation for weight loss treatment. With their premium GLP-1 program,
                    FDA-approved medications, and personalized treatment plans from board-certified physicians, they offer the
                    complete package for achieving your weight loss goals.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                      <span className="text-[#003366] font-medium text-sm">Premium GLP-1 Weight Loss Program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                      <span className="text-[#003366] font-medium text-sm">FDA-Approved Semaglutide & Tirzepatide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                      <span className="text-[#003366] font-medium text-sm">Personalized Treatment Plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                      <span className="text-[#003366] font-medium text-sm">Lose 10%–26% Body Weight Within 12 Months</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center bg-[#e8eef4] rounded-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-xs text-gray-600 mb-1">Why Choose CoreAge Rx?</div>
                    <div className="text-2xl font-bold text-[#003366] mb-1">Best Overall</div>
                    <div className="text-sm text-gray-600">Program for Weight Loss</div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                    <Shield className="h-4 w-4 text-[#003366]" />
                    <span>FDA-Approved Medications</span>
                  </div>

                  <Button size="lg" className="w-full bg-[#ffc72c] text-[#003366] hover:bg-[#e6b327] cursor-pointer gap-2 font-bold">
                    Get Started with CoreAge Rx
                    <ExternalLink className="h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Join thousands of satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TrackedLink>
      </div>
    </section>
  );
}
