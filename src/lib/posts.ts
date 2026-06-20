import postKitchen from "@/assets/post-kitchen.jpg";
import postDecor from "@/assets/post-decor.jpg";
import postChecklist from "@/assets/post-checklist.jpg";

export type CategorySlug = "zero-waste-kitchen" | "small-apartment-decor" | "eco-habits-budget";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  intro: string;
}

export const categories: Category[] = [
  {
    slug: "zero-waste-kitchen",
    name: "Zero-Waste Kitchen",
    shortName: "Zero-Waste Kitchen",
    intro:
      "Practical zero waste kitchen ideas for renters: composting in tiny spaces, plastic-free pantry swaps, and reducing food waste without a backyard or a big budget.",
  },
  {
    slug: "small-apartment-decor",
    name: "Small-Space Eco Decor & Storage",
    shortName: "Small Apartment Decor",
    intro:
      "Eco friendly small apartment decor on a budget — thrifted finds, renter-safe upgrades, sustainable storage solutions, and cozy styling that doesn't cost the earth.",
  },
  {
    slug: "eco-habits-budget",
    name: "Budget-Friendly Sustainable Habits",
    shortName: "Eco Habits on a Budget",
    intro:
      "Low waste lifestyle habits for small spaces. Simple, beginner-friendly routines and swaps that build a sustainable living apartment without overwhelm.",
  },
];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  toc: { id: string; label: string }[];
  body: { type: "p" | "h2" | "h3" | "ul"; id?: string; text?: string; items?: string[] }[];
}

