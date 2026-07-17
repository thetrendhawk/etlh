const PRODUCTION_ORIGIN = "https://ecotinylivinghub.thrwds.com";
const HTTP_ORIGIN = "http://ecotinylivinghub.thrwds.com";
const VERCEL_ALIAS = "https://eco-tiny-living-site.vercel.app";

const failures: string[] = [];
const passed: string[] = [];

function fail(message: string) {
  failures.push(message);
  console.error(`x ${message}`);
}

function pass(message: string) {
  passed.push(message);
  console.log(`✓ ${message}`);
}

async function request(url: string, init: RequestInit = {}): Promise<Response | null> {
  try {
    return await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
      headers: {
        "user-agent": "ETLH-production-smoke-check/1.0",
        ...(init.headers ?? {}),
      },
      ...init,
    });
  } catch (error) {
    fail(`${url} request failed: ${error instanceof Error ? error.message : String(error)}`);
    return null;
  }
}

async function expectStatus(path: string, expectedStatus: number) {
  const url = `${PRODUCTION_ORIGIN}${path}`;
  const response = await request(url);
  if (!response) return;

  if (response.status !== expectedStatus) {
    fail(`${url} returned ${response.status}; expected ${expectedStatus}.`);
    return;
  }

  pass(`${path} returned ${expectedStatus}`);
}

async function expectHtml(path: string, marker: string) {
  const url = `${PRODUCTION_ORIGIN}${path}`;
  const response = await request(url, { redirect: "follow" });
  if (!response) return;

  if (response.status !== 200) {
    fail(`${url} returned ${response.status}; expected 200.`);
    return;
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) {
    fail(`${url} returned content-type ${contentType || "missing"}; expected text/html.`);
    return;
  }

  const body = await response.text();
  if (!body.includes(marker)) {
    fail(`${url} did not include expected marker: ${marker}`);
    return;
  }

  pass(`${path} returned HTML with expected content`);
}

async function expectRedirect(url: string, expectedLocation: string) {
  const response = await request(url);
  if (!response) return;

  if (![301, 302, 307, 308].includes(response.status)) {
    fail(`${url} returned ${response.status}; expected a permanent or temporary redirect.`);
    return;
  }

  const location = response.headers.get("location");
  if (location !== expectedLocation) {
    fail(`${url} redirected to ${location ?? "nowhere"}; expected ${expectedLocation}.`);
    return;
  }

  pass(`${url} redirects to the preferred host`);
}

async function checkSitemap() {
  const url = `${PRODUCTION_ORIGIN}/sitemap.xml`;
  const response = await request(url, { redirect: "follow" });
  if (!response) return;

  if (response.status !== 200) {
    fail(`${url} returned ${response.status}; expected 200.`);
    return;
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("xml")) {
    fail(`${url} returned content-type ${contentType || "missing"}; expected XML.`);
    return;
  }

  const body = await response.text();
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const required = [
    `${PRODUCTION_ORIGIN}/`,
    `${PRODUCTION_ORIGIN}/privacy`,
    `${PRODUCTION_ORIGIN}/terms`,
    `${PRODUCTION_ORIGIN}/affiliate-disclosure`,
  ];

  for (const requiredUrl of required) {
    if (!locations.includes(requiredUrl)) fail(`Sitemap is missing ${requiredUrl}.`);
  }

  if (new Set(locations).size !== locations.length) fail("Sitemap contains duplicate URLs.");
  if (locations.some((location) => !location.startsWith(`${PRODUCTION_ORIGIN}/`))) {
    fail("Sitemap contains a URL outside the preferred production origin.");
  }

  if (!failures.some((failure) => failure.startsWith("Sitemap"))) {
    pass(`sitemap.xml contains ${locations.length} unique preferred-host URLs`);
  }
}

await Promise.all([
  expectHtml("/", "Eco Tiny Living Hub"),
  expectHtml("/privacy", "Privacy Policy"),
  expectHtml("/terms", "Terms of Use"),
  expectHtml("/affiliate-disclosure", "Affiliate Disclosure"),
  expectStatus("/this-route-must-not-exist-etlh-smoke", 404),
  expectRedirect(`${HTTP_ORIGIN}/privacy?source=smoke`, `${PRODUCTION_ORIGIN}/privacy?source=smoke`),
  expectRedirect(`${VERCEL_ALIAS}/terms?source=smoke`, `${PRODUCTION_ORIGIN}/terms?source=smoke`),
  checkSitemap(),
]);

if (failures.length > 0) {
  console.error(`\nProduction smoke checks FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}).`);
  process.exit(1);
}

console.log(`\nProduction smoke checks PASSED (${passed.length} checks).`);
