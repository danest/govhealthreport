# GOV Health Report Content Style Guide

This guide ensures all content across the site maintains a consistent voice, tone, and professional government-inspired theme.

## CRITICAL DISCLAIMER
**GOV Health Report is NOT an official government website.** We are NOT affiliated with, endorsed by, or connected to any federal, state, or local government agency, including the FDA, HHS, CDC, or any other government entity. The "GOV" in our name refers to our focus on governance and transparency in health reporting, not government affiliation.

This disclaimer MUST appear prominently on all disclosure, about, and legal pages.

## Brand Voice & Tone

### Core Messaging Pillars
1. **Transparency & Accountability** - Clear disclosures, honest assessments, no hidden agendas
2. **Public Service Focus** - Helping citizens make informed health decisions
3. **Verified Information** - FDA-approved treatments, licensed providers, documented results
4. **Citizen Empowerment** - Providing resources for informed decision-making

### Government-Style Language Guidelines

#### Use These Phrases (Government-Inspired)
- "Public health resource"
- "Verified provider information"
- "Regulatory compliance status"
- "Licensed and accredited"
- "Independent assessment"
- "Consumer protection focus"
- "Full disclosure statement"
- "Official provider verification"
- "Compliance documentation"
- "Citizen health initiative"
- "Transparent reporting standards"
- "Accountability measures"
- "Consumer advisory notice"
- "Health resource portal"
- "Independent review board"
- "Verified treatment information"
- "Regulatory-compliant providers"
- "Public interest disclosure"

#### Avoid These
- Overly clinical/medical jargon without explanation
- Negative competitor bashing
- Unrealistic promises ("lose 50 lbs in a week")
- Pushy sales language ("Buy now or miss out!")
- Guarantees about weight loss results
- Claims that could be construed as medical advice
- Any language implying government endorsement or affiliation

### Tone Characteristics
- **Official** but accessible
- **Informative** and thorough
- **Authoritative** but not intimidating
- **Professional** and trustworthy
- **Transparent** about limitations and disclaimers
- **Neutral** and objective in assessments

## Content Structure

### Page Headlines
- Lead with informational/educational benefit
- Include compliance/verification element where natural
- Keep under 60 characters for SEO
- Examples:
  - "Tirzepatide Injection Sites: Official Guide"
  - "Semaglutide Timing Guidelines for Weight Loss"
  - "Verified Compounding Pharmacy Directory"
  - "Provider Comparison: Independent Assessment"

### Section Structure
1. **Header Section** - Clear headline, brief intro, official-style presentation
2. **Consumer Notice** - Important disclaimers and disclosures
3. **Verified Providers** - Feature assessed providers relevant to topic
4. **Detailed Information** - Comprehensive content with clear subheadings
5. **Related Resources** - Links to related guides
6. **Next Steps** - Clear guidance for the reader

### Content Formatting
- Use short paragraphs (2-4 sentences)
- Include bulleted lists for easy scanning
- Add relevant subheadings every 200-300 words
- Bold key terms and important information
- Include relevant internal links
- Use cards for provider information
- Include official-looking notices for important disclaimers

## Color Usage in Content

### Primary Colors (Government Blue Theme)
- **Primary (Navy Blue)** - CTAs, links, highlights, badges
- **Foreground** - Headlines, body text
- **Muted** - Secondary text, descriptions

### Accent Colors
- **Amber/Gold** - Star ratings, important notices
- **Green** - Verification indicators, positive status
- **Red** - Critical warnings, consumer alerts
- **Light Blue** - Information callouts, secondary highlights

## Writing Medical Content

### Always Include
- Prominent disclaimer that we are NOT a government agency
- Disclaimer that we are NOT medical providers
- Recommendation to consult healthcare professionals
- Note that individual results may vary
- Reference to FDA approval status
- Clear affiliate relationship disclosure

### Standard Disclaimers
```
IMPORTANT NOTICE: GOV Health Report is NOT an official government website
and is NOT affiliated with any government agency. This information is for
educational purposes only and is not intended as medical advice. Always
consult with a qualified healthcare provider before starting any weight
loss treatment.
```

### Be Careful With
- Specific weight loss claims (use ranges: "10-26%")
- Medical advice (we provide information, not advice)
- Side effect information (keep general, recommend consulting doctor)
- Comparing medications directly (note individual variation)

## SEO Guidelines

### Title Tags
Format: `[Primary Keyword] [Year] | GOV Health Report`
Example: `Tirzepatide Timing Guide 2025 | GOV Health Report`

### Meta Descriptions
- 150-160 characters
- Include primary keyword naturally
- End with call-to-action or benefit
- Example: "Access verified information about the best time to take tirzepatide for weight loss. Independent provider assessments and consumer resources."

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

### Image Selection Strategy (IMPORTANT: Ensure Variety)

When selecting Unsplash images, **DO NOT** just use the first result. Follow this process:

