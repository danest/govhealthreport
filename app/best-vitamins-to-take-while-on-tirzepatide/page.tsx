import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { ArrowLeft, Pill, AlertCircle, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Vitamins to Take While on Tirzepatide 2025 | GOV Health Report",
  description:
    "Evidence-based vitamin supplementation protocol for tirzepatide users. Prevent nutrient deficiencies during Mounjaro and Zepbound treatment with proper supplementation.",
  keywords: [
    "vitamins on tirzepatide",
    "tirzepatide supplements",
    "Mounjaro vitamins",
    "Zepbound supplements",
    "nutrient deficiency GLP-1",
    "best supplements weight loss",
  ],
};

export default function BestVitaminsOnTirzepatidePage() {
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
                  Tirzepatide Supplementation Guidelines
                </h1>
                <p className="text-sm text-gray-600">
                  Clinical Nutrition Protocol • Updated December 2025
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-6">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-[#e8eef4] border-2 border-[#003366] p-6 rounded-lg">
              <h2 className="text-lg font-bold text-[#003366] mb-3">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Tirzepatide (Mounjaro, Zepbound) demonstrates superior weight loss efficacy compared to single-agonist GLP-1 medications, with average reductions of 20-25% total body weight in clinical trials. This accelerated weight loss increases nutritional deficiency risk. Priority supplementation: protein (80-120g daily minimum), comprehensive multivitamin with methylated cofactors, vitamin D3/K2 combination (2000-5000 IU), B-complex emphasizing B12 and folate, and collagen peptides for connective tissue support during rapid adipose loss.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Tirzepatide with Nutritional Support"
          subtitle="These providers include comprehensive health guidance with their programs."
        />

        {/* Content Section */}
        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3">
                <span className="font-medium">Section 1: Dual-Agonist Metabolic Impact</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">
                  Tirzepatide-Specific Nutritional Challenges
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tirzepatide functions as dual GIP/GLP-1 receptor agonist, producing more profound appetite suppression and metabolic changes than semaglutide monotherapy. SURMOUNT-1 trial data indicates:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Protein malnutrition risk:</strong> Average daily caloric intake decreases 55-70%, with disproportionate protein reduction. Without intervention, lean mass comprises 25-40% of total weight loss (optimal: below 20%)
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Micronutrient depletion velocity:</strong> Faster weight loss (0.5-1.5 lbs/week vs 0.3-0.8 lbs with semaglutide) accelerates micronutrient depletion timelines
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Dermatologic manifestations:</strong> Telogen effluvium (hair loss) onset 8-16 weeks post-initiation, affecting 18-25% of patients losing &gt;15% body weight
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Gastrointestinal tolerance:</strong> Higher incidence of nausea (28-32% vs 20-24%) may further compromise oral intake and vitamin absorption
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-[#ffc72c]" />
                <span className="font-medium">Section 2: Stratified Supplementation Protocol</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="border-l-4 border-red-600 pl-4 bg-red-50 p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Priority Level 1 - Mandatory Supplementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Protein Supplementation (Non-Negotiable)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Absolute minimum: 0.8g/lb lean body mass. Optimal: 1.0-1.2g/lb for muscle preservation. Distribute across 4-5 servings to maximize muscle protein synthesis. Whey protein isolate (leucine-rich, rapid absorption) superior to concentrate for post-exercise timing. Plant-based patients: pea/rice combination provides complete amino acid profile.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Target: 80-140g daily depending on lean mass | Cost: $1.50-3.00/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Collagen Peptides (Types I & III)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Skin elasticity support critical during rapid adipose reduction. Hydrolyzed collagen demonstrates bioavailability superior to gelatin. Provides glycine, proline, hydroxyproline for connective tissue synthesis. Studies show 10-20g daily reduces visible skin sagging and supports hair follicle integrity. Take on empty stomach for optimal absorption.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 15-25g daily (morning preferred) | Cost: $0.75-1.50/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Multivitamin (Pharmaceutical Grade)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Foundation for micronutrient adequacy. Mandatory components: methylated B-vitamins (methylcobalamin, L-5-MTHF), chelated minerals (bisglycinate forms), fat-soluble vitamins (A as mixed carotenoids, natural E as mixed tocopherols). Avoid synthetic folic acid (40% population has MTHFR polymorphism reducing conversion efficiency).
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: Per manufacturer recommendation, with food | Cost: $0.40-0.80/day</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-4 bg-orange-50 p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Priority Level 2 - Strongly Recommended</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Vitamin D3 + K2 (MK-7)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Dual supplementation prevents calcium paradox (arterial calcification while bones demineralize). D3 dosing: 2000-5000 IU based on baseline 25-OH vitamin D levels (target: 40-60 ng/mL). K2 as MK-7 form demonstrates longer half-life than MK-4. Critical for patients with family history of osteoporosis or age &gt;50.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 2000-5000 IU D3 + 100-200mcg K2 | Cost: $0.20-0.50/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">B-Complex (High Potency)</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        GIP/GLP-1 agonism may impair intrinsic factor secretion, reducing B12 absorption by 25-35%. Additional B6 supports neurotransmitter synthesis (mood regulation during rapid metabolic change). Folate (as L-5-MTHF) prevents macrocytic anemia risk. Sublingual or liquid B12 bypasses GI absorption issues.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: B12 1000-2500mcg, B6 25-50mg, Folate 400-800mcg | Cost: $0.15-0.40/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Biotin + Silica Complex</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Telogen effluvium prevention/mitigation protocol. Biotin supports keratin infrastructure (hair, skin, nails). Bamboo silica enhances collagen cross-linking and mineral deposition in hair shaft. Zinc picolinate addition (15-30mg) supports cellular turnover. Note: Discontinue biotin 72 hours before cardiac or thyroid lab testing (assay interference).
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: Biotin 5000-10000mcg + Silica 40mg + Zinc 15-30mg | Cost: $0.20-0.50/day</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r">
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Priority Level 3 - Situational/Beneficial</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366]">Magnesium Glycinate</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Addresses two tirzepatide-specific issues: (1) Constipation management (20-30% incidence) - glycinate form provides gentle osmotic effect without diarrhea risk, (2) Muscle cramping during rapid weight loss phase. Superior absorption versus oxide/citrate forms. Evening administration supports sleep quality (GABA receptor modulation).
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 200-400mg elemental magnesium | Cost: $0.15-0.35/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Omega-3 EPA/DHA</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Anti-inflammatory support during adipose tissue remodeling. EPA:DHA ratio 2:1 optimal for cardiovascular benefit. Minimum 2000mg combined daily. Select pharmaceutical-grade (IFOS certified) to ensure mercury/PCB removal. Enteric-coated formulations reduce fishy aftertaste common during GI sensitivity period.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 2000-3000mg EPA+DHA | Cost: $0.40-1.00/day</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366]">Calcium Citrate + Magnesium</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        For patients with documented low bone density or inadequate dietary calcium (&lt;500mg/day). Citrate form does not require stomach acid for absorption (advantageous during reduced food intake). 2:1 calcium:magnesium ratio prevents mineral imbalance. Divide doses (morning/evening) - maximum 500mg calcium absorbed per dose.
                      </p>
                      <p className="text-xs text-[#003366] font-medium mt-2">Dosage: 500-1000mg calcium + 250-500mg magnesium | Cost: $0.20-0.40/day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3">
                <span className="font-medium">Section 3: Timing & Administration Strategy</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">
                  Optimized Dosing Schedule
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-[#e8eef4] rounded-lg">
                    <h3 className="font-semibold text-[#003366] mb-2">Morning (Fasted or with Light Meal)</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Collagen peptides (15-25g in water/coffee, 30 min before food)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Vitamin D3+K2 (with breakfast containing dietary fat)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Multivitamin (with breakfast)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#e8eef4] rounded-lg">
                    <h3 className="font-semibold text-[#003366] mb-2">Midday (With Meal or Snack)</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Protein shake (25-40g) - can combine with collagen for convenience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>B-Complex or sublingual B12</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#e8eef4] rounded-lg">
                    <h3 className="font-semibold text-[#003366] mb-2">Evening (With Dinner or Before Bed)</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Magnesium glycinate (200-400mg, promotes sleep)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Omega-3 fish oil (with dinner)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Biotin/silica complex</span>
                      </li>
                    </ul>
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
                    Professional Medical Oversight Required
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This supplementation protocol represents general clinical guidance and does NOT constitute personalized medical advice. Individual requirements vary based on baseline nutrient status, comorbid conditions, concomitant medications, genetic polymorphisms (MTHFR, VDR), and metabolic response to tirzepatide. Mandatory physician consultation before protocol initiation. Recommend comprehensive laboratory panel (CBC, CMP, 25-OH vitamin D, B12, folate, iron studies, magnesium) at baseline and 3-month intervals during active weight loss phase.
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
                  href="/best-vitamins-to-take-while-on-semaglutide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Vitamins While on Semaglutide
                </Link>
                <Link
                  href="/best-alcohol-on-tirzepatide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Alcohol Consumption on Tirzepatide
                </Link>
                <Link
                  href="/best-time-of-day-to-take-tirzepatide-for-weight-loss"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Optimal Dosing Time
                </Link>
                <Link
                  href="/best-online-tirzepatide-program"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Online Tirzepatide Programs
                </Link>
                <Link
                  href="/best-place-to-inject-tirzepatide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Injection Site Guidance
                </Link>
                <Link
                  href="/best-place-to-get-tirzepatide"
                  className="text-[#003366] hover:underline font-medium text-sm"
                >
                  → Tirzepatide Provider Selection
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
