# Advanced Prompts Collection — VIEWPORT Knowledge Base 💎

> **Purpose:** High-precision prompts for specialized AI tasks. Each prompt is battle-tested and optimized for GLM-4.7 / Llama 3.3 70B.

---

## Prompt Index

| # | Prompt Name | Use Case | Complexity |
|---|-------------|----------|------------|
| 1 | Feature Development | Building new features from scratch | High |
| 2 | Bug Fixing | Debugging and fixing complex issues | Medium |
| 3 | Refactoring | Code cleanup and optimization | Medium |
| 4 | Deployment | Production deployment workflows | High |
| 5 | Token Optimization | Reducing context/token usage | Medium |
| 6 | OpenClaw Agent | Creating new OpenClaw skills/agents | High |
| 7 | Memory Update | Writing daily memory logs | Low |
| 8 | React/Next.js | React/Next.js best practices | Medium |
| 9 | Telegram Bot | Telegram bot development | Medium |
| 10 | Trading System | Trading bot and signal systems | High |

---

## 1. Feature Development Prompt

### When to Use
- Starting a new feature from scratch
- Building new functionality based on requirements
- Implementing user stories or PRDs
- Creating API endpoints and integrations

### Prompt

```
You are a Senior Full-Stack Developer building [FEATURE_NAME].

CONTEXT:
- Tech Stack: [LIST: Node.js/Python/React/etc.]
- Database: [PostgreSQL/MongoDB/SQLite]
- Deployment: [Docker/VPS/Serverless]
- Integration with: [External APIs, Services]
- Performance targets: [response time <X ms, handle Y req/s]

REQUIREMENTS:
1. Feature Overview: [Clear description of what to build]
2. Core functionality:
   - Function A: [description]
   - Function B: [description]
   - Function C: [description]
3. Edge cases to handle: [list specific edge cases]
4. Error handling requirements: [specific error states]
5. Security considerations: [auth, validation, sanitization]

DELIVERABLES:
1. Architecture diagram (text-based)
2. File structure with paths
3. Complete implementation code
4. Test cases (unit + integration)
5. API documentation (if applicable)
6. Deployment instructions

RULES:
- Write production-ready, not prototype code
- Include proper error handling and logging
- Follow SOLID principles
- Add inline comments for complex logic only
- Use TypeScript where applicable
- Optimize for performance and maintainability
- Auto-iterate: if something doesn't work, debug silently and fix

Start by outlining the architecture, then implement. Show final working code only.
```

### Example Usage

```
You are a Senior Full-Stack Developer building a User Authentication System with JWT tokens.

CONTEXT:
- Tech Stack: Node.js, Express, TypeScript
- Database: PostgreSQL with Prisma ORM
- Deployment: Docker on Oracle Cloud VPS
- Integration with: Email service (SendGrid), SMS (Twilio)
- Performance targets: login <200ms, handle 1000 req/s

REQUIREMENTS:
1. Feature Overview: Complete auth system with registration, login, password reset, and email verification
2. Core functionality:
   - Registration with email verification
   - Login with JWT tokens (access + refresh)
   - Password reset via email link
   - Token refresh mechanism
   - Rate limiting on auth endpoints
3. Edge cases to handle: duplicate emails, expired tokens, invalid reset links
4. Error handling requirements: specific error messages, proper HTTP status codes
5. Security considerations: bcrypt hashing, input validation, CORS, helmet headers
...
```

### Expected Output

```
Architecture:
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Express   │────▶│ PostgreSQL  │
│   (Frontend)│     │   API       │     │   Database  │
└─────────────┘     └─────────────┘     └─────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │ SendGrid    │
                   │ Twilio      │
                   └─────────────┘

File Structure:
/src
  /controllers
    - authController.ts
  /middleware
    - authMiddleware.ts
    - rateLimiter.ts
  /models
    - user.ts
  /routes
    - authRoutes.ts
  /services
    - emailService.ts
    - tokenService.ts
  /utils
    - bcrypt.ts
    - jwt.ts
  /types
    - auth.types.ts

[Complete code implementations for all files]
```

---

## 2. Bug Fixing Prompt

### When to Use
- Debugging production issues
- Fixing bugs in existing code
- Resolving test failures
- Investigating unexpected behavior

### Prompt

```
You are a Debugging Expert investigating a bug in [PROJECT/COMPONENT].

BUG DESCRIPTION:
[Clear description of what's going wrong]
- Expected behavior: [what should happen]
- Actual behavior: [what's actually happening]
- Error messages: [paste exact error if any]
- Steps to reproduce: [step-by-step]

CONTEXT:
- Tech stack: [relevant technologies]
- Code location: [file paths involved]
- Recent changes: [if applicable]
- Environment: [dev/staging/prod]

INVESTIGATION STEPS:
1. Analyze the root cause
2. Identify all affected code paths
3. Check for related issues (similar patterns)
4. Review error handling and edge cases
5. Consider performance implications

FIX REQUIREMENTS:
1. Minimal change - fix only what's broken
2. Don't break existing functionality
3. Add/regenerate tests to prevent regression
4. Document the fix with comments
5. Consider if this is a symptom of larger issue

DELIVERABLES:
1. Root cause analysis (what's wrong and why)
2. The fix (code changes)
3. Test coverage (before/after)
4. Verification steps

If uncertain, propose 2-3 approaches with trade-offs and recommend one.
```

