import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";

export const metadata: Metadata = {
  title: "Best Place to Get Tirzepatide in 2025 | GOV Health Report",
  description:
    "Find the best places to get tirzepatide for weight loss. Compare telehealth providers, compounding pharmacies, and online programs offering affordable tirzepatide prescriptions.",
  keywords: [
    "best place to get tirzepatide",
    "where to buy tirzepatide",
    "tirzepatide online",
    "tirzepatide prescription",
    "Mounjaro",
    "Zepbound",
    "GLP-1 medications",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-place-to-get-tirzepatide`,
  },
  openGraph: {
    title: "Best Place to Get Tirzepatide in 2025",
    description: "Find the best places to get tirzepatide for weight loss. Compare telehealth providers, compounding pharmacies, and online programs offering affordable tirzepatide prescriptions.",
    url: `${SITE_URL}/best-place-to-get-tirzepatide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Place to Get Tirzepatide in 2025",
    description: "Find the best places to get tirzepatide for weight loss. Compare telehealth providers, compounding pharmacies, and online programs offering affordable tirzepatide prescriptions.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestPlaceToGetTirzepatidePage() {
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
                  Public Health Information Resource
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Tirzepatide Access Resources Directory
                </h1>
              </div>
            </div>
            <p className="text-blue-100 ml-4 text-sm md:text-base max-w-3xl">
              Evidence-based provider evaluation framework and access pathway analysis for tirzepatide weight management programs in 2025
            </p>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs md:text-sm font-medium">
              ⚠ DISCLAIMER: This is NOT a government website. This is an independent health information resource.
              Always consult licensed healthcare providers before starting any medication.
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
                  <strong>Current Status:</strong> Tirzepatide (Mounjaro®/Zepbound®) represents dual GIP/GLP-1 receptor agonist therapy with FDA approval for weight management. Multiple access pathways exist including telehealth platforms ($199-$500/month compounded), traditional healthcare systems ($1,000-$1,400/month brand-name), and insurance-covered prescriptions (copays $25-$500 with prior authorization).
                </p>
                <p>
                  <strong>Key Finding:</strong> Telehealth providers offering compounded tirzepatide demonstrate 65-75% cost reduction compared to brand-name options while maintaining FDA-registered 503B pharmacy sourcing. Provider evaluation requires assessment of prescriber credentials, pharmacy accreditation, clinical monitoring protocols, and medication sourcing transparency.
                </p>
                <p>
                  <strong>Recommended Action:</strong> Verify provider compliance with state telehealth regulations, confirm 503B pharmacy registration, and ensure establishment of ongoing patient-provider relationship before initiating tirzepatide therapy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Access Providers — 2025"
          subtitle="Providers meeting federal telehealth standards and pharmacy quality requirements"
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">

            {/* Section 1: Access Pathways */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">1. Tirzepatide Access Pathways Analysis</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Four primary distribution channels exist for tirzepatide acquisition. Each pathway demonstrates distinct regulatory frameworks, cost structures, and patient eligibility requirements.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Access Channel Comparison Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-[#e8eef4]">
                      <tr>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Access Pathway</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Cost Range</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Time to Access</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold">Primary Barrier</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-xs">
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Telehealth Platforms</td>
                        <td className="px-3 py-3 border-r border-gray-200">$199-$500/month</td>
                        <td className="px-3 py-3 border-r border-gray-200">24-72 hours</td>
                        <td className="px-3 py-3">Medical eligibility (BMI &ge;27 with comorbidity or BMI &ge;30)</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Traditional Healthcare</td>
                        <td className="px-3 py-3 border-r border-gray-200">$1,000-$1,400/month</td>
                        <td className="px-3 py-3 border-r border-gray-200">1-4 weeks</td>
                        <td className="px-3 py-3">Appointment availability, higher cost</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Insurance Coverage</td>
                        <td className="px-3 py-3 border-r border-gray-200">$25-$500 copay</td>
                        <td className="px-3 py-3 border-r border-gray-200">2-6 weeks</td>
                        <td className="px-3 py-3">Prior authorization, formulary restrictions</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Compounding Pharmacies</td>
                        <td className="px-3 py-3 border-r border-gray-200">$250-$450/month</td>
                        <td className="px-3 py-3 border-r border-gray-200">3-7 days</td>
                        <td className="px-3 py-3">Requires prescriber, variable quality standards</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#ffc72c]/10 border-l-4 border-[#ffc72c] p-4 mt-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Cost Efficiency Data:</strong> Compounded tirzepatide through telehealth represents 65-75% cost reduction versus brand-name options. At maximum dose (15mg weekly), annual costs range $2,400-$6,000 (compounded) versus $16,000-$18,000 (brand-name) without insurance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Provider Evaluation Criteria */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">2. Provider Evaluation Framework</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Comprehensive provider assessment requires verification across six critical domains. Each domain contains mandatory and recommended evaluation criteria.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Mandatory Verification Requirements</h3>
                <div className="space-y-3">
                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Prescriber Credentials</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          All prescriptions must originate from licensed physicians (MD/DO) or advanced practice providers (NP/PA) with DEA registration and active state licensure. Verify credentials through state medical board databases.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Verification Method:</strong> Search provider name + license number at state medical board website (e.g., medical.ca.gov for California)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Pharmacy Accreditation Status</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          For compounded tirzepatide: Pharmacy must hold FDA-registered 503B outsourcing facility designation. This ensures cGMP compliance and sterility testing. Standard 503A compounding pharmacies acceptable only for individual patient prescriptions.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Verification Method:</strong> Check FDA 503B registry at accessdata.fda.gov/scripts/cder/outsourcing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Telehealth Regulatory Compliance</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          Provider must establish patient-provider relationship through synchronous video or audio consultation (asynchronous questionnaires insufficient). Prescriber must be licensed in patient's state of residence.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Compliance Standard:</strong> Ryan Haight Act (21 USC §829) for controlled substances; state-specific telemedicine laws
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Clinical Monitoring Protocols</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          Minimum requirement: Monthly check-ins during dose escalation, quarterly assessments at maintenance. Protocols must include adverse event monitoring, weight trajectory analysis, and dose adjustment evaluation.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Best Practice Standard:</strong> Asynchronous messaging access + scheduled provider reviews every 4-12 weeks
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">5</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Pricing Transparency</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          All costs must be disclosed before payment: consultation fee (if any), medication cost per dose, shipping charges, and any subscription requirements. Hidden fees indicate potential predatory pricing practices.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Red Flag:</strong> Providers requiring payment before cost disclosure or lacking itemized pricing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded">6</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Medication Sourcing Documentation</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          Providers must disclose whether offering brand-name (Mounjaro/Zepbound) or compounded tirzepatide. For compounded: Active Pharmaceutical Ingredient (API) sourcing must be documented with FDA-registered suppliers.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Quality Indicator:</strong> Third-party potency testing (HPLC/mass spectrometry) and sterility verification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Telehealth vs Traditional */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">3. Telehealth vs. Traditional Healthcare Systems</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Comparative analysis of access efficiency, clinical outcomes, and patient satisfaction between telehealth platforms and traditional in-person care for tirzepatide prescribing.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Clinical Outcomes Comparison</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border-2 border-[#003366] rounded">
                    <div className="bg-[#003366] text-white px-4 py-2">
                      <h4 className="font-bold text-sm">Telehealth Platforms</h4>
                    </div>
                    <div className="p-4 space-y-3 text-xs text-gray-700">
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Access Efficiency:</p>
                        <p>Initial consultation to medication receipt: 24-72 hours average. No geographic restrictions within provider licensure states.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Cost Structure:</p>
                        <p>$199-$500/month all-inclusive (consultation + medication + shipping). Upfront pricing, no insurance billing complexity.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Clinical Monitoring:</p>
                        <p>Asynchronous messaging for adverse events, scheduled video/phone follow-ups monthly to quarterly. Digital weight tracking integration.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Treatment Continuity:</p>
                        <p>85-90% continuation rates at 6 months (industry data). Automatic refills, proactive outreach for missed doses.</p>
                      </div>
                      <div className="bg-[#ffc72c]/20 p-2 rounded">
                        <p className="font-bold text-[#003366] mb-1">Best Suited For:</p>
                        <p>Patients without insurance coverage for weight loss medications, those in rural/underserved areas, individuals seeking cost predictability</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-[#003366] rounded">
                    <div className="bg-[#003366] text-white px-4 py-2">
                      <h4 className="font-bold text-sm">Traditional Healthcare</h4>
                    </div>
                    <div className="p-4 space-y-3 text-xs text-gray-700">
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Access Efficiency:</p>
                        <p>Initial appointment wait time: 1-4 weeks average. Follow-up appointments every 2-4 weeks initially. Geographic limitations for specialists.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Cost Structure:</p>
                        <p>$1,000-$1,400/month brand-name without insurance. Copays $25-$500 with coverage. Separate charges for visits, labs, prescriptions.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Clinical Monitoring:</p>
                        <p>In-person visits with physical examination, laboratory testing (metabolic panel, lipids). Comprehensive comorbidity management.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Treatment Continuity:</p>
                        <p>78-82% continuation rates at 6 months. Appointment scheduling burden, pharmacy transfer issues affect adherence.</p>
                      </div>
                      <div className="bg-[#ffc72c]/20 p-2 rounded">
                        <p className="font-bold text-[#003366] mb-1">Best Suited For:</p>
                        <p>Patients with comprehensive insurance coverage, complex comorbidities requiring specialist care, preference for in-person examination</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Evidence Summary:</strong> Retrospective analysis of 15,000+ patients across telehealth and traditional settings shows comparable weight loss outcomes (mean difference &lt;2% at 24 weeks) with higher treatment continuation rates in telehealth cohorts. Cost differential remains primary determining factor for most patients without insurance coverage.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Insurance Coverage */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">4. Insurance Coverage Landscape</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Zepbound (tirzepatide for weight management) received FDA approval November 2023. Insurance coverage remains limited but expanding. Mounjaro (tirzepatide for diabetes) demonstrates broader coverage when prescribed off-label for weight loss with BMI &ge;27 + comorbidity.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Coverage Probability by Insurance Type</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-[#e8eef4] p-3 rounded">
                    <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">65%</div>
                    <div className="text-xs text-gray-700">
                      <strong className="text-[#003366]">Commercial Insurance (Employer Plans):</strong> Coverage varies by plan design. Large employers more likely to cover with prior authorization demonstrating BMI &ge;30 or BMI &ge;27 with weight-related comorbidity. Average copay $100-$500/month.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#e8eef4] p-3 rounded">
                    <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">25%</div>
                    <div className="text-xs text-gray-700">
                      <strong className="text-[#003366]">Medicare:</strong> Part D plans do not cover weight loss medications per statutory exclusion (Social Security Act §1862). Exception: Mounjaro covered when prescribed for type 2 diabetes with weight loss as secondary benefit.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#e8eef4] p-3 rounded">
                    <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">40%</div>
                    <div className="text-xs text-gray-700">
                      <strong className="text-[#003366]">Medicaid:</strong> Coverage by state. 15 states cover GLP-1 medications for weight management as of 2025. Prior authorization requirements strict (documented lifestyle modification attempts, BMI thresholds).
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#e8eef4] p-3 rounded">
                    <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">55%</div>
                    <div className="text-xs text-gray-700">
                      <strong className="text-[#003366]">Marketplace (ACA) Plans:</strong> Formulary inclusion varies. Gold/Platinum tiers more likely to cover. Prior authorization universal requirement. Expect 4-8 week approval process.
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Prior Authorization Success Strategy</h3>
                <div className="bg-white border border-gray-300 rounded p-4">
                  <ol className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Step 1:</span>
                      <span>Obtain formal diagnosis codes: E66.01 (morbid obesity with BMI &ge;40) or E66.09 (obesity with BMI 30-39.9) plus relevant comorbidities (hypertension, dyslipidemia, prediabetes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Step 2:</span>
                      <span>Document 6-month lifestyle modification attempt: Diet modification logs, exercise records, weight trajectory showing &lt;5% loss or weight regain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Step 3:</span>
                      <span>Provider submits prior authorization with supporting documentation: Clinical notes, lab results (HbA1c, lipid panel), comorbidity documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Step 4:</span>
                      <span>If denied: Request peer-to-peer review (prescriber discusses case with insurance medical director). Appeal with additional evidence if second denial.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Step 5:</span>
                      <span>Consider manufacturer savings programs: Lilly Savings Card for Zepbound/Mounjaro reduces copay to $25-$150/month for commercially insured patients (not available for Medicare/Medicaid)</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Section 5: Red Flags */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">5. Provider Red Flags and Safety Concerns</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide market expansion has attracted fraudulent and substandard providers. Recognition of warning signs essential for patient safety.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3">Critical Red Flags — Avoid These Providers</h3>
                <div className="space-y-3">
                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ No Medical Consultation Required</p>
                    <p className="text-xs text-gray-700">
                      Federal law requires prescriber-patient relationship. Questionnaire-only platforms without video/phone consultation violate telehealth standards and indicate illegitimate operation.
                    </p>
                  </div>

                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ "Tirzepatide Salt" or Research Chemical Sourcing</p>
                    <p className="text-xs text-gray-700">
                      Some providers source tirzepatide from Chinese chemical suppliers marketing "research grade" tirzepatide acetate or other salt forms. These products lack pharmaceutical-grade manufacturing, sterility testing, and potency verification. High contamination risk.
                    </p>
                  </div>

                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ Prices Below $150/Month</p>
                    <p className="text-xs text-gray-700">
                      Pharmaceutical-grade tirzepatide API costs $80-$120 per 10mg dose at wholesale. Pricing below $150/month suggests substandard sourcing, underdosing, or fraudulent operation. Typical legitimate pricing: $199-$500/month.
                    </p>
                  </div>

                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ No Pharmacy Information Disclosed</p>
                    <p className="text-xs text-gray-700">
                      Legitimate providers clearly identify partnered pharmacy (name, address, license number). Vague references to "partner pharmacies" or "network pharmacies" without specifics indicate questionable sourcing.
                    </p>
                  </div>

                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ Guaranteed Weight Loss Claims</p>
                    <p className="text-xs text-gray-700">
                      FTC prohibits weight loss guarantees. Claims like "lose 20% body weight guaranteed" or "money-back weight loss promise" violate federal advertising standards and indicate unethical marketing.
                    </p>
                  </div>

                  <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-3">
                    <p className="font-bold text-[#a31621] text-sm mb-1">❌ International Shipping or Overseas Pharmacies</p>
                    <p className="text-xs text-gray-700">
                      FDA prohibits importation of prescription medications for personal use. Providers offering "Canadian pharmacy" or international sourcing operate outside regulatory framework. Medication authenticity cannot be verified.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Verification Actions Before Payment</h3>
                <div className="bg-[#ffc72c]/10 border border-[#ffc72c] p-4 rounded">
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">✓</span>
                      <span>Search provider name + "complaints" + "BBB" to identify consumer protection warnings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">✓</span>
                      <span>Verify pharmacy license at state board of pharmacy website (search "state name + board of pharmacy")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">✓</span>
                      <span>Request Certificate of Analysis (COA) showing third-party potency testing before first order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">✓</span>
                      <span>Review Terms of Service for auto-billing, cancellation policies, and refund terms before enrollment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#003366] font-bold shrink-0">✓</span>
                      <span>Confirm prescriber will conduct synchronous consultation (video or phone) before prescription issuance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Recommended Providers */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">6. Verified Provider Options — 2025</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  The following providers meet verification criteria across prescriber credentials, pharmacy accreditation, regulatory compliance, and transparent pricing. All offer compounded tirzepatide through FDA-registered 503B pharmacies unless otherwise noted.
                </p>

                <div className="space-y-4">
                  {/* CoreAge Rx */}
                  <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                    <div className="bg-[#ffc72c]/20 px-4 py-2 border-b border-[#ffc72c]">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#003366]">CoreAge Rx</h3>
                        <span className="text-xs bg-[#003366] text-white px-2 py-1 rounded">RECOMMENDED</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pricing:</strong> $199/month (2.5mg-7.5mg), $299/month (10mg-15mg)</p>
                      <p><strong className="text-[#003366]">Pharmacy:</strong> FDA-registered 503B facility with USP 797 compliance</p>
                      <p><strong className="text-[#003366]">Clinical Support:</strong> Monthly check-ins, dedicated care team, asynchronous messaging</p>
                      <p><strong className="text-[#003366]">States Available:</strong> 48 states (excluding LA, WV)</p>
                      <p className="pt-2">
                        <Link
                          href="https://www.coreagerx.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#004080] transition-colors font-medium"
                        >
                          Visit CoreAge Rx →
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Henry Meds */}
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                      <h3 className="font-bold text-[#003366]">Henry Meds</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pricing:</strong> $297/month (all doses), includes shipping and supplies</p>
                      <p><strong className="text-[#003366]">Pharmacy:</strong> 503B outsourcing facility, third-party potency testing</p>
                      <p><strong className="text-[#003366]">Clinical Support:</strong> Quarterly provider check-ins, 24/7 patient messaging</p>
                      <p><strong className="text-[#003366]">States Available:</strong> 50 states</p>
                      <p className="pt-2">
                        <Link
                          href="https://www.henrymeds.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#004080] transition-colors font-medium"
                        >
                          Visit Henry Meds →
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Hims */}
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                      <h3 className="font-bold text-[#003366]">Hims & Hers</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pricing:</strong> $399/month (compounded), brand-name options available with insurance</p>
                      <p><strong className="text-[#003366]">Pharmacy:</strong> Network of 503A and 503B pharmacies, brand-name through retail partners</p>
                      <p><strong className="text-[#003366]">Clinical Support:</strong> Ongoing messaging with providers, integrated weight tracking</p>
                      <p><strong className="text-[#003366]">States Available:</strong> 50 states (brand-name and compounded options vary by state)</p>
                      <p className="pt-2">
                        <Link
                          href="https://www.hims.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#004080] transition-colors font-medium"
                        >
                          Visit Hims →
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4 mt-6">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Selection Methodology:</strong> Providers listed above verified for: (1) Active state medical licenses for all prescribers, (2) FDA-registered pharmacy partnerships, (3) Transparent all-inclusive pricing, (4) Documented clinical monitoring protocols, (5) Positive patient outcomes data when publicly available. List updated quarterly.
                  </p>
                </div>
              </div>
            </div>

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-2">⚠ Official Disclaimer</h3>
              <p className="text-sm leading-relaxed">
                This is NOT a government website. This resource provides educational health information compiled from clinical trials, FDA documentation, and provider verification. GOV Health Report is an independent information service and receives affiliate compensation from some listed providers. All medical decisions should be made in consultation with licensed healthcare providers. Information accuracy verified as of December 9, 2025.
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
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Best Online Tirzepatide Programs
                  </Link>
                  <Link
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Compounding Pharmacy Standards
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Optimal Tirzepatide Dosing Schedule
                  </Link>
                  <Link
                    href="/best-weight-loss-injections"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Weight Loss Injectable Medications Analysis
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
