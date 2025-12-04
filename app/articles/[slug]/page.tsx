import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// Article type definition
interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: React.ReactNode;
  relatedArticles: { slug: string; title: string }[];
  relatedGuides: { href: string; title: string }[];
}

// Article content components - this allows for rich formatting
const GallstonesArticleContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 receptor agonists like semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound)
      have revolutionized weight loss treatment. However, there&apos;s growing awareness about a potential
      connection between these medications and gallbladder issues, particularly gallstones. Here&apos;s
      what the research shows and what you can do to protect yourself.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Short Answer
        </h2>
        <p className="text-muted-foreground">
          GLP-1 medications themselves don&apos;t directly cause gallstones. However, the <strong>rapid
          weight loss</strong> they enable is a well-established risk factor for gallstone formation.
          Clinical trials show gallbladder-related events occur in 1.5-3% of patients on these medications,
          compared to about 0.5-1% on placebo.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Understanding the Connection
    </h2>

    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
      Why Does Rapid Weight Loss Cause Gallstones?
    </h3>
    <p className="text-muted-foreground mb-4">
      When you lose weight quickly, your liver secretes extra cholesterol into bile. At the same time,
      your gallbladder may not contract as frequently because you&apos;re eating less. This combination
      creates the perfect conditions for gallstones to form:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Increased cholesterol in bile</strong> — The liver releases more cholesterol during rapid fat breakdown</li>
      <li><strong>Reduced gallbladder contractions</strong> — Less frequent eating means the gallbladder doesn&apos;t empty as often</li>
      <li><strong>Bile stasis</strong> — Bile sitting in the gallbladder has more time to form crystals and stones</li>
      <li><strong>Changes in bile composition</strong> — Weight loss can alter the balance of bile salts and cholesterol</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mb-3">
      What Do the Clinical Trials Show?
    </h3>
    <p className="text-muted-foreground mb-4">
      In the STEP trials for semaglutide and SURMOUNT trials for tirzepatide, gallbladder-related
      adverse events were more common in treatment groups:
    </p>

    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Study</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Medication Group</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Placebo Group</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">STEP 1 (Semaglutide)</td>
            <td className="py-3 px-4 text-muted-foreground">2.6%</td>
            <td className="py-3 px-4 text-muted-foreground">1.2%</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">SURMOUNT-1 (Tirzepatide)</td>
            <td className="py-3 px-4 text-muted-foreground">1.7-2.0%</td>
            <td className="py-3 px-4 text-muted-foreground">0.4%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-muted-foreground mb-6">
      These numbers are relatively small, but they represent a real increase in risk compared to
      placebo. Importantly, the greater the weight loss, the higher the risk appears to be.
    </p>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Important Context
        </h3>
        <p className="text-muted-foreground">
          The gallstone risk isn&apos;t unique to GLP-1 medications. <strong>Any</strong> method that
          causes rapid weight loss—including bariatric surgery, very low-calorie diets, or other weight
          loss medications—carries similar risks. The benefit of GLP-1s is that weight loss is typically
          more gradual than surgical options.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Is at Higher Risk?
    </h2>
    <p className="text-muted-foreground mb-4">
      Certain factors increase your risk of developing gallstones while on GLP-1 medications:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Rapid weight loss</strong> — Losing more than 3 pounds per week significantly increases risk</li>
      <li><strong>Female sex</strong> — Women are 2-3 times more likely to develop gallstones</li>
      <li><strong>Age over 40</strong> — Risk increases with age</li>
      <li><strong>Previous history</strong> — If you&apos;ve had gallstones before, you&apos;re more likely to develop them again</li>
      <li><strong>Family history</strong> — Genetics play a role in gallstone formation</li>
      <li><strong>Native American or Hispanic heritage</strong> — These populations have higher baseline rates</li>
      <li><strong>High starting weight</strong> — More weight to lose means more cholesterol mobilization</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Signs and Symptoms to Watch For
    </h2>
    <p className="text-muted-foreground mb-4">
      Many gallstones cause no symptoms and are discovered incidentally. However, if a stone blocks
      a bile duct, you may experience:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Biliary colic</strong> — Sudden, intense pain in the upper right abdomen, often after eating fatty foods</li>
      <li><strong>Pain radiating to back or shoulder</strong> — The pain may spread between your shoulder blades</li>
      <li><strong>Nausea and vomiting</strong> — Often accompanies the pain</li>
      <li><strong>Fever and chills</strong> — May indicate infection (cholecystitis)</li>
      <li><strong>Jaundice</strong> — Yellowing of skin or eyes if a stone blocks the common bile duct</li>
    </ul>
    <p className="text-muted-foreground mb-6">
      <strong>Seek immediate medical attention</strong> if you experience severe abdominal pain,
      especially with fever, jaundice, or persistent vomiting.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How to Reduce Your Risk
    </h2>
    <p className="text-muted-foreground mb-4">
      While you can&apos;t eliminate the risk entirely, several strategies may help:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">1. Maintain Regular Meals</h3>
        <p className="text-sm text-muted-foreground">
          Even if you&apos;re not hungry, try to eat small, regular meals. This keeps your gallbladder
          contracting and prevents bile from sitting too long. Aim for at least 2-3 meals per day.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">2. Include Some Healthy Fats</h3>
        <p className="text-sm text-muted-foreground">
          Fat triggers gallbladder contraction. Include small amounts of healthy fats like olive oil,
          avocado, or nuts in your diet to help your gallbladder empty regularly.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">3. Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Adequate water intake helps maintain proper bile consistency. Aim for at least 64 ounces
          of water daily.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">4. Increase Fiber Intake</h3>
        <p className="text-sm text-muted-foreground">
          High-fiber foods help regulate bile acid metabolism. Focus on vegetables, fruits, and
          whole grains.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">5. Consider Ursodiol (Discuss with Doctor)</h3>
        <p className="text-sm text-muted-foreground">
          Some doctors prescribe ursodeoxycholic acid (Ursodiol) preventively for high-risk patients.
          This medication helps dissolve cholesterol in bile and is commonly used after bariatric surgery.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">6. Monitor Your Rate of Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          While GLP-1 medications can cause impressive weight loss, discuss with your provider if
          you&apos;re losing more than 3 pounds per week consistently. Dose adjustments may help
          moderate the pace.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Should This Stop You From Taking GLP-1 Medications?
    </h2>
    <p className="text-muted-foreground mb-4">
      For most people, no. The benefits of significant weight loss—including reduced risk of heart
      disease, diabetes, and many cancers—typically outweigh the modest increase in gallstone risk.
      Consider these points:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Obesity itself is a major risk factor for gallstones</li>
      <li>The absolute risk increase is relatively small (1-2%)</li>
      <li>Most gallstones are treatable if they become symptomatic</li>
      <li>Preventive measures can help reduce your risk</li>
      <li>The health benefits of weight loss are substantial and well-documented</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Talk to Your Provider
        </h3>
        <p className="text-muted-foreground">
          If you have a history of gallstones or gallbladder disease, discuss this with your healthcare
          provider before starting GLP-1 medications. They may recommend closer monitoring, preventive
          medication, or in some cases, prophylactic cholecystectomy (gallbladder removal) for very
          high-risk patients.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Bottom Line
    </h2>
    <p className="text-muted-foreground mb-4">
      GLP-1 agonists are associated with a modestly increased risk of gallstones, primarily due to
      the rapid weight loss they enable rather than a direct effect of the medication. This risk is:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Real but relatively small (1-3% in clinical trials)</li>
      <li>Similar to other rapid weight loss methods</li>
      <li>Potentially reducible with lifestyle modifications</li>
      <li>Generally outweighed by the benefits of weight loss for most patients</li>
    </ul>
    <p className="text-muted-foreground">
      Being aware of the risk allows you to take preventive steps and recognize warning signs early.
      Work with your healthcare provider to develop a plan that maximizes benefits while minimizing
      risks for your individual situation.
    </p>
  </>
);

