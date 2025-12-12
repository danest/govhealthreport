import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SchemaScript } from "@/components/SchemaScript";
import { generateCollectionPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  AlertTriangle,
  BookOpen,
  Search,
  Filter,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Health Information Articles & Research | GOV Health Report",
  description:
    "Educational articles on GLP-1 medications, weight loss treatments, and health information. Research-based content for informational purposes only.",
  keywords: [
    "weight loss articles",
    "GLP-1 research",
    "semaglutide information",
    "tirzepatide articles",
    "weight loss tips",
    "obesity treatment research",
  ],
  alternates: {
    canonical: `${SITE_URL}/articles`,
  },
  openGraph: {
    title: "Health Information Articles & Research | GOV Health Report",
    description:
      "Educational articles on GLP-1 medications, weight loss treatments, and health information. Research-based content for informational purposes only.",
    url: `${SITE_URL}/articles`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Information Articles & Research | GOV Health Report",
    description:
      "Educational articles on GLP-1 medications, weight loss treatments, and health information. Research-based content for informational purposes only.",
  },
};

// Article data - shuffled for variety
const articles = [
  {
    slug: "semaglutide-vs-tirzepatide",
    title: "Semaglutide vs Tirzepatide: Which Is Better for Weight Loss?",
    excerpt:
      "Compare semaglutide (Ozempic/Wegovy) vs tirzepatide (Mounjaro/Zepbound). Understand the differences in weight loss, side effects, and cost.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "10 min read",
    category: "Comparisons",
  },
  {
    slug: "glp-1-heart-health",
    title: "GLP-1 Medications and Heart Health: The Cardiovascular Benefits",
    excerpt:
      "Discover how GLP-1 medications like Ozempic and Mounjaro benefit heart health. Learn about the SELECT trial showing 20% reduction in cardiovascular events.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Benefits",
  },
  {
    slug: "managing-ozempic-nausea",
    title: "Managing Ozempic Nausea: Proven Tips & Strategies",
    excerpt:
      "Struggling with Ozempic or Wegovy nausea? Learn proven strategies to reduce GLP-1 side effects including eating tips, timing, and when to see your doctor.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "how-to-prevent-muscle-loss-on-glp-1",
    title: "How to Prevent Muscle Loss on GLP-1 Medications",
    excerpt:
      "Rapid weight loss can mean losing muscle. Learn science-backed strategies to preserve lean mass while taking semaglutide or tirzepatide.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "10 min read",
    category: "Fitness",
  },
  {
    slug: "compounded-glp-1-medications",
    title: "Compounded GLP-1 Medications: What You Need to Know",
    excerpt:
      "Everything you need to know about compounded GLP-1 medications. Learn about 503A vs 503B pharmacies, safety concerns, and cost savings.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Cost Savings",
  },
  {
    slug: "glp-1-and-food-noise",
    title: "GLP-1 and Food Noise: How These Medications Quiet the Mind",
    excerpt:
      "Discover how GLP-1 medications like Ozempic and Mounjaro reduce 'food noise' - the constant mental chatter about eating.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Science",
  },
  {
    slug: "who-should-not-take-ozempic",
    title: "Who Should Not Take Ozempic?",
    excerpt:
      "Learn who should avoid Ozempic (semaglutide). Comprehensive guide to contraindications, medical conditions requiring caution, drug interactions, and safer alternatives.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "10 min read",
    category: "Safety",
  },
  {
    slug: "does-insurance-cover-glp-1",
    title: "Does Insurance Cover GLP-1 Medications for Weight Loss?",
    excerpt:
      "Learn about insurance coverage for Ozempic, Wegovy, and Mounjaro. Tips for getting prior authorization, manufacturer savings programs, and affordable alternatives.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Cost & Access",
  },
  {
    slug: "ozempic-face",
    title: "Ozempic Face: Causes, Prevention & Treatment",
    excerpt:
      "Learn about 'Ozempic face' - the facial aging that can occur with rapid weight loss. Understand causes, prevention strategies, and treatment options.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-sleep-apnea",
    title: "GLP-1 Medications and Sleep Apnea: Breakthrough Treatment",
    excerpt:
      "Discover how GLP-1 medications like tirzepatide are revolutionizing sleep apnea treatment. Learn about FDA approval, research results, and what this means for CPAP users.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-protein-requirements",
    title: "Protein Requirements on GLP-1 Medications",
    excerpt:
      "Discover why protein is critical while taking GLP-1 medications. Learn how much you need and the best sources to prevent muscle loss.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Nutrition",
  },
  {
    slug: "what-to-do-if-you-miss-a-glp-1-dose",
    title: "What to Do If You Miss a GLP-1 Dose",
    excerpt:
      "Step-by-step guide for what to do when you miss an Ozempic, Wegovy, Mounjaro, or Zepbound dose. Learn the rules for each medication.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "6 min read",
    category: "Medication Guide",
  },
  {
    slug: "ozempic-babies",
    title: "Ozempic Babies: The Surprising Fertility Effect",
    excerpt:
      "Learn about 'Ozempic babies' - the phenomenon of unexpected pregnancies among women taking GLP-1 medications for weight loss.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Fertility",
  },
  {
    slug: "glp-1-and-exercise",
    title: "GLP-1 and Exercise: Maximizing Your Results",
    excerpt:
      "Discover the best exercise strategies while taking Ozempic or Mounjaro. Learn how to preserve muscle, boost metabolism, and maximize weight loss results.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Fitness",
  },
  {
    slug: "glp-1-side-effects-timeline",
    title: "GLP-1 Side Effects Timeline: What to Expect Week by Week",
    excerpt:
      "Learn when GLP-1 side effects typically occur and when they resolve. Week-by-week timeline for Ozempic and Mounjaro side effects, plus warning signs to watch for.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Side Effects",
  },
  {
    slug: "how-to-travel-with-your-medication",
    title: "How to Travel With Your GLP-1 Medication",
    excerpt:
      "Complete guide to traveling with GLP-1 medications like Ozempic and Mounjaro. Learn about storage, TSA rules, international travel, and packing tips.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Lifestyle",
  },
  {
    slug: "glp-1-and-kidney-health",
    title: "GLP-1 Medications and Kidney Health: Protective Effects",
    excerpt:
      "Learn how GLP-1 medications like semaglutide protect kidney health. Understand the FLOW trial results showing 24% reduction in kidney disease progression.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Benefits",
  },
  {
    slug: "zepbound-vs-mounjaro",
    title: "Zepbound vs Mounjaro: Understanding the Difference",
    excerpt:
      "Learn the difference between Zepbound and Mounjaro. Both contain tirzepatide but have different FDA approvals - find out which is right for you.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Comparisons",
  },
  {
    slug: "ideal-diet-while-taking-glp-1-weight-loss-medications",
    title: "Ideal Diet While Taking GLP-1 Weight Loss Medications",
    excerpt:
      "Learn the optimal diet while taking semaglutide or tirzepatide. Protein-first eating strategies, meal plans, and foods to avoid for maximum weight loss results.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Nutrition",
  },
  {
    slug: "glp-1-and-thyroid",
    title: "GLP-1 Medications and Thyroid Health: What You Need to Know",
    excerpt:
      "Understand the thyroid warning on GLP-1 medications. Learn who should avoid Ozempic and Mounjaro, and what thyroid conditions are safe for treatment.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
  {
    slug: "maintaining-weight-loss-after-stopping-glp-1",
    title: "Maintaining Weight Loss After Stopping GLP-1 Medications",
    excerpt:
      "What happens when you stop taking GLP-1 medications? Learn about weight regain research, maintenance strategies, and long-term options.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Weight Management",
  },
  {
    slug: "glp-1-hair-loss",
    title: "GLP-1 Medications and Hair Loss: Causes & Prevention",
    excerpt:
      "Worried about hair loss on Ozempic or Mounjaro? Learn why rapid weight loss causes hair shedding and strategies to minimize it.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "compounded-vs-brand-name-glp-1",
    title: "Compounded vs Brand Name GLP-1: Which Is Better?",
    excerpt:
      "Compare compounded semaglutide to brand-name Ozempic and Wegovy. Understand safety, cost differences, and how to choose.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Medication",
  },
  {
    slug: "glp-1-and-menstruation",
    title: "GLP-1 Medications and Menstruation: What Women Need to Know",
    excerpt:
      "Experiencing menstrual changes on Ozempic or Mounjaro? Learn about period irregularities, increased fertility, and birth control considerations.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Women's Health",
  },
  {
    slug: "glp-1-dose-titration",
    title: "GLP-1 Dose Titration: Why Starting Low Matters",
    excerpt:
      "Learn why GLP-1 medications require gradual dose increases. Complete titration schedules for semaglutide and tirzepatide.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Medication Guide",
  },
  {
    slug: "do-weight-loss-pills-and-injections-work",
    title: "Do Weight Loss Pills and Injections Work?",
    excerpt:
      "Discover which weight loss medications actually work backed by clinical trials. Compare GLP-1 injections, prescription pills, and OTC supplements.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Research",
  },
  {
    slug: "ozempic-and-alcohol",
    title: "Ozempic and Alcohol: What You Need to Know",
    excerpt:
      "Learn about drinking alcohol while taking Ozempic. Understand the risks, side effects, and how to make informed decisions about alcohol consumption.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "glp-1-and-fatty-liver",
    title: "GLP-1 Medications and Fatty Liver Disease: Treatment Hope",
    excerpt:
      "Can GLP-1 medications treat fatty liver disease? Learn how semaglutide and tirzepatide reduce liver fat, inflammation, and may reverse early fibrosis.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-surgery-preparation",
    title: "Surgery While Taking GLP-1 Medications: What You Need to Know",
    excerpt:
      "Essential information about GLP-1 medications and surgery. Learn when to stop Ozempic or Mounjaro before procedures and aspiration risks.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
  {
    slug: "ozempic-vs-mounjaro",
    title: "Ozempic vs Mounjaro: Which Is Better for Weight Loss?",
    excerpt:
      "Compare semaglutide (Ozempic) and tirzepatide (Mounjaro) for weight loss. See clinical trial results, side effects, costs, and which might work better for you.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "11 min read",
    category: "Comparison",
  },
  {
    slug: "glp-1-and-anxiety",
    title: "GLP-1 Medications and Anxiety: What You Need to Know",
    excerpt:
      "Concerned about anxiety on Ozempic or Mounjaro? Learn about the relationship between GLP-1 medications and mental health, plus tips for managing mood changes.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Mental Health",
  },
  {
    slug: "how-long-does-ozempic-take-to-work",
    title: "How Long Does Ozempic Take to Work?",
    excerpt:
      "Learn what to expect when starting Ozempic. Understand the realistic timeline for appetite changes, weight loss, and when you'll see results.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Getting Started",
  },
  {
    slug: "glp-1-medications-and-pcos",
    title: "GLP-1 Medications and PCOS: What You Need to Know",
    excerpt:
      "Can GLP-1 medications help with PCOS? Learn about semaglutide and tirzepatide benefits for polycystic ovary syndrome, including weight loss and fertility effects.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Conditions",
  },
  {
    slug: "celebrities-on-weight-loss-drugs",
    title: "Celebrities on Weight Loss Drugs",
    excerpt:
      "Which celebrities have used Ozempic, Wegovy, and Mounjaro for weight loss? Learn about the Hollywood trend and what it means for you.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    slug: "glp-1-injection-site-rotation",
    title: "GLP-1 Injection Site Rotation: Best Practices",
    excerpt:
      "Learn proper injection site rotation for Ozempic, Wegovy, Mounjaro, and Zepbound. Prevent skin problems and ensure consistent absorption.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "6 min read",
    category: "Medication Guide",
  },
  {
    slug: "ozempic-constipation-relief",
    title: "Managing Constipation on GLP-1 Medications",
    excerpt:
      "Dealing with constipation on Ozempic or Mounjaro? Learn why GLP-1s cause constipation and proven strategies for relief including fiber, hydration, and supplements.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-blood-pressure",
    title: "GLP-1 Medications and Blood Pressure: What to Know",
    excerpt:
      "Learn how GLP-1 medications like Ozempic and Mounjaro affect blood pressure. Understand the cardiovascular benefits and what to monitor during treatment.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "how-long-to-establish-new-weight-set-point",
    title: "How Long Does It Take to Establish a New Weight Set Point?",
    excerpt:
      "Understand weight set point theory and how long it takes your body to accept a new weight. Learn strategies to maintain weight loss long-term.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Science",
  },
  {
    slug: "wegovy-vs-ozempic",
    title: "Wegovy vs Ozempic: What's the Difference?",
    excerpt:
      "Understand the differences between Wegovy and Ozempic. Same medication, different uses - learn about dosing, FDA approval, and insurance coverage.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Comparisons",
  },
  {
    slug: "glp-1-hydration-guide",
    title: "Staying Hydrated on GLP-1 Medications",
    excerpt:
      "Learn why proper hydration is crucial while taking GLP-1 medications. Discover how much water you need and strategies to stay hydrated.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "can-ozempic-cause-depression",
    title: "Can Ozempic Cause Depression?",
    excerpt:
      "Learn about the relationship between Ozempic and depression. Understand what research shows about GLP-1 medications and mental health.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "switching-between-glp-1-medications",
    title: "Switching Between GLP-1 Medications: A Complete Guide",
    excerpt:
      "Everything you need to know about switching between semaglutide and tirzepatide. Learn proper transition protocols and what to expect.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Medication Guide",
  },
  {
    slug: "glp-1-medications-for-older-adults",
    title: "GLP-1 Medications for Older Adults: Special Considerations",
    excerpt:
      "Important considerations for older adults taking GLP-1 medications. Learn about muscle preservation, medication interactions, and monitoring.",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Safety",
  },
  {
    slug: "online-weight-loss-coach",
    title: "Online Weight Loss Coach: Is It Worth It?",
    excerpt:
      "Learn about online weight loss coaching, what to look for in a coach, and whether it's worth the investment—especially if you're on GLP-1 medications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Resources",
  },
  {
    slug: "ozempic-fatigue",
    title: "Managing Fatigue on GLP-1 Medications",
    excerpt:
      "Feeling tired on Ozempic or Mounjaro? Learn why GLP-1 medications can cause fatigue and strategies to boost your energy during treatment.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "do-glp-1-agonists-cause-gallstones",
    title: "Do GLP-1 Agonists Cause Gallstones?",
    excerpt:
      "Rapid weight loss from GLP-1 medications like semaglutide and tirzepatide can increase gallstone risk. Learn the science behind this connection and how to reduce your risk.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "oral-vs-injectable-glp-1",
    title: "Oral vs Injectable GLP-1s: Pros and Cons",
    excerpt:
      "Compare oral semaglutide (Rybelsus) with injectable GLP-1s. Understand the differences in effectiveness, convenience, and cost.",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Medication Guide",
  },
  {
    slug: "ozempic-for-diabetes-vs-weight-loss",
    title: "Ozempic for Diabetes vs Weight Loss: Key Differences",
    excerpt:
      "Understand the differences between using Ozempic for diabetes and Wegovy for weight loss. Same medication, different indications, dosing, and insurance coverage.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Medication",
  },
  {
    slug: "glp-1-meal-timing",
    title: "Meal Timing on GLP-1 Medications: A Complete Guide",
    excerpt:
      "Discover the best meal timing strategies while taking GLP-1 medications. Learn when and how often to eat for optimal results and minimal side effects.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Lifestyle",
  },
  {
    slug: "best-fruits-for-weight-loss",
    title: "Best Fruits for Weight Loss",
    excerpt:
      "Discover the best fruits for weight loss including berries, grapefruit, and apples. Learn which fruits to eat and which to limit on your diet.",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "6 min read",
    category: "Nutrition",
  },
  {
    slug: "glp-1-and-healthy-aging",
    title: "GLP-1 Medications and Healthy Aging: Beyond Weight Loss",
    excerpt:
      "Explore emerging research on GLP-1 medications and healthy aging. Learn about potential benefits for inflammation, brain health, and longevity.",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Research",
  },
  {
    slug: "who-should-not-take-mounjaro",
    title: "Who Should Not Take Mounjaro?",
    excerpt:
      "Learn who should avoid Mounjaro (tirzepatide). Comprehensive guide to contraindications, medical conditions requiring caution, and drug interactions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
  {
    slug: "glp-1-and-digestion",
    title: "How GLP-1 Medications Affect Your Digestive System",
    excerpt:
      "Learn how Ozempic and other GLP-1 medications affect digestion, including delayed gastric emptying. Tips for managing digestive side effects.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Side Effects",
  },
  {
    slug: "ozempic-headaches",
    title: "Managing Headaches on GLP-1 Medications",
    excerpt:
      "Experiencing headaches on Ozempic or Mounjaro? Learn why GLP-1 medications can cause headaches and proven strategies for relief.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "semaglutide-and-alcohol",
    title: "Semaglutide and Alcohol: A Complete Guide",
    excerpt:
      "Can you drink alcohol while taking semaglutide? Learn about the interactions, risks, and surprising effects on alcohol consumption.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "what-happens-when-you-stop-ozempic",
    title: "What Happens When You Stop Taking Ozempic?",
    excerpt:
      "Considering stopping Ozempic? Learn what to expect, how to prevent weight regain, and strategies for maintaining your results long-term.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "9 min read",
    category: "Maintenance",
  },
  {
    slug: "can-you-take-ozempic-while-pregnant",
    title: "Can You Take Ozempic While Pregnant?",
    excerpt:
      "Learn about Ozempic and pregnancy safety. Understand why semaglutide should be stopped before conceiving and what to do if you become pregnant.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Safety",
  },
  {
    slug: "glp-1-and-joint-pain",
    title: "GLP-1 Medications and Joint Pain: Causes & Relief",
    excerpt:
      "Experiencing joint pain on Ozempic? Learn about the relationship between GLP-1 medications and joint health, and how weight loss typically improves joint pain.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "ozempic-shortage-what-to-do",
    title: "Ozempic Shortage: What to Do If You Can't Get Your Medication",
    excerpt:
      "Facing an Ozempic or Wegovy shortage? Learn about alternatives, how to find available pharmacies, and what to do if you miss doses.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "8 min read",
    category: "Practical",
  },
  {
    slug: "ozempic-diarrhea-management",
    title: "Managing Diarrhea on GLP-1 Medications",
    excerpt:
      "Experiencing diarrhea on Ozempic or Mounjaro? Learn why it happens, how to manage it, and when to contact your doctor.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 9, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
];

// Get unique categories
const categories = Array.from(new Set(articles.map(a => a.category))).sort();

export default function ArticlesPage() {
  const collectionSchema = generateCollectionPageSchema(
    "Health Information Articles & Research",
    "Educational articles on GLP-1 medications, weight loss treatments, and health information. Research-based content for informational purposes only.",
    `${SITE_URL}/articles`
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <SchemaScript schema={collectionSchema} />
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-6xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Health Information Articles
                </h1>
                <p className="text-sm text-gray-600">
                  Educational Content Library • {articles.length} Publications Available
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="py-4 bg-[#a31621]">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Important:</strong> This content is for informational purposes only and does not constitute medical advice.
                Always consult a qualified healthcare provider before making health decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-3 bg-[#003366] text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#ffc72c]" />
                  <strong>{articles.length}</strong> Articles
                </span>
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-[#ffc72c]" />
                  <strong>{categories.length}</strong> Categories
                </span>
              </div>
              <span className="text-white/80">
                Research-based educational content
              </span>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 12).map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-[#e8eef4] text-[#003366] text-sm rounded-full font-medium"
                >
                  {category}
                </span>
              ))}
              {categories.length > 12 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  +{categories.length - 12} more
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Link key={article.slug} href={`/articles/${article.slug}`}>
                  <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#003366] hover:shadow-lg transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-40">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-0 left-0 bg-[#003366] text-white text-xs font-bold px-2 py-1">
                        #{String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="bg-[#ffc72c] text-[#003366] text-xs font-bold px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h2 className="text-base font-bold text-[#003366] mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-[#003366] font-medium">
                          Read Article
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="bg-white border-2 border-gray-200 rounded-lg p-12 text-center">
                <p className="text-gray-600">
                  No articles yet. Check back soon for educational content.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Guides Section */}
        <section className="py-8 bg-white border-t-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-[#e8eef4] border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Search className="h-5 w-5" />
                <span className="font-medium">Quick Reference Guides</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Access our practical quick-reference guides on injection sites, timing, supplements, and more.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="flex items-center gap-2 p-3 bg-white rounded border border-gray-200 text-[#003366] font-medium hover:bg-[#003366] hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Injection Sites Guide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="flex items-center gap-2 p-3 bg-white rounded border border-gray-200 text-[#003366] font-medium hover:bg-[#003366] hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Best Time to Take
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="flex items-center gap-2 p-3 bg-white rounded border border-gray-200 text-[#003366] font-medium hover:bg-[#003366] hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Vitamin Guide
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="flex items-center gap-2 p-3 bg-white rounded border border-gray-200 text-[#003366] font-medium hover:bg-[#003366] hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Online Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Footer */}
        <section className="py-6 bg-[#f59e0b]/10 border-t border-[#f59e0b]/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#92400e] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[#92400e]">
                <p className="font-medium mb-1">Content Disclaimer</p>
                <p>
                  Articles are compiled from publicly available sources and may use AI assistance.
                  Information may not reflect the most current medical research. Always verify with
                  healthcare professionals and official sources before making health decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
