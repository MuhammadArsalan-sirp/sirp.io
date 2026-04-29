'use client'

import { motion } from 'framer-motion'
import './IntegrationsSection.css'

const integrations = Array.from({ length: 19 }, (_, i) => ({
  name: `Integration ${i + 1}`,
  src: `/images/integrations/logo-${i + 1}.svg`,
}))

export function IntegrationsSection() {
  const doubled = [...integrations, ...integrations]

  return (
    <section className="integrations-section">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="integrations-heading"
        >
          <span className="pill">⚙️ Autonomous SOC Ecosystem</span>
          <h2>
            Every tool. <em>One</em> intelligence.
          </h2>
          <p>
            Connect 200+ tools into a single AI-native Autonomous SOC brain, or go further.
            With SIRP&apos;s AI assisted code builder, you can create your own integrations
            on the fly. Your SOC doesn&apos;t bend to us, OmniSense adapts to your stack.
          </p>
        </motion.div>

      </div>

      {/* Logo strip — full width */}
      <div className="integrations-strip">
        <div className="integrations-track">
          {doubled.map((tool, i) => (
            <div key={i} className="integration-card">
              <img
                src={tool.src}
                alt={tool.name}
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
