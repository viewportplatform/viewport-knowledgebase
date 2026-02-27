# VIEWPORT Best Practices Guide 💎

Complete guide to token optimization, OpenClaw workflows, React/Next.js, DB/API patterns, and Git/GitHub. Each section includes **why**, **how**, **examples**, and **common mistakes**.

---

## TABLE OF CONTENTS

1. [Token Optimization (99% Savings)](#1-token-optimization-99-savings)
2. [OpenClaw Workflows](#2-openclaw-workflows)
3. [React/Next.js Best Practices](#3-reactnextjs-best-practices)
4. [Database & API Patterns](#4-database--api-patterns)
5. [Git & GitHub Workflow](#5-git--github-workflow)

---

## 1. TOKEN OPTIMIZATION (99% SAVINGS)

### WHY

LLM tokens = money. Token optimization isn't about "being cheap" — it's about **building smarter**.

**The Math:**
- Typical session: 50,000 tokens × $0.0001/1K = $5/session
- Optimized: 5,000 tokens × $0.0001/1K = $0.50/session
- **Daily savings (10 sessions): $45 → $4.50**

**Real Impact:**
- 100 sessions/month = $450 → $45 (90% savings)
- Scale to 1,000 sessions/month = $4,500 → $450
- This is pure margin. Revenue unaffected.

---

### HOW

#### Rule 1: NEVER Inject Full Files
```markdown
❌ BAD:
Inject entire 50KB file → 40,000 tokens

✅ GOOD:
Inject: "file: src/components/Header.tsx, lines 1-50"
Read on-demand: read tool with offset/limit
```

#### Rule 2: Tiered Context Loading
```javascript
// Tier 1: Always inject (minimal)
{
  "SOUL.md": "personality only",
  "AGENTS.md": "name + description only"
}

// Tier 2: Load when relevant (read SKILL.md on demand)
{
  "skills/weather/SKILL.md": "only when weather mentioned"
}

// Tier 3: Never inject (reference only)
{
  "memory/YYYY-MM-DD.md": "search, don't load"
  "logs/access.log": "grep, don't load"
}
```

#### Rule 3: Memory System Pattern
```javascript
❌ BAD:
// Load all daily logs → 100,000+ tokens
const allLogs = glob('memory/**/*.md')

✅ GOOD:
// Search first, load only relevant logs
const results = memory_search('revenue 2026-02')
const specificLog = memory_get('memory/2026-02-15.md')
```

#### Rule 4: Compact After Complex Tasks
```bash
# After any task >10 tool calls
/compact

# What it does:
- Trims token history to last 500 turns
- Keeps SOUL.md, AGENTS.md, TOOLS.md
- Preserves recent work context
- Frees up space for new work
```

#### Rule 5: Use `/session debug` for Large Output
```bash
❌ BAD:
# Run experiments in main session → floods context
[agent runs 50 iterations, logs every step]

✅ GOOD:
# Spin up debug session for heavy work
/session debug
[agent runs 100 iterations, logs minimal]
# Results reported back clean to main session
```

---

### EXAMPLES

#### Example 1: Reading Large Files
```typescript
❌ BAD (100,000+ tokens):
read('path/to/large-file.ts')

✅ GOOD (5,000 tokens):
read('path/to/large-file.ts', { offset: 1, limit: 100 })
read('path/to/large-file.ts', { offset: 101, limit: 100 })
# Continue as needed, only load what you use
```

#### Example 2: Skill Loading
```typescript
❌ BAD (always injects all SKILL.md files):
Skills: [weather, tmux, slack, coding-agent]
All loaded automatically → 30,000 tokens

✅ GOOD (load on-demand):
Skills list: [name + description only, 200 tokens]
User says "check weather" → load weather/SKILL.md (2,000 tokens)
User says "send slack message" → load slack/SKILL.md (1,500 tokens)
Total: 3,500 tokens (not 30,000)
```

#### Example 3: Memory Pattern
```typescript
❌ BAD:
"Let me load all memory files to find last week's revenue..."
[loads 365 files → 500,000 tokens]

✅ GOOD:
"What was revenue last week?"
memory_search('revenue', { startDate: '2026-02-21', endDate: '2026-02-27' })
[returns 3 matches → 500 tokens]
memory_get('memory/2026-02-27.md') → 2,000 tokens
Total: 2,500 tokens (not 500,000)
```

---

### COMMON MISTAKES

#### ❌ Mistake 1: "I Need Full Context"
```
Belief: Injecting everything = better results
Reality: 80% of context is noise. Models perform worse with token bloat.
Fix: Inject only what's relevant. Read on-demand.
```

#### ❌ Mistake 2: Auto-Injection Habits
```typescript
// Configuration injects everything by default
{
  "autoInject": true,  // ← REMOVE THIS
  "files": ["src/**/*.ts", "test/**/*.ts"]
}

// Fix: Manual injection control
{
  "autoInject": false,
  "files": ["src/config.ts"]  // Only minimal config
}
```

#### ❌ Mistake 3: Ignoring `/compact`
```
After a 20-tool-call task: "I'll just keep going..."
Result: Session hits 100K tokens → slow, expensive, degraded quality
Fix: ALWAYS run `/compact` after tasks >10 calls
```

#### ❌ Mistake 4: Reading Logs Instead of Grep
```bash
❌ BAD:
read('.openclaw/logs/access.log')  # 50,000 lines, 200K tokens

✅ GOOD:
exec('grep "error" .openclaw/logs/access.log | tail -20')  # 200 tokens
```

#### ❌ Mistake 5: Loading All Skills at Once
```
Config: "skills: load all in tier 1"
Result: 15 skills × 2,000 tokens = 30,000 tokens per session
Fix: Tier 1 = name+desc only. Load full SKILL.md on-demand.
```

---

## 2. OPENCLAW WORKFLOWS

### WHY

OpenClaw isn't just a tool — it's an **agent orchestration system**. Getting the workflow right means:

- **Parallel execution**: 10+ projects running simultaneously
- **No blocking**: Agent A doesn't wait for Agent B
- **Push-based completion**: Results auto-announce, no polling loops
- **Token efficiency**: Subagents get minimal context, main agent stays lean

---

### HOW

#### Workflow 1: Single Agent (Quick Tasks)
```
Sam: "Build X"
  ↓
Main agent (GLM-4.7):
  - Research (15-30 min)
  - Build → iterate (100-1000x)
  - Deploy
  - Report: "Deployed at [URL] ✅"
```

**When to use:** Tasks <2 hours, single domain (frontend, backend, etc.)

#### Workflow 2: Agent Swarm (Parallel Projects)
```
Sam: "Build 5 apps"
  ↓
Main agent spawns 5 subagents (non-blocking):
  ├─ Agent 1 (app A) → runs on Llama 405B (large ctx)
  ├─ Agent 2 (app B) → runs on Llama 70B (fast)
  ├─ Agent 3 (app C) → runs on DeepSeek (math/logic)
  ├─ Agent 4 (app D) → runs on Qwen 7B (simple)
  └─ Agent 5 (app E) → runs on Groq 70B (general)
  ↓
All agents work in parallel, results auto-announce
  ↓
Main agent: "All 5 deployed ✅"
```

**When to use:** 3+ simultaneous projects, different domains, tasks >2 hours

#### Workflow 3: Subagent with Task Delegation
```
Main agent (GLM-4.7):
  "Build large e-commerce platform"
  ↓
Spawns subagent (Llama 405B, 128K ctx):
  - Gets AGENTS.md + TOOLS.md only
  - Full task context
  - Researches architecture
  ↓
Subagent spawns MORE subagents:
  ├─ Backend agent (Groq 70B) → API, database
  ├─ Frontend agent (Llama 70B) → React, Next.js
  ├─ QA agent (DeepSeek) → Testing
  └─ Deploy agent (Qwen 7B) → CI/CD
  ↓
All parallel, results cascade up
```

**When to use:** Complex projects (>2 days), need domain-specific agents

---

### EXAMPLES

#### Example 1: Subagent Spawn Pattern
```typescript
// Main agent
subagents_spawn({
  label: 'build-telegram-bot',
  task: 'Build Telegram scraper with legal rate limits',
  model: 'groq/llama-3.3-70b-versatile',
  workspace: '/tmp/telegram-bot',
  nonBlocking: true  // Returns immediately
})

// Immediately spawn next agent
subagents_spawn({
  label: 'build-trading-dashboard',
  task: 'Build trading signal aggregator UI',
  model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
  workspace: '/tmp/trading-dashboard',
  nonBlocking: true
})

// Both agents run in parallel now
```

#### Example 2: Push-Based Results (No Polling)
```typescript
❌ BAD (busy polling):
while (!taskComplete) {
  status = subagents_list()
  await sleep(5000)
}

✅ GOOD (push-based):
subagents_spawn({ task: '...', nonBlocking: true })
// Agent runs in background, auto-announces when done
// Main agent continues working on other things
```

#### Example 3: Context Injection for Subagents
```typescript
// Subagent config
{
  "injectFiles": [
    "AGENTS.md",    // Rules
    "TOOLS.md"      // Tools available
  ],
  "dontInject": [
    "memory/**/*",  // Too large
    "logs/**/*"     // Not relevant
  ]
}

// Subagent only gets essential context (~2,000 tokens)
// Not full workspace (~50,000 tokens)
```

---

### COMMON MISTAKES

#### ❌ Mistake 1: Blocking Sequential Spawns
```typescript
❌ BAD:
await subagents_spawn({ task: 'build A' })  // Waits for completion
await subagents_spawn({ task: 'build B' })  // Starts after A finishes
// Total time: 4 hours

✅ GOOD:
subagents_spawn({ task: 'build A', nonBlocking: true })  // Returns immediately
subagents_spawn({ task: 'build B', nonBlocking: true })  // Runs parallel
// Total time: 2 hours (50% faster)
```

#### ❌ Mistake 2: Polling Loops
```typescript
❌ BAD:
for (let i = 0; i < 100; i++) {
  const status = subagents_list()
  if (status.some(s => s.done)) break
  await sleep(5000)
}
// Wastes tokens, blocks execution

✅ GOOD:
subagents_spawn({ task: '...', nonBlocking: true })
// Result auto-announces via push notification
// No polling needed
```

#### ❌ Mistake 3: Wrong Model for Subagent
```typescript
❌ BAD:
subagents_spawn({
  task: 'Simple UI change',
  model: 'groq/llama-3.1-405b'  // Overkill, slow, expensive
})

✅ GOOD:
subagents_spawn({
  task: 'Simple UI change',
  model: 'groq/llama-3.1-8b-instant'  // Fast, cheap, sufficient
})
```

#### ❌ Mistake 4: Full Workspace Injection
```typescript
❌ BAD:
{
  "injectFiles": [
    "**/*.ts",  // All TypeScript files → 100K+ tokens
    "**/*.md"   // All markdown → 50K+ tokens
  ]
}

✅ GOOD:
{
  "injectFiles": [
    "AGENTS.md",     // Rules only
    "TOOLS.md",      // Tools only
    "package.json"   // Dependencies only
  ]
  // Subagent reads other files on-demand as needed
}
```

#### ❌ Mistake 5: No Timeout on Long Tasks
```typescript
❌ BAD:
subagents_spawn({
  task: 'Deploy to production'
  // No timeout → could run forever
})

✅ GOOD:
subagents_spawn({
  task: 'Deploy to production',
  timeout: 3600000  // 1 hour max, auto-kill if stuck
})
```

---

## 3. REACT/NEXT.JS BEST PRACTICES

### WHY

React and Next.js are powerful, but **easy to misuse**. Following best practices means:

- **Performance**: Fast load times, good UX
- **Scalability**: Codebase remains maintainable
- **SEO**: Next.js SSR/SSG beats SPA for search
- **Developer experience**: Faster iteration, fewer bugs

---

### HOW

#### Rule 1: Use Next.js App Router (Not Pages)
```typescript
❌ BAD (Pages router):
// pages/index.tsx
export default function Home() {
  return <div>Hello</div>
}

✅ GOOD (App router):
// app/page.tsx
export default function Home() {
  return <div>Hello</div>
}
```

**Why:**
- App router = Server Components by default (faster)
- Better streaming, loading states
- Nested layouts, route groups
- Future of Next.js

#### Rule 2: Server Components > Client Components
```typescript
❌ BAD (unnecessary client component):
'use client'

export default function ServerData() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData)
  }, [])

  return <div>{data?.name}</div>
}

✅ GOOD (server component):
async function getData() {
  const res = await fetch('/api/data', { cache: 'no-store' })
  return res.json()
}

export default async function ServerData() {
  const data = await getData()
  return <div>{data.name}</div>
}
```

**Why:**
- Server components = no JS bundle size
- Faster initial render
- Better SEO (HTML in response)
- Client components = use ONLY for interactivity

#### Rule 3: Use Server Actions > API Routes for Mutations
```typescript
❌ BAD (API route):
// app/api/create-user/route.ts
export async function POST(req: Request) {
  const body = await req.json()
  await createUser(body)
  return Response.json({ success: true })
}

// Client component
async function handleSubmit() {
  await fetch('/api/create-user', {
    method: 'POST',
    body: JSON.stringify({ name })
  })
}

✅ GOOD (server action):
// app/actions.ts
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name')
  await db.users.create({ name })
  return { success: true }
}

// Server component
import { createUser } from './actions'

export default function CreateUserForm() {
  return (
    <form action={createUser}>
      <input name="name" />
      <button type="submit">Create</button>
    </form>
  )
}
```

**Why:**
- No API route overhead
- Type safety (functions, not HTTP)
- Works with Server Components
- Automatic form handling

#### Rule 4: Dynamic Imports for Heavy Components
```typescript
❌ BAD (imports heavy chart library in bundle):
import { LineChart } from 'recharts'

export default function Dashboard() {
  return <LineChart data={data} />
}

✅ GOOD (dynamic import):
import dynamic from 'next/dynamic'

const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), {
  loading: () => <div>Loading chart...</div>,
  ssr: false  // Chart doesn't need SSR
})

export default function Dashboard() {
  return <LineChart data={data} />
}
```

**Why:**
- Reduces initial JS bundle
- Faster page load
- Chart loads only when needed

#### Rule 5: Image Optimization with next/image
```typescript
❌ BAD (unoptimized img tag):
<img src="/hero.jpg" alt="Hero" width="1920" height="1080" />

✅ GOOD (next/image):
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
/>
```

**Why:**
- Automatic responsive images
- Lazy loading (except priority)
- WebP/AVIF conversion
- Better LCP scores

---

### EXAMPLES

#### Example 1: Full App Router Structure
```
app/
├── layout.tsx          # Root layout (HTML, fonts)
├── page.tsx            # Homepage (server component)
├── (marketing)/        # Route group (no URL change)
│   ├── about/
│   │   └── page.tsx
│   └── pricing/
│       └── page.tsx
├── (auth)/             # Auth pages
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
├── dashboard/          # Protected routes
│   ├── layout.tsx      # Dashboard layout
│   ├── page.tsx        # Dashboard home
│   └── settings/
│       └── page.tsx
├── api/                # API routes
│   └── users/
│       └── route.ts
└── actions.ts          # Server actions
```

#### Example 2: Data Fetching Patterns
```typescript
// Static data (SSG)
export const revalidate = 3600  // Revalidate every hour

export default async function StaticPage() {
  const data = await fetch('https://api.example.com/static', {
    next: { revalidate: 3600 }  // Or use default
  }).then(r => r.json())
  return <div>{data.title}</div>
}

// Dynamic data (SSR)
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/dynamic', {
    cache: 'no-store'  // Always fresh
  }).then(r => r.json())
  return <div>{data.title}</div>
}

// Incremental Static Regeneration (ISR)
export const revalidate = 60  // Revalidate every minute
```

#### Example 3: Loading and Error States
```typescript
// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading dashboard...</div>
}

// app/dashboard/error.tsx
'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

// app/dashboard/page.tsx
// Next.js automatically shows loading/error states
export default async function Dashboard() {
  const data = await getData()
  return <div>{data.content}</div>
}
```

---

### COMMON MISTAKES

#### ❌ Mistake 1: Everything is Client Component
```typescript
'use client'  // ← EVERY file has this

export default function Page() {
  // No useState, no useEffect
  // Should be server component!
  return <div>Hello</div>
}
```

**Fix:** Default to server components. Only add 'use client' when needed (interactivity).

#### ❌ Mistake 2: API Routes for Everything
```typescript
// Using API routes for data that could be fetched server-side
'use client'

export default function Page() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData)
  }, [])

  return <div>{data?.name}</div>
}
```

**Fix:** Use server components for data fetching. Skip the client-side fetch entirely.

#### ❌ Mistake 3: No Image Optimization
```typescript
<img src="/large-image.jpg" alt="Hero" />
// 5MB image, unresponsive, slow
```

**Fix:** Always use `next/image`. Responsive, optimized, lazy-loaded.

#### ❌ Mistake 4: Ignoring Fonts and Metadata
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Fix:** Use Next.js font and metadata APIs:
```typescript
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'Best app ever',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

#### ❌ Mistake 5: Heavy Libraries in Bundle
```typescript
import { Editor } from '@monaco-editor/react'  // 2MB+
import { Chart } from 'chart.js'  // 500KB+

export default function Page() {
  return (
    <div>
      <Editor />
      <Chart />
    </div>
  )
}
```

**Fix:** Dynamic imports with loading states.
```typescript
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@monaco-editor/react').then(m => m.Editor), {
  loading: () => <div>Loading editor...</div>,
  ssr: false
})

const Chart = dynamic(() => import('chart.js/auto').then(m => m.Chart), {
  ssr: false
})
```

---

## 4. DATABASE & API PATTERNS

### WHY

Database and API design determines **scalability, performance, and maintainability**. Bad patterns lead to:

- N+1 query problems (slow, expensive)
- Tight coupling (hard to change)
- SQL injection vulnerabilities
- Inconsistent data

Good patterns mean:
- Fast queries, low latency
- Easy to modify and scale
- Secure by default
- Predictable behavior

---

### HOW

#### Rule 1: Use ORM/Query Builder (Not Raw SQL)
```typescript
❌ BAD (raw SQL, vulnerable):
const users = await db.query(
  `SELECT * FROM users WHERE name = '${userName}'`
)

✅ GOOD (ORM with parameterized queries):
const users = await db.users.findMany({
  where: { name: userName }  // Auto-escaped, safe
})
```

**Why:**
- SQL injection protection
- Type safety
- Easier to maintain
- Database-agnostic (can switch from PostgreSQL to MySQL)

#### Rule 2: Use Prisma (TypeScript ORM)
```typescript
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

// Queries
const users = await prisma.user.findMany({
  include: { posts: true }  // No N+1 problem!
})

const user = await prisma.user.create({
  data: {
    email: 'sam@example.com',
    posts: {
      create: [{ title: 'Hello' }]
    }
  }
})
```

**Why:**
- Type-safe queries (autocomplete works)
- Automatic migrations
- Excellent TypeScript support
- Solves N+1 with `include` / `select`

#### Rule 3: API Routes Follow REST or RPC, Not Both
```typescript
// Option A: REST
GET    /api/users          // List users
GET    /api/users/123      // Get user 123
POST   /api/users          // Create user
PUT    /api/users/123      // Update user 123
DELETE /api/users/123      // Delete user 123

// Option B: RPC (Server Actions)
app/actions.ts
'use server'

export async function createUser(data: CreateUserInput) { ... }
export async function updateUser(id: number, data: UpdateUserInput) { ... }
export async function deleteUser(id: number) { ... }

// Choose ONE, don't mix randomly
```

**Why:**
- Consistency across your API
- Easier for frontend to consume
- Clearer intent

#### Rule 4: Use Zod for Validation
```typescript
❌ BAD (manual validation, fragile):
app/api/users/route.ts
export async function POST(req: Request) {
  const body = await req.json()

  if (!body.email || !body.email.includes('@')) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  // ...rest of code
}

✅ GOOD (Zod schema, type-safe):
import { z } from 'zod'

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  age: z.number().min(18).optional()
})

app/api/users/route.ts
export async function POST(req: Request) {
  const body = await req.json()
  const result = CreateUserSchema.safeParse(body)

  if (!result.success) {
    return Response.json(
      { error: result.error.flatten() },
      { status: 400 }
    )
  }

  // result.data is fully typed!
  const user = await prisma.user.create({ data: result.data })
  return Response.json(user)
}
```

**Why:**
- Type-safe validation
- Detailed error messages
- Reusable schemas
- Catches bugs at compile time

#### Rule 5: Use Transactions for Multi-Step Operations
```typescript
❌ BAD (no transaction, data inconsistency):
await prisma.user.update({ where: { id }, data: { balance: -100 } })
await prisma.transaction.create({ data: { userId: id, amount: -100 } })
// If second query fails, user has -100 balance but no transaction record!

✅ GOOD (transaction, atomic):
await prisma.$transaction(async (tx) => {
  await tx.user.update({ where: { id }, data: { balance: -100 } })
  await tx.transaction.create({ data: { userId: id, amount: -100 } })
})
// Either both succeed or both fail. No partial state.
```

**Why:**
- Data consistency
- Rollback on error
- No orphaned records
- Critical for financial operations

---

### EXAMPLES

#### Example 1: Full API Route with Validation
```typescript
// app/api/users/route.ts
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100)
})

