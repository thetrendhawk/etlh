# Eco Tiny Living Hub

A sustainable living blog for renters in small apartments.

## Editing content (no code required for most updates)

All blog posts and categories live in **`src/lib/posts.ts`**.

### Add a new blog post

1. Open `src/lib/posts.ts`.
2. Drop a new image into `src/assets/` and import it at the top of the file:
   ```ts
   import myImage from "@/assets/my-image.jpg";
   ```
3. Add a new entry to the `posts` array. Copy an existing post as a template and fill in:
   - `slug` — URL slug (lowercase, hyphens), e.g. `"my-new-post"` → `/blog/my-new-post`
   - `title`, `excerpt`, `category` (must match a category slug below)
   - `date` (ISO format: `"2025-06-20"`)
   - `image`, `imageAlt`, `tags`
   - `toc` — table of contents entries (`id` must match an `id` on a heading in `body`)
   - `body` — array of content blocks: `p` (paragraph), `h2`, `h3`, `ul` (bullet list)

That's it. The post automatically appears on the homepage, blog index, and its category page.

### Edit a category

Edit the `categories` array in the same file. Slugs are part of the URL — change with care.

## Edit page text

- Home: `src/routes/index.tsx`
- Blog index: `src/routes/blog.index.tsx`
- Blog post template: `src/routes/blog.$slug.tsx`
- Category template: `src/routes/category.$slug.tsx`
- About: `src/routes/about.tsx`
- Resources: `src/routes/resources.tsx`
- Contact: `src/routes/contact.tsx`

## Edit the navigation, header, footer

- `src/components/SiteHeader.tsx`
- `src/components/SiteFooter.tsx`

## Connect the email opt-in to your email service

Open `src/components/EmailOptIn.tsx`. Find the `handleSubmit` function — there's a `// TODO` comment.
Replace it with an API call to your provider (ConvertKit, MailerLite, Beehiiv, etc.):

```ts
await fetch("https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ api_key: "YOUR_KEY", email, first_name: name }),
});
```

The contact form in `src/routes/contact.tsx` has the same TODO pattern.

## Design system

Colors and fonts are defined in `src/styles.css`. The palette:
- `earth-100` — background (warm off-white)
- `earth-900` — text (deep charcoal)
- `moss` — primary green accent
- `sand`, `clay` — warm secondary accents

## SEO

Every page has its own `title`, `description`, and Open Graph tags via the `head()`
function in its route file. The sitemap auto-includes all posts and categories.
