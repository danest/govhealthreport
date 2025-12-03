import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do Weight Loss Injections like Ozempic® Work?",
    answer:
      "Weight loss injections utilize semaglutide, a GLP-1 receptor agonist that helps regulate blood sugar levels and can also reduce appetite by affecting areas of the brain that control hunger. By reducing cravings and slowing gastric emptying, these treatments help users consume less and feel fuller longer, supporting weight loss when paired with diet and exercise.",
  },
  {
    question: "Who is Eligible for Weight Loss Injections?",
    answer:
      "These treatments suit individuals with a BMI of 27 or higher (overweight) or BMI of 30 or higher (obese) who haven't lost weight through lifestyle changes alone. They may also benefit those with weight-related conditions like type 2 diabetes, hypertension, or high cholesterol. Eligibility requires individual medical assessment by a healthcare provider.",
  },
  {
    question: "How Quickly can I Expect Results?",
    answer:
      "Results typically appear within a few weeks to a few months, with noticeable appetite reduction and moderate weight loss early on. Full results typically take around 3 to 6 months, varying by individual factors including diet, exercise, and metabolism. Optimal outcomes require following treatment protocols while maintaining healthy habits.",
  },
  {
    question: "Are Weight Loss Injections Covered by Insurance?",
    answer:
      "Insurance typically doesn't cover weight loss treatments for those who are simply looking to lose weight. Coverage may apply for patients with specific medical conditions like type 2 diabetes or obesity-related health problems. Coverage varies by plan, so checking with your provider is essential; some clinics offer financing alternatives.",
  },
  {
    question: "What are the Most Popular Weight Loss Injection Brands?",
    answer:
      "Popular brands include Ozempic® (diabetes management adapted for weight loss), Wegovy® (higher-dose FDA-approved for weight loss), Mounjaro™ (similar appetite-control mechanism), and Saxenda® (GLP-1 receptor agonist). Each offers different benefits and dosing schedules requiring provider consultation for appropriate selection.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get answers to the most common questions about weight loss treatments.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/50"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a
              href="/faq"
              className="text-primary font-medium hover:underline"
            >
              Visit our full FAQ page
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
