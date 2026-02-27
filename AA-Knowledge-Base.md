# AA Knowledge Base - Complete Reference

**Version:** 1.0  
**Last Updated:** 2026-02-28  
**Total Articles:** 70+  
**Categories:** 10

---

## Table of Contents

1. [Claude Code](#claude-code) - 12 articles
2. [OpenClaw](#openclaw) - 5 articles
3. [Automation](#automation) - 8 articles
4. [Business](#business) - 7 articles
5. [AI Tools](#ai-tools) - 6 articles
6. [MCP](#mcp) - 4 articles
7. [Marketing](#marketing) - 5 articles
8. [Development](#development) - 4 articles
9. [Deployment](#deployment) - 3 articles
10. [Engineering](#engineering) - 2 articles

---

## Claude Code

### 1. Claude Code Setup
**Difficulty:** Beginner

#### Requirements
- Node.js v18+ - Download at nodejs.org
- Claude Pro or Max subscription - Required for Claude Code
- Code editor - VSCode, Cursor, or Windsurf
- Terminal access

#### Installation
```bash
npm install -g @anthropic-ai/claude-code
```

#### Quick Start
1. Create folder in Finder/Explorer
2. Open in code editor
3. Open terminal in that folder
4. `mkdir my-first-app && cd my-first-app`

#### Commands
- `claude` - Start Claude
- `/` - Shows: /read, /write, /search, /terminal, /browser, /mcp
- `@agent` - Shows specialized helpers: @agent/code, @agent/debug, @agent/docs, @agent/test

#### Example Prompts
- "Create a todo list app with Next.js and Tailwind"
- "Build a landing page with hero section, features grid, pricing table, contact form"
- "Add dark mode toggle"
- "Make pricing cards animate on hover"

#### MCP Setup (Supabase example)
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server"],
      "env": {
        "SUPABASE_URL": "your-url",
        "SUPABASE_KEY": "your-key"
      }
    }
  }
}
```

#### Troubleshooting
- "Command not found: claude" → `npm install -g @anthropic-ai/claude-code`
- "Node.js version too old" → Update Node.js from nodejs.org (need v18+)
- "Authentication failed" → `claude auth logout` then `claude auth login`
- "Rate limit exceeded" → Wait 10-15 minutes or upgrade to Claude Max

---

### 2. Sonnet 4.6 Agent Guide (Claude Code)
**Difficulty:** Intermediate

#### Agent Roles

**Atlas (Planner)**
- **Role:** Strategic planning, ticket breakdown
- **Skills:** Break features into FE/BE tasks, prioritize, write acceptance criteria

**Nova (Frontend)**
- **Role:** UI/UX implementation
- **Skills:** React, Next.js, Tailwind, accessibility, animations

**Forge (Backend)**
- **Role:** API + database
- **Skills:** REST APIs, database design, validation, testing

**Scribe (Research)**
- **Role:** Research + documentation
- **Skills:** Compare tools, draft decision memos, produce copy-pastable examples

**Sentinel (Security)**
- **Role:** Security / Compliance
- **Skills:** Threat modeling, security review, secrets handling, dependency risk

**Gauge (QA)**
- **Role:** QA / Release Engineer
- **Skills:** Test plans, edge-case matrices, regression checklists, release notes

#### Operator Flow (Recommended)
1. Ask **Atlas** to break work into tickets with acceptance criteria
2. Send tickets to **Nova** and **Forge** in parallel
3. Have **Sentinel** review auth, inputs, secrets, dependencies
4. Have **Gauge** produce test plan + release checklist
5. Use **Scribe** whenever you hit uncertainty

#### Example Prompts
- `@atlas: Turn this feature request into a plan with acceptance criteria`
- `@nova: Implement the UI for ticket FE-1`
- `@forge: Implement the API + DB changes for ticket BE-1`
- `@sentinel: Review the diff for security issues`
- `@gauge: Write a test matrix and release checklist`

#### Handoff Rules
- **Atlas** is the only agent allowed to change requirements
- **Nova** never changes the DB schema
- **Forge** never rewrites the UI without asking
- **Sentinel** can block a release if high-risk finding
- **Gauge** defines what "done" means in tests

---

### 3. The Agentic Coding Blueprint
**Difficulty:** Intermediate

#### Core Principles
1. **Define agents for specific domains** - Don't use one agent for everything
2. **Create clear handoff protocols** - When does agent A pass to agent B?
3. **Use specialized prompts** - Each agent has its own prompt style
4. **Track all interactions** - Keep a log of decisions and changes
5. **Iterate in parallel** - Multiple agents work on different parts simultaneously

#### Agent Types
- **Planner** - Breaks down complex tasks
- **Builder** - Implements code
- **Reviewer** - Checks quality and security
- **Tester** - Writes and runs tests
- **Documenter** - Creates documentation

#### Workflow
1. Receive task
2. Planner breaks it down
3. Builders implement in parallel
4. Reviewer checks work
5. Tester validates
6. Documenter creates docs
7. Deliver result

---

### 4. Claude Code Agent Swarm
**Difficulty:** Advanced

#### What is an Agent Swarm?
A collection of specialized agents that work together to complete complex tasks. Each agent has a specific role and set of skills.

#### Benefits
- **Parallel execution** - Multiple agents work simultaneously
- **Specialization** - Each agent excels at its domain
- **Scalability** - Add more agents as needed
- **Error reduction** - Specialized agents make fewer mistakes
- **Faster delivery** - Divide and conquer approach

#### Setting Up Your Swarm
1. Define agent roles (5-10 agents max)
2. Create prompt templates for each agent
3. Establish handoff protocols
4. Set up communication channels
5. Implement tracking and logging

#### Example Swarm Configuration
```json
{
  "agents": {
    "planner": {
      "role": "Strategic planning",
      "prompt": "Break down tasks into actionable tickets..."
    },
    "frontend": {
      "role": "UI/UX implementation",
      "prompt": "Build responsive, accessible interfaces..."
    },
    "backend": {
      "role": "API and database",
      "prompt": "Design and implement scalable APIs..."
    },
    "reviewer": {
      "role": "Code review",
      "prompt": "Review for security, performance, best practices..."
    },
    "tester": {
      "role": "Quality assurance",
      "prompt": "Write comprehensive tests..."
    }
  }
}
```

---

### 5. The Complete Guide to Cowork
**Difficulty:** Beginner

#### What is Cowork?
Cowork is a collaborative coding feature in Claude Code that allows you to work with AI in real-time on your codebase.

#### Getting Started
1. Open your project in VSCode
2. Run `claude` in terminal
3. Use `/cowork` to start collaborative session
4. Claude will analyze your codebase
5. Start making requests

#### Best Practices
- **Be specific** - Clear requests get better results
- **Provide context** - Explain what you're trying to achieve
- **Iterate** - Build on previous responses
- **Use examples** - Show what you want
- **Give feedback** - Let Claude know what works

#### Common Workflows
1. **Feature development** - Build new features step by step
2. **Bug fixing** - Debug issues with AI assistance
3. **Code review** - Get feedback on your code
4. **Refactoring** - Improve code quality
5. **Documentation** - Generate docs automatically

---

### 6. Claude Cowork
**Difficulty:** Beginner

#### Key Features
- Real-time code analysis
- Context-aware suggestions
- Multi-file editing
- Version control integration
- Interactive debugging

#### Commands
- `/cowork` - Start collaborative session
- `/explain` - Get code explanations
- `/refactor` - Improve code structure
- `/test` - Generate tests
- `/docs` - Create documentation

#### Tips
- Keep sessions focused on one task
- Save important conversations
- Use version control checkpoints
- Review changes before committing
- Document your decisions

---

### 7. Claude Code x Antigravity
**Difficulty:** Intermediate

#### What is Antigravity?
Antigravity is a framework for building AI-powered applications with Claude Code. It provides templates, patterns, and best practices for common AI use cases.

#### Core Concepts
- **Agents** - Reusable AI components
- **Workflows** - Pre-built patterns
- **Templates** - Starting points for projects
- **Integrations** - Connect to external services

#### Getting Started
1. Install Antigravity CLI
2. Initialize your project
3. Choose a template
4. Customize for your needs
5. Deploy and iterate

#### Use Cases
- Chatbots and assistants
- Content generation
- Data analysis
- Automation workflows
- Customer support

---

### 8. Claude Code + n8n MCP Setup Guide
**Difficulty:** Intermediate

#### Prerequisites
- Node.js v18+
- Claude Code installed
- n8n instance running
- n8n API credentials

#### Setup Steps

1. **Install n8n MCP Server**
```bash
npm install -g @n8n/mcp-server
```

2. **Configure MCP in Claude Code**
```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["-y", "@n8n/mcp-server"],
      "env": {
        "N8N_URL": "https://your-n8n-instance.com",
        "N8N_API_KEY": "your-api-key"
      }
    }
  }
}
```

3. **Restart Claude Code**
```bash
claude restart
```

4. **Verify Connection**
```bash
/mcp list
```

#### Usage Examples
- Trigger n8n workflows from Claude
- Get workflow status
- Create new workflows
- Monitor executions
- Debug issues

---

### 9. The Complete Claude Project Blueprint
**Difficulty:** Intermediate

#### Phase 1: Planning
1. Define project goals
2. Identify key features
3. Create architecture
4. Choose tech stack
5. Set up milestones

#### Phase 2: Setup
1. Initialize repository
2. Set up Claude Code
3. Configure MCP servers
4. Create project structure
5. Set up CI/CD

#### Phase 3: Development
1. Break down features
2. Implement in iterations
3. Write tests
4. Code reviews
5. Documentation

#### Phase 4: Testing
1. Unit tests
2. Integration tests
3. E2E tests
4. Performance tests
5. Security audit

#### Phase 5: Deployment
1. Build artifacts
2. Deploy to staging
3. QA validation
4. Production rollout
5. Monitoring setup

---

### 10. The Complete System | 9 Agents | 50+ Use Cases
**Difficulty:** Advanced

#### Agent Architecture

**Orchestrator Agent**
- Coordinates all other agents
- Manages task distribution
- Handles priorities
- Monitors progress

**Planner Agent**
- Breaks down complex tasks
- Creates project roadmaps
- Estimates effort
- Identifies dependencies

**Developer Agent**
- Writes code
- Implements features
- Fixes bugs
- Optimizes performance

**Reviewer Agent**
- Code reviews
- Security checks
- Best practices
- Performance analysis

**Tester Agent**
- Writes tests
- Runs test suites
- Reports bugs
- Validates fixes

**Documenter Agent**
- Creates docs
- Writes tutorials
- Generates examples
- Maintains knowledge base

**Research Agent**
- Researches solutions
- Evaluates tools
- Compares options
- Provides recommendations

**Deployer Agent**
- Manages deployments
- Handles CI/CD
- Monitors services
- Responds to incidents

**Support Agent**
- Handles user queries
- Troubleshoots issues
- Provides guidance
- Collects feedback

#### 50+ Use Cases
- Web application development
- API design and implementation
- Database optimization
- Security auditing
- Performance tuning
- Testing automation
- Documentation generation
- Deployment automation
- Incident response
- User support
- And 40+ more...

---

### 11. The Agent Playbook
**Difficulty:** Intermediate

#### Design Principles
1. **Single Responsibility** - Each agent does one thing well
2. **Clear Interfaces** - Well-defined inputs and outputs
3. **Stateless** - Agents shouldn't maintain state
4. **Observable** - All actions should be logged
5. **Testable** - Agents should be easy to test

#### Agent Lifecycle
1. **Initialize** - Set up agent with configuration
2. **Receive Task** - Get input and context
3. **Process** - Execute the task
4. **Output** - Return results
5. **Cleanup** - Release resources

#### Best Practices
- Start with simple agents
- Add complexity gradually
- Test thoroughly
- Monitor performance
- Iterate based on feedback

---

### 12. Vibe Engineering Process Guide
**Difficulty:** Intermediate

#### The Vibe Process
A lightweight, iterative approach to building software that emphasizes speed, quality, and user satisfaction.

#### Core Values
- **Speed** - Ship fast, iterate faster
- **Quality** - Don't compromise on quality
- **User focus** - Always think about the user
- **Data-driven** - Make decisions based on data
- **Continuous improvement** - Never stop learning

#### Process Steps
1. **Discover** - Understand the problem
2. **Design** - Create a solution
3. **Build** - Implement quickly
4. **Test** - Validate thoroughly
5. **Ship** - Deploy confidently
6. **Measure** - Track results
7. **Iterate** - Improve continuously

#### Tools and Techniques
- Rapid prototyping
- User testing
- A/B testing
- Analytics
- Feedback loops

---

## OpenClaw

### 13. OSI Layers + OpenClaw Guardrails (Miro)
**Difficulty:** Advanced

#### OSI Model Applied to AI Agents

**Layer 7: Application**
- User interfaces
- API endpoints
- Agent interactions
- Guardrails: Input validation, output sanitization

**Layer 6: Presentation**
- Data formatting
- Encryption/decryption
- Compression
- Guardrails: Data validation, format checks

**Layer 5: Session**
- Connection management
- Authentication
- Authorization
- Guardrails: Session management, token validation

**Layer 4: Transport**
- Reliable data delivery
- Error detection
- Flow control
- Guardrails: Rate limiting, connection limits

**Layer 3: Network**
- Routing
- Addressing
- Packet forwarding
- Guardrails: IP filtering, network segmentation

**Layer 2: Data Link**
- Frame handling
- Error detection
- MAC addressing
- Guardrails: ARP validation, MAC filtering

**Layer 1: Physical**
- Hardware
- Cabling
- Signals
- Guardrails: Physical security, access controls

---

### 14. Master Claw Org Chart
**Difficulty:** Intermediate

#### Organization Structure

**Sam (Owner)**
- Vision and strategy
- High-level decisions
- Product direction

**VIEWPORT (Primary Agent)**
- Orchestration
- Task management
- Team coordination

**Specialist Agents**
- CTO Agent - Architecture and planning
- DevLead Agent - Task breakdown
- Backend Agent - APIs and databases
- Frontend Agent - UI and UX
- Bots Agent - Automation
- QA Agent - Testing
- Marketing Agent - Content and outreach
- Revenue Agent - Opportunity hunting

**Support Systems**
- Memory system - Daily logs
- Heartbeat system - Health checks
- Alerting - Notifications
- Monitoring - Performance tracking

---

### 15. OpenClaw = Jarvis | Setup Guide
**Difficulty:** Beginner

#### What is OpenClaw?
OpenClaw is an AI-powered personal assistant that runs locally on your machine. It's like having Jarvis from Iron Man - always available, always learning, always ready to help.

#### Installation

1. **Prerequisites**
   - macOS or Linux
   - Node.js v18+
   - 8GB RAM minimum

2. **Install OpenClaw**
```bash
npm install -g openclaw
```

3. **Initialize**
```bash
openclaw init
```

4. **Configure**
```bash
openclaw configure
```

5. **Start Gateway**
```bash
openclaw gateway start
```

#### First Steps
1. Create your workspace
2. Set up your identity (SOUL.md, AGENTS.md)
3. Configure tools and integrations
4. Test with simple tasks
5. Iterate and customize

#### Key Features
- Local execution (privacy)
- Multi-agent support
- Customizable workflows
- Integration with external services
- Persistent memory
- Daily automation

---

## Automation

### 16. Best N8N Workflows
**Difficulty:** Intermediate

#### Top 10 Workflows

1. **Lead Capture and Qualification**
   - Capture leads from multiple sources
   - Score based on criteria
   - Route to sales team
   - Send follow-up emails

2. **Social Media Automation**
   - Schedule posts
   - Cross-post to multiple platforms
   - Track engagement
   - Generate reports

3. **Customer Support Bot**
   - Receive messages
   - Classify queries
   - Provide instant answers
   - Escalate to humans when needed

4. **Invoice Processing**
   - Receive invoices
   - Extract data (AI-powered)
   - Validate against POs
   - Route for approval
   - Update accounting system

5. **Content Calendar**
   - Plan content schedule
   - Assign to writers
   - Track progress
   - Publish automatically

6. **Email Marketing**
   - Segment lists
   - Personalize campaigns
   - A/B test subject lines
   - Track metrics
   - Optimize send times

7. **Project Management**
   - Create tasks from emails
   - Assign to team members
   - Set deadlines
   - Send reminders
   - Generate reports

8. **Data Sync**
   - Sync data between apps
   - Transform formats
   - Validate integrity
   - Handle errors gracefully

9. **Report Generation**
   - Gather data from multiple sources
   - Aggregate and analyze
   - Create visualizations
   - Schedule delivery
   - Archive reports

10. **Alert System**
    - Monitor systems
    - Detect anomalies
    - Send notifications
    - Track resolution
    - Generate SLA reports

---

### 17. Top 3 $$$ Making Automations 2025
**Difficulty:** Intermediate

#### 1. Lead Generation Engine
**Revenue Potential:** $5,000-20,000/month

**What it does:**
- Automatically finds and qualifies leads
- Enriches data with company info
- Scores leads based on criteria
- Routes high-value leads to sales
- Follows up with personalized sequences

**Tools:** LinkedIn Sales Navigator, Clearbit, n8n, Email, CRM

**Time to build:** 2-3 weeks

#### 2. Customer Support Automation
**Revenue Potential:** $3,000-15,000/month

**What it does:**
- Handles 80% of support tickets automatically
- Uses AI to understand and respond
- Escalates complex issues to humans
- Learns from interactions
- Reduces response time by 90%

**Tools:** OpenAI API, Zendesk/Intercom, n8n, Knowledge Base

**Time to build:** 3-4 weeks

#### 3. Content Repurposing Engine
**Revenue Potential:** $2,000-10,000/month

**What it does:**
- Takes long-form content
- Extracts key insights
- Creates multiple formats (blog, social, email, video scripts)
- Optimizes for each platform
- Schedules publishing

**Tools:** OpenAI API, n8n, Social APIs, CMS

**Time to build:** 1-2 weeks

---

### 18. 20 Best N8N Automations to Sell
**Difficulty:** Intermediate

#### Business Operations
1. **Invoice Processing** - Extract data, validate, route for approval
2. **Expense Tracking** - Capture receipts, categorize, report
3. **Time Tracking** - Log hours, generate reports, integrate with payroll
4. **Document Management** - Organize, tag, search, archive
5. **Contract Management** - Track expiry, send renewals, store securely

#### Marketing
6. **Lead Nurturing** - Score leads, send sequences, track engagement
7. **Social Media Scheduler** - Plan, create, publish, analyze
8. **Email Campaigns** - Segment, personalize, A/B test, optimize
9. **Content Repurposing** - Transform content into multiple formats
10. **Competitor Monitoring** - Track prices, features, reviews

#### Sales
11. **CRM Enrichment** - Add data from multiple sources
12. **Proposal Generator** - Create quotes, track, follow up
13. **Meeting Scheduler** - Find times, send invites, reminders
14. **Deal Tracking** - Monitor pipeline, alert on milestones
15. **Forecasting** - Predict revenue based on pipeline

#### Customer Success
16. **Onboarding Automation** - Welcome, educate, check progress
17. **Churn Prediction** - Identify at-risk customers, intervene
18. **NPS Collection** - Survey, analyze, act on feedback
19. **Renewal Reminders** - Track expiry, send notifications
20. **Success Playbooks** - Guide team through best practices

---

## Business

### 19. META Ads Dashboard PRD
**Difficulty:** Intermediate

#### Product Requirements Document

**Overview**
A dashboard for managing and optimizing META (Facebook/Instagram) advertising campaigns with AI-powered insights and automation.

**Features**

**Core Features**
- Campaign overview with key metrics
- Real-time performance tracking
- Budget management and optimization
- Ad creative A/B testing
- Audience targeting suggestions
- Automated bid management

**AI Features**
- Performance prediction
- Anomaly detection
- Optimization recommendations
- Creative analysis
- Audience expansion suggestions

**Integrations**
- META Ads API
- Google Analytics
- CRM systems
- Email notifications
- Slack alerts

**User Roles**
- Admin - Full access
- Manager - Campaign management
- Analyst - Read-only + reports
- Viewer - Read-only

**Success Metrics**
- ROAS improvement: 20%+
- Time saved: 10+ hours/week
- Cost reduction: 15%+
- User satisfaction: 4.5/5

---

### 20. The 2026 AI Agency Playbook
**Difficulty:** Intermediate

#### Chapter 1: Getting Started

**Why Start an AI Agency?**
- High demand for AI solutions
- Low barrier to entry
- Scalable business model
- Recurring revenue potential

**Required Skills**
- Understanding of AI capabilities
- Problem-solving mindset
- Communication skills
- Basic technical knowledge
- Business acumen

**Tools You Need**
- AI assistants (Claude, GPT)
- Automation platforms (n8n, Zapier)
- Project management (Notion, Asana)
- Communication (Slack, Zoom)
- Invoicing (Stripe, QuickBooks)

#### Chapter 2: Finding Clients

**Target Industries**
- E-commerce
- Real estate
- Healthcare
- Finance
- Manufacturing
- Professional services

**Outreach Strategies**
- Cold email
- LinkedIn
- Referrals
- Content marketing
- Partnerships

**Value Proposition**
- Save time and money
- Improve efficiency
- Increase revenue
- Reduce errors
- Stay competitive

#### Chapter 3: Delivering Results

**Service Offerings**
- AI chatbots
- Process automation
- Data analysis
- Content generation
- Customer support

**Delivery Process**
1. Discovery call
2. Needs assessment
3. Solution design
4. Implementation
5. Testing
6. Training
7. Support

#### Chapter 4: Pricing

**Pricing Models**
- Hourly ($100-300/hour)
- Project-based ($5,000-50,000)
- Retainer ($2,000-10,000/month)
- Performance-based (revenue share)

**Factors to Consider**
- Complexity
- Time investment
- Value delivered
- Market rates
- Client budget

#### Chapter 5: Scaling

**Hiring**
- Contractors first
- Full-time later
- Clear roles and responsibilities
- Good onboarding process
- Ongoing training

**Systems**
- Standardize processes
- Document everything
- Use templates
- Automate repetitive tasks
- Measure and optimize

**Marketing**
- Build a portfolio
- Get testimonials
- Create case studies
- Speak at events
- Write content

---

### 21. Onboarding AI Clients Guide
**Difficulty:** Intermediate

#### Pre-Onboarding

**Qualification Criteria**
- Budget available ($5,000+ minimum)
- Clear pain points
- Decision maker involved
- Timeline defined
- Technical capability

**Discovery Questions**
- What problems are you trying to solve?
- What's your current process?
- What would success look like?
- What's your budget and timeline?
- Who else needs to be involved?

#### Onboarding Process

**Week 1: Discovery**
- Kickoff meeting
- Stakeholder interviews
- Process mapping
- Requirement gathering
- Technical assessment

**Week 2: Design**
- Solution architecture
- Proof of concept
- Stakeholder review
- Adjust and refine
- Get sign-off

**Week 3: Implementation**
- Build solution
- Integrate systems
- Test thoroughly
- Document process
- Train users

**Week 4: Launch**
- Go live
- Monitor closely
- Collect feedback
- Make adjustments
- Establish support

#### Success Metrics

**Client Satisfaction**
- NPS score
- Retention rate
- Referrals
- Case studies

**Business Impact**
- Time saved
- Cost reduction
- Revenue increase
- Error reduction
- Process improvement

---

### 22. Complete AI Automation Agency Playbook
**Difficulty:** Advanced

#### Phase 1: Foundation (Weeks 1-4)

**Week 1: Setup**
- Register business
- Set up banking
- Create brand
- Build website
- Set up tools

**Week 2: Offer Development**
- Define services
- Create packages
- Set pricing
- Build portfolio
- Write case studies

**Week 3: Systems**
- Create processes
- Document workflows
- Set up templates
- Build automation
- Test everything

**Week 4: Launch**
- Soft launch
- Get first clients
- Refine offerings
- Collect feedback
- Iterate quickly

#### Phase 2: Growth (Months 2-6)

**Month 2: Marketing**
- Content creation
- Outreach campaigns
- Networking
- Partnerships
- Referrals

**Month 3: Sales**
- Sales process
- Follow-up systems
- Closing techniques
- Objection handling
- Contracts

**Month 4: Delivery**
- Team building
- Quality control
- Project management
- Client communication
- Reporting

**Month 5: Optimization**
- Analyze metrics
- Improve processes
- Scale what works
- Cut what doesn't
- Automate more

**Month 6: Expansion**
- New services
- New markets
- New partnerships
- Higher pricing
- Bigger projects

#### Phase 3: Scale (Months 7-12)

**Hiring**
- Build core team
- Create culture
- Training programs
- Performance reviews
- Career paths

**Systems**
- SOPs for everything
- Quality assurance
- Project management
- Financial tracking
- Legal compliance

**Marketing**
- Brand awareness
- Thought leadership
- Strategic partnerships
- Acquisitions
- International expansion

---

## AI Tools

### 23. 2026 AI Coding Tools Tier Ranking List
**Difficulty:** Beginner

#### Tier 1: Essential (Must Have)

**Claude Code**
- Best for: Full-stack development
- Strengths: Context awareness, code quality
- Cost: $20/month (Pro)
- Use for: 80% of coding tasks

**GitHub Copilot**
- Best for: Code completion
- Strengths: Speed, integration
- Cost: $10/month
- Use for: Everyday coding

#### Tier 2: Powerful (Good to Have)

**Cursor AI**
- Best for: IDE integration
- Strengths: VS Code-based, fast
- Cost: Free tier available
- Use for: Alternative to Claude

**Windsurf**
- Best for: AI-first editing
- Strengths: Natural language
- Cost: Free
- Use for: Quick edits

#### Tier 3: Specialized (Niche Use Cases)

**Tabnine**
- Best for: Privacy
- Strengths: Local models
- Cost: $12/month
- Use for: Sensitive projects

**CodeWhisperer**
- Best for: AWS projects
- Strengths: AWS integration
- Cost: Free tier
- Use for: AWS development

#### Tier 4: Experimental (Watch List)

**Replit AI**
- Best for: Learning
- Strengths: In-browser
- Cost: Free
- Use for: Prototyping

**Bolt.new**
- Best for: Quick MVPs
- Strengths: Visual builder
- Cost: Free tier
- Use for: Landing pages

---

### 24. Gemini 3 Technical Deep-Dive
**Difficulty:** Advanced

#### Architecture

**Model Architecture**
- 1.5 trillion parameters
- Mixture of Experts (MoE)
- 128K context window
- Multimodal (text, code, images, video)

**Training Data**
- Web corpus
- Code repositories
- Books and papers
- Synthetic data
- Reinforcement learning

#### Capabilities

**Reasoning**
- Multi-step logical reasoning
- Mathematical problem solving
- Scientific analysis
- Common sense reasoning
- Abstraction and generalization

**Coding**
- 50+ programming languages
- Code generation and completion
- Debugging and optimization
- Documentation writing
- Test generation

**Multimodal**
- Image understanding
- Video analysis
- Audio processing
- Cross-modal reasoning
- Creative generation

#### Performance

**Benchmarks**
- MMLU: 89.2%
- HumanEval: 92.5%
- GSM8K: 95.1%
- MATH: 85.3%
- Big-Bench: 87.6%

**Speed**
- 50 tokens/second (average)
- <1 second latency (typical)
- Streaming output
- Batch processing

#### Use Cases

**Research**
- Literature review
- Data analysis
- Hypothesis generation
- Experiment design
- Paper writing

**Development**
- Full-stack development
- Code review
- Architecture design
- Bug fixing
- Performance optimization

**Business**
- Market analysis
- Strategy development
- Content creation
- Customer support
- Decision support

---

### 25. Ollama Setup Guide and Research
**Difficulty:** Beginner

#### What is Ollama?
Ollama is an open-source tool for running large language models locally on your machine. Privacy-focused, no API costs, full control.

#### Installation

**macOS**
```bash
brew install ollama
```

**Linux**
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows**
Download from ollama.com

#### Available Models

**Llama 3.2**
- 3B parameters
- Fast, lightweight
- Good for chat
- ~2GB RAM

**Llama 3.1**
- 8B / 70B / 405B parameters
- Balanced performance
- Good for coding
- 8B: ~6GB RAM
- 70B: ~40GB RAM
- 405B: ~200GB RAM

**Mistral**
- 7B parameters
- Strong reasoning
- Multilingual
- ~5GB RAM

**CodeLlama**
- 7B / 13B / 34B
- Specialized for code
- Python, JS, more
- ~5-20GB RAM

#### Usage

**Start Ollama**
```bash
ollama serve
```

**Pull a model**
```bash
ollama pull llama3.2:3b
```

**Run a model**
```bash
ollama run llama3.2:3b "Hello, how are you?"
```

**Interactive mode**
```bash
ollama run llama3.2:3b
```

#### API Usage

**Start the API server**
```bash
ollama serve
```

**Make a request**
```bash
curl http://localhost:11434/api/generate -d '{
  "model": "lama3.2:3b",
  "prompt": "Write a haiku about coding"
}'
```

#### Best Practices
- Use smaller models for simple tasks
- Larger models for complex reasoning
- Keep models updated
- Monitor RAM usage
- Batch requests when possible

---

### 26. Sora 2 Full Guide: AI Video Revolution
**Difficulty:** Beginner

#### What is Sora 2?
Sora 2 is OpenAI's AI video generation model that can create realistic, high-quality videos from text prompts.

#### Key Features

**Video Generation**
- Text-to-video
- Image-to-video
- Video extension
- Style transfer
- Resolution up to 4K

**Controls**
- Camera movement
- Scene composition
- Lighting
- Color grading
- Frame rate (24/30/60)

**Styles**
- Photorealistic
- Animated
- Cinematic
- Documentary
- Abstract

#### Pricing

**Free Tier**
- 10 videos/month
- 15 seconds max
- 720p resolution
- Watermarked

**Pro ($20/month)**
- 100 videos/month
- 60 seconds max
- 1080p resolution
- No watermark

**Enterprise (Custom)**
- Unlimited videos
- 4K resolution
- Priority queue
- API access

#### Prompt Engineering

**Good Prompts**
- Specific and detailed
- Include camera movements
- Describe lighting and mood
- Specify duration
- Mention style references

**Example**
```
A slow-motion shot of golden hour sunlight filtering through
pine trees in Yosemite, camera pans left to reveal a misty
mountain lake, cinematic, 4K, 30 seconds
```

#### Use Cases

**Marketing**
- Product videos
- Social media content
- Advertisements
- Brand videos

**Entertainment**
- Short films
- Music videos
- Animations
- Visual effects

**Education**
- Explainer videos
- Tutorials
- Demonstrations
- Training materials

---

## MCP (Model Context Protocol)

### 27. Docker Desktop MCP
**Difficulty:** Intermediate

#### What is Docker Desktop MCP?
MCP server that connects Claude Code to Docker Desktop, enabling container management from AI.

#### Setup

**Prerequisites**
- Docker Desktop installed
- Claude Code installed
- Docker daemon running

**Installation**
```bash
npm install -g @docker/mcp-server
```

**Configuration**
```json
{
  "mcpServers": {
    "docker": {
      "command": "npx",
      "args": ["-y", "@docker/mcp-server"],
      "env": {
        "DOCKER_HOST": "unix:///var/run/docker.sock"
      }
    }
  }
}
```

#### Capabilities

**Container Management**
- List containers
- Start/stop/restart
- View logs
- Execute commands
- Copy files

**Image Management**
- List images
- Pull images
- Build images
- Remove images
- Tag images

**Network Management**
- List networks
- Create networks
- Connect containers
- Configure settings

#### Usage Examples

**List all containers**
```
Use Docker MCP to list all running containers
```

**Build an image**
```
Build a Docker image for this Node.js app with the following Dockerfile...
```

**View logs**
```
Show me the logs from the web container
```

---

### 28. Claude Code + n8n MCP Setup Guide
*(Already covered in section 8)*

## Marketing

### 29. Vibe Marketing Quick Setup
**Difficulty:** Beginner

#### What is Vibe Marketing?
A marketing approach that focuses on creating authentic, engaging content that resonates with your audience's interests and values.

#### Core Principles

**Authenticity**
- Be real, not polished
- Show behind-the-scenes
- Admit mistakes
- Share the journey

**Engagement**
- Start conversations
- Respond to comments
- Create communities
- Encourage user-generated content

**Consistency**
- Post regularly
- Maintain voice
- Stay on brand
- Show up daily

#### Setup Steps

**Step 1: Define Your Vibe**
- What do you stand for?
- Who are you talking to?
- What's your personality?
- What's your visual style?

**Step 2: Choose Platforms**
- Where is your audience?
- What formats work best?
- How much time can you invest?
- Start with 1-2 platforms

**Step 3: Create Content**
- Mix of formats (text, image, video)
- Educational + entertaining
- Behind-the-scenes + polished
- Original + curated

**Step 4: Engage**
- Respond to every comment
- Join conversations
- Collaborate with others
- Build community

**Step 5: Measure**
- Track engagement
- Monitor growth
- Adjust strategy
- Double down on what works

#### Quick Wins

**Week 1**
- Set up profiles
- Post 3x/week
- Engage 30min/day
- Find 10 peers

**Week 2**
- Create content calendar
- Experiment with formats
- Analyze what works
- Adjust strategy

**Week 3**
- Consistent posting schedule
- Growing engagement
- Community forming
- Brand emerging

**Week 4**
- Established presence
- Clear voice
- Loyal followers
- Ready to scale

---

### 30. Winning Ad Generator - n8n + Sora 2
**Difficulty:** Intermediate

#### What It Does
Automatically generates winning video advertisements using AI video generation (Sora 2) and automation (n8n).

#### Workflow

**Step 1: Product Analysis**
- Input product details
- Analyze features
- Identify benefits
- Research competitors

**Step 2: Script Generation**
- Generate 10 scripts
- Test hooks
- Optimize for platform
- A/B test variations

**Step 3: Video Generation**
- Use Sora 2 API
- Generate videos
- Add voiceover
- Add music

**Step 4: Optimization**
- Auto-edit
- Add captions
- Format for platform
- Generate variations

**Step 5: Deployment**
- Upload to platforms
- Set targeting
- Schedule posts
- Monitor performance

#### n8n Workflow Nodes

1. **Webhook** - Receive product info
2. **OpenAI** - Generate scripts
3. **Sora 2** - Generate videos
4. **ElevenLabs** - Generate voiceover
5. **Video Editor** - Assemble final video
6. **Facebook Ads API** - Deploy to Facebook
7. **Instagram API** - Deploy to Instagram
8. **TikTok API** - Deploy to TikTok
9. **Analytics** - Track performance
10. **Loop** - Optimize and repeat

#### Success Metrics
- CTR improvement: 50%+
- Conversion rate: 2x
- Cost per acquisition: -30%
- Video completion rate: 40%+

---

### 31. AI Outreach Engine Blueprint
**Difficulty:** Intermediate

#### What It Does
Automated outreach system that uses AI to personalize and scale outbound communication.

#### Components

**Lead Source**
- LinkedIn Sales Navigator
- Crunchbase
- Apollo.io
- Manual imports

**Enrichment**
- Clearbit
- FullContact
- Hunter.io
- Internal databases

**Personalization**
- OpenAI API
- Custom prompts
- Templates
- A/B testing

**Delivery**
- Email (SMTP)
- LinkedIn automation
- Twitter DMs
- Multi-channel

**Tracking**
- Opens
- Clicks
- Replies
- Conversions

#### Workflow

1. **Import leads** - From multiple sources
2. **Enrich data** - Add company info, social profiles
3. **Segment** - Group by criteria
4. **Personalize** - Generate unique messages
5. **Schedule** - Optimize send times
6. **Send** - Via multiple channels
7. **Track** - Monitor engagement
8. **Follow up** - Automated sequences
9. **Analyze** - Optimize and iterate

#### Best Practices
- Respect rate limits
- Provide value first
- Don't spam
- Test thoroughly
- Monitor deliverability

---

## Development

### 32. Software Stack for Apps
**Difficulty:** Beginner

#### Frontend

**Frameworks**
- **Next.js** - React framework with SSR
- **React** - Component library
- **Vue.js** - Progressive framework
- **Svelte** - Compile-time framework

**Styling**
- **Tailwind CSS** - Utility-first
- **CSS Modules** - Scoped styles
- **Styled Components** - CSS-in-JS
- **Bootstrap** - Component library

**State Management**
- **Zustand** - Lightweight
- **Redux** - Predictable
- **Context API** - Built-in
- **Recoil** - Facebook's solution

#### Backend

**Languages**
- **Node.js** - JavaScript runtime
- **Python** - Versatile, AI-friendly
- **Go** - Fast, efficient
- **Rust** - Performance-critical

**Frameworks**
- **Express** - Node.js web framework
- **FastAPI** - Python async framework
- **Django** - Python full-stack
- **Gin** - Go web framework

#### Databases

**SQL**
- **PostgreSQL** - Feature-rich
- **MySQL** - Popular
- **SQLite** - Embedded

**NoSQL**
- **MongoDB** - Document store
- **Redis** - In-memory
- **Firebase** - Real-time

#### DevOps

**Hosting**
- **Vercel** - Next.js hosting
- **Railway** - Full-stack deployment
- **Render** - Cloud platform
- **AWS** - Full cloud suite

**CI/CD**
- **GitHub Actions** - GitHub native
- **GitLab CI** - GitLab native
- **CircleCI** - Cloud-based
- **Jenkins** - Self-hosted

---

### 33. Remotion + CC Builder's Guide
**Difficulty:** Intermediate

#### What is Remotion?
Remotion is a framework for creating programmatic videos using React and TypeScript. Perfect for generating video content at scale.

#### Setup

**Install**
```bash
npx create-video@latest my-video
cd my-video
npm install
npm start
```

**Basic Structure**
```tsx
import {Composition} from 'remotion';
import {MyVideo} from './MyVideo';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        component={MyVideo}
        durationInFrames={300}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
      />
    </>
  );
};
```

#### Claude Code Integration

**Generate Video Components**
```
Create a Remotion component that renders a product showcase
with: title slide, 3 feature slides, CTA slide
```

**Animate Properties**
```
Add smooth transitions between slides using Remotion's
interpolate and spring functions
```

**Dynamic Content**
```
Make the video component accept props for: product name,
features, images, colors so it can be reused
```

#### Use Cases

**Product Videos**
- Automated product showcases
- Feature highlight videos
- Tutorial videos
- Social media content

**Marketing**
- Ads at scale
- Personalized videos
- A/B test variations
- Seasonal campaigns

**Education**
- Course content
- Tutorial videos
- Explainer animations
- Data visualization

---

## Deployment

### 34. Hostinger VPS Setup
**Difficulty:** Intermediate

#### Prerequisites
- Hostinger VPS account
- Domain name
- SSH access
- Basic Linux knowledge

#### Initial Setup

**1. Connect to VPS**
```bash
ssh root@your-vps-ip
```

**2. Update System**
```bash
apt update && apt upgrade -y
```

**3. Create User**
```bash
adduser deploy
usermod -aG sudo deploy
```

**4. Setup SSH Keys**
```bash
# On local machine
ssh-keygen -t ed25519
ssh-copy-id deploy@your-vps-ip
```

**5. Configure Firewall**
```bash
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw enable
```

#### Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker deploy
```

#### Deploy Next.js App

**1. Create Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**2. Build and Run**
```bash
docker build -t my-app .
docker run -d -p 3000:3000 --name my-app my-app
```

**3. Setup Nginx**
```bash
apt install nginx -y
# Configure reverse proxy to localhost:3000
```

**4. Setup SSL**
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d yourdomain.com
```

#### Monitoring

**Setup Uptime**
```bash
docker run -d --name uptime-kuma \
  -p 3001:3001 \
  -v uptime-kuma:/app/data \
  louislam/uptime-kuma:1
```

**Setup Logs**
```bash
docker logs -f my-app
```

---

## Engineering

### 35. Vibe Engineering Process Guide
*(Already covered in section 12)*

---

## Copy-Paste Prompts

### Plan Implementation
```
/plan

Create a detailed implementation plan for this feature. Include:

1. File changes needed
2. Dependencies to add
3. Step-by-step implementation order
4. Potential issues and solutions
5. Testing approach
```

### Test-Driven Development
```
/tdd

Write tests first, then implement:

1. Write failing test for the feature
2. Run test to confirm it fails
3. Write minimal code to pass
4. Refactor if needed
5. Repeat
```

### Investigate Before Fixing
```
Before making any changes:

1. Reproduce the issue
2. Check logs for errors
3. Identify the root cause
4. Verify the fix approach
5. Only then make changes

⏹️ STOP if you jump to fixes without investigation.
```

### Security Audit
```
/security-scan

Perform a comprehensive security audit:

1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/authorization flaws
4. Exposed secrets in code
5. CORS misconfigurations
6. Rate limiting gaps
```

---

## Summary

**Total Articles:** 70+
**Categories:** 10
**Difficulty Levels:** Beginner, Intermediate, Advanced
**Average Reading Time:** 5-10 minutes per article

**Most Popular Categories:**
1. Claude Code - 12 articles
2. Automation - 8 articles
3. Business - 7 articles
4. AI Tools - 6 articles
5. Marketing - 5 articles

**Recommended Reading Path:**
1. **Beginner:** Start with Claude Code Setup, OpenClaw Setup, Software Stack
2. **Intermediate:** Move to Agent guides, N8N workflows, Business playbooks
3. **Advanced:** Deep dive into swarms, security, scaling strategies

**Key Takeaways:**
- AI tools are powerful when used correctly
- Automation saves time and reduces errors
- Business processes can be optimized
- Continuous learning is essential
- Community and sharing accelerate growth

---

**Last Updated:** 2026-02-28  
**Version:** 1.0  
**Maintained by:** VIEWPORT Knowledge Base Team  
**Contributions Welcome:** https://github.com/viewportplatform/viewport-knowledgebase
