'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CTA_DATA } from '@/lib/constants'
import './CtaSection.css'

interface CtaBtn { label: string; href: string }
interface CtaData { heading: string; headingItalic: string; primaryBtn: CtaBtn; secondaryBtn: CtaBtn }
interface CtaSectionProps { data?: CtaData }

export function CtaSection({ data = CTA_DATA }: CtaSectionProps) {
  const { headingItalic, primaryBtn, secondaryBtn } = data

  return (
    <section className="bg-[#121218] relative z-[2] -mt-20">
      <div className="relative flex flex-col items-center justify-center min-h-[500px]">

        {/* Purple glow — sunrise animation */}
        <motion.div
          className="cta-glow"
          style={{
            position: 'absolute',
            top: '-171px',
            left: '50%',
            x: '-50%',
            width: '900px',
            height: '662px',
          }}
          animate={{
            opacity: [0.6, 1, 0.8, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Black dome */}
        <div className="cta-dome" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-[3] text-center pt-24 pb-16"
        >
          <h2
            className="text-white font-bold mb-10"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Watch your<br />
            Autonomous SOC<br />
            drive{' '}
            <em style={{ fontStyle: 'italic', fontFamily: 'Noto Serif, serif', fontWeight: 400 }}>
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
