import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Microscope, ShieldAlert, DollarSign, AlertCircle, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Online Tirzepatide Program 2025 - Compare Top Telehealth Providers | GOV Health Report",
  description:
    "Comprehensive tirzepatide telehealth provider evaluation. Dual GIP/GLP-1 agonist access analysis, compounding pharmacy assessment, and regulatory compliance verification.",
  keywords: [
    "best online tirzepatide program",
    "tirzepatide telehealth",
    "online Mounjaro prescription",
    "tirzepatide weight loss program",
    "compounded tirzepatide online",
    "Zepbound online",
  ],
};

export default function BestOnlineTirzepatideProgramPage() {
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
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Tirzepatide Telehealth Provider Evaluation
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Dual GIP/GLP-1 Agonist Access Analysis • December 2025
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
                  This is an independent health information resource. Provider assessments are based on publicly available
                  compliance data, clinical protocols, and pricing transparency analysis. Does not constitute medical advice.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Tirzepatide (dual GIP/GLP-1 receptor agonist) telehealth access remains limited compared to semaglutide
                due to FDA-approved formulation patent protection and ongoing shortage dynamics. As of December 2025,
                most telehealth providers offer compounded tirzepatide under FDA 503A exemptions during shortage periods.
                This assessment evaluates: (1) Compounding pharmacy compliance standards, (2) Dual-agonist formulation
                quality considerations, (3) Pricing structures relative to branded options, and (4) Clinical monitoring
                protocols specific to tirzepatide's adverse event profile.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Telehealth Providers"
          subtitle="Assessed providers offering compounded tirzepatide with documented regulatory compliance and quality assurance protocols."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Tirzepatide vs Semaglutide Context */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: Tirzepatide Clinical Context</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tirzepatide differs fundamentally from semaglutide through dual receptor activation, creating distinct
                  clinical and regulatory considerations:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Comparative Efficacy Data (SURMOUNT vs STEP Trials)</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Parameter</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Tirzepatide (15mg)</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Semaglutide (2.4mg)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 text-xs">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Mean Weight Loss (72 weeks)</td>
                          <td className="px-4 py-3">20.9% total body weight</td>
                          <td className="px-4 py-3">14.9% total body weight</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">≥20% Weight Loss Achievers</td>
                          <td className="px-4 py-3">55% of patients</td>
                          <td className="px-4 py-3">32% of patients</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Nausea Incidence</td>
                          <td className="px-4 py-3">33% (dose-dependent)</td>
                          <td className="px-4 py-3">44% (dose-dependent)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#003366]">FDA-Approved Indications</td>
                          <td className="px-4 py-3">Type 2 diabetes (Mounjaro), Obesity (Zepbound)</td>
                          <td className="px-4 py-3">Type 2 diabetes (Ozempic), Obesity (Wegovy)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#e8eef4] border-t-2 border-[#003366] text-xs text-gray-600">
                    <p><strong className="text-[#003366]">Source:</strong> SURMOUNT-1 (NEJM 2022) and STEP-1 (NEJM 2021) trial data. Results represent intention-to-treat populations at maximum approved doses.</p>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4 mt-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Clinical Implication for Telehealth Selection</h3>
                  <p className="text-xs text-gray-700">
                    Superior efficacy creates higher demand and justifies potentially higher costs. However, dual-agonist
                    mechanism also increases pharmacological complexity, making compounding quality control more critical
                    than single-agonist formulations. Patients considering telehealth tirzepatide should prioritize
                    providers with documented compounding pharmacy certifications and potency testing protocols.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Compounded Tirzepatide Considerations */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Compounded Tirzepatide Quality Assessment</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Compounded tirzepatide quality variability exceeds semaglutide due to peptide complexity and dual-receptor
                  binding requirements:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366] text-sm">Quality Assurance Requirements</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Peptide Purity Testing:</strong> HPLC analysis confirming ≥95% purity (many compounders perform; not federally mandated)</p>
                      <p><strong className="text-[#003366]">Potency Verification:</strong> Assay confirming labeled dose within ±10% (critical for dual-agonist balance)</p>
                      <p><strong className="text-[#003366]">Sterility Testing:</strong> USP &lt;71&gt; compliance for injectable formulations (mandatory for 503A pharmacies)</p>
                      <p><strong className="text-[#003366]">Endotoxin Testing:</strong> LAL test confirming &lt;0.5 EU/mL per FDA guidance (prevents pyrogenic reactions)</p>
                      <p><strong className="text-[#003366]">Stability Data:</strong> Documentation of refrigerated shelf-life (typically 90-180 days for compounded)</p>
                    </div>
                  </div>

                  <div className="border-2 border-[#a31621] rounded-lg overflow-hidden">
                    <div className="bg-[#a31621] text-white px-4 py-2">
                      <h3 className="font-bold text-sm">Red Flags: Substandard Compounding</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">!</span>
                        <span><strong>No Testing Certificates:</strong> Pharmacy cannot or will not provide Certificate of Analysis (CoA) upon request</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">!</span>
                        <span><strong>Unusual Pricing:</strong> Significantly below market ($&lt;150/month) suggesting inferior source material</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">!</span>
                        <span><strong>Ambiguous Sourcing:</strong> Pharmacy unclear about API (active pharmaceutical ingredient) supplier origin</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">!</span>
                        <span><strong>No State License Verification:</strong> State board of pharmacy database shows no active license or disciplinary actions</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">!</span>
                        <span><strong>Unrefrigerated Shipping:</strong> Product arrives at room temperature without cold chain documentation</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2 text-sm">
                    <Award className="h-5 w-5 text-[#ffc72c]" />
                    High-Quality Compounding Pharmacy Indicators
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>PCAB (Pharmacy Compounding Accreditation Board) accreditation - voluntary gold standard</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Published testing protocols on pharmacy or provider website</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Batch-specific CoA available for patient review (demonstrates transparency)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Cold chain integrity monitoring (temperature logs, insulated packaging)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Documented adverse event reporting system integration</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Cost Analysis */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Tirzepatide Cost Structure Analysis</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tirzepatide pricing exhibits dose-dependent variability and significant disparity between branded and
                  compounded options:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Tirzepatide Monthly Cost Comparison</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid md:grid-cols-3 gap-3 text-xs">
                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366] mb-2">Branded Mounjaro/Zepbound</p>
                        <p className="text-gray-700 mb-1"><strong>Cash Price:</strong> $1,050-1,350/month</p>
                        <p className="text-gray-700 mb-1"><strong>With Insurance:</strong> $25-500/month</p>
                        <p className="text-gray-700 mb-1"><strong>Telehealth Consultation:</strong> +$49-99</p>
                        <p className="text-gray-700"><strong>Total Range:</strong> $74-1,449/month</p>
                      </div>

                      <div className="bg-[#ffc72c]/20 border-2 border-[#ffc72c] p-3 rounded">
                        <p className="font-bold text-[#003366] mb-2">Compounded Tirzepatide</p>
                        <p className="text-gray-700 mb-1"><strong>Starting Dose (2.5-5mg):</strong> $199-299/month</p>
                        <p className="text-gray-700 mb-1"><strong>Maintenance (7.5-10mg):</strong> $299-399/month</p>
                        <p className="text-gray-700 mb-1"><strong>Maximum Dose (15mg):</strong> $399-549/month</p>
                        <p className="text-gray-700"><strong>Consultation:</strong> Usually included</p>
                      </div>

                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366] mb-2">Cost Savings Potential</p>
                        <p className="text-gray-700 mb-1"><strong>vs Branded (Cash):</strong> $451-951/month saved</p>
                        <p className="text-gray-700 mb-1"><strong>Annual Savings:</strong> $5,412-11,412/year</p>
                        <p className="text-gray-700 mb-1"><strong>Trade-off:</strong> No FDA approval guarantee</p>
                        <p className="text-gray-700"><strong>Risk:</strong> Supply discontinuation if shortage ends</p>
                      </div>
                    </div>

                    <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-3 text-xs text-gray-700">
                      <p className="mb-2"><strong className="text-[#003366]">Dose Escalation Cost Impact:</strong></p>
                      <p>
                        Tirzepatide requires gradual titration: 2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg over 20+ weeks.
                        Total cost-to-max-dose for compounded: approximately $6,000-8,000 (6 months). Branded equivalent:
                        $6,300-8,100 (with good insurance) or $25,200-32,400 (cash).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Provider Selection Framework */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Award className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Tirzepatide Provider Evaluation Criteria</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tirzepatide-specific provider assessment requires evaluation beyond standard telehealth criteria:
                </p>

                <div className="space-y-3">
                  <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Criterion 1: Compounding Pharmacy Transparency</h3>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Essential Questions to Ask:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Which pharmacy compounds your tirzepatide? (Verify state license independently)</li>
                      <li>• Do you provide Certificates of Analysis? Can I see batch testing results?</li>
                      <li>• What is the API source? (Domestic FDA-registered facility vs overseas)</li>
                      <li>• How do you handle cold chain from pharmacy to patient? (Temperature monitoring)</li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Criterion 2: Dose Escalation Protocol Supervision</h3>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Provider Must Demonstrate:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Mandatory 4-week minimum at each dose level (2.5mg, 5mg, etc.)</li>
                      <li>• Adverse event assessment before each dose increase</li>
                      <li>• Clear protocol for managing nausea, vomiting, or pancreatitis symptoms</li>
                      <li>• Communication pathway for urgent clinical questions (not just email)</li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Criterion 3: FDA Shortage Status Contingency Plan</h3>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Critical Considerations:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• What happens when FDA removes tirzepatide from shortage list? (Likely 2025-2026)</li>
                      <li>• Will provider transition to branded Zepbound? At what cost?</li>
                      <li>• Or must patients find alternative providers independently?</li>
                      <li>• Does provider assist with insurance prior authorization for transition?</li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2 text-sm">Criterion 4: Contraindication Screening</h3>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Provider Must Screen For:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Personal or family history of medullary thyroid carcinoma (MTC)</li>
                      <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                      <li>• History of pancreatitis or pancreatic disease</li>
                      <li>• Severe gastroparesis or gastrointestinal motility disorders</li>
                      <li>• Pregnancy, breastfeeding, or inadequate contraception (Category C drug)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Decision Framework */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 5: Branded vs Compounded Decision Framework</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Evidence-based decision tree for tirzepatide source selection:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                    <div className="bg-[#ffc72c] px-4 py-2">
                      <h3 className="font-bold text-[#003366]">Choose Branded (Mounjaro/Zepbound) If:</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">●</span>
                        <span>Insurance provides favorable coverage ($&lt;$200/month copay)</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">●</span>
                        <span>Employer health plan or specialty pharmacy access available</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">●</span>
                        <span>Patient prioritizes FDA approval and quality assurance over cost</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">●</span>
                        <span>Long-term treatment anticipated (&gt;12 months) - supply continuity critical</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">●</span>
                        <span>Manufacturer savings card eligibility (typically $25/month for qualified patients)</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">Choose Compounded If:</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>No insurance coverage or high deductible not yet met (&gt;$5,000 remaining)</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>Insurance denies prior authorization despite appeals</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>Cost differential &gt;$300/month favors compounded option</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>Provider uses PCAB-accredited pharmacy with documented testing</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>Patient accepts quality variability risk in exchange for affordability</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-[#a31621] mb-2 flex items-center gap-2 text-sm">
                    <AlertCircle className="h-5 w-5" />
                    Critical Reminder: Compounded Availability Timeline
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    FDA may remove tirzepatide from drug shortage list once Eli Lilly manufacturing capacity fully restores
                    (projected 2025-2026). Upon removal:
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Compounded tirzepatide becomes illegal to compound within 60-90 days</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Patients must transition to branded ($1,000+/month cash) or discontinue</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Insurance prior authorization required for branded, typically 2-6 week approval timeline</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Budget accordingly: Compounded pricing is temporary, not permanent solution</span>
                    </li>
                  </ul>
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
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Compounding Pharmacy Standards
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Telehealth Provider Assessment
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Access Resources
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Supplementation Protocol
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
