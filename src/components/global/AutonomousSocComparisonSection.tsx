'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import './AutonomousSocComparisonSection.css'

type ComparisonCard = {
  title: string
  points: readonly string[]
  glow: 'red' | 'yellow' | 'purple'
}

export type AutonomousSocComparisonData = {
  heading: string
  cards: readonly ComparisonCard[]
  redesign?: {
    heading: string
    paragraphs: readonly string[]
  }
  closing?: {
    lines: readonly string[]
    link?: {
      prefix?: string
      label: string
      href: string
    }
  }
}

type AutonomousSocComparisonSectionProps = {
  data: AutonomousSocComparisonData
}

export function AutonomousSocComparisonSection({ data }: AutonomousSocComparisonSectionProps) {
  return (
    <section className="autonomous-soc-comparison-section bg-[#121218] py-24">
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
          className={`mt-10 grid gap-3 items-stretch ${data.cards.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}
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
              <ul className="mt-10 space-y-5 text-center font-['Inter',sans-serif] text-[16px] leading-[1.5] font-medium text-white">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {data.closing && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-12 max-w-[900px] space-y-4 font-['Inter',sans-serif] text-[16px] leading-[1.55] font-medium text-white"
          >
            {data.closing.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {data.closing.link && (
              <p>
                {data.closing.link.prefix ?? 'For a full structural comparison, see: '}
                <Link
                  href={data.closing.link.href}
                  className="text-[#a855f7] underline underline-offset-4 hover:text-white"
                >
                  {data.closing.link.label}
                </Link>
              </p>
            )}
          </motion.div>
        )}

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
      </div>
    </section>
  )
}
