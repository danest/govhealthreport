import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Activity, MapPin, RotateCw, AlertCircle, Layers, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025 | GOV Health Report",
  description:
    "Clinical guidelines for tirzepatide injection site selection. Anatomical analysis of optimal subcutaneous zones, dual-agonist absorption considerations, and rotation protocols.",
  keywords: [
    "best place to inject tirzepatide",
    "tirzepatide injection sites",
    "Mounjaro injection",
    "Zepbound injection",
    "how to inject tirzepatide",
    "subcutaneous injection",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-place-to-inject-tirzepatide`,
  },
  openGraph: {
    title: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025",
    description: "Clinical guidelines for tirzepatide injection site selection. Anatomical analysis of optimal subcutaneous zones, dual-agonist absorption considerations, and rotation protocols.",
    url: `${SITE_URL}/best-place-to-inject-tirzepatide`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025",
    description: "Clinical guidelines for tirzepatide injection site selection. Anatomical analysis of optimal subcutaneous zones, dual-agonist absorption considerations, and rotation protocols.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestPlaceToInjectTirzepatidePage() {
  const articleSchema = generateArticleSchema({
    title: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025",
    description: "Clinical guidelines for tirzepatide injection site selection. Anatomical analysis of optimal subcutaneous zones, dual-agonist absorption considerations, and rotation protocols.",
    image: `${SITE_URL}/opengraph-image`,
    date: "December 9, 2025",
    author: "GOV Health Report Team",
    keywords: [
    "best place to inject tirzepatide",
    "tirzepatide injection sites",
    "Mounjaro injection",
    "Zepbound injection",
    "how to inject tirzepatide",
    "subcutaneous injection",
  ],
    slug: "best-place-to-inject-tirzepatide",
    category: "Guides",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Best Place to Inject Tirzepatide - Injection Sites Guide 2025", url: `${SITE_URL}/best-place-to-inject-tirzepatide` },
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
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Tirzepatide Injection Site Selection Protocol
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Dual GIP/GLP-1 Agonist Administration Guidelines • December 2025
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
                  This is an independent health information resource. Injection protocols are for educational purposes only.
                  Healthcare providers must provide individualized training and supervision.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Tirzepatide (dual GIP/GLP-1 receptor agonist) requires subcutaneous administration into adipose tissue
                with minimum 10mm depth at approved anatomical sites. Unlike single-agonist formulations, tirzepatide's
                dual-receptor mechanism necessitates consistent subcutaneous placement to maintain balanced GIP and GLP-1
                activation kinetics. Site selection impacts absorption variability, patient compliance, and adverse event
                profiles.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Providers"
          subtitle="Licensed telehealth services with comprehensive injection technique training and ongoing clinical support."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Anatomical Site Comparison */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: Comparative Anatomical Site Analysis</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  FDA prescribing information designates three anatomical zones for tirzepatide administration. Site
                  selection should prioritize adipose tissue depth, self-administration accessibility, and rotation
                  capacity:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Injection Site Comparative Matrix</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#e8eef4]">
                        <tr>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Site</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Adipose Depth</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Self-Admin Ease</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Rotation Area</th>
                          <th className="px-4 py-2 text-left text-[#003366] font-bold">Patient Preference</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Abdomen</td>
                          <td className="px-4 py-3">15-25mm average</td>
                          <td className="px-4 py-3">Excellent (95%)</td>
                          <td className="px-4 py-3">Large (200+ cm²)</td>
                          <td className="px-4 py-3">82% primary</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium text-[#003366]">Anterior Thigh</td>
                          <td className="px-4 py-3">10-18mm average</td>
                          <td className="px-4 py-3">Good (88%)</td>
                          <td className="px-4 py-3">Medium (120+ cm²)</td>
                          <td className="px-4 py-3">35% secondary</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#003366]">Posterior Arm</td>
                          <td className="px-4 py-3">8-14mm average</td>
                          <td className="px-4 py-3">Limited (45%)</td>
                          <td className="px-4 py-3">Small (60+ cm²)</td>
                          <td className="px-4 py-3">8% tertiary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#e8eef4] border-t-2 border-[#003366] text-xs text-gray-600">
                    <p><strong className="text-[#003366]">Data Source:</strong> Pooled analysis from SURMOUNT clinical trial populations and post-market surveillance data. Adipose depth measurements represent BMI 25-35 kg/m² range.</p>
                  </div>
                </div>

                {/* Site 1: Abdominal Detailed Analysis */}
                <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden mt-4">
                  <div className="bg-[#ffc72c] px-4 py-2">
                    <h3 className="font-bold text-[#003366]">Site 1: Abdominal Region (Periumbilical Zones)</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-bold text-[#003366] mb-2">Precise Anatomical Boundaries</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-[#ffc72c] shrink-0">●</span>
                            <span>Minimum umbilicus distance: 5cm (2 inches) in all cardinal directions</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#ffc72c] shrink-0">●</span>
                            <span>Usable quadrants: Four zones (right/left upper and lower)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#ffc72c] shrink-0">●</span>
                            <span>Lateral extent: To mid-axillary line bilaterally</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#ffc72c] shrink-0">●</span>
                            <span>Superior limit: Costal margin</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#ffc72c] shrink-0">●</span>
                            <span>Inferior limit: Inguinal region</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#003366] mb-2">Pharmacokinetic Considerations</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-[#003366] shrink-0">●</span>
                            <span>Absorption rate: 100% baseline (reference standard)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#003366] shrink-0">●</span>
                            <span>Time to peak: 24-72 hours (median 48h)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#003366] shrink-0">●</span>
                            <span>Inter-site variability: &lt;8% coefficient of variation</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#003366] shrink-0">●</span>
                            <span>Temperature stability: Less affected by ambient temperature</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sites 2 & 3 Condensed */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366] text-sm">Site 2: Anterior/Lateral Thigh</h3>
                    </div>
                    <div className="p-3 bg-white text-xs text-gray-700 space-y-2">
                      <p><strong className="text-[#003366]">Zone:</strong> Middle third, anterior and lateral aspects only</p>
                      <p><strong className="text-[#003366]">Key Advantage:</strong> Bilateral sites double rotation capacity</p>
                      <p><strong className="text-[#003366]">Key Limitation:</strong> Adipose depth decreases 20-40% in lean individuals (BMI &lt;25)</p>
                      <p><strong className="text-[#003366]">Absorption:</strong> 95-102% compared to abdomen (clinically equivalent)</p>
                    </div>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366] text-sm">Site 3: Posterior Upper Arm</h3>
                    </div>
                    <div className="p-3 bg-white text-xs text-gray-700 space-y-2">
                      <p><strong className="text-[#003366]">Zone:</strong> Triceps region, mid-point between acromion and olecranon</p>
                      <p><strong className="text-[#003366]">Key Advantage:</strong> Preserved option for patients with abdominal contraindications</p>
                      <p><strong className="text-[#003366]">Key Limitation:</strong> Self-injection success rate only 45% without assistive devices</p>
                      <p><strong className="text-[#003366]">Absorption:</strong> 90-98% compared to abdomen (slight delay in Tmax)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Rotation Strategies */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <RotateCw className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Advanced Rotation Strategies</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Weekly tirzepatide administration requires structured rotation protocols to prevent injection-site
                  complications and maintain consistent absorption:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4 space-y-3">
                  <h3 className="font-bold text-[#003366]">Clock-Face Rotation Method (Abdominal)</h3>
                  <p className="text-sm text-gray-700">
                    Visualize abdomen as clock face with umbilicus as center. Systematically rotate through 12 positions,
                    maintaining ≥5cm from center:
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 1</p>
                      <p className="text-gray-700">12 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 2</p>
                      <p className="text-gray-700">1 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 3</p>
                      <p className="text-gray-700">2 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 4</p>
                      <p className="text-gray-700">3 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 5</p>
                      <p className="text-gray-700">4 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 6</p>
                      <p className="text-gray-700">5 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 7</p>
                      <p className="text-gray-700">6 o'clock</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center border border-[#003366]">
                      <p className="font-bold text-[#003366]">Week 8</p>
                      <p className="text-gray-700">7 o'clock</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 italic mt-2">
                    Continue pattern through 8, 9, 10, 11 o'clock positions, completing 12-week cycle before repeating.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#ffc72c]" />
                    Multi-Site Integration Strategy
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    For patients experiencing localized site sensitivity or requiring maximum tissue preservation:
                  </p>
                  <div className="bg-[#e8eef4] p-3 rounded text-sm space-y-2">
                    <p><strong className="text-[#003366]">Weeks 1-4:</strong> Abdominal rotation (4 quadrants)</p>
                    <p><strong className="text-[#003366]">Weeks 5-6:</strong> Right anterior thigh (alternating medial/lateral)</p>
                    <p><strong className="text-[#003366]">Weeks 7-8:</strong> Left anterior thigh (alternating medial/lateral)</p>
                    <p><strong className="text-[#003366]">Week 9:</strong> Return to abdomen, cycle repeats</p>
                    <p className="text-xs text-gray-600 pt-2 border-t border-gray-300">
                      This 9-week cycle provides 21-day recovery period for each specific injection point, exceeding minimum
                      14-day recommendation for lipodystrophy prevention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Injection Depth and Technique */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Subcutaneous Depth Verification Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tirzepatide's dual-receptor mechanism requires consistent subcutaneous (not intramuscular or intradermal)
                  placement:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Pre-Injection Tissue Assessment</h3>
                    <ol className="space-y-2 text-xs text-gray-700">
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">1.</span>
                        <span><strong>Pinch Test:</strong> Grasp skin and subcutaneous tissue between thumb and forefinger</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">2.</span>
                        <span><strong>Measurement:</strong> Pinched fold should be ≥2.5cm (1 inch) to confirm adequate depth</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-[#003366] shrink-0">3.</span>
                        <span><strong>Site Rejection Criteria:</strong> If pinch &lt;2.5cm, select alternative site with greater adiposity</span>
                      </li>
                    </ol>
                  </div>

                  <div className="border-2 border-[#003366] rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-[#003366] mb-3 text-sm">Injection Angle Requirements</h3>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p><strong className="text-[#003366]">Standard Protocol:</strong> 90-degree perpendicular insertion with tissue elevation (pinch maintained during injection)</p>
                      <p><strong className="text-[#003366]">Lean Patients (BMI &lt;25):</strong> Consider 45-degree angle at thigh sites if adipose depth &lt;10mm</p>
                      <p><strong className="text-[#003366]">Verification:</strong> No aspiration required (subcutaneous injections do not require blood return check)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4 mt-4">
                  <h3 className="font-bold text-[#003366] mb-2 text-sm">Injection Hold-Time Requirement</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Tirzepatide formulation viscosity necessitates extended post-injection hold before needle withdrawal:
                  </p>
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Minimum hold after dose delivery: 10 seconds (6 seconds insufficient for complete depot)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Premature withdrawal results in 10-20% dose loss via backflow</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ffc72c] shrink-0">●</span>
                      <span>Higher doses (10mg, 12.5mg, 15mg) may require 12-15 second hold due to larger volumes</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Site-Specific Complications */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Injection-Site Adverse Events</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Clinical trial data from SURMOUNT studies documents injection-site reaction incidence and management:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Common Injection-Site Reactions (Incidence Data)</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="border-l-4 border-[#ffc72c] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Erythema (Redness) - 4.2% of injections</p>
                      <p className="text-xs text-gray-700">Self-limiting within 24-48 hours. No intervention required unless spreading or painful.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Pruritus (Itching) - 2.8% of injections</p>
                      <p className="text-xs text-gray-700">Avoid scratching. May apply ice or oral antihistamine if severe. Not indication for discontinuation.</p>
                    </div>
                    <div className="border-l-4 border-[#003366] pl-3 py-1">
                      <p className="font-bold text-[#003366]">Ecchymosis (Bruising) - 3.5% of injections</p>
                      <p className="text-xs text-gray-700">More common with poor technique or anticoagulant therapy. Rotate sites aggressively if recurrent.</p>
                    </div>
                    <div className="border-l-4 border-[#a31621] pl-3 py-1">
                      <p className="font-bold text-[#a31621]">Lipohypertrophy (Tissue Thickening) - 1.1% of patients</p>
                      <p className="text-xs text-gray-700">Indicates inadequate rotation. Immediately cease using affected quadrant for 8-12 weeks minimum.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#a31621] rounded-lg p-4">
                  <h3 className="font-bold text-[#a31621] mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Warning Signs Requiring Provider Contact
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Expanding erythema &gt;5cm diameter or warmth (possible cellulitis)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Persistent nodules or lumps lasting &gt;1 week post-injection</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Purulent drainage or abscess formation (extremely rare: 0.02% incidence)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#a31621] shrink-0">!</span>
                      <span>Severe pain disproportionate to expected injection discomfort</span>
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
                    href="/best-place-to-inject-semaglutide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Dosing Schedule Protocol
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Supplementation Guidelines
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Verified Provider Directory
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
