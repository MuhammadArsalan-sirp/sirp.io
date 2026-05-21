'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ENTERPRISE_SOC_DASHBOARD } from '@/lib/constants/enterprise-soc'
import { cn } from '@/lib/utils'
import './EnterpriseSocDashboard.css'

const ICON_MAP = {
  bargraph: '/images/enterprise-soc/bargraph.svg',
  search:   '/images/enterprise-soc/search.svg',
  current:  '/images/enterprise-soc/current.svg',
  dollar:   '/images/enterprise-soc/dollar.svg',
} as const

export function EnterpriseSocDashboard() {
  const { heading, subtext, metrics } = ENTERPRISE_SOC_DASHBOARD

  return (
    <section className="bg-[#121218] overflow-hidden border-t border-b border-white/10">
      <div className="dashboard-grid container-sirp">

        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dashboard-heading-cell"
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
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`dashboard-metric-cell dashboard-metric-cell--${metric.color}`}
          >
            <span className="dashboard-badge">{metric.badge}</span>

            <div className="dashboard-metric-body">
              {metric.icon && (
                <div
                  className={cn(
                    'dashboard-pill',
                    metric.id === 'mttd' && 'dashboard-pill--decrease',
                    metric.id === 'economics' && 'dashboard-pill--decrease-right',
                    metric.id !== 'mttd' &&
                      metric.id !== 'economics' &&
                      `dashboard-pill--${metric.color}`,
                  )}
                >
                  <Image
                    src={ICON_MAP[metric.icon]}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                  />
                </div>
              )}
              <div>
                <div
                  className={cn(
                    'dashboard-value',
                    metric.id === 'economics' && 'dashboard-value--decrease-right',
                    metric.id === 'mttd' && 'dashboard-value--decrease',
                    metric.value !== 'Decrease' && `dashboard-value--${metric.color}`,
                  )}
                >
                  {metric.value}
                </div>
                <p className="text-white" style={{ fontFamily: 'var(--font-inter, sans-serif)', fontSize: '14px', marginTop: '6px' }}>
                  {metric.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
