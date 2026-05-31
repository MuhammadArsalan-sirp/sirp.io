'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'
import { SOM_AUDIENCE } from '@/lib/constants/security-outcomes-and-metrics'
import './SomAudience.css'

const ICON_MAP = {
  bargraph: '/images/enterprise-soc/bargraph.svg',
  search:   '/images/enterprise-soc/search.svg',
  current:  '/images/enterprise-soc/current.svg',
  quater:   '/images/enterprise-soc/quater.svg',
  shine:    '/images/enterprise-soc/shine.svg',
} as const

export function SomAudience() {
  const { badge, items } = SOM_AUDIENCE

  return (
    <section className="bg-[#121218] py-16 md:py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <PurplePill className="rounded-lg">{badge}</PurplePill>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="som-audience-card"
            >
              {/* Icon pill */}
              <div className="som-audience-pill">
                <Image
                  src={ICON_MAP[item.icon]}
                  alt={item.role}
                  width={20}
                  height={20}
                  unoptimized
                  className="relative z-10"
                />
              </div>

              {/* Role heading */}
              <h3 className="esoc-shift-card-title font-sans font-bold text-white mb-3">
                {item.role}
              </h3>

              <p className="esoc-shift-card-body font-sans text-white font-medium">
                {item.title}. {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
