'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ImageReveal from '@/components/ui/ImageReveal'
import { SERVICES_PREVIEW } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #2a1515 0%, #C1666B22 50%, #1a0d0d 100%)',
  'linear-gradient(135deg, #0d1a1a 0%, #81B29A22 50%, #0a1515 100%)',
  'linear-gradient(135deg, #1a1510 0%, #C1666B11 50%, #0a0a0a 100%)',
]

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Services & Prices"
            eyebrowColor="rose"
            className="text-white"
          />
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SERVICES_PREVIEW.map((service, i) => (
            <ServiceCard
              key={service.category}
              service={service}
              gradient={CARD_GRADIENTS[i]}
              delay={i * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button href="/services" variant="outline">
            View Full Price List
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: (typeof SERVICES_PREVIEW)[0]
  gradient: string
  delay: number
}

function ServiceCard({ service, gradient, delay }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden"
    >
      {/* Image */}
      <ImageReveal className="aspect-[4/3]" delay={delay}>
        <div className="w-full h-full" style={{ background: gradient }} />
      </ImageReveal>

      {/* Text */}
      <div className="flex flex-col flex-1 pt-6 pb-8 relative">
        <h3 className="font-cormorant font-[300] text-2xl text-white tracking-[0.03em] mb-2">
          {service.category}
        </h3>
        <p className="font-inter text-sm text-[#C1666B] tracking-[0.05em] mb-3">
          Starting from {service.startingFrom}
        </p>
        <p className="font-inter font-[300] text-sm text-white/60 leading-relaxed">
          {service.description}
        </p>

        {/* Bottom rose line on hover */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-[#C1666B] w-0 group-hover:w-full transition-all duration-400" />
      </div>
    </motion.div>
  )
}
