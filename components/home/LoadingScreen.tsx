'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SITE_NAME } from '@/lib/constants'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<'letters' | 'exit'>('letters')

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete()
      return
    }
    // Letters animate in over ~1.2s (15 chars × 50ms + duration 500ms)
    // Then trigger exit slide-up
    const timer = setTimeout(() => setPhase('exit'), 1400)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion, onComplete])

  if (prefersReducedMotion) return null

  const letters = SITE_NAME.toUpperCase().split('')

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center"
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exit') onComplete()
      }}
    >
      <div aria-label={SITE_NAME} role="heading" aria-level={1}>
        <div className="flex overflow-hidden" aria-hidden="true">
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className="font-cormorant font-[300] text-3xl md:text-4xl text-white tracking-[0.25em] inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)', y: 10 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="mt-4 mx-auto h-[1px] bg-[#C1666B]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </motion.div>
  )
}
