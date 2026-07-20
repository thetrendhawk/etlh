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
  title: "Illustrative Small-Apartment Room Reset Plan",
  excerpt:
    "Use an illustrative room scenario to organize layout, storage, lighting, and purchase-pause decisions without treating it as a documented transformation.",
  image: decorCategoryImage,
  imageAlt: "Illustrative small apartment bedroom with natural wood furniture, plants, warm lighting, and layered textiles.",
  tags: [
    "sustainable small apartment decor",
    "small space eco decor",
    "small apartment room reset",
    "budget eco home decor",
  ],
  toc: [
    { id: "illustrative-starting-point", label: "An Illustrative Starting Point" },
    { id: "set-priorities", label: "Set Priorities Before Buying" },
    { id: "test-layout", label: "Test the Layout Without Buying" },
    {
      id: "evaluate-furniture",
      label: "Evaluate Furniture You Already Have",
    },
    {
      id: "lighting-textiles",
      label: "Use Lighting and Textiles With Restraint",
    },
    { id: "storage-details", label: "Add Storage Only When It Fits" },
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
    { type: "h2", id: "illustrative-starting-point", text: "An Illustrative Starting Point" },
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
    { type: "h2", id: "set-priorities", text: "Set Priorities Before Buying" },
    {
      type: "p",
      text: "Start with the room’s actual tasks and constraints. Costs vary by location and what you already own, so this example does not promise a budget or outcome.",
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
      id: "test-layout",
      text: "Test the Layout Without Buying",
    },
    {
      type: "p",
      text: "Use a paper sketch, painter’s tape, or temporary rearrangement to compare options. This is a test, not proof that the room will feel larger, calmer, or more functional.",
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
      id: "evaluate-furniture",
      text: "Evaluate Furniture You Already Have",
    },
    {
      type: "p",
      text: "Before replacing anything, identify the specific function or footprint problem. A purchase is optional and should follow a verified need, not a material label or trend.",
    },
    {
      type: "ul",
      items: [
        "Check whether current seating can move without blocking required paths or access.",
        "Compare any possible table or storage piece by footprint, cleaning, installation, return terms, and household use.",
        "Do not drill, mount, anchor, alter wiring, or move a heater without lease, building, manufacturer, and safety checks.",
      ],
    },
    {
      type: "h2",
      id: "lighting-textiles",
      text: "Use Lighting and Textiles With Restraint",
    },
    {
      type: "p",
      text: "Treat lighting and textiles as optional choices to test against care, access, glare, ventilation, and the room’s actual use. They do not establish a wellbeing or spatial outcome.",
    },
    {
      type: "ul",
      items: [
        "Use a rug only when it does not create a trip or maintenance problem.",
        "Use existing lamps or fixtures according to manufacturer instructions and do not alter electrical fittings.",
        "Refresh usable cushions with washable covers or leave them unchanged if that is the better fit.",
      ],
    },
    {
      type: "h2",
      id: "storage-details",
      text: "Add Storage Only When It Fits",
    },
    {
      type: "p",
      text: "Finish only after the layout test identifies a real storage need. A plant, basket, or wall detail is optional and does not prove a room is healthier, calmer, or more sustainable.",
    },
    {
      type: "ul",
      items: [
        "Use one existing basket or container for items that otherwise spread across surfaces.",
        "Choose a plant only when light, care, household, and pet-safety needs make it appropriate.",
        "Leave a wall open or add one item only when it serves the room’s actual use; do not install without permission and safe anchoring.",
      ],
    },
    {
      type: "p",
      text: "This illustrative example is a planning sequence, not proof that one look, product list, or budget works for every apartment. Keep the test, revise it, restore the original arrangement, or do nothing.",
    },
    {
      type: "linkP",
      textBefore: "For measurement and pathway planning, see the ",
      linkText: "small living room layout planning guide",
      href: "/blog/sustainable-tiny-living-room-layout-ideas",
      textAfter: ".",
    },
    {
      type: "linkP",
      textBefore: "For a shorter no-purchase reset, see the ",
      linkText: "small-apartment reset checklist",
      href: "/blog/eco-friendly-small-apartment-weekend-checklist",
      textAfter: ".",
    },
  ],
};

const promotionalSurfaceOverrides: Record<string, Partial<Post>> = {
  "why-life-feels-harder-than-it-needs-to-sometimes": {
    title: "Notice Friction at Home: Test One Small Change",
    excerpt:
      "Notice recurring extra steps in an everyday routine, then test one small arrangement change without assuming a result.",
    image: habitsCategoryImage,
    imageAlt: illustrativeAlt.checklist,
  },
  "sustainable-tiny-living-room-layout-ideas": {
    title: "Small Living Room Layout Planning: Measure, Test, and Adjust",
    excerpt:
      "Plan a small living room around fixed constraints, walking paths, furniture footprints, and reversible layout tests before buying or installing anything.",
    image: apartmentImage,
    imageAlt: "Illustrative sunlit apartment living area with a sofa, low table, and clear walking path.",
  },
  "eco-friendly-small-apartment-weekend-checklist": {
    title: "A Small-Apartment Reset Checklist: Choose One Useful Change",
    excerpt:
      "Inspect one room, choose one reversible reset, and stop when the change fits your space, lease, energy, and household.",
    image: decorCategoryImage,
    imageAlt: "Illustrative small apartment corner with a clear surface, warm lamp, and layered textiles.",
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
    title: "Sustainable Apartment Systems: What Renters Can Control",
    excerpt:
      "Map apartment routines by what you control, what needs household agreement, and what depends on building, utility, or local services.",
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
