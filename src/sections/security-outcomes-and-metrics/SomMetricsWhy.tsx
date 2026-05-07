'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_WHY } from '@/lib/constants/security-outcomes-and-metrics'
import './SomMetricsWhy.css'

export function SomMetricsWhy() {
  const { heading, subtext, columns } = SOM_WHY

  return (
    <section className="bg-[#121218] py-[100px]">
      <div className="container-sirp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white font-sans mb-5"
            style={{ fontFamily: 'var(--font-inter, sans-serif)', fontSize: '60px', fontWeight: 500, lineHeight: '115%' }}
          >
            Why these metrics move<br />together
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontSize: '20px',
              fontWeight: 600,
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}
          >
            {subtext}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
