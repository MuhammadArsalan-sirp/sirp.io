import type { Metadata } from 'next'
import { HowItWorksHero }     from '@/sections/how-autonomous-soc-works/HowItWorksHero'
import { HowItWorksOverview } from '@/sections/how-autonomous-soc-works/HowItWorksOverview'
import { HowItWorksSteps }    from '@/sections/how-autonomous-soc-works/HowItWorksSteps'
import { HowItWorksVideo }    from '@/sections/how-autonomous-soc-works/HowItWorksVideo'
import { CtaSection }         from '@/sections/home/CtaSection'
import { HOW_AUTONOMOUS_SOC_WORKS_DATA, CTA_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How Autonomous SOC Works | AI-Driven Security Decision Flow',
  description: 'SIRP replaces the broken SOC process with a continuous decision system that ingests, reasons, governs, acts, and learns in real time.',
}

export default function HowAutonomousSocWorksPage() {
  return (
    <>
      <HowItWorksHero     data={HOW_AUTONOMOUS_SOC_WORKS_DATA.hero} />
      <HowItWorksOverview data={HOW_AUTONOMOUS_SOC_WORKS_DATA.overview} />
      <HowItWorksSteps    data={HOW_AUTONOMOUS_SOC_WORKS_DATA.steps.slice(0, 5)} />
      <HowItWorksVideo    videoId="VIeVs8nbM6U" />
      <HowItWorksSteps    data={HOW_AUTONOMOUS_SOC_WORKS_DATA.steps.slice(5)} />
      <CtaSection         data={CTA_DATA} />
    </>
  )
}
