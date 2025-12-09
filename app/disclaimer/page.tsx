import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  AlertTriangle,
  Stethoscope,
  Brain,
  FileText,
  Users,
  ArrowLeft,
  XCircle,
  AlertCircle,
  Heart,
  Shield,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer | GOV Health Report",
  description:
    "Important medical disclaimer for GOV Health Report. We are NOT a medical website or government entity and do not provide medical advice. Please consult healthcare professionals.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Medical Disclaimer
                </h1>
                <p className="text-sm text-gray-600">
                  Official Notice • Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">

            {/* Critical Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">
                    IMPORTANT: NOT A GOVERNMENT WEBSITE
                  </h2>
                  <p className="leading-relaxed mb-3">
                    GOV Health Report is <strong>NOT</strong> an official government website. We are NOT affiliated with,
                    endorsed by, or connected to any federal, state, or local government agency, including
                    the FDA, HHS, CDC, or any other government entity.
                  </p>
                  <p className="text-white/90 text-sm">
                    The "GOV" in our name refers to our focus on governance and transparency in health reporting,
                    not government affiliation. This is a privately operated website.
                  </p>
                </div>
              </div>
            </div>

            {/* Critical Medical Warning */}
            <div className="bg-[#a31621] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">
                    CRITICAL WARNING: THIS IS NOT A MEDICAL WEBSITE
                  </h2>
                  <p className="leading-relaxed mb-3 font-medium">
                    GOV Health Report does NOT provide medical advice, diagnosis, or treatment recommendations.
                  </p>
                  <p className="mb-3"><strong>We are NOT:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-white/95">
                    <li>Doctors, nurses, or healthcare professionals</li>
                    <li>Licensed medical practitioners</li>
                    <li>Pharmacists or pharmacy technicians</li>
                    <li>A healthcare provider or medical facility</li>
                    <li>Qualified to give medical advice of any kind</li>
                    <li>A government agency or government-affiliated organization</li>
                  </ul>
                  <p className="mt-4 font-bold text-[#ffc72c]">
                    DO NOT make medical decisions based on information from this website.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Are */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span className="font-medium">Section 1: What GOV Health Report Actually Is</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">GOV Health Report is:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>A <strong>review and comparison website</strong> that discusses weight loss treatments</li>
                  <li>An <strong>affiliate marketing website</strong> that earns money when you click links and make purchases</li>
                  <li>A <strong>content aggregator</strong> that compiles information from various sources</li>
                  <li>A website that uses <strong>AI tools</strong> to research and create content</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Our purpose is to help you discover and compare options—<strong>not</strong> to tell you what
                  medical treatments to pursue.
                </p>
              </div>
            </div>

            {/* Consult Professionals */}
            <div className="bg-white border-2 border-[#2e7d32] rounded-lg overflow-hidden">
              <div className="bg-[#2e7d32] text-white px-4 py-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                <span className="font-medium">Section 2: You MUST Consult Healthcare Professionals</span>
              </div>
              <div className="p-6">
                <p className="font-semibold text-[#2e7d32] mb-4">
                  Before starting ANY weight loss treatment or medication, you MUST consult with qualified
                  healthcare professionals, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Your primary care physician (PCP):</strong> They know your medical history
                    and can evaluate if treatments are appropriate for you
                  </li>
                  <li>
                    <strong>Specialists:</strong> Endocrinologists, bariatric specialists, or other
                    relevant specialists as needed
                  </li>
                  <li>
                    <strong>Pharmacists:</strong> They can explain medication interactions and side effects
                  </li>
                  <li>
                    <strong>Registered dietitians:</strong> For nutrition advice and meal planning
                  </li>
                  <li>
                    <strong>Mental health professionals:</strong> Weight loss journeys can have psychological
                    impacts
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-[#e8f5e9] rounded-lg">
                  <p className="text-[#2e7d32] font-medium">
                    <strong>Only a licensed healthcare provider</strong> who has examined you, reviewed your
                    medical history, and understands your individual circumstances can provide appropriate
                    medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sources Warning */}
            <div className="bg-white border-2 border-[#f59e0b] rounded-lg overflow-hidden">
              <div className="bg-[#f59e0b] text-white px-4 py-3 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span className="font-medium">Section 3: Our Information May Be Wrong</span>
              </div>
              <div className="p-6">
                <div className="p-4 bg-[#fef3c7] rounded-lg mb-4">
                  <p className="text-[#92400e] font-medium">
                    We use AI tools (Claude, ChatGPT, Perplexity) and compile information from videos,
                    articles, and ads. This information may be inaccurate, outdated, incomplete, or
                    entirely fabricated by AI "hallucinations."
                  </p>
                </div>
                <p className="text-gray-700 mb-3">Our information sources include:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>YouTube videos and online video content</li>
                  <li>Television and online advertisements</li>
                  <li>Articles, blogs, and marketing materials</li>
                  <li>AI-generated summaries and research</li>
                  <li>Social media posts and discussions</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>None of these sources are verified medical information.</strong> We do not
                  fact-check medical claims against peer-reviewed research or official medical sources.
                </p>
              </div>
            </div>

            {/* What You Should Do */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Section 4: What You Should Do Instead</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4"><strong>If you're considering weight loss treatments:</strong></p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Schedule an appointment with your doctor.</strong> Discuss your weight loss
                    goals and ask if prescription treatments are appropriate for your situation.
                  </li>
                  <li>
                    <strong>Get a comprehensive health evaluation.</strong> Weight loss medications may
                    not be suitable for everyone and can have serious side effects.
                  </li>
                  <li>
                    <strong>Ask about all your options.</strong> Medications are just one tool—diet,
                    exercise, behavioral changes, and other approaches may be more appropriate.
                  </li>
                  <li>
                    <strong>Research from authoritative sources:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>FDA (fda.gov) for medication information</li>
                      <li>NIH (nih.gov) for research-backed health information</li>
                      <li>CDC (cdc.gov) for health guidelines</li>
                      <li>Your healthcare provider's recommendations</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Understand the risks.</strong> All medications have potential side effects
                    and risks. Only a doctor can help you weigh these against potential benefits.
                  </li>
                </ol>
              </div>
            </div>

            {/* Health Risks */}
            <div className="bg-white border-2 border-[#f59e0b] rounded-lg overflow-hidden">
              <div className="bg-[#f59e0b] text-white px-4 py-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Section 5: Important Health Considerations</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Weight loss medications and treatments can have serious health implications:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>They may interact with other medications you're taking</li>
                  <li>They may be contraindicated for certain medical conditions</li>
                  <li>They can have significant side effects</li>
                  <li>Results vary significantly between individuals</li>
                  <li>Long-term effects may not be fully understood</li>
                  <li>They are not a substitute for lifestyle changes</li>
                </ul>
                <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg">
                  <p className="font-semibold text-[#92400e]">
                    If you experience any adverse symptoms after starting any treatment, contact
                    your healthcare provider or seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Individual Results */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Section 6: Individual Results Vary</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Any results, testimonials, or outcomes mentioned on this website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Are not typical and cannot be guaranteed</li>
                  <li>May not apply to your individual situation</li>
                  <li>May be influenced by many factors we cannot account for</li>
                  <li>Should not be used as a basis for medical decisions</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Everyone's body, health history, and circumstances are different. What works for one
                  person may not work—or may even be harmful—for another.
                </p>
              </div>
            </div>

            {/* Financial Interests */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Section 7: We Have Financial Interests</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  As disclosed on our{" "}
                  <Link href="/disclosure" className="text-[#003366] hover:underline font-medium">
                    Disclosure page
                  </Link>, we earn money when you click on links and make purchases through our website.
                  This financial interest may influence our content and recommendations.
                </p>
                <div className="p-4 bg-[#e8eef4] rounded-lg">
                  <p className="text-[#003366] font-medium">
                    <strong>Our financial interests should never influence your medical decisions.</strong>
                    Always prioritize advice from healthcare professionals over anything you read on
                    affiliate websites like ours.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#003366] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#ffc72c]" />
                Summary
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/95">
                <li><strong>We are NOT medical professionals</strong> and cannot provide medical advice</li>
                <li><strong>We are NOT a government website</strong> or affiliated with any government agency</li>
                <li><strong>Our information may be inaccurate</strong> as it comes from AI and unverified sources</li>
                <li><strong>You MUST consult healthcare professionals</strong> before any medical decisions</li>
                <li><strong>We have financial incentives</strong> that may influence our content</li>
                <li><strong>Individual results vary</strong> and outcomes cannot be guaranteed</li>
                <li><strong>Use authoritative sources</strong> (FDA, NIH, your doctor) for medical information</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-[#e8eef4] border border-[#003366] p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-[#003366] mb-1">
                    Questions About This Disclaimer
                  </h2>
                  <p className="text-gray-700 text-sm">
                    Contact us if you have questions. Note: We cannot answer medical questions.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded font-medium hover:bg-[#004080] transition-colors"
                >
                  Contact Us
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
