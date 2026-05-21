'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SOM_HERO } from '@/lib/constants/security-outcomes-and-metrics'

export function SomHero() {
  const { heading, subtext, cta } = SOM_HERO

  return (
    <section className="bg-[#121218] pt-12 pb-20 relative overflow-x-hidden">

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

      <div className="container-sirp relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-white"
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontSize: '12px',
              fontWeight: 500,
              padding: '5px 14px 5px 6px',
              borderRadius: '6px',
              border: '1px solid rgba(142,45,255,0.5)',
              background: 'rgba(142,45,255,0.15)',
            }}
          >
            <Image
              src="/images/enterprise-soc/quater.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Security outcomes
          </span>
        </motion.div>

        {/* Heading — Framer source: h1 is Inter 500, only italic part is Noto Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-white mx-auto text-center"
          style={{
            fontFamily: 'var(--font-inter, sans-serif)',
            fontWeight: 500,
            fontSize: 'clamp(2.75rem, 5vw, 74px)',
            lineHeight: '110%',
            maxWidth: '860px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            {heading.italic}{' '}
          </span>
          {heading.suffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-7 text-center"
          style={{
            fontFamily: 'var(--font-inter, sans-serif)',
            fontSize: '18px',
            lineHeight: '1.65',
            color: '#ffffff',
            maxWidth: '500px',
          }}
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href={cta.href}
            className="inline-flex items-center bg-[#8e2dff] text-white px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline"
          >
            {cta.label}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
