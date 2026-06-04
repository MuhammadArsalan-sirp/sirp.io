import type { Metadata } from 'next'
import { HeroSection } from '@/sections/home/HeroSection'
import { StatsSection } from '@/sections/home/StatsSection'
import { AutonomousSection } from '@/sections/home/AutonomousSection'
import { FeaturesSection } from '@/sections/home/FeaturesSection'
import { IntelligenceSection } from '@/sections/home/IntelligenceSection'
import { SaraSection } from '@/sections/home/SaraSection'
import { IntegrationsSection } from '@/sections/home/IntegrationsSection'
import { CtaSection } from '@/sections/home/CtaSection'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  HERO_DATA,
  STATS_DATA,
  AUTONOMOUS_DATA,
  FEATURES_DATA,
  INTELLIGENCE_DATA,
  SARA_DATA,
  INTEGRATIONS_DATA,
  CTA_DATA,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Autonomous SOC Platform | AI-Powered Security Operations',
  description: 'SIRP OmniSense™ is the first Autonomous SOC that detects, investigates, and responds at machine speed — eliminating alert fatigue and analyst bottlenecks.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    type: 'website',
    title: 'Autonomous SOC Platform | SIRP',
    description: 'AI-driven triage, investigation, and response — running autonomously at machine speed. No manual playbooks. No alert fatigue.',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/logos/sirp_favicon.svg`,
              },
              sameAs: [
                'https://www.linkedin.com/company/sirp-io',
              ],
            },
          ],
        }}
      />
      <HeroSection data={HERO_DATA} />
      <StatsSection data={STATS_DATA} />
      <AutonomousSection data={AUTONOMOUS_DATA} />
      <FeaturesSection data={FEATURES_DATA} />
      <IntelligenceSection data={INTELLIGENCE_DATA} />
      <SaraSection data={SARA_DATA} />
      <div className="relative overflow-x-clip overflow-y-visible isolate">
        <IntegrationsSection data={INTEGRATIONS_DATA} />
        <CtaSection data={CTA_DATA} />
      </div>
    </>
  )
}
