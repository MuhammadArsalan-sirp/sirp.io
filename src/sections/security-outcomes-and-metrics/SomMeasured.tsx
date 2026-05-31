'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOM_MEASURED } from '@/lib/constants/security-outcomes-and-metrics'
import './SomMeasured.css'

export function SomMeasured() {
  const { label, excluded, items } = SOM_MEASURED

  return (
    <section className="bg-[#121218] py-16 md:py-24 lg:pb-[100px]">
      <div className="container-sirp">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="esoc-section-subtext text-center mb-8 md:mb-12 font-bold text-white"
        >
          {label}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="som-measured-card w-full"
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
