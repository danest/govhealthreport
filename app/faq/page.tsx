import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SchemaScript } from "@/components/SchemaScript";
import { generateFAQSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  HelpCircle,
  AlertTriangle,
  Building,
  Pill,
  Stethoscope,
  Globe,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | GOV Health Report",
  description:
    "Frequently asked questions about weight loss treatments, GLP-1 medications, telehealth providers, and how GOV Health Report can help you compare options.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | GOV Health Report",
    description:
      "Frequently asked questions about weight loss treatments, GLP-1 medications, telehealth providers, and how GOV Health Report can help you compare options.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | GOV Health Report",
    description:
      "Frequently asked questions about weight loss treatments, GLP-1 medications, telehealth providers, and how GOV Health Report can help you compare options.",
  },
};

const faqs = [
  {
    category: "About GOV Health Report",
    icon: Building,
    questions: [
      {
        question: "What is GOV Health Report?",
        answer:
          "GOV Health Report is a comparison and review website that helps you research weight loss treatment providers. We compile information about pricing, medications offered, and program features to help you make informed decisions. We are NOT a medical provider, NOT a government agency, and do not prescribe medications or provide medical advice. The 'GOV' in our name refers to our focus on governance and transparency, not government affiliation.",
      },
      {
        question: "Is GOV Health Report a government website?",
        answer:
          "No. GOV Health Report is NOT an official government website. We are NOT affiliated with, endorsed by, or connected to any federal, state, or local government agency, including the FDA, HHS, CDC, or any other government entity. We are a privately operated review and comparison website.",
      },
      {
        question: "Is GOV Health Report a medical provider?",
        answer:
          "No. GOV Health Report is strictly a review and comparison website. We do not provide medical advice, prescribe medications, or replace consultations with healthcare professionals. Always consult with a qualified healthcare provider before starting any weight loss treatment.",
      },
      {
        question: "How does GOV Health Report make money?",
        answer:
          "We may earn affiliate commissions when you click on links to providers featured on our site and sign up for their services. This compensation may influence which providers we feature. For full details, please see our Disclosure page.",
      },
      {
        question: "How do you research and review providers?",
        answer:
          "We compile information from public sources including company websites, user reviews, articles, and videos. We also use AI tools to help research and organize information. Our community contributes ratings, reviews, and discussions. For full details on our methodology, see our Disclosure page.",
      },
      {
        question: "How do you determine provider rankings?",
        answer:
          "Our rankings are based on multiple factors including user reviews, program features, pricing, medication options, customer support, and overall value. However, rankings may be influenced by affiliate compensation. We recommend reading full provider reviews and doing your own research before making any decisions.",
      },
      {
        question: "Do you verify the accuracy of pricing information?",
        answer:
          "We attempt to keep pricing information current by regularly checking provider websites and promotional materials. However, pricing changes frequently and may vary based on individual circumstances, promotions, or location. Always verify current pricing directly with the provider before purchasing.",
      },
      {
        question: "Can I trust the reviews on your site?",
        answer:
          "We compile reviews from multiple sources and allow community members to share their experiences. While we moderate for spam and inappropriate content, we cannot verify every individual review. Use reviews as one data point among many when making your decision, and consider patterns across multiple reviews rather than relying on any single review.",
      },
    ],
  },
  {
    category: "Weight Loss Treatments",
    icon: Pill,
    questions: [
      {
        question: "What are GLP-1 medications?",
        answer:
          "GLP-1 (glucagon-like peptide-1) medications are a class of drugs originally developed for type 2 diabetes that have been found to promote significant weight loss. They work by mimicking a hormone that regulates appetite and blood sugar. Common GLP-1 medications include semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound).",
      },
      {
        question: "What is the difference between semaglutide and tirzepatide?",
        answer:
          "Semaglutide (found in Ozempic and Wegovy) is a GLP-1 receptor agonist. Tirzepatide (found in Mounjaro and Zepbound) is a dual GIP/GLP-1 receptor agonist, meaning it targets two hormones instead of one. Clinical trials have shown tirzepatide may produce greater weight loss on average, but individual results vary. Your healthcare provider can help determine which is right for you.",
      },
      {
        question: "What are compounded medications?",
        answer:
          "Compounded medications are custom-made by compounding pharmacies. Some telehealth providers offer compounded versions of semaglutide or tirzepatide, which may be less expensive than brand-name medications. However, compounded medications are not FDA-approved and may have different quality controls. Discuss the pros and cons with your healthcare provider.",
      },
      {
        question: "How much do weight loss treatments cost?",
        answer:
          "Costs vary significantly by provider and medication. Brand-name GLP-1 medications can cost $1,000+ per month without insurance. Telehealth programs with compounded medications typically range from $150-500 per month. Many providers offer subscription plans that include medication, consultations, and support. Check our provider reviews for current pricing information.",
      },
      {
        question: "Are weight loss medications safe?",
        answer:
          "GLP-1 medications have been extensively studied and are FDA-approved for weight management when prescribed appropriately. However, they can have side effects and are not suitable for everyone. Common side effects include nausea, vomiting, and digestive issues. Serious side effects are rare but possible. Only a qualified healthcare provider can determine if these medications are safe and appropriate for you.",
      },
      {
        question: "How much weight can I expect to lose on GLP-1 medications?",
        answer:
          "Clinical trials show that people taking semaglutide lose an average of 10-15% of their body weight, while those on tirzepatide may lose 15-22% on average. However, individual results vary significantly based on starting weight, dosage, diet, exercise, and other factors. Some people lose more, some less. Weight loss is gradual, typically occurring over 12-18 months.",
      },
      {
        question: "What's the difference between Ozempic and Wegovy?",
        answer:
          "Both contain the same active ingredient (semaglutide), but Ozempic is FDA-approved for type 2 diabetes while Wegovy is FDA-approved specifically for weight management. Wegovy is typically prescribed at higher doses than Ozempic. Some providers prescribe Ozempic off-label for weight loss, especially during Wegovy shortages.",
      },
      {
        question: "Do I need to diet and exercise on these medications?",
        answer:
          "While GLP-1 medications can promote weight loss on their own, the best results come when combined with healthy eating and regular physical activity. Most providers recommend following a reduced-calorie diet and incorporating exercise. The medications help by reducing appetite and cravings, making it easier to stick to healthier habits.",
      },
      {
        question: "What happens when I stop taking the medication?",
        answer:
          "Weight regain is common after stopping GLP-1 medications. Clinical studies show that many people regain a significant portion of the weight they lost within a year of stopping. These medications work best as part of a long-term weight management strategy. Some people may need to continue treatment indefinitely to maintain their weight loss.",
      },
      {
        question: "Who should not take GLP-1 medications?",
        answer:
          "GLP-1 medications are not suitable for people with a personal or family history of medullary thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2. They're also not recommended during pregnancy or breastfeeding. People with severe gastrointestinal disease, pancreatitis history, or certain other conditions may not be good candidates. A healthcare provider must evaluate your medical history.",
      },
    ],
  },
  {
    category: "Telehealth Providers",
    icon: Stethoscope,
    questions: [
      {
        question: "How do telehealth weight loss programs work?",
        answer:
          "Most telehealth weight loss programs follow a similar process: you complete an online health assessment, have a virtual consultation with a licensed healthcare provider, and if approved, receive medication delivered to your home. Many programs also include ongoing support, check-ins, and lifestyle coaching.",
      },
      {
        question: "Are telehealth prescriptions legitimate?",
        answer:
          "Yes, telehealth providers employ licensed healthcare professionals who can legally prescribe medications in the states where they practice. However, the quality and thoroughness of care can vary between providers. Look for programs that require comprehensive health assessments and ongoing monitoring.",
      },
      {
        question: "How do I choose the right provider?",
        answer:
          "Consider factors like: the medications offered, pricing and what's included, the consultation process, ongoing support and monitoring, user reviews and ratings, and whether they accept insurance. Our comparison pages can help you evaluate different options, but always do your own research and consult with your healthcare provider.",
      },
      {
        question: "Can I use insurance with telehealth weight loss programs?",
        answer:
          "Some telehealth providers accept insurance, while others are cash-pay only. Insurance coverage for weight loss medications varies widely by plan. Even if a provider doesn't accept insurance directly, you may be able to submit claims for reimbursement. Check with both the provider and your insurance company for specific coverage details.",
      },
      {
        question: "What should I expect during the online consultation?",
        answer:
          "Online consultations typically involve a video call or questionnaire-based assessment where you discuss your medical history, current health conditions, medications, weight loss goals, and lifestyle. The provider will determine if GLP-1 medications are appropriate for you. Good providers will ask detailed questions and may request additional information or tests.",
      },
      {
        question: "How long does it take to get started with a telehealth provider?",
        answer:
          "The timeline varies by provider. Some offer same-day or next-day consultations, while others may take several days to schedule. Once approved, medication shipping typically takes 3-7 business days. The entire process from initial assessment to receiving your first dose usually takes 1-2 weeks.",
      },
      {
        question: "What if I'm not approved for medication?",
        answer:
          "Not everyone is a good candidate for GLP-1 medications. If you're not approved, the provider should explain why and may suggest alternative weight loss approaches. Some providers offer refunds for consultation fees if you're not approved, while others do not. Check the provider's policy before signing up.",
      },
      {
        question: "Can I switch providers if I'm not satisfied?",
        answer:
          "Yes, you can typically switch providers, though you may need a new consultation and prescription. Some providers require subscription commitments, so check cancellation policies. If switching, ensure your new provider is aware of your current medication and dosage to maintain continuity of care.",
      },
    ],
  },
  {
    category: "Using Our Site",
    icon: Globe,
    questions: [
      {
        question: "How current is the information on your site?",
        answer:
          "We work to keep our information current, but pricing, medications offered, and program details change frequently. Always verify current pricing and offerings directly with providers before making decisions. If you notice outdated information, please let us know through our Contact page.",
      },
      {
        question: "Can I leave a review on GOV Health Report?",
        answer:
          "Yes! We encourage users to share their experiences with different providers. You can leave ratings and reviews on individual provider pages. Your feedback helps others make informed decisions and helps us improve our content.",
      },
      {
        question: "How do I contact GOV Health Report?",
        answer:
          "You can reach us through our Contact page. We welcome questions, feedback, suggestions, and corrections to our content. Please note that we cannot provide medical advice or help with issues related to specific providers—you'll need to contact them directly.",
      },
      {
        question: "Do you sell my personal information?",
        answer:
          "We do not sell personal information. When you click links to providers, they may collect information about your visit according to their own privacy policies. We may use cookies and analytics to improve our site. For full details, see our Privacy Policy.",
      },
      {
        question: "Why do some providers appear multiple times on your site?",
        answer:
          "Popular or highly-rated providers may appear in multiple comparisons, rankings, and articles because they're relevant to different searches and topics. This doesn't necessarily mean they paid for additional placement—though affiliate relationships may influence visibility.",
      },
      {
        question: "Can I suggest a provider to review?",
        answer:
          "Yes! We're always looking to expand our coverage. You can suggest providers through our Contact page. We evaluate suggestions based on the provider's legitimacy, user interest, and available information. We cannot guarantee we'll review every suggested provider.",
      },
    ],
  },
];

