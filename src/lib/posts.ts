import postKitchen from "@/assets/post-kitchen.jpg";
import postDecor from "@/assets/post-decor.jpg";
import postChecklist from "@/assets/post-checklist.jpg";
import sustainablePin1 from "@/assets/SustainablePin1.webp";
import sustainablePin2 from "@/assets/SustainablePin2.webp";
import sustainablePin3 from "@/assets/SustainablePin3.webp";
import decorPin1 from "@/assets/DecorPin1.webp";
import decorPin2 from "@/assets/DecorPin2.webp";
import decorPin3 from "@/assets/DecorPin3.webp";





export type CategorySlug =
  | "zero-waste-kitchen"
  | "small-apartment-decor"
  | "eco-habits-budget"
  | "intentional-living";

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
      "Start with apartment food-scrap odor and fruit-fly troubleshooting, then explore food visibility, low-waste routines, and purchase decisions for a small kitchen.",
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
  {
    slug: "intentional-living",
    name: "Intentional Living",
    shortName: "Intentional Living",
    intro:
      "Gentle ways to reduce unnecessary friction, make everyday routines feel lighter, and build a home life that supports what matters.",
  },
];

const promotedCategorySlugs: CategorySlug[] = [
  "zero-waste-kitchen",
  "small-apartment-decor",
  "eco-habits-budget",
];

export const promotedCategories = promotedCategorySlugs.map((slug) => {
  const category = categories.find((candidate) => candidate.slug === slug);

  if (!category) {
    throw new Error(`Missing promoted category: ${slug}`);
  }

  return category;
});

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
  body: PostBodyBlock[];
}

export type PostBodyBlock =
  | { type: "p" | "h2" | "h3"; id?: string; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "linkP";
      textBefore?: string;
      linkText: string;
      href: string;
      textAfter?: string;
    }
  | {
      type: "table";
      caption: string;
      headers: string[];
      rows: string[][];
    };

