'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
    <section className="bg-[#121218] relative z-[2] -mt-32 overflow-visible">
      <div className="relative flex flex-col items-center justify-center min-h-[560px] md:min-h-[560px] lg:min-h-[620px] pt-0 md:pt-20 pb-16 md:pb-36">

        {/* Purple glow */}
        <div className="cta-glow" />

        {/* Black dome */}
        <div className="cta-dome" />

        {/* White outline arc */}
        <div className="cta-dome-outline">
          <Image
            src="/images/whiteoutlinedom.svg"
            alt=""
            width={859}
            height={217}
            unoptimized
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-[3] text-center pt-[280px] md:pt-40 lg:pt-44"
        >
          <h2
            className="text-white text-center mt-4 md:mt-16"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: '120%',
            }}
          >
            Watch your<br />
            Autonomous SOC<br />
            drive <em>itself</em>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-8 md:mt-10">
            <Link
              href={primaryBtn.href}
              className="inline-flex items-center bg-[#8e2dff] text-white px-5 py-3 md:px-8 md:py-3.5 rounded-full font-sans font-medium text-sm md:text-base hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_30px_rgba(142,45,255,0.5)] whitespace-nowrap"
            >
              {primaryBtn.label}
            </Link>
            <Link
              href={secondaryBtn.href}
              className="inline-flex items-center border border-white/30 text-white px-5 py-3 md:px-8 md:py-3.5 rounded-full font-sans font-medium text-sm md:text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200 no-underline bg-white/5 whitespace-nowrap"
            >
              {secondaryBtn.label}
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
