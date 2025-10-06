# Repository Guidelines

<important> Everything in this document is mandatory to read upon session initialization, including all files it references. </important>

## Getting Started *Mandatory*
- <important> MANDATORY AT SESSION START: 
-- Codemap should kick off, giving you context on the entire parent-child codebase. We have configured our agents, commands and most style/structure guides at the global level. Projects live under claude/projects/
-- Immediately upon loading, you MUST read the files in @claude-code-docs/docs/ to ingest ALL Claude Code documentation from Anthropic to understand your full capabilities. Load this knowledge PROACTIVELY, not reactively.
-- You MUST read all referenced files in this document when starting a new session
-- If you read this, print "Booting up context! 🤖🤖" in the context.</important>

## Operating Principles
Please follow the "Explore, Plan, Code, Test" workflow when you start.

  ### Explore
  First, use parallel subagents to find and read all files that may be useful for 
  implementing the ticket, either as examples or as edit targets. The subagents 
  should return relevant file paths, and any other info that may be useful.

  ### Plan
  Next, think hard and write up a detailed implementation plan. Don't forget to 
  include tests, lookbook components, and documentation. Use your judgement as to 
  what is necessary, given the standards of this repo.

  If there are things you are not sure about, use parallel subagents to do some 
  web research. They should only return useful information, no noise.

  If there are things you still do not understand or questions you have for the 
  user, pause here to ask them before continuing.

  ### Code
  When you have a thorough implementation plan, you are ready to start writing 
  code. Follow the style of the existing codebase (e.g. we prefer clearly named 
  variables and methods to extensive comments). Make sure to run our 
  autoformatting script when you're done, and fix linter warnings that seem 
  reasonable to you.

  ### Test
  Use parallel subagents to run tests, and make sure they all pass.

  If your changes touch the UX in a major way, use the browser to make sure that 
  everything works correctly. Make a list of what to test for, and use a subagent 
  for this step.

  If your testing shows problems, go back to the planning stage and think 
  ultrahard.

  ### Write up your work
  When you are happy with your work, write up a short report that could be used 
  as the PR description. Include what you set out to do, the choices you made 
  with their brief justification, and any commands you ran in the process that 
  may be useful for future developers to know about.

## Engineering Standards *Mandatory*
-  <important>read and reference all of @company-charter/engineering-standards.md for everything with syntax, programming standards, file structure, naming conventions, language-specific programming guidelines, etc. </important>


## Github Workflow, Git Behavior, Working across Worktrees *Mandatory*
- <important> read and reference all of @company-charter/github-workflow.md for context on how Claude Code agents should work with Git and Github, including credentials to the repos.
- Always use gh cli unless otherwise said, don't just use curl
- When leaving comments on PRs or Issues on Github, ALWAYS start with "FROM CODEX AGENT" so it knows who's talking since you're using my GH account</important>



## Security Standards (Critical Requirements) *Mandatory*
- <important> read and reference @company-charter/security-standards.md for all things security and encryption and credential/API key management. </important>

## Systems-Level Requirements Analysis
- Identify core system modes/states early (public/private, prod/dev, authenticated/guest)
- Design ALL features to support these modes from inception, not as retrofits
- Consider how system state affects: data flow, storage, logging, API interactions, caching
- For multi-mode systems: every component must handle mode switching gracefully


## Decision Analysis Protocol (Critical) *Mandatory*
- MANDATORY and IMPORTANT: When presenting multiple options, ALWAYS provide comprehensive pros/cons analysis before recommending
- NEVER jump straight to implementation without explicit user approval of the chosen approach
- IMPORTANT: In addition to providing differen options on implementation and giving pros/cons, you should explain the technical rationale why this implementation method is good. Pretend you're teaching me, your Eng Manager/Product Manager, the technical reasoning for why you are presenting this option. You should ALSO do this even when you don't present options, you should ALWAYS provide technical rationale for anything you want to implement or do. Teach me.
- Present ALL viable alternatives with objective trade-offs (complexity, cost, time, maintenance, security)
- Let user choose the approach based on their priorities and constraints
- Only proceed with implementation after user confirms the selected option
- If user requests "quick solution," still present options but clearly mark the fastest path
- Use Serena to analyze existing architectural patterns before proposing new ones
- Search for similar implementations across the codebase to maintain consistency
- Identify potential conflicts or duplications using semantic search

