import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const roots = [".output/public", "dist/client", "dist"].filter(existsSync);
if (roots.length === 0) throw new Error("No built client output found. Run bun run build first.");

const files: { path: string; bytes: number; ext: string }[] = [];
function walk(root: string, dir = root) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(root, full);
    else files.push({ path: relative(root, full), bytes: stat.size, ext: extname(name).toLowerCase() });
  }
}
walk(roots[0]);

const js = files.filter((f) => f.ext === ".js").sort((a, b) => b.bytes - a.bytes);
const images = files
  .filter((f) => [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(f.ext))
  .sort((a, b) => b.bytes - a.bytes);
const kb = (n: number) => (n / 1024).toFixed(1);
const table = (items: typeof files) =>
  items
    .slice(0, 20)
    .map((f) => `| ${f.path} | ${kb(f.bytes)} KiB |`)
    .join("\n");
const total = (items: typeof files) => items.reduce((sum, file) => sum + file.bytes, 0);

const report = `# ETLH build asset audit

Generated: ${new Date().toISOString()}
Output root: ${roots[0]}

## Largest JavaScript files

| File | Size |
|---|---:|
${table(js)}

## Largest image files

| File | Size |
|---|---:|
${table(images)}

## Totals

- JavaScript: ${kb(total(js))} KiB across ${js.length} files
- Images: ${kb(total(images))} KiB across ${images.length} files

This initial audit is report-only. Regression budgets must be based on the verified baseline rather than arbitrary thresholds.
`;

writeFileSync("build-asset-audit.md", report);
writeFileSync(
  "build-asset-audit.json",
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      outputRoot: roots[0],
      totals: { javascriptBytes: total(js), imageBytes: total(images) },
      javascript: js,
      images,
    },
    null,
    2,
  ),
);
console.log(report);