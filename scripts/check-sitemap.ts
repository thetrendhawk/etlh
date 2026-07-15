/**
 * Deterministic sitemap integrity check for ETLH.
 * Run from the repository root: bun run check:sitemap
 *
 * Fails (exit 1) when:
 * - a second sitemap source exists (any sitemap*.xml in public/)
 * - output differs across identical runs
 * - the XML wrapper is malformed
 * - any <loc> is relative or uses a non-production origin
 * - duplicate URLs exist
 * - any expected page, category, or post URL is missing
 * - unexpected (placeholder/preview/test/utility) URLs appear
 * - robots.txt does not declare the production sitemap URL
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { buildSitemapXml, SITE_ORIGIN } from "../src/lib/sitemap";
import { categories, posts } from "../src/lib/posts";

const failures: string[] = [];
const fail = (msg: string) => failures.push(msg);

// 1. Single authoritative source: no static sitemap may exist in public/.
const publicDir = join(process.cwd(), "public");
const staticSitemaps = existsSync(publicDir)
  ? readdirSync(publicDir).filter((f) => /^sitemap.*\.xml$/i.test(f))
  : [];
if (staticSitemaps.length > 0) {
  fail(
    `Static sitemap file(s) found in public/: ${staticSitemaps.join(", ")} — ` +
      `the dynamic /sitemap.xml route is the only authoritative source and ` +
      `a static file silently shadows it on Vercel.`,
  );
}

// 2. Determinism: two runs must produce identical output.
const xml = buildSitemapXml();
const xml2 = buildSitemapXml();
if (xml !== xml2) fail("Sitemap output differs across identical runs (non-deterministic).");

// 3. XML wrapper sanity.
if (!xml.startsWith(`<?xml version="1.0" encoding="UTF-8"?>`)) fail("Missing XML declaration.");
if (!xml.includes(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)) {
  fail("Missing urlset element or sitemap namespace.");
}
if (!xml.trimEnd().endsWith("</urlset>")) fail("urlset element is not closed.");
const openUrlCount = (xml.match(/<url>/g) ?? []).length;
const closeUrlCount = (xml.match(/<\/url>/g) ?? []).length;
if (openUrlCount !== closeUrlCount) {
  fail(`Unbalanced <url> elements: ${openUrlCount} open vs ${closeUrlCount} close.`);
}

// 4. Extract <loc> values.
const locs = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
if (locs.length !== openUrlCount) {
  fail(`Expected one <loc> per <url>: found ${locs.length} locs for ${openUrlCount} urls.`);
}

// 5. Every <loc> must be absolute on the production HTTPS origin.
for (const loc of locs) {
  if (!loc.startsWith(`${SITE_ORIGIN}/`)) fail(`Relative or non-production <loc>: ${loc}`);
}

// 6. No duplicates.
const seen = new Set<string>();
for (const loc of locs) {
  if (seen.has(loc)) fail(`Duplicate <loc>: ${loc}`);
  seen.add(loc);
}

// 7. Exact inventory parity with the content source (both directions).
const expected = new Set<string>([
  `${SITE_ORIGIN}/`,
  `${SITE_ORIGIN}/blog`,
  `${SITE_ORIGIN}/about`,
  `${SITE_ORIGIN}/resources`,
  `${SITE_ORIGIN}/contact`,
  ...categories.map((c) => `${SITE_ORIGIN}/category/${c.slug}`),
  ...posts.map((p) => `${SITE_ORIGIN}/blog/${p.slug}`),
]);
for (const url of expected) {
  if (!seen.has(url)) fail(`Missing expected URL: ${url}`);
}
for (const loc of locs) {
  if (!expected.has(loc)) fail(`Unexpected URL in sitemap: ${loc}`);
}

// 8. Guard against placeholder, preview, test, or utility URLs.
const denylist = /(localhost|127\.0\.0\.1|\.vercel\.app|placeholder|preview|staging|\btest\b)/i;
for (const loc of locs) {
  if (denylist.test(loc)) fail(`Placeholder/preview/test URL in sitemap: ${loc}`);
}

// 9. URLs explicitly required by the Slice 1 authorization.
const cornerstone = `${SITE_ORIGIN}/blog/why-life-feels-harder-than-it-needs-to-sometimes`;
if (!seen.has(cornerstone)) fail(`Cornerstone article missing: ${cornerstone}`);
const intentionalLiving = `${SITE_ORIGIN}/category/intentional-living`;
if (!seen.has(intentionalLiving)) fail(`Category missing: ${intentionalLiving}`);

// 10. robots.txt must declare the production sitemap.
const robotsPath = join(publicDir, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("public/robots.txt not found.");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  if (!robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`)) {
    fail(`public/robots.txt is missing the line: Sitemap: ${SITE_ORIGIN}/sitemap.xml`);
  }
}

if (failures.length > 0) {
  console.error(
    `check:sitemap FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`,
  );
  for (const f of failures) console.error(`  x ${f}`);
  process.exit(1);
}

console.log(
  `check:sitemap PASSED — ${locs.length} URLs, all absolute on ${SITE_ORIGIN}, ` +
    `no duplicates, inventory matches the content source, robots.txt declares the sitemap.`,
);
