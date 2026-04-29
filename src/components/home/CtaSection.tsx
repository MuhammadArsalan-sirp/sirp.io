'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CTA_DATA } from '@/lib/constants'
import './CtaSection.css'

/* ─── Types ──────────────────────────────────────────────── */
interface CtaBtn {
  label: string
  href:  string
}

interface CtaData {
  heading:       string
  headingItalic: string
  primaryBtn:    CtaBtn
  secondaryBtn:  CtaBtn
}

interface CtaSectionProps {
  data?: CtaData
}

/* ─── Component ──────────────────────────────────────────── */
export function CtaSection({ data = CTA_DATA }: CtaSectionProps) {
  const { headingItalic, primaryBtn, secondaryBtn } = data

  return (
    <section className="bg-[#121218] overflow-hidden relative z-[2] -mt-20">

      <div className="cta-arch-wrapper">

        {/* 1. Glow — renders first, behind dome */}
        <motion.div
          className="cta-orb"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 2. Black dome — covers bottom of glow */}
        <div className="cta-dome-black" />

        {/* 3. Content — on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-[3] text-center pt-28"
        >
          <h2
            className="text-white mb-10"
            style={{
              fontSize: '56px',
              fontWeight: 500,
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Watch your<br />
            Autonomous SOC<br />
            drive{' '}
            <em
              style={{
                fontStyle: 'italic',
                fontFamily: 'Noto Serif, serif',
                fontWeight: 400,
              }}
            >
              {headingItalic}
            </em>
          </h2>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={primaryBtn.href}
              className="inline-flex items-center bg-[#8e2dff] text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_30px_rgba(142,45,255,0.5)]"
            >
              {primaryBtn.label}
            </Link>
            <Link
              href={secondaryBtn.href}
              className="inline-flex items-center border border-white/30 text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200 no-underline bg-white/5"
            >
              {secondaryBtn.label}
            </Link>
          </div>

        </motion.div>

      </div>

    </section>
  )
}
