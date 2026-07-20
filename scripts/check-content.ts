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
