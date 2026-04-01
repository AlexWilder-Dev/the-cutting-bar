'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Content with scale reveal */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Rose wipe overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: '#C1666B', originX: 0 }}
        initial={{ x: '0%' }}
        animate={isInView ? { x: '101%' } : { x: '0%' }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        aria-hidden="true"
      />
    </div>
  )
}