export const posts: Post[] = [
  {
    slug: "small-apartment-eco-upgrade-checklist",
    title: "30-Day Small Apartment Eco-Upgrade Checklist (Under 100 Dollars)",
    excerpt:
      "A friendly, renter-safe 30-day plan to upgrade your small apartment with sustainable swaps — all for under $100 total.",
    category: "eco-habits-budget",
    date: "2025-06-10",
    readingTime: "8 min read",
    image: postChecklist,
    imageAlt: "Eco cleaning supplies arranged in a bamboo caddy",
    tags: ["checklist", "renters", "budget"],
    toc: [
      { id: "why", label: "Why a 30-day plan works" },
      { id: "week-1", label: "Week 1: Kitchen wins" },
      { id: "week-2", label: "Week 2: Cleaning & laundry" },
      { id: "week-3", label: "Week 3: Decor & storage" },
      { id: "week-4", label: "Week 4: Habits that stick" },
    ],
    body: [
      { type: "p", text: "If you live in a small apartment and you've been wanting to live a little greener, this 30-day small apartment eco-upgrade is for you. No renovations, no landlord permission, no $400 bamboo everything. Just small, doable swaps that add up." },
      { type: "h2", id: "why", text: "Why a 30-day plan works" },
      { type: "p", text: "Sustainable living can feel overwhelming, especially when every post you see costs $50 and assumes you own your home. Breaking it into one tiny upgrade a day keeps it gentle on your budget and your brain. Progress over perfection, always." },
      { type: "h2", id: "week-1", text: "Week 1: Kitchen wins" },
      { type: "ul", items: [
        "Swap paper towels for a stack of thrifted cotton rags",
        "Start a small countertop compost jar (freezer works too)",
        "Replace plastic wrap with beeswax wraps or a plate-on-bowl trick",
        "Refill one cleaning bottle instead of buying new",
      ]},
      { type: "h2", id: "week-2", text: "Week 2: Cleaning & laundry" },
      { type: "p", text: "Cleaning is one of the easiest places to cut waste. A spray bottle of vinegar and water handles most surfaces, and wool dryer balls last for years." },
      { type: "h2", id: "week-3", text: "Week 3: Decor & storage" },
      { type: "p", text: "This is where eco friendly small apartment decor really shines. Hit your local thrift store for glass jars, woven baskets, and a secondhand plant or two. Renter-safe command hooks turn any wall into vertical storage." },
      { type: "h2", id: "week-4", text: "Week 4: Habits that stick" },
      { type: "p", text: "The last week is about turning the swaps into routines: a reusable bag by the door, a meal plan on the fridge, and a once-a-week 'use it up' dinner. Sustainable living in a small apartment is mostly tiny habits done consistently." },
    ],
  },
  {
    slug: "zero-waste-kitchen-ideas-tiny-apartments",
    title: "Zero Waste Kitchen Ideas for Tiny Apartments",
    excerpt:
      "Realistic zero waste kitchen ideas for renters with two feet of counter space — storage, composting, and pantry swaps that actually fit.",
    category: "zero-waste-kitchen",
    date: "2025-06-05",
    readingTime: "6 min read",
    image: postKitchen,
    imageAlt: "Zero waste kitchen counter with glass jars and fresh herbs",
    tags: ["kitchen", "renters", "composting"],
    toc: [
      { id: "storage", label: "Storage when there's no pantry" },
      { id: "compost", label: "Composting in a small apartment" },
      { id: "swaps", label: "Pantry swaps that pay off" },
    ],
    body: [
      { type: "p", text: "Most zero waste kitchen content assumes you have a walk-in pantry. Here are the ideas that actually work in a galley kitchen or a studio." },
      { type: "h2", id: "storage", text: "Storage when there's no pantry" },
      { type: "p", text: "Clear glass jars are your best friend. Save pasta sauce and salsa jars, run them through the dishwasher, and you have a free pantry system. Stack them on a cheap shelf above the fridge or inside a cabinet for instant vertical storage." },
      { type: "h2", id: "compost", text: "Composting in a small apartment" },
      { type: "ul", items: [
        "Keep a small lidded container in the freezer — zero smell",
        "Drop scraps at a farmers' market or community garden weekly",
        "Try a countertop bokashi bin for true apartment composting",
      ]},
      { type: "h2", id: "swaps", text: "Pantry swaps that pay off" },
      { type: "p", text: "Bar dish soap, refillable cleaning concentrate, and reusable produce bags are the three swaps with the best return on effort. Start with one." },
    ],
  },
  {
    slug: "eco-friendly-small-apartment-decor-budget",
    title: "Eco Friendly Small Apartment Decor on a Budget",
    excerpt:
      "Thrifted, renter-safe, and plant-forward ideas for budget eco home decor that makes a small apartment feel intentional and warm.",
    category: "small-apartment-decor",
    date: "2025-05-28",
    readingTime: "7 min read",
    image: postDecor,
    imageAlt: "Thrifted ceramic vase with dried pampas grass on wooden side table",
    tags: ["decor", "thrifting", "budget"],
    toc: [
      { id: "thrift", label: "Where to actually thrift" },
      { id: "plants", label: "The plant rule" },
      { id: "renter-safe", label: "Renter-safe upgrades" },
    ],
    body: [
      { type: "p", text: "Eco friendly small apartment decor on a budget is mostly about buying less, buying secondhand, and adding life with plants. Here's the loose framework I use." },
      { type: "h2", id: "thrift", text: "Where to actually thrift" },
      { type: "p", text: "Estate sales beat thrift stores for ceramics and wood. Facebook Marketplace beats both for furniture if you can borrow a car. Buy Nothing groups are unbeatable for anything you'd otherwise throw out." },
      { type: "h2", id: "plants", text: "The plant rule" },
      { type: "p", text: "One real plant changes a small apartment more than $200 of new decor. Pothos and snake plants survive almost anything, including renters who travel." },
      { type: "h2", id: "renter-safe", text: "Renter-safe upgrades" },
      { type: "ul", items: [
        "Peel-and-stick everything: tile, wallpaper, hooks",
        "Floor lamps over hardwired fixtures",
        "Tension rods for plants, curtains, and even shelves",
      ]},
    ],
  },
  {
    slug: "beginner-sustainable-living-checklist-renters",
    title: "Beginner Sustainable Living Checklist for Renters",
    excerpt:
      "A no-guilt sustainable living checklist designed for renters and small-apartment dwellers. Start with five swaps, not fifty.",
    category: "eco-habits-budget",
    date: "2025-05-20",
    readingTime: "5 min read",
    image: postChecklist,
    imageAlt: "Hand checking off a paper checklist next to a coffee mug",
    tags: ["beginner", "checklist", "habits"],
    toc: [
      { id: "five", label: "The first five swaps" },
      { id: "mindset", label: "The renter mindset shift" },
    ],
    body: [
      { type: "p", text: "If you're brand new to sustainable living, ignore the influencers with $80 reusable everything. Start here." },
      { type: "h2", id: "five", text: "The first five swaps" },
      { type: "ul", items: [
        "A reusable water bottle you actually like",
        "A tote bag stashed in every coat pocket",
        "Cloth napkins (yes, even paper towels count)",
        "One refill of a cleaning product instead of a new bottle",
        "A library card",
      ]},
      { type: "h2", id: "mindset", text: "The renter mindset shift" },
      { type: "p", text: "You can't install solar panels, but you can choose what comes into your apartment and what doesn't. That is the whole game of a low waste lifestyle in a small space." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(slug: CategorySlug): Post[] {
  return posts.filter((p) => p.category === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 2): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
