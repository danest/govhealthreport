import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Activity, Pill, Clock, Users, TrendingDown, ShieldCheck, DollarSign, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Wegovy Pill Review 2025 - Oral Semaglutide Complete Guide | GOV Health Report",
  description:
    "Comprehensive review of Wegovy® oral tablets (semaglutide 25mg): mechanism of action, dosing protocols, efficacy data, safety profile, patient eligibility, and verified provider information for the first oral GLP-1 weight loss medication.",
  keywords: [
    "Wegovy pill review",
    "oral Wegovy",
    "semaglutide pill",
    "oral semaglutide",
    "Wegovy tablets",
    "oral GLP-1",
    "weight loss pill",
    "Wegovy oral review",
  ],
  alternates: {
    canonical: `${SITE_URL}/wegovy-pill-review`,
  },
  openGraph: {
    title: "Wegovy Pill Review 2025 - Oral Semaglutide Complete Guide",
    description: "Comprehensive review of Wegovy® oral tablets (semaglutide 25mg): mechanism of action, dosing protocols, efficacy data, safety profile, patient eligibility, and verified provider information for the first oral GLP-1 weight loss medication.",
    url: `${SITE_URL}/wegovy-pill-review`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wegovy Pill Review 2025 - Oral Semaglutide Complete Guide",
    description: "Comprehensive review of Wegovy® oral tablets (semaglutide 25mg): mechanism of action, dosing protocols, efficacy data, safety profile, patient eligibility, and verified provider information for the first oral GLP-1 weight loss medication.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function WegovyPillReviewPage() {
  const articleSchema = generateArticleSchema({
    title: "Wegovy Pill Review 2025 - Oral Semaglutide Complete Guide",
    description: "Comprehensive review of Wegovy® oral tablets (semaglutide 25mg): mechanism of action, dosing protocols, efficacy data, safety profile, patient eligibility, and verified provider information for the first oral GLP-1 weight loss medication.",
    image: `${SITE_URL}/opengraph-image`,
    date: "December 22, 2025",
    author: "GOV Health Report Team",
    keywords: [
      "Wegovy pill review",
      "oral Wegovy",
      "semaglutide pill",
      "oral semaglutide",
      "Wegovy tablets",
      "oral GLP-1",
      "weight loss pill",
      "Wegovy oral review",
    ],
    slug: "wegovy-pill-review",
    category: "Reviews",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Wegovy Pill Review 2025 - Oral Semaglutide Complete Guide", url: `${SITE_URL}/wegovy-pill-review` },
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-f8f9fa">
      <SchemaScript schema={[articleSchema, breadcrumbSchema]} />
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
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Wegovy® Oral Tablets: Comprehensive Clinical Review
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  First Oral GLP-1 Receptor Agonist for Weight Management • Independent Assessment
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
                  GOV Health Report is NOT an official government website and is NOT affiliated with the FDA, HHS, or any government agency. This review is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider before starting any weight loss treatment.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Independent Assessment Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Wegovy® (semaglutide) oral tablets represent the first FDA-approved oral GLP-1 receptor agonist for chronic weight management. This comprehensive review evaluates the medication's pharmacological profile, clinical efficacy, safety data, patient eligibility criteria, and practical administration considerations. FDA approval on December 22, 2025, provides an alternative to injectable semaglutide for adults with obesity or overweight with weight-related medical conditions.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80&fit=crop&crop=center"
                alt="Prescription medication and healthcare wellness consultation"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Consumer Notice */}
        <section className="py-4 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <p className="text-amber-800 text-sm">
              <strong>Medical Disclaimer:</strong> This information is for educational purposes only. Individual results may vary. Wegovy® requires a prescription and medical supervision. Always consult with a qualified healthcare provider.
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Semaglutide Providers"
          subtitle="Licensed telehealth services offering FDA-approved semaglutide with comprehensive medical oversight and ongoing support."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: What Is Wegovy Oral */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Pill className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: Pharmacological Profile</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wegovy® oral tablets contain 25mg of semaglutide, a glucagon-like peptide-1 (GLP-1) receptor agonist. This represents the first oral formulation of a GLP-1 agonist approved specifically for weight management in the United States.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Medication Specifications</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Active Ingredient</p>
                        <p className="text-gray-700">Semaglutide (GLP-1 receptor agonist)</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Formulation</p>
                        <p className="text-gray-700">25mg oral tablets with absorption enhancer</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Administration Route</p>
                        <p className="text-gray-700">Oral (once daily)</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">FDA Approval Date</p>
                        <p className="text-gray-700">December 22, 2025</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Drug Class</p>
                        <p className="text-gray-700">GLP-1 receptor agonist (incretin mimetic)</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Manufacturer</p>
                        <p className="text-gray-700">Novo Nordisk</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#003366]" />
                    Mechanism of Action
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Semaglutide functions as a GLP-1 receptor agonist with 94% structural homology to native human GLP-1. The medication produces weight loss through multiple physiological pathways:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Appetite Regulation:</strong> Central nervous system GLP-1 receptor activation reduces hunger signals and increases satiety</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Gastric Emptying:</strong> Slows gastrointestinal transit, prolonging feelings of fullness after meals</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Glucose Regulation:</strong> Enhances glucose-dependent insulin secretion and reduces inappropriate glucagon release</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Energy Expenditure:</strong> May modulate metabolic rate and fat oxidation pathways</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Oral Bioavailability Technology</h3>
                  <p className="text-sm text-gray-700">
                    Semaglutide is a peptide molecule that would normally be degraded in the gastrointestinal tract before absorption. The oral formulation incorporates <strong className="text-[#003366]">sodium N-(8-[2-hydroxybenzoyl] amino) caprylate (SNAC)</strong>, an absorption enhancer that facilitates transcellular absorption across the gastric epithelium. This enables approximately 1% oral bioavailability, sufficient for therapeutic effect when administered as a 25mg tablet (compared to subcutaneous dosing in the microgram range).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Dosing and Administration */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Dosing Protocols and Administration Guidelines</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wegovy® oral tablets require specific administration protocols to optimize absorption and therapeutic efficacy. Unlike most oral medications, timing and fasting requirements are critical for proper drug absorption.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Standard Dosing Schedule</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-[#e8eef4] rounded p-3">
                      <p className="font-bold text-[#003366] mb-1 text-sm">Starting Dose (Months 1-2)</p>
                      <p className="text-xs text-gray-700">1.5mg once daily for initial tolerability assessment and gradual dose escalation</p>
                    </div>
                    <p className="text-xs text-gray-600 italic px-3">
                      Note: Complete dose escalation schedule will be determined by prescribing healthcare provider based on individual patient response and tolerability. The FDA-approved dosing schedule involves gradual titration to therapeutic maintenance doses.
                    </p>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4">
                  <h3 className="font-bold text-[#a31621] mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Critical Administration Requirements
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#003366] mb-1">Fasting Requirement</p>
                      <p className="text-gray-700 text-xs">Take on an empty stomach upon awakening, at least 30 minutes before first food, beverage (other than plain water), or other oral medications. This fasting period is essential for proper SNAC-mediated absorption.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#003366] mb-1">Water Volume</p>
                      <p className="text-gray-700 text-xs">Swallow tablet whole with no more than 4 ounces (120 mL) of plain water. Excess water volume dilutes SNAC concentration and reduces absorption efficiency.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#003366] mb-1">Tablet Integrity</p>
                      <p className="text-gray-700 text-xs">Do not split, crush, or chew tablets. The tablet must remain intact to ensure proper absorption enhancer function.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#003366] mb-1">Consistency</p>
                      <p className="text-gray-700 text-xs">Take at the same time each day to maintain steady-state plasma concentrations and optimize therapeutic response.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Missed Dose Protocol</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    If a dose is missed, patients should follow these guidelines:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>If remembered before first meal or beverage: Take immediately with up to 4 oz water</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>If remembered after eating or drinking: Skip the missed dose and resume normal schedule the following day</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Do not take two doses on the same day to make up for a missed dose</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Clinical Efficacy */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Clinical Efficacy and Outcomes Data</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  FDA approval was supported by the OASIS 4 clinical trial, a 64-week randomized, double-blind, placebo-controlled study evaluating weight loss efficacy and safety in 307 adults without diabetes.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">OASIS 4 Trial: Primary Efficacy Endpoints</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Endpoint</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Wegovy® Oral</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Placebo</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Difference</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Mean Weight Loss (Treatment Policy)</td>
                          <td className="px-4 py-3">~14%</td>
                          <td className="px-4 py-3">~2%</td>
                          <td className="px-4 py-3 font-bold text-[#003366]">12 percentage points</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Mean Weight Loss (On-Treatment)</td>
                          <td className="px-4 py-3">~17%</td>
                          <td className="px-4 py-3">~3%</td>
                          <td className="px-4 py-3 font-bold text-[#003366]">14 percentage points</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#003366]">Patients Achieving ≥5% Weight Loss</td>
                          <td className="px-4 py-3">76%</td>
                          <td className="px-4 py-3">Not reported</td>
                          <td className="px-4 py-3">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#e8eef4] border-t-2 border-[#003366] text-xs text-gray-600">
                    <p><strong className="text-[#003366]">Study Design:</strong> Randomized, double-blind, placebo-controlled | <strong className="text-[#003366]">Duration:</strong> 64 weeks | <strong className="text-[#003366]">Population:</strong> 307 adults without diabetes</p>
                    <p className="mt-1"><strong className="text-[#003366]">Treatment Policy Estimand:</strong> Includes all randomized patients regardless of treatment discontinuation or rescue therapy use</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#ffc72c] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-[#ffc72c]" />
                      Weight Loss Distribution
                    </h3>
                    <p className="text-xs text-gray-700 mb-3">
                      Percentage of patients achieving specific weight loss thresholds at 64 weeks (Wegovy® oral):
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">≥5% reduction:</span>
                        <span className="font-bold text-[#003366]">76%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">≥10% reduction:</span>
                        <span className="font-bold text-[#003366]">~60% (estimated)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">≥15% reduction:</span>
                        <span className="font-bold text-[#003366]">~40% (estimated)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Cardiovascular Benefits</h3>
                    <p className="text-xs text-gray-700 mb-2">
                      Wegovy® oral tablets are indicated for:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>Reduction of major adverse cardiovascular events (MACE) in adults with established cardiovascular disease and either obesity or overweight</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">●</span>
                        <span>This dual indication mirrors the injectable formulation's cardiovascular benefits</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Clinical Interpretation</h3>
                  <p className="text-sm text-gray-700">
                    The 14% average weight loss (treatment policy estimand) represents clinically meaningful weight reduction. Guidelines from obesity medicine societies typically define clinically significant weight loss as ≥5% of body weight for health benefit. The finding that 76% of patients achieved this threshold demonstrates robust efficacy. The on-treatment analysis showing 17% average weight loss suggests that patients who adhere to the medication protocol experience weight loss approaching that seen with injectable semaglutide formulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Safety Profile */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Safety Profile and Adverse Event Analysis</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The safety profile of Wegovy® oral tablets is consistent with the GLP-1 receptor agonist class. Gastrointestinal adverse events represent the most common treatment-related side effects.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Common Adverse Reactions (≥5% Incidence)</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="border-l-4 border-[#ffc72c] pl-3 py-2">
                      <p className="font-bold text-[#003366]">Nausea</p>
                      <p className="text-xs text-gray-700">Most frequently reported adverse event. Typically peaks during initial weeks and dose escalation periods. Usually transient and diminishes with continued treatment. Severity ranges from mild to moderate in most cases.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-2">
                      <p className="font-bold text-[#003366]">Diarrhea</p>
                      <p className="text-xs text-gray-700">Common during titration phase as GI tract adapts to medication. Healthcare providers may slow dose escalation if severe. Adequate hydration important to prevent dehydration-related complications.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-2">
                      <p className="font-bold text-[#003366]">Vomiting</p>
                      <p className="text-xs text-gray-700">Occurs in subset of patients, particularly during dose increases. Persistent vomiting may warrant dose reduction or temporary treatment interruption. Contact healthcare provider if unable to maintain hydration.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-2">
                      <p className="font-bold text-[#003366]">Other GI Effects</p>
                      <p className="text-xs text-gray-700">Constipation, abdominal pain, dyspepsia, and gastroesophageal reflux reported with variable frequency. Most cases mild to moderate and self-limiting.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4">
                  <h3 className="font-bold text-[#a31621] mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Serious Adverse Events and Warnings
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#a31621] mb-1 text-sm">Thyroid C-Cell Tumors (Boxed Warning)</p>
                      <p className="text-xs">Semaglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors in rodent studies. Human relevance unknown. <strong>Contraindicated</strong> in patients with personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding thyroid tumor symptoms (neck mass, dysphagia, dyspnea, persistent hoarseness).</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#a31621] mb-1 text-sm">Acute Pancreatitis</p>
                      <p className="text-xs">Risk of acute pancreatitis. Patients should be informed of characteristic symptoms (severe persistent abdominal pain radiating to the back, with or without vomiting). Discontinue promptly if pancreatitis suspected. Do not restart unless alternative etiology confirmed and pancreatitis resolved.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#a31621] mb-1 text-sm">Gallbladder Disease</p>
                      <p className="text-xs">Increased risk of cholelithiasis (gallstones) and cholecystitis (gallbladder inflammation). Substantial or rapid weight loss can increase risk. If cholelithiasis suspected, gallbladder studies and clinical follow-up indicated.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#a31621] mb-1 text-sm">Acute Kidney Injury</p>
                      <p className="text-xs">Cases of acute kidney injury and worsening chronic renal failure reported, sometimes requiring hemodialysis. Most cases occurred in patients experiencing volume depletion from nausea, vomiting, or diarrhea. Monitor renal function in patients reporting severe GI reactions.</p>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-[#a31621]">
                      <p className="font-bold text-[#a31621] mb-1 text-sm">Hypoglycemia Risk</p>
                      <p className="text-xs">Increased risk when used concomitantly with insulin secretagogues (e.g., sulfonylureas) or insulin. Dose reduction of these medications may be necessary. Educate patients on hypoglycemia recognition and management.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Contraindications</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span>Personal or family history of medullary thyroid carcinoma (MTC)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#003366] shrink-0">●</span>
                      <span>Serious hypersensitivity to semaglutide or any excipients</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Patient Eligibility */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 5: Patient Eligibility and Candidacy Assessment</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wegovy® oral tablets are FDA-approved for specific patient populations based on BMI criteria and presence of weight-related comorbidities.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">FDA-Approved Indications</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-[#e8eef4] rounded p-3">
                      <p className="font-bold text-[#003366] mb-2 text-sm">Adults with Obesity</p>
                      <p className="text-xs text-gray-700">Initial BMI ≥30 kg/m²</p>
                    </div>
                    <div className="bg-[#e8eef4] rounded p-3">
                      <p className="font-bold text-[#003366] mb-2 text-sm">Adults with Overweight and Weight-Related Comorbidity</p>
                      <p className="text-xs text-gray-700 mb-2">Initial BMI ≥27 kg/m² with at least one of the following:</p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>Hypertension (high blood pressure)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>Type 2 diabetes mellitus</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>Dyslipidemia (abnormal cholesterol/triglycerides)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>Obstructive sleep apnea</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>Cardiovascular disease</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#e8eef4] rounded p-3">
                      <p className="font-bold text-[#003366] mb-2 text-sm">Adjunctive Therapy Required</p>
                      <p className="text-xs text-gray-700">Must be used in conjunction with reduced-calorie diet and increased physical activity</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 text-sm">Ideal Candidate Characteristics</h3>
                  <p className="text-xs text-gray-700 mb-3">
                    Patients most likely to benefit from Wegovy® oral therapy:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Meet BMI criteria (≥30 kg/m² or ≥27 kg/m² with comorbidity)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Committed to lifestyle modifications (diet and exercise)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Prefer oral medication over injectable formulations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Can adhere to strict morning fasting administration protocol</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>No contraindications (MTC/MEN 2 history, semaglutide hypersensitivity)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Willing to accept potential gastrointestinal side effects during titration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Special Populations</h3>
                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong className="text-[#003366]">Pregnancy:</strong> Weight loss offers no benefit during pregnancy. Discontinue when pregnancy recognized. Limited data in pregnant women.</p>
                    <p><strong className="text-[#003366]">Lactation:</strong> No data on presence in human milk or effects on breastfed infant. Consider developmental and health benefits of breastfeeding alongside maternal need for treatment.</p>
                    <p><strong className="text-[#003366]">Pediatric:</strong> Safety and effectiveness not established in patients under 18 years of age.</p>
                    <p><strong className="text-[#003366]">Renal Impairment:</strong> No dose adjustment required for mild to moderate impairment. Limited experience in severe impairment or end-stage renal disease.</p>
                    <p><strong className="text-[#003366]">Hepatic Impairment:</strong> No dose adjustment required. Limited experience in severe hepatic impairment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: Oral vs Injectable Comparison */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 6: Oral vs Injectable Semaglutide Comparison</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Both Wegovy® formulations contain the same active ingredient (semaglutide) but differ in administration route, dosing, and practical considerations.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Formulation Comparison Matrix</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Feature</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Wegovy® Oral</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Wegovy® Injectable</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Administration</td>
                          <td className="px-4 py-3">Oral tablet, once daily</td>
                          <td className="px-4 py-3">Subcutaneous injection, once weekly</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Dose Form</td>
                          <td className="px-4 py-3">25mg tablet (with SNAC enhancer)</td>
                          <td className="px-4 py-3">0.25mg - 2.4mg pre-filled pen</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Fasting Required</td>
                          <td className="px-4 py-3">Yes (30+ min before food/drink)</td>
                          <td className="px-4 py-3">No</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Weight Loss Efficacy</td>
                          <td className="px-4 py-3">~14-17% average (64 weeks)</td>
                          <td className="px-4 py-3">~15-17% average (68 weeks)</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Needle Required</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Convenience</td>
                          <td className="px-4 py-3">Daily pill (strict timing)</td>
                          <td className="px-4 py-3">Weekly injection (flexible timing)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#003366]">Starting Price</td>
                          <td className="px-4 py-3">$149/month (with savings)</td>
                          <td className="px-4 py-3">Varies (typically higher)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#ffc72c] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Oral Formulation Advantages</h3>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">+</span>
                        <span>No injections required (needle-free)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">+</span>
                        <span>May be preferred by patients with needle phobia</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">+</span>
                        <span>No injection site reactions</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">+</span>
                        <span>Lower starting price point</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ffc72c] shrink-0">+</span>
                        <span>Comparable weight loss efficacy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Injectable Formulation Advantages</h3>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">+</span>
                        <span>Once-weekly dosing (vs daily)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">+</span>
                        <span>No fasting requirements</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">+</span>
                        <span>Flexible timing (any time of day)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">+</span>
                        <span>Longer track record (approved earlier)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">+</span>
                        <span>More extensive clinical trial data</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Formulation Selection Guidance</h3>
                  <p className="text-sm text-gray-700">
                    The choice between oral and injectable semaglutide should be individualized based on patient preferences, lifestyle, adherence factors, and clinical considerations. Healthcare providers can assess which formulation best aligns with each patient's circumstances. Both formulations demonstrate comparable weight loss efficacy and share similar safety profiles, making patient preference a primary selection factor.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Cost and Access */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 7: Pricing and Access Information</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Novo Nordisk announced initial pricing and availability for the 1.5mg starting dose in early January 2026.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 text-sm">Pricing Structure</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong className="text-[#003366]">Starting Price (1.5mg dose):</strong> $149 per month with manufacturer savings offers</p>
                    <p className="text-xs text-gray-600 mt-2">
                      <strong>Important:</strong> Final out-of-pocket costs will vary significantly based on:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1 mt-2 ml-4">
                      <li className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>Insurance coverage and formulary tier placement</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>Pharmacy selection and negotiated rates</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>Eligibility for manufacturer savings programs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>Deductible and coinsurance status</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>Higher maintenance doses will have different pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 text-sm">Access and Availability</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-700">
                    <div>
                      <p className="font-bold text-[#003366] mb-1">Launch Timeline</p>
                      <ul className="space-y-1">
                        <li>• FDA Approval: December 22, 2025</li>
                        <li>• Market Launch: Early January 2026</li>
                        <li>• Initial Availability: 1.5mg starting dose</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-[#003366] mb-1">Supply Status</p>
                      <ul className="space-y-1">
                        <li>• Manufacturing: North Carolina facilities</li>
                        <li>• Supply: Robust inventory on hand</li>
                        <li>• Distribution: Standard pharmacy channels</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Verified Provider Access</h3>
                  <p className="text-sm text-gray-700">
                    The verified telehealth providers featured on this site may offer Wegovy® oral tablets where clinically appropriate. These licensed services provide comprehensive medical evaluation, prescription management, and ongoing clinical support. Provider availability of the oral formulation may vary during initial launch period. Patients should inquire directly with providers regarding formulation options and current availability.
                  </p>
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
                    href="/wegovy-pill-fda-approval"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → FDA Approves Wegovy® Pill - Official Announcement
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Best Online Semaglutide Programs
                  </Link>
                  <Link
                    href="/best-weight-loss-injections"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Weight Loss Medication Comparison
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Supplementation Guidelines
                  </Link>
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Injection Site Guide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Timing Guidelines
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
