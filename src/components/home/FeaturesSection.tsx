'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import './FeaturesSection.css'

const features = [
  {
    id: 'thinks',
    title: 'Security that thinks for itself',
    description: "Not just AI-enabled, we're AI-native. OmniSense doesn't only assist, it decides. Multi-agent orchestration + proprietary models give you a SOC that learns, adapts, and defends in real time.",
    image: '/images/features/features1.png',
    textTop: false,
  },
  {
    id: 'enrichment',
    title: 'Enrichment that thinks ahead',
    description: 'No manual tab-hopping, no wasted minutes. The Enrichment Agent automatically pulls data from VirusTotal, WHOIS, AbuseIPDB, GreyNoise, and more — then explains why it matters in plain language.',
    image: '/images/features/features2.png',
    textTop: true,
  },
  {
    id: 'omnimap',
    title: "Your SOC's living graph",
    description: 'OmniMap reveals the relationships behind every incident. Assets, IOCs, vulnerabilities, and user activity are stitched together into a living graph, giving you and your agents the context needed to act decisively.',
    image: '/images/features/features3.png',
    textTop: false,
  },
  {
    id: 'sara',
    title: 'Security at your command',
    description: 'Chat with Sara and get instant insights on your queries seamlessly, from anywhere in the app.',
    image: '/images/features/features4.png',
    textTop: true,
  },
]

export function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="features-heading-block"
        >
          <span className="pill">✦ AI-Driven Autonomous SOC Features</span>
          <h2>
            The future of operations is<br />
            here and it&apos;s <em>self-learning</em>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`feature-card`}
            >
              {/* Image */}
              {!feature.textTop && (
                <div className="feature-card-image">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    unoptimized
                  />
                </div>
              )}

              {/* Body */}
              <div className="feature-card-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              {/* Image bottom */}
              {feature.textTop && (
                <div className="feature-card-image">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    unoptimized
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
