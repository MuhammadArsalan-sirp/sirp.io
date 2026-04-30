'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FEATURES_DATA } from '@/lib/constants'
import './FeaturesSection.css'

/* ─── Types ──────────────────────────────────────────────── */
interface Feature {
  id:          string
  title:       string
  description: string
  image:       string
  textTop:     boolean
}

interface FeaturesData {
  pill:          string
  heading:       string
  headingItalic: string
  features:      readonly Feature[]
}

interface FeaturesSectionProps {
  data?: FeaturesData
}

/* ─── Component ──────────────────────────────────────────── */
export function FeaturesSection({ data = FEATURES_DATA }: FeaturesSectionProps) {
  const { pill, heading, headingItalic, features } = data

  return (
    <section className="bg-[#121218] border-b border-[#3a3a4c] py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-[700px]"
        >
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
            {pill}
          </span>
          <h2
            className="text-white font-bold mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: '1.15',
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
            </em>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="feature-card"
            >
              {/* Image top */}
              {!feature.textTop && (
                <div className="feature-card-image relative w-[calc(100%-32px)] mx-4 mt-4 h-[320px] rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    unoptimized
                  />
                </div>
              )}

              {/* Body */}
              <div className="px-9 py-8">
                <h3
                  className="text-white font-semibold mb-3"
                  style={{
                    fontSize: '24px',
                    lineHeight: '1.3',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/65 text-[15px] leading-[1.75] font-['Inter',sans-serif]">
                  {feature.description}
                </p>
              </div>

              {/* Image bottom */}
              {feature.textTop && (
                <div className="feature-card-image relative w-[calc(100%-32px)] mx-4 mb-4 h-[320px] rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    unoptimized
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
