import decorCategoryImage from "@/assets/cat-decor.jpg";
import habitsCategoryImage from "@/assets/cat-habits.jpg";
import kitchenCategoryImage from "@/assets/cat-kitchen.jpg";
import apartmentImage from "@/assets/hero-apartment.jpg";
import checklistImage from "@/assets/post-checklist.jpg";
import kitchenPrepImage from "@/assets/post-kitchen.jpg";
import type { Post } from "@/lib/posts";

const illustrativeAlt = {
  apartment:
    "Illustrative sunlit apartment with wood furniture, woven decor, and several houseplants.",
  checklist: "Illustrative hand marking a paper checklist beside a mug in a small apartment.",
  decor:
    "Illustrative small bedroom with natural wood furniture, plants, warm lighting, and layered textiles.",
  kitchen: "Illustrative small kitchen shelves with dry ingredients stored in assorted clear jars.",
  kitchenPrep: "Illustrative kitchen counter with fresh herbs in a jar beside a cutting board.",
  supplies:
    "Illustrative cleaning brushes, cloths, and refillable bottles arranged in a wooden caddy.",
} as const;

const roomResetPost: Partial<Post> = {
  title: "Sustainable Small Apartment Decor: A Practical Room Reset Plan",
  excerpt:
    "Use this illustrative room-reset plan to make a cluttered small apartment feel calmer with layout changes, secondhand options, and smarter storage.",
  image: decorCategoryImage,
  imageAlt: illustrativeAlt.decor,
  tags: [
    "sustainable small apartment decor",
    "small space eco decor",
    "small apartment room reset",
    "budget eco home decor",
  ],
  toc: [
    { id: "starting-point", label: "A Common Small-Room Starting Point" },
    { id: "goals-budget", label: "Set Priorities Before Setting a Budget" },
    { id: "step-1-declutter-layout", label: "Step 1: Declutter and Rethink the Layout" },
    {
      id: "step-2-key-furniture",
      label: "Step 2: Evaluate the Furniture You Actually Need",
    },
    {
      id: "step-3-textiles-lighting",
      label: "Step 3: Use Textiles and Lighting With Restraint",
    },
    { id: "step-4-plants-storage", label: "Step 4: Add Storage and Finishing Details" },
  ],
  body: [
    {
      type: "p",
      text: "This article is an illustrative planning guide, not a documented before-and-after project. The room and image are examples meant to show how a small-space reset could be approached.",
    },
    {
      type: "p",
      text: "The useful idea is not to copy a finished look. It is to work through the room in a practical order: remove what is creating friction, improve the layout, reuse what already works, and replace only what clearly earns its place.",
    },
    { type: "h2", id: "starting-point", text: "A Common Small-Room Starting Point" },
    {
      type: "p",
      text: "Imagine a rental living room with decent natural light but a few recurring problems: furniture blocks the easiest walking path, small items collect on every surface, storage is visible and scattered, and overhead lighting makes the room feel flat at night.",
    },
    {
      type: "ul",
      items: [
        "Furniture is arranged around habit rather than the room's actual traffic flow.",
        "Loose items have no obvious place to return to.",
        "Several small storage pieces create more visual noise than useful capacity.",
        "The room relies on one harsh light source instead of a few purposeful layers.",
      ],
    },
    { type: "h2", id: "goals-budget", text: "Set Priorities Before Setting a Budget" },
    {
      type: "p",
      text: "Start with the outcome the room needs to support: clearer walking paths, comfortable seating, useful storage, and calmer lighting. Costs will vary by location, what you already own, and what is available secondhand, so this plan does not promise a fixed total.",
    },
    {
      type: "ul",
      items: [
        "Reuse, repair, sell, donate, or repurpose before buying replacements.",
        "Measure the room and the furniture before bringing anything new home.",
        "Prioritize one or two functional changes instead of trying to restyle the entire room at once.",
      ],
    },
    {
      type: "h2",
      id: "step-1-declutter-layout",
      text: "Step 1: Declutter and Rethink the Layout",
    },
    {
      type: "p",
      text: "Remove loose items and any movable furniture that makes the room hard to evaluate. Bring pieces back only when they serve a clear function or make the layout easier to use.",
    },
    {
      type: "ul",
      items: [
        "Sort loose items into keep, relocate, donate, sell, and recycle groups where local rules allow.",
        "Test the seating along the longest practical wall or toward the strongest natural focal point.",
        "Leave the entry and main walking path visually open instead of filling every available edge.",
      ],
    },
    {
      type: "h2",
      id: "step-2-key-furniture",
      text: "Step 2: Evaluate the Furniture You Actually Need",
    },
    {
      type: "p",
      text: "Before replacing anything, identify which pieces are truly causing the problem. A smaller sofa or a table with storage may help in some rooms, but the right choice depends on measurements, comfort, condition, and how the room is used.",
    },
    {
      type: "ul",
      items: [
        "Look for compact seating with dimensions that preserve the main walkway.",
        "Consider secondhand wood or metal tables that can be cleaned, repaired, and used for more than one purpose.",
        "Consolidate media and display items onto one useful storage piece rather than several scattered surfaces.",
      ],
    },
    {
      type: "h2",
      id: "step-3-textiles-lighting",
      text: "Step 3: Use Textiles and Lighting With Restraint",
    },
    {
      type: "p",
      text: "A few textiles and a second light source can change how a room feels without replacing all of the furniture. Use what you own first, then choose additions based on care needs, durability, and the room's actual light.",
    },
    {
      type: "ul",
      items: [
        "Use a rug only when it helps define the seating area without creating a trip or maintenance problem.",
        "Add a floor or table lamp where softer task lighting would reduce reliance on the overhead fixture.",
        "Refresh usable cushions with washable covers or add one practical throw instead of buying a full matching set.",
      ],
    },
    {
      type: "h2",
      id: "step-4-plants-storage",
      text: "Step 4: Add Storage and Finishing Details",
    },
    {
      type: "p",
      text: "Finish with storage that matches the items the room actually needs to hold. Decorative details should support the room, not recreate the clutter you just removed.",
    },
    {
      type: "ul",
      items: [
        "Use one or two lidded baskets for small items that would otherwise spread across surfaces.",
        "Choose a plant only when the room's light, care routine, household, and pet-safety needs make it appropriate.",
        "Hang one meaningful piece of art or leave the wall open rather than filling it simply because space is available.",
      ],
    },
    {
      type: "p",
      text: "The goal is a room that works better with fewer unnecessary purchases. Treat this as a sequence to test in your own space, not as proof that one look, product list, or budget will work for every apartment.",
    },
  ],
};

