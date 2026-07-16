# ETLH Generated-File Policy

## Status

Canonical policy for generated repository files.

## Purpose

This document defines how ETLH handles files produced by framework tooling rather than written directly by a contributor.

## Current Generated File

The repository currently tracks:

- `src/routeTree.gen.ts`

TanStack Router generates this file from the route modules in `src/routes/`. The application imports its exported `routeTree` from `src/router.tsx`.

The file header states that it is automatically generated, will be overwritten, and should not be edited manually.

## Source of Truth

The source of truth is the route-module set and route definitions in `src/routes/`, not the generated TypeScript in `src/routeTree.gen.ts`.

Examples include:

- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/blog.index.tsx`
- `src/routes/blog.$slug.tsx`
- `src/routes/category.$slug.tsx`
- `src/routes/about.tsx`
- `src/routes/contact.tsx`
- `src/routes/resources.tsx`
- `src/routes/sitemap[.]xml.ts`

## Repository Policy

`src/routeTree.gen.ts` remains committed because the application imports it directly and a clean checkout must contain a complete, buildable source tree.

Contributors must:

- never hand-edit `src/routeTree.gen.ts`
- make route changes in `src/routes/`
- allow TanStack Router tooling to regenerate the file
- commit a regenerated route tree when an intentional route change alters it
- inspect the generated diff before committing
- reject unrelated or unexplained generated changes

## Expected Changes

A route-tree diff is expected when a route is intentionally:

- added
- removed
- renamed
- moved
- converted between index, static, or dynamic route forms

A route-tree diff is not normally expected for:

- article copy changes
- post metadata changes
- styling changes
- image changes
- documentation changes
- analytics changes
- sitemap inventory changes that do not alter the sitemap route module's filename or route identity

## Validation Procedure

For a route-changing pull request:

1. Start from current `main`.
2. Change the relevant file or files in `src/routes/`.
3. Run:

```bash
bun install --frozen-lockfile
bun run check:ci
```

4. Inspect `src/routeTree.gen.ts`.
5. Confirm every generated addition, removal, or rename corresponds to the intended route change.
6. Confirm no unrelated route identity changed.
7. Commit the route module and generated route tree together.

For a non-route pull request, an unexpected `src/routeTree.gen.ts` modification should be removed from the change unless the cause is understood and explicitly included in scope.

## Formatting and Lint

The generated file contains its own lint-disable and TypeScript suppression directives. Do not reformat it manually or use it as a target for style cleanup.

Repository-wide formatting work must not rewrite generated files merely to satisfy stylistic preferences.

## Merge and Deployment Checks

A route-changing pull request must verify:

- GitHub Actions passes
- the application build succeeds
- intended routes return their expected status
- unknown routes remain genuine HTTP 404 responses
- canonical and Open Graph URLs remain correct
- sitemap inventory remains correct
- Vercel preview and production behavior are checked when deployment capacity permits

## Recovery

If the generated route tree is missing, stale, or corrupted:

1. Restore the route modules to the intended state.
2. Run the framework build or development tooling that regenerates the route tree.
3. Do not reconstruct the generated file by hand.
4. Run the full CI gate.
5. Review the regenerated diff before committing.

## Future Generated Files

Any new generated file added to the repository must receive an explicit policy covering:

- its generating tool
- its human-authored source of truth
- whether it is committed or ignored
- when changes are expected
- how it is regenerated
- how unexpected diffs are handled

Do not assume all generated files should be committed. Make that decision based on build requirements, reproducibility, and repository workflow.