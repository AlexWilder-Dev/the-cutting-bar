'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center"
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white focus-visible:outline-[#C1666B]"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Decorative eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-inter text-xs tracking-[0.25em] uppercase text-[#C1666B] mb-12"
          >
            Navigation
          </motion.p>

          {/* Nav Links */}
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-cormorant text-[2.5rem] font-[300] text-white hover:text-[#C1666B] transition-colors duration-300 tracking-[0.05em]"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom contact info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="absolute bottom-12 text-center"
          >
            <p className="font-inter text-xs tracking-[0.12em] text-white/40 uppercase">
              125 Pound Way · Templars Square · Oxford
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
