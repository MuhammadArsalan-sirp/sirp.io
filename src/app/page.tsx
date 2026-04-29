import { HeroSection }          from '@/components/home/HeroSection'
import { StatsSection }         from '@/components/home/StatsSection'
import { AutonomousSection }    from '@/components/home/AutonomousSection'
import { FeaturesSection }      from '@/components/home/FeaturesSection'
import { IntelligenceSection }  from '@/components/home/IntelligenceSection'
import { SaraSection }          from '@/components/home/SaraSection'
import { IntegrationsSection }  from '@/components/home/IntegrationsSection'
import { CtaSection }           from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AutonomousSection />
      <FeaturesSection />
      <IntelligenceSection />
      <SaraSection />
      <IntegrationsSection />
      <CtaSection />
    </>
  )
}
