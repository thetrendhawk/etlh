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

requireMarkers("src/styles.css", [
  ":where(a, button, input, select, textarea, summary, [tabindex]):focus-visible",
  "outline: 3px solid var(--ring)",
  "outline-offset: 3px",
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
  `check:accessibility PASSED — skip navigation, mobile-menu semantics, language, focus target, visible focus, email-form status, and keyboard-order safeguards validated across ${sourceFiles.length} source files.`,
);
