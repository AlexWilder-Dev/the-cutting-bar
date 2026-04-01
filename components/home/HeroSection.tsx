'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'
import MagneticButton from '@/components/ui/MagneticButton'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 600], ['0px', '200px'])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 30%, #2a1515 0%, #1a0d0d 25%, #0a0a0a 65%)',
          }}
        />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-inter text-xs tracking-[0.2em] uppercase text-[#C1666B] mb-8"
        >
          Est. Newbury &middot; Since 2004
        </motion.p>

        {/* H1 */}
        <AnimatedText
          text="THE CUTTING BAR"
          tag="h1"
          className="font-cormorant font-[300] text-[2.8rem] md:text-[5.5rem] tracking-[0.15em] text-white leading-none"
          delay={0.1}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-inter font-[300] text-lg md:text-xl text-[#F4F1DE] tracking-[0.08em] mt-6 mb-12"
        >
          No appointments &mdash; just walk in
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Button href="/services" variant="primary">
              Explore Services
            </Button>
          </MagneticButton>

          <Link
            href="/location"
            className="font-inter text-sm font-[300] text-[#F4F1DE]/70 hover:text-[#F4F1DE] transition-colors duration-300 tracking-[0.05em] underline-hover"
          >
            or find your way to us &rarr;
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-white/30">
            Scroll
          </span>
          <div className="relative w-[1px] h-10 bg-white/20">
            <motion.div
              className="absolute top-0 left-0 right-0 h-4 bg-[#C1666B]"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
