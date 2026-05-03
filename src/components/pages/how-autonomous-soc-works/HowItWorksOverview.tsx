'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface OverviewData {
  heading:    string
  subheading: string
  subtext:    string
  subtext2:   string
  image:      string
  imageAlt:   string
}

interface HowItWorksOverviewProps {
  data?: OverviewData
}

export function HowItWorksOverview({ data }: HowItWorksOverviewProps) {
  if (!data) return null
  const { heading, subheading, subtext, subtext2, image, imageAlt } = data

  return (
    <section className="bg-[#121218] py-24">
      <div className="container-sirp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white font-bold mb-6"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {heading}
            </h2>

            <h3
              className="text-white font-bold mb-6"
              style={{
                fontSize: '36px',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {subheading}
            </h3>

            <p
              className="text-white/60 mb-6 font-['Inter',sans-serif]"
              style={{ fontSize: '16px', lineHeight: '1.75' }}
            >
              {subtext}
            </p>

            <p
              className="text-white/60 font-['Inter',sans-serif]"
              style={{ fontSize: '16px', lineHeight: '1.75' }}
            >
              {subtext2}
            </p>
          </motion.div>

          {/* Right — architecture image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={2621}
              height={1548}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
