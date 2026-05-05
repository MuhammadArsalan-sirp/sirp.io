'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

/* ─── Types ──────────────────────────────────────────────── */
interface Tab {
  id:          string
  label:       string
  title:       string
  description: string
  image:       string
}

interface PlatformData {
  badge:         string
  heading:       string
  headingItalic: string
  headingSuffix: string
  tabs:          readonly Tab[]
}

interface OmnisensePlatformProps {
  data: PlatformData
}

/* ─── Component ──────────────────────────────────────────── */
export function OmnisensePlatform({ data }: OmnisensePlatformProps) {
  const { badge, heading, headingItalic, headingSuffix, tabs } = data
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const active = tabs.find(t => t.id === activeTab)!

  return (
    <section className="py-24 relative" style={{ background: 'linear-gradient(rgb(33, 33, 46) 15%, rgb(25, 25, 36) 21%, rgb(18, 18, 24) 38%)' }}>
      <div className="container-sirp">

        {/* Badge + heading — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]">
              ✦ {badge}
            </span>
          </div>
          <h2
            className="font-sans font-bold text-white"
            style={{
              fontSize: '64px',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
            }}
          >
            {heading}
            <br />
            <em>{headingItalic}</em>{' '}
            {headingSuffix}
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-[#3a3a4c] overflow-hidden mx-auto"
          style={{ maxWidth: '1000px', background: 'transparent' }}
        >
          {/* Content area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Left — title + description */}
              <div className="p-10 flex flex-col justify-center">
                <h3
                  className="font-sans font-bold text-white mb-4"
                  style={{ fontSize: '32px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
                >
                  {active.title}
                </h3>
                <p
                  className="font-sans text-white/70 leading-relaxed"
                  style={{ fontSize: '15px' }}
                >
                  {active.description}
                </p>
              </div>

              {/* Right — screenshot */}
              <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover object-left-top"
                  unoptimized
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tab bar — bottom of card */}
          <div
            className="flex items-stretch"
            style={{ borderTop: '1px solid #3a3a4c' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 font-sans text-sm font-medium transition-all duration-200 cursor-pointer border-none outline-none ${
                  activeTab === tab.id
                    ? 'bg-[#8e2dff] text-white'
                    : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  borderRight: '1px solid #3a3a4c',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
