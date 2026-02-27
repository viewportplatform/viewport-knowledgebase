# GitHub Trending AI Repositories - February 2026

**Last Updated:** 2026-02-28

---

## Top Trending AI Repositories

### 1. deer-flow (bytedance)
**Stars:** 21,711 | **Language:** TypeScript | **Today:** +692 stars

**Description:**
An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.

**Tech Stack:**
- TypeScript
- Agent orchestration framework
- Sandbox execution environments
- Memory management system
- Tool integration layer
- Skills system
- Subagent spawning

**Real Use Cases:**
- Autonomous code research and generation
- Multi-step task automation
- AI-powered development workflows
- Complex problem solving with agent swarms
- Automated testing and code review

**Copy-Paste Prompts:**
```
"I need to research and implement a new feature for [specific technology]. Break this down into research tasks, implementation steps, and testing requirements."

"Analyze this codebase and suggest improvements for performance, security, and maintainability."

"Create a complete implementation of [feature] including tests, documentation, and deployment configuration."

"Debug this issue: [describe problem]. Identify root cause, propose solutions, and implement fixes."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Start the agent system
npm run start

# Run specific task
npm run task -- "Your task description"
```

**Key Commands:**
- `npm run start` - Start agent system
- `npm run task -- "description"` - Execute task
- `npm run status` - Check system status
- `npm run logs` - View agent logs

---

### 2. wifi-densepose (ruvnet)
**Stars:** 8,665 | **Language:** Python | **Today:** +362 stars

**Description:**
Production-ready implementation of InvisPose - a revolutionary WiFi-based dense human pose estimation system that enables real-time full-body tracking through walls using commodity mesh routers.

**Tech Stack:**
- Python (v1) / Rust (v2)
- FastAPI for API layer
- PyTorch for neural networks
- Channel State Information (CSI) processing
- Multi-person tracking algorithms
- WebSocket streaming
- Docker deployment

**Real Use Cases:**
- **Healthcare:** Elderly fall detection, patient monitoring
- **Fitness:** Form analysis, workout tracking without cameras
- **Smart Home:** Occupancy detection, automation triggers
- **Security:** Intruder detection through walls
- **Disaster Response:** Search and rescue in rubble (WiFi-Mat module)

**Copy-Paste Prompts:**
```
"Set up a fall detection system for elderly care. Configure alerts for high-risk falls and integrate with notification systems."

"Create a fitness form analysis system that tracks workout reps, detects poor form, and provides real-time feedback."

"Implement a smart home automation system that uses WiFi-based occupancy detection to control lights, temperature, and security."

"Configure disaster response mode for earthquake search and rescue. Set up zone scanning, survivor detection, and triage classification."
```

**Setup Guide:**
```bash
# Install via pip (Recommended)
pip install wifi-densepose

# Or from source
git clone https://github.com/ruvnet/wifi-densepose.git
cd wifi-densepose
pip install -r requirements.txt
pip install -e .

# Copy configuration
cp example.env .env
nano .env  # Configure WiFi interface

# Start the system
wifi-densepose start

# Check status
wifi-densepose status
```

**Key Commands:**
- `wifi-densepose start` - Start API server
- `wifi-densepose status` - Check server status
- `wifi-densepose stop` - Stop server
- `wifi-densepose config show` - View configuration
- `wifi-densepose db init` - Initialize database
- `wifi-densepose tasks list` - List background tasks

**Performance Stats:**
- Latency: Sub-50ms
- Throughput: ~54,000 fps (Rust version)
- Accuracy: 94.2% pose detection
- Multi-person: Up to 10 simultaneous tracks
- Test coverage: 100%

**Quick Start API Example:**
```python
from wifi_densepose import WiFiDensePose

# Initialize
system = WiFiDensePose()
system.start()

# Get poses
poses = system.get_latest_poses()
print(f"Detected {len(poses)} persons")

# Stop
system.stop()
```

---

### 3. superpowers (obra)
**Stars:** 64,502 | **Language:** Shell | **Today:** +1,549 stars

**Description:**
An agentic skills framework & software development methodology that works.

**Tech Stack:**
- Shell scripting
- Skills framework architecture
- Development methodology
- Agent orchestration

**Real Use Cases:**
- Building AI agent systems with reusable skills
- Standardizing development workflows
- Creating maintainable agent architectures
- Team collaboration on AI projects

**Copy-Paste Prompts:**
```
"Design a skills framework for an AI system that can handle customer support, technical writing, and code review tasks."

"Create a development methodology for building production-ready AI agents with proper testing, deployment, and monitoring."

"Set up a skill repository for [domain] with standardized patterns, templates, and best practices."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/obra/superpowers.git
cd superpowers

# Initialize framework
./setup.sh

# Create new skill
./create-skill.sh skill-name

# List available skills
./list-skills.sh
```