export const posts: Post[] = [
  {
    slug: "why-life-feels-harder-than-it-needs-to-sometimes",
    title: "Why Life Feels Harder Than It Needs To Sometimes",
    excerpt:
      "A gentle guide to reducing unnecessary friction so everyday life feels lighter, clearer, and easier to manage.",
    category: "intentional-living",
    date: "2026-07-03",
    readingTime: "6 min read",
    image: sustainablePin1,
    imageAlt: "Calm sustainable home scene with plants and natural textures",
    tags: ["intentional living", "eco steps", "simple routines"],
    toc: [
      { id: "weight-we-dont-notice", label: "The Weight We Don't Notice" },
      { id: "why-it-matters", label: "Why It Matters" },
      { id: "different-way", label: "A Different Way to See Your Day" },
      { id: "one-small-change", label: "One Small Change Is Enough" },
      { id: "your-eco-step", label: "Your Eco Step" },
      { id: "reflection", label: "Reflection" },
      { id: "why-confident", label: "Why We're Confident in This Advice" },
    ],
    body: [
      {
        type: "p",
        text:
          "Some days feel heavy before anything especially hard has happened. The sink has a few dishes in it. A bag needs to be returned. There is one more email to answer, one more errand to remember, one more small decision waiting in the background.",
      },
      {
        type: "p",
        text:
          "None of these things are dramatic on their own. But together, they can make ordinary life feel crowded. You move through your home doing what needs to be done, yet part of your mind is always carrying the next step.",
      },
      {
        type: "h2",
        id: "weight-we-dont-notice",
        text: "The Weight We Don't Notice",
      },
      {
        type: "p",
        text:
          "A lot of daily stress comes from friction we have stopped noticing. It shows up as clutter that has no clear place to land, supplies stored too far from where we use them, habits that require too many steps, or choices we have to remake every day.",
      },
      {
        type: "p",
        text:
          "This kind of friction is easy to dismiss because it looks small. But small things repeat. A drawer that sticks, a counter that collects mail, or a morning routine with too many decisions can quietly take more energy than it deserves.",
      },
      {
        type: "h2",
        id: "why-it-matters",
        text: "Why It Matters",
      },
      {
        type: "p",
        text:
          "When life already asks a lot from you, unnecessary friction makes sustainable living feel harder than it has to be. The problem is not that you are careless or unmotivated. Often, the system around the habit is asking for too much attention.",
      },
      {
        type: "p",
        text:
          "A low-waste kitchen habit will be easier if the reusable containers are reachable. A calmer living room will be easier if every object has an obvious home. A more intentional day will be easier if fewer tiny choices are waiting for you.",
      },
      {
        type: "h2",
        id: "different-way",
        text: "A Different Way to See Your Day",
      },
      {
        type: "p",
        text:
          "Instead of asking, \"How do I become more disciplined?\" try asking, \"Where is my day creating extra steps?\" This shifts the focus away from blame and toward design. Your home does not need to be perfect. It just needs to support the life you are actually living.",
      },
      {
        type: "p",
        text:
          "Look for the spots where you pause, sigh, avoid, forget, or work around something. Those moments are useful information. They point to the places where one small adjustment could make the whole day feel lighter.",
      },
      {
        type: "h2",
        id: "one-small-change",
        text: "One Small Change Is Enough",
      },
      {
        type: "p",
        text:
          "You do not need to reorganize your entire apartment or rebuild every routine. One small change can lower the effort enough to help a better habit stick.",
      },
      {
        type: "ul",
        items: [
          "Put the reusable bags by the door instead of in a closet.",
          "Move the compost bowl closer to the prep area.",
          "Place a donation bag where clutter naturally gathers.",
          "Choose one landing spot for mail, keys, and receipts.",
          "Keep the cleaning spray and cloth in the room where you use them most.",
        ],
      },
      {
        type: "p",
        text:
          "The best change is not the most impressive one. It is the one that removes a little resistance from something you already want to do.",
      },
      {
        type: "h2",
        id: "your-eco-step",
        text: "Your Eco Step",
      },
      {
        type: "p",
        text:
          "Choose one recurring moment in your home that feels heavier than it should. Do not solve the whole category. Just make the next version of that moment easier.",
      },
      {
        type: "ul",
        items: [
          "If dishes pile up, clear one drying or loading zone.",
          "If groceries create waste, make one visible spot for food that needs to be used first.",
          "If clutter spreads, create one container for items that need to leave the room.",
        ],
      },
      {
        type: "p",
        text:
          "Give yourself a change you can do in ten minutes. Then notice whether tomorrow asks a little less from you.",
      },
      {
        type: "h2",
        id: "reflection",
        text: "Reflection",
      },
      {
        type: "p",
        text:
          "A lighter life is not built by forcing yourself to care harder. It is built by removing the extra effort that makes caring feel exhausting.",
      },
      {
        type: "p",
        text:
          "Thoughtful, sustainable living becomes easier when your space is arranged with compassion for your real energy, real limits, and real routines. Start with the friction you can see. Let that be enough for today.",
      },
      {
        type: "h2",
        id: "why-confident",
        text: "Why We're Confident in This Advice",
      },
      {
        type: "p",
        text:
          "Behavior change is more likely to last when the desired action is visible, convenient, and easy to repeat. Reducing friction does not guarantee a perfect habit, but it lowers the effort required to begin. For renters and small-space dwellers, that matters because the best systems are usually simple, reversible, and close to where life already happens.",
      },
    ],
  },
  {
  slug: "sustainable-tiny-living-room-layout-ideas",
  title: "Sustainable Tiny Living Room: Layout and Styling Ideas for Small Spaces",
  excerpt:
    "Make your tiny living room feel bigger, cozier, and more sustainable with smart layouts, compact furniture, and eco-friendly decor.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: decorPin3, // import this in your file
  imageAlt:
    "Tiny living room with a small sofa, natural rug, plants, and wall-mounted shelves.",
  tags: [
    "sustainable tiny living room",
    "small living room ideas",
    "small space eco decor",
    "eco friendly living room"
  ],
  toc: [
    { id: "tiny-room-principles", label: "Key Principles for Tiny Sustainable Living Rooms" },
    { id: "layout-ideas", label: "Three Layout Ideas That Actually Work" },
    { id: "eco-furniture-choices", label: "Eco-Friendly Furniture and Material Choices" },
    { id: "styling-tips", label: "Styling Tips: Rugs, Plants, and Wall Space" }
  ],
  body: [
    {
      type: "p",
      text:
        "In a tiny living room, every piece you bring in has to earn its place. When you layer sustainability on top—natural materials, secondhand finds, low-waste choices—the options can feel overwhelming."
    },
    {
      type: "p",
      text:
        "The ideas below keep things simple. You’ll see how to arrange furniture so the room feels open, where to invest in sustainable pieces, and how to style with plants and textiles so the space feels cozy instead of cluttered."
    },

    {
      type: "h2",
      id: "tiny-room-principles",
      text: "Key Principles for Tiny Sustainable Living Rooms"
    },
    {
      type: "ul",
      items: [
        "Prioritize function over filler. Start with what you truly need: seating, a surface, storage, and light.",
        "Keep sightlines clear. Avoid tall, bulky pieces that block windows or pathways.",
        "Choose fewer, better items. A small number of well-made, natural pieces beats a room full of cheap decor.",
        "Let your materials work for you. Wood, natural textiles, and plants add warmth and texture without needing a lot of extra stuff."
      ]
    },

    {
      type: "h2",
      id: "layout-ideas",
      text: "Three Layout Ideas That Actually Work"
    },
    {
      type: "p",
      text:
        "Every room is different, but these three layouts work well in most small living rooms and studios."
    },
    {
      type: "ul",
      items: [
        "Wall-Hugging Sofa + Floating Coffee Table: Place a compact sofa along the longest wall, with a small coffee table centered on a rug and a media console opposite. This creates a clear walkway along one side of the room.",
        "Corner Conversation Layout: Position the sofa in a corner facing diagonally into the room, add a small chair or pouf at a 90-degree angle, and keep a lightweight table in the middle.",
        "Studio Zone Layout: In a studio, use a rug and sofa to visually zone the living area near the window, and keep taller items like shelving against the wall to avoid blocking light."
      ]
    },

    {
      type: "h2",
      id: "eco-furniture-choices",
      text: "Eco-Friendly Furniture and Material Choices"
    },
    {
      type: "p",
      text:
        "Sustainable furniture in a tiny living room doesn’t have to be expensive. It just needs to be durable, right-sized, and made from materials that age well."
    },
    {
      type: "ul",
      items: [
        "Look for compact sofas and chairs with visible legs and slim arms to keep the room feeling open.",
        "Choose solid wood, bamboo, or metal frames when possible—they’re sturdy and can often be repaired instead of replaced.",
        "Use a coffee table with built-in storage or a lower shelf so it doubles as a place for baskets and boxes.",
        "Shop secondhand for side tables, shelves, and accent chairs; these pieces are often easy to refresh with a clean and a new finish."
      ]
    },

    {
      type: "h2",
      id: "styling-tips",
      text: "Styling Tips: Rugs, Plants, and Wall Space"
    },
    {
      type: "p",
      text:
        "Once your layout and furniture are set, styling pulls everything together. In a tiny room, a few thoughtful choices go a long way."
    },
    {
      type: "ul",
      items: [
        "Anchor the seating area with a light-colored rug sized so the front legs of the sofa sit on it; this makes the space feel more intentional.",
        "Bring in plants of varying heights—one floor plant, a tabletop plant, and a trailing plant on a shelf—for texture and a sense of life.",
        "Use wall-mounted shelves instead of bulky bookcases to display books, baskets, and a few decor pieces.",
        "Hang one or two larger art pieces instead of many small frames to avoid visual clutter on the walls.",
        "Keep surfaces as clear as possible. Use trays or small bowls to corral remotes and small items so they don’t scatter."
      ]
    },
    {
      type: "p",
      text:
        "Your tiny living room doesn’t have to feel cramped or disposable. With a smart layout, a few sustainable furniture choices, and light, plant-filled styling, it can be the calm, cozy center of your small apartment."
    }
  ]
},
{
  slug: "eco-friendly-small-apartment-weekend-checklist",
  title: "Eco Friendly Small Apartment Checklist You Can Tackle in a Weekend",
  excerpt:
    "Use this weekend checklist to turn your small apartment into a more eco friendly space with realistic, low-cost changes.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: decorPin2, // import this in your file
  imageAlt:
    "Cozy small apartment with plants, natural textiles, and warm lighting.",
  tags: [
    "eco friendly small apartment",
    "small space eco decor",
    "green apartment living",
    "budget eco habits"
  ],
  toc: [
    { id: "how-to-use-checklist", label: "How to Use This Checklist" },
    { id: "light-and-air", label: "Light, Air, and Energy" },
    { id: "textiles-and-materials", label: "Textiles, Materials, and Decor" },
    { id: "kitchen-and-bath", label: "Kitchen and Bathroom Habits" }
  ],
  body: [
    {
      type: "p",
      text:
        "You don’t have to change everything about your home to make it more eco friendly. A few intentional upgrades—especially in a small apartment—can dramatically shift how your space feels and how much energy and waste you produce."
    },
    {
      type: "p",
      text:
        "This checklist is designed to be doable in a weekend. Work through each section at your own pace, and pick the items that fit your budget and lifestyle."
    },

    {
      type: "h2",
      id: "how-to-use-checklist",
      text: "How to Use This Checklist"
    },
    {
      type: "ul",
      items: [
        "Do a quick walk-through of your apartment and note what you already have: plants, natural fabrics, reusable items, and good light.",
        "Choose 2–3 upgrades from each section to focus on this weekend instead of trying to do everything at once.",
        "Plan a small budget for anything you truly need to buy, and look for secondhand or low-waste options first."
      ]
    },

    {
      type: "h2",
      id: "light-and-air",
      text: "Light, Air, and Energy"
    },
    {
      type: "ul",
      items: [
        "Swap your most-used bulbs for warm LED bulbs to cut energy use and create a softer, more inviting light.",
        "Use natural light as much as possible by opening curtains and keeping window sills clear of heavy clutter.",
        "Add one or two lamps with fabric or paper shades to reduce reliance on harsh overhead lighting.",
        "On cooler days, open windows to air out the apartment instead of relying only on fans or AC.",
        "Unplug chargers and electronics when not in use, or connect them to a single power strip you can switch off."
      ]
    },

    {
      type: "h2",
      id: "textiles-and-materials",
      text: "Textiles, Materials, and Decor"
    },
    {
      type: "ul",
      items: [
        "Swap at least one synthetic rug or throw blanket for a natural fiber option like cotton, jute, or wool when you’re ready to replace it.",
        "Add plants—real or low-maintenance—to bring life and better air quality into your space.",
        "Use covers or throws to refresh existing furniture instead of buying new pieces right away.",
        "Choose decor and storage made of wood, glass, or metal over cheap plastics where possible.",
        "Declutter surfaces so the pieces you keep can shine; fewer, better items are more sustainable than constant replacement."
      ]
    },

    {
      type: "h2",
      id: "kitchen-and-bath",
      text: "Kitchen and Bathroom Habits"
    },
    {
      type: "ul",
      items: [
        "Switch from paper towels to cloths for most everyday cleaning, keeping a small stack near the sink.",
        "Use refillable or concentrated cleaning products to cut down on plastic bottles and packaging.",
        "Store dry goods like rice, pasta, and snacks in glass jars or reusable containers instead of flimsy bags.",
        "In the bathroom, consider bar soap or refillable bottles to reduce single-use plastic.",
        "Keep a small bin or jar for compostable scraps like coffee grounds and vegetable peels if you have access to composting."
      ]
    },
    {
      type: "p",
      text:
        "You don’t have to complete every item to call your apartment eco friendly. Even a few of these changes can make your space cleaner, calmer, and lighter on the planet."
    }
  ]
},
{
  slug: "sustainable-small-apartment-decor-before-after",
  title: "Sustainable Small Apartment Decor: Before & After on a Budget",
  excerpt:
    "Walk through a real before-and-after transformation that turns a cluttered small apartment into a calm, sustainable space for under $300.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: decorPin1, // import this in your file
  imageAlt:
    "Before-and-after photos of a small apartment living room styled with sustainable decor.",
  tags: [
    "sustainable small apartment decor",
    "small space eco decor",
    "tiny apartment makeover",
    "budget eco home decor"
  ],
  toc: [
    { id: "the-before", label: "The Before: What Wasn’t Working" },
    { id: "goals-budget", label: "Goals and Budget for the Makeover" },
    { id: "step-1-declutter-layout", label: "Step 1: Declutter and Rethink Layout" },
    { id: "step-2-key-furniture", label: "Step 2: Choose Key Sustainable Furniture Pieces" },
    { id: "step-3-textiles-lighting", label: "Step 3: Textiles and Lighting for a Cozy Feel" },
    { id: "step-4-plants-storage", label: "Step 4: Plants, Storage, and Final Details" }
  ],
  body: [
    {
      type: "p",
      text:
        "This small apartment living room started out as a typical rental: harsh overhead lighting, random furniture, and visible plastic storage that made the space feel crowded and chaotic."
    },
    {
      type: "p",
      text:
        "By focusing on a few sustainable choices—thrifted furniture, natural materials, better storage, and plants—we turned it into a calm, eco-conscious space on a budget under $300."
    },

    {
      type: "h2",
      id: "the-before",
      text: "The Before: What Wasn’t Working"
    },
    {
      type: "p",
      text:
        "The room had decent natural light and a good layout, but several issues made it feel smaller than it was: a bulky dark sofa, scattered plastic drawers, no clear focal point, and a tangle of cords around the TV."
    },
    {
      type: "ul",
      items: [
        "Mismatched, low-quality furniture that took up valuable floor space.",
        "No defined living zone, so the eye didn’t know where to rest.",
        "Plastic storage bins stacked in corners, adding visual and physical clutter.",
        "Only overhead lighting, which made the room feel flat and harsh at night."
      ]
    },

    {
      type: "h2",
      id: "goals-budget",
      text: "Goals and Budget for the Makeover"
    },
    {
      type: "p",
      text:
        "The goal was not perfection; it was a livable, sustainable reset. We set a hard budget of $300 and decided to prioritize comfort, function, and lower-waste choices."
    },
    {
      type: "ul",
      items: [
        "Keep as much as possible out of the landfill by selling, donating, or repurposing old pieces.",
        "Buy secondhand where we could, and choose natural or long-lasting materials.",
        "Create a layout that made the room feel open, with clear walking paths and a cozy seating zone."
      ]
    },

    {
      type: "h2",
      id: "step-1-declutter-layout",
      text: "Step 1: Declutter and Rethink Layout"
    },
    {
      type: "p",
      text:
        "We removed everything that wasn’t essential, then brought items back with intention. This alone made the room feel 30% bigger."
    },
    {
      type: "ul",
      items: [
        "Pulled all loose items and extra storage out of the living room and sorted into keep, donate, and sell piles.",
        "Shifted the seating area so the sofa faced the window and a single focal wall, instead of the TV dominating the room.",
        "Left open space near the entry to avoid the “wall of furniture” effect when walking in."
      ]
    },

    {
      type: "h2",
      id: "step-2-key-furniture",
      text: "Step 2: Choose Key Sustainable Furniture Pieces"
    },
    {
      type: "p",
      text:
        "Instead of buying a full set of new furniture, we identified the two pieces that would make the biggest difference: a smaller sofa and a coffee table with storage."
    },
    {
      type: "ul",
      items: [
        "Replaced the bulky dark sofa with a compact, secondhand loveseat in a light neutral fabric.",
        "Found a thrifted wooden coffee table with a lower shelf for books and baskets, doubling as hidden storage.",
        "Moved an existing shelving unit to a single wall and used it as a minimal media and decor center instead of scattered surfaces."
      ]
    },

    {
      type: "h2",
      id: "step-3-textiles-lighting",
      text: "Step 3: Textiles and Lighting for a Cozy Feel"
    },
    {
      type: "p",
      text:
        "Textiles and lighting do most of the visual work in a small living room. We swapped a few key pieces to make the room feel warm and calm instead of busy."
    },
    {
      type: "ul",
      items: [
        "Added a light, natural fiber rug to anchor the seating area and reflect light.",
        "Swapped an old plastic floor lamp for a warm-toned lamp with a linen shade, and used a soft, energy-efficient bulb.",
        "Layered in a couple of neutral cushion covers and a cotton throw blanket instead of buying new pillows."
      ]
    },

    {
      type: "h2",
      id: "step-4-plants-storage",
      text: "Step 4: Plants, Storage, and Final Details"
    },
    {
      type: "p",
      text:
        "Finally, we brought in green life and smarter storage so daily clutter had a home and surfaces didn’t fill up again right away."
    },
    {
      type: "ul",
      items: [
        "Placed two medium plants near the window and a small one on the coffee table to bring in color and texture.",
        "Used lidded baskets on the bottom shelf of the coffee table and shelving unit to hide remotes, cables, and misc items.",
        "Hung one simple piece of art above the sofa instead of multiple small frames to keep the wall clean and calm."
      ]
    },
    {
      type: "p",
      text:
        "The final result is a living room that feels larger, brighter, and more intentional—built from a mix of secondhand finds, natural materials, and smarter storage instead of a cart full of brand-new decor."
    }
  ]
},
{
  slug: "low-waste-lifestyle-tips-beginners",
  title: "15 Low Waste Lifestyle Tips You Can Start This Week",
  excerpt:
    "Beginner-friendly, low-pressure tips to cut everyday trash, reduce plastic, and live a little lighter—without perfection.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: sustainablePin3, // import this in your file
  imageAlt:
    "Collection of reusable items including jars, cloths, a water bottle, and a canvas bag on a kitchen counter.",
  tags: [
    "low waste lifestyle",
    "zero waste tips",
    "eco habits",
    "reduce waste",
    "budget eco living"
  ],
  toc: [
    { id: "mindset-first", label: "A Low Waste Mindset (Not Perfection)" },
    { id: "home-swaps", label: "Home and Cleaning Swaps" },
    { id: "on-the-go-habits", label: "On-the-Go and Shopping Habits" },
    { id: "food-and-kitchen", label: "Food and Kitchen Tips" }
  ],
  body: [
    {
      type: "p",
      text:
        "A low waste lifestyle isn’t about fitting all your trash into a tiny jar. It’s about reducing unnecessary waste in ways that fit your real life, your budget, and your space."
    },
    {
      type: "p",
      text:
        "These 15 tips are simple, beginner-friendly ideas you can start this week. Pick a few that feel doable, then add more as they become habits."
    },

    {
      type: "h2",
      id: "mindset-first",
      text: "A Low Waste Mindset (Not Perfection)"
    },
    {
      type: "p",
      text:
        "Before you change what you buy, it helps to change how you think about stuff. Low waste living is less about trendy products and more about using what you already have."
    },
    {
      type: "ul",
      items: [
        "Use it up first. Finish the bottles, bags, and products you already own before switching to new “eco” versions.",
        "Buy less. Ask yourself if you truly need something before you add it to your cart.",
        "Choose durable over disposable. When you do buy, look for items that can be repaired, refilled, or reused many times."
      ]
    },

    {
      type: "h2",
      id: "home-swaps",
      text: "Home and Cleaning Swaps"
    },
    {
      type: "p",
      text:
        "Your home is where you have the most control, so it’s a great place to start reducing waste."
    },
    {
      type: "ul",
      items: [
        "Trade paper towels for cloths. Cut old T-shirts or towels into rags for cleaning and use cloth napkins at meals.",
        "Switch to concentrated or refillable cleaners. A single multipurpose cleaner or refill system can replace multiple plastic bottles.",
        "Choose bar soap instead of bottled soap when possible. Bars often come in minimal or recyclable packaging.",
        "Swap plastic scrubbers for compostable brushes or natural fiber cloths when you’re ready to replace them."
      ]
    },

    {
      type: "h2",
      id: "on-the-go-habits",
      text: "On-the-Go and Shopping Habits"
    },
    {
      type: "p",
      text:
        "Small changes to how you shop and move through your day can dramatically cut single-use packaging."
    },
    {
      type: "ul",
      items: [
        "Carry a simple low waste kit: a reusable bottle, a tote bag, and a set of utensils wrapped in a napkin or cloth.",
        "Keep reusable bags in your car or by the door so you don’t forget them on grocery runs.",
        "Say no to freebies and samples you don’t actually want. Most end up as clutter and then trash.",
        "Buy secondhand when you can—clothes, furniture, and household items often last just as long at a fraction of the price and packaging."
      ]
    },

    {
      type: "h2",
      id: "food-and-kitchen",
      text: "Food and Kitchen Tips"
    },
    {
      type: "p",
      text:
        "Food and packaging are big sources of household waste. A few simple habits help you waste less and save more."
    },
    {
      type: "ul",
      items: [
        "Store leftovers in glass jars or reusable containers instead of single-use plastic bags.",
        "Plan a few meals and shop with a list to avoid impulse buys and food you won’t use.",
        "Set up a small “eat me first” area in your fridge or pantry for foods that need to be used soon.",
        "Keep a small container for compostable scraps like vegetable peels and coffee grounds, and explore local composting options when you’re ready."
      ]
    },
    {
      type: "p",
      text:
        "You don’t have to do all 15 tips at once. Choose the two or three that feel easiest to start today—like carrying your own bottle, using cloths instead of paper towels, or saying no to freebies—and you’ll already be living a lower waste lifestyle than you were last week."
    }
  ]
},
{
  slug: "easy-sustainable-habits-on-a-budget",
  title: "21 Easy Sustainable Habits on a Budget (Perfect for Renters)",
  excerpt:
    "Use these 21 practical, low-cost habits to make your daily life more sustainable without wrecking your budget.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: sustainablePin2, // import this in your file
  imageAlt:
    "Flat lay of reusable bottle, cloth bag, LED bulb, and notebook on a wooden table.",
  tags: [
    "sustainable habits",
    "budget sustainable living",
    "eco friendly habits",
    "apartment living",
    "green on a budget"
  ],
  toc: [
    { id: "start-small", label: "Start Small and Stack Habits" },
    { id: "home-energy-habits", label: "Home Energy Habits" },
    { id: "water-and-cleaning", label: "Water and Cleaning Swaps" },
    { id: "shopping-and-reusables", label: "Shopping and Reusable Swaps" },
    { id: "food-and-waste", label: "Food and Waste-Reducing Habits" }
  ],
  body: [
    {
      type: "p",
      text:
        "Living more sustainably doesn’t require a huge budget or a minimalist-perfect lifestyle. Most of the big wins come from simple, repeatable habits that cost little or nothing to start."
    },
    {
      type: "p",
      text:
        "These 21 ideas are designed for renters, students, and small-apartment dwellers who want to reduce their impact while keeping things realistic and affordable."
    },

    {
      type: "h2",
      id: "start-small",
      text: "Start Small and Stack Habits"
    },
    {
      type: "p",
      text:
        "Trying to change everything at once usually leads to burnout. Instead, choose one or two habits from each section, get comfortable with them, and then add more."
    },

    {
      type: "h2",
      id: "home-energy-habits",
      text: "Home Energy Habits"
    },
    {
      type: "ul",
      items: [
        "Switch to LED bulbs in your most-used fixtures first. They use less energy and last longer than traditional bulbs.",
        "Turn off lights and fans whenever you leave a room, and rely on natural light as much as possible during the day.",
        "Use power strips for electronics and flip them off at night to stop phantom power drain from chargers, TVs, and game consoles.",
        "In winter, put on socks and a sweater before turning up the heat; in summer, try fans and closing blinds during peak sun hours before lowering the thermostat."
      ]
    },

    {
      type: "h2",
      id: "water-and-cleaning",
      text: "Water and Cleaning Swaps"
    },
    {
      type: "ul",
      items: [
        "Shorten showers by two or three minutes and turn off the tap while brushing your teeth or shaving.",
        "Only run the dishwasher and washing machine with full loads to make each cycle count.",
        "Try line drying some loads of laundry instead of using the dryer every time.",
        "Make a simple DIY all-purpose cleaner with vinegar, water, and a little dish soap or essential oil instead of buying multiple bottled cleaners."
      ]
    },

    {
      type: "h2",
      id: "shopping-and-reusables",
      text: "Shopping and Reusable Swaps"
    },
    {
      type: "ul",
      items: [
        "Carry a reusable water bottle and coffee cup so you’re not constantly buying bottled drinks or disposable cups.",
        "Keep reusable shopping bags and produce bags by the door or in your backpack so you actually remember to bring them.",
        "Choose products with less packaging when you can, and avoid single-use items like plastic cutlery when alternatives are easy.",
        "Buy secondhand whenever possible—furniture, clothing, and household items are often cheaper and more sustainable used than buying new."
      ]
    },

    {
      type: "h2",
      id: "food-and-waste",
      text: "Food and Waste-Reducing Habits"
    },
    {
      type: "ul",
      items: [
        "Plan a few meals each week and shop with a list so you’re less likely to overbuy and waste food.",
        "Store leftovers in clear containers so you can see what needs to be eaten first.",
        "Dedicate one shelf in your fridge or pantry as the “eat me first” zone for foods close to their date.",
        "Swap paper towels for cloth napkins and rags for most everyday spills and cleaning.",
        "Start collecting compostable food scraps in a small container and look for local drop-off or composting options when you’re ready."
      ]
    },
    {
      type: "p",
      text:
        "Pick two or three habits from this list that feel easiest right now and build from there. Over time, these small choices stack into a lifestyle that’s better for your bank account and the planet."
    }
  ]
},
{
  slug: "sustainable-living-apartment-easy-habits",
  title: "Sustainable Living in an Apartment: 10 Easy Habits That Don’t Feel Extreme",
  excerpt:
    "Renting or in a tiny space? Use these 10 easy apartment-friendly habits to live more sustainably and save money.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: sustainablePin1, // import this in your file
  imageAlt:
    "Cozy apartment living room with plants, natural light, and simple eco-friendly decor.",
  tags: [
    "sustainable living apartment",
    "eco friendly apartment",
    "budget green living",
    "small space living",
    "sustainable habits"
  ],
  toc: [
    { id: "why-apartment-sustainability", label: "Why Sustainable Apartment Living Matters" },
    { id: "energy-habits", label: "Easy Energy-Saving Habits" },
    { id: "water-habits", label: "Simple Water-Saving Habits" },
    { id: "reusables-and-waste", label: "Reusables and Everyday Waste" },
    { id: "buying-better-on-a-budget", label: "Buying Better on a Budget" }
  ],
  body: [
    {
      type: "p",
      text:
        "You don’t need a backyard, solar panels, or a full renovation to live more sustainably. Most of the impact in an apartment comes from your daily habits: how you use energy, water, and stuff."
    },
    {
      type: "p",
      text:
        "The 10 habits below are designed for renters and small apartments. They’re low-cost, realistic, and focused on saving money as well as reducing your environmental footprint."
    },

    {
      type: "h2",
      id: "why-apartment-sustainability",
      text: "Why Sustainable Apartment Living Matters"
    },
    {
      type: "p",
      text:
        "Apartments are often more efficient than single-family homes because they share walls, but there’s still a lot you control: electricity, heating and cooling, water use, and what you buy and throw away."
    },
    {
      type: "p",
      text:
        "Shifting a few daily habits can trim your utility bills, reduce waste, and make your space feel calmer and healthier—all without needing permission from a landlord."
    },

    {
      type: "h2",
      id: "energy-habits",
      text: "Easy Energy-Saving Habits"
    },
    {
      type: "p",
      text:
        "Energy is usually the biggest footprint for apartment living, and small adjustments add up quickly."
    },
    {
      type: "ul",
      items: [
        "Use natural light first. During the day, open curtains and blinds and turn off overhead lights whenever possible.",
        "Swap your most-used bulbs for LEDs. They use far less energy and last years longer than older bulbs.",
        "Set small thermostat shifts. In winter, wear layers and lower the thermostat a couple of degrees; in summer, use fans and close curtains during the hottest hours before blasting the AC.",
        "Unplug “vampire” electronics. Chargers, consoles, and small appliances still draw power when plugged in. Use a power strip you can switch off when not in use."
      ]
    },

    {
      type: "h2",
      id: "water-habits",
      text: "Simple Water-Saving Habits"
    },
    {
      type: "p",
      text:
        "Water savings are one of the easiest ways to live more sustainably in an apartment and lower your monthly bills."
    },
    {
      type: "ul",
      items: [
        "Shorten showers by a few minutes. Set a playlist or timer and aim to finish before the second song ends.",
        "Turn off the tap while brushing teeth, shaving, or scrubbing dishes.",
        "Only run full loads. Wait until the dishwasher or laundry bin is genuinely full before running a cycle.",
        "Report leaks quickly. A dripping faucet or constantly running toilet wastes more water than most people realize."
      ]
    },

    {
      type: "h2",
      id: "reusables-and-waste",
      text: "Reusables and Everyday Waste"
    },
    {
      type: "p",
      text:
        "Waste reduction in an apartment often comes down to swapping single-use items for reusables you actually enjoy using."
    },
    {
      type: "ul",
      items: [
        "Carry a reusable water bottle and coffee cup so you’re not buying bottled drinks or disposable cups.",
        "Keep a set of reusable shopping bags and produce bags near your door or in your backpack.",
        "Swap paper towels and napkins for washable cloths made from old T-shirts or dish towels.",
        "Set up a small recycling station and, if available in your area, a countertop compost container for food scraps."
      ]
    },

    {
      type: "h2",
      id: "buying-better-on-a-budget",
      text: "Buying Better on a Budget"
    },
    {
      type: "p",
      text:
        "Sustainable living isn’t about buying a whole new set of “eco” products. It’s about using what you have longer and choosing better-quality replacements when you actually need them."
    },
    {
      type: "ul",
      items: [
        "Use what you own first. Before buying organization bins or decor, ask if something you already have could do the job.",
        "Shop secondhand for furniture and decor. Thrift stores, online marketplaces, and community groups often have great pieces at a fraction of the cost.",
        "Choose natural materials when replacing items. Prioritize glass, wood, metal, and natural textiles over flimsy plastic that breaks quickly.",
        "Adopt a 24-hour rule for non-essential buys. Wait a day before purchasing and see if you still want it. Often, the impulse fades and you save money and resources."
      ]
    },
    {
      type: "p",
      text:
        "You don’t have to change everything overnight. Pick two or three habits from this list, build them into your routine, and then layer on more as they become second nature."
    }
  ]
},
{
  slug: "zero-waste-pantry-organization-small-apartments",
  title: "Pantry Organization for Small Apartments: A Practical Plan",
  excerpt:
    "Use visibility, simple zones, and a review routine to plan a small pantry around the food and storage you have.",
  category: "zero-waste-kitchen",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: postKitchen,
  imageAlt: "Illustrative small kitchen counter with fresh herbs beside a cutting board",
  tags: [
    "zero waste pantry",
    "small pantry organization",
    "zero waste kitchen",
    "pantry organization",
    "small apartment kitchen"
  ],
  toc: [
    { id: "why-zero-waste-pantry", label: "Start with visibility" },
    { id: "step-1-declutter-audit", label: "Step 1: Review what is there" },
    { id: "step-2-create-zones", label: "Step 2: Create Simple Pantry Zones" },
    { id: "step-3-jar-system", label: "Step 3: Decide what should stay packaged" },
    { id: "step-4-use-vertical-space", label: "Step 4: Use Vertical Space and Door Storage" },
    { id: "step-5-label-rotate", label: "Step 5: Label and rotate carefully" },
    { id: "step-6-maintain", label: "Step 6: Use a review rhythm" }
  ],
  body: [
    {
      type: "p",
      text:
        "In a small pantry, bags and boxes can block one another and make an accurate inventory harder. The useful first goal is not a matching-container display; it is being able to see what is present and reach what you use."
    },
    {
      type: "p",
      text:
        "This walkthrough uses visibility, a few flexible zones, and a repeatable review. It does not document a before-and-after project or promise that organization alone will prevent waste or reduce spending."
    },

    {
      type: "h2",
      id: "why-zero-waste-pantry",
      text: "Start with visibility, not a makeover"
    },
    {
      type: "p",
      text:
        "Hidden food, damaged packaging, and an unclear inventory are useful things to check when a pantry is difficult to use. They are practical checkpoints, not a measured explanation of most household food waste."
    },
    {
      type: "p",
      text:
        "Organizing around visibility and access—clear containers, simple zones, and regular rotation—can make it easier to notice what you already have before it is forgotten or bought again."
    },

    {
      type: "h2",
      id: "step-1-declutter-audit",
      text: "Step 1: Review what is there"
    },
    {
      type: "p",
      text:
        "Work one shelf at a time if emptying the entire pantry would block the kitchen or create an overwhelming project. Keep package information with the food while you review it."
    },
    {
      type: "ul",
      items: [
        "Move one shelf's contents to a stable work surface and group identical or related items without discarding their packages yet.",
        "Check the product's date wording, condition, storage directions, and official food-safety guidance before deciding whether to keep or discard it. A printed date does not have one universal meaning.",
        "Do not combine open packages automatically. Keep allergen details, cooking directions, lot codes, and storage instructions; avoid mixing products or lots when identity or condition is uncertain.",
        "Clean the empty shelf with a method suitable for its material, let it dry, and return food only after checking for spills or damaged packaging."
      ]
    },

    {
      type: "h2",
      id: "step-2-create-zones",
      text: "Step 2: Create Simple Pantry Zones"
    },
    {
      type: "p",
      text:
        "You don’t need 20 micro-categories. A handful of clear zones is enough to keep a small pantry organized and easy to navigate."
    },
    {
      type: "ul",
      items: [
        "Define 5–7 zones, such as: breakfast, grains and pasta, baking, snacks, cans and jars, spices and oils, and “backstock” or bulk.",
        "Assign each shelf or section to one or two zones based on how often you reach for those items.",
        "Keep everyday items like breakfast and snacks between shoulder and eye height, and backstock higher or lower where you don’t grab it as often."
      ]
    },
    {
      type: "p",
      text:
        "Zones provide a consistent place to look. If a category is too large for its assigned area, split it by use frequency instead of adding more containers by default."
    },

    {
      type: "h2",
      id: "step-3-jar-system",
      text: "Step 3: Decide what should stay packaged"
    },
    {
      type: "p",
      text:
        "Original packaging can carry preparation directions, allergen information, lot codes, and storage guidance. Decant only when a different container solves a real access or closure problem and you can preserve the information you need."
    },
    {
      type: "ul",
      items: [
        "Use the original package when it closes adequately, fits the shelf, and carries information you still need.",
        "If you reuse a container, confirm that it is intact, clean, dry, food-suitable, and paired with a lid that still closes as intended.",
        "Label transferred food clearly and retain relevant preparation, allergen, storage, date, and lot information.",
        "Arrange packages and containers so labels remain visible; use a stable riser only when its load and shelf placement are suitable."
      ]
    },
    {
      type: "p",
      text:
        "A matching set is optional. Before buying storage, test whether rearranging original packages or reusing a suitable container fixes the actual visibility problem."
    },

    {
      type: "h2",
      id: "step-4-use-vertical-space",
      text: "Step 4: Use Vertical Space and Door Storage"
    },
    {
      type: "p",
      text:
        "Measure the usable width, depth, and height of your actual shelves before adding organizers. Leave clearance for hinges, shelf supports, and safe removal."
    },
    {
      type: "ul",
      items: [
        "Add shelf risers. Tiered risers are perfect for cans and jars; they turn one deep shelf into two visible levels instead of a dark tunnel.",
        "Use bins as drawers. Place loose items in bins or baskets that you can pull out like drawers to reach the back without digging.",
        "Hang an over-the-door organizer. If you have a door, use it for spices, packets, snacks, or baking supplies—this is prime real estate in a tiny pantry.",
        "Reserve floor space for bulk items. If your pantry has a floor area, keep heavier backstock there in lidded bins or buckets."
      ]
    },

    {
      type: "h2",
      id: "step-5-label-rotate",
      text: "Step 5: Label, Rotate, and Prevent Waste"
    },
    {
      type: "p",
      text:
        "A zero waste pantry is as much about how you use food as how you store it. Labels and rotation keep everything moving before it expires."
    },
    {
      type: "ul",
      items: [
        "Label transferred food with enough information for everyone in the household to identify and use it safely.",
        "Add dates where it matters. For homemade mixes or bulk items you rarely buy, add a small date on the bottom or back of the jar.",
        "Use a simple rotation rule: oldest in front, newest in back. When you restock, slide older jars or boxes forward and put new items behind.",
        "Create a use-first area for food you have chosen to prioritize after checking its condition, date wording, and storage guidance."
      ]
    },

    {
      type: "h2",
      id: "step-6-maintain",
      text: "Step 6: Use a review rhythm that fits"
    },
    {
      type: "p",
      text:
        "There is no universal maintenance interval. Choose a review cue that matches how often the pantry changes, and shorten or lengthen it based on what you actually find."
    },
    {
      type: "ul",
      items: [
        "At restocking: place newer matching items behind older suitable items when package guidance supports that rotation.",
        "At a regular meal-planning or shopping cue: review the use-first area and note food that repeatedly goes unused.",
        "When a spill occurs or a zone stops working: clean the affected shelf and adjust the layout rather than waiting for a fixed reset date."
      ]
    },
    {
      type: "p",
      text:
        "The test is practical: can you identify what is there, reach it safely, and preserve the information needed to store and prepare it? Keep the parts that help and revise the parts that add work."
    },
    {
      type: "linkP",
      textBefore: "If the scraps you cannot use are difficult to store, continue with the ",
      linkText: "apartment food-scrap odor and fruit-fly guide",
      href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      textAfter: " for a destination-first staging routine."
    }
  ]
},
{
  slug: "low-waste-kitchen-tips-chef-habits",
  title: "11 Low-Waste Kitchen Habits for Using Food More Fully",
  excerpt:
    "Review practical inventory, leftover, freezing, labeling, portioning, and composting habits with safety and local limits in mind.",
  category: "zero-waste-kitchen",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: postKitchen,
  imageAlt: "Illustrative kitchen counter with fresh herbs in a jar beside a cutting board.",
  tags: [
    "low waste kitchen",
    "zero waste cooking",
    "reduce food waste",
    "sustainable living",
    "small apartment kitchen"
  ],
  toc: [
    { id: "why-low-waste-kitchen", label: "Why Low Waste Kitchen Habits Matter" },
    { id: "plan-meals-around-what-you-have", label: "Check What You Have Before Shopping" },
    { id: "eat-me-first-shelf", label: "Make a Use-First Area" },
    { id: "flex-recipes", label: "Choose Flexible Meal Formats" },
    { id: "treat-scraps-like-ingredients", label: "Use Edible Parts Safely" },
    { id: "skip-unnecessary-peeling", label: "Prepare Produce Safely" },
    { id: "batch-cook-components", label: "Cook Components That Fit Your Storage" },
    { id: "freeze-early", label: "Chill and Freeze Food Safely" },
    { id: "leftovers-night", label: "Choose a Leftover Check-In" },
    { id: "portion-like-a-pro", label: "Choose Portions for Your Household" },
    { id: "label-and-store-smart", label: "Label and Store Food With Context" },
    { id: "compost-and-start-small", label: "Follow Local Food-Scrap Rules" }
  ],
  body: [
    {
      type: "p",
      text:
        "Food can be difficult to track in a small kitchen, especially when packages, leftovers, and ingredients compete for limited storage. These practices are options for making food easier to see and plan around; they do not guarantee savings or a measured reduction in waste."
    },
    {
      type: "p",
      text:
        "Review the 11 sections and choose only what fits your food, storage, appliances, schedule, dietary needs, physical access, and household. Most suggestions use what you already have, and food-safety or package directions take priority."
    },

    {
      type: "h2",
      id: "why-low-waste-kitchen",
      text: "Why Low Waste Kitchen Habits Matter"
    },
    {
      type: "p",
      text:
        "At home, overbuying, poor storage, and forgotten leftovers can leave usable food uneaten. The practical goal of this guide is narrower: make ingredients easier to see and use before they spoil."
    },
    {
      type: "p",
      text:
        "Inventory, labels, visible storage, meal planning, prompt chilling, and local food-scrap rules address different parts of the process. None is a universal solution, so start with the point where food is currently becoming hard to find, store, or use safely."
    },

    {
      type: "h2",
      id: "plan-meals-around-what-you-have",
      text: "Check What You Have Before Shopping"
    },
    {
      type: "p",
      text:
        "A quick inventory can show what is already available before you make a shopping list. It is a planning aid, not proof that every visible item is safe or suitable to use."
    },
    {
      type: "ul",
      items: [
        "Check the refrigerator, freezer, and pantry when you are able, including labels and storage directions for foods you may use soon.",
        "Choose meals that fit safe ingredients already present, then list any missing items you decide are necessary.",
        "Use a phone note, paper list, or another reminder that is accessible to the people who share food planning."
      ]
    },

    {
      type: "h2",
      id: "eat-me-first-shelf",
      text: "Make a Use-First Area"
    },
    {
      type: "p",
      text:
        "If space and reach allow, one shelf area, bin, or written list can keep selected foods visible. A use-first area does not override storage instructions, recalls, signs of spoilage, or food-safety limits."
    },
    {
      type: "ul",
      items: [
        "Choose a location you can reach and see without blocking refrigerator vents or crowding foods that need cold airflow.",
        "Keep food in suitable packaging or containers, and retain allergens, lot codes, preparation details, date labels, and storage directions.",
        "Treat package dates according to the product and current food-safety guidance rather than using one date as a universal discard rule."
      ]
    },

    {
      type: "h2",
      id: "flex-recipes",
      text: "Choose Flexible Meal Formats"
    },
    {
      type: "p",
      text:
        "A flexible meal format can accommodate small amounts of compatible ingredients. Use only food that was cooked, chilled, and stored safely, and account for allergies, dietary needs, and the flavors or textures your household will accept."
    },
    {
      type: "ul",
      items: [
        "Soups, stir-fries, curries, or grain bowls may work for safely stored ingredients that can be cooked together appropriately.",
        "Tacos, wraps, or salads may suit small portions of compatible ready-to-eat ingredients.",
        "Egg dishes may be an option when eggs and additions are suitable for the household and are cooked to safe temperatures."
      ]
    },

    {
      type: "h2",
      id: "treat-scraps-like-ingredients",
      text: "Use Edible Parts Safely"
    },
    {
      type: "p",
      text:
        "Some parts commonly removed during preparation are edible; others are tough, unsafe, contaminated, allergenic, recalled, or simply unsuitable for a dish. Confirm that a part is edible and sound before treating it as an ingredient."
    },
    {
      type: "ul",
      items: [
        "Set aside only identified, edible vegetable pieces that were washed and handled safely; do not use spoiled, moldy, recalled, or unknown material.",
        "Check a reliable preparation source before using an unfamiliar leaf, stem, peel, seed, pit, bone, or trimming.",
        "Bread that was stored safely and shows no mold may be suitable for another recipe; moldy bread should be discarded rather than trimmed and reused."
      ]
    },

    {
      type: "h2",
      id: "skip-unnecessary-peeling",
      text: "Prepare Produce Safely"
    },
    {
      type: "p",
      text:
        "Whether to peel produce depends on the item, recipe, condition, package directions, and household preference. Cleaning is still required even when the peel will be removed."
    },
    {
      type: "ul",
      items: [
        "Wash hands, rinse produce under plain running water, and gently rub it; use a clean produce brush for firm items.",
        "Cut away damaged or bruised areas before preparing or eating, and discard produce that is rotten or otherwise unsafe."
      ]
    },
    {
      type: "linkP",
      textBefore: "The ",
      linkText: "FDA's produce-cleaning guidance",
      href: "https://www.fda.gov/consumers/consumer-updates/7-tips-cleaning-fruits-vegetables",
      textAfter: " provides the preparation boundary used here."
    },

    {
      type: "h2",
      id: "batch-cook-components",
      text: "Cook Components That Fit Your Storage"
    },
    {
      type: "p",
      text:
        "Cooking components can make later meals easier to assemble when the quantity fits your refrigerator or freezer. Choose amounts you can cool, store, and use safely rather than treating a large batch as the default."
    },
    {
      type: "ul",
      items: [
        "Cook an amount of grain, beans, or another component that fits planned meals and available cold storage.",
        "Prepare vegetables in a quantity the household can store and use within safe limits.",
        "Keep raw-animal-food drippings and other higher-risk ingredients separate, and follow safe cooking and storage directions."
      ]
    },

    {
      type: "h2",
      id: "freeze-early",
      text: "Chill and Freeze Food Safely"
    },
    {
      type: "p",
      text:
        "Freezing can extend storage for many foods, but it does not make food safe if it was already mishandled. Refrigerate or freeze perishables promptly and follow food-specific and appliance guidance."
    },
    {
      type: "ul",
      items: [
        "Use containers or packaging labeled suitable for freezing, leaving any headspace the product or container requires.",
        "Divide large amounts of hot food into shallow containers for prompt cooling instead of leaving a large pot at room temperature.",
        "Label stored food with its identity and date, and retain any instructions needed for safe thawing, cooking, or reheating."
      ]
    },
    {
      type: "linkP",
      textBefore: "Follow the USDA FSIS guidance for ",
      linkText: "safe leftovers and rapid cooling",
      href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
      textAfter: " rather than letting hot food sit out to cool."
    },
    {
      type: "linkP",
      textBefore: "The USDA also explains the limits of ",
      linkText: "freezing and food safety",
      href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety",
      textAfter: ", including safe thawing and refreezing conditions."
    },

    {
      type: "h2",
      id: "leftovers-night",
      text: "Choose a Leftover Check-In"
    },
    {
      type: "p",
      text:
        "A recurring check can help a household notice stored food, but the schedule must follow safe storage limits rather than a fixed weekly rule. Choose a time and reminder method that fits the household."
    },
    {
      type: "ul",
      items: [
        "Review labels, storage history, package directions, and the food itself before deciding whether an item can be used.",
        "Do not rely on smell or appearance alone to decide that a perishable food is safe; when safe handling is uncertain, follow authoritative food-safety guidance."
      ]
    },

    {
      type: "h2",
      id: "portion-like-a-pro",
      text: "Choose Portions for Your Household"
    },
    {
      type: "p",
      text:
        "Food needs and appetites vary by person and from one meal to another. If it suits the people eating, smaller initial servings with the option for more can reduce pressure to finish an unwanted portion."
    },
    {
      type: "ul",
      items: [
        "Adjust recipe quantities when practical, accounting for the number of people, their needs, and any planned leftovers.",
        "If you intentionally cook extra, divide and refrigerate or freeze it promptly in suitable containers.",
        "Let people choose an initial portion when possible; avoid treating one serving size or plate as universally appropriate."
      ]
    },

    {
      type: "h2",
      id: "label-and-store-smart",
      text: "Label and Store Food With Context"
    },
    {
      type: "p",
      text:
        "Labels can record what a stored food is and when it was prepared or opened. Clear containers are optional; the right choice depends on food suitability, available containers, visibility needs, and the information on the original package."
    },
    {
      type: "ul",
      items: [
        "Use tape, a washable marker, or another accessible method to record contents and a relevant date.",
        "Use intact food-suitable containers according to their temperature, freezer, microwave, and dishwasher limits; do not assume takeout packaging is reusable for every purpose.",
        "Keep allergens, lot codes, recalls, date labels, preparation and storage directions, and refrigerator airflow visible or otherwise reliably recorded."
      ]
    },
    {
      type: "linkP",
      textBefore: "Use the ",
      linkText: "FDA's food-storage guidance",
      href: "https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely",
      textAfter: " for refrigerator temperature, airflow, package directions, covered storage, spoilage, and date-label context."
    },
    {
      type: "linkP",
      textBefore: "For a fuller visibility and package-information routine, continue with the ",
      linkText: "small-apartment pantry organization guide",
      href: "/blog/zero-waste-pantry-organization-small-apartments",
      textAfter: "."
    },

    {
      type: "h2",
      id: "compost-and-start-small",
      text: "Follow Local Food-Scrap Rules"
    },
    {
      type: "p",
      text:
        "Some inedible food scraps may have a local collection or processing route. Confirm the destination first because accepted materials, liners, containers, transfer schedules, and access differ by program and building."
    },
    {
      type: "ul",
      items: [
        "Use only a collection container and location that fit the destination's rules, the container instructions, available space, pests, odor, cleaning access, and household agreement.",
        "Check local municipal, hauler, drop-off, community-garden, or other operator instructions before including a material.",
        "If no acceptable route is available, do not imply that a renter must buy equipment, use a freezer, keep scraps outdoors, or obtain landlord approval."
      ]
    },
    {
      type: "p",
      text:
        "Choose one practice that addresses a real friction point and revise it if it does not fit. The useful result is a safer, more workable food-use routine for this household—not a guaranteed savings, waste, health, or environmental outcome."
    },
    {
      type: "linkP",
      textBefore: "The EPA notes that accepted feedstocks vary by facility; review its ",
      linkText: "composting guidance",
      href: "https://www.epa.gov/sustainable-management-food/composting",
      textAfter: " alongside the rules for the service or destination you will actually use."
    },
    {
      type: "linkP",
      textBefore: "For inedible scraps, use the ",
      linkText: "apartment composting odor and fruit-fly troubleshooting guide",
      href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      textAfter: " to separate collection, cold staging, worm bins, and bokashi before choosing a method."
    }
  ]
},
{
  slug: "zero-waste-kitchen-budget-9-swaps",
  title: "Zero-Waste Kitchen on a Budget: 9 Swaps to Evaluate",
  excerpt:
    "Evaluate nine kitchen swaps by replacement timing, local cost, expected use, care needs, and what you already own.",
  category: "zero-waste-kitchen",
  date: "2026-06-22",
  readingTime: "9 min read",
  image: postKitchen,
  imageAlt: "Illustrative kitchen counter with fresh herbs in a jar beside a cutting board.",
  tags: ["zero waste", "kitchen", "budget", "renters", "swaps"],
  toc: [
    { id: "bottled-drinks", label: "Evaluate packaged drinks and reusable options" },
    { id: "paper-towels", label: "Evaluate washable cloths for some tasks" },
    { id: "plastic-wrap", label: "Evaluate storage covers and containers" },
    { id: "bulk-bins", label: "Compare package sizes and bulk bins" },
    { id: "leftovers", label: "Test a food-use prompt" },
    { id: "compost", label: "Confirm a food-scrap destination" },
    { id: "pantry-zones", label: "Make one pantry adjustment" },
    { id: "reusable-workhorses", label: "Replace a tool only when needed" },
    { id: "energy-tweaks", label: "Compare a lighting or cooking change" },
    { id: "tight-budget", label: "How to start without assuming savings" },
    { id: "sources", label: "Evidence and safety boundaries" },
  ],
  body: [
    { type: "p", text: "A lower-waste kitchen does not require a matching set of new products. This guide offers nine changes to evaluate, not nine purchases or guaranteed savings. Start with the item or routine you already use, then compare replacement timing, local price, expected use, storage, cleaning, utilities, and disposal options." },
    { type: "p", text: "A suggestion may be useful for one household and impractical for another. Keep using a safe item that works, involve the people who share the kitchen, and follow package, appliance, lease, building, and local-program directions." },
    { type: "h2", id: "bottled-drinks", text: "1. Evaluate Packaged Drinks and Reusable Options" },
    { type: "p", text: "Packaged drinks create packaging and a recurring purchase for households that buy them. Whether a reusable bottle, tap water, or a filter is suitable depends on local water guidance, the reason treatment is needed, upfront and replacement-filter costs, and the reader’s ability to fill and clean the item." },
    { type: "p", text: "Options to evaluate:" },
    { type: "ul", items: [
      "Use tap water only when local authorities say it is safe for the intended use. If treatment is needed, choose a filter certified for the identified concern and follow its installation and replacement directions.",
      "Keep one reusable bottle and one to‑go mug near the sink so they’re easy to grab.",
      "Prepare a drink at home only in a clean, intact, food-suitable container and store it according to the recipe and ingredient guidance.",
    ]},
    { type: "p", text: "Compare the actual packaged-drink spending avoided with the bottle or filter price, replacement parts, water, and cleaning. A purchase has no fixed payback and may not reduce total packaging or cost for every household." },
    { type: "h2", id: "paper-towels", text: "2. Evaluate Washable Cloths for Some Tasks" },
    { type: "p", text: "Washable cloths can replace paper for some routine wiping when the household has a safe way to store, wash, dry, and handle them." },
    { type: "p", text: "Try this:" },
    { type: "ul", items: [
      "Cut old T‑shirts into squares for cleaning rags.",
      "Keep a small basket or jar of cloth napkins or microfiber cloths on the counter so they’re as easy to grab as a paper towel roll.",
      "Use the cleanup method required for the spill or product. Keep cloths used for higher-risk contamination separate and follow public-health or product directions.",
    ]},
    { type: "p", text: "Durability, laundry access, water and energy use, hygiene needs, and physical effort vary. Try a small number of cloths before buying a set, and keep a paper option if it is the safer or more accessible choice for a task." },
    { type: "h2", id: "plastic-wrap", text: "3. Evaluate Storage Covers and Containers" },
    { type: "p", text: "Cling film and disposable bags are single-use packaging. A reusable cover or container is an option only when it is suitable for the food, temperature, cleaning method, available space, and user." },
    { type: "p", text: "Swap options:" },
    { type: "ul", items: [
      "Cover a bowl with a plate or use a reusable cover only when it fits securely and is suitable for the food and storage temperature.",
      "Reuse a jar or takeout container only if it is intact, clean, food-suitable, and used within its manufacturer or supplier guidance.",
      "Use freezer bags or containers only when their directions permit freezing; leave suitable headspace and follow food-specific storage guidance.",
    ]},
    { type: "p", text: "Keep relevant ingredient, allergen, preparation, storage, date, and lot information with transferred food. Beeswax wraps and other specialty covers also have food, heat, cleaning, and lifespan limits, so check the maker’s directions before use." },
    { type: "h2", id: "bulk-bins", text: "4. Compare Package Sizes and Bulk Bins" },
    { type: "p", text: "A larger package or bulk bin may use different packaging, but it is not automatically cheaper or lower waste. Compare the unit price and the quantity your household can use before the food loses quality or becomes unsafe." },
    { type: "p", text: "Questions to check:" },
    { type: "ul", items: [
      "Buy a larger or bulk quantity only when the price, transport, storage space, allergen controls, and expected use make sense.",
      "If transferring food, use a suitable labeled container and retain the original package information needed for safe use and traceability.",
      "Pack your own “snack boxes” in reusable containers for work or outings instead of single‑serve packets.",
    ]},
    { type: "p", text: "Visibility may help with inventory, but it does not guarantee that food will be used. The US EPA notes that buying a large quantity saves money only when the food is used; buying the amount needed from a bulk bin can be useful where that option is accessible." },
    { type: "h2", id: "leftovers", text: "5. Test a Food-Use Prompt" },
    { type: "p", text: "Food that is forgotten or bought in an unusable quantity can become an avoidable cost. A visibility or planning prompt may help, but the useful routine depends on the household’s schedule, food, and storage." },
    { type: "p", text: "Shift the system:" },
    { type: "ul", items: [
      "Plan only the meals the household reasonably expects to eat at home, whether that is one meal or several.",
      "Designate a visible use-first area for leftovers and foods you have chosen to prioritize after checking condition, date wording, and storage guidance.",
      "Choose a leftover prompt that fits the household instead of assuming a weekly clean-out meal will work.",
    ]},
    { type: "p", text: "These routines keep soon-to-expire food visible and give leftovers a planned use. Track what your household actually uses before assuming they will lower waste or grocery costs." },
    { type: "h2", id: "compost", text: "6. Confirm a Food-Scrap Destination" },
    { type: "p", text: "Separate food scraps or recyclables only after confirming a destination and its current acceptance rules. A countertop container is a collection method, not composting by itself." },
    { type: "p", text: "Destination-first options:" },
    { type: "ul", items: [
      "After checking accepted materials and storage guidance, use a suitable washable container sized for the available counter, refrigerator, or freezer space.",
      "Verify a municipal program, subscribed service, staffed drop-off, or other destination before collecting scraps for it; do not assume a community garden or farmers’ market accepts them.",
      "Separate recyclables only according to the local collector’s current rules and the building’s available system.",
    ]},
    { type: "p", text: "If your local program accepts the scraps and recyclables you separate, less of that material may remain in your regular trash." },
    { type: "h2", id: "pantry-zones", text: "7. Make One Pantry Adjustment" },
    { type: "p", text: "A pantry change can make food easier to see, but this article should not duplicate the food-safety and package-information steps in the dedicated pantry guide." },
    { type: "p", text: "Use the smallest useful adjustment:" },
    { type: "ul", items: [
      "Review one shelf at a time if emptying the pantry would block the kitchen or make the task inaccessible.",
      "Create a few simple zones—breakfast, grains, snacks, baking, dinner basics—rather than overly complicated systems.",
      "Keep food in its package when that is the safest or easiest option; transfer it only to an intact, food-suitable container.",
      "Retain the food name plus relevant allergens, lot code, date wording, preparation, and storage directions.",
    ]},
    { type: "p", text: "This approach can be adapted to a single cabinet: use only as many zones and containers as the space and the food you actually keep require." },
    { type: "h2", id: "reusable-workhorses", text: "8. Replace a Tool Only When Needed" },
    { type: "p", text: "A reusable product is not automatically an improvement. Continue using a safe item that works, then evaluate a replacement when the current item is worn out or a documented need is unmet." },
    { type: "p", text: "Possible replacements to evaluate:" },
    { type: "ul", items: [
      "A dish brush or sponge that the user can grip, clean, dry, and replace as its directions require.",
      "A baking mat only when it is compatible with the pan, oven, food, temperature, and cleaning method.",
      "A knife and cutting board that are safe and comfortable for the user instead of specialty tools that would go unused.",
    ]},
    { type: "p", text: "Before buying, consider borrowing, repairing, or trying one item. Compare expected frequency of use, care effort, replacement parts, storage, accessibility, and end-of-life options rather than relying on an unnamed recommendation." },
    { type: "h2", id: "energy-tweaks", text: "9. Compare a Lighting or Cooking Change" },
    { type: "p", text: "Energy use and cost depend on the equipment, utility rate, billing arrangement, and cooking pattern. Renters may not control fixtures or appliances." },
    { type: "p", text: "Low-purchase checks:" },
    { type: "ul", items: [
      "When a renter-controlled incandescent bulb needs replacement, compare a compatible LED’s rated output, energy use, lifetime, dimmer or fixture limits, price, and local disposal guidance.",
      "Use lids and cookware only as their manufacturers direct, and match them to the appliance and recipe rather than applying one cooking rule universally.",
      "Refrigerate perishable leftovers promptly. The FDA says hot food can go into the refrigerator and recommends dividing large amounts into shallow containers for faster cooling.",
    ]},
    { type: "p", text: "ENERGY STAR says well-designed LEDs are more efficient and typically last longer than incandescent lighting. That supports a product comparison, not a guaranteed household bill or emissions result." },
    { type: "h2", id: "tight-budget", text: "How to Start Without Assuming Savings" },
    { type: "p", text: "If spending is constrained, begin with a no-purchase observation and choose only what is manageable:" },
    { type: "ul", items: [
      "Note what is discarded or repeatedly unused without assigning blame, then decide whether a use-first area would help.",
      "Switch to rags and cloths made from old clothes.",
      "Adjust one pantry shelf with the packages and suitable containers already available.",
      "Check for a verified food-scrap destination before choosing a collection container.",
    ]},
    { type: "p", text: "Track actual purchase, utility, care, and replacement costs before calling a change a saving. There is no need to reinvest an assumed saving in another reusable product." },
    {
      type: "linkP",
      textBefore: "For package, date-label, allergen, lot-code, and container safeguards, use the ",
      linkText: "small-apartment pantry guide",
      href: "/blog/zero-waste-pantry-organization-small-apartments",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "Before buying a compost pail or system, diagnose the current setup with the ",
      linkText: "small-space food-scrap odor and fruit-fly guide",
      href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      textAfter: ". It includes no-purchase counter, refrigerator, and freezer staging options alongside processing methods."
    },
    { type: "h2", id: "sources", text: "Evidence and Safety Boundaries" },
    {
      type: "linkP",
      textBefore: "The ",
      linkText: "US EPA’s household wasted-food guidance",
      href: "https://www.epa.gov/recycle/preventing-wasted-food-home",
      textAfter: " supports checking inventory, planning for meals actually eaten, buying usable quantities, and storing food appropriately. These practices can help; this article does not promise a result for an individual household."
    },
    {
      type: "linkP",
      textBefore: "For refrigeration, follow the ",
      linkText: "FDA’s current cold-food safety guidance",
      href: "https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety",
      textAfter: ", the food package, and appliance instructions."
    },
    {
      type: "linkP",
      textBefore: "For printed dates, consult ",
      linkText: "USDA FSIS food product dating guidance",
      href: "https://www.fsis.usda.gov/guidelines/2019-0022",
      textAfter: " instead of treating every date as a universal discard deadline."
    },
    {
      type: "linkP",
      textBefore: "The lighting comparison is bounded by ",
      linkText: "ENERGY STAR’s LED overview",
      href: "https://www.energystar.gov/products/learn-about-led-lighting",
      textAfter: "; compatibility, purchase cost, local electricity, billing, and actual use still determine the household result."
    },
  ],
},
{
    slug: "small-apartment-eco-upgrade-checklist",
    title: "30-Day Small Apartment Eco-Upgrade Checklist (Under 100 Dollars)",
    excerpt:
      "A friendly, renter-safe 30-day plan to upgrade your small apartment with sustainable swaps — all for under $100 total.",
    category: "eco-habits-budget",
    date: "2026-06-22",
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
    title: "Apartment Composting Odor & Fruit Flies: A Small-Space Fix",
    excerpt:
      "Reset a smelly food-scrap bin, address fruit flies, and choose a counter, fridge, freezer, worm-bin, or bokashi routine that fits your apartment.",
    category: "zero-waste-kitchen",
    date: "2026-07-19",
    readingTime: "10 min read",
    image: postKitchen,
    imageAlt: "Illustrative small kitchen counter with fresh herbs beside a cutting board",
    tags: ["apartment composting", "food scraps", "fruit flies", "renters"],
    toc: [
      { id: "reset", label: "Reset a smelly or fly-prone bin" },
      { id: "staging", label: "Staging is not composting" },
      { id: "diagnose", label: "Match the symptom to the next check" },
      { id: "method", label: "Choose a small-space method" },
      { id: "routine", label: "Build the removal routine" },
      { id: "clean", label: "Clean it without assuming a dishwasher" },
      { id: "sources", label: "Sources and limits" },
    ],
    body: [
      {
        type: "p",
        text: "If the food-scrap bin already smells or a cloud of tiny flies appears when you open it, start with a reset—not a new gadget. Empty the scraps through a destination that currently accepts them, clean the container and the area around it, then change how long or where you hold the next batch.",
      },
      {
        type: "p",
        text: "No indoor setup is guaranteed odor-free or pest-free. The workable goal is a routine that keeps scraps contained, moves them out on a realistic cadence, and fits the counter, refrigerator, or freezer space you actually have.",
      },
      {
        type: "p",
        text: "Before choosing a method, identify the final destination: a building cart, municipal pickup, staffed drop-off, subscription service, maintained worm bin, or a verified place that can finish bokashi material. Accepted food, liners, and transfer rules vary by program.",
      },
      { type: "h2", id: "reset", text: "Reset a smelly or fly-prone bin" },
      {
        type: "ul",
        items: [
          "Move the current scraps to the destination that accepts them. If you do not have one, pause collection until you identify a workable route.",
          "Wash the empty container with detergent and water, following its care instructions. Hand washing is a complete path; a dishwasher is only an option for dishwasher-safe parts.",
          "Clean residue from the lid groove, handle, counter, cabinet floor, and nearby spills. Check other possible food sources, including overripe produce and residue around a drain or trash container.",
          "Let the container dry, then inspect it and any reusable liner for cracks, failed seals, trapped liquid, or lingering residue.",
          "For the next batch, shorten the time on the counter or move a compatible closed container to the refrigerator or freezer if space permits.",
        ],
      },
      {
        type: "linkP",
        textBefore: "Public collection guidance from ",
        linkText: "Portland",
        href: "https://www.portland.gov/bps/garbage-recycling/home-recycling/compost-tips",
        textAfter: " and Seattle supports regular emptying and detergent cleaning as practical controls, while local program rules still determine what belongs in the collection stream.",
      },
      { type: "h2", id: "staging", text: "First, separate staging from composting" },
      {
        type: "p",
        text: "A countertop pail waiting for pickup is a collection container. It is not an active compost system, so advice about turning a pile or balancing greens and browns does not automatically apply. Its job is to contain scraps briefly and transfer them to the next step.",
      },
      {
        type: "p",
        text: "A worm bin is an active aerobic processing system with bedding, ventilation, moisture, and feeding limits. Bokashi is a sealed fermentation system. Those methods need their own maintenance and a plan for the material they produce.",
      },
      {
        type: "linkP",
        textBefore: "The ",
        linkText: "U.S. EPA composting guide",
        href: "https://www.epa.gov/recycle/composting-home",
        textAfter: " defines composting as managed aerobic decomposition and distinguishes finished compost from food scraps that have only been collected or processed another way.",
      },
      { type: "h2", id: "diagnose", text: "Match the symptom to the next check" },
      {
        type: "table",
        caption: "Apartment food-scrap bin troubleshooting",
        headers: ["What you notice", "Check first", "Next bounded step"],
        rows: [
          ["Sour or rotten odor", "How long scraps have been warm; liquid or residue under the liner", "Empty through the verified route, wash and dry the pail, then shorten counter time or use cold staging."],
          ["Tiny flies at the lid", "Loose lid, exposed scraps, residue in the rim, nearby produce or spills", "Remove and clean the food source, close the next batch, and transfer it sooner. A trap alone does not clean the source."],
          ["Liquid on the shelf or floor", "Crack, tipped container, failed bag, wet scraps", "Contain the leak, clean the surface, and switch only to a container or liner permitted by the destination."],
          ["Odor returns before collection day", "The pickup interval is longer than the container's comfortable staging interval", "Transfer to an outside cart more often if allowed, refrigerate or freeze a closed compatible container, or choose a more frequent destination."],
          ["Active worm bin smells", "Excess food, blocked air holes, standing moisture, too little bedding", "Pause feeding and follow worm-bin guidance; add dry bedding or restore ventilation only for that system."],
          ["Bokashi smells putrid rather than pickled", "Seal, compaction, liquid drainage, or inoculant instructions", "Follow the specific system instructions and verify a finishing route; do not treat the output as finished compost."],
        ],
      },
      { type: "h2", id: "method", text: "Choose a small-space method by destination and upkeep" },
      {
        type: "table",
        caption: "Small-space food-scrap method comparison",
        headers: ["Method", "What it does", "Best fit", "Tradeoff to plan for"],
        rows: [
          ["Closed counter pail", "Stages scraps for transfer", "A short, reliable removal cadence", "Warm scraps and residue may require more frequent emptying and cleaning."],
          ["Refrigerator container", "Cold-stages scraps", "Some shelf space and a route that accepts the stored material", "Uses food-storage space and still needs a closed, leak-resistant, washable container."],
          ["Freezer-safe container", "Slows microbial activity while staging scraps", "Enough freezer room and less frequent transfer", "Does not sterilize scraps; the container must be freezer-safe and cleaned after emptying."],
          ["Worm bin", "Processes selected scraps aerobically", "Room for bedding and ongoing bin care", "Feeding, moisture, airflow, temperature, and accepted inputs need active management."],
          ["Bokashi system", "Ferments food in a sealed container", "A renter with a verified finishing route", "Requires inoculant, system upkeep, and a destination for acidic pre-compost."],
        ],
      },
      {
        type: "linkP",
        textBefore: "USDA explains that ",
        linkText: "freezing slows microbial activity rather than destroying every microbe",
        href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety",
        textAfter: ". Long Beach and Portland list freezer staging as an odor-control option in their own collection programs. That supports a cautious “may help,” not a no-smell promise.",
      },
      { type: "h3", id: "worm-bin", text: "If you want to process scraps in a worm bin" },
      {
        type: "p",
        text: "Treat the worm bin as a living system, not a storage bucket. Bury accepted scraps in bedding, avoid overfeeding, and respond to standing moisture or blocked ventilation using worm-bin instructions. Do not copy a curbside program's accepted-material list into a worm bin.",
      },
      {
        type: "linkP",
        linkText: "Oregon Metro's worm-bin troubleshooting",
        href: "https://www.oregonmetro.gov/waste-disposal-and-prevention/healthy-living-and-waste-reduction/healthy-gardening/composting",
        textAfter: " separates odor, fruit-fly, moisture, and ventilation checks for that specific system.",
      },
      { type: "h3", id: "bokashi", text: "If you are considering bokashi" },
      {
        type: "linkP",
        textBefore: "Washington State University Extension describes ",
        linkText: "bokashi as anaerobic fermentation",
        href: "https://extension.wsu.edu/kitsap/bokashi-composting/",
        textAfter: ". The result is pre-compost, not finished compost. Confirm where you can bury or finish it before buying a system; an apartment lease or a collection service should not be assumed to provide that route.",
      },
      { type: "h2", id: "routine", text: "Build the removal routine around a real destination" },
      {
        type: "ul",
        items: [
          "Write down the destination, access hours or pickup day, and the current accepted-materials page.",
          "Check whether the program permits paper, certified compostable bags, no liner, or another specific transfer method. “Compostable” on a package is not permission from the destination.",
          "Choose a container location and size by the space you can spare and how often you can empty it—not by an unsupported household-size formula.",
          "Set the transfer cue before the container is full: after dinner on a pickup eve, when leaving for a regular errand, or on another repeatable schedule.",
          "Keep a fallback. If access changes, pause scraps collection or use an approved waste route rather than storing an indefinite backlog indoors.",
        ],
      },
      {
        type: "p",
        text: "Roommates or housemates can agree on the destination, what goes in, who transfers it, and what happens when the container leaks or smells. That is a practical coordination suggestion, not evidence that one routine works for every shared home.",
      },
      { type: "h2", id: "clean", text: "Clean the container with or without a dishwasher" },
      {
        type: "p",
        text: "Empty the container, remove any filter or detachable part according to its instructions, wash with mild detergent and water, rinse, and let it dry before adding new scraps. Hand washing is sufficient when done according to the container's care instructions. Use a dishwasher only when every part you put inside is labeled dishwasher-safe.",
      },
      {
        type: "linkP",
        textBefore: "Austin's public ",
        linkText: "food-scrap collector instructions",
        href: "https://www.austintexas.gov/sites/default/files/files/Trash_and_Recycling/organics_pilot/OrganicsPilot_UsingFoodScrapCollector.pdf",
        textAfter: " explicitly include both hand washing with mild soap and water and a dishwasher path. This article keeps both so the setup does not depend on owning a dishwasher.",
      },
      { type: "h2", id: "sources", text: "Sources, context, and what this guide does not claim" },
      {
        type: "p",
        text: "Technical guidance was checked against U.S. EPA and USDA material, university composting guidance, and official local collection programs. Local pages are examples of bounded practices, not nationwide rules. This guide does not promise zero odor, guarantee pest prevention, provide tenant-rights advice, or recommend a universal container capacity.",
      },
      {
        type: "linkP",
        textBefore: "The complete ",
        linkText: "ETLH editorial and corrections policy",
        href: "/editorial-policy",
        textAfter: " explains how to flag a source or passage that should be reviewed.",
      },
      { type: "h2", id: "next-step", text: "Choose one next Eco Step" },
      {
        type: "p",
        text: "Do one reset and one cadence change: wash and dry the current container, then decide exactly when the next batch leaves the apartment. If that still fails, change the staging location or destination before buying another bin.",
      },
      {
        type: "linkP",
        textBefore: "For the kitchen around the bin, use the ",
        linkText: "small-apartment pantry visibility guide",
        href: "/blog/zero-waste-pantry-organization-small-apartments",
        textAfter: " to keep use-first food visible without treating containers as the whole solution.",
      },
      {
        type: "linkP",
        textBefore: "If most scraps begin as forgotten ingredients, continue with ",
        linkText: "practical low-waste food-use habits",
        href: "/blog/low-waste-kitchen-tips-chef-habits",
        textAfter: " before evaluating a purchase.",
      },
    ],
  },
  {
    slug: "eco-friendly-small-apartment-decor-budget",
    title: "Eco Friendly Small Apartment Decor on a Budget",
    excerpt:
      "Thrifted, renter-safe, and plant-forward ideas for budget eco home decor that makes a small apartment feel intentional and warm.",
    category: "small-apartment-decor",
    date: "2026-06-22",
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
    date: "2026-06-22",
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
  const categoryPosts = posts.filter((p) => p.category === slug);

  if (slug !== "zero-waste-kitchen") return categoryPosts;

  const startHereSlug = "zero-waste-kitchen-ideas-tiny-apartments";
  return [...categoryPosts].sort((a, b) => {
    if (a.slug === startHereSlug) return -1;
    if (b.slug === startHereSlug) return 1;
    return 0;
  });
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