export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true }  // Exclude sensitive data
  })
  return Response.json(users)
}

export async function POST(req: Request) {
  const body = await req.json()
  const result = CreateUserSchema.safeParse(body)

  if (!result.success) {
    return Response.json(
      { error: result.error.flatten() },
      { status: 400 }
    )
  }

  try {
    const user = await prisma.user.create({
      data: result.data,
      select: { id: true, email: true, name: true }
    })
    return Response.json(user, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {  // Prisma unique constraint error
      return Response.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }
    throw error
  }
}
```

#### Example 2: N+1 Problem Solved with Prisma
```typescript
❌ BAD (N+1 queries):
const posts = await prisma.post.findMany()
for (const post of posts) {
  post.author = await prisma.user.findUnique({ where: { id: post.authorId } })
}
// 100 posts = 101 queries (1 for posts + 100 for authors)

✅ GOOD (single query):
const posts = await prisma.post.findMany({
  include: { author: true }  // Prisma does JOIN automatically
})
// 100 posts = 1 query
```

#### Example 3: Database Indexing Strategy
```typescript
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique  // ← Automatic index
  name      String?
  createdAt DateTime @default(now())

  @@index([createdAt])  // Index for sorting/filtering by date
  @@index([name])       // Index for searching by name
}

// Fast queries
await prisma.user.findMany({
  where: { name: { contains: 'Sam' } },
  orderBy: { createdAt: 'desc' }
})
// Uses indexes, fast even with 1M+ users
```

---

### COMMON MISTAKES

#### ❌ Mistake 1: No Database Indexes
```typescript
// schema.prisma
model User {
  id        Int      @id
  email     String
  name      String
  createdAt DateTime
}

