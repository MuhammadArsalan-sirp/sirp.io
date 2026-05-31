'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'
import { SOM_OUTCOMES } from '@/lib/constants/security-outcomes-and-metrics'
import './SomOutcomes.css'

export function SomOutcomes() {
  const [activeIdx, setActiveIdx] = useState(0)
  const { heading, items } = SOM_OUTCOMES
  const active = items[activeIdx]

  return (
    <section
      className="py-16 md:py-[100px] overflow-hidden"
      style={{ background: 'linear-gradient(#121218 47%, #252534 100%)' }}
    >
      <div className="container-sirp">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="esoc-section-heading text-white text-center font-sans font-bold mb-8 md:mb-12"
        >
          The four outcomes of<br />switching to Sirp
        </motion.h2>

        {/* Tabbed card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="outcomes-card"
        >
          {/* Card body */}
          <div className="outcomes-body">

            {/* Left: text */}
            <div className="outcomes-text">
              <h3 className="outcomes-title">{active.title}</h3>
              {active.badge && (
                <PurplePill className="outcomes-badge-pill mt-4 mb-6">{active.badge}</PurplePill>
              )}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="outcomes-paras"
                >
                  {active.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="outcomes-para"
                      style={{ fontWeight: 'bold' in p && p.bold ? 700 : 500 }}
                    >
                      {'boldPrefix' in p && p.boldPrefix && (
                        <strong>{p.boldPrefix} </strong>
                      )}
                      {p.text}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: image */}
            <div className="outcomes-image-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="outcomes-image-inner"
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Tab bar */}
          <div className="outcomes-tabs">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(i)}
                className={`outcomes-tab${i === activeIdx ? ' outcomes-tab--active' : ''}`}
              >
                {item.title}
              </button>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
