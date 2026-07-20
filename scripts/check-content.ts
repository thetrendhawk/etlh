import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { categories, posts } from "../src/lib/posts";
import { getPresentedPost } from "../src/lib/postPresentation";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);
const nonEmpty = (value: string) => value.trim().length > 0;

function findDuplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
}

function collectSourceFiles(directory: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(directory)) {
    const absolutePath = join(directory, entry);
    if (statSync(absolutePath).isDirectory()) {
      files.push(...collectSourceFiles(absolutePath));
      continue;
    }
    if (/\.(ts|tsx)$/.test(entry) && entry !== "routeTree.gen.ts") files.push(absolutePath);
  }
  return files;
}

function normalizeInternalPath(path: string): string {
  if (path === "/") return path;
  return path.replace(/\/$/, "");
}

for (const slug of findDuplicates(posts.map((post) => post.slug))) {
  fail(`Duplicate post slug: ${slug}`);
}

for (const slug of findDuplicates(categories.map((category) => category.slug))) {
  fail(`Duplicate category slug: ${slug}`);
}

const categorySlugs = new Set(categories.map((category) => category.slug));
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const category of categories) {
  if (!slugPattern.test(category.slug)) fail(`Invalid category slug: ${category.slug}`);
  if (!nonEmpty(category.name)) fail(`Category ${category.slug} has no name.`);
  if (!nonEmpty(category.shortName)) fail(`Category ${category.slug} has no short name.`);
  if (!nonEmpty(category.intro)) fail(`Category ${category.slug} has no introduction.`);
}

for (const post of posts) {
  const label = `Post ${post.slug}`;

  if (!slugPattern.test(post.slug)) fail(`${label} has an invalid slug.`);
  if (!nonEmpty(post.title)) fail(`${label} has no title.`);
  if (!nonEmpty(post.excerpt)) fail(`${label} has no excerpt.`);
  if (!categorySlugs.has(post.category))
    fail(`${label} references unknown category ${post.category}.`);
  if (!datePattern.test(post.date)) fail(`${label} has an invalid source date: ${post.date}`);
  if (!nonEmpty(post.readingTime)) fail(`${label} has no reading time.`);
  if (!nonEmpty(post.image)) fail(`${label} has no image.`);
  if (!nonEmpty(post.imageAlt)) fail(`${label} has no image alt text.`);
  if (post.tags.length === 0) fail(`${label} has no tags.`);
  if (post.body.length === 0) fail(`${label} has no body content.`);

  for (const tag of post.tags) {
    if (!nonEmpty(tag)) fail(`${label} contains an empty tag.`);
  }

  const tocIds = post.toc.map((item) => item.id);
  for (const id of findDuplicates(tocIds)) fail(`${label} has duplicate TOC id: ${id}`);

  const headingIds = post.body
    .filter((block) => block.type === "h2" || block.type === "h3")
    .map((block) => block.id)
    .filter((id): id is string => Boolean(id));

  for (const id of tocIds) {
    if (!headingIds.includes(id)) fail(`${label} TOC id has no matching heading: ${id}`);
  }

  for (const block of post.body) {
    if (block.type === "ul") {
      if (!block.items || block.items.length === 0) fail(`${label} contains an empty list block.`);
      continue;
    }
    if (block.type === "linkP") {
      if (!nonEmpty(block.linkText))
        fail(`${label} contains a link paragraph with no anchor text.`);
      if (!nonEmpty(block.href) || !/^(?:https:\/\/|\/)/.test(block.href))
        fail(`${label} contains a link paragraph with an invalid URL.`);
      continue;
    }
    if (block.type === "table") {
      if (!nonEmpty(block.caption)) fail(`${label} contains a table with no accessible caption.`);
      if (block.headers.length === 0 || block.headers.some((header) => !nonEmpty(header)))
        fail(`${label} contains a table with missing headers.`);
      if (
        block.rows.length === 0 ||
        block.rows.some(
          (row) => row.length !== block.headers.length || row.some((cell) => !nonEmpty(cell)),
        )
      )
        fail(`${label} contains an empty or uneven table row.`);
      continue;
    }
    if (!block.text || !nonEmpty(block.text))
      fail(`${label} contains an empty ${block.type} block.`);
  }
}

