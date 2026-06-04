import type { Metadata } from 'next'
import { SomHero } from '@/sections/security-outcomes-and-metrics/SomHero'
import { SomMetrics } from '@/sections/security-outcomes-and-metrics/SomMetrics'
import { SomAudience } from '@/sections/security-outcomes-and-metrics/SomAudience'
import { SomOutcomes } from '@/sections/security-outcomes-and-metrics/SomOutcomes'
import { SomDeployments } from '@/sections/security-outcomes-and-metrics/SomDeployments'
import { SomMetricsWhy } from '@/sections/security-outcomes-and-metrics/SomMetricsWhy'
import { SomEscalation } from '@/sections/security-outcomes-and-metrics/SomEscalation'
import { SomMeasured } from '@/sections/security-outcomes-and-metrics/SomMeasured'
import { SomSocMeans } from '@/sections/security-outcomes-and-metrics/SomSocMeans'
import { CtaSection } from '@/sections/home/CtaSection'
import './page.css'

export const metadata: Metadata = {
  title: 'Security Outcomes & Metrics',
  description: 'Production data from autonomous SOCs — real metrics on MTTR reduction, analyst hours saved, autonomous actions taken, and measurable security ROI.',
  alternates: { canonical: '/security-outcomes-and-metrics' },
  openGraph: {
    url: '/security-outcomes-and-metrics',
    type: 'website',
    title: 'Security Outcomes & Metrics | SIRP',
    description: '80% faster MTTD. 70% faster MTTR. 90% autonomous actions. Real production data from SIRP deployments.',
  },
}

export default function SecurityOutcomesPage() {
  return (
    <div className="security-outcomes-page">
      <SomHero />
      <SomMetrics />
      <SomAudience />
      <SomOutcomes />
      <SomDeployments />
      <SomMetricsWhy />
      <SomEscalation />
      <SomMeasured />
      <div className="relative overflow-x-hidden overflow-y-visible isolate">
        <div className="pb-[26px]">
          <SomSocMeans />
        </div>
        <CtaSection
          data={{ primaryBtn: { label: 'Get a demo', href: '/request-demo' } }}
          heading={
            <>
              Autonomous security{' '}
              <em className="cta-heading-serif">isn&apos;t theoretical.</em>
            </>
          }
          description="The question isn't whether autonomous SOCs work. The question is whether your current model can keep up."
        />
      </div>
    </div>
  )
}
