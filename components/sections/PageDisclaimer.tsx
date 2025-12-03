import { AlertTriangle } from "lucide-react";

export function PageDisclaimer() {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Important Note</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Medications should not be purchased online without valid prescriptions
                from licensed healthcare providers
              </li>
              <li>
                • Efficacy claims must be based on clinical data and individual patient
                assessments
              </li>
              <li>
                • Prioritize safety, compliance, and transparency in healthcare services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
