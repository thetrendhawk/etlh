import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

interface AssetRecord {
  path: string;
  bytes: number;
  ext: string;
}

const roots = [".output/public", "dist/client", "dist"].filter((root) => existsSync(root));

if (roots.length === 0) {
  throw new Error("No built client output found. Run bun run build first.");
}

const outputRoot = roots[0];
const files: AssetRecord[] = [];

function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
      continue;
    }

    files.push({
      path: relative(outputRoot, fullPath),
      bytes: stat.size,
      ext: extname(name).toLowerCase(),
    });
  }
}

walk(outputRoot);

const javascript = files
  .filter((file) => file.ext === ".js")
  .sort((a, b) => b.bytes - a.bytes);
const images = files
  .filter((file) => [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(file.ext))
  .sort((a, b) => b.bytes - a.bytes);

function totalBytes(items: AssetRecord[]) {
  return items.reduce((total, file) => total + file.bytes, 0);
}

function formatKiB(bytes: number) {
  return (bytes / 1024).toFixed(1);
}

function formatTable(items: AssetRecord[]) {
  return items
    .slice(0, 20)
    .map((file) => `| ${file.path} | ${formatKiB(file.bytes)} KiB |`)
    .join("\n");
}

const generatedAt = new Date().toISOString();
const report = `# ETLH build asset audit

Generated: ${generatedAt}
Output root: ${outputRoot}

## Largest JavaScript files

| File | Size |
|---|---:|
${formatTable(javascript)}

## Largest image files

| File | Size |
|---|---:|
${formatTable(images)}

## Totals

- JavaScript: ${formatKiB(totalBytes(javascript))} KiB across ${javascript.length} files
- Images: ${formatKiB(totalBytes(images))} KiB across ${images.length} files

This initial audit is report-only. Regression budgets must be based on the verified baseline rather than arbitrary thresholds.
`;

writeFileSync("build-asset-audit.md", report);
writeFileSync(
  "build-asset-audit.json",
  JSON.stringify(
    {
      generatedAt,
      outputRoot,
      totals: {
        javascriptBytes: totalBytes(javascript),
        imageBytes: totalBytes(images),
      },
      javascript,
      images,
    },
    null,
    2,
  ),
);

console.log(report);
