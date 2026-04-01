'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeIn } from '@/lib/animations'

type EyebrowColor = 'rose' | 'sage' | 'cream'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  eyebrowColor?: EyebrowColor
  centered?: boolean
  className?: string
}

const eyebrowColorClasses: Record<EyebrowColor, string> = {
  rose: 'text-[#C1666B]',
  sage: 'text-[#81B29A]',
  cream: 'text-[#F4F1DE]',
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  eyebrowColor = 'rose',
  centered = false,
  className = '',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`font-inter text-xs tracking-[0.2em] uppercase mb-4 ${eyebrowColorClasses[eyebrowColor]}`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="font-cormorant font-[300] text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[0.02em]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
          className="font-inter font-[300] text-base text-current/70 mt-4 leading-relaxed max-w-2xl"
          style={{ opacity: 0.7 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
