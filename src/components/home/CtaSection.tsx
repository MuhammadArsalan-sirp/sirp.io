'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import './CtaSection.css'

export function CtaSection() {
  return (
    <section className="cta-section">

      {/* Arch + content */}
      <div className="cta-arch-wrapper">

        {/* Animated purple glow layers */}
        <motion.div
          className="cta-glow-1"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="cta-glow-2"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="cta-glow-3"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Dark dome shape */}
        <div className="cta-dome-shape">
          <svg
            viewBox="0 0 1000 500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 0 500 C 0 223.857 223.857 0 500 0 C 776.143 0 1000 223.857 1000 500 Z"
              fill="#0d0d14"
            />
          </svg>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2>
            Watch your<br />
            Autonomous SOC<br />
            drive <em>itself</em>
          </h2>

          <div className="cta-buttons">
            <Link href="/what-is-autonomous-soc" className="cta-btn-primary">
              What is Autonomous SOC?
            </Link>
            <Link href="/how-autonomous-soc-works" className="cta-btn-secondary">
              Learn More
            </Link>
          </div>
        </motion.div>

      </div>

    </section>
  )
}
