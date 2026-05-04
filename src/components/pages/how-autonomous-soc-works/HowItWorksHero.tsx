'use client'

import { motion } from 'framer-motion'

/* ─── Types ──────────────────────────────────────────────── */
interface HeroData {
  badge:         string
  heading:       string
  headingItalic: string
  description:   string
}

interface HowItWorksHeroProps {
  data: HeroData
}

/* ─── Component ──────────────────────────────────────────── */
export function HowItWorksHero({ data }: HowItWorksHeroProps) {
  const { badge, heading, headingItalic, description } = data

  return (
    <section className="bg-[#121218] pt-40 pb-24 overflow-hidden relative">

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

      {/* Purple glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(142,45,255,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-sirp relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
            ✦ {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans font-bold text-white mb-8"
          style={{
            fontSize: '74px',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
          }}
        >
          {heading}{' '}
          <em>{headingItalic}</em>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-white/70 text-xl leading-relaxed max-w-[680px] mx-auto"
        >
          {description}
        </motion.p>

      </div>
    </section>
  )
}
