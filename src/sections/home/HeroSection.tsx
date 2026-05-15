'use client'

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(#121218 0%, #252534 100%)',
        }}
      />

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] flex flex-col gap-10 px-5 pb-14 sm:px-10 md:px-14 lg:right-auto lg:pl-[200px] lg:pr-0 lg:gap-[60px] lg:pb-20">

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
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-bold text-white"
            style={{
              fontSize: 'clamp(2.75rem, 12vw, 5.5rem)',
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
            className="font-sans font-medium text-base md:text-xl leading-relaxed text-white"
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
