'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { BLOG_POSTS } from '@/lib/constants/blog'
import './BlogGrid.css'

const INITIAL_COUNT = 8
const LOAD_MORE_COUNT = 6

export function BlogGrid() {
  const [visible, setVisible] = useState(INITIAL_COUNT)
  const shown = BLOG_POSTS.slice(0, visible)
  const hasMore = visible < BLOG_POSTS.length

  return (
    <section className="bg-[#121218] py-20">
      <div className="container-sirp">

        <div className="blog-grid">
          {shown.map((post, i) => (
            <motion.div
              key={post.id}
              className="blog-grid-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
            >
              <Link href={`/blog/${post.slug}`} className="blog-card">
                {/* Hover arrow */}
                <div className="blog-card-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="blog-card-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="blog-load-more">
          {hasMore && (
            <Button
              variant="secondary"
              onClick={() => setVisible((v) => Math.min(v + LOAD_MORE_COUNT, BLOG_POSTS.length))}
            >
              Load More
            </Button>
          )}
          {visible > INITIAL_COUNT && (
            <Button variant="secondary" onClick={() => setVisible(INITIAL_COUNT)}>
              Show Less
            </Button>
          )}
        </div>

      </div>
    </section>
  )
}
