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
    <section
      className="pt-11 md:pt-32 lg:pt-25 pb-0 overflow-hidden relative"
      style={{ background: 'linear-gradient(rgb(37, 37, 52) 0%, rgb(18, 18, 24) 42%)' }}
    >

<div className="container-sirp relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 lg:-mb-4"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
            ✦ {badge}
          </span>
        </motion.div>

        {/* Mobile: stacked — Desktop: 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 lg:items-end pb-8 lg:pb-16">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1
              className="font-sans font-bold text-white"
              style={{
                fontSize: 'clamp(48px, 5.5vw, 74px)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
              }}
            >
              <em>{headingItalic}</em>
              <br />
              {heading}
            </h1>
          </motion.div>

          {/* Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 lg:justify-end lg:gap-8"
          >
            <p className="font-sans text-white leading-relaxed text-[15px] lg:text-[17px]">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="self-start inline-flex items-center justify-center bg-[#8e2dff] text-white px-6 py-3.5 rounded-full font-sans font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline"
            >
              {ctaLabel}
            </Link>
          </motion.div>

        </div>

        {/* Architecture image */}
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
