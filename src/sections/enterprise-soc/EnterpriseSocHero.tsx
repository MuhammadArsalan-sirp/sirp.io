'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ENTERPRISE_SOC_HERO } from '@/lib/constants/enterprise-soc'

export function EnterpriseSocHero() {
  const { badge, heading, description, cta } = ENTERPRISE_SOC_HERO

  return (
    <section className="bg-[#121218] pt-12 pb-24 overflow-hidden relative">

      {/* Subtle purple grid */}
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

      <div className="container-sirp relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
            ✦ {badge}
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1
              className="font-sans font-bold text-white"
              style={{
                fontSize: 'clamp(52px, 5.5vw, 80px)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
              }}
            >
              {heading.prefix}
              <em>{heading.italic}</em>
              {heading.suffix}
            </h1>
          </motion.div>

          {/* Right — description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <p
              className="font-sans text-white leading-relaxed"
              style={{ fontSize: '17px' }}
            >
              {description}
            </p>
            <div>
              <Link
                href={cta.href}
                className="inline-flex items-center bg-[#8e2dff] text-white px-7 py-3.5 rounded-full font-sans font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_24px_rgba(142,45,255,0.4)]"
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
