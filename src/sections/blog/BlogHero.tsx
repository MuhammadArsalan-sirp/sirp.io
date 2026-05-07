'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_HERO } from '@/lib/constants/blog'
import './BlogHero.css'

export function BlogHero() {
  const { badge, heading, descLine1, descLine2, guideText, guideLink } = BLOG_HERO

  return (
    <section className="pt-36 pb-20 overflow-hidden relative" style={{ background: 'linear-gradient(rgb(37, 37, 52) 0%, rgba(18, 18, 24, 0) 21%), #121218' }}>

      {/* Subtle purple grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(142,45,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(142,45,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-sirp relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="blog-hero-badge">
            <Image src="/images/enterprise-soc/shine.svg" alt="" width={14} height={14} unoptimized />
            {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="blog-hero-heading"
        >
          <span style={{ display: 'block', textAlign: 'center' }}>{heading.line1}</span>
          <span style={{ display: 'block', textAlign: 'center' }}>
            {heading.line2prefix}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              {heading.italic}
            </em>
          </span>
        </motion.h1>

        {/* Description + guide text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="blog-hero-desc-block"
        >
          <p className="blog-hero-desc">
            <span style={{ whiteSpace: 'nowrap' }}>{descLine1}</span><br />
            {descLine2}
          </p>
          <p className="blog-hero-guide-text">{guideText}</p>
        </motion.div>

        {/* Guide pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <Link href={guideLink.href} className="blog-hero-pill">
            <Image src="/images/enterprise-soc/shine.svg" alt="" width={14} height={14} unoptimized />
            {guideLink.label}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
