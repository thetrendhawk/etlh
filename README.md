# Eco Tiny Living Hub

Eco Tiny Living Hub (ETLH) is the organizational home for the publication and its website. The repository stores the live website code, editorial documentation, production templates, topic content packages, and reusable publication assets.

## Repository Structure

- `src/` - Website application code, routes, components, styles, and current post data.
- `public/` - Public website files served by the application.
- `docs/` - Operating, editorial, research, design, publishing, decision, and glossary documentation.
- `content/` - Publication content packages. Each topic gets its own folder with research, briefs, channel drafts, revisions, and downloads.
- `templates/` - Reusable production templates for articles, research dossiers, briefs, social posts, newsletters, video, and revision logs.
- `assets/` - Production assets, brand assets, generated images, mockups, icons, logos, and future reusable visuals.

## Production Workflow

1. Start a new topic folder in `content/` using the next ETLH identifier.
2. Build research notes, the content brief, article draft, channel-specific drafts, and revision history inside that topic folder.
3. Use `templates/` as the starting point for recurring production artifacts.
4. Record durable operating decisions in `docs/06_Decision_Log.md`.
5. Keep website implementation changes separate from publication planning and production files.

## Documentation Philosophy

Documentation should be practical, concise, and operational. Manuals in `docs/` should explain how ETLH works, how decisions are made, and how future contributors can produce consistent publication work without guessing.

## Versioning Philosophy

Git is the source of truth for both website code and publication infrastructure. Meaningful changes should be committed with clear messages so editorial, research, design, and implementation decisions remain traceable over time.

## Git Workflow

- Work from the current main branch unless a separate branch is needed for a larger change.
- Keep commits focused on one purpose.
- Do not commit generated deployment output such as `.vercel/`.
- Do not mix unrelated website, documentation, and content changes in the same commit when they can be separated.

## Website Code

Website code lives in `src/`, with static public files in `public/`. Existing routes, styling, and application behavior should be changed only when the website itself is intentionally being updated.

## Publication Files

Publication planning, research, topic packages, templates, and reusable production assets live in `docs/`, `content/`, `templates/`, and `assets/`.

## Build

Use the project scripts in `package.json` for local verification:

```sh
npm run build
```
