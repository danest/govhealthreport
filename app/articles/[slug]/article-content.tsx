"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Ideal Diet While Taking GLP-1 Weight Loss Medications
export const IdealDietGLP1Content = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications like semaglutide and tirzepatide work best when combined with the right
      dietary approach. While these medications reduce appetite, what you eat still matters significantly
      for your results, energy levels, and overall health. Here&apos;s how to optimize your diet while
      on GLP-1 treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Principles
        </h2>
        <p className="text-muted-foreground">
          Since you&apos;ll be eating less food overall, every bite needs to count. Focus on
          <strong> protein first</strong>, then vegetables, then complex carbohydrates. This approach
          ensures you get adequate nutrition while maximizing weight loss and preserving muscle mass.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Prioritize Protein
    </h2>
    <p className="text-muted-foreground mb-4">
      Protein is the most important macronutrient when taking GLP-1 medications. Without adequate
      protein, you risk losing muscle mass along with fat. Aim for:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>60-100 grams of protein daily</strong> — More if you&apos;re active or have higher body weight</li>
      <li><strong>Protein at every meal</strong> — Start each meal with your protein source</li>
      <li><strong>20-30 grams per meal</strong> — This is optimal for muscle protein synthesis</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mb-3">
      Best Protein Sources
    </h3>
    <div className="grid gap-4 md:grid-cols-2 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h4 className="font-semibold text-foreground mb-2">Lean Proteins</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Chicken breast</li>
          <li>• Turkey</li>
          <li>• Fish (salmon, tuna, cod)</li>
          <li>• Shrimp and shellfish</li>
          <li>• Egg whites</li>
          <li>• Greek yogurt</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h4 className="font-semibold text-foreground mb-2">Plant Proteins</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Tofu and tempeh</li>
          <li>• Legumes (lentils, chickpeas)</li>
          <li>• Edamame</li>
          <li>• Quinoa</li>
          <li>• Protein powder supplements</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Fill Up on Vegetables
    </h2>
    <p className="text-muted-foreground mb-4">
      Non-starchy vegetables provide essential vitamins, minerals, and fiber with minimal calories.
      They also help manage the constipation that&apos;s common with GLP-1 medications.
    </p>
    <div className="p-4 bg-muted/30 rounded-lg mb-6">
      <h4 className="font-semibold text-foreground mb-2">Best Vegetables for GLP-1 Users</h4>
      <p className="text-sm text-muted-foreground">
        Leafy greens (spinach, kale, arugula), broccoli, cauliflower, zucchini, bell peppers,
        asparagus, green beans, cucumber, tomatoes, and mushrooms. Aim for at least 2-3 servings
        per day.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Choose Complex Carbohydrates
    </h2>
    <p className="text-muted-foreground mb-4">
      You don&apos;t need to eliminate carbs, but choose wisely. Complex carbohydrates provide
      sustained energy and fiber:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Whole grains</strong> — Brown rice, quinoa, oats, whole wheat bread</li>
      <li><strong>Starchy vegetables</strong> — Sweet potatoes, butternut squash</li>
      <li><strong>Legumes</strong> — Beans, lentils, chickpeas (also count as protein)</li>
      <li><strong>Fruits</strong> — Berries, apples, citrus fruits</li>
    </ul>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Foods to Limit or Avoid
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>• <strong>Fried and greasy foods</strong> — Often worsen nausea and digestive issues</li>
          <li>• <strong>High-sugar foods</strong> — Provide empty calories, spike blood sugar</li>
          <li>• <strong>Processed foods</strong> — Low nutrient density, high in sodium</li>
          <li>• <strong>Carbonated beverages</strong> — Can increase bloating and discomfort</li>
          <li>• <strong>Large portions</strong> — Your stomach capacity is reduced; eat smaller meals</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Eating Strategies for Success
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">1. Eat Slowly and Mindfully</h3>
        <p className="text-sm text-muted-foreground">
          Take at least 20-30 minutes per meal. Chew thoroughly. This reduces nausea and helps
          you recognize fullness cues before overeating.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">2. Don&apos;t Skip Meals</h3>
        <p className="text-sm text-muted-foreground">
          Even if you&apos;re not hungry, try to eat something nutritious. Skipping meals can lead
          to muscle loss and nutrient deficiencies over time.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">3. Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Drink at least 64 ounces of water daily. Avoid drinking large amounts with meals—sip
          between meals instead to save room for food.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">4. Protein First, Always</h3>
        <p className="text-sm text-muted-foreground">
          With reduced appetite, you may not finish your meal. Eating protein first ensures you
          get adequate amounts even if you can&apos;t finish everything.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Sample Day of Eating
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h4 className="font-semibold text-foreground">Breakfast</h4>
        <p className="text-sm text-muted-foreground">
          Greek yogurt (20g protein) with berries and a sprinkle of nuts, or 2-3 scrambled eggs
          with vegetables
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h4 className="font-semibold text-foreground">Lunch</h4>
        <p className="text-sm text-muted-foreground">
          Grilled chicken salad with mixed greens, vegetables, avocado, and olive oil dressing
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h4 className="font-semibold text-foreground">Dinner</h4>
        <p className="text-sm text-muted-foreground">
          4-6 oz salmon or lean protein with roasted vegetables and a small portion of quinoa
          or sweet potato
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h4 className="font-semibold text-foreground">Snacks (if hungry)</h4>
        <p className="text-sm text-muted-foreground">
          Protein shake, cottage cheese, hard-boiled eggs, turkey roll-ups, or a small handful
          of nuts
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications reduce your appetite, but they don&apos;t automatically make you eat
          healthier. The foods you choose during treatment directly impact your energy, muscle
          preservation, and long-term success. Focus on protein, vegetables, and whole foods—and
          consider working with a registered dietitian for personalized guidance.
        </p>
      </CardContent>
    </Card>
  </>
);

// Do Weight Loss Pills and Injections Work?
export const DoWeightLossPillsWorkContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      With obesity rates climbing and countless products claiming to help you lose weight, it&apos;s
      natural to wonder: do weight loss medications actually work? The answer is nuanced—some
      treatments are backed by robust clinical evidence, while others are essentially useless.
      Here&apos;s what the science really shows.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Short Answer
        </h2>
        <p className="text-muted-foreground">
          <strong>Yes, FDA-approved weight loss medications work</strong>—but with important caveats.
          Modern GLP-1 medications like semaglutide and tirzepatide produce average weight loss of
          15-25% of body weight, which is unprecedented for non-surgical treatments. However, they
          require ongoing use, can have side effects, and work best with lifestyle changes.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Categories of Weight Loss Products
    </h2>
    <p className="text-muted-foreground mb-4">
      Not all weight loss products are created equal. Here&apos;s how they break down:
    </p>

    <div className="space-y-4 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">FDA-Approved Prescription Medications</h3>
        <p className="text-sm text-muted-foreground mb-2">
          These have undergone rigorous clinical trials and demonstrated significant, reproducible
          weight loss:
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Semaglutide (Wegovy)</strong> — ~15% average weight loss</li>
          <li>• <strong>Tirzepatide (Zepbound)</strong> — ~20-25% average weight loss</li>
          <li>• <strong>Phentermine-topiramate (Qsymia)</strong> — ~10% average weight loss</li>
          <li>• <strong>Naltrexone-bupropion (Contrave)</strong> — ~5-8% average weight loss</li>
          <li>• <strong>Orlistat (Xenical/Alli)</strong> — ~3-5% average weight loss</li>
        </ul>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Over-the-Counter Supplements</h3>
        <p className="text-sm text-muted-foreground">
          Most OTC weight loss supplements have little to no evidence supporting their effectiveness.
          Products containing caffeine, green tea extract, or fiber may provide modest effects, but
          nothing comparable to prescription medications. Many make claims that aren&apos;t supported
          by research.
        </p>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">&quot;Miracle&quot; Products and Scams</h3>
        <p className="text-sm text-muted-foreground">
          Products promising dramatic weight loss without diet or exercise, &quot;fat-burning&quot; wraps,
          detox teas, and similar products are almost universally ineffective. Some may contain
          dangerous undisclosed ingredients. If it sounds too good to be true, it is.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How GLP-1 Medications Work
    </h2>
    <p className="text-muted-foreground mb-4">
      GLP-1 receptor agonists (semaglutide, tirzepatide) represent a breakthrough in obesity treatment.
      They work through multiple mechanisms:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Appetite suppression</strong> — They signal the brain to reduce hunger</li>
      <li><strong>Delayed gastric emptying</strong> — Food stays in the stomach longer, increasing fullness</li>
      <li><strong>Reduced food reward</strong> — Many users report less interest in eating</li>
      <li><strong>Blood sugar regulation</strong> — Originally developed for diabetes</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What the Clinical Trials Show
    </h2>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Medication</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Trial</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Avg Weight Loss</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Semaglutide 2.4mg</td>
            <td className="py-3 px-4 text-muted-foreground">STEP 1</td>
            <td className="py-3 px-4 text-muted-foreground">14.9%</td>
            <td className="py-3 px-4 text-muted-foreground">68 weeks</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Tirzepatide 15mg</td>
            <td className="py-3 px-4 text-muted-foreground">SURMOUNT-1</td>
            <td className="py-3 px-4 text-muted-foreground">22.5%</td>
            <td className="py-3 px-4 text-muted-foreground">72 weeks</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Phentermine-topiramate</td>
            <td className="py-3 px-4 text-muted-foreground">EQUIP</td>
            <td className="py-3 px-4 text-muted-foreground">10.9%</td>
            <td className="py-3 px-4 text-muted-foreground">56 weeks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Important Considerations
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">1. Weight Regain After Stopping</h3>
        <p className="text-sm text-muted-foreground">
          Studies show that most people regain weight after discontinuing GLP-1 medications. The STEP 4
          trial found participants regained about two-thirds of lost weight within a year of stopping.
          These medications may need to be taken long-term.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">2. Side Effects Are Common</h3>
        <p className="text-sm text-muted-foreground">
          Nausea, vomiting, diarrhea, and constipation affect 30-50% of users. Most side effects
          improve over time, but some people can&apos;t tolerate the medications.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">3. Results Vary Significantly</h3>
        <p className="text-sm text-muted-foreground">
          While average results are impressive, individual responses vary. Some people lose 25%+ of
          their body weight; others lose much less. There&apos;s no way to predict who will respond
          best.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">4. Lifestyle Changes Still Matter</h3>
        <p className="text-sm text-muted-foreground">
          Medications work best combined with diet and exercise. In clinical trials, all participants
          received lifestyle counseling. The medication helps you eat less, but what you eat and
          your activity level still impact results.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          FDA-approved weight loss medications, particularly GLP-1 agonists, genuinely work for most
          people. They represent a significant advancement in obesity treatment. However, they&apos;re
          not magic pills—they require commitment, may need to be taken indefinitely, and come with
          side effects and costs. For many people struggling with obesity, they offer a powerful tool
          that wasn&apos;t previously available.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic Face
export const OzempicFaceContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      &quot;Ozempic face&quot; has become a widely discussed phenomenon as GLP-1 medications have gained
      popularity. The term describes the gaunt, aged appearance that some people develop after
      significant weight loss on these medications. But what exactly causes it, and can it be
      prevented or reversed?
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is &quot;Ozempic Face&quot;?
        </h2>
        <p className="text-muted-foreground">
          &quot;Ozempic face&quot; refers to the facial changes that can occur with rapid weight loss—loss
          of facial fat volume leading to sagging skin, hollow cheeks, deeper wrinkles, and an
          overall aged appearance. It&apos;s not unique to Ozempic; any rapid weight loss can cause
          similar changes. The term simply became popular as Ozempic use exploded.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Does It Happen?
    </h2>
    <p className="text-muted-foreground mb-4">
      Several factors contribute to facial changes during weight loss:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Loss of Facial Fat</h3>
        <p className="text-sm text-muted-foreground">
          When you lose weight, you lose fat from everywhere—including your face. The fat pads that
          give your face a youthful, full appearance (in your cheeks, around your eyes, and along
          your jawline) shrink. This is especially noticeable in people who lose weight quickly.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Skin Elasticity Issues</h3>
        <p className="text-sm text-muted-foreground">
          Skin that was stretched to accommodate extra weight may not bounce back, especially in
          older individuals. The collagen and elastin in your skin can be permanently affected by
          being stretched for extended periods.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Rapid Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications can cause faster weight loss than traditional methods. The faster
          you lose weight, the less time your skin has to adjust, making loose or sagging skin
          more noticeable.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Protein Deficiency</h3>
        <p className="text-sm text-muted-foreground">
          Reduced appetite can lead to inadequate protein intake. Protein is essential for collagen
          production and skin health. Without enough protein, skin may appear more aged.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Is Most at Risk?
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Age 40+</strong> — Skin naturally loses elasticity with age</li>
      <li><strong>Large amount of weight to lose</strong> — More weight loss means more volume change</li>
      <li><strong>Rapid weight loss</strong> — Faster loss gives skin less time to adapt</li>
      <li><strong>History of yo-yo dieting</strong> — Repeated stretching damages skin</li>
      <li><strong>Sun damage</strong> — UV exposure reduces skin elasticity</li>
      <li><strong>Smoking</strong> — Accelerates skin aging and reduces collagen</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Prevention Strategies
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">1. Prioritize Protein Intake</h3>
        <p className="text-sm text-muted-foreground">
          Aim for 60-100g of protein daily to support collagen production and muscle mass.
          Consider collagen supplements as well.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">2. Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Dehydration makes skin look more wrinkled and saggy. Drink plenty of water throughout
          the day.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">3. Use Sun Protection</h3>
        <p className="text-sm text-muted-foreground">
          UV damage is the leading cause of premature skin aging. Wear SPF 30+ daily, even on
          cloudy days.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">4. Consider Slowing Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;re losing more than 2-3 pounds per week, talk to your doctor about adjusting
          your dose. Slower, steadier weight loss may allow skin to adapt better.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">5. Build Facial Muscle</h3>
        <p className="text-sm text-muted-foreground">
          Some dermatologists suggest facial exercises. While evidence is limited, maintaining
          facial muscle tone may help support the overlying skin.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Treatment Options
    </h2>
    <p className="text-muted-foreground mb-4">
      If you&apos;ve already developed &quot;Ozempic face,&quot; several treatments can help restore volume:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Dermal fillers</strong> — Hyaluronic acid fillers can restore lost volume (temporary)</li>
      <li><strong>Sculptra</strong> — Stimulates collagen production for more gradual, natural results</li>
      <li><strong>Radiofrequency treatments</strong> — Tighten skin and stimulate collagen</li>
      <li><strong>Microneedling</strong> — Promotes collagen production</li>
      <li><strong>Surgical options</strong> — Facelifts for severe cases</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Perspective Matters
        </h3>
        <p className="text-muted-foreground">
          While &quot;Ozempic face&quot; is a real phenomenon, it&apos;s worth remembering that significant
          weight loss provides substantial health benefits. The cosmetic changes, while sometimes
          unwelcome, can often be addressed. Many people find the trade-off worthwhile for improved
          health, mobility, and quality of life.
        </p>
      </CardContent>
    </Card>
  </>
);

// How Long Does It Take to Establish a New Weight Set Point?
export const WeightSetPointContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      One of the biggest challenges in weight management isn&apos;t losing weight—it&apos;s keeping it off.
      Your body has a &quot;set point&quot;—a weight it naturally tends toward and defends. Understanding
      this concept is crucial for long-term success, whether you&apos;re using GLP-1 medications or
      other approaches.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is Weight Set Point Theory?
        </h2>
        <p className="text-muted-foreground">
          Set point theory suggests your body has a weight range it prefers to maintain. When you
          deviate from this range, your body activates mechanisms to return to it—increasing hunger
          and decreasing metabolism when you&apos;re below it, or doing the opposite when above. This
          is why lost weight often returns.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How Long to Establish a New Set Point?
    </h2>
    <p className="text-muted-foreground mb-4">
      Research suggests it takes <strong>6 months to 2+ years</strong> of maintaining a new weight
      before your body fully adjusts. Key findings:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Metabolic adaptation</strong> — Takes 6-12 months to partially normalize</li>
      <li><strong>Hunger hormones</strong> — Elevated ghrelin (hunger hormone) can persist for years</li>
      <li><strong>Leptin sensitivity</strong> — May take 1-2 years to recalibrate</li>
      <li><strong>Full adaptation</strong> — Some researchers suggest it takes 3-5 years</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What Happens When You Lose Weight
    </h2>
    <p className="text-muted-foreground mb-4">
      Your body fights weight loss through several mechanisms:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Metabolic Adaptation</h3>
        <p className="text-sm text-muted-foreground">
          Your metabolism slows beyond what&apos;s explained by lost body mass. A person who diets down
          to 180 lbs may burn 200-300 fewer calories daily than someone who was always 180 lbs.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Increased Hunger</h3>
        <p className="text-sm text-muted-foreground">
          Ghrelin (hunger hormone) increases after weight loss. Studies show this can persist for
          at least a year, possibly much longer.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Reduced Satiety</h3>
        <p className="text-sm text-muted-foreground">
          Leptin, which signals fullness, drops with weight loss. Your brain receives weaker
          &quot;stop eating&quot; signals than before.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How GLP-1 Medications Affect Set Point
    </h2>
    <p className="text-muted-foreground mb-4">
      This is where GLP-1 medications may offer unique advantages:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>They directly counteract increased hunger by suppressing appetite</li>
      <li>They may help &quot;reset&quot; appetite regulation in the brain</li>
      <li>Continuous use maintains the effects, potentially allowing a true set point shift</li>
      <li>However, most research shows weight regain after stopping the medication</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Strategies for Resetting Your Set Point
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">1. Lose Weight Gradually</h3>
        <p className="text-sm text-muted-foreground">
          Slower weight loss (1-2 lbs/week) may cause less metabolic adaptation than rapid loss.
          Your body has more time to adjust.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">2. Maintain for Extended Periods</h3>
        <p className="text-sm text-muted-foreground">
          The longer you maintain a new weight, the more your body accepts it as &quot;normal.&quot;
          Plan for at least 1-2 years of active maintenance.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">3. Build Muscle</h3>
        <p className="text-sm text-muted-foreground">
          Resistance training helps maintain metabolic rate and may support set point adjustment.
          Muscle mass is metabolically active tissue.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">4. Prioritize Sleep and Stress Management</h3>
        <p className="text-sm text-muted-foreground">
          Poor sleep and chronic stress disrupt hunger hormones and metabolism. Both can make
          set point adjustment harder.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">5. Consider Long-Term Medication Use</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications may need to be continued indefinitely to maintain results. This isn&apos;t
          necessarily a failure—obesity is a chronic condition that may require chronic treatment.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Establishing a new weight set point is a process that takes months to years, not weeks.
          Your body is programmed to defend its current weight, which is why maintenance is often
          harder than losing. Understanding this helps set realistic expectations and emphasizes
          why weight management is a long-term commitment, not a short-term fix.
        </p>
      </CardContent>
    </Card>
  </>
);

// Best Fruits for Weight Loss
export const BestFruitsWeightLossContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Fruits often get a bad reputation in weight loss circles because of their sugar content.
      But the truth is more nuanced—many fruits are excellent choices for weight loss, providing
      essential nutrients, fiber, and natural sweetness that can satisfy cravings without derailing
      your progress.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Fruit Can Help Weight Loss
        </h2>
        <p className="text-muted-foreground">
          Unlike processed sugars, the sugar in whole fruit comes packaged with fiber, water, vitamins,
          and antioxidants. The fiber slows sugar absorption, preventing blood sugar spikes. Studies
          consistently show that people who eat more fruit tend to have healthier body weights.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Top Fruits for Weight Loss
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">1. Berries (Best Choice)</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Strawberries, blueberries, raspberries, and blackberries are the gold standard for
          weight loss fruits.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Lowest sugar content of all fruits</li>
          <li>• Highest fiber per calorie</li>
          <li>• Rich in antioxidants</li>
          <li>• 1 cup of strawberries: only 50 calories</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">2. Grapefruit</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Studies have shown eating half a grapefruit before meals may enhance weight loss.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• High water content increases fullness</li>
          <li>• May help regulate blood sugar</li>
          <li>• Half a grapefruit: 52 calories</li>
          <li>• Note: Can interact with some medications</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">3. Apples</h3>
        <p className="text-sm text-muted-foreground mb-2">
          A portable, satisfying snack that&apos;s easy to include in any diet plan.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• High in pectin fiber (promotes fullness)</li>
          <li>• Requires lots of chewing (slows eating)</li>
          <li>• Medium apple: 95 calories, 4g fiber</li>
          <li>• Eat with skin for maximum benefit</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">4. Watermelon</h3>
        <p className="text-sm text-muted-foreground mb-2">
          92% water content makes it incredibly filling for very few calories.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Very low calorie density</li>
          <li>• Helps with hydration</li>
          <li>• 1 cup diced: only 46 calories</li>
          <li>• Great for satisfying sweet cravings</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">5. Kiwi</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Nutrient-dense and shown to support digestive health.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• High in vitamin C and fiber</li>
          <li>• Contains actinidin (aids digestion)</li>
          <li>• One kiwi: 42 calories, 2g fiber</li>
          <li>• Low glycemic index</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">6. Oranges</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Whole oranges (not juice) are filling and nutrient-rich.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• High fiber when eaten whole</li>
          <li>• Excellent vitamin C source</li>
          <li>• More satisfying than juice</li>
          <li>• One orange: 62 calories, 3g fiber</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Fruits to Eat in Moderation
    </h2>
    <p className="text-muted-foreground mb-4">
      These fruits are healthy but higher in sugar and calories:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Bananas</strong> — Higher sugar, but good pre-workout (105 calories)</li>
      <li><strong>Grapes</strong> — Easy to overeat; stick to small portions</li>
      <li><strong>Mangoes</strong> — Delicious but calorie-dense (200 calories per mango)</li>
      <li><strong>Cherries</strong> — High sugar; portion control is key</li>
      <li><strong>Dried fruit</strong> — Concentrated sugar; treat like candy</li>
    </ul>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Fruit Tips for GLP-1 Users
        </h3>
        <p className="text-muted-foreground">
          If you&apos;re taking semaglutide or tirzepatide, your reduced appetite makes every bite count.
          Choose lower-sugar fruits like berries, and pair fruit with protein (like Greek yogurt)
          to stay full longer. Avoid fruit juice entirely—it&apos;s essentially sugar water without
          the beneficial fiber.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Recommended Daily Intake
    </h2>
    <p className="text-muted-foreground mb-6">
      Most nutrition experts recommend 1-2 cups of fruit per day during weight loss. Focus on
      whole fruits rather than juice, dried fruit, or smoothies. The act of chewing whole fruit
      helps signal fullness and slows down eating.
    </p>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Don&apos;t fear fruit when trying to lose weight. The fiber, water, and nutrients in whole
          fruits make them allies in your weight loss journey. Berries are your best bet, but
          most whole fruits can fit into a healthy weight loss plan. The key is choosing whole
          fruit over processed alternatives and watching portion sizes for higher-sugar options.
        </p>
      </CardContent>
    </Card>
  </>
);

