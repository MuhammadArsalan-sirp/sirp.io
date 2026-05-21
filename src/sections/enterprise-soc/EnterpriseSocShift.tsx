'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ENTERPRISE_SOC_SHIFT } from '@/lib/constants/enterprise-soc'
import './EnterpriseSocShift.css'

const ICON_MAP = {
  bargraph: '/images/enterprise-soc/bargraph.svg',
  current:  '/images/enterprise-soc/current.svg',
  quater:   '/images/enterprise-soc/quater.svg',
} as const

export function EnterpriseSocShift() {
  const { heading, subtext, cards } = ENTERPRISE_SOC_SHIFT

  return (
    <section className="bg-[#121218] py-16 md:py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-[720px] mx-auto"
        >
          <h2
            className="font-sans font-bold text-white mb-6"
            style={{
              fontSize: '60px',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}
          >
            {heading.prefix}<em>{heading.italic}</em>
          </h2>
          <p
            className="font-sans text-white/60 leading-relaxed"
            style={{ fontSize: '20px' }}
          >
            {subtext}
          </p>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="shift-card"
            >
              {/* Icon pill */}
              <div className="shift-icon-pill">
                <Image
                  src={ICON_MAP[card.icon]}
                  alt={card.title}
                  width={22}
                  height={22}
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3
                className="font-sans font-semibold text-white mb-4"
                style={{ fontSize: '20px', lineHeight: '1.35' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans text-white/60 leading-[1.75]"
                style={{ fontSize: '15px' }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
