import { readFileSync } from "node:fs";
import { join } from "node:path";

import { categories, posts } from "../src/lib/posts";

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
  if (!categorySlugs.has(post.category)) fail(`${label} references unknown category ${post.category}.`);
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
    if (!block.text || !nonEmpty(block.text)) fail(`${label} contains an empty ${block.type} block.`);
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
]) {
  if (!articleRoute.includes(marker)) fail(`Article route is missing ${marker}.`);
}

const sourceFilesToCheckForDeadLinks = [
  "src/components/SiteFooter.tsx",
  ...routeFiles,
];
for (const sourceFile of sourceFilesToCheckForDeadLinks) {
  const source = readFileSync(join(process.cwd(), sourceFile), "utf8");
  if (/href\s*=\s*["']#["']/.test(source)) fail(`${sourceFile} contains a direct href="#" placeholder.`);
}

if (failures.length > 0) {
  console.error(`check:content FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`);
  for (const failure of failures) console.error(`  x ${failure}`);
  process.exit(1);
}

console.log(
  `check:content PASSED — ${posts.length} posts and ${categories.length} categories validated; ` +
    `${routeFiles.length} public route types include required metadata; no direct placeholder links found.`,
);