// Can Ozempic Cause Depression?
export const OzempicDepressionContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      As GLP-1 medications become more widely used, questions about their mental health effects
      have emerged. Some users report mood changes while taking Ozempic (semaglutide), leading
      many to wonder: can Ozempic cause depression? Here&apos;s what the research shows.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Short Answer
        </h2>
        <p className="text-muted-foreground">
          Current evidence does not establish that Ozempic directly causes depression. However,
          some users do report mood changes, and the FDA added suicidal ideation to the list of
          potential side effects to monitor in 2023. The relationship is complex and likely
          involves multiple factors.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What the Research Shows
    </h2>
    <p className="text-muted-foreground mb-4">
      Clinical trials of semaglutide have not shown increased rates of depression compared to
      placebo. In fact, some studies suggest potential mental health benefits:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Large clinical trials (STEP trials) didn&apos;t find significant depression increases</li>
      <li>Some studies show improved quality of life with weight loss</li>
      <li>A 2023 study found GLP-1 users had lower depression rates than non-users</li>
      <li>However, post-marketing reports have raised concerns warranting investigation</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Some People Might Experience Mood Changes
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Reduced Pleasure from Food</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications reduce appetite and food reward. For people who use food for emotional
          comfort or stress relief, losing this coping mechanism can affect mood.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Nutritional Deficiencies</h3>
        <p className="text-sm text-muted-foreground">
          Eating significantly less can lead to deficiencies in B vitamins, iron, and other
          nutrients that affect mood and energy levels.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Rapid Body Changes</h3>
        <p className="text-sm text-muted-foreground">
          Significant weight loss can trigger complex emotions about body image, identity, and
          relationships—even when the change is positive.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Gastrointestinal Side Effects</h3>
        <p className="text-sm text-muted-foreground">
          Persistent nausea, vomiting, or digestive issues can certainly impact mood and
          quality of life.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Direct Brain Effects</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 receptors exist in the brain, including areas involved in mood regulation.
          The full implications of activating these receptors aren&apos;t yet fully understood.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Warning Signs to Watch For
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>• Persistent sadness or hopelessness</li>
          <li>• Loss of interest in activities you usually enjoy</li>
          <li>• Significant changes in sleep patterns</li>
          <li>• Thoughts of self-harm or suicide</li>
          <li>• Severe anxiety or panic attacks</li>
          <li>• Difficulty concentrating or making decisions</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          <strong>If you experience any of these symptoms, contact your healthcare provider
          immediately.</strong>
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Do If You Experience Mood Changes
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">1. Don&apos;t Dismiss Your Feelings</h3>
        <p className="text-sm text-muted-foreground">
          Mood changes while on medication are worth discussing with your doctor, even if
          they seem minor.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">2. Ensure Adequate Nutrition</h3>
        <p className="text-sm text-muted-foreground">
          Even with reduced appetite, prioritize protein and nutrient-dense foods. Consider
          a multivitamin and B-complex supplement.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">3. Develop Non-Food Coping Strategies</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;ve relied on food for comfort, work on developing alternative coping
          mechanisms—exercise, meditation, therapy, or hobbies.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">4. Consider Dose Adjustment</h3>
        <p className="text-sm text-muted-foreground">
          Some people do better on lower doses. Talk to your doctor about whether a dose
          reduction might help while still providing benefits.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Should Be Extra Cautious?
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>History of depression or anxiety</strong> — Monitor symptoms closely</li>
      <li><strong>History of eating disorders</strong> — Appetite changes may trigger patterns</li>
      <li><strong>Current mental health treatment</strong> — Coordinate with your mental health provider</li>
      <li><strong>History of suicidal ideation</strong> — Extra monitoring is warranted</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          While current evidence doesn&apos;t show Ozempic directly causes depression, individual
          experiences vary. The medication&apos;s effects on appetite, food reward, and brain
          chemistry could contribute to mood changes in some people. If you experience mental
          health changes while taking Ozempic, take them seriously and discuss with your
          healthcare provider. For most people, the benefits outweigh the risks, but monitoring
          is important.
        </p>
      </CardContent>
    </Card>
  </>
);

// Who Should Not Take Mounjaro (Tirzepatide)?
export const WhoShouldNotTakeMounjaro = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Mounjaro (tirzepatide) and its weight-loss branded version Zepbound have become popular
      treatments for type 2 diabetes and obesity. While highly effective for many, these
      medications aren&apos;t appropriate for everyone. Understanding the contraindications and
      precautions can help you make an informed decision with your healthcare provider.
    </p>

    <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Absolute Contraindications
        </h2>
        <p className="text-muted-foreground mb-4">
          Do NOT take Mounjaro/Zepbound if you have:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong> — Like
            all GLP-1 drugs, tirzepatide carries a boxed warning about thyroid tumors</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong> — This
            genetic condition significantly increases thyroid cancer risk</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <span><strong>Known hypersensitivity to tirzepatide</strong> — Previous allergic
            reaction to the medication or any of its components</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Conditions Requiring Careful Consideration
    </h2>

    <div className="space-y-4 mb-8">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">History of Pancreatitis</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications have been associated with acute pancreatitis. If you&apos;ve had
          pancreatitis before, your doctor may recommend against Mounjaro or suggest extra
          monitoring.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Severe Gastrointestinal Disease</h3>
        <p className="text-sm text-muted-foreground">
          Conditions like gastroparesis, inflammatory bowel disease, or severe GERD may be
          worsened by tirzepatide&apos;s effects on gastric emptying.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Diabetic Retinopathy</h3>
        <p className="text-sm text-muted-foreground">
          Rapid blood sugar improvements can temporarily worsen diabetic eye disease. If you
          have retinopathy, more frequent eye exams may be needed.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Kidney Disease</h3>
        <p className="text-sm text-muted-foreground">
          While tirzepatide doesn&apos;t require dose adjustment for kidney disease, dehydration
          from GI side effects can worsen kidney function. Close monitoring is recommended.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Gallbladder Disease</h3>
        <p className="text-sm text-muted-foreground">
          Rapid weight loss increases gallstone risk. If you have existing gallbladder problems,
          discuss this with your provider. See our article on
          <Link href="/articles/do-glp-1-agonists-cause-gallstones" className="text-primary hover:underline ml-1">
            GLP-1s and gallstones
          </Link>.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Should Not Take Mounjaro
    </h2>

    <Card className="mb-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Pregnant or Planning Pregnancy</h3>
        <p className="text-muted-foreground mb-3">
          Tirzepatide should not be used during pregnancy:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Animal studies showed adverse effects on fetal development</li>
          <li>Stop Mounjaro at least 1 month before trying to conceive</li>
          <li>Use reliable contraception while taking the medication</li>
          <li>Contact your doctor immediately if you become pregnant</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Breastfeeding Mothers</h3>
        <p className="text-muted-foreground">
          It&apos;s unknown whether tirzepatide passes into breast milk. Due to lack of safety
          data, Mounjaro is not recommended while nursing.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Type 1 Diabetics</h3>
        <p className="text-muted-foreground">
          Mounjaro is NOT approved for type 1 diabetes. It works by enhancing insulin secretion
          from the pancreas—which doesn&apos;t help when the pancreas can&apos;t produce insulin.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Children and Adolescents</h3>
        <p className="text-muted-foreground">
          Mounjaro and Zepbound are currently approved only for adults (18+). Safety and
          efficacy haven&apos;t been established in pediatric populations.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How Mounjaro Differs from Ozempic
    </h2>
    <p className="text-muted-foreground mb-4">
      Mounjaro works on both GLP-1 and GIP receptors (dual agonist), while Ozempic only targets
      GLP-1. This difference means:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Mounjaro typically produces greater weight loss (20-25% vs 15%)</li>
      <li>Side effect profiles are similar but may differ in intensity</li>
      <li>If you can&apos;t tolerate one, you might tolerate the other</li>
      <li>The same contraindications generally apply to both</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Drug Interactions
    </h2>
    <p className="text-muted-foreground mb-4">
      Mounjaro can affect how other medications work:
    </p>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Medication</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Concern</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Insulin/Sulfonylureas</td>
            <td className="py-3 px-4 text-muted-foreground">Increased hypoglycemia risk—doses may need reduction</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Oral Contraceptives</td>
            <td className="py-3 px-4 text-muted-foreground">Delayed absorption may reduce effectiveness</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Oral Medications</td>
            <td className="py-3 px-4 text-muted-foreground">Absorption timing may be affected by delayed gastric emptying</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Mounjaro/Zepbound is a powerful medication with impressive results for many people.
          However, it&apos;s not suitable for everyone. The contraindications exist to protect
          you from potentially serious complications. Always have a complete conversation with
          your healthcare provider about your medical history before starting any new medication.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic and Alcohol
export const OzempicAlcoholContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      If you&apos;re taking Ozempic (semaglutide) for diabetes or weight loss, you might wonder
      whether it&apos;s safe to drink alcohol. While there&apos;s no strict prohibition, understanding
      how alcohol interacts with your medication can help you make informed decisions.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Short Answer
        </h2>
        <p className="text-muted-foreground">
          Moderate alcohol consumption is generally considered acceptable while taking Ozempic,
          but there are important considerations. Alcohol can affect blood sugar, interact with
          side effects, and some people report reduced alcohol tolerance on GLP-1 medications.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Key Concerns with Alcohol and Ozempic
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">1. Blood Sugar Fluctuations</h3>
        <p className="text-sm text-muted-foreground">
          Alcohol can lower blood sugar, and Ozempic also affects blood sugar levels. Together,
          they may increase hypoglycemia risk—especially if you&apos;re also taking insulin or
          sulfonylureas. Symptoms include shakiness, confusion, and dizziness.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">2. Increased Nausea</h3>
        <p className="text-sm text-muted-foreground">
          Nausea is already one of the most common Ozempic side effects. Alcohol can worsen
          gastrointestinal symptoms, making you feel significantly worse than you would from
          either alone.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">3. Reduced Alcohol Tolerance</h3>
        <p className="text-sm text-muted-foreground">
          Many Ozempic users report feeling intoxicated faster and experiencing worse hangovers.
          This may be related to delayed gastric emptying or changes in how your body processes
          alcohol.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">4. Empty Calories</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;re using Ozempic for weight loss, alcohol provides calories without
          nutrition. Your reduced appetite means every calorie counts more.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">5. Pancreatitis Risk</h3>
        <p className="text-sm text-muted-foreground">
          Both heavy alcohol use and GLP-1 medications have been associated with pancreatitis.
          Combining them could potentially increase this rare but serious risk.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Interesting Finding: Reduced Alcohol Interest
    </h2>
    <p className="text-muted-foreground mb-4">
      Many Ozempic users report a decreased desire for alcohol—similar to how they lose
      interest in food. Research is ongoing, and some studies suggest GLP-1 medications
      may affect the brain&apos;s reward pathways for alcohol.
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Some users report drinking less without consciously trying</li>
      <li>Alcohol may be less enjoyable or satisfying</li>
      <li>Research is exploring GLP-1s for alcohol use disorder treatment</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      If You Choose to Drink
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Start Slowly</h3>
        <p className="text-sm text-muted-foreground">
          Your tolerance may be lower than before. Have one drink and wait to see how you
          feel before having more.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Eat Before Drinking</h3>
        <p className="text-sm text-muted-foreground">
          Having food in your stomach slows alcohol absorption and helps prevent blood
          sugar drops.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Choose Lower-Calorie Options</h3>
        <p className="text-sm text-muted-foreground">
          If weight loss is your goal, opt for spirits with zero-calorie mixers, dry wine,
          or light beer. Avoid sugary cocktails and creamy drinks.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Alternate alcoholic drinks with water. Dehydration from alcohol combined with
          GI side effects can be unpleasant.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Monitor Blood Sugar</h3>
        <p className="text-sm text-muted-foreground">
          If you have diabetes, check your blood sugar before, during, and after drinking.
          Be aware of delayed hypoglycemia (can occur hours later).
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Best and Worst Alcohol Choices
    </h2>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h4 className="font-semibold text-foreground mb-2">Better Choices</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Dry wine (5 oz): ~120 calories</li>
          <li>• Light beer: ~100 calories</li>
          <li>• Vodka/soda: ~100 calories</li>
          <li>• Tequila on the rocks</li>
          <li>• Whiskey neat or with water</li>
        </ul>
      </div>
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h4 className="font-semibold text-foreground mb-2">Worse Choices</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Margaritas: 300-500+ calories</li>
          <li>• Piña coladas: 400+ calories</li>
          <li>• Sweet wines</li>
          <li>• Craft/heavy beers</li>
          <li>• Sugary cocktails</li>
        </ul>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Occasional, moderate alcohol consumption is generally acceptable while taking Ozempic,
          but be aware of increased risks and reduced tolerance. If you have diabetes, extra
          caution is needed due to blood sugar effects. Many users find they naturally drink
          less on GLP-1 medications. When you do drink, choose wisely, eat beforehand, and
          pay attention to how your body responds.
        </p>
      </CardContent>
    </Card>
  </>
);

// How to Travel With Your Medication
export const TravelWithMedicationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Planning a trip while taking GLP-1 medications like Ozempic, Wegovy, Mounjaro, or
      Zepbound requires some extra preparation. These injectable medications need proper
      storage and handling to remain effective. Here&apos;s your comprehensive guide to
      traveling safely with your weight loss medication.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Points to Remember
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• GLP-1 medications need refrigeration (36-46°F / 2-8°C) until first use</li>
          <li>• Once in use, they can be kept at room temperature for limited time</li>
          <li>• Never freeze your medication</li>
          <li>• Always carry medication in your carry-on, never checked baggage</li>
          <li>• TSA allows injectable medications with proper documentation</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Air Travel Tips
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">TSA and Security</h3>
        <p className="text-sm text-muted-foreground">
          Injectable medications are exempt from the 3.4-ounce liquid rule. You can bring
          your pen, needles, and any necessary supplies through security. Declare your
          medication at the checkpoint for smoother screening.
        </p>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Documentation to Carry</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Prescription label on original packaging</li>
          <li>• Letter from your doctor (especially for international travel)</li>
          <li>• Pharmacy receipt showing your name</li>
          <li>• Copy of prescription if traveling long-term</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Carry-On Only</h3>
        <p className="text-sm text-muted-foreground">
          <strong>Never put your medication in checked luggage.</strong> The cargo hold
          can reach temperatures that damage or freeze your medication. Plus, if your
          luggage is lost, so is your medication.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Keeping Your Medication Cool
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Cooling Options</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li><strong>Insulated medication travel cases</strong> — Products like FRIO wallets
          use evaporative cooling without ice or electricity. They stay cool for 45+ hours.</li>
          <li><strong>Small insulated bags with ice packs</strong> — Wrap the pen in a cloth
          to prevent direct contact with ice.</li>
          <li><strong>Hotel mini-fridge</strong> — Request a room with a mini-fridge.
          Don&apos;t store medication in the door (temperature fluctuates).</li>
        </ul>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Temperature Guidelines</h3>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2"><strong>Ozempic/Wegovy (semaglutide):</strong></p>
          <ul className="space-y-1 mb-3">
            <li>• Refrigerated: up to expiration date</li>
            <li>• Room temp (59-86°F): 56 days maximum</li>
          </ul>
          <p className="mb-2"><strong>Mounjaro/Zepbound (tirzepatide):</strong></p>
          <ul className="space-y-1">
            <li>• Refrigerated: up to expiration date</li>
            <li>• Room temp (up to 86°F): 21 days maximum</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      International Travel Considerations
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Check destination country&apos;s rules on importing medications</li>
      <li>Carry a doctor&apos;s letter in English and the local language if possible</li>
      <li>Know your medication&apos;s generic name (semaglutide, tirzepatide)</li>
      <li>Research if your medication is available at your destination (in emergencies)</li>
      <li>Consider travel insurance that covers medication loss</li>
      <li>Account for time zone changes in your injection schedule</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Managing Your Injection Schedule
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Time Zones</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications are once-weekly, so minor timing adjustments are usually fine.
          Try to stay within 2 days of your usual schedule. If crossing many time zones,
          stick to your home schedule for the first week, then gradually adjust.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">What If You Miss a Dose?</h3>
        <p className="text-sm text-muted-foreground">
          If you miss your dose, take it as soon as you remember—unless it&apos;s within
          2 days of your next scheduled dose. In that case, skip the missed dose and
          resume your regular schedule. Never double up doses.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Packing Checklist
    </h2>
    <Card className="mb-8">
      <CardContent className="p-6">
        <ul className="text-muted-foreground space-y-2">
          <li>☐ Medication pen(s) with enough doses for trip + extras</li>
          <li>☐ Needles (if applicable)</li>
          <li>☐ Alcohol swabs</li>
          <li>☐ Sharps container or thick plastic container for used needles</li>
          <li>☐ Insulated case or cooling bag</li>
          <li>☐ Ice packs (gel packs preferred)</li>
          <li>☐ Original prescription packaging/box</li>
          <li>☐ Doctor&apos;s letter</li>
          <li>☐ Pharmacy receipt</li>
          <li>☐ Copy of prescription</li>
          <li>☐ Insurance card and emergency contact numbers</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          What to Do If Medication Gets Too Warm or Freezes
        </h3>
        <p className="text-muted-foreground">
          If your medication was exposed to temperatures outside the recommended range,
          <strong> do not use it</strong>. Contact your pharmacy or healthcare provider.
          The medication may have lost effectiveness even if it looks normal. It&apos;s
          better to miss a dose than inject compromised medication.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          With proper planning, you can travel anywhere while taking GLP-1 medications.
          The keys are: keep it cool (not frozen), carry it with you, bring documentation,
          and pack extra supplies. Don&apos;t let medication management stop you from
          enjoying your travels—just plan ahead.
        </p>
      </CardContent>
    </Card>
  </>
);

// Online Weight Loss Coach
export const OnlineWeightLossCoachContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      An online weight loss coach can provide personalized guidance, accountability, and
      support on your weight loss journey—whether you&apos;re using GLP-1 medications or not.
      But with so many options available, how do you know if online coaching is right for
      you and how to choose the best one?
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is an Online Weight Loss Coach?
        </h2>
        <p className="text-muted-foreground">
          An online weight loss coach is a trained professional who provides virtual support
          for your weight management goals. They may help with nutrition planning, exercise
          guidance, behavior change, and motivation—all delivered through video calls, apps,
          messaging, or a combination.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Types of Online Weight Loss Coaching
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Registered Dietitian (RD) Coaching</h3>
        <p className="text-sm text-muted-foreground">
          Licensed nutrition professionals who can provide medical nutrition therapy,
          create personalized meal plans, and work with your healthcare team. Best for
          those with diabetes, eating disorders, or complex medical needs.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Certified Health Coaches</h3>
        <p className="text-sm text-muted-foreground">
          Focus on behavior change, motivation, and lifestyle modifications. They help
          you set goals, overcome obstacles, and build sustainable habits. Great for
          accountability and mindset work.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Fitness/Personal Training Coaches</h3>
        <p className="text-sm text-muted-foreground">
          Specialize in exercise programming and fitness guidance. Can create workout
          plans, provide form feedback via video, and help you build an exercise routine.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">App-Based Coaching</h3>
        <p className="text-sm text-muted-foreground">
          Programs like Noom, WW (WeightWatchers), or medication-specific coaching
          (like those offered by telehealth providers) combine human coaches with
          app-based tracking and content.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Benefits of Online Coaching
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Convenience</h3>
        <p className="text-sm text-muted-foreground">
          Access coaching from anywhere, anytime. No commute to appointments. Flexible
          scheduling around your work and family life.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Accountability</h3>
        <p className="text-sm text-muted-foreground">
          Regular check-ins keep you on track. Someone is watching your progress and
          will notice if you slip. Studies show accountability significantly improves
          weight loss outcomes.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Personalization</h3>
        <p className="text-sm text-muted-foreground">
          A good coach tailors advice to your specific situation, preferences, medical
          conditions, and goals—unlike generic programs.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Cost-Effective</h3>
        <p className="text-sm text-muted-foreground">
          Often more affordable than in-person coaching. Many options exist at various
          price points.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
        <p className="text-sm text-muted-foreground">
          Message your coach when challenges arise, not just at weekly appointments.
          Real-time support when you need it most.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Coaching Matters on GLP-1 Medications
    </h2>
    <p className="text-muted-foreground mb-4">
      If you&apos;re taking Ozempic, Wegovy, Mounjaro, or similar medications, coaching can
      be especially valuable:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Optimize nutrition</strong> — With reduced appetite, every bite matters.
      A coach ensures you&apos;re getting adequate protein and nutrients.</li>
      <li><strong>Preserve muscle mass</strong> — Proper nutrition and exercise guidance
      helps minimize muscle loss during rapid weight loss.</li>
      <li><strong>Build sustainable habits</strong> — Medication helps short-term, but
      habits determine long-term success.</li>
      <li><strong>Navigate side effects</strong> — A coach can help you adjust eating
      patterns to minimize GI issues.</li>
      <li><strong>Prepare for maintenance</strong> — Eventually you may reduce or stop
      medication. Coaching builds skills for that transition.</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Look For in an Online Coach
    </h2>
    <Card className="mb-8">
      <CardContent className="p-6">
        <ul className="text-muted-foreground space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <span><strong>Credentials</strong> — Look for RD, certified health coach (NBC-HWC),
            or certified personal trainer credentials</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <span><strong>Experience</strong> — Do they have experience with weight loss
            clients? With GLP-1 medications?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <span><strong>Communication style</strong> — Do they offer video calls, messaging,
            or both? What frequency?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <span><strong>Approach</strong> — Is their philosophy evidence-based? Do they
            promote sustainable methods?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <span><strong>Reviews/testimonials</strong> — What do other clients say about
            their experience?</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Red Flags to Avoid
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>• Promises of unrealistic results (&quot;Lose 30 pounds in 30 days!&quot;)</li>
          <li>• Requires purchasing supplements or products</li>
          <li>• No credentials or refuses to share them</li>
          <li>• One-size-fits-all approach</li>
          <li>• Promotes extreme or restrictive diets</li>
          <li>• Won&apos;t coordinate with your healthcare team</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Cost Expectations
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>App-based programs (Noom, WW):</strong> $15-70/month</li>
      <li><strong>Group coaching:</strong> $50-200/month</li>
      <li><strong>Individual certified coach:</strong> $150-400/month</li>
      <li><strong>Registered Dietitian:</strong> $100-300/session (may be covered by insurance)</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          An online weight loss coach can be a valuable investment in your health journey,
          providing personalized guidance and accountability that generic programs can&apos;t
          match. This is especially true if you&apos;re on GLP-1 medications, where optimizing
          nutrition and building sustainable habits are crucial. Look for qualified
          professionals, be wary of red flags, and choose someone whose approach
          resonates with you.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic Babies: The Surprising Fertility Effect
