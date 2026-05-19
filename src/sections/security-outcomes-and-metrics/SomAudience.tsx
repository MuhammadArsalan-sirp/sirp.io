'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
    <section className="bg-[#121218] py-14 md:py-16 lg:py-20 xl:py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-medium px-3 py-1 rounded-lg border border-[#8e2dff] text-white bg-[rgba(142,45,255,0.25)]" style={{ fontFamily: 'var(--font-inter, sans-serif)' }}>
            ✦ {badge}
          </span>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
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
              <h3
                className="font-sans font-bold text-white mb-3"
                style={{ fontSize: '22px', lineHeight: '1.3' }}
              >
                {item.role}
              </h3>

              {/* Title + description */}
              <p
                className="font-sans text-white leading-[1.7]"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                {item.title}. {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
