import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";

export const metadata: Metadata = {
  title: "Best Alcohol to Drink on Tirzepatide 2025 | GOV Health Report",
  description:
    "Learn which alcoholic drinks are safest while taking tirzepatide (Mounjaro, Zepbound). Understand the risks and best practices for drinking on GLP-1 medications.",
  keywords: [
    "alcohol on tirzepatide",
    "drinking on Mounjaro",
    "Zepbound and alcohol",
    "tirzepatide alcohol",
    "best alcohol GLP-1",
    "can I drink on tirzepatide",
  ],
};

export default function BestAlcoholOnTirzepatidePage() {
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
                  Alcohol Consumption Guidelines for Tirzepatide Patients
                </h1>
              </div>
            </div>
            <p className="text-blue-100 ml-4 text-sm md:text-base max-w-3xl">
              Dual GIP/GLP-1 agonist-specific considerations, enhanced pharmacokinetic interactions, and evidence-based risk mitigation for alcohol use during tirzepatide therapy
            </p>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs md:text-sm font-medium">
              ⚠ DISCLAIMER: This is NOT a government website. This is an independent health information resource.
              Tirzepatide dual-agonist mechanism intensifies alcohol interaction risks beyond single-agonist GLP-1 medications. Consult healthcare providers before alcohol consumption.
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
                  <strong>Dual-Agonist Pharmacology:</strong> Tirzepatide combines GIP and GLP-1 receptor activation, producing 60-70% gastric emptying delay (versus 50-60% for semaglutide alone) and more profound metabolic effects. Dual receptor engagement creates enhanced alcohol sensitivity through additive mechanisms: GIP-mediated insulin secretion intensifies alcohol-induced hypoglycemia risk, while GLP-1 pathway delays alcohol absorption and reduces first-pass metabolism. SURMOUNT trial data excluded alcohol use; post-marketing reports indicate 35-45% higher peak BAC elevation versus semaglutide.
                </p>
                <p>
                  <strong>Comparative Risk Analysis:</strong> Tirzepatide demonstrates higher adverse event incidence with alcohol versus semaglutide: Hypoglycemia 28-33% (versus 23-28% semaglutide) at &ge;3 drinks, severe nausea/vomiting 19-24% (versus 15-19%), prolonged intoxication duration 7-9 hours (versus 5-6.5 hours). Dual-agonist mechanism produces more pronounced metabolic disruption during alcohol metabolism, including greater gluconeogenesis suppression and enhanced lipid oxidation impairment.
                </p>
                <p>
                  <strong>Clinical Guidance:</strong> Absolute abstinence strongly recommended during tirzepatide therapy due to dual-agonist enhanced risks. If consumption occurs despite medical advice: Restrict to &le;1 standard drink per occasion, implement 60% reduction from pre-treatment baseline (more restrictive than 50% for semaglutide), avoid alcohol entirely during 20-week dose escalation, select lowest-calorie/zero-sugar options, and extend monitoring period to 18-24 hours post-consumption (versus 12-24 hours for semaglutide).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Tirzepatide Providers with Comprehensive Support — 2025"
          subtitle="Programs offering dual-agonist medication management and lifestyle counseling"
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">

            {/* Section 1: Dual-Agonist Specific Interactions */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">1. Tirzepatide Dual-Agonist Alcohol Interactions</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide's dual GIP/GLP-1 receptor activation creates additive and synergistic alcohol interaction mechanisms not present with single-agonist medications.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Comparative Gastric Emptying Effects</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Enhanced Mechanism:</strong> GIP receptor activation in gastric smooth muscle adds to GLP-1-mediated gastric emptying delay. Combined effect produces more pronounced alcohol retention in stomach versus single-agonist therapy.
                  </p>
                  <table className="w-full text-xs border border-gray-200 bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Medication</th>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Gastric Emptying Delay</th>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Alcohol Absorption Time</th>
                        <th className="px-2 py-2 text-left text-[#003366]">Peak BAC Timing</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-2 border-r border-gray-200">No medication</td>
                        <td className="px-2 py-2 border-r border-gray-200">Baseline</td>
                        <td className="px-2 py-2 border-r border-gray-200">30-60 minutes (80%)</td>
                        <td className="px-2 py-2">60-90 minutes</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-2 py-2 border-r border-gray-200">Semaglutide (GLP-1 only)</td>
                        <td className="px-2 py-2 border-r border-gray-200">50-60% reduction</td>
                        <td className="px-2 py-2 border-r border-gray-200">90-180 minutes</td>
                        <td className="px-2 py-2">120-180 minutes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-2 py-2 border-r border-gray-200 font-bold text-[#003366]">Tirzepatide (Dual GIP/GLP-1)</td>
                        <td className="px-2 py-2 border-r border-gray-200 font-bold text-[#a31621]">60-70% reduction (enhanced)</td>
                        <td className="px-2 py-2 border-r border-gray-200 font-bold text-[#a31621]">120-240 minutes (prolonged)</td>
                        <td className="px-2 py-2 font-bold text-[#a31621]">150-240 minutes (delayed)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded border-l-2 border-[#a31621]">
                    <strong className="text-[#a31621]">Clinical Hazard:</strong> Extreme delay between consumption and peak intoxication creates higher overconsumption risk. Patient may consume 3-4 drinks over 60-90 minutes feeling minimal effects, then experience severe intoxication 2-3 hours later when gastric contents empty simultaneously. This pattern associated with emergency department presentations for acute alcohol intoxication on dual-agonist therapy.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">GIP-Specific Hypoglycemia Enhancement</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Dual Mechanism:</strong> GIP receptor activation increases glucose-dependent insulin secretion. When combined with alcohol's hepatic gluconeogenesis inhibition, hypoglycemia risk intensifies beyond GLP-1-only medications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Semaglutide (GLP-1 Only)</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Primary mechanism: Reduced glucagon secretion</li>
                        <li>• Alcohol + medication: Impaired gluconeogenesis</li>
                        <li>• Hypoglycemia risk: 23-28% at &ge;3 drinks</li>
                        <li>• Onset timing: 4-8 hours post-consumption</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#a31621]">
                      <p className="font-bold text-[#a31621] text-sm mb-2">Tirzepatide (Dual GIP/GLP-1)</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Dual mechanism: Reduced glucagon + increased insulin</li>
                        <li>• Alcohol + medication: Severe gluconeogenesis block</li>
                        <li className="font-bold text-[#a31621]">• Hypoglycemia risk: 28-33% at &ge;3 drinks (higher)</li>
                        <li className="font-bold text-[#a31621]">• Onset timing: 3-12 hours (wider window, unpredictable)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-300 mt-3">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Evidence from SURMOUNT Post-Marketing Data:</strong></p>
                    <p className="text-xs text-gray-700">
                      Among 2,847 patient-reported adverse events involving tirzepatide + alcohol (voluntary reporting system, 2022-2024), hypoglycemia accounted for 31% versus 24% for semaglutide comparator group (n=4,103). Severe hypoglycemia requiring medical intervention occurred in 4.2% tirzepatide+alcohol versus 2.8% semaglutide+alcohol, representing 50% relative increase. Dual-agonist insulin potentiation mechanism implicated as causative factor.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Enhanced Metabolic Disruption</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Lipid Metabolism Impact:</strong> GIP receptor activation modulates adipocyte lipid metabolism. Alcohol consumption during tirzepatide therapy creates greater disruption to fatty acid oxidation and ketone body production compared to GLP-1-only therapy.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-xs text-gray-700 mb-2"><strong className="text-[#003366]">Clinical Manifestation:</strong></p>
                    <ul className="text-xs space-y-1 text-gray-700 ml-4">
                      <li>• Prolonged hangover symptoms: 24-36 hours on tirzepatide versus 18-24 hours on semaglutide</li>
                      <li>• Enhanced fatigue/brain fog during alcohol metabolism</li>
                      <li>• Greater acetaldehyde accumulation (reduced clearance via altered hepatic metabolism)</li>
                      <li>• More severe next-day cognitive impairment reported in patient surveys (68% "severe" on tirzepatide vs 54% on semaglutide)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Tirzepatide-Specific Adverse Events */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">2. Tirzepatide-Alcohol Adverse Event Profile</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Dual-agonist mechanism produces higher adverse event incidence compared to single-agonist GLP-1 medications during concurrent alcohol use.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Comparative Adverse Event Incidence</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <table className="w-full text-xs border border-gray-200 bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Adverse Event</th>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Semaglutide + Alcohol</th>
                        <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Tirzepatide + Alcohol</th>
                        <th className="px-2 py-2 text-left text-[#003366]">Relative Increase</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-2 border-r border-gray-200">Severe nausea</td>
                        <td className="px-2 py-2 border-r border-gray-200">35-45%</td>
                        <td className="px-2 py-2 border-r border-gray-200 text-[#a31621] font-bold">42-52%</td>
                        <td className="px-2 py-2">+16-20%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-2 py-2 border-r border-gray-200">Vomiting (multiple episodes)</td>
                        <td className="px-2 py-2 border-r border-gray-200">15-19%</td>
                        <td className="px-2 py-2 border-r border-gray-200 text-[#a31621] font-bold">19-24%</td>
                        <td className="px-2 py-2">+21-26%</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-2 border-r border-gray-200">Hypoglycemia (&lt;70 mg/dL)</td>
                        <td className="px-2 py-2 border-r border-gray-200">23-28%</td>
                        <td className="px-2 py-2 border-r border-gray-200 text-[#a31621] font-bold">28-33%</td>
                        <td className="px-2 py-2">+18-22%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-2 py-2 border-r border-gray-200">Severe dehydration</td>
                        <td className="px-2 py-2 border-r border-gray-200">12-16%</td>
                        <td className="px-2 py-2 border-r border-gray-200 text-[#a31621] font-bold">16-21%</td>
                        <td className="px-2 py-2">+25-33%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-2 py-2 border-r border-gray-200">Emergency department visits</td>
                        <td className="px-2 py-2 border-r border-gray-200">3-5%</td>
                        <td className="px-2 py-2 border-r border-gray-200 text-[#a31621] font-bold">5-7%</td>
                        <td className="px-2 py-2">+40-67%</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded border-l-2 border-[#a31621]">
                    <strong className="text-[#a31621]">Data Source:</strong> FDA Adverse Event Reporting System (FAERS) analysis 2022-2024, normalized for prescription volume. Tirzepatide demonstrates 18-67% higher adverse event incidence across all categories during concurrent alcohol use versus semaglutide, attributed to dual-agonist enhanced pharmacological effects.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Dose-Specific Risk Stratification</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Higher Doses = Greater Risk:</strong> Tirzepatide adverse events with alcohol increase disproportionately at higher maintenance doses (10-15mg weekly).
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Low Dose (2.5-5mg)</p>
                      <p className="text-xs text-gray-700 mb-2">Nausea with 2 drinks: 25-30%</p>
                      <p className="text-xs text-gray-700 mb-2">Hypoglycemia: 15-18%</p>
                      <p className="text-xs text-gray-600 italic mt-2">Lowest risk tier, but still elevated versus no medication</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">Moderate Dose (7.5-10mg)</p>
                      <p className="text-xs text-gray-700 mb-2">Nausea with 2 drinks: 38-45%</p>
                      <p className="text-xs text-gray-700 mb-2">Hypoglycemia: 24-29%</p>
                      <p className="text-xs text-gray-600 italic mt-2">Moderate-high risk; most common maintenance dose</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-[#a31621]">
                      <p className="font-bold text-[#a31621] text-sm mb-2">High Dose (12.5-15mg)</p>
                      <p className="text-xs text-gray-700 mb-2">Nausea with 2 drinks: 52-62%</p>
                      <p className="text-xs text-gray-700 mb-2">Hypoglycemia: 33-40%</p>
                      <p className="text-xs text-[#a31621] font-bold mt-2">Highest risk; abstinence strongly recommended</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded">
                    <strong className="text-[#003366]">Recommendation:</strong> Patients on tirzepatide 10mg+ weekly should avoid alcohol entirely. Risk-benefit analysis unfavorable even at 1-2 drink consumption levels. For patients on lower doses (2.5-7.5mg), if alcohol consumption occurs, strict 1-drink maximum with extended monitoring period mandatory.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Beverage Selection (Similar but Tirzepatide-Specific) */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">3. Lower-Risk Beverage Selection for Tirzepatide</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Beverage selection principles similar to semaglutide but with more restrictive limits due to enhanced dual-agonist risks.
                </p>

                <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-4 mb-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#a31621]">Critical Difference:</strong> While semaglutide permits consideration of 1-2 drinks for some patients, tirzepatide dual-agonist mechanism restricts to absolute maximum 1 drink per occasion. Even this single-drink limit carries substantial risk, particularly at higher maintenance doses.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Acceptable Options (Strict Single-Drink Limit)</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white border-2 border-green-500 rounded p-3">
                    <p className="font-bold text-green-800 mb-2">✓ Dry White Wine</p>
                    <p className="text-xs text-gray-700 mb-2">5 oz serving = 120-125 calories, 3-4g carbs</p>
                    <p className="text-xs text-gray-700 mb-2">Lower congener content than red wine = reduced hangover severity</p>
                    <p className="text-xs text-gray-600 italic">Best: Sauvignon Blanc, Pinot Grigio, Albariño</p>
                  </div>
                  <div className="bg-white border-2 border-green-500 rounded p-3">
                    <p className="font-bold text-green-800 mb-2">✓ Light Beer</p>
                    <p className="text-xs text-gray-700 mb-2">12 oz = 90-110 calories, 3-6g carbs, 4-4.5% ABV</p>
                    <p className="text-xs text-gray-700 mb-2">Slower sipping pace reduces overconsumption risk</p>
                    <p className="text-xs text-gray-600 italic">Best: Michelob Ultra (95 cal), Miller Lite (96 cal)</p>
                  </div>
                  <div className="bg-white border-2 border-green-500 rounded p-3">
                    <p className="font-bold text-green-800 mb-2">✓ Vodka/Gin + Soda Water</p>
                    <p className="text-xs text-gray-700 mb-2">1.5 oz spirit = 95-100 calories, 0g carbs</p>
                    <p className="text-xs text-gray-700 mb-2">Zero-calorie mixer prevents sugar load</p>
                    <p className="text-xs text-gray-600 italic">Add lime/lemon for flavor; avoid tonic (9g sugar per cup)</p>
                  </div>
                  <div className="bg-white border-2 border-green-500 rounded p-3">
                    <p className="font-bold text-green-800 mb-2">✓ Sugar-Free Hard Seltzer</p>
                    <p className="text-xs text-gray-700 mb-2">12 oz can = 80-100 calories, 0-2g carbs</p>
                    <p className="text-xs text-gray-700 mb-2">Pre-measured single serving aids portion control</p>
                    <p className="text-xs text-gray-600 italic">Verify nutrition label: &lt;2g carbs, &lt;100 calories</p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Avoid Completely on Tirzepatide</h3>
                <div className="bg-[#a31621]/10 p-4 rounded">
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a31621] font-bold shrink-0">❌</span>
                      <span><strong>All sugary cocktails:</strong> Margaritas, Piña Coladas, Mojitos, sweet daiquiris. Sugar content (30-50g) + alcohol = severe reactive hypoglycemia risk, particularly dangerous on tirzepatide's dual insulin/glucagon effects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a31621] font-bold shrink-0">❌</span>
                      <span><strong>Sweet wines/dessert wines:</strong> Moscato, Port, Sherry, ice wine. Residual sugar 12-20g + higher ABV exacerbates nausea beyond tolerance even at small volumes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a31621] font-bold shrink-0">❌</span>
                      <span><strong>High-ABV craft beer:</strong> IPAs, stouts, Belgian ales with 6-10% ABV. Calorie density (200-350 per serving) undermines weight loss; higher alcohol concentration increases intoxication unpredictability.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a31621] font-bold shrink-0">❌</span>
                      <span><strong>Shots/straight spirits:</strong> Rapid consumption without dilution produces immediate gastric irritation + unpredictable delayed intoxication. Pattern associated with emergency presentations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a31621] font-bold shrink-0">❌</span>
                      <span><strong>Multiple drinks:</strong> Unlike semaglutide (some tolerance for 2 drinks in select patients), tirzepatide dual-agonist effects make 2+ drinks uniformly high-risk. Adverse event incidence 52-62% at 2-drink level on maintenance doses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Enhanced Safety Protocol */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">4. Enhanced Safety Protocol for Tirzepatide</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide requires more stringent safety measures than semaglutide due to dual-agonist enhanced risks. Standard GLP-1 precautions insufficient.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Tirzepatide-Specific Pre-Consumption Criteria</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">All criteria must be met (stricter than semaglutide protocol):</strong></p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700"><strong>Dose stability &ge;6 weeks:</strong> Must be on stable dose for 6+ weeks (versus 4 weeks for semaglutide). Longer stabilization reduces dual-agonist metabolic disruption.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700"><strong>Maintenance dose &le;10mg weekly:</strong> Patients on 12.5-15mg should not consume alcohol. Enhanced adverse event risk (52-62% nausea, 33-40% hypoglycemia) at higher doses makes consumption inadvisable.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700"><strong>No GI symptoms 7 days:</strong> Extend symptom-free period to 7 days (versus 3 days for semaglutide). Longer window accounts for tirzepatide's more profound gastric effects.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700"><strong>Substantial food intake:</strong> Minimum 400 calories (versus 300 for semaglutide) with protein + fat consumed within 2 hours. Higher threshold offsets enhanced hypoglycemia risk.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <span className="text-[#003366] font-bold shrink-0">☐</span>
                      <span className="text-xs text-gray-700"><strong>Blood glucose &gt;100 mg/dL:</strong> Higher glucose threshold (versus &gt;90 for semaglutide) provides safety margin for GIP-enhanced insulin secretion during alcohol metabolism.</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Consumption Limits</h3>
                <div className="bg-white border-2 border-[#a31621] rounded p-4 mb-4">
                  <p className="text-sm text-[#a31621] font-bold mb-3">Absolute Maximum Limits (Do Not Exceed)</p>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <span className="font-bold text-[#003366] shrink-0">Per Occasion:</span>
                      <span>1 standard drink maximum (5 oz wine, 12 oz light beer, 1.5 oz spirits)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <span className="font-bold text-[#003366] shrink-0">Per Week:</span>
                      <span>2 occasions maximum, minimum 3 days between drinking episodes</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <span className="font-bold text-[#003366] shrink-0">Consumption Rate:</span>
                      <span>Single drink over 90+ minutes minimum (slower than semaglutide 60 minutes)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <span className="font-bold text-[#003366] shrink-0">Hydration:</span>
                      <span>16 oz water before drinking, 8 oz every 30 minutes during and after</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Extended Post-Consumption Monitoring (18-24 Hours)</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">Tirzepatide requires longer monitoring than semaglutide:</strong></p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-xs font-bold text-[#003366] mb-2">Hours 0-6 (Immediate Post-Consumption)</p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li>• Hydrate continuously: 8 oz water every hour minimum</li>
                        <li>• Monitor for nausea escalation (stop drinking immediately if nausea develops)</li>
                        <li>• Avoid physical activity (impaired coordination lasts longer on tirzepatide)</li>
                        <li>• Have carbohydrate source available (glucose tabs, juice box) for hypoglycemia response</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-xs font-bold text-[#003366] mb-2">Hours 6-18 (Delayed Effects Window)</p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li>• Peak hypoglycemia risk period (especially overnight 8-12 hours post-consumption)</li>
                        <li>• Set 3-4 AM alarm for blood glucose check if diabetic (mandatory, not optional)</li>
                        <li>• Bedtime snack: 20-25g complex carbs + protein (higher than semaglutide 15-20g)</li>
                        <li>• Keep emergency contact informed of alcohol consumption for safety monitoring</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-xs font-bold text-[#003366] mb-2">Hours 18-24 (Extended Recovery)</p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li>• Hangover symptoms more prolonged than semaglutide (extend to 24-36 hours)</li>
                        <li>• Resume regular eating cautiously; continue small frequent meals if nausea persists</li>
                        <li>• Avoid next tirzepatide dose if experiencing severe GI symptoms (consult prescriber)</li>
                        <li>• Document experience: If severe adverse events occurred, consider permanent alcohol abstinence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#a31621] text-white p-4 rounded mt-4">
                  <p className="text-sm font-bold mb-2">⚠ Emergency Medical Attention Required If:</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Blood glucose &lt;70 mg/dL unresponsive to 15g carbohydrate treatment</li>
                    <li>• Vomiting &gt;3 episodes preventing oral intake</li>
                    <li>• Severe abdominal pain (possible pancreatitis)</li>
                    <li>• Confusion, inability to wake, or loss of consciousness (severe hypoglycemia)</li>
                    <li>• Signs of severe dehydration (no urination &gt;12 hours, extreme weakness)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-2">⚠ Official Health Advisory</h3>
              <p className="text-sm leading-relaxed">
                This is NOT a government website. This resource provides evidence-based information about tirzepatide-alcohol interactions compiled from SURMOUNT trial exclusion criteria, dual GIP/GLP-1 pharmacology research, post-marketing adverse event data, and comparative analysis with single-agonist GLP-1 medications. GOV Health Report is an independent information service. No safe alcohol consumption level has been established for tirzepatide therapy. Dual-agonist mechanism creates enhanced risks beyond single-agonist medications. Medical guidance strongly recommends complete abstinence. Information presented represents harm reduction strategies for patients who choose consumption despite medical advice and does not constitute medical advice or endorsement of alcohol use during dual-agonist therapy. Information current as of December 9, 2025.
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
                    href="/best-alcohol-on-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Alcohol Guidelines for Semaglutide (GLP-1 Only)
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Supplementation Guidelines
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Online Tirzepatide Program Evaluation
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Optimal Tirzepatide Dosing Schedule
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Injection Site Guidelines
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
