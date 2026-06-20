# Deploying to Vercel

This project is configured for **Vercel SSR deployment** using the `vercel` Nitro preset. Every page is server-rendered for optimal SEO, while static assets are cached at the edge.

## Option 1: Connect GitHub repo to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repository.
4. In the project settings, use these values:
   - **Framework Preset**: `Other`
   - **Build Command**: `bun run build`
   - **Output Directory**: *leave empty* — the `vercel` preset writes to `.vercel/output/` automatically
5. Click **Deploy**.

Vercel will automatically rebuild and redeploy whenever you push changes to your repo.

## Option 2: Manual deploy with Vercel CLI

1. Install the Vercel CLI: `npm i -g vercel`
2. Build locally: `bun run build`
3. Deploy the prebuilt output:
   ```bash
   vercel --prebuilt
   ```
   This uploads the `.vercel/output/` directory that the build generated.

## What changed for Vercel compatibility

- **`vite.config.ts`**: Added `nitro: { preset: "vercel" }` so the build produces Vercel's serverless-function format in `.vercel/output/`.
- **`EmailOptIn.tsx`**: Uses a browser-safe JSONP call to Mailchimp instead of a server function. This makes the email form work reliably across any host with no backend required.
- **`public/sitemap.xml`**: A static sitemap file for search engines.

## Build output locations

| Environment | Output directory | Format |
|------------|------------------|--------|
| Lovable sandbox | `dist/` | Cloudflare Worker |
| Local / Vercel | `.vercel/output/` | Vercel serverless |

The Lovable preview uses the Cloudflare format. Your Vercel site uses the Vercel format — both work from the same codebase.
