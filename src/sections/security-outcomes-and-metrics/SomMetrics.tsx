'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_METRICS } from '@/lib/constants/security-outcomes-and-metrics'
import './SomMetrics.css'

const ICON_MAP = {
  bargraph: '/images/enterprise-soc/bargraph.svg',
  search:   '/images/enterprise-soc/search.svg',
  current:  '/images/enterprise-soc/current.svg',
  dollar:   '/images/enterprise-soc/dollar.svg',
  download: '/images/enterprise-soc/download.svg',
} as const

export function SomMetrics() {
  const { heading, subtext, items } = SOM_METRICS

  return (
    <section className="bg-[#121218] overflow-hidden border-t border-b border-white/10">
      <div className="som-metrics-grid container-sirp">

        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="som-metrics-heading-cell"
        >
          <h2
            className="font-sans font-bold text-white"
            style={{
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
            }}
          >
            {heading}
          </h2>
          <p
            className="font-sans text-white/60 leading-relaxed mt-5"
            style={{ fontSize: '16px' }}
          >
            {subtext}
          </p>
        </motion.div>

        {/* 4 metric cells */}
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`som-metric-cell som-metric-cell--${item.color}`}
          >
            <span className="som-metric-cell-badge">{item.badge}</span>

            <div className="som-metric-cell-body">
              <div className={`som-metric-cell-pill som-metric-cell-pill--${item.color}`}>
                <Image
                  src={ICON_MAP[item.icon]}
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                />
              </div>
              <div>
                <div className={`som-metric-cell-value som-metric-cell-value--${item.color}`}>
                  {item.value}
                </div>
                <p
                  className="text-white"
                  style={{ fontFamily: 'var(--font-inter, sans-serif)', fontSize: '14px', marginTop: '6px' }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
