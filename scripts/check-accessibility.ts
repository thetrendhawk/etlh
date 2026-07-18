import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);

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

function requireMarkers(path: string, markers: string[]): void {
  const source = readFileSync(join(process.cwd(), path), "utf8");
  for (const marker of markers) {
    if (!source.includes(marker)) fail(`${path} is missing accessibility marker: ${marker}`);
  }
}

requireMarkers("src/routes/__root.tsx", [
  'href="#site-content"',
  "Skip to main content",
  'id="site-content"',
  "tabIndex={-1}",
  '<html lang="en">',
]);

requireMarkers("src/components/SiteHeader.tsx", [
  'aria-label="Primary navigation"',
  "aria-expanded={open}",
  "aria-controls={mobileMenuId}",
  "id={mobileMenuId}",
  '"aria-current": "page"',
  'type="button"',
  "menuButtonRef",
  "mobileMenuRef",
  'event.key !== "Escape"',
  'querySelector<HTMLElement>("a")?.focus()',
  "menuButtonRef.current?.focus()",
]);

requireMarkers("src/components/EmailOptIn.tsx", [
  "useId()",
  "aria-busy={loading}",
  "aria-invalid={hasError}",
  "aria-describedby={message ? statusId : undefined}",
  'role={hasError ? "alert" : "status"}',
  'aria-live={hasError ? "assertive" : "polite"}',
  'setMessage("Sending your request…")',
]);

requireMarkers("src/components/AnalyticsConsent.tsx", [
  'const PRODUCTION_HOSTNAME = "ecotinylivinghub.com"',
  'role="dialog"',
  'aria-labelledby="analytics-consent-title"',
  'aria-describedby="analytics-consent-description"',
  'id="analytics-consent-description"',
]);

const consentSource = readFileSync(
  join(process.cwd(), "src/components/AnalyticsConsent.tsx"),
  "utf8",
);
if (consentSource.includes('aria-modal="true"')) {
  fail(
    "src/components/AnalyticsConsent.tsx marks the non-blocking consent banner as modal without trapping focus.",
  );
}
if (consentSource.includes("ecotinylivinghub.thrwds.com")) {
  fail("src/components/AnalyticsConsent.tsx still restricts analytics to the legacy hostname.");
}

requireMarkers("src/styles.css", [
  ":where(a, button, input, select, textarea, summary, [tabindex]):focus-visible",
  "outline: 3px solid var(--ring)",
  "outline-offset: 3px",
  "@media (prefers-reduced-motion: reduce)",
  "animation-duration: 0.01ms !important",
  "animation-iteration-count: 1 !important",
  "transition-duration: 0.01ms !important",
  "scroll-behavior: auto !important",
]);

const sourceFiles = collectSourceFiles(join(process.cwd(), "src"));
for (const absolutePath of sourceFiles) {
  const source = readFileSync(absolutePath, "utf8");
  const sourceFile = relative(process.cwd(), absolutePath);

  for (const match of source.matchAll(/tabIndex\s*=\s*[{"']\s*([1-9]\d*)/g)) {
    fail(`${sourceFile} uses positive tabIndex ${match[1]}; preserve natural keyboard order.`);
  }

  if (/<(?:div|span)[^>]*\bonClick\s*=/.test(source)) {
    fail(`${sourceFile} attaches onClick to a non-interactive div or span.`);
  }
}

if (failures.length > 0) {
  console.error(
    `check:accessibility FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`,
  );
  for (const failure of failures) console.error(`  x ${failure}`);
  process.exit(1);
}

console.log(
  `check:accessibility PASSED — skip navigation, mobile-menu semantics and keyboard focus management, language, focus target, visible focus, reduced motion, email-form status, consent semantics, production analytics hostname, and keyboard-order safeguards validated across ${sourceFiles.length} source files.`,
);
