import React, { useState, useEffect, useRef, ReactNode } from 'react'

interface CollapsibleProps {
  trigger: ReactNode
  children: ReactNode
  triggerClassName?: string
  triggerOpenedClassName?: string
  onOpening?: () => void
  onClosing?: () => void
}

export default function Collapsible({
  trigger,
  children,
  triggerClassName = '',
  triggerOpenedClassName = '',
  onOpening,
  onClosing,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) onOpening?.()
    else onClosing?.()
  }, [isOpen])

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen, children])

  return (
    <div className="rounded-lg overflow-hidden">
      <div
        className={`
          cursor-pointer select-none
          transition-all duration-200 ease-in-out
          hover:bg-opacity-80
          ${triggerClassName}
          ${isOpen ? triggerOpenedClassName : ''}
        `}
        onClick={() => setIsOpen((s) => !s)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen((s) => !s)
          }
        }}
        aria-expanded={isOpen}
        aria-controls="collapsible-content"
      >
        {trigger}
      </div>
      <div
        id="collapsible-content"
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={contentRef} className="transition-opacity duration-200">
          {children}
        </div>
      </div>
    </div>
  )
}
