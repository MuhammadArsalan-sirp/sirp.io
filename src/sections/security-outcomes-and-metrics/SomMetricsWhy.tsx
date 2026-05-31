'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_WHY } from '@/lib/constants/security-outcomes-and-metrics'
import './SomMetricsWhy.css'

export function SomMetricsWhy() {
  const { heading, subtext, columns } = SOM_WHY

  return (
    <section className="bg-[#121218] py-16 md:py-[100px]">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2
            className="text-white font-sans mb-5"
            style={{ fontFamily: 'var(--font-inter, sans-serif)', fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', fontWeight: 500, lineHeight: '115%' }}
          >
            Why these metrics move<br />together
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            {subtext}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {columns.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="som-mwhy-card"
            >
              <div className="som-mwhy-pill">
                <Image
                  src={`/images/enterprise-soc/${col.icon}.svg`}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                />
              </div>
              <h3 className="som-mwhy-title">{col.title}</h3>
              <p className="som-mwhy-body">{col.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
