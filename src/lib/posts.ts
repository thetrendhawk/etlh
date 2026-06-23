import postKitchen from "@/assets/post-kitchen.jpg";
import postDecor from "@/assets/post-decor.jpg";
import postChecklist from "@/assets/post-checklist.jpg";
import zeroWastePin1 from "@/assets/ZeroWastePin1.png";
import zeroWastePin2 from "@/assets/ZeroWastePin2.png";
import zeroWastePin3 from "@/assets/ZeroWastePin3.png";
import sustainablePin1 from "@/assets/SustainablePin1.png";
import sustainablePin2 from "@/assets/SustainablePin2.png";
import sustainablePin3 from "@/assets/SustainablePin3.png";
import decorPin1 from "@/assets/DecorPin1.png";
import decorPin2 from "@/assets/DecorPin2.png";
import decorPin3 from "@/assets/DecorPin3.png";





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
  title: "Zero Waste Pantry Organization for Small Apartments (Before & After)",
  excerpt:
    "Learn a simple step-by-step system to turn a cluttered small pantry into a zero waste, easy-to-use food hub.",
  category: "zero-waste-kitchen",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: zeroWastePin3, // import this in your file
  imageAlt:
    "Before-and-after view of a small pantry cabinet transformed from cluttered boxes into neatly labeled glass jars and bins.",
  tags: [
    "zero waste pantry",
    "small pantry organization",
    "zero waste kitchen",
    "pantry organization",
    "small apartment kitchen"
  ],
  toc: [
    { id: "why-zero-waste-pantry", label: "Why a Zero Waste Pantry Matters" },
    { id: "step-1-declutter-audit", label: "Step 1: Declutter and Audit Your Pantry" },
    { id: "step-2-create-zones", label: "Step 2: Create Simple Pantry Zones" },
    { id: "step-3-jar-system", label: "Step 3: Build a Clear Jar Storage System" },
    { id: "step-4-use-vertical-space", label: "Step 4: Use Vertical Space and Door Storage" },
    { id: "step-5-label-rotate", label: "Step 5: Label, Rotate, and Prevent Waste" },
    { id: "step-6-maintain", label: "Step 6: Maintenance Ritual for Tiny Pantries" }
  ],
  body: [
    {
      type: "p",
      text:
        "If your small pantry explodes every time you open the door, you’re not alone. Tiny cabinets and deep shelves make it easy to lose bags, buy duplicates, and toss food you forgot you had."
    },
    {
      type: "p",
      text:
        "A zero waste pantry isn’t about aesthetic perfection—it’s about seeing what you own, using it up on time, and cutting plastic packaging wherever you reasonably can. This guide walks you through a simple before-and-after process designed specifically for small apartments and narrow pantries."
    },

    {
      type: "h2",
      id: "why-zero-waste-pantry",
      text: "Why a Zero Waste Pantry Matters"
    },
    {
      type: "p",
      text:
        "Most pantry waste comes from three things: food hidden behind other items, packaging that doesn’t reseal well, and overbuying because you can’t see what you already have. In a small space, every inch needs to do real work."
    },
    {
      type: "p",
      text:
        "By organizing your pantry around visibility and access—clear containers, simple zones, and good rotation—you reduce food waste, save money on groceries, and make cooking feel easier instead of overwhelming."
    },

    {
      type: "h2",
      id: "step-1-declutter-audit",
      text: "Step 1: Declutter and Audit Your Pantry"
    },
    {
      type: "p",
      text:
        "Before any organizing happens, you need a clean slate. This is the true “before” moment of your zero waste pantry makeover."
    },
    {
      type: "ul",
      items: [
        "Empty everything out. Pull all food, bins, and random items out of the cabinet or closet and place them on a table or counter.",
        "Sort and check dates. Toss expired items, compost what you can, and set aside unopened non-perishables you know you won’t use to donate.",
        "Combine duplicates. If you have three half-used bags of rice or pasta, combine them into one container so you can see your real inventory.",
        "Wipe down shelves. Clean surfaces with a simple, low-tox cleaner so your “after” feels fresh and inviting."
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
        "Zones make it obvious where things belong, which means less decision fatigue and less chance of food disappearing behind something else."
    },

    {
      type: "h2",
      id: "step-3-jar-system",
      text: "Step 3: Build a Clear Jar Storage System"
    },
    {
      type: "p",
      text:
        "Packaging is the enemy of a zero waste pantry: it hides what you have, goes stale faster, and adds visual clutter. The fix is to decant your most-used staples into clear, airtight containers."
    },
    {
      type: "ul",
      items: [
        "Shop your home first. Gather clean glass jars and sturdy containers from pasta sauce, nut butters, pickles, and other foods.",
        "Choose your priority items. Start with what you use weekly: rice, oats, pasta, lentils, beans, flour, sugar, nuts, and common snacks.",
        "Decant dry goods into jars. Remove as many cardboard boxes and flimsy plastic bags as you can. Clear containers make it easy to see when you’re running low.",
        "Group containers by height and type. Put taller jars in the back, shorter ones in front, or use risers so you can see every label at a glance."
      ]
    },
    {
      type: "p",
      text:
        "You don’t need a Pinterest-perfect matchy set on day one. Start with what you have, then slowly upgrade to a consistent set of square or stackable containers as your budget allows."
    },

    {
      type: "h2",
      id: "step-4-use-vertical-space",
      text: "Step 4: Use Vertical Space and Door Storage"
    },
    {
      type: "p",
      text:
        "Small pantries usually have more height than depth. The key is to turn that height into usable storage so nothing gets buried."
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
        "Label every container. Even if contents are obvious to you, labels help everyone else put things back correctly and prevent duplicate purchases.",
        "Add dates where it matters. For homemade mixes or bulk items you rarely buy, add a small date on the bottom or back of the jar.",
        "Use a simple rotation rule: oldest in front, newest in back. When you restock, slide older jars or boxes forward and put new items behind.",
        "Create an “almost expired” spot. Keep a small bin for foods that need to be used soon and check it when planning meals or snacks."
      ]
    },

    {
      type: "h2",
      id: "step-6-maintain",
      text: "Step 6: Maintenance Ritual for Tiny Pantries"
    },
    {
      type: "p",
      text:
        "Once your zero waste pantry is set up, you only need a few minutes each week to keep it that way. A tiny, consistent ritual beats a massive reorganization every few months."
    },
    {
      type: "ul",
      items: [
        "Weekly: spend 5 minutes pushing newer items to the back, moving older items forward, and returning stray products to their zones.",
        "Monthly: do a quick mini-audit of one shelf, tossing anything expired and noting what you’re repeatedly not using.",
        "Seasonally: wipe down shelves, rinse sticky jars, and reconsider zones if your cooking style or household needs have changed."
      ]
    },
    {
      type: "p",
      text:
        "Over time, your pantry will stop being a chaotic black hole and start working like a tiny, efficient store: you can see what you have, you use it before it goes bad, and you buy less packaging because reusable containers do most of the work."
    }
  ]
},
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
        "If your trash fills up with food and packaging every week, you’re not alone—and your grocery bill is paying the price. The good news is that many of the best low waste kitchen tips come straight from restaurant chefs and zero‑waste cooks who are forced to use every ingredient to the max."
    },
    {
      type: "p",
      text:
        "This guide breaks down 11 chef‑inspired habits you can use in a small apartment kitchen to reduce food waste, save money, and make better food—without needing special tools or a huge pantry."
    },

    {
      type: "h2",
      id: "why-low-waste-kitchen",
      text: "Why Low Waste Kitchen Habits Matter"
    },
    {
      type: "p",
      text:
        "Globally, households waste a huge portion of the food they buy, mostly through overbuying, poor storage, and forgotten leftovers. Food waste doesn’t just cost money; it also wastes all the water, energy, and transport that went into growing and shipping that food."
    },
    {
      type: "p",
      text:
        "Professional kitchens run on tight margins, so chefs have to squeeze maximum value out of every carrot, loaf of bread, and herb bunch. Many of their habits transfer perfectly to a home kitchen—and especially to small apartments where space is limited and wasted food is felt immediately."
    },

    {
      type: "h2",
      id: "plan-meals-around-what-you-have",
      text: "Plan Meals Around What You Already Have"
    },
    {
      type: "p",
      text:
        "Chefs rarely order new ingredients without checking inventory first, because over‑ordering leads to spoilage and lost profit. At home, planning meals around what you already own is one of the strongest low‑waste habits you can build."
    },
    {
      type: "ul",
      items: [
        "Before you shop, quickly scan your fridge, freezer, and pantry and list ingredients that need to be used soon, especially fresh produce and dairy.",
        "Choose recipes that feature those ingredients first, then add only the items you truly need to make them work.",
        "Keep a short weekly note in your phone or on the fridge labeled “Use This First” so you remember what to build meals around."
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
        "Many restaurant kitchens use clearly labeled bins or sections for ingredients that need to be used immediately. At home, an “Eat Me First” shelf is a simple way to copy that system and keep aging items visible."
    },
    {
      type: "ul",
      items: [
        "Pick one shelf or bin in your fridge and label it “Eat Me First.” Put leftovers and foods close to their expiry date there.",
        "Create a smaller version in the pantry for near‑expiry dry goods, snacks, or baking ingredients.",
        "Check this shelf when planning lunch, snacks, or dinner so the oldest items get used before you open something new."
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
        "Restaurants rely on flexible “catch‑all” recipes—like soups, curries, grain bowls, and frittatas—to use up mixed leftover ingredients. At home, relying less on rigid recipes and more on formats makes it much easier to use what you have instead of running to the store for one missing item."
    },
    {
      type: "ul",
      items: [
        "Stir‑fries, curries, and fried rice are ideal for mixed vegetables, leftover chicken, tofu, or beans.",
        "Grain bowls, tacos, and wraps handle small amounts of chopped veg, cooked meat, or roasted tray leftovers.",
        "Frittatas, omelets, and breakfast burritos are great for using up bits of cheese, herbs, and vegetables before they wilt."
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
        "Zero‑waste chefs look at stems, peels, and trimmings as potential flavor, not automatic garbage. Using more of the ingredient means you get extra meals and nutrients from the same grocery budget."
    },
    {
      type: "ul",
      items: [
        "Collect clean onion skins, carrot ends, celery leaves, herb stems, and bones in a freezer bag, then simmer a full bag into stock and freeze it in jars or cubes.",
        "Turn carrot tops, beet greens, or herb stems into pesto, chimichurri, or sautéed side dishes instead of throwing them away.",
        "Turn stale bread into homemade breadcrumbs or croutons for salads and soups."
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
        "Peeling vegetables often removes edible flesh and fiber that you pay for and then never eat. Scrubbing rather than peeling is usually enough for most produce."
    },
    {
      type: "ul",
      items: [
        "Scrub potatoes, carrots, zucchini, cucumbers, and apples with a vegetable brush instead of peeling for everyday dishes.",
        "When you do need to cut off bad spots, trim minimally instead of taking thick slices around a bruise or blemish."
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
        "Restaurant prep sessions focus on ready‑to‑use components—cooked grains, roasted vegetables, sauces—so the kitchen can assemble dishes quickly and use ingredients before they spoil."
    },
    {
      type: "ul",
      items: [
        "Cook a big pot of rice, quinoa, or another grain once and use it across bowls, stir‑fries, stuffed peppers, and soups.",
        "Roast a tray of mixed vegetables at the start of the week to add to salads, pastas, and grain bowls.",
        "Blend a simple sauce or dressing from herbs, citrus, yogurt, or pan drippings to give leftovers a new flavor."
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
        "Many people freeze food only when it’s already on the edge, but freezing items while they’re still in good condition keeps flavor and texture high and prevents last‑minute panic throws into the trash."
    },
    {
      type: "ul",
      items: [
        "Freeze extra cooked grains, beans, and lentils in flat bags or small containers for quick future meals.",
        "Portion sauces, stocks, and tomato paste into ice‑cube trays so you can grab exactly what you need.",
        "Label everything with the name and date so you actually use it instead of letting it become a mystery container."
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
        "Restaurants write specials to move ingredients quickly; a home version is to dedicate one night each week to eating what’s already cooked."
    },
    {
      type: "ul",
      items: [
        "Plan a weekly “fridge clean‑out” meal using whatever is in your Eat Me First shelf, freezer, and produce drawer.",
        "Serve different leftover dishes family‑style and treat it like a tasting night rather than a compromise dinner."
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
        "Over‑portioning is a major source of plate waste in homes and restaurants. Chefs control portion sizes carefully because every untouched bite is money in the trash."
    },
    {
      type: "ul",
      items: [
        "Cook realistic quantities for the number of people you’re feeding; you don’t always need to make a full 4–6 serving recipe.",
        "If you do cook extra intentionally for lunches, portion and refrigerate it right away instead of leaving it in the pot.",
        "Use slightly smaller plates and bowls so reasonable portions still look satisfying."
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
        "Professional kitchens rely on labeling and clear containers so nothing gets lost at the back of the fridge. Adopting a light version of this system at home prevents mystery tubs and surprise science experiments."
    },
    {
      type: "ul",
      items: [
        "Use tape or simple stickers to note the contents and date on leftovers and homemade stocks or sauces.",
        "Store food in clear containers or jars instead of opaque takeout tubs so you can see what’s inside at a glance.",
        "Aim to keep your fridge about two‑thirds full so air can circulate and items don’t get buried."
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
        "Even with great habits, some food scraps are unavoidable. Composting turns those inedible bits into something useful instead of methane‑producing landfill waste."
    },
    {
      type: "ul",
      items: [
        "Use a small countertop container or jar for fruit and vegetable scraps, coffee grounds, and eggshells.",
        "Look for local compost drop‑off sites, community gardens, or city programs that accept food scraps.",
        "If you’re new to low‑waste cooking, start with just two or three habits—such as an Eat Me First shelf, one flex‑recipe night, and a freezer scrap bag—and add more once those feel automatic."
      ]
    },
    {
      type: "p",
      text:
        "You don’t have to be perfect to make a big difference. Small, repeatable habits—planning around what you have, using up scraps, freezing early, and composting what’s left—can transform any kitchen into a low waste kitchen over time."
    }
  ]
},
{
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