export const OzempicBabiesContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      &quot;Ozempic babies&quot; has become a trending term describing the surge in unexpected pregnancies
      among women taking GLP-1 medications for weight loss. Many women who struggled with fertility
      for years are suddenly becoming pregnant after starting semaglutide or tirzepatide. Here&apos;s
      what&apos;s happening and what you need to know.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Are &quot;Ozempic Babies&quot;?
        </h2>
        <p className="text-muted-foreground">
          The term refers to babies conceived unexpectedly by women taking GLP-1 medications like
          Ozempic, Wegovy, Mounjaro, or Zepbound. These pregnancies often surprise women who were
          told they couldn&apos;t conceive due to PCOS, obesity-related infertility, or other conditions.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Are Women Getting Pregnant on GLP-1s?
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">1. Weight Loss Restores Ovulation</h3>
        <p className="text-sm text-muted-foreground">
          Excess weight can disrupt hormones and prevent ovulation. As women lose weight on GLP-1
          medications, their hormonal balance normalizes and ovulation resumes—sometimes within weeks.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">2. PCOS Improvement</h3>
        <p className="text-sm text-muted-foreground">
          Polycystic ovary syndrome (PCOS) is a leading cause of infertility, affecting up to 12%
          of women. Weight loss significantly improves PCOS symptoms, including irregular periods
          and anovulation.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">3. Improved Insulin Sensitivity</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications improve insulin sensitivity, which is closely linked to reproductive
          health. Better insulin function can help restore normal menstrual cycles.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">4. Reduced Inflammation</h3>
        <p className="text-sm text-muted-foreground">
          Obesity causes chronic inflammation that can impair fertility. Weight loss reduces this
          inflammation, creating a more favorable environment for conception.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">5. Oral Contraceptive Interference</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications delay gastric emptying, which may affect how birth control pills are
          absorbed. This could reduce their effectiveness, leading to unintended pregnancies.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Important Safety Warning
        </h3>
        <p className="text-muted-foreground">
          <strong>GLP-1 medications should NOT be used during pregnancy.</strong> Animal studies
          have shown potential fetal harm. If you become pregnant while on Ozempic, Mounjaro, or
          similar medications, stop immediately and contact your healthcare provider.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Is Most Likely to Experience This?
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Women with PCOS</strong> — Weight loss often restores regular ovulation</li>
      <li><strong>Those with obesity-related infertility</strong> — Even 5-10% weight loss can restore fertility</li>
      <li><strong>Women who were told they couldn&apos;t conceive</strong> — Many assumed they didn&apos;t need contraception</li>
      <li><strong>Those using oral contraceptives only</strong> — Absorption may be affected</li>
      <li><strong>Premenopausal women who assumed they were &quot;too old&quot;</strong> — Weight loss can restore cycles</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Do If You&apos;re at Risk
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Use Reliable Contraception</h3>
        <p className="text-sm text-muted-foreground">
          Consider non-oral methods like IUDs, implants, or condoms if you want to avoid pregnancy.
          Don&apos;t assume infertility persists once you start losing weight.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Take Regular Pregnancy Tests</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;re sexually active and using GLP-1 medications, consider monthly pregnancy tests
          to catch any pregnancy early.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Plan Ahead for Conception</h3>
        <p className="text-sm text-muted-foreground">
          If you want to become pregnant, discuss stopping GLP-1 medications with your doctor.
          The recommendation is to stop at least 2 months before trying to conceive.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Silver Lining
    </h2>
    <p className="text-muted-foreground mb-6">
      For women who want to become pregnant but struggled due to weight or PCOS, GLP-1 medications
      may offer hope. Many doctors now recommend weight loss with these medications before fertility
      treatments, as it can restore natural fertility and improve outcomes for IVF and other procedures.
    </p>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          &quot;Ozempic babies&quot; are a real phenomenon resulting from restored fertility as women
          lose weight on GLP-1 medications. If you don&apos;t want to become pregnant, use reliable
          contraception. If you do want to conceive, work with your doctor to safely transition
          off the medication before trying. Never stay on GLP-1 medications during pregnancy.
        </p>
      </CardContent>
    </Card>
  </>
);

// Celebrities on Weight Loss Drugs
export const CelebritiesWeightLossDrugsContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications have taken Hollywood by storm, with numerous celebrities credited with
      dramatic weight loss transformations. While many are tight-lipped about their methods,
      some have been open about using medications like Ozempic, Wegovy, and Mounjaro. Here&apos;s
      what we know about celebrity use of weight loss drugs.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Celebrities Are Turning to GLP-1s
        </h2>
        <p className="text-muted-foreground">
          The pressure to maintain a certain appearance in Hollywood is intense. GLP-1 medications
          offer significant, relatively rapid weight loss with less effort than traditional dieting.
          With results of 15-25% body weight loss, it&apos;s no wonder these drugs have become popular
          in the entertainment industry.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Celebrities Who&apos;ve Spoken Openly
    </h2>
    <p className="text-muted-foreground mb-4">
      While many celebrities remain private, some have publicly discussed their use of weight
      loss medications:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Oprah Winfrey</h3>
        <p className="text-sm text-muted-foreground">
          The media mogul has been open about using weight loss medication as part of her health
          journey, helping to destigmatize the conversation around these treatments.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Chelsea Handler</h3>
        <p className="text-sm text-muted-foreground">
          The comedian admitted to trying Ozempic but said she stopped because she lost too much
          weight and didn&apos;t like how it made her feel.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Sharon Osbourne</h3>
        <p className="text-sm text-muted-foreground">
          Has been vocal about using Ozempic and losing 30 pounds, but also expressed concerns
          about losing too much weight and looking &quot;gaunt.&quot;
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Charles Barkley</h3>
        <p className="text-sm text-muted-foreground">
          The NBA legend has discussed his use of Mounjaro and the significant weight loss
          he&apos;s experienced.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The &quot;Ozempic Era&quot; in Hollywood
    </h2>
    <p className="text-muted-foreground mb-4">
      Industry observers have noted a widespread trend of dramatic weight loss across Hollywood,
      with many attributing it to GLP-1 medications:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Red carpet appearances featuring noticeably slimmer celebrities</li>
      <li>Multiple celebrities losing weight around the same time period</li>
      <li>The timing coincides with increased availability of these medications</li>
      <li>Industry insiders suggest these drugs are &quot;everywhere&quot; in Hollywood</li>
    </ul>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Stigma Question
        </h3>
        <p className="text-muted-foreground">
          Celebrity use of weight loss drugs raises questions about stigma. Some argue that
          open discussion helps normalize treatment for obesity as a medical condition. Others
          worry it promotes unrealistic body standards or trivializes the serious medical
          purpose of these medications.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Controversies and Concerns
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Supply Shortages</h3>
        <p className="text-sm text-muted-foreground">
          Increased demand, partly attributed to celebrity use, has created shortages affecting
          diabetic patients who need these medications.
        </p>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Off-Label Use</h3>
        <p className="text-sm text-muted-foreground">
          Some celebrities using these drugs may not meet medical criteria for obesity treatment,
          raising ethical questions about vanity use.
        </p>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Body Image Impact</h3>
        <p className="text-sm text-muted-foreground">
          Celebrity transformations may create pressure on everyday people to pursue similar
          results, regardless of whether these medications are appropriate for them.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What This Means for You
    </h2>
    <p className="text-muted-foreground mb-4">
      Celebrity use doesn&apos;t change the medical facts about GLP-1 medications:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>They&apos;re FDA-approved for specific medical conditions (obesity, diabetes)</li>
      <li>Results vary significantly from person to person</li>
      <li>They come with real side effects and risks</li>
      <li>They require ongoing medical supervision</li>
      <li>They work best combined with lifestyle changes</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Celebrity use of weight loss drugs has brought these medications into mainstream
          conversation. While this may help reduce stigma around obesity treatment, it&apos;s
          important to remember that these are serious medications with specific medical
          indications. Your decision to use them should be based on your health needs and
          your doctor&apos;s recommendation—not celebrity trends.
        </p>
      </CardContent>
    </Card>
  </>
);

// Semaglutide and Alcohol
export const SemaglutideAlcoholContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Whether you&apos;re taking Ozempic, Wegovy, or compounded semaglutide, understanding how
      alcohol interacts with your medication is important. Many users report changed
      relationships with alcohol while on semaglutide—some finding they drink less naturally,
      others experiencing stronger effects.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Points About Semaglutide and Alcohol
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• No official prohibition on moderate alcohol consumption</li>
          <li>• Alcohol can worsen common side effects like nausea</li>
          <li>• Blood sugar effects require extra caution for diabetics</li>
          <li>• Many users report reduced alcohol tolerance and interest</li>
          <li>• Heavy drinking increases pancreatitis risk</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Surprising Effect: Reduced Alcohol Interest
    </h2>
    <p className="text-muted-foreground mb-4">
      One of the most talked-about effects of semaglutide is reduced interest in alcohol.
      Research is exploring why this happens:
    </p>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Brain Reward Pathways</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 receptors exist in brain areas involved in reward and addiction. Semaglutide
          may reduce the rewarding effects of alcohol, similar to how it reduces food reward.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Research Implications</h3>
        <p className="text-sm text-muted-foreground">
          Studies are investigating GLP-1 medications as potential treatments for alcohol use
          disorder. Early results are promising, with some users reporting significant
          reductions in drinking.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">User Reports</h3>
        <p className="text-sm text-muted-foreground">
          Many semaglutide users describe losing interest in alcohol without trying. Wine
          tastes different, beer feels unappealing, and the desire to drink simply fades.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Risks of Drinking on Semaglutide
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Intensified Side Effects</h3>
        <p className="text-sm text-muted-foreground">
          Nausea, vomiting, and stomach upset—common semaglutide side effects—can be
          significantly worse when combined with alcohol.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Hypoglycemia Risk</h3>
        <p className="text-sm text-muted-foreground">
          Both alcohol and semaglutide can lower blood sugar. Combined, especially with
          other diabetes medications, the risk of dangerous hypoglycemia increases.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Delayed Gastric Emptying</h3>
        <p className="text-sm text-muted-foreground">
          Semaglutide slows stomach emptying, which may change how alcohol is absorbed.
          Some users feel intoxicated faster; others experience prolonged effects.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Pancreatitis Risk</h3>
        <p className="text-sm text-muted-foreground">
          Heavy alcohol use is a known cause of pancreatitis, and GLP-1 medications carry
          a small pancreatitis risk. Combining the two may increase this risk.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Guidelines for Safe Drinking
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Start Slow</h3>
        <p className="text-sm text-muted-foreground">
          Your tolerance may have changed. Start with one drink and wait to assess effects
          before having more.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Never Drink on Empty Stomach</h3>
        <p className="text-sm text-muted-foreground">
          Always eat before drinking. This is especially important for blood sugar stability
          and reducing nausea.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Choose Wisely</h3>
        <p className="text-sm text-muted-foreground">
          Opt for lower-calorie options: dry wine, light beer, or spirits with zero-calorie
          mixers. Avoid sugary cocktails.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Monitor Blood Sugar</h3>
        <p className="text-sm text-muted-foreground">
          If you have diabetes, check blood sugar before, during, and after drinking. Be
          alert for delayed hypoglycemia (can occur hours later).
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Moderate alcohol consumption is generally acceptable while taking semaglutide, but
          caution is warranted. Many users naturally lose interest in drinking—consider it
          a potential bonus of treatment. When you do drink, be aware of changed tolerance,
          potential side effects, and blood sugar impacts. For guides on specific drinks,
          see our articles on best alcohol choices while on semaglutide.
        </p>
      </CardContent>
    </Card>
  </>
);

// Compounded vs Brand Name GLP-1
export const CompoundedVsBrandContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      With shortages affecting brand-name GLP-1 medications and costs exceeding $1,000/month
      without insurance, many people are turning to compounded versions. But what exactly is
      compounded semaglutide or tirzepatide, and is it safe? Here&apos;s what you need to know.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is Compounded Medication?
        </h2>
        <p className="text-muted-foreground">
          Compounding is the practice of creating customized medications by licensed pharmacies.
          Compounded GLP-1 medications use the same active ingredients as brand-name versions
          but are prepared individually rather than mass-manufactured. They became legally
          available when brand-name versions were added to the FDA shortage list.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Key Differences
    </h2>

    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Brand Name</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Compounded</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">FDA Approval</td>
            <td className="py-3 px-4 text-muted-foreground">Fully approved</td>
            <td className="py-3 px-4 text-muted-foreground">Regulated but not FDA approved</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Cost (without insurance)</td>
            <td className="py-3 px-4 text-muted-foreground">$900-1,300/month</td>
            <td className="py-3 px-4 text-muted-foreground">$200-500/month</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Active Ingredient</td>
            <td className="py-3 px-4 text-muted-foreground">Semaglutide/Tirzepatide</td>
            <td className="py-3 px-4 text-muted-foreground">Same active ingredients</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Delivery</td>
            <td className="py-3 px-4 text-muted-foreground">Pre-filled pen</td>
            <td className="py-3 px-4 text-muted-foreground">Vial + syringes</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Insurance Coverage</td>
            <td className="py-3 px-4 text-muted-foreground">Sometimes covered</td>
            <td className="py-3 px-4 text-muted-foreground">Rarely covered</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Safety Considerations
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Quality Compounding Pharmacies</h3>
        <p className="text-sm text-muted-foreground">
          Look for 503A or 503B registered pharmacies. 503B facilities operate under stricter
          FDA oversight and are generally considered safer. PCAB accreditation is another
          quality marker.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Potential Risks</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Less standardized manufacturing process</li>
          <li>• Variable quality between pharmacies</li>
          <li>• Some use &quot;semaglutide salt&quot; forms with less research</li>
          <li>• No long-term safety data specific to compounded versions</li>
          <li>• Risk of contamination if pharmacy standards are poor</li>
        </ul>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Red Flags to Avoid</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Pharmacies without verifiable licenses</li>
          <li>• Prices that seem too good to be true</li>
          <li>• No requirement for prescription</li>
          <li>• Foreign or unverifiable sources</li>
          <li>• &quot;Research chemical&quot; or peptide suppliers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Questions to Ask Your Provider
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Which compounding pharmacy do you use?</li>
      <li>Is it a 503A or 503B registered pharmacy?</li>
      <li>What form of semaglutide do they use (base vs. salt)?</li>
      <li>How is potency and sterility verified?</li>
      <li>What happens if there&apos;s a quality issue?</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Legal Landscape
    </h2>
    <p className="text-muted-foreground mb-4">
      Compounded GLP-1 medications exist in a legal gray area:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Legal to compound when brand versions are on FDA shortage list</li>
      <li>Novo Nordisk and Eli Lilly have challenged compounders</li>
      <li>Regulations may change as shortages resolve</li>
      <li>Some states have stricter rules than others</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Compounded GLP-1 medications offer a more affordable alternative to brand-name
          versions, but quality varies significantly. If you choose compounded medication,
          use a reputable telehealth provider or pharmacy with proper credentials. The safest
          approach is brand-name medication from a licensed pharmacy, but compounded versions
          from quality sources can be a reasonable option when cost or availability is a barrier.
        </p>
      </CardContent>
    </Card>
  </>
);

// Can You Take Ozempic While Pregnant?
export const OzempicPregnancyContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      If you&apos;re taking Ozempic and considering pregnancy, or if you&apos;ve discovered you&apos;re
      pregnant while on the medication, you likely have important questions about safety.
      Here&apos;s what you need to know about Ozempic (semaglutide) and pregnancy.
    </p>

    <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Short Answer: No
        </h2>
        <p className="text-muted-foreground">
          <strong>Ozempic should not be used during pregnancy.</strong> The FDA classifies it as a
          medication that may cause fetal harm based on animal studies. If you&apos;re pregnant or
          planning to become pregnant, stop taking Ozempic and consult your healthcare provider
          immediately.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What the Research Shows
    </h2>
    <p className="text-muted-foreground mb-4">
      There are no adequate human studies on semaglutide use during pregnancy. What we know comes
      from animal studies:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Animal studies showed embryo-fetal abnormalities at doses below human therapeutic levels</li>
      <li>Findings included skeletal abnormalities and reduced fetal growth</li>
      <li>These findings were observed in both rats and rabbits</li>
      <li>The relevance to humans isn&apos;t fully established, but the risk is concerning</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Key Recommendations
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Stop Ozempic Before Trying to Conceive</h3>
        <p className="text-sm text-muted-foreground">
          Novo Nordisk recommends discontinuing Ozempic <strong>at least 2 months</strong> before
          a planned pregnancy. This allows the medication to clear from your system (semaglutide
          has a half-life of about 1 week, taking approximately 5 weeks to fully clear).
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Use Effective Contraception</h3>
        <p className="text-sm text-muted-foreground">
          While taking Ozempic, use reliable birth control. Note that Ozempic may reduce the
          effectiveness of oral contraceptives due to delayed gastric emptying. Consider
          additional or alternative contraceptive methods.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">If You Become Pregnant While Taking Ozempic</h3>
        <p className="text-sm text-muted-foreground">
          Stop the medication immediately and contact your healthcare provider. They will discuss
          monitoring options and next steps. Don&apos;t panic—exposure doesn&apos;t guarantee harm, but
          monitoring is important.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The &quot;Ozempic Baby&quot; Phenomenon
    </h2>
    <p className="text-muted-foreground mb-4">
      You may have heard about &quot;Ozempic babies&quot;—unplanned pregnancies in women taking GLP-1
      medications. This happens because:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Weight loss can restore ovulation in women with PCOS or obesity-related infertility</li>
      <li>GLP-1 medications may reduce the effectiveness of oral contraceptives</li>
      <li>Some women weren&apos;t aware they needed to use contraception</li>
    </ul>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Increased Fertility Warning
        </h3>
        <p className="text-muted-foreground">
          Weight loss itself can significantly increase fertility. If you&apos;ve struggled with
          infertility related to weight or PCOS, be aware that you may become fertile again
          while losing weight on Ozempic—even if you weren&apos;t before.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What About Breastfeeding?
    </h2>
    <p className="text-muted-foreground mb-4">
      There&apos;s no data on whether semaglutide passes into breast milk. Given the lack of safety
      information, Ozempic is generally not recommended while breastfeeding. Discuss alternatives
      with your healthcare provider if you&apos;re nursing.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Alternatives During Pregnancy
    </h2>
    <p className="text-muted-foreground mb-4">
      If you need to manage blood sugar or weight during pregnancy:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>For diabetes</strong> — Insulin is the preferred treatment during pregnancy</li>
      <li><strong>For weight management</strong> — Diet and exercise modifications are safest</li>
      <li><strong>For gestational diabetes</strong> — Work with your healthcare team for individualized management</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Planning Ahead
        </h3>
        <p className="text-muted-foreground">
          If you&apos;re thinking about pregnancy, talk to your doctor about transitioning off
          Ozempic well in advance. The 2-month washout period gives you time to adjust and
          ensures the medication is out of your system before conception. Many women successfully
          use Ozempic to reach a healthier weight before becoming pregnant, then discontinue
          it when ready to conceive.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 and Exercise: Maximizing Results
export const GLP1ExerciseContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      While GLP-1 medications like Ozempic and Mounjaro produce impressive weight loss on their
      own, combining them with exercise can significantly improve your results and overall health.
      Here&apos;s how to optimize your exercise routine while on these medications.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Exercise Matters on GLP-1s
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Preserves muscle mass during weight loss (critical!)</li>
          <li>• Improves body composition beyond what medication alone achieves</li>
          <li>• Enhances insulin sensitivity and metabolic health</li>
          <li>• Reduces cardiovascular risk</li>
          <li>• Helps maintain weight loss long-term</li>
          <li>• Improves mood and energy levels</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Muscle Loss Problem
    </h2>
    <p className="text-muted-foreground mb-4">
      One of the biggest concerns with rapid weight loss from GLP-1 medications is muscle loss.
      Studies show that 25-40% of weight lost on these medications can be lean mass (muscle)
      rather than fat. This is problematic because:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Muscle burns more calories at rest than fat</li>
      <li>Loss of muscle slows metabolism, making weight regain more likely</li>
      <li>Muscle is essential for functional strength and mobility</li>
      <li>Sarcopenia (muscle loss) accelerates aging</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Best Types of Exercise
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">1. Resistance Training (Most Important)</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Strength training is the single most important exercise for GLP-1 users. Aim for 2-4
          sessions per week targeting all major muscle groups.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Use weights, machines, resistance bands, or bodyweight</li>
          <li>• Progressive overload: gradually increase weight/reps</li>
          <li>• Focus on compound movements: squats, deadlifts, presses, rows</li>
          <li>• 8-12 reps per set, 2-4 sets per exercise</li>
        </ul>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">2. Cardiovascular Exercise</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Cardio supports heart health, endurance, and additional calorie burn.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 150+ minutes moderate activity per week (walking, cycling, swimming)</li>
          <li>• Or 75+ minutes vigorous activity (running, HIIT)</li>
          <li>• Walking is excellent—aim for 7,000-10,000 steps daily</li>
          <li>• Zone 2 training (conversational pace) is great for fat burning</li>
        </ul>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">3. Flexibility and Balance</h3>
        <p className="text-sm text-muted-foreground">
          Don&apos;t neglect mobility work, especially as your body changes rapidly. Yoga, stretching,
          and balance exercises prevent injury and improve quality of movement.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Sample Weekly Exercise Plan
    </h2>
    <Card className="mb-8">
      <CardContent className="p-6">
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Monday:</strong> Upper body strength (30-45 min)</li>
          <li><strong>Tuesday:</strong> Walk 30-45 min or light cardio</li>
          <li><strong>Wednesday:</strong> Lower body strength (30-45 min)</li>
          <li><strong>Thursday:</strong> Rest or gentle yoga/stretching</li>
          <li><strong>Friday:</strong> Full body strength (30-45 min)</li>
          <li><strong>Saturday:</strong> Longer walk, bike ride, or swim (45-60 min)</li>
          <li><strong>Sunday:</strong> Rest and recovery</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Exercise isn&apos;t required for GLP-1 medications to work, but it dramatically improves
          outcomes. Prioritize resistance training to preserve muscle, add cardio for heart health,
          and adjust intensity based on how you feel. The combination of medication, exercise,
          and proper nutrition produces the best long-term results.
        </p>
      </CardContent>
    </Card>
  </>
);