**Key Commands:**
- `./setup.sh` - Initialize framework
- `./create-skill.sh` - Create new skill
- `./list-skills.sh` - List all skills
- `./run-skill.sh` - Execute a skill

---

### 4. claude-flow (ruvnet)
**Stars:** 15,346 | **Language:** TypeScript | **Today:** +545 stars

**Description:**
The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration.

**Tech Stack:**
- TypeScript
- Claude API integration
- Multi-agent orchestration
- Distributed swarm intelligence
- RAG (Retrieval-Augmented Generation)
- Enterprise-grade architecture

**Real Use Cases:**
- Multi-agent systems for complex workflows
- Conversational AI applications
- Distributed AI problem solving
- Enterprise AI orchestration
- Claude Code / Codex integration

**Copy-Paste Prompts:**
```
"Deploy a multi-agent swarm to handle customer support, with agents specializing in technical issues, billing, and general inquiries."

"Build a conversational AI system that uses RAG to answer questions from a knowledge base with citations."

"Set up distributed swarm intelligence to solve complex optimization problems across multiple agents."

"Integrate Claude Code for automated code review and suggestions in a development workflow."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/ruvnet/claude-flow.git
cd claude-flow

# Install dependencies
npm install

# Configure Claude API
cp .env.example .env
# Add ANTHROPIC_API_KEY

# Start the platform
npm run start

# Deploy agents
npm run deploy-agent agent-name
```

**Key Commands:**
- `npm run start` - Start platform
- `npm run deploy-agent` - Deploy new agent
- `npm run list-agents` - List all agents
- `npm run swarm-init` - Initialize swarm

---

### 5. Agent-Skills-for-Context-Engineering (muratcankoylan)
**Stars:** 12,263 | **Language:** Python | **Today:** +836 stars

**Description:**
A comprehensive collection of Agent Skills for context engineering, multi-agent architectures, and production agent systems. Use when building, optimizing, or debugging agent systems that require effective context management.

**Tech Stack:**
- Python
- Context engineering patterns
- Multi-agent architecture
- Agent system debugging tools

**Real Use Cases:**
- Building production-grade agent systems
- Optimizing context management
- Debugging agent behaviors
- Implementing multi-agent architectures

**Copy-Paste Prompts:**
```
"Optimize context management for an agent system that processes long documents. Implement sliding window, summarization, and retrieval strategies."

"Debug an agent that's losing context during long conversations. Implement context retention and compression techniques."

"Design a multi-agent architecture for [task] with specialized agents, communication protocols, and context sharing."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering.git
cd Agent-Skills-for-Context-Engineering

# Install dependencies
pip install -r requirements.txt

# Use a skill
python -m skills.use skill-name

# List available skills
python -m skills.list
```

**Key Skills:**
- Context window management
- Memory systems
- Agent communication
- Task delegation
- Error handling

---

### 6. airi (moeru-ai)
**Stars:** 17,980 | **Language:** TypeScript | **Today:** +229 stars

**Description:**
Self-hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.

**Tech Stack:**
- TypeScript
- Real-time voice chat
- Game integration (Minecraft, Factorio)
- Cross-platform (Web, macOS, Windows)
- Self-hosted deployment

**Real Use Cases:**
- AI companions with voice interaction
- Gaming AI assistants
- Virtual waifu/personal AI
- Real-time conversation AI

**Copy-Paste Prompts:**
```
"Create an AI companion with a cheerful personality that can engage in voice conversations about daily life."

"Set up an AI assistant that can play Minecraft with me, helping with building, exploring, and strategy."

"Design a cyber living companion that learns from our conversations and develops a unique personality over time."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/moeru-ai/airi.git
cd airi

# Install dependencies
npm install

# Configure voice settings
cp config.example.json config.json
# Edit config with your voice preferences

# Start application
npm run start

# For specific platform
npm run dev:web      # Web
npm run dev:macos    # macOS
npm run dev:windows  # Windows
```

**Key Features:**
- Real-time voice chat
- Game integration
- Personality customization
- Memory persistence
- Self-hosted (privacy)

---

### 7. moonshine (moonshine-ai)
**Stars:** 5,708 | **Language:** C | **Today:** +587 stars

**Description:**
Fast and accurate automatic speech recognition (ASR) for edge devices.

**Tech Stack:**
- C (optimized for edge devices)
- Neural network models
- Low-latency audio processing

**Real Use Cases:**
- Voice assistants on edge devices
- Real-time transcription
- Voice commands for IoT
- Offline speech recognition

