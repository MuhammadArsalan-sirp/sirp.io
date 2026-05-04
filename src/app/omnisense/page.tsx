import type { Metadata } from 'next'
import { OmnisenseHero } from '@/components/pages/omnisense/OmnisenseHero'
import { OmnisensePlatform } from '@/components/pages/omnisense/OmnisensePlatform'
import { OmnisenseAgents } from '@/components/pages/omnisense/OmnisenseAgents'
import { OmnisenseAction } from '@/components/pages/omnisense/OmnisenseAction'
import { IntegrationsSection } from '@/components/home/IntegrationsSection'
import { CtaSection } from '@/components/home/CtaSection'
import { OMNISENSE_PAGE_DATA, INTEGRATIONS_DATA, CTA_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'OmniSense™ AI Engine | Security Decision Intelligence',
  description: 'SIRP OmniSense™ delivers a governed Autonomous SOC that continuously detects, decides, and executes response actions within defined policy boundaries.',
}

export default function OmnisensePage() {
  return (
    <>
      <OmnisenseHero data={OMNISENSE_PAGE_DATA.hero} />
      <OmnisensePlatform data={OMNISENSE_PAGE_DATA.platform} />
      <OmnisenseAgents data={OMNISENSE_PAGE_DATA.agents} />
      <OmnisenseAction data={OMNISENSE_PAGE_DATA.action} />
      <IntegrationsSection data={INTEGRATIONS_DATA} />
      <CtaSection data={CTA_DATA} />
    </>
  )
}