// How to Prevent Muscle Loss on GLP-1
export const PreventMuscleLossContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      One of the biggest concerns with GLP-1 weight loss medications is the loss of lean muscle
      mass alongside fat. Research shows 25-40% of weight lost can be muscle, which affects
      metabolism, strength, and long-term weight maintenance. Here&apos;s how to minimize muscle
      loss and optimize body composition.
    </p>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Muscle Loss Matters
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Muscle burns 3x more calories at rest than fat</li>
          <li>• Losing muscle slows your metabolism</li>
          <li>• Lower metabolism = easier weight regain</li>
          <li>• Muscle is essential for strength, mobility, and independence</li>
          <li>• Sarcopenia (muscle loss) accelerates aging-related decline</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The 4 Pillars of Muscle Preservation
    </h2>

    <div className="space-y-6 mb-8">
      <div className="p-6 bg-muted/30 rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">1. Prioritize Protein</h3>
        <p className="text-muted-foreground mb-4">
          Protein is the most critical factor for preserving muscle during weight loss.
        </p>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>How much?</strong> 1.0-1.2 grams per pound of goal body weight daily</p>
          <p><strong>Example:</strong> If your goal is 150 lbs, aim for 150-180g protein/day</p>
          <p><strong>Spread it out:</strong> 30-40g protein per meal, 3-4 times daily</p>
        </div>
      </div>

      <div className="p-6 bg-muted/30 rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">2. Resistance Training</h3>
        <p className="text-muted-foreground mb-4">
          Strength training signals your body to preserve muscle.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Train 2-4 times per week minimum</li>
          <li>• Focus on compound exercises: squats, deadlifts, presses, rows</li>
          <li>• Progressive overload: gradually increase weight or reps</li>
        </ul>
      </div>

      <div className="p-6 bg-muted/30 rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">3. Moderate Calorie Deficit</h3>
        <p className="text-muted-foreground">
          Don&apos;t eat below 1,200 calories (women) or 1,500 (men). Prioritize protein even
          if overall calories are low.
        </p>
      </div>

      <div className="p-6 bg-muted/30 rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">4. Adequate Recovery</h3>
        <p className="text-muted-foreground">
          Aim for 7-9 hours of sleep nightly. Take rest days between strength training sessions.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Muscle loss on GLP-1 medications isn&apos;t inevitable—it&apos;s preventable with the right
          approach. Prioritize protein (at least 1g per pound of goal weight), strength train
          consistently, don&apos;t cut calories too drastically, and get adequate sleep.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic vs Mounjaro Comparison
export const OzempicVsMounjaro = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Ozempic (semaglutide) and Mounjaro (tirzepatide) are the two most popular GLP-1 medications
      for weight loss and diabetes management. While both are highly effective, they work
      differently and produce different results.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Differences
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Ozempic</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mounjaro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 text-muted-foreground">Mechanism</td>
                <td className="py-3 px-4 text-muted-foreground">GLP-1 only</td>
                <td className="py-3 px-4 text-muted-foreground">GLP-1 + GIP dual</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-muted-foreground">Avg Weight Loss</td>
                <td className="py-3 px-4 text-muted-foreground">~15%</td>
                <td className="py-3 px-4 text-muted-foreground">~20-25%</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-muted-foreground">Max Dose</td>
                <td className="py-3 px-4 text-muted-foreground">2mg</td>
                <td className="py-3 px-4 text-muted-foreground">15mg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Which Should You Choose?
    </h2>

    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-foreground mb-2">Consider Ozempic If:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Your insurance covers it but not Mounjaro</li>
          <li>• You prefer longer track record of data</li>
          <li>• Cost is a significant factor</li>
        </ul>
      </div>
      <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-semibold text-foreground mb-2">Consider Mounjaro If:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Maximizing weight loss is your goal</li>
          <li>• You haven&apos;t responded well to semaglutide</li>
          <li>• You have significant insulin resistance</li>
        </ul>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Both Ozempic and Mounjaro are highly effective. Mounjaro generally produces more
          weight loss (~20-25% vs ~15%), but both transform lives. Your choice may depend on
          insurance coverage, availability, and your personal health goals.
        </p>
      </CardContent>
    </Card>
  </>
);

// How Long Does Ozempic Take to Work?
export const HowLongOzempicWorkContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Starting Ozempic for weight loss or diabetes? One of the most common questions is how
      quickly you&apos;ll see results. The answer depends on what you&apos;re measuring.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Timeline Summary
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Days 1-7:</strong> Appetite reduction begins for many</li>
          <li><strong>Weeks 2-4:</strong> Noticeable appetite suppression</li>
          <li><strong>Weeks 4-8:</strong> Early weight loss (2-5 lbs)</li>
          <li><strong>Months 2-4:</strong> Dose increases, more significant loss</li>
          <li><strong>Months 4-6:</strong> Approaching maintenance dose</li>
          <li><strong>Month 6+:</strong> Maximum results at 12-18 months</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Week-by-Week Breakdown
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Week 1: Starting Dose (0.25mg)</h3>
        <p className="text-sm text-muted-foreground">
          Many people feel appetite reduction within the first few days. Some experience mild
          nausea. This is an adjustment period—don&apos;t expect significant weight loss yet.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Weeks 5-8: First Increase (0.5mg)</h3>
        <p className="text-sm text-muted-foreground">
          Weight loss becomes more consistent—expect 1-2 lbs per week on average. Food noise
          quiets significantly.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Months 2-4: Working Up</h3>
        <p className="text-sm text-muted-foreground">
          Dose increases to 1mg, then 2mg. Monthly losses of 4-8 lbs are common. By month 3-4,
          you may have lost 5-10% of starting weight.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Most people notice appetite changes within 1-2 weeks. Meaningful weight loss typically
          begins by weeks 4-8. Maximum results occur over 12-18 months of treatment. Be patient
          with the titration schedule.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic Shortage: What to Do
export const OzempicShortageContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      The demand for GLP-1 medications has created persistent shortages, leaving many patients
      scrambling for alternatives. If you can&apos;t find Ozempic or Wegovy at your pharmacy,
      here&apos;s what you can do.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Immediate Options
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Call multiple pharmacies—stock varies</li>
          <li>• Ask about different doses</li>
          <li>• Try mail-order pharmacies</li>
          <li>• Consider compounded semaglutide from reputable 503B pharmacies</li>
          <li>• Ask about alternative medications (Mounjaro, Saxenda)</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What If You Miss Doses?
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Missing One Dose</h3>
        <p className="text-sm text-muted-foreground">
          Take it as soon as you remember—unless within 2 days of your next dose. Then skip
          the missed dose and resume your schedule.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Missing Multiple Doses</h3>
        <p className="text-sm text-muted-foreground">
          If you go more than 2 weeks without medication, you may need to restart at a lower
          dose. Contact your doctor for guidance.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 shortages are frustrating but manageable. Call multiple pharmacies, ask about
          different doses, and consider compounded alternatives from reputable sources.
        </p>
      </CardContent>
    </Card>
  </>
);

// What Happens When You Stop Taking Ozempic
export const StopTakingOzempicContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Whether by choice, shortage, or medical necessity, many people wonder what happens when
      they stop taking Ozempic or other GLP-1 medications.
    </p>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Hard Truth
        </h2>
        <p className="text-muted-foreground">
          Most people regain a significant portion of lost weight after stopping GLP-1 medications.
          Studies show an average regain of about two-thirds of lost weight within one year.
          This isn&apos;t a personal failure—it&apos;s biology.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Timeline After Stopping
    </h2>

    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Week 1-2: Appetite Returns</h3>
        <p className="text-sm text-muted-foreground">
          Hunger and cravings begin returning as semaglutide clears your system. The &quot;food
          noise&quot; comes back.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Week 2-4: Full Appetite Return</h3>
        <p className="text-sm text-muted-foreground">
          Appetite typically returns to pre-medication levels. Portion sizes that felt satisfying
          on Ozempic may feel inadequate.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Months 1-12: Weight Regain</h3>
        <p className="text-sm text-muted-foreground">
          Without intervention, weight typically climbs toward pre-medication levels. Most
          regain occurs in the first year.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Strategies for Maintenance
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Build habits while on medication</li>
      <li>Prioritize protein and fiber for satiety</li>
      <li>Maintain exercise routine</li>
      <li>Monitor weight closely—early intervention is easier</li>
      <li>Consider long-term medication if appropriate</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Stopping Ozempic typically leads to appetite return and weight regain—this is normal
          biology. If you must stop, prepare by building strong habits while on medication.
          For many people, long-term medication is the most effective approach.
        </p>
      </CardContent>
    </Card>
  </>
);

// Managing Ozempic Nausea and Side Effects
export const OzempicNauseaContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Nausea is the most common side effect of GLP-1 medications, affecting 40-50% of users.
      The good news? It usually improves over time, and there are proven strategies to minimize
      discomfort while your body adjusts.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Points About GLP-1 Nausea
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Most common during dose increases</li>
          <li>• Usually improves within 4-8 weeks at each dose</li>
          <li>• Eating habits play a major role</li>
          <li>• Rarely severe enough to stop treatment</li>
          <li>• Multiple strategies can help</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Nausea Happens
    </h2>
    <p className="text-muted-foreground mb-6">
      GLP-1 medications slow gastric emptying—food stays in your stomach longer. This creates
      the feeling of fullness that helps with weight loss, but it can also cause nausea,
      especially if you eat too much or too quickly.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Proven Strategies to Reduce Nausea
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Eat Smaller Portions</h3>
        <p className="text-sm text-muted-foreground">
          Your stomach capacity is effectively reduced. Eating half your usual portion prevents
          that &quot;overstuffed&quot; feeling that triggers nausea.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Eat Slowly</h3>
        <p className="text-sm text-muted-foreground">
          Take 20-30 minutes per meal. Put your fork down between bites. This gives your body
          time to signal fullness before you overeat.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Avoid Fatty and Fried Foods</h3>
        <p className="text-sm text-muted-foreground">
          High-fat foods are hardest to digest. They sit in your stomach longest and are most
          likely to trigger nausea. Choose lean proteins and vegetables.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Sip water throughout the day, but avoid drinking large amounts with meals (it fills
          your stomach). Ginger tea can help settle nausea.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Don&apos;t Lie Down After Eating</h3>
        <p className="text-sm text-muted-foreground">
          Stay upright for 1-2 hours after meals to help digestion and reduce reflux.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When to Contact Your Doctor
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground">
        Contact your healthcare provider if you experience:
      </p>
      <ul className="text-muted-foreground mt-2 space-y-1">
        <li>• Vomiting that doesn&apos;t stop</li>
        <li>• Signs of dehydration</li>
        <li>• Severe abdominal pain</li>
        <li>• Nausea that interferes with daily life</li>
        <li>• Symptoms that worsen rather than improve over time</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Nausea from GLP-1 medications is common but usually manageable. Eat smaller portions,
          eat slowly, avoid fatty foods, and give your body time to adjust. Most people find
          nausea improves significantly after a few weeks at each dose level.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and PCOS
export const GLP1AndPCOSContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Polycystic ovary syndrome (PCOS) affects up to 10% of women and is closely linked to
      insulin resistance and weight gain. GLP-1 medications are showing remarkable promise
      for women with PCOS—here&apos;s what the research shows.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Benefits for PCOS
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Significant weight loss (crucial for PCOS management)</li>
          <li>• Improved insulin sensitivity</li>
          <li>• More regular menstrual cycles</li>
          <li>• Reduced androgen levels</li>
          <li>• Improved fertility in some cases</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why GLP-1s Work Well for PCOS
    </h2>
    <p className="text-muted-foreground mb-4">
      PCOS involves insulin resistance, which drives many symptoms—weight gain, irregular periods,
      and elevated androgens. GLP-1 medications address this in multiple ways:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Improve how your body responds to insulin</li>
      <li>Promote weight loss, which itself improves PCOS symptoms</li>
      <li>May directly affect ovarian function</li>
      <li>Reduce inflammation</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Research Results
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          Studies show women with PCOS can achieve 10-15% weight loss on GLP-1 medications—
          enough to significantly improve PCOS symptoms.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Menstrual Regularity</h3>
        <p className="text-sm text-muted-foreground">
          Many women report more regular periods after starting GLP-1 treatment, likely due to
          improved insulin sensitivity and weight loss.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Fertility Implications</h3>
        <p className="text-sm text-muted-foreground">
          Improved ovulation means improved fertility—but GLP-1s are NOT approved for use during
          pregnancy. Reliable contraception is essential.
        </p>
      </div>
    </div>

    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <h3 className="font-semibold text-foreground mb-2">Important Pregnancy Warning</h3>
      <p className="text-sm text-muted-foreground">
        GLP-1 medications can increase fertility by restoring ovulation. If you become more
        fertile while on these medications, pregnancy becomes more likely. Stop GLP-1s at least
        2 months before trying to conceive.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications can be particularly effective for women with PCOS, addressing multiple
          aspects of the condition. However, improved fertility means increased pregnancy risk—
          use reliable contraception and discuss family planning with your doctor.
        </p>
      </CardContent>
    </Card>
  </>
);

// Does Insurance Cover GLP-1 Medications?
export const InsuranceCoverageContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications can cost $1,000-1,500 per month without insurance—a major barrier for
      many people. Understanding insurance coverage and alternatives can help you access these
      medications affordably.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Coverage Overview
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Varies significantly by insurance plan</li>
          <li>• Often requires prior authorization</li>
          <li>• May require documented weight loss attempts</li>
          <li>• Diabetes indication usually covered better than weight loss</li>
          <li>• Medicare Part D now covers some GLP-1s for weight loss</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Factors Affecting Coverage
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Indication (Why It&apos;s Prescribed)</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1s for diabetes (Ozempic, Mounjaro) are more commonly covered than those for
          weight loss (Wegovy, Zepbound). Your doctor may prescribe based on your specific situation.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">BMI Requirements</h3>
        <p className="text-sm text-muted-foreground">
          Most insurers require BMI ≥30, or BMI ≥27 with a weight-related condition (high blood
          pressure, sleep apnea, etc.).
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Prior Authorization</h3>
        <p className="text-sm text-muted-foreground">
          Your doctor usually needs to submit documentation showing you meet criteria. This may
          include previous weight loss attempts, lab work, and diagnoses.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Step Therapy</h3>
        <p className="text-sm text-muted-foreground">
          Some plans require you try cheaper medications first (like metformin or phentermine)
          before approving GLP-1s.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Options Without Insurance Coverage
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Compounded Semaglutide</h3>
        <p className="text-sm text-muted-foreground">
          During brand-name shortages, compounding pharmacies can produce semaglutide at $200-400/month.
          Choose FDA-registered 503B compounding facilities.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Manufacturer Savings Programs</h3>
        <p className="text-sm text-muted-foreground">
          Novo Nordisk and Eli Lilly offer savings cards that can reduce costs significantly
          for those with commercial insurance (not Medicare/Medicaid).
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Telehealth Providers</h3>
        <p className="text-sm text-muted-foreground">
          Online weight loss clinics often offer competitive cash-pay pricing and help navigate
          insurance appeals.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Insurance coverage for GLP-1s is improving but still inconsistent. Work with your doctor
          on prior authorization, explore manufacturer savings programs, and consider compounded
          alternatives if brand-name is unaffordable.
        </p>
      </CardContent>
    </Card>
  </>
);

// Ozempic for Diabetes vs Weight Loss
export const OzempicDiabetesVsWeightLossContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Ozempic was originally FDA-approved for type 2 diabetes, while Wegovy (same medication,
      higher dose) is approved for weight loss. Understanding the differences helps you get
      the right medication for your situation.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Differences
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-foreground">Feature</th>
                <th className="text-left py-2 text-foreground">Ozempic</th>
                <th className="text-left py-2 text-foreground">Wegovy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b">
                <td className="py-2">Active ingredient</td>
                <td className="py-2">Semaglutide</td>
                <td className="py-2">Semaglutide</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">FDA indication</td>
                <td className="py-2">Type 2 diabetes</td>
                <td className="py-2">Weight management</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Max dose</td>
                <td className="py-2">2 mg weekly</td>
                <td className="py-2">2.4 mg weekly</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Insurance</td>
                <td className="py-2">Often covered</td>
                <td className="py-2">Less commonly covered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Using Ozempic for Weight Loss
    </h2>
    <p className="text-muted-foreground mb-4">
      Many people use Ozempic &quot;off-label&quot; for weight loss. This is legal and common—doctors
      can prescribe FDA-approved medications for any purpose they deem appropriate. However:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Insurance may not cover off-label use</li>
      <li>The maximum dose is lower than Wegovy</li>
      <li>It&apos;s the exact same medication, just different dosing and indication</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Which Should You Choose?
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">If You Have Type 2 Diabetes</h3>
        <p className="text-sm text-muted-foreground">
          Ozempic is likely your best option—it&apos;s approved for diabetes, more likely to be
          covered by insurance, and provides weight loss as a bonus.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">If You Need Weight Loss Only</h3>
        <p className="text-sm text-muted-foreground">
          Wegovy is specifically designed for weight management with a higher maximum dose.
          However, insurance coverage can be challenging.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">If Cost Is a Concern</h3>
        <p className="text-sm text-muted-foreground">
          Ozempic may be easier to get covered. Alternatively, compounded semaglutide from
          telehealth providers offers significant savings.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Ozempic and Wegovy are the same medication at different doses. The &quot;right&quot; choice
          depends on your health conditions, insurance coverage, and cost considerations.
          Both produce significant weight loss.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Side Effects Timeline
export const SideEffectsTimelineContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Understanding when side effects typically occur—and when they resolve—helps you prepare
      for your GLP-1 journey and know when to seek medical attention.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Quick Reference
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Most side effects occur during dose increases</li>
          <li>• GI symptoms usually improve within 4-8 weeks</li>
          <li>• Nausea is most common (40-50% of users)</li>
          <li>• Severe side effects are rare but require medical attention</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Week-by-Week Timeline
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-amber-500">
        <h3 className="font-semibold text-foreground mb-2">Week 1-2: Initial Adjustment</h3>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Common:</strong> Mild nausea, decreased appetite, possible headache
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>What to expect:</strong> Your body is adjusting to the medication. Eat smaller
          meals and stay hydrated.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-amber-500">
        <h3 className="font-semibold text-foreground mb-2">Week 3-4: Settling In</h3>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Common:</strong> Nausea often decreasing, constipation may appear
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>What to expect:</strong> Initial side effects start to fade. Increase fiber
          and water if constipated.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-amber-500">
        <h3 className="font-semibold text-foreground mb-2">Dose Increase Periods</h3>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Common:</strong> Return of nausea, GI symptoms for 1-2 weeks
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>What to expect:</strong> Each dose increase may temporarily increase side effects.
          This is normal and usually resolves.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-green-500">
        <h3 className="font-semibold text-foreground mb-2">Month 2-3+: Stabilization</h3>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Common:</strong> Minimal ongoing side effects for most people
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>What to expect:</strong> Most users tolerate the medication well once at maintenance
          dose. Any persistent issues should be discussed with your doctor.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Warning Signs Requiring Medical Attention
    </h2>
    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 mb-6">
      <p className="text-muted-foreground mb-2">
        Contact your doctor immediately if you experience:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Severe, persistent abdominal pain</li>
        <li>• Signs of pancreatitis (pain radiating to back)</li>
        <li>• Vision changes</li>
        <li>• Symptoms of allergic reaction</li>
        <li>• Signs of thyroid problems (neck lump, hoarseness)</li>
        <li>• Severe depression or suicidal thoughts</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 side effects typically follow a predictable pattern: worst during early weeks
          and dose increases, then improving over time. Most people tolerate the medication well
          once stabilized. Serious side effects are rare but require prompt medical attention.
        </p>
      </CardContent>
    </Card>
  </>
);

// Managing Constipation on GLP-1 Medications
export const OzempicConstipationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Constipation affects 20-30% of people on GLP-1 medications—making it one of the most common
      side effects after nausea. Understanding why it happens and how to manage it can help you
      stay comfortable during treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why GLP-1s Cause Constipation
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Slowed gastric emptying means slower gut transit overall</li>
          <li>• Reduced food intake means less fiber and bulk</li>
          <li>• Dehydration from eating less and possible nausea</li>
          <li>• Changes in gut motility from the medication</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Effective Strategies for Relief
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Increase Fiber Intake</h3>
        <p className="text-sm text-muted-foreground">
          Aim for 25-30g of fiber daily. Even with reduced appetite, prioritize vegetables, fruits,
          and whole grains. Fiber supplements like psyllium husk can help if dietary fiber is difficult.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Drink at least 8 glasses of water daily. Fiber without adequate water can worsen constipation.
          Set reminders if you&apos;re not feeling thirsty.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Move Your Body</h3>
        <p className="text-sm text-muted-foreground">
          Physical activity stimulates gut motility. Even a daily 20-minute walk can significantly
          improve bowel function.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Consider Safe Supplements</h3>
        <p className="text-sm text-muted-foreground">
          Magnesium citrate, docusate sodium (stool softener), and polyethylene glycol (MiraLAX)
          are generally safe options. Always check with your doctor first.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Establish a Routine</h3>
        <p className="text-sm text-muted-foreground">
          Try to have bowel movements at the same time daily—often 30 minutes after a meal when
          the gastrocolic reflex is active.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When to Seek Medical Help
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground mb-2">
        Contact your healthcare provider if you experience:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• No bowel movement for more than 3-4 days</li>
        <li>• Severe abdominal pain or bloating</li>
        <li>• Blood in stool</li>
        <li>• Vomiting with constipation</li>
        <li>• Constipation not improving with home remedies</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Constipation on GLP-1 medications is common but manageable. Prioritize fiber, water, and
          movement. If home remedies don&apos;t help, safe over-the-counter options are available.
          Most people find constipation improves as the body adjusts to the medication.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Thyroid Health
