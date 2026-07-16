# ETLH Publishing Workflow

## Status

Canonical repository workflow for publishing and updating website articles.

## Purpose

This document explains how ETLH website content currently moves from an approved topic into the live TanStack Start application. It describes the existing TypeScript-based system as it works today. It does not propose a CMS or a new content architecture.

## Source of Truth

The current website article source is:

- `src/lib/posts.ts` for categories, article metadata, table-of-contents entries, and article body blocks
- `src/assets/` for article and social images imported by `src/lib/posts.ts`
- `src/routes/blog.$slug.tsx` for article rendering, metadata, and Article structured data
- `src/lib/sitemap.ts` and `src/routes/sitemap[.]xml.ts` for sitemap output

A planning document, social package, or draft file does not publish an article by itself. The article becomes part of the website only when it is represented correctly in the application source and passes the required validation.

## Required Tools

- Git
- Bun
- Access to the `thetrendhawk/etlh` repository
- GitHub Actions for required CI validation
- Vercel access for preview and production verification when the account permits new builds

## Standard Commands

Install dependencies from the committed lockfile:

```bash
bun install --frozen-lockfile
```

Run the full required repository gate:

```bash
bun run check:ci
```

The current `check:ci` command runs:

```bash
bun run lint && bun run check:sitemap && bun run check:content && bun run build
```

Formatting is intentionally separate from lint:

```bash
bun run format
```

Do not run a repository-wide formatting pass as part of an unrelated article change.

## Article Data Shape

Every article in `src/lib/posts.ts` must provide:

- `slug`
- `title`
- `excerpt`
- `category`
- `date`
- `readingTime`
- `image`
- `imageAlt`
- `tags`
- `toc`
- `body`

The article body supports these block types:

- `p`
- `h2`
- `h3`
- `ul`

Heading blocks may include an `id`. List blocks use `items`. Other blocks use `text`.

## Category Requirements

An article category must already exist in the exported `categories` array in `src/lib/posts.ts`.

Every category requires:

- a unique lowercase hyphenated `slug`
- `name`
- `shortName`
- `intro`

Do not invent a new category during article implementation unless the category decision is separately approved.

## Slug Rules

Article and category slugs must:

- use lowercase letters and numbers
- separate words with single hyphens
- contain no spaces, underscores, uppercase characters, or punctuation
- remain unique across their respective collections

Changing a published slug changes the public URL. Treat that as a URL migration, not a routine copy edit.

## Publication-Date Rules

Use a verified date in `YYYY-MM-DD` format.

Do not infer a publication date from file timestamps, draft creation, image generation, or conversation dates unless that evidence has been explicitly accepted as the publication date.

The verified source date must be stored directly in `src/lib/posts.ts`. Do not add a second override layer for publication dates. If a legacy date is unsupported, correct the source record only after the replacement date has been explicitly verified.

## Image Workflow

1. Add the approved image to `src/assets/`.
2. Use a clear, durable filename.
3. Import it at the top of `src/lib/posts.ts`.
4. Assign the imported value to the article's `image` field.
5. Provide specific, useful `imageAlt` text.

Do not place readable placeholder text, unsupported logos, or misleading visual claims into article imagery.

Large PNG files should be reviewed before use. Image optimization remains a separate performance workstream and should not be mixed into a routine article PR unless explicitly scoped.

## Table of Contents

The `toc` array controls article navigation.

For each TOC item:

- `id` must be unique within the article
- `id` must match an `h2` or `h3` block ID in the body
- `label` should accurately describe the linked section

The validator confirms that each TOC ID has a matching heading. It does not replace editorial review of label quality or section order.

## Article Implementation Procedure

### 1. Confirm the content is approved

Before changing website code, confirm that the article topic, claims, wording, evidence, and publication intent have completed the appropriate editorial and research review.

Use:

- `docs/02_Editorial_Manual.md`
- `docs/03_Research_Manual.md`
- approved topic materials in `content/`

### 2. Start from current `main`

Create a dedicated branch for the article or narrowly scoped article update.

Keep article publication separate from unrelated infrastructure, dependency, design-system, and repository-cleanup work.

### 3. Add or confirm assets

