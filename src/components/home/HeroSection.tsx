'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-grid" />

      <video autoPlay muted loop playsInline className="hero-video">
        <source
          src="https://framerusercontent.com/assets/Y7AXz4zHC2BiXgrFSoKP52cRE.webm"
          type="video/webm"
        />
      </video>

      <div className="hero-overlay" />
      <div className="hero-bottom-fade" />

      <div className="hero-content">
        <div className="hero-inner">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-pill"
          >
            <span className="pill">✦ Autonomous SOC Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-heading"
          >
            Imagine, a <em>self-driving</em> SOC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subheading"
          >
            SIRP OmniSense™, is the first Autonomous SOC that&apos;s actually
            autonomous. An AI agentic mesh that detects, learns, responds and
            evolves. Just like your best analyst, only at machine speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-buttons"
          >
            <Link href="/autonomous-security" className="hero-btn-primary">
              Learn more
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </Link>
            <Link href="/how-autonomous-soc-works" className="hero-btn-secondary">
              How it works
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
