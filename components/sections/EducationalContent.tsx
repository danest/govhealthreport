import {
  Apple,
  Activity,
  Heart,
  AlertCircle,
  Pill,
  Stethoscope,
  CheckCircle,
  AlertTriangle,
  BookOpen,
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
    <section className="py-10 bg-[#f5f7fa]">
      <div className="container mx-auto max-w-6xl px-4 space-y-6">
        {/* Your Journey Section */}
        <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span className="font-medium">Section 1: Your Journey to Better Health</span>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Weight management involves FDA-approved medications as part of comprehensive,
              medically supervised plans. These treatments complement diet and exercise
              rather than replacing them, helping you achieve sustainable results.
            </p>
          </div>
        </div>

        {/* Understanding Section */}
        <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
            <Stethoscope className="h-5 w-5" />
            <span className="font-medium">Section 2: Understanding Prescription Weight Loss Medications</span>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Weight management is not solely about appearance — it addresses significant
              health risks like diabetes, hypertension, and cardiovascular disease.
              Medications target biological factors including appetite regulation and
              metabolic rate. Note: all medications require qualified healthcare provider
              supervision.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Section 3: Potential Benefits</span>
          </div>
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="bg-[#e8eef4] rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs text-[#003366] font-medium">Benefit #{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#003366] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-[#f59e0b] text-white rounded-lg overflow-hidden">
          <div className="px-4 py-3 flex items-center gap-2 border-b border-white/20">
            <AlertCircle className="h-5 w-5" />
            <span className="font-medium">Section 4: Important Considerations</span>
          </div>
          <div className="p-6">
            <p className="mb-4">
              Common side effects may include:
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {sideEffects.map((effect) => (
                <div
                  key={effect}
                  className="flex items-center gap-2 rounded bg-white/20 px-4 py-2 text-sm"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <span>{effect}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/90">
              Always discuss risks and benefits with your healthcare provider before
              starting any medication.
            </p>
          </div>
        </div>

        {/* Common Prescription Options */}
        <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
            <Pill className="h-5 w-5" />
            <span className="font-medium">Section 5: Common Prescription Options</span>
          </div>
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {medications.map((med, index) => (
                <div key={med.name} className="border-2 border-[#003366]/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#003366] text-white text-xs px-2 py-1 rounded">
                      Option {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#003366]">{med.name}</h4>
                  <p className="text-sm text-[#ffc72c] font-medium mb-2">{med.subtitle}</p>
                  <p className="text-sm text-gray-600">{med.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-[#e8eef4] border border-[#003366] rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#003366]">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">
                Taking the Next Steps
              </h3>
              <p className="text-gray-700">
                Consult licensed healthcare providers to determine if medication is
                appropriate for you, discuss benefits and risks, and create a tailored
                treatment plan that fits your lifestyle and health goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
