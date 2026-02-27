# Claude Code Masterclass: Complete Plugin Ecosystem Guide

**Repository:** anthropics/claude-code (42K+ stars)
**Last Updated:** February 2026
**Purpose:** Comprehensive extraction of all agents, skills, commands, rules, hooks, and MCPs from the Claude Code plugin ecosystem

---

## Table of Contents

1. [Introduction](#introduction)
2. [Plugin System Overview](#plugin-system-overview)
3. [Official Plugins Directory](#official-plugins-directory)
4. [Complete Plugin Catalog](#complete-plugin-catalog)
5. [Agents Reference](#agents-reference)
6. [Skills Reference](#skills-reference)
7. [Commands Reference](#commands-reference)
8. [Hooks Reference](#hooks-reference)
9. [MCP Integration Reference](#mcp-integration-reference)
10. [Development Workflows](#development-workflows)
11. [Best Practices](#best-practices)
12. [Security Considerations](#security-considerations)

---

## Introduction

Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows—all through natural language commands.

### Key Features

- **Terminal Integration**: Works in your terminal, IDE, or via GitHub (@claude mentions)
- **Codebase Understanding**: Analyzes your entire project structure and patterns
- **Natural Language Interface**: Give instructions in plain English
- **Plugin System**: Extensible architecture for custom commands, agents, and hooks
- **Multi-Agent Workflows**: Parallel execution of specialized agents
- **Git Integration**: Seamless version control operations

### Installation

```bash
# macOS/Linux (Recommended)
curl -fsSL https://claude.ai/install.sh | bash

# Homebrew
brew install --cask claude-code

# Windows (Recommended)
irm https://claude.ai/install.ps1 | iex

# WinGet
winget install Anthropic.ClaudeCode
```

---

## Plugin System Overview

### What are Claude Code Plugins?

Claude Code plugins are extensions that enhance Claude Code with:
- **Custom Slash Commands**: `/command-name` for specific workflows
- **Specialized Agents**: Autonomous AI agents with focused expertise
- **Hooks**: Event-driven automation (PreToolUse, PostToolUse, Stop, etc.)
- **MCP Servers**: External service integrations via Model Context Protocol
- **Skills**: Knowledge modules loaded on-demand

### Plugin Structure

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata
├── commands/                # Slash commands (optional)
├── agents/                  # Specialized agents (optional)
├── skills/                  # Agent Skills (optional)
├── hooks/                   # Event handlers (optional)
├── .mcp.json                # External tool configuration (optional)
└── README.md                # Plugin documentation
```

### Component Types

#### Commands
- File-based with YAML frontmatter
- Executed as bash scripts
- Accessible via `/command-name`
- Can define arguments, hints, and allowed tools

#### Agents
- File-based with YAML frontmatter + system prompt
- Autonomous with specific expertise
- Can be spawned manually or by other components
- Configurable model, tools, color, and behavior

#### Skills
- Knowledge modules with progressive disclosure
- Auto-loaded based on trigger phrases
- Include SKILL.md core + references/examples
- Organized in `/skills/skill-name/` structure

#### Hooks
- Event-driven scripts triggered at specific points
- Support: PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit
- Can validate, block, or modify operations
- Written in Python, Bash, or other languages

#### MCP Integration
- Connect external services (APIs, databases, tools)
- Server types: stdio, SSE, HTTP, WebSocket
- Configuration via `.mcp.json` or plugin.json
- Tools auto-discovered and available in sessions

---

## Official Plugins Directory

This repository contains 12 official plugins demonstrating the full power of the plugin system.

### Plugin Summary

| Plugin | Purpose | Components |
|--------|---------|------------|
| **agent-sdk-dev** | Agent SDK development kit | 1 command, 2 agents |
| **claude-opus-4-5-migration** | Migrate to Opus 4.5 | 1 skill |
| **code-review** | Automated PR reviews | 1 command, 5 agents |
| **commit-commands** | Git workflow automation | 3 commands |
| **explanatory-output-style** | Educational insights | 1 hook |
| **feature-dev** | Structured feature development | 1 command, 3 agents |
| **frontend-design** | High-quality frontend interfaces | 1 skill |
| **hookify** | Easy hook creation | 4 commands, 1 agent, 1 skill |
| **learning-output-style** | Interactive learning | 1 hook |
| **plugin-dev** | Plugin development toolkit | 1 command, 3 agents, 7 skills |
| **pr-review-toolkit** | Comprehensive PR review | 1 command, 6 agents |
| **ralph-wiggum** | Iterative AI loops | 2 commands, 1 hook |
| **security-guidance** | Security reminders | 1 hook |

**Total Components:**
- 17 Commands
- 17 Agents
- 10 Skills
- 5 Hooks
- 1 Plugin Development Kit (7 skills)

---

## Complete Plugin Catalog

### 1. Agent SDK Development Plugin

**Directory:** `plugins/agent-sdk-dev/`
**Author:** Ashwin Bhat (ashwin@anthropic.com)

**Purpose:** Comprehensive plugin for creating and verifying Claude Agent SDK applications in Python and TypeScript.

#### Components

##### Command: `/new-sdk-app`
Interactive command that guides you through creating a new Claude Agent SDK application.

**Workflow:**
1. Asks clarifying questions (language, project name, agent type, starting point)
2. Checks for and installs the latest SDK version
3. Creates all necessary project files and configuration
4. Sets up environment files (`.env.example`, `.gitignore`)
5. Provides a working example tailored to your use case
6. Runs type checking (TypeScript) or syntax validation (Python)
7. Automatically verifies the setup using the appropriate verifier agent

**Usage:**
```bash
/new-sdk-app my-project-name
# Or interactive:
/new-sdk-app
```

**Interactive Questions:**
- Language choice (TypeScript or Python)
- Project name (if not provided as argument)
- Agent type (coding, business, custom)
- Starting point (minimal, basic, or specific example)
- Tooling preferences (npm/yarn/pnpm or pip/poetry)

##### Agent: `agent-sdk-verifier-py`
Thoroughly verifies Python Agent SDK applications for correct setup and best practices.

**Verification Checks:**
- SDK installation and version
- Python environment setup (requirements.txt, pyproject.toml)
- Correct SDK usage and patterns
- Agent initialization and configuration
- Environment and security (.env, API keys)
- Error handling and functionality
- Documentation completeness

**When to Use:**
- After creating a new Python SDK project
- After modifying an existing Python SDK application
- Before deploying a Python SDK application

**Output:**
Comprehensive report with:
- Overall status (PASS / PASS WITH WARNINGS / FAIL)
- Critical issues preventing functionality
- Warnings about suboptimal patterns
- List of passed checks
- Specific recommendations with SDK documentation references

##### Agent: `agent-sdk-verifier-ts`
Thoroughly verifies TypeScript Agent SDK applications for correct setup and best practices.

**Verification Checks:**
- SDK installation and version
- TypeScript configuration (tsconfig.json)
- Correct SDK usage and patterns
- Type safety and imports
- Agent initialization and configuration
- Environment and security (.env, API keys)
- Error handling and functionality
- Documentation completeness

**When to Use:**
- After creating a new TypeScript SDK project
- After modifying an existing TypeScript SDK application
- Before deploying a TypeScript SDK application

**Output:** Same format as Python verifier

#### Best Practices
- Always use the latest SDK version
- Verify before deploying
- Keep API keys secure (never commit `.env`)
- Follow SDK documentation patterns
- Type check TypeScript projects regularly
- Create test cases for agent functionality

---

### 2. Claude Opus 4.5 Migration Plugin

**Directory:** `plugins/claude-opus-4-5-migration/`
**Author:** William Hu (whu@anthropic.com)

**Purpose:** Migrate prompts and code from Claude Sonnet 4.0, Sonnet 4.5, or Opus 4.1 to Opus 4.5.

#### Components

##### Skill: `claude-opus-4-5-migration`
Automated migration for Opus 4.5 compatibility.

**Trigger Phrases:**
- "migrate to opus 4.5"
- "update model strings"
- "claude-sonnet-4" or "claude-opus-4-1"

**Migration Workflow:**
1. Search codebase for model strings and API calls
2. Update model strings to Opus 4.5
3. Remove unsupported beta headers
4. Add effort parameter set to `"high"`
5. Summarize all changes made

**Model String Updates:**

**Target Model Strings (Opus 4.5):**
| Platform | Model String |
|----------|--------------|
| Anthropic API (1P) | `claude-opus-4-5-20251101` |
| AWS Bedrock | `anthropic.claude-opus-4-5-20251101-v1:0` |
| Google Vertex AI | `claude-opus-4-5@20251101` |
| Azure AI Foundry | `claude-opus-4-5-20251101` |

**Source Model Strings to Replace:**

| Source Model | Anthropic API | AWS Bedrock | Google Vertex AI |
|--------------|---------------|-------------|------------------|
| Sonnet 4.0 | `claude-sonnet-4-20250514` | `anthropic.claude-sonnet-4-20250514-v1:0` | `claude-sonnet-4@20250514` |
| Sonnet 4.5 | `claude-sonnet-4-5-20250929` | `anthropic.claude-sonnet-4-5-20250929-v1:0` | `claude-sonnet-4-5@20250929` |
| Opus 4.1 | `claude-opus-4-1-20250422` | `anthropic.claude-opus-4-1-20250422-v1:0` | `claude-opus-4-1@20250422` |

**Note:** Do NOT migrate Haiku models (e.g., `claude-haiku-4-5-20251001`).

**Prompt Adjustments (if user reports issues):**

1. **Tool Overtriggering:** Soften aggressive language (`CRITICAL:` → remove, `You MUST` → `You should`)
2. **Over-Engineering Prevention:** Add snippet to prevent unwanted files/abstractions
3. **Code Exploration:** Add snippet to ensure file reading before proposing fixes
4. **Frontend Design:** Add aesthetics snippet for better UI quality
5. **Thinking Sensitivity:** Replace "think" with "consider"/"believe"/"evaluate"

**Usage:**
```
"Migrate my codebase to Opus 4.5"
```

---

### 3. Code Review Plugin

**Directory:** `plugins/code-review/`
**Author:** Boris Cherny (boris@anthropic.com)

**Purpose:** Automated code review for pull requests using multiple specialized agents with confidence-based scoring to filter false positives.

#### Components

##### Command: `/code-review`
Performs automated code review on a pull request using multiple specialized agents.

**Workflow:**
1. Checks if review is needed (skips closed, draft, trivial, or already-reviewed PRs)
2. Gathers relevant CLAUDE.md guideline files from repository
3. Summarizes the pull request changes
4. Launches 4 parallel agents to independently review:
   - **Agents #1 & #2**: Audit for CLAUDE.md compliance
   - **Agent #3**: Scan for obvious bugs in changes
   - **Agent #4**: Analyze git blame/history for context-based issues
5. Scores each issue 0-100 for confidence level
6. Filters out issues below 80 confidence threshold
7. Outputs review (to terminal by default, or as PR comment with `--comment` flag)

**Usage:**
```bash
# Output to terminal
/code-review

# Post as PR comment
/code-review --comment
```

**Features:**
- Multiple independent agents for comprehensive review
- Confidence-based scoring reduces false positives (threshold: 80)
- CLAUDE.md compliance checking with explicit guideline verification
- Bug detection focused on changes (not pre-existing issues)
- Historical context analysis via git blame
- Automatic skipping of closed, draft, or already-reviewed PRs
- Links directly to code with full SHA and line ranges

**Confidence Scoring:**
- **0**: Not confident, false positive
- **25**: Somewhat confident, might be real
- **50**: Moderately confident, real but minor
- **75**: Highly confident, real and important
- **100**: Absolutely certain, definitely real

**False Positives Filtered:**
- Pre-existing issues not introduced in PR
- Code that looks like a bug but isn't
- Pedantic nitpicks
- Issues linters will catch
- General quality issues (unless in CLAUDE.md)
- Issues with lint ignore comments

**Review Comment Format:**
```markdown
## Code review

Found 3 issues:

1. Missing error handling for OAuth callback (CLAUDE.md says "Always handle OAuth errors")

https://github.com/owner/repo/blob/abc123.../src/auth.ts#L67-L72

2. Memory leak: OAuth state not cleaned up (bug due to missing cleanup in finally block)

https://github.com/owner/repo/blob/abc123.../src/auth.ts#L88-L95

3. Inconsistent naming pattern (src/conventions/CLAUDE.md says "Use camelCase for functions")

https://github.com/owner/repo/blob/abc123.../src/utils.ts#L23-L28
```

**When to Use:**
- All pull requests with meaningful changes
- PRs touching critical code paths
- PRs from multiple contributors
- PRs where guideline compliance matters

**When NOT to Use:**
- Closed or draft PRs (automatically skipped)
- Trivial automated PRs (automatically skipped)
- Urgent hotfixes requiring immediate merge
- PRs already reviewed (automatically skipped)

---

### 4. Commit Commands Plugin

**Directory:** `plugins/commit-commands/`

**Purpose:** Git workflow automation for committing, pushing, and creating pull requests.

#### Components

##### Command: `/commit`
Streamlined git commit workflow.

##### Command: `/commit-push-pr`
Combined workflow: commit → push → create PR.

##### Command: `/clean_gone`
Clean up branches that are "gone" from remote.

**Usage:**
```bash
/commit "Add user authentication"
/commit-push-pr "Implement caching"
/clean_gone
```

---

### 5. Explanatory Output Style Plugin

**Directory:** `plugins/explanatory-output-style/`

**Purpose:** Adds educational insights about implementation choices and codebase patterns (mimics the deprecated Explanatory output style).

#### Components

##### Hook: SessionStart
Injects educational context at the start of each session.

**Effect:**
- Provides explanations for implementation choices
- Highlights codebase patterns and conventions
- Adds learning context during development

---

### 6. Feature Development Plugin

**Directory:** `plugins/feature-dev/`
**Author:** Sid Bidasaria (sbidasaria@anthropic.com)

**Purpose:** Comprehensive, structured workflow for feature development with specialized agents for codebase exploration, architecture design, and quality review.

#### Components

##### Command: `/feature-dev`
Launches a guided feature development workflow with 7 distinct phases.

**Usage:**
```bash
/feature-dev Add user authentication with OAuth
# Or interactive:
/feature-dev
```

**The 7-Phase Workflow:**

**Phase 1: Discovery**
- Clarifies the feature request if it's unclear
- Asks what problem you're solving
- Identifies constraints and requirements
- Summarizes understanding and confirms with you

**Phase 2: Codebase Exploration**
- Launches 2-3 `code-explorer` agents in parallel
- Each agent explores different aspects (similar features, architecture, UI patterns)
- Agents return comprehensive analyses with key files to read
- Claude reads all identified files to build deep understanding
- Presents comprehensive summary of findings

**Phase 3: Clarifying Questions**
- Reviews codebase findings and feature request
- Identifies underspecified aspects (edge cases, error handling, integration points, etc.)
- Presents all questions in an organized list
- **Waits for your answers before proceeding**

**Phase 4: Architecture Design**
- Launches 2-3 `code-architect` agents with different focuses:
  - **Minimal changes**: Smallest change, maximum reuse
  - **Clean architecture**: Maintainability, elegant abstractions
  - **Pragmatic balance**: Speed + quality
- Reviews all approaches
- Forms opinion on which fits best for this task
- Presents comparison with trade-offs and recommendation
- **Asks which approach you prefer**

**Phase 5: Implementation**
- **Waits for explicit approval** before starting
- Reads all relevant files identified in previous phases
- Implements following chosen architecture
- Follows codebase conventions strictly
- Writes clean, well-documented code
- Updates todos as progress is made

**Phase 6: Quality Review**
- Launches 3 `code-reviewer` agents in parallel with different focuses:
  - **Simplicity/DRY/Elegance**: Code quality and maintainability
  - **Bugs/Correctness**: Functional correctness and logic errors
  - **Conventions/Abstractions**: Project standards and patterns
- Consolidates findings
- Identifies highest severity issues
- **Presents findings and asks what you want to do** (fix now / fix later / proceed as-is)
- Addresses issues based on your decision

**Phase 7: Summary**
- Marks all todos complete
- Summarizes what was built, key decisions, files modified
- Suggests next steps

##### Agent: `code-explorer`
Deeply analyzes existing codebase features by tracing execution paths.

**Focus Areas:**
- Entry points and call chains
- Data flow and transformations
- Architecture layers and patterns
- Dependencies and integrations
- Implementation details

**Tools:** Glob, Grep, LS, Read, NotebookRead, WebFetch, TodoWrite, WebSearch, KillShell, BashOutput

**Output:**
- Entry points with file:line references
- Step-by-step execution flow
- Key components and responsibilities
- Architecture insights
- List of essential files to read

##### Agent: `code-architect`
Designs feature architectures and implementation blueprints.

**Focus Areas:**
- Codebase pattern analysis
- Architecture decisions
- Component design
- Implementation roadmap
- Data flow and build sequence

**Tools:** Glob, Grep, LS, Read, NotebookRead, WebFetch, TodoWrite, WebSearch, KillShell, BashOutput

**Output:**
- Patterns and conventions found
- Architecture decision with rationale
- Complete component design
- Implementation map with specific files
- Build sequence with phases

##### Agent: `code-reviewer`
Reviews code for bugs, quality issues, and project conventions.

**Focus Areas:**
- Project guideline compliance (CLAUDE.md)
- Bug detection
- Code quality issues
- Confidence-based filtering (only reports high-confidence issues ≥80)

**Tools:** Glob, Grep, LS, Read, NotebookRead, WebFetch, TodoWrite, WebSearch, KillShell, BashOutput

**Output:**
- Critical issues (confidence 75-100)
- Important issues (confidence 50-74)
- Specific fixes with file:line references
- Project guideline references

**When to Use This Plugin:**
- New features that touch multiple files
- Features requiring architectural decisions
- Complex integrations with existing code
- Features where requirements are somewhat unclear

**When NOT to Use:**
- Single-line bug fixes
- Trivial changes
- Well-defined, simple tasks
- Urgent hotfixes

---

### 7. Frontend Design Plugin

**Directory:** `plugins/frontend-design/`

**Purpose:** Create distinctive, production-grade frontend interfaces that avoid generic AI aesthetics.

#### Components

##### Skill: `frontend-design`
Guides creation of distinctive, production-grade frontend interfaces.

**Trigger Phrases:**
- "build web component"
- "create frontend interface"
- "design page"
- "frontend UI"
- "react component"
- "web application"

**Design Thinking:**
Before coding, understand context and commit to BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme (brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.)
- **Constraints**: Technical requirements (framework, performance, accessibility)
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**Frontend Aesthetics Guidelines:**

**Typography:**
- Choose beautiful, unique, interesting fonts
- Avoid generic fonts (Arial, Inter, Roboto, system fonts)
- Pair distinctive display font with refined body font
- Use unexpected, characterful font choices

**Color & Theme:**
- Commit to cohesive aesthetic
- Use CSS variables for consistency
- Dominant colors with sharp accents
- Avoid timid, evenly-distributed palettes

**Motion:**
- Use animations for effects and micro-interactions
- Prioritize CSS-only solutions for HTML
- Use Motion library for React when available
- Focus on high-impact moments: staggered reveals
- Use scroll-triggering and hover states that surprise

**Spatial Composition:**
- Unexpected layouts (asymmetry, overlap, diagonal flow)
- Grid-breaking elements
- Generous negative space OR controlled density

**Backgrounds & Visual Details:**
- Create atmosphere and depth (not solid colors)
- Add contextual effects and textures
- Gradient meshes, noise textures, geometric patterns
- Layered transparencies, dramatic shadows
- Decorative borders, custom cursors, grain overlays

**NEVER Use:**
- Generic AI-generated aesthetics
- Overused font families (Inter, Roboto, Arial, system fonts)
- Cliched color schemes (purple gradients on white)
- Predictable layouts and component patterns
- Cookie-cutter design lacking context-specific character

**Important:** Match implementation complexity to aesthetic vision. Maximalist designs need elaborate code with extensive animations. Minimalist designs need restraint, precision, and careful attention to spacing and details.

**Usage:**
```
"Build a todo list component with brutalist design"
"Create a luxury e-commerce checkout page"
"Design a playful dashboard with toy-like elements"
```

---

### 8. Hookify Plugin

**Directory:** `plugins/hookify/`

**Purpose:** Easily create custom hooks to prevent unwanted behaviors by analyzing conversation patterns or from explicit instructions.

#### Components

##### Command: `/hookify`
Create a hook from explicit instructions or analyze conversation to find unwanted behaviors.

**Usage:**
```bash
# With arguments - create from description
/hookify Warn me when I use rm -rf commands

# Without arguments - analyze conversation
/hookify
```

##### Command: `/hookify:list`
List all active hookify rules.

##### Command: `/hookify:configure`
Interactively enable/disable existing rules.

##### Command: `/hookify:help`
Get help with hookify.

##### Agent: `conversation-analyzer`
Analyzes conversations for problematic behaviors to suggest hooks.

##### Skill: `writing-rules`
Guidance on hookify rule syntax and patterns.

#### Rule Configuration Format

**Simple Rule (Single Pattern):**
```markdown
---
name: block-dangerous-rm
enabled: true
event: bash
pattern: rm\s+-rf
action: block
---

⚠️ **Dangerous rm command detected!**

This command could delete important files. Please:
- Verify the path is correct
- Consider using a safer approach
- Make sure you have backups
```

**Action Field:**
- `warn`: Shows warning but allows operation (default)
- `block`: Prevents operation from executing (PreToolUse) or stops session (Stop events)

**Advanced Rule (Multiple Conditions):**
```markdown
---
name: warn-sensitive-files
enabled: true
event: file
action: warn
conditions:
  - field: file_path
    operator: regex_match
    pattern: \.env$|credentials|secrets
  - field: new_text
    operator: contains
    pattern: KEY
---

🔐 **Sensitive file edit detected!**

Ensure credentials are not hardcoded and file is in .gitignore.
```

**All conditions must match** for the rule to trigger.

**Event Types:**
- **`bash`**: Triggers on Bash tool commands
- **`file`**: Triggers on Edit, Write, MultiEdit tools
- **`stop`**: Triggers when Claude wants to stop
- **`prompt`**: Triggers on user prompt submission
- **`all`**: Triggers on all events

**Pattern Syntax (Python regex):**
| Pattern | Matches | Example |
|---------|---------|---------|
| `rm\s+-rf` | rm -rf | rm -rf /tmp |
| `console\.log\(` | console.log( | console.log("test") |
| `(eval\|exec)\(` | eval( or exec( | eval("code") |
| `\.env$` | files ending in .env | .env, .env.local |
| `chmod\s+777` | chmod 777 | chmod 777 file.txt |

**Operators Reference:**
- `regex_match`: Pattern must match (most common)
- `contains`: String must contain pattern
- `equals`: Exact string match
- `not_contains`: String must NOT contain pattern
- `starts_with`: String starts with pattern
- `ends_with`: String ends with pattern

**Field Reference:**

**For bash events:**
- `command`: The bash command string

**For file events:**
- `file_path`: Path to file being edited
- `new_text`: New content being added
- `old_text`: Old content being replaced (Edit only)
- `content`: File content (Write only)

**For prompt events:**
- `user_prompt`: The user's submitted prompt text

**For stop events:**
- Use general matching on session state

**Examples:**

**Example 1: Block Dangerous Commands**
```markdown
---
name: block-destructive-ops
enabled: true
event: bash
pattern: rm\s+-rf|dd\s+if=|mkfs|format
action: block
---

🛑 **Destructive operation detected!**

This command can cause data loss. Operation blocked for safety.
Please verify the exact path and use a safer approach.
```

**Example 2: Warn About Debug Code**
```markdown
---
name: warn-debug-code
enabled: true
event: file
pattern: console\.log\(|debugger;|print\(
action: warn
---

🐛 **Debug code detected**

Remember to remove debugging statements before committing.
```

**Example 3: Require Tests Before Stopping**
```markdown
---
name: require-tests-run
enabled: false
event: stop
action: block
conditions:
  - field: transcript
    operator: not_contains
    pattern: npm test|pytest|cargo test
---

**Tests not detected in transcript!**

Before stopping, please run tests to verify your changes work correctly.
```

**Management:**
- **Enable/Disable**: Edit `.local.md` file and set `enabled: true/false`
- **Delete**: Simply delete the `.local.md` file
- **List**: `/hookify:list`

**Requirements:**
- Python 3.7+
- No external dependencies (uses stdlib only)

---

### 9. Learning Output Style Plugin

**Directory:** `plugins/learning-output-style/`

**Purpose:** Interactive learning mode that requests meaningful code contributions at decision points (mimics the unshipped Learning output style).

#### Components

##### Hook: SessionStart
Encourages users to write meaningful code (5-10 lines) at decision points while receiving educational insights.

**Effect:**
- Requests user code contributions at key decision points
- Provides educational insights about implementation choices
- Balances learning with AI assistance

---

### 10. Plugin Development Toolkit

**Directory:** `plugins/plugin-dev/`
**Author:** Daisy Hollman (daisy@anthropic.com)

**Purpose:** Comprehensive toolkit for developing Claude Code plugins with expert guidance on hooks, MCP integration, plugin structure, and marketplace publishing.

#### Components

##### Command: `/plugin-dev:create-plugin`
Comprehensive, end-to-end workflow for creating plugins from scratch.

**8-Phase Process:**
1. **Discovery** - Understand plugin purpose and requirements
2. **Component Planning** - Determine needed skills, commands, agents, hooks, MCP
3. **Detailed Design** - Specify each component and resolve ambiguities
4. **Structure Creation** - Set up directories and manifest
5. **Component Implementation** - Create each component using AI-assisted agents
6. **Validation** - Run plugin-validator and component-specific checks
7. **Testing** - Verify plugin works in Claude Code
8. **Documentation** - Finalize README and prepare for distribution

**Usage:**
```bash
/plugin-dev:create-plugin
/plugin-dev:create-plugin A plugin for managing database migrations
```

##### Agent: `agent-creator`
AI-assisted agent generation.

##### Agent: `plugin-validator`
Validates plugin structure and configuration.

##### Agent: `skill-reviewer`
Reviews skill quality and trigger phrases.

#### Skills (7 Total)

**Total Content:**
- **Core Skills**: ~11,065 words across 7 SKILL.md files
- **Reference Docs**: ~10,000+ words of detailed guides
- **Examples**: 12+ working examples (hook scripts, MCP configs, plugin layouts, settings files)
- **Utilities**: 6 production-ready validation/testing/parsing scripts

##### Skill 1: Hook Development
**Trigger Phrases:**
- "create a hook"
- "add a PreToolUse hook"
- "validate tool use"
- "implement prompt-based hooks"
- "${CLAUDE_PLUGIN_ROOT}"
- "block dangerous commands"

**What It Covers:**
- Prompt-based hooks (recommended) with LLM decision-making
- Command hooks for deterministic validation
- All hook events: PreToolUse, PostToolUse, Stop, SubagentStop, SessionStart, SessionEnd, UserPromptSubmit, PreCompact, Notification
- Hook output formats and JSON schemas
- Security best practices and input validation
- ${CLAUDE_PLUGIN_ROOT} for portable paths

**Resources:**
- Core SKILL.md (1,619 words)
- 3 example hook scripts (validate-write, validate-bash, load-context)
- 3 reference docs: patterns, migration, advanced techniques
- 3 utility scripts: validate-hook-schema.sh, test-hook.sh, hook-linter.sh

**Use When:** Creating event-driven automation, validating operations, or enforcing policies.

##### Skill 2: MCP Integration
**Trigger Phrases:**
- "add MCP server"
- "integrate MCP"
- "configure .mcp.json"
- "Model Context Protocol"
- "stdio/SSE/HTTP server"
- "connect external service"

**What It Covers:**
- MCP server configuration (.mcp.json vs plugin.json)
- All server types: stdio (local), SSE (hosted/OAuth), HTTP (REST), WebSocket (real-time)
- Environment variable expansion (${CLAUDE_PLUGIN_ROOT}, user vars)
- MCP tool naming and usage in commands/agents
- Authentication patterns: OAuth, tokens, env vars
- Integration patterns and performance optimization

**Resources:**
- Core SKILL.md (1,666 words)
- 3 example configurations (stdio, SSE, HTTP)
- 3 reference docs: server-types (~3,200w), authentication (~2,800w), tool-usage (~2,600w)

**Use When:** Integrating external services, APIs, databases, or tools into your plugin.

##### Skill 3: Plugin Structure
**Trigger Phrases:**
- "plugin structure"
- "plugin.json manifest"
- "auto-discovery"
- "component organization"
- "plugin directory layout"

**What It Covers:**
- Standard plugin directory structure and auto-discovery
- plugin.json manifest format and all fields
- Component organization (commands, agents, skills, hooks)
- ${CLAUDE_PLUGIN_ROOT} usage throughout
- File naming conventions and best practices
- Minimal, standard, and advanced plugin patterns

**Resources:**
- Core SKILL.md (1,619 words)
- 3 example structures (minimal, standard, advanced)
- 2 reference docs: component-patterns, manifest-reference

**Use When:** Starting a new plugin, organizing components, or configuring the plugin manifest.

##### Skill 4: Plugin Settings
**Trigger Phrases:**
- "plugin settings"
- "store plugin configuration"
- ".local.md files"
- "plugin state files"
- "read YAML frontmatter"
- "per-project plugin settings"

**What It Covers:**
- .claude/plugin-name.local.md pattern for configuration
- YAML frontmatter + markdown body structure
- Parsing techniques for bash scripts (sed, awk, grep patterns)
- Temporarily active hooks (flag files and quick-exit)
- Real-world examples from multi-agent-swarm and ralph-wiggum plugins
- Atomic file updates and validation
- Gitignore and lifecycle management

**Resources:**
- Core SKILL.md (1,623 words)
- 3 examples (read-settings hook, create-settings command, templates)
- 2 reference docs: parsing-techniques, real-world-examples
- 2 utility scripts: validate-settings.sh, parse-frontmatter.sh

**Use When:** Making plugins configurable, storing per-project state, or implementing user preferences.

##### Skill 5: Command Development
**Trigger Phrases:**
- "create a slash command"
- "add a command"
- "command frontmatter"
- "define command arguments"
- "organize commands"

**What It Covers:**
- Slash command structure and markdown format
- YAML frontmatter fields (description, argument-hint, allowed-tools)
- Dynamic arguments and file references
- Bash execution for context
- Command organization and namespacing
- Best practices for command development

**Resources:**
- Core SKILL.md (1,535 words)
- Examples and reference documentation
- Command organization patterns

**Use When:** Creating slash commands, defining command arguments, or organizing plugin commands.

##### Skill 6: Agent Development
**Trigger Phrases:**
- "create an agent"
- "add an agent"
- "write a subagent"
- "agent frontmatter"
- "when to use description"
- "agent examples"
- "autonomous agent"

**What It Covers:**
- Agent file structure (YAML frontmatter + system prompt)
- All frontmatter fields (name, description, model, color, tools)
- Description format with <example> blocks for reliable triggering
- System prompt design patterns (analysis, generation, validation, orchestration)
- AI-assisted agent generation using Claude Code's proven prompt
- Validation rules and best practices
- Complete production-ready agent examples

**Resources:**
- Core SKILL.md (1,438 words)
- 2 examples: agent-creation-prompt (AI-assisted workflow), complete-agent-examples (4 full agents)
- 3 reference docs: agent-creation-system-prompt (from Claude Code), system-prompt-design (~4,000w), triggering-examples (~2,500w)
- 1 utility script: validate-agent.sh

**Use When:** Creating autonomous agents, defining agent behavior, or implementing AI-assisted agent generation.

##### Skill 7: Skill Development
**Trigger Phrases:**
- "create a skill"
- "add a skill to plugin"
- "write a new skill"
- "improve skill description"
- "organize skill content"

**What It Covers:**
- Skill structure (SKILL.md with YAML frontmatter)
- Progressive disclosure principle (metadata → SKILL.md → resources)
- Strong trigger descriptions with specific phrases
- Writing style (imperative/infinitive form, third person)
- Bundled resources organization (references/, examples/, scripts/)
- Skill creation workflow
- Based on skill-creator methodology adapted for Claude Code plugins

**Resources:**
- Core SKILL.md (1,232 words)
- References: skill-creator methodology, plugin-dev patterns
- Examples: Study plugin-dev's own skills as templates

**Use When:** Creating new skills for plugins or improving existing skill quality.

#### Progressive Disclosure System

Each skill uses a three-level disclosure system:

1. **Metadata** (always loaded): Concise descriptions with strong triggers
2. **Core SKILL.md** (when triggered): Essential API reference (~1,500-2,000 words)
3. **References/Examples** (as needed): Detailed guides, patterns, and working code

This keeps Claude Code's context focused while providing deep knowledge when needed.

#### Utility Scripts

The hook-development skill includes production-ready utilities:

```bash
# Validate hooks.json structure
./validate-hook-schema.sh hooks/hooks.json

# Test hooks before deployment
./test-hook.sh my-hook.sh test-input.json

# Lint hook scripts for best practices
./hook-linter.sh my-hook.sh
```

---

### 11. PR Review Toolkit Plugin

**Directory:** `plugins/pr-review-toolkit/`
**Author:** Daisy (daisy@anthropic.com)

**Purpose:** Comprehensive collection of specialized agents for thorough pull request review, covering code comments, test coverage, error handling, type design, code quality, and code simplification.

#### Components

##### Command: `/pr-review-toolkit:review-pr`
Run with optional review aspects.

**Usage:**
```bash
/pr-review-toolkit:review-pr
/pr-review-toolkit:review-pr comments, tests, errors
/pr-review-toolkit:review-pr all
```

**Options:**
- `comments`: Review code comment accuracy
- `tests`: Review test coverage
- `errors`: Check error handling
- `types`: Review type design
- `code`: General code review
- `simplify`: Code simplification
- `all`: Run all review agents

#### Agents (6 Total)

##### Agent 1: `comment-analyzer`
**Focus:** Code comment accuracy and maintainability

**Analyzes:**
- Comment accuracy vs actual code
- Documentation completeness
- Comment rot and technical debt
- Misleading or outdated comments

**When to Use:**
- After adding documentation
- Before finalizing PRs with comment changes
- When reviewing existing comments

**Triggers:**
```
"Check if the comments are accurate"
"Review the documentation I added"
"Analyze comments for technical debt"
```

##### Agent 2: `pr-test-analyzer`
**Focus:** Test coverage quality and completeness

**Analyzes:**
- Behavioral vs line coverage
- Critical gaps in test coverage
- Test quality and resilience
- Edge cases and error conditions

**When to Use:**
- After creating a PR
- When adding new functionality
- To verify test thoroughness

**Triggers:**
```
"Check if the tests are thorough"
"Review test coverage for this PR"
"Are there any critical test gaps?"
```

##### Agent 3: `silent-failure-hunter`
**Focus:** Error handling and silent failures

**Analyzes:**
- Silent failures in catch blocks
- Inadequate error handling
- Inappropriate fallback behavior
- Missing error logging

**When to Use:**
- After implementing error handling
- When reviewing try/catch blocks
- Before finalizing PRs with error handling

**Triggers:**
```
"Review the error handling"
"Check for silent failures"
"Analyze catch blocks in this PR"
```

##### Agent 4: `type-design-analyzer`
**Focus:** Type design quality and invariants

**Analyzes:**
- Type encapsulation (rated 1-10)
- Invariant expression (rated 1-10)
- Type usefulness (rated 1-10)
- Invariant enforcement (rated 1-10)

**When to Use:**
- When introducing new types
- During PR creation with data models
- When refactoring type designs

**Triggers:**
```
"Review the UserAccount type design"
"Analyze type design in this PR"
"Check if this type has strong invariants"
```

##### Agent 5: `code-reviewer`
**Focus:** General code review for project guidelines

**Analyzes:**
- CLAUDE.md compliance
- Style violations
- Bug detection
- Code quality issues

**When to Use:**
- After writing or modifying code
- Before committing changes
- Before creating pull requests

**Triggers:**
```
"Review my recent changes"
"Check if everything looks good"
"Review this code before I commit"
```

##### Agent 6: `code-simplifier`
**Focus:** Code simplification and refactoring

**Analyzes:**
- Code clarity and readability
- Unnecessary complexity and nesting
- Redundant code and abstractions
- Consistency with project standards
- Overly compact or clever code

**When to Use:**
- After writing or modifying code
- After passing code review
- When code works but feels complex

**Triggers:**
```
"Simplify this code"
"Make this clearer"
"Refine this implementation"
```

**Note:** This agent preserves functionality while improving code structure and maintainability.

#### Usage Patterns

**Individual Agent Usage:**
```
"Can you check if the tests cover all edge cases?"
→ Triggers pr-test-analyzer

"Review the error handling in the API client"
→ Triggers silent-failure-hunter

"I've added documentation - is it accurate?"
→ Triggers comment-analyzer
```

**Comprehensive PR Review:**
```
"I'm ready to create this PR. Please:
1. Review test coverage
2. Check for silent failures
3. Verify code comments are accurate
4. Review any new types
5. General code review"
```

**Recommended Workflow:**
1. Write code → **code-reviewer**
2. Fix issues → **silent-failure-hunter** (if error handling)
3. Add tests → **pr-test-analyzer**
4. Document → **comment-analyzer**
5. Review passes → **code-simplifier** (polish)
6. Create PR

---

### 12. Ralph Wiggum Plugin

**Directory:** `plugins/ralph-wiggum/`

**Purpose:** Implementation of the Ralph Wiggum technique for iterative, self-referential AI development loops.

#### Components

##### Command: `/ralph-loop`
Start a Ralph loop in your current session.

**Usage:**
```bash
/ralph-loop "<prompt>" --max-iterations <n> --completion-promise "<text>"
```

**Options:**
- `--max-iterations <n>` - Stop after N iterations (default: unlimited)
- `--completion-promise <text>` - Phrase that signals completion

##### Command: `/cancel-ralph`
Cancel the active Ralph loop.

##### Hook: Stop
Intercepts Claude's exit attempts to create the self-referential loop.

#### How Ralph Works

The technique is named after Ralph Wiggum from The Simpsons, embodying the philosophy of persistent iteration despite setbacks.

**Core Concept:**
```bash
# You run ONCE:
/ralph-loop "Your task description" --completion-promise "DONE"

# Then Claude Code automatically:
# 1. Works on the task
# 2. Tries to exit
# 3. Stop hook blocks exit
# 4. Stop hook feeds the SAME prompt back
# 5. Repeat until completion
```

The loop happens **inside your current session** - you don't need external bash loops. The Stop hook creates the self-referential feedback loop by blocking normal session exit.

**Self-Referential Feedback Loop:**
- The prompt never changes between iterations
- Claude's previous work persists in files
- Each iteration sees modified files and git history
- Claude autonomously improves by reading its own past work in files

#### Prompt Writing Best Practices

**1. Clear Completion Criteria**
```
❌ Bad: "Build a todo API and make it good."

✅ Good:
Build a REST API for todos.

When complete:
- All CRUD endpoints working
- Input validation in place
- Tests passing (coverage > 80%)
- README with API docs
- Output: <promise>COMPLETE</promise>
```

**2. Incremental Goals**
```
❌ Bad: "Create a complete e-commerce platform."

✅ Good:
Phase 1: User authentication (JWT, tests)
Phase 2: Product catalog (list/search, tests)
Phase 3: Shopping cart (add/remove, tests)

Output <promise>COMPLETE</promise> when all phases done.
```

**3. Self-Correction**
```
❌ Bad: "Write code for feature X."

✅ Good:
Implement feature X following TDD:
1. Write failing tests
2. Implement feature
3. Run tests
4. If any fail, debug and fix
5. Refactor if needed
6. Repeat until all green
7. Output: <promise>COMPLETE</promise>
```

**4. Escape Hatches**
Always use `--max-iterations` as a safety net:

```bash
# Recommended: Always set a reasonable iteration limit
/ralph-loop "Try to implement feature X" --max-iterations 20
```

**Note:** The `--completion-promise` uses exact string matching, so you cannot use it for multiple completion conditions. Always rely on `--max-iterations` as your primary safety mechanism.

#### Philosophy

**Ralph embodies:**
1. **Iteration > Perfection** - Don't aim for perfect on first try
2. **Failures Are Data** - "Deterministically bad" means failures are predictable and informative
3. **Operator Skill Matters** - Success depends on writing good prompts
4. **Persistence Wins** - Keep trying until success

#### When to Use Ralph

**Good for:**
- Well-defined tasks with clear success criteria
- Tasks requiring iteration and refinement (e.g., getting tests to pass)
- Greenfield projects where you can walk away
- Tasks with automatic verification (tests, linters)

**Not good for:**
- Tasks requiring human judgment or design decisions
- One-shot operations
- Tasks with unclear success criteria
- Production debugging (use targeted debugging instead)

#### Real-World Results

- Successfully generated 6 repositories overnight in Y Combinator hackathon testing
- One $50k contract completed for $297 in API costs
- Created entire programming language ("cursed") over 3 months using this approach

#### Quick Start Example

```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

Claude will:
- Implement the API iteratively
- Run tests and see failures
- Fix bugs based on test output
- Iterate until all requirements met
- Output the completion promise when done

---

### 13. Security Guidance Plugin

**Directory:** `plugins/security-guidance/`

**Purpose:** Security reminder hook that warns about potential security issues when editing files.

#### Components

##### Hook: PreToolUse
Monitors 9 security patterns including command injection, XSS, eval usage, dangerous HTML, pickle deserialization, and os.system calls.

**Security Patterns Checked:**

1. **GitHub Actions Workflow Injection**
   - Path: `.github/workflows/*.yml` or `*.yaml`
   - Warns about using untrusted input in `run:` commands
   - Recommends using `env:` with proper quoting

2. **child_process.exec Injection**
   - Substrings: `child_process.exec`, `exec(`, `execSync(`
   - Recommends using `execFileNoThrow` utility instead

3. **new Function Injection**
   - Substrings: `new Function`
   - Warns about code injection vulnerabilities

4. **eval Injection**
   - Substrings: `eval(`
   - Warns about arbitrary code execution risks

5. **React dangerouslySetInnerHTML XSS**
   - Substrings: `dangerouslySetInnerHTML`
   - Recommends HTML sanitization with DOMPurify

6. **document.write XSS**
   - Substrings: `document.write`
   - Recommends DOM manipulation methods instead

7. **innerHTML XSS**
   - Substrings: `.innerHTML =` or `.innerHTML=`
   - Recommends textContent for plain text or safe DOM methods

8. **Pickle Deserialization**
   - Substrings: `pickle`
   - Warns about arbitrary code execution risks

9. **os.system Injection**
   - Substrings: `os.system`, `from os import system`
   - Warns to use only with static arguments

**Hook Behavior:**
- Checks file path and content against security patterns
- Shows warning only once per session per file/pattern combination
- Writes warnings to stderr and blocks tool execution (exit code 2)
- State persisted per session in `~/.claude/security_warnings_state_{session_id}.json`
- Automatically cleans up state files older than 30 days

**Environment Configuration:**
- `ENABLE_SECURITY_REMINDER=1` (default) to enable
- `ENABLE_SECURITY_REMINDER=0` to disable

**Example Warning:**
```
⚠️ Security Warning: Using child_process.exec() can lead to command injection vulnerabilities.

This codebase provides a safer alternative: src/utils/execFileNoThrow.ts

Instead of:
  exec(`command ${userInput}`)

Use:
  import { execFileNoThrow } from '../utils/execFileNoThrow.js'
  await execFileNoThrow('command', [userInput])
```

---

## Agents Reference

Complete catalog of all agents across the official plugins.

### Agent Specifications

Each agent has the following structure:

```yaml
---
name: agent-name
description: Clear description with trigger phrases
tools: [list of available tools]
model: sonnet|opus|haiku
color: yellow|green|blue|red|purple
---

# System prompt...
```

### Agent Directory

| Agent | Plugin | Purpose | Model | Color |
|-------|--------|---------|-------|-------|
| `agent-sdk-verifier-py` | agent-sdk-dev | Verify Python SDK apps | sonnet | - |
| `agent-sdk-verifier-ts` | agent-sdk-dev | Verify TypeScript SDK apps | sonnet | - |
| `code-explorer` | feature-dev | Trace codebase features | sonnet | yellow |
| `code-architect` | feature-dev | Design architectures | sonnet | green |
| `code-reviewer` | feature-dev | Code quality review | sonnet | - |
| `conversation-analyzer` | hookify | Analyze conversations | - | - |
| `agent-creator` | plugin-dev | AI-assisted agent creation | - | - |
| `plugin-validator` | plugin-dev | Validate plugin structure | - | - |
| `skill-reviewer` | plugin-dev | Review skill quality | - | - |
| `comment-analyzer` | pr-review-toolkit | Comment accuracy | - | - |
| `pr-test-analyzer` | pr-review-toolkit | Test coverage | - | - |
| `silent-failure-hunter` | pr-review-toolkit | Error handling | - | - |
| `type-design-analyzer` | pr-review-toolkit | Type design | - | - |
| `code-simplifier` | pr-review-toolkit | Code simplification | - | - |
| `code-reviewer` | pr-review-toolkit | General review | - | - |

### Agent Design Patterns

**System Prompt Design:**
- Clear mission statement
- Core process steps
- Output guidance with specific format requirements
- Focus areas and priorities

**Tool Selection:**
- Only declare tools the agent actually needs
- Common tools: Glob, Grep, LS, Read, NotebookRead, WebFetch, TodoWrite, WebSearch, KillShell, BashOutput

**Model Selection:**
- `sonnet`: Balanced performance and cost (most common)
- `opus`: Maximum capability for complex tasks
- `haiku`: Fast, lightweight for simple tasks

**Color Coding:**
- Visual identification in agent output
- Common colors: yellow (analysis), green (design), blue (review), red (critical), purple (meta)

---

## Skills Reference

Complete catalog of all skills across the official plugins.

### Skill Specifications

Each skill has the following structure:

```yaml
---
name: skill-name
description: Clear description with trigger phrases
license: Complete terms in LICENSE.txt
---

# Core skill content...
```

### Skill Directory

| Skill | Plugin | Purpose | Trigger Phrases |
|-------|--------|---------|-----------------|
| `claude-opus-4-5-migration` | claude-opus-4-5-migration | Migrate to Opus 4.5 | "migrate to opus 4.5", "update model strings" |
| `frontend-design` | frontend-design | High-quality frontend | "build web component", "create frontend interface" |
| `writing-rules` | hookify | Hook syntax guidance | "hook rules", "hookify pattern" |
| `hook-development` | plugin-dev | Create hooks | "create a hook", "add PreToolUse hook" |
| `mcp-integration` | plugin-dev | MCP servers | "add MCP server", "integrate MCP" |
| `plugin-structure` | plugin-dev | Plugin organization | "plugin structure", "plugin.json manifest" |
| `plugin-settings` | plugin-dev | Plugin configuration | "plugin settings", ".local.md files" |
| `command-development` | plugin-dev | Create commands | "create slash command", "add a command" |
| `agent-development` | plugin-dev | Create agents | "create an agent", "add an agent" |
| `skill-development` | plugin-dev | Create skills | "create a skill", "add skill to plugin" |

### Progressive Disclosure System

Skills load in three tiers:

**Tier 1: Metadata (Always Loaded)**
- Name + description only (~30-50 tokens per skill)
- Always present in context
- Enables fast triggering decisions

**Tier 2: Core SKILL.md (When Triggered)**
- Full skill documentation (~1,500-2,000 words)
- Loaded only when skill becomes relevant
- Contains essential API reference and usage

**Tier 3: References/Examples (As Needed)**
- Detailed guides, patterns, and working code
- Loaded only for specific deep operations
- Includes examples, reference docs, and utilities

This design keeps context focused while providing deep knowledge when needed.

---

## Commands Reference

Complete catalog of all commands across the official plugins.

### Command Specifications

Each command is a markdown file with YAML frontmatter:

```yaml
---
description: Command description
argument-hint: [optional argument hint]
allowed-tools: [optional tool restrictions]
---

# Command implementation...
```

### Command Directory

| Command | Plugin | Purpose |
|---------|--------|---------|
| `/new-sdk-app` | agent-sdk-dev | Create Agent SDK project |
| `/code-review` | code-review | Automated PR review |
| `/commit` | commit-commands | Streamlined git commit |
| `/commit-push-pr` | commit-commands | Commit, push, create PR |
| `/clean_gone` | commit-commands | Clean gone branches |
| `/feature-dev` | feature-dev | 7-phase feature workflow |
| `/hookify` | hookify | Create hook from description |
| `/hookify:list` | hookify | List all hooks |
| `/hookify:configure` | hookify | Configure hooks |
| `/hookify:help` | hookify | Hookify help |
| `/plugin-dev:create-plugin` | plugin-dev | Create plugin (8-phase) |
| `/pr-review-toolkit:review-pr` | pr-review-toolkit | Comprehensive PR review |
| `/ralph-loop` | ralph-wiggum | Start iterative loop |
| `/cancel-ralph` | ralph-wiggum | Cancel Ralph loop |

### Command Categories

**Development Workflows:**
- `/feature-dev` - Structured feature development
- `/plugin-dev:create-plugin` - Plugin creation
- `/ralph-loop` - Iterative AI loops

**Code Review:**
- `/code-review` - Automated PR review
- `/pr-review-toolkit:review-pr` - Comprehensive PR review

**Git Operations:**
- `/commit` - Streamlined commit
- `/commit-push-pr` - Full workflow
- `/clean_gone` - Cleanup

**Project Setup:**
- `/new-sdk-app` - Agent SDK scaffolding

**Safety:**
- `/hookify` - Create safety hooks
- `/hookify:list` - Manage hooks
- `/hookify:configure` - Configure hooks

---

## Hooks Reference

Complete catalog of all hooks across the official plugins.

### Hook Events

**Available Events:**
- `PreToolUse`: Before tool execution (can block)
- `PostToolUse`: After tool execution (can modify output)
- `Stop`: When agent wants to exit (can block)
- `SubagentStop`: When subagent exits
- `SessionStart`: At session initialization
- `SessionEnd`: At session termination
- `UserPromptSubmit`: When user submits prompt
- `PreCompact`: Before context compaction
- `Notification`: When notifications arrive

### Hook Directory

| Hook | Plugin | Event | Purpose |
|------|--------|-------|---------|
| `SessionStart` | explanatory-output-style | SessionStart | Inject educational context |
| `SessionStart` | learning-output-style | SessionStart | Request user code contributions |
| `Stop` | ralph-wiggum | Stop | Block exit for iteration |
| `PreToolUse` | security-guidance | PreToolUse | Security pattern checking |
| `hooks.json` | hookify | Multiple | User-defined rules |
| `hooks.json` | explanatory-output-style | SessionStart | Educational injections |
| `hooks.json` | learning-output-style | SessionStart | Learning mode |
| `hooks.json` | ralph-wiggum | Stop | Ralph iteration loop |

### Hook Implementation Patterns

**Command Hooks (Deterministic):**
```bash
#!/bin/bash
# Validate command before execution
command="$1"
# ... validation logic ...
exit 0  # Allow or exit 1-255 to block
```

**Prompt-Based Hooks (LLLM Decision-Making):**
```bash
#!/bin/bash
# Send to Claude for decision
echo "Should I allow this operation?" | claude
# ... handle decision ...
```

**Python Hooks (Complex Logic):**
```python
#!/usr/bin/env python3
import json, sys
input_data = json.load(sys.stdin)
# ... complex logic ...
print(json.dumps(output))
```

### Hook Output Codes

- `0`: Allow operation to proceed
- `1-255`: Block operation (specific codes can have meaning)
- `2`: Commonly used for blocking in PreToolUse hooks

---

## MCP Integration Reference

Model Context Protocol (MCP) enables external service integration.

### MCP Server Types

| Type | Use Case | Example |
|------|----------|---------|
| **stdio** | Local tools, CLI wrappers | Filesystem, local databases |
| **SSE** | Hosted services, OAuth-protected | Asana, Notion, GitHub |
| **HTTP** | REST API integration | Public APIs, microservices |
| **WebSocket** | Real-time communication | Live data streams, notifications |

### Configuration Methods

**Method 1: .mcp.json file**
```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/allowed/path"]
    },
    "postgres": {
      "command": "uvx",
      "args": ["mcp-server-postgres", "postgresql://user:pass@localhost/db"]
    }
  }
}
```

**Method 2: plugin.json**
```json
{
  "name": "my-plugin",
  "mcpServers": {
    "my-service": {
      "transport": {
        "type": "sse",
        "url": "https://api.example.com/sse"
      },
      "auth": {
        "type": "oauth",
        "config": {
          "tokenUrl": "https://api.example.com/oauth/token"
        }
      }
    }
  }
}
```

### Environment Variables

MCP configurations support environment variable expansion:

```json
{
  "servers": {
    "service": {
      "command": "node",
      "args": [
        "server.js",
        "--token", "${SERVICE_TOKEN}",
        "--path", "${CLAUDE_PLUGIN_ROOT}/data"
      ]
    }
  }
}
```

**Built-in Variables:**
- `${CLAUDE_PLUGIN_ROOT}`: Plugin directory path
- `${HOME}`: User home directory
- Custom environment variables

### Authentication Patterns

**Environment Variables:**
```json
{
  "servers": {
    "service": {
      "command": "node",
      "args": ["--token", "${MY_API_TOKEN}"]
    }
  }
}
```

**OAuth (SSE transport):**
```json
{
  "transport": {
    "type": "sse",
    "url": "https://api.example.com/sse"
  },
  "auth": {
    "type": "oauth",
    "config": {
      "tokenUrl": "https://api.example.com/oauth/token",
      "clientId": "${CLIENT_ID}",
      "clientSecret": "${CLIENT_SECRET}",
      "scopes": ["read", "write"]
    }
  }
}
```

**Bearer Token:**
```json
{
  "transport": {
    "type": "http",
    "url": "https://api.example.com/mcp"
  },
  "auth": {
    "type": "bearer",
    "config": {
      "token": "${API_TOKEN}"
    }
  }
}
```

### MCP Tool Naming

Tools from MCP servers are automatically available with the format:

```
<server-name>:<tool-name>
```

Example:
```bash
# Use filesystem MCP server tool
filesystem:read_file /path/to/file.txt

# Use PostgreSQL MCP server tool
postgres:query "SELECT * FROM users"
```

### Best Practices

**Security:**
- Never hardcode credentials in `.mcp.json`
- Use environment variables for all secrets
- Validate inputs from external tools
- Use HTTPS/WSS for remote connections

**Performance:**
- Use stdio for local tools (fastest)
- Cache connections for SSE/WebSocket
- Limit concurrent requests
- Implement proper error handling

**Portability:**
- Use `${CLAUDE_PLUGIN_ROOT}` for plugin-relative paths
- Avoid absolute paths
- Document required environment variables
- Provide example configurations

---

## Development Workflows

### Feature Development Workflow

Using the `feature-dev` plugin:

```bash
# Start workflow
/feature-dev Add user authentication with OAuth

# Phase 1: Discovery
# Claude asks clarifying questions

# Phase 2: Codebase Exploration
# 2-3 code-explorer agents analyze existing code

# Phase 3: Clarifying Questions
# Claude identifies ambiguities and asks for answers

# Phase 4: Architecture Design
# 2-3 code-architect agents propose approaches
# You choose the best approach

# Phase 5: Implementation
# Claude implements following chosen architecture
# Only starts after explicit approval

# Phase 6: Quality Review
# 3 code-reviewer agents check:
# - Simplicity/DRY/Elegance
# - Bugs/Correctness
# - Conventions/Abstractions

# Phase 7: Summary
# Claude summarizes what was built
```

### Plugin Development Workflow

Using the `plugin-dev` plugin:

```bash
# Start workflow
/plugin-dev:create-plugin

# Phase 1: Discovery
# Understand plugin purpose

# Phase 2: Component Planning
# Determine skills, commands, agents, hooks, MCP

# Phase 3: Detailed Design
# Specify each component

# Phase 4: Structure Creation
# Set up directories and manifest

# Phase 5: Component Implementation
# AI-assisted creation of components

# Phase 6: Validation
# Run validators and checks

# Phase 7: Testing
# Verify plugin works

# Phase 8: Documentation
# Finalize README
```

### Code Review Workflow

**Automated Review:**
```bash
# Local review (terminal output)
/code-review

# Post as PR comment
/code-review --comment
```

**Comprehensive Review:**
```bash
# Run all review agents
/pr-review-toolkit:review-pr all

# Run specific aspects
/pr-review-toolkit:review-pr comments, tests, errors

# Individual agents
"Check test coverage"  # pr-test-analyzer
"Review error handling"  # silent-failure-hunter
```

### Iterative Development with Ralph

```bash
# Start iterative loop
/ralph-loop "Implement X with these requirements..." \
  --completion-promise "COMPLETE" \
  --max-iterations 50

# Claude will:
# 1. Implement
# 2. Test
# 3. See failures
# 4. Fix
# 5. Repeat until completion

# Cancel if needed
/cancel-ralph
```

### Safety Hook Workflow

```bash
# Create safety rule
/hookify Block rm -rf commands in /home

# Test immediately
# (No restart needed)
# Try running dangerous command

# List all rules
/hookify:list

# Configure rules
/hookify:configure

# Disable rule (edit file)
# Set enabled: false in .claude/hookify.*.local.md
```

---

## Best Practices

### Agent Development

**Design Principles:**
- Give agents a clear, focused mission
- Use specific tool declarations (not blanket permissions)
- Write detailed system prompts with process steps
- Include output guidance for consistent formatting
- Use colors for visual identification

**When to Create Agents:**
- For specialized, repetitive analysis tasks
- When you need autonomous expertise
- For parallel execution of independent tasks
- When a skill is too passive for the use case

**Agent System Prompt Structure:**
```
## Core Mission
[Clear statement of purpose]

## Core Process
[Step-by-step approach]

## Output Guidance
[Format requirements, what to include]

## Focus Areas
[Priority areas to analyze]
```

### Skill Development

**Trigger Phrase Design:**
- Use specific, unique phrases
- Include common variations
- Avoid generic terms
- Test triggering reliability

**Progressive Disclosure:**
- Keep SKILL.md lean (~1,500-2,000 words)
- Put detailed info in references/
- Provide working examples
- Organize logically: metadata → core → references

**Skill Writing Style:**
- Third person ("This skill should be used when...")
- Imperative/infinitive verbs ("Create X", "Use Y")
- Clear headings and structure
- Concrete examples

### Command Development

**Command Design:**
- Keep commands focused and specific
- Use clear argument hints
- Declare allowed tools when needed
- Provide helpful error messages
- Include usage examples

**Command Frontmatter:**
```yaml
---
description: Clear one-line description
argument-hint: [optional argument hint]
allowed-tools: [optional tool restrictions]
---
```

**Best Practices:**
- Namespaced commands for organization (`plugin:command`)
- Interactive prompts for complex commands
- Validate inputs before execution
- Provide progress feedback

### Hook Development

**Hook Design:**
- Use the right event for your use case
- Keep hooks fast (they run frequently)
- Validate inputs thoroughly
- Provide clear error messages
- Consider performance impact

**PreToolUse Hooks:**
- Great for validation and blocking
- Can modify tool inputs
- Use exit code 0 (allow) or 1-255 (block)

**PostToolUse Hooks:**
- Great for logging and monitoring
- Can modify tool outputs
- Can't prevent execution

**Stop Hooks:**
- Great for completion checks
- Can block exit (exit code non-zero)
- Useful for iterative workflows

**Prompt-Based vs Command Hooks:**
- **Command hooks**: Deterministic, fast, no LLM cost
- **Prompt-based hooks**: Flexible, LLM decision-making, higher cost

### MCP Integration

**Server Type Selection:**
- **stdio**: Local tools, CLI wrappers (fastest)
- **SSE**: Hosted services with OAuth
- **HTTP**: REST API integration
- **WebSocket**: Real-time communication

**Security:**
- Never hardcode credentials
- Use environment variables
- Implement proper authentication
- Validate all inputs

**Performance:**
- Use stdio for local tools
- Cache SSE/WebSocket connections
- Implement proper error handling
- Limit concurrent requests

**Portability:**
- Use `${CLAUDE_PLUGIN_ROOT}` everywhere
- Avoid absolute paths
- Document environment variables
- Provide example configurations

---

## Security Considerations

### Input Validation

**Hooks:**
- Validate all user inputs
- Sanitize command arguments
- Check file paths for traversal attempts
- Whitelist allowed operations

**Commands:**
- Never trust user input directly
- Use parameterized queries
- Escape special characters
- Validate file paths

**Agents:**
- Be cautious with tool use
- Review generated code before execution
- Validate external data
- Follow security best practices

### Credential Management

**Never Hardcode:**
- API keys
- Passwords
- Tokens
- Secrets

**Use Environment Variables:**
```bash
export MY_API_KEY="sk-..."
# Reference in code: ${MY_API_KEY}
```

**Use .env Files:**
```bash
# .env (gitignored)
MY_API_KEY=sk-...

# Load in code:
source .env
```

### Common Vulnerabilities

**Command Injection:**
```bash
# ❌ Bad
exec("rm -rf " + userPath)

# ✅ Good
execFile("rm", ["-rf", sanitizedPath])
```

**SQL Injection:**
```javascript
// ❌ Bad
db.query("SELECT * FROM users WHERE id = " + userId)

// ✅ Good
db.query("SELECT * FROM users WHERE id = ?", [userId])
```

**XSS:**
```javascript
// ❌ Bad
element.innerHTML = userInput

// ✅ Good
element.textContent = userInput
// Or sanitize with DOMPurify
```

**Path Traversal:**
```javascript
// ❌ Bad
fs.readFile(userPath, ...)

// ✅ Good
const safePath = path.resolve("/allowed/dir", userPath)
if (!safePath.startsWith("/allowed/dir")) {
  throw new Error("Path traversal attempt")
}
fs.readFile(safePath, ...)
```

### Security Plugin Usage

**Enable Security Reminders:**
```bash
export ENABLE_SECURITY_REMINDER=1  # (default)
```

**Disable if Needed:**
```bash
export ENABLE_SECURITY_REMINDER=0
```

**Common Security Patterns Checked:**
- GitHub Actions workflow injection
- child_process.exec usage
- new Function() calls
- eval() calls
- dangerouslySetInnerHTML
- document.write()
- innerHTML assignments
- pickle usage
- os.system calls

---

## Conclusion

The Claude Code plugin ecosystem provides a powerful, extensible platform for AI-assisted development. With 12 official plugins, 17 commands, 17 agents, 10 skills, and 5 hooks, you can automate virtually any aspect of your development workflow.

### Key Takeaways

1. **Structured Workflows**: Use `/feature-dev` for new features, `/plugin-dev:create-plugin` for plugin development
2. **Automated Review**: Leverage `/code-review` and `/pr-review-toolkit` for quality assurance
3. **Iterative Development**: Use `/ralph-loop` for self-improving code
4. **Safety**: Use `/hookify` and security-guidance hooks to prevent mistakes
5. **Extensibility**: Create custom plugins with the plugin-dev toolkit

### Resources

- **Claude Code Documentation**: https://code.claude.com/docs/en/overview
- **Plugin Documentation**: https://docs.claude.com/en/docs/claude-code/plugins
- **Agent SDK**: https://docs.claude.com/en/api/agent-sdk/overview
- **GitHub Repository**: https://github.com/anthropics/claude-code

---

**Document Version:** 1.0.0
**Last Updated:** February 28, 2026
**Repository:** anthropics/claude-code
**Stars:** 42,000+
