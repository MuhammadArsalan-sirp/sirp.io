'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { AUTONOMOUS_DATA } from '@/lib/constants'

/* ─── Types ──────────────────────────────────────────────── */
interface AutonomousData {
  pill:          string
  heading:       string
  headingItalic: string
  subheading:    string
  description:   string
  videoSrc:      string
}

interface AutonomousSectionProps {
  data?: AutonomousData
}

const tabs = ['Assist mode', 'Autonomous mode'] as const

const screens = {
  'Assist mode': [
    { src: 'https://framerusercontent.com/images/3TXmSoZgNfmLSajSAXExoiGFo.png', alt: 'Assist Mode Left' },
    { src: 'https://framerusercontent.com/images/795nY4seVbJxYywe1uHSdwn86Xg.png', alt: 'Assist Mode Right' },
  ],
  'Autonomous mode': [
    { src: 'https://framerusercontent.com/images/oNfJaqdIBVGk5DRDqy3zlHVIb2A.png', alt: 'Autonomous Mode Left' },
    { src: 'https://framerusercontent.com/images/MRJI1JKakrby79kLCmJmVWqPYTE.png', alt: 'Autonomous Mode Right' },
  ],
}

/* ─── Component ──────────────────────────────────────────── */
export function AutonomousSection({ data = AUTONOMOUS_DATA }: AutonomousSectionProps) {
  const [activeTab, setActiveTab] = useState<keyof typeof screens>('Assist mode')
  const { headingItalic, subheading, description } = data

  return (
    <section className="bg-[#121218] border-b border-[#3a3a4c] py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 mx-auto"
          style={{ maxWidth: '860px' }}
        >
          <h2
            className="font-sans font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}
          >
            The world&apos;s <em>{headingItalic}</em>
            <br />
            {subheading}
          </h2>
          <p
            className="font-sans text-white/60 leading-[1.7] mx-auto"
            style={{ fontSize: '18px', maxWidth: '520px' }}
          >
            {description}
          </p>
        </motion.div>

        {/* Toggle tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center bg-[#1e1e2e] border border-[#3a3a4c] rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 border-none cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#8e2dff] text-white shadow-[0_0_20px_rgba(142,45,255,0.4)]'
                    : 'bg-transparent text-white/60 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative max-w-[1000px] mx-auto"
        >
          {/* Purple glow */}
          <div
            className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(142,45,255,0.35) 0%, transparent 70%)',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-[1] grid grid-cols-2 gap-4"
            >
              {screens[activeTab].map((screen, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#3a3a4c] bg-[#161625]"
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={480}
                    height={340}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
