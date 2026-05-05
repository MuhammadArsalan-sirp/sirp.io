'use client'

import { motion } from 'framer-motion'

interface HowItWorksVideoProps {
  videoId: string
  heading?: string
}

export function HowItWorksVideo({
  videoId,
  heading = 'The agentic mesh in action',
}: HowItWorksVideoProps) {
  return (
    <section className="bg-[#121218] py-24">
      <div className="container-sirp">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-center font-bold mb-12"
          style={{
            fontSize: '42px',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-[#3a3a4c] mx-auto"
          style={{ aspectRatio: '16 / 9', maxWidth: '900px' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&start=22&autoplay=1&mute=1`}
            title={heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  )
}
