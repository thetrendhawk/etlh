# Deploying Eco Tiny Living Hub to Vercel

## Active production configuration

- Vercel project: `eco-tiny-living-site`
- Project ID: `prj_cSWztySMbIFGnnt3tRI5mo1nqTXL`
- Canonical hostname: `ecotinylivinghub.thrwds.com`
- Framework setting: Other
- Node.js runtime: 24.x
- Build command: `bun run build`
- Output directory: leave unset
- Production branch: `main`

Do not use the unrelated legacy Vercel project named `eco-tiny-living` as an ETLH acceptance signal.

## Application output

The application uses TanStack Start with the Nitro `vercel` preset configured in `vite.config.ts`.

A production build writes Vercel Build Output API files under:

```text
.vercel/output/
```

Generated deployment output is not committed to Git.

## Dependency installation

The repository uses Bun and includes a committed `bun.lock`.

For local verification and GitHub Actions, install with:

```bash
bun install --frozen-lockfile
```

A dependency change is incomplete unless `package.json` and `bun.lock` remain synchronized.

Vercel may perform its own detected install step, but the repository acceptance gate is the frozen Bun installation used by GitHub Actions.

## Required pre-merge validation

Run:

```bash
bun run check:ci
```

This executes:

```bash
bun run lint && bun run check:sitemap && bun run check:content && bun run build
```

The pull request must pass the GitHub Actions workflow before merge.

## Git-connected deployment workflow

1. Create a dedicated branch from current `main`.
2. Make the narrowly scoped change.
3. Run the frozen installation and `bun run check:ci`.
4. Open a focused pull request.
5. Confirm GitHub Actions passes.
6. Verify the `eco-tiny-living-site` Vercel preview when Vercel permits the build.
7. Merge after the scoped acceptance gates pass.
8. Wait for the production deployment from `main`.
9. Record the merge commit and production deployment ID.
10. Verify the public site and relevant routes.

A Vercel build-rate-limit status is an external account constraint, not proof of a code failure. When this occurs, document the block and complete Vercel verification after builds resume.

## Canonical host and redirect policy

`vercel.json` establishes:

- no trailing slash except for `/`
- permanent redirects from stable Vercel production aliases
- preservation of the requested path and query string
- `https://ecotinylivinghub.thrwds.com` as the preferred host

Preview branch aliases are not redirected to production.

## Sitemap ownership

The sitemap is dynamic. The authoritative implementation is:

- `src/lib/sitemap.ts` — XML generation and production origin
- `src/routes/sitemap[.]xml.ts` — public `/sitemap.xml` route
- `public/robots.txt` — sitemap declaration
- `scripts/check-sitemap.ts` — deterministic validation

There must not be a static `public/sitemap.xml`. A static file can shadow the dynamic route on Vercel and create duplicate sitemap ownership.

## Preview verification

For a change affecting application output, inspect the ETLH preview for:

- expected route status and rendered content
- canonical and Open Graph URLs
- article metadata and structured data when relevant
- sitemap and robots behavior when relevant
- no regression to genuine HTTP 404 responses
- navigation, footer, and forms when relevant

Some team-scoped previews may be protected by Vercel Authentication. Use authorized Vercel access rather than disabling protection solely for testing.

## Production verification

After a successful production deployment, confirm as relevant:

- canonical domain responds successfully
- stable aliases redirect permanently to the canonical host
- trailing-slash requests normalize correctly
- affected routes return their expected status codes
- `/sitemap.xml` returns XML and contains the expected inventory
- `/robots.txt` advertises the production sitemap
- unknown routes remain genuine HTTP 404 responses
- GA4 loads only on `ecotinylivinghub.thrwds.com`

## Manual deployment

Git-connected deployment is the standard workflow. A manual Vercel CLI deployment should be reserved for an explicitly approved recovery or diagnostic case.

When necessary:

```bash
bun install --frozen-lockfile
bun run check:ci
vercel --prebuilt
```

Run `vercel --prebuilt` only after `bun run build` has produced `.vercel/output/` and the CLI is linked to the correct `eco-tiny-living-site` project.

## Rollback

The normal rollback is to revert the merge commit and allow Vercel to deploy the restored `main` state.

When an immediate platform rollback is required, use a previously verified production deployment in the `eco-tiny-living-site` project, then document:

- the deployment restored
- the defective merge or deployment
- the user-visible impact
- the corrective follow-up required

## Current integration notes

- `vite.config.ts` selects the Vercel Nitro preset.
- `EmailOptIn.tsx` uses browser-side Mailchimp JSONP and does not require an ETLH server endpoint.
- `vercel.json` controls preferred-host and trailing-slash redirects.
- GitHub Actions is the required code-level acceptance gate.
- Vercel preview and production verification remain required when builds are available.