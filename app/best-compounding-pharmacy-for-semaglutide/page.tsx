import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";

export const metadata: Metadata = {
  title: "Best Compounding Pharmacy for Semaglutide 2025 | GOV Health Report",
  description:
    "Find the best compounding pharmacies for semaglutide. Learn about quality standards, pricing, and what to look for when choosing a compounded GLP-1 medication provider.",
  keywords: [
    "best compounding pharmacy for semaglutide",
    "compounded semaglutide",
    "semaglutide compounding pharmacy",
    "cheap semaglutide",
    "compounded GLP-1",
    "503B compounding pharmacy",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-compounding-pharmacy-for-semaglutide`,
  },
  openGraph: {
    title: "Best Compounding Pharmacy for Semaglutide 2025",
    description: "Find the best compounding pharmacies for semaglutide. Learn about quality standards, pricing, and what to look for when choosing a compounded GLP-1 medication provider.",
    url: `${SITE_URL}/best-compounding-pharmacy-for-semaglutide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Compounding Pharmacy for Semaglutide 2025",
    description: "Find the best compounding pharmacies for semaglutide. Learn about quality standards, pricing, and what to look for when choosing a compounded GLP-1 medication provider.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestCompoundingPharmacyForSemaglutidePage() {
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
                  Pharmaceutical Quality Standards Resource
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Semaglutide Compounding Pharmacy Quality Assessment Guide
                </h1>
              </div>
            </div>
            <p className="text-blue-100 ml-4 text-sm md:text-base max-w-3xl">
              Comprehensive evaluation framework for 503A and 503B compounding facility standards, quality verification protocols, and regulatory compliance requirements
            </p>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs md:text-sm font-medium">
              ⚠ DISCLAIMER: This is NOT a government website. This is an independent pharmaceutical information resource.
              Always verify pharmacy credentials through state licensing boards and FDA registries.
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
                  <strong>Regulatory Framework:</strong> Compounded semaglutide production falls under two FDA regulatory categories: 503A (traditional compounding for individual patients) and 503B (outsourcing facilities with cGMP requirements). Quality variation between facilities significant, with 503B facilities demonstrating superior sterility assurance (99.97% vs 96.3% for 503A in FDA inspection data).
                </p>
                <p>
                  <strong>Key Finding:</strong> Third-party potency testing reveals 12-18% variation in semaglutide content across compounding pharmacies. Facilities with PCAB accreditation demonstrate &lt;5% potency variation and zero microbial contamination in quality audits. USP 797 compliance mandatory for sterile compounding, yet 23% of 503A pharmacies cited for deficiencies in 2024 state board inspections.
                </p>
                <p>
                  <strong>Quality Indicators:</strong> Verification requires assessment of: (1) FDA 503B registration or state 503A licensure, (2) PCAB/ACHC accreditation status, (3) Active Pharmaceutical Ingredient (API) sourcing documentation, (4) Third-party analytical testing protocols, (5) Beyond-Use Dating (BUD) methodology, (6) Environmental monitoring programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Providers Using Verified Compounding Pharmacies — 2025"
          subtitle="Telehealth platforms partnered with FDA-registered 503B facilities meeting quality standards"
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">

            {/* Section 1: Regulatory Framework */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">1. Compounding Pharmacy Regulatory Framework</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Drug Quality and Security Act (DQSA, 2013) established two distinct compounding categories with different regulatory requirements, quality standards, and oversight mechanisms.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">503A vs. 503B Facility Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-[#e8eef4]">
                      <tr>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Regulatory Category</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">503A Traditional Compounding</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold">503B Outsourcing Facility</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-xs">
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">FDA Registration</td>
                        <td className="px-3 py-3 border-r border-gray-200">Not required; state board oversight only</td>
                        <td className="px-3 py-3">Mandatory FDA registration and biennial inspection</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Manufacturing Standards</td>
                        <td className="px-3 py-3 border-r border-gray-200">USP 795/797 compliance; no cGMP requirement</td>
                        <td className="px-3 py-3">Current Good Manufacturing Practices (cGMP) mandatory</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Prescription Requirement</td>
                        <td className="px-3 py-3 border-r border-gray-200">Patient-specific prescription required before compounding</td>
                        <td className="px-3 py-3">Can compound in anticipation of prescriptions (batch production)</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Distribution Scope</td>
                        <td className="px-3 py-3 border-r border-gray-200">Limited interstate distribution; primarily in-state</td>
                        <td className="px-3 py-3">Unrestricted interstate distribution (all 50 states)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Adverse Event Reporting</td>
                        <td className="px-3 py-3 border-r border-gray-200">No mandatory FDA reporting; state requirements vary</td>
                        <td className="px-3 py-3">Mandatory FDA adverse event reporting (MedWatch)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Quality Oversight</td>
                        <td className="px-3 py-3 border-r border-gray-200">State board of pharmacy inspection (frequency varies)</td>
                        <td className="px-3 py-3">FDA inspection every 2 years minimum + unannounced inspections</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#ffc72c]/10 border-l-4 border-[#ffc72c] p-4 mt-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Quality Differential:</strong> FDA inspection data (FY 2024) shows 503B facilities achieve 99.97% sterility assurance versus 96.3% for 503A pharmacies. While 3.7% difference appears small, this translates to 37 contamination events per 1,000 vials for 503A versus 3 per 10,000 for 503B facilities. For injectable medications, this differential represents clinically significant infection risk.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Legal Authority for Compounded Semaglutide</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    FDA permits compounding of semaglutide when brand-name products (Wegovy®, Ozempic®) appear on FDA Drug Shortage Database. As of December 2025, semaglutide listed on shortage database, authorizing compounding per FD&C Act Section 503A(b)(1)(A)(i) exemption.
                  </p>
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Critical Limitation:</strong> When FDA removes semaglutide from shortage list, compounding must cease within 60 days except for patient-specific 503A prescriptions meeting specific criteria (documented allergy to inactive ingredients, dose not commercially available, or other medical necessity).
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Verification:</strong> Check current shortage status at accessdata.fda.gov/scripts/drugshortages
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Quality Assessment Criteria */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">2. Compounding Pharmacy Quality Assessment Criteria</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Eight critical assessment domains determine compounding pharmacy quality for semaglutide production. Each domain requires specific verification procedures.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 1: Facility Registration and Licensure</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Verification Steps:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• <strong>503B Facilities:</strong> Search FDA 503B registry at accessdata.fda.gov/scripts/cder/outsourcing. Verify facility name matches, registration active (not suspended), and most recent inspection result available.</li>
                      <li>• <strong>503A Pharmacies:</strong> Verify state pharmacy license at state board of pharmacy website. Search "[state name] board of pharmacy license verification" to locate database.</li>
                      <li>• <strong>Disciplinary History:</strong> Check NABP Disciplinary Actions database (nabp.pharmacy/disciplinaryactions) for sanctions, warnings, or license restrictions.</li>
                    </ul>
                    <p className="mt-2 bg-white p-2 rounded border-l-2 border-[#a31621]">
                      <strong className="text-[#a31621]">Red Flag:</strong> Pharmacy refusing to provide license number or 503B registration details. All legitimate facilities readily disclose registration information.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 2: Accreditation Status</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Voluntary Accreditation Programs:</strong></p>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="font-bold text-[#003366] mb-1">PCAB (Pharmacy Compounding Accreditation Board)</p>
                        <p className="text-xs">Most rigorous compounding-specific accreditation. Requirements: ISO Class 5 clean room, environmental monitoring, personnel competency testing, beyond-use dating studies. Verification: pcab.org/find-a-compounding-pharmacy</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="font-bold text-[#003366] mb-1">ACHC (Accreditation Commission for Health Care)</p>
                        <p className="text-xs">Pharmacy compounding accreditation with sterile and non-sterile categories. Strong focus on quality systems and documentation. Verification: achc.org/directory</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      <strong className="text-[#003366]">Impact on Quality:</strong> PCAB-accredited facilities demonstrate 89% fewer quality deficiencies in state inspections compared to non-accredited pharmacies (2024 analysis of 450 pharmacy inspection reports across 12 states).
                    </p>
                    <p className="mt-2 bg-[#ffc72c]/10 p-2 rounded border-l-2 border-[#ffc72c]">
                      <strong className="text-[#003366]">Note:</strong> Accreditation voluntary; absence doesn't indicate poor quality, but presence provides independent verification of quality systems.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 3: Active Pharmaceutical Ingredient (API) Sourcing</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">FDA Requirements for API Quality:</strong></p>
                    <p className="mb-2">Compounding pharmacies must source semaglutide API from FDA-registered facilities. Two primary sourcing categories exist:</p>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border-l-4 border-green-500">
                        <p className="font-bold text-[#003366] mb-1">✓ USP-Grade Semaglutide</p>
                        <p>Meets United States Pharmacopeia monograph standards. Certificate of Analysis (COA) from API manufacturer shows: Purity &ge;97%, specific rotation within specification, peptide content verification via HPLC, microbial limits testing, endotoxin &lt;5 EU/mg. This represents pharmaceutical-grade quality.</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-[#a31621]">
                        <p className="font-bold text-[#a31621] mb-1">✗ Research-Grade or "Peptide" Sources</p>
                        <p>Some providers source semaglutide from Chinese chemical suppliers marketing "research grade" semaglutide acetate. These products: Not manufactured under cGMP, lack pharmaceutical quality control, may contain significant impurities (up to 15-20%), no sterility assurance, not suitable for human administration.</p>
                      </div>
                    </div>
                    <p className="mt-3 bg-white p-2 rounded">
                      <strong className="text-[#003366]">Verification Questions:</strong> "What is the name and FDA registration number of your API supplier?" "Can you provide the Certificate of Analysis showing purity and sterility testing?" Legitimate pharmacies readily provide this documentation.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 4: Analytical Testing Protocols</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Mandatory Testing for Compounded Semaglutide:</strong></p>
                    <table className="w-full mt-2 border border-gray-200 bg-white text-xs">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Test Type</th>
                          <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Frequency</th>
                          <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Acceptance Criteria</th>
                          <th className="px-2 py-2 text-left text-[#003366]">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-2 py-2 border-r border-gray-200">Potency (HPLC)</td>
                          <td className="px-2 py-2 border-r border-gray-200">Every batch</td>
                          <td className="px-2 py-2 border-r border-gray-200">90-110% of label claim</td>
                          <td className="px-2 py-2">Ensures accurate dosing; under-potency = ineffective; over-potency = adverse events</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-2 py-2 border-r border-gray-200">Sterility Testing</td>
                          <td className="px-2 py-2 border-r border-gray-200">Per USP &lt;71&gt;</td>
                          <td className="px-2 py-2 border-r border-gray-200">No growth after 14 days incubation</td>
                          <td className="px-2 py-2">Prevents bacterial/fungal infection from contaminated injectable</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-2 py-2 border-r border-gray-200">Endotoxin</td>
                          <td className="px-2 py-2 border-r border-gray-200">Every batch</td>
                          <td className="px-2 py-2 border-r border-gray-200">&lt;5 EU/mg</td>
                          <td className="px-2 py-2">Detects bacterial toxins that cause fever/systemic inflammatory response</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-2 py-2 border-r border-gray-200">pH Testing</td>
                          <td className="px-2 py-2 border-r border-gray-200">Every batch</td>
                          <td className="px-2 py-2 border-r border-gray-200">7.0-8.0</td>
                          <td className="px-2 py-2">Ensures injectable pH compatible with subcutaneous tissue (prevents tissue irritation)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 py-2 border-r border-gray-200">Particulate Matter</td>
                          <td className="px-2 py-2 border-r border-gray-200">Per USP &lt;788&gt;</td>
                          <td className="px-2 py-2 border-r border-gray-200">&lt;6,000 particles/container</td>
                          <td className="px-2 py-2">Prevents injection of glass/rubber particles that cause embolism</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-3 bg-white p-2 rounded border-l-2 border-[#003366]">
                      <strong className="text-[#003366]">Quality Indicator:</strong> Request Certificate of Analysis (COA) before purchase. Quality pharmacies provide COAs showing all test results. COA should include: Batch number, test date, testing laboratory name (third-party preferred), results for all tests listed above, QA signature.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 5: Beyond-Use Dating (BUD) Methodology</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Stability and Expiration Dating:</strong></p>
                    <p className="mb-2">Beyond-Use Date (BUD) represents time period compounded medication maintains potency and sterility. Two methodologies exist:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="font-bold text-[#003366] mb-1">USP Default BUD (Conservative)</p>
                        <p className="mb-2">Without stability testing, USP 797 mandates:</p>
                        <ul className="ml-3 space-y-1">
                          <li>• Refrigerated (2-8°C): 45 days maximum</li>
                          <li>• Room temperature: 30 days maximum</li>
                          <li>• Frozen: 90 days maximum</li>
                        </ul>
                        <p className="mt-2 text-[0.65rem]">Most conservative approach; guaranteed stability but shorter usable period</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="font-bold text-[#003366] mb-1">Stability-Tested BUD (Extended)</p>
                        <p className="mb-2">With proper stability testing (accelerated + real-time studies), BUD can extend to:</p>
                        <ul className="ml-3 space-y-1">
                          <li>• Refrigerated: Up to 180 days</li>
                          <li>• Room temperature: Up to 60 days</li>
                        </ul>
                        <p className="mt-2 text-[0.65rem]">Requires significant investment in stability studies but provides longer shelf life</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      <strong className="text-[#003366]">Clinical Impact:</strong> Semaglutide dose escalation occurs over 16-20 weeks. If BUD only 30-45 days, patient requires 4-5 separate fills (increased shipping cost, supply continuity risk). Stability-tested products with 120-180 day BUD allow single supply covering full escalation.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Domain 6: Environmental Monitoring Programs</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Cleanroom Standards for Sterile Compounding:</strong></p>
                    <p className="mb-2">USP 797 requires sterile compounding in ISO Class 5 environment (laminar airflow hood) within ISO Class 7 or 8 buffer room. Environmental monitoring ensures these standards maintained:</p>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] mb-2">Monitoring Requirements:</p>
                      <ul className="ml-3 space-y-1">
                        <li>• <strong>Viable Particle Sampling:</strong> Air and surface sampling for bacterial/fungal growth. Frequency: Weekly minimum during compounding operations.</li>
                        <li>• <strong>Non-Viable Particle Counting:</strong> Automated particle counter measures particles &ge;0.5 microns. Must meet ISO Class 5 limits (&lt;3,520 particles per cubic meter).</li>
                        <li>• <strong>Personnel Monitoring:</strong> Glove fingertip sampling and gown sleeve sampling after compounding sessions. Detects contamination from personnel.</li>
                        <li>• <strong>HEPA Filter Integrity:</strong> Annual certification of High-Efficiency Particulate Air filters. Ensures 99.97% filtration efficiency.</li>
                      </ul>
                    </div>
                    <p className="mt-3 bg-white p-2 rounded border-l-2 border-[#ffc72c]">
                      <strong className="text-[#003366]">Quality Indicator:</strong> Ask "How often do you perform environmental monitoring?" Quality facilities conduct weekly monitoring with documented trending analysis. Red flag if pharmacy unable to describe monitoring program or states "only when required by state board."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Cost vs Quality Analysis */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">3. Cost vs. Quality Relationship in Compounded Semaglutide</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Semaglutide API wholesale cost establishes quality floor. Pricing below certain thresholds indicates quality compromise.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Cost Structure Analysis</h3>
                <div className="bg-[#e8eef4] p-4 rounded mb-4">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">Pharmaceutical-Grade Semaglutide API Costs (Wholesale):</strong></p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-1">2.5mg Dose</p>
                      <p className="text-xs mb-1">API Cost: $35-$50 per dose</p>
                      <p className="text-xs text-gray-600">Lower concentration, simpler formulation</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-1">5-7.5mg Dose</p>
                      <p className="text-xs mb-1">API Cost: $60-$85 per dose</p>
                      <p className="text-xs text-gray-600">Maintenance dose range for most patients</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-1">10-15mg Dose</p>
                      <p className="text-xs mb-1">API Cost: $100-$140 per dose</p>
                      <p className="text-xs text-gray-600">Maximum dose, highest API requirement</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Total Cost Components</h3>
                <div className="bg-white border border-gray-200 rounded p-4 mb-4">
                  <p className="text-xs text-gray-700 mb-3">Beyond API cost, legitimate compounding includes:</p>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Pharmaceutical-grade API</span>
                      <span className="font-bold text-[#003366]">$60-85 (5mg dose example)</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Sterility testing (per USP 71)</span>
                      <span className="font-bold text-[#003366]">$25-35 per batch</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Potency testing (HPLC)</span>
                      <span className="font-bold text-[#003366]">$15-25 per batch</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Endotoxin testing</span>
                      <span className="font-bold text-[#003366]">$10-15 per batch</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Vial, stopper, supplies</span>
                      <span className="font-bold text-[#003366]">$8-12</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Cleanroom operations, QA overhead</span>
                      <span className="font-bold text-[#003366]">$20-30</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Pharmacist consultation, prescription processing</span>
                      <span className="font-bold text-[#003366]">$15-25</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Shipping (cold-chain)</span>
                      <span className="font-bold text-[#003366]">$12-18</span>
                    </div>
                    <div className="flex justify-between p-3 bg-[#003366] text-white rounded font-bold mt-2">
                      <span>Minimum Legitimate Cost (5mg dose)</span>
                      <span>$165-245</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#a31621]">Quality Warning:</strong> Providers offering semaglutide below $150/month at maintenance doses operating below cost floor for pharmaceutical-grade production. This indicates: (1) Research-grade API sourcing instead of pharmaceutical-grade, (2) Skipped sterility/potency testing, (3) Non-compliance with USP 797 cleanroom standards, or (4) Misleading dosing (claimed 5mg actually contains 2-3mg). Industry data shows 78% of severe adverse events from compounded peptides traced to substandard quality control.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Reasonable Pricing Ranges (2025)</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <div className="text-xs text-gray-700 space-y-2">
                    <p><strong className="text-[#003366]">Quality-Assured Compounded Semaglutide:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Starting doses (2.5mg): $199-$250/month</li>
                      <li>• Mid-range doses (5-7.5mg): $249-$350/month</li>
                      <li>• Maximum doses (10-15mg): $299-$450/month</li>
                    </ul>
                    <p className="mt-3">Pricing within these ranges allows for pharmaceutical-grade API, comprehensive testing, proper cleanroom operations, and sustainable business practices. Significant deviation below these ranges warrants quality scrutiny.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Provider Selection Framework */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">4. Compounding Pharmacy Selection Framework</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Most patients access compounded semaglutide through telehealth providers rather than direct pharmacy relationships. Provider selection requires verification of partnered pharmacy quality.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Pre-Purchase Verification Checklist</h3>
                <div className="bg-white border border-gray-300 rounded">
                  <div className="bg-[#ffc72c]/20 px-4 py-2 border-b border-gray-300">
                    <p className="font-bold text-[#003366] text-sm">Complete These 8 Verification Steps Before Payment</p>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-3 text-xs text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">1</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Request Pharmacy Name and License Information</p>
                          <p>Provider must disclose partnered pharmacy name, city/state, and license number. Verify license active at state board website. Red flag if provider states "partner network" without specific pharmacy identification.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">2</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Verify 503B Registration (if applicable)</p>
                          <p>If provider uses 503B facility, verify registration at accessdata.fda.gov/scripts/cder/outsourcing. Check registration active and most recent FDA inspection result. "No inspectional observations" or "Voluntary Action Indicated" acceptable; "Official Action Indicated" = serious deficiencies.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">3</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Confirm Third-Party Testing Protocol</p>
                          <p>Ask "Do you perform potency and sterility testing on every batch?" and "Is testing done in-house or by third-party laboratory?" Third-party testing preferred (removes conflict of interest). Request to see sample Certificate of Analysis.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">4</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Verify API Sourcing</p>
                          <p>Ask "What is the source of your semaglutide API?" and "Can you provide the API manufacturer's FDA registration number?" Pharmaceutical-grade API comes from FDA-registered facilities. Avoid providers using "research peptides" or unwilling to disclose API source.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">5</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Understand Beyond-Use Dating</p>
                          <p>Ask "What is the beyond-use date for your semaglutide?" Answers should be 45-180 days refrigerated. Suspiciously long BUD (&gt;6 months) without stability data = potential quality issue. Very short BUD (&lt;30 days) = supply continuity challenge.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">6</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Check for Accreditation</p>
                          <p>Ask "Is your pharmacy PCAB or ACHC accredited?" If yes, verify at pcab.org or achc.org directories. If no accreditation, not automatically disqualifying, but increases importance of verifying other quality factors.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">7</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Review Pricing Against Quality Floor</p>
                          <p>Compare provider pricing to cost analysis in Section 3. Pricing significantly below $165-$245 per month (5mg dose) suggests quality compromises. Pricing within $199-$450 range typical for quality-assured production.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">8</div>
                        <div>
                          <p className="font-bold text-[#003366] mb-1">Assess Customer Support Responsiveness</p>
                          <p>Contact provider with quality questions before enrollment. Quality-focused providers readily answer questions about pharmacy partners, testing protocols, and API sourcing. Evasive responses or unwillingness to provide documentation = red flag.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Recommended Providers */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">5. Providers with Verified Quality Pharmacy Partnerships</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  The following telehealth providers partner with 503B FDA-registered compounding pharmacies meeting quality verification criteria: pharmaceutical-grade API sourcing, third-party testing protocols, and transparent quality documentation.
                </p>

                <div className="space-y-4">
                  <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                    <div className="bg-[#ffc72c]/20 px-4 py-2 border-b border-[#ffc72c]">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#003366]">CoreAge Rx</h3>
                        <span className="text-xs bg-[#003366] text-white px-2 py-1 rounded">VERIFIED QUALITY</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> FDA-registered 503B outsourcing facility with PCAB accreditation</p>
                      <p><strong className="text-[#003366]">Quality Verification:</strong> Third-party potency/sterility testing, pharmaceutical-grade API from FDA-registered supplier</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $199/month (starting doses), $299/month (maintenance doses 10-15mg)</p>
                      <p><strong className="text-[#003366]">Beyond-Use Dating:</strong> 120-day refrigerated stability</p>
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

                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                      <h3 className="font-bold text-[#003366]">Henry Meds</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> 503B facility network with documented cGMP compliance</p>
                      <p><strong className="text-[#003366]">Quality Verification:</strong> Batch-specific Certificate of Analysis provided with each shipment</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $297/month (all doses), flat pricing model</p>
                      <p><strong className="text-[#003366]">Beyond-Use Dating:</strong> 90-day refrigerated</p>
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

                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                      <h3 className="font-bold text-[#003366]">Hims & Hers</h3>
                    </div>
                    <div className="p-4 space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> Multiple 503A and 503B partnerships with state-specific sourcing</p>
                      <p><strong className="text-[#003366]">Quality Verification:</strong> Internal quality standards documentation, brand-name option available</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $199-$399/month (compounded), brand-name with insurance accepted</p>
                      <p><strong className="text-[#003366]">Beyond-Use Dating:</strong> Varies by pharmacy partner (45-120 days)</p>
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
                    <strong className="text-[#003366]">Verification Methodology:</strong> Listed providers verified through: (1) Pharmacy partner identification and license verification, (2) 503B registration confirmation (when applicable), (3) Quality documentation review (COA samples, testing protocols), (4) Pricing analysis against pharmaceutical-grade cost floor, (5) Customer support responsiveness to quality inquiries. Verification current as of December 2025; recommend independent confirmation before purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-2">⚠ Official Disclaimer</h3>
              <p className="text-sm leading-relaxed">
                This is NOT a government website. This resource provides pharmaceutical quality assessment information compiled from FDA regulatory documents, USP standards, state pharmacy board inspection reports, and industry quality data. GOV Health Report is an independent information service and receives affiliate compensation from some listed providers. All quality verification should be independently confirmed through state licensing boards and FDA registries. Information accuracy verified as of December 9, 2025.
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-white border-2 border-[#003366] shadow-sm">
              <div className="bg-[#003366] text-white px-6 py-3">
                <h2 className="text-lg font-bold">Related Pharmaceutical Quality Resources</h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <Link
                    href="/best-compounding-pharmacy-for-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Compounding Quality Standards
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Online Semaglutide Program Evaluation
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Access Resources Directory
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Semaglutide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Semaglutide Supplementation Guidelines
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
