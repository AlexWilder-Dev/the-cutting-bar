import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import { CONTACT, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Find Us',
  description:
    'The Cutting Bar is at 125 Pound Way, Templars Square, Cowley, Oxford OX4 3XH. Walk-in hair salon open Monday to Sunday. Get directions and opening hours.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'The Cutting Bar',
  image: 'https://thecutttingbar.co.uk/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '125 Pound Way, Templars Square',
    addressLocality: 'Cowley, Oxford',
    postalCode: 'OX4 3XH',
    addressCountry: 'GB',
  },
  telephone: '+447484099100',
  openingHours: [
    'Mo-Fr 09:00-17:30',
    'Sa 08:30-17:30',
    'Su 10:00-16:00',
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.7379,
    longitude: -1.2168,
  },
  priceRange: '££',
  url: 'https://thecutttingbar.co.uk',
}

export default function LocationPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <PageHero
        title="Find Us"
        subtitle="No appointment needed — just walk through the door."
        eyebrow="125 Pound Way · Oxford"
      />

      {/* Main content */}
      <section className="bg-[#F4F1DE] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Left: Info */}
            <div className="w-full md:w-2/5">
              <h2 className="font-cormorant font-[300] text-3xl text-[#0A0A0A] tracking-[0.03em] mb-6">
                Getting here
              </h2>

              <address className="not-italic font-inter text-sm text-[#2D2D2D] leading-relaxed mb-6">
                {CONTACT.addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </address>

              <a
                href={CONTACT.phoneHref}
                className="font-inter text-sm text-[#C1666B] hover:text-[#A3545A] transition-colors duration-300 block mb-2 underline-hover"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-inter text-sm text-[#C1666B] hover:text-[#A3545A] transition-colors duration-300 block mb-8 underline-hover"
              >
                {CONTACT.email}
              </a>

              {/* Hours table */}
              <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-[#2D2D2D]/60 mb-4">
                Opening Hours
              </h3>
              <table className="w-full mb-8">
                <tbody>
                  {HOURS.map((item) => (
                    <tr key={item.day} className="border-b border-[#E8E4CF]">
                      <td className="py-2 font-inter text-sm text-[#2D2D2D]">
                        {item.day}
                      </td>
                      <td className="py-2 font-inter text-sm text-[#2D2D2D] text-right">
                        {item.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="font-inter text-xs text-[#2D2D2D]/60 mb-8 leading-relaxed">
                We operate on a walk-in basis only. No appointments are taken.
                Busy periods may result in a short wait.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href={CONTACT.googleMapsUrl} variant="primary">
                  Get Directions
                </Button>
                <Button href={CONTACT.phoneHref} variant="outline">
                  Call Us
                </Button>
              </div>
            </div>

            {/* Right: Map */}
            <div className="w-full md:w-3/5 min-h-[500px]">
              <iframe
                src={CONTACT.googleMapsEmbed}
                width="100%"
                height="500"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'grayscale(20%)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                title="The Cutting Bar location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Storefront gallery */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant font-[300] text-2xl text-white tracking-[0.05em] mb-8">
            The Salon
          </h2>
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {[
              'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 50%, #0A0A0A 100%)',
              'linear-gradient(135deg, #1A1A1A 0%, #2a1515 50%, #0A0A0A 100%)',
              'linear-gradient(135deg, #0d1a15 0%, #1A1A1A 50%, #0A0A0A 100%)',
              'linear-gradient(135deg, #2D2D2D 0%, #0d1520 50%, #0A0A0A 100%)',
            ].map((gradient, i) => (
              <div
                key={i}
                className="flex-shrink-0 aspect-video w-[calc(75vw)] md:w-[calc(25vw-1.5rem)] min-w-[280px]"
                style={{ background: gradient }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
