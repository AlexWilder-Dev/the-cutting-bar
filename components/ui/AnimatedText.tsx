'use client'

import { useReducedMotion, motion } from 'framer-motion'

type Tag = 'h1' | 'h2' | 'span'

interface AnimatedTextProps {
  text: string
  className?: string
  tag?: Tag
  delay?: number
}

export default function AnimatedText({
  text,
  className = '',
  tag = 'h1',
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion()

  const chars = text.split('')

  const Tag = tag

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={`${className} overflow-hidden`} aria-label={text}>
      <span aria-hidden="true" className="inline">
        {chars.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: 'top' }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.03,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
