'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import './SaraSection.css'

export function SaraSection() {
  return (
    <section className="sara-section">
      <div className="container-sirp">
        <div className="sara-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sara-left"
          >
            <h2>
              Meet Sara, your <em>always
              evolving</em> security analyst
            </h2>
            <p>
              Sara is the voice of your SOC&apos;s intelligence. She connects
              your team to OmniSense™, translating the power of agents,
              LLMs, and your environment into clarity, insight, and
              decisive action.
            </p>
            <Link href="/autonomous-security" className="sara-btn">
              Learn more
            </Link>
          </motion.div>

          {/* Right — chat image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sara-right"
          >
            <Image
              src="/images/sara/sara.png"
              alt="Sara AI Security Analyst"
              width={600}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
