'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ImageReveal from '@/components/ui/ImageReveal'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#F4F1DE] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionHeading
              eyebrow="About Us"
              title="A family business. Twenty years of great hair."
              eyebrowColor="rose"
              className="text-[#0A0A0A]"
            />

            <p className="font-inter font-[300] text-base text-[#2D2D2D] leading-relaxed mt-8 mb-4">
              We started in Newbury in 2004 with a simple idea: everyone deserves a
              great haircut, without the fuss of booking ahead. No appointments, no
              waiting weeks for a slot — just walk through the door and sit down.
            </p>
            <p className="font-inter font-[300] text-base text-[#2D2D2D] leading-relaxed mb-8">
              Two decades on, we&apos;ve grown to 21 salons across the South of England
              while staying resolutely family-run and independent. From our Oxford flagship
              at Templars Square to salons across Berkshire and Oxfordshire, the same
              welcome and the same standard follows every client — of every age.
            </p>

            <Link
              href="/about"
              className="font-inter text-xs tracking-[0.15em] uppercase text-[#C1666B] hover:text-[#A3545A] transition-colors duration-300 underline-hover"
            >
              Read our full story &rarr;
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Offset frame behind image */}
            <div
              className="absolute z-0 inset-0 border border-[#2D2D2D]"
              style={{ transform: 'translate(12px, 12px)' }}
              aria-hidden="true"
            />

            {/* Main image */}
            <ImageReveal className="relative z-10 aspect-[3/4]" delay={0.1}>
              <div
                className="w-full h-full"
                style={{
                  background:
                    'linear-gradient(160deg, #2D2D2D 0%, #1A1A1A 40%, #0A0A0A 100%)',
                }}
              >
                {/* Decorative scissors watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#F4F1DE" strokeWidth="0.5">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                  </svg>
                </div>
              </div>
            </ImageReveal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