// Query: Get users created last month
const users = await prisma.user.findMany({
  where: { createdAt: { gte: lastMonth } }
})
// Full table scan → slow with 100K+ users
```

**Fix:** Add index on `createdAt`.
```typescript
model User {
  // ...
  @@index([createdAt])
}
```

#### ❌ Mistake 2: N+1 Query Problem
```typescript
const posts = await prisma.post.findMany()  // 1 query
const postsWithAuthors = await Promise.all(
  posts.map(post =>
    prisma.user.findUnique({ where: { id: post.authorId } })  // N queries
  )
)
// Total: N+1 queries
```

**Fix:** Use `include` or `select`.
```typescript
const posts = await prisma.post.findMany({
  include: { author: true }  // 1 query with JOIN
})
```

#### ❌ Mistake 3: No Input Validation
```typescript
export async function POST(req: Request) {
  const body = await req.json()
  await prisma.user.create({ data: body })  // No validation!
}
```

**Fix:** Use Zod schema.
```typescript
const schema = z.object({ email: z.string().email(), ... })
const result = schema.safeParse(body)
if (!result.success) return Response.json({ error: result.error }, { status: 400 })
```

#### ❌ Mistake 4: Returning Sensitive Data
```typescript
export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)  // Includes passwordHash, internal fields!
}
```

**Fix:** Use `select` to exclude sensitive fields.
```typescript
export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true }  // Only public fields
  })
  return Response.json(users)
}
```

#### ❌ Mistake 5: No Error Handling
```typescript
export async function POST(req: Request) {
  const user = await prisma.user.create({ data: ... })
  return Response.json(user)
}
// If email exists, throws 500 error, ugly response
```

**Fix:** Catch specific errors, return appropriate status codes.
```typescript
export async function POST(req: Request) {
  try {
    const user = await prisma.user.create({ data: ... })
    return Response.json(user, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {
      return Response.json({ error: 'Email exists' }, { status: 409 })
    }
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
```

---

## 5. GIT & GITHUB WORKFLOW

### WHY

Git is the foundation of collaboration, history, and deployment. Good Git practices mean:

- **Never lose work**: Every commit is a snapshot
- **Easy debugging**: Bisect to find when bugs were introduced
- **Clean collaboration**: Meaningful PRs, easy reviews
- **Deploy with confidence**: Every deploy is tied to a commit

---

### HOW

#### Rule 1: Atomic Commits (One Logical Change)
```bash
❌ BAD:
git commit -m "fix everything"
# Changes: bug fix + refactor + new feature + config change

✅ GOOD:
git commit -m "fix: null pointer error in user service"
# Only the bug fix

git commit -m "refactor: extract validation to separate module"
# Only the refactor

git commit -m "feat: add user avatar upload"
# Only the new feature
```

**Why:**
- Easy to revert if needed
- Clear history for debugging
- Smaller PRs = easier review
- Bisect works better

#### Rule 2: Conventional Commits (Structured Messages)
```bash
# Format: <type>(<scope>): <subject>

Types:
  feat:     New feature
  fix:      Bug fix
  docs:     Documentation only
  style:    Formatting, no code change
  refactor: Code change, no feature/fix
  test:     Adding tests
  chore:    Build process, deps, config

# Examples:
git commit -m "feat(auth): add OAuth login with Google"
git commit -m "fix(api): handle null response from user service"
git commit -m "docs(readme): update installation instructions"
git commit -m "refactor(user): extract validation to Zod schema"
```

**Why:**
- Automatic changelogs (semantic-release)
- Clear intent at a glance
- Filtering by type (e.g., all fixes)
- Better tooling (commitlint, versioning)

#### Rule 3: Branch Strategy (GitFlow Simplified)
```
main         ← Production, always deployable
  ↑
develop      ← Staging, integration testing
  ↑
feature/auth  ← Feature branch (from develop)
feature/payments
```

**Workflow:**
```bash
# Start feature
git checkout develop
git pull
git checkout -b feature/auth-oauth

# Work, commit
git add .
git commit -m "feat(auth): add Google OAuth"

# Push, open PR
git push origin feature/auth-oauth
# Open PR: feature/auth-oauth → develop

# After review and merge:
# PR auto-deploys to staging (staging.example.com)

# Merge develop → main weekly
# Auto-deploys to production (example.com)
```

**Why:**
- Main always production-ready
- Develop for integration
- Feature branches isolated
- PR reviews required

#### Rule 4: PR Descriptions (Why, Not Just What)
```markdown
## Why
Users can't sign up without OAuth integration

## What
- Add Google OAuth provider
- Update login UI to show OAuth button
- Handle OAuth callback on server
- Update database to store OAuth IDs

## Testing
- [ ] Test Google OAuth login flow
- [ ] Verify new users are created correctly
- [ ] Test existing user login (non-OAuth)
- [ ] Check staging deployment

## Notes
- Uses next-auth for OAuth handling
- Google client ID: staging uses test app
```

**Why:**
- Reviewers understand intent
- Testing checklist
- Context for future reference
- Easier approval

#### Rule 5: Use `.gitignore` Wisely
```gitignore
# Node.js
node_modules/
npm-debug.log
yarn-error.log
.pnp
.pnp.js

# Next.js
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Temporary
tmp/
temp/
.cache/
```

**Why:**
- Never commit sensitive data (.env)
- Never commit dependencies (node_modules)
- Never commit build artifacts (.next/)
- Keep repo clean, fast clones

---

### EXAMPLES

#### Example 1: Daily Development Workflow
```bash
# Morning: Pull latest
git checkout develop
git pull origin develop

# Start new feature
git checkout -b feature/add-user-profile

# Work throughout day
git add .
git commit -m "feat(profile): add profile edit page"
git commit -m "feat(profile): add avatar upload"
git commit -m "fix(profile): handle missing avatar gracefully"

# Evening: Push, open PR
git push origin feature/add-user-profile
# Open PR on GitHub, assign reviewer

# Next day: Review comments, fix
git add .
git commit -m "fix(profile): address review comments"
git push origin feature/add-user-profile

# After merge: Update develop
git checkout develop
git pull origin develop
git branch -D feature/add-user-profile
```

#### Example 2: Fixing a Bug in Production
```bash
# Bug found in production (main branch)
git checkout main
git pull origin main

# Create hotfix branch
git checkout -b hotfix/critical-login-bug

# Fix quickly
git add .
git commit -m "fix(auth): handle missing token in login"

# Push, review fast-track
git push origin hotfix/critical-login-bug
# PR: hotfix/critical-login-bug → main
# Fast-track review, merge

# Deploy to production immediately
# CI/CD auto-deploys on main merge

# Backport to develop (cherry-pick)
git checkout develop
git cherry-pick <commit-hash>
git push origin develop
```

#### Example 3: Bisect to Find Bug Origin
```bash
# Bug introduced somewhere in last 50 commits
git bisect start
git bisect bad          # Current state has bug
git bisect good v1.2.0  # v1.2.0 didn't have bug

# Git checks out a commit in the middle
# Test it:
npm test
# If bug exists:
git bisect bad
# If bug doesn't exist:
git bisect good

# Repeat until git finds the culprit commit
git bisect reset        # Return to original branch

# Now you know exactly which commit introduced the bug
# Can fix or revert
```

---

### COMMON MISTAKES

#### ❌ Mistake 1: Commit Messages Like "fix"
```bash
git commit -m "fix"
# Useless. Fix what? Why?
```

**Fix:** Use conventional commits.
```bash
git commit -m "fix(auth): handle expired tokens gracefully"
```

#### ❌ Mistake 2: Massive Commits (500 files changed)
```bash
git add .
git commit -m "add everything"
# Impossible to review, impossible to revert selectively
```

**Fix:** Break into logical chunks.
```bash
git add src/auth/
git commit -m "feat(auth): add OAuth support"

git add src/ui/
git commit -m "feat(ui): add login page"

git add tests/
git commit -m "test(auth): add OAuth tests"
```

#### ❌ Mistake 3: Committing .env Files
```bash
git add .env
git commit -m "add env"
# DANGER: Leaks API keys, passwords, secrets!
```

**Fix:** Add `.env` to `.gitignore`.
```gitignore
# .gitignore
.env
.env.local
.env.*.local
```

If already committed:
```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env' \
  --prune-empty --tag-name-filter cat -- --all
git push origin --force --all
```

#### ❌ Mistake 4: Direct Commits to Main
```bash
git checkout main
git add .
git commit -m "quick fix"
git push origin main
# Bypasses review, can break production
```

**Fix:** Always use PRs.
```bash
git checkout -b hotfix/quick-fix
git add .
git commit -m "fix: handle edge case"
git push origin hotfix/quick-fix
# Open PR: hotfix/quick-fix → main
# Review, then merge
```

#### ❌ Mistake 5: Not Syncing Before Starting Work
```bash
git checkout develop
# Forget to pull
git checkout -b feature/new-stuff
# Work for 3 days
# Pull request has 50 conflicts with develop
```

**Fix:** Always pull before branching.
```bash
git checkout develop
git pull origin develop  # ← DO THIS
git checkout -b feature/new-stuff
```

---

## SUMMARY 💎

### Token Optimization
- Tiered context loading (minimal injection, read on-demand)
- Compact after >10 tool calls
- Use `/session debug` for heavy work
- Never inject full files

### OpenClaw Workflows
- Parallel agents for parallel projects
- Non-blocking spawns
- Push-based results (no polling)
- Subagents get minimal context

### React/Next.js
- App router > Pages router
- Server components > Client components
- Server actions > API routes
- Dynamic imports for heavy components
- next/image for optimization

### Database & API
- ORM (Prisma) > Raw SQL
- Zod validation
- Transactions for multi-step ops
- Indexes for performance
- Solve N+1 with `include`

### Git & GitHub
- Atomic commits
- Conventional commit format
- Branch strategy (main/develop/feature)
- PR descriptions with "why"
- Never commit .env or node_modules

**Follow these, and you build faster, cheaper, and with fewer headaches. 💎**
