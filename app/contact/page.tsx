'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static site — show success message
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear from you."
        eyebrow="Contact Us"
      />

      <section className="bg-[#F4F1DE] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Form */}
            <div>
              <h2 className="font-cormorant font-[300] text-3xl text-[#0A0A0A] tracking-[0.03em] mb-8">
                Send us a message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#C1666B]/10 border border-[#C1666B]/30 p-8"
                >
                  <p className="font-cormorant text-2xl text-[#0A0A0A] mb-2">
                    Thank you, {formState.name || 'there'}!
                  </p>
                  <p className="font-inter text-sm text-[#2D2D2D]/80 leading-relaxed">
                    We&apos;ve received your message and will get back to you as soon
                    as we can. Alternatively, you can call us on{' '}
                    <a
                      href={CONTACT.phoneHref}
                      className="text-[#C1666B] underline-hover"
                    >
                      {CONTACT.phone}
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name */}
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />

                  {/* Email */}
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />

                  {/* Phone */}
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-cormorant text-lg text-[#0A0A0A] block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F4F1DE] border border-[#2D2D2D] px-4 py-3 font-inter text-sm text-[#0A0A0A] placeholder-[#2D2D2D]/40 focus:border-[#C1666B] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Contact info */}
            <div>
              <h2 className="font-cormorant font-[300] text-3xl text-[#0A0A0A] tracking-[0.03em] mb-8">
                Visit or call us
              </h2>

              <address className="not-italic font-inter text-sm text-[#2D2D2D] leading-relaxed mb-6">
                {CONTACT.addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </address>

              <div className="space-y-3 mb-8">
                <a
                  href={CONTACT.phoneHref}
                  className="font-inter text-sm text-[#C1666B] hover:text-[#A3545A] transition-colors duration-300 block underline-hover"
                >
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-inter text-sm text-[#C1666B] hover:text-[#A3545A] transition-colors duration-300 block underline-hover"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Social */}
              <div className="mb-8">
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-4">
                  Follow us
                </p>
                <div className="flex gap-4">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'Facebook', href: 'https://facebook.com' },
                    { label: 'X', href: 'https://x.com' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-xs tracking-[0.1em] text-[#2D2D2D]/70 hover:text-[#C1666B] transition-colors duration-300 underline-hover"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Small map */}
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={CONTACT.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: 'block',
                    filter: 'grayscale(30%)',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin"
                  title="Map showing The Cutting Bar location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface FormFieldProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-cormorant text-lg text-[#0A0A0A] block mb-2"
      >
        {label}
        {required && (
          <span className="text-[#C1666B] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-[#F4F1DE] border border-[#2D2D2D] px-4 py-3 font-inter text-sm text-[#0A0A0A] placeholder-[#2D2D2D]/40 focus:border-[#C1666B] focus:outline-none transition-colors duration-300"
        placeholder={`Your ${label.toLowerCase()}...`}
      />
    </div>
  )
}
