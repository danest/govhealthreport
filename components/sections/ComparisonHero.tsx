import { Badge } from "@/components/ui/badge";
import { Zap, Truck, Tag, FileText, Calendar } from "lucide-react";

const features = [
  { icon: Zap, label: "Fast Approval" },
  { icon: Truck, label: "Free Shipping" },
  { icon: Tag, label: "Exclusive Coupons" },
  { icon: FileText, label: "Online Prescription" },
];

export function ComparisonHero() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100/30 py-10 md:py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-warm-200/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          {/* Updated Date */}
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Calendar className="h-4 w-4" />
            <span>Updated: {formattedDate}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Best <span className="text-primary">Weight Loss</span> Injections
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl mb-10">
            Find the best weight loss solution for your needs by comparing leading
            brands offering Semaglutide and Tirzepatide injections, complete with
            tailored programs, affordable options, and professional medical support
            every step of the way.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <Badge
                key={feature.label}
                variant="secondary"
                className="flex items-center gap-2 px-4 py-2 text-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                {feature.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
