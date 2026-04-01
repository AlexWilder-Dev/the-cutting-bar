'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImageReveal from '@/components/ui/ImageReveal'
import { slideInLeft, slideInRight } from '@/lib/animations'

interface ProductCardProps {
  brand: string
  description: string
  url: string
  imageSide?: 'left' | 'right'
  gradient?: string
}

export default function ProductCard({
  brand,
  description,
  url,
  imageSide = 'left',
  gradient,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const defaultGradient =
    'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #0A0A0A 100%)'

  return (
    <div ref={ref} className="py-16 md:py-24">
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col ${
          imageSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center gap-12 md:gap-20`}
      >
        {/* Image */}
        <motion.div
          variants={imageSide === 'left' ? slideInLeft : slideInRight}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full md:w-1/2"
        >
          <ImageReveal className="aspect-[4/3] overflow-hidden group">
            <div
              className="w-full h-full relative overflow-hidden"
              style={{ background: gradient || defaultGradient }}
            >
              {/* Shimmer effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
                }}
              />
              {/* Brand watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cormorant text-white/10 text-[3rem] tracking-[0.2em] uppercase select-none">
                  {brand}
                </span>
              </div>
            </div>
          </ImageReveal>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={imageSide === 'left' ? slideInRight : slideInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full md:w-1/2"
        >
          <h3 className="font-cormorant font-[300] text-[2.5rem] md:text-[3rem] text-[#F4F1DE] tracking-[0.03em] leading-[1.1] mb-6">
            {brand}
          </h3>
          <p className="font-inter font-[300] text-base text-[#F4F1DE]/70 leading-relaxed mb-8">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs tracking-[0.15em] uppercase text-[#C1666B] hover:text-[#D4878B] transition-colors duration-300 underline-hover"
          >
            Learn more &rarr;
          </a>
        </motion.div>
      </div>
    </div>
  )
}