Add the approved article image and any required supporting assets. Avoid committing generated deployment output.

### 4. Add the article record

Add one complete article object to the exported `posts` array in `src/lib/posts.ts`.

Confirm:

- the slug is unique
- the category exists
- the title and excerpt are final
- the publication date is verified
- reading time is present
- image and alt text are present
- at least one tag is present
- TOC entries match heading IDs
- no body block is empty

### 5. Review metadata behavior

The article route derives its canonical URL, Open Graph metadata, Twitter metadata, publication date, and Article JSON-LD from the article record and shared URL helpers.

Confirm that the article does not require a special-case metadata implementation. Special cases should be rare and separately justified.

### 6. Run required validation

Run:

```bash
bun install --frozen-lockfile
bun run check:ci
```

The article must pass:

- ESLint correctness checks
- unique slug validation
- required-field validation
- date and slug format validation
- category-reference validation
- TOC-to-heading parity
- sitemap determinism and inventory parity
- metadata-marker checks
- placeholder-link checks
- production build

### 7. Inspect the diff

Before opening or merging a PR, confirm that:

- only intended files changed
- `bun.lock` did not change unless dependencies intentionally changed
- `src/routeTree.gen.ts` did not change unexpectedly
- no generated output was committed
- no unrelated article copy or dates changed
- no placeholder URLs or links were introduced

### 8. Open a focused pull request

The PR should state:

- article title and slug
- exact files changed
- publication date source
- category
- image source or approval status
- tests run
- risks
- rollback method

### 9. Verify GitHub Actions

The required CI workflow must pass before merge.

A failed unrelated legacy Vercel project status is not an ETLH acceptance signal. The relevant Vercel project is `eco-tiny-living-site`.

### 10. Verify the preview when available

When Vercel permits a preview build, check:

- article route returns HTTP 200
- title and visible article content are correct
- image and alt text render correctly
- TOC links reach the intended headings
- canonical and `og:url` use `https://ecotinylivinghub.thrwds.com/blog/<slug>`
- Twitter metadata is article-specific
- Article JSON-LD uses absolute URLs
- publication date displays correctly
- footer and navigation remain intact
- unknown routes still return HTTP 404

If Vercel is blocked by an account build-rate limit, document the external block. Do not misclassify it as a code failure. GitHub Actions remains the code-level acceptance gate, but production verification must be completed later.

### 11. Merge and verify production

After merge and a successful production deployment:

- record the merge commit
- record the Vercel deployment ID
- confirm the public article route returns HTTP 200
- confirm the article appears in `/blog`
- confirm it appears in its category page
- confirm it appears in `/sitemap.xml`
- confirm canonical and structured-data URLs use the preferred host
- confirm GA4 remains restricted to the production hostname

### 12. Update operational records

Update the relevant roadmap, content queue, decision log, or publishing record when the article changes a durable project state.

Do not mark an article Published based only on a draft file or merged PR. Published status requires confirmation that the intended public release occurred.

## Updating an Existing Article

For routine copy or factual corrections:

- preserve the existing slug unless a migration is explicitly approved
- preserve the original publication date unless ETLH adopts a separate reviewed/updated date field
- update evidence and claims according to the Editorial and Research manuals
- rerun the full CI command
- verify metadata and rendering if the change affects title, excerpt, headings, image, date, or structured data

For corrections with material reader impact, record the correction according to the editorial correction process.

## Rollback

The standard rollback is to revert the merge commit that introduced the article or article update.

After rollback:

1. Confirm CI passes.
2. Confirm Vercel deploys the reverted state when builds are available.
3. Verify the affected route, blog index, category page, and sitemap.
4. Document why the rollback occurred and what must be corrected before republishing.

## Known Limitations

- All articles currently live in one large TypeScript file.
- The content validator checks structure and required markers, not editorial quality or factual truth.
- Internal-link validation is not yet automated.
- Route-level HTTP behavior is not yet tested in CI.
- Vercel previews and production builds can be delayed by account build-rate limits.
- Search Console indexing confirmation remains an owner-side external step.

## Future Evaluation Boundary

A one-file-per-post system or CMS may be evaluated only after current publishing friction is documented with concrete examples. Do not migrate content architecture merely because the current file is large.
