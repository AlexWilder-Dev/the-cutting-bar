'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

const PRODUCT_GRADIENTS = [
  'linear-gradient(135deg, #1a2520 0%, #81B29A33 50%, #0d1a15 100%)',
  'linear-gradient(135deg, #201510 0%, #C1666B22 50%, #140d0a 100%)',
  'linear-gradient(135deg, #0d1520 0%, #2D2D4A22 50%, #0a0a14 100%)',
]

export default function ProductsTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-white">
          <SectionHeading
            eyebrow="Hair Care"
            title="Take the salon home"
            eyebrowColor="sage"
            centered
            className="text-white"
          />
        </div>

        {/* Products grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.brand}
              variants={fadeUp}
              className="group relative overflow-hidden"
            >
              {/* Image placeholder */}
              <div
                className="aspect-square relative overflow-hidden"
                style={{ background: PRODUCT_GRADIENTS[i] }}
              >
                {/* Shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
                  }}
                />
                {/* Brand name watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cormorant text-white/10 text-2xl tracking-[0.15em] uppercase text-center px-4">
                    {product.brand}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="pt-4">
                <h3 className="font-cormorant font-[400] text-xl text-white tracking-[0.05em]">
                  {product.brand}
                </h3>
                <p className="font-inter text-xs text-white/50 mt-1 leading-relaxed">
                  {product.description.slice(0, 60)}...
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/products" variant="outline">
            Discover Our Range &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