const promotionalSurfacePattern =
  /before\s*(?:&|and)\s*after|actually save money|chefs use|perfect for renters|under\s*(?:\$|100 dollars)|thrifted/i;
const retiredImagePattern = /(?:Decor|Sustainable|ZeroWaste)Pin\d|post-decor/i;

for (const sourcePost of posts) {
  const post = getPresentedPost(sourcePost);
  const label = `Presented post ${post.slug}`;
  const promotionalCopy = `${post.title} ${post.excerpt} ${post.imageAlt}`;

  if (promotionalSurfacePattern.test(promotionalCopy)) {
    fail(`${label} exposes an unsupported promotional title, excerpt, or image description.`);
  }

  if (retiredImagePattern.test(post.image)) {
    fail(`${label} exposes a retired promotional or watermarked image.`);
  }
}

const apartmentCompostingDecision = posts.find(
  (post) => post.slug === "choose-apartment-food-scrap-method",
);
if (!apartmentCompostingDecision) {
  fail("The apartment food-scrap method decision article is missing.");
} else {
  const decisionCopy = `${apartmentCompostingDecision.title} ${apartmentCompostingDecision.excerpt} ${JSON.stringify(apartmentCompostingDecision.body)}`;
  const prohibitedDecisionClaims = [
    /odor[- ]free|zero smell|no smell/i,
    /pest[- ]free|prevents? (?:fruit flies|pests?)/i,
    /(?:saves?|lower) (?:money|water|energy|bills?)/i,
    /environmentally preferable|better for the environment/i,
    /finished compost from (?:an )?(?:electric|countertop|food-scrap) appliance/i,
  ];
  for (const pattern of prohibitedDecisionClaims) {
    if (pattern.test(decisionCopy)) {
      fail(`Apartment food-scrap decision article has a prohibited claim: ${pattern}`);
    }
  }
  for (const required of [
    "temporary storage", "collection", "transportation or handoff", "active processing",
    "finished-compost handling", "appliance treatment", "no food-scrap system for now",
    "https://www.epa.gov/sustainable-management-food/approaches-composting",
    "https://www.epa.gov/recycle/composting-home",
    "https://extension.wsu.edu/kitsap/bokashi-composting/",
    "/blog/zero-waste-kitchen-ideas-tiny-apartments",
  ]) {
    if (!decisionCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Apartment food-scrap decision article is missing required boundary or source: ${required}`);
    }
  }
  const presentedDecision = getPresentedPost(apartmentCompostingDecision);
  if (
    presentedDecision.title !== apartmentCompostingDecision.title ||
    presentedDecision.excerpt !== apartmentCompostingDecision.excerpt ||
    presentedDecision.image !== apartmentCompostingDecision.image ||
    presentedDecision.imageAlt !== apartmentCompostingDecision.imageAlt
  ) {
    fail("Apartment food-scrap decision metadata must match the presented article and card.");
  }
}

const electricApplianceGuide = posts.find(
  (post) => post.slug === "electric-food-waste-appliances-apartments",
);
if (!electricApplianceGuide) {
  fail("The electric food-waste appliance guide is missing.");
} else {
  const applianceCopy = `${electricApplianceGuide.title} ${electricApplianceGuide.excerpt} ${JSON.stringify(electricApplianceGuide.body)}`;
  for (const pattern of [/best (?:appliance|product)/i, /odor[- ]free|zero smell/i, /pest[- ]free/i, /save money|save energy|save water/i, /environmentally preferable/i, /(?:produces?|creates?) finished compost/i]) {
    if (pattern.test(applianceCopy)) fail(`Electric appliance guide has a prohibited claim: ${pattern}`);
  }
  for (const required of ["do not buy", "output route", "filters", "warranty", "https://www.epa.gov/sustainable-management-food/approaches-composting", "https://lomi.com/pages/faq", "/blog/choose-apartment-food-scrap-method"]) {
    if (!applianceCopy.toLowerCase().includes(required.toLowerCase())) fail(`Electric appliance guide is missing required boundary or source: ${required}`);
  }
}

const budgetSwaps = posts.find((post) => post.slug === "zero-waste-kitchen-budget-9-swaps");
if (!budgetSwaps) {
  fail("The budget-swaps article is missing.");
} else {
  const budgetCopy = `${budgetSwaps.title} ${budgetSwaps.excerpt} ${JSON.stringify(budgetSwaps.body)}`;
  const repairedBudgetClaims = [
    /actually save money/i,
    /pays for itself quickly/i,
    /take out the trash less often/i,
    /toss expired items/i,
    /high[‑-]impact reusables/i,
    /savings on groceries and disposables/i,
    /let hot food cool slightly/i,
  ];
  for (const pattern of repairedBudgetClaims) {
    if (pattern.test(budgetCopy)) {
      fail(`The budget-swaps article reintroduces repaired claim ${pattern}.`);
    }
  }

  for (const requiredBoundary of [
    "https://www.epa.gov/recycle/preventing-wasted-food-home",
    "https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety",
    "https://www.fsis.usda.gov/guidelines/2019-0022",
    "https://www.energystar.gov/products/learn-about-led-lighting",
    "/blog/zero-waste-pantry-organization-small-apartments",
    "/blog/zero-waste-kitchen-ideas-tiny-apartments",
  ]) {
    if (!budgetCopy.includes(requiredBoundary)) {
      fail(
        `The budget-swaps article is missing required evidence or internal link ${requiredBoundary}.`,
      );
    }
  }

  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("ZeroWastePin1"))
    fail("The retired ZeroWastePin1 promotional asset is imported by the application.");
}

const kitchenHabits = posts.find((post) => post.slug === "low-waste-kitchen-tips-chef-habits");
if (!kitchenHabits) {
  fail("The low-waste kitchen habits article is missing.");
} else {
  const habitsCopy = `${kitchenHabits.title} ${kitchenHabits.excerpt} ${JSON.stringify(kitchenHabits.body)}`;
  const repairedHabitsClaims = [
    /chefs use/i,
    /chef[‑ -]inspired/i,
    /best low waste kitchen tips/i,
    /transfer perfectly/i,
    /extra meals and nutrients/i,
    /usually enough for most produce/i,
    /major source of plate waste/i,
    /transform any kitchen/i,
  ];
  for (const pattern of repairedHabitsClaims) {
    if (pattern.test(habitsCopy)) {
      fail(`The low-waste kitchen habits article reintroduces repaired claim ${pattern}.`);
    }
  }

  for (const requiredBoundary of [
    "https://www.fda.gov/consumers/consumer-updates/7-tips-cleaning-fruits-vegetables",
    "https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely",
    "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
    "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety",
    "https://www.epa.gov/sustainable-management-food/composting",
    "/blog/zero-waste-pantry-organization-small-apartments",
    "/blog/zero-waste-kitchen-ideas-tiny-apartments",
  ]) {
    if (!habitsCopy.includes(requiredBoundary)) {
      fail(
        `The low-waste kitchen habits article is missing required evidence or internal link ${requiredBoundary}.`,
      );
    }
  }

  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("ZeroWastePin2"))
    fail("The retired ZeroWastePin2 promotional asset is imported by the application.");
}

const ecoStepChecklist = posts.find(
  (post) => post.slug === "small-apartment-eco-upgrade-checklist",
);
if (!ecoStepChecklist) {
  fail("The small-apartment eco step checklist is missing.");
} else {
  const checklistCopy = `${ecoStepChecklist.title} ${ecoStepChecklist.excerpt} ${JSON.stringify(ecoStepChecklist.body)}`;
  const repairedChecklistClaims = [
    /under \$100/i,
    /renter[ -]safe(?:,| upgrades| command| ideas)/i,
    /no landlord permission/i,
    /every post you see costs/i,
    /vinegar and water handles most surfaces/i,
    /wool dryer balls last for years/i,
    /renter[ -]safe command hooks/i,
    /habits that stick/i,
  ];
  for (const pattern of repairedChecklistClaims) {
    if (pattern.test(checklistCopy)) {
      fail(`The eco step checklist reintroduces repaired claim ${pattern}.`);
    }
  }

  for (const requiredBoundary of [
    "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html",
    "https://www.epa.gov/greenerproducts/identifying-greener-cleaning-products",
    "/blog/zero-waste-kitchen-budget-9-swaps",
    "/blog/zero-waste-kitchen-ideas-tiny-apartments",
  ]) {
    if (!checklistCopy.includes(requiredBoundary)) {
      fail(
        `The eco step checklist is missing required evidence or internal link ${requiredBoundary}.`,
      );
    }
  }
}

const decorSourcing = posts.find(
  (post) => post.slug === "eco-friendly-small-apartment-decor-budget",
);
if (!decorSourcing) {
  fail("The small-apartment decor sourcing article is missing.");
} else {
  const decorCopy = `${decorSourcing.title} ${decorSourcing.excerpt} ${JSON.stringify(decorSourcing.body)}`;
  const repairedDecorClaims = [
    /framework I use/i,
    /estate sales beat thrift stores/i,
    /marketplace beats both/i,
    /unbeatable/i,
    /more than \$200 of new decor/i,
    /survive almost anything/i,
    /peel-and-stick everything/i,
    /renter[ -]safe(?:,| upgrades| command| ideas)/i,
  ];
  for (const pattern of repairedDecorClaims) {
    if (pattern.test(decorCopy)) {
      fail(`The decor sourcing article reintroduces repaired claim ${pattern}.`);
    }
  }

  for (const requiredBoundary of [
    "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants",
    "/blog/sustainable-small-apartment-decor-before-after",
    "/blog/small-apartment-eco-upgrade-checklist",
  ]) {
    if (!decorCopy.includes(requiredBoundary)) {
      fail(
        `The decor sourcing article is missing required evidence or internal link ${requiredBoundary}.`,
      );
    }
  }

  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("postDecor"))
    fail("The retired watermarked post-decor asset is imported by the application.");
}

const beginnerRenterChecklist = posts.find(
  (post) => post.slug === "beginner-sustainable-living-checklist-renters",
);
if (!beginnerRenterChecklist) {
  fail("The beginner renter checklist article is missing.");
} else {
  const beginnerCopy = `${beginnerRenterChecklist.title} ${beginnerRenterChecklist.excerpt} ${JSON.stringify(beginnerRenterChecklist.body)}`;
  const repairedBeginnerClaims = [
    /influencers with \$80 reusable everything/i,
    /the whole game/i,
    /start with five swaps/i,
    /a tote bag stashed in every coat pocket/i,
    /you can't install solar panels/i,
  ];
  for (const pattern of repairedBeginnerClaims) {
    if (pattern.test(beginnerCopy)) {
      fail(`The beginner renter checklist reintroduces repaired claim ${pattern}.`);
    }
  }

  const presentedBeginner = getPresentedPost(beginnerRenterChecklist);
  if (/hand marking|paper checklist|coffee mug/i.test(presentedBeginner.imageAlt)) {
    fail("The beginner renter checklist presentation exposes the retired false image alt.");
  }

  for (const requiredBoundary of [
    "/resources",
    "what you already own",
    "lease",
    "building rules",
    "local program guidance",
    "stop or adjust",
  ]) {
    if (!beginnerCopy.toLowerCase().includes(requiredBoundary.toLowerCase())) {
      fail(
        `The beginner renter checklist is missing required boundary or resource ${requiredBoundary}.`,
      );
    }
  }
}

const lowWasteLifestyle = posts.find(
  (post) => post.slug === "low-waste-lifestyle-tips-beginners",
);
if (!lowWasteLifestyle) {
  fail("The low-waste lifestyle practices article is missing.");
} else {
  const lowWasteCopy = `${lowWasteLifestyle.title} ${lowWasteLifestyle.excerpt} ${JSON.stringify(lowWasteLifestyle.body)}`;
  const repairedLowWasteClaims = [
    /start this week/i,
    /dramatically cut/i,
    /waste less and save more/i,
    /fraction of the price/i,
    /last just as long/i,
    /you(?:'|’)ll already be living a lower waste lifestyle/i,
    /big sources of household waste/i,
    /as they become habits/i,
  ];
  for (const pattern of repairedLowWasteClaims) {
    if (pattern.test(lowWasteCopy)) {
      fail(`The low-waste lifestyle article reintroduces repaired claim ${pattern}.`);
    }
  }

  const presentedLowWaste = getPresentedPost(lowWasteLifestyle);
  if (presentedLowWaste.image !== lowWasteLifestyle.image || presentedLowWaste.imageAlt !== lowWasteLifestyle.imageAlt) {
    fail("The low-waste lifestyle article presentation overrides its source image or alt pairing.");
  }
  if (presentedLowWaste.image.includes("SustainablePin3")) {
    fail("The retired SustainablePin3 promotional asset is still presented.");
  }

  for (const requiredBoundary of [
    "/blog/beginner-sustainable-living-checklist-renters",
    "/blog/zero-waste-kitchen-ideas-tiny-apartments",
    "/resources",
    "what you already own",
    "local",
    "stop",
  ]) {
    if (!lowWasteCopy.toLowerCase().includes(requiredBoundary.toLowerCase())) {
      fail(`The low-waste lifestyle article is missing required boundary or link ${requiredBoundary}.`);
    }
  }

  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("sustainablePin3")) {
    fail("The retired SustainablePin3 promotional asset is still imported by the application.");
  }
}

const easyHabits = posts.find((post) => post.slug === "easy-sustainable-habits-on-a-budget");
if (!easyHabits) {
  fail("Missing repaired easy-sustainable-habits-on-a-budget article");
} else {
  const easyCopy = `${easyHabits.title} ${easyHabits.excerpt} ${JSON.stringify(easyHabits.body)}`;
  const repairedEasyClaims = [
    /21 easy/i, /perfect for renters/i, /low-cost/i, /without wrecking your budget/i,
    /big wins/i, /cost little or nothing/i, /reduce your impact/i, /full loads/i,
    /line drying.*every time/i, /vampire/i, /better for your bank account/i,
    /better.*planet/i, /cheaper and more sustainable/i, /second nature/i,
  ];
  for (const pattern of repairedEasyClaims) {
    if (pattern.test(easyCopy)) fail(`Unsupported easy-habits claim remains: ${pattern}`);
  }
  const presentedEasy = getPresentedPost(easyHabits);
  if (presentedEasy.image !== easyHabits.image || presentedEasy.imageAlt !== easyHabits.imageAlt) {
    fail("Easy-habits source and presentation image metadata diverge");
  }
  if (easyCopy.includes("SustainablePin2")) fail("Retired SustainablePin2 asset remains in easy-habits content");
  const optionCount = easyHabits.body.filter((block) => block.type === "ul").flatMap((block) => block.items ?? []).length;
  if (optionCount !== 20) fail(`Expected 20 easy-habits options, found ${optionCount}`);
  for (const required of [
    "/blog/beginner-sustainable-living-checklist-renters", "/blog/zero-waste-kitchen-ideas-tiny-apartments",
    "/resources", "what you already own", "stop", "avoiding unnecessary spending",
  ]) {
    if (!easyCopy.includes(required)) fail(`Easy-habits repair is missing required guidance: ${required}`);
  }
  if (readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8").includes("sustainablePin2")) fail("Retired SustainablePin2 import/reference remains in posts.ts");
}

const apartmentSystems = posts.find((post) => post.slug === "sustainable-living-apartment-easy-habits");
if (!apartmentSystems) {
  fail("Missing repaired sustainable-living-apartment-easy-habits article");
} else {
  const apartmentCopy = `${apartmentSystems.title} ${apartmentSystems.excerpt} ${JSON.stringify(apartmentSystems.body)}`;
  const unsupportedApartmentClaims = [
    /save money/i, /utility bills/i, /low-cost/i, /affordable/i, /simple/i,
    /reduce waste/i, /reduce.*water/i, /reduce.*energy/i, /environmental footprint/i,
    /emissions/i, /calmer/i, /healthier/i, /stress/i, /productive/i, /second nature/i,
    /add up quickly/i, /overnight/i, /biggest footprint/i, /lasts? years longer/i,
  ];
  for (const pattern of unsupportedApartmentClaims) {
    if (pattern.test(apartmentCopy)) fail(`Unsupported apartment-systems claim remains: ${pattern}`);
  }
  const presentedApartment = getPresentedPost(apartmentSystems);
  if (presentedApartment.image !== apartmentSystems.image || presentedApartment.imageAlt !== apartmentSystems.imageAlt) {
    fail("Apartment-systems source and presentation image metadata diverge");
  }
  for (const required of [
    "Map the Decision First", "Renter-Controlled Routines", "Shared-Household Decisions",
    "Building and Utility Dependencies", "Local Services and Purchases", "landlord",
    "utility", "municipal", "manufacturer", "/blog/beginner-sustainable-living-checklist-renters",
    "/blog/easy-sustainable-habits-on-a-budget", "/blog/low-waste-lifestyle-tips-beginners",
  ]) {
    if (!apartmentCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Apartment-systems article is missing required boundary or link: ${required}`);
    }
  }
  if (apartmentSystems.title.includes("10") || apartmentSystems.title.toLowerCase().includes("habit")) {
    fail("Apartment-systems article still uses the former habit-list framing");
  }
  const apartmentSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (!apartmentSource.includes("image: apartmentImage")) fail("Apartment-systems source image was not aligned to apartmentImage");
}

