import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '@/app/globals.css'
import ClientProviders from '@/components/layout/ClientProviders'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | The Cutting Bar',
    default: 'The Cutting Bar — Walk-In Hair Salon Oxford',
  },
  description:
    'Quality haircuts with no appointments needed. The Cutting Bar is a family-run walk-in hair salon at Templars Square, Cowley, Oxford. Ladies, gents and children welcome.',
  keywords: [
    'walk-in hair salon Oxford',
    'no appointment haircut Oxford',
    'Templars Square hairdresser',
    'Cowley hair salon',
    'family hairdresser Oxford',
    'barber Oxford',
    'affordable haircut Oxford',
    'The Cutting Bar',
  ],
  openGraph: {
    title: 'The Cutting Bar — Walk-In Hair Salon Oxford',
    description:
      'Quality haircuts. No appointments. Just walk in. Family-run salon at Templars Square, Cowley, Oxford.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F0] font-inter">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
