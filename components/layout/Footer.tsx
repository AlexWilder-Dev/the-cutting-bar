import Link from 'next/link'
import { SITE_NAME, SITE_TAGLINE, NAV_LINKS, CONTACT } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12">
          {/* Col 1: Brand */}
          <div>
            <Link
              href="/"
              className="font-cormorant tracking-[0.25em] text-2xl text-white font-[400] uppercase hover:text-[#C1666B] transition-colors duration-300 block mb-4"
            >
              {SITE_NAME.toUpperCase()}
            </Link>
            <p className="font-inter text-sm font-[300] text-white/50 leading-relaxed tracking-[0.02em] max-w-xs">
              {SITE_TAGLINE}
            </p>
            <p className="font-inter text-xs text-white/30 mt-6 tracking-[0.05em]">
              Est. 2004 · Newbury & Oxford
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 hover:text-[#C1666B] transition-colors duration-300 underline-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
              Policies
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Refund Policy', href: '#' },
                { label: 'Cookie Policy', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-inter text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
              Visit Us
            </h3>
            <address className="not-italic font-inter text-sm text-white/70 leading-relaxed mb-6">
              {CONTACT.addressLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={CONTACT.phoneHref}
              className="font-inter text-sm text-white/70 hover:text-[#C1666B] transition-colors duration-300 block mb-6 underline-hover"
            >
              {CONTACT.phone}
            </a>
            <div className="font-inter text-xs text-white/50 space-y-1 mb-8">
              <p>Mon–Fri: 9:00am – 5:30pm</p>
              <p>Sat: 8:30am – 5:30pm</p>
              <p>Sun: 10:00am – 4:00pm</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://instagram.com"
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href="https://facebook.com"
                label="Facebook"
                icon={<FacebookIcon />}
              />
              <SocialLink
                href="https://x.com"
                label="X (Twitter)"
                icon={<XIcon />}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2D2D2D] pt-8">
          <p className="font-inter text-xs text-white/30 text-center tracking-[0.05em]">
            © {currentYear} The Cutting Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#C1666B] transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M4 20L20 4" />
    </svg>
  )
}
