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
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[80px] py-16 lg:py-0">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:flex-none lg:w-[560px] lg:pt-[100px] lg:pb-[100px]"
          >
            {/* Pill */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-md border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="6" cy="6" r="5" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <path d="M6 6 L6 1 A5 5 0 0 1 11 6 Z" fill="white" />
                </svg>
                {pill}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-white font-bold mt-4 mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.625rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif',
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
              className="relative inline-flex items-center bg-[#8e2dff] text-white px-7 py-3 rounded-[50px] font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline overflow-visible"
            >
              <span className="relative z-[1]">Learn more</span>
              {/* Glow blob */}
              <span
                className="absolute pointer-events-none z-0"
                style={{
                  width: '110px',
                  top: '-30px',
                  bottom: '-30px',
                  right: '-157px',
                  backgroundColor: 'rgb(184, 137, 255)',
                  filter: 'blur(25px)',
                  borderRadius: '100%',
                }}
              />
            </Link>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-[#3a3a4c] self-stretch flex-shrink-0" />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:flex-1"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 py-6 md:py-7"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-[58px] h-[97px]">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>

                  {/* Mobile: number+% stacked above label | Desktop: number% + label inline */}
                  <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6 flex-1">
                    {/* Number + % */}
                    <div className="flex items-start gap-0 flex-shrink-0">
                      <span
                        className="font-['Noto_Serif',serif] font-normal leading-[1.1]"
                        style={{
                          fontSize: 'clamp(5.625rem, 26vw, 6.875rem)',
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
                        className="font-['Noto_Serif',serif] font-normal leading-[1.1] mt-1"
                        style={{
                          fontSize: 'clamp(3.375rem, 16vw, 4rem)',
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
                  </div>
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
