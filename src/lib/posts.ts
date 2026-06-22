import postKitchen from "@/assets/post-kitchen.jpg";
import postDecor from "@/assets/post-decor.jpg";
import postChecklist from "@/assets/post-checklist.jpg";
import zeroWastePin1 from "@/assets/ZeroWastePin1.png";
import zeroWastePin2 from "@/assets/ZeroWastePin2.png";

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
  slug: "low-waste-kitchen-tips-chef-habits",
  title: "Low Waste Kitchen Tips: 11 Habits Chefs Use to Cut Food Waste",
  excerpt:
    "Steal 11 chef-inspired low waste kitchen habits that cut food waste, save money, and work in any small apartment.",
  category: "zero-waste-kitchen",
  date: "2026-06-21",
  readingTime: "7 min read",
  image: zeroWastePin2, // import this in your file
  imageAlt:
    "Small apartment kitchen with glass jars, fresh vegetables, and a cutting board laid out for cooking.",
  tags: [
    "low waste kitchen",
    "zero waste cooking",
    "reduce food waste",
    "sustainable living",
    "small apartment kitchen"
  ],
  toc: [
    { id: "why-low-waste-kitchen", label: "Why Low Waste Kitchen Habits Matter" },
    { id: "plan-meals-around-what-you-have", label: "Plan Meals Around What You Already Have" },
    { id: "eat-me-first-shelf", label: "Create an “Eat Me First” Shelf" },
    { id: "flex-recipes", label: "Use Flexible Recipes for Leftovers" },
    { id: "treat-scraps-like-ingredients", label: "Treat Scraps Like Ingredients" },
    { id: "skip-unnecessary-peeling", label: "Skip Unnecessary Peeling" },
    { id: "batch-cook-components", label: "Batch Cook Components" },
    { id: "freeze-early", label: "Freeze Food Early, Not at the Last Minute" },
    { id: "leftovers-night", label: "Schedule a Weekly Leftovers Night" },
    { id: "portion-like-a-pro", label: "Portion Like a Pro" },
    { id: "label-and-store-smart", label: "Label, Date, and Store Food Smart" },
    { id: "compost-and-start-small", label: "Compost What You Can & Start Small" }
  ],
  body: [
    {
      type: "p",
      text:
        "If your trash fills up with food and packaging every week, you’re not alone—and your grocery bill is paying the price. The good news is that many of the best low waste kitchen tips come straight from restaurant chefs and zero‑waste cooks who are forced to use every ingredient to the max.[web:182][web:185][web:186][web:187][web:196]"
    },
    {
      type: "p",
      text:
        "This guide breaks down 11 chef‑inspired habits you can use in a small apartment kitchen to reduce food waste, save money, and make better food—without needing special tools or a huge pantry.[web:182][web:185][web:186][web:192][web:195]"
    },

    {
      type: "h2",
      id: "why-low-waste-kitchen",
      text: "Why Low Waste Kitchen Habits Matter"
    },
    {
      type: "p",
      text:
        "Globally, households waste a huge portion of food they buy, mostly through overbuying, poor storage, and forgotten leftovers.[web:186][web:189][web:195] Food waste doesn’t just cost money; it also wastes all the water, energy, and transport that went into growing and shipping that food.[web:186][web:187][web:192]"
    },
    {
      type: "p",
      text:
        "Professional kitchens run on tight margins, so chefs have to squeeze maximum value out of every carrot, loaf of bread, and herb bunch. Many of their habits transfer perfectly to a home kitchen—and especially to small apartments where space is limited and wasted food is felt immediately.[web:182][web:185][web:186][web:188]"
    },

    {
      type: "h2",
      id: "plan-meals-around-what-you-have",
      text: "Plan Meals Around What You Already Have"
    },
    {
      type: "p",
      text:
        "Chefs rarely order new ingredients without checking inventory first, because over‑ordering leads to spoilage and lost profit.[web:185][web:186][web:192] At home, planning meals around what you already own is one of the strongest low‑waste habits you can build."
    },
    {
      type: "ul",
      items: [
        "Before you shop, quickly scan your fridge, freezer, and pantry and list ingredients that need to be used soon, especially fresh produce and dairy.[web:186][web:189][web:192][web:195]",
        "Choose recipes that feature those ingredients first, then add only the items you truly need to make them work.[web:186][web:187][web:192][web:195]",
        "Keep a short weekly note in your phone or on the fridge labeled “Use This First” so you remember what to build meals around.[web:186][web:192]"
      ]
    },

    {
      type: "h2",
      id: "eat-me-first-shelf",
      text: "Create an “Eat Me First” Shelf"
    },
    {
      type: "p",
      text:
        "Many restaurant kitchens use clearly labeled bins or sections for ingredients that need to be used immediately. At home, an “Eat Me First” shelf is a simple way to copy that system and keep aging items visible.[web:185][web:186][web:189][web:192]"
    },
    {
      type: "ul",
      items: [
        "Pick one shelf or bin in your fridge and label it “Eat Me First.” Put leftovers and foods close to their expiry date there.[web:186][web:189][web:192]",
        "Create a smaller version in the pantry for near‑expiry dry goods, snacks, or baking ingredients.[web:173][web:186][web:192]",
        "Check this shelf when planning lunch, snacks, or dinner so the oldest items get used before you open something new.[web:186][web:189]"
      ]
    },

    {
      type: "h2",
      id: "flex-recipes",
      text: "Use Flexible Recipes for Leftovers"
    },
    {
      type: "p",
      text:
        "Restaurants rely on flexible “catch‑all” recipes—like soups, curries, grain bowls, and frittatas—to use up mixed leftover ingredients.[web:184][web:186][web:187][web:193][web:196] At home, relying less on rigid recipes and more on formats makes it much easier to use what you have instead of running to the store for one missing item."
    },
    {
      type: "ul",
      items: [
        "Stir‑fries, curries, and fried rice are ideal for mixed vegetables, leftover chicken, tofu, or beans.[web:184][web:186][web:187][web:193][web:196]",
        "Grain bowls, tacos, and wraps handle small amounts of chopped veg, cooked meat, or roasted tray leftovers.[web:184][web:186][web:192][web:193]",
        "Frittatas, omelets, and breakfast burritos are great for using up bits of cheese, herbs, and vegetables before they wilt.[web:186][web:189][web:191][web:193]"
      ]
    },

    {
      type: "h2",
      id: "treat-scraps-like-ingredients",
      text: "Treat Scraps Like Ingredients, Not Trash"
    },
    {
      type: "p",
      text:
        "Zero‑waste chefs look at stems, peels, and trimmings as potential flavor, not automatic garbage.[web:182][web:184][web:187][web:188][web:193][web:194] Using more of the ingredient means you get extra meals and nutrients from the same grocery budget."
    },
    {
      type: "ul",
      items: [
        "Collect clean onion skins, carrot ends, celery leaves, herb stems, and bones in a freezer bag, then simmer a full bag into stock and freeze it in jars or cubes.[web:182][web:184][web:187][web:188][web:193][web:194][web:195][web:196]",
        "Turn carrot tops, beet greens, or herb stems into pesto, chimichurri, or sautéed side dishes instead of throwing them away.[web:187][web:190][web:194][web:195][web:196]",
        "Turn stale bread into homemade breadcrumbs or croutons for salads and soups.[web:182][web:183][web:188][web:191][web:193][web:195]"
      ]
    },

    {
      type: "h2",
      id: "skip-unnecessary-peeling",
      text: "Skip Unnecessary Peeling"
    },
    {
      type: "p",
      text:
        "Peeling vegetables often removes edible flesh and fiber that you pay for and then never eat. Food‑waste and health experts point out that scrubbing rather than peeling is usually enough for most produce.[web:183][web:186][web:189][web:195]"
    },
    {
      type: "ul",
      items: [
        "Scrub potatoes, carrots, zucchini, cucumbers, and apples with a vegetable brush instead of peeling for everyday dishes.[web:183][web:186][web:189][web:195]",
        "When you do need to cut off bad spots, trim minimally instead of taking thick slices around a bruise or blemish.[web:183][web:189]"
      ]
    },

    {
      type: "h2",
      id: "batch-cook-components",
      text: "Batch Cook Components Instead of Full Meals"
    },
    {
      type: "p",
      text:
        "Restaurant prep sessions focus on ready‑to‑use components—cooked grains, roasted vegetables, sauces—so the kitchen can assemble dishes quickly and use ingredients before they spoil.[web:184][web:186][web:190][web:193][web:196]"
    },
    {
      type: "ul",
      items: [
        "Cook a big pot of rice, quinoa, or another grain once and use it across bowls, stir‑fries, stuffed peppers, and soups.[web:184][web:186][web:187][web:192]",
        "Roast a tray of mixed vegetables at the start of the week to add to salads, pastas, and grain bowls.[web:184][web:186][web:193][web:196]",
        "Blend a simple sauce or dressing from herbs, citrus, yogurt, or pan drippings to give leftovers a new flavor.[web:182][web:188][web:193]"
      ]
    },

    {
      type: "h2",
      id: "freeze-early",
      text: "Freeze Food Early, Not at the Last Minute"
    },
    {
      type: "p",
      text:
        "Many people freeze food only when it’s already on the edge, but food‑waste organizations recommend freezing items while they’re still in good condition so flavor and texture stay high.[web:184][web:185][web:186][web:190][web:192]"
    },
    {
      type: "ul",
      items: [
        "Freeze extra cooked grains, beans, and lentils in flat bags or small containers for quick future meals.[web:184][web:186][web:187][web:192]",
        "Portion sauces, stocks, and tomato paste into ice‑cube trays so you can grab exactly what you need.[web:184][web:186][web:188][web:193][web:195][web:196]",
        "Label everything with the name and date so you actually use it instead of letting it become a mystery container.[web:186][web:193][web:195]"
      ]
    },

    {
      type: "h2",
      id: "leftovers-night",
      text: "Schedule a Weekly Leftovers Night"
    },
    {
      type: "p",
      text:
        "Restaurants write specials to move ingredients quickly; a home version is to dedicate one night each week to eating what’s already cooked.[web:184][web:185][web:186][web:189][web:191][web:195]"
    },
    {
      type: "ul",
      items: [
        "Plan a weekly “fridge clean‑out” meal using whatever is in your Eat Me First shelf, freezer, and produce drawer.[web:184][web:186][web:187][web:192][web:193][web:196]",
        "Serve different leftover dishes family‑style and treat it like a tasting night rather than a compromise dinner.[web:186][web:191][web:195]"
      ]
    },

    {
      type: "h2",
      id: "portion-like-a-pro",
      text: "Portion Like a Pro"
    },
    {
      type: "p",
      text:
        "Over‑portioning is a major source of plate waste in homes and restaurants. Chefs control portion sizes carefully because every untouched bite is money in the trash.[web:185][web:186][web:190][web:192][web:195]"
    },
    {
      type: "ul",
      items: [
        "Cook realistic quantities for the number of people you’re feeding; you don’t always need to make a full 4–6 serving recipe.[web:186][web:190][web:192]",
        "If you do cook extra intentionally for lunches, portion and refrigerate it right away instead of leaving it in the pot.[web:186][web:190][web:192][web:195]",
        "Use slightly smaller plates and bowls so reasonable portions still look satisfying.[web:186][web:192]"
      ]
    },

    {
      type: "h2",
      id: "label-and-store-smart",
      text: "Label, Date, and Store Food Smart"
    },
    {
      type: "p",
      text:
        "Professional kitchens rely on labeling and clear containers so nothing gets lost at the back of the fridge. Adopting a light version of this system at home prevents mystery tubs and surprise science experiments.[web:173][web:186][web:189][web:192][web:193][web:195]"
    },
    {
      type: "ul",
      items: [
        "Use tape or simple stickers to note the contents and date on leftovers and homemade stocks or sauces.[web:186][web:193][web:195]",
        "Store food in clear containers or jars instead of opaque takeout tubs so you can see what’s inside at a glance.[web:173][web:174][web:180][web:192]",
        "Aim to keep your fridge about two‑thirds full so air can circulate and items don’t get buried.[web:186][web:192]"
      ]
    },

    {
      type: "h2",
      id: "compost-and-start-small",
      text: "Compost What You Can & Start with a Few Habits"
    },
    {
      type: "p",
      text:
        "Even with great habits, some food scraps are unavoidable. Composting turns those inedible bits into something useful instead of methane‑producing landfill waste.[web:183][web:186][web:192][web:196]"
    },
    {
      type: "ul",
      items: [
        "Use a small countertop container or jar for fruit and vegetable scraps, coffee grounds, and eggshells.[web:183][web:186][web:192][web:196]",
        "Look for local compost drop‑off sites, community gardens, or city programs that accept food scraps.[web:183][web:186][web:192]",
        "If you’re new to low‑waste cooking, start with just two or three habits—such as an Eat Me First shelf, one flex‑recipe night, and a freezer scrap bag—and add more once those feel automatic.[web:186][web:187][web:190][web:196]"
      ]
    },
    {
      type: "p",
      text:
        "You don’t have to be perfect to make a big difference. Small, repeatable habits—planning around what you have, using up scraps, freezing early, and composting what’s left—can transform any kitchen into a low waste kitchen over time.[web:186][web:187][web:190][web:196]"
    }
  ]
}{
  slug: "zero-waste-kitchen-budget-9-swaps",
  title: "Zero Waste Kitchen on a Budget: 9 Simple Swaps That Actually Save Money",
  excerpt:
    "You don’t need a Pinterest‑perfect kitchen or expensive gadgets to go zero waste. These 9 budget‑friendly swaps cut plastic, reduce food waste, and stretch your grocery bill.",
  category: "zero-waste-kitchen",
  date: "2025-06-22",
  readingTime: "9 min read",
  image: zeroWastePin1,
  imageAlt: "Zero waste kitchen before and after collage showing clutter replaced with glass jars, compost bin, beeswax wraps, and sustainable storage",
  tags: ["zero waste", "kitchen", "budget", "renters", "swaps"],
  toc: [
    { id: "bottled-drinks", label: "Bottled drinks → tap, filter, and a reusable bottle" },
    { id: "paper-towels", label: "Paper towels → cloth rags & reusable towels" },
    { id: "plastic-wrap", label: "Plastic wrap & zip bags → beeswax wraps and containers" },
    { id: "bulk-bins", label: "Pre‑portioned snacks → bulk bins + jar storage" },
    { id: "leftovers", label: "Random leftovers → meal planning & an “Eat Me First” box" },
    { id: "compost", label: "One big trash can → trash + countertop compost" },
    { id: "pantry-zones", label: "Cardboard chaos → clear jars & simple pantry zones" },
    { id: "reusable-workhorses", label: "Single‑use everything → reusable kitchen workhorses" },
    { id: "energy-tweaks", label: "Energy hogs → small efficiency tweaks" },
    { id: "tight-budget", label: "How to start if you’re on a tight budget" },
  ],
  body: [
    { type: "p", text: "You don’t need a Pinterest‑perfect kitchen, expensive “eco” gadgets, or a full remodel to go zero waste. Most impact comes from a handful of habits and small swaps that cut plastic, reduce food waste, and stretch your grocery budget." },
    { type: "p", text: "Below are 9 budget‑friendly zero‑waste swaps designed for small apartments and renters. Pick 1–2 to start this week and layer from there." },
    { type: "h2", id: "bottled-drinks", text: "1. Bottled Drinks → Tap, Filter, and a Reusable Bottle" },
    { type: "p", text: "Single‑use plastic bottles are one of the biggest sources of kitchen waste and recurring cost." },
    { type: "p", text: "Do instead:" },
    { type: "ul", items: [
      "Use tap water plus a simple pitcher filter or faucet filter if needed.",
      "Keep one reusable bottle and one to‑go mug near the sink so they’re easy to grab.",
      "Make iced tea, cold brew, or infused water in a glass jar instead of buying canned or bottled drinks.",
    ]},
    { type: "p", text: "This swap cuts plastic dramatically and pays for itself quickly if you currently buy packaged drinks every week." },
    { type: "h2", id: "paper-towels", text: "2. Paper Towels → Cloth Rags & Reusable Towels" },
    { type: "p", text: "Most “messy kitchen” tasks don’t need paper at all—just something absorbent you can wash and reuse." },
    { type: "p", text: "Try this:" },
    { type: "ul", items: [
      "Cut old T‑shirts into squares for cleaning rags.",
      "Keep a small basket or jar of cloth napkins or microfiber cloths on the counter so they’re as easy to grab as a paper towel roll.",
      "Reserve paper towels (if you still buy them) for truly gross messes only.",
    ]},
    { type: "p", text: "You’ll take out the trash less often, and a single pack of cloths can last for years." },
    { type: "h2", id: "plastic-wrap", text: "3. Plastic Wrap & Zip Bags → Beeswax Wraps, Containers, and Silicone Bags" },
    { type: "p", text: "Cling film and disposable bags are convenient, but they generate a lot of plastic waste for very short use." },
    { type: "p", text: "Swap options:" },
    { type: "ul", items: [
      "Cover bowls with plates, beeswax wraps, or reusable bowl covers instead of plastic wrap.",
      "Store leftovers in glass jars or containers you already own (pasta sauce jars, takeout glass containers, etc.).",
      "Use a small set of silicone freezer bags for things like frozen fruit, chopped veggies, or bread.",
    ]},
    { type: "p", text: "Start with what you have (jars, old containers) and upgrade slowly so you stay under budget." },
    { type: "h2", id: "bulk-bins", text: "4. Pre‑Portioned Snacks → Bulk Bins + Jar Storage" },
    { type: "p", text: "Individually wrapped snacks create mountains of plastic and cardboard, and you pay extra for the packaging." },
    { type: "p", text: "Budget zero‑waste approach:" },
    { type: "ul", items: [
      "Buy snacks like nuts, dried fruit, granola, or crackers in larger bags or bulk bins when possible.",
      "Decant into glass jars or small containers at home for a pantry that looks organized and makes portioning easy.",
      "Pack your own “snack boxes” in reusable containers for work or outings instead of single‑serve packets.",
    ]},
    { type: "p", text: "This reduces waste and lets you see exactly what you have so snacks don’t go stale in the back of a cabinet." },
    { type: "h2", id: "leftovers", text: "5. “Random Leftovers” → Meal Planning & an “Eat Me First” Box" },
    { type: "p", text: "Food waste is one of the most expensive kinds of waste—especially in small fridges where items get hidden fast." },
    { type: "p", text: "Shift the system:" },
    { type: "ul", items: [
      "Add a simple meal plan for 3–5 core meals per week, reusing ingredients across dishes (for example, rice + beans show up twice).",
      "Designate one shelf or bin in your fridge as “Eat Me First” for leftovers and foods that are close to expiring.",
      "Plan one “leftover night” or “soup/stir‑fry night” each week to use up odds and ends.",
    ]},
    { type: "p", text: "These small habits are proven to cut household food waste significantly, which directly lowers grocery costs." },
    { type: "h2", id: "compost", text: "6. One Big Trash Can → Trash + Countertop Compost" },
    { type: "p", text: "If everything goes into one trash bag, you’re throwing away a lot of potential compost and recyclable material." },
    { type: "p", text: "Budget‑friendly upgrade:" },
    { type: "ul", items: [
      "Add a small countertop compost container (or even a repurposed lidded jar) for veggie scraps, coffee grounds, and eggshells.",
      "Look up local options: community gardens, farmers’ markets, or municipal programs that accept food scraps.",
      "Keep a separate bin or bag for recyclables to keep them out of your regular trash.",
    ]},
    { type: "p", text: "You’ll see your trash volume drop quickly, even in a tiny apartment kitchen." },
    { type: "h2", id: "pantry-zones", text: "7. Cardboard Chaos → Clear Jars & Simple Pantry Zones" },
    { type: "p", text: "Messy pantries cause waste because food gets lost, expires, and gets purchased twice." },
    { type: "p", text: "Zero‑waste pantry basics for small spaces:" },
    { type: "ul", items: [
      "Declutter: pull everything out, toss expired items, and donate unopened foods you won’t eat.",
      "Create a few simple zones—breakfast, grains, snacks, baking, dinner basics—rather than overly complicated systems.",
      "Move dry goods (rice, pasta, lentils, oats, snacks) into clear jars or stackable containers so you can see what you have at a glance.",
      "Label jars with the food name and cooking instructions if you need them.",
    ]},
    { type: "p", text: "This approach works even for a single cabinet pantry and is one of the most recommended small‑pantry strategies right now." },
    { type: "h2", id: "reusable-workhorses", text: "8. “Single‑Use Everything” → Reusable Kitchen Workhorses" },
    { type: "p", text: "Many zero‑waste creators emphasize choosing a few high‑impact reusables you’ll actually use daily instead of buying every new eco gadget." },
    { type: "p", text: "Consider focusing your budget on:" },
    { type: "ul", items: [
      "A sturdy dish brush with replaceable heads and a compostable sponge.",
      "A set of baking mats so you don’t need parchment paper for most oven use.",
      "One good chef’s knife and cutting board, instead of lots of specialty tools you rarely touch.",
    ]},
    { type: "p", text: "Each of these replaces a long list of disposables over time, which is why experienced zero‑waste kitchen folks recommend them." },
    { type: "h2", id: "energy-tweaks", text: "9. Energy Hogs → Small Efficiency Tweaks" },
    { type: "p", text: "A zero‑waste kitchen is also about using less energy, which saves money and emissions." },
    { type: "p", text: "Easy, renter‑friendly changes:" },
    { type: "ul", items: [
      "Swap your most‑used kitchen bulb for an LED bulb—they use less electricity and last much longer.",
      "When boiling water or cooking, use a lid and match pot size to burner so heat doesn’t escape.",
      "Let hot food cool slightly before putting it in the fridge so it doesn’t make the appliance work as hard.",
    ]},
    { type: "p", text: "Energy‑efficiency guides highlight these as quick wins that don’t require buying new appliances." },
    { type: "h2", id: "tight-budget", text: "How to Start if You’re on a Tight Budget" },
    { type: "p", text: "If money is really tight, start with the swaps that cost almost nothing:" },
    { type: "ul", items: [
      "Do a waste audit and set up an “Eat Me First” shelf.",
      "Switch to rags and cloths made from old clothes.",
      "Declutter and re‑zone your pantry using jars and containers you already own.",
      "Keep a small compost jar and look for a free drop‑off option.",
    ]},
    { type: "p", text: "As you see savings on groceries and disposables, you can reinvest a bit into higher‑quality reusables like silicone bags, beeswax wraps, and a better dish brush." },
  ],
},
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
