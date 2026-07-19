import decorCategoryImage from "@/assets/cat-decor.jpg";
import type { Post } from "@/lib/posts";

const roomResetPost: Partial<Post> = {
  title: "Sustainable Small Apartment Decor: A Practical Room Reset Plan",
  excerpt:
    "Use this illustrative room-reset plan to make a cluttered small apartment feel calmer with layout changes, secondhand options, and smarter storage.",
  image: decorCategoryImage,
  imageAlt:
    "Illustrative small bedroom with natural wood furniture, plants, warm lighting, and layered textiles.",
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
      text:
        "This article is an illustrative planning guide, not a documented before-and-after project. The room and image are examples meant to show how a small-space reset could be approached.",
    },
    {
      type: "p",
      text:
        "The useful idea is not to copy a finished look. It is to work through the room in a practical order: remove what is creating friction, improve the layout, reuse what already works, and replace only what clearly earns its place.",
    },
    { type: "h2", id: "starting-point", text: "A Common Small-Room Starting Point" },
    {
      type: "p",
      text:
        "Imagine a rental living room with decent natural light but a few recurring problems: furniture blocks the easiest walking path, small items collect on every surface, storage is visible and scattered, and overhead lighting makes the room feel flat at night.",
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
      text:
        "Start with the outcome the room needs to support: clearer walking paths, comfortable seating, useful storage, and calmer lighting. Costs will vary by location, what you already own, and what is available secondhand, so this plan does not promise a fixed total.",
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
      text:
        "Remove loose items and any movable furniture that makes the room hard to evaluate. Bring pieces back only when they serve a clear function or make the layout easier to use.",
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
      text:
        "Before replacing anything, identify which pieces are truly causing the problem. A smaller sofa or a table with storage may help in some rooms, but the right choice depends on measurements, comfort, condition, and how the room is used.",
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
      text:
        "A few textiles and a second light source can change how a room feels without replacing all of the furniture. Use what you own first, then choose additions based on care needs, durability, and the room's actual light.",
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
      text:
        "Finish with storage that matches the items the room actually needs to hold. Decorative details should support the room, not recreate the clutter you just removed.",
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
      text:
        "The goal is a room that works better with fewer unnecessary purchases. Treat this as a sequence to test in your own space, not as proof that one look, product list, or budget will work for every apartment.",
    },
  ],
};

export function getPresentedPost(post: Post): Post {
  if (post.slug !== "sustainable-small-apartment-decor-before-after") return post;

  return {
    ...post,
    ...roomResetPost,
  };
}
