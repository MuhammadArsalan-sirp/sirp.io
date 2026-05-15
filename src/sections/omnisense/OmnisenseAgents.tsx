'use client'

import { motion } from 'framer-motion'

/* ─── Icons ──────────────────────────────────────────────── */
const icons: Record<string, React.ReactNode> = {
  classification: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  playbook: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  assign: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  header: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  ),
  preprocessor: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  ),
  enrichment: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  analysis: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  remediation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  actions: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
}

/* ─── Types ──────────────────────────────────────────────── */
interface Agent {
  icon:        string
  title:       string
  description: string
}

interface AgentsData {
  heading:     string
  description: string
  items:       readonly Agent[]
}

interface OmnisenseAgentsProps {
  data: AgentsData
}

/* ─── Card ───────────────────────────────────────────────── */
function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div
      className="agent-card-outer relative flex-shrink-0 overflow-hidden"
      style={{ borderRadius: '16px', padding: '1px', width: '260px', height: '320px' }}
    >
      {/* Spinning border */}
      <div className="agent-card-spin" />

      {/* Inner card */}
      <div
        className="agent-card relative flex flex-col overflow-hidden h-full p-5 cursor-default"
        style={{ borderRadius: '15px', background: 'linear-gradient(rgb(0, 0, 0) 0%, rgb(18, 18, 24) 70%)', height: '318px' }}
      >
        {/* Icon */}
        <div
          className="mb-4 flex items-center justify-center rounded-xl text-white"
          style={{
            width: '44px',
            height: '44px',
            background: 'rgba(142,45,255,0.15)',
            border: '1px solid rgba(142,45,255,0.3)',
          }}
        >
          {icons[agent.icon]}
        </div>

        {/* Title */}
        <h4 className="font-sans font-bold text-white mb-2" style={{ fontSize: '15px', lineHeight: '1.3' }}>
          {agent.title}
        </h4>

        {/* Description */}
        <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: '13px' }}>
          {agent.description}
        </p>

        {/* Purple glow — bottom */}
        <div
          className="card-glow absolute bottom-0 left-0 right-0 pointer-events-none rounded-b-[15px]"
        />
      </div>
    </div>
  )
}

/* ─── Component ──────────────────────────────────────────── */
export function OmnisenseAgents({ data }: OmnisenseAgentsProps) {
  const { heading, description, items } = data
  const doubled = [...items, ...items]

  return (
    <section className="py-[50px] md:py-[100px] overflow-hidden" style={{ background: 'linear-gradient(rgb(33, 33, 46) 15%, rgb(25, 25, 36) 21%, rgb(18, 18, 24) 38%)' }}>

      <style>{`
        @keyframes agents-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .agents-track {
          animation: agents-marquee 40s linear infinite;
        }
        .agents-track:has(.agent-card-outer:hover) {
          animation-play-state: paused;
        }

        /* ── spinning border ── */
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .agent-card-spin {
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 330deg,
            rgba(142,45,255,0.5) 345deg,
            rgba(180,120,255,0.9) 355deg,
            transparent 360deg
          );
          animation: border-spin 8s linear infinite;
          z-index: 0;
        }
        .agent-card-outer:hover .agent-card-spin {
          animation-play-state: paused;
        }

        /* ── bottom glow pulse ── */
        @keyframes glow-rise {
          0%   { height: 30%; opacity: 0.5; }
          50%  { height: 55%; opacity: 0.9; }
          100% { height: 30%; opacity: 0.5; }
        }
        @keyframes glow-hover {
          0%   { height: 35%; opacity: 0.8; }
          50%  { height: 65%; opacity: 1; }
          100% { height: 35%; opacity: 0.8; }
        }
        .agent-card .card-glow {
          animation: glow-rise 3s ease-in-out infinite;
          background: linear-gradient(to top, rgba(142,45,255,0.45), rgba(142,45,255,0.1), transparent);
        }
        .agent-card:hover .card-glow {
          animation: glow-hover 1.5s ease-in-out infinite !important;
          animation-play-state: paused !important;
          background: linear-gradient(to top, rgba(255,255,255,0.92), rgba(200,100,255,0.65), rgba(142,45,255,0.2), transparent) !important;
        }
      `}</style>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-sirp text-center mb-10 md:mb-14"
      >
        <h2
          className="font-sans font-bold text-white mb-4"
          style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', lineHeight: '1.08', letterSpacing: '-0.03em' }}
        >
          {heading}
        </h2>
        <p className="font-sans text-white text-base md:text-lg leading-relaxed mx-auto" style={{ maxWidth: '680px' }}>
          {description}
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(18, 18, 24), transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgb(18, 18, 24), transparent)' }} />

        <div className="agents-track flex gap-4 w-max px-4">
          {doubled.map((agent, i) => (
            <AgentCard key={i} agent={agent as Agent} />
          ))}
        </div>
      </div>

    </section>
  )
}
