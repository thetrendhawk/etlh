import postKitchen from "@/assets/post-kitchen.jpg";
import decorCategoryImage from "@/assets/cat-decor.jpg";
import habitsCategoryImage from "@/assets/cat-habits.jpg";
import apartmentImage from "@/assets/hero-apartment.jpg";
import postChecklist from "@/assets/post-checklist.jpg";
import decorPin1 from "@/assets/DecorPin1.webp";





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
    title: "Notice Friction at Home: Test One Small Change",
    excerpt:
      "Notice recurring extra steps in an everyday routine, then test one small arrangement change without assuming a result.",
    category: "intentional-living",
    date: "2026-07-03",
    readingTime: "6 min read",
    image: habitsCategoryImage,
    imageAlt: "Illustrative hand marking a paper checklist beside a mug in a small apartment.",
    tags: ["intentional living", "friction audit", "small routines", "use what you have"],
    toc: [
      { id: "weight-we-dont-notice", label: "Notice Recurring Friction" },
      { id: "why-it-matters", label: "Describe the Extra Step" },
      { id: "different-way", label: "Use Observation, Not Blame" },
      { id: "one-small-change", label: "Test One Small Change" },
      { id: "your-eco-step", label: "Your Eco Step" },
      { id: "reflection", label: "Reflection" },
    ],
    body: [
      {
        type: "p",
        text:
          "A routine can contain extra steps even when no single step is dramatic. The sink has a few dishes, a bag needs to be returned, or one more small decision is waiting in the background.",
      },
      {
        type: "p",
        text:
          "Notice the sequence without judging it: what you reach for, where you pause, what you move twice, and what you leave for later. This page treats those observations as clues, not diagnoses.",
      },
      {
        type: "h2",
        id: "weight-we-dont-notice",
        text: "Notice Recurring Friction",
      },
      {
        type: "p",
        text:
          "Friction can show up as clutter with no clear place to land, supplies stored far from where they are used, a routine with too many steps, or a choice that must be remade each time.",
      },
      {
        type: "p",
        text:
          "Small details can repeat. A sticking drawer, a counter that collects mail, or a routine with several handoffs gives you something specific to inspect before changing anything.",
      },
      {
        type: "h2",
        id: "why-it-matters",
        text: "Describe the Extra Step",
      },
      {
        type: "p",
        text:
          "If a routine is not working, describe the arrangement before judging your motivation. The system around the action may be asking for extra reaching, remembering, cleaning, walking, or coordination.",
      },
      {
        type: "p",
        text:
          "A reusable container may be easier to choose when it is reachable; a mail routine may be clearer when one landing spot exists. These are options to test, not promises about mood or performance.",
      },
      {
        type: "h2",
        id: "different-way",
        text: "Use Observation, Not Blame",
      },
      {
        type: "p",
        text:
          "Instead of asking, \"How do I become more disciplined?\" try asking, \"Where is this routine creating extra steps?\" That keeps the review focused on the arrangement. Your home does not need to be perfect for you to test one change.",
      },
      {
        type: "p",
        text:
          "Look for the spots where you pause, avoid, forget, or work around something. Write down the step, the item involved, and who or what controls it before choosing a change.",
      },
      {
        type: "h2",
        id: "one-small-change",
        text: "Test One Small Change",
      },
      {
        type: "p",
        text:
          "You do not need to reorganize your entire apartment or rebuild every routine. Choose one reversible arrangement change and decide in advance what you will observe.",
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
          "The best test is not the most impressive one. It is the smallest change that fits your access, storage, cleaning, safety, lease, and household limits.",
      },
      {
        type: "h2",
        id: "your-eco-step",
        text: "Your Eco Step",
      },
      {
        type: "p",
        text:
          "Choose one recurring moment that contains an extra step. Do not solve the whole category. Test one arrangement that you can keep, change, or stop.",
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
          "Give yourself a change you can make with what you have, or record why it needs permission, another person, a product instruction, or a local service. Then review what actually changed.",
      },
      {
        type: "h2",
        id: "reflection",
        text: "Reflection",
      },
      {
        type: "p",
        text:
          "A useful routine review does not require forcing yourself to care harder. It starts by naming the extra step and checking whether the arrangement can change.",
      },
      {
        type: "p",
        text:
          "Thoughtful living can include an arrangement that fits your actual limits and routines. Start with the friction you can see, and let stopping be a valid result.",
      },
      {
        type: "linkP",
        textBefore: "If the friction involves lease, building, household, or local-service control, use the ",
        linkText: "apartment systems control map",
        href: "/blog/sustainable-living-apartment-easy-habits",
        textAfter: ".",
      },
      {
        type: "linkP",
        textBefore: "For a short renter starting path, see the ",
        linkText: "beginner sustainable living checklist",
        href: "/blog/beginner-sustainable-living-checklist-renters",
        textAfter: ".",
      },
    ],
  },
  {
  slug: "sustainable-tiny-living-room-layout-ideas",
  title: "Small Living Room Layout Planning: Measure, Test, and Adjust",
  excerpt:
    "Plan a small living room around fixed constraints, walking paths, furniture footprints, and reversible layout tests before buying or installing anything.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: apartmentImage,
  imageAlt:
    "Illustrative sunlit apartment living area with a sofa, low table, and clear walking path.",
  tags: [
    "small living room layout",
    "furniture footprint planning",
    "renter-aware room planning",
    "small-space pathways"
  ],
  toc: [
    { id: "measure-fixed-constraints", label: "Measure Fixed Constraints First" },
    { id: "test-with-what-you-have", label: "Test With What You Have" },
    { id: "check-paths-and-access", label: "Check Paths and Access" },
    { id: "decide-before-buying", label: "Decide Before Buying or Mounting" }
  ],
  body: [
    {
      type: "p",
      text:
        "A small living room layout starts with the room you actually have: its dimensions, doors, windows, heaters, outlets, fixed furniture, and the activities it needs to support."
    },
    {
      type: "p",
      text:
        "Use this page to measure those constraints, sketch or tape-test an arrangement with what you already own, and review access before considering a purchase. There is no single ideal layout, and restoring the original arrangement is a valid result."
    },

    {
      type: "h2",
      id: "measure-fixed-constraints",
      text: "Measure Fixed Constraints First"
    },
    {
      type: "ul",
      items: [
        "Measure the room and the footprint of furniture already present. Note doors, windows, radiators, vents, outlets, switches, and any fixed or fragile feature.",
        "Mark required access to doors, windows, heaters, controls, and storage. Do not treat a generic clearance number as universal; follow local rules, building guidance, and manufacturer instructions where they apply.",
        "Write down what the room must support—seating, reading, work, play, mobility, pet access, accessibility needs, or shared use—before choosing an arrangement.",
        "If measuring or moving furniture is unsafe or physically demanding, ask for help or use a paper sketch; do not lift beyond your ability."
      ]
    },

    {
      type: "h2",
      id: "test-with-what-you-have",
      text: "Test With What You Have"
    },
    {
      type: "p",
      text:
        "A layout test is an experiment, not a promise that the room will feel larger, calmer, more open, or more productive."
    },
    {
      type: "ul",
      items: [
        "Sketch two or three options on paper, or use painter’s tape to mark furniture footprints before moving heavy pieces. Include doors, windows, heaters, outlets, and the path used most often.",
        "Try one arrangement with the current sofa and table, then observe whether seating, walking, cleaning, charging, and opening the window still work for the people who use the room.",
        "Keep the option that supports the room’s actual tasks with fewer awkward moves. If none works, restore the original arrangement and record the constraint instead of buying around it."
      ]
    },

    {
      type: "h2",
      id: "check-paths-and-access",
      text: "Check Paths and Access"
    },
    {
      type: "p",
      text:
        "Path and access checks matter more than a style label. Keep exits, required routes, heaters, vents, windows, controls, and electrical access usable, and follow fire, building, and manufacturer guidance."
    },
    {
      type: "ul",
      items: [
        "Check that furniture does not create a trip hazard, block a mobility aid, pinch a route, or prevent a child or pet from using the room safely.",
        "Do not drill, wall-mount, anchor, alter wiring, or move a heater or appliance unless the lease, building rules, and manufacturer instructions allow it and the installation is safe.",
        "For shared rooms, agree on the test with the people who use the space. A layout that works for one person may not support another person’s access or routine.",
        "Review lighting, glare, noise, reach, and visual load as observations for this room—not as guaranteed comfort, health, or wellbeing outcomes."
      ]
    },

    {
      type: "h2",
      id: "decide-before-buying",
      text: "Decide Before Buying or Mounting"
    },
    {
      type: "p",
      text:
        "Only consider a purchase after a layout test identifies a specific missing function or footprint. A functional item does not need replacing because another material, color, or trend is marketed as more sustainable."
    },
    {
      type: "ul",
      items: [
        "Compare a possible item by footprint, access, cleaning, installation, return terms, household use, and what happens if it does not fit. Do not infer durability, repairability, or environmental benefit from material or secondhand status alone.",
        "Treat rugs, mirrors, color, lighting, plants, and storage as optional visual choices. They do not establish that a room will look larger or that plants improve indoor air quality.",
        "Use existing trays, boxes, textiles, or artwork for a trial before shopping. Keep a no-purchase result when it solves the actual problem.",
        "If a change depends on landlord permission, transportation, another person, or a local service, pause until that dependency is confirmed."
      ]
    },
    {
      type: "p",
      text:
        "A successful layout test is one that gives you clearer information about the room and its constraints. Keep it, revise it, or restore the original arrangement; all three are useful outcomes."
    },
    {
      type: "linkP",
      textBefore: "For a short no-purchase room reset, see the ",
      linkText: "small-apartment reset checklist",
      href: "/blog/eco-friendly-small-apartment-weekend-checklist",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "For sourcing criteria after a verified need exists, see the ",
      linkText: "small-apartment decor guide",
      href: "/blog/eco-friendly-small-apartment-decor-budget",
      textAfter: "."
    }
  ]
},
{
  slug: "eco-friendly-small-apartment-weekend-checklist",
  title: "A Small-Apartment Reset Checklist: Choose One Useful Change",
  excerpt:
    "Inspect one room, choose one reversible reset, and stop when the change fits your space, lease, energy, and household.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: decorCategoryImage,
  imageAlt:
    "Illustrative small apartment corner with a clear surface, warm lamp, and layered textiles.",
  tags: [
    "small apartment reset",
    "renter-aware home systems",
    "use what you have",
    "small-space routines"
  ],
  toc: [
    { id: "notice-one-friction-point", label: "Notice One Friction Point" },
    { id: "no-purchase-reset", label: "Start With a No-Purchase Reset" },
    { id: "maintain-and-coordinate", label: "Maintain and Coordinate" },
    { id: "pause-before-buying", label: "Pause Before Buying or Installing" }
  ],
  body: [
    {
      type: "p",
      text:
        "A small apartment reset does not need to become a whole-home project. Use this page to inspect one room, identify one repeated snag, and test one reversible change with what you already have."
    },
    {
      type: "p",
      text:
        "A weekend can be a convenient planning window, but it is not a deadline. You can stop after one useful change, spread the steps across several days, or leave an item for later."
    },
    {
      type: "linkP",
      textBefore: "For a deeper room-planning reference, see ",
      linkText: "small living room layout and styling ideas",
      href: "/blog/sustainable-tiny-living-room-layout-ideas",
      textAfter: "."
    },

    {
      type: "h2",
      id: "notice-one-friction-point",
      text: "Notice One Friction Point"
    },
    {
      type: "ul",
      items: [
        "Walk through one room and note one repeated extra step: an item that moves twice, a surface that collects loose things, a cord that crosses a path, or a supply stored far from where it is used.",
        "Write down what you already own and what the lease, building, household, mobility, sensory, child, pet, or allergy constraints make impractical.",
        "Choose one change that is reversible and specific enough to review: move one item, clear one surface, group one routine, or adjust one lamp."
      ]
    },

    {
      type: "h2",
      id: "no-purchase-reset",
      text: "Start With a No-Purchase Reset"
    },
    {
      type: "ul",
      items: [
        "Give frequently used items one reachable home, but keep walkways, exits, vents, heaters, and appliance clearances open.",
        "Use a tray, box, or container you already own to gather one category of loose items; label it only if that reduces a repeated decision.",
        "Try a different lamp position or clear a window area without claiming that the room will feel larger, calmer, or more productive.",
        "Test a cloth, refill, or reusable item only when it fits the way your household already cleans and stores supplies; follow product directions.",
        "Review the result after you have used the arrangement, and keep it only if it reduces a real extra step."
      ]
    },

    {
      type: "h2",
      id: "maintain-and-coordinate",
      text: "Maintain and Coordinate"
    },
    {
      type: "ul",
      items: [
        "For shared areas, agree on one small change with the people who use the space; do not move another person’s belongings or remove a safety item without agreement.",
        "For cleaning, ventilation, textiles, mold, lighting, furniture anchoring, and appliances, use manufacturer guidance and building rules. Do not block vents or alter electrical fittings as a reset shortcut.",
        "If a change depends on a utility, recycling, compost, landlord, or municipal service, verify the local option before building it into the routine.",
        "Stop and review when the change adds work, creates an access problem, irritates allergies, affects a child or pet, or makes the room harder to use."
      ]
    },

    {
      type: "h2",
      id: "pause-before-buying",
      text: "Pause Before Buying or Installing"
    },
    {
      type: "ul",
      items: [
        "Do not replace a functional item just to match a material label such as natural, secondhand, reusable, compact, or multifunctional; those labels do not establish fit, safety, durability, or environmental benefit by themselves.",
        "If the one change still fails after observation, measure the space and identify the actual constraint before considering a purchase.",
        "Treat purchases as optional and compare size, cleaning, accessibility, return terms, installation, and household use against a no-buy alternative.",
        "A useful reset can end with a note about what to revisit later. Completing the whole list is not the goal."
      ]
    },
    {
      type: "p",
      text:
        "If one room now asks for less reaching, searching, moving, or coordinating, pause there. The next step can wait until you know the change is actually useful."
    },
    {
      type: "linkP",
      textBefore: "If the repeated snag is part of a larger routine, use the ",
      linkText: "apartment systems control map",
      href: "/blog/sustainable-living-apartment-easy-habits",
      textAfter: " to separate renter, household, building, and service-dependent decisions."
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
  title: "15 Low-Waste Lifestyle Practices to Consider",
  excerpt:
    "Review low-waste practices by what you already own, what you control, and what fits your household, access, and local services.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: habitsCategoryImage,
  imageAlt:
    "Illustrative hand marking a paper checklist beside a mug in a small apartment.",
  tags: [
    "low waste lifestyle",
    "waste-aware habits",
    "eco habits",
    "renter options",
    "small-space living"
  ],
  toc: [
    { id: "mindset-first", label: "Start With Observation" },
    { id: "home-swaps", label: "Use, Repair, and Reuse at Home" },
    { id: "on-the-go-habits", label: "Shopping and Carrying Options" },
    { id: "food-and-kitchen", label: "Food, Storage, and Local End-of-Life" }
  ],
  body: [
    {
      type: "p",
      text:
        "Low-waste living is not a jar challenge or a product quota. Start by noticing one recurring disposable item or waste-producing moment, then choose the smallest option that fits your real space, energy, budget, and household."
    },
    {
      type: "p",
      text:
        "The practices below are options, not a sequence you must complete. Use what you already own before shopping, and stop or adjust when a suggestion creates more work, cost, risk, or inaccessibility."
    },

    {
      type: "h2",
      id: "mindset-first",
      text: "Start With Observation"
    },
    {
      type: "p",
      text:
        "Before changing what you buy, look at what already exists in your home and what the recurring problem actually is. Prevention, finishing, repair, reuse, borrowing, sharing, and correct local disposal can all be reasonable paths."
    },
    {
      type: "ul",
      items: [
        "Use it up first. Finish a working bottle, bag, or product before considering a replacement marketed as eco-friendly.",
        "Pause before buying. Ask what problem the item solves, whether you already have an option, and whether borrowing or sharing is realistic.",
        "When replacement is justified, compare repairability, care, storage, accessibility, expected use, and end-of-life options rather than assuming a material is universally better."
      ]
    },

    {
      type: "h2",
      id: "home-swaps",
      text: "Use, Repair, and Reuse at Home"
    },
    {
      type: "p",
      text:
        "At home, control may include some purchases and routines but not shared appliances, utilities, waste service, lease rules, or another household member's choices. Work within the part you can actually change."
    },
    {
      type: "ul",
      items: [
        "Use a cloth, towel, or napkin you already own when it is suitable for the task; keep disposable supplies when sanitation, allergies, contamination, or accessibility make them the better fit.",
        "Before choosing a concentrate or refill, check product directions, surface compatibility, storage, cleaning effort, local access, and whether the container you have is suitable.",
        "Consider bar or packaged alternatives only when the product, care routine, household needs, and local disposal path work for you; no format is universally lower-impact.",
        "Repair or finish a working brush or scrubber before replacing it, and follow manufacturer or surface instructions for cleaning."
      ]
    },

    {
      type: "h2",
      id: "on-the-go-habits",
      text: "Shopping and Carrying Options"
    },
    {
      type: "p",
      text:
        "Shopping and carrying choices can change how often you encounter packaging, but access, transportation, storage, and energy vary. Pick only an option that reduces friction for your routine."
    },
    {
      type: "ul",
      items: [
        "Carry an existing bottle, mug, bag, or utensils only when doing so is useful, accessible, cleanable, and manageable to store.",
        "Place one carrier where it fits your actual departure routine; a car, backpack, specialty store, or extra set of bags is not required.",
        "Decline an item, sample, or receipt when you do not need it and the choice is available; keep what is needed for access, safety, or household coordination.",
        "Consider borrowing, repairing, sharing, or secondhand options when the condition, transport, cleaning, price, and return or disposal path make sense."
      ]
    },

    {
      type: "h2",
      id: "food-and-kitchen",
      text: "Food, Storage, and Local End-of-Life"
    },
    {
      type: "p",
      text:
        "Food storage and end-of-life choices depend on the food, container, household, freezer space, cleaning routine, and local service. Use safety and program instructions before trying an option."
    },
    {
      type: "ul",
      items: [
        "Store food in a suitable container you already have, following food-safety guidance and the container, appliance, and package instructions; glass is not required.",
        "Plan only as much as helps your household use food, and leave room for changing schedules, shared decisions, limited freezer space, or no planning system at all.",
        "Make food that needs attention visible if that works for your fridge or pantry; do not change storage temperatures or handling practices without authoritative guidance.",
        "If you collect food scraps, check local compost, organics, trash, or drop-off instructions first. A container, pickup service, freezer, car, or outdoor space may not be available."
      ]
    },
    {
      type: "p",
      text:
        "You do not have to use all 15 practices. Choose one observation or action, test the smallest version that fits, and keep, change, or stop based on what your home and household actually need. One useful change is enough."
    },
    {
      type: "linkP",
      textBefore: "For a shorter starting path, use the ",
      linkText: "beginner sustainable living checklist for renters",
      href: "/blog/beginner-sustainable-living-checklist-renters",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "For food-scrap end-of-life options, see the ",
      linkText: "apartment composting odor and fruit-fly troubleshooting guide",
      href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      textAfter: ", then follow local program instructions."
    },
    {
      type: "linkP",
      textBefore: "You can also use the ",
      linkText: "Small-Apartment Eco Step Starter Sheet",
      href: "/resources",
      textAfter: " directly; email signup is optional."
    }
  ]
},
{
  slug: "easy-sustainable-habits-on-a-budget",
  title: "20 Renter-Aware Sustainable Habits to Consider",
  excerpt:
    "Review 20 renter-aware options by what you already own, what you control, and what fits your household, access, and local services.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: habitsCategoryImage,
  imageAlt:
    "Illustrative hand marking a paper checklist beside a mug in a small apartment.",
  tags: [
    "renter options",
    "sustainable habits",
    "apartment living",
    "use what you own",
    "small-space living"
  ],
  toc: [
    { id: "start-small", label: "Start With What You Control" },
    { id: "home-energy-habits", label: "Home Energy Options" },
    { id: "water-and-cleaning", label: "Water and Cleaning Options" },
    { id: "shopping-and-reusables", label: "Shopping and Reusable Options" },
    { id: "food-and-waste", label: "Food and Waste Options" }
  ],
  body: [
    {
      type: "p",
      text:
        "Sustainable living does not require a shopping list or a perfect home. Begin with one part of daily life you can actually change, then check the time, effort, storage, cleaning, safety, access, and household cooperation it would require."
    },
    {
      type: "p",
      text:
        "These 20 options are written for renters, students, and small-apartment dwellers, but no option fits every home. Budget here means avoiding unnecessary spending, not a promise that any habit will save money."
    },

    {
      type: "h2",
      id: "start-small",
      text: "Start With What You Control"
    },
    {
      type: "p",
      text:
        "Choose one no-purchase or use-what-you-have option. You can maintain, repair, borrow, share, test, change, or stop; completing all 20 is not the goal."
    },

    {
      type: "h2",
      id: "home-energy-habits",
      text: "Home Energy Options"
    },
    {
      type: "ul",
      items: [
        "Keep using a working bulb unless replacement is needed; if you replace one, check fixture compatibility, manufacturer guidance, disposal, lease rules, and whether the choice is accessible.",
        "Turn off or adjust a light or fan only when the control, safety, comfort, and shared-household arrangement make that practical.",
        "Use an existing power strip only when it is suitable for the devices, outlet, cord path, and household safety plan; do not assume it eliminates all standby draw.",
        "Before changing heating, cooling, blinds, or thermostat settings, check building controls, utility guidance, equipment instructions, climate, health, and comfort needs.",
        "Use available daylight when it is comfortable and safe for the room; keep task lighting when visibility or accessibility requires it."
      ]
    },

    {
      type: "h2",
      id: "water-and-cleaning",
      text: "Water and Cleaning Options"
    },
    {
      type: "ul",
      items: [
        "Change shower or tap routines only when the time, mobility, water access, household, and comfort fit; metering and utility responsibility vary.",
        "Run a dishwasher or washing machine according to the appliance instructions and household needs; no dishwasher, full-load rule, or shared control is assumed.",
        "Line-dry only when space, weather, building rules, equipment, energy, and accessibility make it workable; using the dryer can be the appropriate option.",
        "Use a cleaner according to its label and the surface or soil involved. Do not mix products or assume a vinegar, water, soap, or essential-oil mixture is safe.",
        "Keep a cleaning tool you already own where it is reachable and dry enough for the task; storage and hygiene needs differ by home."
      ]
    },

    {
      type: "h2",
      id: "shopping-and-reusables",
      text: "Shopping and Reusable Options"
    },
    {
      type: "ul",
      items: [
        "Use a bottle or cup you already have when carrying, washing, storing, and sharing it fit your routine; buying a new reusable item is not required.",
        "Keep one existing bag where you actually leave from, if carrying it is useful and accessible; a car, backpack, or extra set is not assumed.",
        "Choose less packaging only when the product, price, access, storage, safety, and local disposal path make sense; no package format is universally better.",
        "Consider repairing, borrowing, sharing, or secondhand furniture, clothing, and household items after checking condition, transport, cleaning, accessibility, return, and total cost.",
        "Before buying a replacement, check whether an item you already own can meet the need without creating a storage or maintenance problem."
      ]
    },

    {
      type: "h2",
      id: "food-and-waste",
      text: "Food and Waste Options"
    },
    {
      type: "ul",
      items: [
        "Plan food only as much as helps your household use it; changing schedules, shared decisions, limited freezer space, and no planning system are all possible.",
        "Store leftovers in a suitable container you already have, following food-safety, package, appliance, and container instructions; clear containers are optional.",
        "Make food that needs attention visible if that works for your fridge or pantry, without changing storage temperatures or handling practices without authoritative guidance.",
        "Use a cloth or towel you already own when it suits the task; keep disposable options when sanitation, allergies, contamination, or accessibility make them appropriate.",
        "If you collect scraps, check local compost, organics, trash, or drop-off instructions first. A pickup service, freezer, car, or outdoor space may not be available."
      ]
    },
    {
      type: "p",
      text:
        "Choose one option, test the smallest version that fits, and keep, change, or stop based on what your home and household actually need. One useful change is enough."
    },
    {
      type: "linkP",
      textBefore: "For a shorter starting path, use the ",
      linkText: "beginner sustainable living checklist for renters",
      href: "/blog/beginner-sustainable-living-checklist-renters",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "For food-scrap decisions, see the ",
      linkText: "apartment composting troubleshooting guide",
      href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      textAfter: ", then follow local program instructions."
    },
    {
      type: "linkP",
      textBefore: "You can also use the ",
      linkText: "Small-Apartment Eco Step Starter Sheet",
      href: "/resources",
      textAfter: " directly; email signup is optional."
    }
  ]
},
{
  slug: "sustainable-living-apartment-easy-habits",
  title: "Sustainable Apartment Systems: What Renters Can Control",
  excerpt:
    "Map apartment routines by what you control, what needs household agreement, and what depends on building, utility, or local services.",
  category: "eco-habits-budget",
  date: "2026-06-22",
  readingTime: "6 min read",
  image: apartmentImage,
  imageAlt:
    "Illustrative sunlit apartment with wood furniture, woven decor, and several houseplants.",
  tags: [
    "apartment systems",
    "renter control",
    "building services",
    "small-space living",
    "sustainable routines"
  ],
  toc: [
    { id: "map-the-decision", label: "Map the Decision First" },
    { id: "renter-controlled", label: "Renter-Controlled Routines" },
    { id: "shared-household", label: "Shared-Household Decisions" },
    { id: "building-utility", label: "Building and Utility Dependencies" },
    { id: "local-and-purchase", label: "Local Services and Purchases" }
  ],
  body: [
    {
      type: "p",
      text:
        "Apartment routines are shaped by more than personal preference. Before changing a light, appliance routine, cleaning practice, or waste path, identify who controls it and what instructions apply."
    },
    {
      type: "p",
      text:
        "This guide is a control map, not another habit quota. It separates renter-controlled actions from shared-household decisions, building or landlord responsibilities, and utility, municipal, or purchase-dependent options."
    },

    {
      type: "h2",
      id: "map-the-decision",
      text: "Map the Decision First"
    },
    {
      type: "p",
      text:
        "For any proposed change, ask four questions: Do I control it? Does another household member need to agree? Does the lease, building, landlord, utility, or manufacturer control it? Does a local service or new purchase have to exist first?"
    },
    {
      type: "p",
      text:
        "If the answer is unclear, keep the existing routine, check the relevant instruction, or choose a reversible no-purchase option. A routine that needs permission, a special trip, extra storage, or a change to shared equipment may not be yours to change alone."
    },

    {
      type: "h2",
      id: "renter-controlled",
      text: "Renter-Controlled Routines"
    },
    {
      type: "p",
      text:
        "These are examples of decisions a renter may be able to make without changing a fixture, shared appliance, lease term, or building service. Check access, safety, cleaning, and household fit first."
    },
    {
      type: "ul",
      items: [
        "Keep using a working bulb, lamp, fan, or curtain unless a change is needed; if you replace something, check compatibility, manufacturer instructions, disposal, lease rules, and accessibility.",
        "Use an existing light, fan, power strip, or curtain only when the control, outlet, cord path, safety, and comfort fit your space.",
        "Use a bottle, mug, bag, cloth, or container you already own when carrying, washing, storing, and sharing it fit the task; buying a replacement is not required.",
        "Repair, borrow, share, or keep using an item when its condition, cleaning, transport, accessibility, and return or disposal path make that workable."
      ]
    },

    {
      type: "h2",
      id: "shared-household",
      text: "Shared-Household Decisions"
    },
    {
      type: "p",
      text:
        "Shared appliances, storage, cleaning supplies, schedules, and comfort settings are not individual projects. Agree on the routine or choose a version that does not change another person’s access or safety."
    },
    {
      type: "ul",
      items: [
        "Set a dishwasher or washing-machine routine only with the people who use it and according to the appliance instructions; no full-load rule or shared control is assumed.",
        "Discuss shower, tap, laundry, and cleaning routines when timing, mobility, privacy, water access, or comfort differs across the household.",
        "Keep shared food, cleaning, and reusable-item storage where people can reach and identify what is available; matching containers are not required.",
        "If a change affects sanitation, allergies, contamination, or accessibility, keep the safer available option and agree before changing supplies."
      ]
    },

    {
      type: "h2",
      id: "building-utility",
      text: "Building and Utility Dependencies"
    },
    {
      type: "p",
      text:
        "Some routines belong with a landlord, building manager, utility, or service provider. Treat the following as check, report, or permission paths rather than personal optimization tasks."
    },
    {
      type: "ul",
      items: [
        "For leaks, fixtures, heating, cooling, ventilation, or appliances you do not own, check the lease or building process and report the issue through the responsible channel.",
        "Before changing a thermostat, blind, outlet, fixture, or appliance setting, check building controls, utility guidance, equipment instructions, climate, health, and comfort needs.",
        "Do not assume your building offers separate recycling, organics, bulk pickup, metering, or tenant-controlled waste service; verify the current local instructions.",
        "Do not treat a bill, meter, or utility charge as a personal experiment. Confirm who receives the data, who can change the setting, and what the service actually measures."
      ]
    },

    {
      type: "h2",
      id: "local-and-purchase",
      text: "Local Services and Purchases"
    },
    {
      type: "p",
      text:
        "A local program or a new item may be useful, but neither is universal. Check access, price, storage, transport, cleaning, return terms, safety, and end-of-life instructions before committing."
    },
    {
      type: "ul",
      items: [
        "For compost, organics, recycling, refill, repair, or drop-off options, check the current municipal or provider instructions before buying a container or changing your disposal route.",
        "When replacement is necessary, compare repairability, care, storage, accessibility, expected use, transport, and end-of-life handling; no material or package format is universally better.",
        "Consider borrowing, sharing, library services, or secondhand options only when the condition, cleaning, transport, access, price, and return path fit the need.",
        "If a proposed change requires a special purchase, extra storage, a car, outdoor space, or a service you cannot access, skip it or choose a smaller existing-item option."
      ]
    },
    {
      type: "p",
      text:
        "Use this map to decide who needs to be involved, which instructions apply, and whether the smallest reversible option is worth trying. The renter checklist is a short starting path; the 20 renter-aware options cover broader examples; the low-waste practices page goes deeper on waste-specific choices."
    },
    {
      type: "linkP",
      textBefore: "Start with the ",
      linkText: "beginner sustainable living checklist for renters",
      href: "/blog/beginner-sustainable-living-checklist-renters",
      textAfter: " if you need one low-pressure option."
    },
    {
      type: "linkP",
      textBefore: "For a wider option set, see ",
      linkText: "20 renter-aware sustainable habits",
      href: "/blog/easy-sustainable-habits-on-a-budget",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "For waste-specific decisions, use ",
      linkText: "15 low-waste practices to consider",
      href: "/blog/low-waste-lifestyle-tips-beginners",
      textAfter: "."
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
    title: "A 30-Day Small-Apartment Eco Step Checklist",
    excerpt:
      "Use a paced checklist to choose renter-controlled actions without assuming a fixed budget or requiring a purchase.",
    category: "eco-habits-budget",
    date: "2026-06-22",
    readingTime: "8 min read",
    image: postChecklist,
    imageAlt: "Illustrative cleaning brushes, cloths, and refillable bottles arranged in a wooden caddy.",
    tags: ["checklist", "renters", "budget"],
    toc: [
      { id: "why", label: "Use 30 days as optional pacing" },
      { id: "week-1", label: "Week 1: Kitchen choices" },
      { id: "week-2", label: "Week 2: Cleaning and laundry" },
      { id: "week-3", label: "Week 3: Decor and storage" },
      { id: "week-4", label: "Week 4: Review the routine" },
    ],
    body: [
      { type: "p", text: "Use this four-week checklist as optional pacing, not a deadline or a requirement to complete one purchase every day. Skip, repeat, substitute, pause, or stop based on your money, energy, access, household, and apartment." },
      { type: "p", text: "Start with reader-controlled actions and what you already own. A generic checklist cannot promise a fixed total or permission under a lease, so check building rules, product instructions, surfaces, utilities, and shared-household needs before making a change." },
      { type: "h2", id: "why", text: "Use 30 days as optional pacing" },
      { type: "p", text: "A month can provide a simple review window: notice a friction point, test one suitable action, and decide whether to keep it. The pacing is an editorial structure, not evidence that 30 days creates a habit, saves money, or produces a measured environmental result." },
      { type: "h2", id: "week-1", text: "Week 1: Kitchen choices" },
      { type: "ul", items: [
        "Use an existing washable cloth for an appropriate task when laundering and hygiene needs make that practical; keep separate materials for contamination-sensitive work.",
        "Collect food scraps only after confirming a destination, its accepted materials, a suitable container, cleaning access, available space, and household agreement.",
        "Cover food with a compatible lid, plate, or food-storage material according to the container, food, temperature, and manufacturer instructions.",
        "Refill a product only through a compatible system and label direction; never mix products or top off a container with an unknown chemical.",
      ]},
      { type: "linkP", textBefore: "Use the ", linkText: "apartment food-scrap troubleshooting guide", href: "/blog/zero-waste-kitchen-ideas-tiny-apartments", textAfter: " to choose a destination and staging method without assuming counter or freezer space." },
      { type: "h2", id: "week-2", text: "Week 2: Cleaning and laundry" },
      { type: "p", text: "Choose a cleaning or laundry change by the actual surface, soil, product label, appliance, textile, ventilation, physical access, and household sensitivities. Vinegar is not a universal surface cleaner, and no laundry accessory has a guaranteed lifespan or result." },
      { type: "ul", items: [
        "Use soap and water for ordinary cleaning when appropriate; use a suitable disinfectant only when the task calls for it and follow its label.",
        "Do not mix cleaning products. Keep labels legible and store products according to their instructions and household safety needs.",
        "Run a load size permitted by the appliance and textile care labels rather than overfilling to meet a universal 'full load' rule.",
        "Air-dry or use an optional laundry aid only when the lease, space, ventilation, material, appliance, noise, allergy, and care requirements allow it.",
      ]},
      { type: "linkP", textBefore: "CDC explains the difference between cleaning and disinfecting and requires readers to ", linkText: "follow product labels and avoid mixing chemicals", href: "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html", textAfter: "." },
      { type: "linkP", textBefore: "If a purchase is needed, EPA's ", linkText: "greener cleaning product guidance", href: "https://www.epa.gov/greenerproducts/identifying-greener-cleaning-products", textAfter: " explains why vague 'green' claims are not proof and points to reviewable certification programs." },
      { type: "h2", id: "week-3", text: "Week 3: Decor and storage" },
      { type: "p", text: "Rearranging, repairing, or repurposing something already present may meet the need without a purchase. When considering secondhand or wall-mounted items, evaluate condition, transport, cleaning, dimensions, load, lease rules, surface compatibility, and removal instructions." },
      { type: "ul", items: [
        "Measure the location and the item before bringing storage or furniture into a small room.",
        "Inspect secondhand goods for damage, odors, pests, recalls, missing hardware, and cleaning needs before accepting them.",
        "Choose a plant only after checking light, care, pet or child toxicity, available space, and who will maintain it.",
        "Use an adhesive or hook only when the lease and manufacturer permit it for that surface and load; patch-test where appropriate and plan for removal.",
      ]},
      { type: "h2", id: "week-4", text: "Week 4: Review the routine" },
      { type: "p", text: "Review what was practical rather than forcing every step into a permanent routine. A bag near the door, a shopping note, or a meal-planning cue may help one household and create clutter or conflict in another." },
      { type: "ul", items: [
        "Keep the action if it fits the people using the space and does not create a new safety, cost, cleaning, or access burden.",
        "Change the cue, location, frequency, or person responsible when the first version does not work.",
        "For stored food, keep package information and food-safety limits in control rather than relying on a fixed weekly use-it-up dinner.",
        "Before buying a replacement, compare the current item's condition, repair options, expected use, care, storage, local price, and disposal route.",
      ]},
      { type: "linkP", textBefore: "For conditional kitchen purchase decisions, use ", linkText: "the nine kitchen swaps evaluation guide", href: "/blog/zero-waste-kitchen-budget-9-swaps", textAfter: "." },
      { type: "p", text: "Finishing all four weeks is not the measure of success. Keep only changes that are safe, permitted, affordable, accessible, and useful for this household; no savings, waste, health, habit, or environmental outcome is guaranteed." },
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
    title: "Small-Apartment Decor on a Budget: Sourcing and Fit Considerations",
    excerpt:
      "Compare reuse, secondhand, layout, lighting, plant, and removable-decor options against your room, lease, household, and budget.",
    category: "small-apartment-decor",
    date: "2026-06-22",
    readingTime: "7 min read",
    image: decorCategoryImage,
    imageAlt: "Illustrative small bedroom with natural wood furniture, plants, warm lighting, and layered textiles.",
    tags: ["decor", "thrifting", "budget"],
    toc: [
      { id: "need", label: "Define the need and measure first" },
      { id: "thrift", label: "Compare sourcing options" },
      { id: "plants", label: "Evaluate a plant for the household" },
      { id: "renter-safe", label: "Check lease, surface, and load limits" },
    ],
    body: [
      { type: "p", text: "Start with the function the room needs rather than an assumption that buying decor will improve it. Rearranging, cleaning, repairing, borrowing, or repurposing an item already present may be enough; no sourcing channel or material guarantees savings or an environmental result." },
      { type: "h2", id: "need", text: "Define the need and measure first" },
      { type: "ul", items: [
        "Name the function first, such as task lighting, concealed storage, seating, privacy, or a place for one frequently used item.",
        "Measure the available width, depth, height, door path, and any clearance needed for walking, mobility aids, vents, outlets, windows, or maintenance access.",
        "Check whether something already owned can be moved, repaired, refinished safely, or used differently before adding another item.",
        "Set a household-specific spending limit that includes pickup, transport, cleaning, repair, hardware, delivery, taxes, and disposal where relevant.",
      ]},
      { type: "h2", id: "thrift", text: "Compare sourcing options" },
      { type: "p", text: "Estate sales, thrift stores, online marketplaces, reuse shops, borrowing networks, and gifting groups offer different inventories and access. None is a universal winner for price, quality, safety, transport, accessibility, or availability." },
      { type: "ul", items: [
        "Confirm dimensions, material, condition, odors, stains, structural damage, missing hardware, recalls, cleaning needs, and return terms before committing.",
        "For upholstered, wood, or stored goods, inspect for pests or evidence of infestation and use local public-health guidance when uncertain.",
        "Plan safe pickup, lifting, stairs, vehicle fit, delivery, and help without assuming a car or physical ability.",
        "Compare the total usable cost with repair, borrowing, using an existing item, or waiting rather than treating a low listing price as the full cost.",
      ]},
      { type: "h2", id: "plants", text: "Evaluate a plant for the household" },
      { type: "p", text: "A plant is optional decor and a living care commitment, not a measured substitute for a dollar amount of furnishings. Choose a species only after checking its light, water, temperature, space, pot, drainage, travel-care, allergy, and pet or child safety needs." },
      { type: "linkP", textBefore: "For homes with animals, check the exact species in the ", linkText: "ASPCA toxic and non-toxic plant reference", href: "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants", textAfter: " and contact a veterinarian or poison-control service for exposure concerns." },
      { type: "h2", id: "renter-safe", text: "Check lease, surface, and load limits" },
      { type: "p", text: "No adhesive, hook, rod, lamp, shelf, or wall covering is universally renter-safe. The lease or building rule and the product's approved surface, span, load, installation, electrical, and removal instructions remain controlling." },
      { type: "ul", items: [
        "Prefer freestanding or existing-item layouts when they meet the need without attaching to a finish.",
        "Use adhesive products only on manufacturer-approved surfaces and loads, after any required cure time and a discreet compatibility test; plan for removal and possible repair.",
        "Use a floor or plug-in lamp only with a suitable outlet, cord path, bulb, stability, clearance, and household safety plan.",
        "Use a tension rod only within its rated span and load on compatible surfaces; do not place heavy, breakable, toxic, or watering-dependent items where a fall could harm people, animals, or property.",
      ]},
      { type: "linkP", textBefore: "Use the ", linkText: "illustrative small-room reset plan", href: "/blog/sustainable-small-apartment-decor-before-after", textAfter: " to compare layout and existing-item changes without treating imagery as a documented project." },
      { type: "linkP", textBefore: "For optional pacing across household changes, continue with the ", linkText: "30-day small-apartment eco step checklist", href: "/blog/small-apartment-eco-upgrade-checklist", textAfter: "." },
      { type: "p", text: "Choose only the changes that fit the room, lease, household, access, and total cost. A secondhand item, plant, or removable product is not automatically cheaper, safer, renter-approved, or environmentally preferable." },
    ],
  },
  {
    slug: "beginner-sustainable-living-checklist-renters",
    title: "Beginner Sustainable Living Checklist for Renters: Five Options to Consider",
    excerpt:
      "A low-pressure starting checklist for renters and small-apartment dwellers: choose one manageable action, use what you have, and check the constraints first.",
    category: "eco-habits-budget",
    date: "2026-06-22",
    readingTime: "5 min read",
    image: postChecklist,
    imageAlt: "Illustrative cleaning brushes, cloths, and refillable bottles arranged in a wooden caddy.",
    tags: ["beginner", "checklist", "habits"],
    toc: [
      { id: "five", label: "Five renter-aware starting options" },
      { id: "mindset", label: "Check control before you act" },
    ],
    body: [
      { type: "p", text: "If you're new to sustainable living, you do not need to replace everything or follow a fixed checklist. Start by noticing one recurring problem, then choose an option you can try with what you already own." },
      { type: "h2", id: "five", text: "Five renter-aware starting options" },
      { type: "ul", items: [
        "Keep using a bottle, mug, bag, or container you already have when it works for the task; buy a replacement only when the current item no longer serves you.",
        "Place one reusable bag or carrier where you are likely to remember it, if carrying it is useful and accessible for your routine.",
        "Use the napkins, towels, or cleaning cloths already available in your home; follow product and laundering instructions and keep disposable options when they are safer or more practical.",
        "Before buying a refill system, check whether the product, container, storage space, cleaning routine, and local refill access fit your household.",
        "Use a library or other sharing service when it is available, useful, and accessible; borrowing is an option, not a requirement.",
      ]},
      { type: "h2", id: "mindset", text: "Check control before you act" },
      { type: "p", text: "A renter may control some purchases and routines but not a building's heating, cooling, appliances, fixtures, waste service, or outdoor space. Check your lease, building rules, household agreement, product instructions, accessibility needs, and local program guidance before changing anything. If a step needs permission, a special trip, extra storage, or more energy than you have, skip it or choose a smaller version." },
      { type: "p", text: "The goal is not a perfect home or a product quota. Choose one reversible action, notice whether it reduces a repeated demand, and stop or adjust when it creates more cost, risk, effort, or inaccessibility." },
      { type: "linkP", textBefore: "For a printable way to choose and review one action, use the ", linkText: "Small-Apartment Eco Step Starter Sheet", href: "/resources", textAfter: ". You can open it directly; joining the email list is optional." },
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
