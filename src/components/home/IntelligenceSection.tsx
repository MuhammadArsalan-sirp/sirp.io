'use client'

import { motion } from 'framer-motion'
import { INTELLIGENCE_DATA } from '@/lib/constants'

/* ─── Types ──────────────────────────────────────────────── */
interface IntelligenceData {
  heading:       string
  headingItalic: string
  description:   string
  videoSrc:      string
}

interface IntelligenceSectionProps {
  data?: IntelligenceData
}

/* ─── Component ──────────────────────────────────────────── */
export function IntelligenceSection({ data = INTELLIGENCE_DATA }: IntelligenceSectionProps) {
  const { heading, headingItalic, description, videoSrc } = data

  return (
    <section className="bg-[#121218] border-b border-[#3a3a4c] py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="font-sans font-bold text-white mb-5"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
            }}
          >
            {heading}{' '}
            <em>{headingItalic}</em>
          </h2>
          <p className="font-sans text-white/70 text-lg leading-[1.7] max-w-[620px] mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-[1100px] mx-auto rounded-2xl overflow-hidden bg-[#0f0f1a]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block rounded-2xl"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  )
}
