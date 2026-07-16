# Eco Tiny Living Hub

Eco Tiny Living Hub (ETLH) is the repository for the live website, brand operating documents, publication workflows, content packages, and reusable production assets.

## Production identity

- Website: `https://ecotinylivinghub.thrwds.com/`
- Repository: `thetrendhawk/etlh`
- Vercel project: `eco-tiny-living-site`
- Runtime: TanStack Start with Vercel SSR
- Package manager: Bun

Do not confuse the active Vercel project with the unrelated legacy project named `eco-tiny-living`.

## Repository structure

- `src/` — application code, routes, components, styles, article data, metadata helpers, and sitemap logic
- `public/` — static public files such as `robots.txt`
- `docs/` — operating, editorial, research, design, publishing, decision, and glossary documentation
- `content/` — publication packages and social-content records
- `templates/` — reusable production templates
- `assets/` — brand and production assets outside the application bundle
- `scripts/` — deterministic repository validation

## Install and local development

Install the exact dependency graph from the committed Bun lockfile:

```bash
bun install --frozen-lockfile
```

Start the local development server:

```bash
bun run dev
```

## Required validation

Run the complete repository gate before merging:

```bash
bun run check:ci
```

That command runs:

```bash
bun run lint && bun run check:sitemap && bun run check:content && bun run build
```

The gate verifies code correctness, sitemap integrity, article/category structure, metadata coverage, placeholder-link absence, and a production build.

Formatting is separate from lint:

```bash
bun run format
```

Do not run a repository-wide formatting pass as part of an unrelated change.

## Website publishing

Website articles currently live in `src/lib/posts.ts`. The full operational process is documented in:

- `docs/05_Publishing_Workflow.md`

A draft, social package, or planning file does not publish an article by itself. Publication requires the application source to be updated, CI to pass, and the intended public release to be verified.

## Sitemap ownership

The dynamic `/sitemap.xml` route is the only authoritative sitemap source.

- Generator: `src/lib/sitemap.ts`
- Route: `src/routes/sitemap[.]xml.ts`
- Declaration: `public/robots.txt`
- Validation: `scripts/check-sitemap.ts`

Do not add a static `public/sitemap.xml`; it would conflict with and potentially shadow the dynamic route.

## Git and pull-request workflow

- Start from current `main`.
- Use a dedicated branch for each implementation slice.
- Keep one primary concern per pull request.
- State purpose, files, risks, tests, and rollback.
- Require GitHub Actions to pass before merge.
- Verify the ETLH Vercel preview when available.
- Record external Vercel quota or protection limits instead of treating them as code failures.
- Do not commit generated deployment output such as `.vercel/`, `.output/`, or build directories.

## Deployment

Vercel deploys the GitHub-connected `main` branch to production and pull-request branches to previews when account limits permit builds.

The canonical production hostname is:

```text
https://ecotinylivinghub.thrwds.com
```

Stable Vercel production aliases permanently redirect to that hostname. Paths use no trailing slash except for `/`.

See `VERCEL_DEPLOY.md` for the current deployment configuration and verification process.

## Durable documentation

Core operating standards are maintained in:

- `docs/01_Operating_Manual.md`
- `docs/02_Editorial_Manual.md`
- `docs/03_Research_Manual.md`
- `docs/04_Design_System.md`
- `docs/05_Publishing_Workflow.md`
- `docs/06_Decision_Log.md`

Git and these repository documents are the source of truth for durable ETLH decisions.