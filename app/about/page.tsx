'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import Counter from '@/components/ui/Counter'
import SectionHeading from '@/components/ui/SectionHeading'
import ImageReveal from '@/components/ui/ImageReveal'
import { TIMELINE, STATS, VALUES } from '@/lib/constants'
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Two decades of walk-in haircuts, family values and happy clients."
        eyebrow="About The Cutting Bar"
      />

      {/* Pull quote */}
      <section className="bg-[#F4F1DE] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote>
            <p className="font-cormorant italic font-[300] text-[2rem] md:text-[2.8rem] text-[#0A0A0A] leading-[1.3] tracking-[0.02em]">
              &ldquo;A small family business with a big commitment to great hair.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Story section */}
      <StorySection />

      {/* Timeline */}
      <TimelineSection />

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <ValuesSection />
    </>
  )
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#F4F1DE] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div
              className="absolute z-0 inset-0 border border-[#2D2D2D]/30"
              style={{ transform: 'translate(12px, 12px)' }}
              aria-hidden="true"
            />
            <ImageReveal className="relative z-10 aspect-[4/3]">
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 60%, #0A0A0A 100%)',
                }}
              />
            </ImageReveal>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C1666B] mb-4">
              Our history
            </p>
            <p className="font-inter font-[300] text-base text-[#2D2D2D] leading-relaxed mb-4">
              The Cutting Bar was founded in 2004 in Newbury, Berkshire. The concept was
              straightforward from the start — high-quality cuts at fair prices, with no
              need to book in advance. We believed then, as we do now, that a great haircut
              should be accessible to everyone.
            </p>
            <p className="font-inter font-[300] text-base text-[#2D2D2D] leading-relaxed mb-4">
              From that first salon, we grew steadily. Not through venture capital or
              franchise models, but through reputation. Clients told friends. Families
              became regulars. Word spread across Berkshire and into Oxfordshire.
            </p>
            <p className="font-inter font-[300] text-base text-[#2D2D2D] leading-relaxed">
              Today we operate 21 salons, but we&apos;re still independently owned and
              family-run. The same standards, the same welcome, and the same no-nonsense
              approach that started it all.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Twenty Years"
            title="Milestones"
            eyebrowColor="rose"
            className="text-white"
          />
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-[#2D2D2D]" aria-hidden="true" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {TIMELINE.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Dot */}
                <div
                  className="absolute left-[-4px] md:left-[28px] top-1 w-[9px] h-[9px] rounded-full bg-[#C1666B]"
                  aria-hidden="true"
                />

                <span className="font-inter text-xs tracking-[0.15em] uppercase text-[#C1666B] mb-2 block">
                  {milestone.year}
                </span>
                <p className="font-inter font-[300] text-base text-white/70 leading-relaxed">
                  {milestone.event}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {STATS.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our values"
            eyebrowColor="rose"
            className="text-white"
          />
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {VALUES.map((value, i) => (
            <motion.div key={value.title} variants={fadeUp}>
              {/* Icon */}
              <div className="mb-6">
                {i === 0 && <ScissorsIcon />}
                {i === 1 && <ClockIcon />}
                {i === 2 && <PeopleIcon />}
              </div>
              <h3 className="font-cormorant font-[400] text-2xl text-white tracking-[0.03em] mb-4">
                {value.title}
              </h3>
              <p className="font-inter font-[300] text-sm text-white/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ScissorsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C1666B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C1666B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C1666B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
