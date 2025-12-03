import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Apple,
  Activity,
  Heart,
  AlertCircle,
  Pill,
  Stethoscope,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const benefits = [
  {
    icon: Apple,
    title: "Reduced Appetite",
    description:
      "Medications target hunger-related hormones, helping you feel satisfied with smaller portions.",
  },
  {
    icon: Activity,
    title: "Metabolic Support",
    description:
      "Treatments influence glucose metabolism and fat storage, supporting your body's natural processes.",
  },
  {
    icon: Heart,
    title: "Lifestyle Support",
    description:
      "Medications complement dietary and physical activity efforts for comprehensive results.",
  },
];

const sideEffects = [
  "Nausea",
  "Headaches",
  "Gastrointestinal discomfort",
  "Injection site reactions",
  "Dizziness",
];

const medications = [
  {
    name: "GLP-1 Receptor Agonists",
    subtitle: "Semaglutide, Liraglutide",
    description:
      "Wegovy® and Saxenda® regulate appetite and food intake for individuals meeting specific BMI criteria or with weight-related comorbidities, combined with lifestyle interventions.",
  },
  {
    name: "Tirzepatide",
    subtitle: "Mounjaro®",
    description:
      "FDA-approved for type 2 diabetes; being studied for weight loss. Off-label weight loss use requires healthcare provider discussion.",
  },
  {
    name: "Combination Approaches",
    subtitle: "Zepbound™",
    description:
      "Combines mechanisms targeting multiple hormonal pathways for appetite and metabolism. Requires prescription and professional monitoring.",
  },
  {
    name: "Ozempic®",
    subtitle: "Semaglutide",
    description:
      "Approved for type 2 diabetes blood sugar control. Weight loss is secondary; not specifically approved for weight management. Off-label use requires licensed provider guidance.",
  },
];

export function EducationalContent() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Your Journey Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Your Journey to <span className="text-primary">Better Health</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Weight management involves FDA-approved medications as part of comprehensive,
            medically supervised plans. These treatments complement diet and exercise
            rather than replacing them, helping you achieve sustainable results.
          </p>
        </div>

        {/* Understanding Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Understanding Prescription Weight Loss Medications
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Weight management is not solely about appearance — it addresses significant
            health risks like diabetes, hypertension, and cardiovascular disease.
            Medications target biological factors including appetite regulation and
            metabolic rate. Note: all medications require qualified healthcare provider
            supervision.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Potential Benefits
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Considerations */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Important Considerations
            </h3>
          </div>
          <Card className="border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Common side effects may include:
              </p>
              <div className="flex flex-wrap gap-3">
                {sideEffects.map((effect) => (
                  <div
                    key={effect}
                    className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>{effect}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Always discuss risks and benefits with your healthcare provider before
                starting any medication.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Common Prescription Options */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Pill className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Common Prescription Options
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {medications.map((med) => (
              <Card key={med.name} className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{med.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{med.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{med.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Taking the Next Steps
            </h3>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Consult licensed healthcare providers to determine if medication is
            appropriate for you, discuss benefits and risks, and create a tailored
            treatment plan that fits your lifestyle and health goals.
          </p>
        </div>
      </div>
    </section>
  );
}
