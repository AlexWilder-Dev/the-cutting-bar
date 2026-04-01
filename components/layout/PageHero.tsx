'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 40% 60%, #2a1515 0%, #1a0d0d 25%, #0a0a0a 65%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 79px, #F5F5F0 79px, #F5F5F0 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, #F5F5F0 79px, #F5F5F0 80px)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-xs tracking-[0.2em] uppercase text-[#C1666B] mb-6"
          >
            {eyebrow}
          </motion.p>
        )}

        <AnimatedText
          text={title}
          tag="h1"
          className="font-cormorant font-[300] text-[4rem] md:text-[5.5rem] tracking-[0.05em] text-white leading-none"
          delay={0}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-inter font-[300] text-lg text-white/60 mt-6 max-w-2xl tracking-[0.02em]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
