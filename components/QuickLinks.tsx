'use client'

interface QuickLink {
  title: string
  description?: string
  category: string
}

interface QuickLinksProps {
  relatedArticles?: QuickLink[]
  popular?: QuickLink[]
  recentlyUpdated?: QuickLink[]
}

export default function QuickLinks({ relatedArticles, popular, recentlyUpdated }: QuickLinksProps) {
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Claude Code': '#7c3aed',
      'OpenClaw': '#0891b2',
      'Automation': '#ea580c',
      'Business': '#ca8a04',
      'AI Tools': '#9333ea',
      'MCP': '#0891b2',
      'Marketing': '#dc2626',
      'Development': '#059669',
      'Deployment': '#dc2626',
      'Engineering': '#be185d',
      'Workflow': '#0891b2',
      'Code Quality': '#9333ea',
      'Testing': '#ea580c',
      'Communication': '#7c3aed',
      'Productivity': '#059669',
      'Security': '#dc2626',
      'Debugging': '#be185d',
      'Documentation': '#9333ea',
      'Real-World': '#059669',
      'Migration': '#ea580c',
      'Innovation': '#7c3aed',
    }
    return colors[category] || '#64748b'
  }

  function renderSection(title: string, links: QuickLink[]) {
    if (!links || links.length === 0) return null

    return (
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#0f172a',
          marginBottom: 12,
        }}>
          {title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              style={{
                padding: 12,
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                display: 'block',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1'
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 4,
              }}>
                {link.title}
              </div>
              {link.description && (
                <div style={{
                  fontSize: 12,
                  color: '#64748b',
                  marginBottom: 6,
                }}>
                  {link.description}
                </div>
              )}
              <span style={{
                fontSize: 10,
                padding: '2px 8px',
                borderRadius: 4,
                background: getCategoryColor(link.category),
                color: 'white',
                fontWeight: 500,
              }}>
                {link.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: 12,
      padding: 16,
    }}>
      {renderSection('Related Articles', relatedArticles)}
      {renderSection('Popular Right Now', popular)}
      {renderSection('Recently Updated', recentlyUpdated)}
    </div>
  )
}
