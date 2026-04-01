import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Professional haircare products available at The Cutting Bar, Oxford. We stock REF Stockholm, Neal & Wolf, and Moroccanoil — take the salon home.',
}

const PRODUCT_GRADIENTS = [
  'linear-gradient(135deg, #1a2520 0%, #81B29A44 50%, #0d1a15 100%)',
  'linear-gradient(135deg, #201510 0%, #C1666B33 50%, #140d0a 100%)',
  'linear-gradient(135deg, #10150d 0%, #2D3A2A44 50%, #0a0f08 100%)',
]

const BG_CLASSES = ['bg-[#F4F1DE]', 'bg-[#F5F5F0]', 'bg-[#F4F1DE]']

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Professional haircare that bridges the gap between salon and home."
        eyebrow="Hair Care"
      />

      {PRODUCTS.map((product, i) => (
        <section key={product.brand} className={`${BG_CLASSES[i % BG_CLASSES.length]}`}>
          <ProductCard
            brand={product.brand}
            description={product.description}
            url={product.url}
            imageSide={i % 2 === 0 ? 'left' : 'right'}
            gradient={PRODUCT_GRADIENTS[i]}
          />
        </section>
      ))}

      {/* Closing note */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C1666B] mb-6">
            In-Salon Purchase
          </p>
          <p className="font-inter font-[300] text-base text-white/60 leading-relaxed">
            All products are available to purchase in-salon. Ask your stylist for a
            recommendation tailored to your hair type and needs.
          </p>
        </div>
      </section>
    </>
  )
}
