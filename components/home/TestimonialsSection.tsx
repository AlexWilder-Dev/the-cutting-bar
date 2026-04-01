'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/constants'
import { staggerContainerFast, fadeUp } from '@/lib/animations'

const CARD_OPACITIES = [1, 0.82, 0.68]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#F4F1DE] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-[#0A0A0A]">
          <SectionHeading
            title="What our clients say"
            centered
            eyebrowColor="rose"
            className="text-[#0A0A0A]"
          />
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <motion.div
          ref={ref}
          variants={staggerContainerFast}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="
            flex md:grid md:grid-cols-3 gap-4
            overflow-x-auto md:overflow-x-visible
            snap-x snap-mandatory md:snap-none
            -mx-6 px-6 md:mx-0 md:px-0
            pb-4 md:pb-0
          "
          style={{ scrollbarWidth: 'none' }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="snap-start flex-shrink-0 w-[85vw] md:w-auto"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                opacity={CARD_OPACITIES[i]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
