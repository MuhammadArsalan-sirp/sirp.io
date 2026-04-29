'use client'

import { motion } from 'framer-motion'
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
    <section className="bg-[#121218] pt-[100px] overflow-visible relative z-[1]">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
            {pill}
          </span>
          <h2
            className="text-white font-bold mt-4 mb-5"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {heading}{' '}
            <em
              style={{
                fontStyle: 'italic',
                fontFamily: 'Noto Serif, serif',
                fontWeight: 400,
              }}
            >
              {headingItalic}
            </em>{' '}
            {headingSuffix}
          </h2>
          <p className="text-white/70 text-lg leading-[1.7] max-w-[680px] mx-auto font-['Inter',sans-serif]">
            {description}
          </p>
        </motion.div>

      </div>

      {/* Logo strip — full width */}
      <div className="integrations-strip pb-20">
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