// Who Should Not Take Ozempic article content
const WhoShouldNotTakeOzempicContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Ozempic (semaglutide) has become one of the most prescribed medications for type 2 diabetes
      and weight management. While it&apos;s effective for many people, it&apos;s not appropriate for everyone.
      Understanding who should avoid Ozempic—and why—is essential for your safety and treatment success.
    </p>

    <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Absolute Contraindications
        </h2>
        <p className="text-muted-foreground mb-4">
          The following conditions are <strong>absolute contraindications</strong>—meaning Ozempic
          should NOT be used under any circumstances:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong> — Ozempic
            carries a boxed warning about thyroid C-cell tumors</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong> — This genetic
            condition increases MTC risk</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Known hypersensitivity to semaglutide</strong> — Previous allergic reactions
            to the medication or its components</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Medical Conditions Requiring Caution
    </h2>
    <p className="text-muted-foreground mb-4">
      These conditions don&apos;t automatically disqualify you, but require careful consideration
      and close monitoring by your healthcare provider:
    </p>

    <div className="space-y-4 mb-8">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">History of Pancreatitis</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications have been associated with acute pancreatitis. If you&apos;ve had pancreatitis
          before, the risk may be elevated. Your doctor will weigh the benefits against the risks and
          may choose alternative treatments.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Diabetic Retinopathy</h3>
        <p className="text-sm text-muted-foreground">
          Rapid blood sugar improvements can sometimes worsen diabetic eye disease temporarily. If you
          have diabetic retinopathy, especially proliferative retinopathy, close monitoring is essential.
          This doesn&apos;t mean you can&apos;t take Ozempic, but you&apos;ll need more frequent eye exams.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Kidney Disease</h3>
        <p className="text-sm text-muted-foreground">
          While Ozempic doesn&apos;t require dose adjustment for mild to moderate kidney disease, severe
          kidney impairment requires caution. Dehydration from nausea and vomiting (common side effects)
          can worsen kidney function. Report any persistent GI symptoms to your doctor.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Gallbladder Disease</h3>
        <p className="text-sm text-muted-foreground">
          As covered in our <Link href="/articles/do-glp-1-agonists-cause-gallstones" className="text-primary hover:underline">gallstones article</Link>,
          rapid weight loss increases gallstone risk. If you have existing gallbladder problems or
          have had your gallbladder removed, discuss this with your provider.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Gastroparesis or Severe GI Disorders</h3>
        <p className="text-sm text-muted-foreground">
          Ozempic slows gastric emptying—that&apos;s part of how it works. But if you already have
          gastroparesis (delayed stomach emptying) or severe GI motility disorders, this effect
          can be problematic and worsen your symptoms.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      People Who Should Not Take Ozempic
    </h2>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Pregnant or Planning Pregnancy</h3>
        <p className="text-muted-foreground mb-4">
          Ozempic is <strong>Category C</strong> for pregnancy—meaning animal studies have shown
          adverse effects, and there aren&apos;t adequate human studies. Key points:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Stop Ozempic at least 2 months before planning to conceive</li>
          <li>The medication stays in your system for about 5 weeks after stopping</li>
          <li>Weight loss itself can increase fertility, so use reliable contraception</li>
          <li>If you become pregnant while on Ozempic, contact your doctor immediately</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Breastfeeding Mothers</h3>
        <p className="text-muted-foreground">
          It&apos;s unknown whether semaglutide passes into breast milk. Given the lack of safety data
          and the potential risks to nursing infants, Ozempic is generally not recommended while
          breastfeeding. Discuss alternative options with your healthcare provider.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Children and Adolescents</h3>
        <p className="text-muted-foreground">
          Ozempic is not approved for use in patients under 18. While Wegovy (the weight-loss
          branded version of semaglutide) has been approved for adolescents 12 and older, Ozempic
          specifically is indicated only for adults with type 2 diabetes.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Type 1 Diabetics</h3>
        <p className="text-muted-foreground mb-4">
          Ozempic is NOT approved for type 1 diabetes. Here&apos;s why:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>GLP-1 medications work by enhancing insulin secretion from the pancreas</li>
          <li>In type 1 diabetes, the pancreas produces little to no insulin</li>
          <li>Ozempic cannot replace the insulin that type 1 diabetics need</li>
          <li>Using it could lead to dangerous blood sugar fluctuations</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Drug Interactions to Consider
    </h2>
    <p className="text-muted-foreground mb-4">
      While Ozempic doesn&apos;t have many direct drug interactions, its effects on gastric emptying
      can impact how other medications are absorbed:
    </p>

    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Medication Type</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Concern</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Insulin or Sulfonylureas</td>
            <td className="py-3 px-4 text-muted-foreground">Increased hypoglycemia risk</td>
            <td className="py-3 px-4 text-muted-foreground">Dose reduction may be needed</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Oral Contraceptives</td>
            <td className="py-3 px-4 text-muted-foreground">Delayed absorption possible</td>
            <td className="py-3 px-4 text-muted-foreground">Consider backup contraception initially</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Levothyroxine</td>
            <td className="py-3 px-4 text-muted-foreground">Absorption may be affected</td>
            <td className="py-3 px-4 text-muted-foreground">Monitor thyroid levels</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Warfarin</td>
            <td className="py-3 px-4 text-muted-foreground">INR changes possible</td>
            <td className="py-3 px-4 text-muted-foreground">More frequent INR monitoring</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      People Who May Want to Reconsider
    </h2>
    <p className="text-muted-foreground mb-4">
      These aren&apos;t contraindications, but Ozempic may not be the best choice if:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">You Have a History of Eating Disorders</h3>
        <p className="text-sm text-muted-foreground">
          The strong appetite suppression from Ozempic may trigger or worsen disordered eating patterns.
          If you have a history of anorexia, bulimia, or binge eating disorder, discuss this thoroughly
          with both your prescriber and a mental health professional.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">You Have Significant Mental Health Concerns</h3>
        <p className="text-sm text-muted-foreground">
          Some patients report mood changes on GLP-1 medications. If you have depression, anxiety, or
          other mental health conditions, monitor your symptoms closely and report any changes to your
          healthcare provider.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">You&apos;re Only Looking for Quick Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          Ozempic is a long-term medication. Many people regain weight after stopping. If you&apos;re
          not prepared for potentially indefinite use or making lifestyle changes, the medication may
          not be the right fit.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">You Have Difficulty with Injections</h3>
        <p className="text-sm text-muted-foreground">
          Ozempic is a once-weekly injection. If you have severe needle phobia or conditions that make
          self-injection difficult, oral alternatives like Rybelsus (oral semaglutide) might be worth
          discussing.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Tell Your Doctor
    </h2>
    <p className="text-muted-foreground mb-4">
      Before starting Ozempic, make sure your healthcare provider knows about:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>All medications you take, including over-the-counter drugs and supplements</li>
      <li>Your complete medical history, especially thyroid, pancreas, or kidney problems</li>
      <li>Family history of thyroid cancer or MEN 2</li>
      <li>History of diabetic retinopathy</li>
      <li>Plans to become pregnant or current pregnancy/breastfeeding status</li>
      <li>History of depression, eating disorders, or other mental health conditions</li>
      <li>Previous reactions to GLP-1 medications</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Ozempic is a powerful medication that helps many people manage diabetes and lose weight.
          However, it&apos;s not right for everyone. The contraindications exist to protect you from
          potentially serious complications. Always have an honest, thorough conversation with your
          healthcare provider about your complete health history before starting any new medication.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Alternatives to Consider
    </h2>
    <p className="text-muted-foreground mb-4">
      If Ozempic isn&apos;t right for you, other options may include:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Tirzepatide (Mounjaro/Zepbound)</strong> — Different mechanism, but similar contraindications</li>
      <li><strong>Rybelsus</strong> — Oral semaglutide for those who prefer pills over injections</li>
      <li><strong>Metformin</strong> — First-line diabetes medication with weight-neutral or slight weight loss effects</li>
      <li><strong>SGLT2 inhibitors</strong> — Different class with weight loss benefits</li>
      <li><strong>Lifestyle modifications</strong> — Diet and exercise remain foundational</li>
    </ul>
    <p className="text-muted-foreground">
      Your healthcare provider can help you find the best option based on your individual health
      profile, goals, and any contraindications that apply to you.
    </p>
  </>
);

