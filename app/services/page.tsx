import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import PriceTable from '@/components/ui/PriceTable'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Prices',
  description:
    'Full price list for ladies hairdressing, gents barbering and children\'s cuts at The Cutting Bar, Oxford. No appointment needed — walk in any time during opening hours.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services & Prices"
        subtitle="Honest pricing, skilled stylists, no hidden extras."
        eyebrow="What We Offer"
      />

      {/* Price table section */}
      <section className="bg-[#F4F1DE] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <PriceTable />
        </div>
      </section>

      {/* Walk-in CTA */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C1666B] mb-6">
            No Appointment Needed
          </p>
          <h2 className="font-cormorant font-[300] text-[2.5rem] md:text-[3.5rem] text-white leading-[1.1] tracking-[0.02em] mb-6">
            Just walk in, any time we&apos;re open.
          </h2>
          <p className="font-inter font-[300] text-base text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
            We don&apos;t take bookings. No apps, no waiting lists. Find us at Templars
            Square, Cowley and we&apos;ll take care of you from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/location" variant="primary">
              Find Us
            </Button>
            <Button href={CONTACT.phoneHref} variant="outline">
              {CONTACT.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
