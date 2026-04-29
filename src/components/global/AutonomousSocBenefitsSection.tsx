'use client'

import { motion } from 'framer-motion'
import { BellOff, ChartNoAxesColumnIncreasing, Hand, RefreshCcw } from 'lucide-react'
import Image from 'next/image'
import './AutonomousSocBenefitsSection.css'

type BenefitCard = {
  icon: 'chart' | 'mute' | 'hand' | 'refresh'
  title: string
  paragraphs: readonly string[]
}

type AutonomousSocBenefitsSectionProps = {
  badgeText: string
  heading: string
  intro: string
  cards: readonly BenefitCard[]
}

const iconMap = {
  chart: ChartNoAxesColumnIncreasing,
  mute: BellOff,
  hand: Hand,
  refresh: RefreshCcw,
} as const

export function AutonomousSocBenefitsSection({
  badgeText,
  heading,
  intro,
  cards,
}: AutonomousSocBenefitsSectionProps) {
  return (
    <section className="autonomous-benefits">
      <div className="container-sirp autonomous-benefits-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="autonomous-benefits-top"
        >
          <span className="autonomous-benefits-badge">
            <Image
              src="/images/benefitsOfSOC/star.svg"
              alt=""
              width={12}
              height={12}
              className="autonomous-benefits-badge-star"
              unoptimized
            />
            {badgeText}
          </span>
          <h2 className="autonomous-benefits-heading">{heading}</h2>
          <p className="autonomous-benefits-intro">{intro}</p>
        </motion.div>

        <div className="autonomous-benefits-grid">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="autonomous-benefit-card"
              >
                <div className="autonomous-benefit-icon-wrap" aria-hidden="true">
                  <Image
                    src="/images/global/number border purple.svg"
                    alt=""
                    width={58}
                    height={96}
                    className="autonomous-benefit-border"
                    unoptimized
                  />
                  <Icon className="autonomous-benefit-icon" size={20} strokeWidth={2.25} />
                </div>

                <h3 className="autonomous-benefit-title">{card.title}</h3>
                <div className="autonomous-benefit-body">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
