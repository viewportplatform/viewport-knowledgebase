'use client'

import { useState } from 'react'

interface NavItem {
  label: string
  items: string[]
  color: string
}

const navCategories: NavItem[] = [
  {
    label: 'ViewPort Ecosystem',
    items: [
      'Viewport Master Guide',
      'OpenClaw Workflows',
      'Agent Swarm Architecture',
      'Memory Management',
      'Heartbeat System',
    ],
    color: '#0891b2',
  },
  {
    label: 'Claude & Anthropic',
    items: [
      'Claude Code Masterclass',
      'Sonnet 4.6 Agent Guide',
      'Anthropic API Docs',
      'Model Comparison',
    ],
    color: '#7c3aed',
  },
  {
    label: 'Advanced Prompts',
    items: [
      'Feature Development',
      'Bug Fixing',
      'Refactoring',
      'API Development',
      'Testing',
      'Documentation',
    ],
    color: '#ea580c',
  },
  {
    label: 'Development Patterns',
    items: [
      'React/Next.js',
      'TypeScript',
      'Database & APIs',
      'Git Workflows',
      'Best Practices',
    ],
    color: '#059669',
  },
  {
    label: 'Real World Case Studies',
    items: [
      'Telegram Bot System',
      'AI Agency Automation',
      'E-Commerce Dashboard',
      'Multi-Agent Code Review',
      'Content Automation',
    ],
    color: '#9333ea',
  },
  {
    label: 'AI Tools & Automations',
    items: [
      'GitHub Trending AI',
      'AI News & Articles',
      'Tool Comparisons',
    ],
    color: '#dc2626',
  },
  {
    label: 'Operations & DevOps',
    items: [
      'Deployment',
      'CI/CD',
      'Monitoring',
      'Security',
    ],
    color: '#be185d',
  },
]

interface NavigationProps {
  activeCategory?: string
  onCategoryChange?: (category: string) => void
}

export default function Navigation({ activeCategory, onCategoryChange }: NavigationProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <nav style={{
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: 12,
      padding: 16,
    }}>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#0f172a',
        marginBottom: 16,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      }}>
        Browse by Category
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {navCategories.map((category) => (
          <div key={category.label}>
            <button
              onClick={() => {
                const newExpanded = expandedCategory === category.label ? null : category.label
                setExpandedCategory(newExpanded)
                if (onCategoryChange && newExpanded) {
                  onCategoryChange(category.label)
                }
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: expandedCategory === category.label ? category.color + '15' : 'transparent',
                border: `1px solid ${expandedCategory === category.label ? category.color : '#e2e8f0'}`,
                borderRadius: 8,
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: category.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0f172a',
                }}>
                  {category.label}
                </span>
              </div>
              <span style={{
                color: '#94a3b8',
                fontSize: 16,
                fontWeight: 300,
              }}>
                {expandedCategory === category.label ? '−' : '+'}
              </span>
            </button>

            {expandedCategory === category.label && (
              <div style={{
                marginTop: 8,
                marginLeft: 20,
                padding: '0 12px 12px 12px',
                borderLeft: `2px solid ${category.color}`,
              }}>
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (onCategoryChange) {
                        onCategoryChange(item)
                      }
                    }}
                    style={{
                      padding: '8px 12px',
                      fontSize: 13,
                      color: '#64748b',
                      cursor: 'pointer',
                      borderRadius: 4,
                      marginBottom: index < category.items.length - 1 ? 4 : 0,
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f8fafc'
                      e.currentTarget.style.color = '#334155'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#64748b'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
