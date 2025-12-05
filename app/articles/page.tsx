import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Weight Loss Articles & Research | Rx Saver Hub",
  description:
    "Expert articles on GLP-1 medications, weight loss treatments, and healthy lifestyle tips. Stay informed with the latest research and practical guides.",
  keywords: [
    "weight loss articles",
    "GLP-1 research",
    "semaglutide information",
    "tirzepatide articles",
    "weight loss tips",
    "obesity treatment research",
  ],
};

// Article data - in a real app this could come from a CMS or database
const articles = [
  {
    slug: "ideal-diet-while-taking-glp-1-weight-loss-medications",
    title: "Ideal Diet While Taking GLP-1 Weight Loss Medications",
    excerpt:
      "Learn the optimal diet while taking semaglutide or tirzepatide. Protein-first eating strategies, meal plans, and foods to avoid for maximum weight loss results.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Nutrition",
  },
  {
    slug: "do-weight-loss-pills-and-injections-work",
    title: "Do Weight Loss Pills and Injections Work?",
    excerpt:
      "Discover which weight loss medications actually work backed by clinical trials. Compare GLP-1 injections, prescription pills, and OTC supplements.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Research",
  },
  {
    slug: "ozempic-face",
    title: "Ozempic Face: Causes, Prevention & Treatment",
    excerpt:
      "Learn about 'Ozempic face' - the facial aging that can occur with rapid weight loss. Understand causes, prevention strategies, and treatment options.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "how-long-to-establish-new-weight-set-point",
    title: "How Long Does It Take to Establish a New Weight Set Point?",
    excerpt:
      "Understand weight set point theory and how long it takes your body to accept a new weight. Learn strategies to maintain weight loss long-term.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Science",
  },
  {
    slug: "best-fruits-for-weight-loss",
    title: "Best Fruits for Weight Loss",
    excerpt:
      "Discover the best fruits for weight loss including berries, grapefruit, and apples. Learn which fruits to eat and which to limit on your diet.",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "6 min read",
    category: "Nutrition",
  },
  {
    slug: "can-you-take-ozempic-while-pregnant",
    title: "Can You Take Ozempic While Pregnant?",
    excerpt:
      "Learn about Ozempic and pregnancy safety. Understand why semaglutide should be stopped before conceiving and what to do if you become pregnant.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Safety",
  },
  {
    slug: "who-should-not-take-ozempic",
    title: "Who Should Not Take Ozempic?",
    excerpt:
      "Learn who should avoid Ozempic (semaglutide). Comprehensive guide to contraindications, medical conditions requiring caution, drug interactions, and safer alternatives.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "10 min read",
    category: "Safety",
  },
  {
    slug: "do-glp-1-agonists-cause-gallstones",
    title: "Do GLP-1 Agonists Cause Gallstones?",
    excerpt:
      "Rapid weight loss from GLP-1 medications like semaglutide and tirzepatide can increase gallstone risk. Learn the science behind this connection and how to reduce your risk.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "can-ozempic-cause-depression",
    title: "Can Ozempic Cause Depression?",
    excerpt:
      "Learn about the relationship between Ozempic and depression. Understand what research shows about GLP-1 medications and mental health.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "who-should-not-take-mounjaro",
    title: "Who Should Not Take Mounjaro?",
    excerpt:
      "Learn who should avoid Mounjaro (tirzepatide). Comprehensive guide to contraindications, medical conditions requiring caution, and drug interactions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
  {
    slug: "ozempic-and-alcohol",
    title: "Ozempic and Alcohol: What You Need to Know",
    excerpt:
      "Learn about drinking alcohol while taking Ozempic. Understand the risks, side effects, and how to make informed decisions about alcohol consumption.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "how-to-travel-with-your-medication",
    title: "How to Travel With Your GLP-1 Medication",
    excerpt:
      "Complete guide to traveling with GLP-1 medications like Ozempic and Mounjaro. Learn about storage, TSA rules, international travel, and packing tips.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Lifestyle",
  },
  {
    slug: "online-weight-loss-coach",
    title: "Online Weight Loss Coach: Is It Worth It?",
    excerpt:
      "Learn about online weight loss coaching, what to look for in a coach, and whether it's worth the investment—especially if you're on GLP-1 medications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Resources",
  },
  {
    slug: "ozempic-babies",
    title: "Ozempic Babies: The Surprising Fertility Effect",
    excerpt:
      "Learn about 'Ozempic babies' - the phenomenon of unexpected pregnancies among women taking GLP-1 medications for weight loss.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Fertility",
  },
  {
    slug: "celebrities-on-weight-loss-drugs",
    title: "Celebrities on Weight Loss Drugs",
    excerpt:
      "Which celebrities have used Ozempic, Wegovy, and Mounjaro for weight loss? Learn about the Hollywood trend and what it means for you.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    slug: "semaglutide-and-alcohol",
    title: "Semaglutide and Alcohol: A Complete Guide",
    excerpt:
      "Can you drink alcohol while taking semaglutide? Learn about the interactions, risks, and surprising effects on alcohol consumption.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "compounded-vs-brand-name-glp-1",
    title: "Compounded vs Brand Name GLP-1: Which Is Better?",
    excerpt:
      "Compare compounded semaglutide to brand-name Ozempic and Wegovy. Understand safety, cost differences, and how to choose.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Medication",
  },
  {
    slug: "glp-1-and-exercise",
    title: "GLP-1 and Exercise: Maximizing Your Results",
    excerpt:
      "Discover the best exercise strategies while taking Ozempic or Mounjaro. Learn how to preserve muscle, boost metabolism, and maximize weight loss results.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Fitness",
  },
  {
    slug: "how-to-prevent-muscle-loss-on-glp-1",
    title: "How to Prevent Muscle Loss on GLP-1 Medications",
    excerpt:
      "Rapid weight loss can mean losing muscle. Learn science-backed strategies to preserve lean mass while taking semaglutide or tirzepatide.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "10 min read",
    category: "Fitness",
  },
  {
    slug: "ozempic-vs-mounjaro",
    title: "Ozempic vs Mounjaro: Which Is Better for Weight Loss?",
    excerpt:
      "Compare semaglutide (Ozempic) and tirzepatide (Mounjaro) for weight loss. See clinical trial results, side effects, costs, and which might work better for you.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "11 min read",
    category: "Comparison",
  },
  {
    slug: "how-long-does-ozempic-take-to-work",
    title: "How Long Does Ozempic Take to Work?",
    excerpt:
      "Learn what to expect when starting Ozempic. Understand the realistic timeline for appetite changes, weight loss, and when you'll see results.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Getting Started",
  },
  {
    slug: "ozempic-shortage-what-to-do",
    title: "Ozempic Shortage: What to Do If You Can't Get Your Medication",
    excerpt:
      "Facing an Ozempic or Wegovy shortage? Learn about alternatives, how to find available pharmacies, and what to do if you miss doses.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Practical",
  },
  {
    slug: "what-happens-when-you-stop-ozempic",
    title: "What Happens When You Stop Taking Ozempic?",
    excerpt:
      "Considering stopping Ozempic? Learn what to expect, how to prevent weight regain, and strategies for maintaining your results long-term.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Maintenance",
  },
  {
    slug: "managing-ozempic-nausea",
    title: "Managing Ozempic Nausea: Proven Tips & Strategies",
    excerpt:
      "Struggling with Ozempic or Wegovy nausea? Learn proven strategies to reduce GLP-1 side effects including eating tips, timing, and when to see your doctor.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-medications-and-pcos",
    title: "GLP-1 Medications and PCOS: What You Need to Know",
    excerpt:
      "Can GLP-1 medications help with PCOS? Learn about semaglutide and tirzepatide benefits for polycystic ovary syndrome, including weight loss and fertility effects.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Conditions",
  },
  {
    slug: "does-insurance-cover-glp-1",
    title: "Does Insurance Cover GLP-1 Medications for Weight Loss?",
    excerpt:
      "Learn about insurance coverage for Ozempic, Wegovy, and Mounjaro. Tips for getting prior authorization, manufacturer savings programs, and affordable alternatives.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Cost & Access",
  },
  {
    slug: "ozempic-for-diabetes-vs-weight-loss",
    title: "Ozempic for Diabetes vs Weight Loss: Key Differences",
    excerpt:
      "Understand the differences between using Ozempic for diabetes and Wegovy for weight loss. Same medication, different indications, dosing, and insurance coverage.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Medication",
  },
  {
    slug: "glp-1-side-effects-timeline",
    title: "GLP-1 Side Effects Timeline: What to Expect Week by Week",
    excerpt:
      "Learn when GLP-1 side effects typically occur and when they resolve. Week-by-week timeline for Ozempic and Mounjaro side effects, plus warning signs to watch for.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Side Effects",
  },
  {
    slug: "ozempic-constipation-relief",
    title: "Managing Constipation on GLP-1 Medications",
    excerpt:
      "Dealing with constipation on Ozempic or Mounjaro? Learn why GLP-1s cause constipation and proven strategies for relief including fiber, hydration, and supplements.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-thyroid",
    title: "GLP-1 Medications and Thyroid Health: What You Need to Know",
    excerpt:
      "Understand the thyroid warning on GLP-1 medications. Learn who should avoid Ozempic and Mounjaro, and what thyroid conditions are safe for treatment.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
  {
    slug: "ozempic-diarrhea-management",
    title: "Managing Diarrhea on GLP-1 Medications",
    excerpt:
      "Experiencing diarrhea on Ozempic or Mounjaro? Learn why it happens, how to manage it, and when to contact your doctor.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-hair-loss",
    title: "GLP-1 Medications and Hair Loss: Causes & Prevention",
    excerpt:
      "Worried about hair loss on Ozempic or Mounjaro? Learn why rapid weight loss causes hair shedding and strategies to minimize it.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-heart-health",
    title: "GLP-1 Medications and Heart Health: The Cardiovascular Benefits",
    excerpt:
      "Discover how GLP-1 medications like Ozempic and Mounjaro benefit heart health. Learn about the SELECT trial showing 20% reduction in cardiovascular events.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-and-sleep-apnea",
    title: "GLP-1 Medications and Sleep Apnea: Breakthrough Treatment",
    excerpt:
      "Discover how GLP-1 medications like tirzepatide are revolutionizing sleep apnea treatment. Learn about FDA approval, research results, and what this means for CPAP users.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-and-kidney-health",
    title: "GLP-1 Medications and Kidney Health: Protective Effects",
    excerpt:
      "Learn how GLP-1 medications like semaglutide protect kidney health. Understand the FLOW trial results showing 24% reduction in kidney disease progression.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-and-fatty-liver",
    title: "GLP-1 Medications and Fatty Liver Disease: Treatment Hope",
    excerpt:
      "Can GLP-1 medications treat fatty liver disease? Learn how semaglutide and tirzepatide reduce liver fat, inflammation, and may reverse early fibrosis.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-and-menstruation",
    title: "GLP-1 Medications and Menstruation: What Women Need to Know",
    excerpt:
      "Experiencing menstrual changes on Ozempic or Mounjaro? Learn about period irregularities, increased fertility, and birth control considerations.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Women's Health",
  },
  {
    slug: "glp-1-and-healthy-aging",
    title: "GLP-1 Medications and Healthy Aging: Beyond Weight Loss",
    excerpt:
      "Explore emerging research on GLP-1 medications and healthy aging. Learn about potential benefits for inflammation, brain health, and longevity.",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Research",
  },
  {
    slug: "ozempic-headaches",
    title: "Managing Headaches on GLP-1 Medications",
    excerpt:
      "Experiencing headaches on Ozempic or Mounjaro? Learn why GLP-1 medications can cause headaches and proven strategies for relief.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-anxiety",
    title: "GLP-1 Medications and Anxiety: What You Need to Know",
    excerpt:
      "Concerned about anxiety on Ozempic or Mounjaro? Learn about the relationship between GLP-1 medications and mental health, plus tips for managing mood changes.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Mental Health",
  },
  {
    slug: "ozempic-fatigue",
    title: "Managing Fatigue on GLP-1 Medications",
    excerpt:
      "Feeling tired on Ozempic or Mounjaro? Learn why GLP-1 medications can cause fatigue and strategies to boost your energy during treatment.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-joint-pain",
    title: "GLP-1 Medications and Joint Pain: Causes & Relief",
    excerpt:
      "Experiencing joint pain on Ozempic? Learn about the relationship between GLP-1 medications and joint health, and how weight loss typically improves joint pain.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-and-blood-pressure",
    title: "GLP-1 Medications and Blood Pressure: What to Know",
    excerpt:
      "Learn how GLP-1 medications like Ozempic and Mounjaro affect blood pressure. Understand the cardiovascular benefits and what to monitor during treatment.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Benefits",
  },
  {
    slug: "glp-1-and-digestion",
    title: "How GLP-1 Medications Affect Your Digestive System",
    excerpt:
      "Learn how Ozempic and other GLP-1 medications affect digestion, including delayed gastric emptying. Tips for managing digestive side effects.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Side Effects",
  },
  {
    slug: "glp-1-meal-timing",
    title: "Meal Timing on GLP-1 Medications: A Complete Guide",
    excerpt:
      "Discover the best meal timing strategies while taking GLP-1 medications. Learn when and how often to eat for optimal results and minimal side effects.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Lifestyle",
  },
  {
    slug: "glp-1-hydration-guide",
    title: "Staying Hydrated on GLP-1 Medications",
    excerpt:
      "Learn why proper hydration is crucial while taking GLP-1 medications. Discover how much water you need and strategies to stay hydrated.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "glp-1-protein-requirements",
    title: "Protein Requirements on GLP-1 Medications",
    excerpt:
      "Discover why protein is critical while taking GLP-1 medications. Learn how much you need and the best sources to prevent muscle loss.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Nutrition",
  },
  {
    slug: "glp-1-surgery-preparation",
    title: "Surgery While Taking GLP-1 Medications: What You Need to Know",
    excerpt:
      "Essential information about GLP-1 medications and surgery. Learn when to stop Ozempic or Mounjaro before procedures and aspiration risks.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "Safety",
  },
];

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Weight Loss <span className="text-primary">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert-researched articles on GLP-1 medications, weight loss treatments,
              and practical tips for your health journey. Stay informed with the latest
              science and guidance.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 md:col-span-2 flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-primary font-medium">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">
                    No articles yet. Check back soon for expert-researched content
                    on weight loss treatments.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Browse Guides Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Looking for Quick Guides?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Check out our practical guides on injection sites, timing, supplements, and more.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Semaglutide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins on Semaglutide
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Semaglutide Programs
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