const weekendReset = posts.find(
  (post) => post.slug === "eco-friendly-small-apartment-weekend-checklist",
);
if (!weekendReset) {
  fail("Missing repaired small-apartment reset checklist article.");
} else {
  const weekendCopy = `${weekendReset.title} ${weekendReset.excerpt} ${JSON.stringify(weekendReset.body)}`;
  const unsupportedWeekendClaims = [
    /eco friendly space/i,
    /lighter on the planet/i,
    /better air quality/i,
    /make the space feel larger/i,
    /save money|low-cost|affordable/i,
    /designed to be doable in a weekend/i,
    /complete every item/i,
    /dramatically shift/i,
  ];
  for (const pattern of unsupportedWeekendClaims) {
    if (pattern.test(weekendCopy)) fail(`Unsupported weekend-reset claim remains: ${pattern}`);
  }
  for (const required of [
    "one room",
    "reversible",
    "what you already have",
    "shared areas",
    "manufacturer",
    "landlord",
    "child",
    "pet",
    "allerg",
    "Completing the whole list is not the goal",
    "/blog/sustainable-tiny-living-room-layout-ideas",
    "/blog/sustainable-living-apartment-easy-habits",
  ]) {
    if (!weekendCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Weekend reset is missing required boundary or link: ${required}`);
    }
  }
  const presentedWeekend = getPresentedPost(weekendReset);
  if (presentedWeekend.title !== weekendReset.title || presentedWeekend.excerpt !== weekendReset.excerpt) {
    fail("Weekend reset source and presentation metadata diverge.");
  }
  if (presentedWeekend.image !== weekendReset.image || presentedWeekend.imageAlt !== weekendReset.imageAlt) {
    fail("Weekend reset source and presentation image metadata diverge.");
  }
  if (presentedWeekend.image.includes("DecorPin2")) {
    fail("Retired DecorPin2 promotional asset is still presented for the weekend reset.");
  }
  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("decorPin2")) {
    fail("Retired DecorPin2 asset is still imported by the application.");
  }
}

const livingRoomLayout = posts.find(
  (post) => post.slug === "sustainable-tiny-living-room-layout-ideas",
);
if (!livingRoomLayout) {
  fail("Missing repaired small living-room layout article.");
} else {
  const layoutCopy = `${livingRoomLayout.title} ${livingRoomLayout.excerpt} ${JSON.stringify(livingRoomLayout.body)}`;
  const unsupportedLayoutClaims = [
    /feel bigger|feels bigger|visually larger|make the space feel larger/i,
    /actually work|work well in most|most small living rooms/i,
    /(?:will|can|does|makes|helps)\s+(?:the\s+)?(?:room|space)\s+(?:feel|be)\s+(?:larger|calmer|more open|more productive)/i,
    /plants?\s+(?:improve|create|provide)\s+(?:better\s+)?air quality/i,
    /sustainable furniture.*expensive|sturdy|age well|often be repaired/i,
    /low-cost|save money|afford/i,
  ];
  for (const pattern of unsupportedLayoutClaims) {
    if (pattern.test(layoutCopy)) fail(`Unsupported living-room layout claim remains: ${pattern}`);
  }
  for (const required of [
    "measure",
    "fixed",
    "reversible",
    "paper",
    "tape",
    "path",
    "heater",
    "outlet",
    "manufacturer",
    "landlord",
    "child",
    "pet",
    "accessibility",
    "/blog/eco-friendly-small-apartment-weekend-checklist",
    "/blog/eco-friendly-small-apartment-decor-budget",
  ]) {
    if (!layoutCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Living-room layout is missing required boundary or link: ${required}`);
    }
  }
  const presentedLayout = getPresentedPost(livingRoomLayout);
  if (presentedLayout.title !== livingRoomLayout.title || presentedLayout.excerpt !== livingRoomLayout.excerpt) {
    fail("Living-room layout source and presentation metadata diverge.");
  }
  if (presentedLayout.image !== livingRoomLayout.image || presentedLayout.imageAlt !== livingRoomLayout.imageAlt) {
    fail("Living-room layout source and presentation image metadata diverge.");
  }
  if (presentedLayout.image.includes("DecorPin3")) {
    fail("Retired DecorPin3 promotional asset is still presented for the living-room layout.");
  }
  const postsSource = readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8");
  if (postsSource.includes("decorPin3")) {
    fail("Retired DecorPin3 asset is still imported by the application.");
  }
}