**Copy-Paste Prompts:**
```
"Deploy Moonshine for real-time voice commands on a Raspberry Pi. Configure wake word detection and command recognition."

"Build a transcription system that works offline on edge devices with accurate real-time speech recognition."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/moonshine-ai/moonshine.git
cd moonshine

# Build
make

# Run recognition
./moonshine --audio-file input.wav
# Or real-time
./moonshine --microphone
```

---

### 8. GitNexus (abhigyanpatwari)
**Stars:** 6,094 | **Language:** TypeScript | **Today:** +1,327 stars

**Description:**
GitNexus: The Zero-Server Code Intelligence Engine. GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph with a built-in Graph RAG Agent. Perfect for code exploration.

**Tech Stack:**
- TypeScript
- Browser-based processing
- Knowledge graph generation
- Graph RAG (Retrieval-Augmented Generation)
- Zero-server architecture

**Real Use Cases:**
- Code exploration without server
- Understanding large codebases
- Code documentation generation
- Architecture visualization
- Client-side code analysis

**Copy-Paste Prompts:**
```
"Analyze this GitHub repository and create an interactive knowledge graph showing the codebase architecture, dependencies, and key components."

"Use Graph RAG to answer questions about this codebase: [questions about code]. Provide context-aware answers with code references."

"Generate documentation for this project by exploring the codebase and identifying key modules, functions, and their purposes."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/abhigyanpatwari/GitNexus.git
cd GitNexus

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Open in browser
# Navigate to http://localhost:3000
```

**Usage:**
1. Open GitNexus in browser
2. Drag & drop GitHub repo URL or ZIP file
3. Wait for knowledge graph generation
4. Explore interactive graph
5. Ask questions using Graph RAG agent

---

### 9. claude-code (anthropics)
**Official Anthropic Repository**

**Description:**
Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

**Real Use Cases:**
- Code generation and modification
- Code explanation and documentation
- Git workflow automation
- Debugging assistance
- Refactoring suggestions

**Copy-Paste Prompts:**
```
"Add authentication to this Express.js app using JWT. Implement user registration, login, and protected routes."

"Explain this complex function and suggest optimizations for better performance and readability."

"Create comprehensive unit tests for this module using Jest. Cover all edge cases."

"Refactor this code to follow SOLID principles and improve maintainability."
```

**Setup Guide:**
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Initialize in project
claude-code init

# Start interactive session
claude-code

# Run single command
claude-code "Your command here"

# Examples:
claude-code "Add error handling to this file"
claude-code "Explain the architecture of this codebase"
claude-code "Create a README.md for this project"
```

**Key Features:**
- Natural language coding
- Codebase understanding
- Git workflow integration
- Multi-file operations
- Terminal integration

---

### 10. Scrapling (D4Vinci)
**Stars:** 17,775 | **Language:** Python | **Today:** +1,127 stars

**Description:**
An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!

**Tech Stack:**
- Python
- Async/await for performance
- Adaptive scraping strategies
- Proxy rotation
- Rate limiting

**Real Use Cases:**
- Large-scale web scraping
- Data extraction from websites
- Price monitoring
- News aggregation
- Research data collection

**Copy-Paste Prompts:**
```
"Scrape product data from e-commerce sites including name, price, rating, and availability. Handle pagination and anti-bot measures."

"Set up a monitoring system that scrapes news sites hourly and aggregates articles by topic and sentiment."

"Build a price tracker that monitors competitor prices and alerts when prices change significantly."
```

**Setup Guide:**
```bash
# Install
pip install scrapling

# Quick start
from scrapling import Scraper

scraper = Scraper()
results = scraper.scrape("https://example.com")

# Advanced configuration
scraper = Scraper(
    proxies=["proxy1", "proxy2"],
    rate_limit=1.0,  # requests per second
    retry_attempts=3
)

# Full-scale crawl
scraper.crawl(
    start_url="https://example.com",
    max_depth=3,
    follow_patterns=["/category/*"]
)
```

**Key Features:**
- Adaptive strategies
- Anti-bot evasion
- Proxy rotation
- Distributed scraping
- Data pipelines

---

### 11. ruvector (ruvnet)
**Stars:** 1,841 | **Language:** Rust | **Today:** +411 stars

**Description:**
RuVector is a High Performance, Real-Time, Self-Learning, Vector Graph Neural Network, and Database built in Rust.

**Tech Stack:**
- Rust
- Vector graph neural network
- Real-time processing
- Self-learning algorithms
- Graph database

**Real Use Cases:**
- Real-time vector similarity search
- Graph-based ML applications
- Knowledge graph storage
- Recommendation systems
- Neural network training

**Copy-Paste Prompts:**
```
"Set up a real-time recommendation system using RuVector's graph neural network. Train on user interaction data."

