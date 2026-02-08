// src/components/ui/FloatingElement.tsx
import React from 'react'
import { cn } from '@/utils/cn'

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <div
      className={cn('animate-float', className)}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}