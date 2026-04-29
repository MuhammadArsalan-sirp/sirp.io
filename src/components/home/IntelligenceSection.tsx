'use client'

import { motion } from 'framer-motion'
import './IntelligenceSection.css'

export function IntelligenceSection() {
  return (
    <section className="intelligence-section">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="intelligence-heading"
        >
          <h2>
            See intelligence come <em>alive</em>
          </h2>
          <p>
            From overwhelming alert floods to prioritized incidents and automated response,
            OmniSense streamlines the entire journey without slowing you down.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="intelligence-video-wrapper"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="intelligence-video"
          >
            <source src="/video/Home-Feature.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  )
}
