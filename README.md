# blog

Kevin's personal blog about web3, programming, and AI.

## Development

```bash
pnpm install
pnpm dev
```

Preview environment runs on [http://localhost:3000](http://localhost:3000).

## Useful Scripts

- `pnpm lint` – ESLint (Next.js preset + import ordering)
- `pnpm typecheck` – TypeScript strict mode verification (`tsc --noEmit`)
- `pnpm build` – Production build (also runs lint + type checks)

Deployments are handled via Vercel; push to a feature branch and open a PR to trigger a preview build.
