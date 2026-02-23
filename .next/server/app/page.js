(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6316:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>f,tree:()=>d}),i(908),i(1506),i(5866);var o=i(3191),n=i(8716),a=i(7922),r=i.n(a),l=i(5231),s={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>l[e]);i.d(t,s);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,908)),"/Users/Office/.openclaw/workspace/viewport-knowledgebase/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,1506)),"/Users/Office/.openclaw/workspace/viewport-knowledgebase/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/Office/.openclaw/workspace/viewport-knowledgebase/app/page.tsx"],p="/page",u={require:i,loadChunk:()=>Promise.resolve()},f=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6507:(e,t,i)=>{Promise.resolve().then(i.bind(i,8743))},4280:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},6019:()=>{},8743:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var o=i(326),n=i(7577);let a=[{label:"Categories",value:"10"},{label:"Articles",value:"100+"},{label:"Prompts",value:"20+"},{label:"Workflows",value:"10+"},{label:"Sessions",value:"118"}],r=[{title:"Claude Code Setup",category:"Claude Code",difficulty:"beginner",content:`## Requirements
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
- "Rate limit exceeded" → Wait 10-15 minutes or upgrade to Claude Max`},{title:"Sonnet 4.6 Agent Guide (Claude Code)",category:"Claude Code",difficulty:"intermediate",content:`## Agent Roles

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
- **Gauge** defines what "done" means in tests`},{title:"META Ads Dashboard PRD",category:"Business",difficulty:"intermediate"},{title:"OSI Layers + OpenClaw Guardrails (Miro)",category:"OpenClaw",difficulty:"advanced"},{title:"Master Claw Org Chart",category:"OpenClaw",difficulty:"intermediate"},{title:"Vibe Marketing Quick Setup",category:"Marketing",difficulty:"beginner"},{title:"The Agentic Coding Blueprint",category:"Claude Code",difficulty:"intermediate"},{title:"Claude Code Agent Swarm",category:"Claude Code",difficulty:"advanced"},{title:"Hostinger VPS Setup",category:"Deployment",difficulty:"intermediate"},{title:"Vibe Engineering Process Guide",category:"Engineering",difficulty:"intermediate"},{title:"OpenClaw = Jarvis | Setup Guide",category:"OpenClaw",difficulty:"beginner"},{title:"Remotion + CC Builder's Guide",category:"Development",difficulty:"intermediate"},{title:"The Complete Guide to Cowork",category:"Claude Code",difficulty:"beginner"},{title:"Docker Desktop MCP",category:"MCP",difficulty:"intermediate"},{title:"2026 AI Coding Tools Tier Ranking List",category:"AI Tools",difficulty:"beginner"},{title:"Claude Cowork",category:"Claude Code",difficulty:"beginner"},{title:"Claude Code x Antigravity",category:"Claude Code",difficulty:"intermediate"},{title:"Claude Code + n8n MCP Setup Guide",category:"MCP",difficulty:"intermediate"},{title:"The 2026 AI Agency Playbook",category:"Business",difficulty:"intermediate"},{title:"Best N8N Workflows",category:"Automation",difficulty:"intermediate"},{title:"Software Stack for Apps",category:"Development",difficulty:"beginner"},{title:"Winning Ad Generator - n8n + Sora 2",category:"Marketing",difficulty:"intermediate"},{title:"Gemini 3 Technical Deep-Dive",category:"AI Tools",difficulty:"advanced"},{title:"Onboarding AI Clients Guide",category:"Business",difficulty:"intermediate"},{title:"AI Context System Blueprint",category:"AI Tools",difficulty:"advanced"},{title:"AI Outreach Engine Blueprint",category:"Marketing",difficulty:"intermediate"},{title:"Complete AI Automation Agency Playbook",category:"Business",difficulty:"advanced"},{title:"Top 3 $$$ Making Automations 2025",category:"Automation",difficulty:"intermediate"},{title:"Sora 2 Full Guide: AI Video Revolution",category:"AI Tools",difficulty:"beginner"},{title:"20 Best N8N Automations to Sell",category:"Automation",difficulty:"intermediate"},{title:"The Complete Claude Project Blueprint",category:"Claude Code",difficulty:"intermediate"},{title:"Ollama Setup Guide and Research",category:"AI Tools",difficulty:"beginner"},{title:"The Complete System | 9 Agents | 50+ Use Cases",category:"Claude Code",difficulty:"advanced"},{title:"The Agent Playbook",category:"Claude Code",difficulty:"intermediate"}],l=[{name:"Claude Code",count:12,color:"#7c3aed"},{name:"OpenClaw",count:5,color:"#0891b2"},{name:"Automation",count:8,color:"#ea580c"},{name:"Business",count:7,color:"#ca8a04"},{name:"AI Tools",count:6,color:"#9333ea"},{name:"MCP",count:4,color:"#0891b2"},{name:"Marketing",count:5,color:"#dc2626"},{name:"Development",count:4,color:"#059669"},{name:"Deployment",count:3,color:"#dc2626"},{name:"Engineering",count:2,color:"#be185d"}],s=[{title:"Plan Implementation",category:"Claude Code",prompt:`/plan

