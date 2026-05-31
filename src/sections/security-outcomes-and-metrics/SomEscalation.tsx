'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_SYSTEM } from '@/lib/constants/security-outcomes-and-metrics'
import './SomEscalation.css'

export function SomEscalation() {
  const { heading, escalationLabel, escalations, stats, summary } = SOM_SYSTEM

  return (
    <section className="bg-[#121218] py-16 md:py-[100px]">
      <div className="container-sirp">
        <div className="som-esc-grid">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="som-esc-text"
          >
            <h2 className="som-esc-heading">{heading}</h2>

            {/* Escalation block */}
            <div className="som-esc-escalation">
              <p className="som-esc-label">{escalationLabel}</p>
              <ul className="som-esc-list">
                {escalations.map((item, i) => (
                  <li key={i} className="som-esc-item">
                    <span className="som-esc-check">
                      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats + summary block */}
            <div className="som-esc-bottom">
              <div className="som-esc-stats">
                {stats.map((s, i) => (
                  <p key={i} className="som-esc-stat">
                    {s.label}: {s.value}{s.sub ? ` ${s.sub}` : ''}
                  </p>
                ))}
              </div>
              <p className="som-esc-summary">{summary}</p>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="som-esc-image-wrap"
          >
            <Image
              src="/images/security-outcomes-and-metrics/system.png"
              alt="SIRP platform — autonomously triaged alerts"
              width={760}
              height={520}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
