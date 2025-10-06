

## GitHub Integration (ACTIVE)
- **CRITICAL**: ALWAYS prioritize GitHub CLI (`gh`) over MCP GitHub tools for all operations
- **TOOL PRIORITY ORDER**: gh CLI → Bash git commands → MCP GitHub tools (fallback only)
- **RATIONALE**: CLI provides more reliable access and better error handling than MCP
- <important>Remember to use the GitHub CLI (`gh`) for all GitHub-related tasks.</important>
- **REPOSITORIES**:
  - claude-global: https://github.com/kevindkim/claude-global (L8/L9 development infrastructure)  
  - OptionsEmailer: https://github.com/kevindkim/OptionsEmailer (trading platform)
- **AUTHENTICATION**: Token-based via ~/.github-token (secure, repo-safe)
- **COMMIT ATTRIBUTION**: All commits authored by "Claude" for accurate AI work tracking
- **SAFETY SYSTEM**: Multi-Claude Git coordination prevents conflicts
- **WORKFLOW**: Feature branches → PR → Review → Merge (enterprise standards)
- **FUTURE**: Multi-agent attribution system (Claude-Infrastructure, Claude-Security, etc.)

# General Git-Related Coding Hygiene
- MANDATORY: Audit and clean up stale git branches - check `git branch -a | grep claude` and delete fully merged branches
- MANDATORY AND IMPORTANT: Exercise L8/L9 judgment on retro updates - match complexity to the problem (simple fixes = single bullets, systemic issues may warrant sections)
- MANDATORY: Avoid creating new sections in CLAUDE.md unless absolutely necessary - add bullets to existing relevant sections instead
- CRITICAL: ALWAYS check git history FIRST before making changes - use `git log`, `git show`, `git diff` to understand exact content structure, commit history, and original intent before modifying anything
- MANDATORY: Git history is the authoritative source of truth - never make assumptions about content structure when version control contains the definitive answers
- MANDATORY: TRIANGULATE ALL AVAILABLE DATA SOURCES before modifications - cross-reference git history + session context + live API state (Notion, databases, file systems) to identify exact diffs and prevent duplicate/scattered content

# Multi-Claude Git Coordination System
When working in projects with multi-Claude git coordination:
- Each Claude instance auto-resumes most recent claude branch, or creates new unique branch via `Claude.startWork('feature')`
- New terminals automatically continue existing work when possible
- Use Serena to understand what other Claude instances have modified before merging
- Search for conflicts semantically, not just textually
- Resource locking prevents file conflicts between instances
- Exit handlers auto-cleanup locks and registrations
- Simple merge: type `/merge` to coordinate final integration across all instances
- System enforces 3-instance limit automatically
- All coordination happens via @`.claude-work/` directory tracking
- Work persists in git branches even if instances exit unexpectedly
- Please reference under @Users/kevinkim/claude/projects/OptionsEmailer/CLAUDE_COLLABORATION.md and @Users/kevinkim/claude/projects/OptionsEmailer/CLAUDE_WORKFLOW.md for full details

## Git Branch Hygiene Protocol (Critical L8/L9 Standards)
- MANDATORY: At start of every session, audit all Claude branches with `git branch -a | grep claude`
- MANDATORY: Before starting new work, verify which branches are fully merged: `git log --oneline main..branch-name`
- MANDATORY: ALWAYS clean up fully-merged branches immediately: `git branch -D merged-branch`
- MANDATORY: Never let stale branches accumulate - technical debt in version control is still technical debt
- CRITICAL: Distinguish between "work in progress" vs "fully integrated" branches
- AUTOMATED CLEANUP: Use `git branch --merged main | grep claude` to identify candidates for deletion
- PROACTIVE MAINTENANCE: Clean git history is a mark of engineering excellence, not optional housekeeping
- EXCEPTION HANDLING: Only preserve branches that contain unmerged commits or are actively being worked on
- VERIFICATION REQUIREMENT: Always verify branch integration status before deletion using git log comparison


## GitHub Issue & URL Verification Protocol (Critical L8/L9 Standards)
- **MANDATORY**: Never assume or guess GitHub URLs, issue numbers, or PR numbers
- **CRITICAL**: When using agents to create GitHub issues/PRs, ALWAYS verify the returned URL before reporting to user
- **VERIFICATION REQUIRED**: If an agent claims to create issue #4 but user corrects it to #1, this indicates:
  1. Agent provided incorrect information
  2. I failed to validate the actual GitHub API response
  3. I made assumptions instead of confirming facts
- **L8/L9 PRINCIPLE**: Distinguished Engineers verify all external system interactions - never trust, always verify
- **PROCESS**: Either have the agent return the actual URL from GitHub API response, or acknowledge uncertainty if unable to confirm
- **NO GUESSING**: If unsure about GitHub URLs/numbers, state uncertainty rather than providing potentially incorrect information

## GitHub Tool Selection Protocol (Critical L8/L9 Standards)
- **PRIMARY**: Use `gh` CLI for all GitHub operations (issues, PRs, repos, releases)
- **SECONDARY**: Use `git` CLI for repository operations (clone, commit, push, branch)
- **FALLBACK ONLY**: Use MCP GitHub tools only if CLI unavailable or fails
- **EXAMPLES**:
  - Issues: `gh issue view 12` NOT `mcp__github__get_issue`
  - PRs: `gh pr create` NOT `mcp__github__create_pull_request`  
  - Repos: `gh repo view` NOT `mcp__github__search_repositories`
- **CLI ADVANTAGES**: Better auth, cleaner output, more reliable, consistent with terminal workflow
- **VERIFICATION**: CLI commands provide immediate feedback vs MCP async responses

## GitHub Issue Management Protocol (Critical)
- **MANDATORY**: Whenever creating or working with GitHub issues, ALWAYS provide the GitHub issue link
- **AUTO-OPEN REQUIRED**: After providing the link, automatically open it in the user's browser using `open [github-url]` from terminal
- **SELF-ASSIGNMENT REQUIRED**: Always assign the issue to yourself or the profile creating it using `--assignee` flag
- **WORKFLOW**: Create issue → Assign to creator → Provide link → Auto-open in browser for immediate user review

## GitHub Profile Attribution Protocol (Critical L8/L9 Standards)
- **NEVER USE kevindkim PROFILE**: All GitHub actions (commits, issues, comments) must be from Claude profiles, never the kevindkim account
- **SUBAGENT-SPECIFIC PROFILES**: Each specialized subagent must use its own dedicated GitHub profile for attribution:
  - @scrum-master.md for scrum master agent activities
  - @codebase-researcher for research and analysis
  - @prompt-engineer for prompt engineering work
  - @strategy-analyst for strategic analysis
  - etc. (match profile to subagent type)
- **FUTURE INTERACTION**: Subagent-specific profiles enable future inter-agent collaboration and proper work attribution
- **ACCOUNTABILITY**: Each profile maintains clear audit trail of which subagent performed what work
- **AUTHENTICATION**: Ensure each subagent profile has proper GitHub authentication configured

## Conflict Resolution Guidelines
- **if encountering merge conflicts or code conflicts** → load and apply @`~/claude/agents/conflict-resolver-general.md` for systematic conflict resolution strategies
- **if needing intelligent code analysis for complex refactoring** → load and apply @`~/claude/agents/smart-resolver.md` for advanced pattern recognition and code transformation approaches
