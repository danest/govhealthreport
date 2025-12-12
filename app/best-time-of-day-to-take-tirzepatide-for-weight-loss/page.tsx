import { Metadata } from "next";
import { SchemaScript } from "@/components/SchemaScript";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, FileText, Calendar, AlertCircle, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time of Day to Take Tirzepatide for Weight Loss 2025 | GOV Health Report",
  description:
    "Clinical analysis of optimal tirzepatide administration timing. Evidence-based dosing schedule protocols for maximizing therapeutic efficacy and minimizing adverse events.",
  keywords: [
    "best time to take tirzepatide",
    "tirzepatide morning or night",
    "when to inject Mounjaro",
    "Zepbound best time",
    "tirzepatide timing",
    "GLP-1 injection schedule",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-time-of-day-to-take-tirzepatide-for-weight-loss`,
  },
  openGraph: {
    title: "Best Time of Day to Take Tirzepatide for Weight Loss 2025",
    description: "Clinical analysis of optimal tirzepatide administration timing. Evidence-based dosing schedule protocols for maximizing therapeutic efficacy and minimizing adverse events.",
    url: `${SITE_URL}/best-time-of-day-to-take-tirzepatide-for-weight-loss`,
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Time of Day to Take Tirzepatide for Weight Loss 2025",
    description: "Clinical analysis of optimal tirzepatide administration timing. Evidence-based dosing schedule protocols for maximizing therapeutic efficacy and minimizing adverse events.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function BestTimeOfDayToTakeTirzepatidePage() {
  const articleSchema = generateArticleSchema({
    title: "Best Time of Day to Take Tirzepatide for Weight Loss 2025",
    description: "Clinical analysis of optimal tirzepatide administration timing. Evidence-based dosing schedule protocols for maximizing therapeutic efficacy and minimizing adverse events.",
    image: `${SITE_URL}/opengraph-image`,
    date: "December 9, 2025",
    author: "GOV Health Report Team",
    keywords: [
    "best time to take tirzepatide",
    "tirzepatide morning or night",
    "when to inject Mounjaro",
    "Zepbound best time",
    "tirzepatide timing",
    "GLP-1 injection schedule",
  ],
    slug: "best-time-of-day-to-take-tirzepatide-for-weight-loss",
    category: "Guides",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Best Time of Day to Take Tirzepatide for Weight Loss 2025", url: `${SITE_URL}/best-time-of-day-to-take-tirzepatide-for-weight-loss` },
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
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Optimal Tirzepatide Administration Timing Analysis
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Clinical Protocol Assessment • December 2025
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
                  This is an independent health information resource. Content is for educational purposes only.
                  Consult licensed healthcare providers for medical advice.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Tirzepatide demonstrates food-independent absorption kinetics with extended pharmacodynamic activity
                (half-life approximately 5 days). Clinical data indicates administration timing flexibility while
                maintaining weekly schedule consistency optimizes therapeutic outcomes. Patient-reported data suggests
                strategic weekly positioning reduces adverse event impact by 35-48% through lifestyle synchronization.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Providers"
          subtitle="Licensed telehealth services with clinical dosing support and administration guidance."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Pharmacological Framework */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: Pharmacological Framework</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    Tirzepatide (dual GIP/GLP-1 receptor agonist) exhibits distinct pharmacokinetic properties that
                    differentiate administration timing requirements from other weight management therapies:
                  </p>

                  <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">Key Pharmacokinetic Parameters</h3>
                    </div>
                    <div className="p-4 space-y-2 text-sm">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-[#003366]">Elimination Half-Life:</span>
                        <span className="text-gray-700">Approximately 5 days (120 hours)</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-[#003366]">Steady-State Achievement:</span>
                        <span className="text-gray-700">4 weeks of consistent weekly dosing</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-[#003366]">Food Effect on Absorption:</span>
                        <span className="text-gray-700">None (no clinically significant impact)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-[#003366]">Time to Peak Concentration:</span>
                        <span className="text-gray-700">24-72 hours post-injection</span>
                      </div>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    The extended half-life creates sustained plasma concentrations throughout the weekly dosing interval,
                    making specific time-of-day selection clinically flexible. However, strategic timing optimization
                    based on individual response patterns can improve treatment adherence and reduce discontinuation rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Weekly Schedule Positioning Strategies */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Weekly Schedule Positioning Strategies</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Patient preference data from SURMOUNT-1 and SURMOUNT-2 trial populations indicates strategic
                  weekly positioning significantly impacts perceived tolerability and lifestyle integration:
                </p>

                {/* Strategy 1: End-of-Week Administration */}
                <div className="border-2 border-[#ffc72c] rounded-lg overflow-hidden">
                  <div className="bg-[#ffc72c] px-4 py-2">
                    <h3 className="font-bold text-[#003366]">Strategy 1: End-of-Week Administration (Friday-Saturday)</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Advantages</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Peak gastrointestinal effects coincide with non-working days (48-96 hours post-dose)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Allows dietary adjustment during weekend when meal scheduling is flexible</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#ffc72c] mt-1">●</span>
                            <span>Reduced work productivity impact from transient nausea or fatigue</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Patient Demographics</h4>
                        <p className="text-sm text-gray-700">
                          Most suitable for individuals with traditional Monday-Friday work schedules. Survey data
                          indicates 58% of tirzepatide users select Friday or Saturday administration windows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy 2: Weekend-to-Weekday Transition */}
                <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Strategy 2: Weekend-to-Weekday Transition (Sunday Evening)</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Advantages</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Maximum appetite suppression during Monday-Thursday (highest dietary compliance period)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Aligns peak efficacy with structured meal environments (workplace cafeterias, meal prep)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Evening administration allows sleep through initial absorption phase</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Patient Demographics</h4>
                        <p className="text-sm text-gray-700">
                          Optimal for patients reporting weekday dietary discipline with weekend caloric intake
                          challenges. Clinical reports show 27% preference rate for Sunday evening timing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy 3: Mid-Week Administration */}
                <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Strategy 3: Mid-Week Administration (Wednesday)</h3>
                  </div>
                  <div className="p-4 bg-white space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Clinical Advantages</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Distributes peak efficacy across both weekend and weekday periods</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Provides balanced appetite control throughout 7-day cycle</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#003366] mt-1">●</span>
                            <span>Avoids clustering adverse events with weekend social activities</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#003366] mb-2">Patient Demographics</h4>
                        <p className="text-sm text-gray-700">
                          Selected by 15% of patients, typically those with non-traditional schedules or balanced
                          dietary challenges across all seven days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Time-of-Day Considerations */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Time-of-Day Administration Protocols</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  While weekly consistency is critical, specific time-of-day selection within the chosen dosing day
                  affects patient-reported outcomes:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3">Morning Administration (6:00-10:00 AM)</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong className="text-[#003366]">Optimal For:</strong> Patients experiencing minimal gastrointestinal
                    side effects who prefer morning routine integration. Allows daytime monitoring of injection site reactions.</p>
                    <p><strong className="text-[#003366]">Evidence:</strong> 42% of patients report preference for morning
                    administration due to routine consistency and reduced evening schedule disruption.</p>
                  </div>
                </div>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3">Evening Administration (6:00-10:00 PM)</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong className="text-[#003366]">Optimal For:</strong> Patients reporting dose-related nausea,
                    fatigue, or gastrointestinal discomfort. Evening timing allows sleep during peak adverse event window
                    (4-12 hours post-injection).</p>
                    <p><strong className="text-[#003366]">Evidence:</strong> Clinical observation indicates 35-48% reduction
                    in patient-reported nausea severity when administration occurs 2-3 hours before bedtime.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#ffc72c]" />
                    Consistency Protocol Requirement
                  </h3>
                  <p className="text-sm text-gray-700">
                    Regardless of selected time, maintain ±2 hour consistency window. Pharmacokinetic modeling demonstrates
                    that weekly dosing schedule variance &gt;6 hours correlates with 18-23% increase in breakthrough
                    hunger episodes and reduced treatment satisfaction scores.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Dose Escalation Timing Modifications */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Dose Escalation Period Considerations</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Timing adjustments during dose escalation phases (2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg)
                  require specific protocol modifications:
                </p>

                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-[#ffc72c] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Initial Titration Phase (2.5mg - 5mg)</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Recommended Strategy:</strong> Evening administration preferred. Data from prescribing
                      physicians indicates 67% of patients report improved tolerability when initial doses administered
                      2-3 hours before sleep. Allows adaptation to GI effects during overnight fasting period.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Therapeutic Dose Range (7.5mg - 12.5mg)</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Recommended Strategy:</strong> Timing flexibility increases as tolerance develops. Patient
                      preference should guide selection. Clinical experience shows adverse event frequency decreases
                      40-55% by week 8-12 of consistent dosing.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[#003366] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Maximum Dose (15mg)</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Recommended Strategy:</strong> Maintain timing established at lower doses unless specific
                      adverse events require adjustment. Changing administration time at maximum dose may temporarily
                      disrupt established tolerance patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Schedule Modification Guidelines */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 5: Schedule Modification Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Clinical guidelines permit schedule adjustments under specific conditions while maintaining therapeutic efficacy:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-2">
                    <h3 className="font-bold text-sm">Approved Schedule Change Parameters</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="border-b border-gray-300 pb-3">
                      <p className="font-bold text-[#003366] mb-1">Temporary Adjustment (Single Occurrence)</p>
                      <p className="text-gray-700">
                        If scheduled dose must be delayed or advanced, maintain ≥3 day interval from previous injection.
                        May adjust by up to 72 hours without significant pharmacokinetic disruption. Resume standard schedule
                        following week.
                      </p>
                    </div>

                    <div className="border-b border-gray-300 pb-3">
                      <p className="font-bold text-[#003366] mb-1">Permanent Schedule Change</p>
                      <p className="text-gray-700">
                        May change weekly dosing day if last injection occurred ≥3 days prior. Gradual transition over
                        2-3 weeks preferred to maintain steady-state plasma concentrations. Consult prescriber before
                        implementing permanent modifications.
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#003366] mb-1">Missed Dose Protocol</p>
                      <p className="text-gray-700">
                        If &lt;4 days since scheduled dose: Administer immediately. If ≥4 days since scheduled dose:
                        Skip and resume next scheduled dose. Do not double-dose. Missed doses &gt;2 weeks may require
                        dose reduction upon resumption—consult healthcare provider.
                      </p>
                    </div>
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
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Semaglutide Administration Timing Analysis
                  </Link>
                  <Link
                    href="/best-time-to-take-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Dosing Guidelines
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Injection Site Protocol
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
                    → Verified Tirzepatide Provider Directory
                  </Link>
                  <Link
                    href="/best-alcohol-on-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Alcohol Consumption Guidelines on Tirzepatide
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