export const GLP1ThyroidContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications carry a boxed warning about thyroid C-cell tumors found in animal studies.
      Understanding the real risks and who should avoid these medications is essential for making
      an informed decision.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Thyroid Warning Explained
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Animal studies showed thyroid C-cell tumors in rodents</li>
          <li>• Human relevance is uncertain—rodents have more GLP-1 receptors in thyroid</li>
          <li>• No definitive human cases linked to GLP-1 medications to date</li>
          <li>• FDA requires the warning out of caution</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Should NOT Take GLP-1 Medications
    </h2>
    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 mb-6">
      <p className="text-muted-foreground font-semibold mb-2">
        Absolute Contraindications:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Personal history of medullary thyroid carcinoma (MTC)</li>
        <li>• Family history of MTC</li>
        <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What About Other Thyroid Conditions?
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Hypothyroidism (Underactive Thyroid)</h3>
        <p className="text-sm text-muted-foreground">
          Generally safe to use GLP-1 medications. Your doctor may monitor thyroid levels more
          closely. Hypothyroidism itself can slow weight loss.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Hyperthyroidism (Overactive Thyroid)</h3>
        <p className="text-sm text-muted-foreground">
          Usually fine once thyroid levels are controlled. Discuss timing with your doctor.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Thyroid Nodules</h3>
        <p className="text-sm text-muted-foreground">
          Benign nodules are generally not a contraindication. However, if nodules are suspicious
          or haven&apos;t been evaluated, discuss with your doctor first.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">History of Thyroid Cancer (Other Types)</h3>
        <p className="text-sm text-muted-foreground">
          Papillary, follicular, and anaplastic thyroid cancers are NOT contraindications.
          Only medullary thyroid carcinoma (MTC) is a contraindication.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Warning Signs to Watch For
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground mb-2">
        Report these symptoms to your doctor:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Lump or swelling in the neck</li>
        <li>• Hoarseness that doesn&apos;t go away</li>
        <li>• Trouble swallowing</li>
        <li>• Shortness of breath</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          The thyroid warning is a precaution based on animal studies. For most people, the benefits
          of GLP-1 medications outweigh this theoretical risk. However, those with MTC or MEN 2
          should absolutely avoid these medications.
        </p>
      </CardContent>
    </Card>
  </>
);

// Managing Diarrhea on GLP-1 Medications
export const OzempicDiarrheaContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      While constipation gets more attention, diarrhea affects about 10-15% of GLP-1 users—especially
      during dose increases. Understanding why it happens and how to manage it can help you stay
      comfortable during treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why GLP-1s Can Cause Diarrhea
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Changes in gut motility during adjustment period</li>
          <li>• Altered fat digestion</li>
          <li>• Dietary changes (eating less, different foods)</li>
          <li>• Individual response to medication</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Managing GLP-1-Related Diarrhea
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Avoid Trigger Foods</h3>
        <p className="text-sm text-muted-foreground">
          Fatty, greasy, and fried foods are common triggers. Spicy foods, caffeine, and alcohol
          can also worsen diarrhea. Stick to bland foods during flare-ups.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Diarrhea can cause dehydration quickly. Drink plenty of water and consider electrolyte
          drinks if diarrhea persists. Watch for signs of dehydration.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Try the BRAT Diet</h3>
        <p className="text-sm text-muted-foreground">
          Bananas, rice, applesauce, and toast can help firm up stools. These bland foods are
          easy on the digestive system during flare-ups.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Consider Probiotics</h3>
        <p className="text-sm text-muted-foreground">
          Some people find probiotics help stabilize gut function. Look for strains like
          Saccharomyces boulardii, which is specifically studied for diarrhea.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When It&apos;s More Serious
    </h2>
    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 mb-6">
      <p className="text-muted-foreground mb-2">
        Seek medical attention if you experience:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Diarrhea lasting more than 2-3 days</li>
        <li>• Signs of dehydration (dark urine, dizziness, dry mouth)</li>
        <li>• Blood in stool</li>
        <li>• Severe abdominal pain</li>
        <li>• Fever along with diarrhea</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Diarrhea on GLP-1 medications is usually temporary and manageable. Avoid trigger foods,
          stay hydrated, and give your body time to adjust. Most people find GI symptoms improve
          within a few weeks at each dose level.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Hair Loss
export const GLP1HairLossContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Hair loss is an increasingly reported concern among GLP-1 users. While not listed as a common
      side effect, many people notice increased shedding during treatment. Here&apos;s what the science
      says and what you can do about it.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Points About GLP-1 and Hair Loss
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Hair loss is linked to rapid weight loss, not necessarily the medication itself</li>
          <li>• This type of hair loss is called telogen effluvium</li>
          <li>• It&apos;s usually temporary and reversible</li>
          <li>• Nutritional deficiencies during weight loss can contribute</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Rapid Weight Loss Causes Hair Loss
    </h2>
    <p className="text-muted-foreground mb-4">
      When your body experiences significant stress—including rapid weight loss—it can shift hair
      follicles into the &quot;resting&quot; phase (telogen). About 2-3 months later, these hairs fall out.
      This is your body&apos;s way of conserving resources for essential functions.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How to Minimize Hair Loss
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Prioritize Protein</h3>
        <p className="text-sm text-muted-foreground">
          Hair is made of protein. Aim for 60-100g daily, depending on your body weight. This is
          crucial when eating less overall. Focus on lean meats, fish, eggs, and legumes.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Take Key Supplements</h3>
        <p className="text-sm text-muted-foreground">
          Biotin, iron, zinc, and vitamin D all support hair health. A good multivitamin can help
          fill nutritional gaps when eating less. Check levels with your doctor.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Don&apos;t Lose Too Fast</h3>
        <p className="text-sm text-muted-foreground">
          Extremely rapid weight loss increases hair loss risk. A steady 1-2 pounds per week is
          healthier for your hair (and overall health) than 5+ pounds per week.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Be Gentle with Your Hair</h3>
        <p className="text-sm text-muted-foreground">
          Avoid tight hairstyles, excessive heat styling, and harsh chemical treatments during
          this time. Use a gentle shampoo and wide-tooth comb.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When to Expect Recovery
    </h2>
    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 mb-6">
      <p className="text-muted-foreground">
        Telogen effluvium is self-limiting. Once your weight stabilizes and nutrition improves,
        hair typically regrows over 6-12 months. Most people see significant improvement once
        they reach their maintenance phase.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Hair loss during GLP-1 treatment is usually due to rapid weight loss and nutritional
          changes, not the medication itself. Prioritize protein, consider supplements, and be
          patient—hair typically regrows once weight stabilizes.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Heart Health
export const GLP1HeartHealthContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Beyond weight loss, GLP-1 medications have shown remarkable cardiovascular benefits. In fact,
      semaglutide was recently FDA-approved specifically to reduce heart disease risk—a major
      milestone for these medications.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Proven Cardiovascular Benefits
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• 20% reduction in major cardiovascular events (SELECT trial)</li>
          <li>• Reduced risk of heart attack and stroke</li>
          <li>• Improvements in blood pressure</li>
          <li>• Better cholesterol profiles</li>
          <li>• Reduced inflammation markers</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The SELECT Trial: Groundbreaking Results
    </h2>
    <p className="text-muted-foreground mb-4">
      The SELECT trial studied over 17,000 people with cardiovascular disease but without diabetes.
      Key findings include:
    </p>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">20% Risk Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Participants taking semaglutide had 20% fewer heart attacks, strokes, and cardiovascular
          deaths compared to placebo.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Benefits Beyond Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          Cardiovascular benefits appeared to extend beyond what weight loss alone would explain,
          suggesting direct effects on heart and blood vessels.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How GLP-1s Improve Heart Health
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          Losing even 5-10% of body weight significantly reduces cardiovascular risk factors.
          GLP-1s typically produce 15-20% weight loss.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Blood Pressure Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Studies show 4-6 mmHg reductions in systolic blood pressure on average—meaningful for
          cardiovascular risk.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Improved Cholesterol</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1s improve lipid profiles, particularly reducing triglycerides and small dense
          LDL particles.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Reduced Inflammation</h3>
        <p className="text-sm text-muted-foreground">
          These medications reduce C-reactive protein and other inflammatory markers linked to
          heart disease.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Heart Rate Considerations
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground">
        GLP-1 medications typically increase resting heart rate by 2-4 beats per minute. For most
        people, this is not clinically significant and doesn&apos;t offset the cardiovascular benefits.
        However, discuss with your doctor if you have heart rhythm concerns.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications offer significant cardiovascular benefits beyond weight loss. The SELECT
          trial showed a 20% reduction in major cardiovascular events. For people with obesity and
          heart disease risk, these medications may offer dual benefits.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Sleep Apnea
export const GLP1SleepApneaContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Obstructive sleep apnea affects up to 70% of people with obesity. GLP-1 medications are showing
      remarkable benefits for sleep apnea—Eli Lilly&apos;s tirzepatide recently became the first drug
      ever approved specifically to treat obstructive sleep apnea in adults with obesity.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Research Findings
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Tirzepatide reduced sleep apnea severity by up to 63%</li>
          <li>• Many participants no longer needed CPAP machines</li>
          <li>• Improvements seen as early as 12 weeks</li>
          <li>• Benefits extended beyond what weight loss alone would explain</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How Weight Loss Improves Sleep Apnea
    </h2>
    <p className="text-muted-foreground mb-4">
      Excess weight—especially around the neck and upper airway—contributes to airway collapse
      during sleep. Weight loss from GLP-1 medications helps in several ways:
    </p>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Reduced Neck Circumference</h3>
        <p className="text-sm text-muted-foreground">
          Fat deposits around the neck decrease, reducing pressure on the airway during sleep.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Less Abdominal Fat</h3>
        <p className="text-sm text-muted-foreground">
          Reduced belly fat improves lung capacity and breathing mechanics.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Decreased Inflammation</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications reduce systemic inflammation, which can contribute to airway narrowing.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What This Means for CPAP Users
    </h2>
    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 mb-6">
      <p className="text-muted-foreground">
        Many people on GLP-1 medications find they can reduce or eliminate CPAP use as their
        sleep apnea improves. However, always work with your sleep doctor—don&apos;t stop CPAP
        without a follow-up sleep study confirming improvement.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications can dramatically improve sleep apnea—tirzepatide is now FDA-approved
          specifically for this purpose. Many patients see significant improvement in their sleep
          quality and may reduce reliance on CPAP therapy.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Kidney Health
export const GLP1KidneyHealthContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Beyond weight loss, GLP-1 medications show significant kidney-protective effects. Recent trials
      demonstrate that semaglutide can slow kidney disease progression—a major benefit for people
      with diabetes or obesity-related kidney damage.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Kidney Benefits of GLP-1 Medications
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Reduced progression of chronic kidney disease</li>
          <li>• Lower risk of kidney failure requiring dialysis</li>
          <li>• Decreased protein in urine (albuminuria)</li>
          <li>• Protection independent of blood sugar control</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The FLOW Trial Results
    </h2>
    <p className="text-muted-foreground mb-4">
      The FLOW trial studied semaglutide in people with type 2 diabetes and chronic kidney disease.
      Results showed:
    </p>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">24% Risk Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Semaglutide reduced major kidney events by 24%—including kidney failure, dialysis, and
          significant kidney function decline.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Trial Stopped Early</h3>
        <p className="text-sm text-muted-foreground">
          Benefits were so clear that the trial was stopped early—participants on placebo were
          switched to semaglutide to receive the benefit.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Using GLP-1s with Kidney Disease
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Mild to Moderate Kidney Disease</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications can generally be used without dose adjustment in mild to moderate
          kidney disease.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Severe Kidney Disease</h3>
        <p className="text-sm text-muted-foreground">
          Use with caution and close monitoring. Limited data in severe kidney disease or dialysis
          patients.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Hydration Is Key</h3>
        <p className="text-sm text-muted-foreground">
          GI side effects like nausea and vomiting can cause dehydration, which can worsen kidney
          function. Stay well hydrated, especially during the first weeks of treatment.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications offer significant kidney protection beyond their weight loss benefits.
          The FLOW trial showed semaglutide can slow kidney disease progression by 24%. For people
          with obesity and kidney concerns, these medications may offer dual benefits.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Fatty Liver Disease
export const GLP1FattyLiverContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Non-alcoholic fatty liver disease (NAFLD) affects up to 80% of people with obesity. GLP-1
      medications are showing remarkable promise for treating this condition—potentially preventing
      progression to more serious liver disease.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How GLP-1s Help Fatty Liver
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Reduce fat accumulation in the liver</li>
          <li>• Decrease liver inflammation</li>
          <li>• May reverse early-stage fibrosis (scarring)</li>
          <li>• Improve liver enzyme levels</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Research Results
    </h2>
    <p className="text-muted-foreground mb-4">
      Multiple studies have shown significant improvements in liver health with GLP-1 treatment:
    </p>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Fat Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Studies show 30-70% reduction in liver fat content with GLP-1 medications—greater than
          lifestyle changes alone.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">NASH Resolution</h3>
        <p className="text-sm text-muted-foreground">
          In trials, 40-60% of patients with NASH (inflammatory fatty liver disease) saw resolution
          of inflammation without worsening fibrosis.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Fibrosis Improvement</h3>
        <p className="text-sm text-muted-foreground">
          Some patients showed actual improvement in liver fibrosis—suggesting these medications
          may help reverse early liver damage.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Liver Health Matters
    </h2>
    <p className="text-muted-foreground mb-6">
      Fatty liver disease can progress from simple fat accumulation to inflammation (NASH),
      then to scarring (fibrosis), and eventually cirrhosis or liver cancer. Early intervention
      with GLP-1 medications may prevent this progression.
    </p>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications show significant promise for fatty liver disease, reducing liver fat
          and inflammation while potentially reversing early fibrosis. For people with obesity
          and fatty liver, these medications may provide important liver protection.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Menstruation
export const GLP1MenstruationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Many women report changes to their menstrual cycles while on GLP-1 medications. From more
      regular periods to heavier bleeding or spotting, understanding what to expect can help you
      navigate these changes.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Common Menstrual Changes Reported
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• More regular cycles (especially in women with PCOS)</li>
          <li>• Heavier or lighter periods</li>
          <li>• Spotting between periods</li>
          <li>• Changes in PMS symptoms</li>
          <li>• Unexpected pregnancy (due to improved fertility)</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why GLP-1s Affect Menstruation
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Weight Loss Effects</h3>
        <p className="text-sm text-muted-foreground">
          Rapid weight loss affects hormone levels—fat tissue produces estrogen, so losing fat
          can temporarily disrupt hormonal balance.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Improved Insulin Sensitivity</h3>
        <p className="text-sm text-muted-foreground">
          Better insulin function improves ovarian hormone production, which can normalize
          irregular periods—especially in women with PCOS.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Birth Control Interaction</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 medications may affect oral birth control absorption due to delayed gastric
          emptying. Consider backup contraception, especially during GI side effects.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Important Fertility Warning
    </h2>
    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 mb-6">
      <p className="text-muted-foreground mb-2">
        <strong>Pregnancy risk increases on GLP-1 medications:</strong>
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Weight loss and improved insulin sensitivity can restore ovulation</li>
        <li>• &quot;Ozempic babies&quot; are pregnancies in women who thought they couldn&apos;t conceive</li>
        <li>• Use reliable non-oral contraception if not trying to conceive</li>
        <li>• Stop GLP-1 medications 2 months before trying to conceive</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When to See Your Doctor
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground">
        Contact your healthcare provider if you experience: very heavy bleeding, periods lasting
        more than 7 days, severe pain, bleeding between periods that persists, or if you think
        you might be pregnant.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Menstrual changes are common on GLP-1 medications due to weight loss and hormonal shifts.
          Many women see improvements, especially if they had irregular periods before. Be aware
          of increased fertility and use appropriate contraception if not planning pregnancy.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Healthy Aging
export const GLP1AgingContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications may offer benefits beyond weight loss and metabolic health. Emerging research
      suggests these medications might support healthy aging by reducing inflammation, protecting
      organs, and potentially influencing longevity pathways.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Potential Anti-Aging Benefits
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Reduced systemic inflammation</li>
          <li>• Cardiovascular protection</li>
          <li>• Neuroprotective effects (under investigation)</li>
          <li>• Improved metabolic health markers</li>
          <li>• Potential cellular-level benefits</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Research Areas of Interest
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Brain Health</h3>
        <p className="text-sm text-muted-foreground">
          Studies are investigating whether GLP-1 medications might protect against cognitive
          decline and neurodegenerative diseases like Alzheimer&apos;s. Early results are promising
          but inconclusive.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Inflammation Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Chronic low-grade inflammation accelerates aging. GLP-1 medications significantly reduce
          inflammatory markers like CRP—a known contributor to age-related diseases.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Organ Protection</h3>
        <p className="text-sm text-muted-foreground">
          Heart, kidney, and liver protection from GLP-1 medications may help these organs
          function better for longer—a key component of healthy aging.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Metabolic Health</h3>
        <p className="text-sm text-muted-foreground">
          Improved blood sugar control, insulin sensitivity, and body composition all contribute
          to healthier aging and reduced disease risk.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      GLP-1 Use in Older Adults
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground">
        Older adults can safely use GLP-1 medications, but should be mindful of: increased
        dehydration risk, importance of maintaining muscle mass (prioritize protein), and
        starting at lower doses. Work closely with your healthcare provider.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          While GLP-1 medications aren&apos;t approved as anti-aging treatments, their effects on
          inflammation, organ protection, and metabolic health may contribute to healthier aging.
          Research is ongoing—these medications may have benefits we&apos;re only beginning to understand.
        </p>
      </CardContent>
    </Card>
  </>
);

// Managing Headaches on GLP-1 Medications
export const OzempicHeadachesContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Headaches are reported by 10-15% of people starting GLP-1 medications. While usually mild
      and temporary, understanding why they happen and how to manage them can help you stay
      comfortable during treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why GLP-1s May Cause Headaches
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Dehydration from reduced fluid intake or GI side effects</li>
          <li>• Blood sugar changes during adjustment period</li>
          <li>• Reduced calorie intake (similar to dieting headaches)</li>
          <li>• Caffeine reduction if changing eating habits</li>
          <li>• Temporary adjustment as body adapts</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Tips for Relief
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Stay Well Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Dehydration is the most common cause. Aim for 8+ glasses of water daily. Set reminders
          if you&apos;re not feeling thirsty due to appetite suppression.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Eat Regularly</h3>
        <p className="text-sm text-muted-foreground">
          Even with reduced appetite, try to eat small meals throughout the day. Skipping meals
          can trigger headaches from low blood sugar.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Monitor Caffeine Intake</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;ve reduced coffee or soda due to appetite changes, caffeine withdrawal can cause
          headaches. Taper gradually rather than stopping suddenly.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Over-the-Counter Pain Relief</h3>
        <p className="text-sm text-muted-foreground">
          Acetaminophen or ibuprofen can help occasional headaches. Avoid overuse, which can cause
          rebound headaches.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When to Seek Medical Attention
    </h2>
    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 mb-6">
      <p className="text-muted-foreground mb-2">
        Contact your doctor if you experience:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Severe or sudden headaches</li>
        <li>• Headaches with vision changes</li>
        <li>• Headaches with confusion or slurred speech</li>
        <li>• Persistent headaches that don&apos;t improve</li>
        <li>• Headaches with fever or stiff neck</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Headaches on GLP-1 medications are usually mild and related to dehydration or dietary
          changes. Stay hydrated, eat regularly, and taper caffeine gradually. Most headaches
          resolve within the first few weeks of treatment.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Anxiety
export const GLP1AnxietyContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Some people report changes in mood or anxiety while on GLP-1 medications. Understanding
      the relationship between these medications and mental health can help you make informed
      decisions and know when to seek support.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What the Research Shows
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• No consistent link between GLP-1s and increased anxiety</li>
          <li>• Some people report improvement in mood (likely weight-loss related)</li>
          <li>• Others report temporary mood changes during adjustment</li>
          <li>• Rapid lifestyle changes can affect mental health</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Possible Causes of Mood Changes
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Hormonal Shifts</h3>
        <p className="text-sm text-muted-foreground">
          Rapid weight loss affects hormone levels, including those that regulate mood. This
          is usually temporary as the body adjusts.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Blood Sugar Fluctuations</h3>
        <p className="text-sm text-muted-foreground">
          Changes in blood sugar can affect mood and energy. Eating regular, balanced meals
          helps stabilize blood sugar levels.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Relationship with Food</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;ve used food for emotional comfort, reduced appetite may feel unsettling at
          first. This adjustment is normal but worth discussing with a professional if difficult.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Physical Side Effects</h3>
        <p className="text-sm text-muted-foreground">
          Dealing with nausea, fatigue, or other side effects can increase stress and affect
          mood temporarily.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Managing Mental Health on GLP-1s
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Maintain Support Systems</h3>
        <p className="text-sm text-muted-foreground">
          Stay connected with friends, family, or support groups. Weight loss journeys can be
          emotional, and support helps.
        </p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Continue Mental Health Treatment</h3>
        <p className="text-sm text-muted-foreground">
          If you&apos;re already seeing a therapist or taking medication for anxiety, continue
          treatment and inform your provider about starting GLP-1s.
        </p>
      </div>
    </div>

    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <h3 className="font-semibold text-foreground mb-2">When to Get Help</h3>
      <p className="text-sm text-muted-foreground">
        Contact your healthcare provider if you experience persistent anxiety, panic attacks,
        depression, or thoughts of self-harm. These warrant immediate attention.
      </p>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications don&apos;t consistently cause anxiety, but the lifestyle changes they
          enable can affect mood. Monitor your mental health, maintain support systems, and
          communicate with your healthcare providers about any concerns.
        </p>
      </CardContent>
    </Card>
  </>
);

