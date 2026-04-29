import { HeroSection }         from '@/components/home/HeroSection'
import { StatsSection }        from '@/components/home/StatsSection'
import { AutonomousSection }   from '@/components/home/AutonomousSection'
import { FeaturesSection }     from '@/components/home/FeaturesSection'
import { IntelligenceSection } from '@/components/home/IntelligenceSection'
import { SaraSection }         from '@/components/home/SaraSection'
import { IntegrationsSection } from '@/components/home/IntegrationsSection'
import { CtaSection }          from '@/components/home/CtaSection'

import {
  HERO_DATA,
  STATS_DATA,
  AUTONOMOUS_DATA,
  FEATURES_DATA,
  INTELLIGENCE_DATA,
  SARA_DATA,
  INTEGRATIONS_DATA,
  CTA_DATA,
} from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <HeroSection         data={HERO_DATA} />
      <StatsSection        data={STATS_DATA} />
      <AutonomousSection   data={AUTONOMOUS_DATA} />
      <FeaturesSection     data={FEATURES_DATA} />
      <IntelligenceSection data={INTELLIGENCE_DATA} />
      <SaraSection         data={SARA_DATA} />
      <IntegrationsSection data={INTEGRATIONS_DATA} />
      <CtaSection          data={CTA_DATA} />
    </>
  )
}
