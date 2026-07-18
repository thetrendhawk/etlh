import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

import { categories, posts } from "../src/lib/posts";
import { getSitemapEntries, SITE_ORIGIN } from "../src/lib/sitemap";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);
const routesDirectory = join(process.cwd(), "src", "routes");
const routeTreeSource = readFileSync(
  join(process.cwd(), "src", "routeTree.gen.ts"),
  "utf8",
);

function normalizeRoutePath(path: string): string {
  return path === "/" ? path : path.replace(/\/$/, "");
}

function routePathFromFilename(filename: string): string | null {
  if (!filename.endsWith(".tsx") && !filename.endsWith(".ts")) return null;
  if (filename === "__root.tsx") return null;

  const stem = filename.replace(/\.(tsx|ts)$/, "");
  if (stem === "index") return "/";
  if (stem === "blog.index") return "/blog";
  if (stem === "sitemap[.]xml") return "/sitemap.xml";

  return `/${stem.replaceAll(".", "/")}`;
}

const routeFiles = readdirSync(routesDirectory).filter((filename) =>
  /\.(ts|tsx)$/.test(filename),
);
const fileRoutePaths = routeFiles
  .map(routePathFromFilename)
  .filter((path): path is string => path !== null)
  .map(normalizeRoutePath)
  .sort();

for (const routePath of fileRoutePaths) {
  const quotedIdentity = `'${routePath}'`;
  const quotedSlashIdentity = `'${routePath}/'`;
  if (
    !routeTreeSource.includes(quotedIdentity) &&
    !routeTreeSource.includes(quotedSlashIdentity)
  ) {
    fail(`src/routeTree.gen.ts is missing route-file identity ${routePath}.`);
  }
}

const routeTreePathMatches = [
  ...routeTreeSource.matchAll(/path:\s*'([^']+)'/g),
].map((match) => normalizeRoutePath(match[1]));
const expectedRouteTreePaths = new Set(fileRoutePaths);
for (const generatedPath of routeTreePathMatches) {
  if (!expectedRouteTreePaths.has(generatedPath)) {
    fail(
      `src/routeTree.gen.ts contains generated path ${generatedPath} without a matching route file.`,
    );
  }
}

const indexableStaticRoutes = fileRoutePaths.filter(
  (path) => path !== "/sitemap.xml" && !path.includes("$"),
);
const expectedSitemapPaths = new Set([
  ...indexableStaticRoutes,
  ...categories.map((category) => `/category/${category.slug}`),
  ...posts.map((post) => `/blog/${post.slug}`),
]);
const actualSitemapPaths = new Set(
  getSitemapEntries().map((entry) => {
    if (!entry.loc.startsWith(SITE_ORIGIN)) {
      fail(`Sitemap entry uses an unexpected origin: ${entry.loc}`);
      return entry.loc;
    }
    return normalizeRoutePath(entry.loc.slice(SITE_ORIGIN.length) || "/");
  }),
);

for (const expectedPath of expectedSitemapPaths) {
  if (!actualSitemapPaths.has(expectedPath)) {
    fail(`Sitemap is missing public route ${expectedPath}.`);
  }
}
for (const actualPath of actualSitemapPaths) {
  if (!expectedSitemapPaths.has(actualPath)) {
    fail(`Sitemap contains route without public content parity: ${actualPath}.`);
  }
}

const duplicateRouteFiles = routeFiles
  .map((filename) => ({ filename, routePath: routePathFromFilename(filename) }))
  .filter(
    (record): record is { filename: string; routePath: string } =>
      record.routePath !== null,
  )
  .map((record) => ({
    ...record,
    routePath: normalizeRoutePath(record.routePath),
  }))
  .filter(
    (record, index, records) =>
      records.findIndex((item) => item.routePath === record.routePath) !== index,
  );
for (const duplicate of duplicateRouteFiles) {
  fail(`Route file ${duplicate.filename} duplicates public path ${duplicate.routePath}.`);
}

if (failures.length > 0) {
  console.error(
    `check:routes FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`,
  );
  for (const failure of failures) console.error(`  x ${failure}`);
  process.exit(1);
}

console.log(
  `check:routes PASSED — ${fileRoutePaths.length} route files match the generated route tree; ` +
    `${actualSitemapPaths.size} indexable URLs match route and content inventory.`,
);
