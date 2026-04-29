'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import './StatsSection.css'

type Stat = {
  value: string
  label: string
  gradient: string
  icon: string
}

const stats: Stat[] = [
  {
    value: '80',
    label: 'reduction in MTTD',
    gradient: 'linear-gradient(6462deg, rgb(39, 232, 126) 0%, rgb(146, 248, 192) 50%, rgb(255, 255, 255) 100%)',
    icon: '/images/stats/mttd.png',
  },
  {
    value: '70',
    label: 'faster MTTR',
    gradient: 'linear-gradient(6462deg, rgb(19, 163, 173) 0%, rgb(127, 210, 216) 50%, rgb(255, 255, 255) 100%)',
    icon: '/images/stats/mttr.png',
  },
  {
    value: '90',
    label: 'autonomous actions',
    gradient: 'linear-gradient(6462deg, rgb(255, 144, 48) 0%, rgb(255, 195, 144) 50%, rgb(255, 255, 255) 100%)',
    icon: '/images/stats/autonomous.png',
  },
]

export function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container-sirp">
        <div className="stats-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="stats-left"
          >
            <div className="stats-left-pill">
              <span className="pill">🔮 Results you can see</span>
            </div>

            <h2>
              Results backed by{' '}
              <em>intelligent</em>
              <br />
              automation
            </h2>

            <p>
              OmniSense™ delivers measurable outcomes with less human intervention.
            </p>

            <Link href="/security-outcomes-and-metrics" className="stats-learn-btn">
              Learn more
            </Link>
          </motion.div>

          {/* Vertical divider */}
          <div className="stats-vertical-divider" />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="stats-right"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="stat-row"
                >
                  {/* Icon */}
                  <div className="stat-icon">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>

                  {/* Number */}
                  <div className="stat-number">
                    <span
                      className="stat-value"
                      style={{ backgroundImage: stat.gradient }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="stat-percent"
                      style={{ backgroundImage: stat.gradient }}
                    >
                      %
                    </span>
                  </div>

                  {/* Label */}
                  <span className="stat-label">{stat.label}</span>

                </motion.div>

                {/* Row divider */}
                {i < stats.length - 1 && (
                  <div className="stat-divider" />
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
