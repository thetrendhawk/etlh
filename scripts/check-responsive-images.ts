import { readFileSync } from "node:fs";

const homepage = readFileSync("src/routes/index.tsx", "utf8");
const postCard = readFileSync("src/components/PostCard.tsx", "utf8");
const imageUtility = readFileSync("src/lib/image.ts", "utf8");
const vercelConfig = readFileSync("vercel.json", "utf8");

const requiredSnippets = [
  [homepage, "srcSet={vercelImageSrcSet(heroImg, heroWidths, 75)}"],
  [homepage, 'sizes="(min-width: 768px) 50vw, calc(100vw - 3rem)"'],
  [homepage, "srcSet={vercelImageSrcSet(categoryImage, categoryWidths, 75)}"],
  [postCard, "srcSet={vercelImageSrcSet(post.image, postCardWidths, 75)}"],
  [imageUtility, "/_vercel/image?url="],
  [vercelConfig, '"localPatterns": [{ "pathname": "^/assets/.*$", "search": "" }]'],
  [vercelConfig, '"formats": ["image/webp"]'],
];

const missing = requiredSnippets.filter(([content, snippet]) => !content.includes(snippet));

if (missing.length > 0) {
  throw new Error(`Responsive image checks failed: ${missing.length} required configuration item(s) missing.`);
}

console.log("Responsive image source and Vercel configuration checks passed.");