// Managing Fatigue on GLP-1 Medications
export const OzempicFatigueContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Fatigue is reported by some people starting GLP-1 medications, especially during the
      initial weeks. Understanding the causes and solutions can help you maintain your energy
      levels during treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Common Causes of Fatigue
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Reduced calorie intake (your body is adjusting)</li>
          <li>• Dehydration from GI side effects</li>
          <li>• Blood sugar changes</li>
          <li>• Nutrient deficiencies from eating less</li>
          <li>• Poor sleep from lifestyle changes</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Strategies to Boost Energy
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Prioritize Protein</h3>
        <p className="text-sm text-muted-foreground">
          Protein provides sustained energy. Aim for 60-100g daily, even with reduced appetite.
          Start meals with protein to ensure you get enough.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Stay Hydrated</h3>
        <p className="text-sm text-muted-foreground">
          Dehydration is a major cause of fatigue. Aim for 8+ glasses of water daily. Add
          electrolytes if you&apos;ve had GI issues.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Don&apos;t Skip Meals</h3>
        <p className="text-sm text-muted-foreground">
          Even if not hungry, eat small, regular meals to maintain blood sugar and energy.
          Extreme calorie restriction leads to fatigue.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Consider a Multivitamin</h3>
        <p className="text-sm text-muted-foreground">
          Eating less can lead to vitamin deficiencies. A daily multivitamin, especially
          with B vitamins and iron, can help maintain energy.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Light Exercise</h3>
        <p className="text-sm text-muted-foreground">
          It seems counterintuitive, but light activity like walking can actually boost energy
          levels. Start slow and listen to your body.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When Fatigue May Indicate a Problem
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <p className="text-muted-foreground mb-2">
        See your doctor if fatigue is:
      </p>
      <ul className="text-muted-foreground space-y-1">
        <li>• Severe or debilitating</li>
        <li>• Getting worse over time</li>
        <li>• Accompanied by other symptoms (dizziness, rapid heartbeat)</li>
        <li>• Not improving after several weeks</li>
      </ul>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Fatigue on GLP-1 medications is usually temporary and related to reduced calorie intake
          and adjustment period. Prioritize protein, hydration, and regular meals. Most people
          find their energy improves as their body adapts.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Joint Pain
export const GLP1JointPainContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Joint pain is occasionally reported by people on GLP-1 medications. Interestingly, while
      some experience new discomfort, many others find their joint pain improves with weight
      loss. Here&apos;s what you need to know.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Complex Picture
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Joint pain is not a common side effect in clinical trials</li>
          <li>• Weight loss typically improves joint pain over time</li>
          <li>• Some people report temporary discomfort during rapid weight loss</li>
          <li>• New exercise routines may cause muscle/joint soreness</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Some People Experience Joint Issues
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Rapid Weight Loss Effects</h3>
        <p className="text-sm text-muted-foreground">
          Losing weight quickly can temporarily affect how your body moves and puts stress on
          joints that are adjusting to new mechanics.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Increased Activity</h3>
        <p className="text-sm text-muted-foreground">
          Many people become more active as they lose weight. New or increased exercise can
          cause temporary muscle and joint soreness.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Dehydration</h3>
        <p className="text-sm text-muted-foreground">
          Joint cartilage needs water to stay healthy. Dehydration from GI side effects can
          temporarily increase joint stiffness.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Good News: Long-Term Benefits
    </h2>
    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 mb-6">
      <p className="text-muted-foreground">
        Weight loss significantly reduces joint stress. Every pound lost removes about 4 pounds
        of pressure from your knees. Most people with obesity-related joint pain see substantial
        improvement as they lose weight on GLP-1 medications.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Managing Joint Discomfort
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Stay well hydrated for joint lubrication</li>
      <li>Start new exercise gradually</li>
      <li>Consider low-impact activities (swimming, cycling)</li>
      <li>Use over-the-counter anti-inflammatories as needed</li>
      <li>Apply ice or heat for temporary relief</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          While some people experience temporary joint discomfort on GLP-1 medications, most
          find their joint pain improves significantly with weight loss. Stay hydrated, start
          exercise gradually, and give your body time to adjust.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications and Blood Pressure
export const GLP1BloodPressureContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications typically lower blood pressure—a significant benefit for people with
      hypertension. Understanding how these medications affect blood pressure can help you
      and your doctor optimize your treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Blood Pressure Benefits
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>• Average reduction of 4-6 mmHg systolic</li>
          <li>• Effects seen independent of weight loss</li>
          <li>• May reduce need for blood pressure medications</li>
          <li>• Part of overall cardiovascular protection</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How GLP-1s Lower Blood Pressure
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Weight Loss</h3>
        <p className="text-sm text-muted-foreground">
          Losing 10% of body weight can reduce systolic blood pressure by 5-10 mmHg. GLP-1s
          produce significant weight loss.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Direct Vascular Effects</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 receptors in blood vessels may promote relaxation and improve blood flow,
          independent of weight loss.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Reduced Sodium Retention</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1s may increase sodium excretion through the kidneys, helping to lower blood
          pressure naturally.
        </p>
      </div>

      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Improved Insulin Sensitivity</h3>
        <p className="text-sm text-muted-foreground">
          Better insulin function is associated with healthier blood vessel function and
          lower blood pressure.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Important Considerations
    </h2>
    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
      <h3 className="font-semibold text-foreground mb-2">If You Take Blood Pressure Medications</h3>
      <p className="text-sm text-muted-foreground">
        As GLP-1s lower your blood pressure, you may need to reduce blood pressure medications
        to avoid hypotension (low blood pressure). Monitor regularly and work with your doctor
        to adjust medications as needed.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Signs of Low Blood Pressure
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Dizziness, especially when standing</li>
      <li>Lightheadedness or feeling faint</li>
      <li>Fatigue</li>
      <li>Blurred vision</li>
      <li>Nausea</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications typically lower blood pressure by 4-6 mmHg—a meaningful cardiovascular
          benefit. If you take blood pressure medications, monitor closely and work with your
          doctor to adjust doses as needed to prevent hypotension.
        </p>
      </CardContent>
    </Card>
  </>
);

export const GLP1AndDigestionContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications work directly on the digestive system, slowing gastric emptying
      and altering gut motility. Understanding these effects helps you manage your
      treatment more effectively and recognize what's normal versus concerning.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How GLP-1s Affect Digestion
        </h2>
        <p className="text-muted-foreground mb-4">
          GLP-1 receptors are abundant throughout the gastrointestinal tract. When activated,
          these medications slow down how quickly food leaves your stomach (delayed gastric
          emptying), which contributes to feeling full longer but can also cause digestive changes.
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Delayed gastric emptying:</strong> Food stays in stomach 30-50% longer</li>
          <li><strong>Reduced appetite:</strong> Brain signaling decreases hunger</li>
          <li><strong>Slower intestinal transit:</strong> Food moves more slowly through gut</li>
          <li><strong>Altered gut hormones:</strong> Changes in digestive enzyme secretion</li>
          <li><strong>Microbiome shifts:</strong> Some studies show gut bacteria changes</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Common Digestive Side Effects
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground">Nausea (Most Common)</h3>
            <p>Affects 20-50% of users initially. Usually improves within 4-8 weeks as your body adapts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Constipation</h3>
            <p>Slowed gut motility can reduce bowel frequency. Fiber and hydration help significantly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Diarrhea</h3>
            <p>Less common but can occur, especially when eating high-fat foods.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Bloating and Gas</h3>
            <p>Food fermenting longer in the gut can increase gas production.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Acid Reflux</h3>
            <p>Slower stomach emptying can worsen GERD symptoms in some people.</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Dietary Strategies for Better Digestion
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Eat smaller portions:</strong> Your stomach capacity effectively feels smaller</li>
          <li><strong>Chew thoroughly:</strong> Aids digestion and signals fullness</li>
          <li><strong>Avoid fatty/greasy foods:</strong> These digest slowest and cause most issues</li>
          <li><strong>Stay upright after eating:</strong> Helps prevent reflux</li>
          <li><strong>Space meals out:</strong> Allow 4-6 hours between substantial meals</li>
          <li><strong>Prioritize protein first:</strong> Eat protein before carbs and fats</li>
          <li><strong>Stay hydrated:</strong> Drink water between meals, not during</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          When to Seek Medical Attention
        </h3>
        <p className="text-muted-foreground">
          Contact your doctor if you experience severe abdominal pain, persistent vomiting
          (unable to keep fluids down), signs of dehydration, blood in stool, or symptoms
          of pancreatitis. Some digestive effects require dose adjustment or medication change.
        </p>
      </CardContent>
    </Card>
  </>
);

export const GLP1MealTimingContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      When you eat matters almost as much as what you eat on GLP-1 medications. Strategic
      meal timing can minimize side effects, maximize satiety, and help you get the most
      from your treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Meal Timing Matters on GLP-1s
        </h2>
        <p className="text-muted-foreground mb-4">
          GLP-1 medications slow gastric emptying significantly—food can stay in your stomach
          30-50% longer than normal. This means traditional eating patterns often need adjustment
          to avoid overfullness, nausea, and other digestive issues.
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Smaller, more frequent meals often work better than 3 large meals</li>
          <li>Eating when genuinely hungry (not by the clock) improves tolerance</li>
          <li>Morning appetite often decreases significantly</li>
          <li>Nighttime eating can worsen reflux symptoms</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Recommended Meal Patterns
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground">Pattern 1: Three Small Meals + Snack</h3>
            <p>Light breakfast (if hungry), moderate lunch, smaller dinner, optional afternoon protein snack.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Pattern 2: Two Meals + Snacks</h3>
            <p>Skip breakfast if not hungry, substantial lunch, light dinner, protein snacks as needed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Pattern 3: Grazing</h3>
            <p>5-6 very small protein-focused mini-meals throughout the day—good for severe nausea.</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Timing Tips for Best Results
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Wait for hunger cues:</strong> Don't force yourself to eat on a schedule</li>
          <li><strong>Stop eating before full:</strong> Fullness signals are delayed</li>
          <li><strong>Allow 4+ hours between meals:</strong> Give your stomach time to empty</li>
          <li><strong>Finish eating 3+ hours before bed:</strong> Prevents reflux and discomfort</li>
          <li><strong>Front-load protein:</strong> Eat protein early in the day for energy</li>
          <li><strong>Take medication consistently:</strong> Same day/time each week for injectables</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          Key Takeaway
        </h3>
        <p className="text-muted-foreground">
          Listen to your body rather than the clock. Most people naturally shift to eating
          less frequently on GLP-1 medications. Honor your new hunger patterns while ensuring
          adequate protein and hydration throughout the day.
        </p>
      </CardContent>
    </Card>
  </>
);

export const GLP1HydrationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Proper hydration is critical on GLP-1 medications. Reduced appetite often means
      drinking less, while side effects like nausea and constipation can worsen dehydration.
      Here's how to stay properly hydrated during treatment.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Hydration Matters More on GLP-1s
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Reduced thirst:</strong> GLP-1s can decrease thirst sensation</li>
          <li><strong>Less food intake:</strong> You get less water from food when eating less</li>
          <li><strong>Constipation risk:</strong> Dehydration worsens GLP-1 constipation</li>
          <li><strong>Nausea management:</strong> Proper hydration can reduce nausea</li>
          <li><strong>Kidney protection:</strong> Adequate fluids support kidney function</li>
          <li><strong>Energy levels:</strong> Even mild dehydration causes fatigue</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How Much Water Do You Need?
        </h2>
        <p className="text-muted-foreground mb-4">
          A general guideline is to drink half your body weight in ounces daily. For a
          200-pound person, that's 100 ounces (about 3 liters). Adjust upward for exercise,
          heat, or if experiencing vomiting or diarrhea.
        </p>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-foreground">Body Weight</span>
            <span className="font-semibold text-foreground">Daily Water Goal</span>
          </div>
          <div className="flex justify-between">
            <span>150 lbs</span>
            <span>75 oz (2.2L)</span>
          </div>
          <div className="flex justify-between">
            <span>200 lbs</span>
            <span>100 oz (3L)</span>
          </div>
          <div className="flex justify-between">
            <span>250 lbs</span>
            <span>125 oz (3.7L)</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Smart Hydration Strategies
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Drink between meals:</strong> Large amounts with food can worsen nausea</li>
          <li><strong>Set reminders:</strong> Don't rely on thirst—it may be suppressed</li>
          <li><strong>Start the day with water:</strong> Drink 16 oz before anything else</li>
          <li><strong>Carry a water bottle:</strong> Visual reminder to keep drinking</li>
          <li><strong>Track intake:</strong> Use an app or marks on your bottle</li>
          <li><strong>Flavor your water:</strong> Lemon, cucumber, or sugar-free flavoring</li>
          <li><strong>Include electrolytes:</strong> Especially if experiencing nausea or diarrhea</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          Signs of Dehydration
        </h3>
        <p className="text-muted-foreground">
          Watch for dark urine, headaches, dizziness, dry mouth, fatigue, and reduced
          urination. If you experience severe dehydration with vomiting, seek medical
          attention—you may need IV fluids.
        </p>
      </CardContent>
    </Card>
  </>
);

export const GLP1ProteinNeedsContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Getting adequate protein is perhaps the most important nutritional focus on GLP-1
      medications. Reduced appetite makes it challenging, but prioritizing protein
      preserves muscle mass and supports healthy weight loss.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Protein Is Critical on GLP-1s
        </h2>
        <p className="text-muted-foreground mb-4">
          Rapid weight loss from any cause can lead to muscle loss. Studies show that
          up to 40% of weight lost can be muscle mass without adequate protein and exercise.
          Muscle loss slows metabolism and can make weight regain more likely.
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Preserves lean muscle mass during weight loss</li>
          <li>Maintains metabolic rate</li>
          <li>Promotes satiety (helps you feel full longer)</li>
          <li>Supports immune function and wound healing</li>
          <li>Prevents the "skinny fat" appearance</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How Much Protein Do You Need?
        </h2>
        <p className="text-muted-foreground mb-4">
          Most experts recommend 0.7-1.0 grams of protein per pound of body weight
          (or per pound of goal weight if significantly overweight). This is higher
          than general population recommendations.
        </p>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-foreground">Body Weight</span>
            <span className="font-semibold text-foreground">Daily Protein Goal</span>
          </div>
          <div className="flex justify-between">
            <span>150 lbs</span>
            <span>105-150g</span>
          </div>
          <div className="flex justify-between">
            <span>200 lbs</span>
            <span>140-200g</span>
          </div>
          <div className="flex justify-between">
            <span>250 lbs</span>
            <span>175-200g (use goal weight)</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Best Protein Sources
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Lean meats:</strong> Chicken, turkey, lean beef (25-30g per 4 oz)</li>
          <li><strong>Fish and seafood:</strong> Salmon, tuna, shrimp (20-25g per 4 oz)</li>
          <li><strong>Eggs:</strong> Easy to digest (6g per egg)</li>
          <li><strong>Greek yogurt:</strong> High protein, good for nausea (15-20g per cup)</li>
          <li><strong>Cottage cheese:</strong> Excellent protein density (25g per cup)</li>
          <li><strong>Protein shakes:</strong> Convenient when eating is difficult (20-40g)</li>
          <li><strong>Legumes:</strong> Beans, lentils (15g per cup)</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          Pro Tip: Protein First
        </h3>
        <p className="text-muted-foreground">
          With reduced appetite, you may not finish meals. Always eat your protein
          first before moving to vegetables and carbs. This ensures you hit your
          protein goals even when you can't eat much.
        </p>
      </CardContent>
    </Card>
  </>
);

export const GLP1SurgeryGuideContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      If you're on GLP-1 medications and have upcoming surgery, proper preparation is
      essential. These medications slow gastric emptying, which can affect anesthesia
      safety. Here's what you need to know.
    </p>

    <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Important: Aspiration Risk
        </h2>
        <p className="text-muted-foreground">
          GLP-1 medications slow stomach emptying, meaning food may remain in your
          stomach longer than normal. This increases the risk of aspiration (stomach
          contents entering the lungs) during anesthesia—a serious complication.
          Always tell your surgical team about your GLP-1 medication.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Current Guidelines (2025)
        </h2>
        <p className="text-muted-foreground mb-4">
          The American Society of Anesthesiologists recommends:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Weekly injections (Ozempic, Mounjaro):</strong> Hold for 1 week before surgery</li>
          <li><strong>Daily medications (Rybelsus):</strong> Hold for 1 day before surgery</li>
          <li><strong>GI symptoms present:</strong> Consider delaying elective surgery</li>
          <li><strong>Emergency surgery:</strong> Treat as full stomach; use rapid sequence intubation</li>
        </ul>
        <p className="text-muted-foreground mt-4 text-sm">
          Note: Guidelines evolve. Always follow your specific surgical team's instructions.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Pre-Surgery Checklist
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Inform your surgeon AND anesthesiologist about your GLP-1 medication</li>
          <li>Ask about specific timing for your last dose</li>
          <li>Follow liquid diet instructions carefully (often 24-48 hours)</li>
          <li>Report any nausea, vomiting, or bloating to your surgical team</li>
          <li>Confirm fasting instructions (may be longer than standard 8 hours)</li>
          <li>Discuss when to restart medication post-surgery</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          After Surgery
        </h2>
        <p className="text-muted-foreground mb-4">
          Restarting your GLP-1 medication depends on several factors:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Wait until you're tolerating oral intake well</li>
          <li>May need to restart at a lower dose if GI system is sensitive</li>
          <li>Some surgeries require longer delays (especially GI procedures)</li>
          <li>Coordinate with both your surgeon and prescribing provider</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          Key Takeaway
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications are generally safe, but surgery requires special precautions.
          Communication with your entire medical team is essential. Never hide medication
          use from your surgical team—the aspiration risk is real and preventable with
          proper planning.
        </p>
      </CardContent>
    </Card>
  </>
);

// Wegovy vs Ozempic: What's the Difference?
export const WegovyVsOzempicContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Wegovy and Ozempic are both brand names for semaglutide—the same active ingredient manufactured
      by Novo Nordisk. So why do two medications exist, and what&apos;s actually different between them?
      This guide breaks down everything you need to know.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Quick Answer
        </h2>
        <p className="text-muted-foreground">
          <strong>Wegovy and Ozempic contain the same drug (semaglutide)</strong>, but they&apos;re
          FDA-approved for different purposes. Ozempic is approved for type 2 diabetes, while Wegovy
          is approved for chronic weight management. The main differences are dosing, approval status,
          and insurance coverage.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Key Differences at a Glance
    </h2>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Ozempic</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Wegovy</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">FDA Approval</td>
            <td className="py-3 px-4 text-muted-foreground">Type 2 diabetes</td>
            <td className="py-3 px-4 text-muted-foreground">Chronic weight management</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Maximum Dose</td>
            <td className="py-3 px-4 text-muted-foreground">2 mg weekly</td>
            <td className="py-3 px-4 text-muted-foreground">2.4 mg weekly</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Starting Dose</td>
            <td className="py-3 px-4 text-muted-foreground">0.25 mg</td>
            <td className="py-3 px-4 text-muted-foreground">0.25 mg</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Titration Period</td>
            <td className="py-3 px-4 text-muted-foreground">8-16 weeks</td>
            <td className="py-3 px-4 text-muted-foreground">16-20 weeks</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Insurance Coverage</td>
            <td className="py-3 px-4 text-muted-foreground">Often covered for diabetes</td>
            <td className="py-3 px-4 text-muted-foreground">Rarely covered for weight loss</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">List Price</td>
            <td className="py-3 px-4 text-muted-foreground">~$935/month</td>
            <td className="py-3 px-4 text-muted-foreground">~$1,350/month</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Same Drug, Different Approvals
    </h2>
    <p className="text-muted-foreground mb-4">
      Both Wegovy and Ozempic contain semaglutide and work identically in your body. The reason two
      products exist comes down to FDA regulations and marketing:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Ozempic came first</strong> — Approved in 2017 for type 2 diabetes</li>
      <li><strong>Weight loss was a side effect</strong> — Clinical trials showed significant weight reduction</li>
      <li><strong>Novo Nordisk sought separate approval</strong> — Wegovy approved in 2021 specifically for obesity</li>
      <li><strong>Different clinical trials</strong> — Each has its own trial data for its specific indication</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Dosing Difference
    </h2>
    <p className="text-muted-foreground mb-4">
      The most significant practical difference is the maximum dose:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-foreground mb-2">Ozempic Dosing</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 0.25 mg (weeks 1-4)</li>
          <li>• 0.5 mg (weeks 5-8)</li>
          <li>• 1 mg (maintenance)</li>
          <li>• 2 mg (max dose if needed)</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Wegovy Dosing</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 0.25 mg (weeks 1-4)</li>
          <li>• 0.5 mg (weeks 5-8)</li>
          <li>• 1 mg (weeks 9-12)</li>
          <li>• 1.7 mg (weeks 13-16)</li>
          <li>• 2.4 mg (maintenance)</li>
        </ul>
      </div>
    </div>
    <p className="text-muted-foreground mb-6">
      The higher maximum dose of Wegovy (2.4 mg vs 2 mg) may produce slightly more weight loss for
      some patients, though individual responses vary significantly.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Insurance and Cost Considerations
    </h2>
    <p className="text-muted-foreground mb-4">
      This is where the differences matter most for many patients:
    </p>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Ozempic Coverage</h3>
        <p className="text-sm text-muted-foreground">
          More likely to be covered if you have type 2 diabetes. Even without diabetes, some doctors
          prescribe Ozempic off-label for weight loss, though insurance typically won&apos;t cover this use.
        </p>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Wegovy Coverage</h3>
        <p className="text-sm text-muted-foreground">
          Most insurance plans don&apos;t cover weight loss medications. However, coverage is slowly
          improving, especially for patients with obesity-related conditions. Medicare and Medicaid
          generally don&apos;t cover Wegovy.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Which One Should You Choose?
    </h2>
    <div className="space-y-4 mb-6">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Choose Ozempic if:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• You have type 2 diabetes (better insurance coverage)</li>
          <li>• Your insurance covers it but not Wegovy</li>
          <li>• You&apos;re sensitive to medications and want the lower max dose option</li>
        </ul>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Choose Wegovy if:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Weight loss is your primary goal</li>
          <li>• You want the FDA-approved weight loss indication</li>
          <li>• You may benefit from the higher 2.4 mg dose</li>
          <li>• Your insurance covers it or you&apos;re paying out of pocket</li>
        </ul>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Wegovy and Ozempic are essentially the same medication packaged differently. The choice
          between them often comes down to insurance coverage, whether you have diabetes, and your
          doctor&apos;s recommendation. From a clinical standpoint, both are highly effective for
          weight loss when combined with diet and exercise.
        </p>
      </CardContent>
    </Card>
  </>
);

