import { HeroSection } from '@/sections/home/HeroSection'
import { StatsSection } from '@/sections/home/StatsSection'
import { AutonomousSection } from '@/sections/home/AutonomousSection'
import { FeaturesSection } from '@/sections/home/FeaturesSection'
import { IntelligenceSection } from '@/sections/home/IntelligenceSection'
import { SaraSection } from '@/sections/home/SaraSection'
import { IntegrationsSection } from '@/sections/home/IntegrationsSection'
import { CtaSection } from '@/sections/home/CtaSection'
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
      <HeroSection data={HERO_DATA} />
      <StatsSection data={STATS_DATA} />
      <AutonomousSection data={AUTONOMOUS_DATA} />
      <FeaturesSection data={FEATURES_DATA} />
      <IntelligenceSection data={INTELLIGENCE_DATA} />
      <SaraSection data={SARA_DATA} />
      <CtaSection data={CTA_DATA} integrationsData={INTEGRATIONS_DATA} />
    </>
  )
}
