'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PurplePill } from '@/components/shared/PurplePill'
import { ENTERPRISE_SOC_REALITY } from '@/lib/constants/enterprise-soc'
import './EnterpriseSocReality.css'

export function EnterpriseSocReality() {
  const { badge, heading, subtext, cards } = ENTERPRISE_SOC_REALITY

  return (
    <section className="bg-[#121218] py-16 md:py-[100px] overflow-hidden">
      <div className="container-sirp">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-[780px]"
        >
          <PurplePill className="mb-6 rounded-lg">{badge}</PurplePill>

          <h2
            className="font-sans font-bold text-white mb-6"
            style={{
              fontSize: '60px',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}
          >
            {heading.line1}
            <br />
            <em>{heading.line2}</em>
          </h2>

          <p
            className="font-sans text-white/70 leading-relaxed"
            style={{ fontSize: '20px' }}
          >
            {subtext}
          </p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`reality-card${card.highlighted ? ' reality-card--highlighted' : ''}`}
            >
              {/* Text top (before image) */}
              {card.textTop && (
                <div className="px-5 pt-6 pb-5 md:px-8 md:pt-8 md:pb-6">
                  <h3
                    className="font-sans font-semibold text-white mb-3"
                    style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', lineHeight: '1.3' }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-sans text-white/60 leading-[1.75]" style={{ fontSize: '16px' }}>
                    {card.description}
                  </p>
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-[240px] md:h-[400px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  unoptimized
                />
              </div>

              {/* Text bottom (after image) */}
              {!card.textTop && (
                <div className="px-5 py-5 md:px-8 md:py-7">
                  <h3
                    className="font-sans font-semibold text-white mb-3"
                    style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', lineHeight: '1.3' }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-sans text-white/60 leading-[1.75]" style={{ fontSize: '16px' }}>
                    {card.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
