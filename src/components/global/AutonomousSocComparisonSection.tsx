'use client'

import { motion } from 'framer-motion'
import './AutonomousSocComparisonSection.css'

type ComparisonCard = {
  title: string
  points: readonly string[]
  glow: 'red' | 'yellow' | 'blue'
}

type AutonomousSocComparisonData = {
  heading: string
  cards: readonly ComparisonCard[]
  redesign?: {
    heading: string
    paragraphs: readonly string[]
  }
  /** Short closing lines (e.g. SOAR vs Autonomous page); omit when `redesign` is used. */
  footerLines?: readonly string[]
}

type AutonomousSocComparisonSectionProps = {
  data: AutonomousSocComparisonData
  /** `/soar-vs-autonomous-soc` comparison row: fixed card size from design (~386.67×338.8px, #060606, 20px pad). */
  variant?: 'default' | 'soarComparison'
}

export function AutonomousSocComparisonSection({
  data,
  variant = 'default',
}: AutonomousSocComparisonSectionProps) {
  const isSoarComparison = variant === 'soarComparison'

  return (
    <section
      className={`bg-[#121218] py-24 ${isSoarComparison ? 'comparison-section--soar' : ''}`}
    >
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

        <div
          className={
            isSoarComparison
              ? 'comparison-grid comparison-grid--soar mt-10'
              : `mt-10 grid gap-3 ${data.cards.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`
          }
        >
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
              <ul
                className={
                  isSoarComparison
                    ? 'comparison-card-list--soar mt-8 text-center font-[Inter,sans-serif] text-[18px] leading-[1.5] font-medium text-white'
                    : 'mt-10 space-y-5 text-center font-[Inter,sans-serif] text-[16px] leading-[1.5] font-medium text-white'
                }
              >
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {data.redesign && (
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
        )}

        {data.footerLines && data.footerLines.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 max-w-[900px] space-y-2 font-['Inter',sans-serif] text-[16px] leading-[1.65] font-medium text-white"
          >
            {data.footerLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
