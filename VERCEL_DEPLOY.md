# Deploying to Vercel

This project is configured for **static pre-rendering** — every page is built as a static HTML file. This gives you the fastest load times, best SEO, and zero serverless cold starts.

## Option 1: Connect GitHub repo to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repository.
4. In the project settings, use these values:
   - **Framework Preset**: `Other`
   - **Build Command**: `bun run build`
   - **Output Directory**: `dist/client`
5. Click **Deploy**.

Vercel will automatically rebuild and redeploy whenever you push changes to your repo.

## Option 2: Manual deploy with Vercel CLI

1. Install the Vercel CLI: `npm i -g vercel`
2. Build locally: `bun run build`
3. Deploy the static output:
   ```bash
   vercel --yes dist/client
   ```

## What changed for Vercel compatibility

- **`nitro.config.ts`**: Sets Nitro to `static` preset and lists all routes to pre-render at build time.
- **`public/sitemap.xml`**: A static sitemap file (replaces the dynamic server route).
- **`EmailOptIn.tsx`**: Uses a browser-safe JSONP call to Mailchimp instead of a server function. This means the email form works on any static host with no backend required.

## After adding a new blog post

1. Add the post to `src/lib/posts.ts` as usual.
2. Add the new route to `nitro.config.ts` under `prerender.routes`.
3. Add the post to `public/sitemap.xml`.
4. Push to GitHub — Vercel will rebuild automatically.
