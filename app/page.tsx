'use client'

import { useState, useEffect } from 'react'

// Stats
const stats = [
  { label: 'Categories', value: '10' },
  { label: 'Articles', value: '100+' },
  { label: 'Prompts', value: '20+' },
  { label: 'Workflows', value: '10+' },
  { label: 'Sessions', value: '118' },
]

// AA Articles with full content
const aaArticles = [
  {
    title: 'Claude Code Setup',
    category: 'Claude Code',
    difficulty: 'beginner',
    content: `## Requirements
- Node.js v18+ - Download at nodejs.org
- Claude Pro or Max subscription - Required for Claude Code
- Code editor - VSCode, Cursor, or Windsurf
- Terminal access

## Installation
\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

## Quick Start
1. Create folder in Finder/Explorer
2. Open in code editor
3. Open terminal in that folder
4. \`mkdir my-first-app && cd my-first-app\`

## Commands
- \`claude\` - Start Claude
- \`/\` - Shows: /read, /write, /search, /terminal, /browser, /mcp
- \`@agent\` - Shows specialized helpers: @agent/code, @agent/debug, @agent/docs, @agent/test

## Example Prompts
- "Create a todo list app with Next.js and Tailwind"
- "Build a landing page with hero section, features grid, pricing table, contact form"
- "Add dark mode toggle"
- "Make pricing cards animate on hover"

## MCP Setup (Supabase example)
\`\`\`json
{"mcpServers":{"supabase":{"command":"npx","args":["-y","@supabase/mcp-server"],"env":{"SUPABASE_URL":"your-url","SUPABASE_KEY":"your-key"}}}}
\`\`\`

## Troubleshooting
- "Command not found: claude" → \`npm install -g @anthropic-ai/claude-code\`
- "Node.js version too old" → Update Node.js from nodejs.org (need v18+)
- "Authentication failed" → \`claude auth logout\` then \`claude auth login\`
- "Rate limit exceeded" → Wait 10-15 minutes or upgrade to Claude Max`
  },
  {
    title: 'Sonnet 4.6 Agent Guide (Claude Code)',
    category: 'Claude Code',
    difficulty: 'intermediate',
    content: `## Agent Roles

### Atlas (Planner)
- **Role:** Strategic planning, ticket breakdown
- **Skills:** Break features into FE/BE tasks, prioritize, write acceptance criteria

### Nova (Frontend)
- **Role:** UI/UX implementation
- **Skills:** React, Next.js, Tailwind, accessibility, animations

### Forge (Backend)
- **Role:** API + database
- **Skills:** REST APIs, database design, validation, testing

### Scribe (Research)
- **Role:** Research + documentation
- **Skills:** Compare tools, draft decision memos, produce copy-pastable examples

### Sentinel (Security)
- **Role:** Security / Compliance
- **Skills:** Threat modeling, security review, secrets handling, dependency risk

### Gauge (QA)
- **Role:** QA / Release Engineer
- **Skills:** Test plans, edge-case matrices, regression checklists, release notes

## Operator Flow (Recommended)
1. Ask **Atlas** to break work into tickets with acceptance criteria
2. Send tickets to **Nova** and **Forge** in parallel
3. Have **Sentinel** review auth, inputs, secrets, dependencies
4. Have **Gauge** produce test plan + release checklist
5. Use **Scribe** whenever you hit uncertainty

## Example Prompts
- \`@atlas: Turn this feature request into a plan with acceptance criteria\`
- \`@nova: Implement the UI for ticket FE-1\`
- \`@forge: Implement the API + DB changes for ticket BE-1\`
- \`@sentinel: Review the diff for security issues\`
- \`@gauge: Write a test matrix and release checklist\`

## Handoff Rules
- **Atlas** is the only agent allowed to change requirements
- **Nova** never changes the DB schema
- **Forge** never rewrites the UI without asking
- **Sentinel** can block a release if high-risk finding
- **Gauge** defines what "done" means in tests`
  },
  { title: 'META Ads Dashboard PRD', category: 'Business', difficulty: 'intermediate' },
  { title: 'OSI Layers + OpenClaw Guardrails (Miro)', category: 'OpenClaw', difficulty: 'advanced' },
  { title: 'Master Claw Org Chart', category: 'OpenClaw', difficulty: 'intermediate' },
  { title: 'Vibe Marketing Quick Setup', category: 'Marketing', difficulty: 'beginner' },
  { title: 'The Agentic Coding Blueprint', category: 'Claude Code', difficulty: 'intermediate' },
  { title: 'Claude Code Agent Swarm', category: 'Claude Code', difficulty: 'advanced' },
  { title: 'Hostinger VPS Setup', category: 'Deployment', difficulty: 'intermediate' },
  { title: 'Vibe Engineering Process Guide', category: 'Engineering', difficulty: 'intermediate' },
  { title: 'OpenClaw = Jarvis | Setup Guide', category: 'OpenClaw', difficulty: 'beginner' },
  { title: 'Remotion + CC Builder\'s Guide', category: 'Development', difficulty: 'intermediate' },
  { title: 'The Complete Guide to Cowork', category: 'Claude Code', difficulty: 'beginner' },
  { title: 'Docker Desktop MCP', category: 'MCP', difficulty: 'intermediate' },
  { title: '2026 AI Coding Tools Tier Ranking List', category: 'AI Tools', difficulty: 'beginner' },
  { title: 'Claude Cowork', category: 'Claude Code', difficulty: 'beginner' },
  { title: 'Claude Code x Antigravity', category: 'Claude Code', difficulty: 'intermediate' },
  { title: 'Claude Code + n8n MCP Setup Guide', category: 'MCP', difficulty: 'intermediate' },
  { title: 'The 2026 AI Agency Playbook', category: 'Business', difficulty: 'intermediate' },
  { title: 'Best N8N Workflows', category: 'Automation', difficulty: 'intermediate' },
  { title: 'Software Stack for Apps', category: 'Development', difficulty: 'beginner' },
  { title: 'Winning Ad Generator - n8n + Sora 2', category: 'Marketing', difficulty: 'intermediate' },
  { title: 'Gemini 3 Technical Deep-Dive', category: 'AI Tools', difficulty: 'advanced' },
  { title: 'Onboarding AI Clients Guide', category: 'Business', difficulty: 'intermediate' },
  { title: 'AI Context System Blueprint', category: 'AI Tools', difficulty: 'advanced' },
  { title: 'AI Outreach Engine Blueprint', category: 'Marketing', difficulty: 'intermediate' },
  { title: 'Complete AI Automation Agency Playbook', category: 'Business', difficulty: 'advanced' },
  { title: 'Top 3 $$$ Making Automations 2025', category: 'Automation', difficulty: 'intermediate' },
  { title: 'Sora 2 Full Guide: AI Video Revolution', category: 'AI Tools', difficulty: 'beginner' },
  { title: '20 Best N8N Automations to Sell', category: 'Automation', difficulty: 'intermediate' },
  { title: 'The Complete Claude Project Blueprint', category: 'Claude Code', difficulty: 'intermediate' },
  { title: 'Ollama Setup Guide and Research', category: 'AI Tools', difficulty: 'beginner' },
  { title: 'The Complete System | 9 Agents | 50+ Use Cases', category: 'Claude Code', difficulty: 'advanced' },
  { title: 'The Agent Playbook', category: 'Claude Code', difficulty: 'intermediate' },
]

