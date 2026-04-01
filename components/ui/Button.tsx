import Link from 'next/link'
import { type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#C1666B] text-white hover:bg-[#F5F5F0] hover:text-[#0A0A0A] border border-[#C1666B] hover:border-[#F5F5F0]',
  secondary:
    'border border-white text-white bg-transparent hover:bg-[#C1666B] hover:border-[#C1666B]',
  outline:
    'border border-white text-white bg-transparent hover:bg-[#C1666B] hover:border-[#C1666B]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'py-3 px-8 text-[0.65rem]',
  md: 'py-4 px-10 text-xs',
}

const baseClasses =
  'inline-block rounded-none font-inter font-[500] tracking-[0.15em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C1666B] focus-visible:outline-offset-4'

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
