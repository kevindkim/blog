# Notion MCP Integration Guide

## Overview
The Notion MCP integration allows Claude to interact with Kevin's Notion workspace. **Currently use direct API calls due to Claude Code MCP bugs - switch to official MCP tools once fixed.**

**Official Tools**: https://developers.notion.com/docs/mcp-supported-tools
**Current Status**: Use direct curl API calls (MCP tools fail due to Claude Code transport bugs)

## Integration Secret Location
**Primary Location**: `/Users/kevinkim/Documents/OptionsEmailer/.env`


**Setup Command**:
```bash
export NOTION_TOKEN=[YOUR_NOTION_TOKEN]
```

## MCP Server Status
- **Server Name**: `notion-stdio`
- **Command**: `npx -y @notionhq/notion-mcp-server`
- **Status**: Shows "✓ Connected" but tools not accessible
- **Known Issues**:
  - Claude Code MCP transport bugs (GitHub issues #3426, #1611)
  - Notion MCP server issue #74: "Claude Code is struggling with the MCP"
  - Notion confirmed "ongoing issues impacting Claude Desktop with Notion MCP"

## Official Notion MCP Tools (Future - When Claude Code Fixes MCP Bugs)

### Available MCP Tools (from https://developers.notion.com/docs/mcp-supported-tools)
- `mcp__search` - Search workspace content
- `mcp__fetch` - Fetch specific pages/databases
- `mcp__create-pages` - Create new pages
- `mcp__update-page` - Update existing pages
- `mcp__move-pages` - Move pages within workspace
- `mcp__duplicate-page` - Duplicate pages
- `mcp__create-database` - Create new databases
- `mcp__update-database` - Update database properties
- `mcp__create-comment` - Add comments
- `mcp__get-comments` - Retrieve comments
- `mcp__get-users` - Get workspace users
- `mcp__get-user` - Get specific user info
- `mcp__get-self` - Get current user info

### Usage Examples
```bash
# Search for documents
mcp__search(query="Claude Code Standup")

# Fetch specific page
mcp__fetch(page_id="25a87c29-f487-80df-a8bd-fcd2b16f0e10")

# Update page content
mcp__update-page(page_id="...", content="...")
```

## Direct API Usage (Current Approach - Use This For Now)

### Common API Headers
```bash
-H "Authorization: Bearer [YOUR_NOTION_TOKEN]"
-H "Content-Type: application/json"
-H "Notion-Version: 2022-06-28"
```

### Search for Pages/Databases
```bash
curl -X POST https://api.notion.com/v1/search \
  -H "Authorization: Bearer [YOUR_NOTION_TOKEN]" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{"query": "Your Search Term"}'
```

### Append Content to Page
```bash
curl -X PATCH https://api.notion.com/v1/blocks/{page_id}/children \
  -H "Authorization: Bearer [YOUR_NOTION_TOKEN]" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{
    "children": [
      {
        "object": "block",
        "type": "paragraph",
        "paragraph": {
          "rich_text": [{"type": "text", "text": {"content": "Your content here"}}]
        }
      }
    ]
  }'
```

### Block Types Reference
**Heading 2**:
```json
{
  "object": "block",
  "type": "heading_2",
  "heading_2": {
    "rich_text": [{"type": "text", "text": {"content": "Heading Text"}}]
  }
}
```

**Heading 3**:
```json
{
  "object": "block",
  "type": "heading_3",
  "heading_3": {
    "rich_text": [{"type": "text", "text": {"content": "Subheading Text"}}]
  }
}
```

**Bulleted List Item**:
```json
{
  "object": "block",
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "rich_text": [{"type": "text", "text": {"content": "• Bullet point text"}}]
  }
}
```

**Paragraph**:
```json
{
  "object": "block",
  "type": "paragraph",
  "paragraph": {
    "rich_text": [{"type": "text", "text": {"content": "Regular paragraph text"}}]
  }
}
```

## Key Notion Documents

### Claude Code Standup
- **Page ID**: `25a87c29-f487-80df-a8bd-fcd2b16f0e10`
- **Purpose**: Reverse chronological log of Claude Code accomplishments
- **Format**: Add new entries to TOP of document with timestamp
- **Template**:
  ```
  ## YYYY-MM-DD - HH:MM PST Standup Update

  ### Major Accomplishments:
  - Bullet points of key achievements

  ### Technical Challenges Solved:
  - Technical problems resolved

  ### Files Created/Modified:
  - File changes made

  ### Next Focus Areas:
  - Upcoming priorities

  ---
  ```

### Daily Journal
- **Page ID**: `1f787c29-f487-8077-a908-df39056edc60`
- **Purpose**: Personal daily updates
- **Previously Used**: Successfully added "hello world" content

## Implementation Status

### Current State (2025-08-25)
- **MCP Tools**: Not accessible due to Claude Code transport bugs
- **Direct API**: Working perfectly - use this approach
- **GitHub Issues**: Notion aware of Claude Code MCP problems (issue #74)
- **Resolution**: Pending Claude Code/Anthropic fixes

### When MCP Tools Become Available
1. Try official MCP tools first: `search`, `fetch`, `create-pages`, etc.
2. Fall back to direct API if tools still fail
3. Update this documentation once MCP tools work consistently

### Current Troubleshooting
1. **Always use direct API calls** until MCP fixes are released
2. **Export token** if needed: `export NOTION_TOKEN=[YOUR_NOTION_TOKEN]`
3. **Test connectivity**: Use search API to verify token works
4. **Don't waste time** trying MCP tool variants - they won't work

### Common Error Patterns
- `Error: No such tool available: mcp__notion-stdio__*` - Use direct API
- `API token is invalid` - Check token export or .env file loading
- `Request timeout (30s)` - Claude Code MCP transport issue

### Verification Steps
1. Check server status: `claude mcp list`
2. Test search API with curl
3. If API works but MCP doesn't, use direct API approach

## Security Notes
- Token has full workspace access
- Never commit token to version control
- Token is already in .env file which is gitignored
- Use proper environment variable patterns for production

## Success Examples
- ✅ Found and updated Claude Code Standup document multiple times
- ✅ Added comprehensive session summaries with proper formatting
- ✅ Successfully used block types: headings, bullets, paragraphs
- ✅ Maintained reverse chronological order in standup logs

## Integration Pattern
**Always follow this pattern**:
1. Search for document using API
2. Extract page_id from results
3. Append content using PATCH /blocks/{page_id}/children
4. Use proper JSON formatting for block types
5. Add to TOP of document for standup entries
