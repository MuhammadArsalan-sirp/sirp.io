'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { INTELLIGENCE_DATA } from '@/lib/constants'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

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

const rawAnim = require('../../../public/animations/intelligence/home-06.json')
const intelligenceAnim = {
  ...rawAnim,
  assets: (rawAnim.assets as any[]).map((a) =>
    a.u !== undefined ? { ...a, u: '/animations/intelligence/images/' } : a
  ),
}

/* ─── Component ──────────────────────────────────────────── */
export function IntelligenceSection({ data = INTELLIGENCE_DATA }: IntelligenceSectionProps) {
  const { heading, headingItalic, description } = data

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
          <p className="font-sans text-white text-lg leading-[1.7] max-w-[620px] mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Lottie animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-[1100px] mx-auto rounded-2xl overflow-hidden"
        >
          <Lottie
            animationData={intelligenceAnim}
            loop={true}
            className="w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  )
}
