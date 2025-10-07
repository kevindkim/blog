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
- `pnpm sitemap` – Regenerate `public/sitemap.xml`
- `pnpm build` – Production build (runs validation + sitemap generation + Next build)

Deployments are handled via Vercel; push to a feature branch and open a PR to trigger a preview build.

## Troubleshooting

### Custom Agents Not Appearing in `/agents`

**Symptoms:**
- Typing `/agents` in Claude Code shows no custom agents or fewer agents than expected
- Agents exist in `.claude/agents/` directory but aren't detected

**Root Causes:**

1. **Invalid YAML frontmatter** - Most common issue. Each agent file requires valid YAML frontmatter with proper quoting:
   ```yaml
   ---
   name: agent-name
   description: "Agent description with proper quotes if it contains special characters"
   ---
   ```

2. **Missing YAML frontmatter** - Some agents may lack frontmatter entirely. All agents need the `---` delimited YAML block at the top.

3. **Multi-line descriptions without quotes** - Long descriptions with newlines/special characters must be wrapped in quotes or use YAML literal block syntax.

4. **Requires restart** - Claude Code only discovers agents at startup. After adding/fixing agents, fully quit (Cmd+Q) and relaunch.

**How to Fix:**

1. **Validate YAML in all agent files:**
   ```bash
   cd .claude/agents
   for f in *.md; do
     echo "=== $f ==="
     head -n 5 "$f"
   done
   ```

2. **Fix common YAML issues:**
   - Add missing frontmatter to files without `---` blocks
   - Quote descriptions containing colons, newlines, or special characters
   - Ensure closing `---` exists after frontmatter

3. **Copy working agents from global config:**
   ```bash
   cp -f ~/.claude/agents/*.md .claude/agents/
   ```

4. **Restart Claude Code** - Full quit and relaunch required for agent discovery

**Verification:**
After restart, `/agents` should show all agents from `.claude/agents/` directory.
