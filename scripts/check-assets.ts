import { readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ASSET_ROOT = join(process.cwd(), "src", "assets");
const IMAGE_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);
const MAX_IMAGE_BYTES = 400 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 3 * 1024 * 1024;

interface AssetRecord {
  path: string;
  bytes: number;
}

function collectImages(directory: string): AssetRecord[] {
  const assets: AssetRecord[] = [];

  for (const entry of readdirSync(directory)) {
    const absolutePath = join(directory, entry);
    const stats = statSync(absolutePath);

    if (stats.isDirectory()) {
      assets.push(...collectImages(absolutePath));
      continue;
    }

    if (!IMAGE_EXTENSIONS.has(extname(entry).toLowerCase())) continue;

    assets.push({
      path: relative(process.cwd(), absolutePath),
      bytes: stats.size,
    });
  }

  return assets;
}

const images = collectImages(ASSET_ROOT).sort((a, b) => b.bytes - a.bytes);
const totalBytes = images.reduce((sum, image) => sum + image.bytes, 0);
const oversized = images.filter((image) => image.bytes > MAX_IMAGE_BYTES);

console.log("Image asset inventory:");
for (const image of images) {
  console.log(`  ${(image.bytes / 1024).toFixed(1).padStart(7)} KiB  ${image.path}`);
}
console.log(
  `Total: ${images.length} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MiB ` +
    `(budget ${(MAX_TOTAL_IMAGE_BYTES / 1024 / 1024).toFixed(2)} MiB).`,
);

const failures: string[] = [];
for (const image of oversized) {
  failures.push(
    `${image.path} is ${(image.bytes / 1024).toFixed(1)} KiB; ` +
      `individual image budget is ${MAX_IMAGE_BYTES / 1024} KiB.`,
  );
}
if (totalBytes > MAX_TOTAL_IMAGE_BYTES) {
  failures.push(
    `Image assets total ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; ` +
      `budget is ${(MAX_TOTAL_IMAGE_BYTES / 1024 / 1024).toFixed(2)} MiB.`,
  );
}

if (failures.length > 0) {
  console.error(`check:assets FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):`);
  for (const failure of failures) console.error(`  x ${failure}`);
  process.exit(1);
}

console.log("check:assets PASSED — all image assets remain within individual and total budgets.");