// Articles database
const articles: Record<string, Article> = {
  "who-should-not-take-ozempic": {
    slug: "who-should-not-take-ozempic",
    title: "Who Should Not Take Ozempic?",
    metaTitle: "Who Should Not Take Ozempic? Contraindications & Safety 2025",
    description:
      "Learn who should avoid Ozempic (semaglutide). Comprehensive guide to contraindications, medical conditions requiring caution, and drug interactions.",
    keywords: [
      "who should not take Ozempic",
      "Ozempic contraindications",
      "semaglutide side effects",
      "Ozempic safety",
      "can I take Ozempic",
      "Ozempic warnings",
      "Ozempic pregnancy",
    ],
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center",
    imageAlt: "Medical consultation about Ozempic safety and contraindications",
    date: "December 5, 2025",
    readTime: "10 min read",
    category: "Safety",
    author: "Rx Saver Hub Team",
    content: <WhoShouldNotTakeOzempicContent />,
    relatedArticles: [
      { slug: "do-glp-1-agonists-cause-gallstones", title: "Do GLP-1 Agonists Cause Gallstones?" },
    ],
    relatedGuides: [
      { href: "/best-online-semaglutide-program", title: "Best Online Semaglutide Programs" },
      { href: "/best-place-to-inject-semaglutide", title: "Best Place to Inject Semaglutide" },
      { href: "/best-time-of-day-to-take-semaglutide-for-weight-loss", title: "Best Time to Take Semaglutide" },
      { href: "/best-vitamins-to-take-while-on-semaglutide", title: "Best Vitamins on Semaglutide" },
    ],
  },
  "do-glp-1-agonists-cause-gallstones": {
    slug: "do-glp-1-agonists-cause-gallstones",
    title: "Do GLP-1 Agonists Cause Gallstones?",
    metaTitle: "Do GLP-1 Agonists Cause Gallstones? Risk & Prevention 2025",
    description:
      "Learn about the connection between GLP-1 medications like semaglutide and tirzepatide and gallstone risk. Understand the science and how to reduce your risk.",
    keywords: [
      "GLP-1 gallstones",
      "semaglutide gallbladder",
      "tirzepatide gallstones",
      "Ozempic gallstones",
      "Wegovy gallbladder",
      "Mounjaro gallstones",
      "weight loss gallstones",
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    imageAlt: "Medical research on GLP-1 medications and gallstones",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
    author: "Rx Saver Hub Team",
    content: <GallstonesArticleContent />,
    relatedArticles: [
      { slug: "who-should-not-take-ozempic", title: "Who Should Not Take Ozempic?" },
    ],
    relatedGuides: [
      { href: "/best-online-semaglutide-program", title: "Best Online Semaglutide Programs" },
      { href: "/best-online-tirzepatide-program", title: "Best Online Tirzepatide Programs" },
      { href: "/best-vitamins-to-take-while-on-semaglutide", title: "Best Vitamins on Semaglutide" },
      { href: "/best-vitamins-to-take-while-on-tirzepatide", title: "Best Vitamins on Tirzepatide" },
    ],
  },
};

// Generate static params for all articles
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Article Not Found | Rx Saver Hub",
    };
  }

  return {
    title: `${article.metaTitle} | Rx Saver Hub`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            <div className="mb-4">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <div className="relative">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <article className="prose prose-lg max-w-none">
              {article.content}
            </article>
          </div>
        </section>

        {/* Top 3 Providers */}
        <Top3Providers
          title="Get Started with GLP-1 Treatment"
          subtitle="These top-rated providers offer semaglutide and tirzepatide with ongoing medical support."
        />

        {/* Related Content */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Related Guides
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {article.relatedGuides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="text-primary hover:underline"
                    >
                      → {guide.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medical Disclaimer */}
            <Card className="mt-6 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Medical Disclaimer:</strong> This article
                  is for educational purposes only and is not intended as medical advice. Always
                  consult with a qualified healthcare provider before starting any weight loss
                  treatment or if you experience symptoms of gallbladder problems. Individual
                  results and risks may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
