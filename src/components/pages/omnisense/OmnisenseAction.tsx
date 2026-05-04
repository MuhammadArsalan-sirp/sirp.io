'use client'

import { motion } from 'framer-motion'

/* ─── Types ──────────────────────────────────────────────── */
interface ActionData {
  heading:     string
  description: string
  note1:       string
  note2:       string
  videoId:     string
}

interface OmnisenseActionProps {
  data: ActionData
}

/* ─── Component ──────────────────────────────────────────── */
export function OmnisenseAction({ data }: OmnisenseActionProps) {
  const { heading, description, note1, note2, videoId } = data

  return (
    <section className="py-24" style={{ background: 'linear-gradient(rgb(33, 33, 46) 15%, rgb(25, 25, 36) 21%, rgb(18, 18, 24) 38%)' }}>
      <div className="container-sirp">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-8 py-14"
        >
          {/* Text */}
          <div className="text-center mb-10 max-w-[640px] mx-auto">
            <h2
              className="font-sans font-bold text-white mb-5"
              style={{ fontSize: '60px', lineHeight: '1.1', letterSpacing: '-0.03em' }}
            >
              {heading}
            </h2>
            <p className="font-sans text-white/80 leading-relaxed mb-6" style={{ fontSize: '20px' }}>
              {description}
            </p>
            <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: '20px' }}>{note1}</p>
            <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: '20px' }}>{note2}</p>
          </div>

          {/* YouTube embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden border border-[#3a3a4c] mx-auto"
            style={{ maxWidth: '860px', aspectRatio: '16/9', position: 'relative' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
