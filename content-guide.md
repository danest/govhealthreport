# Rx Saver Hub Content Style Guide

This guide ensures all content across the site maintains a consistent voice, tone, and helpful, trustworthy theme.

## Brand Voice & Tone

### Core Messaging Pillars
1. **Trust & Transparency** - Honest comparisons, real reviews, no hidden agendas
2. **Savings First** - Helping people find affordable weight loss treatments
3. **Quality Assured** - FDA-approved treatments, board-certified physicians, proven results
4. **Empowerment** - Helping readers take control of their health journey

### Language Guidelines

#### Use These Phrases
- "Save on your treatment"
- "Compare and save"
- "Affordable options"
- "Find the best price"
- "US-based providers"
- "Board-certified physicians"
- "Your weight loss journey"
- "Proven results"
- "FDA-approved treatments"
- "Take control of your health"
- "Your trusted resource"
- "Real reviews, real results"
- "Your path to success"
- "Achieve your goals"
- "Expert-reviewed"
- "Thoroughly researched"
- "Compare top programs"
- "Find what works for you"

#### Avoid These
- Overly clinical/medical jargon without explanation
- Negative competitor bashing
- Unrealistic promises ("lose 50 lbs in a week")
- Pushy sales language ("Buy now or miss out!")
- Guarantees about weight loss results
- Claims that could be construed as medical advice

### Tone Characteristics
- **Helpful** but not pushy
- **Informative** but not overwhelming
- **Supportive** but not patronizing
- **Professional** but approachable
- **Honest** about limitations and disclaimers

## Content Structure

### Page Headlines
- Lead with benefit or answer to user's question
- Include savings/comparison element where natural
- Keep under 60 characters for SEO
- Examples:
  - "Best Place to Inject Tirzepatide: Complete Guide"
  - "Best Time to Take Semaglutide for Weight Loss"
  - "Top Compounding Pharmacies for Semaglutide"
  - "Compare Online Tirzepatide Programs"

### Section Structure
1. **Hero Section** - Clear headline, brief intro, relevant image
2. **Quick Answer** - Direct answer to the page's main question
3. **Top Providers** - Feature top 3 providers relevant to topic
4. **Detailed Content** - Comprehensive information with subheadings
5. **Related Topics** - Links to related guides
6. **CTA** - Clear next step for the reader

### Content Formatting
- Use short paragraphs (2-4 sentences)
- Include bulleted lists for easy scanning
- Add relevant subheadings every 200-300 words
- Bold key terms and important information
- Include relevant internal links
- Use cards for provider information

## Color Usage in Content

### Primary Colors
- **Primary (Teal/Emerald)** - CTAs, links, highlights, badges
- **Foreground** - Headlines, body text
- **Muted** - Secondary text, descriptions

### Accent Colors
- **Yellow/Amber** - Star ratings, warnings
- **Green** - Success indicators, positive highlights, do's
- **Red** - Important warnings, don'ts
- **Blue/Indigo** - Information callouts

## Writing Medical Content

### Always Include
- Disclaimer that we're not medical providers
- Recommendation to consult healthcare professionals
- Note that individual results may vary
- Reference to FDA approval status

### Standard Disclaimers
```
This information is for educational purposes only and is not intended as
medical advice. Always consult with a qualified healthcare provider before
starting any weight loss treatment.
```

### Be Careful With
- Specific weight loss claims (use ranges: "10-26%")
- Medical advice (we provide information, not advice)
- Side effect information (keep general, recommend consulting doctor)
- Comparing medications directly (note individual variation)

## SEO Guidelines

### Title Tags
Format: `[Primary Keyword] [Year] | Rx Saver Hub`
Example: `Best Time to Take Tirzepatide for Weight Loss 2025 | Rx Saver Hub`

### Meta Descriptions
- 150-160 characters
- Include primary keyword naturally
- End with call-to-action or benefit
- Example: "Discover the best time to take tirzepatide for maximum weight loss. Expert tips and provider comparisons. Find the right program for you."

