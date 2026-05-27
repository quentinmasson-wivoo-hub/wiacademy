'use client'
import { useInView } from '@/hooks/useInView'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const { ref, isInView } = useInView()
  const transforms: Record<string, string> = {
    up: 'translateY(40px)', left: 'translateX(-40px)', right: 'translateX(40px)', none: 'none',
  }
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : transforms[direction],
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
