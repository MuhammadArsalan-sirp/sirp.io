'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

/* ─── Types ──────────────────────────────────────────────── */
interface HeroData {
  badge:         string
  headingItalic: string
  heading:       string
  description:   string
  ctaLabel:      string
  ctaHref:       string
  image:         string
  imageAlt:      string
}

interface OmnisenseHeroProps {
  data: HeroData
}

/* ─── Component ──────────────────────────────────────────── */
export function OmnisenseHero({ data }: OmnisenseHeroProps) {
  const { badge, headingItalic, heading, description, ctaLabel, ctaHref, image, imageAlt } = data

  return (
    <section className="bg-[#121218] pt-32 pb-0 overflow-hidden relative">

      {/* Background grid */}
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

        {/* Heading row: big title left, description + CTA right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1
              className="font-sans font-bold text-white"
              style={{
                fontSize: '74px',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
              }}
            >
              <em>{headingItalic}</em>
              <br />
              {heading}
            </h1>
          </motion.div>

          {/* Right — description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-end gap-8"
          >
            <p
              className="font-sans text-white leading-relaxed"
              style={{ fontSize: '16px', maxWidth: '680px' }}
            >
              {description}
            </p>
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center bg-[#8e2dff] text-white px-6 py-3 rounded-full font-sans font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_24px_rgba(142,45,255,0.4)]"
              >
                {ctaLabel}
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Full-width architecture image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1280}
            height={780}
            className="w-full h-auto block"
            unoptimized
            priority
          />
        </motion.div>

      </div>
    </section>
  )
}
