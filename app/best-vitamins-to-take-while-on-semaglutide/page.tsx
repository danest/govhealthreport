import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Pill, Star, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Vitamins to Take While on Semaglutide 2025 | GOV Health Report",
  description:
    "Discover the essential vitamins and supplements to take while on semaglutide. Prevent nutrient deficiencies and support your weight loss journey with proper supplementation.",
  keywords: [
    "vitamins on semaglutide",
    "semaglutide supplements",
    "Ozempic vitamins",
    "Wegovy supplements",
    "nutrient deficiency GLP-1",
    "best supplements weight loss",
  ],
};

export default function BestVitaminsOnSemaglutidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Essential Vitamins While on Semaglutide
                </h1>
                <p className="text-sm text-gray-600">
                  Nutritional Guidance • Updated December 2025
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-6">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-[#e8eef4] border-2 border-[#003366] p-6 rounded-lg">
              <h2 className="text-lg font-bold text-[#003366] mb-3">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Semaglutide treatment significantly reduces caloric intake, which may result in insufficient micronutrient consumption. Essential supplementation includes: daily multivitamin complex, vitamin B12 (1000mcg), vitamin D3 (2000-4000 IU), protein supplementation (60-100g daily target), and biotin (5000mcg) for hair health. Consult healthcare provider before beginning any supplementation regimen.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Comprehensive Weight Loss Support"
          subtitle="These providers include nutritional guidance as part of their programs."
        />

        {/* Content Section */}
        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3">
                <span className="font-medium">Section 1: Nutritional Considerations</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">
                  Why Supplementation is Critical During Semaglutide Treatment
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Semaglutide-induced appetite suppression typically results in 40-60% reduction in daily caloric intake. This dramatic decrease, while effective for weight loss, creates substantial risk for micronutrient deficiencies. Clinical observations indicate:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Protein deficiency:</strong> Insufficient protein intake (below 0.7g/lb body weight) accelerates muscle catabolism during rapid weight loss
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Vitamin B12 malabsorption:</strong> GLP-1 agonists may impair intrinsic factor production, reducing B12 absorption by up to 30%
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Hair follicle disruption:</strong> Telogen effluvium (hair shedding) affects 15-20% of patients due to nutrient deficiencies and metabolic stress
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Bone density concerns:</strong> Rapid weight loss combined with reduced calcium/vitamin D intake increases osteopenia risk
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-[#ffc72c]" />
                <span className="font-medium">Section 2: Evidence-Based Supplement Protocol</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="border-l-4 border-[#ffc72c] pl-4 bg-[#e8eef4] p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Tier 1 - Critical (Daily Required)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Comprehensive Multivitamin</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Minimum daily requirement to prevent broad-spectrum deficiencies. Select formulations containing methylated B-vitamins (methylcobalamin, methylfolate) for enhanced bioavailability. Take with largest meal of the day.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 1 tablet daily | Cost: $0.20-0.50/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Vitamin B12 (Methylcobalamin)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Critical for neurological function and red blood cell formation. GLP-1 medications demonstrate 22-30% reduction in B12 absorption rates. Sublingual or injectable forms bypass GI absorption issues. Vegetarian/vegan patients require higher monitoring frequency.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 1000-2500mcg daily | Cost: $0.10-0.30/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Protein Supplementation</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Non-negotiable for muscle preservation. Studies show patients consuming below 0.7g/lb experience 15-25% greater lean mass loss. Whey isolate (fast-absorbing), casein (slow-release), or plant blends (pea/rice combination) acceptable. Distribute across 3-4 servings daily.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Target: 60-120g total daily protein | Cost: $1.00-2.00/day</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-4 bg-green-50 p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Tier 2 - Highly Recommended</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Vitamin D3 + K2</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        78% of US population demonstrates suboptimal D3 levels (below 30ng/mL). Essential for calcium absorption, immune function, mood regulation. K2 directs calcium to bones (not arteries). Request 25-hydroxyvitamin D testing from provider.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 2000-5000 IU D3 + 100mcg K2 | Cost: $0.15-0.40/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Biotin (Vitamin B7)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Hair loss (telogen effluvium) reported in 12-18% of rapid weight loss cases. Biotin supports keratin infrastructure. Effects typically visible 90-120 days post-initiation. Note: Biotin supplementation interferes with certain lab tests (troponin, thyroid); discontinue 72 hours before bloodwork.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 5000-10000mcg daily | Cost: $0.08-0.20/day</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Tier 3 - Beneficial (Optional)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Omega-3 Fatty Acids (EPA/DHA)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Anti-inflammatory properties support cardiovascular health during metabolic transition. Select molecularly distilled formulations (removes mercury/toxins). Minimum 1000mg combined EPA/DHA daily. Take with fat-containing meals.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 1000-2000mg EPA+DHA | Cost: $0.30-0.80/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Magnesium Glycinate</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Supports 300+ enzymatic processes. May reduce GI side effects and muscle cramping common during initial titration. Glycinate form superior absorption, minimal laxative effect (unlike magnesium oxide).
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 200-400mg elemental magnesium | Cost: $0.15-0.35/day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3">
                <span className="font-medium">Section 3: Implementation Guidelines</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">
                  Optimal Administration Practices
                </h2>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded border-l-4 border-green-600">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Timing:</strong> Administer fat-soluble vitamins (A, D, E, K) with meals containing dietary fat for maximum absorption
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded border-l-4 border-green-600">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Format selection:</strong> Nausea-prone patients benefit from liquid, sublingual, or gummy formulations versus tablets/capsules
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded border-l-4 border-green-600">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Distribution:</strong> Divide supplementation across multiple meals to enhance absorption and minimize GI distress
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded border-l-4 border-green-600">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Monitoring:</strong> Request comprehensive metabolic panel including B12, D3, iron, folate every 3-6 months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                  <AlertCircle className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#003366] mb-2">
                    Medical Consultation Required
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This information serves educational purposes only and does NOT constitute medical advice. Individual supplementation requirements vary based on baseline deficiencies, comorbidities, medication interactions, and metabolic factors. Mandatory physician consultation prior to initiating any supplement protocol. Request baseline laboratory assessment to identify pre-existing deficiencies requiring targeted intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-[#e8eef4] border border-[#003366] p-6 rounded-lg">
              <h2 className="text-lg font-bold text-[#003366] mb-4">
                Related Resources
              </h2>
              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  href="/best-vitamins-to-take-while-on-tirzepatide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Vitamins While on Tirzepatide
                </Link>
                <Link
                  href="/best-alcohol-on-semaglutide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Alcohol Consumption on Semaglutide
                </Link>
                <Link
                  href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Optimal Dosing Time
                </Link>
                <Link
                  href="/best-online-semaglutide-program"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Online Semaglutide Programs
                </Link>
                <Link
                  href="/best-place-to-inject-semaglutide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Injection Site Guidance
                </Link>
                <Link
                  href="/best-compounding-pharmacy-for-semaglutide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Compounding Pharmacy Selection
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
