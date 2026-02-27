# Anthropic Updates - February 2026

**Last Updated:** 2026-02-28

---

## Latest Claude Models Overview

### Current Generation (Claude 4.x)

#### Claude Opus 4.6
- **API ID:** `claude-opus-4-6`
- **Description:** The most intelligent model for building agents and coding
- **Pricing:** $5 / 1M input tokens, $25 / 1M output tokens
- **Context Window:** 200K tokens (standard) / 1M tokens (beta)
- **Max Output:** 128K tokens
- **Extended Thinking:** Yes
- **Adaptive Thinking:** Yes
- **Priority Tier:** Yes
- **Latency:** Moderate
- **Knowledge Cutoff:** Aug 2025 (reliable), May 2025 (training)

#### Claude Sonnet 4.6
- **API ID:** `claude-sonnet-4-6`
- **Description:** Best combination of speed and intelligence
- **Pricing:** $3 / 1M input tokens, $15 / 1M output tokens
- **Context Window:** 200K tokens (standard) / 1M tokens (beta)
- **Max Output:** 64K tokens
- **Extended Thinking:** Yes
- **Adaptive Thinking:** Yes
- **Priority Tier:** Yes
- **Latency:** Fast
- **Knowledge Cutoff:** Aug 2025 (reliable), Jan 2026 (training)

#### Claude Haiku 4.5
- **API ID:** `claude-haiku-4-5-20251001`
- **Description:** Fastest model with near-frontier intelligence
- **Pricing:** $1 / 1M input tokens, $5 / 1M output tokens
- **Context Window:** 200K tokens
- **Max Output:** 64K tokens
- **Extended Thinking:** Yes
- **Adaptive Thinking:** No
- **Priority Tier:** Yes
- **Latency:** Fastest
- **Knowledge Cutoff:** Feb 2025 (reliable), Jul 2025 (training)

---

## Legacy Models (Still Available but Consider Migration)

### Claude Sonnet 4.5
- **API ID:** `claude-sonnet-4-5-20250929`
- **Pricing:** $3 / 1M input tokens, $15 / 1M output tokens
- **Context Window:** 200K tokens / 1M tokens (beta)
- **Max Output:** 64K tokens
- **Status:** Legacy - Consider migrating to 4.6

### Claude Opus 4.5
- **API ID:** `claude-opus-4-5-20251101`
- **Pricing:** $5 / 1M input tokens, $25 / 1M output tokens
- **Context Window:** 200K tokens
- **Max Output:** 64K tokens
- **Status:** Legacy - Consider migrating to 4.6

### Claude Opus 4.1
- **API ID:** `claude-opus-4-1-20250805`
- **Pricing:** $15 / 1M input tokens, $75 / 1M output tokens
- **Context Window:** 200K tokens
- **Max Output:** 32K tokens
- **Status:** Legacy - Consider migrating to 4.6

### Claude Sonnet 4
- **API ID:** `claude-sonnet-4-20250514`
- **Pricing:** $3 / 1M input tokens, $15 / 1M output tokens
- **Context Window:** 200K tokens / 1M tokens (beta)
- **Max Output:** 64K tokens
- **Status:** Legacy

### Claude Opus 4
- **API ID:** `claude-opus-4-20250514`
- **Pricing:** $15 / 1M input tokens, $75 / 1M output tokens
- **Context Window:** 200K tokens
- **Max Output:** 32K tokens
- **Status:** Legacy

### Claude Haiku 3 (Deprecated)
- **API ID:** `claude-3-haiku-20240307`
- **Pricing:** $0.25 / 1M input tokens, $1.25 / 1M output tokens
- **Status:** **DEPRECATED** - Retiring on April 19, 2026
- **Action Required:** Migrate to Claude Haiku 4.5 immediately

---

## New Features & Capabilities

### Extended Thinking
- **Available in:** Opus 4.6, Sonnet 4.6, Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.1, Sonnet 4, Opus 4
- **Description:** Allows the model to think through complex problems before responding
- **Use Case:** Complex reasoning, multi-step problem solving, coding challenges

### Adaptive Thinking
- **Available in:** Opus 4.6, Sonnet 4.6
- **Description:** Dynamically adjusts thinking time based on problem complexity
- **Use Case:** Optimized performance for varying task difficulties

### Priority Tier (Service Tiers)
- **Available in:** All current and most legacy models
- **Description:** Higher priority access to model resources
- **Benefits:** Reduced latency during high-traffic periods

### 1M Token Context Window (Beta)
- **Available in:** Opus 4.6, Sonnet 4.6, Sonnet 4.5, Sonnet 4
- **Header Required:** `context-1m-2025-08-07`
- **Pricing:** Long context pricing applies for requests exceeding 200K tokens
- **Use Cases:** Analyzing entire codebases, long documents, multi-document QA

---

## API Changes

### Global & Regional Endpoints (New)
- **Available Since:** Claude Sonnet 4.5 and all subsequent models
- **Platforms:** AWS Bedrock and Google Vertex AI
- **Endpoint Types:**
  - **Global Endpoints:** Dynamic routing for maximum availability
  - **Regional Endpoints:** Guaranteed data routing through specific geographic regions

