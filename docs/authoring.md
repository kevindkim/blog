# Authoring Guidelines

Use this guide when writing posts for the blog.

## Frontmatter schema (required)

Every published post under `pages/blog/*.mdx` must include the following keys:

```yaml
---
title: "Human-friendly post title"
slug: "kebab-case-slug"
date: "YYYY-MM-DD"
summary: "1–2 sentence description shown in listings"
---
```

Optional fields:

- `tags`: array of short labels, e.g. `["ai", "notes"]`
- `draft`: `true`/`false` (default `false`)
- `updated`: ISO date string for last significant edit
- `cover`: relative path to an image in `/public/images/YYYY/`

## File locations

- Published posts live in `pages/blog/`
- Drafts should be stored in `content/blog/` until they are ready, then moved into `pages/blog/`

## Filenames

Prefer `YYYY-MM-DD-slug.mdx` so posts sort chronologically in the repo. Example: `2025-10-06-hello-world.mdx`.

## Images

Store assets under `/public/images/<year>/slug-01.webp`. Always provide descriptive alt text when embedding images.

## Workflow checklist

1. Create the MDX file with the schema above.
2. Keep drafts inside `content/blog/` with `draft: true` until publish-ready.
3. When promoting to publish, move into `pages/blog/`, set `draft: false`, and ensure required fields are present.
4. Run `pnpm validate:frontmatter`, `pnpm lint`, `pnpm typecheck`, and `pnpm build` before opening a PR.
   - `pnpm build` (and production CI) will fail automatically if a `draft: true` post lives under `pages/blog/`.
   - To preview drafts locally during a build, set `ALLOW_DRAFTS=true pnpm build`.