// Zepbound vs Mounjaro: Understanding the Difference
export const ZepboundVsMounjaro = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Just like Wegovy and Ozempic, Zepbound and Mounjaro are two brand names for the same medication—
      tirzepatide. This guide explains the differences between these two products and helps you
      understand which one might be right for you.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Quick Answer
        </h2>
        <p className="text-muted-foreground">
          <strong>Zepbound and Mounjaro contain identical medication (tirzepatide)</strong> made by
          Eli Lilly. Mounjaro is approved for type 2 diabetes, while Zepbound is approved for chronic
          weight management. The dosing is the same—the only real differences are the FDA-approved
          uses and insurance coverage.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Comparison at a Glance
    </h2>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Mounjaro</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Zepbound</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Active Ingredient</td>
            <td className="py-3 px-4 text-muted-foreground">Tirzepatide</td>
            <td className="py-3 px-4 text-muted-foreground">Tirzepatide</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">FDA Approval</td>
            <td className="py-3 px-4 text-muted-foreground">Type 2 diabetes (2022)</td>
            <td className="py-3 px-4 text-muted-foreground">Chronic weight management (2023)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Dose Range</td>
            <td className="py-3 px-4 text-muted-foreground">2.5 mg to 15 mg</td>
            <td className="py-3 px-4 text-muted-foreground">2.5 mg to 15 mg</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Available Doses</td>
            <td className="py-3 px-4 text-muted-foreground">2.5, 5, 7.5, 10, 12.5, 15 mg</td>
            <td className="py-3 px-4 text-muted-foreground">2.5, 5, 7.5, 10, 12.5, 15 mg</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">List Price</td>
            <td className="py-3 px-4 text-muted-foreground">~$1,060/month</td>
            <td className="py-3 px-4 text-muted-foreground">~$1,060/month</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Two Products?
    </h2>
    <p className="text-muted-foreground mb-4">
      Eli Lilly followed the same strategy as Novo Nordisk with semaglutide:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Mounjaro launched first</strong> — Approved May 2022 for type 2 diabetes</li>
      <li><strong>Weight loss trials followed</strong> — The SURMOUNT studies showed exceptional results</li>
      <li><strong>Zepbound launched</strong> — Approved November 2023 specifically for obesity</li>
      <li><strong>Different packaging</strong> — But identical medication inside</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Tirzepatide&apos;s Dual Action
    </h2>
    <p className="text-muted-foreground mb-4">
      What makes tirzepatide unique is its dual mechanism:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">GLP-1 Receptor Agonist</h3>
        <p className="text-sm text-muted-foreground">
          Like semaglutide, it activates GLP-1 receptors to reduce appetite and slow gastric emptying.
        </p>
      </div>
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-foreground mb-2">GIP Receptor Agonist</h3>
        <p className="text-sm text-muted-foreground">
          Also activates GIP receptors, which may enhance insulin sensitivity and improve fat metabolism.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Insurance and Coverage
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Mounjaro Coverage</h3>
        <p className="text-sm text-muted-foreground">
          Better coverage if you have type 2 diabetes. Many insurance plans cover it for this indication.
          Off-label use for weight loss typically isn&apos;t covered.
        </p>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">Zepbound Coverage</h3>
        <p className="text-sm text-muted-foreground">
          Limited coverage for weight loss indications. Some commercial plans are starting to cover it,
          but Medicare and most Medicaid programs don&apos;t cover weight loss medications.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Clinical Results
    </h2>
    <p className="text-muted-foreground mb-4">
      Both products produce the same impressive results from the SURMOUNT trials:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Average weight loss:</strong> 20-26% of body weight at highest doses</li>
      <li><strong>Metabolic improvements:</strong> Significant A1C reduction, improved lipids</li>
      <li><strong>Blood pressure:</strong> Average 4-6 mmHg reduction</li>
      <li><strong>72-week results:</strong> Sustained weight loss with continued use</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Zepbound and Mounjaro are the same medication. Your choice will likely depend on whether
          you have type 2 diabetes (favoring Mounjaro for insurance purposes) or are primarily seeking
          weight loss (Zepbound has the specific approval). Both offer the most powerful weight loss
          results currently available in a medication.
        </p>
      </CardContent>
    </Card>
  </>
);

// Semaglutide vs Tirzepatide: Which Is Better?
export const SemaglutideVsTirzepatideContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Semaglutide (Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound) are the two most effective
      weight loss medications available today. But which one is actually better? This comprehensive
      comparison breaks down the evidence.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Quick Answer
        </h2>
        <p className="text-muted-foreground">
          <strong>Tirzepatide generally produces more weight loss in clinical trials</strong>—about
          20-26% vs 15% for semaglutide at maximum doses. However, both are highly effective, and the
          &quot;best&quot; choice depends on individual factors including side effect tolerance, cost,
          insurance coverage, and personal response.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Head-to-Head Comparison
    </h2>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Factor</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Semaglutide</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Tirzepatide</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Mechanism</td>
            <td className="py-3 px-4 text-muted-foreground">GLP-1 only</td>
            <td className="py-3 px-4 text-muted-foreground">GLP-1 + GIP (dual)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Avg Weight Loss</td>
            <td className="py-3 px-4 text-muted-foreground">~15% body weight</td>
            <td className="py-3 px-4 text-muted-foreground">~20-26% body weight</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">FDA Approved Since</td>
            <td className="py-3 px-4 text-muted-foreground">2017 (Ozempic), 2021 (Wegovy)</td>
            <td className="py-3 px-4 text-muted-foreground">2022 (Mounjaro), 2023 (Zepbound)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Oral Option</td>
            <td className="py-3 px-4 text-muted-foreground">Yes (Rybelsus)</td>
            <td className="py-3 px-4 text-muted-foreground">Not yet (in trials)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">Long-term Data</td>
            <td className="py-3 px-4 text-muted-foreground">More extensive</td>
            <td className="py-3 px-4 text-muted-foreground">Growing but less</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-medium text-foreground">CV Outcome Data</td>
            <td className="py-3 px-4 text-muted-foreground">SELECT trial positive</td>
            <td className="py-3 px-4 text-muted-foreground">SURPASS-CVOT ongoing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Weight Loss Comparison
    </h2>
    <p className="text-muted-foreground mb-4">
      The SURMOUNT and STEP trials provide the best data:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-foreground mb-2">Semaglutide 2.4 mg (STEP 1)</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Average: 14.9% weight loss</li>
          <li>• 1/3 lost 20%+ of body weight</li>
          <li>• 68-week trial duration</li>
          <li>• Placebo: 2.4% loss</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Tirzepatide 15 mg (SURMOUNT-1)</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Average: 22.5% weight loss</li>
          <li>• Over 1/3 lost 25%+ of body weight</li>
          <li>• 72-week trial duration</li>
          <li>• Placebo: 2.4% loss</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Side Effect Comparison
    </h2>
    <p className="text-muted-foreground mb-4">
      Both medications share similar GI side effects, though rates differ:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Nausea:</strong> ~40-45% for both (most common early on)</li>
      <li><strong>Diarrhea:</strong> 30-35% semaglutide, 20-25% tirzepatide</li>
      <li><strong>Constipation:</strong> ~25% for both</li>
      <li><strong>Vomiting:</strong> ~25% semaglutide, ~15% tirzepatide</li>
      <li><strong>Injection site reactions:</strong> Slightly higher with tirzepatide</li>
    </ul>
    <p className="text-muted-foreground mb-6">
      Side effects typically improve over time for both medications. Some patients tolerate one
      better than the other, which is impossible to predict beforehand.
    </p>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Tirzepatide May Be More Effective
    </h2>
    <p className="text-muted-foreground mb-4">
      The dual mechanism of tirzepatide offers potential advantages:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>GIP activation</strong> — May enhance fat burning and insulin sensitivity</li>
      <li><strong>Synergistic effects</strong> — The two hormones together may exceed single-hormone effects</li>
      <li><strong>Possible muscle preservation</strong> — Some data suggests better body composition</li>
      <li><strong>Metabolic benefits</strong> — Strong improvements in lipids and liver fat</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Semaglutide May Be the Better Choice
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Longer Track Record</h3>
        <p className="text-sm text-muted-foreground">
          Semaglutide has been on the market longer with more extensive safety data and
          cardiovascular outcome evidence from the SELECT trial.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Oral Option Available</h3>
        <p className="text-sm text-muted-foreground">
          Rybelsus offers a daily pill for those who prefer not to inject. Oral tirzepatide
          is still in clinical trials.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Compounded Availability</h3>
        <p className="text-sm text-muted-foreground">
          During shortages, compounded semaglutide is more widely available than compounded tirzepatide.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Important Consideration
        </h3>
        <p className="text-muted-foreground">
          Clinical trial averages don&apos;t predict individual results. Some people respond better
          to semaglutide, others to tirzepatide. If one doesn&apos;t work well for you, switching
          to the other is a reasonable option.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Both semaglutide and tirzepatide are excellent medications. Tirzepatide produces more
          weight loss on average, but semaglutide has a longer track record and more options
          (including oral). The best medication is the one you can access, afford, and tolerate—
          discuss both options with your healthcare provider.
        </p>
      </CardContent>
    </Card>
  </>
);

// What to Do If You Miss a GLP-1 Dose
export const MissedDoseGuideContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Missed your GLP-1 injection? Don&apos;t panic. Here&apos;s exactly what to do depending on
      which medication you take and how long it&apos;s been since your missed dose.
    </p>

    <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The General Rule
        </h2>
        <p className="text-muted-foreground">
          For weekly injections (Ozempic, Wegovy, Mounjaro, Zepbound): <strong>Take the missed dose
          if it&apos;s within 5 days of when you were supposed to take it.</strong> If more than 5 days
          have passed, skip the missed dose and take your next scheduled dose on time.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Missed Dose Guidelines by Medication
    </h2>

    <div className="space-y-6 mb-8">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Ozempic & Wegovy (Semaglutide Weekly)</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <p className="text-sm"><strong>Within 5 days of missed dose:</strong> Take it as soon as you remember, then resume your regular schedule.</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
              <p className="text-sm"><strong>More than 5 days:</strong> Skip the missed dose. Take your next dose on the regularly scheduled day.</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <p className="text-sm"><strong>Never:</strong> Take two doses at once or double up to make up for a missed dose.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Mounjaro & Zepbound (Tirzepatide Weekly)</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <p className="text-sm"><strong>Within 4 days of missed dose:</strong> Take it as soon as possible, then continue your regular schedule.</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
              <p className="text-sm"><strong>More than 4 days:</strong> Skip the missed dose and wait for your next scheduled injection day.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Rybelsus (Oral Semaglutide Daily)</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <p className="text-sm"><strong>Missed one day:</strong> Skip it and take your next dose the following morning as usual.</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
              <p className="text-sm"><strong>Important:</strong> Always take on an empty stomach with no more than 4 oz of plain water, then wait 30 minutes before eating.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What Happens If You Miss Multiple Doses?
    </h2>
    <p className="text-muted-foreground mb-4">
      Missing several doses can affect your treatment:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>1-2 weeks missed:</strong> Usually can resume at your current dose</li>
      <li><strong>2+ weeks missed:</strong> May need to restart at a lower dose to minimize side effects</li>
      <li><strong>Extended break:</strong> Contact your provider—you may need to re-titrate from the beginning</li>
    </ul>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          When to Contact Your Doctor
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>You&apos;ve missed more than 2 consecutive doses</li>
          <li>You&apos;re unsure whether to restart at full dose or lower</li>
          <li>You&apos;re experiencing increased side effects after resuming</li>
          <li>Your blood sugar becomes unstable (if diabetic)</li>
          <li>You need to stop medication temporarily for surgery or illness</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Tips to Avoid Missing Doses
    </h2>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Set Reminders</h3>
        <p className="text-sm text-muted-foreground">
          Use phone alarms, calendar alerts, or medication reminder apps for the same day each week.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Pick a Consistent Day</h3>
        <p className="text-sm text-muted-foreground">
          Choose a day that&apos;s easy to remember—like every Sunday morning or every Friday evening.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Keep Medication Visible</h3>
        <p className="text-sm text-muted-foreground">
          Store your pen where you&apos;ll see it (in the fridge door, for example) as a visual reminder.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Track Your Doses</h3>
        <p className="text-sm text-muted-foreground">
          Use a simple log, app, or calendar to mark each dose. This helps you know if you&apos;ve taken it.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Missing an occasional dose isn&apos;t a crisis. Take it when you remember if it&apos;s within
          the appropriate window, otherwise skip to your next scheduled dose. If you frequently forget,
          set up reminders. And if you&apos;ve missed multiple doses, contact your healthcare provider
          before restarting to get personalized guidance.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 and Food Noise: Quieting the Mind
export const FoodNoiseContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      One of the most remarkable effects reported by GLP-1 users isn&apos;t just weight loss—it&apos;s
      the sudden silence in their heads. &quot;Food noise,&quot; the constant mental chatter about food,
      cravings, and eating, often dramatically decreases. Here&apos;s what the science shows and what
      users experience.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is Food Noise?
        </h2>
        <p className="text-muted-foreground">
          &quot;Food noise&quot; describes the persistent, intrusive thoughts about food that many people
          experience: thinking about your next meal, craving specific foods, struggling to stop eating,
          or constantly negotiating with yourself about what and when to eat. For many people, this
          mental noise is exhausting and overwhelming.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How GLP-1s Quiet Food Noise
    </h2>
    <p className="text-muted-foreground mb-4">
      GLP-1 medications work on multiple levels to reduce food-related thoughts:
    </p>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Brain Reward Centers</h3>
        <p className="text-sm text-muted-foreground">
          GLP-1 receptors exist in brain regions controlling reward and motivation. The medications
          appear to reduce the rewarding signals from food, making it less compelling.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Appetite Regulation</h3>
        <p className="text-sm text-muted-foreground">
          By reducing physical hunger signals, there&apos;s simply less biological drive prompting
          food-seeking thoughts.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Craving Reduction</h3>
        <p className="text-sm text-muted-foreground">
          Many users report dramatic decreases in cravings for specific foods, especially high-calorie,
          highly palatable options.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What Users Report
    </h2>
    <p className="text-muted-foreground mb-4">
      Common experiences include:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>&quot;I forget to eat—something that never happened before&quot;</li>
      <li>&quot;I can walk past the break room donuts without a second thought&quot;</li>
      <li>&quot;The constant mental battle about food just... stopped&quot;</li>
      <li>&quot;I eat when I&apos;m hungry and stop when I&apos;m satisfied. It&apos;s that simple now&quot;</li>
      <li>&quot;Food has become fuel rather than an obsession&quot;</li>
      <li>&quot;I finally understand how naturally thin people think about food&quot;</li>
    </ul>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          A Note on Individual Variation
        </h3>
        <p className="text-muted-foreground">
          Not everyone experiences this dramatic quieting of food noise. Some people notice significant
          appetite reduction without the mental shift. The experience is highly individual, and
          expectations should be realistic.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Research Behind Food Noise
    </h2>
    <p className="text-muted-foreground mb-4">
      Scientific studies support these experiences:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Brain imaging studies</strong> show GLP-1s reduce activation in reward centers when viewing food</li>
      <li><strong>Preference changes</strong> documented—many users develop aversions to previously craved foods</li>
      <li><strong>Reduced eating behaviors</strong> beyond calorie counting (less snacking, smaller portions naturally)</li>
      <li><strong>Effects beyond appetite</strong> suggest central nervous system actions</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Food Noise and Emotional Eating
    </h2>
    <p className="text-muted-foreground mb-4">
      An important distinction:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">What GLP-1s Help</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Physical hunger cues</li>
          <li>• Food reward pathways</li>
          <li>• Cravings for specific foods</li>
          <li>• Constant food thoughts</li>
        </ul>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">May Still Need Work</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Emotional eating patterns</li>
          <li>• Deep-rooted food relationships</li>
          <li>• Stress-triggered eating</li>
          <li>• Social eating pressures</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Making the Most of Quieter Food Noise
    </h2>
    <p className="text-muted-foreground mb-4">
      Use this window to build healthier patterns:
    </p>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">1. Develop New Habits</h3>
        <p className="text-sm text-muted-foreground">
          With less food noise, it&apos;s easier to establish regular eating patterns, meal prep routines,
          and healthier choices.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">2. Address Emotional Triggers</h3>
        <p className="text-sm text-muted-foreground">
          Work with a therapist or counselor on emotional eating patterns while the medication
          reduces physical urges.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">3. Focus on Nutrition Quality</h3>
        <p className="text-sm text-muted-foreground">
          With reduced appetite, make every calorie count. Prioritize protein and nutrients over
          volume.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          The quieting of food noise may be one of the most life-changing aspects of GLP-1 treatment
          for many people. It&apos;s not just about eating less—it&apos;s about finally getting
          mental freedom from constant food thoughts. Use this opportunity to build sustainable
          habits that will support long-term success.
        </p>
      </CardContent>
    </Card>
  </>
);

// Oral vs Injectable GLP-1s: Pros and Cons
export const OralVsInjectableContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications come in two main forms: weekly injections (Ozempic, Wegovy, Mounjaro) and
      daily oral tablets (Rybelsus). Each has distinct advantages and drawbacks. Here&apos;s what
      you need to know to make an informed choice.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Currently Available Options
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Injectable GLP-1s</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ozempic (semaglutide weekly)</li>
              <li>• Wegovy (semaglutide weekly)</li>
              <li>• Mounjaro (tirzepatide weekly)</li>
              <li>• Zepbound (tirzepatide weekly)</li>
              <li>• Saxenda (liraglutide daily)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Oral GLP-1s</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Rybelsus (semaglutide daily)</li>
              <li>• Oral tirzepatide (in trials)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Injectable GLP-1s: Pros and Cons
    </h2>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Advantages</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Once weekly dosing</strong> — More convenient than daily</li>
          <li>• <strong>Higher bioavailability</strong> — More medication reaches your system</li>
          <li>• <strong>More consistent levels</strong> — Steady release over the week</li>
          <li>• <strong>Higher maximum doses</strong> — Access to 2 mg+ for semaglutide</li>
          <li>• <strong>Greater weight loss</strong> — Generally more effective than oral</li>
          <li>• <strong>No food timing requirements</strong> — Inject any time</li>
        </ul>
      </div>
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Disadvantages</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Needles required</strong> — Barrier for needle-phobic patients</li>
          <li>• <strong>Injection site reactions</strong> — Possible redness, itching</li>
          <li>• <strong>Refrigeration needed</strong> — More complex storage</li>
          <li>• <strong>Travel complications</strong> — Need to bring supplies, keep cool</li>
          <li>• <strong>Visible to others</strong> — Less discreet than taking a pill</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Oral GLP-1s (Rybelsus): Pros and Cons
    </h2>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Advantages</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>No injections</strong> — Ideal for needle-phobic patients</li>
          <li>• <strong>Easy to travel with</strong> — No refrigeration or needles</li>
          <li>• <strong>Discreet</strong> — Looks like any other medication</li>
          <li>• <strong>Familiar format</strong> — Taking pills is routine for most</li>
          <li>• <strong>No injection site reactions</strong> — Avoids skin issues</li>
        </ul>
      </div>
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Disadvantages</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Daily dosing</strong> — Must remember every day</li>
          <li>• <strong>Strict timing rules</strong> — Empty stomach, 30 min before food</li>
          <li>• <strong>Lower absorption</strong> — Only ~1% of dose absorbed</li>
          <li>• <strong>Lower max dose</strong> — Tops out at 14 mg (less effective)</li>
          <li>• <strong>Modest weight loss</strong> — Less effective than injections</li>
          <li>• <strong>Water restrictions</strong> — Only 4 oz with the pill</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Effectiveness Comparison
    </h2>
    <p className="text-muted-foreground mb-4">
      Injectable semaglutide (Wegovy 2.4 mg) produces significantly more weight loss than oral
      semaglutide (Rybelsus 14 mg):
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Formulation</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Average Weight Loss</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Wegovy 2.4 mg (injection)</td>
            <td className="py-3 px-4 text-muted-foreground">~15% body weight</td>
            <td className="py-3 px-4 text-muted-foreground">68-week data</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 text-muted-foreground">Rybelsus 14 mg (oral)</td>
            <td className="py-3 px-4 text-muted-foreground">~5-7% body weight</td>
            <td className="py-3 px-4 text-muted-foreground">26-week data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Rybelsus Timing Requirements
        </h3>
        <p className="text-muted-foreground mb-3">
          For Rybelsus to work properly, you must:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Take it first thing in the morning on a completely empty stomach</li>
          <li>Swallow with no more than 4 ounces of plain water</li>
          <li>Wait at least 30 minutes before eating or drinking anything else</li>
          <li>Take it at the same time each day for best results</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Who Should Choose Which?
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Consider Injectable If:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Maximum weight loss is your priority</li>
          <li>• You&apos;re comfortable with small needles</li>
          <li>• You prefer weekly over daily dosing</li>
          <li>• Your morning routine is unpredictable</li>
        </ul>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Consider Oral If:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• You have severe needle phobia</li>
          <li>• You travel frequently without refrigeration access</li>
          <li>• You want a stepping stone to injectables later</li>
          <li>• Modest weight loss meets your goals</li>
        </ul>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Injectable GLP-1s are more effective for weight loss but require comfort with needles.
          Oral Rybelsus offers needle-free convenience but with more modest results and strict
          timing requirements. Some people start with oral and transition to injectable. Discuss
          your lifestyle, goals, and preferences with your healthcare provider.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Dose Titration: Why Starting Low Matters