### Model Snapshots
- **Format:** Models with same snapshot date (e.g., 20240620) are identical across platforms
- **Benefit:** Ensures consistency and stable performance across different environments
- **Stability:** Snapshot dates don't change once released

---

## Platform Availability

### Claude API
- All models available via Anthropic's own API

### AWS Bedrock
- **Opus 4.6:** `anthropic.claude-opus-4-6-v1`
- **Sonnet 4.6:** `anthropic.claude-sonnet-4-6`
- **Haiku 4.5:** `anthropic.claude-haiku-4-5-20251001-v1:0`

### Google Vertex AI
- **Opus 4.6:** `claude-opus-4-6`
- **Sonnet 4.6:** `claude-sonnet-4-6`
- **Haiku 4.5:** `claude-haiku-4-5@20251001`

---

## Best Practices

### Model Selection Guide
- **Start with:** Claude Opus 4.6 for most complex tasks (coding, agents, reasoning)
- **Speed-critical:** Claude Sonnet 4.6 for best speed/intelligence balance
- **Cost-optimized:** Claude Haiku 4.5 for fast, budget-friendly tasks
- **Consider:** 1M token context window for long-document analysis

### Migration Recommendations
1. **From Haiku 3:** Migrate to Haiku 4.5 immediately (retiring April 19, 2026)
2. **From Opus 4.x/Sonnet 4.x:** Consider migrating to 4.6 for improved intelligence
3. **From Opus 4.1:** Significant cost savings by migrating to Opus 4.6 ($15→$5 input)

### Cost Optimization Tips
- Use Haiku 4.5 for high-volume, simple tasks
- Leverage prompt caching for repeated prompts
- Use batch API for bulk processing (discounts available)
- Consider 1M context only when truly needed (long context pricing applies)

---

## Performance Improvements (Claude 4)

### Compared to Previous Generations
- **Reasoning:** Top-tier results in complex problem solving
- **Coding:** Exceptional performance for code generation and debugging
- **Multilingual:** Enhanced capabilities across languages
- **Long-context:** Improved handling of large inputs
- **Honesty:** More reliable and truthful responses
- **Image Processing:** Enhanced vision capabilities

### Output Quality
- **Engaging Responses:** Rich, human-like interactions
- **Conciseness Control:** Can adjust prompts for desired output length
- **Prompt Engineering:** Comprehensive guides available for optimization

---

## Pricing Structure

### Input Token Pricing (per 1M tokens)
- Opus 4.6: $5
- Sonnet 4.6: $3
- Haiku 4.5: $1
- Opus 4.1: $15 (legacy - expensive)
- Sonnet 4: $3 (legacy)

### Output Token Pricing (per 1M tokens)
- Opus 4.6: $25
- Sonnet 4.6: $15
- Haiku 4.5: $5
- Opus 4.1: $75 (legacy - very expensive)
- Sonnet 4: $15 (legacy)

### Additional Costs
- **Extended Thinking:** Additional tokens charged for thinking time
- **Vision Processing:** Additional fees for image inputs
- **Long Context:** Premium pricing for requests exceeding 200K tokens
- **Batch API:** Discounts available for bulk operations

---

## Deprecation Notices

### Haiku 3 (claude-3-haiku-20240307)
- **Retirement Date:** April 19, 2026
- **Action Required:** Migrate to Haiku 4.5 before retirement
- **Resources:** See model deprecations documentation for migration guide

---

## Quick Start Prompts

### For Opus 4.6 (Complex Tasks)
```
You are Claude Opus 4.6, the most intelligent AI assistant. Help me with [complex task].
Break this down into steps and provide detailed, well-reasoned solutions.
```

### For Sonnet 4.6 (Balanced Tasks)
```
You are Claude Sonnet 4.6. Provide a thorough yet concise response to [task].
Balance depth with efficiency.
```

### For Haiku 4.5 (Fast Tasks)
```
You are Claude Haiku 4.5. Provide a quick, accurate response to [simple task].
Be direct and efficient.
```

---

## Resources

### Documentation
- [Models Overview](https://docs.anthropic.com/en/docs/about-claude/models)
- [Pricing](https://docs.anthropic.com/en/docs/about-claude/pricing)
- [Migration Guide](https://docs.anthropic.com/en/docs/about-claude/models/migration-guide)
- [Model Deprecations](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
- [Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Extended Thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
- [Context Windows](https://docs.anthropic.com/en/docs/build-with-claude/context-windows)

### Platforms
- [Claude Console](https://console.claude.com) - Test prompts in browser
- [Claude Chat](https://claude.ai) - Interactive chat experience
- [AWS Bedrock](https://aws.amazon.com/bedrock/) - Cloud deployment
- [Google Vertex AI](https://cloud.google.com/vertex-ai) - GCP deployment

### Community
- [Support Team](https://support.claude.com/)
- [Discord Community](https://www.anthropic.com/discord)
- [Transparency Hub](https://www.anthropic.com/transparency)

---

**Note:** This document is updated regularly. Check Anthropic's official documentation for the most current information.
