'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/shared/Button'
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
  const { primaryBtn, secondaryBtn } = data

  return (
    <section className="bg-[#121218] relative z-[2] -mt-32 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center min-h-[560px] md:min-h-[500px] pt-0 md:pt-20 pb-16 md:pb-36">

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
          className="relative z-[3] text-center pt-[286px] md:pt-40"
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

          <div className="cta-section-actions flex items-center justify-center gap-4 flex-wrap mt-8 md:mt-10">
            <Button href={primaryBtn.href}>{primaryBtn.label}</Button>
            <Button href={secondaryBtn.href} variant="secondary" className="hidden md:inline-flex">
              {secondaryBtn.label}
            </Button>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
