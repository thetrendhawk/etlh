# Deploying Eco Tiny Living Hub to Vercel

## Active production configuration

- Vercel project: `eco-tiny-living-site`
- Project ID: `prj_cSWztySMbIFGnnt3tRI5mo1nqTXL`
- Canonical hostname: `ecotinylivinghub.thrwds.com`
- Framework setting: Other
- Node.js runtime: 24.x
- Build command: `bun run build`
- Output directory: unset
- Production branch: `main`

Only this project is connected to `thetrendhawk/etlh`. The former duplicate project has been removed.

## Application output

TanStack Start uses the Nitro `vercel` preset configured in `vite.config.ts`. A production build writes Vercel Build Output API files under `.vercel/output/`.

Generated deployment output is not committed.

## Dependency installation and validation

```bash
bun install --frozen-lockfile
bun run check:ci
```

The required gate runs:

```bash
bun run lint && bun run check:sitemap && bun run check:content && bun run check:assets && bun run build
```

A dependency change is incomplete unless `package.json` and `bun.lock` remain synchronized.

## Git-connected deployment workflow

1. Start from current `main` and create a focused branch.
2. Run the frozen install and required CI gate.
3. Open a focused pull request.
4. Confirm GitHub Actions passes.
5. Inspect the `eco-tiny-living-site` preview when the change affects application output.
6. Merge after acceptance gates pass.
7. Wait for the production deployment from `main`.
8. Record the merge commit and production deployment ID.
9. Run or confirm production smoke checks.

One Git push should create only one ETLH Vercel deployment. If duplicate project deployments reappear, stop and inspect Git integrations before continuing.

## Canonical host and redirect policy

`vercel.json` establishes:

- no trailing slash except for `/`
- permanent redirects from stable Vercel production aliases
- requested path and query-string preservation
- `https://ecotinylivinghub.thrwds.com` as the preferred host

Preview branch aliases remain separate from production.

## Preview acceptance

Inspect relevant changes for:

- expected route status and rendered content
- canonical and Open Graph URLs
- metadata and structured data
- image rendering and loading behavior
- sitemap and robots behavior
- navigation, footer, and forms
- genuine 404 responses for unknown routes

Team-scoped previews may use Vercel Authentication. Use authorized access rather than disabling protection solely for testing.

## Production acceptance

After deployment, confirm as relevant:

- canonical domain responds successfully
- stable aliases redirect to the canonical host
- trailing-slash requests normalize correctly
- affected routes return expected status codes
- `/sitemap.xml` contains the expected inventory
- `/robots.txt` advertises the sitemap
- unknown routes return genuine 404 responses
- GA4 remains consent-gated and restricted to the production hostname
- production smoke checks pass

## Manual deployment boundary

Git-connected deployment is the standard workflow. Manual Vercel deployment is reserved for an explicitly approved recovery or diagnostic case.

When necessary, build first and deploy the prebuilt output only from a workspace linked to `eco-tiny-living-site`:

```bash
bun install --frozen-lockfile
bun run check:ci
vercel --prebuilt
```

## Rollback

The normal rollback is to revert the merge commit and let Vercel deploy the restored `main` state.

For an urgent platform rollback, restore a previously verified production deployment and document the restored deployment, defective change, user impact, and corrective follow-up.

## Integration notes

- `vite.config.ts` selects the Vercel Nitro preset.
- `vercel.json` controls preferred-host and trailing-slash redirects.
- `EmailOptIn.tsx` uses browser-side Mailchimp JSONP.
- GitHub Actions is the required code-level acceptance gate.
- Vercel preview and production verification remain required for application-output changes.
