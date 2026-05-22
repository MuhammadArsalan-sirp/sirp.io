'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'
import { SOM_DEPLOYMENTS } from '@/lib/constants/security-outcomes-and-metrics'
import './SomDeployments.css'

export function SomDeployments() {
  const { badge, heading, items } = SOM_DEPLOYMENTS

  return (
    <section className="bg-[#121218] py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <PurplePill>{badge}</PurplePill>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-white font-sans mb-14"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 60px)', fontWeight: 500, lineHeight: '110%' }}
        >
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{heading.italic}</span>
          {heading.suffix}
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="deploy-card"
            >

              {/* Card header — logo + glow */}
              <div className="deploy-card-header">
                {/* Glow */}
                {item.glow === 'purple' ? (
                  <div className="deploy-glow-purple">
                    <div className="deploy-glow-purple__l1" />
                    <div className="deploy-glow-purple__l2" />
                    <div className="deploy-glow-purple__l3" />
                  </div>
                ) : (
                  <div className="deploy-glow-teal">
                    <div className="deploy-glow-teal__l1" />
                    <div className="deploy-glow-teal__l2" />
                    <div className="deploy-glow-teal__l3" />
                  </div>
                )}

                {/* Logo row */}
                <div className="deploy-logo-row">
                  <Image
                    src="/images/logos/SIRP-Logo.png"
                    alt="SIRP"
                    width={80}
                    height={28}
                    unoptimized
                    className="deploy-logo"
                  />
                  <div className="deploy-logo-pill">
                    <span className="deploy-pill-plus">+</span>
                  </div>
                  <span className="deploy-company">{item.company}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="deploy-card-body">

                {/* Tags */}
                <div className="deploy-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="deploy-tag">{tag}</span>
                  ))}
                </div>

                <div className="deploy-divider" />

                {/* Before / After */}
                <div className="deploy-before-after">
                  <div>
                    <span className="deploy-label deploy-label--before">Before Sirp</span>
                    <p className="deploy-text">{item.before}</p>
                  </div>
                  <div>
                    <span className="deploy-label deploy-label--after">After Sirp</span>
                    <p className="deploy-text">{item.after}</p>
                  </div>
                </div>

                <div className="deploy-divider" />

                {/* Results */}
                <div>
                  <span className="deploy-label deploy-label--results">Results</span>
                  <p className="deploy-text mt-3">{item.results}</p>
                </div>

                {/* Quote box */}
                <div className="deploy-quote-box">
                  <span className="deploy-label deploy-label--quote">{item.quoteLabel}</span>
                  <p className="deploy-quote-text">"{item.quote}"</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
