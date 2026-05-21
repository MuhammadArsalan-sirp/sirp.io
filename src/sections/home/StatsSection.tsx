'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/shared/Button'
import { PurplePill } from '@/components/shared/PurplePill'
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
      <div className="pl-12 pr-5 sm:pl-16 sm:pr-8 md:pl-24 md:pr-10 lg:pl-[280px] lg:pr-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-[80px] py-12 md:py-10 lg:py-0">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:flex-none md:w-[320px] lg:w-[560px] md:pt-8 md:pb-8 lg:pt-16 lg:pb-16"
          >
            {/* Pill */}
            <div className="mb-4">
              <PurplePill className="rounded-md">{pill}</PurplePill>
            </div>

            {/* Heading */}
            <h2
              className="text-white font-bold mt-3 mb-3"
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
            <p className="text-white/60 text-base leading-[1.7] max-w-[400px] mb-14 font-['Inter',sans-serif]">
              {subheading}
            </p>

            {/* Button */}
            <Button href={learnMoreHref}>Learn more</Button>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-[#3a3a4c] self-stretch flex-shrink-0" />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:flex-1 md:pt-8 md:pb-8 lg:pt-16 lg:pb-16"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 py-4 md:py-5"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-[58px] h-[97px] self-center">
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
                    <div className="flex items-center gap-0 flex-shrink-0">
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
                        className="font-['Noto_Serif',serif] font-normal leading-[1.1] self-start mt-2 lg:mt-3"
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
                    <span className="text-white font-semibold text-base leading-snug font-['Inter',sans-serif] lg:max-w-[220px]">
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
