'use client'

import { motion } from 'framer-motion'

interface HeroData {
  badge:         string
  heading:       string
  headingItalic: string
  description:   string
}

interface HowItWorksHeroProps {
  data?: HeroData
}

const DEFAULT: HeroData = {
  badge:         'HOW IT WORKS',
  heading:       'Your SOC,',
  headingItalic: 'on autopilot.',
  description:   'SIRP doesn\'t add automation to a broken process. It replaces the process entirely with a continuous decision system that ingests, reasons, governs, acts, and learns. In real time.',
}

export function HowItWorksHero({ data = DEFAULT }: HowItWorksHeroProps) {
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
          className="text-white font-bold mb-8"
          style={{
            fontSize: '82px',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {heading}
          {headingItalic && (
            <>
              {' '}
              <em style={{ fontStyle: 'italic', fontFamily: 'Noto Serif, serif', fontWeight: 400 }}>
                {headingItalic}
              </em>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white leading-relaxed max-w-[680px] mx-auto font-['Inter',sans-serif]"
          style={{ fontSize: '20px' }}
        >
          {description}
        </motion.p>

      </div>
    </section>
  )
}
