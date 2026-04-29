'use client'

import { motion } from 'framer-motion'
import './AutonomousSocComparisonSection.css'

type ComparisonCard = {
  title: string
  points: readonly string[]
  glow: 'red' | 'yellow'
}

type AutonomousSocComparisonData = {
  heading: string
  cards: readonly ComparisonCard[]
  redesign: {
    heading: string
    paragraphs: readonly string[]
  }
}

type AutonomousSocComparisonSectionProps = {
  data: AutonomousSocComparisonData
}

export function AutonomousSocComparisonSection({ data }: AutonomousSocComparisonSectionProps) {
  return (
    <section className="bg-[#121218] py-24">
      <div className="container-sirp">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-['Inter',sans-serif] text-white text-[42px] leading-[1.2] font-medium tracking-tight"
        >
          {data.heading}
        </motion.h2>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {data.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`comparison-card comparison-card--${card.glow}`}
            >
              <h3 className="text-center font-['Inter',sans-serif] text-[24px] leading-[1.2] font-semibold tracking-[0] text-white">
                {card.title}
              </h3>
              <ul className="mt-10 space-y-5 text-center font-['Inter',sans-serif] text-[16px] leading-[1.5] font-medium text-white">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-28 max-w-[1450px]"
        >
          <h3 className="font-['Inter',sans-serif] text-white text-[42px] leading-[1.2] font-medium tracking-tight">
            {data.redesign.heading}
          </h3>
          <div className="mt-10 space-y-8 font-['Inter',sans-serif] text-[16px] leading-[1.55] font-medium text-white">
            {data.redesign.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
