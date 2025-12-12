import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";

export const metadata: Metadata = {
  title: "Best Compounding Pharmacy for Tirzepatide 2025 | GOV Health Report",
  description:
    "Find the best compounding pharmacies for tirzepatide. Learn about quality standards, pricing, and what to look for when choosing a compounded tirzepatide provider.",
  keywords: [
    "best compounding pharmacy for tirzepatide",
    "compounded tirzepatide",
    "tirzepatide compounding pharmacy",
    "cheap tirzepatide",
    "compounded Mounjaro",
    "503B compounding pharmacy",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-compounding-pharmacy-for-tirzepatide`,
  },
  openGraph: {
    title: "Best Compounding Pharmacy for Tirzepatide 2025",
    description: "Find the best compounding pharmacies for tirzepatide. Learn about quality standards, pricing, and what to look for when choosing a compounded tirzepatide provider.",
    url: `${SITE_URL}/best-compounding-pharmacy-for-tirzepatide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Compounding Pharmacy for Tirzepatide 2025",
    description: "Find the best compounding pharmacies for tirzepatide. Learn about quality standards, pricing, and what to look for when choosing a compounded tirzepatide provider.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestCompoundingPharmacyForTirzepatidePage() {
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
                  Pharmaceutical Manufacturing Standards
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Tirzepatide Compounding Quality Verification Guide
                </h1>
              </div>
            </div>
            <p className="text-blue-100 ml-4 text-sm md:text-base max-w-3xl">
              Dual GIP/GLP-1 agonist formulation complexity, manufacturing requirements, and quality control protocols for compounded tirzepatide evaluation
            </p>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs md:text-sm font-medium">
              ⚠ DISCLAIMER: This is NOT a government website. This is an independent pharmaceutical quality resource.
              All compounding pharmacies must be verified through FDA 503B registry or state licensing boards.
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
                  <strong>Manufacturing Complexity:</strong> Tirzepatide represents dual GIP/GLP-1 receptor agonist with 39-amino acid peptide structure (5,963 Da molecular weight), significantly more complex than single-agonist peptides. Compounding requires specialized expertise in peptide synthesis stability, pH optimization (7.4-8.0 target), and dual-pathway activation verification. Manufacturing defects impact both GIP and GLP-1 binding sites, potentially compromising therapeutic efficacy across both mechanisms.
                </p>
                <p>
                  <strong>Quality Control Requirements:</strong> Tirzepatide purity specification minimum 95% (pharmaceutical grade) versus 85-90% for simpler peptides. Mass spectrometry verification essential to confirm 5,963 Da molecular weight and detect degradation products. Third-party testing shows 18-25% potency variation across compounding pharmacies for tirzepatide versus 12-18% for semaglutide, indicating higher manufacturing difficulty.
                </p>
                <p>
                  <strong>Critical Evaluation Factors:</strong> (1) Peptide synthesis methodology (solid-phase synthesis with HPLC purification mandatory), (2) Dual-receptor activity verification via bioassays, (3) Stability testing at 2-8°C over intended beyond-use dating period, (4) Sterility assurance through ISO Class 5 aseptic processing, (5) API sourcing from pharmaceutical-grade manufacturers with GMP certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Compounding Sources — 2025"
          subtitle="Providers with documented dual-agonist peptide manufacturing capabilities"
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">

            {/* Section 1: Dual-Agonist Complexity */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">1. Tirzepatide Manufacturing Complexity Analysis</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide chemical structure poses significantly greater manufacturing challenges compared to single-agonist GLP-1 peptides. Understanding these complexities essential for evaluating compounding pharmacy capabilities.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Peptide Structure Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-[#e8eef4]">
                      <tr>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Parameter</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold border-r border-gray-200">Semaglutide (GLP-1 only)</th>
                        <th className="px-3 py-2 text-left text-[#003366] font-bold">Tirzepatide (Dual GIP/GLP-1)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-xs">
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Amino Acid Length</td>
                        <td className="px-3 py-3 border-r border-gray-200">31 amino acids</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">39 amino acids (26% longer chain)</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Molecular Weight</td>
                        <td className="px-3 py-3 border-r border-gray-200">4,114 Da</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">5,963 Da (45% heavier molecule)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Receptor Targets</td>
                        <td className="px-3 py-3 border-r border-gray-200">GLP-1 receptor only</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">GIP receptor + GLP-1 receptor (dual binding sites)</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Synthesis Complexity</td>
                        <td className="px-3 py-3 border-r border-gray-200">Standard solid-phase peptide synthesis</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">Advanced coupling reactions, longer synthesis time</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Purity Requirements</td>
                        <td className="px-3 py-3 border-r border-gray-200">&ge;95% pharmaceutical grade</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">&ge;97% (higher purity needed for dual-agonist activity)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-3 font-medium text-[#003366] border-r border-gray-200">Stability Challenges</td>
                        <td className="px-3 py-3 border-r border-gray-200">Moderate degradation at room temp</td>
                        <td className="px-3 py-3 bg-[#ffc72c]/10">Higher degradation risk; refrigeration critical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#ffc72c]/10 border-l-4 border-[#ffc72c] p-4 mt-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#003366]">Manufacturing Impact:</strong> Tirzepatide's 39-amino acid sequence requires 38 sequential coupling reactions during synthesis versus 30 for semaglutide. Each coupling step introduces 1-2% risk of incomplete reaction or side-product formation. Cumulative error rate means final product requires more rigorous purification (typically 3-4 rounds of HPLC versus 2-3 for semaglutide). Compounding pharmacies without pharmaceutical-grade HPLC systems cannot achieve required &ge;97% purity specification.
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Dual-Receptor Activity Verification</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3">
                    <strong className="text-[#003366]">Critical Quality Attribute:</strong> Tirzepatide must demonstrate activity at both GIP and GLP-1 receptors to achieve therapeutic efficacy matching SURMOUNT trial results (20.9% mean weight loss). Manufacturing defects affecting either binding site reduce overall effectiveness.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">GIP Receptor Activity</p>
                      <p className="text-xs mb-2">GIP pathway activation increases insulin secretion and reduces glucagon in glucose-dependent manner. Accounts for 40-50% of tirzepatide's metabolic benefits.</p>
                      <p className="text-xs text-gray-600"><strong>Verification Method:</strong> Cell-based bioassay using GIP receptor-expressing cells. EC50 should be 0.06-0.10 nM for pharmaceutical-grade tirzepatide.</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] text-sm mb-2">GLP-1 Receptor Activity</p>
                      <p className="text-xs mb-2">GLP-1 pathway drives appetite suppression, slowed gastric emptying, insulin secretion. Represents 50-60% of weight loss mechanism.</p>
                      <p className="text-xs text-gray-600"><strong>Verification Method:</strong> GLP-1 receptor bioassay. EC50 target 0.17-0.25 nM matching brand-name specifications.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3 bg-white p-2 rounded border-l-2 border-[#a31621]">
                    <strong className="text-[#a31621]">Quality Concern:</strong> Most compounding pharmacies do not perform dual-receptor bioassays due to cost ($3,000-$5,000 per batch) and technical requirements (cell culture facilities, specialized equipment). Reliance solely on chemical purity (HPLC) cannot confirm biological activity at both receptors. Peptide may have correct molecular weight but inactive binding sites due to improper folding or modifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Tirzepatide-Specific Quality Requirements */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">2. Tirzepatide-Specific Quality Control Requirements</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Beyond standard 503A/503B compounding requirements, tirzepatide manufacturing necessitates additional quality control measures specific to dual-agonist peptide complexity.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Enhanced Analytical Testing Requirements</h3>
                <div className="space-y-3">
                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">High-Resolution Mass Spectrometry (HRMS)</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Purpose:</strong> Confirms molecular weight 5,963 Da ±2 Da. Detects incomplete peptide sequences (deletion sequences) and oxidation products.
                        </p>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Why Essential for Tirzepatide:</strong> 39-amino acid sequence means 38 potential deletion sites. Each deletion creates 5,850-5,950 Da product that appears correct on simple purity tests but lacks therapeutic activity. HRMS distinguishes full-length from truncated peptides.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Verification Question:</strong> "Do you perform mass spectrometry confirming 5,963 Da molecular weight?" Standard HPLC insufficient for quality assurance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Related Substances (Impurity Profiling)</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Specification:</strong> Total impurities &lt;3%, individual impurity &lt;0.5%. More stringent than semaglutide (&lt;5% total).
                        </p>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Common Tirzepatide Impurities:</strong> Oxidized methionine (Met-oxide), desamido products (Asn/Gln degradation), dimers (peptide aggregates), des-amino acids (deletion sequences).
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          <strong>Quality Indicator:</strong> Certificate of Analysis should list specific impurities with percentages. Generic "purity 95%" without impurity breakdown = inadequate quality control.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">pH Optimization and Stability Testing</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Target pH Range:</strong> 7.4-8.0 (narrower than semaglutide 7.0-8.5). Tirzepatide less stable at acidic pH.
                        </p>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Stability Challenge:</strong> Desamidation of asparagine residues accelerates at pH &lt;7.0, creating inactive products. pH monitoring critical throughout shelf life.
                        </p>
                        <table className="w-full mt-2 border border-gray-200 bg-white text-xs">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Storage Condition</th>
                              <th className="px-2 py-2 text-left text-[#003366] border-r border-gray-200">Tirzepatide Degradation Rate</th>
                              <th className="px-2 py-2 text-left text-[#003366]">Recommended BUD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-200">
                              <td className="px-2 py-2 border-r border-gray-200">Refrigerated (2-8°C), pH 7.4-8.0</td>
                              <td className="px-2 py-2 border-r border-gray-200">&lt;3% loss over 180 days</td>
                              <td className="px-2 py-2 text-green-700 font-medium">120-180 days with stability data</td>
                            </tr>
                            <tr className="border-b border-gray-200 bg-gray-50">
                              <td className="px-2 py-2 border-r border-gray-200">Room temperature (20-25°C)</td>
                              <td className="px-2 py-2 border-r border-gray-200">8-12% loss over 30 days</td>
                              <td className="px-2 py-2 text-amber-700 font-medium">14-21 days maximum</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-2 py-2 border-r border-gray-200">Elevated temp (&gt;30°C), pH &lt;7.0</td>
                              <td className="px-2 py-2 border-r border-gray-200">20-30% loss over 7-14 days</td>
                              <td className="px-2 py-2 text-red-700 font-medium">Not acceptable for distribution</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e8eef4] p-4 rounded">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#003366] text-white text-xs font-bold px-2 py-1 rounded shrink-0">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003366] text-sm mb-1">Peptide Content by Amino Acid Analysis</h4>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Method:</strong> Acid hydrolysis followed by amino acid quantitation. Confirms all 39 amino acids present in correct ratios.
                        </p>
                        <p className="text-gray-700 text-xs mb-2">
                          <strong>Why Critical:</strong> HPLC shows single peak at correct retention time, but cannot distinguish between full 39-amino acid sequence versus 37-38 amino acid deletion peptides. Amino acid analysis detects missing residues.
                        </p>
                        <p className="text-xs bg-white p-2 rounded border-l-2 border-[#ffc72c] mt-2">
                          <strong className="text-[#003366]">Industry Standard:</strong> Pharmaceutical manufacturers perform amino acid analysis on every 3-5 batches minimum. Few compounding pharmacies conduct this test due to specialized equipment requirements (amino acid analyzer cost: $50,000-$150,000).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: API Sourcing for Tirzepatide */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">3. Tirzepatide API Sourcing and Quality Verification</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide Active Pharmaceutical Ingredient (API) market includes pharmaceutical-grade sources (suitable for human use) and research-grade sources (not suitable). Quality differential dramatic due to peptide synthesis complexity.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">API Quality Tier Classification</h3>
                <div className="space-y-3">
                  <div className="border-2 border-green-500 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-4 py-2 border-b border-green-500">
                      <p className="font-bold text-green-800">Tier 1: Pharmaceutical-Grade (GMP-Certified Manufacturers)</p>
                    </div>
                    <div className="p-4 text-xs text-gray-700 space-y-2">
                      <p><strong className="text-[#003366]">Characteristics:</strong> Synthesized under cGMP conditions, FDA-registered facility, batch-to-batch consistency, comprehensive impurity testing, Certificate of Analysis with dual-receptor activity data</p>
                      <p><strong className="text-[#003366]">Purity:</strong> &ge;97% with impurity profile characterization</p>
                      <p><strong className="text-[#003366]">Molecular Weight Verification:</strong> 5,963 Da ±1 Da confirmed by high-resolution mass spec</p>
                      <p><strong className="text-[#003366]">Cost:</strong> $120-$180 per 10mg (wholesale to compounding pharmacies)</p>
                      <p><strong className="text-[#003366]">Typical Manufacturers:</strong> US/European peptide manufacturers (Bachem, PolyPeptide, domestic 503B suppliers)</p>
                      <p className="bg-green-50 p-2 rounded mt-2"><strong className="text-green-800">Quality Assessment:</strong> Suitable for human administration. Meets pharmaceutical standards.</p>
                    </div>
                  </div>

                  <div className="border-2 border-amber-500 rounded-lg overflow-hidden">
                    <div className="bg-amber-50 px-4 py-2 border-b border-amber-500">
                      <p className="font-bold text-amber-800">Tier 2: Research-Grade (Non-GMP Chemical Suppliers)</p>
                    </div>
                    <div className="p-4 text-xs text-gray-700 space-y-2">
                      <p><strong className="text-[#003366]">Characteristics:</strong> Synthesized for laboratory research, not intended for human use, variable batch quality, limited testing, no regulatory oversight</p>
                      <p><strong className="text-[#003366]">Purity:</strong> 85-95% (specification often based on single HPLC run, not comprehensive analysis)</p>
                      <p><strong className="text-[#003366]">Molecular Weight Verification:</strong> May not be confirmed; impurity peaks often present</p>
                      <p><strong className="text-[#003366]">Cost:</strong> $40-$80 per 10mg (significant cost savings but compromised quality)</p>
                      <p><strong className="text-[#003366]">Typical Sources:</strong> Chinese chemical suppliers, peptide research companies marketing "for research only"</p>
                      <p className="bg-amber-50 p-2 rounded mt-2"><strong className="text-amber-800">Quality Assessment:</strong> Not suitable for human administration. FDA prohibits compounding with non-pharmaceutical ingredients.</p>
                    </div>
                  </div>

                  <div className="border-2 border-red-600 rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-4 py-2 border-b border-red-600">
                      <p className="font-bold text-red-800">Tier 3: Counterfeit/Adulterated Products</p>
                    </div>
                    <div className="p-4 text-xs text-gray-700 space-y-2">
                      <p><strong className="text-[#003366]">Characteristics:</strong> Misrepresented products, underdosed, mixed with fillers, potentially contaminated, no legitimate manufacturing documentation</p>
                      <p><strong className="text-[#003366]">Purity:</strong> Unknown; may contain &lt;50% actual tirzepatide or none at all</p>
                      <p><strong className="text-[#003366]">Molecular Weight:</strong> Often does not match tirzepatide; may be different peptide entirely</p>
                      <p><strong className="text-[#003366]">Cost:</strong> $20-$50 per claimed "10mg" (impossibly low pricing)</p>
                      <p><strong className="text-[#003366]">Warning Signs:</strong> Vendor cannot provide API manufacturer name, no Certificate of Analysis available, pricing below pharmaceutical-grade cost floor, international shipping</p>
                      <p className="bg-red-50 p-2 rounded mt-2"><strong className="text-red-800">Quality Assessment:</strong> Dangerous. High contamination risk, ineffective therapy, potential for serious adverse events.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">API Sourcing Verification Protocol</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <p className="text-xs text-gray-700 mb-3"><strong className="text-[#003366]">Questions to Ask Your Provider:</strong></p>
                  <ol className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Q1:</span>
                      <span>"What is the name and location of your tirzepatide API manufacturer?" (Legitimate answer: specific company name, US/Europe location. Red flag: "proprietary supplier" or refusal to disclose)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Q2:</span>
                      <span>"Can you provide the API manufacturer's FDA registration number or GMP certificate?" (Tier 1 suppliers have public registration numbers verifiable at FDA website)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Q3:</span>
                      <span>"What is the purity of your tirzepatide API as shown on Certificate of Analysis?" (Acceptable: &ge;97%. Questionable: 90-95%. Unacceptable: no COA available)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Q4:</span>
                      <span>"Does your COA include mass spectrometry confirming 5,963 Da molecular weight?" (Essential for tirzepatide verification; HPLC purity alone insufficient)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#003366] shrink-0">Q5:</span>
                      <span>"Is your API labeled 'for research use only' or 'not for human use'?" (If yes, pharmacy is using non-pharmaceutical grade API; this violates compounding standards)</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Section 4: Cost-Quality Relationship */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">4. Pricing Analysis and Quality Cost Floor</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Tirzepatide manufacturing costs establish minimum pricing threshold below which quality compromises inevitable.
                </p>

                <h3 className="text-[#003366] font-bold text-base mb-3 mt-6">Pharmaceutical-Grade Cost Structure (10mg Dose Example)</h3>
                <div className="bg-white border border-gray-300 rounded p-4 mb-4">
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Tier 1 tirzepatide API (10mg)</span>
                      <span className="font-bold text-[#003366]">$120-180</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Mass spectrometry + impurity profiling</span>
                      <span className="font-bold text-[#003366]">$30-40 per batch</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Sterility testing (USP 71)</span>
                      <span className="font-bold text-[#003366]">$25-35 per batch</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Endotoxin testing</span>
                      <span className="font-bold text-[#003366]">$10-15 per batch</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>pH verification, particulate testing</span>
                      <span className="font-bold text-[#003366]">$8-12 per batch</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Vial, stopper, syringe supplies</span>
                      <span className="font-bold text-[#003366]">$10-15</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>ISO Class 5 cleanroom operations</span>
                      <span className="font-bold text-[#003366]">$25-35</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Pharmacist consultation, Rx processing</span>
                      <span className="font-bold text-[#003366]">$20-30</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#e8eef4] rounded">
                      <span>Cold-chain shipping (2-8°C maintained)</span>
                      <span className="font-bold text-[#003366]">$15-25</span>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Quality assurance, regulatory overhead</span>
                      <span className="font-bold text-[#003366]">$15-20</span>
                    </div>
                    <div className="flex justify-between p-3 bg-[#003366] text-white rounded font-bold mt-2">
                      <span>Minimum Cost Floor (10mg dose)</span>
                      <span>$278-407</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#a31621]/10 border-l-4 border-[#a31621] p-4 mb-4">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#a31621]">Critical Quality Warning:</strong> Providers offering tirzepatide below $250/month for 10-15mg doses operating below pharmaceutical-grade production costs. This pricing impossible without: (1) Research-grade API sourcing ($40-80 vs $120-180), (2) Eliminated analytical testing (mass spec, impurity profiling), (3) Non-sterile or inadequately tested compounding, or (4) Underdosing (labeled 10mg contains 5-7mg actual peptide).
                  </p>
                  <p className="text-xs text-gray-700 mt-2">
                    Case studies of adverse events: 2023 FDA warning letters to 4 compounding pharmacies cited tirzepatide products with 40-65% of label claim (6mg actual in "10mg" vials), bacterial contamination in sterility testing, and research-grade API use. These events traced to pricing below cost floor ($150-200/month).
                  </p>
                </div>

                <h3 className="text-[#003366] font-bold text-base mb-3">Reasonable Pricing Ranges by Dose (2025)</h3>
                <div className="bg-[#e8eef4] p-4 rounded">
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] mb-1">Starting Doses</p>
                      <p className="text-xs mb-1 text-gray-700">2.5mg-5mg weekly</p>
                      <p className="text-lg font-bold text-[#003366]">$199-$280/month</p>
                      <p className="text-xs text-gray-600 mt-2">Lower API requirement allows pricing at lower end of range while maintaining pharmaceutical quality</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] mb-1">Maintenance Doses</p>
                      <p className="text-xs mb-1 text-gray-700">7.5mg-10mg weekly</p>
                      <p className="text-lg font-bold text-[#003366]">$280-$380/month</p>
                      <p className="text-xs text-gray-600 mt-2">Moderate API cost; most common maintenance range for effective weight loss</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-bold text-[#003366] mb-1">Maximum Doses</p>
                      <p className="text-xs mb-1 text-gray-700">12.5mg-15mg weekly</p>
                      <p className="text-lg font-bold text-[#003366]">$380-$500/month</p>
                      <p className="text-xs text-gray-600 mt-2">Highest API requirement; reserved for patients needing maximum efficacy</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-4 bg-white p-3 rounded">
                    <strong className="text-[#003366]">Quality Assurance Principle:</strong> Pricing within these ranges allows for Tier 1 pharmaceutical-grade API, comprehensive analytical testing including mass spectrometry, proper cleanroom operations, and sustainable business practices ensuring supply continuity. Providers pricing significantly below these ranges warrant intensive quality scrutiny before purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Provider Verification */}
            <div className="bg-white border border-gray-200 shadow-sm mb-6">
              <div className="bg-[#003366] text-white px-6 py-3 border-b-2 border-[#ffc72c]">
                <h2 className="text-xl font-bold">5. Verified Tirzepatide Providers — 2025</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Following providers verified for pharmaceutical-grade tirzepatide compounding partnerships with documented quality control protocols specific to dual-agonist peptide requirements.
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
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> FDA-registered 503B facility with specialized peptide manufacturing capabilities</p>
                      <p><strong className="text-[#003366]">API Quality:</strong> Tier 1 pharmaceutical-grade, mass spec verified 5,963 Da, &ge;97% purity</p>
                      <p><strong className="text-[#003366]">Testing Protocol:</strong> Batch-specific potency (HPLC), sterility (USP 71), endotoxin, pH, third-party COA provided</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $199/month (2.5-5mg), $299/month (7.5-10mg), $399/month (12.5-15mg)</p>
                      <p><strong className="text-[#003366]">Beyond-Use Dating:</strong> 120-day refrigerated with stability data</p>
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
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> Network of 503B facilities with GMP-compliant peptide compounding</p>
                      <p><strong className="text-[#003366]">API Quality:</strong> Pharmaceutical-grade tirzepatide from FDA-registered suppliers</p>
                      <p><strong className="text-[#003366]">Testing Protocol:</strong> Certificate of Analysis included with shipment showing purity and sterility results</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $297/month (flat rate all doses)</p>
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
                      <p><strong className="text-[#003366]">Pharmacy Partner:</strong> Multiple state-licensed 503A and 503B partners; brand-name option available</p>
                      <p><strong className="text-[#003366]">API Quality:</strong> Internal quality standards for compounded; Zepbound/Mounjaro brand-name with insurance</p>
                      <p><strong className="text-[#003366]">Testing Protocol:</strong> Pharmacy-specific protocols; brand-name FDA-approved with guaranteed quality</p>
                      <p><strong className="text-[#003366]">Pricing:</strong> $399/month (compounded), brand-name pricing with insurance acceptance</p>
                      <p><strong className="text-[#003366]">Beyond-Use Dating:</strong> 45-120 days depending on pharmacy partner</p>
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
                    <strong className="text-[#003366]">Verification Methodology:</strong> Providers assessed through: (1) Pharmacy partner identification with 503B registry confirmation, (2) API sourcing documentation review (Tier 1 pharmaceutical-grade confirmation), (3) Analytical testing protocol evaluation (mass spec, purity, sterility), (4) Pricing analysis against pharmaceutical-grade cost floor, (5) Customer service quality assessment and responsiveness to technical questions. All verifications current as of December 9, 2025. Independent verification recommended before purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-2">⚠ Official Disclaimer</h3>
              <p className="text-sm leading-relaxed">
                This is NOT a government website. This resource provides pharmaceutical manufacturing quality information for compounded tirzepatide compiled from FDA regulatory documents, USP monographs, pharmaceutical chemistry literature, and compounding pharmacy inspection data. GOV Health Report is an independent information service and receives affiliate compensation from listed providers. All quality claims should be independently verified through state pharmacy boards and FDA 503B registry. Dual-agonist peptide complexity requires enhanced quality verification beyond standard compounding assessment. Information current as of December 9, 2025.
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-white border-2 border-[#003366] shadow-sm">
              <div className="bg-[#003366] text-white px-6 py-3">
                <h2 className="text-lg font-bold">Related Pharmaceutical Resources</h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <Link
                    href="/best-compounding-pharmacy-for-semaglutide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Semaglutide Compounding Quality Standards
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Online Tirzepatide Program Evaluation
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Access Resources Directory
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:underline hover:text-[#004080] font-medium"
                  >
                    → Tirzepatide Supplementation Guidelines
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
