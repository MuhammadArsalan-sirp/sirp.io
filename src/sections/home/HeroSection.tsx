'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/shared/Button'
import { HERO_DATA } from '@/lib/constants'
import { PurplePill } from '@/components/shared/PurplePill'

/* ─── Types ──────────────────────────────────────────────── */
interface HeroBtn {
  label: string
  href:  string
}

interface HeroData {
  pill:         string
  heading:      string
  subheading:   string
  primaryBtn:   HeroBtn
  secondaryBtn: HeroBtn
  videoSrc:     string
}

interface HeroSectionProps {
  data?: HeroData
}

const HERO_ENTER = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
}

/** Video fades in just after hero copy starts */
const VIDEO_DELAY_S = 0.05

/* ─── Component ──────────────────────────────────────────── */
export function HeroSection({ data = HERO_DATA }: HeroSectionProps) {
  const { pill, subheading, primaryBtn, secondaryBtn, videoSrc } = data
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => {})
    }, VIDEO_DELAY_S * 1000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ height: 'calc(100dvh - 4.5rem)', maxHeight: 'calc(100dvh - 4.5rem)' }}
    >
      {/* Background video — enters with hero copy */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center bg-[#121218] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...HERO_ENTER, delay: VIDEO_DELAY_S }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="relative z-0 h-full w-full object-cover md:object-contain object-center"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </motion.div>

      {/* Bottom fade — matches AutonomousSection top (#252534) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[1] h-48 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...HERO_ENTER, delay: VIDEO_DELAY_S }}
        style={{
          background: 'linear-gradient(to top, #252534 0%, rgba(37, 37, 52, 0) 100%)',
        }}
      />

      {/* Content — aligned with header logo via container-sirp */}
      <div className="absolute left-0 right-0 bottom-[8rem] z-10 sm:bottom-[8.5rem] md:bottom-[9rem] lg:bottom-[9.5rem]">
        <div className="container-sirp flex flex-col gap-4 lg:gap-6">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...HERO_ENTER, delay: 0 }}
          className="relative z-10"
        >
          <PurplePill className="rounded-lg px-2.5 py-1">
            {pill}
          </PurplePill>
        </motion.div>

        {/* Heading + subheading */}
        <div className="relative z-10 flex flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...HERO_ENTER, delay: 0.02 }}
            className="font-sans font-bold text-white"
            style={{
              fontSize: 'clamp(2.25rem, 4.8vw, 5rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
            }}
          >
            Imagine, a <em>self-driving</em> SOC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...HERO_ENTER, delay: 0.03 }}
            className="mt-3 md:mt-4 font-sans font-medium text-sm md:text-lg leading-relaxed text-white"
            style={{ maxWidth: '740px' }}
          >
            {subheading}
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...HERO_ENTER, delay: 0.04 }}
          className="relative z-10 flex items-center gap-4 flex-wrap"
        >
          <Button href={primaryBtn.href}>
            {primaryBtn.label}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href={secondaryBtn.href} variant="secondary">
            {secondaryBtn.label}
          </Button>
        </motion.div>

        </div>
      </div>
    </section>
  )
}