### Example Usage

```
BUG DESCRIPTION:
In the Telegram bot, when a user sends a message to start a scraping job,
the bot responds with "Job started" but the job never actually executes.

Expected behavior: User sends /start_scrape, bot confirms, job runs in background
Actual behavior: Bot confirms but job queue remains empty
Error messages: None in logs
Steps to reproduce:
1. Send /start_scrape to bot
2. Observe confirmation message
3. Check job queue - it's empty

CONTEXT:
- Tech stack: Node.js, Telethon, Bull queue
- Code location: bot/handlers/scrapeHandler.ts, queue/jobQueue.ts
- Recent changes: Updated Bull to v5 yesterday
- Environment: Production on Oracle VPS
...
```

### Expected Output

```
ROOT CAUSE ANALYSIS:
The issue is in queue/jobQueue.ts line 45. After upgrading Bull from v4 to v5,
the job.add() method signature changed - it now requires an options object
as the second parameter, but the code is passing a callback function.

The callback is being ignored silently (Bull v5 doesn't throw), so the job
never gets added to the queue.

FIX:
```diff
- job.add(data, (err, job) => {
-   if (err) logger.error('Job add failed:', err)
-   logger.info('Job added:', job.id)
- })
+ job.add(data, { attempts: 3, backoff: { type: 'exponential', delay: 2000 } })
+   .then(job => logger.info('Job added:', job.id))
+   .catch(err => logger.error('Job add failed:', err))
```

Test Coverage:
[Updated tests showing jobs are now added correctly]

Verification Steps:
1. Send /start_scrape
2. Confirm bot responds
3. Check job queue - job should be present
4. Monitor job completion in logs
```

---

## 3. Refactoring Prompt

### When to Use
- Improving code quality without changing behavior
- Reducing technical debt
- Optimizing performance
- Improving maintainability

### Prompt

```
You are a Code Refactoring Expert improving [CODEBASE/COMPONENT].

CURRENT STATE:
[Describe what needs improvement]
- Code location: [file paths]
- Issues: [list specific problems: complexity, duplication, performance, etc.]
- Constraints: [must maintain API compatibility, etc.]

REFACTORING GOALS:
1. [Specific goal 1: reduce complexity]
2. [Specific goal 2: improve performance]
3. [Specific goal 3: enhance readability]

REFACTORING PRINCIPLES:
- DRY (Don't Repeat Yourself)
- SOLID principles
- Clean Code practices
- Performance optimization where measurable
- Maintain backward compatibility
- Add tests if missing

DELIVERABLES:
1. Refactored code
2. Explanation of changes
3. Before/after comparison (metrics if applicable)
4. Test results
5. Migration notes (if API changes needed)

If you find larger architectural issues, flag them but focus on the immediate task.
```

### Example Usage

```
CURRENT STATE:
The auth controller has become a 400-line file with mixed responsibilities.
It handles registration, login, password reset, and token refresh all in one file.

Code location: src/controllers/authController.ts
Issues:
- High cyclomatic complexity (15+ in some functions)
- Duplicated validation logic across methods
- No separation of concerns
- Hard to test individual operations
- Error handling is inconsistent

Constraints: Must maintain API compatibility - existing endpoints should work unchanged.

REFACTORING GOALS:
1. Extract validation logic into separate module
2. Split into smaller, single-responsibility functions
3. Reduce cyclomatic complexity to <8 per function
4. Create reusable error handler
5. Add input validation middleware
...
```

### Expected Output

```
REFACTORED STRUCTURE:
/src
  /controllers
    - authController.ts (80 lines, orchestrates only)
  /middleware
    - validateAuth.ts (validation logic)
  /services
    - authService.ts (business logic)
    - validationService.ts (shared validation)
  /utils
    - authErrors.ts (error factory)

BEFORE:
- authController.ts: 400 lines
- Complexity: 15 average
- Test coverage: 45%
- Functions: 4 massive functions

AFTER:
- authController.ts: 80 lines
- authService.ts: 150 lines
- validateAuth.ts: 90 lines
- Complexity: 5 average
- Test coverage: 85%
- Functions: 12 focused functions

CHANGES:
1. Extracted validation → validateAuth middleware
2. Created authService for business logic
3. Added error factory for consistent responses
4. Split 4 functions into 12 single-purpose functions
5. Added comprehensive test coverage

MIGRATION NOTES:
No API changes - endpoints remain the same.
Tests pass without modification.
```

---

## 4. Deployment Prompt

### When to Use
- Deploying applications to production
- Setting up CI/CD pipelines
- Infrastructure as code
- Docker containerization

### Prompt

```
You are a DevOps Engineer deploying [PROJECT] to production.

PROJECT OVERVIEW:
- Name: [project name]
- Tech stack: [technologies used]
- Current status: [local/dev/staging]
- Target environment: [production server, VPS, cloud]

DEPLOYMENT REQUIREMENTS:
1. Infrastructure: [server specs, database, CDN, etc.]
2. Security: [SSL, firewall, secrets management]
3. Monitoring: [logging, alerts, health checks]
4. Scaling: [auto-scaling rules, load balancing]
5. Rollback: [how to revert if something breaks]
6. CI/CD: [automated testing, deployment pipeline]

DELIVERABLES:
1. Docker setup (Dockerfile, docker-compose.yml)
2. Environment configuration (.env.example)
3. CI/CD pipeline (GitHub Actions / GitLab CI)
4. Infrastructure as code (Terraform / Ansible scripts if applicable)
5. Monitoring setup (log aggregation, metrics)
6. Deployment checklist
7. Rollback procedure

Assume production-grade reliability. Include health checks, graceful shutdowns, and proper signal handling.
```

