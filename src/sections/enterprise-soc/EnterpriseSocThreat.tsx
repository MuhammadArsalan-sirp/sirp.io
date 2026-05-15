'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ENTERPRISE_SOC_THREAT } from '@/lib/constants/enterprise-soc'
import './EnterpriseSocThreat.css'

const ICON_MAP = {
  bargraph: '/images/enterprise-soc/bargraph.svg',
  search: '/images/enterprise-soc/search.svg',
  quater: '/images/enterprise-soc/quater.svg',
  current: '/images/enterprise-soc/current.svg',
  download: '/images/enterprise-soc/download.svg',
} as const

export function EnterpriseSocThreat() {
  const { heading, steps, cta } = ENTERPRISE_SOC_THREAT

  return (
    <section className="bg-[#121218] overflow-x-hidden pt-12">

      {/* ── Centered heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <h2
          className="text-white mx-auto"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            maxWidth: '780px',
          }}
        >
          {heading}
        </h2>
      </motion.div>

      {/* ── Steps bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="threat-steps"
      >
        {steps.map((step, i) => (
          <div key={step.id} className="threat-steps__item">
            {i > 0 && <span className="threat-steps__sep" aria-hidden="true" />}
            <Image
              src={ICON_MAP[step.icon]}
              alt=""
              width={15}
              height={15}
              unoptimized
              className="opacity-60"
            />
            <span>{step.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── CTA dome area ── */}
      <div className="relative flex flex-col items-center min-h-[700px] pb-20">

        {/* Dome layers */}
        <div className="threat-dome-layers" aria-hidden="true">
          <div className="threat-cta-glow" />
          <div className="threat-cta-dome" />
        </div>

        {/* White outline arc */}
        <div className="threat-cta-dome-outline">
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
          className="relative z-[3] text-center px-4"
          style={{ paddingTop: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 text-white"
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontSize: '12px',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '5px',
              border: '0.75px solid rgb(142,45,255)',
              background: 'rgba(142,45,255,0.25)',
            }}
          >
            ✦ {cta.badge}
          </span>

          {/* Heading */}
          <h2
            className="text-white mx-auto"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '60px',
              fontStyle: 'italic',
              fontWeight: 500,
              lineHeight: '120%',
              textAlign: 'center',
              maxWidth: '720px',
            }}
          >
            {cta.headingItalic}
            <span style={{ fontFamily: 'var(--font-inter, sans-serif)', fontStyle: 'normal' }}>
              {cta.headingSuffix}
            </span>
          </h2>

          {/* Subtext */}
          <p
            className="text-white mx-auto"
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '150%',
              textAlign: 'center',
              maxWidth: '520px',
            }}
          >
            {cta.subtext}
          </p>

          {/* CTA button */}
          <Link
            href={cta.btn.href}
            className="inline-flex items-center bg-[#8e2dff] text-white px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_30px_rgba(142,45,255,0.5)]"
          >
            {cta.btn.label}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