const illustrativeRoomReset = posts.find(
  (post) => post.slug === "sustainable-small-apartment-decor-before-after",
);
if (!illustrativeRoomReset) {
  fail("Missing illustrative small-apartment room-reset article.");
} else {
  const resetCopy = `${illustrativeRoomReset.title} ${illustrativeRoomReset.excerpt} ${JSON.stringify(illustrativeRoomReset.body)}`;
  const presentedReset = getPresentedPost(illustrativeRoomReset);
  const presentedCopy = `${presentedReset.title} ${presentedReset.excerpt} ${JSON.stringify(presentedReset.body)}`;
  for (const pattern of [
    /real before[- ]and[- ]after/i,
    /before[- ]and[- ]after transformation/i,
    /under \$300|hard budget/i,
    /This alone made the room feel 30% bigger|final result is a living room that feels larger|calm,? eco-conscious space/i,
    /final result|we (?:removed|replaced|turned|set|brought|hung)/i,
    /before-and-after photos/i,
  ]) {
    if (pattern.test(resetCopy) || pattern.test(presentedCopy)) {
      fail(`Unsupported documented-transformation framing remains: ${pattern}`);
    }
  }
  for (const required of [
    "illustrative",
    "not a documented",
    "imagery",
    "fixed",
    "household agreement",
    "landlord",
    "reversible",
    "do nothing",
    "/blog/sustainable-tiny-living-room-layout-ideas",
    "/blog/eco-friendly-small-apartment-weekend-checklist",
  ]) {
    if (!presentedCopy.toLowerCase().includes(required.toLowerCase()) && !resetCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Illustrative room reset is missing required disclosure, boundary, or link: ${required}`);
    }
  }
  if (presentedReset.title !== illustrativeRoomReset.title || presentedReset.excerpt !== illustrativeRoomReset.excerpt) {
    fail("Illustrative room reset source and presentation metadata diverge.");
  }
  if (presentedReset.image !== illustrativeRoomReset.image || presentedReset.imageAlt !== illustrativeRoomReset.imageAlt) {
    fail("Illustrative room reset source and presentation image metadata diverge.");
  }
  if (presentedReset.image.includes("DecorPin1")) {
    fail("Retired DecorPin1 promotional asset is still presented for the illustrative room reset.");
  }
  if (readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8").includes("decorPin1")) {
    fail("Retired DecorPin1 asset is still imported by the application.");
  }
}

const frictionArticle = posts.find((post) => post.slug === "why-life-feels-harder-than-it-needs-to-sometimes");
if (!frictionArticle) {
  fail("Missing repaired friction article");
} else {
  const frictionCopy = `${frictionArticle.title} ${frictionArticle.excerpt} ${JSON.stringify(frictionArticle.body)}`;
  const unsupportedFrictionClaims = [
    /daily stress/i, /calmer/i, /healthier/i, /lighter life/i, /make.*feel lighter/i,
    /help a better habit stick/i, /habit change.*last/i, /behavior change/i,
    /why we.?re confident/i, /easy to repeat/i, /tomorrow asks/i, /ten minutes/i,
  ];
  for (const pattern of unsupportedFrictionClaims) {
    if (pattern.test(frictionCopy)) fail(`Unsupported friction claim remains: ${pattern}`);
  }
  const presentedFriction = getPresentedPost(frictionArticle);
  if (presentedFriction.image !== frictionArticle.image || presentedFriction.imageAlt !== frictionArticle.imageAlt) {
    fail("Friction article source and presentation image metadata diverge");
  }
  for (const required of [
    "Notice Recurring Friction", "Describe the Extra Step", "Use Observation, Not Blame",
    "Test One Small Change", "keep, change, or stop", "access", "lease",
    "/blog/sustainable-living-apartment-easy-habits", "/blog/beginner-sustainable-living-checklist-renters",
  ]) {
    if (!frictionCopy.toLowerCase().includes(required.toLowerCase())) {
      fail(`Friction article is missing required bounded guidance or link: ${required}`);
    }
  }
  if (readFileSync(join(process.cwd(), "src/lib/posts.ts"), "utf8").includes("sustainablePin1")) {
    fail("Retired SustainablePin1 import/reference remains in posts.ts");
  }
}

const routeFiles = [
  "src/routes/index.tsx",
  "src/routes/blog.index.tsx",
  "src/routes/blog.$slug.tsx",
  "src/routes/category.$slug.tsx",
  "src/routes/about.tsx",
  "src/routes/contact.tsx",
  "src/routes/resources.tsx",
  "src/routes/editorial-policy.tsx",
  "src/routes/privacy.tsx",
  "src/routes/terms.tsx",
  "src/routes/affiliate-disclosure.tsx",
];

for (const routeFile of routeFiles) {
  const source = readFileSync(join(process.cwd(), routeFile), "utf8");
  const requiredMarkers = [
    'rel: "canonical"',
    'property: "og:url"',
    'name: "twitter:title"',
    'name: "twitter:description"',
  ];

  for (const marker of requiredMarkers) {
    if (!source.includes(marker)) fail(`${routeFile} is missing metadata marker ${marker}.`);
  }
}

const articleRoute = readFileSync(join(process.cwd(), "src/routes/blog.$slug.tsx"), "utf8");
for (const marker of [
  'property: "og:image"',
  'name: "twitter:image"',
  "mainEntityOfPage",
  "datePublished",
  "author",
  "publisher",
]) {
  if (!articleRoute.includes(marker)) fail(`Article route is missing ${marker}.`);
}

const routeTreeSource = readFileSync(join(process.cwd(), "src/routeTree.gen.ts"), "utf8");
const expectedRouteTreePaths = [
  "/",
  "/about",
  "/affiliate-disclosure",
  "/contact",
  "/editorial-policy",
  "/privacy",
  "/resources",
  "/sitemap.xml",
  "/terms",
  "/blog/",
  "/blog/$slug",
  "/category/$slug",
];
for (const routePath of expectedRouteTreePaths) {
  if (!routeTreeSource.includes(`'${routePath}'`)) {
    fail(`src/routeTree.gen.ts is missing expected route identity ${routePath}.`);
  }
}

const publicRoutes = new Set<string>([
  "/",
  "/about",
  "/affiliate-disclosure",
  "/contact",
  "/editorial-policy",
  "/privacy",
  "/resources",
  "/terms",
  "/blog",
  "/sitemap.xml",
  "/blog/$slug",
  "/category/$slug",
  ...posts.map((post) => `/blog/${post.slug}`),
  ...categories.map((category) => `/category/${category.slug}`),
]);

const sourceRoot = join(process.cwd(), "src");
const sourceFiles = collectSourceFiles(sourceRoot);
const internalLinkPattern = /(?:to|href)\s*(?:=|:)\s*["'](\/[^"'?#]*)/g;
let internalLinkCount = 0;

for (const absolutePath of sourceFiles) {
  const source = readFileSync(absolutePath, "utf8");
  const sourceFile = relative(process.cwd(), absolutePath);

  if (/href\s*=\s*["']#["']/.test(source)) {
    fail(`${sourceFile} contains a direct href="#" placeholder.`);
  }

  for (const match of source.matchAll(internalLinkPattern)) {
    const rawPath = match[1];
    const normalizedPath = normalizeInternalPath(rawPath);
    internalLinkCount += 1;

    if (publicRoutes.has(normalizedPath)) continue;
    if (existsSync(join(process.cwd(), "public", normalizedPath.slice(1)))) continue;

    fail(`${sourceFile} links to unknown internal path ${rawPath}.`);
  }
}

if (failures.length > 0) {
  console.error(
    `check:content FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`,
  );
  for (const failure of failures) console.error(`  x ${failure}`);
  process.exit(1);
}

console.log(
  `check:content PASSED — ${posts.length} posts and ${categories.length} categories validated; ` +
    `${routeFiles.length} public route types include required metadata; ` +
    `${expectedRouteTreePaths.length} generated route identities and ${internalLinkCount} literal internal links validated.`,
);
