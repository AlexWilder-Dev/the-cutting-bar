interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  opacity?: number
}

export default function TestimonialCard({
  quote,
  name,
  location,
  opacity = 1,
}: TestimonialCardProps) {
  return (
    <div
      className="relative p-8 overflow-hidden"
      style={{ backgroundColor: `rgba(193, 102, 107, ${opacity})` }}
    >
      {/* Decorative quotation mark */}
      <span
        className="absolute top-4 left-4 font-cormorant text-white/20 leading-none select-none pointer-events-none"
        style={{ fontSize: '6rem', lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="relative z-10 mt-8">
        <p className="font-cormorant italic text-xl leading-relaxed text-white">
          {quote}
        </p>
        <footer className="mt-6 border-t border-white/20 pt-4">
          <cite className="not-italic font-inter text-xs tracking-[0.15em] uppercase text-white/80">
            {name} &mdash; {location}
          </cite>
        </footer>
      </blockquote>
    </div>
  )
}