const promotionalSurfaceOverrides: Record<string, Partial<Post>> = {
  "why-life-feels-harder-than-it-needs-to-sometimes": {
    excerpt:
      "A gentle guide to noticing recurring friction and testing one small change in an everyday routine.",
    image: habitsCategoryImage,
    imageAlt: illustrativeAlt.checklist,
  },
  "sustainable-tiny-living-room-layout-ideas": {
    title: "Small Living Room Layout and Styling Ideas",
    excerpt:
      "Plan a small living room around walking paths, useful furniture, lighting, and the items you already own.",
    image: apartmentImage,
    imageAlt: illustrativeAlt.apartment,
  },
  "eco-friendly-small-apartment-weekend-checklist": {
    title: "A Small-Apartment Reset Checklist for a Weekend",
    excerpt:
      "Review a bounded set of layout, lighting, textile, and household changes, then choose only what fits your space.",
    image: decorCategoryImage,
    imageAlt: illustrativeAlt.decor,
  },
  "low-waste-lifestyle-tips-beginners": {
    title: "15 Low-Waste Lifestyle Practices to Consider",
    excerpt:
      "Review low-waste practices by what you already own, what you control, and what fits your household, access, and local services.",
    image: habitsCategoryImage,
    imageAlt: illustrativeAlt.checklist,
  },
  "easy-sustainable-habits-on-a-budget": {
    title: "20 Renter-Aware Sustainable Habits to Consider",
    excerpt:
      "Review 20 renter-aware options by what you already own, what you control, and what fits your household, access, and local services.",
    image: habitsCategoryImage,
    imageAlt: illustrativeAlt.checklist,
  },
  "sustainable-living-apartment-easy-habits": {
    title: "Sustainable Living in an Apartment: 10 Habits to Consider",
    excerpt:
      "Consider ten apartment-oriented habits while accounting for lease rules, utilities, access, and what you already use.",
    image: apartmentImage,
    imageAlt: illustrativeAlt.apartment,
  },
  "zero-waste-pantry-organization-small-apartments": {
    title: "Pantry Organization for Small Apartments: A Practical Plan",
    excerpt:
      "Use visibility, simple zones, and a review routine to plan a small pantry around the food and storage you have.",
    image: kitchenCategoryImage,
    imageAlt: illustrativeAlt.kitchen,
  },
  "low-waste-kitchen-tips-chef-habits": {
    title: "11 Low-Waste Kitchen Habits for Using Food More Fully",
    excerpt:
      "Review practical inventory, leftover, freezing, labeling, portioning, and composting habits with safety and local limits in mind.",
    image: kitchenPrepImage,
    imageAlt: illustrativeAlt.kitchenPrep,
  },
  "zero-waste-kitchen-budget-9-swaps": {
    title: "Zero-Waste Kitchen on a Budget: 9 Swaps to Evaluate",
    excerpt:
      "Evaluate nine kitchen swaps by replacement timing, local cost, expected use, care needs, and what you already own.",
    image: kitchenPrepImage,
    imageAlt: illustrativeAlt.kitchenPrep,
  },
  "small-apartment-eco-upgrade-checklist": {
    title: "A 30-Day Small-Apartment Eco Step Checklist",
    excerpt:
      "Use a paced checklist to choose renter-controlled actions without assuming a fixed budget or requiring a purchase.",
    image: checklistImage,
    imageAlt: illustrativeAlt.supplies,
  },
  "zero-waste-kitchen-ideas-tiny-apartments": {
    excerpt:
      "Reset a smelly food-scrap bin, address fruit flies, and choose a counter, fridge, freezer, worm-bin, or bokashi routine that fits your apartment.",
    image: kitchenPrepImage,
    imageAlt: illustrativeAlt.kitchenPrep,
  },
  "eco-friendly-small-apartment-decor-budget": {
    title: "Small-Apartment Decor on a Budget: Sourcing and Fit Considerations",
    excerpt:
      "Compare reuse, secondhand, layout, lighting, plant, and removable-decor options against your room, lease, household, and budget.",
    image: decorCategoryImage,
    imageAlt: illustrativeAlt.decor,
  },
  "beginner-sustainable-living-checklist-renters": {
    title: "Beginner Sustainable Living Checklist for Renters: Five Options to Consider",
    excerpt:
      "A low-pressure starting checklist for renters and small-apartment dwellers: choose one manageable action, use what you have, and check the constraints first.",
    image: habitsCategoryImage,
    imageAlt: illustrativeAlt.supplies,
  },
};

export function getPresentedPost(post: Post): Post {
  if (post.slug === "sustainable-small-apartment-decor-before-after") {
    return {
      ...post,
      ...roomResetPost,
    };
  }

  const override = promotionalSurfaceOverrides[post.slug];
  if (!override) return post;

  return {
    ...post,
    ...override,
  };
}
