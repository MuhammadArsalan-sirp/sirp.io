'use client'

import { motion } from 'framer-motion'
import { PurplePill } from '@/components/shared/PurplePill'
import { INTEGRATIONS_DATA } from '@/lib/constants'
import './IntegrationsSection.css'

/* ─── Types ──────────────────────────────────────────────── */
interface Logo {
  name: string
  src:  string
}

interface IntegrationsData {
  pill:          string
  heading:       string
  headingItalic: string
  headingSuffix: string
  description:   string
  logos:         readonly Logo[]
}

interface IntegrationsSectionProps {
  data?: IntegrationsData
}

/* ─── Component ──────────────────────────────────────────── */
export function IntegrationsSection({ data = INTEGRATIONS_DATA }: IntegrationsSectionProps) {
  const {
    pill,
    heading,
    headingItalic,
    headingSuffix,
    description,
    logos,
  } = data

  const doubled = [...logos, ...logos]

  return (
    <section
      className="pt-[54px] md:pt-[100px] relative z-[20]"
      style={{
        background: 'linear-gradient(rgb(37, 37, 52) 0%, rgba(18, 18, 24, 0) 15%)',
      }}
    >
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <PurplePill className="rounded-md" showSparkle={false}>
            {pill}
          </PurplePill>
          <h2
            className="font-sans font-bold text-white mt-4 mb-4"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}
          >
            {heading}{' '}
            <em>{headingItalic}</em>{' '}
            {headingSuffix}
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg leading-[1.7] max-w-[680px] mx-auto">
            {description}
          </p>
        </motion.div>

      </div>

      {/* Logo strip — full width */}
      <div className="integrations-strip pb-20 relative z-[10]">
        <div className="integrations-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="w-[88px] h-[88px] rounded-[18px] bg-[#1a1a26] border border-[#3a3a4c] flex items-center justify-center flex-shrink-0 p-3 hover:border-[#8e2dff] transition-colors duration-200 overflow-hidden"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
