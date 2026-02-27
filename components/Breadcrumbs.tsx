'use client'

interface BreadcrumbsProps {
  path: { label: string; href?: string }[]
}

export default function Breadcrumbs({ path }: BreadcrumbsProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: '#64748b',
      marginBottom: 24,
      flexWrap: 'wrap',
    }}>
      {path.map((crumb, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {index > 0 && (
            <span style={{ color: '#cbd5e1' }}>{'>'}</span>
          )}
          {crumb.href ? (
            <a
              href={crumb.href}
              style={{
                color: index === path.length - 1 ? '#0f172a' : '#64748b',
                fontWeight: index === path.length - 1 ? 600 : 400,
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => {
                if (index < path.length - 1) {
                  e.currentTarget.style.color = '#2563eb'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = index === path.length - 1 ? '#0f172a' : '#64748b'
              }}
            >
              {crumb.label}
            </a>
          ) : (
            <span style={{
              color: index === path.length - 1 ? '#0f172a' : '#64748b',
              fontWeight: index === path.length - 1 ? 600 : 400,
            }}>
              {crumb.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
