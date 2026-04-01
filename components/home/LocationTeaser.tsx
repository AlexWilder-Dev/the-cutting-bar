'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function LocationTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#2D2D2D] py-24 md:py-0 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left: Text (45%) */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full md:w-[45%] py-16 md:py-24 px-6 md:pl-8 lg:pl-16 flex flex-col justify-center"
          >
            <SectionHeading
              eyebrow="Find Us"
              title="125 Pound Way, Templars Square"
              eyebrowColor="rose"
              className="text-white"
            />

            <address className="not-italic font-inter font-[300] text-sm text-white/70 leading-relaxed mt-8 mb-4">
              {CONTACT.addressLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>

            <a
              href={CONTACT.phoneHref}
              className="font-inter text-sm text-white/70 hover:text-[#C1666B] transition-colors duration-300 mb-8 inline-block underline-hover"
            >
              {CONTACT.phone}
            </a>

            <div className="font-inter text-xs text-white/50 space-y-1 mb-10 border-t border-white/10 pt-6">
              <p>Monday – Friday: 9:00am – 5:30pm</p>
              <p>Saturday: 8:30am – 5:30pm</p>
              <p>Sunday: 10:00am – 4:00pm</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                href={CONTACT.googleMapsUrl}
                variant="primary"
                size="sm"
              >
                Get Directions
              </Button>
              <Button
                href={CONTACT.phoneHref}
                variant="outline"
                size="sm"
              >
                Call Us
              </Button>
            </div>
          </motion.div>

          {/* Right: Map (55%) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full md:w-[55%] min-h-[400px] md:min-h-0"
          >
            <iframe
              src={CONTACT.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                minHeight: '400px',
                filter: 'grayscale(100%) invert(90%) contrast(85%)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
              title="The Cutting Bar location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