export const DoseTitrationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Every GLP-1 medication starts at a low dose and gradually increases over weeks or months.
      This process—called titration—isn&apos;t optional. Here&apos;s why it matters and what to
      expect at each stage.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Titration Is Essential
        </h2>
        <p className="text-muted-foreground mb-3">
          Starting at full dose would cause severe side effects in most people:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>GI tolerance</strong> — Your digestive system needs time to adapt</li>
          <li><strong>Nausea management</strong> — Gradual increases minimize nausea</li>
          <li><strong>Side effect monitoring</strong> — Allows identification of problems early</li>
          <li><strong>Finding optimal dose</strong> — Some people do well on lower doses</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Standard Titration Schedules
    </h2>

    <div className="space-y-6 mb-8">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Ozempic (Semaglutide for Diabetes)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-2 px-3 font-medium text-foreground">Weeks</th>
                  <th className="text-left py-2 px-3 font-medium text-foreground">Dose</th>
                  <th className="text-left py-2 px-3 font-medium text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-muted/50"><td className="py-2 px-3">1-4</td><td className="py-2 px-3">0.25 mg</td><td className="py-2 px-3">Initial tolerance</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">5-8</td><td className="py-2 px-3">0.5 mg</td><td className="py-2 px-3">Building up</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">9+</td><td className="py-2 px-3">1 mg</td><td className="py-2 px-3">Maintenance (can go to 2 mg)</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Wegovy (Semaglutide for Weight Loss)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-2 px-3 font-medium text-foreground">Weeks</th>
                  <th className="text-left py-2 px-3 font-medium text-foreground">Dose</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-muted/50"><td className="py-2 px-3">1-4</td><td className="py-2 px-3">0.25 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">5-8</td><td className="py-2 px-3">0.5 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">9-12</td><td className="py-2 px-3">1 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">13-16</td><td className="py-2 px-3">1.7 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">17+</td><td className="py-2 px-3">2.4 mg (maintenance)</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Mounjaro/Zepbound (Tirzepatide)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-2 px-3 font-medium text-foreground">Weeks</th>
                  <th className="text-left py-2 px-3 font-medium text-foreground">Dose</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-muted/50"><td className="py-2 px-3">1-4</td><td className="py-2 px-3">2.5 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">5-8</td><td className="py-2 px-3">5 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">9-12</td><td className="py-2 px-3">7.5 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">13-16</td><td className="py-2 px-3">10 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">17-20</td><td className="py-2 px-3">12.5 mg</td></tr>
                <tr className="border-b border-muted/50"><td className="py-2 px-3">21+</td><td className="py-2 px-3">15 mg (maximum)</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Expect During Titration
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Early Weeks (Lowest Dose)</h3>
        <p className="text-sm text-muted-foreground">
          You may notice mild appetite reduction but don&apos;t expect dramatic weight loss yet.
          Some nausea is common but usually manageable. This phase is about adjustment.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Each Dose Increase</h3>
        <p className="text-sm text-muted-foreground">
          Side effects often temporarily return or worsen when you increase the dose. This usually
          settles within 1-2 weeks. Appetite suppression typically increases with each step.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Maintenance Dose</h3>
        <p className="text-sm text-muted-foreground">
          Once you reach your maintenance dose, effects stabilize. Weight loss continues but may
          slow compared to the initial rapid phase. Side effects typically diminish.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Don&apos;t Skip Titration Steps
        </h3>
        <p className="text-muted-foreground">
          It&apos;s tempting to move faster, especially when side effects are mild. But skipping
          steps increases the risk of severe nausea, vomiting, and other complications that might
          force you to stop treatment entirely. Patience during titration leads to better long-term
          outcomes.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      When Titration Can Be Modified
    </h2>
    <p className="text-muted-foreground mb-4">
      Your doctor may adjust the schedule if:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Side effects are severe</strong> — May stay at current dose longer before increasing</li>
      <li><strong>Minimal response</strong> — May increase sooner if tolerating well with no effect</li>
      <li><strong>Good results at lower dose</strong> — May not need to reach maximum dose</li>
      <li><strong>Switching medications</strong> — May start higher if transitioning from another GLP-1</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Titration isn&apos;t about delaying your weight loss—it&apos;s about setting you up for
          success. Rushing the process increases side effects and dropout rates. Trust the
          established schedules, communicate with your provider about how you&apos;re feeling,
          and know that the full effects will come with time.
        </p>
      </CardContent>
    </Card>
  </>
);

// Switching Between GLP-1 Medications
export const SwitchingMedicationsContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Thinking about switching from one GLP-1 medication to another? Whether you&apos;re moving from
      semaglutide to tirzepatide, dealing with shortages, or seeking better results, here&apos;s how
      to switch safely.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Common Reasons for Switching
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Inadequate weight loss</strong> on current medication</li>
          <li><strong>Persistent side effects</strong> that don&apos;t improve</li>
          <li><strong>Medication shortages</strong> affecting supply</li>
          <li><strong>Insurance changes</strong> covering different options</li>
          <li><strong>Weight loss plateau</strong> after initial success</li>
          <li><strong>Seeking stronger results</strong> (e.g., semaglutide to tirzepatide)</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      General Switching Principles
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">1. No Washout Period Needed</h3>
        <p className="text-sm text-muted-foreground">
          You can typically switch directly from one GLP-1 to another without waiting. Start the new
          medication when your next dose would be due.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">2. Don&apos;t Start at Maximum Dose</h3>
        <p className="text-sm text-muted-foreground">
          Even if you were on a high dose of your old medication, you&apos;ll usually start at a
          lower dose of the new one. The medications have different potencies and structures.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">3. Expect Some Adjustment</h3>
        <p className="text-sm text-muted-foreground">
          Side effects may temporarily return or change when switching. Your body needs to adjust
          to the new medication even though the mechanism is similar.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Specific Switching Scenarios
    </h2>

    <div className="space-y-6 mb-8">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Semaglutide → Tirzepatide</h3>
          <p className="text-muted-foreground mb-3">
            The most common switch for those seeking more weight loss:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Stop semaglutide when your next dose would be due</li>
            <li>Typically start tirzepatide at 2.5 or 5 mg</li>
            <li>5 mg tirzepatide is roughly equivalent to 0.5-1 mg semaglutide</li>
            <li>May accelerate titration if well-tolerated</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Tirzepatide → Semaglutide</h3>
          <p className="text-muted-foreground mb-3">
            Less common, but sometimes needed for insurance or availability:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Stop tirzepatide when your next dose would be due</li>
            <li>Usually start semaglutide at 0.5 mg or higher</li>
            <li>Watch for changes in side effects or efficacy</li>
            <li>May need higher semaglutide dose to match previous results</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Ozempic ↔ Wegovy</h3>
          <p className="text-muted-foreground mb-3">
            Same medication, different brand:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Direct dose-for-dose switch is typically fine</li>
            <li>Main difference is the available dose range</li>
            <li>Wegovy goes up to 2.4 mg; Ozempic to 2 mg</li>
            <li>Switching brands shouldn&apos;t change your experience</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Rybelsus (Oral) → Injectable</h3>
          <p className="text-muted-foreground mb-3">
            Moving from oral to injection for better results:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Stop Rybelsus and start injection the next day</li>
            <li>Rybelsus 14 mg roughly equals 0.5-1 mg injectable semaglutide</li>
            <li>May still need to titrate up from starting dose</li>
            <li>Expect more pronounced effects from injectable</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Important: Always Consult Your Provider
        </h3>
        <p className="text-muted-foreground">
          These are general guidelines. Your specific situation may require different dosing.
          Factors like your current dose, how long you&apos;ve been on treatment, side effects,
          and other medications all influence the best switching strategy.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What to Watch For After Switching
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Return of side effects</strong> — Nausea, GI issues may temporarily increase</li>
      <li><strong>Changes in appetite</strong> — May feel different than previous medication</li>
      <li><strong>Blood sugar changes</strong> — If diabetic, monitor more closely initially</li>
      <li><strong>Weight trajectory</strong> — Give it 2-3 months to assess new medication&apos;s effect</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Switching between GLP-1 medications is common and generally safe when done with medical
          guidance. Don&apos;t expect immediate results with the new medication—give it time to
          work and titrate appropriately. Most people successfully transition between these
          medications when needed.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Injection Site Rotation: Best Practices
export const InjectionRotationContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Proper injection technique and site rotation are essential for GLP-1 medication effectiveness
      and minimizing skin problems. Here&apos;s a complete guide to injection best practices.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why Rotation Matters
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Prevents lipodystrophy</strong> — Repeated injections in one spot cause tissue changes</li>
          <li><strong>Ensures consistent absorption</strong> — Damaged tissue absorbs medication poorly</li>
          <li><strong>Reduces injection site reactions</strong> — Gives skin time to recover</li>
          <li><strong>Minimizes scarring</strong> — Distributes impact across larger area</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Approved Injection Sites
    </h2>
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Abdomen</h3>
        <p className="text-sm text-muted-foreground">
          Most popular site. Inject at least 2 inches from navel. Avoid waistband area. Offers
          consistent absorption.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Thigh</h3>
        <p className="text-sm text-muted-foreground">
          Front of thigh, about 4 inches above knee and 4 inches below hip. Easy to see and reach.
          Slightly slower absorption.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Upper Arm</h3>
        <p className="text-sm text-muted-foreground">
          Back of upper arm. May need assistance reaching. Good for those who prefer to hide
          injection sites.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Rotation Strategies
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">The Clock Method (Abdomen)</h3>
        <p className="text-sm text-muted-foreground">
          Imagine a clock around your navel. Start at 12 o&apos;clock and move to a new &quot;hour&quot;
          position each week. After completing the circle, move further from center.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">The Zone Method</h3>
        <p className="text-sm text-muted-foreground">
          Divide each injection area into zones. Use left side one week, right side the next. Or
          alternate between abdomen, left thigh, right thigh weekly.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Distance Rule</h3>
        <p className="text-sm text-muted-foreground">
          Always inject at least 1 inch (2.5 cm) from your previous injection site. This ensures
          adequate tissue recovery between uses.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Injection Technique
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Step 1: Prepare</h3>
        <p className="text-sm text-muted-foreground">
          Wash hands thoroughly. Allow refrigerated medication to reach room temperature (10-15 min).
          Check expiration date and that liquid is clear.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Step 2: Clean Site</h3>
        <p className="text-sm text-muted-foreground">
          Clean the injection site with alcohol swab. Let it dry completely before injecting.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Step 3: Inject</h3>
        <p className="text-sm text-muted-foreground">
          Pinch skin if needed (depending on body composition). Insert needle at 90-degree angle.
          Press button and hold for 10 seconds after the click.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Step 4: After Care</h3>
        <p className="text-sm text-muted-foreground">
          Remove needle straight out. Don&apos;t rub the site. Light pressure with cotton ball if
          bleeding. Document site used.
        </p>
      </div>
    </div>

    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Sites to Avoid
        </h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Within 2 inches of the navel</li>
          <li>Areas with scars, bruises, or skin problems</li>
          <li>Hardened or lumpy areas (signs of lipodystrophy)</li>
          <li>Red, swollen, or tender skin</li>
          <li>Stretch marks or moles</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Tracking Your Injections
    </h2>
    <p className="text-muted-foreground mb-4">
      Keep a simple log to ensure proper rotation:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Use a journal or app to record date and site</li>
      <li>Take photos to track site appearance over time</li>
      <li>Note any reactions or issues at specific sites</li>
      <li>Set reminders to check injection sites regularly</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Consistent site rotation is a simple habit that prevents problems down the road. Choose
          a rotation system that works for you and stick with it. If you notice any skin changes,
          lumps, or persistent reactions, consult your healthcare provider.
        </p>
      </CardContent>
    </Card>
  </>
);

// Maintaining Weight Loss After Stopping GLP-1s
export const MaintainingWeightLossContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      What happens when you stop taking GLP-1 medications? Studies show significant weight regain
      is common—but not inevitable. Here&apos;s what the research shows and strategies for
      maintaining your results.
    </p>

    <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Reality: Weight Regain Is Common
        </h2>
        <p className="text-muted-foreground">
          Research shows that within one year of stopping semaglutide, people regain about two-thirds
          of their lost weight on average. This isn&apos;t a failure of willpower—it&apos;s biology.
          The medications address the biological drives that make weight loss hard; when they&apos;re
          removed, those drives return.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Why Weight Regain Happens
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Appetite returns</strong> — The medication&apos;s appetite suppression ends</li>
      <li><strong>Metabolic adaptation</strong> — Your body burned fewer calories at the lower weight</li>
      <li><strong>Hunger hormones increase</strong> — Ghrelin and other hormones spike after weight loss</li>
      <li><strong>Food noise returns</strong> — The quiet mind around food often disappears</li>
      <li><strong>Habits may not stick</strong> — Without the medication&apos;s help, old patterns return</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Strategies for Maintenance
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">1. Build Habits During Treatment</h3>
        <p className="text-sm text-muted-foreground">
          Use the easier period while on medication to establish sustainable eating patterns, regular
          exercise, and stress management. These habits need to become automatic.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">2. Prioritize Protein</h3>
        <p className="text-sm text-muted-foreground">
          High protein intake (100+ grams daily) helps preserve muscle mass and provides better satiety
          than carbohydrates or fat.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">3. Strength Training</h3>
        <p className="text-sm text-muted-foreground">
          Building and maintaining muscle is crucial. Muscle mass affects your metabolism and helps
          with long-term weight maintenance.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">4. Address Emotional Eating</h3>
        <p className="text-sm text-muted-foreground">
          Work with a therapist or counselor on the psychological aspects of eating while the
          medication reduces physical urges.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">5. Consider Maintenance Dosing</h3>
        <p className="text-sm text-muted-foreground">
          Some providers prescribe lower &quot;maintenance&quot; doses after reaching goal weight.
          This may help sustain results while reducing costs and side effects.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Case for Long-Term Use
    </h2>
    <p className="text-muted-foreground mb-4">
      Medical organizations increasingly recognize obesity as a chronic disease requiring ongoing
      treatment:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Just as you wouldn&apos;t stop blood pressure medication when pressure normalizes</li>
      <li>GLP-1s address underlying biological issues, not just symptoms</li>
      <li>Cardiovascular and metabolic benefits may require continued use</li>
      <li>Many experts recommend indefinite treatment for those who respond well</li>
    </ul>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          If You Must Stop
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Taper gradually</strong> if possible, rather than stopping abruptly</li>
          <li><strong>Have a plan ready</strong> before stopping—don&apos;t wing it</li>
          <li><strong>Monitor weight closely</strong> and intervene early if regaining</li>
          <li><strong>Consider restarting</strong> if regain exceeds 5-10%</li>
          <li><strong>Explore alternatives</strong> like other medications or programs</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Setting Realistic Expectations
    </h2>
    <p className="text-muted-foreground mb-4">
      Be honest with yourself about what&apos;s realistic:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Realistic Goals</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Maintaining some weight loss (&gt;5-10%)</li>
          <li>• Keeping healthy habits</li>
          <li>• Improved metabolic markers</li>
          <li>• Restarting if needed without shame</li>
        </ul>
      </div>
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-foreground mb-2">Unrealistic Expectations</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Keeping 100% of weight off forever</li>
          <li>• &quot;Curing&quot; obesity with temporary treatment</li>
          <li>• Willpower alone maintaining results</li>
          <li>• Never needing medication again</li>
        </ul>
      </div>
    </div>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Weight regain after stopping GLP-1 medications is common but not absolute. Use your time
          on medication to build sustainable habits. If you need to continue treatment long-term,
          that&apos;s a valid medical approach—not a failure. Work with your healthcare provider
          to determine the best strategy for your situation.
        </p>
      </CardContent>
    </Card>
  </>
);

// GLP-1 Medications for Older Adults
export const OlderAdultsContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      GLP-1 medications can be highly effective for older adults, but there are special considerations
      around muscle loss, medication interactions, and monitoring. Here&apos;s what seniors and their
      caregivers need to know.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Considerations for Older Adults
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Sarcopenia risk</strong> — Age-related muscle loss requires extra attention</li>
          <li><strong>Multiple medications</strong> — More potential for interactions</li>
          <li><strong>Kidney function</strong> — May affect medication dosing or tolerance</li>
          <li><strong>Dehydration risk</strong> — GI side effects can be more problematic</li>
          <li><strong>Fall risk</strong> — Rapid weight loss can affect balance</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Benefits for Older Adults
    </h2>
    <p className="text-muted-foreground mb-4">
      Despite the considerations, GLP-1 medications offer significant benefits for older patients:
    </p>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Cardiovascular Protection</h3>
        <p className="text-sm text-muted-foreground">
          The SELECT trial included adults up to age 65+, showing significant reduction in heart
          attacks and strokes.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Kidney Protection</h3>
        <p className="text-sm text-muted-foreground">
          The FLOW trial showed semaglutide slowed kidney disease progression—a major concern
          for older adults.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Joint Health</h3>
        <p className="text-sm text-muted-foreground">
          Weight loss can significantly reduce arthritis pain and improve mobility, enhancing
          quality of life.
        </p>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">Diabetes Management</h3>
        <p className="text-sm text-muted-foreground">
          Better blood sugar control with lower hypoglycemia risk compared to insulin or
          sulfonylureas.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Muscle Preservation Is Critical
    </h2>
    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-3">
          Older adults naturally lose muscle mass with age (sarcopenia). Rapid weight loss can
          accelerate this. Strategies to protect muscle:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>High protein intake:</strong> Aim for 1.0-1.2 g per kg of body weight daily</li>
          <li><strong>Resistance exercise:</strong> Even light strength training helps preserve muscle</li>
          <li><strong>Vitamin D:</strong> Essential for muscle function; often low in older adults</li>
          <li><strong>Slower weight loss:</strong> May need to stay at lower doses longer</li>
          <li><strong>Monitor strength:</strong> Track grip strength or functional abilities</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Medication Interactions to Consider
    </h2>
    <p className="text-muted-foreground mb-4">
      Common medications in older adults that may interact with GLP-1s:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Insulin or sulfonylureas</strong> — May need dose reduction to prevent low blood sugar</li>
      <li><strong>Warfarin</strong> — Monitor INR more frequently initially</li>
      <li><strong>Thyroid medications</strong> — Absorption may be affected; check levels</li>
      <li><strong>Blood pressure medications</strong> — May need reduction as weight decreases</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Special Monitoring Recommendations
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Hydration Status</h3>
        <p className="text-sm text-muted-foreground">
          Older adults are more susceptible to dehydration, especially with GI side effects.
          Monitor fluid intake and signs of dehydration.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Kidney Function</h3>
        <p className="text-sm text-muted-foreground">
          More frequent kidney function tests, especially if experiencing nausea, vomiting, or
          diarrhea that could affect hydration.
        </p>
      </div>
      <div className="p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Nutritional Status</h3>
        <p className="text-sm text-muted-foreground">
          Watch for signs of malnutrition. Reduced appetite plus already lower intake can lead
          to deficiencies.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Titration Adjustments
    </h2>
    <p className="text-muted-foreground mb-4">
      Older adults may benefit from:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Slower titration schedule (longer at each dose)</li>
      <li>Lower maximum dose if responding well</li>
      <li>More frequent check-ins during dose increases</li>
      <li>Patience—don&apos;t rush to maximize dose</li>
    </ul>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          GLP-1 medications can be safe and highly beneficial for older adults when used appropriately.
          The key is focusing on muscle preservation, staying hydrated, monitoring for interactions,
          and potentially using lower doses. Work closely with your healthcare provider to tailor
          treatment to your individual needs.
        </p>
      </CardContent>
    </Card>
  </>
);

// Compounded GLP-1s: What You Need to Know
export const CompoundedGLP1sContent = () => (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      With brand-name GLP-1 medications often in shortage and costing $1,000+ per month, compounded
      versions have become increasingly popular. But are they safe? Here&apos;s what you need to know
      about compounded semaglutide and tirzepatide.
    </p>

    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Is Compounding?
        </h2>
        <p className="text-muted-foreground">
          Compounding pharmacies create custom medications using FDA-approved active ingredients.
          When brand-name drugs are on the FDA shortage list, compounders can legally produce
          versions of those medications. Compounded semaglutide and tirzepatide are made from the
          same active ingredients as Ozempic/Wegovy and Mounjaro/Zepbound.
        </p>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Types of Compounding Pharmacies
    </h2>
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-foreground mb-2">503B Outsourcing Facilities</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• FDA-registered and inspected</li>
          <li>• Must follow current Good Manufacturing Practices (cGMP)</li>
          <li>• Can produce larger quantities</li>
          <li>• Higher quality standards</li>
          <li>• More reliable potency and sterility</li>
        </ul>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-foreground mb-2">503A Traditional Pharmacies</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• State-regulated, not FDA-inspected</li>
          <li>• Patient-specific prescriptions</li>
          <li>• Variable quality controls</li>
          <li>• More risk of sterility issues</li>
          <li>• Potency may be less consistent</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Benefits of Compounded GLP-1s
    </h2>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li><strong>Cost savings:</strong> Often $200-400/month vs $1,000+ for brand-name</li>
      <li><strong>Availability:</strong> Accessible during shortages of brand-name products</li>
      <li><strong>Flexible dosing:</strong> Can be made in custom doses</li>
      <li><strong>Legitimate option:</strong> Legal when brand is on FDA shortage list</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      Risks and Concerns
    </h2>
    <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>No FDA approval:</strong> The compounded product itself isn&apos;t FDA-approved</li>
          <li><strong>Potency variation:</strong> May not contain exact claimed amount of medication</li>
          <li><strong>Sterility concerns:</strong> Contamination risk, especially from 503A pharmacies</li>
          <li><strong>Different salt forms:</strong> Some use semaglutide &quot;salts&quot; that may behave differently</li>
          <li><strong>Limited recourse:</strong> No manufacturer support if problems occur</li>
          <li><strong>Future legality:</strong> May become unavailable if shortage ends</li>
        </ul>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      How to Choose a Safe Compounding Pharmacy
    </h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">1. Verify 503B Status</h3>
        <p className="text-sm text-muted-foreground">
          Check the FDA&apos;s list of registered 503B outsourcing facilities. These undergo regular
          inspections and follow stricter manufacturing standards.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">2. Ask About Third-Party Testing</h3>
        <p className="text-sm text-muted-foreground">
          Reputable compounders test each batch for potency and sterility. Ask to see certificates
          of analysis.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">3. Use a Licensed Provider</h3>
        <p className="text-sm text-muted-foreground">
          Get your prescription from a legitimate telehealth provider or in-person doctor who will
          monitor your treatment properly.
        </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">4. Beware of Red Flags</h3>
        <p className="text-sm text-muted-foreground">
          Avoid: prices that seem too good to be true, no prescription required, overseas sources,
          or inability to verify pharmacy credentials.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      The Salt Form Controversy
    </h2>
    <p className="text-muted-foreground mb-4">
      Some compounders use &quot;semaglutide sodium&quot; or &quot;semaglutide acetate&quot; rather than
      base semaglutide:
    </p>
    <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
      <li>Salt forms may have different pharmacokinetics</li>
      <li>Less clinical data on these specific forms</li>
      <li>Dosing equivalence isn&apos;t fully established</li>
      <li>Some argue this falls outside FDA shortage exemption</li>
    </ul>

    <h2 className="text-2xl font-bold text-foreground mb-4">
      What Happens When Shortages End?
    </h2>
    <p className="text-muted-foreground mb-6">
      Once brand-name medications are no longer on the FDA shortage list, compounders can no longer
      legally produce copies. You would need to transition to brand-name products or explore other options.
    </p>

    <Card className="mb-8 border-primary/30 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          The Bottom Line
        </h3>
        <p className="text-muted-foreground">
          Compounded GLP-1 medications can be a legitimate, more affordable option when obtained
          from reputable 503B pharmacies with proper medical supervision. However, they carry more
          risk than brand-name products. If you choose this route, do your due diligence on the
          pharmacy and provider, and understand that availability may change as shortage status evolves.
        </p>
      </CardContent>
    </Card>
  </>
);
