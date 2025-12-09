import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, AlertTriangle, ExternalLink } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is GOV Health Report an official government website?",
    answer:
      "No. GOV Health Report is NOT an official government website and is NOT affiliated with any federal, state, or local government agency including the FDA, HHS, CDC, or any other government entity. The \"GOV\" in our name refers to our commitment to governance and transparency in health reporting, not government affiliation. We are a privately operated consumer resource website.",
  },
  {
    question: "What are GLP-1 receptor agonist medications?",
    answer:
      "GLP-1 (glucagon-like peptide-1) receptor agonists are a class of FDA-approved medications originally developed for type 2 diabetes management. These medications work by mimicking natural hormones that regulate blood sugar and appetite. They slow gastric emptying, reduce hunger signals to the brain, and help patients feel fuller longer. Common GLP-1 medications include semaglutide (Ozempic®, Wegovy®) and tirzepatide (Mounjaro®, Zepbound®).",
  },
  {
    question: "Who qualifies for weight loss injection treatments?",
    answer:
      "According to FDA guidelines and clinical protocols, GLP-1 treatments are typically prescribed for adults with: (1) BMI of 30 or higher (obesity), or (2) BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, hypertension, or high cholesterol. Eligibility requires evaluation by a licensed healthcare provider who will assess your medical history, current medications, and overall health status.",
  },
  {
    question: "What results can be expected from GLP-1 treatments?",
    answer:
      "Clinical trials have documented average weight loss of 10-26% of body weight over 12-18 months when combined with diet and exercise modifications. Individual results vary based on factors including starting weight, adherence to treatment protocols, dietary changes, physical activity levels, and metabolic response. Most patients report noticeable appetite reduction within the first few weeks, with significant weight loss typically observed between months 3-6.",
  },
  {
    question: "Are these treatments covered by health insurance?",
    answer:
      "Insurance coverage varies significantly by plan, provider, and indication. Many insurance plans cover GLP-1 medications when prescribed for type 2 diabetes but may not cover them for weight loss alone. Some plans require prior authorization or documented failure of other weight loss methods. We recommend contacting your insurance provider directly for coverage details. Many telehealth providers listed in our directory offer cash-pay options and payment plans.",
  },
  {
    question: "What FDA-approved medications are available for weight loss?",
    answer:
      "Currently FDA-approved GLP-1 medications for chronic weight management include: Wegovy® (semaglutide 2.4mg weekly injection), Zepbound® (tirzepatide weekly injection), and Saxenda® (liraglutide daily injection). Ozempic® and Mounjaro® are FDA-approved for type 2 diabetes but are sometimes prescribed off-label for weight loss. Compounded versions of semaglutide and tirzepatide are also available through some providers.",
  },
  {
    question: "How does GOV Health Report assess providers?",
    answer:
      "Our independent assessment methodology evaluates providers based on: (1) Regulatory compliance and licensing verification, (2) Physician credentials and board certifications, (3) Treatment protocols and medication sourcing, (4) Pricing transparency and billing practices, (5) Consumer reviews and satisfaction ratings, and (6) Customer support and accessibility. See our Disclosure page for complete methodology details.",
  },
  {
    question: "What are the common side effects of GLP-1 medications?",
    answer:
      "Common side effects reported in clinical trials include: nausea (especially during dose escalation), vomiting, diarrhea, constipation, abdominal pain, and decreased appetite. Most side effects are mild to moderate and typically decrease over time as the body adjusts. Serious but rare side effects may include pancreatitis, gallbladder problems, and kidney issues. Always consult with your healthcare provider about potential risks and side effects.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 bg-[#f5f7fa]">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Government-style Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
              <HelpCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600">
                Consumer Information & Guidance
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-[#ffc72c] mb-4" />
          <p className="text-gray-600 max-w-2xl">
            Find answers to common questions about weight loss treatments, provider assessments,
            and how to use this resource effectively.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 p-4 bg-[#a31621] text-white rounded-lg flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            <strong>Important:</strong> This website provides general information only and does not constitute
            medical advice. Always consult with a qualified healthcare provider before starting any treatment.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-3 text-sm font-medium">
            {faqs.length} Questions & Answers
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#d1d9e0] last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-medium text-[#003366] hover:text-[#004080] transition-colors py-5 px-4 hover:bg-[#f5f7fa]">
                  <span className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#e8eef4] text-[#003366] text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-5 px-4 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Links */}
        <div className="mt-8 p-4 bg-[#e8eef4] border border-[#003366] rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-700 text-sm">
              <strong className="text-[#003366]">Need more information?</strong> Visit our comprehensive FAQ page
              or review our disclosure documentation.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#003366] hover:text-[#004080] hover:underline"
              >
                Full FAQ Page
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="/disclosure"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#003366] hover:text-[#004080] hover:underline"
              >
                Disclosure
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