export default function FAQPage() {
  // Flatten all FAQ questions and answers for schema
  const allFAQs = faqs.flatMap((category) =>
    category.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    }))
  );

  const faqSchema = generateFAQSchema(allFAQs);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <SchemaScript schema={faqSchema} />
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
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Frequently Asked Questions
                </h1>
                <p className="text-sm text-gray-600">
                  Public Information & Consumer Guidance
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Important: NOT a Government Website
                  </h2>
                  <p className="leading-relaxed text-white/95">
                    GOV Health Report is <strong>NOT</strong> an official government website. We are NOT affiliated with,
                    endorsed by, or connected to any federal, state, or local government agency. The &quot;GOV&quot; in our name
                    refers to our focus on governance and transparency in health reporting, not government affiliation.
                    This is a privately operated review and comparison website.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Categories */}
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
                <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.category}</span>
                </div>
                <div className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b border-[#d1d9e0] last:border-b-0"
                      >
                        <AccordionTrigger className="text-left font-medium text-[#003366] hover:text-[#004080] py-4">
                          <div className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8eef4] text-xs font-bold text-[#003366]">
                              {faqIndex + 1}
                            </span>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed pl-9 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}

            {/* Medical Disclaimer Notice */}
            <div className="bg-[#f59e0b] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Medical Information Notice
                  </h2>
                  <p className="leading-relaxed text-white/95">
                    The information provided in these FAQs is for general informational purposes only and should not
                    be considered medical advice. Always consult with a qualified healthcare provider before starting
                    any weight loss treatment or medication. For complete medical disclaimer, visit our{" "}
                    <Link href="/disclaimer" className="underline font-medium hover:text-white">
                      Disclaimer page
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="bg-[#e8eef4] border border-[#003366] p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-[#003366] flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-bold text-[#003366] mb-1">
                      Still Have Questions?
                    </h2>
                    <p className="text-gray-700 text-sm">
                      Can&apos;t find what you&apos;re looking for? Contact us and we&apos;ll do our best to help.
                      Note: We cannot provide medical advice.
                    </p>
                  </div>
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