// Categories for sidebar
const categories = [
  { name: 'Claude Code', count: 12, color: '#7c3aed' },
  { name: 'OpenClaw', count: 5, color: '#0891b2' },
  { name: 'Automation', count: 8, color: '#ea580c' },
  { name: 'Business', count: 7, color: '#ca8a04' },
  { name: 'AI Tools', count: 6, color: '#9333ea' },
  { name: 'MCP', count: 4, color: '#0891b2' },
  { name: 'Marketing', count: 5, color: '#dc2626' },
  { name: 'Development', count: 4, color: '#059669' },
  { name: 'Deployment', count: 3, color: '#dc2626' },
  { name: 'Engineering', count: 2, color: '#be185d' },
]

// Prompts
const prompts = [
  {
    title: 'Plan Implementation',
    category: 'Claude Code',
    prompt: `/plan

Create a detailed implementation plan for this feature. Include:

1. File changes needed
2. Dependencies to add
3. Step-by-step implementation order
4. Potential issues and solutions
5. Testing approach`,
    why: 'Creates comprehensive blueprints before coding starts',
  },
  {
    title: 'Test-Driven Development',
    category: 'Claude Code',
    prompt: `/tdd

Write tests first, then implement:

1. Write failing test for the feature
2. Run test to confirm it fails
3. Write minimal code to pass
4. Refactor if needed
5. Repeat`,
    why: 'Enforces test-first development workflow',
  },
  {
    title: 'Investigate Before Fixing',
    category: 'Debugging',
    prompt: `Before making any changes:

1. Reproduce the issue
2. Check logs for errors
3. Identify the root cause
4. Verify the fix approach
5. Only then make changes

⏹️ STOP if you jump to fixes without investigation.`,
    why: 'Critical workflow: always investigate before fixing',
  },
  {
    title: 'Security Audit',
    category: 'Security',
    prompt: `/security-scan

Perform a comprehensive security audit:

1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/authorization flaws
4. Exposed secrets in code
5. CORS misconfigurations
6. Rate limiting gaps`,
    why: 'Full security audit with OWASP checklist',
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'home' | 'aa' | 'prompts'>('home')
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const filteredArticles = aaArticles.filter(a =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const copyPrompt = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(index)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        document.getElementById('search-input')?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: '#f8fafc',
      color: '#334155',
      lineHeight: 1.65,
      padding: '48px 24px',
      minHeight: '100vh',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
          VIEWPORT Knowledge Base
        </h1>
        <p style={{ color: '#64748b', fontSize: 15, marginBottom: 32 }}>
          Your complete AI development guide • 100+ articles • Updated daily
        </p>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          margin: '24px 0 32px 0',
          padding: 16,
          background: 'white',
          borderRadius: 8,
          border: '1px solid #e2e8f0',
        }}>
          {['home', 'aa', 'prompts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              style={{
                fontSize: 12,
                color: activeTab === tab ? '#334155' : '#64748b',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                background: activeTab === tab ? '#e2e8f0' : '#f1f5f9',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab === 'aa' ? 'AA Knowledge Base' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: 24,
          marginBottom: 40,
          padding: '20px 0',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          flexWrap: 'wrap',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#0f172a' }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginBottom: 32 }}>
          <input
            id="search-input"
            type="text"
            placeholder="Search everything... (⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              fontSize: 14,
              color: '#334155',
              outline: 'none',
            }}
          />
        </div>

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            {/* At a Glance */}
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              border: '1px solid #f59e0b',
              borderRadius: 12,
              padding: '20px 24px',
              marginBottom: 32,
            }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#92400e', marginBottom: 16 }}>
                At a Glance
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 14, color: '#78350f', lineHeight: 1.6 }}>
                  <strong style={{ color: '#92400e' }}>What's included:</strong> Claude Code masterclass, OpenClaw setup guides, N8N automation workflows, AI agency playbooks, MCP integration tutorials, and 70+ articles from the AA Knowledge Base.
                </div>
                <div style={{ fontSize: 14, color: '#78350f', lineHeight: 1.6 }}>
                  <strong style={{ color: '#92400e' }}>How to use:</strong> Browse categories, search for specific topics, or copy-paste prompts directly into your AI assistant.
                </div>
                <div style={{ fontSize: 14, color: '#78350f', lineHeight: 1.6 }}>
                  <strong style={{ color: '#92400e' }}>Best for:</strong> AI-assisted development, automation building, client work, and learning new AI tools.
                </div>
              </div>
            </div>

            {/* Categories Grid */}
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginBottom: 16 }}>
              Categories
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {categories.map((cat, i) => (
                <div
                  key={i}
                  onClick={() => setExpandedCategory(expandedCategory === cat.name ? null : cat.name)}
                  style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    padding: 16,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 12,
                        height: 12,
                        borderRadius: 4,
                        background: cat.color,
                      }} />
                      <span style={{ fontWeight: 600, fontSize: 15, color: '#0f172a' }}>
                        {cat.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        fontSize: 12,
                        color: '#64748b',
                        background: '#f1f5f9',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}>
                        {cat.count} articles
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: 12 }}>
                        {expandedCategory === cat.name ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                  {expandedCategory === cat.name && (
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                      {aaArticles.filter(a => a.category === cat.name).map((article, j) => (
                        <div
                          key={j}
                          style={{
                            padding: '8px 0',
                            borderBottom: j < aaArticles.filter(a => a.category === cat.name).length - 1 ? '1px solid #f1f5f9' : 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ fontSize: 14, color: '#334155' }}>{article.title}</span>
                          <span style={{
                            fontSize: 11,
                            padding: '2px 8px',
                            borderRadius: 4,
                            background: article.difficulty === 'beginner' ? '#f0fdf4' :
                              article.difficulty === 'intermediate' ? '#fef3c7' : '#fef2f2',
                            color: article.difficulty === 'beginner' ? '#166534' :
                              article.difficulty === 'intermediate' ? '#92400e' : '#991b1b',
                          }}>
                            {article.difficulty}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AA KNOWLEDGE BASE TAB */}
        {activeTab === 'aa' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginBottom: 16 }}>
              AA Knowledge Base
            </h2>
            <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>
              70+ articles on AI automation, N8N workflows, agency playbooks, and business strategies.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {filteredArticles.map((article, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    overflow: 'hidden',
                  }}
                >
                  <div 
                    onClick={() => setExpandedArticle(expandedArticle === i ? null : i)}
                    style={{ 
                      padding: 16,
                      cursor: article.content ? 'pointer' : 'default',
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start' 
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 15, color: '#0f172a', marginBottom: 4 }}>
                        {article.title} {article.content && <span style={{ color: '#94a3b8', fontSize: 12 }}>(click to expand)</span>}
                      </div>
                      <div style={{ fontSize: 13, color: '#64748b' }}>
                        {article.category}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        fontSize: 11,
                        padding: '4px 8px',
                        borderRadius: 4,
                        flexShrink: 0,
                        background: article.difficulty === 'beginner' ? '#f0fdf4' :
                          article.difficulty === 'intermediate' ? '#fef3c7' : '#fef2f2',
                        color: article.difficulty === 'beginner' ? '#166534' :
                          article.difficulty === 'intermediate' ? '#92400e' : '#991b1b',
                      }}>
                        {article.difficulty}
                      </span>
                      {article.content && (
                        <span style={{ color: '#94a3b8', fontSize: 12 }}>
                          {expandedArticle === i ? '−' : '+'}
                        </span>
                      )}
                    </div>
                  </div>
                  {expandedArticle === i && article.content && (
                    <div style={{
                      padding: '0 16px 16px 16px',
                      borderTop: '1px solid #e2e8f0',
                      background: '#fafafa',
                    }}>
                      <div style={{
                        fontFamily: 'monospace',
                        fontSize: 12,
                        color: '#334155',
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.6,
                        paddingTop: 16,
                      }}>
                        {article.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROMPTS TAB */}
        {activeTab === 'prompts' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginBottom: 16 }}>
              Copy-Paste Prompts
            </h2>
            <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>
              Ready-to-use prompts for common tasks. Click copy and paste into your AI assistant.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {prompts.map((prompt, i) => (
                <div
                  key={i}
                  style={{
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: 8,
                    padding: 16,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 12, color: '#1e40af', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>
                        {prompt.category}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: '#0f172a' }}>
                        {prompt.title}
                      </div>
                    </div>
                    <button
                      onClick={() => copyPrompt(i, prompt.prompt)}
                      style={{
                        background: copiedPrompt === i ? '#16a34a' : '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        padding: '6px 12px',
                        fontSize: 12,
                        cursor: 'pointer',
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {copiedPrompt === i ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <div style={{
                    background: 'white',
                    padding: '10px 12px',
                    borderRadius: 4,
                    fontFamily: 'monospace',
                    fontSize: 12,
                    color: '#334155',
                    border: '1px solid #e2e8f0',
                    whiteSpace: 'pre-wrap',
                    marginBottom: 12,
                  }}>
                    {prompt.prompt}
                  </div>
                  <div style={{ fontSize: 13, color: '#475569' }}>
                    <strong>Why:</strong> {prompt.why}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{
          marginTop: 48,
          padding: '24px 0',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
          color: '#64748b',
          fontSize: 13,
        }}>
          <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>
            VIEWPORT Knowledge Base
          </div>
          <div>Learn • Build • Share • Repeat</div>
          <div style={{ marginTop: 8 }}>
            <a href="https://viewport-knowledgebase.vercel.app" style={{ color: '#64748b', textDecoration: 'none', marginRight: 16 }}>
              Live Site
            </a>
            <a href="https://github.com/viewportplatform" style={{ color: '#64748b', textDecoration: 'none' }}>
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
