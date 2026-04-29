'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SARA_DATA } from '@/lib/constants'

/* ─── Types ──────────────────────────────────────────────── */
interface SaraData {
  heading:        string
  headingItalic:  string
  headingSuffix:  string
  description:    string
  image:          string
  imageAlt:       string
  learnMoreHref:  string
  learnMoreLabel: string
}

interface SaraSectionProps {
  data?: SaraData
}

/* ─── Component ──────────────────────────────────────────── */
export function SaraSection({ data = SARA_DATA }: SaraSectionProps) {
  const {
    heading,
    headingItalic,
    headingSuffix,
    description,
    image,
    imageAlt,
    learnMoreHref,
    learnMoreLabel,
  } = data

  return (
    <section className="bg-[#121218] border-b border-[#3a3a4c] py-[100px] overflow-hidden">
      <div className="container-sirp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-white font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: '1.2',
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

            <p className="text-white/70 text-base leading-[1.75] mb-8 max-w-[420px] font-['Inter',sans-serif]">
              {description}
            </p>

            <Link
              href={learnMoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#8e2dff] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[#a855f7] transition-all duration-200 no-underline shadow-[0_0_20px_rgba(142,45,255,0.35)]"
            >
              {learnMoreLabel}
            </Link>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
