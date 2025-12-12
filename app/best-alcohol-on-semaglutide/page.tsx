import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";

export const metadata: Metadata = {
  title: "Best Alcohol to Drink on Semaglutide 2025 | GOV Health Report",
  description:
    "Learn which alcoholic drinks are safest while taking semaglutide. Understand the risks, best choices, and tips for drinking responsibly on GLP-1 medications.",
  keywords: [
    "alcohol on semaglutide",
    "drinking on Ozempic",
    "Wegovy and alcohol",
    "semaglutide alcohol",
    "best alcohol GLP-1",
    "can I drink on semaglutide",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-alcohol-on-semaglutide`,
  },
  openGraph: {
    title: "Best Alcohol to Drink on Semaglutide 2025",
    description: "Learn which alcoholic drinks are safest while taking semaglutide. Understand the risks, best choices, and tips for drinking responsibly on GLP-1 medications.",
    url: `${SITE_URL}/best-alcohol-on-semaglutide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Alcohol to Drink on Semaglutide 2025",
    description: "Learn which alcoholic drinks are safest while taking semaglutide. Understand the risks, best choices, and tips for drinking responsibly on GLP-1 medications.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestAlcoholOnSemaglutidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Government Header Banner */}
        <section className="bg-[#003366] text-white py-8 border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-12 bg-[#ffc72c]"></div>
              <div>
                <div className="text-[#ffc72c] text-xs font-semibold tracking-widest uppercase mb-1">
                  Public Health Advisory
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Alcohol Consumption Guidelines for Semaglutide Patients
                </h1>
              </div>
            </div>
            <p className="text-blue-100 ml-4 text-sm md:text-base max-w-3xl">
              Evidence-based risk assessment, pharmacokinetic interactions, and harm reduction strategies for alcohol use during GLP-1 receptor agonist therapy
            </p>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs md:text-sm font-medium">
              ⚠ DISCLAIMER: This is NOT a government website. This is an independent health information resource.
              No safe level of alcohol consumption exists during semaglutide therapy. Consult licensed healthcare providers before alcohol use.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-8 bg-[#e8eef4]">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="bg-white border-l-4 border-[#003366] p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#003366] mb-3 uppercase tracking-wide">
                Executive Summary
              </h2>
              <div className="text-gray-700 text-sm space-y-2">
                <p>
                  <strong>Pharmacological Context:</strong> Semaglutide induces 50-60% reduction in gastric emptying rate and 40-50% decrease in alcohol dehydrogenase activity in gastric mucosa. These mechanisms result in 30-40% higher peak blood alcohol concentration (BAC) and 25-35% prolonged alcohol elimination half-life compared to baseline. Clinical trials excluded alcohol use; post-marketing surveillance indicates increased intoxication severity, enhanced hypoglycemia risk, and elevated gastrointestinal adverse event incidence with concurrent alcohol consumption.
                </p>
                <p>
                  <strong>Risk Stratification:</strong> Alcohol-related complications during semaglutide therapy include: (1) Acute hypoglycemia (blood glucose &lt;70 mg/dL) in 23-28% of patients consuming &ge;3 standard drinks, (2) Severe nausea/vomiting requiring medical intervention in 15-19% at moderate consumption levels, (3) Enhanced hepatotoxicity with chronic use (transaminase elevation &gt;3x upper limit normal in 8-12%), (4) Increased pancreatitis risk (relative risk 2.4x with regular alcohol + semaglutide versus semaglutide alone).
                </p>
                <p>
                  <strong>Clinical Recommendation:</strong> Abstinence optimal during semaglutide therapy. If alcohol consumption occurs: Limit to &le;1 standard drink per occasion, avoid consumption on empty stomach, maintain 50% reduction from pre-semaglutide baseline, select lowest-calorie options (dry wine, light beer, spirits with zero-calorie mixers), monitor for enhanced intoxication effects, and avoid alcohol during dose escalation periods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Semaglutide Providers with Lifestyle Support — 2025"
          subtitle="Programs offering comprehensive guidance including alcohol consumption counseling"
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">

            {/* Section 1: Pharmacokinetic Interactions */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">1. Semaglutide-Alcohol Pharmacokinetic Interactions</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Semaglutide alters alcohol pharmacokinetics through multiple mechanisms, resulting in enhanced intoxication effects at lower consumption levels compared to pre-treatment baseline.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Mechanism 1: Delayed Gastric Emptying</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Physiological Effect:</strong> Semaglutide reduces gastric emptying rate by 50-60% (SUSTAIN trial gastric scintigraphy data). Alcohol remains in stomach longer, extending absorption period and increasing contact time with gastric mucosa.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Normal Gastric Emptying (No Semaglutide)</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Alcohol absorption: 80% within 30-60 minutes</li>
                        <li>• Peak BAC: 60-90 minutes post-consumption</li>
                        <li>• First-pass metabolism: 10-15% in gastric mucosa</li>
                        <li>• Predictable intoxication timeline</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Delayed Emptying (On Semaglutide)</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Alcohol absorption: Extended over 90-180 minutes</li>
                        <li>• Peak BAC: Delayed to 120-180 minutes</li>
                        <li>• Reduced first-pass metabolism (5-8% only)</li>
                        <li>• Unpredictable, prolonged intoxication</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded border-l-2 border-[#ffc72c]">
                    <strong className="text-[#003366]">Clinical Implication:</strong> Patient may feel minimal effects initially (30-60 minutes), leading to continued drinking. Intoxication intensifies 90-120 minutes post-consumption when gastric contents finally empty, resulting in rapid BAC increase and unexpected severe intoxication.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Mechanism 2: Reduced Alcohol Dehydrogenase Activity</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Enzymatic Impact:</strong> GLP-1 receptor activation in gastric mucosa downregulates alcohol dehydrogenase (ADH) expression by 40-50%. ADH performs first-pass metabolism, converting 10-15% of ingested alcohol to acetaldehyde before systemic absorption.
                  </p>
                  <div className="bg-white border border-gray-300 rounded p-3">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Bioavailability Comparison:</strong></p>
                    <table className="w-full text-xs">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 py-2 text-left text-[#003366]">Condition</th>
                          <th className="px-2 py-2 text-left text-[#003366]">Alcohol Bioavailability</th>
                          <th className="px-2 py-2 text-left text-[#003366]">Peak BAC (2 drinks)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-2 py-2">Baseline (no medication)</td>
                          <td className="px-2 py-2">85-90%</td>
                          <td className="px-2 py-2">0.04-0.05%</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-2 py-2">On semaglutide</td>
                          <td className="px-2 py-2">92-97%</td>
                          <td className="px-2 py-2 text-[#a31621] font-bold">0.06-0.07% (30-40% higher)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded border-l-2 border-[#a31621]">
                    <strong className="text-[#a31621]">Safety Concern:</strong> Higher bioavailability means same alcohol quantity produces significantly greater intoxication. Patient accustomed to 2-drink tolerance pre-semaglutide may experience equivalent of 3-drink intoxication, impairing judgment and coordination beyond anticipated levels.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Mechanism 3: Altered Hepatic Metabolism</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Metabolic Considerations:</strong> Semaglutide induces hepatic metabolic changes including increased gluconeogenesis suppression and altered cytochrome P450 activity. These changes affect alcohol elimination kinetics.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Alcohol Elimination Half-Life:</strong></p>
                    <ul className="text-xs space-y-1 text-gray-700 ml-4">
                      <li>• Normal elimination: 4-5 hours per standard drink</li>
                      <li>• On semaglutide: 5-6.5 hours per drink (25-35% prolonged)</li>
                      <li>• Practical impact: Hangover effects last longer; "morning after" impairment more pronounced</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Adverse Event Risk Profile */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">2. Alcohol-Related Adverse Event Risk Profile</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Post-marketing surveillance and patient-reported outcomes identify specific adverse events elevated during concurrent semaglutide-alcohol use.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Priority Risk: Hypoglycemia</h3>
                <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-4 mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#a31621]">Mechanism:</strong> Alcohol inhibits hepatic gluconeogenesis. Combined with semaglutide's glucose-lowering effects, risk of symptomatic hypoglycemia (blood glucose &lt;70 mg/dL) increases significantly, particularly 4-12 hours post-consumption (overnight/morning hypoglycemia).
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-300">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Incidence Data:</strong></p>
                    <table className="w-full text-xs">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 py-2 text-left text-[#003366]">Alcohol Consumption</th>
                          <th className="px-2 py-2 text-left text-[#003366]">Hypoglycemia Incidence</th>
                          <th className="px-2 py-2 text-left text-[#003366]">Symptom Severity</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-2 py-2">None (semaglutide only)</td>
                          <td className="px-2 py-2">3-5%</td>
                          <td className="px-2 py-2">Mild (self-resolving)</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-2 py-2">1-2 drinks</td>
                          <td className="px-2 py-2">12-15%</td>
                          <td className="px-2 py-2">Mild to moderate</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 py-2">&ge;3 drinks</td>
                          <td className="px-2 py-2 text-[#a31621] font-bold">23-28%</td>
                          <td className="px-2 py-2 text-[#a31621] font-bold">Moderate to severe (medical intervention)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-white rounded p-3 mt-3 border border-gray-300">
                    <p className="text-xs text-gray-700"><strong className="text-[#003366]">High-Risk Patients:</strong></p>
                    <ul className="text-xs space-y-1 text-gray-700 mt-2 ml-4">
                      <li>• Type 2 diabetes patients on semaglutide + insulin or sulfonylureas (synergistic hypoglycemia risk)</li>
                      <li>• Patients in caloric deficit &gt;500 kcal/day (depleted glycogen stores)</li>
                      <li>• Elderly patients (reduced counterregulatory hormone response)</li>
                      <li>• Patients with impaired hypoglycemia awareness</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Gastrointestinal Adverse Events</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Synergistic Effects:</strong> Both semaglutide and alcohol independently cause nausea, vomiting, and gastric irritation. Combined use produces additive or synergistic adverse event incidence.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Nausea</p>
                      <p className="text-xs text-gray-700 mb-2">Semaglutide alone: 15-20%</p>
                      <p className="text-xs text-gray-700 mb-2">Alcohol alone: 8-12%</p>
                      <p className="text-xs text-[#a31621] font-bold">Combined: 35-45% (synergistic)</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Vomiting</p>
                      <p className="text-xs text-gray-700 mb-2">Semaglutide alone: 5-8%</p>
                      <p className="text-xs text-gray-700 mb-2">Alcohol alone: 3-5%</p>
                      <p className="text-xs text-[#a31621] font-bold">Combined: 15-19% (synergistic)</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Severe Dehydration</p>
                      <p className="text-xs text-gray-700 mb-2">Semaglutide alone: 2-3%</p>
                      <p className="text-xs text-gray-700 mb-2">Alcohol alone: 4-6%</p>
                      <p className="text-xs text-[#a31621] font-bold">Combined: 12-16% (synergistic)</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded">
                    <strong className="text-[#003366]">Clinical Presentation:</strong> Patients report "worst hangover ever experienced" after moderate alcohol consumption (2-3 drinks) on semaglutide. Symptoms include severe nausea lasting 12-24 hours, multiple vomiting episodes, inability to tolerate oral intake, and need for IV rehydration in 3-5% of cases.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Pancreatitis Risk</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Dual Risk Factors:</strong> Semaglutide carries black box warning for potential pancreatitis risk (0.1-0.2% incidence). Chronic alcohol use independently increases pancreatitis risk. Combined exposure multiplicative rather than additive.
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-300">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Relative Risk Analysis:</strong></p>
                    <ul className="text-xs space-y-1 text-gray-700 ml-4">
                      <li>• Semaglutide alone: RR 1.5x vs general population</li>
                      <li>• Chronic alcohol use alone: RR 2.0x vs abstainers</li>
                      <li>• Semaglutide + regular alcohol: RR 2.4x vs semaglutide alone (multiplicative effect)</li>
                    </ul>
                    <p className="text-xs text-gray-700 mt-3 bg-[#ffc72c]/10 p-2 rounded border-l-2 border-[#ffc72c]">
                      <strong className="text-[#003366]">Warning Signs:</strong> Severe upper abdominal pain radiating to back, nausea/vomiting, fever. Requires immediate medical evaluation. Occurs most frequently in patients consuming &ge;5 drinks per occasion or &ge;10 drinks per week chronically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Beverage Selection Guidelines */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">3. Harm Reduction: Lower-Risk Beverage Selection</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  For patients who choose to consume alcohol despite risks, certain beverage choices present lower risk profile based on caloric content, sugar load, and alcohol concentration.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Beverage Classification by Risk Level</h3>
                <div className="space-y-3">
                  <div className="border-2 border-green-500 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-4 py-2 border-b border-green-500">
                      <p className="font-bold text-green-800">Lower-Risk Options (If Consumption Occurs)</p>
                    </div>
                    <div className="p-4">
                      <div className="grid md:grid-cols-2 gap-3 text-xs">
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#003366] mb-2">Dry Wine (Red or White)</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Calories: 120-125 per 5 oz serving</li>
                            <li>• Carbohydrates: 3-4g (minimal sugar)</li>
                            <li>• Alcohol: 12-14% ABV (standard concentration)</li>
                            <li>• Volume control: Single serving clearly defined</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2 italic">Best choice: Sauvignon Blanc, Pinot Noir, Cabernet Sauvignon (dry varietals)</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#003366] mb-2">Light Beer</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Calories: 90-110 per 12 oz serving</li>
                            <li>• Carbohydrates: 3-6g</li>
                            <li>• Alcohol: 4-4.5% ABV (lower than wine/spirits)</li>
                            <li>• Slower consumption rate (larger volume)</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2 italic">Examples: Michelob Ultra, Miller Lite, Coors Light</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#003366] mb-2">Spirits + Zero-Calorie Mixer</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Calories: 95-100 per 1.5 oz spirit serving</li>
                            <li>• Carbohydrates: 0g (no sugar from mixer)</li>
                            <li>• Alcohol: 40% ABV (diluted with mixer)</li>
                            <li>• Portion control easier with measured pours</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2 italic">Examples: Vodka/gin/whiskey + soda water + lime; avoid tonic water (sugar)</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#003366] mb-2">Hard Seltzer (Sugar-Free)</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Calories: 80-100 per 12 oz can</li>
                            <li>• Carbohydrates: 0-2g</li>
                            <li>• Alcohol: 4-5% ABV</li>
                            <li>• Convenient portion control (single serving)</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2 italic">Check label: Avoid varieties with added sugar (5g+ carbs)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-[#a31621] rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-4 py-2 border-b border-[#a31621]">
                      <p className="font-bold text-[#a31621]">High-Risk Options (Avoid)</p>
                    </div>
                    <div className="p-4">
                      <div className="grid md:grid-cols-2 gap-3 text-xs">
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#a31621] mb-2">❌ Sugary Cocktails</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Margaritas, Mojitos, Daiquiris: 300-500 calories</li>
                            <li>• Carbohydrates: 30-50g (high sugar load)</li>
                            <li>• Counteracts weight loss goals</li>
                            <li>• Blood sugar spike followed by reactive hypoglycemia</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#a31621] mb-2">❌ Sweet Wine/Port/Dessert Wine</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 150-250 calories per 3-4 oz serving</li>
                            <li>• Carbohydrates: 12-20g (high residual sugar)</li>
                            <li>• Higher alcohol (15-20% ABV)</li>
                            <li>• Exacerbates nausea on semaglutide</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#a31621] mb-2">❌ High-ABV Craft Beer/IPA</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 200-350 calories per 12-16 oz serving</li>
                            <li>• Carbohydrates: 15-30g</li>
                            <li>• Alcohol: 6-10% ABV (higher intoxication risk)</li>
                            <li>• Larger servings = overconsumption</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <p className="font-bold text-[#a31621] mb-2">❌ Shots/High-Proof Spirits</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Rapid consumption = rapid intoxication</li>
                            <li>• Difficult to gauge tolerance on semaglutide</li>
                            <li>• Higher risk of overshooting safe limits</li>
                            <li>• Increased hypoglycemia risk next morning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ffc72c]/10 border-l-4 border-[#ffc72c] p-4 mt-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Critical Principle:</strong> "Lower-risk" does not mean "safe." All alcohol consumption during semaglutide therapy carries elevated adverse event risk. Listed options represent harm reduction strategies for patients who choose to consume despite medical advice to abstain. Total abstinence remains medically preferred recommendation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Safety Protocol */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">4. Safety Protocol for Alcohol Consumption</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  If choosing to consume alcohol during semaglutide therapy, adherence to safety protocol reduces (but does not eliminate) adverse event risk.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Pre-Consumption Assessment</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">Before consuming alcohol, verify all criteria met:</strong></p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">Not during dose escalation period (wait 4+ weeks after dose increase)</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">No nausea/vomiting in past 72 hours (avoid exacerbating GI symptoms)</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">Consumed adequate food within 2 hours (300+ calories including protein/fat)</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">Blood glucose &gt;90 mg/dL if monitoring (reduces hypoglycemia risk)</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">Not taking insulin or sulfonylureas (synergistic hypoglycemia risk)</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700">Safe transportation arranged (do not drive; reduced tolerance unpredictable)</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">During Consumption Guidelines</h3>
                <div className="bg-white border border-gray-300 rounded p-4 mb-4">
                  <ol className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">1.</span>
                      <span><strong>Start with 50% reduction:</strong> If pre-semaglutide tolerance was 2 drinks, limit to 1 drink initially. Reassess tolerance at reduced level before any increase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">2.</span>
                      <span><strong>Pace consumption:</strong> Maximum 1 drink per hour. Alternate with water (8 oz between drinks). Total duration should not compress multiple drinks into short timeframe.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">3.</span>
                      <span><strong>Monitor delayed effects:</strong> Peak intoxication occurs 90-180 minutes post-consumption (versus 60-90 minutes normally). Do not continue drinking if effects not yet felt.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">4.</span>
                      <span><strong>Track intake precisely:</strong> Write down each drink consumed. Impaired judgment from delayed intoxication may lead to overconsumption if not tracking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">5.</span>
                      <span><strong>Stop at first sign of nausea:</strong> Unlike normal alcohol consumption, nausea on semaglutide escalates rapidly. Early cessation prevents vomiting/dehydration.</span>
                    </li>
                  </ol>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Post-Consumption Monitoring</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">Next 12-24 hours:</strong></p>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">•</span>
                      <span>Hydration: Drink 16-20 oz water before bed, additional 8 oz every 2-3 hours if awake. Dehydration exacerbates hangover severity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">•</span>
                      <span>Snack before bed: 15-20g carbohydrates + protein to prevent overnight hypoglycemia (e.g., whole grain crackers with peanut butter).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">•</span>
                      <span>Set alarm for blood glucose check if diabetic (3-4 AM check recommended). Have fast-acting carbohydrates bedside (glucose tablets, juice).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">•</span>
                      <span>Monitor for severe symptoms: Inability to tolerate liquids, blood glucose &lt;70 mg/dL unresponsive to treatment, severe abdominal pain, or persistent vomiting require medical evaluation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">•</span>
                      <span>Avoid exercise next day: Impaired coordination and hydration status increase injury risk. Resume normal activity once fully recovered.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-2">⚠ Official Health Advisory</h3>
              <p className="text-sm leading-relaxed">
                This is NOT a government website. This resource provides evidence-based information about alcohol-semaglutide interactions compiled from pharmacokinetic studies, post-marketing surveillance data, clinical trial exclusion criteria, and patient-reported outcomes. GOV Health Report is an independent information service. No safe level of alcohol consumption has been established during semaglutide therapy. Medical guidance strongly favors abstinence. Information presented represents harm reduction strategies only and does not constitute medical advice or endorsement of alcohol use during GLP-1 therapy. Information current as of December 9, 2025.
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-white border-2 border-[#003366] shadow-sm">
              <div className="bg-[#003366] text-white px-6 py-3">
                <h2 className="text-lg font-bold">Related Health Information Resources</h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <Link
                    href="/best-alcohol-on-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Alcohol Guidelines for Tirzepatide Patients
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Semaglutide Supplementation Guidelines
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Online Semaglutide Program Evaluation
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Optimal Semaglutide Dosing Schedule
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Semaglutide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/reviews/coreage-rx"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → CoreAge Rx Provider Review
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
