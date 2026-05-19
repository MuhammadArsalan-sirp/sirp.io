'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_MEASURED } from '@/lib/constants/security-outcomes-and-metrics'
import './SomMeasured.css'

export function SomMeasured() {
  const { label, excluded, items } = SOM_MEASURED

  return (
    <section className="bg-[#121218] pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] px-4 md:px-8 lg:px-12 xl:px-[80px]">
      <div className="w-full">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
          style={{
            fontFamily: 'var(--font-inter, sans-serif)',
            fontSize: '20px',
            fontWeight: 700,
            color: '#ffffff',
          }}
        >
          {label}
        </motion.p>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 w-full">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="som-measured-card"
              style={{ width: '100%' }}
            >
              <div className="som-measured-pill">
                <Image
                  src={`/images/enterprise-soc/${item.icon}.svg`}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                />
              </div>
              <p className="som-measured-value">{item.value}</p>
              <p className="som-measured-label">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Excluded note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="som-measured-excluded"
        >
          {excluded}
        </motion.p>

      </div>
    </section>
  )
}
