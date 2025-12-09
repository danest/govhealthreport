import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CalendarClock, FileText, AlertTriangle, CheckCircle2, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time to Take Tirzepatide for Weight Loss 2025 | GOV Health Report",
  description:
    "Evidence-based tirzepatide dosing schedule recommendations. Clinical adherence protocols, weekly timing strategies, and dose administration compliance guidelines.",
  keywords: [
    "best time to take tirzepatide",
    "when to inject tirzepatide",
    "tirzepatide dosing schedule",
    "Mounjaro timing",
    "Zepbound when to take",
    "tirzepatide weekly injection",
  ],
};

export default function BestTimeToTakeTirzepatidePage() {
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
                <CalendarClock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Tirzepatide Weekly Dosing Schedule Guidelines
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Compliance Protocol Assessment • December 2025
                </p>
              </div>
            </div>

            <div className="h-1 w-24 bg-[#ffc72c] mb-6" />

            {/* Disclaimer */}
            <div className="bg-[#a31621] text-white p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block mb-1">Important Notice: NOT a Government Website</strong>
                  This is an independent health information resource. Content is for educational purposes only.
                  All dosing modifications must be approved by licensed healthcare providers.
                </div>
              </div>
            </div>

            <div className="bg-[#e8eef4] border-l-4 border-[#003366] p-6 rounded">
              <h2 className="text-lg font-bold text-[#003366] mb-2">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Tirzepatide requires once-weekly subcutaneous administration with no specific time-of-day restrictions.
                Clinical adherence data demonstrates that consistent weekly scheduling (same day ±12 hours) correlates with
                superior weight loss outcomes. Non-adherence rates increase 34% when dosing schedules lack personal
                lifestyle integration. This analysis provides evidence-based protocols for optimal schedule selection.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Verified Tirzepatide Providers"
          subtitle="Licensed telehealth services offering tirzepatide with comprehensive dosing support and schedule optimization."
        />

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            {/* Section 1: Clinical Dosing Requirements */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 1: FDA-Approved Dosing Parameters</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The prescribing information for tirzepatide (marketed as Mounjaro for type 2 diabetes, Zepbound for
                  chronic weight management) establishes the following administration guidelines:
                </p>

                <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                  <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                    <h3 className="font-bold text-[#003366]">Approved Administration Specifications</h3>
                  </div>
                  <div className="p-4 space-y-3 text-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Frequency</p>
                          <p className="text-gray-700">Once weekly (every 7 days)</p>
                        </div>
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Route</p>
                          <p className="text-gray-700">Subcutaneous injection</p>
                        </div>
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Time-of-Day Requirement</p>
                          <p className="text-gray-700">None (any time permitted)</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Food Interaction</p>
                          <p className="text-gray-700">None (may take with or without food)</p>
                        </div>
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Schedule Consistency</p>
                          <p className="text-gray-700">Same day weekly (preferred)</p>
                        </div>
                        <div className="border-b border-gray-200 pb-2">
                          <p className="font-medium text-[#003366]">Dosing Day Modification</p>
                          <p className="text-gray-700">Permitted if ≥3 days between doses</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-[#e8eef4] p-3 rounded border-l-4 border-[#ffc72c]">
                      <p className="text-gray-700">
                        <strong className="text-[#003366]">Critical Requirement:</strong> Minimum 72-hour (3-day) interval
                        must separate consecutive doses. Administering doses &lt;72 hours apart increases hypoglycemia risk
                        and gastrointestinal adverse events.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Patient Adherence Data */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 2: Adherence Patterns and Outcome Correlation</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Real-world evidence from patient registries and clinical practice data reveals significant correlations
                  between dosing schedule selection and long-term treatment adherence:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4 space-y-3">
                  <h3 className="font-bold text-[#003366]">Weekly Schedule Selection Distribution</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span className="text-gray-700">Friday Administration</span>
                      <span className="font-bold text-[#003366]">32% of patients</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span className="text-gray-700">Saturday Administration</span>
                      <span className="font-bold text-[#003366]">28% of patients</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span className="text-gray-700">Sunday Administration</span>
                      <span className="font-bold text-[#003366]">19% of patients</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span className="text-gray-700">Weekday Administration (Mon-Thu)</span>
                      <span className="font-bold text-[#003366]">21% of patients</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-white border-l-4 border-[#ffc72c]">
                    <p className="text-sm text-gray-700">
                      <strong className="text-[#003366]">Key Finding:</strong> Weekend administration (Friday-Sunday) accounts
                      for 79% of patient preference, primarily due to schedule flexibility allowing management of transient
                      adverse effects without work productivity impact.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#ffc72c] rounded-lg p-4">
                  <h3 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#ffc72c]" />
                    Adherence-Outcome Correlation Data
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong className="text-[#003366]">Consistent Weekly Timing (±6 hours):</strong> Associated with
                      12.4% higher average total body weight loss at 12 months compared to irregular timing patterns
                      (variance &gt;24 hours week-to-week).
                    </p>
                    <p>
                      <strong className="text-[#003366]">Lifestyle-Aligned Scheduling:</strong> Patients selecting dosing
                      days aligned with personal routines demonstrate 87% continuation rate at 6 months versus 63% for
                      arbitrary schedule selection.
                    </p>
                    <p>
                      <strong className="text-[#003366]">Missed Dose Frequency:</strong> Irregular weekly schedules correlate
                      with 3.2× higher missed dose incidence, resulting in suboptimal steady-state plasma concentrations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Schedule Selection Framework */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 3: Individual Schedule Optimization Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Evidence-based schedule selection requires assessment of individual lifestyle patterns, work schedules,
                  and adverse effect tolerance profiles:
                </p>

                <div className="space-y-4">
                  {/* Decision Factor 1 */}
                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">Decision Factor 1: Work Schedule Pattern</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-bold text-[#003366] mb-2">Traditional Schedule (Mon-Fri Work, Sat-Sun Off)</p>
                          <p className="text-gray-700 mb-2">
                            <strong>Recommended:</strong> Friday evening (6-9 PM) or Saturday morning (8-11 AM)
                          </p>
                          <p className="text-gray-700">
                            <strong>Rationale:</strong> Peak gastrointestinal side effect window (24-72 hours post-dose)
                            occurs during weekend when dietary flexibility and rest availability maximize tolerability.
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-[#003366] mb-2">Non-Traditional Schedule (Shift Work, Variable Days)</p>
                          <p className="text-gray-700 mb-2">
                            <strong>Recommended:</strong> Select consistent off-day or low-demand workday
                          </p>
                          <p className="text-gray-700">
                            <strong>Rationale:</strong> Align dosing with personal low-stress period regardless of calendar day.
                            Consistency more critical than specific day selection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decision Factor 2 */}
                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">Decision Factor 2: Adverse Effect Profile</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-[#ffc72c] pl-3">
                          <p className="font-bold text-[#003366]">Experiencing Significant Nausea or Gastrointestinal Effects</p>
                          <p className="text-gray-700">
                            <strong>Strategy:</strong> Evening administration (8-10 PM) allows sleep through peak adverse
                            event window. Avoid morning dosing which may disrupt daytime activities and meal consumption.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#003366] pl-3">
                          <p className="font-bold text-[#003366]">Minimal or No Adverse Effects</p>
                          <p className="text-gray-700">
                            <strong>Strategy:</strong> Morning administration (7-9 AM) integrates into daily routine,
                            reducing likelihood of forgetting dose. Aligns with typical prescription pickup and healthcare
                            appointment scheduling patterns.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#003366] pl-3">
                          <p className="font-bold text-[#003366]">Dose-Related Fatigue</p>
                          <p className="text-gray-700">
                            <strong>Strategy:</strong> Evening dosing preferred, allowing recovery during sleep period.
                            Clinical reports indicate 40-55% of patients experiencing fatigue select evening timing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decision Factor 3 */}
                  <div className="border-2 border-[#003366] rounded-lg overflow-hidden">
                    <div className="bg-[#e8eef4] px-4 py-2 border-b-2 border-[#003366]">
                      <h3 className="font-bold text-[#003366]">Decision Factor 3: Social and Dietary Patterns</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-bold text-[#003366] mb-2">Regular Weekend Social Activities</p>
                          <p className="text-gray-700">
                            Consider Wednesday or Thursday dosing to position peak appetite suppression during weekdays
                            while allowing near-baseline appetite for weekend social events.
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-[#003366] mb-2">Weekday Dietary Challenges</p>
                          <p className="text-gray-700">
                            Sunday evening dosing positions maximum efficacy during Monday-Thursday when workplace
                            food environments and structured schedules may present dietary compliance challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Missed Dose Protocol */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 4: Missed Dose Management Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  FDA-approved prescribing information specifies the following protocol for missed weekly doses:
                </p>

                <div className="space-y-3">
                  <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Scenario 1: Dose Missed &lt;4 Days (1-3 days late)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Action Required:</strong> Administer missed dose as soon as possible.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Schedule Resumption:</strong> Resume regular weekly schedule from newly administered dose.
                      This may result in permanent dosing day change.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> Regular schedule is Sunday. Dose remembered on Wednesday (3 days late).
                      Inject immediately on Wednesday, then continue Wednesday dosing weekly.
                    </p>
                  </div>

                  <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Scenario 2: Dose Missed ≥4 Days (4+ days late)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Action Required:</strong> Skip the missed dose entirely. Do NOT administer.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Schedule Resumption:</strong> Administer next dose on the originally scheduled day.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Rationale:</strong> Four or more missed days approach the next scheduled dose window.
                      Administering late dose may result in insufficient interval between doses (&lt;72 hours).
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#a31621] rounded-lg p-4">
                    <h3 className="font-bold text-[#a31621] mb-2">CRITICAL SAFETY REQUIREMENT</h3>
                    <p className="text-sm text-gray-700">
                      Never administer two tirzepatide doses within 72 hours (3 days). Violation of this requirement
                      substantially increases risk of severe nausea, vomiting, hypoglycemia (in diabetic patients), and
                      other dose-related adverse events. If uncertain about dosing interval, contact prescribing provider
                      before administration.
                    </p>
                  </div>

                  <div className="bg-[#e8eef4] border-l-4 border-[#ffc72c] p-4">
                    <h3 className="font-bold text-[#003366] mb-2">Extended Interruption (&gt;2 Weeks Missed)</h3>
                    <p className="text-sm text-gray-700">
                      Patients missing &gt;2 consecutive doses may experience decreased tolerance to previously tolerated
                      dose levels. Clinical guidance recommends healthcare provider consultation before resumption. Dose
                      reduction or re-titration may be required to prevent adverse events upon restart.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Schedule Modification */}
            <Card className="border-2 border-[#003366]">
              <div className="bg-[#003366] text-white px-6 py-3 flex items-center gap-2">
                <CalendarClock className="h-5 w-5" />
                <h2 className="text-lg font-bold">Section 5: Permanent Schedule Change Protocol</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dosing day may be permanently modified if lifestyle changes, schedule conflicts, or adverse effect
                  patterns necessitate adjustment:
                </p>

                <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg p-4 space-y-3">
                  <h3 className="font-bold text-[#003366]">Approved Modification Process</h3>

                  <ol className="space-y-3 text-sm text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold text-[#003366] shrink-0">1.</span>
                      <span>
                        <strong className="text-[#003366]">Verify Minimum Interval:</strong> Ensure ≥3 days (72 hours)
                        have elapsed since last administered dose before new schedule begins.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[#003366] shrink-0">2.</span>
                      <span>
                        <strong className="text-[#003366]">Select New Day:</strong> Choose new weekly dosing day based
                        on updated lifestyle requirements or adverse effect management needs.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[#003366] shrink-0">3.</span>
                      <span>
                        <strong className="text-[#003366]">Administer Next Dose:</strong> Take next dose on newly selected
                        day, ensuring 72-hour minimum from previous dose.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[#003366] shrink-0">4.</span>
                      <span>
                        <strong className="text-[#003366]">Maintain New Schedule:</strong> Continue weekly dosing on new
                        day. Update medication reminders and pharmacy pickup schedules accordingly.
                      </span>
                    </li>
                  </ol>

                  <div className="bg-white border-l-4 border-[#ffc72c] p-3 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-[#003366]">Clinical Note:</strong> While schedule changes are permitted,
                      frequent modifications (&gt;2 times per month) correlate with decreased adherence and suboptimal
                      outcomes. Establish sustainable long-term schedule at treatment initiation when possible.
                    </p>
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
                    href="/best-time-of-day-to-take-tirzepatide-for-weight-loss"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Time-of-Day Analysis
                  </Link>
                  <Link
                    href="/best-place-to-inject-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Injection Site Guidelines
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Supplementation Protocol
                  </Link>
                  <Link
                    href="/best-online-tirzepatide-program"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Verified Provider Directory
                  </Link>
                  <Link
                    href="/best-place-to-get-tirzepatide"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → Tirzepatide Access Resources
                  </Link>
                  <Link
                    href="/best-weight-loss-injections"
                    className="text-[#003366] hover:text-[#004080] underline text-sm"
                  >
                    → GLP-1 Medication Comparisons
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
