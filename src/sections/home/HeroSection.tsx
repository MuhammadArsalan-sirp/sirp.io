'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/shared/Button'
import { HERO_DATA } from '@/lib/constants'
import { ShineIcon } from '@/components/shared/ShineIcon'

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

/* ─── Component ──────────────────────────────────────────── */
export function HeroSection({ data = HERO_DATA }: HeroSectionProps) {
  const { pill, subheading, primaryBtn, secondaryBtn, videoSrc } = data
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: 'calc(100dvh - 4.5rem)', maxHeight: 'calc(100dvh - 4.5rem)' }}
    >
      {/* Background video */}
      <div className="absolute inset-y-0 inset-x-0 z-0 hero-section-x pointer-events-none">
        <div className="relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Bottom fade — matches AutonomousSection top (#252534) */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #252534 0%, rgba(37, 37, 52, 0) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute left-0 right-0 z-[2] hero-section-x flex flex-col gap-4 bottom-[8rem] sm:bottom-[8.5rem] md:bottom-[9rem] lg:gap-6 lg:bottom-[9.5rem]">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]"
            style={{ padding: '5px 10px 6px', fontFamily: 'var(--font-inter)' }}
          >
            <ShineIcon size={12} />
            {pill}
          </span>
        </motion.div>

        {/* Heading + subheading */}
        <div className="flex flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.2 }}
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 flex-wrap"
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
    </section>
  )
}
