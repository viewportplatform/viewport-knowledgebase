'use client'

import { useEffect, useRef } from 'react'

interface ShortcutsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const shortcuts = [
    { key: '⌘K', description: 'Open search' },
    { key: '?', description: 'Show shortcuts' },
    { key: 'Esc', description: 'Close modals' },
    { key: '← →', description: 'Navigate between sections' },
    { key: '↑ ↓', description: 'Navigate search results' },
    { key: 'Enter', description: 'Open selected result' },
  ]

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div
        ref={modalRef}
        style={{
          width: '90%',
          maxWidth: 400,
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
        }}
      >
        <div style={{
          padding: 16,
          borderBottom: '1px solid #e2e8f0',
        }}>
          <div style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0f172a',
          }}>
            Keyboard Shortcuts
          </div>
        </div>

        <div style={{ padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{
                  fontSize: 14,
                  color: '#64748b',
                }}>
                  {shortcut.description}
                </span>
                <kbd style={{
                  fontSize: 12,
                  padding: '6px 12px',
                  borderRadius: 6,
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  color: '#334155',
                  fontWeight: 500,
                }}>
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          padding: 12,
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 24px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1d4ed8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2563eb'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