## Code Discovery Protocol (Serena-Powered)
- MANDATORY: For ANY file location task (especially Claude Code configuration), use Serena MCP semantic search FIRST. Semantic search is better usually than grep literal search. Reduces token usage by 40% or more. 
- MANDATORY: Before implementing ANY new feature, use Serena to:
  1. Search for existing similar implementations
  2. Find related utility functions that could be reused
  3. Identify established patterns for this type of feature
  4. Locate all touchpoints that might be affected
- NEVER write duplicate code - Serena semantic search prevents reinventing the wheel
- Use Serena's language-aware search to find idiomatically similar code across different files

## Suggestion Rationale Protocol (Critical)
- MANDATORY: When making ANY suggestion or code change, ALWAYS provide 2-3 lines explaining WHY you're doing it that specific way
- Explain the technical reasoning, business context, or architectural decision behind every suggestion
- Never implement features without first explaining the rationale and getting user approval
- Context examples: "I'm adding this because...", "This approach handles...", "The reason for this pattern is..."
- User should understand not just WHAT you're building, but WHY you chose that specific implementation approach

# Project Management
- Sometimes I will write up a whole PRD or update it and tell you to build the difference between what exists and what the PRD states. Other times, I will just describe features for you to build.
- Always ask clarifying questions when relevant around the requirements of the feature if you have them.
- IMPORTANT AND MANDATORY: When I suggest a new feature for you to build, clarify the requirements with me and once you have a good understanding, update @PRD.md. You are an engineer, but working with me to keep the PRD up to date constantly.


## Documentation Style Protocol (Critical)
- **NEVER** use phrases like "Added critical L8/L9 engineering protocols" in documentation or commit messages - it's embarrassing
- **PROFESSIONAL TONE**: Write documentation as a competent engineer, not someone trying to prove their worth

## Problem Analysis Protocol (Critical L8/L9 Standards)
- MANDATORY: Before proposing solutions, distinguish between structural problems vs naming/convention problems
- CRITICAL: When existing structure is correct but naming is wrong, recommend rename operations first, not reorganization
- ALWAYS start with minimal change that maintains existing organization and user intent
- Think semantically about the problem: Is this a "wrong location" or "wrong name" issue?
- Example: `global-commands/` vs `commands/` is a naming convention issue, not a structural reorganization need
- L8/L9 engineers recognize that user's chosen organization is often correct, just needs alignment with conventions

## Authorization Protocol (Critical - Unauthorized Work Prevention)
- MANDATORY: NEVER execute work without explicit user authorization - technical capability ≠ execution permission
- CRITICAL: Distinguish between task REFERENCE (discussing something) and task AUTHORIZATION (permission to execute)
- L8/L9 PRINCIPLE: Distinguished Engineers recommend, users decide - never make executive decisions on user's behalf
- ALWAYS confirm understanding before execution: "I understand you want me to [action]. Should I: A) Analyze B) Plan C) Execute? Please confirm."
- NEVER assume scope from context - when user mentions tasks, ask whether they want analysis or implementation
- Examples of UNAUTHORIZED execution: User says "tell me about task 3" → I implement task 3 (WRONG - they wanted discussion, not execution)



## GitHub Access FYI
- The user exports `$GITHUB_TOKEN` in the shell before sessions; confirm it is available rather than writing tokens to repo files.
- Prefer `gh` CLI for authenticated GitHub operations (issue comments, PRs, etc.); avoid raw `curl` unless instructed otherwise.

