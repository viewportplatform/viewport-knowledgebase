'use client'
import { useState } from 'react'

type CategoryId = 'claude-code' | 'openclaw' | 'ai-tools' | 'development' | 'deployment' | 'business' | 'case-studies'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('claude-code')
  const [activeSection, setActiveSection] = useState('intro')

  const categories: { id: CategoryId; name: string; icon: string }[] = [
    { id: 'claude-code', name: 'Claude Code', icon: '🎯' },
    { id: 'openclaw', name: 'OpenClaw', icon: '⚡' },
    { id: 'ai-tools', name: 'AI Tools', icon: '🤖' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'deployment', name: 'Deployment', icon: '🚀' },
    { id: 'business', name: 'Business', icon: '💰' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
  ]

  const sections: Record<CategoryId, { id: string; title: string; icon: string }[]> = {
    'claude-code': [
      { id: 'intro', title: 'Introduction', icon: '🎯' },
      { id: 'setup', title: 'Setup', icon: '⚙️' },
      { id: 'agents', title: 'Agents', icon: '🤖' },
      { id: 'commands', title: 'Commands', icon: '⚡' },
      { id: 'rules', title: 'Rules', icon: '📋' },
      { id: 'hooks', title: 'Hooks', icon: '🪝' },
      { id: 'mcps', title: 'MCPs', icon: '🔌' },
      { id: 'tokens', title: 'Token Optimization', icon: '💰' },
      { id: 'prompts', title: 'Copy-Paste Prompts', icon: '📝' },
      { id: 'examples', title: 'Real Examples', icon: '💡' },
    ],
    'openclaw': [
      { id: 'intro', title: 'Introduction', icon: '⚡' },
      { id: 'setup', title: 'Setup', icon: '⚙️' },
      { id: 'agents', title: 'Multi-Agent System', icon: '🤖' },
      { id: 'skills', title: 'Skills', icon: '🎯' },
      { id: 'memory', title: 'Memory System', icon: '🧠' },
      { id: 'cron', title: 'Cron Jobs', icon: '⏰' },
      { id: 'channels', title: 'Channels', icon: '📱' },
    ],
    'ai-tools': [
      { id: 'cursor', title: 'Cursor AI', icon: '🎯' },
      { id: 'copilot', title: 'GitHub Copilot', icon: '🤖' },
      { id: 'other', title: 'Other AI Tools', icon: '🔧' },
    ],
    'development': [
      { id: 'react', title: 'React/Next.js', icon: '⚛️' },
      { id: 'python', title: 'Python', icon: '🐍' },
      { id: 'typescript', title: 'TypeScript', icon: '📘' },
      { id: 'database', title: 'Database', icon: '🗄️' },
    ],
    'deployment': [
      { id: 'vercel', title: 'Vercel', icon: '▲' },
      { id: 'railway', title: 'Railway', icon: '🚂' },
      { id: 'oracle', title: 'Oracle Cloud', icon: '☁️' },
      { id: 'docker', title: 'Docker', icon: '🐳' },
    ],
    'business': [
      { id: 'ib-cpa', title: 'IB/CPA Marketing', icon: '📊' },
      { id: 'trading', title: 'Trading Tools', icon: '📈' },
      { id: 'saas', title: 'SaaS Patterns', icon: '💎' },
      { id: 'client', title: 'Client Work', icon: '🤝' },
    ],
    'case-studies': [
      { id: 'telegram-bot', title: 'Telegram Bot System', icon: '🤖' },
      { id: 'ecommerce', title: 'E-commerce Platform', icon: '🛒' },
      { id: 'trading-bot', title: 'Trading Bot', icon: '📈' },
      { id: 'client-projects', title: 'Client Projects', icon: '💼' },
    ],
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                VIEWPORT Knowledge Base
              </h1>
              <p className="text-gray-600 mt-1">Your Complete AI Development Guide</p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                v1.0
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Open Source
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setActiveSection(sections[category.id][0].id)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-purple-50 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Categories</span>
                  <span className="font-semibold text-gray-900">{categories.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Total Sections</span>
                  <span className="font-semibold text-gray-900">
                    {Object.values(sections).flat().length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Prompts</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Category Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.find(c => c.id === activeCategory)?.icon}{' '}
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {activeCategory === 'claude-code' && 'Master Claude Code CLI with agents, commands, and workflows'}
                {activeCategory === 'openclaw' && 'Build autonomous AI systems with OpenClaw'}
                {activeCategory === 'ai-tools' && 'Explore other AI development tools'}
                {activeCategory === 'development' && 'Best practices for modern development'}
                {activeCategory === 'deployment' && 'Deploy and scale your applications'}
                {activeCategory === 'business' && 'Revenue strategies and business patterns'}
                {activeCategory === 'case-studies' && 'Real-world project implementations'}
              </p>
            </div>

            {/* Section Navigation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {sections[activeCategory].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {activeCategory === 'claude-code' && <ClaudeCodeSection section={activeSection} />}
              {activeCategory === 'openclaw' && <OpenClawSection section={activeSection} />}
              {activeCategory === 'ai-tools' && <AIToolsSection section={activeSection} />}
              {activeCategory === 'development' && <DevelopmentSection section={activeSection} />}
              {activeCategory === 'deployment' && <DeploymentSection section={activeSection} />}
              {activeCategory === 'business' && <BusinessSection section={activeSection} />}
              {activeCategory === 'case-studies' && <CaseStudiesSection section={activeSection} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ClaudeCodeSection({ section }: { section: string }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('✓ Copied!')
  }

  if (section === 'intro') {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Claude Code</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <h4 className="font-semibold text-blue-900 mb-2">What is Claude Code?</h4>
          <p className="text-blue-800">
            Claude Code is Anthropic's official CLI tool that lets you code with Claude AI directly in your terminal.
            Think of it as a superpowered coding assistant that can read files, write code, run commands, and build
            entire applications - all from your command line.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <h4 className="font-semibold text-green-900 mb-2">What Can It Do?</h4>
          <ul className="space-y-2 text-green-800">
            <li>✓ Read and understand your entire codebase</li>
            <li>✓ Write new features and fix bugs</li>
            <li>✓ Run tests and commands</li>
            <li>✓ Deploy applications</li>
            <li>✓ Automate repetitive tasks</li>
            <li>✓ Create specialized agents</li>
            <li>✓ Connect to external tools via MCP</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r">
          <h4 className="font-semibold text-purple-900 mb-2">Why This Guide?</h4>
          <p className="text-purple-800">
            This knowledge base is based on the famous "Everything Claude Code" repository by Affaan Mustafa,
            an Anthropic hackathon winner. We've distilled 10 months of daily usage into actionable patterns
            that you can copy and use immediately.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Stats</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">42K+</div>
              <div className="text-gray-600 text-sm">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">2.6M</div>
              <div className="text-gray-600 text-sm">Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">13</div>
              <div className="text-gray-600 text-sm">Specialized Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">31</div>
              <div className="text-gray-600 text-sm">Commands</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (section === 'setup') {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Setup Guide</h3>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Step 1: Install Claude Code</h4>
          <div className="relative">
            <button 
              onClick={() => copyToClipboard('npm install -g @anthropic-ai/claude-code')}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Copy
            </button>
            <code className="block bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Step 2: Verify Installation</h4>
          <div className="relative">
            <button 
              onClick={() => copyToClipboard('claude --version')}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Copy
            </button>
            <code className="block bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              claude --version
            </code>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Step 3: Configure Settings</h4>
          <p className="text-gray-600 mb-3">Create or edit ~/.claude/settings.json:</p>
          <div className="relative">
            <button 
              onClick={() => copyToClipboard(`{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}`)}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Copy
            </button>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Step 4: Install Everything Claude Code Plugin</h4>
          <div className="space-y-3">
            <div className="relative">
              <button 
                onClick={() => copyToClipboard('/plugin marketplace add affaan-m/everything-claude-code')}
                className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Copy
              </button>
              <code className="block bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                /plugin marketplace add affaan-m/everything-claude-code
              </code>
            </div>
            <div className="relative">
              <button 
                onClick={() => copyToClipboard('/plugin install everything-claude-code@everything-claude-code')}
                className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Copy
              </button>
              <code className="block bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                /plugin install everything-claude-code@everything-claude-code
              </code>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <h4 className="font-semibold text-green-900 mb-2">✓ Setup Complete!</h4>
          <p className="text-green-800">
            You now have access to 13 agents, 43 skills, and 31 commands. Start by typing
            <code className="bg-green-100 px-2 py-1 rounded mx-1">/plan "your task"</code> in Claude Code.
          </p>
        </div>
      </div>
    )
  }

  if (section === 'agents') {
    const agents = [
      { name: 'planner', description: 'Feature implementation planning', use: 'Starting a new feature', command: '/plan "Add user authentication"' },
      { name: 'architect', description: 'System design decisions', use: 'Architecture questions', command: '/plan + architect agent' },
      { name: 'tdd-guide', description: 'Test-driven development', use: 'Writing tests first', command: '/tdd' },
      { name: 'code-reviewer', description: 'Quality and security review', use: 'After writing code', command: '/code-review' },
      { name: 'security-reviewer', description: 'Vulnerability analysis', use: 'Before deployment', command: '/security-scan' },
      { name: 'build-error-resolver', description: 'Fix build failures', use: 'Build broken', command: '/build-fix' },
      { name: 'e2e-runner', description: 'Playwright E2E testing', use: 'Testing user flows', command: '/e2e' },
      { name: 'refactor-cleaner', description: 'Dead code cleanup', use: 'Code cleanup', command: '/refactor-clean' },
    ]

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Agents</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <h4 className="font-semibold text-blue-900 mb-2">What Are Agents?</h4>
          <p className="text-blue-800">
            Agents are specialized AI assistants with limited scope. Each agent is optimized for a specific task,
            like code review, testing, or planning. They have custom instructions, tools, and sometimes even
            different models.
          </p>
        </div>

        <div className="grid gap-4">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-600 text-lg">{agent.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{agent.description}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    <span className="font-semibold">When to use:</span> {agent.use}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <code className="bg-gray-100 px-3 py-1 rounded text-sm text-green-700 font-mono">{agent.command}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r">
          <h4 className="font-semibold text-purple-900 mb-2">Pro Tip</h4>
          <p className="text-purple-800">
            You can delegate tasks to agents automatically by using commands. Claude Code will route your
            request to the best agent for the job.
          </p>
        </div>
      </div>
    )
  }

  if (section === 'commands') {
    const commands = [
      { name: '/plan', description: 'Create implementation plan', example: '/plan "Add user authentication with OAuth"' },
      { name: '/tdd', description: 'Enforce TDD workflow', example: '/tdd' },
      { name: '/code-review', description: 'Review code changes', example: '/code-review' },
      { name: '/build-fix', description: 'Fix build errors', example: '/build-fix' },
      { name: '/e2e', description: 'Generate E2E tests', example: '/e2e' },
      { name: '/refactor-clean', description: 'Remove dead code', example: '/refactor-clean' },
      { name: '/security-scan', description: 'Security audit', example: '/security-scan' },
      { name: '/learn', description: 'Extract patterns from session', example: '/learn' },
      { name: '/checkpoint', description: 'Save verification state', example: '/checkpoint' },
      { name: '/verify', description: 'Run verification loop', example: '/verify' },
      { name: '/instinct-status', description: 'View learned patterns', example: '/instinct-status' },
      { name: '/instinct-export', description: 'Export learned patterns', example: '/instinct-export' },
    ]

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Slash Commands</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <h4 className="font-semibold text-blue-900 mb-2">What Are Commands?</h4>
          <p className="text-blue-800">
            Commands are shortcuts that trigger complex workflows. Instead of explaining what you want,
            you can use a single command to execute a multi-step process.
          </p>
        </div>

        <div className="grid gap-4">
          {commands.map((cmd, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <code className="text-lg font-bold text-purple-600">{cmd.name}</code>
              </div>
              <p className="text-gray-600 text-sm mb-2">{cmd.description}</p>
              <div className="relative">
                <button 
                  onClick={() => copyToClipboard(cmd.example)}
                  className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs"
                >
                  Copy
                </button>
                <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">
                  {cmd.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section === 'tokens') {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Token Optimization (Save Money)</h3>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
          <h4 className="font-semibold text-yellow-900 mb-2">Why This Matters</h4>
          <p className="text-yellow-800">
            Claude Code can be expensive if not optimized. These settings can save you 60-80% on costs
            without sacrificing quality.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Recommended Settings</h4>
          <div className="relative">
            <button 
              onClick={() => copyToClipboard(`{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}`)}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Copy
            </button>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold">Setting</th>
                <th className="px-4 py-3 font-semibold">Default</th>
                <th className="px-4 py-3 font-semibold">Optimized</th>
                <th className="px-4 py-3 font-semibold">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Model</td>
                <td className="px-4 py-3">opus</td>
                <td className="px-4 py-3">sonnet</td>
                <td className="px-4 py-3 text-green-600 font-semibold">~60% reduction</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Thinking tokens</td>
                <td className="px-4 py-3">31,999</td>
                <td className="px-4 py-3">10,000</td>
                <td className="px-4 py-3 text-green-600 font-semibold">~70% reduction</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Auto-compact</td>
                <td className="px-4 py-3">95%</td>
                <td className="px-4 py-3">50%</td>
                <td className="px-4 py-3 text-green-600 font-semibold">Better quality</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Daily Workflow Commands</h4>
          <div className="space-y-2">
            <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">/model sonnet  → Default for most tasks</code>
            <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">/model opus    → Complex architecture, debugging</code>
            <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">/clear         → Between unrelated tasks (FREE reset)</code>
            <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">/compact       → At logical breakpoints</code>
            <code className="block bg-gray-100 text-green-700 p-3 rounded font-mono text-sm">/cost          → Monitor token spending</code>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">When to Compact</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-green-600 mb-2">✓ Compact at:</h5>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• After research, before implementation</li>
                <li>• After completing a milestone</li>
                <li>• After debugging, before continuing</li>
                <li>• After a failed approach</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-600 mb-2">✗ Don't compact:</h5>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Mid-implementation</li>
                <li>• When you need variable names</li>
                <li>• When you need partial state</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default for other sections
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {section.charAt(0).toUpperCase() + section.slice(1)} Section
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function OpenClawSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        OpenClaw - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function AIToolsSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        AI Tools - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function DevelopmentSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Development - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function DeploymentSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Deployment - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function BusinessSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Business - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}

function CaseStudiesSection({ section }: { section: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Case Studies - {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  )
}