"Build a knowledge graph database that learns from new data and updates its embeddings automatically."

"Implement real-time similarity search for [use case] with sub-millisecond response times."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/ruvnet/ruvector.git
cd ruvector

# Build
cargo build --release

# Run database
cargo run --bin ruvector-server

# Use CLI
cargo run --bin ruvector-cli
```

---

### 12. claude-relay-service (Wei-Shaw)
**Stars:** 8,507 | **Language:** JavaScript | **Today:** +74 stars

**Description:**
CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。

**Translation:** Self-hosted Claude Code relay service, one-stop open-source forwarding service that unifies Claude, OpenAI, Gemini, and Droid subscriptions, supports shared access, more efficient cost sharing, and seamless use of native tools.

**Tech Stack:**
- JavaScript/Node.js
- Multi-provider API relay
- Subscription sharing
- Cost tracking

**Real Use Cases:**
- Unified API access for multiple AI providers
- Cost sharing among team members
- API proxy and rate limiting
- Subscription management

**Copy-Paste Prompts:**
```
"Configure the relay service to forward requests to Claude, OpenAI, and Gemini based on task type and cost optimization."

"Set up shared access for a team of 5 developers with usage quotas and cost tracking per user."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/Wei-Shaw/claude-relay-service.git
cd claude-relay-service

# Install dependencies
npm install

# Configure providers
cp config.example.json config.json
# Add your API keys for Claude, OpenAI, Gemini, etc.

# Start service
npm start

# Service runs on http://localhost:3000
```

---

### 13. hello-agents (datawhalechina)
**Description:**
《从零开始构建智能体》——从零开始的智能体原理与实践教程

**Translation:** "Building Agents from Zero" - A tutorial on agent principles and practice from scratch

**Language:** Chinese (with English examples)

**Real Use Cases:**
- Learning agent development from scratch
- Understanding AI agent architecture
- Building production agents

**Setup Guide:**
```bash
git clone https://github.com/datawhalechina/hello-agents.git
cd hello-agents

# Follow tutorial chapters
# Chapter by chapter implementation
```

---

### 14. OpenSandbox (alibaba)
**Stars:** 1,408 | **Language:** Python | **Today:** +107 stars

**Description:**
OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.

**Tech Stack:**
- Python
- Multi-language SDKs
- Docker/Kubernetes
- Sandbox execution environment

**Real Use Cases:**
- Safe code execution
- AI agent testing environments
- GUI automation
- Reinforcement learning training
- Isolated code execution

**Copy-Paste Prompts:**
```
"Set up a sandbox environment for AI code execution with Docker isolation and resource limits."

"Create a GUI agent testing framework using OpenSandbox for browser automation tasks."
```

**Setup Guide:**
```bash
# Clone repository
git clone https://github.com/alibaba/OpenSandbox.git
cd OpenSandbox

# Install
pip install opensandbox

# Start sandbox
opensandbox start

# Execute code in sandbox
opensandbox exec --language python --code "print('Hello')"
```

---

### 15. CodexBar (steipete)
**Stars:** 6,994 | **Language:** Swift | **Today:** +221 stars

**Description:**
Show usage stats for OpenAI Codex and Claude Code, without having to login.

**Tech Stack:**
- Swift (macOS app)
- Menu bar utility
- Usage tracking

**Real Use Cases:**
- Monitor AI API usage
- Track costs across providers
- Quick access to usage stats

**Setup Guide:**
```bash
# Download from GitHub Releases or build from source

# Build from source
git clone https://github.com/steipete/CodexBar.git
cd CodexBar

# Open in Xcode and build
open CodexBar.xcodeproj

# Or use xcodebuild
xcodebuild -project CodexBar.xcodeproj -scheme CodexBar build
```

---

## Summary & Recommendations

### Best for Agent Development:
1. **deer-flow** - Most comprehensive agent framework
2. **claude-flow** - Best for Claude-specific agents
3. **superpowers** - Best skills framework
4. **Agent-Skills-for-Context-Engineering** - Best context management

### Best for Computer Vision:
1. **wifi-densepose** - Revolutionary WiFi-based pose estimation
2. **moonshine** - Fast ASR for edge devices

### Best for Code Intelligence:
1. **GitNexus** - Zero-server code exploration
2. **claude-code** - Official Anthropic tool

### Best for Web Scraping:
1. **Scrapling** - Most adaptive and scalable

### Best for Infrastructure:
1. **OpenSandbox** - Alibaba's sandbox platform
2. **ruvector** - High-performance vector database

---

**Note:** This document tracks trending repositories as of February 2026. Stars and popularity change daily. For the latest trends, visit https://github.com/trending
