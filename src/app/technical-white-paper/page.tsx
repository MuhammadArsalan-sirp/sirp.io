import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/layout/PageHeader'
import { WhitePaperBody } from './WhitePaperBody'
import './page.css'

export const metadata: Metadata = {
  title: 'Autonomous SOC Architecture White Paper | SIRP',
  description:
    'Read the technical white paper on SIRP’s Autonomous SOC architecture, AI-native security design, decision pipelines, governance controls, and learning systems.',
}

export default function Page() {
  return (
    <div className="technical-white-paper-page">
      <PageHeader
        heading={
          <>
            An AI-Native Architecture for <em>Autonomous Security Operations</em>
          </>
        }
        subtext={
          <>
            <p className="page-header-subtitle">A Founder&apos;s Technical Perspective</p>
            <p>Faiz Shuja, Founder, Sirp</p>
          </>
        }
      />

      <section className="whitepaper-hero-diagram" aria-label="Architecture diagram">
        <div className="container-sirp whitepaper-hero-diagram-inner">
          <div className="whitepaper-architecture-frame">
            <Image
              src="/images/whitepaper/architecture.png"
              alt="AI-native autonomous security architecture: integrations, reasoning loop, and agentic mesh"
              fill
              className="whitepaper-architecture-img"
              sizes="(max-width: 1320px) 100vw, 1320px"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <WhitePaperBody />
    </div>
  )
}
