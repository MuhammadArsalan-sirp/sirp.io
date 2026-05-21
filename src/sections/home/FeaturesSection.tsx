'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'
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
    <section className="bg-[#121218] py-[50px] md:py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-[700px]"
        >
          <PurplePill className="rounded-md">{pill}</PurplePill>
          <h2
            className="font-sans text-white mt-4"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: '1.2',
            }}
          >
            {heading}{' '}
            <em>{headingItalic}</em>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <div className="relative w-full h-[230px] md:h-[280px] overflow-hidden">
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
              <div className="px-7 py-7">
                <h3
                  className="font-sans font-semibold text-white mb-3"
                  style={{
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.625rem)',
                    lineHeight: '1.3',
                  }}
                >
                  {feature.title}
                </h3>
                <p className="font-sans text-white/60 text-base leading-[1.5]">
                  {feature.description}
                </p>
              </div>

              {/* Image bottom */}
              {feature.textTop && (
                <div className="relative w-full h-[230px] md:h-[280px] overflow-hidden">
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
