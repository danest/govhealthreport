import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Compare",
    description:
      "Eliminates the need to research dozens of brands independently. We bring all the top providers together in one place.",
  },
  {
    icon: FileText,
    title: "Review",
    description:
      "Detailed analysis to support informed decisions. Get comprehensive breakdowns of each provider's offerings.",
  },
  {
    icon: CheckCircle,
    title: "Decide",
    description:
      "Save time and money through systematic evaluation. Make confident choices backed by real data.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We Make Your Decisions{" "}
            <span className="text-primary">Easier</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Finding the right weight loss treatment shouldn't be overwhelming.
            We've done the research so you don't have to.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="relative overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
