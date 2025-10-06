# blog

Kevin's personal blog about web3, programming, and AI.

## Development

```bash
pnpm install
pnpm dev
```

Preview environment runs on [http://localhost:3000](http://localhost:3000). The App Router powers the homepage, while Nextra handles `/blog` via classic `pages/` routing.

## Useful Scripts

- `pnpm lint` – ESLint (Next.js preset + import ordering)
- `pnpm typecheck` – TypeScript strict mode verification (`tsc --noEmit`)
- `pnpm build` – Production build (lint + type checks + static export)

Deployments are handled via Vercel; push to a feature branch and open a PR to trigger a preview build.
