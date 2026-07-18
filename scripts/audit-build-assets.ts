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
const images = files.filter((f) => [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(f.ext)).sort((a, b) => b.bytes - a.bytes);
const kb = (n: number) => (n / 1024).toFixed(1);
const table = (items: typeof files) => items.slice(0, 20).map((f) => `| ${f.path} | ${kb(f.bytes)} KiB |`).join("\n");
const report = `# ETLH build asset audit\n\nGenerated: ${new Date().toISOString()}\n\n## Largest JavaScript files\n\n| File | Size |\n|---|---:|\n${table(js)}\n\n## Largest image files\n\n| File | Size |\n|---|---:|\n${table(images)}\n\n## Totals\n\n- JavaScript: ${kb(js.reduce((s, f) => s + f.bytes, 0))} KiB across ${js.length} files\n- Images: ${kb(images.reduce((s, f) => s + f.bytes, 0))} KiB across ${images.length} files\n`;
writeFileSync("build-asset-audit.md", report);
console.log(report);

const oversizedJs = js.filter((f) => f.bytes > 300 * 1024);
const oversizedImages = images.filter((f) => f.bytes > 1800 * 1024);
if (oversizedJs.length || oversizedImages.length) {
  throw new Error(`Build budget exceeded: ${oversizedJs.length} JS file(s) over 300 KiB; ${oversizedImages.length} image(s) over 1.8 MiB.`);
}
