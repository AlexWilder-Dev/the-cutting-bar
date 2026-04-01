'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/home/LoadingScreen'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [loadingDone, setLoadingDone] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasVisited = sessionStorage.getItem('tcb-visited')
    if (!hasVisited) {
      setShowLoading(true)
    } else {
      setLoadingDone(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    sessionStorage.setItem('tcb-visited', '1')
    setLoadingDone(true)
    setShowLoading(false)
  }

  if (!mounted) {
    return (
      <>
        <Header loadingDone={false} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    )
  }

  return (
    <>
      {showLoading && !loadingDone && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <motion.div
        initial={false}
        animate={{ opacity: loadingDone ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={loadingDone ? 'block' : 'invisible pointer-events-none'}
      >
        <Header loadingDone={loadingDone} />
        <main id="main-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        </main>
        <Footer />
        <CustomCursor />
      </motion.div>
    </>
  )
}