### Example Usage

```
PROJECT OVERVIEW:
Name: Telegram Scraper Bot
Tech stack: Node.js, PostgreSQL, Redis, Docker
Current status: Local development complete
Target environment: Oracle Cloud Free Tier VPS (4 ARM cores, 24GB RAM)

DEPLOYMENT REQUIREMENTS:
1. Infrastructure:
   - Oracle Cloud Free Tier VPS
   - PostgreSQL database (managed or self-hosted)
   - Redis for job queue
   - Nginx reverse proxy
2. Security:
   - Let's Encrypt SSL certificate
   - Firewall (only 80, 443, 22 open)
   - Secrets stored in environment variables
   - Rate limiting
3. Monitoring:
   - PM2 process manager
   - Winston logs to file + Sentry for errors
   - Health check endpoint /health
   - Uptime monitoring
4. Scaling:
   - Horizontal scaling ready (Docker Swarm or Kubernetes)
   - Redis as shared job queue
5. Rollback:
   - Git-based rollback
   - Database migrations with down scripts
6. CI/CD:
   - GitHub Actions workflow
   - Automated tests on push
   - Auto-deploy to VPS on main branch
...
```

### Expected Output

```
DOCKER SETUP:

Dockerfile:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

docker-compose.yml:
[Complete configuration for app, postgres, redis, nginx]

CI/CD PIPELINE (.github/workflows/deploy.yml):
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps: [npm install, npm test]
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps: [ssh to VPS, docker-compose pull, up -d]
```

DEPLOYMENT CHECKLIST:
- [ ] Set up VPS with Ubuntu 22.04
- [ ] Install Docker and Docker Compose
- [ ] Configure firewall (UFW)
- [ ] Set up Nginx reverse proxy
- [ ] Generate SSL certificate with Certbot
- [ ] Set up PostgreSQL database
- [ ] Configure Redis
- [ ] Clone repository on VPS
- [ ] Create .env with production secrets
- [ ] Run docker-compose up -d
- [ ] Verify health endpoint
- [ ] Set up PM2 monitoring
- [ ] Configure log rotation
- [ ] Test rollback procedure

ROLLBACK PROCEDURE:
1. git checkout <previous-stable-commit>
2. docker-compose down
3. docker-compose build
4. docker-compose up -d
5. Run database migration down if needed
6. Verify health endpoint
```

---

## 5. Token Optimization Prompt

### When to Use
- Reducing API costs
- Optimizing prompt length
- Handling large context windows
- Compressing repetitive information

### Prompt

```
You are a Token Optimization Expert optimizing [PROMPT/CONVERSATION].

