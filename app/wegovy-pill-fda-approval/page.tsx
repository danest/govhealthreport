import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Calendar, CheckCircle, Activity, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "FDA Approves Wegovy Pill - First Oral GLP-1 for Weight Loss 2025 | GOV Health Report",
  description:
    "Breaking: FDA approves Wegovy® oral tablets (semaglutide 25mg), the first and only oral GLP-1 medication for weight loss in adults. Clinical trial data, availability, and verified provider information.",
  keywords: [
    "Wegovy pill",
    "oral Wegovy",
    "semaglutide pill",
    "oral GLP-1",
    "weight loss pill",
    "FDA approval",
    "Wegovy tablets",
    "semaglutide tablets",
  ],
  alternates: {
    canonical: `${SITE_URL}/wegovy-pill-fda-approval`,
  },
  openGraph: {
    title: "FDA Approves Wegovy Pill - First Oral GLP-1 for Weight Loss 2025",
    description: "Breaking: FDA approves Wegovy® oral tablets (semaglutide 25mg), the first and only oral GLP-1 medication for weight loss in adults. Clinical trial data, availability, and verified provider information.",
    url: `${SITE_URL}/wegovy-pill-fda-approval`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "FDA Approves Wegovy Pill - First Oral GLP-1 for Weight Loss 2025",
    description: "Breaking: FDA approves Wegovy® oral tablets (semaglutide 25mg), the first and only oral GLP-1 medication for weight loss in adults. Clinical trial data, availability, and verified provider information.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function WegovyPillFDAApprovalPage() {
  const articleSchema = generateArticleSchema({
    title: "FDA Approves Wegovy Pill - First Oral GLP-1 for Weight Loss 2025",
    description: "Breaking: FDA approves Wegovy® oral tablets (semaglutide 25mg), the first and only oral GLP-1 medication for weight loss in adults. Clinical trial data, availability, and verified provider information.",
    image: `${SITE_URL}/opengraph-image`,
    date: "December 22, 2025",
    author: "GOV Health Report Team",
    keywords: [
      "Wegovy pill",
      "oral Wegovy",
      "semaglutide pill",
      "oral GLP-1",
      "weight loss pill",
      "FDA approval",
      "Wegovy tablets",
      "semaglutide tablets",
    ],
    slug: "wegovy-pill-fda-approval",
    category: "News",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "FDA Approves Wegovy Pill - First Oral GLP-1 for Weight Loss 2025", url: `${SITE_URL}/wegovy-pill-fda-approval` },
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
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block px-3 py-1 bg-[#a31621] text-white text-xs font-bold rounded">
                    BREAKING NEWS
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                    <Calendar className="h-3 w-3" />
                    December 22, 2025
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  FDA Approves Wegovy® Pill - First Oral GLP-1 for Weight Loss
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Regulatory approval expands treatment options for obesity and cardiovascular risk reduction
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
                  GOV Health Report is NOT an official government website and is NOT affiliated with the FDA, HHS, or any government agency. This is an independent health information resource providing educational content about FDA-approved treatments.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Regulatory Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                The U.S. Food and Drug Administration approved Wegovy® (semaglutide) oral tablets on December 22, 2025, marking the first oral GLP-1 receptor agonist approved for chronic weight management in adults with obesity or overweight with weight-related medical conditions. The once-daily 25mg tablet formulation provides an alternative to injectable semaglutide for patients seeking weight loss treatment.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&fit=crop&crop=center"
                alt="FDA-approved weight loss medication and healthcare consultation"
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
              <strong>Consumer Advisory:</strong> This information is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider before starting any weight loss treatment.
            </p>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified GLP-1 Weight Loss Providers"
          subtitle="Licensed telehealth services offering FDA-approved weight loss medications with comprehensive medical supervision."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Approval Details */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: FDA Approval Details</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Novo Nordisk's Wegovy® oral tablets received FDA approval on December 22, 2025, representing a significant advancement in obesity pharmacotherapy. This marks the first time a GLP-1 receptor agonist is available in oral formulation for weight management purposes.
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-2">
                    <h3 className="font-bold">Regulatory Approval Summary</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Approval Date</p>
                        <p className="text-gray-700">December 22, 2025</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Market Availability</p>
                        <p className="text-gray-700">Early January 2026 (1.5mg starting dose)</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Active Ingredient</p>
                        <p className="text-gray-700">Semaglutide 25mg per tablet</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#003366] mb-1">Dosing Frequency</p>
                        <p className="text-gray-700">Once daily oral administration</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#ffc72c]" />
                    Approved Indications
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Chronic Weight Management:</strong> Adults with obesity (BMI ≥30 kg/m²) or overweight (BMI ≥27 kg/m²) with at least one weight-related comorbidity</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Cardiovascular Risk Reduction:</strong> Reduction of major adverse cardiovascular events in adults with established cardiovascular disease and either obesity or overweight</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span><strong className="text-[#003366]">Adjunctive Therapy:</strong> To be used in conjunction with reduced-calorie diet and increased physical activity</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Clinical Trial Data */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Activity className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Clinical Trial Results (OASIS 4 Study)</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The FDA approval was supported by data from the OASIS 4 clinical trial, a 64-week randomized, double-blind, placebo-controlled study evaluating efficacy and safety in 307 adults without diabetes.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Primary Efficacy Outcomes</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Outcome Measure</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Wegovy® Oral</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Placebo</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Weight Loss (Treatment Policy)</td>
                          <td className="px-4 py-3">~14% average reduction</td>
                          <td className="px-4 py-3">~2% average reduction</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Weight Loss (On-Treatment)</td>
                          <td className="px-4 py-3">~17% average reduction</td>
                          <td className="px-4 py-3">~3% average reduction</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#003366]">≥5% Weight Loss Achievement</td>
                          <td className="px-4 py-3">76% of patients</td>
                          <td className="px-4 py-3">Not reported</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#e8eef4] border-t-2 border-[#003366] text-xs text-gray-600">
                    <p><strong className="text-[#003366]">Study Duration:</strong> 64 weeks | <strong className="text-[#003366]">Population:</strong> 307 adults without diabetes | <strong className="text-[#003366]">Design:</strong> Randomized, double-blind, placebo-controlled</p>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Clinical Significance</h3>
                  <p className="text-sm text-gray-700">
                    The 14% average weight loss demonstrated in the treatment policy estimand (which accounts for all randomized patients regardless of treatment adherence) represents clinically meaningful weight reduction. For on-treatment analysis, the 17% average weight loss approaches efficacy levels seen with injectable semaglutide formulations, suggesting comparable therapeutic benefit with improved patient convenience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Safety Profile */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Safety Profile and Adverse Events</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The safety profile of Wegovy® oral tablets is consistent with the GLP-1 receptor agonist class, with gastrointestinal side effects being most commonly reported during clinical trials.
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Common Adverse Reactions</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="border-l-4 border-[#ffc72c] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Nausea</p>
                      <p className="text-xs text-gray-700">Most frequently reported gastrointestinal side effect. Typically transient and diminishes with continued treatment.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Diarrhea</p>
                      <p className="text-xs text-gray-700">Common during initial titration phase. Healthcare providers may adjust dosing schedule to mitigate symptoms.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Vomiting</p>
                      <p className="text-xs text-gray-700">Reported in subset of patients, particularly during dose escalation periods.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4">
                  <h3 className="font-bold text-[#a31621] mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Serious Adverse Events and Contraindications
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span><strong>Pancreatitis:</strong> Risk of acute pancreatitis. Discontinue if suspected and do not restart unless alternative etiology confirmed.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span><strong>Gallbladder Disease:</strong> Increased risk of cholelithiasis and cholecystitis requiring clinical monitoring.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span><strong>Thyroid Tumors:</strong> Contraindicated in patients with personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span><strong>Acute Kidney Injury:</strong> Dehydration-related renal impairment possible, particularly with gastrointestinal adverse reactions.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Availability and Pricing */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Market Availability and Pricing</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Novo Nordisk announced immediate manufacturing readiness with robust supply available at their North Carolina production facilities.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Launch Timeline</h3>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">●</span>
                        <span><strong>FDA Approval:</strong> December 22, 2025</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">●</span>
                        <span><strong>Initial Availability:</strong> Early January 2026 (1.5mg starting dose)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">●</span>
                        <span><strong>Manufacturing:</strong> North Carolina facilities with robust supply on hand</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Pricing Information</h3>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Starting Price:</strong> $149 per month (1.5mg dose with savings offers)</p>
                      <p className="text-gray-600 italic mt-2">
                        Note: Pricing may vary by insurance coverage, pharmacy, and available manufacturer savings programs. Patients should consult with their healthcare provider and insurance company for specific cost information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Access Considerations</h3>
                  <p className="text-sm text-gray-700">
                    The oral formulation of Wegovy® may improve treatment accessibility for patients who prefer oral medications over injectable formulations. Healthcare providers can prescribe either formulation based on individual patient preferences, medical history, and clinical considerations. Verified telehealth providers featured on this site may offer both injectable and oral semaglutide options where clinically appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#e8eef4] px-6 py-3 border-b-2 border-[#003366]">
                <h2 className="text-lg font-bold text-[#003366]">Related Resources</h2>
              </div>
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/wegovy-pill-review"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Wegovy® Pill: Comprehensive Review and Analysis
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
                    → Best Weight Loss Injections Comparison
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Supplementation Guidelines
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
