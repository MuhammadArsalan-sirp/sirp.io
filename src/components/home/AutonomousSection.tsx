'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './AutonomousSection.css'

const tabs = ['Assist mode', 'Autonomous mode']

const screens = {
  'Assist mode': [
    {
      src: 'https://framerusercontent.com/images/3TXmSoZgNfmLSajSAXExoiGFo.png',
      alt: 'OmniSense Assist Mode — Left',
    },
    {
      src: 'https://framerusercontent.com/images/795nY4seVbJxYywe1uHSdwn86Xg.png',
      alt: 'OmniSense Assist Mode — Right',
    },
  ],
  'Autonomous mode': [
    {
      src: 'https://framerusercontent.com/images/oNfJaqdIBVGk5DRDqy3zlHVIb2A.png',
      alt: 'OmniSense Autonomous Mode — Left',
    },
    {
      src: 'https://framerusercontent.com/images/MRJI1JKakrby79kLCmJmVWqPYTE.png',
      alt: 'OmniSense Autonomous Mode — Right',
    },
  ],
}

export function AutonomousSection() {
  const [activeTab, setActiveTab] = useState('Assist mode')

  return (
    <section className="autonomous-section">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="autonomous-heading-block"
        >
          <h2>
            The world&apos;s <em>first</em><br />
            Autonomous SOC that<br />
            actually thinks for itself
          </h2>
          <p>
            From overwhelming alert floods to prioritized incidents and automated response,
            OmniSense streamlines the entire journey without slowing you down.
          </p>
        </motion.div>

        {/* Toggle tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="autonomous-tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`autonomous-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="autonomous-screens"
        >
          {screens[activeTab as keyof typeof screens].map((screen, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="autonomous-screen"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={480}
                height={340}
                className="w-full h-auto"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
