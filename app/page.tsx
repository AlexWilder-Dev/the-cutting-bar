import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ProductsTeaser from '@/components/home/ProductsTeaser'
import LocationTeaser from '@/components/home/LocationTeaser'

export const metadata: Metadata = {
  title: 'Walk-In Hair Salon Oxford — No Appointment Needed',
  description:
    'The Cutting Bar is a family-run walk-in hair salon at Templars Square, Cowley, Oxford. Quality haircuts for ladies, gents and children. No appointment needed — just walk in.',
  alternates: {
    canonical: 'https://thecutttingbar.co.uk',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <TestimonialsSection />
      <ProductsTeaser />
      <LocationTeaser />
    </>
  )
}
