'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    setMounted(true)
    const hasHover = window.matchMedia('(hover: hover)').matches
    setIsTouch(!hasHover)

    if (!hasHover) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8)
      mouseY.set(e.clientY - 8)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY])

  if (!mounted || isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={
          isHovering
            ? {
                width: 40,
                height: 40,
                backgroundColor: 'transparent',
                border: '2px solid #C1666B',
                x: -12,
                y: -12,
              }
            : {
                width: 16,
                height: 16,
                backgroundColor: '#C1666B',
                border: '0px solid transparent',
                x: 0,
                y: 0,
              }
        }
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
    </motion.div>
  )
}
