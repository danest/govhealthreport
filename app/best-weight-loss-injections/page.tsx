import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FlaskConical, Scale, TrendingDown, AlertCircle, Info, Pill } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Weight Loss Injections 2025 - Compare Top 10 Providers | GOV Health Report",
  description:
    "Independent comparative analysis of FDA-approved weight loss injections. Evidence-based evaluation of semaglutide, tirzepatide, and emerging GLP-1/GIP agonists.",
  keywords: [
    "best weight loss injections",
    "semaglutide",
    "tirzepatide",
    "GLP-1 injections",
    "Ozempic",
    "Wegovy",
    "Mounjaro",
    "weight loss medications",
    "online weight loss program",
  ],
  openGraph: {
    title: "Best Weight Loss Injections 2025 - Compare Top 10 Providers",
    description:
      "Independent comparative analysis of FDA-approved weight loss injections. Evidence-based evaluation of semaglutide, tirzepatide, and emerging GLP-1/GIP agonists.",
    type: "website",
  },
};

export default function BestWeightLossInjectionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1">
        {/* Government Header Section */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Weight Loss Injectable Medication Comparative Analysis
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  GLP-1 and Dual Agonist Efficacy Assessment • December 2025
                </p>
              </div>
            </div>

            <div className="h-1 w-24 bg-[#ffc72c] mb-6" />

            {/* Disclaimer */}
            <div className="bg-[#a31621] text-white p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block mb-1">Important Notice: NOT a Government Website</strong>
                  This is an independent health information resource providing evidence-based medication comparisons.
                  All treatment decisions require consultation with licensed healthcare providers. Does not constitute medical advice.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                FDA-approved weight loss injections utilize incretin-based mechanisms (GLP-1 receptor agonists and dual GIP/GLP-1 agonists)
                to achieve clinically significant weight reduction (≥5% total body weight). This analysis evaluates: (1) Comparative efficacy
                data from head-to-head and pivotal trials, (2) Adverse event profiles and discontinuation rates, (3) Cost-effectiveness
                analysis, (4) Access pathways (branded vs compounded), and (5) Patient selection criteria based on clinical characteristics
                and treatment goals.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Weight Loss Injection Providers"
          subtitle="Licensed telehealth services offering FDA-approved and compounded GLP-1/GIP agonist medications."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: FDA-Approved Injectable Medications */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Pill className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: FDA-Approved Weight Loss Injectable Medications</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  As of December 2025, FDA approves four injectable medications specifically for chronic weight management:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">FDA-Approved Weight Loss Injectable Medications Matrix</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Medication</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Active Ingredient</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Mechanism</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Mean Weight Loss</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">FDA Approval</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 text-xs">
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-3 font-medium text-[#003366]">Wegovy</td>
                          <td className="px-3 py-3">Semaglutide 2.4mg</td>
                          <td className="px-3 py-3">GLP-1 agonist</td>
                          <td className="px-3 py-3">14.9% (68 weeks)</td>
                          <td className="px-3 py-3">June 2021</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-[#ffc72c]/10">
                          <td className="px-3 py-3 font-medium text-[#003366]">Zepbound</td>
                          <td className="px-3 py-3">Tirzepatide 15mg</td>
                          <td className="px-3 py-3">GIP/GLP-1 dual agonist</td>
                          <td className="px-3 py-3">20.9% (72 weeks)</td>
                          <td className="px-3 py-3">November 2023</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-3 font-medium text-[#003366]">Saxenda</td>
                          <td className="px-3 py-3">Liraglutide 3.0mg</td>
                          <td className="px-3 py-3">GLP-1 agonist (daily)</td>
                          <td className="px-3 py-3">5.4% (56 weeks)</td>
                          <td className="px-3 py-3">December 2014</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-3 font-medium text-[#003366]">Contrave</td>
                          <td className="px-3 py-3">Naltrexone/Bupropion</td>
                          <td className="px-3 py-3">Opioid antagonist/Antidepressant (oral)</td>
                          <td className="px-3 py-3">4.8% (56 weeks)</td>
                          <td className="px-3 py-3">September 2014</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#e8eef4] border-t-2 border-[#003366] text-xs text-gray-600">
                    <p><strong className="text-[#003366]">Note:</strong> Weight loss data represents mean percentage of baseline body weight in intention-to-treat populations at maximum approved doses. Contrave included for reference (oral, not injectable).</p>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Clinical Significance Threshold</h3>
                  <p className="text-xs text-gray-700">
                    FDA guidance defines clinically meaningful weight loss as ≥5% total body weight or placebo-adjusted
                    difference of ≥5%. All medications above meet or exceed this threshold. However, individual responses vary
                    significantly: 30-60% of patients achieve ≥10% weight loss, while 10-20% experience &lt;5% reduction
                    (non-responders requiring alternative therapy).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Head-to-Head Efficacy Comparison */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Comparative Efficacy Analysis</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Direct comparison data from SURMOUNT and STEP trial series establishes efficacy hierarchy:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                    <div className="bg-[#ffc72c] px-4 py-2">
                      <h3 className="font-bold text-[#003366]">Highest Efficacy: Tirzepatide (Zepbound)</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">SURMOUNT-1 Results:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Mean weight loss: 20.9% at 15mg dose (72 weeks)</li>
                        <li>• ≥20% weight loss: 55% of participants</li>
                        <li>• ≥10% weight loss: 89% of participants</li>
                        <li>• Mean absolute reduction: ~50 lbs for 240 lb baseline</li>
                      </ul>
                      <p className="mt-2"><strong className="text-[#003366]">Advantages:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Superior to semaglutide in head-to-head SURMOUNT-2</li>
                        <li>• Lower nausea incidence vs semaglutide (33% vs 44%)</li>
                        <li>• Dual GIP/GLP-1 mechanism offers metabolic benefits</li>
                      </ul>
                      <p className="mt-2"><strong className="text-[#003366]">Limitations:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Higher cost: $1,000-1,350/month branded</li>
                        <li>• Newer agent: Long-term safety data evolving</li>
                        <li>• Dose escalation takes 20+ weeks to maximum</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">High Efficacy: Semaglutide (Wegovy)</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">STEP-1 Results:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Mean weight loss: 14.9% at 2.4mg dose (68 weeks)</li>
                        <li>• ≥20% weight loss: 32% of participants</li>
                        <li>• ≥10% weight loss: 69% of participants</li>
                        <li>• Mean absolute reduction: ~35 lbs for 235 lb baseline</li>
                      </ul>
                      <p className="mt-2"><strong className="text-[#003366]">Advantages:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Longer safety track record (Ozempic diabetes use since 2017)</li>
                        <li>• Cardiovascular outcomes data (SELECT trial: 20% MACE reduction)</li>
                        <li>• More widespread insurance coverage</li>
                      </ul>
                      <p className="mt-2"><strong className="text-[#003366]">Limitations:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Inferior efficacy to tirzepatide (~6% less weight loss)</li>
                        <li>• Higher nausea incidence (44% vs 33% for tirzepatide)</li>
                        <li>• Persistent shortage issues affecting availability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#003366] rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-[#003366] mb-3 text-sm">Legacy Medications: Saxenda (Liraglutide)</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                    <div>
                      <p className="mb-2"><strong className="text-[#003366]">SCALE Trial Results:</strong></p>
                      <p>Mean weight loss 5.4% at 3.0mg daily dose. Represents earlier-generation GLP-1 agonist with daily
                      injection requirement and modest efficacy compared to newer weekly agents.</p>
                    </div>
                    <div>
                      <p className="mb-2"><strong className="text-[#003366]">Current Use Context:</strong></p>
                      <p>Largely superseded by semaglutide/tirzepatide. Primary indication when: (1) insurance denies newer
                      agents, (2) patient cannot tolerate weekly injections, (3) cost constraints favor daily generic options.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Adverse Event Profiles */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Safety and Tolerability Comparison</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  All GLP-1/GIP agonists share common adverse event profiles, with severity and frequency variations:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Most Common Adverse Events (Incidence ≥10%)</h3>
                  </div>
                  <div className="p-4">
                    <table className="w-full text-xs">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Adverse Event</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Semaglutide 2.4mg</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Tirzepatide 15mg</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Liraglutide 3.0mg</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 font-medium">Nausea</td>
                          <td className="px-3 py-2">44%</td>
                          <td className="px-3 py-2">33%</td>
                          <td className="px-3 py-2">39%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 font-medium">Diarrhea</td>
                          <td className="px-3 py-2">30%</td>
                          <td className="px-3 py-2">23%</td>
                          <td className="px-3 py-2">21%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 font-medium">Vomiting</td>
                          <td className="px-3 py-2">24%</td>
                          <td className="px-3 py-2">18%</td>
                          <td className="px-3 py-2">16%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 font-medium">Constipation</td>
                          <td className="px-3 py-2">24%</td>
                          <td className="px-3 py-2">17%</td>
                          <td className="px-3 py-2">19%</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-medium">Discontinuation Due to AEs</td>
                          <td className="px-3 py-2">7.0%</td>
                          <td className="px-3 py-2">6.2%</td>
                          <td className="px-3 py-2">9.9%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4">
                  <h3 className="font-bold text-[#a31621] mb-2 flex items-center gap-2 text-sm">
                    <AlertCircle className="h-5 w-5" />
                    Boxed Warning: Thyroid C-Cell Tumors
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    All GLP-1 agonists carry FDA boxed warning regarding thyroid C-cell tumors observed in rodent studies.
                    Clinical significance in humans remains uncertain (no definitive cases causally linked after &gt;10 years market exposure).
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#a31621]">Absolute Contraindications:</strong> Personal or family history of medullary
                    thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Screen all patients before initiation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Other Serious Adverse Events (Rare)</h3>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• <strong>Pancreatitis:</strong> 0.2-0.3% incidence across trials</li>
                      <li>• <strong>Gallbladder disease:</strong> 1.5-2.5% (cholecystitis, cholelithiasis)</li>
                      <li>• <strong>Acute kidney injury:</strong> &lt;1% (typically from dehydration/vomiting)</li>
                      <li>• <strong>Hypoglycemia:</strong> &lt;2% in non-diabetics (higher with concomitant insulin/sulfonylureas)</li>
                      <li>• <strong>Gastroparesis:</strong> Post-market reports; incidence unknown</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Tolerability Optimization Strategies</h3>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• <strong>Slow titration:</strong> 4+ week intervals between dose increases</li>
                      <li>• <strong>Dietary modification:</strong> Smaller, more frequent meals; avoid high-fat foods</li>
                      <li>• <strong>Hydration:</strong> 8+ glasses water daily to prevent dehydration</li>
                      <li>• <strong>Anti-emetics:</strong> Ondansetron PRN for refractory nausea (physician prescribed)</li>
                      <li>• <strong>Timing adjustment:</strong> Evening dosing may reduce daytime GI symptoms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Cost Analysis */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Scale className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Cost-Effectiveness Analysis</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Economic analysis requires consideration of medication costs, administration burden, and efficacy trade-offs:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Annual Cost Comparison (Typical Scenarios)</h3>
                  </div>
                  <div className="p-4">
                    <table className="w-full text-xs">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Medication</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Branded (Cash)</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">With Insurance</th>
                          <th className="px-3 py-2 text-left text-[#003366] font-bold">Compounded</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200 bg-[#ffc72c]/10">
                          <td className="px-3 py-2 font-medium">Tirzepatide (Zepbound)</td>
                          <td className="px-3 py-2">$12,600-16,200/yr</td>
                          <td className="px-3 py-2">$300-6,000/yr</td>
                          <td className="px-3 py-2">$3,600-6,600/yr</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 font-medium">Semaglutide (Wegovy)</td>
                          <td className="px-3 py-2">$15,600-19,200/yr</td>
                          <td className="px-3 py-2">$300-4,800/yr</td>
                          <td className="px-3 py-2">$2,400-5,400/yr</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-medium">Liraglutide (Saxenda)</td>
                          <td className="px-3 py-2">$16,800-20,400/yr</td>
                          <td className="px-3 py-2">$600-3,600/yr</td>
                          <td className="px-3 py-2">N/A (daily injection)</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-3 text-xs text-gray-600 italic">
                      <p>Insurance costs assume coverage with prior authorization approval and typical co-pay structures. Actual costs vary significantly by plan.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Cost-Per-Percentage-Point Weight Loss</h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Economic efficiency metric comparing annual cost to mean weight loss percentage:
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• <strong>Tirzepatide (compounded):</strong> ~$300/percentage point ($6,000 ÷ 20.9%)</li>
                    <li>• <strong>Semaglutide (compounded):</strong> ~$280/percentage point ($4,200 ÷ 14.9%)</li>
                    <li>• <strong>Tirzepatide (branded cash):</strong> ~$670/percentage point ($14,000 ÷ 20.9%)</li>
                    <li>• <strong>Semaglutide (branded cash):</strong> ~$1,170/percentage point ($17,400 ÷ 14.9%)</li>
                  </ul>
                  <p className="text-xs text-gray-700 mt-2">
                    <strong className="text-[#003366]">Interpretation:</strong> Compounded options offer similar cost-efficiency.
                    Branded tirzepatide provides better value than branded semaglutide due to superior efficacy despite higher absolute cost.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Patient Selection Framework */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Info className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 5: Medication Selection Decision Tree</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Evidence-based selection algorithm based on patient characteristics, goals, and constraints:
                </p>

                <div className="space-y-3">
                  <div className="bg-[#ffc72c]/20 border-2 border-[#ffc72c] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">First-Line Recommendation: Tirzepatide (Zepbound)</h3>
                    <p className="text-xs text-gray-700 mb-2"><strong>Choose When:</strong></p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Goal: Maximum weight loss (aiming for ≥20% reduction)</li>
                      <li>• Insurance covers with reasonable copay (&lt;$200/month) OR patient can afford compounded ($300-400/month)</li>
                      <li>• No contraindications (MTC/MEN 2 family history, pregnancy, breastfeeding)</li>
                      <li>• Patient accepts 20+ week titration timeline to maximum dose</li>
                      <li>• Baseline BMI ≥30 (or ≥27 with comorbidity)</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Second-Line Alternative: Semaglutide (Wegovy)</h3>
                    <p className="text-xs text-gray-700 mb-2"><strong>Choose When:</strong></p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Tirzepatide unavailable or unaffordable</li>
                      <li>• Patient prioritizes cardiovascular outcomes data (SELECT trial results)</li>
                      <li>• Faster titration preferred (16 weeks to maximum vs 20+ weeks)</li>
                      <li>• Insurance preferentially covers Wegovy over Zepbound</li>
                      <li>• Goal: 10-15% weight loss (adequate for many patients)</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Third-Line Option: Liraglutide (Saxenda)</h3>
                    <p className="text-xs text-gray-700 mb-2"><strong>Choose When:</strong></p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Insurance denies weekly GLP-1 agonists despite appeals</li>
                      <li>• Patient cannot tolerate delayed gastric emptying from weekly agents</li>
                      <li>• Daily injection acceptable or preferred (some patients prefer daily control)</li>
                      <li>• Budget-conscious with insurance coverage (often lower tier/copay than Wegovy/Zepbound)</li>
                      <li>• More modest weight loss goal acceptable (5-10%)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#e8eef4] px-6 py-3 border-b-2 border-[#003366]">
                <h2 className="text-lg font-bold text-[#003366]">Related Clinical Resources</h2>
              </div>
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Provider Assessment
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Provider Evaluation
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Supplementation Protocol
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Supplementation Guidelines
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
