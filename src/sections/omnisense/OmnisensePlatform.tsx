'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'

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
    <section className="py-[50px] md:py-[100px] relative" style={{ background: 'linear-gradient(rgb(33, 33, 46) 15%, rgb(25, 25, 36) 21%, rgb(18, 18, 24) 38%)' }}>
      <div className="container-sirp">

        {/* Badge + heading — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="mb-4 md:mb-6 flex justify-center">
            <PurplePill className="rounded-lg">{badge}</PurplePill>
          </div>
          <h2
            className="font-sans font-bold text-white"
            style={{
              fontSize: 'clamp(42px, 5vw, 64px)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
            }}
          >
            {heading}
            <br />
            <span className="block" style={{ lineHeight: '1.08' }}>
              <em>{headingItalic}</em> {headingSuffix}
            </span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden mx-auto w-full"
          style={{
            maxWidth: '1000px',
            background: 'rgb(18, 18, 24)',
            borderRadius: '35px',
            border: '1px solid rgb(58, 58, 77)',
          }}
        >
          {/* Content area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              {/* Left — title + description */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3
                  className="font-sans font-bold text-white mb-3 md:mb-4"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
                >
                  {active.title}
                </h3>
                <p className="font-sans text-white/70 leading-relaxed text-sm md:text-[15px]">
                  {active.description}
                </p>
              </div>

              {/* Right — screenshot */}
              <div className="relative overflow-hidden min-h-[220px] md:min-h-[320px] lg:min-h-[380px] order-1 md:order-2">
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

          {/* Tab bar */}
          <div
            className="flex flex-wrap"
            style={{ borderTop: '1px solid rgb(58, 58, 77)' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[50%] md:min-w-0 py-3 md:py-4 font-sans text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer border-none outline-none whitespace-nowrap px-2 md:px-3 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  background: activeTab === tab.id ? 'rgb(142, 45, 255)' : 'transparent',
                  opacity: activeTab === tab.id ? 1 : 0.9,
                  borderRight: '1px solid rgb(89, 89, 104)',
                  borderBottom: '1px solid rgb(89, 89, 104)',
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
