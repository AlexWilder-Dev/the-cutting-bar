'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from 'framer-motion'

interface CounterProps {
  value: string
  suffix: string
  label: string
}

export default function Counter({ value, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  const numericValue = parseInt(value, 10)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString())

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      const controls = animate(count, numericValue, {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      })
      return controls.stop
    } else if (isInView && prefersReducedMotion) {
      count.set(numericValue)
    }
  }, [isInView, numericValue, count, prefersReducedMotion])

  return (
    <div ref={ref} className="text-center">
      <div className="font-cormorant font-[300] text-[4rem] md:text-[5rem] text-white leading-none tracking-[0.02em]">
        <motion.span>{rounded}</motion.span>
        <span className="text-[#C1666B]">{suffix}</span>
      </div>
      <p className="font-inter text-xs tracking-[0.15em] uppercase text-white/50 mt-3">
        {label}
      </p>
    </div>
  )
}
