import { SomHero } from '@/sections/security-outcomes-and-metrics/SomHero'
import { SomMetrics } from '@/sections/security-outcomes-and-metrics/SomMetrics'
import { SomAudience } from '@/sections/security-outcomes-and-metrics/SomAudience'
import { SomOutcomes } from '@/sections/security-outcomes-and-metrics/SomOutcomes'
import { SomDeployments } from '@/sections/security-outcomes-and-metrics/SomDeployments'
import { SomMetricsWhy } from '@/sections/security-outcomes-and-metrics/SomMetricsWhy'
import { SomEscalation } from '@/sections/security-outcomes-and-metrics/SomEscalation'
import { SomMeasured } from '@/sections/security-outcomes-and-metrics/SomMeasured'
import { SomSocMeans } from '@/sections/security-outcomes-and-metrics/SomSocMeans'
import { SomCta } from '@/sections/security-outcomes-and-metrics/SomCta'

export const metadata = {
  title: 'Security Outcomes & Metrics | SIRP',
  description:
    'Production data from autonomous SOCs. Real metrics on MTTR, analyst hours, autonomous actions, and security ROI.',
}

export default function SecurityOutcomesPage() {
  return (
    <>
      <SomHero />
      <SomMetrics />
      <SomAudience />
      <SomOutcomes />
      <SomDeployments />
      <SomMetricsWhy />
      <SomEscalation />
      <SomMeasured />
      <SomSocMeans />
      <SomCta />
    </>
  )
}
