import postKitchen from "@/assets/post-kitchen.jpg";
import foodScrapMethodHero from "@/assets/articles/choose-apartment-food-scrap-method/choose-apartment-food-scrap-method-hero-v1.webp";
import dishwashingHero from "@/assets/articles/dishwashing-without-dishwasher-small-kitchen/dishwashing-without-dishwasher-small-kitchen-hero-v2.webp";
import electricApplianceHero from "@/assets/articles/electric-food-waste-appliances-apartments/electric-food-waste-appliances-apartments-hero-v1.webp";
import foodLabelsHero from "@/assets/articles/food-labels-storage-small-apartment/food-labels-storage-small-apartment-hero-v1.webp";
import eatFirstHero from "@/assets/articles/eat-first-fridge-freezer-small-apartment/eat-first-fridge-freezer-small-apartment-hero-v1.webp";
import foodUseRotationHero from "@/assets/articles/food-use-rotation-check-small-apartment/food-use-rotation-check-small-apartment-hero-v1.webp";
import sharedLaundryHero from "@/assets/articles/shared-apartment-laundry-room-check/shared-apartment-laundry-room-check-hero-v1.webp";
import dryingSpaceHero from "@/assets/articles/drying-clothes-small-apartment-space-plan/drying-clothes-small-apartment-space-plan-hero-v1.webp";
import laundryTransportHero from "@/assets/articles/laundry-transport-without-in-unit-washer/laundry-transport-without-in-unit-washer-hero-v1.webp";
import laundryHoldingHero from "@/assets/articles/laundry-holding-zones-studio-apartment/laundry-holding-zones-studio-apartment-hero-v1.webp";
import laundryProductStorageHero from "@/assets/articles/laundry-product-storage-small-apartment/laundry-product-storage-small-apartment-hero-v1.webp";
import kitchenCategoryImage from "@/assets/cat-kitchen.jpg";
import decorCategoryImage from "@/assets/cat-decor.jpg";
import habitsCategoryImage from "@/assets/cat-habits.jpg";
import apartmentImage from "@/assets/hero-apartment.jpg";
import postChecklist from "@/assets/post-checklist.jpg";





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
    slug: "food-labels-storage-small-apartment",
    title: "Food Labels and Storage in a Small Apartment: What to Keep Visible",
    excerpt: "Preserve useful product and package information when limited storage, shared shelves, or optional food transfers separate food from its original label.",
    category: "zero-waste-kitchen",
    date: "2026-07-21",
    readingTime: "7 min read",
    image: foodLabelsHero,
    imageAlt: "Illustrative small apartment pantry shelf with intact food packages and one labeled secondary container.",
    tags: ["food labels", "food storage", "small apartment", "renters"],
    toc: [
      { id: "information-loss", label: "Why useful package information disappears" },
      { id: "transfer-needed", label: "Decide whether transferring is necessary" },
      { id: "keep-visible", label: "What information may be worth keeping visible" },
      { id: "secondary-label", label: "What a secondary label cannot replace" },
      { id: "original-package", label: "When the original package should stay" },
      { id: "dates-allergens-recalls", label: "Dates, allergens, infant formula, and recalls" },
      { id: "check", label: "A no-purchase information check" },
      { id: "limits", label: "Sources and limits" },
    ],
    body: [
      { type: "p", text: "In a small kitchen, a food can become separated from the information that helps you identify it. A shared shelf, a loose container, a crowded cabinet, or a well-meant transfer can leave the product name, ingredients, allergen information, dates, lot code, directions, or manufacturer contact somewhere else." },
      { type: "p", text: "This guide is about preserving useful information, not creating a prettier pantry. Leaving food in its original package is valid and is often the simplest choice. Transferring food is optional, and no label can replace the full original package record." },
      { type: "h2", id: "information-loss", text: "Why useful package information disappears in small kitchens" },
      { type: "p", text: "Information can be lost when a package is discarded, a label faces the wall, a shared shelf separates a lid from its container, or food is moved before anyone decides what details the household may need later. Not every package contains every kind of information, and a handwritten note cannot recreate information you did not preserve." },
      { type: "h2", id: "transfer-needed", text: "Decide whether transferring is necessary" },
      { type: "ul", items: [
        "Keep food in its original package when it fits safely and the package remains intact.",
        "If visibility is the problem, try moving the original package, changing its position, or grouping it with similar items before transferring anything.",
        "Treat a secondary container as optional. Check the product label, package integrity, child access, storage directions, and the container manufacturer's instructions first.",
        "Do not transfer food when the original package carries handling, allergen, preparation, recall, or safety information you cannot preserve accurately.",
      ] },
      { type: "h2", id: "keep-visible", text: "What information may be worth keeping visible" },
      { type: "table", caption: "Package information and what it is for", headers: ["Information", "Why it may matter", "Boundary"], rows: [
        ["Product identity", "Helps distinguish one food from another in a shared space.", "A generic handwritten name may be incomplete."],
        ["Ingredients", "Supports household questions about what is in the food.", "Do not reconstruct an ingredient list from memory."],
        ["Allergen information", "Keeps the package's declared information available for review.", "Do not diagnose allergy safety from a secondary label."],
        ["Date information", "Keeps the manufacturer's date visible for context.", "A date alone does not determine safety."],
        ["Lot or batch information", "May help identify a product in an official recall notice.", "Keep the original package or record only what you can verify."],
        ["Directions and storage", "Keeps product-specific handling available.", "The package and manufacturer instructions control."],
        ["Manufacturer contact", "Provides a route for product questions.", "Do not substitute a retailer summary for the manufacturer."],
      ] },
      { type: "h2", id: "secondary-label", text: "What a secondary label cannot replace" },
      { type: "p", text: "A secondary label can identify a food for a household, but it cannot guarantee that the ingredients, allergen statement, date context, lot code, directions, or manufacturer contact are complete. If someone in the household depends on exact ingredient or allergen information, keep the original package or use the manufacturer's current information rather than relying on memory." },
      { type: "h2", id: "original-package", text: "When the original package should stay" },
      { type: "ul", items: [
        "The package is intact and fits safely where it is.",
        "The food needs directions, warnings, preparation information, or storage conditions that a short label would not capture.",
        "A child-resistant feature, seal, temperature instruction, or package-specific handling matters.",
        "The food is shared, allergy-relevant, recalled, or difficult to identify after transfer.",
        "The receiving container's material, seal, cleanliness, or care instructions are unknown.",
      ] },
      { type: "h2", id: "dates-allergens-recalls", text: "Dates, allergens, infant formula, and recalls" },
      { type: "p", text: "FDA explains that, except for infant formula, federal law generally does not require quality-based date labels on packaged food and that date phrases are not uniform. A quality date is not, by itself, a complete safety decision. Use current product, package, and agency guidance for the food in front of you." },
      { type: "linkP", textBefore: "Read the ", linkText: "FDA date-label and food-safety guidance", href: "https://www.fda.gov/food/consumers/how-cut-food-waste-and-maintain-food-safety", textAfter: " for the distinction between quality dates and safety questions." },
      { type: "p", text: "FDA allergen guidance says ingredients can change and recommends checking the label each time when an allergy matters. Do not infer allergen safety from a remembered recipe, a handwritten label, or a secondary container." },
      { type: "linkP", textBefore: "See FDA's guidance to ", linkText: "read food-allergy labels", href: "https://www.fda.gov/consumers/consumer-updates/have-food-allergies-read-label", textAfter: " for the current label boundary." },
      { type: "p", text: "Recall information may use product names, package sizes, UPCs, lot codes, dates, and distribution details. Retain enough identifying information to consult an official notice; this article is not a recall-monitoring service." },
      { type: "linkP", textBefore: "Use the ", linkText: "FDA food-recall guidance", href: "https://www.fda.gov/food/buy-store-serve-safe-food/food-recalls-what-you-need-know", textAfter: " when a recall question arises." },
      { type: "h2", id: "check", text: "A no-purchase information check" },
      { type: "ul", items: [
        "Choose one shelf, bin, or shared-storage area.",
        "Ask whether each food needs to leave its original package at all.",
        "If something has moved, identify which original information is still available and what is missing.",
        "Keep the original package when a short label would be incomplete or when package-specific handling matters.",
        "Stop, ask the manufacturer, or consult an official source when the household cannot identify the food or its relevant instructions.",
      ] },
      { type: "h2", id: "limits", text: "Sources and limits" },
      { type: "p", text: "This article supports information preservation, not food-safety diagnosis, allergy advice, recall monitoring, container selection, shelf-life extension, waste reduction, savings, or universal packaging decisions. Product labels, manufacturer instructions, current FDA notices, FoodKeeper where applicable, and the needs of the household remain controlling." },
      { type: "linkP", textBefore: "Read ETLH's ", linkText: "editorial and corrections policy", href: "/editorial-policy", textAfter: " if a source or passage needs review." },
    ],
  },
  {
    slug: "eat-first-fridge-freezer-small-apartment",
    title: "An Eat-First Fridge and Freezer Check for Small Apartments",
    excerpt: "Make already-purchased refrigerated and frozen food more visible for one bounded decision check while keeping organization separate from food-safety judgment.",
    category: "zero-waste-kitchen",
    date: "2026-07-21",
    readingTime: "7 min read",
    image: eatFirstHero,
    imageAlt: "Illustrative small apartment refrigerator with a small group of containers arranged together on one shelf.",
    tags: ["food storage", "leftovers", "freezer", "small apartment"],
    toc: [
      { id: "what-it-is", label: "What an eat-first area is—and is not" },
      { id: "present", label: "Look only at what is currently present" },
      { id: "bounded-area", label: "Choose one bounded visible area" },
      { id: "separate", label: "Separate organization from food-safety decisions" },
      { id: "decisions", label: "Choose a next decision" },
      { id: "shared", label: "Adapt for shared kitchens and limited capacity" },
      { id: "stop", label: "Stop before a full overhaul" },
      { id: "limits", label: "Sources and limits" },
    ],
    body: [
      { type: "p", text: "An eat-first area is a visibility cue for food you already own. It is not a safety classification: food placed there is not automatically safe, unsafe, fresh, or spoiled. The useful task is smaller than cleaning out the refrigerator or creating a meal plan." },
      { type: "h2", id: "what-it-is", text: "What an eat-first area is—and is not" },
      { type: "p", text: "Choose a small group of refrigerated or frozen items that you want the household to notice before making the next meal or shopping decision. Keep the label organizational. Use authoritative food-safety guidance separately for any question about whether an item should be eaten, frozen, retained, or discarded." },
      { type: "h2", id: "present", text: "Look only at what is currently present" },
      { type: "ul", items: [
        "Open one refrigerator shelf, drawer, or freezer section rather than emptying the appliance.",
        "Notice what is visible, what belongs to someone else, and what needs a household conversation before moving.",
        "Keep raw foods separate and avoid moving a package if its directions, seal, container, or storage position matters.",
        "Do not taste food to decide whether it is safe, and do not use smell or appearance alone as a safety test.",
      ] },
      { type: "h2", id: "bounded-area", text: "Choose one bounded visible area" },
      { type: "p", text: "Group only what fits safely and can remain cold as directed. A clear shelf, shallow tray, or existing container may be enough. No special organizer is required, and the group can be as small as one item or no items if moving food would create a problem." },
      { type: "h2", id: "separate", text: "Separate organization from food-safety decisions" },
      { type: "p", text: "USDA/FSIS guidance covers clean, separate, cook, and chill steps, including prompt refrigeration and specific leftover guidance. Those instructions are not a universal eat-first routine. For a food-specific question, use FoodKeeper, the package, the manufacturer, or current FDA/USDA guidance rather than an organizational label." },
      { type: "linkP", textBefore: "See USDA/FSIS ", linkText: "food-safety basics", href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe", textAfter: " for narrow temperature, leftover, and raw-food boundaries." },
      { type: "linkP", textBefore: "For freezing and refreezing questions, consult ", linkText: "FSIS freezing guidance", href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety", textAfter: "." },
      { type: "p", text: "FDA explains that date labels are not uniform and that, except for infant formula, many packaged-food dates are quality-oriented. A date, smell, appearance, or organizational grouping alone does not determine safety." },
      { type: "linkP", textBefore: "Read FDA's ", linkText: "food-storage and date-label guidance", href: "https://www.fda.gov/food/consumers/how-cut-food-waste-and-maintain-food-safety", textAfter: " for the distinction between quality and safety." },
      { type: "h2", id: "decisions", text: "Choose a next decision" },
      { type: "table", caption: "Possible next decisions", headers: ["Option", "What it means", "Boundary"], rows: [
        ["Use", "Choose the item for a meal only if current food-safety and package guidance support that decision.", "The eat-first label is not the reason it is safe."],
        ["Freeze where appropriate", "Follow the package, manufacturer, FoodKeeper, and current agency guidance.", "Do not assume every food or container freezes well."],
        ["Retain", "Leave the item where it is when moving it would create a problem.", "A visible cue is optional."],
        ["Seek guidance", "Ask the manufacturer or consult FDA, USDA/FSIS, or FoodKeeper.", "Do not substitute social media or memory for current guidance."],
        ["Discard", "Use the applicable safety or package direction when the item should not be retained.", "Do not taste-test questionable food."],
        ["Take no action", "Stop when the check is not safe, useful, or possible today.", "An unfinished check is a valid outcome."],
      ] },
      { type: "h2", id: "shared", text: "Adapt for shared kitchens and limited capacity" },
      { type: "p", text: "Ask before moving another person's food. A shared note, a conversation, or leaving everything in place may be better than silently rearranging it. If reach, lifting, grip, vision, fatigue, illness, freezer access, caregiving, or pain limits the check, work with one item, ask for help, or pause. No article can determine the right accommodation for every household." },
      { type: "h2", id: "stop", text: "Stop before the task becomes a full refrigerator overhaul" },
      { type: "p", text: "Stop after one bounded area. You do not need to wash shelves, buy bins, rewrite every date, plan meals, or empty the freezer to complete this check. Restore the previous arrangement, leave it unchanged, or return later if that is the better fit." },
      { type: "h2", id: "limits", text: "Sources and limits" },
      { type: "p", text: "This is an organizational visibility exercise, not a food-safety routine, storage-time chart, nutrition article, cleanout challenge, or food-waste promise. FoodKeeper, package directions, manufacturer instructions, and current FDA/USDA guidance remain controlling. The article does not promise savings, convenience, time, stress, habit success, improved safety, sustainability, or universal fit." },
      { type: "linkP", textBefore: "Read ETLH's ", linkText: "editorial and corrections policy", href: "/editorial-policy", textAfter: " if a source or passage needs review." },
    ],
  },
  {
    slug: "food-use-rotation-check-small-apartment",
    title: "A Small-Apartment Food-Use Rotation Check: What to Review Before You Shop",
    excerpt: "Review one bounded set of pantry, refrigerator, or freezer items before adding more food, without turning visibility into a safety or waste promise.",
    category: "zero-waste-kitchen",
    date: "2026-07-22",
    readingTime: "7 min read",
    image: foodUseRotationHero,
    imageAlt: "Illustrative small apartment kitchen with pantry, refrigerator, and freezer items arranged for a food-use review.",
    tags: ["food storage", "small apartment", "kitchen planning", "renters"],
    toc: [
      { id: "what-it-is", label: "What this rotation check is—and is not" },
      { id: "window", label: "Choose one bounded review window" },
      { id: "look", label: "Look across storage locations" },
      { id: "record", label: "Record what is visible" },
      { id: "status", label: "Choose a review status" },
      { id: "preserve", label: "Preserve package information" },
      { id: "adapt", label: "Adapt for the household" },
      { id: "stop", label: "Stop and note the limits" },
      { id: "limits", label: "Sources and limits" },
    ],
    body: [
      { type: "p", text: "A food-use rotation check is a short visibility exercise across the food you already have. It can help you notice what is in a pantry, refrigerator, or freezer before adding more food. It does not determine safety, create a meal plan, or promise less waste, lower costs, or a successful habit." },
      { type: "h2", id: "what-it-is", text: "What this rotation check is—and is not" },
      { type: "p", text: "The independent task is to review one bounded set of existing food across more than one storage location. “Use soon” is an organizational category, not a food-safety classification. A checklist organizes attention; it does not prove an outcome." },
      { type: "h2", id: "window", text: "Choose one bounded review window" },
      { type: "p", text: "Pick one shelf, drawer, freezer section, or short review window before shopping. You may review one location at a time, ask another household member to help, or stop after a single item. You do not need to inspect every item or empty the kitchen." },
      { type: "h2", id: "look", text: "Look across pantry, refrigerator, and freezer storage" },
      { type: "ul", items: [
        "Notice which storage locations are in scope and which are not.",
        "Look for items the household already knows it may want to consider, without moving anything that belongs to someone else.",
        "Keep cold food at its directed temperature and avoid leaving perishable food out during a review.",
        "If there is no separate freezer, treat the available compartment as the freezer context and keep the review smaller.",
      ] },
      { type: "h2", id: "record", text: "Record what is visible without handling everything" },
      { type: "p", text: "A short note can record the item, its storage location, and a review status. Keep the note neutral: it is a memory aid, not a diagnosis. If an item is unidentified, the package is damaged, or ownership is unclear, leave it in place and seek the appropriate guidance." },
      { type: "h2", id: "status", text: "Choose a review status" },
      { type: "table", caption: "Organizational review statuses", headers: ["Status", "Meaning", "Boundary"], rows: [
        ["Review", "Look up the package or authoritative guidance before deciding.", "The status does not mean unsafe or safe."],
        ["Use soon", "Keep the item visible for a household food-use decision.", "This is not a food-safety classification."],
        ["Freeze where appropriate", "Consider freezing only when package, manufacturer, FoodKeeper, or agency guidance supports it.", "Do not assume every food or container is suitable."],
        ["Check guidance", "Pause for food-specific, allergen, infant-formula, or recall information.", "Do not substitute memory or social posts for current sources."],
        ["No action", "Leave the item where it is or stop the review.", "A partial review is a valid completed action."],
      ] },
      { type: "h2", id: "preserve", text: "Preserve original dates, allergens, lot details, and instructions" },
      { type: "p", text: "Keep original packaging or retain the information needed to identify the food, ingredients, allergens, dates, lot or batch details, storage directions, and manufacturer contact. A secondary note cannot replace complete package information. FDA explains that many date labels communicate quality rather than a universal safety conclusion, with infant formula treated as an exception." },
      { type: "linkP", textBefore: "Read FDA’s ", linkText: "date-label and food-storage guidance", href: "https://www.fda.gov/food/consumers/how-cut-food-waste-and-maintain-food-safety", textAfter: "." },
      { type: "linkP", textBefore: "For allergens, use FDA’s ", linkText: "label-reading guidance", href: "https://www.fda.gov/consumers/consumer-updates/have-food-allergies-read-label", textAfter: ". For recalls, use current FDA notices at the point of need." },
      { type: "h2", id: "adapt", text: "Adapt for shared kitchens, limited reach, and physical capacity" },
      { type: "p", text: "Ask before moving another person’s food. If low reach, limited grip, one-handed use, visual or cognitive load, fatigue, illness, caregiving, children, pets, allergens, cultural practices, or unclear ownership changes what is possible, review one item, ask for help, or pause. These options are not a universal accessibility prescription." },
      { type: "h2", id: "stop", text: "Stop before the process becomes a full reorganization project" },
      { type: "p", text: "Stop after one bounded area. You do not need to buy containers, rewrite every date, create a meal plan, reorganize the pantry, or empty the freezer. You may take no action, discard where appropriate, ask another household member, or return to the check later." },
      { type: "h2", id: "limits", text: "Sources and limits" },
      { type: "p", text: "This article is a cross-storage visibility and review sequence, not a food-safety system, storage-time chart, nutrition article, food-waste promise, savings guide, or product recommendation. Food-specific decisions depend on the item, package, temperature history, manufacturer instructions, FoodKeeper where applicable, and current FDA or USDA/FSIS guidance. Do not infer safety from a date, smell, appearance, or taste alone, and do not taste-test questionable food." },
      { type: "linkP", textBefore: "Use USDA/FSIS ", linkText: "food-safety basics", href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe", textAfter: " for current handling boundaries." },
      { type: "linkP", textBefore: "Read ETLH’s ", linkText: "editorial and corrections policy", href: "/editorial-policy", textAfter: " if a source or passage needs review." },
    ],
  },
  {
    slug: "shared-apartment-laundry-room-check",
    title: "Using a Shared Apartment Laundry Room: What to Check Before You Start",
    excerpt: "Run one bounded pre-cycle check of a shared washer or dryer without turning a renter checklist into a repair, sanitation, or etiquette rulebook.",
    category: "intentional-living",
    date: "2026-07-23",
    readingTime: "7 min read",
    image: sharedLaundryHero,
    imageAlt: "Illustrative shared apartment laundry room with unbranded machines, a laundry basket, and clear floor space for preparing a load.",
    tags: ["shared laundry", "renters", "small apartment", "accessibility"],
    toc: [
      { id: "limits", label: "What this check can and cannot determine" },
      { id: "instructions", label: "Read posted instructions first" },
      { id: "condition", label: "Check visible machine condition" },
      { id: "load", label: "Confirm detergent and load requirements" },
      { id: "lint", label: "Check the dryer lint screen where permitted" },
      { id: "products", label: "Keep products and ownership boundaries" },
      { id: "adapt", label: "Adapt for physical capacity" },
      { id: "stop", label: "Stop and report a problem" },
      { id: "sources", label: "Sources and editorial limits" },
    ],
    body: [
      { type: "p", text: "A shared-laundry check helps a renter decide whether one posted, machine-specific cycle can begin. It does not sanitize a machine or clothing, guarantee clean clothes, establish etiquette, or transfer repair and maintenance responsibility to residents." },
      { type: "h2", id: "limits", text: "What this check can and cannot determine" },
      { type: "p", text: "Use the check to notice instructions, visible condition, access, and the next reporting step. A checklist organizes decisions; it does not guarantee availability, safety, cleanliness, or a result." },
      { type: "h2", id: "instructions", text: "Read posted building and machine instructions first" },
      { type: "p", text: "Posted building procedures and the machine manufacturer’s manual control operation. Check the permitted detergent, load size, cycle, payment, hours, and reporting route before adding clothing or products." },
      { type: "h2", id: "condition", text: "Check visible damage, leaks, missing parts, or abnormal operation" },
      { type: "ul", items: ["Pause when a machine is visibly damaged, leaking, incomplete, or behaving abnormally.", "Do not dismantle, repair, service, vent, or internally clean a building-owned machine.", "Report the condition to management or the qualified service contact named by the building."] },
      { type: "h2", id: "load", text: "Confirm detergent and load requirements" },
      { type: "p", text: "Follow the machine and product instructions. Some washers require high-efficiency detergent; do not infer the right amount, product, or cycle from a different machine. Keep products in their original containers." },
      { type: "h2", id: "lint", text: "Check the dryer lint screen without performing building maintenance" },
      { type: "p", text: "Where posted procedures permit an ordinary user check, look at the accessible lint screen before a cycle and follow the machine instructions. Do not open panels, clean internal vents, or assume a renter is responsible for fire-safety maintenance." },
      { type: "h2", id: "products", text: "Keep laundry products in original containers and account for shared space" },
      { type: "p", text: "Keep detergent and other products closed, labeled, and away from children and pets. Follow posted procedures or contact management when a completed load blocks access. Do not assume permission to handle another household’s belongings." },
      { type: "h2", id: "adapt", text: "Adapt for reach, grip, fatigue, and repeated trips" },
      { type: "p", text: "Clear floor space, reachable controls, one-handed use, limited grip force, mobility devices, fatigue, and repeated carrying can change what is workable. Buildings, construction dates, and legal coverage vary; ask management about an accessible option or accommodation when needed. This article does not declare legal compliance." },
      { type: "h2", id: "stop", text: "Stop conditions and when to report a problem" },
      { type: "p", text: "Stop when instructions are missing, the machine leaks or is damaged, access is blocked, ownership is unclear, a child or pet could reach a product, or the next step requires repair or maintenance. Use the building’s reporting process or qualified guidance." },
      { type: "h2", id: "sources", text: "Sources and editorial limits" },
      { type: "p", text: "Machine manuals, product labels, building procedures, and qualified service guidance control specific operation. U.S. Fire Administration and CPSC materials provide general dryer-fire information; they do not make this checklist a fire-prevention guarantee. Access Board guidance describes accessibility concepts, not a legal finding about a particular building." },
      { type: "linkP", textBefore: "See the ", linkText: "U.S. Access Board clear-floor guidance", href: "https://www.access-board.gov/ada/guides/chapter-3-clear-floor-or-ground-space-and-turning-space/", textAfter: " and use current machine instructions for the equipment in front of you." },
      { type: "linkP", textBefore: "Read ETLH’s ", linkText: "apartment systems guide", href: "/blog/sustainable-living-apartment-easy-habits", textAfter: " for renter-controlled boundaries, not machine-safety authority." },
    ],
  },
  {
    slug: "drying-clothes-small-apartment-space-plan",
    title: "Drying Clothes in a Small Apartment: Plan the Space Before You Hang a Load",
    excerpt: "Test one temporary indoor drying location around care labels, doors, walkways, heat sources, ventilation, and building rules without promising faster drying or mold prevention.",
    category: "intentional-living",
    date: "2026-07-23",
    readingTime: "7 min read",
    image: dryingSpaceHero,
    imageAlt: "Illustrative small apartment with a compact drying rack positioned away from the doorway and clear walking space around it.",
    tags: ["laundry", "small apartment", "renter planning", "drying space"],
    toc: [
      { id: "limits", label: "What a drying-space plan can and cannot determine" },
      { id: "label", label: "Read the garment care label first" },
      { id: "zone", label: "Choose one temporary drying zone" },
      { id: "clearance", label: "Preserve doors, walkways, and access" },
      { id: "heat", label: "Keep clothing away from heat sources" },
      { id: "moisture", label: "Notice ventilation and existing dampness" },
      { id: "rules", label: "Review lease and building restrictions" },
      { id: "adapt", label: "Adapt for capacity and household needs" },
      { id: "stop", label: "When indoor drying is not practical" },
      { id: "sources", label: "Sources and editorial limits" },
    ],
    body: [
      { type: "p", text: "A drying-space plan asks whether one temporary location can hold a modest load without blocking daily movement or ignoring the garment’s care instructions. It does not diagnose mold, establish a humidity target, make every room suitable, or promise faster drying, lower bills, longer garment life, or better indoor air." },
      { type: "h2", id: "limits", text: "What a drying-space plan can and cannot determine" },
      { type: "p", text: "Drying wet laundry indoors adds moisture to the air, and the amount varies with the load, fabric, machine cycle, room, and ventilation. The plan organizes a decision; it does not guarantee drying performance or moisture safety." },
      { type: "h2", id: "label", text: "Read the garment care label first" },
      { type: "p", text: "Garment care labels provide item-specific drying instructions. Follow the label and manufacturer guidance rather than treating one fabric, cycle, or rack position as universal." },
      { type: "linkP", textBefore: "The FTC’s ", linkText: "Care Labeling Rule guidance", href: "https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule", textAfter: " explains why care instructions belong with the garment." },
      { type: "h2", id: "zone", text: "Choose one temporary drying zone" },
      { type: "p", text: "Choose a location that can be set up and removed without claiming a permanent room function. Keep the load modest enough to preserve a clear route, and leave a no-action option when the available space does not work." },
      { type: "h2", id: "clearance", text: "Preserve doors, walkways, exits, and appliance access" },
      { type: "p", text: "Check door swings, exits, stairs, cooking areas, appliance access, and mobility-device pathways before placing a rack. Temporary does not mean harmless to circulation." },
      { type: "h2", id: "heat", text: "Keep clothing away from radiators and heat-producing equipment" },
      { type: "p", text: "Do not place garments or a rack directly on radiators, heaters, ovens, lamps, or other heat-producing equipment. Follow the equipment and building instructions when the safe distance is unclear." },
      { type: "h2", id: "moisture", text: "Check ventilation and existing condensation before adding wet laundry" },
      { type: "p", text: "Notice the room’s existing conditions before adding wet clothing. When dampness, leaking, recurring condensation, or widespread mold is already present, pause the drying plan and use the building’s reporting process or seek qualified guidance. Do not identify mold types or provide remediation instructions." },
      { type: "h2", id: "rules", text: "Review lease, balcony, and building restrictions" },
      { type: "p", text: "Building, lease, balcony, and shared-space rules may limit drying options. Treat local rules as conditional and location-specific; do not generalize balcony rights or landlord responsibility." },
      { type: "h2", id: "adapt", text: "Adapt for reach, grip, fatigue, children, pets, and mobility devices" },
      { type: "p", text: "A lower setup, help from another person, a smaller load, or a pause may fit better when reach, grip, fatigue, illness, caregiving, children, pets, or mobility devices change the task. These are options, not a universal accessibility prescription." },
      { type: "h2", id: "stop", text: "When indoor drying is not practical" },
      { type: "p", text: "Stop when the rack blocks an exit or needed route, touches a heat source, conflicts with care instructions or building rules, or adds wet laundry to an already damp room. Take no action, use an approved alternative, report a building condition, or seek qualified guidance." },
      { type: "h2", id: "sources", text: "Sources and editorial limits" },
      { type: "p", text: "This article is a temporary-space planning guide, not mold remediation, health, ventilation treatment, appliance buying, energy, utility, or environmental advice. The FTC care-label guidance, garment instructions, appliance manuals, building rules, and qualified moisture guidance remain controlling." },
      { type: "linkP", textBefore: "See the ", linkText: "U.S. Access Board clear-floor guidance", href: "https://www.access-board.gov/ada/guides/chapter-3-clear-floor-or-ground-space-and-turning-space/", textAfter: " for general access concepts." },
      { type: "linkP", textBefore: "Read ETLH’s ", linkText: "room-reset planning example", href: "/blog/sustainable-small-apartment-decor-before-after", textAfter: " only for reversible space-planning framing; it is not moisture or building authority." },
    ],
  },
  {
    slug: "laundry-transport-without-in-unit-washer",
    title: "Getting Laundry to the Machine Without an In-Unit Washer",
    excerpt: "Trace one laundry route from your apartment to a shared machine or laundromat, then adjust the load for the path, weather, rules, and your current capacity.",
    category: "intentional-living",
    date: "2026-07-24",
    readingTime: "7 min read",
    image: laundryTransportHero,
    imageAlt: "Illustrative renter carrying a modest laundry bag and small supply bag through a clear apartment doorway toward a stairwell.",
    tags: ["laundry", "renters", "small apartment", "shared facilities"],
    toc: [
      { id: "limits", label: "What a laundry-transfer plan can and cannot determine" },
      { id: "route", label: "Trace the complete route before packing" },
      { id: "surfaces", label: "Check doors, stairs, elevators, and surfaces" },
      { id: "capacity", label: "Assess load shape, grip, and visibility" },
      { id: "adjust", label: "Adjust the plan for the route" },
      { id: "supplies", label: "Keep supplies separate when useful" },
      { id: "boundaries", label: "Check building, laundromat, weather, and transit rules" },
      { id: "access", label: "Preserve shared access and household boundaries" },
      { id: "stop", label: "Stop conditions" },
      { id: "sources", label: "Sources and editorial limits" },
    ],
    body: [
      { type: "p", text: "When the washer is outside your apartment, the useful planning job begins before the laundry room or laundromat: trace one route from home to the machine and back. Carrying laundry can involve weight, bulk, grip, distance, stairs, repetition, and changing surfaces. This guide organizes decisions without promising injury prevention, accessibility, balance, or successful completion." },
      { type: "h2", id: "limits", text: "What a laundry-transfer plan can and cannot determine" },
      { type: "p", text: "A route review can reveal obstacles before the load is lifted. It cannot determine what is medically safe for an individual, guarantee a stable carry, establish building compliance, or identify the best transport method for every person or location." },
      { type: "h2", id: "route", text: "Trace the complete route before packing" },
      { type: "ul", items: ["Identify the destination: shared building machine, laundromat, or another approved location.", "Trace the route there and back, including doors, stairs, elevators, thresholds, outdoor sections, and places where the load could be set down.", "Notice lighting, wet or icy surfaces, clutter, door swings, and whether a railing or mobility-device path remains usable.", "Check the location-specific rules before leaving: building procedures, laundromat requirements, weather conditions, and the transit operator you will actually use."] },
      { type: "h2", id: "surfaces", text: "Check doors, stairs, elevators, thresholds, lighting, and outdoor surfaces" },
      { type: "p", text: "Keep stairs, landings, exits, hallways, and elevator doors clear. Avoid staging bags on stairs or in exit paths. Wet, icy, poorly lit, cluttered, or uneven surfaces may increase slip, trip, or fall hazards; pause when the route condition is not workable." },
      { type: "h2", id: "capacity", text: "Assess the load’s weight, size, shape, grip, and effect on visibility" },
      { type: "p", text: "There is no single load weight or trip count that is appropriate for every person, route, container, or building. Notice whether the bag shifts, blocks your view, interferes with a door, railing, balance, or mobility device, or requires awkward twisting or bending. Occupational lifting guidance is used here only for general planning principles, not as a household guarantee." },
      { type: "h2", id: "adjust", text: "Adjust the plan for the complete route" },
      { type: "p", text: "A smaller load may reduce the weight or bulk of one trip, but additional trips also add repetition and total movement. Choose based on the complete route and your current capacity. Assistance, postponement, a different approved method, or no action may be the better plan." },
      { type: "h2", id: "supplies", text: "Keep supplies separate where that improves control" },
      { type: "p", text: "A small supply bag may keep detergent or payment items separate from clothing, but no bag size or carrying arrangement is universally appropriate. Keep products in original containers and secure them from children and pets. Do not add a product ranking or assume a particular bag, cart, or carrier is best." },
      { type: "h2", id: "boundaries", text: "Check building, laundromat, weather, and transit constraints" },
      { type: "p", text: "Building procedures, laundromat rules, weather, and transit policies vary by operator and location. Carry-on limits, cart rules, assistance policies, aisles, doors, seats, and mobility-device spaces may differ. Check the current policy of the operator you will actually use rather than generalizing one system’s rule." },
      { type: "h2", id: "access", text: "Preserve shared access and household boundaries" },
      { type: "p", text: "Keep exits, hallways, stairs, doors, and shared circulation areas unobstructed. Account for pain, fatigue, reduced grip, balance concerns, existing injury, mobility devices, children, pets, supervision, and another household member’s belongings. When pain, fatigue, balance, grip, or an existing condition makes the route uncertain, reduce the scope, seek appropriate assistance, postpone the task, or consult a qualified professional about your individual limits." },
      { type: "h2", id: "stop", text: "Stop conditions" },
      { type: "p", text: "Stop when the load blocks your view, shifts out of control, interferes with a railing or mobility device, leaves no clear route, meets a locked or restricted door, conflicts with weather or operator rules, or exceeds your current capacity. A postponed trip, additional help, or no-action decision is a valid outcome." },
      { type: "h2", id: "sources", text: "Sources and editorial limits" },
      { type: "p", text: "OSHA and CCOHS lifting material, CDC slip-and-fall guidance, fire and life-safety guidance, Access Board mobility concepts, building procedures, and the actual transit or laundromat operator can inform a bounded plan. Workplace examples are not consumer load limits. This article is not medical, rehabilitation, legal, transit, building-code, product, pain-treatment, or injury-prevention advice." },
      { type: "linkP", textBefore: "For general clear-floor concepts, see the ", linkText: "U.S. Access Board guidance", href: "https://www.access-board.gov/ada/guides/chapter-3-clear-floor-or-ground-space-and-turning-space/", textAfter: "." },
      { type: "linkP", textBefore: "When you reach the machine, continue with ETLH’s ", linkText: "shared laundry-room check", href: "/blog/shared-apartment-laundry-room-check", textAfter: "." },
      { type: "linkP", textBefore: "Read ETLH’s ", linkText: "apartment systems guide", href: "/blog/sustainable-living-apartment-easy-habits", textAfter: " only for renter-controlled planning context." },
    ],
  },
  {
    slug: "laundry-holding-zones-studio-apartment",
    title: "Where Laundry Waits in a Studio Apartment",
    excerpt: "Choose one temporary, reversible place for each laundry stage while preserving movement, appliance access, care instructions, and household boundaries.",
    category: "intentional-living",
    date: "2026-07-25",
    readingTime: "7 min read",
    image: laundryHoldingHero,
    imageAlt: "Illustrative studio apartment with a modest laundry basket, a folded stack of clean clothing, and one garment placed separately on a clear table.",
    tags: ["laundry", "studio apartment", "small spaces", "renter planning"],
    toc: [
      { id: "limits", label: "What a holding-zone review can and cannot determine" },
      { id: "stage", label: "Identify the laundry stage first" },
      { id: "worn", label: "Recently worn items" },
      { id: "dirty", label: "Ordinary dirty laundry" },
      { id: "separate", label: "Separate-care items" },
      { id: "clean", label: "Clean laundry waiting to be folded" },
      { id: "access", label: "Preserve doors, exits, and appliance access" },
      { id: "household", label: "Account for household and physical capacity" },
      { id: "damp", label: "Stop when dampness or leaks change the decision" },
      { id: "sources", label: "Sources and editorial limits" },
    ],
    body: [
      { type: "p", text: "A studio apartment may need more than one temporary place for laundry to wait between steps. This review helps you name the stage, choose one reversible location, and check access before using it. It does not promise odor control, hygiene, mold prevention, safety, accessibility, garment protection, or a universally suitable arrangement." },
      { type: "h2", id: "limits", text: "What a laundry holding-zone review can and cannot determine" },
      { type: "p", text: "A holding zone is a temporary decision, not a permanent storage system or product recommendation. The useful question is whether one location works for this stage, this route, and this household today." },
      { type: "h2", id: "stage", text: "Identify the laundry stage before choosing a location" },
      { type: "ul", items: ["Recently worn items that are not yet part of the ordinary dirty load.", "Ordinary dirty laundry waiting for the next wash.", "Items requiring separate care or a care-label check.", "Clean laundry waiting to be folded or stored."] },
      { type: "h2", id: "worn", text: "Recently worn items" },
      { type: "p", text: "Choose a temporary location that keeps recently worn items distinct from clean folded clothing and from anything still wet or actively drying. If the item is wet or actively drying, treat that as a drying decision rather than a holding-zone decision and follow its care instructions." },
      { type: "linkP", textBefore: "For active drying questions, see ETLH’s ", linkText: "small-apartment drying-space plan", href: "/blog/drying-clothes-small-apartment-space-plan", textAfter: "." },
      { type: "h2", id: "dirty", text: "Ordinary dirty laundry" },
      { type: "p", text: "Review one temporary basket, pile, or container location without treating any product or basket as the required answer. Keep it out of doors, exits, stairs, walkways, and appliance access, and move or stop using the location when those conditions change." },
      { type: "h2", id: "separate", text: "Separate-care items" },
      { type: "p", text: "Check the care label before combining a separate-care item with the ordinary laundry load. The label governs how the item should ultimately be cleaned or dried, not where every household must temporarily place it. Distinct areas are optional organizational choices, not universal household etiquette." },
      { type: "linkP", textBefore: "The FTC’s ", linkText: "Care Labeling Rule guidance", href: "https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule", textAfter: " explains the role of garment care instructions." },
      { type: "h2", id: "clean", text: "Clean laundry waiting to be folded or stored" },
      { type: "p", text: "A clear table or other temporary surface may hold a folded stack while you finish the next step, provided it does not block movement, doors, exits, or needed appliance access. No setup is universally accessible or the best organization method." },
      { type: "h2", id: "access", text: "Preserve doors, exits, walkways, and appliance access" },
      { type: "p", text: "Keep temporary laundry away from doors, exits, stairs, hallways, heaters, fireplaces, radiators, vents, and mechanical equipment. Follow appliance instructions for clearances and service access. Do not make permanent fixtures or structural changes without checking the lease, building instructions, or owner permission." },
      { type: "h2", id: "household", text: "Account for reach, bending, grip, fatigue, vision, and household boundaries" },
      { type: "p", text: "A workable location depends on the renter’s reach, grip, bending tolerance, vision, fatigue, and mobility needs. Design standards can identify useful considerations but do not determine whether one household arrangement works for every person. Keep laundry products in original containers, labels available, and products secured according to authoritative child-safety and manufacturer guidance. Bags, cords, containers, and open doors may need additional control around children and pets." },
      { type: "h2", id: "damp", text: "Stop when dampness, leaks, condensation, or mold change the decision" },
      { type: "p", text: "If an item is still wet or actively drying, treat that as a drying decision rather than a holding-zone decision. A holding-zone adjustment cannot identify or repair the cause of persistent dampness, leaking, recurring condensation, or mold. Pause use of the location and follow the building’s reporting process or seek qualified guidance." },
      { type: "h2", id: "sources", text: "Sources and editorial limits" },
      { type: "p", text: "FTC care-label guidance establishes the role of garment washing and drying instructions; it does not prescribe temporary holding locations. U.S. Fire Administration heating guidance and appliance manuals support keeping combustible textiles away from heat and preserving equipment clearances; they do not guarantee fire prevention. Access Board material offers design considerations, not an ADA-compliance finding for a private apartment. This article is not mold remediation, hygiene, medical, detergent-storage, product, legal, or landlord-liability advice." },
      { type: "linkP", textBefore: "When laundry is ready to move, use ETLH’s ", linkText: "transport route plan", href: "/blog/laundry-transport-without-in-unit-washer", textAfter: "." },
      { type: "linkP", textBefore: "When it reaches a shared machine, use the ", linkText: "shared laundry-room check", href: "/blog/shared-apartment-laundry-room-check", textAfter: "." },
    ],
  },
  {
    slug: "laundry-product-storage-small-apartment",
    title: "Storing Laundry Products in a Small Apartment",
    excerpt: "Review one proposed laundry-product storage location for original containers, labels, household access, moisture, heat, and circulation without calling it childproof or universally safe.",
    category: "intentional-living",
    date: "2026-07-26",
    readingTime: "8 min read",
    image: laundryProductStorageHero,
    imageAlt: "Illustrative small-apartment cabinet with several closed, unbranded laundry-product containers stored upright on two shelves.",
    tags: ["laundry", "product storage", "small apartment", "renter planning"],
    toc: [
      { id: "limits", label: "What this storage-location review can and cannot determine" },
      { id: "list", label: "List the products that need a location" },
      { id: "original", label: "Keep products in original containers" },
      { id: "close", label: "Close containers after every use" },
      { id: "instructions", label: "Follow product-specific storage instructions" },
      { id: "packets", label: "Account for detergent packets and moisture" },
      { id: "children", label: "Keep products out of children’s and pets’ sight and reach" },
      { id: "adult", label: "Balance secure placement with adult access" },
      { id: "heat", label: "Keep products away from heat and equipment" },
      { id: "circulation", label: "Preserve clear access and household circulation" },
      { id: "separate", label: "Keep products distinct where labels require it" },
      { id: "stop", label: "Stop conditions and exposure boundary" },
      { id: "sources", label: "Sources and editorial limits" },
    ],
    body: [
      { type: "p", text: "This article organizes one storage-location decision for laundry products. It helps a renter review containers, labels, closures, product instructions, child and pet boundaries, adult access, moisture, heat, and circulation. It does not certify a cabinet as safe, childproof, pet-proof, accessible, legally compliant, or suitable for every product or household." },
      { type: "h2", id: "limits", text: "What this storage-location review can and cannot determine" },
      { type: "p", text: "Choose one proposed location and test it against the products and people who use it. A review organizes decisions; it does not guarantee protection from exposure, fire, health effects, or a successful storage outcome." },
      { type: "h2", id: "list", text: "List the products that need a location" },
      { type: "p", text: "Identify the liquid or powder detergent, single-dose packets, bleach, stain treatments, fabric softener, dryer products, and related supplies that actually need a place. Do not assume every product has the same storage, separation, or disposal instructions." },
      { type: "h2", id: "original", text: "Keep products in original containers with labels available" },
      { type: "p", text: "Keeping the original container preserves the product identity, directions, warnings, closure, and emergency information supplied for that product. Do not transfer laundry products into decorative jars, drink bottles, food containers, or unlabeled containers. Original packaging does not guarantee protection from exposure." },
      { type: "h2", id: "close", text: "Close containers after every use" },
      { type: "p", text: "Return each product to its closed original container after use and put it away. Follow the product label for closure, handling, disposal, and emergency instructions." },
      { type: "h2", id: "instructions", text: "Follow product-specific storage instructions" },
      { type: "p", text: "Read the storage and warning directions on each container. Check restrictions involving temperature, moisture, sunlight, ventilation, separation, and appliance surfaces. Do not invent a universal temperature, height, ventilation rule, or clearance." },
      { type: "h2", id: "packets", text: "Account for detergent packets and moisture" },
      { type: "p", text: "Keep single-dose detergent packets in their original package until use, keep the package closed and dry where the product instructions require it, and do not remove packets until ready for use. Do not generalize packet-specific instructions to every laundry product." },
      { type: "h2", id: "children", text: "Keep products out of children’s and pets’ sight and reach" },
      { type: "p", text: "Products should be closed, put away, out of sight, and out of reach, with a locked location where feasible and appropriate. A high, locked location is recommended by pediatric guidance where feasible, but household layout, child development, pet behavior, and adult access vary. No location should be described as childproof or pet-proof." },
      { type: "h2", id: "adult", text: "Balance secure placement with adult access" },
      { type: "p", text: "The proposed location must account for the intended adult’s ability to reach, identify, lift, open, close, and return each product. Consider reach, grip, vision, fatigue, one-handed use, bending, overhead reaching, clear floor space, and mobility-device approach. A location that cannot reconcile secure storage and usable access may require a different household plan or qualified assistance. Design standards offer considerations, not a compliance finding for a private apartment." },
      { type: "h2", id: "heat", text: "Keep products away from heat sources and unsuitable appliance surfaces" },
      { type: "p", text: "Keep products and combustible packaging away from heaters and radiators, and do not use heaters as storage surfaces. Do not store products on top of washers or dryers where authoritative guidance advises against it. Follow model-specific appliance instructions for ventilation, controls, doors, lids, and service access; these precautions do not guarantee fire prevention." },
      { type: "h2", id: "circulation", text: "Preserve clear access, floor space, and household circulation" },
      { type: "p", text: "The location should not obstruct doors, exits, walkways, appliances, controls, or service access. Prioritize existing, reversible storage locations and review the lease, building rules, or management permission before any permanent change. Do not drill, install a permanent cabinet, or alter electrical or plumbing systems as part of this review." },
      { type: "h2", id: "separate", text: "Keep laundry products distinct where instructions require it" },
      { type: "p", text: "Do not combine products or improvise compatibility rules. Keep labels available and follow the instructions for each specific product. Unrelated household items should remain separate when a product label, manufacturer instruction, or household need requires separation. This article does not provide chemical-mixing examples, compatibility charts, or neutralization instructions." },
      { type: "h2", id: "stop", text: "Stop conditions and exposure boundary" },
      { type: "p", text: "Reject the proposed location when a container is damaged or cannot close, labels are missing, moisture or heat conflicts with the instructions, adult access cannot be reconciled, circulation is blocked, or household boundaries cannot be maintained. For a suspected exposure, follow the product label and contact Poison Control or emergency services as appropriate. U.S. Poison Control can be reached at 1-800-222-1222; ETLH does not replace Poison Control, emergency services, a clinician, or the product manufacturer." },
      { type: "h2", id: "sources", text: "Sources and editorial limits" },
      { type: "p", text: "Product labels, manufacturer instructions, current pediatric guidance, Poison Control, CPSC, EPA, U.S. Fire Administration, Access Board design references, and applicable building procedures control specific decisions. This article is not poisoning diagnosis or treatment, chemical-mixing guidance, childproofing, pet-safety, fire-prevention, medical, legal, landlord-liability, product-ranking, savings, health, hygiene, or environmental advice." },
      { type: "linkP", textBefore: "For the product-storage boundary, use current ", linkText: "Poison Control contact guidance", href: "https://www.poison.org/", textAfter: " when an exposure is suspected." },
      { type: "linkP", textBefore: "For the distinction between where products are stored and where clothing waits, see ETLH’s ", linkText: "laundry holding-zones guide", href: "/blog/laundry-holding-zones-studio-apartment", textAfter: "." },
    ],
  },

  {
    slug: "dishwashing-without-dishwasher-small-kitchen",
    title: "Dishwashing Without a Dishwasher in a Small Kitchen",
    excerpt: "Design a bounded dish-handling sequence around your sink, drying space, household, and physical capacity—without treating one method as universal.",
    category: "zero-waste-kitchen",
    date: "2026-07-20",
    readingTime: "8 min read",
    image: dishwashingHero,
    imageAlt: "Illustrative small apartment kitchen with a sink, dish rack, drying dishes, wood counter, and plants in warm daylight.",
    tags: ["dishwashing", "small kitchen", "renters", "kitchen systems"],
    toc: [
      { id: "constraints", label: "Start with the actual constraints" },
      { id: "flow", label: "Build a bounded dish flow" },
      { id: "food-safety", label: "Keep food-safety steps distinct" },
      { id: "space", label: "Choose a drying and return arrangement" },
      { id: "shared", label: "Adapt for people and shared space" },
      { id: "limits", label: "Sources and limits" },
    ],
    body: [
      { type: "p", text: "Without a dishwasher, the useful question is not how to copy someone else's routine. It is which small sequence can move the dishes you use through a limited sink, counter, drying area, and storage space without creating a new burden for the people who live there." },
      { type: "p", text: "This guide offers choices to test. It makes no outcome claim about resource use, costs, sanitation, wellbeing, speed, or fit across every kitchen or body." },
      { type: "h2", id: "constraints", text: "Start with the actual constraints" },
      { type: "ul", items: [
        "Sink: Is there one basin, a divided basin, or a portable basin that can be safely placed and emptied?",
        "Landing space: Where can a used dish wait without blocking food preparation, a mobility route, or the only counter?",
        "Drying space: Is there room beside the sink, inside a cabinet after items are fully dry, or another clean location that fits the household?",
        "Capacity: Consider reach, grip, standing tolerance, lifting, fatigue, pain, and whether a smaller batch, a seated task, help from another person, or a pause is needed.",
        "Household and safety: Check shared responsibilities, children and pets, sharp or breakable items, cleaning-product sensitivities, and electrical appliances near water.",
        "Materials: Follow the care instructions for cookware, knives, coated surfaces, wood, glass, and any item whose manufacturer limits soaking, abrasives, heat, or dishwasher use.",
      ] },
      { type: "h2", id: "flow", text: "Build a bounded dish flow" },
      { type: "p", text: "Choose one version of the following flow and change it when it does not fit: collect used items, remove food residue, hold items temporarily if washing cannot happen yet, wash, rinse where the product or local circumstances call for it, dry, and return items to storage. The order is a planning tool, not a rule for every dish or household." },
      { type: "table", caption: "Small-kitchen dish-flow choices", headers: ["Moment", "A bounded option", "Constraint to check"], rows: [
        ["After eating", "Put used dishes in one designated sink or tray area when that area remains safe and available.", "Do not block the only food-prep space, a mobility path, or a shared sink needed by another person."],
        ["Food residue", "Remove residue into the waste route you already use before washing.", "Follow local collection rules; handling scraps is separate from this dish-flow decision."],
        ["Temporary hold", "If immediate washing is not practical, choose a contained holding spot and return when you can.", "Do not imply that soaking, storage time, or any container is suitable for every material or food residue."],
        ["Washing", "Use detergent, water, and the tool or method compatible with the item and your capacity.", "Manufacturer care instructions and material limits control; more force or abrasives are not automatically appropriate."],
        ["Drying", "Use a clean, stable drying location that does not create a fall, mold, electrical, or food-prep problem.", "A rack, towel, or no additional tool may fit depending on available space and care instructions."],
        ["Return", "Put only fully dry items back where they can be reached and used again.", "If this step becomes the bottleneck, change the storage location or batch size before buying another organizer."],
      ] },
      { type: "h2", id: "food-safety", text: "Keep food-safety steps distinct from a routine preference" },
      { type: "p", text: "A personal dish-flow does not replace food-safety guidance. USDA advises washing food-contact cutting boards in hot, soapy water after use, then rinsing and air- or towel-drying; it also advises using clean plates and utensils for cooked food rather than items that held raw products. Those are narrower food-contact recommendations, not a requirement that every household use one washing order or a particular rack." },
      { type: "linkP", textBefore: "See USDA FSIS guidance on ", linkText: "cleanliness and foodborne illness prevention", href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cleanliness-helps-prevent", textAfter: " for food-contact and raw-food boundaries." },
      { type: "p", text: "Handwashing is a separate kitchen step. CDC recommends washing hands with soap and water at key points while preparing food, including after handling raw animal foods, trash, pets, or cleaning chemicals. This article does not treat a dishcloth, scrubber, or dish sequence as a substitute for that guidance." },
      { type: "linkP", textBefore: "CDC's ", linkText: "kitchen handwashing guidance", href: "https://www.cdc.gov/clean-hands/prevention/about-handwashing-a-healthy-habit-in-the-kitchen.html", textAfter: " explains those food-preparation contexts." },
      { type: "h2", id: "space", text: "Choose a drying and return arrangement before buying tools" },
      { type: "ul", items: [
        "Test a cleared section beside the sink, an existing rack, a clean towel where appropriate, or a smaller drying batch before replacing functional equipment.",
        "Keep electrical cords and plug-in appliances away from water and follow their manufacturer instructions.",
        "Keep knives and breakables stable, visible, and out of reach where children, pets, or a shared route make that necessary.",
        "If the only usable counter is also the drying area, consider shorter batches, a household schedule, or returning items before starting another task rather than forcing all dishes through at once.",
      ] },
      { type: "h2", id: "shared", text: "Adapt for people and shared space" },
      { type: "p", text: "A shared kitchen can benefit from an explicit agreement about what may wait, where it waits, who handles sharp or fragile items, and how a person signals that they need help. If standing, grip, reach, fatigue, pain, illness, or caregiving makes the current sequence unsafe or unrealistic, simplify the batch, change the location, use available support, or pause. No article can determine the right accommodation for every person." },
      { type: "linkP", textBefore: "For one broader renter-control check before changing equipment or a shared system, read ", linkText: "Sustainable Apartment Systems: What Renters Can Control", href: "/blog/sustainable-living-apartment-easy-habits", textAfter: "." },
      { type: "linkP", textBefore: "If dish cleanup exposes a food-scrap handoff problem, use ", linkText: "How to Choose an Apartment Food-Scrap Method", href: "/blog/choose-apartment-food-scrap-method", textAfter: " rather than assuming a countertop container is composting." },
      { type: "h2", id: "limits", text: "Sources and limits" },
      { type: "p", text: "This guide separates adaptable workflow suggestions from USDA and CDC food-contact and handwashing guidance. It does not make a resource, cost, sanitation, illness, time, wellbeing, habit, environmental, odor, pest, or across-all-households promise. Local rules, product labels, manufacturer instructions, lease terms, and the needs of the people using the kitchen remain controlling." },
      { type: "linkP", textBefore: "Read ETLH's ", linkText: "editorial and corrections policy", href: "/editorial-policy", textAfter: " if a source or passage needs review." },
    ],
  },
  {
    slug: "electric-food-waste-appliances-apartments",
    title: "Electric Food-Waste Appliances for Apartments: What to Check",
    excerpt: "Use a neutral evaluation framework for countertop food-waste appliances: what they do, what they leave for you to handle, and when not to buy one.",
    category: "zero-waste-kitchen",
    date: "2026-07-20",
    readingTime: "8 min read",
    image: electricApplianceHero,
    imageAlt: "Illustrative compact apartment kitchen with an unbranded countertop food-waste appliance and a removable food-scrap container.",
    tags: ["food waste appliances", "apartments", "renters", "purchase decision"],
    toc: [
      { id: "name-the-process", label: "Name the process" },
      { id: "output-route", label: "Plan the output route" },
      { id: "apartment-check", label: "Check apartment fit" },
      { id: "read-the-docs", label: "Read the actual documents" },
      { id: "do-not-buy", label: "When not to buy" },
      { id: "limits", label: "Sources and limits" },
    ],
    body: [
      { type: "p", text: "A countertop food-waste appliance can be a treatment step in a food-scrap system. It is not automatically a composting system, a collection service, or a solution to an unavailable handoff route. Before comparing models, identify what the appliance does to food scraps and what you will do with the output." },
      { type: "p", text: "This is an evaluation framework, not a product roundup. Do not buy is a valid conclusion when the output route, counter space, electricity, noise, cleaning, building rules, or recurring maintenance does not fit." },
      { type: "h2", id: "name-the-process", text: "Name the process before calling the output compost" },
      { type: "p", text: "An appliance may heat, grind, dry, mix, or otherwise reduce the volume and weight of food scraps. Those are different actions from managed aerobic biological decomposition. EPA says residential grinders and dehydrators create a dried food-scrap mixture, not compost, and that the material is not biologically stable without further treatment." },
      { type: "linkP", textBefore: "Read EPA's ", linkText: "approaches to composting", href: "https://www.epa.gov/sustainable-management-food/approaches-composting", textAfter: " for the distinction between pre-processing and composting." },
      { type: "table", caption: "Questions to ask about appliance treatment", headers: ["Question", "Why it matters"], rows: [
        ["Does the manual describe drying, grinding, heating, mixing, biological processing, or more than one step?", "The description tells you what the appliance is designed to do; it does not establish that the output is finished compost."],
        ["What material may go in, and what is excluded?", "Accepted inputs vary by model and must come from the actual manual, not another appliance, a retailer, or a collection program."],
        ["What comes out, and where is that output permitted to go?", "Plan this before purchase. A local collection program or soil use may have its own rules, and may not accept appliance output."],
        ["What is the cycle, cleaning, and filter or consumable routine?", "A claimed convenience benefit does not replace the routine described by the manufacturer."],
      ] },
      { type: "h2", id: "output-route", text: "Plan the output route before the counter space" },
      { type: "p", text: "Write down the output route in one sentence. For example: “I will keep the treated material only until the named program confirms it accepts it,” or “I do not currently have an approved route, so I will not buy.” Do not put treated material into a garden, municipal cart, drain, or trash stream based on a general appliance claim; check the destination's current instructions." },
      { type: "linkP", textBefore: "EPA's ", linkText: "home-composting guidance", href: "https://www.epa.gov/recycle/composting-home", textAfter: " states that these appliances reduce volume and weight but do not produce compost; a composting system or collection program is a separate step." },
      { type: "h2", id: "apartment-check", text: "Check apartment fit without promising convenience" },
      { type: "ul", items: [
        "Counter and storage: Measure the appliance, clearance, outlet reach, lid movement, ventilation requirements in the manual, and the space needed for output, filters, cleaning, and a backup container.",
        "Electricity and building rules: Use only the voltage, outlet, cord, placement, and ventilation instructions for the exact model. Check lease and building rules before adding an appliance to a shared or restricted space.",
        "Noise and timing: Review the manual's noise or cycle guidance, then decide whether the cycle timing is compatible with sleep, work, neighbors, children, pets, and shared-household needs. Do not assume quiet operation.",
        "Capacity and interruption: Check the actual capacity, cycle length, cooling or reset instructions, and what happens if you have more scraps than the appliance can take.",
        "Cleaning and consumables: Identify washable parts, cleaning frequency, filters, additives, replacement parts, availability, and disposal instructions. Treat those as ongoing tasks, not minor footnotes.",
        "Warranty and support: Read the exact warranty, return, geographic coverage, proof-of-purchase, and excluded-use terms before relying on a stated coverage period.",
      ] },
      { type: "h2", id: "read-the-docs", text: "Read the actual model documents" },
      { type: "p", text: "Manufacturer material is the appropriate source for product-specific operation, but it is not independent proof of an outcome. For example, Lomi's current FAQ points buyers to model user manuals and gives model-specific filter, cleaning, and troubleshooting information; it notes that cycles can make cracking, grinding, or creaking sounds. Its warranty terms describe a one-year limited warranty for specified products and conditions. These details are examples of document categories to review, not an endorsement of that brand or a prediction of every appliance's behavior." },
      { type: "linkP", textBefore: "Use the manufacturer's ", linkText: "FAQ and model-manual links", href: "https://lomi.com/pages/faq", textAfter: " to find model-specific operating information, then read the applicable warranty terms rather than relying on a retailer summary." },
      { type: "linkP", textBefore: "Lomi's published ", linkText: "warranty terms", href: "https://lomi.com/warranty", textAfter: " illustrate why geographic coverage, proof of purchase, current exclusions, and accessory terms belong in the comparison—not just a headline warranty duration." },
      { type: "h2", id: "do-not-buy", text: "When not to buy" },
      { type: "ul", items: [
        "You cannot name an approved or workable output route.",
        "The appliance would block a needed counter, sink, food-storage, outlet, walking, or accessibility area.",
        "The required electrical, ventilation, cleaning, noise, capacity, or building-rule conditions do not fit the apartment.",
        "You do not want the filter, consumable, cleaning, or output-handling routine described in the current documents.",
        "A verified collection or drop-off route already solves the food-scrap handoff without adding an appliance.",
      ] },
      { type: "linkP", textBefore: "If you have not yet mapped a full route, return to ", linkText: "How to Choose an Apartment Food-Scrap Method", href: "/blog/choose-apartment-food-scrap-method", textAfter: " before comparing an appliance." },
      { type: "h2", id: "limits", text: "Sources and limits" },
      { type: "p", text: "EPA sources support the category-level composting boundary. Manufacturer sources support only the specific documentation they publish and can change. This guide does not rank products, estimate electricity use, promise odor or pest control, claim a saving, assert an environmental comparison, or say that an appliance fits every renter. Local program rules, building rules, and manufacturer instructions remain controlling." },
      { type: "linkP", textBefore: "Read ETLH's ", linkText: "editorial and corrections policy", href: "/editorial-policy", textAfter: " if a source or passage needs review." },
    ],
  },
  {
    slug: "choose-apartment-food-scrap-method",
    title: "How to Choose an Apartment Food-Scrap Method",
    excerpt:
      "Compare collection, temporary storage, handoff, active processing, and appliance treatment so you can decide whether a food-scrap system fits your apartment now.",
    category: "zero-waste-kitchen",
    date: "2026-07-20",
    readingTime: "9 min read",
    image: foodScrapMethodHero,
    imageAlt: "Illustrative small apartment kitchen with food scraps, collection containers, a cutting board, and plants in warm daylight.",
    tags: ["apartment composting", "food scraps", "renters", "decision guide"],
    toc: [
      { id: "start-with-destination", label: "Start with the destination" },
      { id: "separate-the-steps", label: "Separate the steps in the system" },
      { id: "compare-routes", label: "Compare practical routes" },
      { id: "decide-fit", label: "Decide whether a route fits" },
      { id: "when-not-to-start", label: "When no route fits yet" },
      { id: "sources-and-limits", label: "Sources and limits" },
    ],
    body: [
      {
        type: "p",
        text: "A food-scrap system is not one object on a counter. It is a chain: temporary storage, collection or processing, and a real handoff or finishing route. Start by checking the end of that chain. If you cannot name where the scraps can go next, a new bin is unlikely to solve the problem.",
      },
      {
        type: "p",
        text: "This guide is a decision process, not a universal recommendation. A building collection cart, a verified drop-off, a private collection service, a worm bin, bokashi with a finishing route, or no system for now can all be valid outcomes depending on your lease, building rules, local access, household agreement, storage, lifting, and maintenance capacity.",
      },
      { type: "h2", id: "start-with-destination", text: "Start with the destination, not the container" },
      {
        type: "p",
        text: "Check your building manager, local government or waste authority, and any service you are considering for the current accepted-materials list, container rules, access hours, fees, and transfer instructions. EPA notes that collection can include curbside programs, private haulers, and drop-off sites; it does not mean each option exists where you live or accepts the same material.",
      },
      {
        type: "linkP",
        textBefore: "EPA's overview of ",
        linkText: "collection programs and composting approaches",
        href: "https://www.epa.gov/sustainable-management-food/approaches-composting",
        textAfter: " distinguishes collection from processing and describes curbside, private-hauler, and drop-off models. Use it as a map of possible models, not a directory of local services.",
      },
      {
        type: "ul",
        items: [
          "If your building has collection, ask who controls access, what the cart accepts, where it is located, and when it is collected.",
          "If you are considering a community or municipal drop-off, verify that the site is open to you, what it accepts, and how you can carry scraps there. A farmers market, garden, or school is not automatically a drop-off.",
          "If you are considering a subscription service, verify its service area, pickup process, current terms, accepted materials, container requirements, and whether your building permits the handoff.",
          "If the destination requires outdoor space, soil burial, or a vehicle you do not have, record that as a constraint rather than assuming a workaround will fit.",
        ],
      },
      { type: "h2", id: "separate-the-steps", text: "Separate the steps in the system" },
      {
        type: "table",
        caption: "What each food-scrap step does—and does not do",
        headers: ["Step", "What it can do", "What it does not establish"],
        rows: [
          ["Temporary storage", "Holds scraps in a closed counter, refrigerator, or freezer container until the next step.", "It does not turn scraps into compost."],
          ["Collection", "Moves accepted scraps into a building cart, pickup service, or verified drop-off stream.", "It does not prove that every local program accepts the same scraps, liners, or bags."],
          ["Transportation or handoff", "Gets the stored material from the apartment to the collection or finishing destination.", "It does not remove the need to plan carrying, timing, access, or household responsibility."],
          ["Active processing", "Uses a managed system, such as a worm bin or another composting process, with its own operating conditions.", "It is not passive storage and may not fit the available space or maintenance capacity."],
          ["Finished-compost handling", "Uses biologically stable compost according to the system and site that produced it.", "It cannot be assumed from collected scraps, fermented material, or appliance output."],
          ["Appliance treatment", "May grind, heat, or dry food scraps and reduce their weight or volume.", "It does not by itself produce compost or remove the need for an output destination."],
        ],
      },
      {
        type: "linkP",
        textBefore: "EPA defines compost as a biologically stable product of managed aerobic decomposition and explains that residential grinders and dehydrators produce a dried food-scrap mixture rather than compost. See ",
        linkText: "EPA's composting definitions and home options",
        href: "https://www.epa.gov/recycle/composting-home",
        textAfter: ".",
      },
      { type: "h2", id: "compare-routes", text: "Compare practical routes before buying anything" },
      {
        type: "table",
        caption: "Apartment food-scrap route comparison",
        headers: ["Route", "What must already be true", "What you still need to manage"],
        rows: [
          ["Building collection", "Your building provides a usable, current collection route and its rules fit your scraps.", "Container location, access, household sorting, and the trip from your unit to the cart."],
          ["Verified drop-off", "A site accepts your material and is reachable on a cadence you can maintain.", "Storage between trips, carrying or transportation, hours, and changes to the site rules."],
          ["Private collection", "A service covers your address and your building permits the pickup or handoff.", "Current service terms, pickup timing, container care, building access, and any recurring commitment."],
          ["Counter, refrigerator, or freezer staging", "You have a confirmed downstream destination and a compatible place to hold scraps temporarily.", "Cleaning, leaks, the space you give up, and a removal cue. Cold storage stages scraps; it is not composting."],
          ["Worm bin", "You can provide the space, bedding, conditions, accepted inputs, and ongoing care required by the system.", "Feeding, moisture, ventilation, temperature, and how you will handle the resulting material."],
          ["Bokashi", "You have a sealed system, inoculant, and a verified way to finish the fermented material in soil or another composting system.", "Drainage and care instructions, storage, and a finishing destination; fermented material is not finished compost."],
          ["Electric food-scrap appliance", "You have a supported place for the appliance and an approved route for its output.", "Electricity, noise, capacity, cleaning, filters or consumables where applicable, manufacturer instructions, building rules, and output handling."],
        ],
      },
      {
        type: "linkP",
        textBefore: "For bokashi specifically, Washington State University Extension describes a sealed anaerobic fermentation process and says the material needs a soil or compost-system finishing step. Read ",
        linkText: "its bokashi guidance",
        href: "https://extension.wsu.edu/kitsap/bokashi-composting/",
        textAfter: " before treating it as an apartment-only solution.",
      },
      { type: "h2", id: "decide-fit", text: "Decide whether the route fits your apartment" },
      {
        type: "ul",
        items: [
          "Space: Where will the temporary container, appliance, bedding, or supplies sit without blocking food storage, a sink, a counter, a walking path, or needed access?",
          "Control: Is the collection point, outdoor space, electricity, ventilation, or pickup location under your control, your building's control, or a service's control?",
          "Handoff: Who empties the container, on what cue, and how will the scraps get from the unit to the next destination?",
          "Household agreement: Does everyone who will use the system agree on accepted materials, cleaning, responsibility, and what happens when the route is unavailable?",
          "Maintenance: Can you reasonably clean the container or appliance, manage liners or filters only when required, and respond to leaks or a missed handoff?",
          "Access and safety: Can you lift, carry, reach, and clean the system safely? Check manufacturer instructions, building rules, and child, pet, allergy, and sensitivity considerations before adding equipment or chemicals.",
        ],
      },
      {
        type: "p",
        text: "If a temporary container starts smelling or attracting fruit flies, that is a troubleshooting problem, not proof that you need a different product. First check the destination, time indoors, residue, leaks, and cleaning instructions. The next guide focuses on that diagnosis.",
      },
      {
        type: "linkP",
        textBefore: "Read ",
        linkText: "Apartment Composting Odor & Fruit Flies: A Small-Space Fix",
        href: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
        textAfter: " when an existing food-scrap setup needs a reset.",
      },
      { type: "h2", id: "when-not-to-start", text: "When no route fits yet" },
      {
        type: "p",
        text: "Choose no food-scrap system for now if you cannot verify a destination, cannot safely store or hand off material, do not have household agreement, or the required maintenance does not fit your current capacity. That is a bounded decision, not a failure. Recheck only when a building rule, local service, transportation option, space, or household situation changes.",
      },
      {
        type: "p",
        text: "If your main concern is an electric appliance, pause the purchase decision until you can name what the appliance does, what output it creates, and where that output can go. A separate ETLH evaluation framework will address that category without ranking products or promising a result.",
      },
      { type: "h2", id: "sources-and-limits", text: "Sources and limits" },
      {
        type: "p",
        text: "This article uses EPA and extension guidance for definitions and process boundaries. It does not claim that food-scrap diversion is available in every building, that a method prevents odor or pests, or that one appliance or route has a superior environmental, cost, time, water, energy, or effort outcome. Local program rules and manufacturer instructions remain controlling.",
      },
      {
        type: "linkP",
        textBefore: "For ETLH's sourcing and correction approach, read the ",
        linkText: "editorial and corrections policy",
        href: "/editorial-policy",
        textAfter: ".",
      },
    ],
  },
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
  title: "Illustrative Small-Apartment Room Reset Plan",
  excerpt:
    "Use an illustrative room scenario to organize layout, storage, lighting, and purchase-pause decisions without treating it as a documented transformation.",
  category: "small-apartment-decor",
  date: "2026-06-22",
  readingTime: "7 min read",
  image: decorCategoryImage,
  imageAlt:
    "Illustrative small apartment bedroom with natural wood furniture, plants, warm lighting, and layered textiles.",
  tags: [
    "illustrative room reset",
    "small apartment planning",
    "use what you have",
    "renter-aware decor"
  ],
  toc: [
    { id: "illustrative-starting-point", label: "An Illustrative Starting Point" },
    { id: "set-priorities", label: "Set Priorities Before Buying" },
    { id: "test-layout", label: "Test the Layout Without Buying" },
    { id: "evaluate-furniture", label: "Evaluate Furniture You Already Have" },
    { id: "lighting-textiles", label: "Use Lighting and Textiles With Restraint" },
    { id: "storage-details", label: "Add Storage Only When It Fits" }
  ],
  body: [
    {
      type: "p",
      text:
        "This is an illustrative room-reset planning example, not a documented before-and-after project. The scenario and imagery are examples for organizing decisions; no real apartment transformation, measurements, photos, receipts, or observed result are being presented."
    },
    {
      type: "p",
      text:
        "Use the scenario to review what is fixed, what can move, what reversible changes can be tested without buying, and what would require household agreement or landlord/building permission. Restoring the original arrangement or doing nothing are valid outcomes."
    },

    {
      type: "h2",
      id: "illustrative-starting-point",
      text: "An Illustrative Starting Point"
    },
    {
      type: "p",
      text:
        "Imagine a rental living room with decent natural light, a sofa that interrupts a preferred route, scattered storage, and cords that need a safer home. These are planning prompts, not facts about a real room."
    },
    {
      type: "ul",
      items: [
        "Furniture placement that makes one route harder to use.",
        "Loose items without an obvious place to return to.",
        "Storage pieces whose footprint needs to be checked against access.",
        "A lighting setup that may not support the room’s actual tasks."
      ]
    },

    {
      type: "h2",
      id: "set-priorities",
      text: "Set Priorities Before Buying"
    },
    {
      type: "p",
      text:
        "Start with the room’s actual tasks and constraints. Costs vary by location and what you already own, so this example does not promise a budget or outcome."
    },
    {
      type: "ul",
      items: [
        "Reuse, repair, relocate, or pause before considering replacement.",
        "Measure the room and furniture before bringing anything new home.",
        "List the one or two functions a change must support, including access and household needs."
      ]
    },

    {
      type: "h2",
      id: "test-layout",
      text: "Test the Layout Without Buying"
    },
    {
      type: "p",
      text:
        "Use a paper sketch, painter’s tape, or a temporary rearrangement to compare options. This is a test, not proof that the room will feel larger, calmer, or more functional."
    },
    {
      type: "ul",
      items: [
        "Mark furniture footprints, doors, windows, heaters, vents, outlets, and the route used most often.",
        "Try one arrangement with current furniture and observe access, cleaning, charging, and shared use.",
        "Restore the original arrangement if the test adds work or creates an access or safety problem."
      ]
    },

    {
      type: "h2",
      id: "evaluate-furniture",
      text: "Evaluate Furniture You Already Have"
    },
    {
      type: "p",
      text:
        "Before replacing anything, identify the specific function or footprint problem. A purchase is optional and should follow a verified need, not a material label or trend."
    },
    {
      type: "ul",
      items: [
        "Check whether current seating can move without blocking required paths or access.",
        "Compare any possible table or storage piece by footprint, cleaning, installation, return terms, and household use.",
        "Do not drill, mount, anchor, alter wiring, or move a heater without lease, building, manufacturer, and safety checks."
      ]
    },

    {
      type: "h2",
      id: "lighting-textiles",
      text: "Use Lighting and Textiles With Restraint"
    },
    {
      type: "p",
      text:
        "Treat lighting and textiles as optional choices to test against care, access, glare, ventilation, and the room’s actual use. They do not establish a wellbeing or spatial outcome."
    },
    {
      type: "ul",
      items: [
        "Use a rug only when it does not create a trip or maintenance problem.",
        "Use existing lamps or fixtures according to manufacturer instructions and do not alter electrical fittings.",
        "Refresh usable cushions with washable covers or leave them unchanged if that is the better fit."
      ]
    },

    {
      type: "h2",
      id: "storage-details",
      text: "Add Storage Only When It Fits"
    },
    {
      type: "p",
      text:
        "Finish only after the layout test identifies a real storage need. A plant, basket, or wall detail is optional and does not prove a room is healthier, calmer, or more sustainable."
    },
    {
      type: "ul",
      items: [
        "Choose a plant only when light, care, household, and pet-safety needs make it appropriate.",
        "Use one existing basket or container for items that otherwise spread across surfaces.",
        "Leave a wall open or add one item only when it serves the room’s actual use; do not install without permission and safe anchoring."
      ]
    },
    {
      type: "p",
      text:
        "This illustrative example is a planning sequence, not proof that one look, product list, or budget works for every apartment. Keep the test, revise it, restore the original arrangement, or do nothing."
    },
    {
      type: "linkP",
      textBefore: "For measurement and pathway planning, see the ",
      linkText: "small living room layout planning guide",
      href: "/blog/sustainable-tiny-living-room-layout-ideas",
      textAfter: "."
    },
    {
      type: "linkP",
      textBefore: "For a shorter no-purchase reset, see the ",
      linkText: "small-apartment reset checklist",
      href: "/blog/eco-friendly-small-apartment-weekend-checklist",
      textAfter: "."
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