1. **Search multiple keywords** for the topic:
   - For a weight loss article, try: "weight loss", "healthy lifestyle", "fitness", "nutrition", "wellness"
   - For a medication article, try: "medicine", "pharmacy", "healthcare", "medical", "pills"
   - For exercise content, try: "workout", "exercise", "gym", "running", "active lifestyle"

2. **Pick from different pages/positions** of search results:
   - Don't always use the top result - scroll down or go to page 2-3
   - Mix featured and regular results
   - Use the Unsplash API `page` and `per_page` parameters if searching programmatically

3. **Vary the image ID ranges**:
   - Older photos (photo-14xxxxx, photo-15xxxxx) - classic, timeless
   - Mid-range (photo-16xxxxx, photo-17xxxxx) - good variety
   - Newer photos (photo-18xxxxx, photo-19xxxxx) - fresh content

4. **Keep a mental note** of recently used images:
   - Avoid reusing the same image across multiple articles
   - If an image ID looks familiar, pick a different one
   - Aim for visual variety across the site

5. **Use different search terms for similar topics**:
   - Instead of always "medication", try "pharmacy", "prescription", "pills", "treatment"
   - Instead of always "weight loss", try "fitness journey", "healthy eating", "active lifestyle"

### Example Good Variety
```
Article 1: photo-1571019613454-1cb2f99b2d8b (fitness)
Article 2: photo-1559757175-5700dde675bc (healthcare)
Article 3: photo-1506784365847-bbad939e9335 (calendar/time)
Article 4: photo-1544367567-0f2fcb009e0b (wellness)
Article 5: photo-1447452001602-7090c7ab2db3 (senior health)
```

### Example Bad (No Variety)
```
Article 1: photo-1571019613454-1cb2f99b2d8b (fitness)
Article 2: photo-1571019613914-2cb3f99b2d8c (fitness - too similar!)
Article 3: photo-1571019614234-3cb2f99b2d7d (fitness - same photographer!)
```

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
- Example: `alt="Healthcare professional discussing weight loss treatment options"`

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
- Primary: "View Provider Details" or "Access Provider Information"
- Secondary: "Read Full Assessment" or "Compare Providers"

## Sample Content Blocks

### Introduction Template
```
Access verified information about [topic]. GOV Health Report provides
independent assessments to help you [benefit]. Whether you're [scenario 1]
or [scenario 2], this resource covers essential information you need.
```

### Quick Answer Template
```
**Summary:** [Direct answer to page question]. [1-2 sentences
of supporting context]. Continue reading for comprehensive details on [topic].
```

### Provider Mention Template
```
**[Provider Name]** offers [key differentiator]. With
[notable feature] and [another benefit], they serve those
seeking [relevant goal]. [Link to assessment]
```

### Consumer Notice Template
```tsx
<Card className="border-amber-500/50 bg-amber-50/50">
  <CardContent className="p-6">
    <div className="flex items-start gap-4">
      <AlertTriangle className="h-5 w-5 text-amber-600" />
      <div>
        <h2 className="text-lg font-bold">Consumer Notice</h2>
        <p>GOV Health Report is NOT an official government website...</p>
      </div>
    </div>
  </CardContent>
</Card>
```

### Related Resources Card
```tsx
<Card className="border-primary/30 bg-primary/5">
  <CardContent className="p-6">
    <h2 className="text-xl font-bold text-foreground mb-4">
      Related Resources
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

## Top Providers Component

Use the `Top3Providers` component on all guide pages:

```tsx
import { Top3Providers } from "@/components/sections/Top3Providers";

<Top3Providers
  title="Verified Provider Directory"
  subtitle="Independent assessments for this category."
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
- Group in "Related Resources" section at bottom

## Quality Checklist

Before publishing, ensure content:
- [ ] Includes prominent "NOT a government website" disclaimer
- [ ] Answers the user's primary question clearly
- [ ] Maintains professional, authoritative tone
- [ ] Includes Top3Providers component
- [ ] Has proper internal linking (4-6 related pages)
- [ ] Contains appropriate medical disclaimers
- [ ] Is scannable with headers and lists
- [ ] Has optimized title and meta description
- [ ] Includes relevant Unsplash image with alt text
- [ ] Links to related resources at bottom
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
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "[Page Title] 2025 | GOV Health Report",
  description: "[150-160 character description with keywords]",
  keywords: ["keyword1", "keyword2", "keyword3"],
};

export default function PageName() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative py-12 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
          {/* Back link, H1, intro text, image */}
        </section>

        {/* Consumer Notice */}
        <section className="py-4 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <p className="text-amber-800 text-sm">
              <strong>Notice:</strong> GOV Health Report is NOT an official
              government website and is not affiliated with any government agency.
            </p>
          </div>
        </section>

        {/* Verified Providers */}
        <Top3Providers title="..." subtitle="..." />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Cards with content */}
            {/* Related Resources card at bottom */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```