### Headers
- H1: One per page, includes primary keyword
- H2: Major sections, related keywords
- H3: Subsections, long-tail keywords

## Image Guidelines

### Unsplash Images
- Use healthcare/medical imagery for credibility
- Use active, positive lifestyle images
- Include diverse representation
- Avoid stock photo clichés
- Use appropriate sizing parameters (w=600, q=80)

### Image Implementation
```html
<img
  src="https://images.unsplash.com/photo-XXXXX?w=600&q=80&fit=crop&crop=center"
  alt="Descriptive alt text"
  className="rounded-lg shadow-lg w-full h-64 object-cover"
  loading="lazy"
/>
```

### Alt Text
- Descriptive and includes keywords naturally
- Example: `alt="Person discussing weight loss options with healthcare provider"`

## Provider References

### When Mentioning Providers
- Always link to their review page
- Use consistent naming:
  - "CoreAge Rx" (not "Coreage" or "Core Age")
  - "Mochi Health" (not "Mochi" alone)
  - "Ro" (not "Ro Health")
- Include their key differentiator
- Reference current pricing where applicable

### Provider CTAs
- Primary: "Get Started" or "Visit [Provider Name]"
- Secondary: "Read Full Review" or "Compare Options"

## Sample Content Blocks

### Introduction Template
```
Looking for [topic]? You're in the right place. At Rx Saver Hub,
we've researched the top providers to help you [benefit].
Whether you're [scenario 1] or [scenario 2], this guide covers everything
you need to know.
```

### Quick Answer Template
```
**The Quick Answer:** [Direct answer to page question]. [1-2 sentences
of supporting context]. Keep reading for [what they'll learn in detail].
```

### Provider Mention Template
```
**[Provider Name]** stands out for [key differentiator]. With
[notable feature] and [another benefit], they're a top choice for
those seeking [relevant goal]. [Link to review]
```

### Related Guides Card
```tsx
<Card className="border-primary/30 bg-primary/5">
  <CardContent className="p-6">
    <h2 className="text-xl font-bold text-foreground mb-4">
      Related Guides
    </h2>
    <div className="grid gap-3 sm:grid-cols-2">
      <Link href="/page-url" className="text-primary hover:underline">
        → Page Title
      </Link>
      {/* More links */}
    </div>
  </CardContent>
</Card>
```

## Top 3 Providers Component

Use the `Top3Providers` component on all guide pages:

```tsx
import { Top3Providers } from "@/components/sections/Top3Providers";

<Top3Providers
  title="Top Recommended Providers"
  subtitle="Custom subtitle for this page context."
/>
```

## Internal Linking Strategy

### Each Page Should Link To:
- 4-6 related guide pages
- Relevant provider review pages
- The main comparison page (/best-weight-loss-injections)

### Link Text Guidelines
- Use descriptive anchor text
- Format: "→ [Page Title]"
- Group in "Related Guides" section at bottom

## Quality Checklist

Before publishing, ensure content:
- [ ] Answers the user's primary question clearly
- [ ] Maintains helpful, trustworthy tone
- [ ] Includes Top3Providers component
- [ ] Has proper internal linking (4-6 related pages)
- [ ] Contains appropriate medical disclaimers
- [ ] Is scannable with headers and lists
- [ ] Has optimized title and meta description
- [ ] Includes relevant Unsplash image with alt text
- [ ] Links to related guides at bottom
- [ ] Uses consistent provider naming
- [ ] Has "Back to Home" link at top

## Page Template Structure

```tsx
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Top3Providers } from "@/components/sections/Top3Providers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "[Page Title] 2025 | Rx Saver Hub",
  description: "[150-160 character description with keywords]",
  keywords: ["keyword1", "keyword2", "keyword3"],
};

export default function PageName() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          {/* Back link, H1, intro text, image */}
        </section>

        {/* Top 3 Providers */}
        <Top3Providers title="..." subtitle="..." />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Cards with content */}
            {/* Related Guides card at bottom */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```
