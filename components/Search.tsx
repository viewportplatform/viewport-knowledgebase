'use client'

import { useState, useEffect, useRef } from 'react'

interface SearchResult {
  title: string
  category: string
  description?: string
  difficulty?: string
  section: string
  score: number
}

interface SearchProps {
  allData: any[]
  onResultClick?: (result: SearchResult) => void
}

// Fuzzy match scoring function
function fuzzyMatch(query: string, text: string): number {
  const lowerQuery = query.toLowerCase()
  const lowerText = text.toLowerCase()

  // Exact match gets highest score
  if (lowerText === lowerQuery) return 100

  // Starts with query gets high score
  if (lowerText.startsWith(lowerQuery)) return 80

  // Contains query gets medium score
  if (lowerText.includes(lowerQuery)) return 60

  // Fuzzy character match
  let score = 0
  let queryIndex = 0
  let textIndex = 0
  let matches = 0

  while (queryIndex < lowerQuery.length && textIndex < lowerText.length) {
    if (lowerQuery[queryIndex] === lowerText[textIndex]) {
      score += 10
      matches++
      queryIndex++
    }
    textIndex++
  }

  // Bonus for percentage matched
  const matchPercent = matches / lowerQuery.length
  score *= matchPercent

  return Math.min(score, 50) // Cap at 50 for fuzzy matches
}

function calculateRelevanceScore(query: string, item: any, section: string): number {
  if (!query) return 0

  let score = 0

  // Title matching (highest weight)
  score += fuzzyMatch(query, item.title || '') * 3

  // Category matching
  score += fuzzyMatch(query, item.category || '') * 2

  // Description/content matching
  if (item.description) {
    score += fuzzyMatch(query, item.description)
  }
  if (item.content) {
    score += fuzzyMatch(query, item.content)
  }
  if (item.why) {
    score += fuzzyMatch(query, item.why)
  }

  // Bonus for difficulty match
  if (item.difficulty && fuzzyMatch(query, item.difficulty) > 20) {
    score += 5
  }

  return score
}

export default function Search({ allData, onResultClick }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Update results when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    const allResults: SearchResult[] = []

    // Search all data sections
    allData.forEach(({ items, section }) => {
      items.forEach((item: any) => {
        const score = calculateRelevanceScore(query, item, section)
        if (score > 0) {
          allResults.push({
            title: item.title || 'Untitled',
            category: item.category || 'Uncategorized',
            description: item.description || item.why || '',
            difficulty: item.difficulty,
            section,
            score,
          })
        }
      })
    })

    // Sort by score and take top 20
    const sortedResults = allResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)

    setResults(sortedResults)
    setSelectedIndex(-1)
  }, [query, allData])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          setIsOpen(true)
          setTimeout(() => inputRef.current?.focus(), 0)
        }
        return
      }

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          setIsOpen(false)
          setQuery('')
          setResults([])
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1))
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex])
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  function handleResultClick(result: SearchResult) {
    if (onResultClick) {
      onResultClick(result)
    }
    setIsOpen(false)
    setQuery('')
    setResults([])
  }

  function getCategoryColor(category: string): string {
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
      'Claude & Anthropic': '#7c3aed',
      'ViewPort Ecosystem': '#0891b2',
      'Advanced Prompts': '#ea580c',
      'Development Patterns': '#059669',
      'Operations & DevOps': '#dc2626',
    }
    return colors[category] || '#64748b'
  }

  function getSectionLabel(section: string): string {
    const labels: Record<string, string> = {
      'aa': 'AA Knowledge Base',
      'masterclass': 'Claude Code Masterclass',
      'prompts': 'Advanced Prompts',
      'casestudies': 'Case Studies',
      'practices': 'Best Practices',
    }
    return labels[section] || section
  }

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          width: '100%',
          padding: '12px 16px',
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          fontSize: 14,
          color: '#64748b',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Search everything...</span>
        <kbd style={{
          fontSize: 11,
          padding: '4px 8px',
          borderRadius: 4,
          background: '#f1f5f9',
          border: '1px solid #e2e8f0',
        }}>
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '15vh',
        }}>
          <div ref={modalRef} style={{
            width: '90%',
            maxWidth: 600,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
          }}>
            {/* Search Input */}
            <div style={{
              padding: 16,
              borderBottom: '1px solid #e2e8f0',
            }}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  fontSize: 14,
                  color: '#334155',
                  outline: 'none',
                }}
              />
            </div>

            {/* Results */}
            <div style={{
              maxHeight: 400,
              overflowY: 'auto',
            }}>
              {!query.trim() && (
                <div style={{
                  padding: '24px 16px',
                  textAlign: 'center',
                  color: '#64748b',
                  fontSize: 14,
                }}>
                  Start typing to search across all content...
                </div>
              )}

              {query.trim() && results.length === 0 && (
                <div style={{
                  padding: '24px 16px',
                  textAlign: 'center',
                  color: '#64748b',
                  fontSize: 14,
                }}>
                  No results found for "{query}"
                </div>
              )}

              {results.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    padding: 12,
                    background: selectedIndex === index ? '#f1f5f9' : 'white',
                    borderBottom: index < results.length - 1 ? '1px solid #f1f5f9' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Title and Score */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 4,
                    }}>
                      <span style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#0f172a',
                      }}>
                        {result.title}
                      </span>
                      {result.difficulty && (
                        <span style={{
                          fontSize: 10,
                          padding: '2px 6px',
                          borderRadius: 4,
                          background: result.difficulty === 'beginner' ? '#f0fdf4' :
                            result.difficulty === 'intermediate' ? '#fef3c7' : '#fef2f2',
                          color: result.difficulty === 'beginner' ? '#166534' :
                            result.difficulty === 'intermediate' ? '#92400e' : '#991b1b',
                        }}>
                          {result.difficulty}
                        </span>
                      )}
                      <span style={{
                        fontSize: 10,
                        padding: '2px 6px',
                        borderRadius: 4,
                        background: '#f1f5f9',
                        color: '#64748b',
                      }}>
                        {Math.round(result.score)}%
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 4,
                    }}>
                      <span style={{
                        fontSize: 11,
                        padding: '2px 6px',
                        borderRadius: 4,
                        background: getCategoryColor(result.category),
                        color: 'white',
                        fontWeight: 500,
                      }}>
                        {result.category}
                      </span>
                      <span style={{
                        fontSize: 11,
                        color: '#94a3b8',
                      }}>
                        in {getSectionLabel(result.section)}
                      </span>
                    </div>

                    {/* Description */}
                    {result.description && (
                      <div style={{
                        fontSize: 12,
                        color: '#64748b',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {result.description}
                      </div>
                    )}
                  </div>

                  {/* Jump to indicator */}
                  <span style={{
                    fontSize: 11,
                    color: '#94a3b8',
                    whiteSpace: 'nowrap',
                  }}>
                    Jump to →
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 11,
              color: '#64748b',
            }}>
              <div>
                <kbd style={{
                  padding: '2px 6px',
                  borderRadius: 4,
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  marginRight: 8,
                }}>
                  ↑↓
                </kbd>
                Navigate
                <kbd style={{
                  padding: '2px 6px',
                  borderRadius: 4,
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  marginLeft: 12,
                  marginRight: 4,
                }}>
                  Enter
                </kbd>
                Open
                <kbd style={{
                  padding: '2px 6px',
                  borderRadius: 4,
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  marginLeft: 12,
                  marginRight: 4,
                }}>
                  Esc
                </kbd>
                Close
              </div>
              <div>
                {results.length} results
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