Create a detailed implementation plan for this feature. Include:

1. File changes needed
2. Dependencies to add
3. Step-by-step implementation order
4. Potential issues and solutions
5. Testing approach`,why:"Creates comprehensive blueprints before coding starts"},{title:"Test-Driven Development",category:"Claude Code",prompt:`/tdd

Write tests first, then implement:

1. Write failing test for the feature
2. Run test to confirm it fails
3. Write minimal code to pass
4. Refactor if needed
5. Repeat`,why:"Enforces test-first development workflow"},{title:"Investigate Before Fixing",category:"Debugging",prompt:`Before making any changes:

1. Reproduce the issue
2. Check logs for errors
3. Identify the root cause
4. Verify the fix approach
5. Only then make changes

⏹️ STOP if you jump to fixes without investigation.`,why:"Critical workflow: always investigate before fixing"},{title:"Security Audit",category:"Security",prompt:`/security-scan

Perform a comprehensive security audit:

1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/authorization flaws
4. Exposed secrets in code
5. CORS misconfigurations
6. Rate limiting gaps`,why:"Full security audit with OWASP checklist"}];function d(){let[e,t]=(0,n.useState)(""),[i,d]=(0,n.useState)("home"),[c,p]=(0,n.useState)(null),[u,f]=(0,n.useState)(null),[g,m]=(0,n.useState)(null),y=r.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.category.toLowerCase().includes(e.toLowerCase())),h=(e,t)=>{navigator.clipboard.writeText(t),p(e),setTimeout(()=>p(null),2e3)};return o.jsx("main",{style:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif",background:"#f8fafc",color:"#334155",lineHeight:1.65,padding:"48px 24px",minHeight:"100vh"},children:(0,o.jsxs)("div",{style:{maxWidth:800,margin:"0 auto"},children:[o.jsx("h1",{style:{fontSize:32,fontWeight:700,color:"#0f172a",marginBottom:8},children:"VIEWPORT Knowledge Base"}),o.jsx("p",{style:{color:"#64748b",fontSize:15,marginBottom:32},children:"Your complete AI development guide • 100+ articles • Updated daily"}),o.jsx("nav",{style:{display:"flex",flexWrap:"wrap",gap:8,margin:"24px 0 32px 0",padding:16,background:"white",borderRadius:8,border:"1px solid #e2e8f0"},children:["home","aa","prompts"].map(e=>o.jsx("button",{onClick:()=>d(e),style:{fontSize:12,color:i===e?"#334155":"#64748b",textDecoration:"none",padding:"6px 12px",borderRadius:6,background:i===e?"#e2e8f0":"#f1f5f9",border:"none",cursor:"pointer",transition:"all 0.15s"},children:"aa"===e?"AA Knowledge Base":e.charAt(0).toUpperCase()+e.slice(1)},e))}),o.jsx("div",{style:{display:"flex",gap:24,marginBottom:40,padding:"20px 0",borderTop:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0",flexWrap:"wrap"},children:a.map((e,t)=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{fontSize:24,fontWeight:700,color:"#0f172a"},children:e.value}),o.jsx("div",{style:{fontSize:11,color:"#64748b",textTransform:"uppercase"},children:e.label})]},t))}),o.jsx("div",{style:{marginBottom:32},children:o.jsx("input",{id:"search-input",type:"text",placeholder:"Search everything... (⌘K)",value:e,onChange:e=>t(e.target.value),style:{width:"100%",padding:"12px 16px",background:"white",border:"1px solid #e2e8f0",borderRadius:8,fontSize:14,color:"#334155",outline:"none"}})}),"home"===i&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",border:"1px solid #f59e0b",borderRadius:12,padding:"20px 24px",marginBottom:32},children:[o.jsx("div",{style:{fontSize:16,fontWeight:700,color:"#92400e",marginBottom:16},children:"At a Glance"}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[(0,o.jsxs)("div",{style:{fontSize:14,color:"#78350f",lineHeight:1.6},children:[o.jsx("strong",{style:{color:"#92400e"},children:"What's included:"})," Claude Code masterclass, OpenClaw setup guides, N8N automation workflows, AI agency playbooks, MCP integration tutorials, and 70+ articles from the AA Knowledge Base."]}),(0,o.jsxs)("div",{style:{fontSize:14,color:"#78350f",lineHeight:1.6},children:[o.jsx("strong",{style:{color:"#92400e"},children:"How to use:"})," Browse categories, search for specific topics, or copy-paste prompts directly into your AI assistant."]}),(0,o.jsxs)("div",{style:{fontSize:14,color:"#78350f",lineHeight:1.6},children:[o.jsx("strong",{style:{color:"#92400e"},children:"Best for:"})," AI-assisted development, automation building, client work, and learning new AI tools."]})]})]}),o.jsx("h2",{style:{fontSize:20,fontWeight:600,color:"#0f172a",marginBottom:16},children:"Categories"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:32},children:l.map((e,t)=>(0,o.jsxs)("div",{onClick:()=>f(u===e.name?null:e.name),style:{background:"white",border:"1px solid #e2e8f0",borderRadius:8,padding:16,cursor:"pointer"},children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:12,height:12,borderRadius:4,background:e.color}}),o.jsx("span",{style:{fontWeight:600,fontSize:15,color:"#0f172a"},children:e.name})]}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,o.jsxs)("span",{style:{fontSize:12,color:"#64748b",background:"#f1f5f9",padding:"2px 8px",borderRadius:4},children:[e.count," articles"]}),o.jsx("span",{style:{color:"#94a3b8",fontSize:12},children:u===e.name?"−":"+"})]})]}),u===e.name&&o.jsx("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid #e2e8f0"},children:r.filter(t=>t.category===e.name).map((t,i)=>(0,o.jsxs)("div",{style:{padding:"8px 0",borderBottom:i<r.filter(t=>t.category===e.name).length-1?"1px solid #f1f5f9":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{style:{fontSize:14,color:"#334155"},children:t.title}),o.jsx("span",{style:{fontSize:11,padding:"2px 8px",borderRadius:4,background:"beginner"===t.difficulty?"#f0fdf4":"intermediate"===t.difficulty?"#fef3c7":"#fef2f2",color:"beginner"===t.difficulty?"#166534":"intermediate"===t.difficulty?"#92400e":"#991b1b"},children:t.difficulty})]},i))})]},t))})]}),"aa"===i&&(0,o.jsxs)("div",{children:[o.jsx("h2",{style:{fontSize:20,fontWeight:600,color:"#0f172a",marginBottom:16},children:"AA Knowledge Base"}),o.jsx("p",{style:{fontSize:14,color:"#64748b",marginBottom:24},children:"70+ articles on AI automation, N8N workflows, agency playbooks, and business strategies."}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:y.map((e,t)=>(0,o.jsxs)("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:8,overflow:"hidden"},children:[(0,o.jsxs)("div",{onClick:()=>m(g===t?null:t),style:{padding:16,cursor:e.content?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,o.jsxs)("div",{style:{flex:1},children:[(0,o.jsxs)("div",{style:{fontWeight:600,fontSize:15,color:"#0f172a",marginBottom:4},children:[e.title," ",e.content&&o.jsx("span",{style:{color:"#94a3b8",fontSize:12},children:"(click to expand)"})]}),o.jsx("div",{style:{fontSize:13,color:"#64748b"},children:e.category})]}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontSize:11,padding:"4px 8px",borderRadius:4,flexShrink:0,background:"beginner"===e.difficulty?"#f0fdf4":"intermediate"===e.difficulty?"#fef3c7":"#fef2f2",color:"beginner"===e.difficulty?"#166534":"intermediate"===e.difficulty?"#92400e":"#991b1b"},children:e.difficulty}),e.content&&o.jsx("span",{style:{color:"#94a3b8",fontSize:12},children:g===t?"−":"+"})]})]}),g===t&&e.content&&o.jsx("div",{style:{padding:"0 16px 16px 16px",borderTop:"1px solid #e2e8f0",background:"#fafafa"},children:o.jsx("div",{style:{fontFamily:"monospace",fontSize:12,color:"#334155",whiteSpace:"pre-wrap",lineHeight:1.6,paddingTop:16},children:e.content})})]},t))})]}),"prompts"===i&&(0,o.jsxs)("div",{children:[o.jsx("h2",{style:{fontSize:20,fontWeight:600,color:"#0f172a",marginBottom:16},children:"Copy-Paste Prompts"}),o.jsx("p",{style:{fontSize:14,color:"#64748b",marginBottom:24},children:"Ready-to-use prompts for common tasks. Click copy and paste into your AI assistant."}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:s.map((e,t)=>(0,o.jsxs)("div",{style:{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:16},children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[(0,o.jsxs)("div",{children:[o.jsx("div",{style:{fontSize:12,color:"#1e40af",fontWeight:600,textTransform:"uppercase",marginBottom:4},children:e.category}),o.jsx("div",{style:{fontWeight:600,fontSize:15,color:"#0f172a"},children:e.title})]}),o.jsx("button",{onClick:()=>h(t,e.prompt),style:{background:c===t?"#16a34a":"#2563eb",color:"white",border:"none",borderRadius:4,padding:"6px 12px",fontSize:12,cursor:"pointer",fontWeight:500,flexShrink:0},children:c===t?"✓ Copied":"Copy"})]}),o.jsx("div",{style:{background:"white",padding:"10px 12px",borderRadius:4,fontFamily:"monospace",fontSize:12,color:"#334155",border:"1px solid #e2e8f0",whiteSpace:"pre-wrap",marginBottom:12},children:e.prompt}),(0,o.jsxs)("div",{style:{fontSize:13,color:"#475569"},children:[o.jsx("strong",{children:"Why:"})," ",e.why]})]},t))})]}),(0,o.jsxs)("footer",{style:{marginTop:48,padding:"24px 0",borderTop:"1px solid #e2e8f0",textAlign:"center",color:"#64748b",fontSize:13},children:[o.jsx("div",{style:{fontWeight:600,color:"#0f172a",marginBottom:4},children:"VIEWPORT Knowledge Base"}),o.jsx("div",{children:"Learn • Build • Share • Repeat"}),(0,o.jsxs)("div",{style:{marginTop:8},children:[o.jsx("a",{href:"https://viewport-knowledgebase.vercel.app",style:{color:"#64748b",textDecoration:"none",marginRight:16},children:"Live Site"}),o.jsx("a",{href:"https://github.com/viewportplatform",style:{color:"#64748b",textDecoration:"none"},children:"GitHub"})]})]})]})})}},1506:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l,metadata:()=>r});var o=i(9510),n=i(5384),a=i.n(n);i(7272);let r={title:"VIEWPORT Knowledge Base",description:"Your complete guide to AI-powered development - Claude Code, OpenClaw, and more"};function l({children:e}){return o.jsx("html",{lang:"en",children:o.jsx("body",{className:a().className,children:e})})}},908:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});let o=(0,i(8570).createProxy)(String.raw`/Users/Office/.openclaw/workspace/viewport-knowledgebase/app/page.tsx#default`)},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),o=t.X(0,[734],()=>i(6316));module.exports=o})();