CURRENT SITUATION:
- Input: [paste current prompt or describe context]
- Token count: [current approximate token count]
- Context limit: [model's context window]
- Goal: [reduce by X%, fit within Y tokens, etc.]

OPTIMIZATION STRATEGIES:
1. Remove redundancy and filler
2. Use more concise language
3. Reference external docs instead of embedding
4. Use structured formats (tables, lists)
5. Remove unnecessary examples
6. Compress instructions to essentials

CONSTRAINTS:
- Must maintain all functional requirements
- No loss of critical information
- Preserve clarity and precision
- Maintain prompt effectiveness

DELIVERABLES:
1. Optimized prompt
2. Token count comparison (before/after)
3. Explanation of what was removed/compressed
4. Test results (does it still work as expected?)

If removing something risks functionality, explain trade-offs and offer alternatives.
```

### Example Usage

```
CURRENT SITUATION:
This system prompt for a coding assistant is 12,000 tokens, which is too long.
We need to fit it under 5,000 tokens while maintaining all functionality.

Input: [paste 12,000 token system prompt]
Token count: ~12,000
Context limit: 8,000 tokens (GLM-4.7)
Goal: Reduce to <5,000 tokens while maintaining all behavior

The prompt includes:
- Detailed coding guidelines
- Multiple code examples
- Architecture patterns
- Security rules
- Testing frameworks
- Deployment instructions
...
```

### Expected Output

```
OPTIMIZED PROMPT:
[Compressed version at ~4,200 tokens]

TOKEN COUNT COMPARISON:
Before: 12,000 tokens
After: 4,200 tokens
Reduction: 65%

WHAT WAS COMPRESSED:
1. Code examples: Reduced from 15 examples to 5 essential patterns (-3,000 tokens)
2. Architecture patterns: Converted to structured reference list (-1,500 tokens)
3. Security rules: Consolidated into checklist format (-1,000 tokens)
4. Redundant explanations: Removed overlapping sections (-1,300 tokens)
5. Moved detailed docs to external reference file (referenced via link) (-1,000 tokens)

EXTERNAL REFERENCES (linked instead of embedded):
- Full security guidelines: /docs/security.md
- Complete testing patterns: /docs/testing.md
- Deployment playbooks: /docs/deployment.md

TEST RESULTS:
✅ Code generation quality maintained (tested on 20 prompts)
✅ All security rules still applied correctly
✅ No loss of architectural guidance
✅ Response speed improved (35% faster on average)

TRADE-OFFS:
- Less examples in prompt (but reference docs available)
- More concise instructions (assumes more senior AI model capability)
- Requires external docs file to be accessible
```

---

## 6. OpenClaw Agent Prompt

### When to Use
- Creating new OpenClaw skills
- Building specialized agents
- Setting up agent workflows
- Configuring multi-agent systems

### Prompt

```
You are an OpenClaw Expert creating a new [AGENT/SKILL TYPE].

AGENT OVERVIEW:
- Name: [agent name]
- Purpose: [what this agent does]
- Trigger: [when this agent activates]
- Target model: [which LLM it uses]

AGENT CONFIGURATION:
1. Personality: [tone, style, behavior guidelines]
2. Capabilities: [tools it can use, tasks it handles]
3. Constraints: [what it shouldn't do]
4. Integration: [how it interacts with other agents/main agent]
5. Skills: [skills from clawhub to include]

DELIVERABLES:
1. SKILL.md file (complete skill definition)
2. openclaw.json configuration
3. Tool usage guidelines
4. Testing instructions
5. Integration documentation

Follow OpenClaw skill format exactly. Include all required sections.
```

### Example Usage

```
AGENT OVERVIEW:
Name: TradingSignalAgent
Purpose: Analyze trading signals from multiple exchanges and send alerts
Trigger: Scheduled every 5 minutes or manual trigger via Telegram
Target model: Groq70B (fast, good at analysis)

AGENT CONFIGURATION:
1. Personality:
   - Professional, analytical
   - Precise with numbers and percentages
   - No hype, just data
   - Diamond emoji 💎 in responses

2. Capabilities:
   - Fetch price data from Binance, Bybit
   - Analyze RSI, MACD, Bollinger Bands
   - Identify patterns (double bottom, breakout, etc.)
   - Send alerts to Telegram
   - Track signal accuracy

3. Constraints:
   - Never give financial advice (disclaimer always)
   - Only analyze, don't execute trades
   - Max 3 alerts/hour (rate limit)
   - Don't access exchanges' trading APIs

4. Integration:
   - Main agent: VIEWPORT (orchestrator)
   - Channel: Telegram bot
   - Data source: Public exchange APIs (no auth needed)
   - Logs: Saved to trading-signals.log

5. Skills:
   - None (uses built-in web_search and message tools)
...
```

### Expected Output

```
SKILL.md:

# Trading Signal Analyzer

## Description
Analyzes cryptocurrency trading signals from multiple exchanges and sends alerts via Telegram. Focuses on technical indicators and pattern recognition.

## When to Use
- Need automated trading signal analysis
- Want pattern recognition alerts
- Monitor multiple exchanges simultaneously
- Track technical indicator changes

## Required Tools
- web_search (for fetching exchange data)
- message (for Telegram alerts)

## Agent Personality
Professional, data-driven. Use 💎 emoji. Always include disclaimer: "Not financial advice."

## Configuration

### openclaw.json
```json
{
  "agents": {
    "trading-signal": {
      "model": "groq/llama-3.3-70b-versatile",
      "triggers": ["cron: */5 * * * *", "telegram: /analyze"],
      "workspace": "/Users/Office/.openclaw/workspace/trading-signals",
      "skills": [],
      "channels": ["telegram"]
    }
  }
}
```

### Workflow
1. Fetch price data from Binance, Bybit
2. Calculate indicators (RSI, MACD, BB)
3. Identify patterns
4. Check if signal threshold met
5. Send alert if criteria met
6. Log all signals for accuracy tracking

## Testing
1. Manually trigger with /analyze
2. Verify alerts sent correctly
3. Check logs for errors
4. Validate indicator calculations

## Integration Notes
- Requires Telegram bot configured in main agent
- Exchange APIs are public (no credentials needed)
- Alerts rate limited to 3/hour
```

---

## 7. Memory Update Prompt

### When to Use
- Writing daily memory logs
- Documenting completed work
- Tracking project progress
- Recording decisions and outcomes

### Prompt

```
You are documenting today's session in the VIEWPORT memory log.

SESSION CONTEXT:
- Date: [YYYY-MM-DD]
- Time worked: [X hours]
- Projects worked on: [list]
- Key achievements: [what was completed]
- Revenue generated: [if any]
- Blockers encountered: [any issues]
- Decisions made: [important choices]

MEMORY FORMAT:
Follow this exact structure:

```markdown
# [YYYY-MM-DD].md - VIEWPORT Daily Log

## Time Worked
[X hours]

## Projects & Progress

### [Project 1]
**Status:** [In Progress | Completed | Deployed]
**Work Done:**
- [Task 1 completed]
- [Task 2 completed]
**Next Steps:** [what's next]
**Notes:** [important details]

### [Project 2]
...

## Revenue
[Today: $X | Week: $Y | Month: $Z]
[Breakdown: client $X, affiliate $Y, product $Z]

## Blockers & Issues
[Describe any blockers and how they were resolved]

## Decisions Made
[Important decisions with rationale]

## Tomorrow's Plan
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

## Learning & Insights
[What was learned today]

💎
```

RULES:
- Keep it factual, no fluff
- Use bullet points for lists
- Numbers over feelings
- End with 💎 emoji
- Save to memory/YYYY-MM-DD.md
```

### Example Usage

```
SESSION CONTEXT:
Date: 2026-02-28
Time worked: 6.5 hours
Projects worked on: Telegram scraper, Trading bot, Client website
Key achievements: Scraper deployed to VPS, Trading bot basic analysis working
Revenue generated: Client payment received $500 (completed project)
Blockers encountered: Redis connection issue on VPS (resolved by updating Docker)
Decisions made: Switched from PostgreSQL to MongoDB for scraper (better document storage)
...
```

### Expected Output

```markdown
# 2026-02-28.md - VIEWPORT Daily Log

## Time Worked
6.5 hours

## Projects & Progress

### Telegram Scraper
**Status:** Deployed
**Work Done:**
- Dockerized application
- Deployed to Oracle VPS
- Set up Nginx reverse proxy
- Configured Redis for job queue
- Fixed connection issue (updated Docker image)
**Next Steps:** Add rate limiting, monitor for 24h
**Live URL:** https://scraper.viewport.dev

### Trading Signal Bot
**Status:** In Progress (60%)
**Work Done:**
- Implemented RSI calculation
- Added Binance API integration
- Created pattern recognition (breakout detection)
- Set up Telegram alert system
**Next Steps:** Add MACD, Bollinger Bands, test accuracy
**Notes:** Public APIs only, no trading execution

### Client Website
**Status:** Completed
**Work Done:**
- Final client approval received
- Payment received: $500
- Deployed to client's VPS
**Live URL:** [redacted]

## Revenue
Today: $500 | Week: $1,200 | Month: $3,400
- Client work: $500 (website completed)
- Affiliate: $0
- Product sales: $0

## Blockers & Issues
- Redis connection refused on VPS
  - Root cause: Docker network configuration
  - Fix: Updated docker-compose.yml with explicit network config
  - Time lost: 45 minutes

## Decisions Made
- Switched scraper database from PostgreSQL to MongoDB
  - Rationale: Better for storing scraped channel data (flexible schema)
  - Trade-off: Slower joins, but not needed for this use case

## Tomorrow's Plan
1. Add rate limiting to scraper (prevent bans)
2. Implement MACD indicator in trading bot
3. Research affiliate opportunities in IB/CPA space
4. Start React dashboard for scraper data

## Learning & Insights
- Oracle Free Tier VPS is sufficient for scraping (4 ARM cores = ~200 req/s)
- Pattern recognition needs more data for accuracy (currently 60% accuracy)
- Client work still fastest revenue path ($500 in 2 days)

💎
```

---

## 8. React/Next.js Prompt

### When to Use
- Building React/Next.js applications
- Implementing specific UI components
- Optimizing performance
- Following Next.js best practices

### Prompt

```
You are a React/Next.js Expert building [COMPONENT/PAGE].

PROJECT CONTEXT:
- Framework: React / Next.js [version]
- Styling: [Tailwind / CSS Modules / Styled Components]
- State management: [useState, Redux, Zustand, etc.]
- Data fetching: [SWR, React Query, fetch]
- Type system: [TypeScript / JavaScript]

REQUIREMENTS:
1. Component/Page: [what to build]
2. Features:
   - [Feature 1]
   - [Feature 2]
3. UX requirements: [responsive, accessible, etc.]
4. Performance targets: [FCP < X, LCP < Y]
5. Browser support: [Chrome, Firefox, Safari, etc.]

DELIVERABLES:
1. Component code
2. Hooks or utilities (if needed)
3. Types (if TypeScript)
4. Styling (Tailwind classes or CSS)
5. Unit tests (React Testing Library)
6. Performance optimizations

NEXT.JS SPECIFICS:
- Use App Router or Pages Router?
- SSR, SSR, or ISR?
- Image optimization with next/image
- Font optimization with next/font
- Dynamic imports for code splitting

Follow Vercel's performance guidelines. Optimize for Core Web Vitals.
```

### Example Usage

```
PROJECT CONTEXT:
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
State management: React hooks + Zustand
Data fetching: SWR
Type system: TypeScript

REQUIREMENTS:
1. Component: Dashboard page for Telegram scraper metrics
2. Features:
   - Real-time stats (jobs running, scraped messages)
   - Charts showing scrape rate over time
   - Table of active channels
   - Status indicators (healthy/error)
3. UX requirements:
   - Dark mode support
   - Mobile responsive
   - Accessible (ARIA labels, keyboard nav)
4. Performance targets: FCP < 1s, LCP < 2.5s
5. Browser support: Chrome 90+, Firefox 88+, Safari 14+

NEXT.JS SPECIFICS:
- App Router
- ISR for charts (revalidate every 60s)
- Server Components where possible
- next/image for icons
- next/font for Inter font
```

### Expected Output

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react'
import { StatsCards } from '@/components/dashboard/StatsCards'
import { ScrapeRateChart } from '@/components/dashboard/ScrapeRateChart'
import { ChannelsTable } from '@/components/dashboard/ChannelsTable'
import { StatusIndicator } from '@/components/dashboard/StatusIndicator'

export const revalidate = 60 // ISR

export default async function DashboardPage() {
  const stats = await fetchStats() // Server component
  const channels = await fetchChannels()

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <StatusIndicator />
        <StatsCards stats={stats} />
        <Suspense fallback={<ChartSkeleton />}>
          <ScrapeRateChart />
        </Suspense>
        <ChannelsTable channels={channels} />
      </div>
    </main>
  )
}
```

[Components, hooks, types, and tests included]

PERFORMANCE OPTIMIZATIONS:
- Server Components for data fetching (no client JS for initial load)
- ISR for charts (static HTML with periodic revalidation)
- next/image for optimized images
- Dynamic imports for heavy charting library
- Tailwind CSS (no runtime overhead)
- Code splitting per route

CORE WEB VITALS:
- FCP: ~0.8s (Server Components help)
- LCP: ~1.5s (optimized images)
- CLS: ~0.02 (proper image dimensions)
- FID: <50ms (minimal client JS)
```

---

## 9. Telegram Bot Prompt

### When to Use
- Building Telegram bots
- Adding bot commands
- Integrating with Telegram API
- Handling bot interactions

### Prompt

```
You are a Telegram Bot Developer building [BOT FEATURE].

BOT CONTEXT:
- Bot name: [bot name]
- Purpose: [what bot does]
- Framework: [Telethon, python-telegram-bot, node-telegram-bot-api, etc.]
- Language: [Python/Node.js]
- Deployment: [VPS, serverless]

REQUIREMENTS:
1. Feature: [what to implement]
2. Commands needed: [list commands]
3. User flow: [step-by-step interaction]
4. Error handling: [how to handle errors]
5. Rate limiting: [per-user/per-chat limits]
6. Data storage: [what to persist]

DELIVERABLES:
1. Command handler code
2. Inline button handlers (if applicable)
3. Keyboard layouts
4. Database schema (if storing data)
5. Error handling middleware
6. Rate limiting implementation
7. Test cases

TELEGRAM BEST PRACTICES:
- Use inline buttons for better UX
- Handle all edge cases (user cancels, timeout)
- Respect rate limits (30 msgs/sec, 20 msgs/min to group)
- Use Webhook for production, polling for dev
- Sanitize all user input
- Handle /start command always

Legal: Respect Telegram's ToS. No spam. Opt-in only.
```

### Example Usage

```
BOT CONTEXT:
Bot name: ScraperBot
Purpose: Telegram member scraper (public channels only)
Framework: Telethon (Python)
Language: Python 3.11
Deployment: Oracle VPS

REQUIREMENTS:
1. Feature: User submits channel URL, bot shows member count and asks for export format
2. Commands needed:
   - /start - welcome message
   - /scrape - initiate scraping flow
   - /cancel - cancel current operation
   - /status - show active jobs
3. User flow:
   a. User sends /scrape
   b. Bot asks for channel username
   c. User sends @channel_name
   d. Bot validates and shows member count
   e. Bot asks export format (CSV/JSON/Excel)
   f. User selects with inline button
   g. Bot scrapes and sends file
4. Error handling: Invalid channel, private channel, rate limit, timeout
5. Rate limiting: 3 scrapes/hour per user
6. Data storage: Track usage stats (user, timestamp, channels scraped)

TELEGRAM BEST PRACTICES:
- Use inline buttons for format selection
- Show progress updates during scraping
- Cache results for 5 minutes (user can re-download)
- Respect 20 msgs/min limit to groups
```

### Expected Output

```python
# handlers/scrape_handler.py
from telethon import events
from telethon.tl import types
from datetime import datetime, timedelta
import asyncio

# Rate limiting
user_scrapes = {}

async def handle_scrape(event):
    user_id = event.sender_id

    # Rate limit check
    if is_rate_limited(user_id):
        await event.respond("⏳ Rate limit: 3 scrapes/hour. Try again later.")
        return

    # Step 1: Ask for channel
    async with event.client.conversation(user_id) as conv:
        await conv.send_message("Send channel username (e.g., @durov)")

        try:
            channel_msg = await conv.get_response(timeout=60)
            channel_username = channel_msg.text.strip()

            # Validate and get member count
            entity = await event.client.get_entity(channel_username)
            if not hasattr(entity, 'megagroup') and not hasattr(entity, 'broadcast'):
                await conv.send_message("❌ Not a valid channel. Send a public channel.")
                return

            # Check if it's private
            if entity.username is None:
                await conv.send_message("❌ Can only scrape public channels.")
                return

            member_count = await event.client.get_participants(entity, limit=0)
            await conv.send_message(f"👥 {member_count.total} members found.")

            # Step 2: Export format selection
            markup = event.client.build_reply_markup(
                types.ReplyKeyboardMarkup(
                    rows=[
                        [types.KeyboardButtonText("📄 CSV")],
                        [types.KeyboardButtonText("📋 JSON")],
                        [types.KeyboardButtonText("📊 Excel")],
                    ], resize=True
                )
            )
            await conv.send_message("Select export format:", buttons=markup)

            format_msg = await conv.get_response(timeout=60)
            export_format = format_msg.text.lower()

            # Step 3: Scrape and send
            await conv.send_message("⏳ Scraping...")
            members = await scrape_members(entity)
            file_path = await export_data(members, export_format)

            await conv.send_file(file_path, caption=f"✅ Exported {len(members)} members")

            # Update rate limit
            update_rate_limit(user_id)

        except asyncio.TimeoutError:
            await conv.send_message("⏱️ Timeout. Try /scrape again.")
        except Exception as e:
            await conv.send_message(f"❌ Error: {str(e)}")

def is_rate_limited(user_id):
    scrapes = user_scrapes.get(user_id, [])
    one_hour_ago = datetime.now() - timedelta(hours=1)
    recent = [s for s in scrapes if s > one_hour_ago]
    return len(recent) >= 3

async def scrape_members(channel):
    # Implement scraping with rate limiting
    pass

async def export_data(members, format):
    # Implement export
    pass

# Register handlers
@client.on(events.NewMessage(pattern='/scrape'))
async def scrape_command(event):
    await handle_scrape(event)
```

[Full implementation with all handlers, rate limiting, error handling, tests]

TEST CASES:
- ✅ Valid public channel → scrapes and sends file
- ✅ Private channel → error message
- ✅ Invalid username → error message
- ✅ Rate limit hit → warning message
- ✅ Cancel operation → clean exit
- ✅ Timeout → graceful handling
```

---

## 10. Trading System Prompt

### When to Use
- Building trading bots
- Implementing technical indicators
- Creating signal systems
- Analyzing market data

### Prompt

```
You are a Trading Systems Engineer building [TRADING FEATURE].

TRADING CONTEXT:
- Market: [crypto/stocks/forex]
- Exchanges: [Binance, Bybit, etc.]
- Strategy: [what trading logic to implement]
- Timeframes: [1m, 5m, 15m, 1h, 4h, 1d]
- Risk level: [conservative/moderate/aggressive]

REQUIREMENTS:
1. Feature: [technical indicator, signal system, backtesting, etc.]
2. Indicators: [RSI, MACD, Bollinger Bands, etc.]
3. Entry/Exit rules: [when to buy/sell]
4. Risk management: [stop loss, position sizing, max drawdown]
5. Backtesting: [historical data, time period]
6. Live mode: [paper trading vs real trading]

DELIVERABLES:
1. Indicator calculation code
2. Signal generation logic
3. Backtesting engine
4. Performance metrics (win rate, profit factor, max drawdown)
5. Paper trading simulation
6. Alert system (Telegram/email)
7. Risk management safeguards

CRITICAL RULES:
- NEVER execute real trades without explicit user approval
- Always include "Not financial advice" disclaimer
- Implement stop loss on all positions
- Limit position size (max 2% per trade)
- Track all trades for analysis
- Test thoroughly before live trading

Legal: Trading bots are legal if they don't manipulate markets. Always check exchange ToS.
```

### Example Usage

```
TRADING CONTEXT:
Market: Cryptocurrency
Exchanges: Binance (testnet for now, mainnet when approved)
Strategy: RSI Reversal + Bollinger Band Breakout
Timeframes: 15m and 1h
Risk level: Moderate

REQUIREMENTS:
1. Feature: Automated signal generation based on RSI and BB
2. Indicators:
   - RSI (14 period, 70/30 thresholds)
   - Bollinger Bands (20 period, 2 std dev)
3. Entry/Exit rules:
   - Entry: RSI < 30 AND price < lower BB (oversold)
   - Exit: RSI > 70 OR price > upper BB (overbought)
   - Stop loss: 3% below entry
   - Take profit: 6% above entry (2:1 R:R)
4. Risk management:
   - Max 2% portfolio per trade
   - Max 5 open positions
   - Max 10% daily drawdown
5. Backtesting:
   - 6 months of historical data
   - Test on BTC/USDT, ETH/USDT
6. Live mode:
   - Paper trading only (no real money)
   - Alerts to Telegram

CRITICAL RULES:
- Never execute real trades
- All trades require manual approval via Telegram
- Track all signals vs actual outcomes (accuracy)
```

### Expected Output

```python
# indicators/indicators.py
import pandas as pd
import numpy as np

def calculate_rsi(df, period=14, overbought=70, oversold=30):
    """Calculate RSI indicator"""
    delta = df['close'].diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi

def calculate_bollinger_bands(df, period=20, std_dev=2):
    """Calculate Bollinger Bands"""
    sma = df['close'].rolling(window=period).mean()
    std = df['close'].rolling(window=period).std()
    upper_band = sma + (std * std_dev)
    lower_band = sma - (std * std_dev)
    return pd.DataFrame({
        'bb_middle': sma,
        'bb_upper': upper_band,
        'bb_lower': lower_band
    })

# signal_generator.py
class SignalGenerator:
    def __init__(self):
        self.signals = []

    def generate_signals(self, df):
        """Generate trading signals based on RSI + BB strategy"""
        rsi = calculate_rsi(df)
        bb = calculate_bollinger_bands(df)

        signals = []
        for i in range(len(df)):
            # Entry condition: Oversold
            if rsi.iloc[i] < 30 and df['close'].iloc[i] < bb['bb_lower'].iloc[i]:
                signals.append({
                    'type': 'BUY',
                    'price': df['close'].iloc[i],
                    'timestamp': df.index[i],
                    'rsi': rsi.iloc[i],
                    'reason': 'Oversold (RSI < 30, below BB)'
                })

            # Exit condition: Overbought
            elif rsi.iloc[i] > 70 and df['close'].iloc[i] > bb['bb_upper'].iloc[i]:
                signals.append({
                    'type': 'SELL',
                    'price': df['close'].iloc[i],
                    'timestamp': df.index[i],
                    'rsi': rsi.iloc[i],
                    'reason': 'Overbought (RSI > 70, above BB)'
                })

        return signals

# backtester.py
class Backtester:
    def __init__(self, initial_capital=10000):
        self.initial_capital = initial_capital
        self.trades = []

    def run(self, signals, df):
        """Run backtest on historical data"""
        capital = self.initial_capital
        position = None

        for signal in signals:
            if signal['type'] == 'BUY' and position is None:
                entry_price = signal['price']
                stop_loss = entry_price * 0.97  # 3% SL
                take_profit = entry_price * 1.06  # 6% TP
                position = {
                    'entry': entry_price,
                    'stop_loss': stop_loss,
                    'take_profit': take_profit,
                    'size': capital * 0.02 / entry_price  # 2% position
                }
                capital -= position['size'] * entry_price

            elif signal['type'] == 'SELL' and position:
                exit_price = signal['price']
                pnl = (exit_price - position['entry']) * position['size']
                capital += position['size'] * exit_price

                self.trades.append({
                    'entry': position['entry'],
                    'exit': exit_price,
                    'pnl': pnl,
                    'pnl_percent': (exit_price - position['entry']) / position['entry'] * 100
                })
                position = None

        return self.calculate_metrics()

    def calculate_metrics(self):
        """Calculate backtest performance metrics"""
        total_trades = len(self.trades)
        winning_trades = [t for t in self.trades if t['pnl'] > 0]
        losing_trades = [t for t in self.trades if t['pnl'] <= 0]

        metrics = {
            'total_trades': total_trades,
            'win_rate': len(winning_trades) / total_trades * 100 if total_trades > 0 else 0,
            'total_pnl': sum(t['pnl'] for t in self.trades),
            'avg_win': np.mean([t['pnl'] for t in winning_trades]) if winning_trades else 0,
            'avg_loss': np.mean([t['pnl'] for t in losing_trades]) if losing_trades else 0,
            'profit_factor': abs(sum(t['pnl'] for t in winning_trades)) / abs(sum(t['pnl'] for t in losing_trades)) if losing_trades else 0,
            'max_drawdown': self.calculate_max_drawdown()
        }
        return metrics

# risk_management.py
def check_risk_limits(current_positions, new_trade):
    """Check if new trade respects risk limits"""
    total_exposure = sum(p['size'] * p['entry'] for p in current_positions)
    new_exposure = new_trade['size'] * new_trade['entry']

    # Max 2% per trade (already enforced in position sizing)
    # Max 5 open positions
    if len(current_positions) >= 5:
        return False, "Max 5 open positions"

    # Max 10% daily drawdown
    if total_exposure + new_exposure > 0.1 * INITIAL_CAPITAL:
        return False, "Max 10% exposure"

    return True, "OK"

# telegram_alerts.py
import asyncio
from telethon import TelegramClient

async def send_signal_alert(signal, disclaimer=True):
    """Send trading signal to Telegram"""
    message = f"📊 SIGNAL: {signal['type']}\n"
    message += f"💰 Price: ${signal['price']:.2f}\n"
    message += f"📈 RSI: {signal['rsi']:.2f}\n"
    message += f"📝 Reason: {signal['reason']}\n"

    if disclaimer:
        message += "\n⚠️ Not financial advice. Trade at your own risk."

    await client.send_message(CHAT_ID, message)
```

BACKTEST RESULTS (BTC/USDT, 15m, 6 months):
```
Total Trades: 127
Win Rate: 62.2%
Total PnL: +$1,847 (+18.47%)
Avg Win: +$42.30
Avg Loss: -$28.15
Profit Factor: 1.94
Max Drawdown: -6.8%
Sharpe Ratio: 1.42
```

ALERTS:
- Buy signals sent to Telegram with RSI + BB details
- Sell signals sent with PnL from previous trade
- Weekly summary sent (trades, win rate, total PnL)
- Risk limit warnings if approaching max exposure

SAFEGUARDS:
- ✅ No real trading (paper trading only)
- ✅ Manual approval required for any trade execution
- ✅ Stop loss calculated on every trade
- ✅ Position size limited to 2% of portfolio
- ✅ Max 5 open positions
- ✅ Daily drawdown limit at 10%
- ✅ All signals logged for accuracy tracking

DISCLAIMER: "This is a paper trading system. Not financial advice. Past performance does not guarantee future results."
```

---

## Summary

This collection provides 10 specialized prompts covering the most common development tasks in the VIEWPORT ecosystem. Each prompt is:

- **Battle-tested**: Used in real projects
- **Optimized**: Designed for GLM-4.7 / Llama 3.3 70B
- **Complete**: Includes context, requirements, and expected outputs
- **Practical**: Real examples from actual work

Use these prompts as-is or adapt them to your specific needs. They're designed to save time and ensure consistent, high-quality results. 💎

---

**Contributing**: Found a better way to prompt? Submit a PR or open an issue on GitHub. 💎
