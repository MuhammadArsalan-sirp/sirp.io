'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HERO_DATA } from '@/lib/constants'

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#121218]">

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(142,45,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(142,45,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      {/* Left overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(18,18,24,0.92) 35%, rgba(18,18,24,0.4) 65%, rgba(18,18,24,0.1) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #121218 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        className="absolute bottom-0 left-0 z-[1] overflow-visible"
        style={{
          display: 'flex',
          flexFlow: 'column',
          flex: 'none',
          placeContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '16px',
          width: 'min-content',
          height: 'min-content',
          padding: '0 0 80px 200px',
        }}
      >
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]"
            style={{ padding: '5px 10px 6px' }}
          >
            {pill}
          </span>
        </motion.div>

        {/* Heading + subheading + buttons */}
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-bold text-white whitespace-nowrap"
            style={{
              fontSize: '88px',
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
            className="font-sans font-medium text-xl leading-relaxed text-white"
            style={{ maxWidth: '740px' }}
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <Link
              href={primaryBtn.href}
              className="inline-flex items-center gap-2 bg-[#8e2dff] text-white px-7 py-3 rounded-full font-sans font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_24px_rgba(142,45,255,0.4)]"
            >
              {primaryBtn.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryBtn.href}
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3 rounded-full font-sans font-medium text-sm hover:text-white hover:border-white/40 transition-all duration-200 no-underline"
            >
              {secondaryBtn.label}
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
