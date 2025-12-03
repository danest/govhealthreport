export const UTM_PARAMS = "?utm_source=rxsaverhub&utm_medium=affiliate&utm_campaign=weight_loss";

export interface Provider {
  rank: number;
  name: string;
  slug: string;
  rating: number;
  ratingLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  badge: string | null;
  badgeColor: string;
  url: string;
  pros: string[];
  cons: string[];
  features: string[];
  pricing: string;
  bestFor: string;
}

export const providers: Provider[] = [
  {
    rank: 1,
    name: "CoreAge Rx",
    slug: "coreage-rx",
    rating: 9.9,
    ratingLabel: "Outstanding",
    tagline: "Premium GLP-1 Weight Loss Program",
    description: "Premium GLP-1 weight loss program with personalized treatment plans from board-certified physicians.",
    longDescription: "CoreAge Rx stands out as our top recommendation for weight loss treatment. With their premium GLP-1 program, FDA-approved medications, and personalized treatment plans from board-certified physicians, they offer the complete package for achieving your weight loss goals. Their comprehensive approach combines medical expertise with ongoing support to help you achieve sustainable results.",
    badge: "Editor's Choice",
    badgeColor: "bg-primary text-primary-foreground",
    url: "https://get.coreagerx.com/home/",
    pros: [
      "FDA-approved GLP-1 medications",
      "Personalized treatment plans",
      "Board-certified physicians",
      "Comprehensive medical support",
      "Proven results: 10-26% body weight loss"
    ],
    cons: [
      "Premium pricing compared to some alternatives",
      "Requires medical evaluation"
    ],
    features: [
      "FDA-Approved Semaglutide & Tirzepatide",
      "Personalized Treatment Plans",
      "Board-Certified Physicians",
      "Ongoing Medical Support",
      "Free Shipping"
    ],
    pricing: "Contact for pricing",
    bestFor: "Those seeking a premium, comprehensive weight loss program with personalized medical care"
  },
  {
    rank: 2,
    name: "Mochi Health",
    slug: "mochi-health",
    rating: 8.8,
    ratingLabel: "Very Good",
    tagline: "Meds start at $99/mo, No Long-Term Commitment",
    description: "Affordable GLP-1 access starting at $99/mo with live video visits and 24/7 support.",
    longDescription: "Mochi Health offers an accessible entry point to GLP-1 weight loss treatment with their affordable pricing starting at just $99 per month. Their platform makes it easy to connect with doctors through live video visits, and they provide 24/7 support to ensure you're never alone on your weight loss journey. With no long-term commitment required, it's a flexible option for those looking to try GLP-1 medications.",
    badge: "Best Value",
    badgeColor: "bg-teal-500 text-white",
    url: "https://www.joinmochi.com/",
    pros: [
      "Affordable starting price of $99/mo",
      "No long-term commitment required",
      "Live video visits with doctors",
      "24/7 support available",
      "Available in all 50 states"
    ],
    cons: [
      "Newer platform compared to established providers",
      "Limited medication options"
    ],
    features: [
      "Starting at $99/month",
      "Live Video Doctor Visits",
      "24/7 Support",
      "No Long-Term Commitment",
      "All 50 States Coverage"
    ],
    pricing: "Starting at $99/month",
    bestFor: "Budget-conscious individuals looking for affordable GLP-1 access without long-term commitments"
  },
  {
    rank: 3,
    name: "Ro",
    slug: "ro",
    rating: 8.6,
    ratingLabel: "Very Good",
    tagline: "December Sale: Get Started Online for Just $45",
    description: "FDA-approved GLP-1s at competitive prices with access to Ozempic®, Tirzepatide & Semaglutide.",
    longDescription: "Ro has established itself as a trusted name in telehealth, and their weight loss program lives up to that reputation. They offer FDA-approved GLP-1 medications at competitive prices, with access to brand names like Ozempic®, as well as Tirzepatide and Semaglutide. Their platform is user-friendly, and they offer ongoing support from board-certified physicians throughout your weight loss journey.",
    badge: "Top Rated",
    badgeColor: "bg-emerald-500 text-white",
    url: "https://www.ro.co/weight-loss/",
    pros: [
      "Established, trusted telehealth brand",
      "Access to multiple GLP-1 options",
      "Competitive pricing starting at $45",
      "Board-certified physicians",
      "User-friendly platform"
    ],
    cons: [
      "Some medications may have availability issues",
      "Insurance not always accepted"
    ],
    features: [
      "FDA-Approved GLP-1s",
      "Access to Ozempic®, Tirzepatide & Semaglutide",
      "Board-Certified Physicians",
      "Online Platform",
      "Ongoing Support"
    ],
    pricing: "Starting at $45/month",
    bestFor: "Those who value an established telehealth provider with multiple medication options"
  },
  {
    rank: 4,
    name: "Noom",
    slug: "noom",
    rating: 8.4,
    ratingLabel: "Good",
    tagline: "December Sale: Starting at $99 — No Insurance Required",
    description: "Online prescriptions with psychology-based approach and microdose options available.",
    longDescription: "Noom brings a unique psychology-based approach to weight loss, combining their proven behavior change methodology with GLP-1 medications. Their platform offers microdose options for those who want to minimize side effects, and their comprehensive app provides ongoing coaching and support. No insurance is required, making it accessible to a wide range of patients.",
    badge: null,
    badgeColor: "",
    url: "https://www.noom.com/",
    pros: [
      "Psychology-based approach",
      "Microdose options available",
      "Comprehensive app with coaching",
      "No insurance required",
      "24/7 support available"
    ],
    cons: [
      "May be more expensive than basic alternatives",
      "App-centric approach not for everyone"
    ],
    features: [
      "Psychology-Based Weight Loss",
      "Microdose Options",
      "Comprehensive App",
      "24/7 Support",
      "No Insurance Required"
    ],
    pricing: "Starting at $99/month",
    bestFor: "Those who want a holistic approach combining behavior change with medication"
  },
  {
    rank: 5,
    name: "Remedy Meds",
    slug: "remedy-meds",
    rating: 8.3,
    ratingLabel: "Good",
    tagline: "Lock in $199 for Life - Limited Time Offer",
    description: "Lock in $199 for life pricing with America's trusted GLP-1 program.",
    longDescription: "Remedy Meds offers a unique value proposition with their price-lock guarantee. Once you sign up, your monthly rate stays at $199 forever, protecting you from future price increases. They've built a reputation as one of America's trusted GLP-1 programs, offering free expert consultations and comprehensive support throughout your treatment.",
    badge: null,
    badgeColor: "",
    url: "https://www.remedymeds.com/",
    pros: [
      "Price lock guarantee at $199/month",
      "Free expert consultation",
      "Trusted GLP-1 program",
      "Lifetime savings potential",
      "Comprehensive support"
    ],
    cons: [
      "Higher initial price point",
      "Limited promotional flexibility"
    ],
    features: [
      "$199/Month Price Lock",
      "Free Expert Consultation",
      "Lifetime Monthly Savings",
      "America's Trusted Program",
      "Comprehensive Support"
    ],
    pricing: "$199/month (locked for life)",
    bestFor: "Those looking for long-term price stability and willing to commit to a program"
  },
  {
    rank: 6,
    name: "Hers",
    slug: "hers",
    rating: 8.1,
    ratingLabel: "Good",
    tagline: "Monthly Plans Starting at $69/Mo",
    description: "Monthly plans starting at $69/mo with treatment options including Ozempic®, Wegovy®, and more.",
    longDescription: "Hers offers one of the most affordable entry points to GLP-1 weight loss treatment, with monthly plans starting at just $69. Their platform provides access to a wide range of treatment options including Ozempic®, Wegovy®, Mounjaro®, and Zepbound®. With $0 membership fees and 24/7 access to licensed providers through their app, it's a convenient option for busy individuals.",
    badge: null,
    badgeColor: "",
    url: "https://www.forhers.com/",
    pros: [
      "Low starting price of $69/month",
      "$0 membership fees",
      "Wide range of medication options",
      "24/7 app access to providers",
      "Flexible 1-12 month plans"
    ],
    cons: [
      "Primarily focused on women's health",
      "Some medications may require higher tiers"
    ],
    features: [
      "Starting at $69/Month",
      "$0 Membership Fees",
      "Multiple Medication Options",
      "24/7 Provider Access",
      "Flexible Plan Lengths"
    ],
    pricing: "Starting at $69/month",
    bestFor: "Women looking for affordable, flexible weight loss treatment options"
  },
  {
    rank: 7,
    name: "MEDVI",
    slug: "medvi",
    rating: 7.9,
    ratingLabel: "Good",
    tagline: "Special Offer: Save $120 + Free Shipping",
    description: "Simple online process with no clinic visits and 24/7 certified medical support.",
    longDescription: "MEDVI simplifies the weight loss medication process with their streamlined online platform. You can get started without any clinic visits, and their 24/7 certified medical professionals are available whenever you need support. They offer the same active ingredients found in Wegovy® and Ozempic® at competitive prices, with free shipping included.",
    badge: null,
    badgeColor: "",
    url: "https://www.medvii.com/",
    pros: [
      "Simple online process",
      "No clinic visits required",
      "24/7 medical support",
      "Same ingredients as brand names",
      "Free shipping included"
    ],
    cons: [
      "Less established than some competitors",
      "Limited brand-name options"
    ],
    features: [
      "No Clinic Visits Required",
      "24/7 Medical Support",
      "Wegovy® & Ozempic® Ingredients",
      "Free Shipping",
      "Special Savings Available"
    ],
    pricing: "Save $120 with special offer",
    bestFor: "Those who prefer a simple, fully online process with no in-person visits"
  },
  {
    rank: 8,
    name: "Eden",
    slug: "eden",
    rating: 7.7,
    ratingLabel: "Good",
    tagline: "Save $100 on Your First Order with SAVE100",
    description: "Same price every dose with no hidden fees and licensed medical professional supervision.",
    longDescription: "Eden stands out for their transparent pricing model - you pay the same price for every dose with no hidden fees or surprise charges. All treatments are supervised by licensed medical professionals, and they offer free expedited shipping. Their straightforward approach makes it easy to budget for your weight loss treatment without worrying about escalating costs.",
    badge: null,
    badgeColor: "",
    url: "https://www.edenhealth.com/",
    pros: [
      "Transparent, consistent pricing",
      "No hidden fees",
      "Licensed medical supervision",
      "Free expedited shipping",
      "$100 off first order available"
    ],
    cons: [
      "Fewer promotional offers",
      "Limited medication variety"
    ],
    features: [
      "Same Price Every Dose",
      "No Hidden Fees",
      "Licensed Medical Professionals",
      "Free Expedited Shipping",
      "First Order Discount"
    ],
    pricing: "Starting from $196 (save $100 on first order)",
    bestFor: "Those who value transparent pricing with no surprises"
  },
  {
    rank: 9,
    name: "MyStart",
    slug: "mystart",
    rating: 7.5,
    ratingLabel: "Good",
    tagline: "Exclusive Offer: Save $120 + Free Shipping",
    description: "Access to 600+ US-based doctors with no membership fees and compounded medications.",
    longDescription: "MyStart provides access to a network of over 600 US-based doctors, ensuring you can find a provider that works for you. With no membership fees and everything included in their pricing, there are no hidden costs. They offer both compounded Semaglutide and Tirzepatide options, giving you flexibility in your treatment approach.",
    badge: null,
    badgeColor: "",
    url: "https://www.mystart.com/",
    pros: [
      "600+ US-based doctors",
      "No membership fees",
      "All-inclusive pricing",
      "Compounded medication options",
      "Free shipping available"
    ],
    cons: [
      "Compounded medications only",
      "Less brand recognition"
    ],
    features: [
      "600+ US-Based Doctors",
      "No Membership Fees",
      "All-Inclusive Pricing",
      "Compounded Semaglutide & Tirzepatide",
      "Free Shipping"
    ],
    pricing: "Save $120 with exclusive offer",
    bestFor: "Those who want access to a large network of doctors with all-inclusive pricing"
  },
  {
    rank: 10,
    name: "Clinic Secret",
    slug: "clinic-secret",
    rating: 7.3,
    ratingLabel: "Fair",
    tagline: "Limited Offer: $100 Off With Code BEST2025",
    description: "Personalized and affordable medication options with no evaluation or membership fees.",
    longDescription: "Clinic Secret offers a straightforward approach to weight loss medication with no evaluation or membership fees. Their personalized medication options include access to Ozempic, Semaglutide, and Tirzepatide. While they may not have all the bells and whistles of larger providers, their affordable pricing and no-fee structure make them an accessible option for many.",
    badge: null,
    badgeColor: "",
    url: "https://www.clinicsecret.com/",
    pros: [
      "No evaluation fees",
      "No membership fees",
      "Personalized medication options",
      "Access to multiple GLP-1s",
      "$100 off with promo code"
    ],
    cons: [
      "Less comprehensive support",
      "Fewer features than premium providers"
    ],
    features: [
      "No Evaluation Fees",
      "No Membership Fees",
      "Personalized Options",
      "Ozempic, Semaglutide & Tirzepatide",
      "Promo Code Available"
    ],
    pricing: "$100 off with code BEST2025",
    bestFor: "Budget-conscious individuals who want basic access without additional fees"
  }
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find(p => p.slug === slug);
}

export function getRatingColor(rating: number): string {
  if (rating >= 9.5) return "text-emerald-600";
  if (rating >= 9.0) return "text-teal-600";
  if (rating >= 8.0) return "text-primary";
  return "text-amber-600";
}
