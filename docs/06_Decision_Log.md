# Decision Log

## Purpose

Record durable ETLH decisions, their rationale, and relevant repository history so future contributors do not have to reconstruct project intent from scattered conversations.

## Scope

This log covers major brand, editorial, production, publishing, migration, and repository-governance decisions.

## Status

Active.

## Decisions

| Date | Decision | Reason | Related Commit/Asset |
|---|---|---|---|
| 2026-06-22 | Expand Eco Tiny Living Hub to Instagram while staying in the same small-space sustainable-living niche established through Pinterest. | Build a broader content ecosystem without fragmenting the brand. | Historical source conversation; Instagram posts 001–012 |
| 2026-07-03 | Use the ETLH repository as the source of truth for website code and publication infrastructure. | Preserve traceable editorial, research, design, publishing, and implementation history. | `README.md`; commit `41a4434` |
| 2026-07-04 | Increase the contrast of the Instagram footer mark and continue using the improved treatment. | Improve mobile readability while preserving subtle branding. | `content/Instagram-005-Clear-One-Surface.md` |
| 2026-07-15 | Preserve the numbered documentation structure under `docs/` rather than creating parallel generic manuals. | Avoid duplicate authority and keep repository organization stable. | `docs/01_Operating_Manual.md` through `docs/07_Glossary.md` |
| 2026-07-15 | Verify repository paths and actual file status before editing or claiming completion. | Prevent invented paths, duplicate files, and inaccurate documentation. | ETLH reconciliation process |
| 2026-07-15 | Treat Conversation Recovery Packets as source evidence rather than polished final documentation. | Preserve provenance and prevent premature rewriting or loss of original decisions. | ETLH reconciliation process |
| 2026-07-15 | Reconcile the ETLH brand foundation from surviving evidence because the original Brand Strategy Guide, exact five-pillar wording, and exact stepping-stone wording were never committed and could not be recovered from Git history. | Move the project forward honestly without falsely presenting reconstructed language as verbatim historical source. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Adopt the reconciled five-pillar framework: Reduce Unnecessary Friction; Take Practical Eco Steps; Create Supportive Small-Space Systems; Practice Focused Consistency; Build Trust Through Thoughtful Living. | These pillars are directly supported by repeated user approvals, published ETLH content, and surviving strategy evidence. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Adopt the reconciled stepping-stone framework: Notice → Choose → Reduce → Repeat → Align. | This sequence preserves the approved stepping-stone concept and connects the Friction Finder Question, Eco Steps, simple systems, focused consistency, and meaningful alignment. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Defer Logo Concept A and the glossary term “Traveler” from active reconciliation. | Neither item is currently important enough to justify unsupported reconstruction. | No repo change required |
| 2026-07-15 | Make the dynamic `/sitemap.xml` route the single authoritative sitemap: emit absolute production URLs from `src/lib/sitemap.ts`, delete `public/sitemap.xml` (must not be recreated), declare the sitemap in `robots.txt`, and guard integrity with `bun run check:sitemap`. | The static file shadowed the dynamic route on Vercel, went stale (the old static sitemap contained 12 URLs, while the authoritative content-derived inventory contains 23 URLs, omitting the cornerstone article and the intentional-living category), and both implementations emitted spec-violating relative `<loc>` values. | `src/routes/sitemap[.]xml.ts`; `src/lib/sitemap.ts`; `scripts/check-sitemap.ts`; `docs/05_Publishing_Playbook.md` |

## Operating Notes

- Do not rewrite pushed history.
- Prefer updating an existing authoritative document over creating a duplicate.
- Do not invent project history, strategy, publication dates, asset status, or completed work.
- Mark unknown or unrecoverable information honestly.
- Asset archive checkboxes may be completed only when corresponding final assets are actually committed.

## Revision History

| Version | Date | Notes |
|---|---|---|
| v1.0 | 2026-07-15 | Replaced the empty scaffold with reconciled durable decisions and provenance notes. |
| v1.1 | 2026-07-15 | Added the sitemap-integrity decision (dynamic sitemap made authoritative). |
