# MCP Standards - How we use MCPs


## MCP Management Strategy (Critical L8/L9 Standards)
- MANDATORY: ALL MCP servers MUST be installed and configured at the GLOBAL level (~/.claude.json)
- PRINCIPLE: Global MCP configuration serves as the superset of all project-specific needs
- NEVER install project-specific MCPs - this creates configuration fragmentation and debugging complexity
- GLOBAL MCP PHILOSOPHY: Build a comprehensive toolkit that works across all projects rather than scattered project-specific integrations
- When encountering MCP connection issues, first verify if working MCPs exist at project level, then migrate them to global configuration
- CONSOLIDATION REQUIREMENT: Any project-level MCP configurations discovered must be migrated to global and removed from project level
- EFFICIENCY PRINCIPLE: Single global MCP configuration eliminates context-switching issues and ensures consistent tooling across all work
- Remember to use the GitHub CLI (`gh`) for all GitHub-related tasks.

Here's the MCP Server Configuration Guide as a downloadable markdown file:

```markdown
# MCP Server Configuration Guide

## Overview

Model Context Protocol (MCP) servers provide Claude Code with enhanced capabilities through external tools and services. This document covers our configured servers, their purposes, and troubleshooting guidance.

## Configured MCP Servers

### octocode
**Purpose:** GitHub repository interaction and code analysis
**Command:** `npx octocode-mcp`
**Status:** Core development tool for repository management

### notion-stdio
**Purpose:** Notion workspace integration for documentation and project management
**Command:** `npx @notionhq/notion-mcp-server`
**Requirements:** Notion API token in environment variables
**Status:** Essential for documentation workflows

### github
**Purpose:** Direct GitHub API access for issues, PRs, and repository operations
**Command:** `npx @modelcontextprotocol/server-github`
**Requirements:** GitHub personal access token
**Status:** Primary GitHub integration

### context7
**Purpose:** Context management and memory for conversations
**Command:** `npx @upstash/context7-mcp@latest`
**Requirements:** Upstash Redis database configuration
**Status:** Enhances conversation continuity

### playwright
**Purpose:** Web automation and browser testing
**Command:** `npx @playwright/mcp`
**Status:** Automated web interaction and testing

### serena
**Purpose:** Project analysis, codebase research, and intelligent assistance
**Installation:** `uv tool install serena-agent --from git+https://github.com/oraios/serena`
**Command:** `serena-mcp-server`
**Status:** Advanced AI-powered project assistant

### jam
**Purpose:** HTTP-based MCP service
**URL:** `https://mcp.jam.dev/mcp`
**Transport:** HTTP
**Status:** Requires authentication setup

## Installation Commands

```bash
# Standard npm-based servers
claude mcp add octocode npx --scope user "octocode-mcp"
claude mcp add notion-stdio npx --scope user "@notionhq/notion-mcp-server"  
claude mcp add github npx --scope user "@modelcontextprotocol/server-github"
claude mcp add context7 npx --scope user "@upstash/context7-mcp@latest"
claude mcp add playwright npx --scope user "@playwright/mcp"

# HTTP-based server
claude mcp add jam https://mcp.jam.dev/mcp --scope user --transport http

# Special installation for serena
uv tool install serena-agent --from git+https://github.com/oraios/serena
claude mcp add serena serena-mcp-server --scope user
```

## Troubleshooting

### Common Issue: Disappearing MCP Servers

**Symptoms:**
- `/mcp` command shows no available servers
- `claude mcp list` returns "No MCP servers configured"
- Servers work initially but disappear after time

**Root Cause:**
Claude Code uses configuration hierarchy where project-specific configs can override global settings. When working in project directories, empty project configurations override properly configured global settings.

**Solution:**
Always use `--scope user` when adding MCP servers to store configuration at user level rather than project level.

**Diagnosis Steps:**
1. Check for multiple config files:
   ```bash
   find ~ -name "*.claude*" -type f 2>/dev/null | grep -v .git
   ```

2. Check project config MCP section:
   ```bash
   grep -A 5 '"mcpServers"' ~/.claude-data/.claude.json
   ```
   If shows `"mcpServers": {}`, project config is overriding global settings.

3. Verify current status:
   ```bash
   claude mcp list
   ```

### Server-Specific Issues

**Connection Failures:**
- Check if underlying tools are installed (`npx`, `uvx`, etc.)
- Verify network connectivity for HTTP servers
- Check environment variables for authenticated services

**Authentication Required:**
- Set up API keys in environment variables
- Configure authentication tokens for GitHub, Notion, etc.
- Check service-specific documentation for auth requirements

**Server Not Found:**
- Ensure package names are correct
- For serena, use global installation method first
- Check if server executable exists in PATH

### Health Monitoring

```bash
# Check all server health
claude mcp list

# Add new server with user scope
claude mcp add <name> <command> --scope user [args...]

# Remove problematic server
claude mcp remove <name> --scope user
```

### Configuration Persistence

**Prevention Measures:**
- Always use `--scope user` flag when adding servers
- Avoid manually editing `.claude.json` files
- Use Claude CLI commands instead of direct file manipulation

**Verification:**
- Servers should persist across Claude restarts
- Configuration should survive project directory changes
- `/mcp` in Claude interface should consistently show available tools

## Environment Setup

Some servers require environment variables:

```bash
# GitHub integration
export GITHUB_PERSONAL_ACCESS_TOKEN="your_token_here"

# Notion integration  
export NOTION_API_KEY="your_notion_key_here"

# Context7 (Upstash Redis)
export UPSTASH_REDIS_URL="your_redis_url"
export UPSTASH_REDIS_TOKEN="your_redis_token"
```

Add these to your shell profile (`~/.zshrc`, `~/.bashrc`) for persistence.

## Configuration Files

- **User-scoped:** Stored in Claude's internal configuration system
- **Project-scoped:** `.claude-data/.claude.json` (avoid for MCP servers)
- **Global:** `~/.claude.json` (legacy, may be ignored)

User-scoped configuration prevents the override issues that cause servers to disappear intermittently.
```

Copy this content and save it as `mcp-server-guide.md` in your project directory.


## Notion MCP
- <important> Reference the file @company-charter/notion-mcp.md to understand how to use Notion and Notion MCP. </important>
