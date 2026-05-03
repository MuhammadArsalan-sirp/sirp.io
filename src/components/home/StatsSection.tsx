'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { STATS_DATA } from '@/lib/constants'

/* ─── Types ──────────────────────────────────────────────── */
interface StatItem {
  value:    string
  label:    string
  gradient: string
  icon:     string
}

interface StatsData {
  pill:          string
  heading:       string
  headingItalic: string
  headingSuffix: string
  subheading:    string
  learnMoreHref: string
  stats:         readonly StatItem[]
}

interface StatsSectionProps {
  data?: StatsData
}

/* ─── Component ──────────────────────────────────────────── */
export function StatsSection({ data = STATS_DATA }: StatsSectionProps) {
  const {
    pill,
    heading,
    headingItalic,
    headingSuffix,
    subheading,
    learnMoreHref,
    stats,
  } = data

  return (
    <section className="bg-[#121218] border-t border-[#3a3a4c]">
      <div className="container-sirp">
        <div className="flex flex-row items-start gap-[129px] py-[100px]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-none w-[480px]"
          >
            {/* Pill */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
                {pill}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-white font-bold mt-4 mb-4"
              style={{
                fontSize: '42px',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              {heading}{' '}
              <em
                className="not-italic"
                style={{ fontStyle: 'italic', fontFamily: 'Noto Serif, serif', fontWeight: 400 }}
              >
                {headingItalic}
              </em>
              <br />
              {headingSuffix}
            </h2>

            {/* Subheading */}
            <p className="text-white/60 text-base leading-[1.7] max-w-[400px] mb-8 font-['Inter',sans-serif]">
              {subheading}
            </p>

            {/* Button */}
            <Link
              href={learnMoreHref}
              className="inline-flex items-center bg-[#8e2dff] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_20px_rgba(142,45,255,0.35)]"
            >
              Learn more
            </Link>
          </motion.div>

          {/* Vertical divider */}
          <div className="w-px bg-[#3a3a4c] self-stretch flex-shrink-0" />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-6 py-7"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-[50px] h-[88px]">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>

                  {/* Number */}
                  <div className="flex items-start gap-0 flex-shrink-0">
                    <span
                      className="font-['Noto_Serif',serif] font-normal leading-none"
                      style={{
                        fontSize: '90px',
                        letterSpacing: '-0.02em',
                        backgroundImage: stat.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="font-['Noto_Serif',serif] font-normal leading-none mt-2"
                      style={{
                        fontSize: '54px',
                        backgroundImage: stat.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      %
                    </span>
                  </div>

                  {/* Label */}
                  <span className="text-white font-semibold text-base font-['Inter',sans-serif]">
                    {stat.label}
                  </span>
                </motion.div>

                {/* Row divider */}
                {i < stats.length - 1 && (
                  <div className="h-px bg-[#3a3a4c]" />
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
