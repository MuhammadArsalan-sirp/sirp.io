'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PurplePill } from '@/components/shared/PurplePill'
import { ENTERPRISE_SOC_HERO } from '@/lib/constants/enterprise-soc'

export function EnterpriseSocHero() {
  const { badge, heading, description, cta } = ENTERPRISE_SOC_HERO

  return (
    <section className="bg-[#121218] pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden relative">

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
          <PurplePill className="rounded-lg">{badge}</PurplePill>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-8 lg:gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1 className="esoc-hero-heading font-sans font-bold text-white">
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
            <p className="esoc-hero-desc font-sans text-white">
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
