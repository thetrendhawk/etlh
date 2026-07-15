# Publishing Playbook

## Purpose

Document repeatable, verifiable publishing operations for Eco Tiny Living Hub.

## Scope

This playbook currently documents website sitemap and robots operations only. Other publishing procedures (Instagram workflow, article publication, newsletter) are not yet documented here and remain TBD.

## Status

Active — sitemap and robots operations only.

## Sitemap and Robots Operations

### Source of truth

- The dynamic route `src/routes/sitemap[.]xml.ts` is the single authoritative source of `/sitemap.xml`. It builds the sitemap from `src/lib/sitemap.ts`, which derives every URL from the live content source (`src/lib/posts.ts`).
- `public/sitemap.xml` was deleted on 2026-07-15 and must not be recreated. A static file in `public/` silently shadows the dynamic route on Vercel and will go stale.
- `public/robots.txt` must always contain the line: `Sitemap: https://ecotinylivinghub.thrwds.com/sitemap.xml`
- New posts and categories added to `src/lib/posts.ts` appear in the sitemap automatically. No sitemap edit is required when publishing website content.

### Verification command

Run from the repository root:

```sh
bun run check:sitemap
```

The check fails when: a static sitemap exists in `public/`, output is non-deterministic, any `<loc>` is relative or uses a non-production origin, URLs are duplicated, expected posts or categories are missing, unexpected URLs appear, or `robots.txt` lacks the sitemap declaration.

### Preview checks (before promoting a deployment)

- `/sitemap.xml` returns 200 with an XML content type and only fully qualified `https://ecotinylivinghub.thrwds.com/...` URLs.
- `/robots.txt` returns 200 and includes the Sitemap line.
- `/`, one representative article, and one representative category return 200.
- An unknown path still returns 404.

### Search Console

After a sitemap change reaches production, resubmit `https://ecotinylivinghub.thrwds.com/sitemap.xml` in Google Search Console (Sitemaps section) so the updated inventory is recrawled promptly.

### Rollback

Revert the sitemap commit with `git revert <commit>` and push; Vercel redeploys the previous behavior automatically. Do not rewrite pushed history (Lovable constraint). The Vercel dashboard's instant rollback can also repoint production to the prior deployment while the revert lands.

## Revision History

| Version | Date | Notes |
|---|---|---|
| v0.1 | 2026-07-15 | Added sitemap and robots operations (sitemap integrity slice). All other publishing procedures remain TBD. |
