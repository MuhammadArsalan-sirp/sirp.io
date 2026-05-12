'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { AUTONOMOUS_DATA } from '@/lib/constants'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

/* ─── Types ──────────────────────────────────────────────── */
interface AutonomousData {
  pill: string
  heading: string
  headingItalic: string
  subheading: string
  description: string
  videoSrc: string
}

interface AutonomousSectionProps {
  data?: AutonomousData
}

const tabs = ['Assist mode', 'Autonomous mode'] as const

/* ─── Component ──────────────────────────────────────────── */
export function AutonomousSection({ data = AUTONOMOUS_DATA }: AutonomousSectionProps) {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Assist mode')
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
              fontSize: '60px',
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
          <div className="flex">
            {tabs.map((tab, i) => {
              const isActive = activeTab === tab
              const isFirst = i === 0
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    width: '151px',
                    height: '38px',
                    padding: '8px 20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#ffffff',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    transition: 'background-color 0.2s ease',
                    borderRadius: isFirst ? '4px 0 0 4px' : '0 4px 4px 0',
                    backgroundColor: isActive ? 'rgb(142, 45, 255)' : 'rgb(24, 24, 33)',
                    boxShadow: !isFirst ? 'inset 1px 0 0 rgb(89,89,104), inset 0 1px 0 rgb(89,89,104), inset 0 -1px 0 rgb(89,89,104), 1px 0 0 rgb(89,89,104)' : 'none',
                  }}
                >
                  {tab}
                </button>
              )
            })}
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
              className="relative z-[1]"
            >
              {activeTab === 'Assist mode' ? (
                <Lottie
                  animationData={require('../../../public/animations/assist-mode/home-01A.json')}
                  loop={true}
                  className="w-full h-auto"
                />
              ) : (
                <Lottie
                  animationData={require('../../../public/animations/autonomous/home-01B.json')}
                  loop={true}
                  className="w-full h-auto"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
