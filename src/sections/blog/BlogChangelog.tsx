'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CHANGELOG_POSTS, BLOG_WHITEPAPER_CTA } from '@/lib/constants/blog'
import './BlogChangelog.css'

export function BlogChangelog() {
  const { text, link } = BLOG_WHITEPAPER_CTA

  return (
    <section className="bg-[#121218] pb-24">
      <div className="container-sirp">

        {/* 2-col changelog grid */}
        <div className="changelog-grid">
          {CHANGELOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="changelog-card">

                {/* Hover arrow */}
                <div className="changelog-card-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Image */}
                <div className="changelog-card-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                {/* Content */}
                <div className="changelog-card-content">
                  <div className="changelog-card-meta">
                    <span className="changelog-card-category">CHANGELOG</span>
                    <span className="changelog-card-date">{post.date}</span>
                  </div>
                  <h3 className="changelog-card-title">{post.title}</h3>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Whitepaper CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="changelog-cta"
        >
          <p className="changelog-cta-text">{text}</p>
          <Link href={link.href} className="changelog-cta-pill">
            <Image src="/images/enterprise-soc/shine.svg" alt="" width={14} height={14} unoptimized />
            {link.label}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
