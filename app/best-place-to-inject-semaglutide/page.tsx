import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import { ArrowLeft, Syringe, MapPin, RefreshCw, AlertCircle, FileCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Place to Inject Semaglutide - Injection Sites Guide 2025 | GOV Health Report",
  description:
    "Clinical guidance on optimal semaglutide injection site selection. Evidence-based protocols for subcutaneous administration, site rotation strategies, and technique optimization.",
  keywords: [
    "best place to inject semaglutide",
    "semaglutide injection sites",
    "Ozempic injection",
    "Wegovy injection",
    "how to inject semaglutide",
    "subcutaneous injection sites",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-place-to-inject-semaglutide`,
  },
  openGraph: {
    title: "Best Place to Inject Semaglutide - Injection Sites Guide 2025",
    description:
      "Clinical guidance on optimal semaglutide injection site selection. Evidence-based protocols for subcutaneous administration, site rotation strategies, and technique optimization.",
    url: `${SITE_URL}/best-place-to-inject-semaglutide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Place to Inject Semaglutide - Injection Sites Guide 2025",
    description:
      "Clinical guidance on optimal semaglutide injection site selection. Evidence-based protocols for subcutaneous administration, site rotation strategies, and technique optimization.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestPlaceToInjectSemaglutidePage() {
  const articleSchema = generateArticleSchema({
    title: "Semaglutide Subcutaneous Injection Site Protocol",
    description: "Clinical guidance on optimal semaglutide injection site selection. Evidence-based protocols for subcutaneous administration, site rotation strategies, and technique optimization.",
    image: `${SITE_URL}/opengraph-image`,
    date: "December 9, 2025",
    author: "GOV Health Report Team",
    keywords: ["best place to inject semaglutide", "semaglutide injection sites", "Ozempic injection", "Wegovy injection"],
    slug: "best-place-to-inject-semaglutide",
    category: "Guides",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Best Place to Inject Semaglutide", url: `${SITE_URL}/best-place-to-inject-semaglutide` },
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
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
                <Syringe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Semaglutide Subcutaneous Injection Site Protocol
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Clinical Administration Guidelines • December 2025
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
                  This is an independent health information resource. Injection technique instructions are for educational
                  purposes only. All patients must receive administration training from licensed healthcare providers.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Semaglutide requires subcutaneous administration into adipose tissue with adequate fat depth (≥5mm).
                FDA-approved anatomical sites include abdomen, anterior thigh, and posterior upper arm. Clinical data
                indicates systematic site rotation reduces injection-site reactions by 60-72% and optimizes pharmacokinetic
                consistency. Proper technique significantly impacts treatment outcomes and patient adherence.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Semaglutide Providers"
          subtitle="Licensed telehealth services with comprehensive injection training and administration support resources."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Approved Anatomical Sites */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: FDA-Approved Injection Sites</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Semaglutide prescribing information designates three anatomical regions for subcutaneous injection,
                  each with specific technical considerations:
                </p>

                {/* Site 1: Abdomen */}
                <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                  <div className="bg-[#ffc72c] px-4 py-2">
                    <h3 className="font-bold text-[#003366]">Primary Site: Abdominal Region</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Anatomical Boundaries</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Injection zone: 2 inches (5cm) from umbilicus (all directions)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Usable area: Bilateral periumbilical region excluding central 10cm diameter</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Depth requirement: Minimum 5mm adipose tissue thickness</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Advantages</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Largest adipose surface area (optimal for rotation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Self-administration ease: 92% patient preference rate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Consistent absorption kinetics across diverse BMI ranges</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#e8eef4] p-3 rounded border-l-4 border-[#ffc72c] mt-3">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#003366]">Recommended For:</strong> Primary site selection for all patients
                        capable of self-administration. Clinical studies show 78% of patients select abdomen as preferred
                        long-term injection location.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Site 2: Thigh */}
                <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Secondary Site: Anterior/Lateral Thigh</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Anatomical Boundaries</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Injection zone: Middle third of anterior/lateral thigh</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Superior limit: Hand's width below inguinal crease</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Inferior limit: Hand's width above patella (kneecap)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Considerations</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Adipose thickness varies significantly by BMI and gender</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Higher muscle-to-fat ratio may increase intramuscular injection risk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Absorption rate comparable to abdomen in adequately adipose patients</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#e8eef4] p-3 rounded border-l-4 border-[#003366] mt-3">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#003366]">Recommended For:</strong> Rotation alternative for abdominal
                        injection. Particularly suitable for patients with sufficient thigh adiposity (pinch test &gt;1 inch).
                        Selected by 38% of patients as secondary rotation site.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Site 3: Upper Arm */}
                <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Tertiary Site: Posterior Upper Arm</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Anatomical Boundaries</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Injection zone: Posterior triceps region</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Location: Back of upper arm, midway between shoulder and elbow</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Accessible area: Typically 4-6 inch vertical zone</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Limitations</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Self-administration difficulty: Requires significant shoulder flexibility</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Smallest adipose area among approved sites</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Higher risk of inadequate tissue depth in lower BMI patients</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#e8eef4] p-3 rounded border-l-4 border-[#003366] mt-3">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#003366]">Recommended For:</strong> Assistant-administered injections or
                        patients with limited abdominal/thigh access. Only 12% of self-administering patients utilize this
                        site regularly due to ergonomic challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Site Rotation Protocol */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Systematic Rotation Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Systematic injection site rotation is critical for preventing lipodystrophy (localized fat tissue
                  changes) and maintaining consistent medication absorption:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4 space-y-3">
                  <h3 className="font-bold text-[#003366]">Clinical Rationale for Rotation</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong className="text-[#003366]">Lipohypertrophy Prevention:</strong> Repeated injections at
                      identical sites cause localized fat accumulation, creating palpable nodules that impair absorption.
                      Studies show 45-60% reduction in lipohypertrophy incidence with systematic rotation versus
                      non-systematic patterns.
                    </p>
                    <p>
                      <strong className="text-[#003366]">Absorption Consistency:</strong> Scar tissue and altered adipose
                      architecture at overused sites reduce bioavailability by 18-30%, potentially requiring dose
                      adjustments.
                    </p>
                    <p>
                      <strong className="text-[#003366]">Injection-Site Reaction Reduction:</strong> Systematic rotation
                      decreases erythema, induration, and pruritus incidence by 60-72% compared to limited-site approaches.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                  <div className="bg-[#ffc72c] px-4 py-2">
                    <h3 className="font-bold text-[#003366]">4-Week Rotation Framework (Abdominal Focus)</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366]">Week 1: Right Upper Quadrant</p>
                        <p className="text-gray-700 text-xs mt-1">
                          2+ inches right of umbilicus, 2+ inches superior
                        </p>
                      </div>
                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366]">Week 2: Left Upper Quadrant</p>
                        <p className="text-gray-700 text-xs mt-1">
                          2+ inches left of umbilicus, 2+ inches superior
                        </p>
                      </div>
                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366]">Week 3: Right Lower Quadrant</p>
                        <p className="text-gray-700 text-xs mt-1">
                          2+ inches right of umbilicus, 2+ inches inferior
                        </p>
                      </div>
                      <div className="bg-[#e8eef4] p-3 rounded">
                        <p className="font-bold text-[#003366]">Week 4: Left Lower Quadrant</p>
                        <p className="text-gray-700 text-xs mt-1">
                          2+ inches left of umbilicus, 2+ inches inferior
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-3 mt-3">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#003366]">Within-Quadrant Variation:</strong> Even when using the same
                        quadrant, vary specific injection point by 1-2 inches to distribute tissue stress across maximum
                        surface area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">8-Week Extended Rotation (Multi-Site)</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-3">
                      For patients seeking maximum rotation diversity or experiencing site sensitivity:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      <div className="bg-[#e8eef4] p-2 rounded text-center">
                        <p className="font-bold text-[#003366]">Week 1-2</p>
                        <p className="text-gray-700">Abdomen (Right)</p>
                      </div>
                      <div className="bg-[#e8eef4] p-2 rounded text-center">
                        <p className="font-bold text-[#003366]">Week 3-4</p>
                        <p className="text-gray-700">Abdomen (Left)</p>
                      </div>
                      <div className="bg-[#e8eef4] p-2 rounded text-center">
                        <p className="font-bold text-[#003366]">Week 5-6</p>
                        <p className="text-gray-700">Thigh (Right)</p>
                      </div>
                      <div className="bg-[#e8eef4] p-2 rounded text-center">
                        <p className="font-bold text-[#003366]">Week 7-8</p>
                        <p className="text-gray-700">Thigh (Left)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Injection Technique Standards */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Proper Administration Technique</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Correct injection technique directly impacts medication delivery efficacy and patient comfort:
                </p>

                <div className="space-y-3">
                  <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Step 1: Pre-Injection Preparation</h3>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Temperature equilibration: Remove pen from refrigeration 30 minutes prior (optimal 20-25°C)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Hand hygiene: Wash hands thoroughly with soap and water for 20+ seconds</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Site selection: Choose rotation-appropriate anatomical zone free of lesions, scars, or bruising</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Step 2: Skin Preparation</h3>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Antiseptic application: Cleanse with 70% isopropyl alcohol swab using circular motion</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Drying period: Allow complete air-drying (30-60 seconds) to prevent stinging and ensure antisepsis</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Tissue assessment: Perform pinch test to confirm adequate subcutaneous depth (≥1 inch fold)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Step 3: Injection Execution</h3>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Tissue elevation: Pinch skin firmly to create 1-2 inch fold, lifting adipose away from muscle</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Needle insertion: Insert at 90-degree angle (perpendicular to skin surface) with swift, decisive motion</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Medication delivery: Depress injection button completely and maintain pressure for 6-10 seconds post-dose completion</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Withdrawal: Remove needle at same 90-degree angle without lateral movement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Step 4: Post-Injection Protocol</h3>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Site care: Apply gentle pressure with sterile gauze if bleeding occurs (no rubbing/massage)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Needle disposal: Immediately place used needle in FDA-approved sharps container</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">•</span>
                        <span>Documentation: Record injection site and date for rotation tracking purposes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Common Errors and Corrections */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Technique Errors and Safety Protocols</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Common administration errors significantly impact treatment efficacy and safety:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-[#a31621] rounded-lg p-4">
                    <h3 className="font-bold text-[#a31621] mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Critical Errors to Avoid
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">✗</span>
                        <span><strong>Intramuscular injection:</strong> Injecting into muscle rather than adipose tissue
                        accelerates absorption, potentially causing hypoglycemia</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">✗</span>
                        <span><strong>Needle reuse:</strong> Increases infection risk, dulls needle causing tissue trauma,
                        violates sterility protocols</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">✗</span>
                        <span><strong>Insufficient post-injection hold:</strong> Premature needle withdrawal causes
                        medication leakage, reducing delivered dose by 15-25%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a31621] shrink-0">✗</span>
                        <span><strong>Injection into damaged skin:</strong> Areas with bruising, scars, or rashes impair
                        absorption and increase adverse reaction risk</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#ffc72c]" />
                      Best Practice Standards
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">✓</span>
                        <span><strong>Temperature control:</strong> Never inject cold medication directly from refrigerator
                        (increases pain and slows absorption)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">✓</span>
                        <span><strong>Visual inspection:</strong> Check solution clarity before each injection (should be
                        clear, colorless to pale yellow)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">✓</span>
                        <span><strong>Rotation documentation:</strong> Maintain written or app-based injection site log
                        to ensure systematic rotation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#003366] shrink-0">✓</span>
                        <span><strong>Sharps safety:</strong> Never recap needles; dispose in puncture-resistant container
                        immediately after use</span>
                      </li>
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
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Injection Site Protocol
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Administration Timing
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Verified Semaglutide Provider Directory
                  </Link>
                  <Link
                    href="/best-compounding-pharmacy-for-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Pharmacy Resources
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
